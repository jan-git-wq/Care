const $=id=>document.getElementById(id);
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const philips=sku=>`https://www.philips.de/c-p/${sku.replace('/','_')}/video-babyphone-premium`;
const source=r=>r.platform==='Amazon.de'?DATA.sources.amazon:philips(r.reviewed_sku);
const filtered=()=>DATA.reviews.filter(r=>$('platform').value==='all'||r.platform===$('platform').value);
const fmtDate=s=>new Date(s+'T12:00:00').toLocaleDateString('en-GB',{day:'numeric',month:'short',year:'numeric'});
$('date').textContent=fmtDate(DATA.date);
function dailyChanges(data,platform){
 const day=new Date(data.date+'T12:00:00Z');day.setUTCDate(day.getUTCDate()-1);
 const yesterday=day.toISOString().slice(0,10);
 const platforms=platform==='all'?['Philips.de','Amazon.de','bol.com']:[platform];
 const current=data.ratingHistory?.[data.date],previous=data.ratingHistory?.[yesterday];
 const comparable=platforms.every(p=>current?.[p]?.complete&&previous?.[p]?.complete&&current[p].scope===previous[p].scope);
 const identifiable=comparable&&platforms.every(p=>Array.isArray(current[p].records)&&Array.isArray(previous[p].records));
 return {yesterday,comparable,rows:[5,4,3,2,1].map(star=>({star,
  today:platforms.every(p=>current?.[p]?.complete)?platforms.reduce((sum,p)=>sum+current[p].histogram[star],0):null,
  yesterday:comparable?platforms.reduce((sum,p)=>sum+previous[p].histogram[star],0):null,
  added:identifiable?platforms.reduce((sum,p)=>{const known=new Set(previous[p].records.map(r=>r.id));return sum+current[p].records.filter(r=>r.stars===star&&!known.has(r.id)).length},0):null
 }))};
}
function render(){
 const rows=filtered(),n=rows.length,avg=n?(rows.reduce((a,r)=>a+r.stars,0)/n).toFixed(2):'—';
 const total=$('platform').value==='all';
 const high=rows.filter(r=>r.stars>=4).length,incentivized=rows.filter(r=>r.incentive).length;
 const metrics=[['Combined rating',avg,n?' / 5':'',n?'Arithmetic mean of observed individual stars':'No ratings on verified bol listings'],['Written reviews',n,'',total?`${rows.filter(r=>r.platform==='Philips.de').length} Philips + ${rows.filter(r=>r.platform==='Amazon.de').length} Amazon · deduplicated`:'Reviews in the selected platform'],['Ratings of 4–5 stars',n?Math.round(high/n*100)+'%':'—','',n?`${high} of ${n} observed ratings`:'No rating distribution yet'],['Promotion / Vine',n?Math.round(incentivized/n*100)+'%':'—','',n?`${incentivized} of ${n} written reviews labelled`:'No written reviews to classify']];
 $('overview').innerHTML=metrics.map(([l,v,s,note])=>`<article class="metric"><div class="metric-label">${l==='Combined rating'&&!total?'Selected review average':l}</div><div class="metric-value">${v}<small>${s}</small></div><div class="metric-note">${note}</div></article>`).join('');
 const changes=dailyChanges(DATA,$('platform').value);
 $('change-dates').textContent=`${fmtDate(DATA.date)} vs ${fmtDate(changes.yesterday)} · Hong Kong dates`;
 $('daily-changes').innerHTML=changes.rows.map(r=>`<tr><td>${r.star} ★</td><td>${r.yesterday??'—'}</td><td>${r.today??'—'}</td><td>${r.added===null?'<span class="unavailable">Not available</span>':'+'+r.added}</td></tr>`).join('');
 $('change-note').textContent=changes.comparable?'Added counts rating records first seen since yesterday, using matched review IDs. Edited ratings and removals are not counted as additions.':'Yesterday’s snapshot is not available for the same selected listings. Tracking began on 7 October 2026; additions cannot yet be calculated. A dash means unavailable, not zero.';
 $('theme-base').textContent=`Based on ${n} written reviews`;
 for(const sentiment of ['positive','negative']){
  let themes=DATA.themes.filter(t=>t.sentiment===sentiment).map(t=>({...t,rows:rows.filter(r=>r[sentiment].includes(t.key))})).filter(t=>t.rows.length).sort((a,b)=>b.rows.length-a.rows.length);
  if(sentiment==='negative')themes=themes.filter((t,i)=>i<4||t.rows.length===themes[3]?.rows.length);
  $(sentiment).innerHTML=themes.length?themes.map(t=>{
   const count=t.rows.length,p=t.rows.filter(r=>r.platform==='Philips.de').length,a=count-p;
   const q=t.quote,qr=q&&t.rows.find(r=>r.reviewer===q.reviewer);
   return `<article class="theme ${sentiment}"><button data-theme="${esc(t.key)}" data-sentiment="${sentiment}" aria-label="See ${count} reviews mentioning ${esc(t.label)}"><div class="theme-title"><span>${esc(t.label)}</span><span class="theme-count">${count}<small> / ${n} ↗</small></span></div><div class="bar"><i style="width:${count/n*100}%"></i></div><div class="breakdown">${p} Philips · ${a} Amazon · ${Math.round(count/n*100)}% of selected reviews</div></button>${qr?`<div class="quote"><blockquote>“${esc(q.text)}”</blockquote><div class="translation">English: ${esc(q.english)}</div><div class="attribution">${esc(qr.reviewer)} · ${qr.stars}★ · ${fmtDate(qr.date)} · ${qr.reviewed_sku}<br>${esc(qr.incentive)} · <a href="${source(qr)}" target="_blank" rel="noopener">${qr.platform} source ↗</a></div></div>`:`<div class="quote"><div class="translation">See the coded review list and original source.</div></div>`}</article>`;
  }).join(''):'<div class="empty">No written reviews available for theme analysis.</div>';
 }
 $('distribution-base').textContent=`${n} observed ratings`;
 $('distribution').innerHTML=[5,4,3,2,1].map(stars=>{const count=rows.filter(r=>r.stars===stars).length;return `<div class="rating-row"><span>${stars} ★</span><div class="bar"><i style="width:${n?count/n*100:0}%"></i></div><strong>${count}</strong></div>`}).join('');
}
$('platform-cards').innerHTML=[['Amazon.de','GERMANY','5.0','6 global ratings · 6 written reviews','SCD871/26 · All Vine',DATA.sources.amazon],['Philips.de','GERMANY','4.6','26 ratings · 26 written reviews','Shared across 3 SKUs · All promotional',philips('SCD871/26')],['bol.com','NETHERLANDS','—','No reviews on 2 verified listings','SCD861/26 + SCD871/26',DATA.sources.bol861]].map(([name,country,rating,count,note,url])=>`<article class="platform-card"><div class="platform-top"><h3>${name}</h3><span class="badge">${country}</span></div><div class="platform-score">${rating}<small> / 5</small>${rating!=='—'?'<span class="stars" aria-hidden="true">★★★★★</span>':''}</div><p>${count}</p><div class="platform-bottom"><span>${note}</span><a href="${url}" target="_blank" rel="noopener">View source ↗</a></div></article>`).join('');
$('coverage-body').innerHTML=['SCD861/26','SCD863/26','SCD871/26'].map(sku=>`<tr><td>${sku}<small>Non-connected video monitor</small></td><td>${sku==='SCD871/26'?`<a href="${DATA.sources.amazon}" target="_blank" rel="noopener">5.0 / 5</a><small>6 ratings · SKU confirmed</small>`:'<span class="unverified">Not verified</span>'}</td><td><a href="${philips(sku)}" target="_blank" rel="noopener">4.6 / 5</a><small>26 reviews · same shared pool${sku==='SCD871/26'?' · reviewed SKU':''}</small></td><td>${sku==='SCD863/26'?'<span class="unverified">Not verified</span>':`<a href="${sku==='SCD861/26'?DATA.sources.bol861:DATA.sources.bol871}" target="_blank" rel="noopener">No reviews yet</a><small>No score available</small>`}</td></tr>`).join('');
$('sources').innerHTML=[['Amazon · SCD871',DATA.sources.amazon],...['SCD861/26','SCD863/26','SCD871/26'].map(s=>[`Philips · ${s}`,philips(s)]),['bol · SCD861',DATA.sources.bol861],['bol · SCD871',DATA.sources.bol871]].map(([label,url])=>`<a href="${url}" target="_blank" rel="noopener">${label} ↗</a>`).join('');
$('platform').addEventListener('change',render);
$('themes').addEventListener('click',e=>{const b=e.target.closest('button[data-theme]');if(!b)return;const rows=filtered().filter(r=>r[b.dataset.sentiment].includes(b.dataset.theme));const theme=DATA.themes.find(t=>t.key===b.dataset.theme);$('dialog-title').textContent=theme.label;$('dialog-description').textContent=`${rows.length} of ${filtered().length} selected reviews mention this theme. Each review is counted once.`;$('dialog-reviews').innerHTML=rows.sort((a,b)=>b.date.localeCompare(a.date)).map(r=>`<div class="evidence-row"><div><strong>${esc(r.reviewer)} · ${r.stars}★</strong><small>${fmtDate(r.date)} · ${r.platform} · ${r.reviewed_sku}</small><small>${esc(r.incentive)}</small>${DATA.excerpts?.[r.reviewer]?.[b.dataset.theme]?`<blockquote class="evidence-quote">“${esc(DATA.excerpts[r.reviewer][b.dataset.theme])}”</blockquote><span class="excerpt-label">English translation · short excerpt</span>`:`<p class="quote-unavailable">Quotation unavailable for this review.</p><span class="excerpt-label">Theme recorded in the earlier review snapshot.</span>`}</div><a href="${source(r)}" target="_blank" rel="noopener">Original source ↗</a></div>`).join('');$('evidence').showModal()});
$('close-dialog').addEventListener('click',()=>$('evidence').close());
$('evidence').addEventListener('click',e=>{if(e.target===$('evidence')){const r=e.target.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)e.target.close()}});

document.querySelectorAll('nav a').forEach(a=>a.addEventListener('click',()=>{document.querySelectorAll('nav a').forEach(x=>x.classList.remove('active'));a.classList.add('active')}));
render();

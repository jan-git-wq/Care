const $=id=>document.getElementById(id);
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const philips=sku=>`https://www.philips.de/c-p/${sku.replace('/','_')}/video-babyphone-premium`;
const source=r=>r.platform==='Amazon.de'?DATA.sources.amazon:philips(r.reviewed_sku);
const filtered=()=>DATA.reviews.filter(r=>$('platform').value==='all'||r.platform===$('platform').value);
const fmtDate=s=>new Date(s+'T12:00:00').toLocaleDateString('en-GB',{day:'numeric',month:'short',year:'numeric'});
$('date').textContent=fmtDate(DATA.date);
$('freshness').textContent='Checked '+DATA.check.checked_at_hong_kong.slice(0,16).replace('T',' ')+' HKT. Philips: 28 reviews checked; two newly observed 5-star reviews. Amazon: 5.0/5 from 2 displayed ratings (previously 6); count/scope discrepancy unresolved, six review texts retained from 7 Oct. bol: no reviews on both verified listings.';
function dailyChanges(data,platform){
 const day=new Date(data.date+'T12:00:00Z');day.setUTCDate(day.getUTCDate()-1);
 const yesterday=day.toISOString().slice(0,10);
 const platforms=platform==='all'?['Philips.de','Amazon.de','bol.com']:[platform];
 const current=data.ratingHistory?.[data.date],previous=data.ratingHistory?.[yesterday];
 const comparable=platforms.every(p=>current?.[p]?.complete&&previous?.[p]?.complete&&current[p].scope===previous[p].scope);
 const identifiable=comparable&&platforms.every(p=>Array.isArray(current[p].records)&&Array.isArray(previous[p].records));
 return {yesterday,comparable,rows:[5,4,3,2,1].map(star=>({star,
  today:platforms.every(p=>current?.[p]?.complete)?platforms.reduce((sum,p)=>sum+current[p].histogram[star],0):null,
  yesterday:platforms.every(p=>previous?.[p]?.complete)?platforms.reduce((sum,p)=>sum+previous[p].histogram[star],0):null,
  added:identifiable?platforms.reduce((sum,p)=>{const known=new Set(previous[p].records.map(r=>r.id));return sum+current[p].records.filter(r=>r.stars===star&&!known.has(r.id)).length},0):null
 }))};
}
function render(){
 const rows=filtered(),n=rows.length,avg=n?(rows.reduce((a,r)=>a+r.stars,0)/n).toFixed(2):'—';
 const total=$('platform').value==='all';
 const selected=$('platform').value;
 const cached=total||selected==='Amazon.de';
 const freshness=cached?'Amazon text/stars last read 7 Oct':'Checked 9 Oct';
 const newReviewIds=new Set(DATA.ratingHistory[DATA.date]['Philips.de'].records.filter(r=>!DATA.ratingHistory['2026-10-08']['Philips.de'].records.some(p=>p.id===r.id)).map(r=>r.id));
 const displayMean=total?(Math.round(DATA.check.overall.displayed_mean_estimate*100)/100).toFixed(2):selected==='Philips.de'?'4.6':selected==='Amazon.de'?'5.0':'\u2014';
 const high=rows.filter(r=>r.stars>=4).length,incentivized=rows.filter(r=>r.incentive).length;
 const metrics=[['Combined rating (estimate)',displayMean,n?' / 5':'',total?'30 currently displayed ratings; Amazon count/scope differs':'Current displayed platform score'],['Written reviews analysed',n,'',total?'28 Philips checked + 6 Amazon cached (7 Oct)':selected==='Amazon.de'?'Review text last read 7 Oct 2026':'Review text checked 9 Oct 2026'],['Coded ratings of 4-5 stars',n?Math.round(high/n*100)+'%':'\u2014','',freshness],['Promotion / Vine',n?Math.round(incentivized/n*100)+'%':'\u2014','',n?`${incentivized} of ${n} coded reviews labelled`:'No written reviews to classify']];
 $('overview').innerHTML=metrics.map(([l,v,s,note])=>`<article class="metric"><div class="metric-label">${l==='Combined rating (estimate)'&&!total?'Platform rating':l}</div><div class="metric-value">${v}<small>${s}</small></div><div class="metric-note">${note}</div></article>`).join('');
 const changes=dailyChanges(DATA,$('platform').value);
 $('change-dates').textContent=`${fmtDate(DATA.date)} vs ${fmtDate(changes.yesterday)} · Hong Kong dates`;
 $('daily-changes').innerHTML=changes.rows.map(r=>`<tr><td>${r.star} ★</td><td>${r.yesterday??'—'}</td><td>${r.today??'—'}</td><td>${r.added===null?'<span class="unavailable">Not available</span>':'+'+r.added}</td></tr>`).join('');
 $('change-note').textContent=changes.comparable?'Compared with 8 Oct: '+changes.rows.reduce((s,r)=>s+(r.added||0),0)+' newly observed reviews in the selected verified pool. Review dates may be earlier. Existing edits and removals are not additions.':'Amazon review identities could not be re-read; its displayed count is 2 versus 6 previously, with scope unresolved. Select Philips.de to see two newly observed 5-star reviews, or bol.com for its unchanged zero-review pool. A dash means unavailable.';
 $('theme-base').textContent=`${n} coded reviews; ${freshness}`;
 for(const sentiment of ['positive','negative']){
  let themes=DATA.themes.filter(t=>t.sentiment===sentiment).map(t=>({...t,rows:rows.filter(r=>r[sentiment].includes(t.key))})).filter(t=>t.rows.length).sort((a,b)=>b.rows.length-a.rows.length);
  if(sentiment==='negative')themes=themes.filter((t,i)=>i<4||t.rows.length===themes[3]?.rows.length);
  $(sentiment).innerHTML=themes.length?themes.map(t=>{
   const count=t.rows.length,p=t.rows.filter(r=>r.platform==='Philips.de').length,a=count-p;
   const added=t.rows.filter(r=>newReviewIds.has(r.key)).length;
   const newMentions=total?'Philips +'+added+'; Amazon not reverified':selected==='Amazon.de'?'Not reverified':'+'+added;
   const q=t.quote,qr=q&&t.rows.find(r=>r.reviewer===q.reviewer);
   return `<article class="theme ${sentiment}"><button data-theme="${esc(t.key)}" data-sentiment="${sentiment}" aria-label="See ${count} reviews mentioning ${esc(t.label)}"><div class="theme-title"><span>${esc(t.label)}</span><span class="theme-count">${count}<small> / ${n} ↗</small></span></div><div class="bar"><i style="width:${count/n*100}%"></i></div><div class="breakdown">${p} Philips · ${a} Amazon · ${Math.round(count/n*100)}% of selected reviews<br>New mentions: ${newMentions}</div></button>${qr?`<div class="quote"><blockquote>“${esc(q.text)}”</blockquote><div class="translation">English: ${esc(q.english)}</div><div class="attribution">${esc(qr.reviewer)} · ${qr.stars}★ · ${fmtDate(qr.date)} · ${qr.reviewed_sku}<br>${esc(qr.incentive)} · <a href="${source(qr)}" target="_blank" rel="noopener">${qr.platform} source ↗</a></div></div>`:`<div class="quote"><div class="translation">See the coded review list and original source.</div></div>`}</article>`;
  }).join(''):'<div class="empty">No written reviews available for theme analysis.</div>';
 }
 $('distribution-base').textContent=`${n} coded ratings; ${freshness}`;
 $('distribution').innerHTML=[5,4,3,2,1].map(stars=>{const count=rows.filter(r=>r.stars===stars).length;return `<div class="rating-row"><span>${stars} ★</span><div class="bar"><i style="width:${n?count/n*100:0}%"></i></div><strong>${count}</strong></div>`}).join('');
}
$('platform-cards').innerHTML=[['Amazon.de','GERMANY','5.0','2 ratings displayed · 6 historical texts cached','SCD871/26 · Previously 6 ratings; scope unresolved',DATA.sources.amazon],['Philips.de','GERMANY','4.6','28 ratings · 28 review records checked','Shared across 3 SKUs · +2 newly observed',philips('SCD871/26')],['bol.com','NETHERLANDS','—','No reviews on 2 verified listings','SCD861/26 + SCD871/26',DATA.sources.bol861]].map(([name,country,rating,count,note,url])=>`<article class="platform-card"><div class="platform-top"><h3>${name}</h3><span class="badge">${country}</span></div><div class="platform-score">${rating}<small> / 5</small>${rating!=='—'?'<span class="stars" aria-hidden="true">★★★★★</span>':''}</div><p>${count}</p><div class="platform-bottom"><span>${note}</span><a href="${url}" target="_blank" rel="noopener">View source ↗</a></div></article>`).join('');
$('coverage-body').innerHTML=['SCD861/26','SCD863/26','SCD871/26'].map(sku=>`<tr><td>${sku}<small>Non-connected video monitor</small></td><td>${sku==='SCD871/26'?`<a href="${DATA.sources.amazon}" target="_blank" rel="noopener">5.0 / 5</a><small>2 displayed ratings · previously 6; scope unresolved</small>`:'<span class="unverified">Not verified</span>'}</td><td><a href="${philips(sku)}" target="_blank" rel="noopener">4.6 / 5</a><small>28 reviews · same shared pool${sku==='SCD871/26'?' · reviewed SKU':''}</small></td><td>${sku==='SCD863/26'?'<span class="unverified">Not verified</span>':`<a href="${sku==='SCD861/26'?DATA.sources.bol861:DATA.sources.bol871}" target="_blank" rel="noopener">No reviews yet</a><small>No score available</small>`}</td></tr>`).join('');
$('sources').innerHTML=[['Amazon · SCD871',DATA.sources.amazon],...['SCD861/26','SCD863/26','SCD871/26'].map(s=>[`Philips · ${s}`,philips(s)]),['bol · SCD861',DATA.sources.bol861],['bol · SCD871',DATA.sources.bol871]].map(([label,url])=>`<a href="${url}" target="_blank" rel="noopener">${label} ↗</a>`).join('');
$('platform').addEventListener('change',render);
$('themes').addEventListener('click',e=>{const b=e.target.closest('button[data-theme]');if(!b)return;const rows=filtered().filter(r=>r[b.dataset.sentiment].includes(b.dataset.theme));const theme=DATA.themes.find(t=>t.key===b.dataset.theme);$('dialog-title').textContent=theme.label;$('dialog-description').textContent=`${rows.length} of ${filtered().length} selected reviews mention this theme. Each review is counted once. Amazon excerpts were last verified on 7 October 2026; Philips review records were checked on 9 October 2026.`;$('dialog-reviews').innerHTML=rows.sort((a,b)=>b.date.localeCompare(a.date)).map(r=>`<div class="evidence-row"><div><strong>${esc(r.reviewer)} · ${r.stars}★</strong><small>${fmtDate(r.date)} · ${r.platform} · ${r.reviewed_sku}</small><small>${esc(r.incentive)}</small>${DATA.excerpts?.[r.reviewer]?.[b.dataset.theme]?`<blockquote class="evidence-quote">“${esc(DATA.excerpts[r.reviewer][b.dataset.theme])}”</blockquote><span class="excerpt-label">English translation · short excerpt</span>`:`<p class="quote-unavailable">Quotation unavailable for this review.</p><span class="excerpt-label">Theme recorded in the earlier review snapshot.</span>`}</div><a href="${source(r)}" target="_blank" rel="noopener">Original source ↗</a></div>`).join('');$('evidence').showModal()});
$('close-dialog').addEventListener('click',()=>$('evidence').close());
$('evidence').addEventListener('click',e=>{if(e.target===$('evidence')){const r=e.target.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)e.target.close()}});

document.querySelectorAll('nav a').forEach(a=>a.addEventListener('click',()=>{document.querySelectorAll('nav a').forEach(x=>x.classList.remove('active'));a.classList.add('active')}));
render();

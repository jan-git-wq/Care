const $=id=>document.getElementById(id);
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const philips=sku=>`https://www.philips.de/c-p/${sku.replace('/','_')}/video-babyphone-premium`;
const source=r=>r.platform==='Amazon.de'?DATA.sources.amazon:philips(r.reviewed_sku);
const filtered=()=>DATA.reviews.filter(r=>$('platform').value==='all'||r.platform===$('platform').value);
const fmtDate=s=>new Date(s+'T12:00:00').toLocaleDateString('en-GB',{day:'numeric',month:'short',year:'numeric'});
$('date').textContent=fmtDate(DATA.date);
$('freshness').textContent='Checked '+DATA.check.checked_at_hong_kong.slice(0,16).replace('T',' ')+' HKT. '+DATA.check.freshness;
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
function mentionNote(t){
 const x=DATA.check.new_mentions[t.sentiment+': '+t.key]||{},sel=$('platform').value;
 const notes=[];
 if(sel==='all'||sel==='Philips.de')notes.push('New Philips mentions vs yesterday: +'+(x.Philips||0));
 if(sel==='all'||sel==='Amazon.de')notes.push('Newly observed Amazon mentions since 7 Oct: +'+(x.Amazon||0)+'; daily additions unavailable');
 if(x.corrections)notes.push('Earlier-review coding corrections: +'+x.corrections);
 return notes.join('<br>');
}
function render(){
 const rows=filtered(),n=rows.length,avg=n?(rows.reduce((a,r)=>a+r.stars,0)/n).toFixed(2):'—';
 const total=$('platform').value==='all';
 const selected=$('platform').value;
 const cached=false;
 const freshness='Review text verified '+fmtDate(DATA.date);
 const displayMean=total?'Unavailable':DATA.check.platforms[selected]?.rating?.toFixed(1)||'Unavailable';
 const high=rows.filter(r=>r.stars>=4).length,incentivized=rows.filter(r=>r.incentive).length;
 const observedMean=(Math.round(DATA.check.overall.verified_pool_mean*100)/100).toFixed(2);
 const metrics=[['Combined rating',displayMean,total?'':n?' / 5':'',total?'Full scope incomplete; verified Philips + Amazon: '+observedMean+'/5 from '+n+' ratings':'Current displayed platform score'],['Written reviews analysed',n,'',total?'30 Philips + 10 Amazon; all re-read today':n?'Review text checked '+fmtDate(DATA.date):'SCD861: zero; SCD871: unavailable'],['Ratings of 4-5 stars',n?Math.round(high/n*100)+'%':'Unavailable','',n?'Verified individual review stars':'Incomplete platform coverage'],['Promotion / Vine',n?Math.round(incentivized/n*100)+'%':'Unavailable','',n?incentivized+' of '+n+' reviews labelled':'No readable reviews']];
 $('overview').innerHTML=metrics.map(([l,v,s,note])=>`<article class="metric"><div class="metric-label">${l==='Combined rating'&&!total?'Platform rating':l}</div><div class="metric-value">${v==='Unavailable'?'<span class="unavailable-value">Unavailable</span>':v}<small>${s}</small></div><div class="metric-note">${note}</div></article>`).join('');
 const changes=dailyChanges(DATA,$('platform').value);
 $('change-dates').textContent=`${fmtDate(DATA.date)} vs ${fmtDate(changes.yesterday)} · Hong Kong dates`;
 $('daily-changes').innerHTML=changes.rows.map(r=>`<tr><td>${r.star} ★</td><td>${r.yesterday??'—'}</td><td>${r.today??'—'}</td><td>${r.added===null?'<span class="unavailable">Not available</span>':'+'+r.added}</td></tr>`).join('');
 $('change-note').textContent=changes.comparable?'Added counts use new review identities compared with yesterday. Existing rating edits and removals are excluded.':'Daily additions unavailable for incomplete coverage: Amazon had no readable identity snapshot on 8 Oct; bol SCD871 is blocked today. Philips has a complete comparison. A dash means unavailable, not zero. Amazon has four more ratings in total than yesterday (net count change), and four newly observed IDs since 7 Oct.';
 $('theme-base').textContent=`${n} coded reviews; ${freshness}`;
 for(const sentiment of ['positive','negative']){
  let themes=DATA.themes.filter(t=>t.sentiment===sentiment).map(t=>({...t,rows:rows.filter(r=>r[sentiment].includes(t.key))})).filter(t=>t.rows.length).sort((a,b)=>b.rows.length-a.rows.length);
  if(sentiment==='negative')themes=themes.filter((t,i)=>i<4||t.rows.length===themes[3]?.rows.length);
  $(sentiment).innerHTML=themes.length?themes.map(t=>{
   const count=t.rows.length,p=t.rows.filter(r=>r.platform==='Philips.de').length,a=count-p;
   const q=t.quote,qr=q&&t.rows.find(r=>r.reviewer===q.reviewer);
   return `<article class="theme ${sentiment}"><button data-theme="${esc(t.key)}" data-sentiment="${sentiment}" aria-label="See ${count} reviews mentioning ${esc(t.label)}"><div class="theme-title"><span>${esc(t.label)}</span><span class="theme-count">${count}<small> / ${n} ↗</small></span></div><div class="bar"><i style="width:${count/n*100}%"></i></div><div class="breakdown">${p} Philips · ${a} Amazon · ${Math.round(count/n*100)}% of selected reviews<br>${mentionNote(t)}</div></button>${qr?`<div class="quote"><blockquote>“${esc(q.text)}”</blockquote><div class="translation">English: ${esc(q.english)}</div><div class="attribution">${esc(qr.reviewer)} · ${qr.stars}★ · ${fmtDate(qr.date)} · ${qr.reviewed_sku}<br>${esc(qr.incentive)} · <a href="${source(qr)}" target="_blank" rel="noopener">${qr.platform} source ↗</a></div></div>`:`<div class="quote"><div class="translation">See the coded review list and original source.</div></div>`}</article>`;
  }).join(''):'<div class="empty">No written reviews available for theme analysis.</div>';
 }
 $('distribution-base').textContent=`${n} coded ratings; ${freshness}`;
 $('distribution').innerHTML=[5,4,3,2,1].map(stars=>{const count=rows.filter(r=>r.stars===stars).length;return `<div class="rating-row"><span>${stars} ★</span><div class="bar"><i style="width:${n?count/n*100:0}%"></i></div><strong>${count}</strong></div>`}).join('');
}
$('platform-cards').innerHTML=['Amazon.de','Philips.de','bol.com'].map(name=>{
const p=DATA.check.platforms[name],rating=p.rating?.toFixed(1)||'Unavailable',url=name==='Amazon.de'?DATA.sources.amazon:name==='Philips.de'?philips('SCD871/26'):DATA.sources.bol861;
const count=name==='bol.com'?'SCD861: no reviews; SCD871: unavailable':p.rating_count+' ratings / '+p.written_count+' readable reviews';
const note=name==='bol.com'?'SCD871: zero in earlier 9 Oct 10:26 check (cached)':name==='Philips.de'?'Shared across 3 SKU pages; +4 reviews vs 8 Oct':'SCD871 listing; +4 net ratings vs 8 Oct';
return '<article class="platform-card"><div class="platform-top"><h3>'+name+'</h3></div><div class="platform-score">'+rating+(p.rating?'<small> / 5</small>':'')+'</div><p>'+count+'</p><div class="platform-bottom"><span>'+note+'</span><a href="'+url+'" target="_blank" rel="noopener">View source</a></div></article>'}).join('');
$('coverage-body').innerHTML=['SCD861/26','SCD863/26','SCD871/26'].map(sku=>`<tr><td>${sku}<small>Non-connected video monitor</small></td><td>${sku==='SCD871/26'?`<a href="${DATA.sources.amazon}" target="_blank" rel="noopener">4.9 / 5</a><small>10 ratings · listing SKU confirmed; review SKU may be unknown</small>`:'<span class="unverified">Not verified</span>'}</td><td><a href="${philips(sku)}" target="_blank" rel="noopener">4.7 / 5</a><small>30 reviews · same shared pool${sku==='SCD871/26'?' · reviewed SKU':''}</small></td><td>${sku==='SCD863/26'?'<span class="unverified">Not verified</span>':`<a href="${sku==='SCD861/26'?DATA.sources.bol861:DATA.sources.bol871}" target="_blank" rel="noopener">${sku==='SCD861/26'?'No reviews yet':'Unavailable today'}</a><small>${sku==='SCD861/26'?'Checked 9 Oct':'Cached zero: 9 Oct 10:26'}</small>`}</td></tr>`).join('');
$('sources').innerHTML=[['Amazon · SCD871',DATA.sources.amazon],...['SCD861/26','SCD863/26','SCD871/26'].map(s=>[`Philips · ${s}`,philips(s)]),['bol · SCD861',DATA.sources.bol861],['bol · SCD871',DATA.sources.bol871]].map(([label,url])=>`<a href="${url}" target="_blank" rel="noopener">${label} ↗</a>`).join('');
$('platform').addEventListener('change',render);
$('themes').addEventListener('click',e=>{const b=e.target.closest('button[data-theme]');if(!b)return;const rows=filtered().filter(r=>r[b.dataset.sentiment].includes(b.dataset.theme));const theme=DATA.themes.find(t=>t.key===b.dataset.theme);$('dialog-title').textContent=theme.label;$('dialog-description').textContent=`${rows.length} of ${filtered().length} selected reviews mention this theme. Each review is counted once. All listed excerpts were re-read on 9 October 2026.`;$('dialog-reviews').innerHTML=rows.sort((a,b)=>b.date.localeCompare(a.date)).map(r=>`<div class="evidence-row"><div><strong>${esc(r.reviewer)} · ${r.stars}★</strong><small>${fmtDate(r.date)} · ${r.platform} · ${r.reviewed_sku}</small><small>${esc(r.incentive)}</small>${(DATA.excerpts?.[r.key]||DATA.excerpts?.[r.reviewer])?.[b.dataset.theme]?`<blockquote class="evidence-quote">“${esc((DATA.excerpts[r.key]||DATA.excerpts[r.reviewer])[b.dataset.theme])}”</blockquote><span class="excerpt-label">English translation · short excerpt</span>`:`<p class="quote-unavailable">Quotation unavailable for this review.</p><span class="excerpt-label">Theme recorded in the earlier review snapshot.</span>`}</div><a href="${source(r)}" target="_blank" rel="noopener">Original source ↗</a></div>`).join('');$('evidence').showModal()});
$('close-dialog').addEventListener('click',()=>$('evidence').close());
$('evidence').addEventListener('click',e=>{if(e.target===$('evidence')){const r=e.target.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)e.target.close()}});

document.querySelectorAll('nav a').forEach(a=>a.addEventListener('click',()=>{document.querySelectorAll('nav a').forEach(x=>x.classList.remove('active'));a.classList.add('active')}));
render();

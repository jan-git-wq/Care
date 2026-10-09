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
 const stars=[5,4,3,2,1];
 const hasHistogram=p=>p?.complete&&stars.every(s=>Number.isInteger(p.histogram?.[s]));
 const count=p=>Number.isInteger(p?.rating_count)?p.rating_count:hasHistogram(p)?stars.reduce((n,s)=>n+p.histogram[s],0):null;
 const groups=platforms.map(name=>{
  const now=current?.[name],before=previous?.[name];
  const sameScope=Boolean(now?.scope&&now.scope===before?.scope);
  const comparable=sameScope&&hasHistogram(now)&&hasHistogram(before);
  const identifiable=comparable&&Array.isArray(now.records)&&Array.isArray(before.records);
  const known=new Set((before?.records||[]).map(r=>r.id));
  const todayCount=count(now),yesterdayCount=count(before);
  const saved=before?.cached_star_breakdown;
  const reference=!hasHistogram(before)&&sameScope&&saved?.scope===now.scope&&stars.every(s=>Number.isInteger(saved.histogram?.[s]))?saved:null;
  return {name,comparable,identifiable,todayCount,yesterdayCount,
   referenceDate:reference?.last_verified_date||null,
   net:sameScope&&todayCount!==null&&yesterdayCount!==null?todayCount-yesterdayCount:null,
   rows:stars.map(star=>({star,today:hasHistogram(now)?now.histogram[star]:null,
    yesterday:hasHistogram(before)?before.histogram[star]:null,
    added:identifiable?new Set(now.records.filter(r=>r.stars===star&&!known.has(r.id)).map(r=>r.id)).size:null,
    net:comparable?now.histogram[star]-before.histogram[star]:null,
    savedYesterday:reference?reference.histogram[star]:null,
    changeFromSaved:reference&&hasHistogram(now)?now.histogram[star]-reference.histogram[star]:null}))};
 });
 const counted=groups.filter(g=>g.net!==null);
 const total=counted.length?{names:counted.map(g=>g.name),today:counted.reduce((n,g)=>n+g.todayCount,0),
  yesterday:counted.reduce((n,g)=>n+g.yesterdayCount,0),net:counted.reduce((n,g)=>n+g.net,0),complete:counted.length===groups.length}:null;
 const sum=(field,star)=>groups.every(g=>g.rows[star][field]!==null)?groups.reduce((n,g)=>n+g.rows[star][field],0):null;
 return {yesterday,groups,total,comparable:groups.every(g=>g.comparable),
  rows:stars.map((star,i)=>({star,today:sum('today',i),yesterday:sum('yesterday',i),added:sum('added',i),net:sum('net',i)}))};
}
function combinedChanges(changes){
 const eligible=changes.groups.filter(g=>g.net!==null);
 const groups=eligible.length?eligible:changes.groups;
 const aggregate=(pick)=>{const values=groups.map(pick);return values.length&&values.every(v=>v!==null&&v!==undefined)?values.reduce((a,b)=>a+b,0):null;};
 const cached=groups.filter(g=>g.referenceDate);
 const identifiable=groups.length>0&&groups.every(g=>g.identifiable);
 return {names:groups.map(g=>g.name),cached,identifiable,
  excluded:changes.groups.filter(g=>!groups.includes(g)).map(g=>g.name),
  rows:[5,4,3,2,1].map((star,i)=>{
   const yesterday=aggregate(g=>g.rows[i].yesterday??g.rows[i].savedYesterday);
   const today=aggregate(g=>g.rows[i].today);
   const comparable=groups.every(g=>g.comparable||g.referenceDate);
   return {star,yesterday,today,delta:identifiable?aggregate(g=>g.rows[i].added):comparable&&today!==null&&yesterday!==null?today-yesterday:null};
  })};
}
function renderChanges(changes,selected){
 const signed=n=>n>0?'+'+n:String(n),value=n=>n===null?'&mdash;':n,total=changes.total;
 $('change-dates').textContent=fmtDate(DATA.date)+' vs '+fmtDate(changes.yesterday)+' · Hong Kong dates';
 $('change-summary').innerHTML=total?
  '<div class="change-total"><strong>'+signed(total.net)+'<small> net ratings</small></strong><div>'+total.yesterday+' yesterday &rarr; '+total.today+' today<small>'+esc(total.names.join(' + '))+(total.complete?'':' · partial coverage')+'</small></div></div>':
  '<p class="footnote">A comparable total is unavailable for this selection.</p>';
 let rows,heading,yesterdayHeading='Yesterday',note;
 if(selected==='all'){
  const combined=combinedChanges(changes);
  rows=combined.rows;heading=combined.identifiable?'Added':combined.cached.length?'Change*':'Net change';
  if(combined.cached.length)yesterdayHeading='Yesterday*';
  note=(combined.excluded.length?'Includes '+combined.names.join(' + ')+'. '+combined.excluded.join(', ')+' excluded: incomplete comparable coverage. ':'')+
   (combined.cached.length?'* Saved baseline includes '+combined.cached.map(g=>g.name+' stars last verified '+fmtDate(g.referenceDate)).join('; ')+'. Star changes compare with that saved baseline; they are not confirmed one-day additions.':
    combined.identifiable?'Added counts use new review IDs since yesterday; edits and removals are excluded.':'Net changes can include additions, edits or removals. Actual additions are unavailable without matching review IDs.');
 }else{
  const g=changes.groups[0],usesNet=!g.identifiable&&g.comparable;
  heading=g.referenceDate?'Change*':usesNet?'Net change':'Added';
  yesterdayHeading=g.referenceDate?'Yesterday*':'Yesterday';
  rows=g.rows.map(r=>({star:r.star,yesterday:r.yesterday??r.savedYesterday,today:r.today,delta:g.referenceDate?r.changeFromSaved:usesNet?r.net:r.added}));
  note=g.identifiable?'Added = newly observed review IDs since yesterday. Existing rating edits and removals are excluded.':
   g.referenceDate?'* Saved stars last verified '+fmtDate(g.referenceDate)+'. Yesterday’s total of '+g.yesterdayCount+' was verified. Star changes compare with the saved baseline, not confirmed one-day additions.':
   usesNet?'Net changes may include additions, edits or removals; actual additions are unavailable.':
   'Some star counts or review IDs are unavailable. A dash means unavailable, not zero.';
 }
 $('daily-changes').innerHTML='<div class="table-scroll daily-table"><table aria-label="'+(selected==='all'?'Combined':esc(selected))+' rating counts compared with yesterday"><thead><tr><th>Star</th><th>'+yesterdayHeading+'</th><th>Today</th><th>'+heading+'</th></tr></thead><tbody>'+
  rows.map(r=>'<tr><td>'+r.star+' &#9733;</td><td>'+value(r.yesterday)+'</td><td>'+value(r.today)+'</td><td>'+(r.delta===null?'<span class="unavailable">Unavailable</span>':'<b class="change-number">'+signed(r.delta)+'</b>')+'</td></tr>').join('')+'</tbody></table></div>';
 $('change-note').textContent=note;
}
// Daily snapshot history: no review-posting dates are used to reconstruct past totals.
function ratingTrend(data,platform,range='week'){
 const daysBack={week:7,month:30,year:365}[range]||7;
 const end=new Date(data.date+'T12:00:00Z');
 const windowStart=new Date(end.getTime()-(daysBack-1)*86400000).toISOString().slice(0,10);
 const history=data.ratingHistory||{},dates=Object.keys(history).filter(d=>d<=data.date).sort();
 const start=dates.length&&dates[0]>windowStart?dates[0]:windowStart;
 const platforms=platform==='all'?['Philips.de','Amazon.de']:[platform],stars=[5,4,3,2,1];
 const scopes=Object.fromEntries(platforms.map(p=>[p,history[data.date]?.[p]?.scope]));
 const points=[];
 for(let cursor=new Date(start+'T12:00:00Z');cursor<=end;cursor.setUTCDate(cursor.getUTCDate()+1)){
  const date=cursor.toISOString().slice(0,10),histogram={1:0,2:0,3:0,4:0,5:0},cached=[];
  let available=true;
  for(const p of platforms){
   const entry=history[date]?.[p],reference=entry?.cached_star_breakdown;
   const valid=h=>h&&stars.every(s=>Number.isInteger(h[s])&&h[s]>=0);
   let histogramSource=entry?.complete&&valid(entry.histogram)?entry.histogram:null;
   if(!entry?.scope||entry.scope!==scopes[p]){available=false;continue;}
   if(!histogramSource&&reference?.scope===entry.scope&&valid(reference.histogram)){
    histogramSource=reference.histogram;cached.push(p+' stars last verified '+reference.last_verified_date);
   }
   if(!histogramSource){available=false;continue;}
   for(const s of stars)histogram[s]+=histogramSource[s];
  }
  const total=available?stars.reduce((n,s)=>n+histogram[s],0):null;
  points.push({date,stars:available?histogram:null,total,average:total?Math.round(stars.reduce((n,s)=>n+s*histogram[s],0)*100/total)/100:null,cached});
 }
 return {points,platforms,firstRecorded:dates[0]||null,windowStart,daysBack};
}
// Single-day mode is retrospective review volume by the review's displayed posting date.
function singleDayStarTrend(data,platform,range='week'){
 const daysBack={week:7,month:30,year:365}[range]||7;
 const end=new Date(data.date+'T12:00:00Z');
 const windowStart=new Date(end.getTime()-(daysBack-1)*86400000).toISOString().slice(0,10);
 const platforms=platform==='all'?['Philips.de','Amazon.de']:[platform],seen=new Set();
 const reviews=data.reviews.filter(r=>{
  if(!platforms.includes(r.platform)||!/^\d{4}-\d{2}-\d{2}$/.test(r.date)||r.date>data.date||![1,2,3,4,5].includes(r.stars))return false;
  const key=r.key||[r.platform,r.reviewer,r.date,r.stars].join('|');
  if(seen.has(key))return false;seen.add(key);return true;
 });
 const earliest=reviews.reduce((date,r)=>r.date<date?r.date:date,data.date);
 const start=earliest>windowStart?earliest:windowStart;
 const readable=reviews.length>0;
 const points=[];
 for(let cursor=new Date(start+'T12:00:00Z');cursor<=end;cursor.setUTCDate(cursor.getUTCDate()+1)){
  points.push({date:cursor.toISOString().slice(0,10),stars:readable?{1:0,2:0,3:0,4:0,5:0}:null,total:readable?0:null,cached:[],evidence:'captured reviews by posting date'});
 }
 const byDate=new Map(points.map(p=>[p.date,p]));
 for(const r of reviews){const p=byDate.get(r.date);if(p?.stars){p.stars[r.stars]++;p.total++;}}
 return {points,platforms,daysBack};
}

const hiddenTrendStars=new Set();
function trendLineChart(points,series,{title,average=false,unit='Rating count'}){
 const width=480,height=200,left=34,right=18,top=24,bottom=34;
 const plotHeight=height-top-bottom,plotWidth=width-left-right;
 const maxValue=average?5:Math.max(1,...points.flatMap(p=>series.map(s=>s.value(p)??0)));
 const tickStep=average?1:Math.max(1,Math.ceil(maxValue/4));
 const maximum=average?5:Math.ceil(maxValue/tickStep)*tickStep;
 const minimum=average?1:0;
 const x=i=>left+plotWidth*(points.length===1?.5:i/(points.length-1));
 const y=n=>top+plotHeight-(n-minimum)/(maximum-minimum)*plotHeight;
 const id=average?'average-line':'stars-line';
 let svg='<svg viewBox="0 0 '+width+' '+height+'" role="img" aria-labelledby="'+id+'-title"><title id="'+id+'-title">'+esc(title)+'</title>';
 for(let n=minimum;n<=maximum;n+=tickStep){svg+='<line class="trend-grid" x1="'+left+'" x2="'+(width-right)+'" y1="'+y(n)+'" y2="'+y(n)+'"/><text class="trend-axis" x="'+(left-8)+'" y="'+(y(n)+4)+'" text-anchor="end">'+n+'</text>';}
 svg+='<text class="trend-axis" x="'+left+'" y="12">'+(average?'Average / 5':esc(unit))+'</text>';
 const labelEvery=Math.max(1,Math.ceil((points.length-1)/5));
 points.forEach((p,i)=>{
  if(i%labelEvery===0||i===points.length-1&&i%labelEvery>labelEvery/2){
   const label=new Date(p.date+'T12:00:00Z').toLocaleDateString('en-GB',{day:'numeric',month:'short',timeZone:'UTC'});
   svg+='<text class="trend-axis" x="'+x(i)+'" y="'+(height-12)+'" text-anchor="'+(i===0?'start':i===points.length-1?'end':'middle')+'">'+esc(label)+'</text>';
  }
 });
 for(const s of series){
  points.forEach((p,i)=>{
   const value=s.value(p),prev=i?points[i-1]:null,previousValue=prev?s.value(prev):null;
   if(value===null)return;
   if(previousValue!==null)svg+='<line x1="'+x(i-1)+'" y1="'+y(previousValue)+'" x2="'+x(i)+'" y2="'+y(value)+'" stroke="'+s.colour+'" stroke-width="2.2"'+(p.cached.length||prev.cached.length?' stroke-dasharray="5 4"':s.dash?' stroke-dasharray="'+s.dash+'"':'')+'/>';
   const detail=fmtDate(p.date)+' · '+s.label+': '+(average?value.toFixed(2)+'/5':value)+(p.cached.length?' · cached: '+p.cached.join('; '):p.evidence?' · '+p.evidence:' · verified');
   svg+='<circle tabindex="0" class="line-point" cx="'+x(i)+'" cy="'+y(value)+'" r="'+(s.radius||3.5)+'" fill="'+(p.cached.length?'white':s.colour)+'" stroke="'+s.colour+'" stroke-width="1.7" aria-label="'+esc(detail)+'"><title>'+esc(detail)+'</title></circle>';
   if(average&&points.length<=7)svg+='<text class="trend-total" x="'+x(i)+'" y="'+(y(value)-9)+'" text-anchor="'+(i===0?'start':i===points.length-1?'end':'middle')+'">'+value.toFixed(2)+(p.cached.length?'*':'')+'</text>';
  });
 }
 if(!series.some(s=>points.some(p=>s.value(p)!==null)))svg+='<text class="trend-axis" x="'+width/2+'" y="'+height/2+'" text-anchor="middle">No comparable ratings available</text>';
 return svg+'</svg>';
}
function renderTrend(){
 const platform=$('platform').value,range=$('trend-range').value||'week';
 const trend=ratingTrend(DATA,platform,range),stars=[5,4,3,2,1];
 const single=$('star-trend-mode').value==='single';
 const starTrend=single?singleDayStarTrend(DATA,platform,range):trend;
 const colours={5:'#24745e',4:'#639bcc',3:'#cf9e2f',2:'#cc7750',1:'#a45270'};
 $('trend-base').textContent='Daily snapshots · '+trend.platforms.join(' + ')+' · last '+trend.daysBack+' days';
 $('average-trend').innerHTML=trendLineChart(trend.points,[{label:'Average rating',colour:'#24745e',value:p=>p.average}],{title:'Average rating over time',average:true});
 $('trend-legend').innerHTML=stars.map(s=>'<button type="button" data-trend-star="'+s+'" aria-pressed="'+!hiddenTrendStars.has(s)+'" aria-label="Show '+s+'-star rating trend"><i style="background:'+colours[s]+'"></i>'+s+' ★</button>').join('');
 $('review-trend').innerHTML=trendLineChart(starTrend.points,stars.filter(s=>!hiddenTrendStars.has(s)).map(s=>({label:s+'-star ratings',colour:colours[s],value:p=>p.stars?.[s]??null,radius:2+s*.4,dash:s<=3?s+' 3':null})),{title:single?'Single-day review counts by posting date and star rating':'Accumulated rating counts by snapshot date and star rating',unit:single?'Reviews on this date':'Accumulated ratings'});
 const zeros=stars.filter(s=>starTrend.points.some(p=>p.stars)&&starTrend.points.every(p=>!p.stars||p.stars[s]===0));
 $('trend-zero-note').textContent=zeros.length?zeros.join(', ')+'-star counts remain zero in the selected dates; these lines overlap at zero. Select a star in the legend to hide or show its line.':'Select a star in the legend to hide or show its line.';
 $('star-mode-note').textContent=single?'Single day: captured written reviews on each displayed posting date. Not additions since yesterday’s check. A zero means no captured reviews dated that day; inaccessible reviews are excluded.':'Accumulated: total ratings at each saved snapshot, including any labelled cached baseline.';
 $('star-day-table').hidden=!single;
 $('star-day-body').innerHTML=single?starTrend.points.map(p=>'<tr><td>'+fmtDate(p.date)+'</td>'+stars.map(s=>'<td>'+(p.stars?.[s]??'—')+'</td>').join('')+'<td>'+(p.total??'—')+'</td></tr>').join(''):'';
 $('trend-note').textContent='History starts '+(trend.firstRecorded?fmtDate(trend.firstRecorded):'when the first snapshot is captured')+'. Only recorded dates are plotted; missing snapshots leave gaps. '+(platform==='all'?'Combined trends use Philips + Amazon; bol is excluded from this comparison. ':'')+'Hollow points and dashed segments use cached stars, with the verification date in the point tooltip. Averages are calculated from individual star counts.';
 $('trend-table').hidden=false;
 $('trend-table-body').innerHTML=trend.points.map(p=>'<tr><td>'+fmtDate(p.date)+'</td><td>'+(p.average===null?'—':p.average.toFixed(2))+'</td>'+stars.map(s=>'<td>'+(p.stars?.[s]??'—')+'</td>').join('')+'<td>'+(p.total??'—')+'</td><td>'+(p.cached.length?esc(p.cached.join('; ')):p.total===null?'Unavailable':'Verified')+'</td></tr>').join('');
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
 const high=rows.filter(r=>r.stars>=4).length,incentivized=rows.filter(r=>r.incentive).length;
 const observedMean=(Math.round(DATA.reviews.reduce((sum,r)=>sum+r.stars,0)*100/DATA.reviews.length)/100).toFixed(2);
 const displayMean=total?observedMean:DATA.check.platforms[selected]?.rating?.toFixed(1)||'Unavailable';
 const metrics=[['Combined rating',displayMean,n?' / 5':'',total?n+' verified Philips + Amazon ratings; bol excluded (incomplete coverage)':'Current displayed platform score'],['Written reviews analysed',n,'',total?'30 Philips + 10 Amazon; all re-read today':n?'Review text checked '+fmtDate(DATA.date):'SCD861: zero; SCD871: unavailable'],['Ratings of 4-5 stars',n?Math.round(high/n*100)+'%':'Unavailable','',n?'Verified individual review stars':'Incomplete platform coverage'],['Promotion / Vine',n?Math.round(incentivized/n*100)+'%':'Unavailable','',n?incentivized+' of '+n+' reviews labelled':'No readable reviews']];
 $('overview').innerHTML=metrics.map(([l,v,s,note])=>`<article class="metric"><div class="metric-label">${l==='Combined rating'&&!total?'Platform rating':l}</div><div class="metric-value">${v==='Unavailable'?'<span class="unavailable-value">Unavailable</span>':v}<small>${s}</small></div><div class="metric-note">${note}</div></article>`).join('');
 const changes=dailyChanges(DATA,$('platform').value);
 renderChanges(changes,selected);
 renderTrend();
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
 $('distribution-base').textContent=selected==='bol.com'?'Incomplete coverage; star counts unavailable':`${n} coded ratings; ${freshness}`;
 $('distribution').innerHTML=[5,4,3,2,1].map(stars=>{const count=rows.filter(r=>r.stars===stars).length;return `<div class="rating-row"><span>${stars} ★</span><div class="bar"><i style="width:${n?count/n*100:0}%"></i></div><strong>${selected==='bol.com'?'Unavailable':count}</strong></div>`}).join('');
}
$('platform-cards').innerHTML=['Amazon.de','Philips.de','bol.com'].map(name=>{
const p=DATA.check.platforms[name],rating=p.rating?.toFixed(1)||'Unavailable',url=name==='Amazon.de'?DATA.sources.amazon:name==='Philips.de'?philips('SCD871/26'):DATA.sources.bol861;
const count=name==='bol.com'?'SCD861: no reviews; SCD871: unavailable':p.rating_count+' ratings / '+p.written_count+' readable reviews';
const note=name==='bol.com'?'SCD871: zero in earlier 9 Oct 10:26 check (cached)':name==='Philips.de'?'Shared across 3 SKU pages; +4 reviews vs 8 Oct':'SCD871 listing; +4 net ratings vs 8 Oct';
return '<article class="platform-card"><div class="platform-top"><h3>'+name+'</h3></div><div class="platform-score">'+rating+(p.rating?'<small> / 5</small>':'')+'</div><p>'+count+'</p><div class="platform-bottom"><span>'+note+'</span><a href="'+url+'" target="_blank" rel="noopener">View source</a></div></article>'}).join('');
$('coverage-body').innerHTML=['SCD861/26','SCD863/26','SCD871/26'].map(sku=>`<tr><td>${sku}<small>Non-connected video monitor</small></td><td>${sku==='SCD871/26'?`<a href="${DATA.sources.amazon}" target="_blank" rel="noopener">4.9 / 5</a><small>10 ratings · listing SKU confirmed; review SKU may be unknown</small>`:'<span class="unverified">Not verified</span>'}</td><td><a href="${philips(sku)}" target="_blank" rel="noopener">4.7 / 5</a><small>30 reviews · same shared pool${sku==='SCD871/26'?' · reviewed SKU':''}</small></td><td>${sku==='SCD863/26'?'<span class="unverified">Not verified</span>':`<a href="${sku==='SCD861/26'?DATA.sources.bol861:DATA.sources.bol871}" target="_blank" rel="noopener">${sku==='SCD861/26'?'No reviews yet':'Unavailable today'}</a><small>${sku==='SCD861/26'?'Checked 9 Oct':'Cached zero: 9 Oct 10:26'}</small>`}</td></tr>`).join('');
$('sources').innerHTML=[['Amazon · SCD871',DATA.sources.amazon],...['SCD861/26','SCD863/26','SCD871/26'].map(s=>[`Philips · ${s}`,philips(s)]),['bol · SCD861',DATA.sources.bol861],['bol · SCD871',DATA.sources.bol871]].map(([label,url])=>`<a href="${url}" target="_blank" rel="noopener">${label} ↗</a>`).join('');
$('platform').addEventListener('change',render);
$('trend-range').addEventListener('change',renderTrend);
$('star-trend-mode').addEventListener('change',renderTrend);
$('trend-legend').addEventListener('click',event=>{const b=event.target.closest('button[data-trend-star]');if(!b)return;const star=Number(b.dataset.trendStar);hiddenTrendStars.has(star)?hiddenTrendStars.delete(star):hiddenTrendStars.add(star);renderTrend();});
$('themes').addEventListener('click',e=>{const b=e.target.closest('button[data-theme]');if(!b)return;const rows=filtered().filter(r=>r[b.dataset.sentiment].includes(b.dataset.theme));const theme=DATA.themes.find(t=>t.key===b.dataset.theme);$('dialog-title').textContent=theme.label;$('dialog-description').textContent=`${rows.length} of ${filtered().length} selected reviews mention this theme. Each review is counted once. All listed excerpts were re-read on 9 October 2026.`;$('dialog-reviews').innerHTML=rows.sort((a,b)=>b.date.localeCompare(a.date)).map(r=>`<div class="evidence-row"><div><strong>${esc(r.reviewer)} · ${r.stars}★</strong><small>${fmtDate(r.date)} · ${r.platform} · ${r.reviewed_sku}</small><small>${esc(r.incentive)}</small>${(DATA.excerpts?.[r.key]||DATA.excerpts?.[r.reviewer])?.[b.dataset.theme]?`<blockquote class="evidence-quote">“${esc((DATA.excerpts[r.key]||DATA.excerpts[r.reviewer])[b.dataset.theme])}”</blockquote><span class="excerpt-label">English translation · short excerpt</span>`:`<p class="quote-unavailable">Quotation unavailable for this review.</p><span class="excerpt-label">Theme recorded in the earlier review snapshot.</span>`}</div><a href="${source(r)}" target="_blank" rel="noopener">Original source ↗</a></div>`).join('');$('evidence').showModal()});
$('close-dialog').addEventListener('click',()=>$('evidence').close());
$('evidence').addEventListener('click',e=>{if(e.target===$('evidence')){const r=e.target.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)e.target.close()}});

document.querySelectorAll('nav a').forEach(a=>a.addEventListener('click',()=>{document.querySelectorAll('nav a').forEach(x=>x.classList.remove('active'));a.classList.add('active')}));
render();

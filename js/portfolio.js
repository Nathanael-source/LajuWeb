document.addEventListener('lw:ready',()=>{
const root=document.body.dataset.root||'',g=document.getElementById('portfolio');
if(g){const N=6,T=LW_PORTFOLIO.length,info=document.getElementById('pf-info'),more=document.getElementById('pf-more');let n=N;
const card=p=>`<article class="pcard"><div class="shot"><img src="${root+p.img}" alt="${p.judul}" loading="lazy" onerror="this.remove()"></div><div class="pbody"><h3>${p.judul}</h3><p>${p.kategori}</p><a class="btn hot sm" href="${p.url}" target="_blank" rel="noopener">Lihat Website</a></div></article>`;
const draw=()=>{g.innerHTML=LW_PORTFOLIO.slice(0,n).map(card).join('');info.textContent=`Menampilkan ${Math.min(n,T)} dari ${T} website`;more.hidden=n>=T};
more.onclick=()=>{n+=N;draw()};draw();}
const q=document.getElementById('faq');
if(q)q.innerHTML=LW_FAQ.map(i=>`<details><summary>${i.q}</summary><p>${i.a}</p></details>`).join('');
const s=document.getElementById('testimonials');
if(s)s.innerHTML=LW_TESTIMONIALS.map(i=>`<blockquote class="card"><p>${i.teks}</p><b>${i.nama}</b></blockquote>`).join('');});

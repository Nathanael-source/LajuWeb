(async()=>{
const root=document.body.dataset.root||'';
for(const el of document.querySelectorAll('[data-include]')){
 try{const r=await fetch(root+'components/'+el.dataset.include+'.html');
 el.innerHTML=(await r.text()).replaceAll('{{root}}',root);}catch(e){el.textContent='Jalankan lewat server: npm start'}}
document.dispatchEvent(new Event('lw:ready'));})();

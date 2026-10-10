document.addEventListener('lw:ready',()=>{
const t=document.getElementById('pricing-grid');if(!t)return;
t.innerHTML=LW_SERVICES.map(s=>`<article class="card ${s.pop?'pop':''}"><h3>${s.nama}</h3><div class="price">${s.harga}</div><ul>${s.fitur.map(f=>`<li>${f}</li>`).join('')}</ul><a class="btn" href="#" data-wa="Halo LajuWeb, saya tertarik paket ${s.nama}">Pilih paket</a></article>`).join('');});

const WA_NUMBER='+6281212539450'; // ganti dengan nomor WhatsApp Anda
const waLink=t=>`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(t)}`;
document.addEventListener('lw:ready',()=>{
document.querySelectorAll('[data-wa]').forEach(a=>a.href=waLink(a.dataset.wa));
const f=document.getElementById('kontak-form');
if(f)f.onsubmit=e=>{e.preventDefault();const d=new FormData(f);
open(waLink(`Halo LajuWeb, saya ${d.get('nama')}. Perusahaan: ${d.get('perusahaan')}, email: ${d.get('email')}, WA: ${d.get('wa')}. Kebutuhan: ${d.get('layanan')}. ${d.get('pesan')}`),'_blank')};});

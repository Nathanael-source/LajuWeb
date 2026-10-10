document.addEventListener('lw:ready',()=>{
const b=document.querySelector('.burger'),u=document.querySelector('.nav ul');
if(!b)return;b.onclick=()=>{const o=u.classList.toggle('open');b.setAttribute('aria-expanded',o)};
document.querySelectorAll('.nav a').forEach(a=>{if(a.href===location.href)a.classList.add('on')});});

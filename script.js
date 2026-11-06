const screens=[...document.querySelectorAll('.screen')];
function show(id){
  screens.forEach(s=>s.classList.toggle('active',s.id===id));
  window.scrollTo({top:0,behavior:'smooth'});
}
document.querySelectorAll('[data-next]').forEach(btn=>btn.addEventListener('click',()=>show(btn.dataset.next)));
document.getElementById('giftButton').addEventListener('click',()=>{
  document.getElementById('giftButton').classList.add('open');
  document.getElementById('giftContinue').classList.remove('hidden');
});
document.getElementById('envelope').addEventListener('click',()=>{
  document.getElementById('letterCard').classList.remove('hidden');
  document.getElementById('letterContinue').classList.remove('hidden');
  document.getElementById('envelope').classList.add('hidden');
});
document.getElementById('replay').addEventListener('click',()=>{
  const audio=document.getElementById('voiceNote'); audio.pause(); audio.currentTime=0;
  document.getElementById('giftButton').classList.remove('open');
  document.getElementById('giftContinue').classList.add('hidden');
  document.getElementById('letterCard').classList.add('hidden');
  document.getElementById('letterContinue').classList.add('hidden');
  document.getElementById('envelope').classList.remove('hidden');
  show('welcome');
});
// Decorative floating hearts
const layer=document.querySelector('.sparkles');
for(let i=0;i<18;i++){
  const heart=document.createElement('span'); heart.textContent='♡';
  heart.style.cssText=`position:fixed;left:${Math.random()*100}%;top:${Math.random()*100}%;color:#eaa1b4;opacity:.25;font-size:${12+Math.random()*20}px;pointer-events:none;animation:float ${7+Math.random()*8}s ease-in-out infinite alternate;z-index:-1`;
  layer.appendChild(heart);
}
const style=document.createElement('style');style.textContent='@keyframes float{from{transform:translateY(0) rotate(-15deg)}to{transform:translateY(-35px) rotate(20deg)}}';document.head.appendChild(style);

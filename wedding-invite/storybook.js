(()=>{
'use strict';
// Load the preserved cinematic wedding experience first.
const core=document.createElement('script');
core.src='storybook-core.js?v=1';
core.defer=true;
document.head.appendChild(core);

const VIDEO_ID='KNZH-emehxA'; // Shania Twain — You're Still The One (official)
let playerFrame=null;
let playing=false;

function stopLegacyMedia(){
  document.querySelectorAll('audio,video').forEach(m=>{try{m.pause();m.currentTime=0}catch(e){}});
  document.querySelectorAll('iframe').forEach(f=>{
    if(f===playerFrame) return;
    const s=(f.src||'').toLowerCase();
    if(s.includes('youtube')||s.includes('youtu.be')||s.includes('soundcloud')||s.includes('spotify')){
      try{f.contentWindow?.postMessage(JSON.stringify({event:'command',func:'pauseVideo',args:[]}), '*')}catch(e){}
      f.remove();
    }
  });
}

function ensurePlayer(){
  if(playerFrame) return playerFrame;
  playerFrame=document.createElement('iframe');
  playerFrame.id='weddingMusicFrame';
  playerFrame.title="You're Still The One — Shania Twain";
  playerFrame.allow='autoplay; encrypted-media';
  playerFrame.referrerPolicy='strict-origin-when-cross-origin';
  playerFrame.src=`https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&controls=0&loop=1&playlist=${VIDEO_ID}&playsinline=1&rel=0&modestbranding=1&enablejsapi=1`;
  Object.assign(playerFrame.style,{position:'fixed',width:'1px',height:'1px',left:'-9999px',bottom:'-9999px',border:'0',opacity:'0',pointerEvents:'none'});
  document.body.appendChild(playerFrame);
  return playerFrame;
}

function playWeddingSong(){
  stopLegacyMedia();
  const f=ensurePlayer();
  if(!f.isConnected) document.body.appendChild(f);
  if(!f.src.includes(VIDEO_ID)) f.src=`https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&controls=0&loop=1&playlist=${VIDEO_ID}&playsinline=1&rel=0&modestbranding=1&enablejsapi=1`;
  setTimeout(()=>{try{f.contentWindow?.postMessage(JSON.stringify({event:'command',func:'playVideo',args:[]}), '*')}catch(e){}},350);
  playing=true;
  syncButton();
}
function pauseWeddingSong(){
  if(playerFrame){try{playerFrame.contentWindow?.postMessage(JSON.stringify({event:'command',func:'pauseVideo',args:[]}), '*')}catch(e){}}
  playing=false;syncButton();
}
function syncButton(){
  const btn=[...document.querySelectorAll('.nav button,button')].find(b=>/playing|music|sound|pause/i.test((b.textContent||'').trim()) && !b.classList.contains('fe-seal') && !b.classList.contains('seal'));
  if(btn){btn.textContent=playing?'♪ Playing':'♪ Music';btn.setAttribute('aria-label',playing?'Pause music':'Play music');btn.dataset.weddingMusic='1';}
}

function bind(){
  // The intentional seal tap is the ideal mobile-safe moment to start audio.
  document.addEventListener('click',e=>{
    const seal=e.target.closest?.('.fe-seal,.seal');
    if(seal){playWeddingSong();return;}
    const btn=e.target.closest?.('button');
    if(btn && (btn.dataset.weddingMusic==='1'||/playing|music|sound/i.test((btn.textContent||'').trim()))){
      e.preventDefault();e.stopImmediatePropagation();
      playing?pauseWeddingSong():playWeddingSong();
    }
  },true);
  const obs=new MutationObserver(syncButton);obs.observe(document.documentElement,{subtree:true,childList:true,characterData:true});
  syncButton();
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',bind,{once:true});else bind();
})();
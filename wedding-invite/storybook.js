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
let fxRunning=false;

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
  setTimeout(()=>{try{f.contentWindow?.postMessage(JSON.stringify({event:'command',func:'playVideo',args:[]}), '*')}catch(e){}},300);
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

function addLuxuryOpeningCSS(){
  if(document.getElementById('luxurySealOpeningCSS')) return;
  const style=document.createElement('style');
  style.id='luxurySealOpeningCSS';
  style.textContent=`
#fullEnvelopeLanding{background:radial-gradient(circle at 50% 35%,#123960 0%,#082746 46%,#04182e 100%)!important}
#fullEnvelopeLanding:after{content:"";position:absolute;inset:0;z-index:1;pointer-events:none;background:radial-gradient(circle at 50% 58%,rgba(214,174,101,.08),transparent 22%),linear-gradient(180deg,rgba(255,255,255,.025),transparent 28%,rgba(0,0,0,.12));mix-blend-mode:screen}
.fe-title{top:3.2vh!important}.fe-title small{font-size:clamp(8px,1.9vw,12px)!important;letter-spacing:.42em!important}.fe-title h1{font-size:clamp(48px,11.8vw,92px)!important;letter-spacing:-.025em!important;margin:1.5vh 0 .8vh!important;text-shadow:0 6px 26px #0008!important}.fe-title .rule{position:relative;width:min(48vw,330px)!important;margin:1.55vh auto!important}.fe-title .rule:after{content:"♡";position:absolute;left:50%;top:50%;transform:translate(-50%,-51%);padding:0 11px;background:#0a2c50;color:#e0ba78;font:400 27px/1 'Cormorant Garamond',serif;text-shadow:0 0 14px #e8bd7455}.fe-title p{font-size:clamp(7px,1.8vw,11px)!important;letter-spacing:.31em!important}
.fe-lux-watermark{position:absolute;z-index:6;left:50%;top:38%;transform:translate(-50%,-50%);font:500 clamp(120px,29vw,310px)/.8 'Cormorant Garamond',serif;letter-spacing:-.08em;color:rgba(232,199,139,.045);text-shadow:0 0 42px rgba(219,178,104,.025);pointer-events:none;white-space:nowrap;transition:opacity 1s ease,filter 1.2s ease}.fe-lux-watermark i{font-style:normal;font-size:.42em;margin:0 .03em}
.fe-floral-field{position:absolute;inset:0;z-index:7;pointer-events:none;overflow:hidden;transition:opacity 1.2s ease}.fe-bloom,.fe-leaf{position:absolute;color:rgba(206,167,99,.16);text-shadow:0 0 10px rgba(221,176,92,.04);filter:drop-shadow(0 6px 10px rgba(0,0,0,.18));transition:color 1.2s ease,text-shadow 1.2s ease,filter 1.2s ease,transform 1.5s cubic-bezier(.16,1,.3,1)}.fe-bloom{font-family:Georgia,serif;font-size:clamp(88px,19vw,190px);line-height:.8}.fe-bloom:before{content:"✿"}.fe-leaf{font-family:'Cormorant Garamond',serif;font-size:clamp(74px,16vw,150px);line-height:.8}.fe-leaf:before{content:"❧"}.fe-bloom.b1{left:-5vw;top:21vh;transform:rotate(-12deg)}.fe-bloom.b2{right:-6vw;top:29vh;transform:rotate(14deg)}.fe-bloom.b3{left:7vw;bottom:12vh;transform:rotate(18deg) scale(.82)}.fe-bloom.b4{right:4vw;bottom:10vh;transform:rotate(-17deg) scale(.92)}.fe-leaf.l1{left:4vw;top:38vh;transform:rotate(-31deg)}.fe-leaf.l2{right:3vw;top:42vh;transform:scaleX(-1) rotate(-28deg)}.fe-leaf.l3{left:25vw;bottom:27vh;transform:rotate(28deg) scale(.74)}.fe-leaf.l4{right:23vw;bottom:25vh;transform:scaleX(-1) rotate(27deg) scale(.74)}
.fe-gold-vines{position:absolute;inset:0;z-index:8;pointer-events:none;opacity:.38;transition:opacity 1.2s ease,filter 1.2s ease}.fe-gold-vines:before,.fe-gold-vines:after{content:"";position:absolute;top:22vh;width:34vw;height:43vh;border:1px solid rgba(214,172,98,.25);border-bottom-color:transparent;border-radius:52% 48% 50% 50%;filter:drop-shadow(0 0 4px transparent);transition:border-color 1s ease,filter 1.2s ease}.fe-gold-vines:before{left:-13vw;transform:rotate(15deg)}.fe-gold-vines:after{right:-13vw;transform:scaleX(-1) rotate(15deg)}
.fe-next-chapter{position:absolute;z-index:10;left:50%;bottom:4vh;transform:translateX(-50%);text-align:center;color:#d8b77d;pointer-events:none;font:500 clamp(7px,1.5vw,10px)/1.8 'DM Sans',sans-serif;letter-spacing:.37em;text-transform:uppercase;white-space:nowrap;opacity:.84;transition:opacity .8s ease,transform 1s ease}.fe-next-chapter:before{content:"";display:block;width:1px;height:55px;margin:0 auto 8px;background:linear-gradient(transparent,#d4ad6b 45%,#d4ad6b)}.fe-next-chapter:after{content:"♡";display:block;margin:2px auto 2px;font:400 23px/1 'Cormorant Garamond',serif;color:#e2bd78;letter-spacing:0}
.fe-seal{top:60%!important;box-shadow:inset 0 0 0 8px rgba(255,237,197,.14),inset 0 0 0 18px rgba(57,34,11,.25),0 28px 55px #0009,0 0 0 1px rgba(246,214,157,.24)!important;transition:opacity .8s ease,transform 1s ease,box-shadow .7s ease,filter .7s ease!important}.fe-seal:after{top:calc(100% + 38px)!important}.fe-seal-spiral{position:absolute;z-index:13;left:50%;top:60%;width:clamp(158px,27vw,250px);height:clamp(158px,27vw,250px);transform:translate(-50%,-50%) scale(.68);border-radius:50%;opacity:0;pointer-events:none;background:conic-gradient(from 0deg,transparent 0 10%,#ffda8f 13%,transparent 19% 34%,#fff0bb 38%,transparent 45% 62%,#e7b85f 67%,transparent 74% 100%);filter:blur(.4px) drop-shadow(0 0 10px #f2c167) drop-shadow(0 0 26px #e9ac4380);mask:radial-gradient(circle,transparent 0 58%,#000 60% 64%,transparent 67%);-webkit-mask:radial-gradient(circle,transparent 0 58%,#000 60% 64%,transparent 67%)}
.fe-seal-spiral:before,.fe-seal-spiral:after{content:"";position:absolute;inset:-15%;border:1px solid rgba(255,215,137,.5);border-radius:50%;opacity:.7}.fe-seal-spiral:after{inset:11%;border-color:rgba(255,236,187,.65)}
.fe-light-burst{position:absolute;z-index:12;left:50%;top:60%;width:16px;height:16px;transform:translate(-50%,-50%) scale(.2);border-radius:50%;opacity:0;pointer-events:none;background:#fff6cf;box-shadow:0 0 24px #fff5cc,0 0 70px #ffd980,0 0 150px #e6a743;transition:opacity .4s ease,transform .9s cubic-bezier(.16,1,.3,1)}
.fe-seam-light{position:absolute;inset:0;z-index:9;pointer-events:none;opacity:0;transition:opacity .7s ease}.fe-seam-light:before,.fe-seam-light:after{content:"";position:absolute;top:0;bottom:0;width:2px;background:linear-gradient(transparent,#f6d688 30%,#fff2b7 54%,#d89f42 74%,transparent);filter:drop-shadow(0 0 5px #efc66f) drop-shadow(0 0 12px #df9f37)}.fe-seam-light:before{left:23%;transform:rotate(-39deg);transform-origin:50% 58%}.fe-seam-light:after{right:23%;transform:rotate(39deg);transform-origin:50% 58%}
#fullEnvelopeLanding.preopen-glow .fe-seal{filter:brightness(1.38) saturate(1.18);box-shadow:inset 0 0 0 8px rgba(255,247,216,.25),inset 0 0 0 18px rgba(87,49,11,.18),0 28px 60px #0008,0 0 25px #ffd97e,0 0 68px #d99834!important}
#fullEnvelopeLanding.preopen-glow .fe-seal-spiral{opacity:1;animation:goldSpiral 1.55s cubic-bezier(.2,.7,.25,1) both}
#fullEnvelopeLanding.preopen-glow .fe-light-burst{opacity:.92;transform:translate(-50%,-50%) scale(8)}
#fullEnvelopeLanding.preopen-glow .fe-seam-light{opacity:1;animation:seamPulse 1.4s ease both}
#fullEnvelopeLanding.preopen-glow .fe-bloom,#fullEnvelopeLanding.preopen-glow .fe-leaf{color:rgba(243,194,103,.62);text-shadow:0 0 7px #f5cc7d,0 0 22px #dd9f4188;filter:drop-shadow(0 0 9px #e5ad4b88);transform:scale(1.035)}
#fullEnvelopeLanding.preopen-glow .fe-bloom.b1{transform:rotate(-12deg) scale(1.04)}#fullEnvelopeLanding.preopen-glow .fe-bloom.b2{transform:rotate(14deg) scale(1.04)}#fullEnvelopeLanding.preopen-glow .fe-bloom.b3{transform:rotate(18deg) scale(.86)}#fullEnvelopeLanding.preopen-glow .fe-bloom.b4{transform:rotate(-17deg) scale(.96)}
#fullEnvelopeLanding.preopen-glow .fe-leaf.l1{transform:rotate(-31deg) scale(1.04)}#fullEnvelopeLanding.preopen-glow .fe-leaf.l2{transform:scaleX(-1) rotate(-28deg) scale(1.04)}#fullEnvelopeLanding.preopen-glow .fe-leaf.l3{transform:rotate(28deg) scale(.78)}#fullEnvelopeLanding.preopen-glow .fe-leaf.l4{transform:scaleX(-1) rotate(27deg) scale(.78)}
#fullEnvelopeLanding.preopen-glow .fe-gold-vines{opacity:.95;filter:drop-shadow(0 0 8px #e5ad4d)}#fullEnvelopeLanding.preopen-glow .fe-gold-vines:before,#fullEnvelopeLanding.preopen-glow .fe-gold-vines:after{border-color:rgba(250,205,119,.72);border-bottom-color:transparent;filter:drop-shadow(0 0 5px #eab755)}#fullEnvelopeLanding.preopen-glow .fe-lux-watermark{color:rgba(241,203,133,.12);filter:drop-shadow(0 0 17px #e4a84e70)}
#fullEnvelopeLanding.preopen-flash:before{animation:openingFlash .9s ease both}
#fullEnvelopeLanding.opening .fe-floral-field,#fullEnvelopeLanding.opening .fe-gold-vines,#fullEnvelopeLanding.opening .fe-lux-watermark,#fullEnvelopeLanding.opening .fe-next-chapter,#fullEnvelopeLanding.opening .fe-seal-spiral,#fullEnvelopeLanding.opening .fe-seam-light{opacity:0!important}
@keyframes goldSpiral{0%{transform:translate(-50%,-50%) scale(.58) rotate(-40deg);opacity:0}18%{opacity:1}72%{transform:translate(-50%,-50%) scale(1.08) rotate(300deg);opacity:1}100%{transform:translate(-50%,-50%) scale(1.35) rotate(460deg);opacity:0}}
@keyframes seamPulse{0%{opacity:0;filter:brightness(.4)}35%{opacity:1;filter:brightness(1.8)}100%{opacity:.75;filter:brightness(1)}}
@keyframes openingFlash{0%{background:radial-gradient(circle at 50% 60%,rgba(255,240,190,0),transparent 5%)}45%{background:radial-gradient(circle at 50% 60%,rgba(255,243,202,.62),rgba(239,188,89,.17) 20%,transparent 58%)}100%{background:radial-gradient(circle at 50% 60%,rgba(255,240,190,0),transparent 62%)}}
@media(max-width:600px){.fe-title{top:3.3vh!important}.fe-title h1{font-size:clamp(43px,12.3vw,58px)!important}.fe-bloom{font-size:clamp(76px,22vw,120px)}.fe-leaf{font-size:clamp(64px,19vw,105px)}.fe-bloom.b1{left:-10vw;top:24vh}.fe-bloom.b2{right:-11vw;top:31vh}.fe-bloom.b3{left:1vw;bottom:16vh}.fe-bloom.b4{right:-1vw;bottom:14vh}.fe-leaf.l1{left:-2vw;top:42vh}.fe-leaf.l2{right:-3vw;top:45vh}.fe-next-chapter{bottom:2.8vh}.fe-next-chapter:before{height:40px}.fe-seal-spiral{width:185px;height:185px}.fe-lux-watermark{top:42%;font-size:38vw}}
@media(max-height:730px){.fe-next-chapter{display:none}.fe-title{top:2.2vh!important}.fe-title h1{margin:1vh 0 .3vh!important}.fe-title .rule{margin:.8vh auto!important}.fe-title p{margin:.1vh 0!important}}
`;
  document.head.appendChild(style);
}

function enhanceLanding(){
  const landing=document.getElementById('fullEnvelopeLanding');
  if(!landing || landing.dataset.luxuryEnhanced==='1') return false;
  landing.dataset.luxuryEnhanced='1';
  landing.insertAdjacentHTML('beforeend',`
    <div class="fe-lux-watermark">M<i>&amp;</i>P</div>
    <div class="fe-gold-vines"></div>
    <div class="fe-floral-field" aria-hidden="true">
      <i class="fe-bloom b1"></i><i class="fe-bloom b2"></i><i class="fe-bloom b3"></i><i class="fe-bloom b4"></i>
      <i class="fe-leaf l1"></i><i class="fe-leaf l2"></i><i class="fe-leaf l3"></i><i class="fe-leaf l4"></i>
    </div>
    <div class="fe-seam-light"></div>
    <div class="fe-seal-spiral"></div>
    <div class="fe-light-burst"></div>
    <div class="fe-next-chapter">THE NEXT CHAPTER<br>BEGINS SOON</div>
  `);
  return true;
}

function runSealPrelude(seal){
  const landing=seal.closest('#fullEnvelopeLanding')||document.getElementById('fullEnvelopeLanding');
  if(!landing){seal.dataset.fxPass='1';seal.click();return;}
  fxRunning=true;
  landing.classList.add('preopen-glow');
  if(navigator.vibrate) try{navigator.vibrate([18,35,25])}catch(e){}
  setTimeout(()=>landing.classList.add('preopen-flash'),1050);
  setTimeout(()=>{
    landing.classList.remove('preopen-glow');
    seal.dataset.fxPass='1';
    seal.click();
  },1750);
  setTimeout(()=>{fxRunning=false},2400);
}

function bind(){
  addLuxuryOpeningCSS();
  enhanceLanding();
  const landingObserver=new MutationObserver(()=>enhanceLanding());
  landingObserver.observe(document.documentElement,{subtree:true,childList:true});

  // Capture the intentional seal tap: music begins immediately, then the light ceremony plays,
  // and only after that is the original envelope-open handler allowed to run.
  document.addEventListener('click',e=>{
    const seal=e.target.closest?.('.fe-seal,.seal');
    if(seal){
      if(seal.dataset.fxPass==='1'){
        delete seal.dataset.fxPass;
        return;
      }
      e.preventDefault();
      e.stopPropagation();
      e.stopImmediatePropagation();
      if(!playing) playWeddingSong();
      if(!fxRunning) runSealPrelude(seal);
      return;
    }
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
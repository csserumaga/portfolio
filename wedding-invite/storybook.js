(()=>{
'use strict';
const core=document.createElement('script');
core.src='storybook-core.js?v=2';
core.defer=true;
document.head.appendChild(core);

const VIDEO_ID='KNZH-emehxA';
let musicFrame=null,playing=false,opened=false;
function ensureMusic(){if(musicFrame)return musicFrame;musicFrame=document.createElement('iframe');musicFrame.id='weddingMusicFrame';musicFrame.title="You're Still The One — Shania Twain";musicFrame.allow='autoplay; encrypted-media';musicFrame.src=`https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&controls=0&loop=1&playlist=${VIDEO_ID}&playsinline=1&rel=0&modestbranding=1&enablejsapi=1`;Object.assign(musicFrame.style,{position:'fixed',width:'1px',height:'1px',left:'-9999px',bottom:'-9999px',border:'0',opacity:'0'});document.body.appendChild(musicFrame);return musicFrame}
function playMusic(){const f=ensureMusic();setTimeout(()=>{try{f.contentWindow?.postMessage(JSON.stringify({event:'command',func:'playVideo',args:[]}), '*')}catch(e){}},250);playing=true;syncMusic()}
function pauseMusic(){try{musicFrame?.contentWindow?.postMessage(JSON.stringify({event:'command',func:'pauseVideo',args:[]}), '*')}catch(e){}playing=false;syncMusic()}
function syncMusic(){const b=[...document.querySelectorAll('button')].find(x=>/playing|music|sound/i.test(x.textContent||''));if(b&&!b.id.includes('luxurySeal')){b.textContent=playing?'♪ Playing':'♪ Music';b.dataset.weddingMusic='1'}}
function css(){if(document.getElementById('exactLuxuryLandingCSS'))return;const s=document.createElement('style');s.id='exactLuxuryLandingCSS';s.textContent=`
#referenceLandingOverlay{position:fixed;inset:0;z-index:5000;background:#041426 url('luxury-envelope.svg?v=2') center center/cover no-repeat;overflow:hidden;transition:opacity 1.25s ease,filter 1.25s ease;isolation:isolate}
#referenceLandingOverlay:before{content:"";position:absolute;inset:0;background:radial-gradient(circle at 50% 53%,rgba(255,211,113,.04),transparent 24%);pointer-events:none;transition:background 1.2s ease}
#referenceLandingOverlay:after{content:"";position:absolute;inset:0;pointer-events:none;background-image:radial-gradient(circle,#fff 0 1.2px,transparent 1.8px);background-size:190px 190px;opacity:.16;animation:driftDust 14s linear infinite}
#luxurySealHotspot{position:absolute;z-index:8;left:50%;top:53%;width:min(29vw,190px);aspect-ratio:1;transform:translate(-50%,-50%);border:0;border-radius:50%;background:transparent;cursor:pointer;touch-action:manipulation;-webkit-tap-highlight-color:transparent}
#luxurySealHotspot:before{content:"";position:absolute;inset:-26%;border-radius:50%;opacity:0;background:conic-gradient(from 0deg,transparent 0 12%,#ffd77f 17%,transparent 24% 40%,#fff0b3 46%,transparent 54% 70%,#e5a63c 76%,transparent 85%);filter:drop-shadow(0 0 8px #ffd06a) drop-shadow(0 0 22px #e9a33f);mask:radial-gradient(circle,transparent 0 58%,#000 60% 64%,transparent 67%);-webkit-mask:radial-gradient(circle,transparent 0 58%,#000 60% 64%,transparent 67%)}
#luxurySealHotspot:after{content:"";position:absolute;inset:10%;border-radius:50%;opacity:0;background:rgba(255,239,188,.8);box-shadow:0 0 28px #fff1bd,0 0 75px #ffd06e,0 0 150px #d88d27}
#referenceLandingOverlay.ignite #luxurySealHotspot:before{opacity:1;animation:sealSpiral 2s cubic-bezier(.2,.7,.2,1) both}
#referenceLandingOverlay.ignite #luxurySealHotspot:after{animation:sealCore 1.6s ease both}
#referenceLandingOverlay.ignite{filter:brightness(1.12) saturate(1.08)}
#referenceLandingOverlay.ignite:before{background:radial-gradient(circle at 50% 53%,rgba(255,234,174,.36),rgba(224,164,67,.12) 18%,transparent 44%)}
#referenceLandingOverlay.opening{animation:goldWash 1.25s ease both}
#referenceLandingOverlay.leave{opacity:0;filter:brightness(1.35) blur(2px);pointer-events:none}
.goldRay{position:absolute;z-index:7;left:50%;top:53%;height:2px;width:0;background:linear-gradient(90deg,#fff3bd,#f2bb56,transparent);transform-origin:left center;filter:drop-shadow(0 0 6px #f8c866);opacity:0}.ignite .goldRay{animation:rayOut 1.25s .28s ease forwards}.goldRay.r1{transform:rotate(-31deg)}.goldRay.r2{transform:rotate(31deg)}.goldRay.r3{transform:rotate(145deg)}.goldRay.r4{transform:rotate(215deg)}
.goldSpark{position:absolute;z-index:7;width:5px;height:5px;border-radius:50%;background:#ffe6a2;box-shadow:0 0 10px #ffd56f;opacity:0}.ignite .goldSpark{animation:sparkFloat 1.8s var(--d) ease-out forwards}
@keyframes sealSpiral{0%{transform:rotate(-60deg) scale(.55);opacity:0}18%{opacity:1}78%{transform:rotate(350deg) scale(1.15);opacity:1}100%{transform:rotate(520deg) scale(1.45);opacity:0}}
@keyframes sealCore{0%{opacity:0;transform:scale(.4)}35%{opacity:.88;transform:scale(.9)}100%{opacity:0;transform:scale(2.7)}}
@keyframes rayOut{0%{width:0;opacity:0}25%{opacity:1}100%{width:78vw;opacity:0}}
@keyframes sparkFloat{0%{opacity:0;transform:translate(0,0) scale(.3)}25%{opacity:1}100%{opacity:0;transform:translate(var(--x),var(--y)) scale(1.3)}}
@keyframes goldWash{0%{box-shadow:inset 0 0 0 0 rgba(255,232,173,0)}50%{box-shadow:inset 0 0 180px 55px rgba(255,223,149,.38)}100%{box-shadow:inset 0 0 0 0 rgba(255,232,173,0)}}
@keyframes driftDust{to{background-position:90px 160px}}
@media(max-width:600px){#referenceLandingOverlay{background-size:cover;background-position:center}#luxurySealHotspot{top:53.1%;width:31vw}}
`;
document.head.appendChild(s)}
function buildOverlay(){if(document.getElementById('referenceLandingOverlay'))return;css();const o=document.createElement('div');o.id='referenceLandingOverlay';o.setAttribute('aria-label','Dr Martin and Pearl private wedding invitation');o.innerHTML='<button id="luxurySealHotspot" aria-label="Tap to open the invitation"></button><i class="goldRay r1"></i><i class="goldRay r2"></i><i class="goldRay r3"></i><i class="goldRay r4"></i>';
for(let i=0;i<18;i++){const sp=document.createElement('b');sp.className='goldSpark';sp.style.left=(45+Math.random()*10)+'%';sp.style.top=(49+Math.random()*8)+'%';sp.style.setProperty('--x',(Math.random()*320-160)+'px');sp.style.setProperty('--y',(Math.random()*360-180)+'px');sp.style.setProperty('--d',(Math.random()*.45)+'s');o.appendChild(sp)}
document.body.appendChild(o);document.body.style.overflow='hidden';o.querySelector('#luxurySealHotspot').addEventListener('click',()=>openSequence(o),{once:true})}
function openSequence(o){if(opened)return;opened=true;playMusic();o.classList.add('ignite');setTimeout(()=>o.classList.add('opening'),900);setTimeout(()=>{const real=document.querySelector('#fullEnvelopeLanding .fe-seal,#fullEnvelopeLanding .seal,.fe-seal,.seal');if(real)real.click()},1850);setTimeout(()=>o.classList.add('leave'),3000);setTimeout(()=>{o.remove();document.body.style.overflow='';},4400)}
function bind(){buildOverlay();document.addEventListener('click',e=>{const b=e.target.closest?.('button');if(b&&b.dataset.weddingMusic==='1'){e.preventDefault();playing?pauseMusic():playMusic()}},true);new MutationObserver(syncMusic).observe(document.documentElement,{subtree:true,childList:true,characterData:true});syncMusic()}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',bind,{once:true});else bind();
})();
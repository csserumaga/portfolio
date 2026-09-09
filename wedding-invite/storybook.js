(()=>{
  const q=(s,r=document)=>r.querySelector(s);
  const qa=(s,r=document)=>[...r.querySelectorAll(s)];

  function installLanding(){
    if(document.getElementById('fullEnvelopeLanding')) return;
    const chapterImages=qa('.chapter img').slice(0,5).map(i=>i.currentSrc||i.src).filter(Boolean);
    const style=document.createElement('style');
    style.id='fullEnvelopeLandingStyle';
    style.textContent=`
#fullEnvelopeLanding{position:fixed;inset:0;z-index:1000;width:100vw;height:100dvh;min-height:100svh;overflow:hidden;background:#082746;color:#f4dfb3;font-family:'DM Sans',sans-serif;perspective:1800px;isolation:isolate}
#fullEnvelopeLanding:before{content:"";position:absolute;inset:0;background:radial-gradient(circle at 50% 38%,rgba(47,96,144,.32),transparent 44%),repeating-linear-gradient(135deg,rgba(255,255,255,.02) 0 1px,transparent 1px 9px);pointer-events:none}
.fe-title{position:absolute;z-index:7;top:5.5vh;left:7vw;right:7vw;text-align:center;pointer-events:none;transition:.7s ease}.fe-title small{display:block;font-size:clamp(7px,1.7vw,11px);letter-spacing:.38em;color:#d9bb84}.fe-title h1{margin:2.2vh 0 1.2vh;font:500 clamp(44px,11vw,84px)/.86 'Cormorant Garamond',serif;letter-spacing:-.035em;color:#f7e8c9;text-shadow:0 8px 25px rgba(0,0,0,.35)}.fe-title .rule{width:min(36vw,220px);height:1px;margin:2vh auto;background:linear-gradient(90deg,transparent,#d5b36f,transparent)}.fe-title p{margin:0;font-size:clamp(8px,2.1vw,12px);line-height:1.65;letter-spacing:.28em;text-transform:uppercase;color:#e2c792}.fe-sub{margin-top:1.2vh!important;font-size:clamp(5px,1.35vw,8px)!important;letter-spacing:.32em!important;color:#b89b67!important;opacity:.85}
.fe-flap,.fe-left,.fe-right,.fe-bottom{position:absolute;background-color:#0b3157;background-image:radial-gradient(circle at 20% 22%,rgba(218,184,121,.04) 0 1px,transparent 1.6px),repeating-linear-gradient(135deg,rgba(255,255,255,.018) 0 1px,transparent 1px 9px),linear-gradient(145deg,#123f70,#0a2d51 60%,#061a31);box-shadow:inset 0 0 0 1px rgba(219,184,122,.08);will-change:transform;transition:transform 1.25s cubic-bezier(.16,1,.3,1),opacity .8s ease}
.fe-flap{z-index:5;left:0;right:0;top:0;height:66%;clip-path:polygon(0 0,50% 88%,100% 0);transform-origin:50% 0;background-image:radial-gradient(circle at 20% 14%,rgba(222,190,131,.07),transparent 23%),repeating-linear-gradient(135deg,rgba(255,255,255,.018) 0 1px,transparent 1px 9px),linear-gradient(165deg,#154574,#0a2f54 67%,#061a31);filter:drop-shadow(0 20px 28px rgba(0,0,0,.32))}.fe-flap:after{content:"";position:absolute;left:0;right:0;bottom:0;height:1px;background:linear-gradient(90deg,transparent,#c8a466 15%,#f1d79c 50%,#c8a466 85%,transparent)}
.fe-left{z-index:3;left:0;bottom:0;width:74%;height:67%;clip-path:polygon(0 0,100% 61%,100% 100%,0 100%)}.fe-right{z-index:3;right:0;bottom:0;width:74%;height:67%;clip-path:polygon(0 61%,100% 0,100% 100%,0 100%)}.fe-bottom{z-index:4;left:0;right:0;bottom:0;height:51%;clip-path:polygon(0 100%,50% 0,100% 100%);background-image:repeating-linear-gradient(135deg,rgba(255,255,255,.018) 0 1px,transparent 1px 9px),linear-gradient(165deg,#10385f,#071f3b)}
.fe-botanical{position:absolute;z-index:6;color:#caa96c;opacity:.32;font:400 clamp(80px,20vw,180px)/1 'Cormorant Garamond',serif;pointer-events:none}.fe-b1{left:-4vw;top:-2vh;transform:rotate(-22deg)}.fe-b2{right:-4vw;bottom:0;transform:rotate(155deg)}
.fe-seal{position:absolute;z-index:12;left:50%;top:60%;width:clamp(116px,19vw,168px);height:clamp(116px,19vw,168px);transform:translate(-50%,-50%);border-radius:50%;border:2px solid rgba(245,216,161,.48);display:grid;place-items:center;background:radial-gradient(circle at 34% 27%,#e1be76,#a97a36 36%,#76501f 64%,#4b3011);box-shadow:inset 0 0 0 8px rgba(255,237,197,.11),inset 0 0 0 18px rgba(57,34,11,.18),0 28px 55px rgba(0,0,0,.5),0 0 0 1px rgba(255,224,164,.22);color:#f9e4bb;font:500 clamp(28px,4.6vw,42px) 'Cormorant Garamond',serif;letter-spacing:.08em;cursor:pointer;-webkit-tap-highlight-color:transparent;transition:.5s ease}.fe-seal:before{content:"";position:absolute;inset:-16px;border:1px solid rgba(224,190,127,.48);border-radius:50%;animation:fePulse 2.4s ease-in-out infinite}.fe-seal:after{content:"TAP TO OPEN";position:absolute;top:calc(100% + 34px);left:50%;transform:translateX(-50%);white-space:nowrap;font:600 clamp(8px,1.6vw,12px) 'DM Sans',sans-serif;letter-spacing:.35em;color:#d9bc84}@keyframes fePulse{50%{transform:scale(1.12);opacity:.9}0%,100%{transform:scale(.95);opacity:.35}}
#fullEnvelopeLanding.opening .fe-flap{transform:rotateX(178deg)}#fullEnvelopeLanding.opening .fe-seal{opacity:0;transform:translate(-50%,-50%) scale(.8)}#fullEnvelopeLanding.opening .fe-title{opacity:0;transform:translateY(-24px)}#fullEnvelopeLanding.opening .fe-left{transform:translateX(-14%)}#fullEnvelopeLanding.opening .fe-right{transform:translateX(14%)}#fullEnvelopeLanding.opening .fe-bottom{transform:translateY(16%)}
.fe-prologue{position:absolute;inset:0;z-index:30;background:#06111b;opacity:0;pointer-events:none;transition:opacity .85s ease;overflow:hidden}.prologue-on .fe-prologue{opacity:1;pointer-events:auto}.fe-prologue:after{content:"";position:absolute;inset:0;background:radial-gradient(circle at 50% 46%,transparent 0 23%,rgba(3,9,15,.22) 55%,rgba(3,9,15,.78) 100%);z-index:3;pointer-events:none}.fe-photo{position:absolute;inset:-4%;background-position:center;background-size:cover;opacity:0;filter:saturate(.82) brightness(.45);transform:scale(1.12);transition:opacity 1.5s ease,transform 5.4s ease,filter 2s ease}.fe-photo.show{opacity:.7;transform:scale(1.02);filter:saturate(.9) brightness(.55)}.fe-photo.exit{opacity:0;transform:scale(.96)}
.fe-story{position:absolute;z-index:8;inset:0;display:grid;place-items:center;text-align:center;padding:8vh 8vw}.fe-line{position:absolute;left:7vw;right:7vw;top:50%;transform:translateY(-50%) scale(.92);opacity:0;color:#fff7e8;text-shadow:0 8px 32px rgba(0,0,0,.7);font:500 clamp(44px,10vw,92px)/.96 'Cormorant Garamond',serif;letter-spacing:-.025em;transition:opacity .8s ease,transform 1.15s cubic-bezier(.16,1,.3,1)}.fe-line.show{opacity:1;transform:translateY(-50%) scale(1)}.fe-line.hide{opacity:0;transform:translateY(-56%) scale(1.03)}.fe-line small{display:block;margin-top:18px;font:500 clamp(8px,1.8vw,12px) 'DM Sans',sans-serif;letter-spacing:.28em;text-transform:uppercase;color:#ddbd84}.fe-line.invited{font-size:clamp(58px,13vw,118px);color:#f5dfb7}.fe-line.invited small{font-size:clamp(9px,2vw,13px);letter-spacing:.34em}
.fe-rose{position:absolute;z-index:7;width:clamp(28px,7vw,66px);height:clamp(28px,7vw,66px);opacity:0;transform:scale(.05) rotate(var(--r));transition:opacity .55s ease,transform 1.2s cubic-bezier(.16,1,.3,1);filter:drop-shadow(0 8px 14px rgba(0,0,0,.28));pointer-events:none}.fe-rose:before{content:"✿";display:block;font-size:100%;line-height:1;color:#d9b4ad;text-shadow:0 0 12px rgba(255,222,214,.25)}.fe-rose.bloom{opacity:.9;transform:scale(1) rotate(var(--r))}.fe-rose.fade{opacity:0;transform:scale(1.22) rotate(calc(var(--r) + 18deg))}
.fe-petal{position:absolute;z-index:7;top:-8vh;color:#e9c7c1;font-size:clamp(10px,2.8vw,22px);opacity:0;animation:petalFall var(--d) linear forwards;pointer-events:none}@keyframes petalFall{0%{opacity:0;transform:translate3d(0,-8vh,0) rotate(0deg)}10%{opacity:.72}100%{opacity:0;transform:translate3d(var(--x),112vh,0) rotate(420deg)}}
#fullEnvelopeLanding.leaving{opacity:0;transform:scale(1.025);transition:opacity 1s ease,transform 1.15s ease;pointer-events:none}
@media(max-width:760px){.fe-title{top:4.5vh;left:5vw;right:5vw}.fe-title h1{font-size:clamp(42px,12vw,62px)}.fe-flap{height:67%}.fe-left,.fe-right{height:68%;width:78%}.fe-bottom{height:52%}.fe-seal{top:61%;width:124px;height:124px;font-size:31px}.fe-story{padding:7vh 6vw}.fe-line{left:6vw;right:6vw}}
@media(max-width:430px){.fe-title{top:3.6vh}.fe-title small{font-size:7px}.fe-title h1{font-size:43px}.fe-title p{font-size:8px}.fe-seal{top:61.5%;width:112px;height:112px;font-size:29px}.fe-seal:after{top:calc(100% + 28px);font-size:8px}.fe-line{font-size:43px}.fe-line.invited{font-size:64px}}
@media(max-height:700px){.fe-title{top:2.8vh}.fe-title h1{font-size:38px;margin:1.3vh 0}.fe-title .rule{margin:1.2vh auto}.fe-title p{font-size:7px}.fe-sub{margin-top:.6vh!important}.fe-seal{top:62%;width:96px;height:96px;font-size:26px}.fe-seal:after{top:calc(100% + 22px)}}
@media(prefers-reduced-motion:reduce){.fe-photo,.fe-line,.fe-rose,.fe-flap,.fe-left,.fe-right,.fe-bottom{transition-duration:.25s!important}.fe-petal{display:none}}
`;
    document.head.appendChild(style);

    const landing=document.createElement('div');
    landing.id='fullEnvelopeLanding';
    landing.innerHTML=`<div class="fe-title"><small>A PRIVATE INVITATION</small><h1>Dr Martin &amp; Pearl</h1><div class="rule"></div><p>Some things are simply meant to be</p><p class="fe-sub">LOVE · FAITH · A BEAUTIFUL FUTURE</p></div><div class="fe-botanical fe-b1">❧</div><div class="fe-botanical fe-b2">❧</div><div class="fe-flap"></div><div class="fe-left"></div><div class="fe-right"></div><div class="fe-bottom"></div><button class="fe-seal" aria-label="Open invitation">M&amp;P</button><div class="fe-prologue"><div class="fe-photos"></div><div class="fe-story"></div><div class="fe-roses"></div></div>`;
    document.body.appendChild(landing);

    const photos=landing.querySelector('.fe-photos');
    chapterImages.forEach((src,i)=>{const d=document.createElement('div');d.className='fe-photo';d.style.backgroundImage=`url("${src}")`;d.dataset.i=i;photos.appendChild(d)});
    const photoEls=qa('.fe-photo',landing);
    const story=landing.querySelector('.fe-story');
    const lines=[
      ['What is love?','Perhaps it begins quietly.'],
      ['A glance that stays.','A hand that feels like home.'],
      ['Two lives choosing one another.','Again. And again.'],
      ['Until forever no longer feels far away.','It feels like us.'],
      ['You are invited.','22 · 12 · 2026']
    ];
    lines.forEach((x,i)=>{const d=document.createElement('div');d.className='fe-line'+(i===lines.length-1?' invited':'');d.innerHTML=`${x[0]}<small>${x[1]}</small>`;story.appendChild(d)});
    const lineEls=qa('.fe-line',landing);

    function bloomRoses(){
      const roseLayer=landing.querySelector('.fe-roses');
      for(let i=0;i<20;i++){
        const r=document.createElement('span');r.className='fe-rose';r.style.left=(Math.random()*94-2)+'vw';r.style.top=(8+Math.random()*82)+'vh';r.style.setProperty('--r',(Math.random()*70-35)+'deg');roseLayer.appendChild(r);setTimeout(()=>r.classList.add('bloom'),80+i*55);setTimeout(()=>r.classList.add('fade'),4300+i*20);setTimeout(()=>r.remove(),6000)
      }
      for(let i=0;i<26;i++){
        const p=document.createElement('span');p.className='fe-petal';p.textContent='•';p.style.left=(Math.random()*100)+'vw';p.style.setProperty('--x',(Math.random()*160-80)+'px');p.style.setProperty('--d',(4.2+Math.random()*3.8)+'s');p.style.animationDelay=(Math.random()*2)+'s';roseLayer.appendChild(p);setTimeout(()=>p.remove(),9000)
      }
    }

    let timers=[];
    function later(fn,ms){const t=setTimeout(fn,ms);timers.push(t);return t}
    function runPrologue(){
      landing.classList.add('opening');
      const underlying=q('.intro .seal');
      if(underlying) underlying.click();
      later(()=>landing.classList.add('prologue-on'),850);
      later(bloomRoses,1150);
      const marks=[1450,3600,5750,7900,10100];
      marks.forEach((at,i)=>{
        later(()=>{
          lineEls.forEach((l,j)=>{l.classList.toggle('show',j===i);if(j<i)l.classList.add('hide')});
          if(photoEls.length){photoEls.forEach((p,j)=>{p.classList.remove('show');if(j<i)p.classList.add('exit')});const p=photoEls[i%photoEls.length];p.classList.remove('exit');p.classList.add('show')}
          if(i===2) bloomRoses();
        },at)
      });
      later(()=>{landing.classList.add('leaving')},12600);
      later(()=>{landing.remove();const intro=q('.intro');if(intro){intro.style.display='none'}document.body.classList.remove('lock');q('.site')?.classList.add('ready');window.scrollTo({top:0,behavior:'auto'})},13700);
    }
    landing.querySelector('.fe-seal').addEventListener('click',runPrologue,{once:true});
  }

  function installStorybook(){
    const pages=qa('.chapter').slice(0,5);
    if(!pages.length||document.getElementById('storybook'))return;
    const book=document.createElement('div');book.className='storybook';book.id='storybook';
    pages[0].parentNode.insertBefore(book,pages[0]);
    pages.forEach((page,i)=>{
      page.classList.add('book-page');page.dataset.page=String(i);
      if(i===2)page.classList.add('focus-top');
      const edge=document.createElement('div');edge.className='page-edge';
      const num=document.createElement('div');num.className='page-number';num.textContent=`0${i+1} / 05`;
      page.append(edge,num);book.appendChild(page);
    });
    let raf=0;const clamp=(n,a,b)=>Math.max(a,Math.min(b,n));
    function turn(){raf=0;const top=book.offsetTop,vh=innerHeight;
      pages.forEach((page,i)=>{
        const p=clamp((scrollY-(top+i*vh))/vh,0,1),eased=1-Math.pow(1-p,2.55),rot=-178*eased,lift=Math.sin(p*Math.PI)*16,scale=1-Math.sin(p*Math.PI)*.018;
        page.style.zIndex=String(60-i);page.style.transform=`translate3d(0,${-lift}px,0) rotateY(${rot}deg) scale(${scale})`;page.style.filter=`brightness(${1-p*.17})`;page.classList.toggle('turning',p>.04&&p<.96);
        const copy=page.querySelector('.chapter-copy');if(copy){copy.style.opacity=String(Math.max(.04,1-p*1.28));copy.style.transform=`translate3d(${p*22}px,${-p*12}px,0)`}
      });
    }
    const schedule=()=>{if(!raf)raf=requestAnimationFrame(turn)};addEventListener('scroll',schedule,{passive:true});addEventListener('resize',schedule);turn();
  }

  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',()=>{installLanding();installStorybook()});else{installLanding();installStorybook()}
})();
(()=>{
  const q=(s,r=document)=>r.querySelector(s);
  if(!document.getElementById('fullEnvelopeLanding')){
    const style=document.createElement('style');
    style.id='fullEnvelopeLandingStyle';
    style.textContent=`
#fullEnvelopeLanding{position:fixed;inset:0;z-index:1000;width:100vw;height:100dvh;min-height:100svh;overflow:hidden;background:#082746;color:#f4dfb3;font-family:'DM Sans',sans-serif;perspective:1800px;isolation:isolate}
#fullEnvelopeLanding:before{content:"";position:absolute;inset:0;background:radial-gradient(circle at 50% 38%,rgba(47,96,144,.32),transparent 44%),repeating-linear-gradient(135deg,rgba(255,255,255,.02) 0 1px,transparent 1px 9px);pointer-events:none}
.fe-title{position:absolute;z-index:7;top:5.5vh;left:7vw;right:7vw;text-align:center;pointer-events:none}.fe-title small{display:block;font-size:clamp(7px,1.7vw,11px);letter-spacing:.38em;color:#d9bb84}.fe-title h1{margin:2.2vh 0 1.2vh;font:500 clamp(44px,11vw,84px)/.86 'Cormorant Garamond',serif;letter-spacing:-.035em;color:#f7e8c9;text-shadow:0 8px 25px rgba(0,0,0,.35)}.fe-title .rule{width:min(36vw,220px);height:1px;margin:2vh auto;background:linear-gradient(90deg,transparent,#d5b36f,transparent)}.fe-title p{margin:0;font-size:clamp(8px,2.1vw,12px);line-height:1.65;letter-spacing:.28em;text-transform:uppercase;color:#e2c792}.fe-sub{margin-top:1.2vh!important;font-size:clamp(5px,1.35vw,8px)!important;letter-spacing:.32em!important;color:#b89b67!important;opacity:.85}
.fe-flap,.fe-left,.fe-right,.fe-bottom{position:absolute;inset:auto;background-color:#0b3157;background-image:radial-gradient(circle at 20% 22%,rgba(218,184,121,.04) 0 1px,transparent 1.6px),repeating-linear-gradient(135deg,rgba(255,255,255,.018) 0 1px,transparent 1px 9px),linear-gradient(145deg,#123f70,#0a2d51 60%,#061a31);box-shadow:inset 0 0 0 1px rgba(219,184,122,.08);will-change:transform}
.fe-flap{z-index:5;left:0;right:0;top:0;height:66%;clip-path:polygon(0 0,50% 88%,100% 0);transform-origin:50% 0;background-image:radial-gradient(circle at 20% 14%,rgba(222,190,131,.07),transparent 23%),repeating-linear-gradient(135deg,rgba(255,255,255,.018) 0 1px,transparent 1px 9px),linear-gradient(165deg,#154574,#0a2f54 67%,#061a31);filter:drop-shadow(0 20px 28px rgba(0,0,0,.32))}.fe-flap:after{content:"";position:absolute;left:0;right:0;bottom:0;height:1px;background:linear-gradient(90deg,transparent,#c8a466 15%,#f1d79c 50%,#c8a466 85%,transparent)}
.fe-left{z-index:3;left:0;bottom:0;width:74%;height:67%;clip-path:polygon(0 0,100% 61%,100% 100%,0 100%)}.fe-right{z-index:3;right:0;bottom:0;width:74%;height:67%;clip-path:polygon(0 61%,100% 0,100% 100%,0 100%)}.fe-bottom{z-index:4;left:0;right:0;bottom:0;height:51%;clip-path:polygon(0 100%,50% 0,100% 100%);background-image:repeating-linear-gradient(135deg,rgba(255,255,255,.018) 0 1px,transparent 1px 9px),linear-gradient(165deg,#10385f,#071f3b)}
.fe-botanical{position:absolute;z-index:6;color:#caa96c;opacity:.32;font:400 clamp(80px,20vw,180px)/1 'Cormorant Garamond',serif;pointer-events:none}.fe-b1{left:-4vw;top:-2vh;transform:rotate(-22deg)}.fe-b2{right:-4vw;bottom:0;transform:rotate(155deg)}
.fe-seal{position:absolute;z-index:12;left:50%;top:60%;width:clamp(116px,19vw,168px);height:clamp(116px,19vw,168px);transform:translate(-50%,-50%);border-radius:50%;border:2px solid rgba(245,216,161,.48);display:grid;place-items:center;background:radial-gradient(circle at 34% 27%,#e1be76,#a97a36 36%,#76501f 64%,#4b3011);box-shadow:inset 0 0 0 8px rgba(255,237,197,.11),inset 0 0 0 18px rgba(57,34,11,.18),0 28px 55px rgba(0,0,0,.5),0 0 0 1px rgba(255,224,164,.22);color:#f9e4bb;font:500 clamp(28px,4.6vw,42px) 'Cormorant Garamond',serif;letter-spacing:.08em;cursor:pointer;-webkit-tap-highlight-color:transparent}.fe-seal:before{content:"";position:absolute;inset:-16px;border:1px solid rgba(224,190,127,.48);border-radius:50%;animation:fePulse 2.4s ease-in-out infinite}.fe-seal:after{content:"TAP TO OPEN";position:absolute;top:calc(100% + 34px);left:50%;transform:translateX(-50%);white-space:nowrap;font:600 clamp(8px,1.6vw,12px) 'DM Sans',sans-serif;letter-spacing:.35em;color:#d9bc84}@keyframes fePulse{50%{transform:scale(1.12);opacity:.9}0%,100%{transform:scale(.95);opacity:.35}}
#fullEnvelopeLanding.opening .fe-flap{transform:rotateX(178deg);transition:transform 1.25s cubic-bezier(.16,1,.3,1)}#fullEnvelopeLanding.opening .fe-seal{opacity:0;transform:translate(-50%,-50%) scale(.8);transition:.5s ease}#fullEnvelopeLanding.opening .fe-title{opacity:0;transform:translateY(-20px);transition:.55s ease}#fullEnvelopeLanding.leaving{opacity:0;transform:scale(1.035);transition:opacity .8s ease,transform 1s ease;pointer-events:none}
@media(max-width:760px){.fe-title{top:4.5vh;left:5vw;right:5vw}.fe-title h1{font-size:clamp(42px,12vw,62px)}.fe-flap{height:67%}.fe-left,.fe-right{height:68%;width:78%}.fe-bottom{height:52%}.fe-seal{top:61%;width:124px;height:124px;font-size:31px}}
@media(max-width:430px){.fe-title{top:3.6vh}.fe-title small{font-size:7px}.fe-title h1{font-size:43px}.fe-title p{font-size:8px}.fe-seal{top:61.5%;width:112px;height:112px;font-size:29px}.fe-seal:after{top:calc(100% + 28px);font-size:8px}}
@media(max-height:700px){.fe-title{top:2.8vh}.fe-title h1{font-size:38px;margin:1.3vh 0}.fe-title .rule{margin:1.2vh auto}.fe-title p{font-size:7px}.fe-sub{margin-top:.6vh!important}.fe-seal{top:62%;width:96px;height:96px;font-size:26px}.fe-seal:after{top:calc(100% + 22px)}}`;
    document.head.appendChild(style);
    const landing=document.createElement('div');landing.id='fullEnvelopeLanding';landing.innerHTML=`<div class="fe-title"><small>A PRIVATE INVITATION</small><h1>Dr Martin &amp; Pearl</h1><div class="rule"></div><p>Some things are simply meant to be</p><p class="fe-sub">LOVE · FAITH · A BEAUTIFUL FUTURE</p></div><div class="fe-botanical fe-b1">❧</div><div class="fe-botanical fe-b2">❧</div><div class="fe-flap"></div><div class="fe-left"></div><div class="fe-right"></div><div class="fe-bottom"></div><button class="fe-seal" aria-label="Open invitation">M&amp;P</button>`;
    document.body.appendChild(landing);
    const openBtn=landing.querySelector('.fe-seal');
    openBtn.addEventListener('click',()=>{
      landing.classList.add('opening');
      const underlying=document.querySelector('.intro .seal');
      if(underlying) setTimeout(()=>underlying.click(),120);
      setTimeout(()=>landing.classList.add('leaving'),1200);
      setTimeout(()=>landing.remove(),2050);
    },{once:true});
  }

  const pages=[...document.querySelectorAll('.chapter')].slice(0,5);
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
  let raf=0;
  const clamp=(n,a,b)=>Math.max(a,Math.min(b,n));
  function turn(){raf=0;const top=book.offsetTop,vh=innerHeight;
    pages.forEach((page,i)=>{
      const p=clamp((scrollY-(top+i*vh))/vh,0,1);
      const eased=1-Math.pow(1-p,2.55);
      const rot=-178*eased;
      const lift=Math.sin(p*Math.PI)*16;
      const scale=1-Math.sin(p*Math.PI)*.018;
      page.style.zIndex=String(60-i);
      page.style.transform=`translate3d(0,${-lift}px,0) rotateY(${rot}deg) scale(${scale})`;
      page.style.filter=`brightness(${1-p*.17})`;
      page.classList.toggle('turning',p>.04&&p<.96);
      const copy=page.querySelector('.chapter-copy');
      if(copy){copy.style.opacity=String(Math.max(.04,1-p*1.28));copy.style.transform=`translate3d(${p*22}px,${-p*12}px,0)`}
    });
  }
  const schedule=()=>{if(!raf)raf=requestAnimationFrame(turn)};
  addEventListener('scroll',schedule,{passive:true});addEventListener('resize',schedule);turn();
})();
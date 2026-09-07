(()=>{
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

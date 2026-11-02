/* Trắc nghiệm trong bảng bên phải. mountQuiz(el, câu hỏi[], color, xong(đúng, tổng)) */
const LET = 'ABCDEF';
const norm = s => s.toLowerCase().trim().replace(/\s+/g,' ');

/* lấy câu hỏi theo [[mã bài, [chỉ số trong bài]], …] */
function pickQuestions(spec){
  return spec.flatMap(([sec,idx])=>{ const all=QS.filter(q=>q.s===sec); return idx.map(i=>all[i]).filter(Boolean); });
}

function mountQuiz(el, qs, onDone, resume={i:0,r:0}, onStep=()=>{}){
  let i=Math.min(resume.i||0,qs.length-1), right=resume.r||0, locked=false, check=null, tries=0, again=false;
  const draw=(retry)=>{
    const q=qs[i]; locked=false; again=false; if(!retry) tries=0;
    el.innerHTML=`<div class="qz">
      <div class="qz-top"><span>❓ Trắc nghiệm</span><b>Câu ${i+1}/${qs.length}${tries?` · lần thử ${tries+1}`:''}</b></div>
      <div class="qz-bar"><i style="width:${i/qs.length*100}%"></i></div>
      <div class="qt">${esc(q.q)}</div>
      ${q.img?`<img class="qimg" src="img/${q.img}" alt="Hình của câu hỏi">`:''}
      <div id="qb"></div><div id="qf"></div>
      <button class="btn" id="qm" disabled>Kiểm tra</button></div>`;
    R[q.t](q,$('#qb',el));
    $('#qm',el).onclick=main;
  };
  const ready=ok=>{ $('#qm',el).disabled=!ok; };
  const main=()=>{
    if(!locked){
      locked=true; $('.qz',el).classList.add('locked');
      tries++; const reveal=tries>=3, res=check(reveal);
      if(res.ok&&tries===1) right++;               // chỉ tính đúng ngay lần đầu
      again=!res.ok;
      $('#qf',el).innerHTML=`<div class="fb ${res.ok?'good':'nope'}">${res.ok?(tries===1?'🎉 Giỏi lắm!':'👏 Đúng rồi! Em đã sửa được!'):(reveal?'💪 Chưa đúng. Đáp án đúng đã hiện ra, em hãy thử lại nhé!':'💪 Chưa đúng, em thử lại nhé!')}${res.note?`<small>${res.note}</small>`:''}</div>`;
      $('#qm',el).textContent=again?'↻ Thử lại':i<qs.length-1?'Câu tiếp ➜':'Xem kết quả 🏁';
    }else if(again){ draw(true); }
    else if(i<qs.length-1){ i++; onStep(i,right); draw(); }
    else onDone(right,qs.length);
  };

  const choice=(q,box,multi)=>{
    const opts=shuffle(q.o.map((x,n)=>({x,n}))), want=new Set(multi?q.a:[q.a]), picked=new Set(), need=want.size;
    box.className=(q.t==='mi'?'opts imgs ':'opts ')+(multi?'multi':'');
    box.innerHTML=opts.map((o,n)=>`<button class="opt" data-n="${o.n}"><span class="k">${LET[n]}</span>${q.t==='mi'?`<img src="img/${o.x}" alt="Lựa chọn ${LET[n]}">`:`<span>${esc(o.x)}</span>`}</button>`).join('');
    $$('.opt',box).forEach(b=>b.onclick=()=>{
      const n=+b.dataset.n;
      if(!multi){ picked.clear(); picked.add(n); $$('.opt',box).forEach(x=>x.classList.toggle('sel',x===b)); }
      else if(picked.has(n)){ picked.delete(n); b.classList.remove('sel'); } else { picked.add(n); b.classList.add('sel'); }
      ready(picked.size===need);
    });
    check=reveal=>{
      let ok=picked.size===need;
      $$('.opt',box).forEach(b=>{ const n=+b.dataset.n; b.classList.remove('sel');
        if(want.has(n)){ if(reveal||picked.has(n)) b.classList.add('ok'); } else if(picked.has(n)){ b.classList.add('bad'); ok=false; } });
      [...want].forEach(n=>{ if(!picked.has(n)) ok=false; });
      return {ok,note:multi&&!ok?`Câu này có ${need} đáp án đúng.`:''};
    };
  };

  const R={
    mc:(q,b)=>choice(q,b,false), mi:(q,b)=>choice(q,b,false), multi:(q,b)=>choice(q,b,true),
    tf(q,b){
      const rows=q.s2.map(([t,v],n)=>({t,v,n,pick:null}));
      b.innerHTML=rows.map(r=>`<div class="item" data-n="${r.n}"><span class="tx">${esc(r.t)}</span><span class="tfb"><button data-v="1">Đúng</button><button data-v="0">Sai</button></span></div>`).join('');
      $$('.item',b).forEach(it=>{ const r=rows[+it.dataset.n];
        $$('button',it).forEach(x=>x.onclick=()=>{ r.pick=x.dataset.v==='1'; $$('button',it).forEach(y=>y.classList.toggle('sel',y===x)); ready(rows.every(r=>r.pick!==null)); }); });
      check=reveal=>{ let ok=true;
        $$('.item',b).forEach(it=>{ const r=rows[+it.dataset.n], good=r.pick===r.v; ok=ok&&good; it.classList.add(good?'ok':'bad');
          if(!good&&reveal) it.insertAdjacentHTML('beforeend',`<div class="fix">Đáp án đúng: ${r.v?'Đúng':'Sai'}</div>`); });
        return {ok}; };
    },
    match(q,b){
      const choices=shuffle([...new Set(q.r.map(r=>r[1]))]), rows=shuffle(q.r);
      b.innerHTML=rows.map((r,n)=>`<div class="item" data-n="${n}">${r[2]?`<img src="img/${r[2]}" alt="Nút lệnh">`:''}${r[0]?`<span class="tx">${esc(r[0])}</span>`:''}
        <select><option value="">— chọn —</option>${choices.map(c=>`<option>${esc(c)}</option>`).join('')}</select></div>`).join('');
      const sels=$$('select',b); sels.forEach(s=>s.onchange=()=>ready(sels.every(s=>s.value)));
      check=reveal=>{ let ok=true;
        $$('.item',b).forEach(it=>{ const r=rows[+it.dataset.n], good=$('select',it).value===r[1]; ok=ok&&good; it.classList.add(good?'ok':'bad');
          if(!good&&reveal) it.insertAdjacentHTML('beforeend',`<div class="fix">Đáp án đúng: ${esc(r[1])}</div>`); });
        return {ok}; };
    },
    fill(q,b){
      b.innerHTML=`<input class="fill" placeholder="Gõ câu trả lời của em…" autocomplete="off">`;
      const inp=$('input',b); inp.oninput=()=>ready(inp.value.trim());
      inp.onkeydown=e=>{ if(e.key==='Enter'&&!$('#qm',el).disabled) main(); };
      check=reveal=>{ const ok=q.a.includes(norm(inp.value)); inp.style.borderColor=ok?'var(--ok)':'var(--bad)';
        return {ok,note:ok||!reveal?'':'Đáp án đúng: <b>'+esc(q.show)+'</b>'}; };
    }
  };
  draw();
}

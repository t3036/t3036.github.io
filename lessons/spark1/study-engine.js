/* Engine dùng chung cho các trang thẻ học Spark Level 1 (Bài 9–12). Dữ liệu từng bài nằm trong study-data.js */
var STUDY=window.STUDY, LESSONS=[STUDY.lesson], TABS=STUDY.tabs;
var CHECKS={}; CHECKS[STUDY.lesson.id]=STUDY.checks;
var DEMOS={}; DEMOS[STUDY.lesson.id]=STUDY.demos;

/* =================== THANH CHUYỂN BÀI =================== */
(function(){ var nav=document.getElementById('tabs');
  TABS.forEach(function(T){ var a=document.createElement('a'); a.className='tab'; a.id='tab-'+T.id; a.href=T.href;
    a.setAttribute('aria-selected', T.id===STUDY.lesson.id ? 'true':'false'); if(T.id===STUDY.lesson.id) a.setAttribute('aria-current','page');
    a.style.setProperty('--t',T.color); a.style.setProperty('--ts',T.soft);
    a.innerHTML='<b>'+T.no+'</b><span>'+T.emoji+' Bài '+T.no+'<br><span class="st">chưa làm</span></span>'; nav.appendChild(a); });
})();

/* =================== TIỆN ÍCH =================== */
var $ = function(s, r){ return (r||document).querySelector(s); };
function el(tag, cls, html){ var e=document.createElement(tag); if(cls) e.className=cls; if(html!=null) e.innerHTML=html; return e; }
function shuffle(a){ a=a.slice(); for(var i=a.length-1;i>0;i--){ var j=Math.floor(Math.random()*(i+1)); var t=a[i]; a[i]=a[j]; a[j]=t; } return a; }
var STORE='k3_b09_b12_stars';
var best = (function(){ try{ return JSON.parse(localStorage.getItem(STORE))||{}; }catch(e){ return {}; } })();
function saveBest(){ try{ localStorage.setItem(STORE, JSON.stringify(best)); }catch(e){} }
var PROG=(function(){ try{ return JSON.parse(localStorage.getItem('k3_b09_12_prog'))||{}; }catch(e){ return {}; } })();
LESSONS.forEach(function(L){ var p=PROG[L.id]=PROG[L.id]||{}; p.c=p.c||{}; p.a=p.a||{}; });
var TEACH=false; try{ TEACH=localStorage.getItem('k3_teach')==='1'; }catch(e){}
function saveProg(){ try{ localStorage.setItem('k3_b09_12_prog', JSON.stringify(PROG)); }catch(e){} }
function nKeys(o){ return Object.keys(o).length; }
function toast(t){ var x=$('#toast'); x.textContent=t; x.classList.add('show'); clearTimeout(toast.t); toast.t=setTimeout(function(){ x.classList.remove('show'); },3200); }
function restartLessons(ids, msg){
  if(!confirm(msg)) return;
  ids.forEach(function(id){ PROG[id]={c:{},a:{}}; delete best[id]; });
  saveProg(); saveBest(); location.reload();
}
function starsFor(pct){ return pct>=0.9?3 : pct>=0.7?2 : pct>=0.5?1 : 0; }
function starStr(n){ return '⭐'.repeat(n)+'☆'.repeat(3-n); }

/* =================== KHUNG TRANG =================== */
var tabsEl=$('#tabs'), mainEl=$('#main');
function setTheme(node, L){ node.style.setProperty('--c',L.color); node.style.setProperty('--c-soft',L.soft); node.style.setProperty('--c-dark',L.dark); }
function refreshTabs(){
  var got=0;
  TABS.forEach(function(T){ var n=best[T.id]||0; if(n>0) got++; $('#tab-'+T.id+' .st').textContent = n?starStr(n):'chưa làm'; });
  $('#total').textContent='⭐ '+got+' / '+TABS.length+' bài đã có sao';
}
function show(id){ $('#sec-'+id).classList.add('on'); }

/* =================== CÁC HOẠT ĐỘNG =================== */
function buildSort(a){
  var box=el('div','panel');
  box.appendChild(el('h4','fun',a.title)); box.firstChild.style.cssText='font-size:1.1rem;margin-bottom:4px';
  box.appendChild(el('p','hint',a.hint));
  var pr=el('div','prog','<span class="cnt">0 / '+a.items.length+'</span><div class="bar"><i></i></div>'); box.appendChild(pr);
  var done=0, right=0;
  shuffle(a.items).forEach(function(it){
    var row=el('div','sortitem');
    row.appendChild(el('div','t',it[0]));
    var b=el('div','b');
    [[1,a.yes],[0,a.no]].forEach(function(p){
      var btn=el('button','sbtn',p[1]); btn.type='button';
      btn.onclick=function(){
        if(row.classList.contains('done')) return;
        row.classList.add('done'); done++;
        var ok = (it[1]===p[0]);
        row.classList.add(ok?'right':'wrong'); if(ok) right++;
        res.textContent=(ok?'🎉 Đúng rồi! ':'🙈 Chưa đúng. Đáp án: '+(it[1]?a.yes:a.no)+'. ')+it[2];
        $('.cnt',box).textContent=done+' / '+a.items.length;
        $('.bar i',box).style.width=(done/a.items.length*100)+'%';
        if(done===a.items.length) box.dispatchEvent(new CustomEvent('act-done',{bubbles:true})); if(done===a.items.length) fin.textContent='🏁 Xong! Em đúng '+right+'/'+a.items.length+' câu.'+(right===a.items.length?' Giỏi quá! 🌟':' Đọc lại các ô màu đỏ để nhớ nhé.');
      };
      b.appendChild(btn);
    });
    row.appendChild(b);
    var res=el('div','res'); row.appendChild(res);
    box.appendChild(row);
  });
  var fin=el('div','verdict'); box.appendChild(fin);
  return box;
}

function buildMatch(a,onDone){
  var box=el('div','panel'), mistakes=0;
  if(a.title){ box.appendChild(el('h4','fun',a.title)); box.firstChild.style.cssText='font-size:1.1rem;margin-bottom:4px'; }
  box.appendChild(el('p','hint',a.hint));
  var grid=el('div','match'); box.appendChild(grid);
  var L=shuffle(a.pairs.map(function(p,i){return {t:p[0],i:i};}));
  var R=shuffle(a.pairs.map(function(p,i){return {t:p[1],i:i};}));
  var sel=null, matched=0, lefts=[], rights=[];
  function mk(o,side){
    var b=el('button','mbtn',o.t); b.type='button'; b.dataset.i=o.i; b.dataset.s=side;
    b.onclick=function(){
      if(sel && sel.dataset.s===side){ sel.classList.remove('sel'); sel=(sel===b)?null:b; if(sel) b.classList.add('sel'); return; }
      if(!sel){ sel=b; b.classList.add('sel'); return; }
      var other=sel; sel=null; other.classList.remove('sel');
      if(other.dataset.i===b.dataset.i){
        other.classList.add('ok'); b.classList.add('ok'); matched++;
        if(matched===a.pairs.length){ fin.textContent='🎉 Ghép đúng hết rồi! Em thật giỏi!'; if(onDone) onDone(mistakes); box.dispatchEvent(new CustomEvent('act-done',{bubbles:true})); }
      }else{
        mistakes++; [other,b].forEach(function(x){ x.classList.add('no'); setTimeout(function(){ x.classList.remove('no'); },400); });
      }
    };
    return b;
  }
  /* xếp theo hàng: cột trái - cột phải */
  for(var k=0;k<a.pairs.length;k++){ grid.appendChild(mk(L[k],'l')); grid.appendChild(mk(R[k],'r')); }
  var fin=el('div','verdict'); fin.style.marginTop='12px'; box.appendChild(fin);
  return box;
}

function buildPw(){
  var box=el('div','panel pw');
  box.appendChild(el('h4','fun','Phòng thí nghiệm mật khẩu')); box.firstChild.style.cssText='font-size:1.1rem;margin-bottom:4px';
  box.appendChild(el('p','hint','⚠️ Chỉ gõ mật khẩu <b>giả</b> để thử. Đừng gõ mật khẩu thật của em nhé!'));
  var inp=el('input'); inp.type='text'; inp.placeholder='Gõ thử một mật khẩu giả…'; inp.autocomplete='off'; inp.setAttribute('aria-label','Mật khẩu để thử'); inp.spellcheck=false;
  box.appendChild(inp);
  var rules=[
    ['Dài ít nhất 8 kí tự', function(s){return s.length>=8;}],
    ['Có chữ thường (a, b, c…)', function(s){return /[a-z]/.test(s);}],
    ['Có chữ IN HOA (A, B, C…)', function(s){return /[A-Z]/.test(s);}],
    ['Có chữ số (0, 1, 2…)', function(s){return /[0-9]/.test(s);}],
    ['Có kí tự đặc biệt (! @ # …)', function(s){return /[^A-Za-z0-9]/.test(s);}]
  ];
  var ul=el('ul','rules'); var lis=rules.map(function(r){ var li=el('li',null,'<span>✓</span>'+r[0]); ul.appendChild(li); return li; });
  box.appendChild(ul);
  var m=el('div','meter','<i></i>'); box.appendChild(m);
  var v=el('div','verdict'); box.appendChild(v);
  function upd(){
    var s=inp.value, n=0;
    rules.forEach(function(r,i){ var ok=r[1](s); lis[i].classList.toggle('y',ok); if(ok) n++; });
    var bar=$('i',m), cols=['#d94141','#e8743b','#e8a53b','#9bc23b','#1f9d55'];
    bar.style.width=(s?n/5*100:0)+'%'; bar.style.background=cols[Math.max(0,n-1)];
    v.textContent = !s ? 'Hãy thử gõ nào!' : n===5 ? '💪 Mật khẩu MẠNH! Đủ cả 5 điều kiện.' : n>=3 ? '🙂 Khá rồi, thêm chút nữa nhé.' : '😟 Mật khẩu YẾU, dễ bị đoán.';
    if(s&&n===5) box.dispatchEvent(new CustomEvent('act-done',{bubbles:true}));
  }
  inp.oninput=upd;
  var q=el('div','quick','Thử nhanh: ');
  [['1234567890','Yếu'],['Jenny123','Chưa đủ'],['W3*ud28x','Mạnh']].forEach(function(x){
    var b=el('button',null,x[0]); b.type='button'; b.onclick=function(){ inp.value=x[0]; upd(); }; q.appendChild(b);
  });
  box.appendChild(q); upd();
  return box;
}

function buildTimer(){
  var box=el('div','panel timer');
  box.appendChild(el('h4','fun','Thử phương pháp 20 – 20 – 20')); box.firstChild.style.cssText='font-size:1.1rem;margin-bottom:4px';
  box.appendChild(el('p','hint','Rời mắt khỏi màn hình, nhìn ra cửa sổ hoặc một vật ở xa trong 20 giây.'));
  var eye=el('div','eye','👀'), cnt=el('div','count','20'), msg=el('div','tmsg','Sẵn sàng chưa? Bấm nút để bắt đầu!');
  var bar=el('div','meter','<i></i>'); bar.style.maxWidth='320px'; bar.style.margin='0 auto 12px';
  var go=el('button','go','▶ Bắt đầu 20 giây'); go.type='button';
  var t=null;
  go.onclick=function(){
    if(t){ clearInterval(t); t=null; go.textContent='▶ Bắt đầu 20 giây'; cnt.textContent='20'; msg.textContent='Đã dừng. Bấm để thử lại!'; $('i',bar).style.width='0'; return; }
    var left=20; go.textContent='⏹ Dừng lại'; go.classList.add('alt');
    msg.textContent='Nhìn thật xa nào… thả lỏng đôi mắt!';
    $('i',bar).style.background='#2f80ed'; $('i',bar).style.width='0%';
    t=setInterval(function(){
      left--; cnt.textContent=left; $('i',bar).style.width=((20-left)/20*100)+'%';
      eye.style.transform = left%2? 'translateX(14px)':'translateX(-14px)';
      if(left<=0){ clearInterval(t); t=null; eye.style.transform=''; go.classList.remove('alt'); go.textContent='▶ Làm lại'; msg.textContent='🎉 Giỏi lắm! Mắt em đã được nghỉ. Nhớ làm vậy mỗi 20 phút nhé.'; box.dispatchEvent(new CustomEvent('act-done',{bubbles:true})); }
    },1000);
  };
  [eye,cnt,msg,bar,go].forEach(function(n){ box.appendChild(n); });
  return box;
}

function buildSteps(a){
  var box=el('div','panel');
  box.appendChild(el('h4','fun',a.title)); box.firstChild.style.cssText='font-size:1.1rem;margin-bottom:14px';
  var g=el('div','steps');
  a.steps.forEach(function(s){ g.appendChild(el('div','step','<div class="em">'+s[0]+'</div>'+s[1])); });
  box.appendChild(g);
  var ok=el('button','go','✔ Em đã hiểu rồi'); ok.type='button'; ok.style.marginTop='14px';
  ok.onclick=function(){ ok.textContent='🎉 Giỏi lắm!'; ok.disabled=true; box.dispatchEvent(new CustomEvent('act-done',{bubbles:true})); };
  box.appendChild(ok); return box;
}

/* =================== BÀI KIỂM TRA =================== */
function buildQuiz(L){
  var box=el('div'), idx=0, score=0, order=shuffle(L.quiz);
  function render(){
    box.innerHTML='';
    if(idx>=order.length) return end();
    var Q=order[idx], multi=Q.multi;
    var opts=shuffle(Q.o.map(function(t,i){ return {t:t, ok:Q.a.indexOf(i)>-1}; }));
    var wrap=el('div','q');
    wrap.appendChild(el('div','qn','Câu '+(idx+1)+' / '+order.length));
    wrap.appendChild(el('h4',null,Q.q));
    if(multi) wrap.appendChild(el('span','multi','Chọn '+Q.a.length+' đáp án'));
    var list=el('div','opts'), fb=el('div','fb'), btns=el('div','qbtns');
    if(Q.match){
      var mb=buildMatch({hint:'Bấm ô bên trái rồi bấm ô bên phải để ghép.',pairs:Q.match}, function(mis){
        var good=(mis===0); if(good) score++;
        fb.className='fb show '+(good?'good':'bad');
        fb.innerHTML=(good?'🎉 <b>Chính xác!</b> ':'🤔 <b>Em ghép xong rồi, nhưng có lần ghép nhầm.</b> ')+Q.why;
        var nx=el('button','go',idx+1<order.length?'Câu tiếp ➜':'Xem kết quả 🏆'); nx.type='button';
        nx.onclick=function(){ idx++; render(); window.scrollTo({top:box.getBoundingClientRect().top+scrollY-80}); };
        btns.appendChild(nx);
      });
      mb.style.cssText='border:0;padding:0;margin-top:10px';
      wrap.appendChild(mb); wrap.appendChild(fb); wrap.appendChild(btns); box.appendChild(wrap); return;
    }
    var picked=[], locked=false;
    function reveal(correct){
      locked=true;
      opts.forEach(function(o){ o.b.classList.add('lock'); if(o.ok) o.b.classList.add('ok'); else if(o.b.classList.contains('sel')) o.b.classList.add('no'); o.b.classList.remove('sel'); });
      fb.className='fb show '+(correct?'good':'bad');
      fb.innerHTML=(correct?'🎉 <b>Chính xác!</b> ':'🤔 <b>Chưa đúng.</b> ')+Q.why;
      if(correct) score++;
      var nx=el('button','go',idx+1<order.length?'Câu tiếp ➜':'Xem kết quả 🏆'); nx.type='button';
      nx.onclick=function(){ idx++; render(); window.scrollTo({top:box.getBoundingClientRect().top+scrollY-80}); };
      btns.innerHTML=''; btns.appendChild(nx); nx.focus({preventScroll:true});
    }
    opts.forEach(function(o,i){
      var b=el('button','opt','<span class="k">'+'ABCD'[i]+'</span><span>'+o.t+'</span>'); b.type='button'; o.b=b;
      b.onclick=function(){
        if(locked) return;
        if(!multi){ b.classList.add('sel'); reveal(o.ok); return; }
        b.classList.toggle('sel');
        picked = opts.filter(function(x){return x.b.classList.contains('sel');});
        chk.disabled = picked.length===0;
      };
      list.appendChild(b);
    });
    wrap.appendChild(list); wrap.appendChild(fb); wrap.appendChild(btns);
    var chk=null;
    if(multi){
      chk=el('button','go','Kiểm tra'); chk.type='button'; chk.disabled=true;
      chk.onclick=function(){
        var good = opts.every(function(o){ return o.ok===o.b.classList.contains('sel'); });
        reveal(good);
      };
      btns.appendChild(chk);
    }
    box.appendChild(wrap);
  }
  function end(){
    var pct=score/order.length, n=starsFor(pct);
    if(n>(best[L.id]||0)){ best[L.id]=n; saveBest(); refreshTabs(); }
    var msg = n===3?'Xuất sắc! Em là siêu anh hùng an toàn mạng!' : n===2?'Giỏi lắm! Cố thêm chút nữa là 3 sao.' : n===1?'Khá tốt! Đọc lại bài học rồi thử lại nhé.' : 'Đừng buồn! Đọc lại bài và thử lần nữa nào.';
    var d=el('div','q end','<div class="stars">'+starStr(n)+'</div><h4>Em đúng '+score+' / '+order.length+' câu</h4><p>'+msg+'</p>');
    var again=el('button','go','🔁 Làm lại'); again.type='button';
    again.onclick=function(){ idx=0; score=0; order=shuffle(L.quiz); render(); };
    d.appendChild(again);
    var ti=TABS.map(function(t){return t.id;}).indexOf(L.id);
    if(ti<TABS.length-1){
      var nx=el('a','go alt','Bài '+TABS[ti+1].no+' ➜'); nx.href=TABS[ti+1].href; nx.style.cssText='margin-left:8px;display:inline-block;text-decoration:none';
      d.appendChild(nx);
    }
    box.innerHTML=''; box.appendChild(d);
  }
  render(); return box;
}

function buildMini(Q,opt){
  var box=el('div','mini','<div class="mt">⚡ KIỂM TRA NHANH</div>');
  box.appendChild(el('div','mq',Q.q));
  var list=el('div','opts'), fb=el('div','fb'), multi=Q.a.length>1, locked=false;
  var opts=shuffle(Q.o.map(function(t,i){ return {t:t, ok:Q.a.indexOf(i)>-1}; }));
  function reveal(good){
    locked=true;
    opts.forEach(function(o){ o.b.classList.add('lock'); if(o.ok) o.b.classList.add('ok'); else if(o.b.classList.contains('sel')) o.b.classList.add('no'); o.b.classList.remove('sel'); });
    fb.className='fb show '+(good?'good':'bad'); fb.innerHTML=(good?'🎉 <b>Đúng rồi!</b> ':'🤔 <b>Chưa đúng.</b> ')+Q.why;
  }
  opts.forEach(function(o,i){
    var b=el('button','opt','<span class="k">'+'ABCD'[i]+'</span><span>'+o.t+'</span>'); b.type='button'; o.b=b;
    b.onclick=function(){
      if(locked) return;
      if(opt && opt.retry && !o.ok){ b.classList.add('no','lock'); fb.className='fb show bad'; fb.innerHTML='🤔 <b>Chưa đúng, thử lại nhé!</b>'; return; }
      b.classList.add('sel'); reveal(o.ok);
      if(o.ok && opt && opt.onPass) opt.onPass();
    };
    list.appendChild(b);
  });
  box.appendChild(list); box.appendChild(fb); return box;
}


function buildDeck(L){
  var box=el('div','deck'), i=0, flipped=false, seen=PROG[L.id].c;
  var top=el('div','dtop'), cnt=el('span','cnt'), dots=el('div','dots');
  top.appendChild(cnt); top.appendChild(dots); box.appendChild(top);
  var stage=el('div','stage'), card=el('div','fcard'); card.tabIndex=0; card.setAttribute('role','button');
  stage.appendChild(card); box.appendChild(stage);
  var nav=el('div','dnav'), prev=el('button','go alt','⬅ Thẻ trước'), flip=el('button','go','🔄 Lật thẻ'), next=el('button','go alt','Thẻ sau ➡');
  [prev,flip,next].forEach(function(b){ b.type='button'; nav.appendChild(b); });
  box.appendChild(nav);
  var note=el('div','dnote'); box.appendChild(note);
  var mini=el('div','minibox'); box.appendChild(mini);
  var dbtn=L.learn.map(function(c,k){ var b=el('button',null,k+1); b.type='button'; b.setAttribute('aria-label','Thẻ '+(k+1)); b.onclick=function(){ go(k); }; dots.appendChild(b); return b; });
  function draw(){
    var c=L.learn[i], demo=(DEMOS[L.id]||{})[i]||'';
    card.className='fcard'+(flipped?' flip':'');
    card.setAttribute('aria-label','Thẻ '+(i+1)+': '+c.h+'. Bấm để lật.');
    card.innerHTML='<div class="face front"><div class="hd"><div class="em">'+c.em+'</div><div><h4>'+c.h+'</h4>'+(c.en?'<div class="en">'+c.en+'</div>':'')+'</div></div>'
      +'<div class="demo">'+demo+'</div><div class="flipme">👆 Bấm vào thẻ để lật, đọc và làm câu hỏi nhanh</div></div>'
      +'<div class="face back"><div class="hd"><div class="em">'+c.em+'</div><h4>'+c.h+'</h4></div><div class="txt">'+c.p+'</div><div class="flipme">👆 Bấm để lật lại</div></div>';
    cnt.textContent='Thẻ '+(i+1)+' / '+L.learn.length;
    nav2();
    var ck=(CHECKS[L.id]||{})[i];
    if(!ck && flipped) pass();
    if(ck){
      var mq=buildMini(ck, seen[i]?null:{retry:true,onPass:pass}), bk=card.querySelector('.back');
      mq.onclick=function(e){ e.stopPropagation(); };
      mq.onkeydown=function(e){ e.stopPropagation(); };
      bk.insertBefore(mq, bk.querySelector('.flipme'));
    }
  }
  function nav2(){
    var open=0; while(seen[open]) open++;
    dbtn.forEach(function(b,k){ b.className=(k===i?'on ':'')+(seen[k]?'seen ':'')+(k>open?'lock':''); b.disabled=k>open; b.textContent=k>open?'🔒':k+1; });
    prev.disabled=(i===0); next.disabled=(i===L.learn.length-1 || i+1>open);
    note.textContent=(i+1>open && i<L.learn.length-1) ? '🔒 Lật thẻ và trả lời đúng câu hỏi nhanh để mở thẻ tiếp theo!' : (open>=L.learn.length ? '✅ Em đã hoàn thành tất cả các thẻ!' : '');
    prev.style.opacity=prev.disabled?.4:1; next.style.opacity=next.disabled?.4:1;
  }
  function pass(){
    if(seen[i]) return; seen[i]=true; saveProg(); nav2();
    if(i<L.learn.length-1) toast('🔓 Thẻ '+(i+2)+' đã mở! Bấm “Thẻ sau”.');
    box.dispatchEvent(new CustomEvent('card-seen',{bubbles:true}));
  }
  function go(k){ var o=0; while(seen[o]) o++; if(k>o) return; i=k; flipped=false; draw(); }
  function doFlip(){ flipped=!flipped; var was=flipped; draw(); card.classList.toggle('flip',was); }
  card.onclick=doFlip; flip.onclick=doFlip;
  card.onkeydown=function(e){ if(e.target!==card) return; if(e.key==='Enter'||e.key===' '){ e.preventDefault(); doFlip(); } if(e.key==='ArrowRight'&&i<L.learn.length-1) go(i+1); if(e.key==='ArrowLeft'&&i>0) go(i-1); };
  prev.onclick=function(){ if(i>0) go(i-1); }; next.onclick=function(){ if(i<L.learn.length-1) go(i+1); };
  draw(); return box;
}


/* =================== TRÒ CHƠI MỞ ĐƯỜNG (Unblock) =================== */
var UB_LEVELS = [
  {m:3,  tip:'Mật khẩu và phần mềm chống virus là hai “lá chắn” bảo vệ máy tính.', b:[[2,0,2,0],[4,3,2,1],[4,0,3,0],[2,4,2,1],[0,2,2,1],[3,5,2,1],[5,0,2,0],[1,5,2,1]]},
  {m:9,  tip:'Mỗi tài khoản nên dùng một mật khẩu khác nhau và giữ bí mật.', b:[[2,0,2,0],[2,3,2,1],[3,2,2,1],[0,2,2,0],[2,4,3,1],[1,0,2,0],[5,4,2,0],[1,4,2,0],[3,0,3,1],[1,2,2,1],[5,1,2,0]]},
  {m:16, tip:'Gặp đường link lạ: DỪNG LẠI – KIỂM TRA – HỎI người lớn tin cậy.', b:[[2,1,2,0],[0,0,3,1],[4,3,2,0],[1,5,3,1],[0,3,2,0],[1,4,2,1],[5,0,2,0],[3,0,2,0],[1,3,3,1],[0,1,2,0],[3,2,2,1]]}
];
function buildUnblock(a){
  var box=el('div','panel');
  box.appendChild(el('h4','fun',a.title)); box.firstChild.style.cssText='font-size:1.1rem;margin-bottom:4px';
  box.appendChild(el('p','hint',a.hint));
  var wrap=el('div','ub-wrap'); box.appendChild(wrap);
  var side=el('div','ub-side'), lv=el('div','ub-lv'), stat=el('div','ub-stat'), tip=el('div','ub-tip');
  var reset=el('button','go alt','↺ Làm lại màn'); reset.type='button';
  side.appendChild(lv); side.appendChild(stat); side.appendChild(reset); side.appendChild(tip);
  var bb=el('div','ub-board-box'), board=el('div','ub-board'), exit=el('div','ub-exit','➡️');
  bb.appendChild(board); bb.appendChild(exit); wrap.appendChild(bb); wrap.appendChild(side);
  var cur=0, doneLv={}, blocks=[], pos=[], moves=0, won=false, btns=[];
  UB_LEVELS.forEach(function(L,i){ var b=el('button',null,'Màn '+(i+1)); b.type='button'; b.onclick=function(){ load(i); }; lv.appendChild(b); btns.push(b); });
  function occ(except){
    var o=[]; for(var k=0;k<36;k++) o.push(-1);
    blocks.forEach(function(b,i){ if(i===except) return; for(var j=0;j<b.len;j++) o[b.h?b.r*6+pos[i]+j:(pos[i]+j)*6+b.c]=i; });
    return o;
  }
  function range(i){
    var b=blocks[i], o=occ(i), lo=pos[i], hi=pos[i];
    function at(p){ for(var j=0;j<b.len;j++){ if(o[b.h?b.r*6+p+j:(p+j)*6+b.c]!==-1) return false; } return true; }
    while(lo>0 && at(lo-1)) lo--; while(hi+b.len<6 && at(hi+1)) hi++;
    return [lo,hi];
  }
  function place(i,p){
    var b=blocks[i], e=b.el;
    if(b.h){ e.style.left=(p/6*100)+'%'; e.style.top=(b.r/6*100)+'%'; }
    else{ e.style.left=(b.c/6*100)+'%'; e.style.top=(p/6*100)+'%'; }
  }
  function updStat(){ stat.innerHTML='Số lần trượt: <b>'+moves+'</b> · Gợi ý: giải trong khoảng <b>'+UB_LEVELS[cur].m+'</b> lần'; }
  function load(n){
    cur=n; moves=0; won=false; tip.className='ub-tip'; board.innerHTML=''; blocks=[]; pos=[];
    btns.forEach(function(b,i){ b.className=(i===cur?'on ':'')+(doneLv[i]?'done':''); });
    UB_LEVELS[n].b.forEach(function(d,i){
      var b={r:d[0],c:d[1],len:d[2],h:!d[3],key:i===0}, e=el('div','ub-blk'+(b.key?' key':' v'+(i%4)), b.key?'🔑':'🦠');
      e.style.width=(b.h?b.len/6*100:100/6)+'%'; e.style.height=(b.h?100/6:b.len/6*100)+'%';
      e.setAttribute('aria-label',b.key?'Chìa khóa mật khẩu':'Khối virus');
      b.el=e; blocks.push(b); pos.push(b.h?b.c:b.r); board.appendChild(e); place(i,pos[i]); hook(i);
    });
    updStat();
  }
  function hook(i){
    var b=blocks[i], e=b.el, st=null;
    e.onpointerdown=function(ev){
      if(won) return; ev.preventDefault(); try{ e.setPointerCapture(ev.pointerId); }catch(x){}
      var rg=range(i); st={x:ev.clientX,y:ev.clientY,p0:pos[i],lo:rg[0],hi:rg[1],cell:board.clientWidth/6,p:pos[i]}; e.classList.add('drag');
    };
    e.onpointermove=function(ev){
      if(!st) return;
      var d=((b.h?ev.clientX-st.x:ev.clientY-st.y)/st.cell);
      st.p=Math.max(st.lo,Math.min(st.hi,st.p0+d)); place(i,st.p);
    };
    function up(){
      if(!st) return; var p=Math.round(st.p); e.classList.remove('drag');
      if(p!==st.p0){ moves++; updStat(); } pos[i]=p; place(i,p); st=null;
      if(b.key && p+b.len>=6) win();
    }
    e.onpointerup=up; e.onpointercancel=up;
  }
  function win(){
    won=true; doneLv[cur]=true; btns[cur].className='on done';
    var last=cur===UB_LEVELS.length-1;
    tip.innerHTML='🎉 <b>Giải xong sau '+moves+' lần trượt!</b><br>💡 '+UB_LEVELS[cur].tip+(last?'<br>🏆 Em đã qua hết các màn!':'');
    tip.className='ub-tip show'; box.dispatchEvent(new CustomEvent('act-done',{bubbles:true}));
    if(!last){ var nx=el('button','go','Màn tiếp ➜'); nx.type='button'; nx.style.marginTop='10px'; nx.onclick=function(){ load(cur+1); }; tip.appendChild(nx); }
  }
  reset.onclick=function(){ load(cur); };
  load(0);
  return box;
}

/* =================== KHÓA / MỞ KHÓA TỪNG PHẦN =================== */
var GATES=[], ACT_GATES=[];
function mkGate(head, body, need, getHave, msgFn, unlockMsg){
  var sec=el('div','sec'), h=el('h3',null,head), msg=el('div','gate-msg'), wrap=el('div','gate-body'), was=null, icon=h.firstChild.textContent;
  wrap.appendChild(body); sec.appendChild(h); sec.appendChild(msg); sec.appendChild(wrap);
  var g={sec:sec};
  g.open=function(){ return TEACH || getHave()>=need; };
  g.refresh=function(){
    var have=Math.min(getHave(),need), open=g.open();
    msg.style.display=open?'none':'flex'; wrap.style.display=open?'':'none';
    msg.innerHTML='<div class="lk">🔒</div><div style="flex:1"><b>'+msgFn(have,need)+'</b><div class="pb"><i style="width:'+(have/need*100)+'%"></i></div></div>';
    h.firstChild.textContent=open?icon:'🔒';
    if(was===false && open) toast(unlockMsg);
    was=open;
  };
  return g;
}
/* =================== LẮP RÁP =================== */
LESSONS.forEach(function(L){
  var s=el('section','lesson'); s.id='sec-'+L.id; setTheme(s,L);
  var hero=el('div','hero','<div class="big">'+L.emoji+'</div><div style="flex:1"><small>BÀI '+L.no+'</small><h2>'+L.title+'</h2><p>'+L.intro+'</p></div>');
  var rs=el('button','restart','🔄 Học lại bài này'); rs.type='button';
  rs.onclick=function(){ restartLessons([L.id],'Em muốn học lại Bài '+L.no+' từ đầu? Các thẻ, trò chơi và sao của bài này sẽ được làm mới.'); };
  hero.appendChild(rs); s.appendChild(hero);

  var learn=el('div','sec'); learn.appendChild(el('h3',null,'<i>📖</i>Em học · Thẻ ghi nhớ'));
  learn.appendChild(el('p','hint2','Lật thẻ, đọc, rồi trả lời đúng câu ⚡ Kiểm tra nhanh ở mặt sau để mở thẻ tiếp theo. Xong hết '+L.learn.length+' thẻ là mở khóa phần chơi game!'));
  learn.appendChild(buildDeck(L));
  learn.appendChild(el('div','remember','<div class="em">'+L.remember.em+'</div><div><b>Nhớ nhé:</b> '+L.remember.t+'</div>'));
  s.appendChild(learn);

  var pbody=el('div');
  L.acts.forEach(function(a,ai){
    var w = a.type==='sort'?buildSort(a) : a.type==='match'?buildMatch(a) : a.type==='pw'?buildPw() : a.type==='timer'?buildTimer() : a.type==='unblock'?buildUnblock(a) : buildSteps(a);
    w.style.marginBottom='14px';
    var lk=el('div','gate-msg'), slot=el('div');
    lk.style.marginBottom='14px'; slot.appendChild(w);
    var actWas=null;
    var actRefresh=function(){
      var o=TEACH || ai===0 || !!PROG[L.id].a[ai-1];
      lk.style.display=o?'none':'flex'; slot.style.display=o?'':'none';
      lk.innerHTML='<div class="lk">🔒</div><div style="flex:1"><b>Hoàn thành trò chơi '+ai+' để mở khóa trò chơi '+(ai+1)+'</b></div>';
      if(actWas===false && o) toast('🔓 Mở khóa trò chơi '+(ai+1)+' rồi!');
      actWas=o;
    };
    ACT_GATES.push(actRefresh);
    w.addEventListener('act-done',function(){ if(!PROG[L.id].a[ai]){ PROG[L.id].a[ai]=true; saveProg(); ACT_GATES.forEach(function(f){ f(); }); gPlay.refresh(); gQuiz.refresh(); } });
    pbody.appendChild(lk); pbody.appendChild(slot);
    actRefresh();
  });
  var gPlay=mkGate('<i>🎮</i>Em chơi', pbody, L.learn.length, function(){ return nKeys(PROG[L.id].c); },
    function(h,n){ return 'Hoàn thành '+n+' thẻ ở phần Em học (lật và trả lời đúng) để mở khóa trò chơi (đã xong '+h+'/'+n+')'; }, '🔓 Mở khóa rồi! Chơi game thôi nào!');
  var gQuiz=mkGate('<i>🏆</i>Ôn tập cuối bài · '+L.quiz.length+' câu', buildQuiz(L), L.acts.length, function(){ return Math.min(nKeys(PROG[L.id].a), gPlay.open()?L.acts.length:0); },
    function(h,n){ return 'Hoàn thành '+n+' trò chơi để mở khóa bài ôn tập (đã xong '+h+'/'+n+')'; }, '🔓 Mở khóa bài ôn tập rồi!');
  learn.addEventListener('card-seen',function(){ gPlay.refresh(); gQuiz.refresh(); });
  s.appendChild(gPlay.sec); s.appendChild(gQuiz.sec);
  GATES.push(gPlay,gQuiz);
  gPlay.refresh(); gQuiz.refresh();
  mainEl.appendChild(s);
});
/* Nhấp chuột phải hai lần liên tiếp vào 🎉 ở cuối trang: mở khóa tất cả các phần (làm lại để khóa lại) */
(function(){
  var last=0;
  $('#secret').addEventListener('contextmenu', function(e){
    e.preventDefault();
    var now=Date.now(); if(now-last>=600){ last=now; return; }
    last=0; TEACH=!TEACH; try{ localStorage.setItem('k3_teach',TEACH?'1':'0'); }catch(x){}
    GATES.forEach(function(g){ g.refresh(); }); ACT_GATES.forEach(function(f){ f(); });
    toast(TEACH?'🔓 Đã mở khóa tất cả các phần':'🔒 Đã khóa lại các phần');
  });
})();
refreshTabs();
show(LESSONS[0].id);

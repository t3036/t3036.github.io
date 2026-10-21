/* ---------- Nhiệm vụ "Việc thật": tình huống ngoài đời (dùng chung cho Spark3 bài 21–23) ----------
   Mỗi bài khai báo const REAL=[...] trong script.js. Mỗi phần tử:
   {icon,title,story, Q:{...câu hỏi như askQ...}}  hoặc  {icon,title,story, order:{q,steps,why,miss}}  */
/* cửa sổ giả lập cho màn hình minh họa: cls = act (đang dùng) hoặc dim (mờ) */
const scrWin=(icon,title,body,cls)=>'<div class="scw '+(cls||'')+'"><div class="sct">'+icon+' '+title+'</div><div class="scb">'+body+'</div></div>';
/* giao diện giả lập giống thật (kiểu dáng ở real.css) */
const xBrowser=(url,tab,body,cls,toast)=>'<div class="xw '+(cls||'')+'"><div class="xbar"><i class="r"></i><i class="y"></i><i class="g"></i><span class="xtab">🌐 '+tab+'</span></div><div class="xurl"><span>←</span><span>→</span><span>⟳</span><div class="xpill">🔒 '+url+'</div></div><div class="xpage">'+body+'</div>'+(toast?'<div class="xtoast">'+toast+'</div>':'')+'</div>';
const xDocs=(title,page,cls,saved)=>'<div class="xw '+(cls||'')+'"><div class="xhead"><span class="xlogo blue">≡</span><div><b>'+title+'</b><div class="xmenu"><u>Tệp</u><u>Chỉnh sửa</u><u>Xem</u><u>Chèn</u><u>Định dạng</u></div></div></div>'+(saved?'<div class="xsaved">✔ Đã lưu</div>':'')+'<div class="xtool"><span>↶</span><span>↷</span><span>🖨</span><span>100%</span><b>B</b><i>I</i><u>U</u></div><div class="xcanvas"><div class="xpg">'+page+'</div></div></div>';
/* bảng tính: cells = mảng 2 chiều, sel=[hàng đầu,cột đầu,hàng cuối,cột cuối] (tính từ 0), right = HTML đặt cạnh bảng, menu = hiện menu Chèn */
const xSheets=(title,cells,o)=>{ o=o||{};
  const rows=5, cols=3, s=o.sel, L='ABC';
  let t='<table class="xg"><tr><th></th>'+[...L].map(c=>'<th>'+c+'</th>').join('')+'</tr>';
  for(let r=0;r<rows;r++){ t+='<tr><td class="rn">'+(r+1)+'</td>';
    for(let c=0;c<cols;c++){ const inSel=s&&r>=s[0]&&r<=s[2]&&c>=s[1]&&c<=s[3];
      t+='<td class="'+(inSel?'sel':'')+(!s&&r===0&&c===0?' act':'')+'">'+((cells[r]&&cells[r][c])||'')+'</td>'; }
    t+='</tr>'; }
  t+='</table>';
  const ref=s?'A1:B4':'A1', val=(cells[0]&&cells[0][0])||'';
  return '<div class="xw act"><div class="xhead"><span class="xlogo green">▦</span><div><b>'+title+'</b><div class="xmenu"><u>Tệp</u><u>Chỉnh sửa</u><u>Xem</u><u'+(o.menu?' class="hot"':'')+'>Chèn</u><u>Định dạng</u></div></div></div>'+
    '<div class="xfx"><b>'+ref+'</b><span>ƒx</span><span>'+val+'</span></div>'+
    (o.menu?'<div class="xdrop"><div>Hàng</div><div>Cột</div><div>Ô</div><div class="hot">📊 Biểu đồ</div><div>Hình ảnh</div></div>':'')+
    '<div class="xsh">'+t+(o.right||'')+'</div></div>'; };
function orderGame(host, cfg, onWrong, onDone, k0, onStep){
  host.innerHTML='<p class="tip">'+cfg.q+'</p>'+(cfg.screens?'<div class="scr" id="scr"></div>':'')+'<ol class="ordl" id="ol"></ol><div class="row" id="pool"></div><div class="fb" id="ofb"></div>';
  const ol=host.querySelector('#ol'), pool=host.querySelector('#pool'), f=host.querySelector('#ofb'), scr=host.querySelector('#scr'); let k=k0||0;
  const show=()=>{ if(scr) scr.innerHTML=cfg.screens[k]; }; show();
  cfg.steps.forEach((t,i)=>{ if(i<k) ol.appendChild(el('<li>'+t+'</li>')); });
  shuffle(cfg.steps.map((t,i)=>[t,i]).filter(x=>x[1]>=k)).forEach(([t,i])=>{
    const b=el('<button class="chip">'+t+'</button>');
    b.onclick=()=>{
      if(i===k){ ol.appendChild(el('<li>'+t+'</li>')); b.remove(); k++; show(); if(onStep) onStep(k);
        if(k===cfg.steps.length){ fb(f,'ok','✔ '+cfg.why); onDone(f); } else fb(f,'ok','✔ Đúng rồi, bước tiếp theo là gì?'); }
      else { onWrong(); b.classList.add('bad'); setTimeout(()=>b.classList.remove('bad'),600); fb(f,'no',cfg.miss||'Chưa đúng thứ tự, hãy nghĩ xem việc nào phải làm trước.'); }
    };
    pool.appendChild(b);
  });
}
function real(st){
  const L=REAL, KEY='k5real:'+location.pathname; let i=0, wrong=0, k0=0;
  try{ const s=JSON.parse(localStorage.getItem(KEY)||'null'); if(s&&s.i<L.length){ i=s.i; wrong=s.wrong||0; k0=s.k||0; } }catch(e){}
  const save=(k)=>{ try{ localStorage.setItem(KEY,JSON.stringify({i,wrong,k:k||0})); }catch(e){} };
  const clear=()=>{ try{ localStorage.removeItem(KEY); }catch(e){} };
  function draw(){
    const s=L[i];
    st.innerHTML=brief('🌍','Việc thật '+(i+1)+'/'+L.length,'Em gặp tình huống này ngoài đời. Hãy xử lí như một người dùng thông minh.')+
      '<div class="prog"><i style="width:'+(i/L.length*100)+'%"></i></div><div class="rw"><div class="rwh">'+s.icon+' '+s.title+'</div><div class="rws">'+s.story+'</div></div><div id="rq"></div>';
    const onWrong=()=>{ wrong++; save(s.order?curK:0); };
    let curK=k0;
    const next=f=>{
      if(i<L.length-1){ i++; k0=0; save(0); f.insertAdjacentHTML('beforeend','<div style="margin-top:10px"><button class="btn orange" id="nq">Tình huống tiếp ▶</button></div>'); $('#nq').onclick=draw; }
      else { clear(); st.insertAdjacentHTML('beforeend','<p style="margin-top:12px"><b>Em đã xử lí xong mọi tình huống!</b> Số lần chọn sai: '+wrong+'.</p>'); finish(st,starsFor(wrong),st); }
    };
    if(s.order) orderGame($('#rq'),s.order,onWrong,next,k0,k=>{ curK=k; save(k); });
    else askQ(shuffleQ(s.Q),$('#rq'),onWrong,next);
  }
  draw();
}

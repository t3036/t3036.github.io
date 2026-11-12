/* ---------- Mô phỏng Microsoft Excel ----------
   Lưới A–H × 1–12. Giá trị thô lưu trong this.vals ("B2" → "15"), công thức bắt đầu bằng "=". */
const COLS = 'ABCDEFGH', ROWS = 12, DEF_W = 84;

class ExcelSim{
  constructor(host){
    this.host=host; this.log=new Set(); this.onchange=()=>{};
    host.innerHTML=`
    <div class="win x-win">
      ${winTitle('x','excel','Sổ làm việc1 – Excel')}
      <div class="tabs x-tabs">
        <button class="dis file">File</button><button class="on">Home</button><button class="dis">Insert</button><button class="dis">Page Layout</button>
        <button class="dis">Formulas</button><button class="dis">Data</button><button class="dis">Review</button><button class="dis">View</button>
      </div>
      <div class="rib x-rib">
        ${grp(bigBtn('','paste','Paste','dis')+stack(smBtn('','cut','Cut','dis'),smBtn('','copy','Copy','dis')),'Clipboard')}
        ${grp(stack(`<span class="box wide">Calibri ▾</span><span class="box sz"><b>11</b> ▾</span>`,
          `<button class="cmd txt" data-cmd="bold" title="Bold"><b>B</b></button><button class="cmd txt dis"><i>I</i></button><button class="cmd txt dis"><u>U</u></button>
           ${smBtn('','border','','dis')}<button class="cmd" data-cmd="fill" title="Fill Color">${ic('fill')}<b class="bar y"></b></button>${smBtn('','fontcolor','','dis')}`),'Font')}
        ${grp(stack(`${smBtn('','alignL','','dis')}${smBtn('','alignC','','dis')}${smBtn('','alignR','','dis')}`,`${smBtn('','indentL','','dis')}${smBtn('','indentR','','dis')}`),'Alignment')}
        ${grp(stack(`<span class="box wide">General ▾</span>`,`<button class="cmd txt dis">$</button><button class="cmd txt dis">%</button><button class="cmd txt dis">,</button>`),'Number')}
        ${grp(bigBtn('data-cmd="sum"','sum','AutoSum'),'Editing')}
      </div>
      <div class="x-fx"><span class="x-name" id="xName">A1</span><span class="xb">✕</span><span class="xb">✓</span><span class="x-f">fx</span><span class="x-val" id="xVal"></span></div>
      <div class="x-wrap" tabindex="0"></div>
      <div class="x-sheets"><span class="sh on">Sheet1</span><span class="sh">＋</span></div>
      <div class="sbar x-status"><span>Ready</span><span class="r">100%</span></div>
    </div>`;
    this.wrap=$('.x-wrap',host); this.w=Array(COLS.length).fill(DEF_W);
    this.vals={}; this.bold={}; this.fillc={}; this.sel={r:1,c:0}; this.selMode='cell'; this.edit=null;
    this.draw(); this.bind();
  }
  did(k){ return this.log.has(k); }
  mark(k){ this.log.add(k); this.onchange(); }
  reset(vals){ this.log.clear(); this.vals={...vals}; this.bold={}; this.fillc={}; this.w=Array(COLS.length).fill(DEF_W); this.sel={r:1,c:0}; this.selMode='cell'; this.draw(); this.onchange(); }
  snapshot(){ return {vals:this.vals,bold:this.bold,fillc:this.fillc,w:this.w,log:[...this.log]}; }
  restore(s){ this.vals={...s.vals}; this.bold={...s.bold}; this.fillc={...s.fillc}; this.w=[...s.w]; this.log=new Set(s.log); this.sel={r:1,c:0}; this.selMode='cell'; this.draw(); this.onchange(); }
  key(r,c){ return COLS[c]+r; }
  raw(k){ return this.vals[k]??''; }

  /* giá trị hiển thị: tính công thức đơn giản (cộng trừ nhân chia, SUM) */
  val(k,depth=0){
    const v=this.raw(k); if(typeof v!=='string'||v[0]!=='=') return v;
    if(depth>8) return '#REF!';
    try{
      let e=v.slice(1).toUpperCase().replace(/SUM\(([A-H])(\d+):([A-H])(\d+)\)/g,(_,a,r1,b,r2)=>{
        let t=0; for(let c=COLS.indexOf(a);c<=COLS.indexOf(b);c++) for(let r=+r1;r<=+r2;r++){ const x=parseFloat(this.val(this.key(r,c),depth+1)); if(!isNaN(x)) t+=x; }
        return t; });
      e=e.replace(/\b([A-H])(\d+)\b/g,(_,a,r)=>parseFloat(this.val(a+r,depth+1))||0);
      if(!/^[-+*/().\d\s]+$/.test(e)) return '#NAME?';
      return Function('return '+e)();
    }catch(_){ return '#ERR'; }
  }

  draw(){
    const th=(c)=>`<th class="ch ${this.selMode==='col'&&this.sel.c===c?'on':''}" data-c="${c}">${COLS[c]}<span class="rz" data-c="${c}"></span></th>`;
    let h=`<table class="x-grid"><colgroup><col style="width:34px">${this.w.map(w=>`<col style="width:${w}px">`).join('')}</colgroup>
      <thead><tr><th class="corner"></th>${[...COLS].map((_,c)=>th(c)).join('')}</tr></thead><tbody>`;
    for(let r=1;r<=ROWS;r++){
      h+=`<tr><th class="rh ${this.selMode==='row'&&this.sel.r===r?'on':''}" data-r="${r}">${r}</th>`;
      for(let c=0;c<COLS.length;c++){
        const k=this.key(r,c), v=this.val(k), num=typeof v==='number'||(v!==''&&!isNaN(v));
        const on=this.selMode==='cell'?(this.sel.r===r&&this.sel.c===c):this.selMode==='col'?this.sel.c===c:this.sel.r===r;
        h+=`<td data-k="${k}" data-r="${r}" data-c="${c}" class="${on?'sel':''} ${num?'num':''} ${this.bold[k]?'b':''}" style="${this.fillc[k]?'background:'+this.fillc[k]:''}">${esc(v)}</td>`;
      }
      h+='</tr>';
    }
    this.wrap.innerHTML=h+'</tbody></table>';
    const k=this.key(this.sel.r,this.sel.c);
    $('#xName',this.host).textContent=k; $('#xVal',this.host).textContent=this.raw(k);
  }
  refresh(){ const f=this.edit; this.draw(); if(f) this.startEdit(f.keep); }

  /* --- sự kiện --- */
  bind(){
    const w=this.wrap;
    w.addEventListener('mousedown',e=>{
      const rz=e.target.closest('.rz'); if(rz) return this.startResize(e,+rz.dataset.c);
      this.commit(false);
      const ch=e.target.closest('.ch'), rh=e.target.closest('.rh'), td=e.target.closest('td');
      if(ch){ this.sel.c=+ch.dataset.c; this.selMode='col'; this.mark('colhead:'+COLS[this.sel.c]); }
      else if(rh){ this.sel.r=+rh.dataset.r; this.selMode='row'; this.mark('rowhead:'+this.sel.r); }
      else if(td){ this.sel={r:+td.dataset.r,c:+td.dataset.c}; this.selMode='cell'; }
      else return;
      this.draw(); w.focus();
    });
    w.addEventListener('dblclick',e=>{
      const rz=e.target.closest('.rz'); if(rz) return this.autofit(+rz.dataset.c);
      if(e.target.closest('td')) this.startEdit(this.raw(this.key(this.sel.r,this.sel.c)));
    });
    w.addEventListener('keydown',e=>{
      if(this.edit) return;
      const s=this.sel; if(this.selMode!=='cell') this.selMode='cell';
      const mv=(dr,dc)=>{ e.preventDefault(); s.r=Math.min(ROWS,Math.max(1,s.r+dr)); s.c=Math.min(COLS.length-1,Math.max(0,s.c+dc)); this.draw(); };
      if(e.key==='ArrowDown'||e.key==='Enter') return mv(1,0);
      if(e.key==='ArrowUp') return mv(-1,0);
      if(e.key==='ArrowLeft') return mv(0,-1);
      if(e.key==='ArrowRight'||e.key==='Tab') return mv(0,1);
      if(e.key==='F2') return this.startEdit(this.raw(this.key(s.r,s.c)));
      if(e.key==='Delete'||e.key==='Backspace'){ delete this.vals[this.key(s.r,s.c)]; this.draw(); return this.onchange(); }
      if(e.key.length===1&&!e.ctrlKey&&!e.metaKey){ e.preventDefault(); this.startEdit(e.key); }
    });
    $$('[data-cmd]',this.host).forEach(b=>b.onmousedown=e=>{ e.preventDefault(); this.run(b.dataset.cmd); });
  }
  startEdit(text){
    const td=$(`td[data-k="${this.key(this.sel.r,this.sel.c)}"]`,this.wrap); if(!td) return;
    td.innerHTML=''; const i=document.createElement('input'); i.className='x-in'; i.value=text; td.appendChild(i);
    this.edit={keep:text,input:i}; i.focus(); i.setSelectionRange(text.length,text.length);
    i.addEventListener('keydown',e=>{
      e.stopPropagation();
      if(e.key==='Enter'){ e.preventDefault(); this.commit(true); this.move(1,0); this.mark('enter-down'); }
      else if(e.key==='Tab'){ e.preventDefault(); this.commit(true); this.move(0,1); }
      else if(e.key==='Escape'){ this.edit=null; this.draw(); this.wrap.focus(); }
    });
    i.addEventListener('input',()=>{ $('#xVal',this.host).textContent=i.value; });
  }
  commit(save){
    if(!this.edit) return; const v=this.edit.input.value, k=this.key(this.sel.r,this.sel.c);
    this.edit=null; if(save===false&&v===''&&!this.raw(k)){ this.draw(); return; }
    if(v==='') delete this.vals[k]; else this.vals[k]=v; this.draw(); this.onchange();
  }
  move(dr,dc){ this.sel.r=Math.min(ROWS,Math.max(1,this.sel.r+dr)); this.sel.c=Math.min(COLS.length-1,Math.max(0,this.sel.c+dc)); this.draw(); this.wrap.focus(); }

  /* --- độ rộng cột --- */
  startResize(e,c){
    e.preventDefault(); e.stopPropagation(); const x0=e.clientX, w0=this.w[c];
    const mv=ev=>{ this.w[c]=Math.max(36,w0+ev.clientX-x0); const col=$$('col',this.wrap)[c+1]; if(col) col.style.width=this.w[c]+'px'; };
    const up=()=>{ removeEventListener('pointermove',mv); removeEventListener('pointerup',up);
      if(Math.abs(this.w[c]-w0)>6) this.mark('col-drag:'+COLS[c]); };
    addEventListener('pointermove',mv); addEventListener('pointerup',up);
  }
  autofit(c){
    let m=COLS[c].length; for(let r=1;r<=ROWS;r++) m=Math.max(m,String(this.val(this.key(r,c))).length);
    this.w[c]=Math.max(40,Math.round(m*9+20)); this.draw(); this.mark('col-dbl:'+COLS[c]);
  }

  /* --- nút lệnh --- */
  run(cmd){
    const {r,c}=this.sel, k=this.key(r,c);
    if(cmd==='bold'){ this.bold[k]=!this.bold[k]; this.draw(); this.mark('bold'); }
    if(cmd==='fill'){ this.fillc[k]=this.fillc[k]?'':'#fff2a8'; this.draw(); this.mark('fill'); }
    if(cmd==='sum'){
      let t=r-1; while(t>=1&&!isNaN(parseFloat(this.val(this.key(t,c))))) t--;
      if(t===r-1) return toast('Hãy chọn ô nằm ngay dưới cột số cần cộng nhé!');
      this.vals[k]=`=SUM(${COLS[c]}${t+1}:${COLS[c]}${r-1})`; this.draw(); this.mark('sum');
    }
  }
  cell(k){ return this.raw(k); }
}

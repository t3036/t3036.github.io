/* Spark 1 · Engine bài 13–16: mở khóa từng bước, phím tắt cho giáo viên */
(function () {
  const L = window.LESSON, steps = L.steps, last = steps.length - 1;
  const $ = (s, r) => (r || document).querySelector(s);
  const KEY = 'spark1-kit-' + L.id;
  let st = { cur: 0, unlocked: 0, done: {}, rv: { i: 0, s: 0 } };
  try { const j = JSON.parse(localStorage.getItem(KEY)); if (j && j.done) st = Object.assign(st, j); } catch (e) {}
  window.addEventListener('pagehide', () => save());
  const save = () => { try { localStorage.setItem(KEY, JSON.stringify(st)); } catch (e) {} };
  if (location.hash === '#review') { st.cur = st.unlocked = last; }
  st.cur = Math.min(st.cur, last); st.unlocked = Math.min(Math.max(st.unlocked, st.cur), last);

  document.documentElement.style.setProperty('--ac', L.color);
  document.documentElement.style.setProperty('--ac2', L.color2);
  document.title = 'Bài ' + L.no + ' – ' + L.title;
  document.body.innerHTML = `
    <header class="hd"><a class="back" href="../../../spark-lv1.html">⬅ Danh sách</a><span class="badge">Bài ${L.no}</span><span class="ttl">${L.title}</span>
      <div class="chips" id="chips"></div><button class="help-btn" id="helpb" title="Phím tắt (H)">?</button></header>
    <main class="stage"><div class="card" id="card"></div></main>
    <footer class="ft"><button class="nav" id="prev" title="Quay lại (←)">◀</button><div class="dots" id="dots"></div><button class="nav" id="next" title="Bước kế (→)">▶</button></footer>
    <div class="lockmsg" id="lm"></div><div class="tmode">👩‍🏫 Đang hiện đáp án (A)</div>
    <div class="helpov" id="help"><div class="helpbox"><h3>⌨️ Phím tắt cho giáo viên</h3><table>
      <tr><td><kbd>→</kbd> <kbd>←</kbd></td><td>Sang / quay lại bước (nếu đã mở khóa)</td></tr>
      <tr><td><kbd>U</kbd></td><td>🔓 Mở khóa bước kế tiếp</td></tr>
      <tr><td><kbd>L</kbd></td><td>🔒 Khóa mọi bước phía sau bước hiện tại</td></tr>
      <tr><td><kbd>Shift</kbd>+<kbd>U</kbd></td><td>🔓 Mở khóa tất cả</td></tr>
      <tr><td><kbd>Shift</kbd>+<kbd>L</kbd></td><td>🔒 Khóa lại từ đầu (xóa tiến độ)</td></tr>
      <tr><td><kbd>1</kbd>–<kbd>${L.secs.length}</kbd></td><td>Nhảy tới phần đã mở</td></tr>
      <tr><td><kbd>Shift</kbd>+<kbd>1</kbd>–<kbd>${L.secs.length}</kbd></td><td>Mở khóa và nhảy tới phần đó</td></tr>
      <tr><td><kbd>R</kbd></td><td>Mở khóa và đến phần Ôn tập</td></tr>
      <tr><td><kbd>A</kbd></td><td>Hiện / ẩn đáp án (viền vàng)</td></tr>
      <tr><td><kbd>F</kbd></td><td>Toàn màn hình</td></tr></table>
      <p style="text-align:center"><button class="btn" id="hc">Đã hiểu</button></p></div></div>`;
  const card = $('#card');

  /* ---------- helpers ---------- */
  const shuffle = (a, keep) => { a = a.slice(); if (keep) return a; for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const toast = (m) => { const e = $('#lm'); e.textContent = m; e.classList.add('show'); clearTimeout(toast.t); toast.t = setTimeout(() => e.classList.remove('show'), 1700); };
  const burst = (el) => { const r = (el || card).getBoundingClientRect(); const x = r.left + r.width / 2, y = r.top + Math.min(r.height / 2, 120); ['⭐', '✨', '🎉', '🌟', '💫', '⭐', '✨'].forEach((c) => { const s = document.createElement('span'); s.className = 'cf'; s.textContent = c; s.style.left = x + 'px'; s.style.top = y + 'px'; s.style.setProperty('--dx', (Math.random() * 360 - 180) + 'px'); s.style.setProperty('--dy', (Math.random() * -240 - 20) + 'px'); document.body.appendChild(s); setTimeout(() => s.remove(), 1000); }); };
  const secOf = (i) => steps[i].sec;
  const firstOfSec = (n) => steps.findIndex((s) => s.sec === n);

  /* ---------- navigation ---------- */
  function go(i) { if (i < 0 || i > last) return; if (i > st.unlocked) return toast('🔒 Bước này chưa mở – cùng làm bước trước nhé!'); st.cur = i; save(); show(); }
  function unlockTo(n) { if (n > st.unlocked) { st.unlocked = Math.min(n, last); save(); } refreshNav(); }
  function finish() {
    st.done[st.cur] = 1; if (st.cur === st.unlocked && st.cur < last) st.unlocked++; save(); refreshNav(); if (!['learn', 'hero'].includes(steps[st.cur].t)) burst();
    const slot = card.querySelector('.slot'); if (slot && st.cur < last && !slot.dataset.set) { slot.dataset.set = 1; slot.innerHTML = '<button class="btn pulse" id="go-next">Tiếp ▶</button>'; $('#go-next').onclick = () => go(st.cur + 1); }
  }
  function refreshNav() {
    $('#prev').disabled = st.cur === 0; $('#next').disabled = st.cur >= st.unlocked || st.cur === last;
    $('#dots').innerHTML = steps.map((s, i) => `<button class="dot ${i === st.cur ? 'cur' : st.done[i] ? 'done' : i > st.unlocked ? 'locked' : ''} ${i > 0 && secOf(i) !== secOf(i - 1) ? 'sec' : ''}" data-i="${i}" title="Bước ${i + 1}"></button>`).join('');
    $('#chips').innerHTML = L.secs.map((s, n) => { const f = firstOfSec(n); return `<button class="chip ${secOf(st.cur) === n ? 'on' : ''} ${f > st.unlocked ? 'lock' : ''}" data-n="${n}">${f > st.unlocked ? '🔒' : s.e} ${s.n}</button>`; }).join('');
  }
  $('#dots').onclick = (e) => { const d = e.target.closest('.dot'); if (d) go(+d.dataset.i); };
  $('#chips').onclick = (e) => { const c = e.target.closest('.chip'); if (c) go(firstOfSec(+c.dataset.n)); };
  $('#prev').onclick = () => go(st.cur - 1); $('#next').onclick = () => go(st.cur + 1);
  $('#helpb').onclick = () => $('#help').classList.add('show'); $('#hc').onclick = () => $('#help').classList.remove('show');

  document.addEventListener('keydown', (e) => {
    if ((e.target.matches && e.target.matches('input,textarea')) || e.ctrlKey || e.metaKey || e.altKey) return;
    const k = e.key, K = k.toLowerCase(), n = (e.code || '').match(/^Digit(\d)$/);
    if (k === 'ArrowRight' || k === 'PageDown') go(st.cur + 1);
    else if (k === 'ArrowLeft' || k === 'PageUp') go(st.cur - 1);
    else if (K === 'u' && !e.shiftKey) { if (st.unlocked < last) { unlockTo(st.unlocked + 1); toast('🔓 Đã mở bước ' + (st.unlocked + 1)); } }
    else if (K === 'u') { unlockTo(last); toast('🔓 Đã mở khóa tất cả'); }
    else if (K === 'l' && !e.shiftKey) { st.unlocked = st.cur; save(); refreshNav(); toast('🔒 Đã khóa các bước phía sau'); }
    else if (K === 'l') { st = { cur: 0, unlocked: 0, done: {}, rv: { i: 0, s: 0 } }; save(); show(); toast('🔒 Đã khóa lại từ đầu'); }
    else if (K === 'r') { unlockTo(last); go(last); }
    else if (K === 'a') { document.body.classList.toggle('teacher'); }
    else if (K === 'h' || k === '?') $('#help').classList.toggle('show');
    else if (K === 'f') { document.fullscreenElement ? document.exitFullscreen() : document.documentElement.requestFullscreen && document.documentElement.requestFullscreen(); }
    else if (n && +n[1] >= 1 && +n[1] <= L.secs.length) { const f = firstOfSec(+n[1] - 1); if (e.shiftKey) { unlockTo(f); go(f); toast('🔓 Đã mở phần ' + n[1]); } else go(f); }
    else if (k === 'Escape') $('#help').classList.remove('show');
  });

  /* ---------- hiển thị bước ---------- */
  function head(s) { return `<span class="tag">${L.secs[s.sec].e} ${L.secs[s.sec].n}</span>${s.extra ? '<span class="extra-tag">⭐ Bài tập thêm</span>' : ''}`; }
  function show() {
    const s = steps[st.cur]; window.onbeforeunload = null; card.className = 'card'; card.innerHTML = ''; card.style.animation = 'none'; void card.offsetWidth; card.style.animation = '';
    R[s.t](s); refreshNav(); window.scrollTo(0, 0);
    const sl = card.querySelector('.slot');
    if (st.done[st.cur] && st.cur < last && sl && !sl.dataset.set && !sl.innerHTML) { sl.dataset.set = 1; sl.innerHTML = '<button class="btn pulse" id="go-next">Tiếp ▶</button>'; $('#go-next').onclick = () => go(st.cur + 1); }
  }

  const R = {};
  /* Mở đầu */
  R.hero = (s) => {
    card.innerHTML = `<div class="hero"><div class="big-emoji">${L.emoji}</div><h1>${L.title}</h1><div class="sub">IC3 GS6 Spark Level 1 · Chủ đề 3: Quản lí thông tin</div><div class="goals">${s.goals.map(([e, t]) => `<div class="goal"><b>${e}</b>${t}</div>`).join('')}</div><div class="cta" style="justify-content:center"><button class="btn pulse" id="st">Bắt đầu thôi! 🚀</button></div></div>`;
    $('#st').onclick = () => { finish(); go(st.cur + 1); };
  };
  /* Giảng: các thẻ hiện dần */
  R.learn = (s) => {
    const cs = s.cards || []; let shown = st.done[st.cur] ? cs.length : Math.min(1, cs.length);
    card.innerHTML = `${head(s)}<h2 class="big">${s.h}</h2>${s.lead ? `<div class="lead">${s.lead}</div>` : ''}<div class="cards" ${s.cols ? `style="grid-template-columns:repeat(${s.cols},1fr)"` : ''}>${cs.map((c, i) => `<div class="pc ${i >= shown ? 'hide' : ''}" style="--c:${c.c || '#eef6ff'}">${c.ic ? `<div class="ic">${c.ic}</div>` : ''}<div class="t">${c.t}</div>${c.d ? `<div class="d">${c.d}</div>` : ''}${c.ex ? `<div class="ex">${c.ex}</div>` : ''}</div>`).join('')}</div>${s.after ? `<div class="lead">${s.after}</div>` : ''}<div class="cta"><span class="msg"></span><span class="slot"></span></div>`;
    const slot = $('.slot'), tail = () => { finish(); };
    const btn = () => { slot.innerHTML = shown < cs.length ? '<button class="btn ghost" id="rv">Hiện tiếp 👀</button>' : ''; if (shown < cs.length) { $('#rv').onclick = () => { card.querySelectorAll('.pc')[shown++].classList.remove('hide'); btn(); }; } else tail(); };
    btn();
  };

  /* ---------- hỏi đáp ---------- */
  const LT = 'ABCDEF';
  function qRender(q, host, done) {
    host.innerHTML = '';
    const wrap = document.createElement('div'); host.appendChild(wrap);
    ({ choice: qChoice, tf: qTF, match: qMatch, spot: qSpot }[q.tf ? 'tf' : q.m ? 'match' : q.spot ? 'spot' : 'choice'])(q, wrap, done);
  }
  function qChoice(q, host, done) {
    const multi = Array.isArray(q.a), ans = multi ? q.a : [q.a]; let tries = 0; const sel = new Set();
    const ord = shuffle(q.o.map((_, i) => i), q.fixed);
    host.innerHTML = `<div class="q-text">${q.q}</div>${q.img || ''}${multi ? `<div class="pick-note">👉 Chọn ${ans.length} đáp án</div>` : ''}<div class="opts">${ord.map((i, k) => `<button class="opt" data-i="${i}" ${ans.includes(i) ? 'data-ok="1"' : ''}><span class="lt">${LT[k]}</span><span>${q.o[i]}</span></button>`).join('')}</div><div class="fb" hidden></div><div class="cta"><span class="msg"></span>${multi ? '<button class="btn chk" disabled>Kiểm tra ✔</button>' : ''}<span class="slot"></span></div>`;
    const opts = [...host.querySelectorAll('.opt')], msg = host.querySelector('.msg'), fb = host.querySelector('.fb'), chk = host.querySelector('.chk');
    const win = () => { opts.forEach((o) => { o.disabled = true; if (ans.includes(+o.dataset.i)) o.classList.add('good'); else o.classList.remove('sel'); }); if (chk) chk.remove(); msg.textContent = tries ? '👍 Giỏi lắm!' : '🎉 Chính xác!'; if (q.why) { fb.hidden = false; fb.innerHTML = '💡 ' + q.why; } done(tries === 0); };
    opts.forEach((o) => o.onclick = () => {
      const i = +o.dataset.i;
      if (!multi) { if (ans.includes(i)) return win(); tries++; o.classList.add('bad'); o.disabled = true; msg.textContent = 'Chưa đúng, thử lại nhé 💪'; return; }
      sel.has(i) ? sel.delete(i) : sel.add(i); o.classList.toggle('sel'); chk.disabled = sel.size !== ans.length; msg.textContent = '';
    });
    if (chk) chk.onclick = () => { if ([...sel].sort().join() === ans.slice().sort().join()) return win(); tries++; msg.textContent = 'Chưa đúng, chọn lại nhé 💪'; opts.forEach((o) => { if (sel.has(+o.dataset.i)) { o.classList.add('bad'); setTimeout(() => o.classList.remove('bad', 'sel'), 450); } }); sel.clear(); chk.disabled = true; };
  }
  function qTF(q, host, done) {
    const yes = q.yes || 'Đúng', no = q.no || 'Sai'; let tries = 0; const pick = {};
    host.innerHTML = `<div class="q-text">${q.q}</div><div class="tfs">${q.tf.map(([t, v], i) => `<div class="tfr" data-i="${i}"><div class="tx">${t}</div><div class="tb"><button class="tfb" data-v="1" ${v ? 'data-ok="1"' : ''}>${yes}</button><button class="tfb" data-v="0" ${v ? '' : 'data-ok="1"'}>${no}</button></div></div>`).join('')}</div><div class="fb" hidden></div><div class="cta"><span class="msg"></span><button class="btn chk" disabled>Kiểm tra ✔</button><span class="slot"></span></div>`;
    const rows = [...host.querySelectorAll('.tfr')], chk = host.querySelector('.chk'), msg = host.querySelector('.msg');
    rows.forEach((r) => r.querySelectorAll('.tfb').forEach((b) => b.onclick = () => { if (r.classList.contains('good')) return; pick[r.dataset.i] = b.dataset.v === '1'; r.querySelectorAll('.tfb').forEach((x) => x.classList.toggle('sel', x === b)); r.classList.remove('bad'); chk.disabled = rows.some((x) => !(x.dataset.i in pick) && !x.classList.contains('good')); }));
    chk.onclick = () => {
      let bad = 0; rows.forEach((r) => { if (r.classList.contains('good')) return; const ok = pick[r.dataset.i] === !!q.tf[r.dataset.i][1]; if (ok) { r.classList.add('good'); r.querySelectorAll('.tfb').forEach((b) => b.disabled = true); } else { bad++; r.classList.add('bad'); r.querySelectorAll('.tfb').forEach((x) => x.classList.remove('sel')); delete pick[r.dataset.i]; } });
      chk.disabled = true;
      if (bad) { tries++; msg.textContent = 'Có ' + bad + ' ý chưa đúng – chọn lại ý màu đỏ nhé 💪'; return; }
      chk.remove(); msg.textContent = tries ? '👍 Giỏi lắm!' : '🎉 Chính xác!'; if (q.why) { const fb = host.querySelector('.fb'); fb.hidden = false; fb.innerHTML = '💡 ' + q.why; } done(tries === 0);
    };
  }
  const MC = ['#ff7a59', '#2bb673', '#8b5cf6', '#f5a623', '#06b6d4', '#ec4899'];
  function qMatch(q, host, done) {
    let tries = 0, sel = null, left = q.m.length; const rs = shuffle(q.m.map((_, i) => i), q.fixed);
    host.innerHTML = `<div class="q-text">${q.q}</div><div class="match"><div class="mcol">${q.m.map((p, i) => `<button class="mi" data-l="${i}" data-k="${i + 1}">${p[0]}</button>`).join('')}</div><div class="mcol">${rs.map((i) => `<button class="mi" data-r="${i}" data-k="${i + 1}">${q.m[i][1]}</button>`).join('')}</div></div><div class="pick-note" style="margin-top:12px">👉 Bấm một ô bên trái, rồi bấm ô bên phải phù hợp</div><div class="cta"><span class="msg"></span><span class="slot"></span></div>`;
    const msg = host.querySelector('.msg');
    host.querySelectorAll('.mi').forEach((b) => b.onclick = () => {
      if ('l' in b.dataset) { host.querySelectorAll('[data-l]').forEach((x) => x.classList.remove('sel')); b.classList.add('sel'); sel = b; return; }
      if (!sel) { msg.textContent = 'Chọn ô bên trái trước nhé 👈'; return; }
      if (sel.dataset.l === b.dataset.r) { const c = MC[+sel.dataset.l % MC.length]; [sel, b].forEach((x) => { x.classList.remove('sel'); x.classList.add('done'); x.style.setProperty('--c', c); }); sel = null; msg.textContent = ''; if (!--left) { msg.textContent = tries ? '👍 Giỏi lắm!' : '🎉 Chính xác!'; done(tries === 0); } }
      else { tries++; b.classList.add('bad'); setTimeout(() => b.classList.remove('bad'), 400); msg.textContent = 'Chưa khớp, thử lại nhé 💪'; }
    });
  }
  function qSpot(q, host, done) {
    let tries = 0; const ans = [].concat(q.a);
    host.innerHTML = `<div class="q-text">${q.q}</div><div id="spot"></div><div class="cta"><span class="msg">👆 Bấm vào đúng vị trí trên hình</span><span class="slot"></span></div>`;
    const msg = host.querySelector('.msg');
    const b = MiniBrowser(host.querySelector('#spot'), Object.assign({ mode: 'quiz', view: 210 }, q.spot, {
      onPick(part, node) { if (ans.includes(part)) { node.style.outline = '4px solid #22c55e'; node.style.outlineOffset = '-4px'; msg.textContent = (tries ? '👍 ' : '🎉 ') + 'Đúng rồi: ' + (MB.PART_NAMES[part] || part); host.querySelector('#spot').onclick = null; done(tries === 0); } else { tries++; msg.textContent = 'Đó là “' + (MB.PART_NAMES[part] || part) + '” – thử lại nhé 💪'; } },
    }));
    ans.forEach((p) => { const n = host.querySelector(`[data-part="${p}"]`); if (n) n.dataset.ok = 1; });
    if (q.why) { const o = done; done = (f) => { const d = document.createElement('div'); d.className = 'fb'; d.innerHTML = '💡 ' + q.why; host.appendChild(d); o(f); }; }
  }
  /* Phân loại từng thẻ (bài tập thêm) */
  R.sort = (s) => {
    let i = 0, ok = 0; const items = shuffle(s.items), [A, B] = s.labels;
    const draw = () => {
      if (i >= items.length) { card.querySelector('#sbody').innerHTML = `<div class="sort-card">🎉 Đúng ${ok}/${items.length} thẻ!</div><div class="cta"><span class="slot"></span></div>`; return finish(); }
      card.querySelector('#sbody').innerHTML = `<div class="sort-prog">Thẻ ${i + 1}/${items.length}</div><div class="sort-card">${items[i][0]}</div><div class="sort-btns"><button class="btn" data-v="0" ${items[i][1] === 0 ? 'data-ok="1"' : ''}>${A}</button><button class="btn" style="background:#ff7a59" data-v="1" ${items[i][1] === 1 ? 'data-ok="1"' : ''}>${B}</button></div><div class="cta"><span class="msg"></span></div>`;
      card.querySelectorAll('.sort-btns .btn').forEach((b) => b.onclick = () => { if (+b.dataset.v === items[i][1]) { ok++; i++; draw(); } else { card.querySelector('.msg').textContent = 'Thử lại nhé 💪'; b.disabled = true; } });
    };
    card.innerHTML = `${head(s)}<h2 class="big">${s.h}</h2><div id="sbody"></div>`; draw();
  };

  R.q = (s) => {
    const q = s.ref ? L.bank[s.ref] : s.q;
    card.innerHTML = `${head(s)}<div id="qh"></div>`;
    qRender(q, $('#qh'), () => finish());
  };

  /* Tìm các bộ phận của trình duyệt – lần lượt từng bộ phận */
  R.tour = (s) => {
    let k = 0; const al = { forward: 'back', reload: 'back', min: 'close', max: 'close' };
    card.innerHTML = `${head(s)}<h2 class="big">${s.h}</h2><div class="lead" id="ask"></div><div id="tb"></div><div class="cta"><span class="msg" id="tm"></span><span class="slot"></span></div>`;
    const ask = () => {
      card.querySelectorAll('[data-ok]').forEach((n) => delete n.dataset.ok);
      if (k >= s.need.length) { $('#ask').innerHTML = '🎉 Em đã tìm được tất cả các bộ phận!'; return; }
      const p = s.need[k]; $('#ask').innerHTML = `🎯 Bấm vào: <span class="mark">${s.short[p]}</span> <span style="font-size:.65em;color:var(--soft)">(${k + 1}/${s.need.length}) – ${s.hint[p]}</span>`;
      const n = card.querySelector(`#tb [data-part="${p}"]`); if (n) n.dataset.ok = 1;
    };
    MiniBrowser($('#tb'), Object.assign({ mode: 'quiz', view: 150 }, s.spot, {
      onPick(part) {
        if (k >= s.need.length) return; const name = MB.PART_NAMES[part] || part;
        if ((al[part] || part) === s.need[k]) { k++; $('#tm').textContent = '✅ Đúng rồi: ' + name; ask(); if (k === s.need.length) finish(); else burst($('#ask')); }
        else $('#tm').textContent = '❌ Đó là “' + name + '”. Em thử tìm lại nhé 💪';
      },
    }));
    ask();
  };

  /* Thực hành trình duyệt giả lập */
  R.sim = (s) => {
    let g = 0; const gs = s.goals;
    card.innerHTML = `${head(s)}<h2 class="big">${s.h}</h2><div class="sim-wrap"><div class="goals-list"><h4>🎯 Nhiệm vụ</h4><div id="gl"></div></div><div id="sb"></div></div><div class="cta"><span class="msg"></span><span class="slot"></span></div>`;
    const draw = () => { $('#gl').innerHTML = gs.map((x, i) => `<div class="gl ${i < g ? 'ok' : i === g ? 'cur' : ''}"><span class="bx">${i < g ? '✓' : i + 1}</span><span>${x.text}</span></div>`).join(''); };
    const match = (e, x) => e.type === x.ev && (!x.via || e.via === x.via) && (!x.url || MB.norm(e.url) === MB.norm(x.url)) && (!x.q || (e.q || '').length > 0) && (!x.named || e.named);
    if (((s.spot || {}).keys || []).includes('Ctrl+W')) window.onbeforeunload = (e) => { e.preventDefault(); e.returnValue = ''; };
    MiniBrowser($('#sb'), Object.assign({ mode: 'live', keys: [] }, s.spot, {
      onEvent(e) { if (g >= gs.length || !match(e, gs[g])) return; g++; draw(); if (g === gs.length) { $('.msg').textContent = '🎉 Hoàn thành nhiệm vụ!'; finish(); } else burst($('#gl')); },
    }));
    draw();
  };

  /* Ôn tập cuối bài */
  R.review = (s) => {
    const ids = L.reviewIds || Object.keys(L.bank); let i = Math.min((st.rv || {}).i || 0, ids.length), score = (st.rv || {}).s || 0;
    const keep = () => { st.rv = { i, s: score }; save(); };
    const draw = () => {
      if (i >= ids.length) {
        const pct = score / ids.length, stars = pct >= .9 ? 3 : pct >= .6 ? 2 : 1;
        card.innerHTML = `<div class="result"><div class="stars">${'⭐'.repeat(stars)}${'☆'.repeat(3 - stars)}</div><h2 class="big">Em hoàn thành bài ${L.no}!</h2><div class="sc">${score}/${ids.length}</div><div class="lead">câu đúng ngay lần đầu</div><div class="cta" style="justify-content:center"><button class="btn ghost" id="again">Làm lại 🔄</button><a class="btn" style="text-decoration:none" href="../../../spark-lv1.html">Về danh sách 🏠</a></div></div>`;
        $('#again').onclick = () => { i = 0; score = 0; keep(); draw(); }; st.done[st.cur] = 1; save(); refreshNav(); burst(); return;
      }
      card.innerHTML = `${head(s)}<div class="rv-n">Câu ${i + 1}/${ids.length}</div><div class="rv-bar"><i style="width:${(i / ids.length) * 100}%"></i></div><div id="rq"></div>`;
      qRender(L.bank[ids[i]], $('#rq'), (first) => { if (first) score++; burst(); const slot = card.querySelector('.slot'); slot.innerHTML = `<button class="btn pulse" id="rn">${i === ids.length - 1 ? 'Xem kết quả 🏆' : 'Câu tiếp ▶'}</button>`; $('#rn').onclick = () => { i++; keep(); draw(); window.scrollTo(0, 0); }; });
    };
    draw();
  };

  show();
})();

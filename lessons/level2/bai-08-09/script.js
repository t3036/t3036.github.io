/* ============================================================
   BÀI HỌC TƯƠNG TÁC — LEVEL 2 · BÀI 08 + 09: GIAO TIẾP KĨ THUẬT SỐ
   Nội dung sinh ra từ bộ câu hỏi trong questions.js (QUIZ).
   6 nhiệm vụ: mỗi nhiệm vụ có phần mô phỏng + chuỗi câu hỏi vận dụng.
   ============================================================ */

/* ---------- helpers ---------- */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const shuffle = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.random() * (i + 1) | 0; [a[i], a[j]] = [a[j], a[i]]; } return a; };
let toastT;
function toast(msg, bad) {
  const t = $('#toast'); t.textContent = msg; t.className = 'toast show' + (bad ? ' bad' : '');
  clearTimeout(toastT); toastT = setTimeout(() => t.className = 'toast' + (bad ? ' bad' : ''), 2200);
}
function shake(el) { el.classList.remove('shake'); void el.offsetWidth; el.classList.add('shake'); }

/* ---------- tiến độ ---------- */
const N = 6, SAVE_KEY = 'l2b0809-progress';
const state = { cur: 0, done: Array(N).fill(false) };
try {
  const s = JSON.parse(localStorage.getItem(SAVE_KEY) || 'null');
  if (s && Array.isArray(s.done) && s.done.length === N) { state.done = s.done.map(Boolean); state.cur = Math.min(N - 1, Math.max(0, s.cur | 0)); }
} catch (e) {}
function save() { try { localStorage.setItem(SAVE_KEY, JSON.stringify({ cur: state.cur, done: state.done })); } catch (e) {} }
function resetAll() {
  if (!confirm('Xóa toàn bộ tiến độ và học lại từ đầu?')) return;
  try { localStorage.removeItem(SAVE_KEY); } catch (e) {}
  state.done = Array(N).fill(false); $('#congrats')?.remove(); go(0);
}
function complete(i) {
  if (state.done[i]) return;
  state.done[i] = true; save(); drawTabs(); toast('✅ Hoàn thành nhiệm vụ ' + (i + 1) + '!');
  if (state.done.every(Boolean)) setTimeout(showCongrats, 900);
}
function showCongrats() {
  if ($('#congrats')) return;
  const el = document.createElement('div'); el.id = 'congrats';
  const bits = ['🎉', '⭐', '💬', '📧', '🏆', '✨']; let conf = '';
  for (let i = 0; i < 24; i++) conf += `<i style="left:${(i * 41) % 100}%;animation-delay:${(i % 8) * .3}s;animation-duration:${3 + (i % 5) * .6}s">${bits[i % 6]}</i>`;
  el.innerHTML = `<div class="confetti" aria-hidden="true">${conf}</div><div class="cg-box"><div class="cg-ic">🏆</div><h2>Chúc mừng em!</h2>
    <p>Em đã hoàn thành cả <b>6 nhiệm vụ</b> của Bài 08 + 09.</p>
    <p>Em biết chọn đúng kênh giao tiếp, viết Email chuẩn mực, họp trực tuyến lịch sự và thanh toán kĩ thuật số an toàn.</p>
    <div class="cg-btns"><button class="btn" id="cgClose">Tiếp tục</button><button class="btn ghost" id="cgReset">↺ Học lại</button></div></div>`;
  document.body.appendChild(el);
  $('#cgClose').onclick = () => el.remove(); $('#cgReset').onclick = resetAll;
}

/* ============================================================
   THÀNH PHẦN DÙNG CHUNG
   ============================================================ */

/* ---- quizBlock: chạy tuần tự các câu hỏi lấy từ QUIZ theo khóa ---- */
function quizBlock(root, keys, onDone, title) {
  let idx = 0, firstTry = 0;
  const L = 'ABCDEF';
  root.innerHTML = `<div class="card"><h3><span class="st">✔</span>${title || 'Thử thách vận dụng'}</h3><div id="qbBody"></div></div>`;
  const body = $('#qbBody', root);

  function show() {
    if (idx >= keys.length) return finish();
    const Q = QUIZ[keys[idx]]; let tries = 0, answered = false;
    body.innerHTML = `<div class="qb-head"><span>Câu ${idx + 1} / ${keys.length}</span></div>
      <div class="qb-bar">${keys.map((_, i) => `<i class="${i < idx ? 'on' : i === idx ? 'cur' : ''}"></i>`).join('')}</div>
      <div id="qArea"></div><div id="qFb"></div><div class="nav" style="justify-content:flex-end"><button class="btn" id="qNext" hidden>${idx === keys.length - 1 ? 'Hoàn thành ✓' : 'Câu tiếp theo →'}</button></div>`;
    const area = $('#qArea', body), fb = $('#qFb', body), next = $('#qNext', body);
    next.onclick = () => { idx++; show(); };
    function good() {
      if (answered) return; answered = true; if (tries === 0) firstTry++;
      fb.innerHTML = `<div class="fb ok">🎉 Chính xác! ${esc(Q.explain)}</div>`; next.hidden = false; next.focus();
    }
    function bad(extra) {
      tries++; shake(area);
      fb.innerHTML = `<div class="fb no">Chưa đúng.${extra || ''}</div>` + (tries >= 1 ? `<div class="fb hint">💡 Gợi ý: ${esc(Q.hint)}</div>` : '');
    }
    if (Q.type === 'quiz_single') {
      const order = shuffle(Q.options.map((t, i) => i)), isTF = Q.options.length === 2 && Q.options[0] === 'Đúng';
      const list = isTF ? Q.options.map((t, i) => i) : order;
      area.innerHTML = `<p class="q-text">${esc(Q.question)}</p>` + list.map((oi, p) => `<button class="opt" data-o="${oi}"><span class="l">${L[p]}</span><span>${esc(Q.options[oi])}</span></button>`).join('');
      area.onclick = e => {
        const b = e.target.closest('.opt'); if (!b || b.disabled || answered) return;
        if (+b.dataset.o === Q.correctAnswer) { b.classList.add('right'); $$('.opt', area).forEach(x => x.disabled = true); good(); }
        else { b.classList.add('wrong'); b.disabled = true; bad(); }
      };
    } else if (Q.type === 'quiz_multiple') {
      const need = Q.correctAnswers.length, order = shuffle(Q.options.map((t, i) => i));
      area.innerHTML = `<p class="q-text">${esc(Q.question)}</p>` + order.map((oi, p) => `<button class="opt" data-o="${oi}"><span class="l">${L[p]}</span><span>${esc(Q.options[oi])}</span></button>`).join('') +
        `<button class="btn sm" id="chk" style="margin-top:6px">Kiểm tra (chọn ${need})</button>`;
      area.onclick = e => {
        if (e.target.closest('#chk')) {
          const sel = $$('.opt.sel', area).map(b => +b.dataset.o);
          if (sel.length !== need) return toast('Hãy chọn đúng ' + need + ' đáp án', true);
          if (sel.every(o => Q.correctAnswers.includes(o))) { $$('.opt', area).forEach(b => { b.disabled = true; b.classList.remove('sel'); if (Q.correctAnswers.includes(+b.dataset.o)) b.classList.add('right'); }); $('#chk', area).hidden = true; good(); }
          else { $$('.opt.sel', area).forEach(b => b.classList.remove('sel')); bad(' Hãy chọn lại.'); }
          return;
        }
        const b = e.target.closest('.opt'); if (!b || b.disabled || answered) return;
        if (!b.classList.contains('sel') && $$('.opt.sel', area).length >= need) return toast('Chỉ chọn ' + need + ' đáp án', true);
        b.classList.toggle('sel');
      };
    } else if (Q.type === 'quiz_dropdown') {
      const parts = Q.question.split('___');
      area.innerHTML = parts.slice(0, Q.blanks.length).map((t, i) =>
        `<div class="row-dd">${i === 0 ? '<b>' + esc(t.split(':')[0]) + ':</b> ' + esc(t.split(':').slice(1).join(':')) : esc(t)}
          <select data-i="${i}"><option value="">— chọn —</option>${Q.blanks[i].options.map((o, k) => `<option value="${k}">${esc(o)}</option>`).join('')}</select></div>`).join('') +
        `<button class="btn sm" id="chk">Kiểm tra</button>`;
      $('#chk', area).onclick = () => {
        const sels = $$('select', area); if (sels.some(s => s.value === '')) return toast('Hãy chọn đủ các ô', true);
        let ok = true; sels.forEach((s, i) => { const r = +s.value === Q.blanks[i].correctAnswer; s.classList.toggle('right', r); s.classList.toggle('wrong', !r); if (!r) ok = false; });
        if (ok) { sels.forEach(s => s.disabled = true); $('#chk', area).hidden = true; good(); } else bad(' Các ô màu đỏ cần sửa lại.');
      };
    } else if (Q.type === 'quiz_matching') {
      const left = Q.pairs.map((p, i) => ({ i, t: p.left, ic: p.icon })), right = shuffle(Q.pairs.map((p, i) => ({ i, t: p.right })));
      let selL = null, matched = 0;
      area.innerHTML = `<p class="q-text">${esc(Q.question)}</p><div class="mt"><div id="mtL">${left.map(l => `<button data-i="${l.i}" style="width:100%;margin-bottom:8px">${l.ic} ${esc(l.t)}</button>`).join('')}</div>
        <div id="mtR">${right.map(r => `<button data-i="${r.i}" style="width:100%;margin-bottom:8px">${esc(r.t)}</button>`).join('')}</div></div>`;
      area.onclick = e => {
        const b = e.target.closest('button'); if (!b || b.classList.contains('done') || answered) return;
        if (b.parentElement.id === 'mtL') { $$('#mtL button', area).forEach(x => x.classList.remove('sel')); b.classList.add('sel'); selL = b; return; }
        if (!selL) return toast('Chọn một mô tả bên trái trước', true);
        if (selL.dataset.i === b.dataset.i) { selL.classList.remove('sel'); selL.classList.add('done'); b.classList.add('done'); selL = null; if (++matched === Q.pairs.length) good(); }
        else { b.classList.add('sel'); setTimeout(() => b.classList.remove('sel'), 400); bad(); }
      };
    }
  }
  function finish() {
    body.innerHTML = `<div class="resultbox"><div style="font-size:50px">🏅</div><div class="big">${firstTry}/${keys.length}</div><p>câu đúng ngay lần đầu</p></div>`;
    onDone && onDone(firstTry, keys.length);
  }
  show();
}

/* ---- sorter: phân loại từng thẻ vào các ngăn ---- */
function sorter(root, o) {
  let queue = shuffle(o.cards), total = o.cards.length, solved = 0, lock = false;
  root.innerHTML = `<div class="sorter"><div id="scCard"></div><div class="sc-bins" id="scBins">${o.bins.map(b => `<button class="btn ${b.cls || ''}" data-b="${b.id}">${b.label}</button>`).join('')}</div><div id="scFb"></div><div class="pips" id="scPips">${o.cards.map(() => '<i></i>').join('')}</div></div>`;
  const cardEl = $('#scCard', root), fb = $('#scFb', root);
  function draw() {
    if (!queue.length) { cardEl.innerHTML = `<div class="sc-card" style="border-color:var(--green)"><span class="e">🎉</span>Phân loại xong!</div>`; $('#scBins', root).hidden = true; o.onDone && o.onDone(); return; }
    const c = queue[0]; cardEl.innerHTML = `<div class="sc-card"><span class="e">${c.e || ''}</span>${esc(c.t)}</div>`;
  }
  $('#scBins', root).onclick = e => {
    const b = e.target.closest('button'); if (!b || lock || !queue.length) return;
    const c = queue[0];
    if (b.dataset.b === c.bin) {
      queue.shift(); solved++; $$('#scPips i', root)[solved - 1].classList.add('on');
      fb.innerHTML = `<div class="fb ok">✅ ${esc(c.note || 'Đúng rồi!')}</div>`;
    } else {
      queue.push(queue.shift()); shake(cardEl);
      fb.innerHTML = `<div class="fb no">❌ ${esc(c.note || 'Chưa đúng, thẻ này sẽ quay lại sau.')}</div>`;
    }
    draw();
  };
  draw();
}

/* ============================================================
   KHUNG: tab, điều hướng
   ============================================================ */
const MISSIONS = [
  { t: 'Hai nhịp giao tiếp', i: '⏱️' },
  { t: 'Chọn kênh đúng', i: '📡' },
  { t: 'Xưởng Email', i: '📧' },
  { t: 'Ứng xử trực tuyến', i: '🎥' },
  { t: 'Thanh toán & mua hàng', i: '💳' },
  { t: 'Kiểm tra cuối bài', i: '🏁' }
];
function drawTabs() {
  $('#tabs').innerHTML = MISSIONS.map((m, i) => `<button class="tab ${i === state.cur ? 'on' : ''} ${state.done[i] ? 'done' : ''}" data-i="${i}"><span class="n">${state.done[i] ? '✓' : i + 1}</span>${m.i} ${m.t}</button>`).join('');
  const n = state.done.filter(Boolean).length;
  $('#xpfill').style.width = n / N * 100 + '%'; $('#xptxt').textContent = n + ' / ' + N;
}
$('#tabs').addEventListener('click', e => { const b = e.target.closest('.tab'); if (b) go(+b.dataset.i); });
function go(i) { state.cur = i; save(); drawTabs(); const m = $('#main'); m.innerHTML = ''; RENDER[i](m); window.scrollTo({ top: 0 }); }
function head(i, title, lead) { return `<div class="crumb">Nhiệm vụ ${i + 1} / ${N}</div><h2 class="title">${title}</h2><p class="lead">${lead}</p>`; }
function navBtns(i) {
  return `<div class="nav"><button class="btn ghost" ${i === 0 ? 'disabled' : ''} data-nav="${i - 1}">← Trước</button>
  <button class="btn" ${i === N - 1 ? 'disabled' : ''} data-nav="${i + 1}">Nhiệm vụ tiếp →</button></div>`;
}
document.addEventListener('click', e => { const b = e.target.closest('[data-nav]'); if (b && !b.disabled) go(+b.dataset.nav); });
(function () { const n = state.done.filter(Boolean).length; if (n) $('#start').textContent = '▶ Tiếp tục học (' + n + '/' + N + ')'; })();
$('#start').onclick = () => { $('#boot').classList.add('hidden'); $('#shell').classList.remove('hidden'); go(state.cur); };
$('#resetBtn').onclick = resetAll;

/* ============================================================
   NHIỆM VỤ 1 — Đồng bộ / không đồng bộ
   (timezone, asyncTwo, delayTwo)
   ============================================================ */
function m1(root) {
  root.innerHTML = head(0, 'Hai nhịp giao tiếp: ngay lập tức hay chậm một chút?', 'Mỗi tin nhắn đều đi theo một trong hai nhịp. Hãy tự khám phá vì sao cả hai đều cần thiết.') + `
  <div class="card"><h3>Khái niệm</h3>
    <div class="cols">
      <div class="mini"><span class="ic">⚡</span><b>Đồng bộ (Synchronous)</b><p>Gửi và nhận <b>ngay lập tức</b>, theo thời gian thực.</p></div>
      <div class="mini"><span class="ic">⏳</span><b>Không đồng bộ (Asynchronous)</b><p>Có <b>độ trễ</b> giữa lúc gửi và lúc nhận.</p></div>
    </div></div>
  <div class="card"><h3><span class="st">1</span>Thí nghiệm múi giờ</h3>
    <p style="margin-top:0">Em ở <b>Hà Nội</b>, bạn pen-pal ở <b>New York</b>. Giờ làm việc của cả hai là 8:00 – 17:00. Kéo thanh trượt để tìm giờ mà <b>cả hai cùng đang làm việc</b>.</p>
    <div class="sim"><input type="range" id="hr" min="0" max="23" value="9">
      <div class="clocks"><div class="clock" id="c1"></div><div class="clock" id="c2"></div></div>
      <div class="verdict" id="vd"></div></div></div>
  <div id="m1a"></div>
  <div class="card" id="m1sort"><h3><span class="st">2</span>Phân loại nhanh</h3><p style="margin-top:0">Thẻ này là giao tiếp <b>đồng bộ</b> hay <b>không đồng bộ</b>?</p><div id="m1sorter"></div></div>
  <div id="m1q" hidden></div>
  ${navBtns(0)}`;

  const seen = new Set();
  function clk() {
    const h = +$('#hr').value, ny = (h - 12 + 24) % 24, w = x => x >= 8 && x < 17;
    const f = x => String(x).padStart(2, '0') + ':00';
    $('#c1').className = 'clock ' + (w(h) ? 'work' : 'rest'); $('#c2').className = 'clock ' + (w(ny) ? 'work' : 'rest');
    $('#c1').innerHTML = `<div class="city">🇻🇳 Hà Nội</div><div class="t">${f(h)}</div><div class="s">${w(h) ? '💼 đang làm việc' : '😴 ngoài giờ'}</div>`;
    $('#c2').innerHTML = `<div class="city">🇺🇸 New York</div><div class="t">${f(ny)}</div><div class="s">${w(ny) ? '💼 đang làm việc' : '😴 ngoài giờ'}</div>`;
    seen.add(h);
    $('#vd').innerHTML = (w(h) && w(ny)) ? '🎉 Cả hai cùng làm việc!' : (seen.size >= 6 ? '❌ Không có giờ nào trùng → hãy dùng giao tiếp <b>không đồng bộ</b> (Email, tin nhắn)!' : '❌ Chưa trùng giờ. Thử kéo sang giờ khác…');
  }
  $('#hr').oninput = clk; clk();

  sorter($('#m1sorter'), {
    bins: [{ id: 'sync', label: '⚡ Đồng bộ' }, { id: 'async', label: '⏳ Không đồng bộ', cls: 'alt' }],
    cards: [
      { e: '📞', t: 'Gọi điện thoại', bin: 'sync', note: 'Nói và nghe cùng lúc → đồng bộ.' },
      { e: '🎥', t: 'Hội thảo video', bin: 'sync', note: 'Thời gian thực → đồng bộ.' },
      { e: '💬', t: 'Chat trực tiếp', bin: 'sync', note: 'Chat thời gian thực → đồng bộ.' },
      { e: '📡', t: 'Phát trực tiếp (Live)', bin: 'sync', note: 'Truyền ngay lúc sự việc diễn ra → đồng bộ.' },
      { e: '📧', t: 'Gửi Email', bin: 'async', note: 'Người nhận đọc sau → có độ trễ.' },
      { e: '📱', t: 'Tin nhắn SMS', bin: 'async', note: 'SMS có độ trễ nhỏ → không đồng bộ.' },
      { e: '🗣️', t: 'Bài đăng trên diễn đàn', bin: 'async', note: 'Người khác trả lời khi họ có thời gian.' },
      { e: '📝', t: 'Bình luận trên tài liệu', bin: 'async', note: 'Bình luận để lại, người khác xem sau.' }
    ],
    onDone() { $('#m1q').hidden = false; quizBlock($('#m1q'), ['timezone', 'asyncTwo', 'delayTwo'], () => complete(0)); $('#m1q').scrollIntoView({ behavior: 'smooth' }); }
  });
}

/* ============================================================
   NHIỆM VỤ 2 — Chọn kênh đúng
   (voip, urgentFriend, imUnavailable, conferenceApps, zoomApp, teamsApp,
    interviewTools, forumBest, msForum, outlookFaq, longMessageFile, smsLimit,
    shortMessageTwo, streamingVideo, streamingMusic, matchStreaming, matchCommunication)
   ============================================================ */
const CHANNELS = ['📞 Gọi điện', '💬 Nhắn tin tức thời (IM)', '🎥 Hội nghị truyền hình', '🗣️ Diễn đàn', '📝 Blog', '📧 Email', '📱 SMS'];
const SCEN = [
  { t: 'Em muốn hỏi nhóm thảo luận game về cách vượt màn khó.', a: 3, why: 'Diễn đàn: hỏi - đáp với cộng đồng, ai biết sẽ trả lời.' },
  { t: 'Em cần hoàn tiền từ một công ty và có ảnh hóa đơn để đính kèm.', a: 5, why: 'Email: nội dung dài, chính thức, đính kèm được tệp.' },
  { t: 'Em muốn viết một bài dài về quan điểm đa dạng văn hóa của mình.', a: 4, why: 'Blog: trang trình bày quan điểm cá nhân.' },
  { t: 'Sau giờ học, em báo huấn luyện viên là hôm nay em nghỉ tập.', a: 6, why: 'SMS: tin ngắn gọn, gửi qua mạng di động.' },
  { t: 'Chủ tịch công ty họp với quản lí cấp cao ở nhiều tỉnh, cần nhìn thấy nhau.', a: 2, why: 'Hội nghị truyền hình: họp nhiều nơi bằng hình ảnh + âm thanh.' },
  { t: 'Bạn thân đang trực tuyến, em hỏi nhanh bài tập Tin học.', a: 1, why: 'IM: văn bản thời gian thực, nhanh, tiện.' },
  { t: 'Em cần trả lời gấp từ bạn nhưng tài khoản của bạn đang ngoại tuyến.', a: 0, why: 'Gọi điện: cách đồng bộ để bạn nhận ngay.' }
];
function m2(root) {
  root.innerHTML = head(1, 'Chọn kênh giao tiếp đúng cho từng tình huống', 'Không có kênh “tốt nhất”, chỉ có kênh phù hợp nhất với mục đích. Em hãy thử từng công cụ.') + `
  <div class="card"><h3>Bản đồ công cụ</h3><div class="cols">
    <div class="mini"><span class="ic">📞</span><b>Gọi điện · VoIP</b><p>Truyền giọng nói. VoIP cho phép gọi qua Internet.</p></div>
    <div class="mini"><span class="ic">🎥</span><b>Hội nghị trực tuyến</b><p>Zoom, Teams, Skype: họp bằng âm thanh, hình ảnh. OneDrive, Dropbox chỉ lưu trữ tập tin.</p></div>
    <div class="mini"><span class="ic">🗣️</span><b>Diễn đàn · Blog</b><p>Diễn đàn: hỏi đáp. Blog: quan điểm cá nhân. Diễn đàn Microsoft cần tài khoản Microsoft.</p></div>
    <div class="mini"><span class="ic">📧</span><b>Email</b><p>Nội dung dài, đính kèm tập tin.</p></div>
    <div class="mini"><span class="ic">📱</span><b>SMS · IM</b><p>Tin nhắn ngắn gọn; SMS có giới hạn kí tự.</p></div>
    <div class="mini"><span class="ic">📺</span><b>Streaming</b><p>Xem/nghe ngay không cần tải trọn nội dung. Live streaming thì phát trực tiếp.</p></div>
  </div></div>

  <div class="card"><h3><span class="st">1</span>Máy đếm kí tự SMS</h3>
    <p style="margin-top:0">Gõ một tin nhắn. SMS chỉ chứa <b>160 kí tự không dấu</b> hoặc <b>70 kí tự có dấu</b>.</p>
    <textarea id="sms" rows="3" placeholder="Thử gõ: Hôm nay em xin nghỉ buổi tập vì bị ốm ạ."></textarea>
    <div class="cnt"><span class="pill" id="smsLen">0 kí tự</span><span class="pill" id="smsLim">Giới hạn 160</span><span class="pill" id="smsSeg">1 tin</span></div></div>

  <div class="card"><h3><span class="st">2</span>Tình huống → Kênh</h3><div id="scn"></div></div>
  <div id="m2q" hidden></div>
  ${navBtns(1)}`;

  $('#sms').oninput = () => {
    const v = $('#sms').value, acc = /[^\x00-\x7F]/.test(v), lim = acc ? 70 : 160;
    $('#smsLen').textContent = v.length + ' kí tự'; $('#smsLim').textContent = 'Giới hạn ' + lim + (acc ? ' (có dấu)' : ' (không dấu)');
    const segs = Math.max(1, Math.ceil(v.length / lim)); $('#smsSeg').textContent = segs + ' tin'; $('#smsSeg').className = 'pill' + (segs > 1 ? ' bad' : '');
  };

  let si = 0, wrongOnce = false;
  function scn() {
    if (si >= SCEN.length) {
      $('#scn').innerHTML = `<div class="fb ok">🎉 Em đã chọn đúng kênh cho cả ${SCEN.length} tình huống!</div>`;
      const q = $('#m2q'); q.hidden = false;
      quizBlock(q, ['voip', 'urgentFriend', 'imUnavailable', 'conferenceApps', 'zoomApp', 'teamsApp', 'interviewTools', 'forumBest', 'msForum', 'outlookFaq', 'longMessageFile', 'smsLimit', 'shortMessageTwo', 'streamingVideo', 'streamingMusic', 'matchStreaming', 'matchCommunication'], () => complete(1));
      return;
    }
    const s = SCEN[si]; wrongOnce = false;
    $('#scn').innerHTML = `<div class="scn">Tình huống ${si + 1}/${SCEN.length}: ${esc(s.t)}</div><div class="dock">${CHANNELS.map((c, i) => `<button data-i="${i}">${c}</button>`).join('')}</div><div id="scFb2"></div>`;
    $('#scn .dock').onclick = e => {
      const b = e.target.closest('button'); if (!b || b.disabled) return;
      if (+b.dataset.i === s.a) { b.classList.add('right'); $$('#scn .dock button').forEach(x => x.disabled = true); $('#scFb2').innerHTML = `<div class="fb ok">✅ ${esc(s.why)}</div>`; si++; setTimeout(scn, 1500); }
      else { b.classList.add('wrong'); b.disabled = true; shake($('#scn .dock')); $('#scFb2').innerHTML = `<div class="fb no">Kênh này chưa phù hợp, thử lại nhé.</div>`; }
    };
  }
  scn();
}

/* ============================================================
   NHIỆM VỤ 3 — Xưởng Email
   (replyTime, ccField, bccPurpose, matchEmailMeaning, matchEmailFields,
    allCaps, emailEthics, namCaps, teamListCc, bccPrivate, principalEmail)
   ============================================================ */
const CONTACTS = {
  lan: { n: 'Cô Lan (GVCN)', i: '👩‍🏫' }, an: { n: 'An', i: '⚽' }, binh: { n: 'Bình', i: '⚽' }, chi: { n: 'Chi', i: '⚽' },
  p1: { n: 'PH Nam', i: '👨' }, p2: { n: 'PH Mai', i: '👩' }, p3: { n: 'PH Khoa', i: '🧑' }, smith: { n: 'Bà Smith (phỏng vấn)', i: '💼' }
};
const MAIL_TASKS = [
  { t: 'Em gửi <b>danh sách đội bóng</b> cho <b>cô Lan</b> (người nhận chính) và muốn <b>cả đội cùng thấy</b> thư này.',
    sub: 'Danh sách đội bóng', check(m) { const e = []; if (m.to.join() !== 'lan') e.push('Người nhận chính (To) phải là cô Lan.'); if (['an', 'binh', 'chi'].some(x => !m.cc.includes(x))) e.push('Các bạn trong đội cần nằm ở Cc để mọi người cùng thấy.'); if (m.bcc.length) e.push('Không cần dùng Bcc ở đây.'); return e; } },
  { t: 'Thầy hiệu trưởng gửi thông báo <b>đi học đúng giờ</b> cho 3 phụ huynh nhưng <b>không để họ thấy Email của nhau</b>.',
    sub: 'Thông báo đi học đúng giờ', check(m) { const e = []; if (['p1', 'p2', 'p3'].some(x => !m.bcc.includes(x))) e.push('Cả 3 phụ huynh phải nằm trong Bcc để địa chỉ được ẩn.'); if (m.cc.length || m.to.some(x => x.startsWith('p'))) e.push('Phụ huynh ở To/Cc sẽ bị lộ địa chỉ cho nhau.'); return e; } },
  { t: 'Em lỡ giờ phỏng vấn nên viết Email <b>xin dời lịch</b> cho <b>bà Smith</b>. Hãy viết thật lịch sự: có lời chào, <b>không viết hoa toàn bộ</b>, không lạm dụng dấu “!”.',
    sub: 'Xin dời lịch phỏng vấn', check(m) {
      const e = []; if (m.to.join() !== 'smith') e.push('Người nhận chính là bà Smith.');
      const L = m.body.replace(/[^A-Za-zÀ-ỹ]/g, ''), up = L.replace(/[^A-ZÀÁẢÃẠĂẰẮẲẴẶÂẦẤẨẪẬĐÈÉẺẼẸÊỀẾỂỄỆÌÍỈĨỊÒÓỎÕỌÔỒỐỔỖỘƠỜỚỞỠỢÙÚỦŨỤƯỪỨỬỮỰỲÝỶỸỴ]/g, '');
      if (!/kính gửi|xin chào|chào/i.test(m.body)) e.push('Thiếu lời chào (ví dụ “Kính gửi bà Smith,”).'); if (L.length < 20) e.push('Nội dung quá ngắn.');
      if (L.length && up.length / L.length > .3) e.push('Viết hoa quá nhiều: người đọc sẽ thấy như đang la hét.'); if (/!{2,}/.test(m.body)) e.push('Bớt dấu chấm than “!!!”.'); return e; } }
];
function m3(root) {
  root.innerHTML = head(2, 'Xưởng Email: To, Cc, Bcc và phép lịch sự', 'Soạn Email thật trong cửa sổ bên dưới. Hoàn thành 3 yêu cầu, rồi xem người nhận nhìn thấy gì!') + `
  <div class="card"><h3>Các thành phần của Email</h3><div class="cols">
    <div class="mini"><span class="ic">👤</span><b>To</b><p>Người nhận chính</p></div>
    <div class="mini"><span class="ic">👥</span><b>Cc</b><p>Bản sao <b>công khai</b>: mọi người thấy nhau</p></div>
    <div class="mini"><span class="ic">🙈</span><b>Bcc</b><p>Bản sao <b>ẩn danh</b>: không hiện với người khác</p></div>
    <div class="mini"><span class="ic">🏷️</span><b>Subject · Body · Mức quan trọng</b><p>Chủ đề · Nội dung · Low / Normal / High</p></div>
  </div><div class="key am">Trong môi trường chuyên nghiệp, hãy trả lời Email trong vòng <b>24 giờ</b>.</div></div>

  <div class="card"><h3 id="tkh"></h3><div class="task" id="tkt"></div>
    <div class="mail"><div class="mail-bar">✉️ Thư mới</div>
      <div class="mrow act" data-f="to"><label>To</label><div class="chips"></div></div>
      <div class="mrow" data-f="cc"><label>Cc</label><div class="chips"></div></div>
      <div class="mrow" data-f="bcc"><label>Bcc</label><div class="chips"></div></div>
      <div class="mrow"><label>Subject</label><input id="sub" placeholder="Chủ đề…"></div>
      <div class="mrow"><label>Mức</label><select id="pri"><option>Low</option><option selected>Normal</option><option>High</option></select></div>
      <textarea id="body" placeholder="Nội dung…"></textarea><div class="tone" id="tone"></div></div>
    <p style="margin:10px 0 0;font-weight:700">Bấm vào hàng To / Cc / Bcc rồi chọn người nhận:</p>
    <div class="contacts" id="cts"></div>
    <button class="btn" id="send">✈ Gửi thư</button><div id="mfb"></div><div id="inb"></div></div>
  <div id="m3q" hidden></div>
  ${navBtns(2)}`;

  let ti = 0, active = 'to', M = { to: [], cc: [], bcc: [] };
  function chips() {
    ['to', 'cc', 'bcc'].forEach(f => $(`.mrow[data-f=${f}] .chips`).innerHTML = M[f].map(id => `<span class="chip x" data-r="${f}:${id}">${CONTACTS[id].i} ${CONTACTS[id].n} ✕</span>`).join('') || '<span style="color:var(--mute)">…</span>');
    $$('.mrow[data-f]').forEach(r => r.classList.toggle('act', r.dataset.f === active));
    $('#cts').innerHTML = Object.keys(CONTACTS).map(id => `<button data-id="${id}" class="${M[active].includes(id) ? 'in' : ''}">${CONTACTS[id].i} ${CONTACTS[id].n}</button>`).join('');
  }
  function task() {
    if (ti >= MAIL_TASKS.length) { $('#tkh').innerHTML = '🎉 Đã xong 3 yêu cầu!'; $('#tkt').textContent = 'Em đã dùng To, Cc, Bcc và giọng điệu lịch sự đúng cách.'; $('#send').hidden = true;
      const q = $('#m3q'); q.hidden = false; quizBlock(q, ['replyTime', 'ccField', 'bccPurpose', 'matchEmailMeaning', 'matchEmailFields', 'teamListCc', 'bccPrivate', 'principalEmail', 'allCaps', 'namCaps', 'emailEthics'], () => complete(2)); return; }
    M = { to: [], cc: [], bcc: [] }; active = 'to'; $('#sub').value = ''; $('#body').value = ''; $('#inb').innerHTML = ''; $('#mfb').innerHTML = '';
    $('#tkh').innerHTML = `<span class="st">${ti + 1}</span>Yêu cầu ${ti + 1} / ${MAIL_TASKS.length}`; $('#tkt').innerHTML = MAIL_TASKS[ti].t; chips(); tone();
  }
  function tone() {
    const L = $('#body').value.replace(/[^A-Za-zÀ-ỹ]/g, ''), up = L.replace(/[^A-ZÀÁẢÃẠĂẰẮẲẴẶÂẦẤẨẪẬĐÈÉẺẼẸÊỀẾỂỄỆÌÍỈĨỊÒÓỎÕỌÔỒỐỔỖỘƠỜỚỞỠỢÙÚỦŨỤƯỪỨỬỮỰỲÝỶỸỴ]/g, ''), r = L.length ? up.length / L.length : 0;
    $('#tone').innerHTML = r > .5 ? '😠 Toàn chữ in hoa: người đọc cảm thấy như bị <b>la hét</b>!' : r > .3 ? '😬 Hơi nhiều chữ in hoa…' : '🙂 Giọng điệu ổn';
  }
  $('#body').oninput = tone;
  document.querySelector('.mail').addEventListener('click', e => {
    const x = e.target.closest('.chip.x'); if (x) { const [f, id] = x.dataset.r.split(':'); M[f] = M[f].filter(k => k !== id); chips(); return; }
    const r = e.target.closest('.mrow[data-f]'); if (r) { active = r.dataset.f; chips(); }
  });
  $('#cts').onclick = e => {
    const b = e.target.closest('button'); if (!b) return; const id = b.dataset.id;
    ['to', 'cc', 'bcc'].forEach(f => M[f] = M[f].filter(k => k !== id || f === active));
    M[active] = M[active].includes(id) ? M[active].filter(k => k !== id) : [...M[active], id]; chips();
  };
  $('#send').onclick = () => {
    const m = { to: M.to, cc: M.cc, bcc: M.bcc, body: $('#body').value }, T = MAIL_TASKS[ti], errs = T.check(m);
    if (!m.to.length && !m.bcc.length && !m.cc.length) errs.unshift('Chưa chọn người nhận.');
    if (!$('#sub').value.trim()) errs.push('Em quên điền Subject (chủ đề).');
    if (errs.length) { shake($('.mail')); $('#mfb').innerHTML = `<div class="fb no"><b>Chưa gửi được:</b><br>• ${errs.map(esc).join('<br>• ')}</div>`; return; }
    const names = a => a.map(i => CONTACTS[i].n).join(', ') || '—';
    const all = [...new Set([...m.to, ...m.cc, ...m.bcc])];
    $('#mfb').innerHTML = `<div class="fb ok">✅ Đã gửi! Hãy xem từng người nhận thấy gì trong hộp thư của họ:</div>`;
    $('#inb').innerHTML = `<div class="inbox">${all.map(id => `<div class="m"><h4>${CONTACTS[id].i} Hộp thư của ${esc(CONTACTS[id].n)}</h4>
      <div class="ln"><b>Chủ đề:</b> ${esc($('#sub').value)}</div><div class="ln"><b>To:</b> ${esc(names(m.to))}</div>
      ${m.cc.length ? `<div class="ln"><b>Cc:</b> ${esc(names(m.cc))}</div>` : ''}
      ${m.bcc.includes(id) ? '<span class="bcc">🙈 Em nhận thư này qua Bcc: người khác không thấy tên em</span>' : ''}</div>`).join('')}</div>
      <div style="margin-top:10px"><button class="btn alt" id="nxt">${ti === MAIL_TASKS.length - 1 ? 'Hoàn thành yêu cầu' : 'Yêu cầu tiếp theo →'}</button></div>`;
    $('#nxt').onclick = () => { ti++; task(); };
    $('#send').hidden = true;
  };
  const oldTask = task; task = function () { $('#send').hidden = false; oldTask(); }; task();
}

/* ============================================================
   NHIỆM VỤ 4 — Ứng xử trực tuyến
   (venue, prepVideo, firstVideo, webinarChat, speakerphone, phoneInMeeting,
    communityRule, toneTF, communityTF, cultural)
   ============================================================ */
const POSTS = [
  { av: '😡', t: 'NGU QUÁ, AI MÀ TIN ĐƯỢC CÁI NÀY!!!', bad: true, why: 'Viết hoa toàn bộ và thiếu tôn trọng.' },
  { av: '🙂', t: 'Mình chưa đồng ý vì số liệu này đã cũ. Bạn xem lại nguồn mới giúp mình nhé.', bad: false, why: 'Phản hồi lịch sự, xây dựng, có lí do.' },
  { av: '🤪', t: 'Email của Hùng là hung.nguyen@mail.com, ai cần thì liên hệ nha!', bad: true, why: 'Chia sẻ thông tin cá nhân của người khác khi chưa được phép.' },
  { av: '🙂', t: 'Cảm ơn mọi người đã chia sẻ, mình học được nhiều điều!', bad: false, why: 'Lịch sự và tích cực.' },
  { av: '😏', t: 'Mình chép bình luận của Lan sang nhóm khác nhé, khỏi xin phép đâu.', bad: true, why: 'Không đăng lại bình luận của thành viên khi chưa xin phép.' }
];
const SETUP = [
  { n: '📍 Địa điểm', a: 'Quán cà phê đông, nhiều tiếng ồn', b: 'Phòng yên tĩnh, ít tiếng ồn', ok: 1 },
  { n: '💡 Ánh sáng', a: 'Cửa sổ sáng ở phía sau lưng', b: 'Đèn sáng ở phía trước mặt', ok: 1 },
  { n: '📷 Camera', a: 'Đặt thấp, quay từ dưới lên', b: 'Đặt ngang tầm mắt', ok: 1 },
  { n: '🎙️ Micro & loa', a: 'Vào họp luôn, không kiểm tra', b: 'Kiểm tra Micro, loa và công nghệ họp trước', ok: 1 }
];
function m4(root) {
  root.innerHTML = head(3, 'Ứng xử trực tuyến: họp video, điện thoại và cộng đồng', 'Giao tiếp tốt không chỉ là chọn đúng công cụ mà còn là cư xử đúng cách.') + `
  <div class="card"><h3>Quy tắc cần nhớ</h3><div class="cols">
    <div class="mini"><span class="ic">🔡</span><b>Hạn chế chữ in hoa</b><p>Kiểm tra lỗi trước khi gửi.</p></div>
    <div class="mini"><span class="ic">🤝</span><b>Lịch sự</b><p>Đối xử với người khác như em muốn được đối xử.</p></div>
    <div class="mini"><span class="ic">🔒</span><b>Bảo vệ thông tin</b><p>Không chia sẻ Email/thông tin cá nhân của người khác khi chưa xin phép; giả định ai cũng có thể lan truyền.</p></div>
    <div class="mini"><span class="ic">🌍</span><b>Đa dạng văn hóa</b><p>Tìm hiểu chuẩn mực văn hóa; cân nhắc thông dịch viên.</p></div>
  </div></div>

  <div class="card"><h3><span class="st">1</span>Dọn phòng họp video</h3><p style="margin-top:0">Chọn cách thiết lập tốt nhất. Quan sát khung camera thay đổi!</p>
    <div class="room"><div><div class="cam" id="cam"><span class="face" style="font-size:80px">🧑‍💻</span><span class="lbl">Xem trước camera của em</span></div>
      <div class="ready"><i id="rd"></i></div><div id="rdt" style="font-weight:700"></div></div>
    <div id="setup"></div></div></div>

  <div class="card"><h3><span class="st">2</span>Dò lỗi trong cộng đồng</h3><p style="margin-top:0">Bấm vào các bình luận <b>không phù hợp</b> để gắn cờ 🚩, sau đó bấm Kiểm tra.</p>
    <div id="posts">${POSTS.map((p, i) => `<div class="post" data-i="${i}"><span class="av">${p.av}</span><div><div>${esc(p.t)}</div><div class="why" hidden>${esc(p.why)}</div></div></div>`).join('')}</div>
    <button class="btn sm" id="pchk">Kiểm tra</button><div id="pfb"></div></div>
  <div id="m4q" hidden></div>
  ${navBtns(3)}`;

  const pick = SETUP.map(() => -1);
  function setupDraw() {
    $('#setup').innerHTML = SETUP.map((s, i) => `<div class="setrow"><div class="nm">${s.n}</div><div class="two"><button data-i="${i}" data-v="0" class="${pick[i] === 0 ? 'sel' : ''}">${s.a}</button><button data-i="${i}" data-v="1" class="${pick[i] === 1 ? 'sel' : ''}">${s.b}</button></div></div>`).join('');
    const cam = $('#cam'); cam.classList.toggle('noise', pick[0] === 0); cam.classList.toggle('dark', pick[1] === 0); cam.classList.toggle('low', pick[2] === 0); cam.classList.toggle('nomic', pick[3] === 0);
    const good = pick.filter((v, i) => v === SETUP[i].ok).length; $('#rd').style.width = good / SETUP.length * 100 + '%';
    $('#rdt').textContent = good === SETUP.length ? '🎉 Sẵn sàng 100%! Em đã chuẩn bị một buổi họp chuyên nghiệp.' : 'Mức sẵn sàng: ' + good + '/' + SETUP.length;
  }
  $('#setup').onclick = e => { const b = e.target.closest('button'); if (!b) return; pick[+b.dataset.i] = +b.dataset.v; setupDraw(); };
  setupDraw();

  const flags = new Set();
  $('#posts').onclick = e => { const p = e.target.closest('.post'); if (!p || p.dataset.lock) return; const i = p.dataset.i; flags.has(i) ? flags.delete(i) : flags.add(i); p.classList.toggle('flag', flags.has(i)); p.querySelector('.av').textContent = flags.has(i) ? '🚩' : POSTS[+i].av; };
  $('#pchk').onclick = () => {
    let ok = true;
    POSTS.forEach((p, i) => { const el = $(`.post[data-i="${i}"]`), f = flags.has(String(i)); if (f !== p.bad) ok = false; });
    if (ok) {
      $$('.post').forEach(el => { el.dataset.lock = 1; el.querySelector('.why').hidden = false; el.classList.add(POSTS[+el.dataset.i].bad ? 'flag' : 'good'); });
      $('#pfb').innerHTML = '<div class="fb ok">✅ Chính xác! Em nhận ra đủ các hành vi không phù hợp và những bình luận đúng chuẩn.</div>'; $('#pchk').hidden = true;
      const q = $('#m4q'); q.hidden = false; quizBlock(q, ['communityRule', 'toneTF', 'communityTF', 'venue', 'prepVideo', 'firstVideo', 'webinarChat', 'speakerphone', 'phoneInMeeting', 'cultural'], () => complete(3));
    } else { shake($('#posts')); $('#pfb').innerHTML = '<div class="fb no">Chưa đúng: có bình luận bị bỏ sót hoặc gắn cờ nhầm. Hãy đọc lại và thử tiếp.</div>'; }
  };
}

/* ============================================================
   NHIỆM VỤ 5 — Thanh toán & mua hàng trong ứng dụng
   (payTF, payHow, ewallet, matchInApp)
   ============================================================ */
const WALLET_STEPS = [
  { e: '🏦', t: 'Liên kết', d: 'Em liên kết ví VNPay với tài khoản ngân hàng hoặc thẻ.' },
  { e: '📲', t: 'Chạm / quét mã', d: 'Em chạm hoặc quét mã tại quầy, không cần nhập thông tin thẻ mỗi lần.' },
  { e: '✍️', t: 'Ủy quyền giao dịch', d: 'Em xác thực (vân tay/mã PIN) để cho phép ví thực hiện giao dịch thay mình.' },
  { e: '✅', t: 'Hoàn tất', d: 'Tiền được trừ từ tài khoản liên kết. Cả hai bên đều dùng phương tiện điện tử.' }
];
function m5(root) {
  root.innerHTML = head(4, 'Thanh toán kĩ thuật số và mua hàng trong ứng dụng', 'Từ ví điện tử đến gói xem phim tự gia hạn: hiểu cách tiền “đi” trong thế giới số.') + `
  <div class="card"><h3><span class="st">1</span>Đây có phải thanh toán kĩ thuật số?</h3>
    <div class="key">Thanh toán kĩ thuật số: <b>cả người trả và người nhận</b> đều dùng phương tiện điện tử.</div><div id="s5a"></div></div>
  <div class="card"><h3><span class="st">2</span>Một lần quẹt ví điện tử</h3>
    <div class="phoneui"><div class="big-e" id="ws-e"></div><h3 id="ws-t" style="margin:6px 0"></h3><p id="ws-d" style="color:var(--mute);margin:0"></p>
    <div class="stepdots" id="ws-d2"></div><button class="btn sm" id="ws-n">Bước tiếp theo →</button></div></div>
  <div class="card"><h3><span class="st">3</span>Mua hàng trong ứng dụng thuộc loại nào?</h3>
    <div class="cols" style="margin-bottom:12px">
      <div class="mini"><b>🔄 Tự động gia hạn</b><p>Trả định kì, tự gia hạn trừ khi hủy.</p></div>
      <div class="mini"><b>🎞️ Không tự gia hạn</b><p>Trả một lần cho thời gian cố định; hết hạn phải mua lại.</p></div>
      <div class="mini"><b>💎 Tiêu hao</b><p>Dùng một lần, hết thì mua thêm.</p></div>
      <div class="mini"><b>🔓 Không tiêu hao</b><p>Trả một lần, sở hữu vĩnh viễn.</p></div></div>
    <div id="s5b"></div></div>
  <div id="m5q" hidden></div>
  ${navBtns(4)}`;

  let a = false, b = false;
  const chk = () => { if (a && b) { const q = $('#m5q'); if (!q.hidden) return; q.hidden = false; quizBlock(q, ['payTF', 'payHow', 'ewallet', 'matchInApp'], () => complete(4)); } };
  sorter($('#s5a'), {
    bins: [{ id: 'y', label: '💳 Thanh toán kĩ thuật số' }, { id: 'n', label: '💵 Không phải', cls: 'alt' }],
    cards: [
      { e: '💵', t: 'Trả bằng tiền mặt', bin: 'n', note: 'Tiền mặt không phải phương tiện điện tử.' },
      { e: '💳', t: 'Thẻ ghi nợ', bin: 'y', note: 'Thẻ ghi nợ liên kết với tài khoản ngân hàng → kĩ thuật số.' },
      { e: '💳', t: 'Thẻ tín dụng', bin: 'y', note: 'Giao dịch điện tử qua thẻ tín dụng.' },
      { e: '🏦', t: 'Chuyển khoản ngân hàng', bin: 'y', note: 'Chuyển tiền điện tử giữa hai tài khoản.' },
      { e: '📲', t: 'Ví điện tử (Apple Pay, Google Pay…)', bin: 'y', note: 'Ví điện tử là thanh toán kĩ thuật số phổ biến.' }
    ], onDone() { a = true; chk(); }
  });
  let ws = 0;
  function wallet() {
    const s = WALLET_STEPS[ws]; $('#ws-e').textContent = s.e; $('#ws-t').textContent = (ws + 1) + '. ' + s.t; $('#ws-d').textContent = s.d;
    $('#ws-d2').innerHTML = WALLET_STEPS.map((_, i) => `<i class="${i <= ws ? 'on' : ''}"></i>`).join('');
    $('#ws-n').textContent = ws === WALLET_STEPS.length - 1 ? '↺ Xem lại' : 'Bước tiếp theo →';
  }
  $('#ws-n').onclick = () => { ws = (ws + 1) % WALLET_STEPS.length; wallet(); }; wallet();
  sorter($('#s5b'), {
    bins: [{ id: 'auto', label: '🔄 Tự động gia hạn' }, { id: 'rent', label: '🎞️ Không tự gia hạn', cls: 'alt' }, { id: 'cons', label: '💎 Tiêu hao' }, { id: 'non', label: '🔓 Không tiêu hao', cls: 'alt' }],
    cards: [
      { e: '📺', t: 'Đăng ký dịch vụ phát video theo tháng', bin: 'auto', note: 'Trả định kì và tự gia hạn trừ khi hủy.' },
      { e: '🎞️', t: 'Thuê phim xem trong 48 giờ', bin: 'rent', note: 'Trả một lần cho thời gian cố định, hết hạn phải thuê lại.' },
      { e: '💎', t: 'Mua đá quý trong trò chơi', bin: 'cons', note: 'Dùng hết rồi phải mua thêm.' },
      { e: '🪙', t: 'Mua tiền xu trong game di động', bin: 'cons', note: 'Tiền tệ trong game là vật tư tiêu hao.' },
      { e: '🔓', t: 'Mở khóa tính năng đặc biệt của game', bin: 'non', note: 'Trả một lần, sở hữu vĩnh viễn, cài lại được trên thiết bị khác.' },
      { e: '🎵', t: 'Gói nhạc hằng năm tự gia hạn', bin: 'auto', note: 'Định kì (năm) và tự gia hạn.' }
    ], onDone() { b = true; chk(); }
  });
}

/* ============================================================
   NHIỆM VỤ 6 — Kiểm tra cuối bài
   ============================================================ */
function m6(root) {
  root.innerHTML = head(5, 'Kiểm tra cuối bài', '15 câu ngẫu nhiên trong toàn bộ bài. Hoàn thành để nhận kết quả và mở khóa chứng nhận.') +
    `<div id="m6q"></div>${navBtns(5)}`;
  const keys = shuffle(Object.keys(QUIZ)).slice(0, 15);
  quizBlock($('#m6q'), keys, (s, t) => { toast('Kết quả: ' + s + '/' + t); complete(5); }, 'Bài kiểm tra tổng hợp');
}

const RENDER = [m1, m2, m3, m4, m5, m6];

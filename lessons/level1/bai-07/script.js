/* ---------- giao diện sáng / tối ---------- */
(function () {
  const root = document.documentElement, btn = document.getElementById('theme');
  let t = null;
  try { t = localStorage.getItem('k6b07-theme'); } catch (e) {}
  if (!t) t = matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  function apply(v) {
    root.setAttribute('data-theme', v);
    btn.innerHTML = v === 'dark' ? '☀️<span class="lbl"> Chế độ sáng</span>' : '🌙<span class="lbl"> Chế độ tối</span>';
    btn.title = v === 'dark' ? 'Chế độ sáng' : 'Chế độ tối';
    try { localStorage.setItem('k6b07-theme', v); } catch (e) {}
  }
  btn.onclick = () => apply(root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
  apply(t);
})();

/* ===================== helpers ===================== */
const $ = (s, r = document) => r.querySelector(s);
const esc = s => String(s).replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const shuffle = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.random() * (i + 1) | 0; [a[i], a[j]] = [a[j], a[i]]; } return a; };
let toastT;
function toast(msg, bad) {
  const t = $('#toast'); t.textContent = msg; t.className = 'toast show' + (bad ? ' bad' : '');
  clearTimeout(toastT); toastT = setTimeout(() => t.className = 'toast' + (bad ? ' bad' : ''), 2200);
}
function shake(el) { el.classList.remove('shake'); void el.offsetWidth; el.classList.add('shake'); }

const SAVE_KEY = 'k6b07-progress';
const state = { cur: 0, done: [false, false, false, false, false], opened: {} };
(function loadProgress() {
  try {
    const s = JSON.parse(localStorage.getItem(SAVE_KEY) || 'null');
    if (s && Array.isArray(s.done) && s.done.length === 5) { state.done = s.done.map(Boolean); state.cur = Math.min(4, Math.max(0, s.cur | 0)); state.opened = s.opened || {}; }
  } catch (e) {}
})();
function saveProgress() { try { localStorage.setItem(SAVE_KEY, JSON.stringify({ done: state.done, cur: state.cur, opened: state.opened })); } catch (e) {} }
function resetProgress() {
  if (!confirm('Xóa toàn bộ tiến độ và học lại từ đầu?')) return;
  try { localStorage.removeItem(SAVE_KEY); } catch (e) {}
  state.done = [false, false, false, false, false]; state.cur = 0; state.opened = {};
  document.getElementById('congrats')?.remove(); go(0);
}
function showCongrats() {
  if (document.getElementById('congrats')) return;
  const el = document.createElement('div'); el.id = 'congrats';
  const bits = ['🎉', '⭐', '🎊', '✨', '🏆', '🌟'];
  let conf = '';
  for (let i = 0; i < 28; i++) {
    conf += '<i style="left:' + (i * 37) % 100 + '%;animation-delay:' + (i % 9) * .25 + 's;animation-duration:' + (3 + (i % 5) * .6) + 's">' + bits[i % bits.length] + '</i>';
  }
  el.innerHTML = `<div class="confetti" aria-hidden="true">${conf}</div>
    <div class="cg-box"><div class="cg-ic">🏆</div><h2>Chúc mừng em!</h2>
    <p>Em đã hoàn thành cả <b>5 nhiệm vụ</b> của Bài 07.</p>
    <p>Giờ em đã biết đặt tên tập tin đúng quy ước, sắp xếp thư mục gọn gàng và luôn sao lưu dữ liệu ở nhiều nơi. Rất xuất sắc!</p>
    <div class="cg-btns"><button class="btn am" id="cgClose">Tiếp tục</button><button class="btn ghost" id="cgReset">↺ Học lại từ đầu</button></div></div>`;
  document.body.appendChild(el);
  $('#cgClose').onclick = () => el.remove();
  $('#cgReset').onclick = resetProgress;
}
const MISSIONS = [
  { t: 'Tập tin', sub: 'Tên + phần mở rộng' },
  { t: 'Thư mục', sub: 'Chứa & tổ chức' },
  { t: 'Đặt tên chuẩn', sub: 'Quy ước đặt tên' },
  { t: 'Sao lưu & khôi phục', sub: 'Giả lập sự cố' },
  { t: 'Kiểm tra cuối bài', sub: '11 câu vận dụng' }
];

function drawTabs() {
  $('#tabs').innerHTML = MISSIONS.map((m, i) =>
    `<button class="tab ${i === state.cur ? 'on' : ''} ${state.done[i] ? 'done' : ''}" data-i="${i}" title="${m.t}">
      <span class="n"><span>${i + 1}</span></span><span class="t">${m.t}</span></button>`).join('');
  const n = state.done.filter(Boolean).length;
  $('#xpfill').style.width = n / 5 * 100 + '%';
  $('#xptxt').textContent = n + ' / 5 nhiệm vụ';
}
$('#tabs').addEventListener('click', e => { const b = e.target.closest('.tab'); if (b) go(+b.dataset.i); });
function go(i) { state.cur = i; saveProgress(); drawTabs(); const m = $('#main'); m.innerHTML = ''; RENDER[i](m); window.scrollTo({ top: 0 }); }
function gate(id, open) { return `<div class="gatewrap${open || state.opened[id] ? '' : ' locked'}" id="${id}"><div class="gate-in">`; }
const gateEnd = `</div></div>`;
function gateOpen(id) { state.opened[id] = true; saveProgress(); const g = document.getElementById(id); if (g && g.classList.contains('locked')) { g.classList.remove('locked'); toast('🔓 Đã mở phần tiếp theo'); } }
function complete(i) {
  if (state.done[i]) return;
  state.done[i] = true; saveProgress(); gateOpen('gd' + i); drawTabs(); toast('✅ Hoàn thành nhiệm vụ ' + (i + 1) + '!');
  if (state.done.every(Boolean)) setTimeout(showCongrats, 900);
}
function head(i, title, lead) {
  return `<div class="crumb">nhiem_vu/<b>0${i + 1}</b></div><h2 class="title">${title}</h2><p class="lead">${lead}</p>`;
}
function navBtns(i) {
  return `<div class="nav"><button class="btn ghost" ${i === 0 ? 'disabled' : ''} data-nav="${i - 1}">← Trước</button>
  <button class="btn" data-nav="${i + 1}" ${i === 4 ? 'disabled' : ''} id="nextBtn">Nhiệm vụ tiếp →</button></div>`;
}
document.addEventListener('click', e => { const b = e.target.closest('[data-nav]'); if (b && !b.disabled) go(+b.dataset.nav); });

(function () { const n = state.done.filter(Boolean).length; if (n || state.cur) $('#start').textContent = '▶ Tiếp tục học' + (n ? ' (' + n + '/5 nhiệm vụ)' : ''); })();
$('#start').onclick = () => { $('#boot').classList.add('hidden'); $('#shell').classList.remove('hidden'); go(state.cur); };
$('#resetBtn').onclick = resetProgress;

/* ===================== giao diện File Explorer (Windows 10) ===================== */
const FT = { pdf: 'PDF', docx: 'DOC', xlsx: 'XLS', pptx: 'PPT', jpg: 'JPG', png: 'PNG', mp3: 'MP3' };
function fileIcon(ext, sm) {
  return `<span class="fi t-${ext}${sm ? ' sm' : ''}"><b>${sm ? '' : FT[ext] || ext.toUpperCase()}</b></span>`;
}
function folderIcon(open, w = 34) {
  return `<svg class="fo" width="${w}" height="${w * .8}" viewBox="0 0 32 26" aria-hidden="true">
    <path d="M1 3h10l3 3h17v18H1z" fill="#e0a30c"/><path d="M${open ? '4 10h27l-4 14H1z' : '1 8h30v16H1z'}" fill="#ffd25e"/></svg>`;
}
const NAV = [['⭐', 'Quick access'], ['☁️', 'OneDrive'], ['💻', 'This PC'], ['🧊', '3D Objects', 1], ['🖥️', 'Desktop', 1], ['📄', 'Documents', 1],
  ['⬇️', 'Downloads', 1], ['🎵', 'Music', 1], ['🖼️', 'Pictures', 1], ['🎞️', 'Videos', 1], ['💽', 'Local Disk (C:)', 1], ['🌐', 'Network']];
/* o: {title, crumbs[], nav (tên mục đang chọn), ribbon, body, detail, status} */
function winFrame(o) {
  return `<div class="win">
  <div class="wtitle"><span class="wic">${folderIcon(false, 26)}</span><span class="wname">${o.title}</span>
    <span class="wctl"><i>&#8212;</i><i>&#9633;</i><i class="x">&#10005;</i></span></div>
  ${o.ribbon ? `<div class="wtabs"><span class="file">File</span><span class="on">Home</span><span>Share</span><span>View</span></div>
  <div class="wrib"><span>📁 New folder</span><span>⚙️ Properties</span><span>☑️ Select all</span></div>` : ''}
  ${o.crumbs ? `<div class="waddr"><span class="nb">&#8592;</span><span class="nb dim">&#8594;</span><span class="nb">&#8593;</span>
    <div class="wpath">${o.crumbs.map(c => `<span>${c}</span>`).join('<em>&#8250;</em>')}</div>
    <div class="wsearch">🔍 Search ${esc(o.crumbs[o.crumbs.length - 1])}</div></div>` : ''}
  <div class="wbody${o.nav ? ' hasnav' : ''}">
    ${o.nav ? `<nav class="wnav">${NAV.map(n => `<div class="${n[2] ? 'sub' : ''} ${n[1] === o.nav ? 'act' : ''}"><span>${n[0]}</span>${n[1]}</div>`).join('')}</nav>` : ''}
    <div class="wmain">${o.body}</div>
  </div>
  ${o.detail ? `<div class="wdet" id="det">${o.detail}</div>` : ''}
  <div class="wstat"><span id="wcount">${o.status || ''}</span></div></div>`;
}

/* ===================== 1. TẬP TIN ===================== */
const FILES = [
  { n: 'Ban_thao_v1', e: 'pdf', i: '📕', d: 'Tài liệu PDF' },
  { n: 'Dulich_20230723', e: 'docx', i: '📘', d: 'Văn bản Word' },
  { n: 'Bang_diem', e: 'xlsx', i: '📗', d: 'Bảng tính Excel' },
  { n: 'Trinh_chieu', e: 'pptx', i: '📙', d: 'Bài trình chiếu PowerPoint' },
  { n: 'Anh_bien', e: 'jpg', i: '🖼️', d: 'Hình ảnh' },
  { n: 'Bai_hat', e: 'mp3', i: '🎵', d: 'Âm thanh' }
];
const fparts = f => `<span class="nm">${esc(f.n)}</span><span class="dt">.</span><span class="ex">${f.e}</span>`;

function explainEmpty() {
  return `<div class="ex-empty"><div class="hand">👈</div><p><b>Hãy bấm vào một tập tin</b> trong cửa sổ bên trái để “giải phẫu” tên của nó.</p><br><p class="ex-sub">Mỗi tập tin có phần tên và phần mở rộng khác nhau.</p></div>`;
}
function explain(f) {
  return `<div class="ex-top">${fileIcon(f.e)}<div><div class="ex-lbl">Tên tập tin đầy đủ</div><div class="fname">${fparts(f)}</div></div></div>
  <div class="ex-rows">
    <div class="ex-row nm-row"><i class="nm-b">1</i><div><b class="nm">Phần tên</b><span class="mono nm"> ${esc(f.n)}</span><br>Do người dùng tự đặt, cho biết nội dung của tập tin.</div></div>
    <div class="ex-row dt-row"><i class="dt-b">2</i><div><b class="dt">Dấu chấm ( . )</b><br>Ngăn cách phần tên và phần mở rộng.</div></div>
    <div class="ex-row ex-r"><i class="ex-b">3</i><div><b class="ex">Phần mở rộng</b><span class="mono ex"> .${f.e}</span><br>Cho biết loại tập tin: <b>${f.d}</b>, nên máy biết dùng chương trình nào để mở.</div></div>
  </div>`;
}

function m1(root) {
  root.innerHTML = head(0, 'Tập tin: “mảnh ghép” của thông tin',
    'Mọi thứ em lưu trong máy tính đều nằm trong tập tin.') + `
  <div class="card"><h3>Khái niệm</h3>
    <div class="key"><b>Tập tin (File)</b>: là một đơn vị lưu trữ thông tin trên máy tính. Mỗi dạng thông tin ứng với một loại tập tin khác nhau.</div>
    <div class="key am"><b>Tên tập tin</b> = <span class="nm mono">Phần tên</span> + <span class="dt mono">dấu chấm (.)</span> + <span class="ex mono">Phần mở rộng</span></div></div>
  <div class="split">
  ${winFrame({
    title: 'Desktop', crumbs: ['This PC', 'Desktop'], nav: 'Desktop', ribbon: 1,
    body: `<div class="flist" id="fl">${FILES.map((f, i) => `<button class="wf" data-i="${i}">${fileIcon(f.e)}<span>${esc(f.n)}.${f.e}</span></button>`).join('')}</div>`,
    status: FILES.length + ' items'
  })}
  <aside class="explain" id="det">${explainEmpty()}</aside>
  </div>
  ${gate('g-ch', state.done[0])}
  <div class="card" style="margin-top:16px"><h3>Thử thách · đúng liên tiếp 5 lần</h3>
    <div id="chq" style="font-weight:700"></div>
    <div class="chal-name" id="chn"></div>
    <div class="pips" id="pips">${'<i></i>'.repeat(5)}</div></div>
  ${gateEnd}
  ${navBtns(0)}`;


  // cột giải thích luôn cao bằng cửa sổ Explorer
  const winEl = $('.split .win'), exEl = $('#det');
  const syncH = () => { exEl.style.height = innerWidth > 1100 ? winEl.offsetHeight + 'px' : ''; };
  syncH(); addEventListener('resize', syncH);
  if (window.ResizeObserver) new ResizeObserver(syncH).observe(winEl);


  const viewed = new Set();
  $('#fl').onclick = e => {
    const b = e.target.closest('.wf'); if (!b) return;
    document.querySelectorAll('#fl .wf').forEach(x => x.classList.remove('sel')); b.classList.add('sel');
    const f = FILES[+b.dataset.i];
    viewed.add(b.dataset.i); if (viewed.size >= FILES.length) gateOpen('g-ch');
    $('#det').innerHTML = explain(f);
    $('#wcount').textContent = FILES.length + ' items   |   1 item selected';
  };

  const ask = { name: 'PHẦN TÊN', dot: 'DẤU NGĂN CÁCH giữa hai phần', ext: 'PHẦN MỞ RỘNG' };
  let streak = 0, cur;
  function round() {
    const f = FILES[Math.random() * FILES.length | 0], p = ['name', 'dot', 'ext'][Math.random() * 3 | 0];
    cur = p;
    $('#chq').innerHTML = `Bấm vào <span style="color:var(--am)">${ask[p]}</span> của tên tập tin:`;
    $('#chn').innerHTML = `<span data-p="name">${esc(f.n)}</span><span data-p="dot">.</span><span data-p="ext">${f.e}</span>`;
  }
  $('#chn').onclick = e => {
    const s = e.target.closest('span'); if (!s) return;
    if (s.dataset.p === cur) {
      streak++; $('#pips').children[streak - 1].classList.add('on');
      if (streak >= 5) { complete(0); $('#chq').textContent = '🎉 Em đã nắm chắc cấu trúc tên tập tin!'; $('#chn').innerHTML = '<span style="color:var(--gr)">Hoàn thành!</span>'; return; }
      round();
    } else {
      streak = 0; [...$('#pips').children].forEach(i => i.classList.remove('on')); shake($('#chn')); toast('Chưa đúng, làm lại từ đầu nhé', true); round();
    }
  };
  round();
}

/* ===================== 2. THƯ MỤC ===================== */
const TREE = { id: 'root', n: 'Hoc_tap', k: [
  { id: 'img', n: 'Hinh_anh', k: [] },
  { id: 'doc', n: 'Tai_lieu', k: [{ id: 'bt', n: 'Bai_tap', k: [] }] },
  { id: 'mus', n: 'Am_nhac', k: [] }] };
const LOOSE = [
  { n: 'Anh_bien.jpg', i: '🖼️', to: 'img' }, { n: 'Anh_lop.png', i: '🖼️', to: 'img' },
  { n: 'Ban_thao_v1.pdf', i: '📕', to: 'doc' }, { n: 'Bang_diem.xlsx', i: '📗', to: 'bt' },
  { n: 'Bai_hat.mp3', i: '🎵', to: 'mus' }];
const FOLDER_HINT = { img: 'Hình ảnh', doc: 'Tài liệu văn bản (PDF, Word…)', bt: 'Bài tập – nằm TRONG Tai_lieu', mus: 'Âm nhạc' };

function m2(root) {
  const placed = {}; let sel = null;
  root.innerHTML = head(1, 'Thư mục: chiếc tủ để sắp xếp', '') + `
  <div class="card"><div class="key"><b>Thư mục (Folder)</b> có chức năng <b>chứa và tổ chức</b> các tập tin. Thư mục có thể chứa các loại tập tin <b>và cả thư mục khác</b>.</div></div>
  <p class="lead">Hãy dọn dẹp màn hình: chọn một tập tin ở khay bên phải, rồi bấm vào thư mục phù hợp để chuyển vào.</p>
  <div class="treewrap">
    ${winFrame({ title: 'Hoc_tap', crumbs: ['This PC', 'Documents', 'Hoc_tap'], ribbon: 1, body: '<div class="tree" id="tree"></div>', status: '4 folders' })}
    ${winFrame({ title: 'Desktop', body: '<div class="tray" id="tray"></div>' })}
  </div>
  <div id="m2msg" class="hint hidden"></div>
  ${navBtns(1)}`;

  function drawNode(nd) {
    const mine = LOOSE.filter(f => placed[f.n] === nd.id);
    return `<div class="node"><button class="fold ${sel ? 'can' : ''}" data-f="${nd.id}">${folderIcon(mine.length || nd.k.length, 30)} <span>${nd.n}</span>
      ${nd.id === 'root' ? '' : `<span class="cnt">${mine.length ? mine.length + ' tập tin' : 'trống'}</span>`}</button>
      ${mine.length ? `<div class="inner">${mine.map(f => `<span class="chip">${fileIcon(f.n.split('.').pop(), 1)} ${f.n}</span>`).join('')}</div>` : ''}
      ${nd.k.map(drawNode).join('')}</div>`;
  }
  function draw() {
    $('#tree').innerHTML = drawNode(TREE);
    const left = LOOSE.filter(f => !placed[f.n]);
    $('#tray').innerHTML = `<h4>Màn hình · ${left.length} tập tin lộn xộn</h4>` + (left.length
      ? left.map(f => `<button class="f ${sel === f.n ? 'sel' : ''}" data-n="${f.n}">${fileIcon(f.n.split('.').pop(), 1)}<span>${f.n}</span></button>`).join('')
      : '<div style="color:var(--gr);font-weight:700">✨ Màn hình đã gọn gàng!</div>');
  }
  draw();
  $('#tray').onclick = e => { const b = e.target.closest('.f'); if (!b) return; sel = sel === b.dataset.n ? null : b.dataset.n; draw(); };
  $('#tree').onclick = e => {
    const b = e.target.closest('.fold'); if (!b) return;
    if (!sel) { toast('Chọn một tập tin ở khay bên phải trước nhé'); return; }
    const f = LOOSE.find(x => x.n === sel), id = b.dataset.f;
    if (id === f.to) {
      placed[f.n] = id; sel = null; draw(); toast('Đã chuyển ' + f.n);
      if (LOOSE.every(x => placed[x.n])) {
        complete(1);
        const m = $('#m2msg'); m.className = 'hint g'; m.innerHTML = '🎉 <b>Tuyệt!</b> Lưu ý: <b>Bai_tap</b> là thư mục nằm <i>bên trong</i> <b>Tai_lieu</b> – thư mục chứa được thư mục khác.';
      }
    } else { shake(b); toast('Chưa hợp lí: ' + f.n + ' không thuộc “' + (b.textContent.trim().split(' ')[1] || 'thư mục này') + '”', true); }
  };
}

/* ===================== 3. ĐẶT TÊN ===================== */
const RULES = [
  ['Không có khoảng trắng', v => !/\s/.test(v)],
  ['Không dùng ký tự đặc biệt  <code>\\ / : * ? " &lt; &gt; |</code>', v => !/[\\\/:*?"<>|]/.test(v)],
  ['Ngắn gọn, tối đa 255 ký tự', v => v.length > 0 && v.length <= 255],
  ['Có phần mở rộng sau dấu chấm  (vd <code>.docx</code>)', v => /^[^.]+\.[A-Za-z0-9]+$/.test(v) || /^.+\.[A-Za-z0-9]+$/.test(v)],
  ['Nếu tên có ngày tháng: dùng định dạng <code>YYYYMMDD</code>  (vd <code>20240918</code>)', v => {
    const hasDate = /\d{6,8}/.test(v) || /\d{4}\W\d{1,2}\W\d{1,2}/.test(v) || /\d{1,2}\W\d{1,2}\W\d{4}/.test(v);
    return !hasDate || /(19|20)\d{2}(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])/.test(v);
  }]

];
const TASKS = [
  { q: 'Tập tin này đang vi phạm quy ước. Hãy sửa lại cho hợp lệ.', v: 'Du lich 2023 07 23.docx', x: () => true },
  { q: 'Ký tự đặc biệt đang “phá” tên tập tin. Hãy sửa lại.', v: 'Dulich*2023*0723.pdf', x: v => /dulich/i.test(v), h: 'Ký tự * không được dùng trong tên tập tin.' },
  { q: 'Cần ghi ngày 18/09/2024. Dùng định dạng YYYYMMDD (năm‑tháng‑ngày liền nhau).', v: 'Duan 18/09/2024.docx', x: v => v.includes('20240918'), h: 'Định dạng YYYYMMDD: viết NĂM trước, rồi THÁNG, rồi NGÀY (không có dấu cách hay dấu /).' },
  { q: 'Em là Sam Grey, lưu dự án phiên bản 3. Đặt tên gồm tên tác giả (SamGrey), “Project1” và “v3”, đuôi .docx.', v: '', x: v => /samgrey/i.test(v) && /project1/i.test(v) && /v3/i.test(v) && /\.docx$/i.test(v), h: 'Tên cần có đủ SamGrey, Project1, v3 và kết thúc bằng .docx (viết liền, không khoảng trắng).' }
];

function m3(root) {
  let k = 0;
  root.innerHTML = head(2, 'Hộp thoại “Save As” – Đặt tên chuẩn',
    'Gõ tên vào ô bên dưới. Máy sẽ kiểm tra theo từng quy ước ngay khi em gõ. Hoàn thành 4 tình huống để qua nhiệm vụ.') + `
  <div class="steps" id="steps">${TASKS.map(() => '<i></i>').join('')}</div>
  <div class="card"><div class="task"><span class="tn" id="tn"></span><div id="tq" style="font-weight:600"></div></div>
  <div class="dlg"><div class="dlg-t"><span>Save As</span><span>✕</span></div>
    <div class="dlg-b"><label for="inp">Tên tập tin (File name):</label>
    <input id="inp" autocomplete="off" spellcheck="false"><div style="font:600 19px var(--mono);color:#5a6788;margin-top:5px"><span id="cnt">0</span> / 255 ký tự</div>
    <ul class="rules" id="rules"></ul>
    <div style="margin-top:14px;display:flex;gap:10px;align-items:center"><button class="btn" id="save">💾 Lưu</button><span id="smsg" style="font-weight:700;color:#1b2236"></span></div></div></div></div>
  ${gate('gd2', state.done[2])}
  <div class="card"><h3>Ghi nhớ</h3><div class="key am"><b>Mẫu hay:</b> <span class="mono">Dulich_20230723</span> · <span class="mono">20240918_Duan_v1</span> · <span class="mono">SamGreyProject1v3.docx</span><br>Ngắn gọn – đầy đủ ý nghĩa · ngày dạng <b>YYYYMMDD</b> · dùng <span class="mono">_</span> hoặc viết liền thay cho khoảng trắng.</div></div>
  ${gateEnd}
  ${navBtns(2)}`;
  const inp = $('#inp');
  function check() {
    const v = inp.value, res = RULES.map(r => r[1](v));
    $('#rules').innerHTML = RULES.map((r, i) => `<li class="${v ? (res[i] ? 'ok' : 'no') : ''}"><b>${v ? (res[i] ? '✓' : '✕') : '•'}</b><span>${r[0]}</span></li>`).join('');
    $('#cnt').textContent = v.length;
    inp.className = v ? (res.every(Boolean) ? 'good' : 'bad') : '';
    return res.every(Boolean);
  }
  function load() {
    $('#tn').textContent = 'Tình huống ' + (k + 1) + '/' + TASKS.length; $('#tq').textContent = TASKS[k].q;
    inp.value = TASKS[k].v; $('#smsg').textContent = '';
    $('#steps').innerHTML = TASKS.map((_, i) => `<i class="${i < k ? 'on' : i === k ? 'cur' : ''}"></i>`).join('');
    check(); inp.focus();
  }
  inp.oninput = check;
  $('#save').onclick = () => {
    const v = inp.value;
    if (!check()) { shake($('.dlg')); $('#smsg').textContent = '✕ Tên chưa hợp lệ'; return; }
    if (!TASKS[k].x(v)) { shake($('.dlg')); $('#smsg').textContent = '✕ ' + (TASKS[k].h || 'Chưa đáp ứng yêu cầu của tình huống'); return; }
    k++;
    if (k >= TASKS.length) {
      $('#steps').innerHTML = TASKS.map(() => '<i class="on"></i>').join(''); $('#tq').textContent = '🎉 Em đã đặt tên tập tin đúng quy ước cả 4 tình huống!';
      $('#smsg').textContent = '✓ Đã lưu'; inp.disabled = true; complete(2);
    } else { toast('✓ Đã lưu “' + v + '”'); load(); }
  };
  inp.onkeydown = e => { if (e.key === 'Enter') $('#save').click(); };
  load();
}

/* ===================== 4. SAO LƯU ===================== */
function m4(root) {
  const loc = { pc: true, usb: false, cloud: false };
  const seen = {};
  root.innerHTML = head(3, 'Sao lưu &amp; khôi phục: sống sót qua sự cố', '') + `
  <div class="card"><div class="key"><b>Sao lưu (Backup)</b>: sao chép lại dữ liệu để làm dữ liệu dự phòng, lưu ở nhiều thiết bị khác nhau nhằm hạn chế rủi ro mất mát, hư hỏng.</div>
  <div class="key am"><b>Khôi phục (Recovery)</b>: đưa hệ thống, dữ liệu về trạng thái trước khi xảy ra sự cố.</div></div>
  <p class="lead">Em có 50 bức ảnh kỷ yếu quý giá trên máy tính. Hãy sao lưu chúng, rồi kích hoạt từng sự cố để xem dữ liệu có còn không. Cần sống sót qua cả 4 sự cố!</p>
  <div class="card"><h3>Bước 1 · Chọn nơi sao lưu</h3>
    <div class="rack" id="rack"></div></div>
  ${gate('g-s2', state.done[3] || loc.usb || loc.cloud)}
  <div class="card"><h3>Bước 2 · Gây sự cố (mỗi sự cố chạy độc lập)</h3>
    <div class="scen" id="scen"></div><div id="rep" class="report hidden"></div></div>
  ${gateEnd}
  ${gate('gd3', state.done[3])}
  <div class="card"><h3>Các cách sao lưu dữ liệu</h3><div class="meths">
    <span>☁️ Dịch vụ đám mây (đồng bộ)</span><span>💽 Ổ cứng ngoài</span><span>🧱 Hình ảnh hệ thống (System Image)</span><span>🕘 File History (Windows 10)</span><span>🛠️ Windows Backup and Restore</span></div>
    <div class="key" style="margin-top:12px"><b>Lưu ý:</b> nên kết hợp sao lưu trên đám mây — an toàn nhờ công nghệ <b>mã hóa (Encryption)</b> và <b>tường lửa (Firewall)</b>.</div></div>
  ${gateEnd}
  ${navBtns(3)}`;

  const D = [['pc', '💻', 'Máy tính', 'Ảnh gốc'], ['usb', '💽', 'Ổ cứng ngoài', 'Sao chép vào ổ cứng ngoài'], ['cloud', '☁️', 'Đám mây', 'Đồng bộ lên đám mây']];
  const SC = [
    { k: 'a', e: '💥', t: 'Hỏng ổ cứng máy tính', s: 'Mất bản trên máy', lose: ['pc'] },
    { k: 'b', e: '🧳', t: 'Làm mất ổ cứng ngoài', s: 'Mất bản trên ổ ngoài', lose: ['usb'] },
    { k: 'c', e: '🦠', t: 'Mã độc mã hóa dữ liệu', s: 'Hỏng máy + ổ cứng ngoài đang cắm', lose: ['pc', 'usb'] },
    { k: 'd', e: '🌪️', t: 'Hỏng máy & mất quyền vào đám mây', s: 'Mất máy, không truy cập được đám mây', lose: ['pc', 'cloud'] }];
  function drawRack(gone = []) {
    $('#rack').innerHTML = D.map(([id, ic, nm, act]) => {
      const has = loc[id], isGone = gone.includes(id);
      return `<div class="drive ${isGone ? 'gone' : has ? 'has' : ''}"><div class="di">${ic}</div><h4>${nm}</h4>
        <div class="st">${isGone ? '✕ không còn / không truy cập được' : has ? '✓ có 50 ảnh' : 'trống'}</div>
        ${id === 'pc' ? '' : `<div class="pbar"><div id="pb-${id}" style="width:${has ? 100 : 0}%"></div></div>
        <button class="btn ${has ? 'ghost' : ''}" data-b="${id}" ${has ? 'disabled' : ''}>${has ? 'Đã sao lưu' : act}</button>`}</div>`;
    }).join('');
  }
  function drawSc() {
    $('#scen').innerHTML = SC.map(s => `<button class="sc ${seen[s.k] || ''}" data-s="${s.k}"><span class="e">${s.e}</span><span>${s.t}<small>${s.s}</small></span></button>`).join('');
  }
  drawRack(); drawSc();
  $('#rack').onclick = e => {
    const b = e.target.closest('[data-b]'); if (!b) return; const id = b.dataset.b;
    b.disabled = true; $('#pb-' + id).style.width = '100%'; b.textContent = 'Đang sao chép…';
    setTimeout(() => { loc[id] = true; drawRack(); gateOpen('g-s2'); }, 850);
  };
  $('#scen').onclick = e => {
    const b = e.target.closest('[data-s]'); if (!b) return;
    const s = SC.find(x => x.k === b.dataset.s);
    drawRack(s.lose);
    const left = D.filter(([id]) => loc[id] && !s.lose.includes(id)).map(d => d[2]);
    const rep = $('#rep'); rep.classList.remove('hidden');
    if (left.length) { seen[s.k] = 'ok'; rep.className = 'report win_'; rep.textContent = '> ' + s.t + ' ... KHÔI PHỤC THÀNH CÔNG từ: ' + left.join(', '); }
    else { seen[s.k] = 'fail'; rep.className = 'report lose'; rep.textContent = '> ' + s.t + ' ... ✕ MẤT TOÀN BỘ ẢNH. Hãy sao lưu thêm rồi thử lại!'; }
    drawSc();
    const allOk = SC.every(x => D.some(([id]) => loc[id] && !x.lose.includes(id)));
    if (allOk && SC.every(x => seen[x.k] === 'ok')) {
      complete(3);
      rep.insertAdjacentHTML('afterend', '<div class="hint g">🎉 <b>Kết luận:</b> phương pháp bảo vệ tốt nhất là <b>kết hợp lưu trữ đám mây và ổ cứng ngoài</b> – không bao giờ để dữ liệu ở một nơi duy nhất.</div>');
    }
  };
}

/* ===================== 5. KIỂM TRA ===================== */
const BAD = '\\ / : * ? " < > |';
const QS = [
  { t: 'one', q: 'Trong cấu trúc của tên tập tin, để ngăn cách hai phần tên tập tin và phần mở rộng, em sử dụng dấu nào?', o: ['Dấu phẩy (,)', 'Dấu chấm (.)', 'Dấu hai chấm (:)', 'Dấu chấm phẩy (;)', 'Dấu gạch dưới (_)'], a: [1], ex: 'Tên tập tin = phần tên + dấu chấm (.) + phần mở rộng.' },
  { t: 'multi', q: 'Cấu trúc tên tập tin gồm 2 phần. Đó là những phần nào? (Chọn 2)', o: ['Tên tập tin', 'Tên chương trình tạo ra tập tin', 'Phần mở rộng', 'Tên thư mục chứa tập tin'], a: [0, 2], ex: 'Hai phần là: phần tên và phần mở rộng.' },
  { t: 'one', q: 'Tên của tập tin hay thư mục KHÔNG được chứa các kí tự nào sau đây?', o: ['a d e f g', '< > ? / \\ | * “ :', '1 2 3 6 9', '_'], a: [1], ex: 'Các ký tự đặc biệt không được dùng: \\ / : * ? " < > |' },
  { t: 'multi', q: 'Trong các tên thư mục sau, tên nào là hợp lệ? (Chọn 2)', o: ['Hoc_sinh_*gioi*', 'Lop6/1', 'Hinh_anh', 'Bai_tap'], a: [2, 3], ex: 'Dấu * và / là ký tự đặc biệt → không hợp lệ.' },
  { t: 'tf', yn: ['Có', 'Không'], q: 'Cần quy ước đặt tên nhất quán, hỗ trợ nhiều phần mềm và hệ điều hành. Quy ước nào giúp thực hiện được mục tiêu này?', rows: [['Chèn khoảng cách giữa các từ', 1], ['Dùng tên tập tin dài, chi tiết', 1], ['Chuỗi ngày tháng dùng định dạng MMDDYY', 1], ['KHÔNG dùng ký tự đặc biệt \\ / : * ? " < > |', 0]], ex: 'Không khoảng trắng, tên ngắn gọn, ngày dạng YYYYMMDD và không dùng ký tự đặc biệt.' },
  { t: 'tf', yn: ['Đúng', 'Sai'], q: 'Chọn Đúng hoặc Sai cho mỗi phát biểu về quy ước đặt tên tập tin:', rows: [['Tên tập tin phải có khoảng cách giữa các từ khóa.', 1], ['Không sử dụng các ký tự đặc biệt.', 0], ['Nếu có ngày, dùng định dạng YYYY-MM-DD.', 0], ['Bạn không thể đánh số tập tin.', 1], ['Không viết hoa toàn bộ tên tập tin.', 0]], ex: 'Không khoảng trắng · không ký tự đặc biệt · ngày dạng YYYYMMDD hoặc YYYY-MM-DD · được đánh số (v1, v2…) · tránh viết hoa toàn bộ.' },
  { t: 'one', q: 'Em tên là Sam Grey, muốn lưu phiên bản mới của dự án. Tên tập tin cần có tên tác giả, dễ đọc, dùng được trên Web và tương thích nhiều nền tảng. Nên chọn tên nào?', o: ['SamGreyProject1v3.docx', 'Samgreyprojectoneversionthree15/04/2025.docx', 'Sam Grey Project1-version3.docx', 'SamGrey-project#1>v3.docx'], a: [0], ex: 'B chứa “/”, C có khoảng trắng, D có “#” và “>”.' },
  { t: 'tf', yn: ['Đúng', 'Sai'], q: 'Chọn Đúng hoặc Sai với mỗi phát biểu sau:', rows: [['Việc sao lưu dữ liệu là không cần thiết', 1], ['Thư mục là nơi chứa các tập tin', 0], ['Tên thư mục không được vượt quá 255 kí tự', 0], ['Trong tên tập tin có thể sử dụng dấu xuyệt đứng (|)', 1], ['Tên tập tin phải viết không dấu', 1]], ex: 'Sao lưu rất cần thiết · thư mục chứa tập tin · giới hạn 255 ký tự · “|” là ký tự cấm · tên không bắt buộc không dấu (nhưng nên viết không dấu để tương thích).' },
  { t: 'one', q: 'Phương pháp sao lưu nào cung cấp sự bảo vệ tốt nhất cho dữ liệu của bạn?', o: ['Sử dụng cả lưu trữ đám mây và ổ cứng ngoài', 'Xóa các tập tin bạn không cần nữa', 'Chỉ lưu trữ tập tin trên ổ cứng máy tính của bạn', 'Gửi tập tin cho người khác qua email'], a: [0], ex: 'Lưu ở nhiều nơi khác nhau giúp hạn chế rủi ro mất mát, hư hỏng.' },
  { t: 'one', q: 'Em chụp hơn 50 ảnh kỷ yếu mỗi ngày bằng điện thoại. Cần cách NHANH nhất và đáng tin cậy nhất để sao lưu rồi xóa ảnh khỏi điện thoại mỗi ngày. Nên làm gì?', o: ['Đồng bộ hóa điện thoại với dịch vụ lưu trữ đám mây.', 'Gửi ảnh qua email cho giáo viên.', 'Tải ảnh xuống ổ USB.', 'Chỉ xóa những ảnh không muốn sử dụng.'], a: [0], ex: 'Đồng bộ đám mây là tự động, nhanh và tin cậy.' },
  { t: 'one', q: 'Em cần tạo một bản sao chính xác của hệ điều hành Windows để có thể khôi phục máy tính, ứng dụng và tập tin về trạng thái hiện tại nếu hệ thống gặp sự cố nghiêm trọng. Nên làm gì?', o: ['Tạo hình ảnh hệ thống', 'Tạo một đĩa sửa hệ thống', 'Thiết lập Trình sao lưu của Windows (Windows Backup)', 'Bật Lịch sử tập tin'], a: [0], ex: 'Hình ảnh hệ thống (System Image) là bản sao chính xác của toàn bộ hệ điều hành.' }
];

function m5(root) {
  const order = QS; let i = 0, score = 0, results = [];
  function view() {
    if (i >= order.length) return finish();
    const q = order[i];
    let pick = q.t === 'tf' ? q.rows.map(() => null) : [], locked = false;
    root.innerHTML = head(4, 'Kiểm tra cuối bài', 'Trả lời 11 câu vận dụng. Mỗi câu đúng hoàn toàn được 1 điểm.') + `
    <div class="card"><div class="qhead"><span>CÂU ${i + 1} / ${order.length}</span><span>Điểm: ${score}</span></div>
    <p class="qtext">${esc(q.q)}${q.t === 'multi' ? ' <span style="color:var(--am)">(chọn nhiều)</span>' : ''}</p>
    <div id="body"></div><div id="fb"></div>
    <div class="nav"><span></span><button class="btn" id="chk" disabled>Kiểm tra</button></div></div>`;
    const body = $('#body'), chk = $('#chk');
    function draw() {
      if (q.t === 'tf') {
        body.innerHTML = q.rows.map((r, ri) => {
          const cls = b => { let c = 'tfb'; if (locked) { if (b === r[1]) c += ' right'; else if (pick[ri] === b) c += ' wrong'; } else if (pick[ri] === b) c += ' sel'; return c; };
          return `<div class="tfrow ${locked && pick[ri] !== r[1] ? 'bad' : ''}"><span class="t">${esc(r[0])}</span>
          <button class="${cls(0)}" data-r="${ri}" data-v="0" ${locked ? 'disabled' : ''}>${q.yn[0]}</button><button class="${cls(1)}" data-r="${ri}" data-v="1" ${locked ? 'disabled' : ''}>${q.yn[1]}</button></div>`;
        }).join('');
        // value 0 => first label ; encode correct answer: r[1]===0 means first label correct
        chk.disabled = locked || pick.some(p => p === null);
      } else {
        body.innerHTML = q.o.map((o, oi) => {
          let c = 'opt'; if (locked) { if (q.a.includes(oi)) c += ' right'; else if (pick.includes(oi)) c += ' wrong'; } else if (pick.includes(oi)) c += ' sel';
          return `<button class="${c}" data-o="${oi}" ${locked ? 'disabled' : ''}><span class="l">${'ABCDE'[oi]}</span><span>${esc(o)}</span></button>`;
        }).join('');
        chk.disabled = locked || !pick.length;
      }
    }
    draw();
    body.onclick = e => {
      if (locked) return;
      if (q.t === 'tf') { const b = e.target.closest('.tfb'); if (!b) return; pick[+b.dataset.r] = +b.dataset.v; }
      else {
        const b = e.target.closest('.opt'); if (!b) return; const oi = +b.dataset.o;
        if (q.t === 'one') pick = [oi]; else pick = pick.includes(oi) ? pick.filter(x => x !== oi) : [...pick, oi];
      }
      draw();
    };
    chk.onclick = () => {
      if (locked) { i++; view(); return; }
      locked = true;
      let ok;
      if (q.t === 'tf') ok = q.rows.every((r, ri) => pick[ri] === r[1]);
      else ok = pick.length === q.a.length && q.a.every(x => pick.includes(x));
      if (ok) score++; results.push(ok);
      draw();
      $('#fb').innerHTML = `<div class="hint ${ok ? 'g' : 'r'}"><b>${ok ? '✓ Chính xác!' : '✕ Chưa đúng.'}</b> ${esc(q.ex)}</div>`;
      chk.disabled = false; chk.textContent = i + 1 >= order.length ? 'Xem kết quả' : 'Câu tiếp →';
      $('#chk').scrollIntoView({ block: 'nearest', behavior: 'smooth' });
    };
  }
  function finish() {
    const pct = score / order.length;
    const rank = pct === 1 ? ['🏆', 'Quản trị viên xuất sắc'] : pct >= .7 ? ['🥈', 'Quản trị viên giỏi'] : pct >= .5 ? ['🥉', 'Quản trị viên tập sự'] : ['📘', 'Cần ôn lại bài'];
    if (pct >= .7) complete(4);
    const n = state.done.filter(Boolean).length;
    root.innerHTML = head(4, 'Kết quả', '') + `<div class="card final"><div style="font-size:64px">${rank[0]}</div>
      <div class="score">${score}/${order.length}</div><div class="rank">${rank[1]}</div>
      <p class="lead" style="margin:0 auto 18px">${pct >= .7 ? (n === 5 ? 'Em đã hoàn thành cả 5 nhiệm vụ của bài 07. Tên chuẩn, thư mục gọn, dữ liệu luôn có bản dự phòng!' : 'Còn nhiệm vụ chưa xong ở thanh bên – hãy hoàn thành nốt nhé.') : 'Cần đúng ít nhất 70% để hoàn thành nhiệm vụ. Ôn lại và thử lần nữa nhé!'}</p>
      <button class="btn am" id="again">↻ Làm lại</button></div>${navBtns(4)}`;
    $('#again').onclick = () => go(4);
  }
  view();
}

const RENDER = [m1, m2, m3, m4, m5];

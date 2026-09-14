/* ============================================================
   BÀI GIẢNG TƯƠNG TÁC — TEMPLATE TRỐNG
   ------------------------------------------------------------
   Bạn chỉ cần sửa hai khối bên dưới (CONFIG và slidesData).
   Toàn bộ phần từ mục 2 trở xuống là bộ máy chạy, giữ nguyên.
   ============================================================ */


// /* ============================================================
//    0. THÔNG TIN BÀI HỌC (hiện ở thanh trên cùng)
//    ============================================================ */
// const CONFIG = {
//   icon:  '📘',                // biểu tượng nhỏ đứng trước tên bài
//   title: 'Tên bài học'        // ví dụ: 'Bài 2 — Lưu trữ thông tin'
// };


// /* ============================================================
//    1. DỮ LIỆU BÀI HỌC
//    ------------------------------------------------------------
//    Mỗi phần tử của mảng là 1 slide. Thêm / bớt / đổi chỗ thoải mái.
//    Trường 'type' quyết định slide được vẽ như thế nào:

//      'info'            slide lý thuyết, đọc xong bấm Tiếp theo
//      'quiz_single'     trắc nghiệm 1 đáp án
//      'quiz_multiple'   trắc nghiệm nhiều đáp án
//      'quiz_dragdrop'   kéo thả thẻ vào đúng ô
//      'quiz_dropdown'   chọn từ trong danh sách thả xuống
//      'quiz_matching'   nối cặp trái – phải
//      'quiz_hotspot'    bấm đúng vùng trên hình

//    Mọi dạng câu hỏi đều phải trả lời đúng mới sang được trang sau.
//    Các trường title / content / hint / explain / remember cho phép
//    dùng thẻ HTML đơn giản như <b>, <i>, <br>.
//    ============================================================ */
// const slidesData = [

//   /* ---------- Slide lý thuyết ---------- */
//   {
//     type: 'info',
//     topic: '',        // nhãn nhỏ ở đầu slide, vd: 'Phần 1 · Khái niệm'
//     title: '',        // tiêu đề lớn
//     content: '',      // đoạn dẫn dắt
//     imageUrl: null,   // 'anh/hinh-1.png' — có ảnh thì app hiện ảnh, bỏ qua things
//     things: [         // lưới thẻ minh hoạ, để [] nếu không dùng
//       { icon: '', name: '', en: '' },
//       { icon: '', name: '', en: '' },
//       { icon: '', name: '', en: '' }
//     ],
//     remember: ''      // hộp ghi nhớ nền xanh lá, để '' nếu không dùng
//   },

//   /* ---------- Trắc nghiệm 1 đáp án ---------- */
//   {
//     type: 'quiz_single',
//     topic: '',
//     question: '',
//     options: ['', '', '', ''],   // từ 2 đến 6 đáp án
//     correctAnswer: 0,            // vị trí đáp án đúng, đếm từ 0
//     hint: '',                    // gợi ý, hiện khi trả lời sai
//     explain: ''                  // giải thích, hiện khi trả lời đúng
//   },

//   /* ---------- Trắc nghiệm nhiều đáp án ---------- */
//   {
//     type: 'quiz_multiple',
//     topic: '',
//     question: '',
//     options: ['', '', '', ''],
//     correctAnswers: [0, 2],      // danh sách vị trí đúng, phải chọn đủ và không dư
//     hint: '',
//     explain: ''
//   },

//   /* ---------- Kéo thả ---------- */
//   {
//     type: 'quiz_dragdrop',
//     topic: '',
//     question: '',
//     zones: [                     // thẻ ở kho sẽ tự xáo trộn khi hiển thị
//       { label: '', item: '' },   // label = ô đích, item = thẻ đúng của ô đó
//       { label: '', item: '' },
//       { label: '', item: '' }
//     ],
//     hint: '',
//     explain: ''
//   },

//   /* ---------- Danh sách thả xuống ---------- */
//   {
//     type: 'quiz_dropdown',
//     topic: '',
//     question: '',                // đặt ___ tại mỗi chỗ cần chọn
//     blanks: [                    // mỗi ___ ứng với 1 phần tử ở đây, đúng thứ tự
//       { options: ['', '', ''], correctAnswer: 0 },
//       { options: ['', '', ''], correctAnswer: 0 }
//     ],
//     hint: '',
//     explain: ''
//   },

//   /* ---------- Nối cặp ---------- */
//   {
//     type: 'quiz_matching',
//     topic: '',
//     question: '',
//     pairs: [                     // cột phải sẽ tự xáo trộn khi hiển thị
//       { icon: '', left: '', right: '' },
//       { icon: '', left: '', right: '' },
//       { icon: '', left: '', right: '' }
//     ],
//     hint: '',
//     explain: ''
//   },

//   /* ---------- Bấm đúng vùng trên hình ---------- */
//   {
//     type: 'quiz_hotspot',
//     topic: '',
//     question: '',
//     imageUrl: null,   // 'anh/ban-phim.png' — bỏ trống thì hiện khung kẻ sẵn để canh vùng
//     spots: [          // toạ độ tính theo phần trăm của khung hình
//       { label: '', x: 10, y: 15, w: 25, h: 25, correct: true  },
//       { label: '', x: 45, y: 15, w: 25, h: 25, correct: false },
//       { label: '', x: 10, y: 55, w: 25, h: 25, correct: false }
//     ],
//     hint: '',
//     explain: ''
//   },

//   /* ---------- Slide kết thúc ---------- */
//   {
//     type: 'info',
//     final: true,      // bật bảng tổng kết số câu trả lời đúng
//     topic: '',
//     title: '',
//     content: '',
//     imageUrl: null,
//     remember: ''
//   }
// ];


/* ============================================================
   2. TRẠNG THÁI
   ============================================================ */
const state = {
  index: 0,
  sound: true,
  answers: {}   // { [slideIndex]: { checked, solved, ...dữ liệu riêng của từng dạng } }
};

const el = {
  slide:    document.getElementById('slide'),
  barFill:  document.getElementById('barFill'),
  bar:      document.getElementById('bar'),
  counter:  document.getElementById('counter'),
  prevBtn:  document.getElementById('prevBtn'),
  mainBtn:  document.getElementById('mainBtn'),
  retryBtn: document.getElementById('retryBtn'),
  soundBtn: document.getElementById('soundBtn'),
  fullBtn:  document.getElementById('fullBtn')
};

const LETTERS = ['A','B','C','D','E','F'];
const PAIR_COLORS = ['var(--pair-1)','var(--pair-2)','var(--pair-3)','var(--pair-4)'];


/* ============================================================
   3. TIỆN ÍCH
   ============================================================ */
function esc(s){
  return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;')
    .replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;');
}

function ans(i){
  if(i === undefined) i = state.index;
  if(!state.answers[i]) state.answers[i] = { checked:false, solved:false, tries:0 };
  return state.answers[i];
}

function shuffle(arr){
  const a = arr.slice();
  for(let i=a.length-1;i>0;i--){
    const j = Math.floor(Math.random()*(i+1));
    [a[i],a[j]] = [a[j],a[i]];
  }
  return a;
}

/** So sánh hai danh sách vị trí, không quan tâm thứ tự. */
function sameSet(a, b){
  if(a.length !== b.length) return false;
  const x = a.slice().sort((m,n)=>m-n), y = b.slice().sort((m,n)=>m-n);
  return x.every((v,i)=> v === y[i]);
}

/* --- Âm thanh nhỏ bằng WebAudio, không cần file ngoài --- */
let audioCtx = null;
function beep(notes){
  if(!state.sound) return;
  try{
    audioCtx = audioCtx || new (window.AudioContext || window.webkitAudioContext)();
    if(audioCtx.state === 'suspended') audioCtx.resume();
    notes.forEach(([freq, at, dur]) => {
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'triangle';
      osc.frequency.value = freq;
      gain.gain.setValueAtTime(0.0001, audioCtx.currentTime + at);
      gain.gain.exponentialRampToValueAtTime(0.22, audioCtx.currentTime + at + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + at + dur);
      osc.connect(gain).connect(audioCtx.destination);
      osc.start(audioCtx.currentTime + at);
      osc.stop(audioCtx.currentTime + at + dur + 0.02);
    });
  }catch(e){ /* trình duyệt chặn thì bỏ qua */ }
}
const soundRight = () => beep([[660,0,.14],[880,.12,.2]]);
const soundWrong = () => beep([[220,0,.22]]);
const soundTurn  = () => beep([[520,0,.07]]);

/* --- Pháo giấy --- */
function confetti(){
  if(window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const box = document.createElement('div');
  box.className = 'confetti';
  const bits = ['⭐','🎉','✨','🎈','🌟','💛'];
  for(let i=0;i<26;i++){
    const b = document.createElement('i');
    b.textContent = bits[Math.floor(Math.random()*bits.length)];
    b.style.left = Math.random()*100 + '%';
    b.style.animationDelay = (Math.random()*0.35) + 's';
    b.style.animationDuration = (1.1 + Math.random()*0.8) + 's';
    b.style.fontSize = (16 + Math.random()*18) + 'px';
    box.appendChild(b);
  }
  document.body.appendChild(box);
  setTimeout(() => box.remove(), 2200);
}


/* ============================================================
   4. VẼ GIAO DIỆN THEO type
   ============================================================ */
function render(animate){
  const slide = slidesData[state.index];
  const a = ans(state.index);

  el.slide.classList.remove('enter');
  el.slide.innerHTML = viewOf(slide, a);
  if(animate){ void el.slide.offsetWidth; el.slide.classList.add('enter'); }
  el.slide.scrollTop = 0;

  const pct = Math.round(((state.index + 1) / slidesData.length) * 100);
  el.barFill.style.width = pct + '%';
  el.bar.setAttribute('aria-valuenow', pct);
  el.counter.textContent = 'Trang ' + (state.index + 1) + ' / ' + slidesData.length;

  el.prevBtn.hidden = state.index === 0;
  updateButtons(slide, a);
}

function viewOf(slide, a){
  switch(slide.type){
    case 'info':          return viewInfo(slide, a);
    case 'quiz_single':   return viewSingle(slide, a);
    case 'quiz_multiple': return viewMultiple(slide, a);
    case 'quiz_dragdrop': return viewDragDrop(slide, a);
    case 'quiz_dropdown': return viewDropdown(slide, a);
    case 'quiz_matching': return viewMatching(slide, a);
    case 'quiz_hotspot':  return viewHotspot(slide, a);
    default:              return '<p class="lead">Chưa hỗ trợ loại slide này.</p>';
  }
}

/* Phần đầu chung của mọi slide câu hỏi */
function head(s, note){
  let h = '';
  if(s.topic) h += '<p class="topic">' + esc(s.topic) + '</p>';
  h += '<h2 class="question">' + s.question + '</h2>';
  if(note) h += '<p class="qnote">' + note + '</p>';
  return h;
}

/* ---------- 4.1 Slide lý thuyết ---------- */
function viewInfo(s){
  let html = '';
  if(s.topic)   html += '<p class="topic">' + esc(s.topic) + '</p>';
  html += '<h1>' + s.title + '</h1>';
  if(s.content) html += '<p class="lead">' + s.content + '</p>';

  if(s.final){
    const quizzes = slidesData.filter(x => x.type !== 'info').length;
    const done = Object.values(state.answers).filter(x => x.solved).length;
    html += '<div class="score"><em>🏆</em><div>' +
            '<strong>' + done + ' / ' + quizzes + ' câu đúng</strong>' +
            '<span>Em đã trả lời đúng ' + done + ' trên ' + quizzes + ' câu hỏi của bài.</span>' +
            '</div></div>';
  }

  if(s.imageUrl){
    html += '<img class="slide-photo" src="' + esc(s.imageUrl) + '" alt="' + esc(s.title) + '">';
  }else if(s.things && s.things.length){
    html += '<div class="things">';
    s.things.forEach(t => {
      html += '<div class="thing"><em>' + t.icon + '</em>' +
              '<span>' + esc(t.name) + '</span>' +
              '<small>' + esc(t.en) + '</small></div>';
    });
    html += '</div>';
  }

  if(s.remember) html += '<div class="remember"><em>💡</em><p>' + s.remember + '</p></div>';
  return html;
}

/* ---------- 4.2 Trắc nghiệm 1 đáp án ---------- */
function viewSingle(s, a){
  let html = head(s, 'Em hãy chọn một đáp án.');
  html += '<div class="options" role="radiogroup" aria-label="Các đáp án">';
  s.options.forEach((opt, i) => {
    let cls = 'option';
    if(a.checked){
      cls += ' locked';
      if(i === s.correctAnswer) cls += ' right';
      else if(i === a.picked)   cls += ' wrong';
    }else if(a.picked === i) cls += ' picked';

    html += '<label class="' + cls + '">' +
              '<input type="radio" name="choice" value="' + i + '"' +
                (a.picked === i ? ' checked' : '') + (a.checked ? ' disabled' : '') + '>' +
              '<span class="letter">' + LETTERS[i] + '</span>' +
              '<span class="option-text">' + esc(opt) + '</span>' +
            '</label>';
  });
  html += '</div>' + feedbackHTML(s, a);
  return html;
}

/* ---------- 4.3 Trắc nghiệm nhiều đáp án ---------- */
function viewMultiple(s, a){
  if(!a.picks) a.picks = [];
  let html = head(s, 'Câu này có nhiều hơn một đáp án đúng.');
  html += '<div class="options" role="group" aria-label="Các đáp án">';
  s.options.forEach((opt, i) => {
    const picked = a.picks.indexOf(i) !== -1;
    let cls = 'option';
    if(a.checked){
      cls += ' locked';
      if(s.correctAnswers.indexOf(i) !== -1) cls += ' right';
      else if(picked) cls += ' wrong';
    }else if(picked) cls += ' picked';

    html += '<label class="' + cls + '">' +
              '<input type="checkbox" name="multi" value="' + i + '"' +
                (picked ? ' checked' : '') + (a.checked ? ' disabled' : '') + '>' +
              '<span class="letter letter--box">' + LETTERS[i] + '</span>' +
              '<span class="option-text">' + esc(opt) + '</span>' +
            '</label>';
  });
  html += '</div>' + feedbackHTML(s, a);
  return html;
}

/* ---------- 4.4 Kéo thả ---------- */
function viewDragDrop(s, a){
  if(!a.order)  a.order  = shuffle(s.zones.map((_, i) => i));
  if(!a.placed) a.placed = {};

  const used = Object.keys(a.placed).map(k => a.placed[k]);

  let html = head(s, 'Kéo thẻ vào đúng ô, hoặc bấm thẻ rồi bấm ô muốn thả.');

  // Kho thẻ chưa dùng
  html += '<div class="pool" id="pool">';
  a.order.forEach(i => {
    if(used.indexOf(i) !== -1) return;
    html += '<span class="chip' + (a.grab === i ? ' active' : '') + '" role="button" tabindex="0" ' +
              'draggable="' + (a.checked ? 'false' : 'true') + '" data-i="' + i + '">' +
              esc(s.zones[i].item) + '</span>';
  });
  html += '</div>';

  // Các ô đích
  html += '<div class="zones">';
  s.zones.forEach((z, i) => {
    const item = a.placed[i];
    let cls = 'zone';
    if(a.checked && item !== undefined) cls += (item === i ? ' right' : ' wrong');
    html += '<div class="' + cls + '" role="button" tabindex="0" data-i="' + i + '">' +
              '<span class="zone__label">' + esc(z.label) + '</span>' +
              '<span class="zone__slot">' +
                (item !== undefined ? esc(s.zones[item].item) : 'Thả vào đây') +
              '</span>' +
            '</div>';
  });
  html += '</div>' + feedbackHTML(s, a);
  return html;
}

/* ---------- 4.5 Danh sách thả xuống ---------- */
function viewDropdown(s, a){
  if(!a.sel) a.sel = s.blanks.map(() => -1);

  // Vẽ 1 đoạn văn bản có thể chứa nhiều "___", trả về HTML với các <select> tương ứng.
  // blankIndex là chỉ số của ô trống ĐẦU TIÊN xuất hiện trong đoạn "text" này (tính theo s.blanks).
  function renderLine(text, blankIndex){
    const parts = text.split('___');
    let out = '';
    parts.forEach((part, i) => {
      out += esc(part);
      if(i < parts.length - 1){
        const bi = blankIndex + i;
        const b = s.blanks[bi];
        let cls = 'pick';
        if(a.checked) cls += (a.sel[bi] === b.correctAnswer ? ' right' : ' wrong');
        out += '<select class="' + cls + '" data-b="' + bi + '"' + (a.checked ? ' disabled' : '') + '>' +
                  '<option value="-1"' + (a.sel[bi] === -1 ? ' selected' : '') + '>— chọn —</option>';
        b.options.forEach((opt, j) => {
          out += '<option value="' + j + '"' + (a.sel[bi] === j ? ' selected' : '') + '>' + esc(opt) + '</option>';
        });
        out += '</select>';
      }
    });
    return out;
  }

  let html = '';
  if(s.topic) html += '<p class="topic">' + esc(s.topic) + '</p>';

  // Cố gắng tách câu thành từng phát biểu riêng (mỗi phát biểu chứa đúng 1 ô trống,
  // kết thúc bằng dấu chấm), để mỗi phát biểu được xuống hàng và tách khỏi câu dẫn/yêu cầu.
  // Nếu văn bản không theo đúng quy ước này (số câu tách được khác số ô trống),
  // sẽ dùng lại cách hiển thị liền mạch như cũ để đảm bảo an toàn.
  let sentences = s.question.split(/(?<=___\.)\s*/).filter(Boolean);
  const splitMatchesBlanks = sentences.filter(t => t.includes('___')).length === s.blanks.length;

  if(splitMatchesBlanks){
    // Nếu câu đầu tiên có phần dẫn nhập trước dấu ":" (VD: "Hãy phân loại ... vào đúng nhóm:"),
    // tách phần đó ra làm TIÊU ĐỀ của câu hỏi, định dạng giống hệt tiêu đề (h2.question)
    // của các dạng câu hỏi khác — in đậm, nổi bật ở trên cùng.
    const colonIdx = sentences[0].indexOf(':');
    if(colonIdx !== -1 && colonIdx < sentences[0].indexOf('___')){
      const intro = sentences[0].slice(0, colonIdx + 1).trim();
      sentences[0] = sentences[0].slice(colonIdx + 1).trim();
      html += '<h2 class="question">' + esc(intro) + '</h2>';
    }

    html += '<p class="qnote">Em hãy chọn từ đúng trong mỗi ô.</p>';

    html += '<div class="sentence-list">';
    let blankIndex = 0;
    sentences.forEach(sent => {
      const blanksInSent = (sent.match(/___/g) || []).length;
      if(blanksInSent === 1){
        // Chỉ có 1 ô trống trong phát biểu này: tách riêng phần chữ (bên trái)
        // và khung chọn đáp án (bên phải, nằm ngoài dòng chữ) thành 2 cột.
        const idx = sent.indexOf('___');
        const before = sent.slice(0, idx);
        const after = sent.slice(idx + 3); // phần còn lại, thường là dấu "."
        html += '<div class="sentence-row">' +
                  '<span class="sentence-text">' + esc(before) + '</span>' +
                  '<span class="sentence-control">' + renderLine('___' + after, blankIndex) + '</span>' +
                '</div>';
      } else {
        // Nhiều hơn 1 ô trống trong cùng 1 phát biểu: hiển thị liền mạch như cũ.
        html += '<div class="sentence-row sentence-row--inline">' + renderLine(sent, blankIndex) + '</div>';
      }
      blankIndex += blanksInSent;
    });
    html += '</div>';
  } else {
    html += '<p class="qnote">Em hãy chọn từ đúng trong mỗi ô.</p>';
    html += '<p class="sentence-plain">' + renderLine(s.question, 0) + '</p>';
  }

  html += feedbackHTML(s, a);
  return html;
}

/* ---------- 4.6 Nối cặp ---------- */
function viewMatching(s, a){
  if(!a.order) a.order = shuffle(s.pairs.map((_, i) => i));
  if(!a.links) a.links = {};

  let html = head(s, 'Bấm một thẻ bên trái, rồi bấm thẻ đúng bên phải. Bấm lại vào thẻ đã nối để gỡ ra.');
  html += '<div class="match">';

  html += '<div class="match__col"><p class="match__head">Cột A</p>';
  s.pairs.forEach((p, i) => {
    const linked = a.links[i] !== undefined;
    let cls = 'card' + (a.sel === i ? ' active' : '') + (linked ? ' linked' : '');
    if(a.checked && linked) cls += (a.links[i] === i ? ' correct' : ' incorrect');
    html += '<button class="' + cls + '" data-side="left" data-i="' + i + '" ' +
              'style="--dot:' + PAIR_COLORS[i % PAIR_COLORS.length] + '">' +
              (p.icon ? '<em>' + p.icon + '</em>' : '') +
              '<span>' + esc(p.left) + '</span>' +
              (linked ? '<span class="pin">' + (i + 1) + '</span>' : '') +
            '</button>';
  });
  html += '</div>';

  html += '<div class="match__col"><p class="match__head">Cột B</p>';
  a.order.forEach(j => {
    const owner = Object.keys(a.links).find(k => a.links[k] === j);
    const linked = owner !== undefined;
    const color = linked ? PAIR_COLORS[Number(owner) % PAIR_COLORS.length] : 'var(--lilac)';
    let cls = 'card' + (linked ? ' linked' : '');
    if(a.checked && linked) cls += (Number(owner) === j ? ' correct' : ' incorrect');
    html += '<button class="' + cls + '" data-side="right" data-i="' + j + '" style="--dot:' + color + '">' +
              '<span>' + esc(s.pairs[j].right) + '</span>' +
              (linked ? '<span class="pin">' + (Number(owner) + 1) + '</span>' : '') +
            '</button>';
  });
  html += '</div></div>' + feedbackHTML(s, a);
  return html;
}

/* ---------- 4.7 Bấm đúng vùng trên hình ---------- */
function viewHotspot(s, a){
  if(!a.hits) a.hits = [];
  const many = s.spots.filter(p => p.correct).length > 1;

  let html = head(s, many ? 'Em hãy bấm vào tất cả các vùng đúng trên hình.'
                          : 'Em hãy bấm vào đúng một vùng trên hình.');

  html += '<div class="hotspot' + (s.imageUrl ? '' : ' hotspot--empty') + '">';
  if(s.imageUrl) html += '<img src="' + esc(s.imageUrl) + '" alt="">';

  s.spots.forEach((p, i) => {
    const picked = a.hits.indexOf(i) !== -1;
    let cls = 'spot';
    if(a.checked){
      if(p.correct) cls += ' right';
      else if(picked) cls += ' wrong';
    }else if(picked) cls += ' picked';

    html += '<button class="' + cls + '" data-spot="' + i + '" ' +
              'style="left:' + p.x + '%;top:' + p.y + '%;width:' + p.w + '%;height:' + p.h + '%">' +
              esc(p.label || '') + '</button>';
  });
  html += '</div>' + feedbackHTML(s, a);
  return html;
}

/* ---------- 4.8 Ô phản hồi ---------- */
function feedbackHTML(s, a){
  if(!a.checked) return '';
  if(a.solved){
    return '<div class="feedback ok"><em>🎉</em><p><b>Chính xác!</b> ' + (s.explain || '') + '</p></div>';
  }
  return '<div class="feedback no"><em>🤔</em><p><b>Chưa đúng rồi.</b> ' +
         (s.hint || 'Em hãy bấm Thử lại và làm lại lần nữa nhé.') + '</p></div>';
}


/* ============================================================
   5. HAI NÚT DƯỚI CÙNG
   ------------------------------------------------------------
   Chưa kiểm tra   -> [Kiểm tra]
   Kiểm tra mà sai -> [Thử lại]        (nút Kiểm tra bị ẩn)
   Đã đúng         -> [Tiếp theo]
   Nút Quay lại luôn hiện, trừ trang đầu tiên.
   ============================================================ */
function isQuiz(slide){ return slide.type !== 'info'; }

function updateButtons(slide, a){
  const last = state.index === slidesData.length - 1;

  if(isQuiz(slide) && !a.solved){
    if(a.checked){
      el.mainBtn.hidden  = true;    // trả lời sai: bỏ hẳn nút Kiểm tra
      el.retryBtn.hidden = false;
    }else{
      el.mainBtn.hidden  = false;
      el.mainBtn.textContent = 'Kiểm tra';
      el.mainBtn.dataset.act = 'check';
      el.retryBtn.hidden = true;
    }
    return;
  }

  el.retryBtn.hidden = true;
  el.mainBtn.hidden  = false;
  el.mainBtn.textContent = last ? 'Học lại từ đầu' : 'Tiếp theo';
  el.mainBtn.dataset.act = last ? 'restart' : 'next';
}


/* ============================================================
   6. CHẤM BÀI
   ============================================================ */
function check(){
  const s = slidesData[state.index];
  const a = ans();

  switch(s.type){

    case 'quiz_single':
      if(a.picked === undefined) return nudge('Em hãy chọn một đáp án trước nhé.');
      a.solved = a.picked === s.correctAnswer;
      break;

    case 'quiz_multiple':
      if(!a.picks || !a.picks.length) return nudge('Em hãy chọn ít nhất một đáp án nhé.');
      a.solved = sameSet(a.picks, s.correctAnswers);
      break;

    case 'quiz_dragdrop':
      if(Object.keys(a.placed).length < s.zones.length) return nudge('Em hãy thả hết các thẻ vào ô nhé.');
      a.solved = s.zones.every((_, i) => a.placed[i] === i);
      break;

    case 'quiz_dropdown':
      if(a.sel.indexOf(-1) !== -1) return nudge('Em hãy chọn đủ các ô nhé.');
      a.solved = s.blanks.every((b, i) => a.sel[i] === b.correctAnswer);
      break;

    case 'quiz_matching':
      if(Object.keys(a.links).length < s.pairs.length) return nudge('Em hãy nối hết các thẻ nhé.');
      a.solved = s.pairs.every((_, i) => a.links[i] === i);
      break;

    case 'quiz_hotspot': {
      if(!a.hits.length) return nudge('Em hãy bấm vào một vùng trên hình nhé.');
      const right = [];
      s.spots.forEach((p, i) => { if(p.correct) right.push(i); });
      a.solved = sameSet(a.hits, right);
      break;
    }
  }

  a.checked = true;
  a.tries++;
  render(false);

  if(a.solved){
    soundRight();
    confetti();
  }else{
    soundWrong();
    el.slide.classList.add('shake');
    setTimeout(() => el.slide.classList.remove('shake'), 450);
  }
}

/** Nhắc nhẹ khi làm chưa xong — không tính là một lần trả lời sai. */
function nudge(msg){
  el.slide.classList.add('shake');
  setTimeout(() => el.slide.classList.remove('shake'), 450);
  soundWrong();
  const old = el.slide.querySelector('.feedback');
  if(old) old.remove();
  el.slide.insertAdjacentHTML('beforeend',
    '<div class="feedback no"><em>✋</em><p>' + esc(msg) + '</p></div>');
}

/** Làm lại: giữ những phần đã đúng, xoá phần sai. */
function retry(){
  const s = slidesData[state.index];
  const a = ans();
  a.checked = false;

  if(s.type === 'quiz_single')   a.picked = undefined;
  if(s.type === 'quiz_multiple') a.picks = [];
  if(s.type === 'quiz_dropdown') a.sel = s.blanks.map(() => -1);
  if(s.type === 'quiz_hotspot')  a.hits = [];

  if(s.type === 'quiz_matching'){
    const kept = {};
    Object.keys(a.links).forEach(k => { if(a.links[k] === Number(k)) kept[k] = a.links[k]; });
    a.links = kept;
    a.sel = null;
  }
  if(s.type === 'quiz_dragdrop'){
    const kept = {};
    Object.keys(a.placed).forEach(k => { if(a.placed[k] === Number(k)) kept[k] = a.placed[k]; });
    a.placed = kept;
    a.grab = null;
  }

  render(false);
}


/* ============================================================
   7. ĐIỀU HƯỚNG
   ============================================================ */
function go(step){
  const next = state.index + step;
  if(next < 0 || next >= slidesData.length) return;
  state.index = next;
  soundTurn();
  render(true);
  el.slide.focus({ preventScroll:true });
}

function restart(){
  state.index = 0;
  state.answers = {};
  render(true);
}


/* ============================================================
   8. SỰ KIỆN
   ============================================================ */
el.prevBtn.addEventListener('click', () => go(-1));
el.retryBtn.addEventListener('click', retry);

el.mainBtn.addEventListener('click', () => {
  const act = el.mainBtn.dataset.act;
  if(act === 'check')        check();
  else if(act === 'restart') restart();
  else                       go(1);
});

/* --- Chọn đáp án: radio, checkbox, dropdown --- */
el.slide.addEventListener('change', e => {
  const a = ans();
  if(a.checked) return;

  if(e.target.name === 'choice'){
    a.picked = Number(e.target.value);
    render(false);
  }
  else if(e.target.name === 'multi'){
    const v = Number(e.target.value);
    const at = a.picks.indexOf(v);
    if(at === -1) a.picks.push(v); else a.picks.splice(at, 1);
    render(false);
  }
  else if(e.target.dataset.b !== undefined){
    a.sel[Number(e.target.dataset.b)] = Number(e.target.value);
  }
});

/* --- Bấm: nối cặp, kéo thả (chế độ chạm), hotspot --- */
el.slide.addEventListener('click', e => {
  const a = ans();
  if(a.checked) return;

  // Nối cặp
  const card = e.target.closest('.card');
  if(card){
    const i = Number(card.dataset.i);
    if(card.dataset.side === 'left'){
      if(a.links[i] !== undefined){ delete a.links[i]; a.sel = null; }
      else a.sel = (a.sel === i ? null : i);
    }else{
      const owner = Object.keys(a.links).find(k => a.links[k] === i);
      if(owner !== undefined){ delete a.links[owner]; a.sel = null; }
      else if(a.sel !== null && a.sel !== undefined){ a.links[a.sel] = i; a.sel = null; soundTurn(); }
    }
    return render(false);
  }

  // Kéo thả — bấm thẻ để cầm
  const chip = e.target.closest('.chip');
  if(chip){
    const i = Number(chip.dataset.i);
    a.grab = (a.grab === i ? null : i);
    return render(false);
  }

  // Kéo thả — bấm ô để thả hoặc lấy thẻ ra
  const zone = e.target.closest('.zone');
  if(zone){
    dropInto(Number(zone.dataset.i));
    return;
  }

  // Hotspot
  const spot = e.target.closest('.spot');
  if(spot){
    const i = Number(spot.dataset.spot);
    const at = a.hits.indexOf(i);
    if(at === -1) a.hits.push(i); else a.hits.splice(at, 1);
    soundTurn();
    return render(false);
  }
});

function dropInto(zoneIndex){
  const a = ans();
  if(a.placed[zoneIndex] !== undefined){      // ô đang có thẻ: lấy thẻ ra
    delete a.placed[zoneIndex];
    a.grab = null;
  }else if(a.grab !== null && a.grab !== undefined){
    a.placed[zoneIndex] = a.grab;
    a.grab = null;
    soundTurn();
  }
  render(false);
}

/* --- Kéo thả bằng chuột --- */
el.slide.addEventListener('dragstart', e => {
  const chip = e.target.closest('.chip');
  if(!chip || ans().checked) return;
  ans().grab = Number(chip.dataset.i);
  e.dataTransfer.setData('text/plain', chip.dataset.i);
  e.dataTransfer.effectAllowed = 'move';
});

el.slide.addEventListener('dragover', e => {
  const zone = e.target.closest('.zone');
  if(!zone || ans().checked) return;
  e.preventDefault();
  e.dataTransfer.dropEffect = 'move';
  zone.classList.add('over');
});

el.slide.addEventListener('dragleave', e => {
  const zone = e.target.closest('.zone');
  if(zone) zone.classList.remove('over');
});

el.slide.addEventListener('drop', e => {
  const zone = e.target.closest('.zone');
  if(!zone || ans().checked) return;
  e.preventDefault();
  zone.classList.remove('over');
  dropInto(Number(zone.dataset.i));
});

/* --- Phím tắt cho lớp học / máy chiếu --- */
document.addEventListener('keydown', e => {
  const t = e.target;
  if(t.tagName === 'INPUT' || t.tagName === 'SELECT') return;

  // Đang đứng trên một thẻ tương tác thì Enter / Space kích hoạt chính thẻ đó
  const piece = t.closest && t.closest('.chip, .zone, .card, .spot');
  if(piece && (e.key === 'Enter' || e.key === ' ')){
    e.preventDefault();
    piece.click();
    return;
  }

  const s = slidesData[state.index];
  const a = ans();

  if(e.key === 'ArrowLeft'){
    go(-1);
  }
  else if(e.key === 'ArrowRight' || e.key === ' ' || e.key === 'Enter'){
    e.preventDefault();
    if(!el.mainBtn.hidden)       el.mainBtn.click();
    else if(!el.retryBtn.hidden) el.retryBtn.click();
  }
  else if(/^[1-6]$/.test(e.key) && !a.checked){
    const i = Number(e.key) - 1;
    if(s.type === 'quiz_single' && i < s.options.length){
      a.picked = i; render(false);
    }
    else if(s.type === 'quiz_multiple' && i < s.options.length){
      const at = a.picks.indexOf(i);
      if(at === -1) a.picks.push(i); else a.picks.splice(at, 1);
      render(false);
    }
  }
});

el.soundBtn.addEventListener('click', () => {
  state.sound = !state.sound;
  el.soundBtn.textContent = state.sound ? '🔊' : '🔇';
  el.soundBtn.setAttribute('aria-pressed', String(state.sound));
  if(state.sound) soundTurn();
});

el.fullBtn.addEventListener('click', () => {
  if(document.fullscreenElement) document.exitFullscreen();
  else document.documentElement.requestFullscreen().catch(() => {});
});


/* ============================================================
   9. KHỞI ĐỘNG
   ============================================================ */
document.getElementById('lessonName').innerHTML =
  '<span>' + CONFIG.icon + '</span> ' + CONFIG.title;
document.title = CONFIG.title;

render(true);
/* ============================================================
   BÀI GIẢNG TƯƠNG TÁC — BỘ MÁY CHẠY
   ------------------------------------------------------------
   File này không cần sửa. Muốn đổi nội dung/mật khẩu, sửa
   lesson-data.js. Muốn đổi màu sắc/giao diện, sửa style.css.
   ============================================================ */


/* ============================================================
   1. GHÉP DỮ LIỆU: từ LESSON.sections → mảng phẳng slidesData
   ------------------------------------------------------------
   Mỗi slide được gắn thêm 3 trường nội bộ (bắt đầu bằng "_")
   để biết nó thuộc section nào — không đụng đến dữ liệu gốc
   của bạn trong lesson-data.js.
   ============================================================ */
const slidesData = [];
LESSON.sections.forEach((sec, si) => {
  sec.slides.forEach((sl, li) => {
    const copy = Object.assign({}, sl);
    copy._sectionIndex = si;
    copy._slideIndexInSection = li;
    copy._isFirstOfSection = li === 0;
    slidesData.push(copy);
  });
});

function sectionOf(i){ return LESSON.sections[slidesData[i]._sectionIndex]; }
function firstIndexOfSection(si){
  return slidesData.findIndex(s => s._sectionIndex === si);
}


/* ============================================================
   2. TIẾN TRÌNH MỞ KHÓA
   ------------------------------------------------------------
   Không lưu gì lại — mỗi lần tải trang là một lượt học mới,
   mọi phần có mật khẩu đều khóa lại từ đầu. Chỉ phần nào có
   password === "" (hoặc không khai báo .password) trong
   lesson-data.js mới luôn mở sẵn.
   ============================================================ */
const progress = { unlocked: [] };

LESSON.sections.forEach((sec, si) => {
  if(!sec.password) progress.unlocked.push(si);
});

function isUnlocked(si){ return progress.unlocked.indexOf(si) !== -1; }

function unlockSection(si){
  if(!isUnlocked(si)) progress.unlocked.push(si);
}


/* ============================================================
   3. TRẠNG THÁI
   ============================================================ */
const state = {
  index: 0,
  sound: true,
  answers: {},          // { [slideIndex]: { checked, solved, ...dữ liệu riêng của từng dạng } }
  visited: new Set()    // các chỉ số slide đã thực sự hiển thị (dùng để biết 1 phần đã "đi hết" chưa)
};

let gateError = '';

const el = {
  slide:      document.getElementById('slide'),
  slideInner: document.getElementById('slideInner'),
  barFill:   document.getElementById('barFill'),
  bar:       document.getElementById('bar'),
  counter:   document.getElementById('counter'),
  prevBtn:   document.getElementById('prevBtn'),
  mainBtn:   document.getElementById('mainBtn'),
  retryBtn:  document.getElementById('retryBtn'),
  soundBtn:  document.getElementById('soundBtn'),
  fullBtn:   document.getElementById('fullBtn'),
  secChips:  document.getElementById('secChips')
};

const LETTERS = ['A','B','C','D','E','F'];
const PAIR_COLORS = ['var(--pair-1)','var(--pair-2)','var(--pair-3)','var(--pair-4)'];


/* ============================================================
   4. TIỆN ÍCH
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
   5. VẼ GIAO DIỆN THEO type
   ============================================================ */
function render(animate){
  const slide = slidesData[state.index];
  const locked = !isUnlocked(slide._sectionIndex);
  const a = ans(state.index);

  el.slide.classList.remove('enter');
  el.slideInner.innerHTML = locked ? viewGate(slide) : viewOf(slide, a);
  if(animate){ void el.slide.offsetWidth; el.slide.classList.add('enter'); }
  el.slideInner.scrollTop = 0;

  if(!locked) state.visited.add(state.index);

  updateScrollHint();

  const pct = Math.round(((state.index + 1) / slidesData.length) * 100);
  el.barFill.style.width = pct + '%';
  el.bar.setAttribute('aria-valuenow', pct);
  el.counter.textContent = 'Trang ' + (state.index + 1) + ' / ' + slidesData.length;

  el.prevBtn.hidden = state.index === 0;

  if(locked) updateButtonsGate();
  else       updateButtons(slide, a);

  renderSectionChips(slide._sectionIndex);

  if(locked){
    const input = document.getElementById('gateInput');
    if(input) input.focus();
  }
}

/** Gợi ý cuộn: nếu nội dung cao hơn khung hiển thị, thêm 1 dòng nhắc nhỏ
    ngay cạnh ô "topic" (Luyện tập / Ôn tập...) để học sinh biết cần cuộn
    xuống, tránh bỏ sót câu hỏi/đáp án nằm ở phần dưới. Tách riêng khỏi
    render() và gọi lại khi bật/tắt toàn màn hình hoặc đổi cỡ cửa sổ, vì
    khung hiển thị đổi kích thước KHÔNG kèm theo một lượt render() mới —
    nếu không tính lại, dòng nhắc có thể bị "kẹt" hiện (hoặc kẹt ẩn) sai
    với kích thước khung thực tế lúc đó. */
function updateScrollHint(){
  const oldHint = el.slideInner.querySelector('.scroll-hint');
  if(oldHint) oldHint.remove();
  const oldRow = el.slideInner.querySelector('.topic-row');
  if(oldRow){
    const topicEl = oldRow.querySelector('.topic');
    if(topicEl) oldRow.replaceWith(topicEl);
    else oldRow.remove();
  }

  const slide = slidesData[state.index];
  if(!isUnlocked(slide._sectionIndex)) return;
  if(el.slideInner.scrollHeight <= el.slideInner.clientHeight + 4) return;

  const hintText = '⬇️ Trang này dài hơn khung hiển thị — em cuộn xuống để xem đầy đủ nội dung nhé.';
  const topicEl = el.slideInner.querySelector('.topic');
  if(topicEl){
    const row = document.createElement('div');
    row.className = 'topic-row';
    topicEl.replaceWith(row);
    row.appendChild(topicEl);
    row.insertAdjacentHTML('beforeend', '<span class="scroll-hint">' + hintText + '</span>');
  } else {
    el.slideInner.insertAdjacentHTML('afterbegin',
      '<p class="scroll-hint scroll-hint--standalone">' + hintText + '</p>');
  }
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

/* ---------- 5.1 Slide lý thuyết ---------- */
function viewInfo(s){
  let html = '';
  if(s.topic)   html += '<p class="topic">' + esc(s.topic) + '</p>';
  html += '<h1>' + s.title + '</h1>';
  if(s.content) html += '<p class="lead">' + s.content + '</p>';

  if(s.final){
    let quizzes = 0, done = 0;
    slidesData.forEach((sl, idx) => {
      if(sl.type === 'info') return;
      if(s.resetScope === 'section' && sl._sectionIndex !== s._sectionIndex) return;
      if(Array.isArray(s.scoreSections) && s.scoreSections.indexOf(sl._sectionIndex) === -1) return;
      quizzes++;
      if(state.answers[idx] && state.answers[idx].solved) done++;
    });
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

  /* Nhắc học sinh đây là trang đọc thông tin, không có gì để bấm/chọn —
     đọc xong thì bấm nút bên dưới để sang trang kế tiếp. Bỏ qua ở slide
     hoàn thành (final) vì slide đó đã có hướng dẫn riêng (điểm số + nút
     làm lại/học lại), không cần thêm ghi chú này nữa. */
  if(!s.final){
    html += '<p class="info-note">📖 Đây là trang thông tin — em đọc xong thì bấm nút bên dưới để tiếp tục nhé.</p>';
  }

  return html;
}

/* ---------- 5.2 Trắc nghiệm 1 đáp án ---------- */
function viewSingle(s, a){
  if(!a.order) a.order = shuffle(s.options.map((_, i) => i));
  let html = head(s, 'Em hãy chọn một đáp án.');
  html += '<div class="options" role="radiogroup" aria-label="Các đáp án">';
  a.order.forEach((i, pos) => {
    const opt = s.options[i];
    let cls = 'option';
    if(a.checked){
      cls += ' locked';
      if(i === s.correctAnswer) cls += ' right';
      else if(i === a.picked)   cls += ' wrong';
    }else if(a.picked === i) cls += ' picked';

    html += '<label class="' + cls + '">' +
              '<input type="radio" name="choice" value="' + i + '"' +
                (a.picked === i ? ' checked' : '') + (a.checked ? ' disabled' : '') + '>' +
              '<span class="letter">' + LETTERS[pos] + '</span>' +
              '<span class="option-text">' + esc(opt) + '</span>' +
            '</label>';
  });
  html += '</div>' + feedbackHTML(s, a);
  return html;
}

/* ---------- 5.3 Trắc nghiệm nhiều đáp án ---------- */
function viewMultiple(s, a){
  if(!a.picks) a.picks = [];
  if(!a.order) a.order = shuffle(s.options.map((_, i) => i));
  let html = head(s, 'Câu này có nhiều hơn một đáp án đúng.');
  html += '<div class="options" role="group" aria-label="Các đáp án">';
  a.order.forEach((i, pos) => {
    const opt = s.options[i];
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
              '<span class="letter letter--box">' + LETTERS[pos] + '</span>' +
              '<span class="option-text">' + esc(opt) + '</span>' +
            '</label>';
  });
  html += '</div>' + feedbackHTML(s, a);
  return html;
}

/* ---------- 5.4 Kéo thả ---------- */
function viewDragDrop(s, a){
  if(!a.order)  a.order  = shuffle(s.zones.map((_, i) => i));
  if(!a.placed) a.placed = {};

  const used = Object.keys(a.placed).map(k => a.placed[k]);

  let html = head(s, 'Kéo thẻ vào đúng ô, hoặc bấm thẻ rồi bấm ô muốn thả.');

  html += '<div class="pool" id="pool">';
  a.order.forEach(i => {
    if(used.indexOf(i) !== -1) return;
    html += '<span class="chip' + (a.grab === i ? ' active' : '') + '" role="button" tabindex="0" ' +
              'draggable="' + (a.checked ? 'false' : 'true') + '" data-i="' + i + '">' +
              esc(s.zones[i].item) + '</span>';
  });
  html += '</div>';

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

/* ---------- 5.5 Danh sách thả xuống ---------- */
function viewDropdown(s, a){
  if(!a.sel) a.sel = s.blanks.map(() => -1);
  if(!a.order) a.order = shuffle(s.blanks.map((_, i) => i));

  function selectHTML(bi){
    const b = s.blanks[bi];
    let cls = 'pick';
    if(a.checked) cls += (a.sel[bi] === b.correctAnswer ? ' right' : ' wrong');
    let out = '<select class="' + cls + '" data-b="' + bi + '"' + (a.checked ? ' disabled' : '') + '>' +
                '<option value="-1"' + (a.sel[bi] === -1 ? ' selected' : '') + '>— chọn —</option>';
    b.options.forEach((opt, j) => {
      out += '<option value="' + j + '"' + (a.sel[bi] === j ? ' selected' : '') + '>' + esc(opt) + '</option>';
    });
    out += '</select>';
    return out;
  }

  let html = '';
  if(s.topic) html += '<p class="topic">' + esc(s.topic) + '</p>';

  /* Chia câu hỏi thành các đoạn theo đúng vị trí "___" — không dựa vào dấu
     chấm hay bất kỳ dấu câu nào theo sau nữa. Nhờ vậy dấu câu (nếu có) luôn
     thuộc về phần văn bản bên trái, và ô chọn bên phải không bao giờ có
     kí tự gì theo sau nó. */
  const parts = s.question.split('___');
  const splitMatchesBlanks = parts.length - 1 === s.blanks.length;

  if(splitMatchesBlanks){
    let firstText = parts[0];
    const colonIdx = firstText.indexOf(':');
    if(colonIdx !== -1){
      const intro = firstText.slice(0, colonIdx + 1).trim();
      firstText = firstText.slice(colonIdx + 1).trim();
      html += '<h2 class="question">' + esc(intro) + '</h2>';
    }
    /* Văn bản gốc của từng ô, theo đúng chỉ số ban đầu (chưa xáo trộn) —
       dùng để tra cứu khi vẽ theo thứ tự đã xáo trộn ở a.order. */
    const texts = s.blanks.map((b, i) => (i === 0 ? firstText : parts[i]).trim());

    html += '<p class="qnote">Em hãy chọn từ đúng trong mỗi ô.</p>';

    html += '<div class="sentence-list">';
    a.order.forEach(bi => {
      const text = texts[bi];
      if(text){
        html += '<div class="sentence-row">' +
                  '<span class="sentence-text">' + esc(text) + '</span>' +
                  '<span class="sentence-control">' + selectHTML(bi) + '</span>' +
                '</div>';
      } else {
        /* Không có văn bản riêng cho ô này (vd nhiều ô trống liên tiếp) —
           cho ô chọn chiếm cả dòng để không lệch cột với các dòng khác. */
        html += '<div class="sentence-row sentence-row--inline">' + selectHTML(bi) + '</div>';
      }
    });
    html += '</div>';
  } else {
    html += '<p class="qnote">Em hãy chọn từ đúng trong mỗi ô.</p>';
    html += '<p class="sentence-plain">' + esc(parts[0]) + selectHTML(0) +
              parts.slice(1).map((p, i) => esc(p) + (i + 1 < s.blanks.length ? selectHTML(i + 1) : '')).join('') +
            '</p>';
  }

  html += feedbackHTML(s, a);
  return html;
}

/* ---------- 5.6 Nối cặp ---------- */
function viewMatching(s, a){
  if(!a.orderLeft) a.orderLeft = shuffle(s.pairs.map((_, i) => i));
  if(!a.order) a.order = shuffle(s.pairs.map((_, i) => i));
  if(!a.links) a.links = {};

  let html = head(s, 'Bấm một thẻ bên trái, rồi bấm thẻ đúng bên phải. Bấm lại vào thẻ đã nối để gỡ ra.');
  html += '<div class="match">';

  html += '<div class="match__col"><p class="match__head">Cột A</p>';
  a.orderLeft.forEach(i => {
    const p = s.pairs[i];
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

/* ---------- 5.7 Bấm đúng vùng trên hình ---------- */
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

/* ---------- 5.8 Ô phản hồi ---------- */
function feedbackHTML(s, a){
  if(!a.checked) return '';
  if(a.solved){
    return '<div class="feedback ok"><em>🎉</em><p><b>Chính xác!</b> ' + (s.explain || '') + '</p></div>';
  }
  return '<div class="feedback no"><em>🤔</em><p><b>Chưa đúng rồi.</b> ' +
         (s.hint || 'Em hãy bấm Thử lại và làm lại lần nữa nhé.') + '</p></div>';
}

/* ---------- 5.9 Màn hình khóa (mật khẩu) ---------- */
function viewGate(slide){
  const sec = LESSON.sections[slide._sectionIndex];
  let html = '<div class="gate">';
  html += '<div class="gate__icon">🔒</div>';
  html += '<p class="topic">Phần ' + (slide._sectionIndex + 1) + '</p>';
  html += '<h1>' + esc(sec.title) + '</h1>';
  html += '<p class="lead">Nhập mật khẩu cô/thầy đã cho để mở khóa phần học này nhé.</p>';
  html += '<div class="gate__form">' +
            '<input type="text" id="gateInput" class="gate__input" ' +
              'placeholder="Nhập mật khẩu" autocomplete="off" spellcheck="false" autocapitalize="characters">' +
          '</div>';
  if(gateError){
    html += '<div class="feedback no"><em>🔐</em><p>' + esc(gateError) + '</p></div>';
  }
  html += '</div>';
  return html;
}

/** Đã "đi hết" 1 phần chưa? — true khi mọi slide thuộc phần đó đều đã
    được hiển thị ít nhất 1 lần (ghi trong state.visited), không phải
    chỉ vì phần đó đang ở trạng thái mở khóa. */
/** Đã "đi hết" 1 phần chưa? — true khi:
    - mọi slide THÔNG TIN (info) trong phần đã được xem qua ít nhất 1 lần, và
    - mọi slide CÂU HỎI trong phần đã được trả lời ĐÚNG (state.answers[idx].solved),
      không chỉ đơn thuần đã lướt tới trang đó mà chưa bấm Kiểm tra. */
function isSectionComplete(si){
  return slidesData.every((sl, idx) => {
    if(sl._sectionIndex !== si) return true;
    if(sl.type === 'info') return state.visited.has(idx);
    return !!(state.answers[idx] && state.answers[idx].solved);
  });
}

/* ---------- 5.10 Dải tiến trình theo phần (bấm để nhảy tới phần đó) ---------- */
function renderSectionChips(currentSectionIndex){
  if(!el.secChips) return;
  el.secChips.innerHTML = LESSON.sections.map((sec, i) => {
    const locked = !isUnlocked(i);
    const complete = !locked && isSectionComplete(i);
    const active = i === currentSectionIndex;
    let cls = 'sec-chip';
    if(active) cls += ' active';
    cls += locked ? ' is-locked' : (complete ? ' is-complete' : ' is-unlocked');
    const mark = locked ? '🔒' : (complete ? '✓' : '');
    return '<span class="' + cls + '" data-si="' + i + '" role="button" tabindex="0" ' +
              'aria-label="Đi tới phần: ' + esc(sec.title) + (locked ? ' (chưa mở khóa)' : (complete ? ' (đã hoàn thành)' : ' (đang học)')) + '">' +
              '<span class="sec-chip__mark">' + mark + '</span>' +
              esc(sec.title) +
           '</span>';
  }).join('');
}

/** Nhảy tới slide đầu tiên của một phần — nếu phần đó chưa mở khóa,
    render() sẽ tự hiện màn hình nhập mật khẩu thay vì nội dung. */
function jumpToSection(si){
  const idx = firstIndexOfSection(si);
  if(idx === -1 || idx === state.index) return;
  state.index = idx;
  gateError = '';
  soundTurn();
  render(true);
}


/* ============================================================
   6. HAI NÚT DƯỚI CÙNG
   ------------------------------------------------------------
   Màn hình khóa      -> [Mở khóa]
   Chưa kiểm tra       -> [Kiểm tra]
   Kiểm tra mà sai     -> [Thử lại]        (nút Kiểm tra bị ẩn)
   Đã đúng             -> [Tiếp theo]
   Nút Quay lại luôn hiện, trừ trang đầu tiên.
   ============================================================ */
function isQuiz(slide){ return slide.type !== 'info'; }

function updateButtonsGate(){
  el.retryBtn.hidden = true;
  el.mainBtn.hidden  = false;
  el.mainBtn.textContent = 'Mở khóa';
  el.mainBtn.dataset.act = 'unlock';
}

function updateButtons(slide, a){
  const last = state.index === slidesData.length - 1;

  if(isQuiz(slide) && !a.solved){
    if(a.checked){
      el.mainBtn.hidden  = true;
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

  if(last && slide.final && slide.resetScope === 'section'){
    el.mainBtn.textContent = 'Làm lại phần này';
    el.mainBtn.dataset.act = 'restart-section';
    return;
  }

  el.mainBtn.textContent = last ? 'Học lại từ đầu' : 'Tiếp theo';
  el.mainBtn.dataset.act = last ? 'restart' : 'next';
}


/* ============================================================
   7. CHẤM BÀI
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
  const old = el.slideInner.querySelector('.feedback');
  if(old) old.remove();
  el.slideInner.insertAdjacentHTML('beforeend',
    '<div class="feedback no"><em>✋</em><p>' + esc(msg) + '</p></div>');
}

/** Làm lại: giữ những phần đã đúng, xoá phần sai. */
function retry(){
  const s = slidesData[state.index];
  const a = ans();
  a.checked = false;

  if(s.type === 'quiz_single'){
    a.picked = undefined;
    a.order = shuffle(s.options.map((_, i) => i));
  }
  if(s.type === 'quiz_multiple'){
    a.picks = [];
    a.order = shuffle(s.options.map((_, i) => i));
  }
  if(s.type === 'quiz_dropdown'){
    a.sel = s.blanks.map(() => -1);
    a.order = shuffle(s.blanks.map((_, i) => i));
  }
  if(s.type === 'quiz_hotspot')  a.hits = [];

  if(s.type === 'quiz_matching'){
    const kept = {};
    Object.keys(a.links).forEach(k => { if(a.links[k] === Number(k)) kept[k] = a.links[k]; });
    a.links = kept;
    a.sel = null;
    a.order = shuffle(s.pairs.map((_, i) => i));
    a.orderLeft = shuffle(s.pairs.map((_, i) => i));
  }
  if(s.type === 'quiz_dragdrop'){
    const kept = {};
    Object.keys(a.placed).forEach(k => { if(a.placed[k] === Number(k)) kept[k] = a.placed[k]; });
    a.placed = kept;
    a.grab = null;
  }

  render(false);
}

/** Kiểm tra mật khẩu của section chứa slide hiện tại. */
function tryUnlock(){
  const slide = slidesData[state.index];
  const sec = LESSON.sections[slide._sectionIndex];
  const input = document.getElementById('gateInput');
  const val = (input ? input.value : '').trim();

  if(!val) return nudge('Em hãy nhập mật khẩu trước nhé.');

  if(val.toUpperCase() === String(sec.password).toUpperCase()){
    gateError = '';
    unlockSection(slide._sectionIndex);
    soundRight();
    confetti();
    render(true);
  }else{
    gateError = 'Hmm... chưa đúng rồi! Thử lại nhé 🔐';
    soundWrong();
    render(false);
    el.slide.classList.add('shake');
    setTimeout(() => el.slide.classList.remove('shake'), 450);
  }
}


/* ============================================================
   8. ĐIỀU HƯỚNG
   ============================================================ */
function go(step){
  const next = state.index + step;
  if(next < 0 || next >= slidesData.length) return;
  state.index = next;
  gateError = '';
  soundTurn();
  render(true);
  el.slide.focus({ preventScroll:true });
}

function restart(){
  state.index = 0;
  state.answers = {};
  gateError = '';
  render(true);
}

/** Làm lại chỉ 1 phần (dùng cho slide tổng kết có resetScope:'section',
    ví dụ phần "Ôn tập") — xoá đáp án của riêng các slide trong phần đó
    và quay về slide đầu tiên của phần, không đụng tới các phần khác. */
function restartSection(){
  const si = slidesData[state.index]._sectionIndex;
  Object.keys(state.answers).forEach(idx => {
    if(slidesData[idx] && slidesData[idx]._sectionIndex === si) delete state.answers[idx];
  });
  state.index = firstIndexOfSection(si);
  gateError = '';
  render(true);
}


/* ============================================================
   9. SỰ KIỆN
   ============================================================ */
el.prevBtn.addEventListener('click', () => go(-1));
el.retryBtn.addEventListener('click', retry);

el.mainBtn.addEventListener('click', () => {
  const act = el.mainBtn.dataset.act;
  if(act === 'check')                check();
  else if(act === 'restart')         restart();
  else if(act === 'restart-section') restartSection();
  else if(act === 'unlock')          tryUnlock();
  else                                go(1);
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

/* --- Bấm vào chip "Phần X" trên đầu trang: nhảy tới trang đầu của phần đó --- */
if(el.secChips){
  el.secChips.addEventListener('click', e => {
    const chip = e.target.closest('.sec-chip');
    if(!chip) return;
    jumpToSection(Number(chip.dataset.si));
  });
}

/* --- Bấm: nối cặp, kéo thả (chế độ chạm), hotspot --- */
el.slide.addEventListener('click', e => {
  const a = ans();
  if(a.checked) return;

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

  const chip = e.target.closest('.chip');
  if(chip){
    const i = Number(chip.dataset.i);
    a.grab = (a.grab === i ? null : i);
    return render(false);
  }

  const zone = e.target.closest('.zone');
  if(zone){
    dropInto(Number(zone.dataset.i));
    return;
  }

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
  if(a.placed[zoneIndex] !== undefined){
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

  // Ô nhập mật khẩu: Enter để thử mở khóa ngay
  if(t.id === 'gateInput'){
    if(e.key === 'Enter'){ e.preventDefault(); tryUnlock(); }
    return;
  }

  if(t.tagName === 'INPUT' || t.tagName === 'SELECT') return;

  const piece = t.closest && t.closest('.chip, .zone, .card, .spot, .sec-chip');
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
    const pos = Number(e.key) - 1;
    if(s.type === 'quiz_single' && a.order && pos < a.order.length){
      a.picked = a.order[pos]; render(false);
    }
    else if(s.type === 'quiz_multiple' && a.order && pos < a.order.length){
      const i = a.order[pos];
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

/* Bật/tắt toàn màn hình hoặc đổi cỡ cửa sổ làm khung hiển thị đổi kích
   thước ngay, nhưng không tự gọi lại render() — nếu không tính lại gợi ý
   cuộn ở đây, dòng nhắc có thể còn "kẹt" hiện dù giờ đã đủ chỗ (hoặc kẹt
   ẩn dù giờ lại thiếu chỗ). */
document.addEventListener('fullscreenchange', () => updateScrollHint());
window.addEventListener('resize', () => updateScrollHint());


/* ============================================================
   10. KHỞI ĐỘNG
   ============================================================ */
document.getElementById('lessonName').innerHTML =
  '<span>' + LESSON.icon + '</span> ' + LESSON.title;
document.title = LESSON.title;

render(true);
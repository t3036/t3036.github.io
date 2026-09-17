/* ============================================================
   0. THÔNG TIN BÀI HỌC (hiện ở thanh trên cùng)
   ============================================================ */
const CONFIG = {
  icon:  '💾',
  title: 'Bài 3 — Thông tin đầu vào, đầu ra, bộ nhớ và thiết bị lưu trữ'
};

/* ============================================================
   1. DỮ LIỆU BÀI HỌC
   ============================================================ */
const slidesData = [
  {
    type: 'info',
    topic: 'Khởi động',
    title: 'Thông tin đi vào và đi ra',
    content: 'Khi em thao tác trên máy tính hay dùng điện thoại, thông tin luôn có "chiều đi vào" (Input) và "chiều đi ra" (Output).',
    imageUrl: null,
    things: [
      { icon: '⌨️', name: 'Đầu vào (Input)', en: 'Thứ em đưa vào' },
      { icon: '💻', name: 'Xử lí', en: 'Máy tính tính toán' },
      { icon: '🖥️', name: 'Đầu ra (Output)', en: 'Kết quả nhận được' }
    ],
    remember: 'Hôm nay chúng ta sẽ tìm hiểu Thông tin đầu vào, đầu ra, Bộ nhớ và Thiết bị lưu trữ!'
  },
  {
    type: 'info',
    topic: 'Phần 1 · Đầu vào',
    title: 'Thông tin đầu vào (Input)',
    content: '<b>Thông tin đầu vào (Input)</b> là thông tin mà em đưa vào máy tính.',
    imageUrl: null,
    things: [
      { icon: '➕', name: 'Toán học', en: 'Nhập "1+1"' },
      { icon: '📸', name: 'Chụp ảnh', en: 'Hình ảnh từ máy ảnh' },
      { icon: '🎤', name: 'Ghi âm', en: 'Giọng nói thu vào mic' }
    ],
    remember: 'Bất cứ thứ gì em nhập, bấm, thu âm hay chụp lại để đưa vào thiết bị đều là Thông tin đầu vào.'
  },
  {
    type: 'quiz_single',
    topic: 'Luyện tập',
    question: 'Thông tin đầu vào (Input) là gì?',
    options: [
      'Là thông tin được đưa vào máy tính',
      'Là thông tin được đưa ra ngoài máy tính',
      'Là thông tin được lưu trữ trong máy tính',
      'Là thông tin được máy tính xử lí'
    ],
    correctAnswer: 0,
    hint: 'Chữ "vào" đã nằm sẵn trong tên gọi rồi đó.',
    explain: 'Thông tin đầu vào (Input) là những dữ liệu, thông tin mà em đưa vào máy tính.'
  },
  {
    type: 'info',
    topic: 'Phần 2 · Đầu ra',
    title: 'Thông tin đầu ra (Output)',
    content: '<b>Thông tin đầu ra (Output)</b> là thông tin kết quả được tạo ra từ máy tính sau khi xử lí.',
    imageUrl: null,
    things: [
      { icon: '🔢', name: 'Kết quả', en: 'Số "2" (kết quả của 1+1)' },
      { icon: '🎵', name: 'Âm thanh', en: 'Phát ra từ loa/tai nghe' },
      { icon: '🖼️', name: 'Hình ảnh', en: 'Hiển thị trên màn hình' }
    ],
    remember: 'Thông tin đầu ra là thứ máy tính trả lại cho em xem hoặc nghe.'
  },
  {
    type: 'quiz_single',
    topic: 'Luyện tập',
    question: 'Thuật ngữ nào chỉ kết quả mà máy tính tạo ra (như thông tin, âm thanh, hình ảnh)?',
    options: [
      'Hệ điều hành (OS)',
      'Bộ nhớ (Memory)',
      'Đầu ra (Output)',
      'Ổ cứng (Hard Drive)'
    ],
    correctAnswer: 2,
    hint: 'Kết quả đi ra khỏi máy tính để chúng ta nhận biết.',
    explain: 'Thông tin đầu ra (Output) là thông tin kết quả được tạo ra từ máy tính.'
  },
  {
    type: 'info',
    topic: 'Phần 3 · Bộ nhớ',
    title: 'Bộ nhớ máy tính',
    content: 'Bộ nhớ là thành phần quan trọng nhất được sử dụng để <b>chạy các ứng dụng</b> và lưu trữ thông tin.',
    imageUrl: null,
    things: [
      { icon: '🔒', name: 'ROM (Read-Only Memory)', en: 'Bộ nhớ vĩnh viễn, lưu thông tin quan trọng' },
      { icon: '⚡', name: 'RAM (Random Access Memory)', en: 'Bộ nhớ tạm thời, chạy khi máy hoạt động' }
    ],
    remember: 'ROM chứa những thứ không được phép sửa đổi. RAM chứa thông tin đang hoạt động và sẽ mất khi tắt máy.'
  },
  {
    type: 'quiz_multiple',
    topic: 'Luyện tập',
    question: 'Chức năng của bộ nhớ là gì? (Chọn 3 đáp án)',
    options: [
      'Đưa thông tin dữ liệu vào máy tính',
      'Giúp các chương trình trong máy tính hoạt động',
      'Giúp máy tính tạo và sử dụng tập tin',
      'Giúp khởi động máy tính'
    ],
    correctAnswers: [1, 2, 3],
    hint: 'Bộ nhớ không dùng để "nhập" dữ liệu từ bên ngoài vào.',
    explain: 'Bộ nhớ giúp khởi động máy (nhờ ROM), chạy chương trình và tạo/sử dụng tập tin (nhờ RAM).'
  },
  {
    type: 'quiz_matching',
    topic: 'Luyện tập',
    question: 'Hãy nối tên bộ nhớ với đặc điểm của nó.',
    pairs: [
      { icon: '⚡', left: 'RAM', right: 'Bộ nhớ tạm thời, lưu dữ liệu khi máy đang chạy' },
      { icon: '🔒', left: 'ROM', right: 'Bộ nhớ vĩnh viễn, đọc chứ không được sửa' }
    ],
    hint: 'RAM = Ngẫu nhiên/Tạm thời. ROM = Chỉ đọc/Vĩnh viễn.',
    explain: 'RAM (Random Access Memory) là tạm thời, ROM (Read-Only Memory) là vĩnh viễn.'
  },
  {
    type: 'info',
    topic: 'Phần 4 · Thiết bị lưu trữ',
    title: 'Thiết bị lưu trữ',
    content: 'Thiết bị lưu trữ giúp lưu dữ liệu (dung lượng lớn hơn bộ nhớ nhưng tốc độ chậm hơn). Dung lượng thường được đo bằng <b>Megabyte (MB), Gigabyte (GB), Terabyte (TB)</b>...',
    imageUrl: null,
    things: [
      { icon: '💽', name: 'Ổ cứng', en: 'HDD, SSD nằm trong máy' },
      { icon: '🔌', name: 'USB', en: 'Nhỏ gọn, cắm ngoài' },
      { icon: '💾', name: 'Thẻ nhớ', en: 'Dùng cho điện thoại, máy ảnh' }
    ],
    remember: 'Khi điện thoại hết dung lượng, em có thể <b>xóa ảnh cũ</b> hoặc <b>gỡ trò chơi không dùng</b> để tăng khoảng trống.'
  },
  {
    type: 'quiz_multiple',
    topic: 'Vận dụng',
    question: 'Cách nào để tăng không gian lưu trữ cho điện thoại thông minh? (Chọn 2 đáp án)',
    options: [
      'Gỡ cài đặt bất kì trò chơi nào mà em không chơi nữa.',
      'Xóa ảnh cũ mà em không cần.',
      'Truyền phát Video ở định dạng SD.',
      'Đóng tất cả các chương trình nền đang chạy.'
    ],
    correctAnswers: [0, 1],
    hint: 'Việc nào sẽ làm xóa bớt dữ liệu đang chiếm chỗ trong máy?',
    explain: 'Xóa ảnh cũ và gỡ game không chơi sẽ giải phóng thiết bị lưu trữ. Đóng chương trình nền chỉ giải phóng RAM.'
  },
  {
    type: 'info',
    topic: 'Phần 5 · Ứng dụng AI',
    title: 'Đầu vào và Đầu ra của AI',
    content: 'Khi dùng các công cụ Trí tuệ nhân tạo (AI), em cũng đang thực hiện đưa dữ liệu vào và nhận kết quả ra.',
    imageUrl: null,
    things: [
      { icon: '⌨️', name: 'Đầu vào', en: 'Câu lệnh: "Vẽ con mèo"' },
      { icon: '🧠', name: 'Xử lí', en: 'AI phân tích lệnh' },
      { icon: '🎨', name: 'Đầu ra', en: 'Hình ảnh con mèo' }
    ],
    remember: 'Em gõ "1+1 bằng mấy?" (Input), Chatbot trả lời "Bằng 2" (Output).'
  },
  {
    type: 'info',
    final: true,
    topic: 'Hoàn thành',
    title: 'Chúc mừng em đã học xong Bài 3!',
    content: 'Bây giờ em đã phân biệt được Đầu vào (Input), Đầu ra (Output), biết ROM khác RAM như thế nào, và hiểu về các Thiết bị lưu trữ thông dụng.',
    imageUrl: null,
    remember: 'Hãy thử quan sát xem bàn phím, chuột là thiết bị đầu vào hay đầu ra nhé!'
  }
];

/* ============================================================
   2. TRẠNG THÁI & HỆ THỐNG
   ============================================================ */
const state = {
  index: 0,
  sound: true,
  answers: {}
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

function sameSet(a, b){
  if(a.length !== b.length) return false;
  const x = a.slice().sort((m,n)=>m-n), y = b.slice().sort((m,n)=>m-n);
  return x.every((v,i)=> v === y[i]);
}

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
  }catch(e){ }
}
const soundRight = () => beep([[660,0,.14],[880,.12,.2]]);
const soundWrong = () => beep([[220,0,.22]]);
const soundTurn  = () => beep([[520,0,.07]]);

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

function head(s, note){
  let h = '';
  if(s.topic) h += '<p class="topic">' + esc(s.topic) + '</p>';
  h += '<h2 class="question">' + s.question + '</h2>';
  if(note) h += '<p class="qnote">' + note + '</p>';
  return h;
}

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

function viewDropdown(s, a){
  if(!a.sel) a.sel = s.blanks.map(() => -1);
  const parts = s.question.split('___');

  let html = '';
  if(s.topic) html += '<p class="topic">' + esc(s.topic) + '</p>';
  html += '<p class="qnote">Em hãy chọn từ đúng trong mỗi ô.</p>';
  html += '<p class="sentence">';
  parts.forEach((part, i) => {
    html += esc(part);
    if(i < s.blanks.length){
      const b = s.blanks[i];
      let cls = 'pick';
      if(a.checked) cls += (a.sel[i] === b.correctAnswer ? ' right' : ' wrong');
      html += '<select class="' + cls + '" data-b="' + i + '"' + (a.checked ? ' disabled' : '') + '>' +
                '<option value="-1"' + (a.sel[i] === -1 ? ' selected' : '') + '>— chọn —</option>';
      b.options.forEach((opt, j) => {
        html += '<option value="' + j + '"' + (a.sel[i] === j ? ' selected' : '') + '>' + esc(opt) + '</option>';
      });
      html += '</select>';
    }
  });
  html += '</p>' + feedbackHTML(s, a);
  return html;
}

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

function feedbackHTML(s, a){
  if(!a.checked) return '';
  if(a.solved){
    return '<div class="feedback ok"><em>🎉</em><p><b>Chính xác!</b> ' + (s.explain || '') + '</p></div>';
  }
  return '<div class="feedback no"><em>🤔</em><p><b>Chưa đúng rồi.</b> ' +
         (s.hint || 'Em hãy bấm Thử lại và làm lại lần nữa nhé.') + '</p></div>';
}

function isQuiz(slide){ return slide.type !== 'info'; }

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
  el.mainBtn.textContent = last ? 'Học lại từ đầu' : 'Tiếp theo';
  el.mainBtn.dataset.act = last ? 'restart' : 'next';
}

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

function nudge(msg){
  el.slide.classList.add('shake');
  setTimeout(() => el.slide.classList.remove('shake'), 450);
  soundWrong();
  const old = el.slide.querySelector('.feedback');
  if(old) old.remove();
  el.slide.insertAdjacentHTML('beforeend',
    '<div class="feedback no"><em>✋</em><p>' + esc(msg) + '</p></div>');
}

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

el.prevBtn.addEventListener('click', () => go(-1));
el.retryBtn.addEventListener('click', retry);

el.mainBtn.addEventListener('click', () => {
  const act = el.mainBtn.dataset.act;
  if(act === 'check')        check();
  else if(act === 'restart') restart();
  else                       go(1);
});

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

document.addEventListener('keydown', e => {
  const t = e.target;
  if(t.tagName === 'INPUT' || t.tagName === 'SELECT') return;

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

document.getElementById('lessonName').innerHTML =
  '<span>' + CONFIG.icon + '</span> ' + CONFIG.title;
document.title = CONFIG.title;

render(true);

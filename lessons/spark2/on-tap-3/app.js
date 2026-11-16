/* Ôn tập Spark 2 – Giải Cứu Chìa Khóa Vàng: logic trò chơi (bố cục & luồng chơi theo Spark 3 / Ôn tập 7) */
(function () {
  'use strict';

  var STAGES = window.STAGES, Q = window.QUESTIONS;
  var TOTAL = window.TOTAL_SCORE, PASS = window.PASS_SCORE, MAXHINT = window.TOTAL_HINTS;
  var BEST_KEY = 'spark2-on-tap-3-best';
  var SAVE_KEY = 'spark2-on-tap-3-save-v1';

  /* Màu, tên Tinh Thể và lời kết của từng chặng */
  var META = [
    { color: '#1971c2', key: 'Tinh Thể Từ Ngữ',     outro: 'Các từ ngữ trở về đúng chỗ của mình. Dân làng trao cho em Tinh Thể Từ Ngữ!' },
    { color: '#d9480f', key: 'Tinh Thể Trình Chiếu', outro: 'Những màn hình khổng lồ bật sáng trở lại. Em nhận được Tinh Thể Trình Chiếu!' },
    { color: '#2b8a3e', key: 'Tinh Thể Tài Liệu',    outro: 'Chữ đã trở lại ngay hàng thẳng lối. Thành Phố Tài Liệu tặng em Tinh Thể Tài Liệu!' },
    { color: '#7048e8', key: 'Tinh Thể Bảng Tính',   outro: 'Em đã tìm được đường ra khỏi mê cung ô vuông và lấy Tinh Thể Bảng Tính!' },
    { color: '#0b7285', key: 'Tinh Thể Danh Sách',   outro: 'Thực đơn của bác thợ bánh đã gọn gàng. Bác tặng em Tinh Thể Danh Sách!' },
    { color: '#c2255c', key: 'Tinh Thể Định Dạng',   outro: 'Núi Định Dạng rực rỡ sắc màu. Em lấy được Tinh Thể Định Dạng!' },
    { color: '#1c7ed6', key: 'Tinh Thể Hình Ảnh',    outro: 'Mặt hồ phản chiếu những bức ảnh đẹp. Em nhận Tinh Thể Hình Ảnh!' },
    { color: '#e67700', key: 'Tinh Thể Chú Thích',   outro: 'Hang Chú Thích sáng bừng! Mảnh Tinh Thể cuối cùng đã thuộc về em!' }
  ];
  STAGES.forEach(function (s, i) { var m = META[i % META.length]; s.color = m.color; s.keyName = m.key; s.outro = m.outro; s.short = s.lesson.split(' · ')[0]; });

  /* Chia 1000 điểm cho các câu */
  var base = Math.floor(TOTAL / Q.length), extra = TOTAL % Q.length;
  Q.forEach(function (q, i) { q.pts = base + (i < extra ? 1 : 0); });
  var COLORS = ['#2b6cff', '#e8590c', '#9c36b5', '#0b8f7a'];
  var PRAISE = ['Tuyệt vời!', 'Chính xác!', 'Giỏi quá!', 'Đúng rồi, em thật thông minh!', 'Hoan hô!'];
  var OOPS = ['Không sao, lần sau em sẽ nhớ nhé!', 'Chưa đúng rồi, hãy đọc đáp án để nhớ nhé.', 'Cố lên, Bit tin em sẽ làm được!'];

  var S = null;

  /* ---------- tiện ích ---------- */
  function $(id) { return document.getElementById(id); }
  function h(tag, props, kids) {
    var e = document.createElement(tag), k;
    if (props) for (k in props) {
      var v = props[k];
      if (v === false || v == null) continue;
      if (k === 'class') e.className = v;
      else if (k === 'text') e.textContent = v;
      else if (k.slice(0, 2) === 'on') e.addEventListener(k.slice(2), v);
      else e.setAttribute(k, v === true ? '' : v);
    }
    (kids || []).forEach(function (c) {
      if (c == null) return;
      e.appendChild(typeof c === 'string' ? document.createTextNode(c) : c);
    });
    return e;
  }
  function shuffle(a) { a = a.slice(); for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)), t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
  function range(n) { var r = [], i; for (i = 0; i < n; i++) r.push(i); return r; }
  function pick(a) { return a[Math.floor(Math.random() * a.length)]; }
  function stageQs(si) { return Q.filter(function (q) { return q.stage === si + 1; }); }
  function stage() { return STAGES[S.si]; }
  function getBest() { try { return parseInt(localStorage.getItem(BEST_KEY), 10) || 0; } catch (e) { return 0; } }
  function setBest(v) { try { if (v > getBest()) localStorage.setItem(BEST_KEY, String(v)); } catch (e) { /* bỏ qua */ } }
  function gemFor(r) { return r >= 0.9 ? ['💎', 'Tinh Thể sáng rực'] : r >= 0.6 ? ['🔷', 'Tinh Thể sáng'] : ['🔹', 'Tinh Thể còn mờ']; }

  /* ---------- lưu / khôi phục ---------- */
  function save() {
    try {
      var copy = {}, k;
      for (k in S) copy[k] = S[k];
      if (S.cur) { copy.cur = {}; for (k in S.cur) if (k !== 'q') copy.cur[k] = S.cur[k]; }
      localStorage.setItem(SAVE_KEY, JSON.stringify(copy));
    } catch (e) { /* bỏ qua */ }
  }
  function clearSave() { try { localStorage.removeItem(SAVE_KEY); } catch (e) { /* bỏ qua */ } }
  function load() {
    try {
      var d = JSON.parse(localStorage.getItem(SAVE_KEY));
      if (!d || !STAGES[d.si] || !d.earned || d.earned.length !== STAGES.length || !d.fr) return null;
      if (d.view === 'question') {
        var q = stageQs(d.si)[d.qi];
        if (!q || !d.cur) return null;
        d.cur.q = q;
      } else if (['stageIntro', 'stageClear', 'final'].indexOf(d.view) < 0) return null;
      return d;
    } catch (e) { return null; }
  }

  /* ---------- trạng thái ---------- */
  function reset() {
    S = { si: 0, qi: 0, view: 'stageIntro', score: 0, lost: 0, hints: MAXHINT, done: 0, correct: 0,
          earned: STAGES.map(function () { return 0; }), max: STAGES.map(function () { return 0; }),
          wrong: [], fr: {}, cur: null, say: '', mood: '🤖' };
    Q.forEach(function (q) { S.max[q.stage - 1] += q.pts; });
  }
  function say(t, mood) { S.say = t; S.mood = mood || '🤖'; renderStory(); }

  function prep(q) {
    var c = { q: q, checked: false, frac: 0, elim: {}, sel: [], ans: null, lock: null, pairs: null, pl: null, order: null, msg: '' };
    if (q.type === 'rows') { c.ans = q.rows.map(function () { return null; }); c.lock = q.rows.map(function () { return false; }); }
    if (q.type === 'match') { c.pairs = q.pairs.map(function () { return -1; }); c.lock = q.pairs.map(function () { return false; }); c.order = shuffle(range(q.pairs.length)); }
    return c;
  }

  /* ---------- chấm điểm ---------- */
  function isReady(c) {
    var q = c.q;
    if (q.type === 'choice' || q.type === 'hotspot') return c.sel.length === 1;
    if (q.type === 'multi') return c.sel.length === q.pick;
    if (q.type === 'rows') return c.ans.every(function (a) { return a !== null; });
    return c.pairs.every(function (p) { return p >= 0; });
  }
  function fraction(c) {
    var q = c.q;
    if (q.type === 'choice') return c.sel[0] === q.a ? 1 : 0;
    if (q.type === 'hotspot') return c.sel[0] === q.a ? 1 : 0;
    if (q.type === 'multi') {
      var ok = c.sel.filter(function (i) { return q.a.indexOf(i) >= 0; }).length, bad = c.sel.length - ok;
      return Math.max(0, ok - bad) / q.pick;
    }
    if (q.type === 'rows') return q.rows.filter(function (r, i) { return c.ans[i] === r[1]; }).length / q.rows.length;
    return c.pairs.filter(function (p, i) { return p === i; }).length / q.pairs.length;
  }
  function answerText(q) {
    if (q.type === 'choice') return q.opts[q.a];
    if (q.type === 'multi') return q.a.map(function (i) { return q.opts[i]; }).join('\n');
    if (q.type === 'hotspot') return q.answerText;
    if (q.type === 'rows') return q.rows.map(function (r, i) { return (i + 1) + '. ' + r[0] + ' → ' + q.choices[r[1]]; }).join('\n');
    return q.pairs.map(function (p) { return p[0] + ' ↔ ' + p[1]; }).join('\n');
  }

  /* ---------- gợi ý ---------- */
  function useHint() {
    var c = S.cur, q = c.q;
    if (c.checked) return;
    if (S.hints <= 0) { c.msg = 'Em đã dùng hết ' + MAXHINT + ' gợi ý rồi.'; return renderMain(); }
    var note = null, i;
    if (q.type === 'choice' || q.type === 'multi') {
      var wrongs = range(q.opts.length).filter(function (k) { return (q.type === 'multi' ? q.a.indexOf(k) < 0 : k !== q.a) && !c.elim[k]; });
      var keep = q.type === 'multi' ? 0 : 1;
      if (wrongs.length <= keep) note = 'Không còn đáp án sai nào để gạch nữa, em tự quyết định nhé!';
      else { i = pick(wrongs); c.elim[i] = true; c.sel = c.sel.filter(function (x) { return x !== i; }); }
    } else if (q.type === 'hotspot') {
      var w = q.regions.filter(function (r) { return r.id !== q.a && !c.elim[r.id]; });
      if (w.length <= 1) note = 'Chỉ còn vài vùng thôi, em tự quyết định nhé!';
      else { var r = pick(w); c.elim[r.id] = true; if (c.sel[0] === r.id) c.sel = []; }
    } else if (q.type === 'rows') {
      var cand = range(q.rows.length).filter(function (k) { return !c.lock[k]; });
      if (!cand.length) note = 'Các dòng đều đã được điền sẵn rồi!';
      else {
        var bad = cand.filter(function (k) { return c.ans[k] !== q.rows[k][1]; });
        i = pick(bad.length ? bad : cand);
        c.ans[i] = q.rows[i][1]; c.lock[i] = true;
      }
    } else if (q.type === 'match') {
      var cs = range(q.pairs.length).filter(function (k) { return !c.lock[k] && c.pairs[k] !== k; });
      if (!cs.length) note = 'Các cặp đều đã ghép đúng rồi!';
      else {
        i = pick(cs);
        var o = c.pairs.indexOf(i); if (o >= 0 && o !== i) c.pairs[o] = -1;
        c.pairs[i] = i; c.lock[i] = true; c.pl = null;
      }
    }
    if (note) { c.msg = note; return renderMain(); }
    S.hints--; c.msg = ''; c.clueShown = true;
    say('Bit thì thầm: “Mình đã giúp em một chút rồi đấy! Còn ' + S.hints + ' gợi ý.”', '💡');
    renderSide(); renderMain();
  }

  /* ---------- kiểm tra / tiếp ---------- */
  function check() {
    var c = S.cur, q = c.q;
    if (c.checked || !isReady(c)) return;
    c.checked = true;
    c.frac = fraction(c);
    var earned = Math.round(q.pts * c.frac);
    c.earned = earned; S.fr[Q.indexOf(q)] = c.frac;
    S.score += earned; S.lost += q.pts - earned; S.done++;
    S.earned[q.stage - 1] += earned;
    if (c.frac === 1) { S.correct++; say(pick(PRAISE), '😀'); }
    else { S.wrong.push({ si: S.si, qn: Q.indexOf(q) }); say(c.frac > 0 ? 'Gần đúng rồi, cố lên nhé!' : pick(OOPS), '🤔'); }
    renderSide(); renderMain();
  }
  function next() {
    if (S.qi + 1 < stageQs(S.si).length) { S.qi++; loadQuestion(); }
    else {
      S.view = 'stageClear';
      var r = S.earned[S.si] / S.max[S.si];
      say(stage().outro, r >= 0.9 ? '🥳' : '🙂');
      renderSide(); renderMain(); window.scrollTo(0, 0);
    }
  }
  function loadQuestion() {
    S.view = 'question';
    S.cur = prep(stageQs(S.si)[S.qi]);
    say(S.qi === 0 ? 'Chặng này bắt đầu rồi, em đọc kỹ nhé!' : 'Câu tiếp theo nào, em làm được mà!', '🤖');
    renderSide(); renderMain(); window.scrollTo(0, 0);
  }
  function nextStage() {
    if (S.si + 1 < STAGES.length) {
      S.si++; S.qi = 0; S.view = 'stageIntro'; S.cur = null;
      say('Chặng ' + stage().id + ': ' + stage().name + '. Chúng ta đi thôi!', '🤖');
    } else {
      S.view = 'final'; S.cur = null;
      var ok = S.score >= PASS; setBest(S.score);
      say(ok ? 'Em làm được rồi! Chìa Khóa Vàng đã lành lặn!' : 'Chỉ còn thiếu một chút nữa thôi. Chúng ta thử lại nhé!', ok ? '🥳' : '💪');
    }
    renderSide(); renderMain(); window.scrollTo(0, 0);
    if (S.view === 'final' && S.score >= PASS) confetti();
  }

  /* ---------- cột trái + thanh điểm ---------- */
  function renderStory() { if (!S) return; $('mascot').textContent = S.mood; $('bubble').textContent = S.say; }
  function renderSide() {
    var st = stage(), fin = S.view === 'final', root = document.documentElement.style;
    root.setProperty('--accent', st.color);
    root.setProperty('--accent-soft', 'color-mix(in srgb, ' + st.color + ' 12%, white)');
    $('place-icon').textContent = fin ? '🏰' : st.icon;
    $('place-lesson').textContent = fin ? 'Chặng cuối' : st.lesson;
    $('place-name').textContent = fin ? 'Tòa Tháp Văn Phòng' : st.name;
    renderStory();

    var map = $('map'); map.textContent = '';
    STAGES.forEach(function (s, i) {
      var done = fin || i < S.si || (i === S.si && S.view === 'stageClear');
      var cls = done ? 'done' : (i === S.si ? 'now' : 'lock');
      map.appendChild(h('li', { class: cls, style: '--c:' + s.color }, [
        h('span', { class: 'ico', text: s.icon }),
        h('span', null, [s.short + ' · ' + s.name, h('small', { text: s.lesson.split(' · ')[1] || '' })]),
        h('span', { class: 'st', text: done ? S.earned[i] + '/' + S.max[i] : '' })
      ]));
    });

    $('score').textContent = S.score;
    $('meter-fill').style.width = Math.min(100, S.score / TOTAL * 100) + '%';
    var room = TOTAL - S.lost - PASS;
    $('score-note').textContent = room >= 0
      ? 'Đã làm ' + S.done + '/' + Q.length + ' câu · còn được mất tối đa ' + room + ' điểm để đạt ' + PASS + '.'
      : 'Đã làm ' + S.done + '/' + Q.length + ' câu · điểm tối đa còn lại ' + (TOTAL - S.lost) + ', nhưng cứ luyện tập tiếp nhé!';

    var bulbs = $('bulbs'); bulbs.textContent = '';
    for (var i = 0; i < MAXHINT; i++) bulbs.appendChild(h('span', { class: i < S.hints ? '' : 'off', text: '💡' }));

    var keys = $('keys'); keys.textContent = '';
    STAGES.forEach(function (s, j) {
      var got = fin || j < S.si || (j === S.si && S.view === 'stageClear');
      var cls = !got ? 'empty' : (S.earned[j] / S.max[j] >= 0.9 ? 'gold' : 'silver');
      keys.appendChild(h('li', { class: cls, title: s.keyName }, [
        h('span', { class: 'ico', text: got ? gemFor(S.earned[j] / S.max[j])[0] : '💎' }),
        h('span', { text: s.keyName })
      ]));
    });
  }

  function renderMain() {
    var main = $('main'); main.textContent = '';
    if (S.view === 'stageIntro') main.appendChild(viewIntro());
    else if (S.view === 'question') main.appendChild(viewQuestion());
    else if (S.view === 'stageClear') main.appendChild(viewClear());
    else main.appendChild(viewFinal());
    save();
  }

  function viewIntro() {
    var st = stage(), n = stageQs(S.si).length;
    return h('section', { class: 'card hero' }, [
      h('div', { class: 'big-ico', 'aria-hidden': 'true', text: st.icon }),
      h('p', { class: 'chip', style: 'display:inline-block', text: st.lesson + ' · Chặng ' + st.id + '/' + STAGES.length }),
      h('h2', { text: st.name }),
      h('p', { class: 'story', text: st.story }),
      h('p', { class: 'story', text: 'Nhiệm vụ: ' + st.goal }),
      h('div', { class: 'facts' }, [
        h('span', { class: 'chip', text: n + ' câu hỏi' }),
        h('span', { class: 'chip', text: 'Phần thưởng: 💎 ' + st.keyName })
      ]),
      h('button', { class: 'btn btn-big', type: 'button', text: 'Vào chặng ➜', onclick: loadQuestion })
    ]);
  }

  /* ---------- câu hỏi ---------- */
  function viewQuestion() {
    var c = S.cur, q = c.q, st = stage(), qs = stageQs(S.si);
    var dots = h('div', { class: 'dots', 'aria-hidden': 'true' });
    qs.forEach(function (x, i) {
      var fr = S.fr[Q.indexOf(x)], cls = fr != null ? (fr === 1 ? 'ok' : 'bad') : (i === S.qi ? 'now' : '');
      dots.appendChild(h('span', { class: 'dot ' + cls }));
    });
    var note = q.type === 'multi' ? 'Chọn đúng ' + q.pick + ' đáp án.' : q.type === 'match' ? 'Ghép mỗi định nghĩa với thuật ngữ tương ứng.'
      : q.type === 'rows' ? 'Chọn đáp án cho từng dòng.' : q.type === 'hotspot' ? 'Nhấp vào hình để chọn.' : '';

    var card = h('section', { class: 'card' }, [
      h('div', { class: 'chips' }, [
        h('span', { class: 'chip', text: st.short }),
        h('span', { class: 'chip', text: 'Câu ' + (S.qi + 1) + '/' + qs.length }),
        h('span', { class: 'chip', text: q.pts + ' điểm' }),
        dots
      ]),
      h('p', { class: 'q-text', text: q.q })
    ]);
    if (note) card.appendChild(h('p', { class: 'q-hint', text: note }));
    if (c.clueShown) card.appendChild(h('div', { class: 'clue show', role: 'status', text: '💡 ' + q.clue }));
    card.appendChild(h('div', { id: 'body' }));
    var actions = h('div', { class: 'actions', id: 'acts' });
    card.appendChild(actions);
    drawBodyInto(card.querySelector('#body'), c);
    drawActionsInto(actions, c, qs);
    if (c.checked) card.insertBefore(feedback(c), actions);
    return card;
  }

  function feedback(c) {
    var q = c.q, f = c.frac;
    var title = f === 1 ? '✅ Chính xác! +' + c.earned + ' điểm'
      : f > 0 ? '🟡 Gần đúng rồi! +' + c.earned + '/' + q.pts + ' điểm' : '❌ Chưa đúng. +0 điểm';
    var kids = [h('strong', { text: title })];
    if (f < 1) {
      kids.push(h('span', { text: 'Đáp án đúng đã được tô màu xanh ở trên.' }));
      kids.push(h('span', { class: 'ans', style: 'white-space:pre-line;font-weight:700', text: answerText(q) }));
    }
    kids.push(h('span', { text: '📌 ' + q.clue }));
    return h('div', { class: 'feedback ' + (f === 1 ? 'ok' : f > 0 ? 'part' : 'bad'), role: 'status' }, kids);
  }

  function drawActionsInto(actions, c, qs) {
    if (!c.checked) {
      actions.appendChild(h('button', { class: 'btn btn-hint', type: 'button', text: '💡 Gợi ý (' + S.hints + ')', disabled: S.hints <= 0, onclick: useHint }));
      actions.appendChild(h('span', { class: 'msg', text: c.msg || '' }));
      actions.appendChild(h('span', { class: 'spacer' }));
      actions.appendChild(h('button', { class: 'btn', type: 'button', text: 'Kiểm tra ✔', disabled: !isReady(c), onclick: check }));
    } else {
      actions.appendChild(h('span', { class: 'spacer' }));
      var last = S.qi + 1 >= qs.length;
      actions.appendChild(h('button', { class: 'btn', type: 'button', text: last ? 'Lấy mảnh Tinh Thể ➜' : 'Câu tiếp theo ➜', onclick: next }));
    }
  }

  function drawBodyInto(body, c) {
    var q = c.q, done = c.checked;
    function redraw() { renderMain(); }
    if (q.type === 'choice' || q.type === 'multi') {
      var wrap = h('div', { class: 'opts grid2' });
      q.opts.forEach(function (o, i) {
        var isA = q.type === 'multi' ? q.a.indexOf(i) >= 0 : q.a === i, chosen = c.sel.indexOf(i) >= 0, cls = 'opt';
        if (c.elim[i]) cls += ' elim';
        if (!done && chosen) cls += ' sel';
        if (done && isA) cls += ' right'; else if (done && chosen) cls += ' wrong';
        wrap.appendChild(h('button', { type: 'button', class: cls, disabled: done || !!c.elim[i], onclick: function () {
          var p = c.sel.indexOf(i); c.msg = '';
          if (q.type === 'choice') c.sel = [i];
          else if (p >= 0) c.sel.splice(p, 1);
          else if (c.sel.length < q.pick) c.sel.push(i);
          else c.msg = 'Chỉ được chọn ' + q.pick + ' đáp án. Bỏ một lựa chọn trước nhé!';
          redraw();
        } }, [h('span', { class: 'tag', text: 'ABCD'.charAt(i) }), h('span', { text: o })]));
      });
      body.appendChild(wrap);
    } else if (q.type === 'hotspot') {
      var hw = h('div', { class: 'hs-wrap' + (q.wide ? ' wide' : ''), style: 'aspect-ratio:' + q.ratio }, [h('img', { src: q.img, alt: q.alt, draggable: 'false' })]);
      q.regions.forEach(function (r, ri) {
        var cls = 'hs', chosen = c.sel[0] === r.id;
        if (c.elim[r.id]) cls += ' elim';
        if (!done && chosen) cls += ' sel';
        if (done && r.id === q.a) cls += ' right'; else if (done && chosen) cls += ' wrong';
        hw.appendChild(h('button', { type: 'button', class: cls, style: 'left:' + r.x + '%;top:' + r.y + '%;width:' + r.w + '%;height:' + r.h + '%',
          'aria-label': r.label ? 'Vùng ' + r.label : 'Vùng chọn ' + (ri + 1), disabled: done || !!c.elim[r.id],
          onclick: function () { c.sel = [r.id]; c.msg = ''; redraw(); } }, [r.label ? h('span', { class: 'lb', text: r.label }) : null]));
      });
      body.appendChild(hw);
      body.appendChild(h('p', { class: 'hs-tip', text: 'Nhấp trực tiếp vào hình để chọn đáp án.' }));
    } else if (q.type === 'rows') {
      var rows = h('div', { class: 'rows' });
      q.rows.forEach(function (r, i) {
        var rc = 'row' + (c.lock[i] && !done ? ' hinted' : '');
        if (done) rc += c.ans[i] === r[1] ? ' ok' : ' no';
        var ch = h('div', { class: 'ch' });
        q.choices.forEach(function (name, j) {
          var cc = 'rchip';
          if (done) { if (j === r[1]) cc += ' right'; else if (c.ans[i] === j) cc += ' wrong'; }
          else if (c.lock[i] && c.ans[i] === j) cc += ' lock';
          else if (c.ans[i] === j) cc += ' sel';
          ch.appendChild(h('button', { type: 'button', class: cc, disabled: done || !!c.lock[i], text: name, onclick: function () { c.ans[i] = j; c.msg = ''; redraw(); } }));
        });
        rows.appendChild(h('div', { class: rc }, [h('div', { class: 't', text: (i + 1) + '. ' + r[0] }), ch]));
      });
      body.appendChild(rows);
    } else if (q.type === 'match') {
      var left = h('div', { class: 'mcol' }, [h('h3', { text: 'Định nghĩa' })]), right = h('div', { class: 'mcol' }, [h('h3', { text: 'Thuật ngữ' })]);
      q.pairs.forEach(function (p, i) {
        var j = c.pairs[i], cls = 'mi', attrs = { type: 'button' };
        if (j >= 0) { attrs['data-c'] = '1'; attrs.style = '--c:' + COLORS[i % 4]; }
        if (c.pl === i) cls += ' pick';
        if (c.lock[i]) cls += ' lock';
        if (done) cls += j === i ? ' right' : ' wrong';
        attrs.class = cls; attrs.disabled = done || !!c.lock[i];
        attrs.onclick = function () { if (c.pairs[i] >= 0) { c.pairs[i] = -1; c.pl = null; } else c.pl = c.pl === i ? null : i; redraw(); };
        left.appendChild(h('button', attrs, [j >= 0 ? h('span', { class: 'mdot', style: '--c:' + COLORS[i % 4], text: String(i + 1) }) : null, p[0]]));
      });
      c.order.forEach(function (j) {
        var owner = c.pairs.indexOf(j), cls = 'mi', attrs = { type: 'button' };
        if (owner >= 0) { attrs['data-c'] = '1'; attrs.style = '--c:' + COLORS[owner % 4]; }
        if (owner >= 0 && c.lock[owner]) cls += ' lock';
        if (done) cls += owner === j ? ' right' : ' wrong';
        attrs.class = cls; attrs.disabled = done || (owner >= 0 && !!c.lock[owner]);
        attrs.onclick = function () {
          if (c.pl !== null) { if (owner >= 0) c.pairs[owner] = -1; c.pairs[c.pl] = j; c.pl = null; }
          else if (owner >= 0) c.pairs[owner] = -1;
          redraw();
        };
        right.appendChild(h('button', attrs, [owner >= 0 ? h('span', { class: 'mdot', style: '--c:' + COLORS[owner % 4], text: String(owner + 1) }) : null, q.pairs[j][1]]));
      });
      body.appendChild(h('div', { class: 'match' }, [left, right]));
      body.appendChild(h('p', { class: 'mnote', text: done ? '' : c.pl !== null ? 'Bây giờ hãy chọn thuật ngữ ở cột bên phải.' : 'Chọn một định nghĩa, rồi chọn thuật ngữ tương ứng. Nhấp vào một cặp đã ghép để bỏ ghép.' }));
    }
  }

  /* ---------- hoàn thành chặng ---------- */
  function viewClear() {
    var st = stage(), e = S.earned[S.si], m = S.max[S.si], r = e / m, g = gemFor(r), last = S.si + 1 >= STAGES.length;
    return h('section', { class: 'card hero' }, [
      h('div', { class: 'key-reveal', 'aria-hidden': 'true', text: g[0] }),
      h('h2', { text: 'Em đã lấy lại ' + st.keyName + '!' }),
      h('p', { class: 'story', text: st.outro }),
      h('div', { class: 'facts' }, [
        h('span', { class: 'chip', text: e + '/' + m + ' điểm chặng này' }),
        h('span', { class: 'chip', text: r >= 0.9 ? '🌟 ' + g[1] : '🥈 ' + g[1] + ' – cần ôn thêm' })
      ]),
      h('button', { class: 'btn btn-big', type: 'button', text: last ? 'Ghép Chìa Khóa Vàng 🗝️' : 'Đi tiếp đến chặng ' + (S.si + 2) + ' ➜', onclick: nextStage })
    ]);
  }

  /* ---------- kết quả ---------- */
  function viewFinal() {
    var pass = S.score >= PASS;
    var body = h('tbody');
    STAGES.forEach(function (s, i) {
      var r = S.earned[i] / S.max[i];
      body.appendChild(h('tr', null, [h('td', { text: s.short + ' · ' + s.name }), h('td', { text: S.earned[i] + '/' + S.max[i] }), h('td', { text: gemFor(r)[0] + (r < 0.9 ? ' Nên ôn lại' : ' Tốt') })]));
    });
    var table = h('table', { class: 'table' }, [h('thead', null, [h('tr', null, [h('th', { text: 'Chặng' }), h('th', { text: 'Điểm' }), h('th', { text: 'Nhận xét' })])]), body]);
    var card = h('section', { class: 'card hero' }, [
      h('div', { class: 'big-ico', 'aria-hidden': 'true', text: pass ? '🏆' : '🧩' }),
      h('h2', { text: pass ? 'Chìa Khóa Vàng đã mở cửa Tòa Tháp!' : 'Chìa Khóa Vàng chưa lành hẳn' }),
      h('div', { class: 'final-score' }, [String(S.score), h('small', { text: ' / ' + TOTAL })]),
      h('p', { class: 'verdict ' + (pass ? 'pass' : 'fail'), text: pass ? 'ĐẠT – em đã vượt mốc ' + PASS + ' điểm!' : 'CHƯA ĐẠT – cần ít nhất ' + PASS + ' điểm. Em còn thiếu ' + (PASS - S.score) + ' điểm.' }),
      h('p', { text: 'Gợi ý đã dùng: ' + (MAXHINT - S.hints) + '/' + MAXHINT + ' · Đúng hoàn toàn ' + S.correct + '/' + Q.length + ' câu · Điểm cao nhất: ' + getBest() }),
      table
    ]);
    if (S.wrong.length) {
      var rev = h('div', { class: 'review' }, [h('h3', { text: 'Các câu cần ôn lại (' + S.wrong.length + ')' })]);
      S.wrong.forEach(function (w) {
        var q = Q[w.qn];
        rev.appendChild(h('div', { class: 'review-item' }, [
          h('div', { class: 'rq', text: STAGES[w.si].short + ' – ' + q.q }),
          h('div', { class: 'ra', text: '✔ ' + answerText(q) }),
          h('div', { class: 'rt', text: '📌 ' + q.clue })
        ]));
      });
      card.appendChild(rev);
    }
    card.appendChild(h('div', { class: 'actions', style: 'justify-content:center' }, [
      h('button', { class: 'btn btn-big', type: 'button', text: pass ? 'Chơi lại 🔄' : 'Thử lại 💪', onclick: startGame })
    ]));
    return card;
  }

  function confetti() {
    var box = $('confetti'), em = ['🎉', '⭐', '🗝️', '💎', '✨', '🎈'];
    box.textContent = '';
    for (var i = 0; i < 40; i++) {
      var s = h('span', { text: em[i % em.length] });
      s.style.left = Math.random() * 100 + '%';
      s.style.animationDuration = (2.5 + Math.random() * 3) + 's';
      s.style.animationDelay = Math.random() * 1.5 + 's';
      box.appendChild(s);
    }
    setTimeout(function () { box.textContent = ''; }, 8000);
  }

  /* ---------- khởi động ---------- */
  function startGame() {
    reset();
    $('start').hidden = true; $('game').hidden = false; $('confetti').textContent = '';
    var st = stage(); say('Chặng ' + st.id + ': ' + st.name + '. Chúng ta đi thôi!', '🤖');
    renderSide(); renderMain(); window.scrollTo(0, 0);
  }
  function resume(d) { S = d; $('start').hidden = true; $('game').hidden = false; renderSide(); renderMain(); }

  function init() {
    [].forEach.call(document.querySelectorAll('.n-stages'), function (e) { e.textContent = STAGES.length; });
    $('n-questions').textContent = Q.length;
    $('btn-restart').addEventListener('click', function () {
      if (window.confirm('Chơi lại từ đầu? Tiến độ hiện tại sẽ bị xóa.')) { clearSave(); startGame(); }
    });
    var saved = load();
    if (saved) { resume(saved); return; }
    var map = $('start-map');
    STAGES.forEach(function (s) {
      map.appendChild(h('li', { style: '--c:' + s.color }, [h('span', { class: 'ico', text: s.icon }), h('span', null, [s.short + ' · ' + s.name, h('small', { text: s.lesson.split(' · ')[1] || '' })])]));
    });
    var best = getBest();
    if (best) { $('best').hidden = false; $('best').textContent = '🏅 Điểm cao nhất của em: ' + best + '/' + TOTAL; }
    $('btn-start').addEventListener('click', startGame);
  }
  init();
})();

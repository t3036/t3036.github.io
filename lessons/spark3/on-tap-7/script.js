/* Ôn tập Spark 3 – Hiệp sĩ Mạng: logic trò chơi */
(function () {
  'use strict';

  var STAGES = window.STAGES;
  var PASS = 900, MAX_HINTS = 3;
  var TOTAL = STAGES.reduce(function (a, s) { return a + s.questions.length; }, 0);
  var PER = 1000 / TOTAL;
  var NEED = 0;
  while (Math.round(NEED * PER) < PASS) NEED++;
  var BEST_KEY = 'spark3-on-tap-7-best';
  var SAVE_KEY = 'spark3-on-tap-7-save-v1';

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
  function shuffle(a) {
    a = a.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1)), t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }
  function range(n) { var r = [], i; for (i = 0; i < n; i++) r.push(i); return r; }
  function score() { return Math.round(S.correct * PER); }
  function getBest() { try { return parseInt(localStorage.getItem(BEST_KEY), 10) || 0; } catch (e) { return 0; } }
  function setBest(v) { try { if (v > getBest()) localStorage.setItem(BEST_KEY, String(v)); } catch (e) { /* bỏ qua */ } }

  /* ---------- lưu / khôi phục tiến độ ---------- */
  function save() {
    try {
      var copy = {}, k;
      for (k in S) copy[k] = S[k];
      if (S.cur) {
        copy.cur = {};
        for (k in S.cur) if (k !== 'q') copy.cur[k] = S.cur[k];
      }
      localStorage.setItem(SAVE_KEY, JSON.stringify(copy));
    } catch (e) { /* bỏ qua */ }
  }
  function clearSave() { try { localStorage.removeItem(SAVE_KEY); } catch (e) { /* bỏ qua */ } }
  function load() {
    try {
      var d = JSON.parse(localStorage.getItem(SAVE_KEY));
      if (!d || typeof d.stage !== 'number' || !STAGES[d.stage]) return null;
      if (!d.res || d.res.length !== STAGES.length) return null;
      var st = STAGES[d.stage];
      if (d.view === 'question') {
        if (!st.questions[d.qi] || !d.cur) return null;
        d.cur.q = st.questions[d.qi];
      } else if (['stageIntro', 'stageClear', 'final'].indexOf(d.view) < 0) return null;
      return d;
    } catch (e) { return null; }
  }

  /* ---------- trạng thái ---------- */
  function reset() {
    S = {
      stage: 0, qi: 0, view: 'stageIntro',
      hints: MAX_HINTS, correct: 0, wrong: 0,
      res: STAGES.map(function () { return []; }),
      cur: null, say: '', mood: '🦉'
    };
  }

  function prep(q) {
    var c = { q: q, checked: false, ok: null, locked: {}, msg: '' };
    if (q.type === 'mc' || q.type === 'multi') {
      c.order = shuffle(range(q.options.length));
      c.sel = [];
      c.elim = {};
    } else if (q.type === 'tf') {
      c.sel = q.items.map(function () { return null; });
    } else if (q.type === 'order') {
      do { c.pool = shuffle(range(q.steps.length)); }
      while (c.pool.every(function (v, i) { return v === i; }));
      c.ans = [];
      c.lock = 0;
    }
    return c;
  }

  function stage() { return STAGES[S.stage]; }
  function question() { return stage().questions[S.qi]; }

  function say(text, mood) { S.say = text; S.mood = mood || '🦉'; renderStory(); }

  /* ---------- chấm điểm ---------- */
  function isReady(c) {
    var q = c.q;
    if (q.type === 'mc') return c.sel.length === 1;
    if (q.type === 'multi') return c.sel.length === q.pick;
    if (q.type === 'tf') return c.sel.every(function (v) { return v !== null; });
    return c.ans.length === q.steps.length;
  }
  function isCorrect(c) {
    var q = c.q;
    if (q.type === 'mc') return c.sel[0] === q.answer;
    if (q.type === 'multi') {
      return c.sel.length === q.answers.length && q.answers.every(function (a) { return c.sel.indexOf(a) > -1; });
    }
    if (q.type === 'tf') return q.items.every(function (it, i) { return c.sel[i] === it.a; });
    return c.ans.every(function (v, i) { return v === i; });
  }

  /* ---------- gợi ý ---------- */
  function useHint() {
    var c = S.cur, q = c.q;
    if (c.checked) return;
    if (S.hints <= 0) { c.msg = 'Em đã dùng hết 3 gợi ý rồi.'; return renderMain(); }
    var used = false;

    if (q.type === 'mc') {
      var wrongs = range(q.options.length).filter(function (i) { return i !== q.answer && !c.elim[i]; });
      if (wrongs.length < 2) { c.msg = 'Chỉ còn hai lựa chọn rồi, em tự quyết định nhé!'; return renderMain(); }
      var pick = wrongs[Math.floor(Math.random() * wrongs.length)];
      c.elim[pick] = true;
      c.sel = c.sel.filter(function (i) { return i !== pick; });
      used = true;
      say('Cú Bít thì thầm: “Mình đã gạch bớt một đáp án sai giúp em đấy!”', '💡');
    } else if (q.type === 'multi') {
      var left = q.answers.filter(function (i) { return c.sel.indexOf(i) < 0; });
      if (!left.length) { c.msg = 'Em đã chọn đúng hết rồi!'; return renderMain(); }
      if (c.sel.length >= q.pick) {
        var drop = c.sel.filter(function (i) { return q.answers.indexOf(i) < 0 && !c.locked[i]; })[0];
        if (drop == null) { c.msg = 'Em đã chọn đúng hết rồi!'; return renderMain(); }
        c.sel = c.sel.filter(function (i) { return i !== drop; });
      }
      c.sel.push(left[0]);
      c.locked[left[0]] = true;
      used = true;
      say('Cú Bít chỉ vào một đáp án đúng và khoanh vàng cho em!', '💡');
    } else if (q.type === 'tf') {
      var idx = -1;
      q.items.forEach(function (it, i) { if (idx < 0 && !c.locked[i] && c.sel[i] !== it.a) idx = i; });
      if (idx < 0) { c.msg = 'Những ý còn lại em đang chọn đúng rồi!'; return renderMain(); }
      c.sel[idx] = q.items[idx].a;
      c.locked[idx] = true;
      used = true;
      say('Cú Bít điền giúp em một ý và khóa lại rồi nhé!', '💡');
    } else if (q.type === 'order') {
      var k = c.lock;
      if (k >= q.steps.length) { c.msg = 'Đã xếp đúng hết rồi!'; return renderMain(); }
      var rest = c.ans.filter(function (i) { return i > k; });
      c.ans = range(k + 1).concat(rest);
      c.pool = range(q.steps.length).filter(function (i) { return c.ans.indexOf(i) < 0; });
      c.lock = k + 1;
      used = true;
      say('Cú Bít đặt giúp em bước tiếp theo vào đúng vị trí!', '💡');
    }

    if (used) { S.hints--; c.msg = ''; renderSide(); renderMain(); }
  }

  /* ---------- kiểm tra ---------- */
  function check() {
    var c = S.cur;
    if (c.checked || !isReady(c)) return;
    c.checked = true;
    c.ok = isCorrect(c);
    S.res[S.stage][S.qi] = { ok: c.ok };
    if (c.ok) {
      S.correct++;
      say(pickOne(['Chính xác! Em giỏi quá!', 'Tuyệt vời, Hiệp sĩ Mạng!', 'Đúng rồi! Bóng Đen Mạng lùi lại một bước!']), '😀');
    } else {
      S.wrong++;
      say(pickOne(['Chưa đúng rồi, nhưng đừng nản! Hãy đọc lời nhắc nhé.', 'Ôi, Bóng Đen Mạng cười kìa! Mình học lại điều này nhé.']), '🤔');
    }
    renderSide();
    renderMain();
  }
  function pickOne(a) { return a[Math.floor(Math.random() * a.length)]; }

  function next() {
    var st = stage();
    if (S.qi + 1 < st.questions.length) {
      S.qi++;
      loadQuestion();
    } else {
      S.view = 'stageClear';
      var r = stageStats(S.stage);
      say(st.outro, r.ok / r.n >= 0.9 ? '🥳' : '🙂');
      renderSide();
      renderMain();
      window.scrollTo(0, 0);
    }
  }
  function loadQuestion() {
    S.view = 'question';
    S.cur = prep(question());
    var st = stage(), sc = st.scenes;
    say(sc[Math.min(sc.length - 1, Math.floor(S.qi * sc.length / st.questions.length))], '🦉');
    renderSide();
    renderMain();
    window.scrollTo(0, 0);
  }
  function stageStats(i) {
    var arr = S.res[i], ok = arr.filter(function (r) { return r && r.ok; }).length;
    return { ok: ok, n: STAGES[i].questions.length };
  }
  function nextStage() {
    if (S.stage + 1 < STAGES.length) {
      S.stage++; S.qi = 0; S.view = 'stageIntro';
      say(stage().intro, '🦉');
      renderSide(); renderMain();
      window.scrollTo(0, 0);
    } else {
      S.view = 'final';
      var pass = score() >= PASS;
      setBest(score());
      say(pass ? 'Cổng Tháp Bảo Vệ đã mở! Em đã cứu cả Thị trấn Mạng Xanh!' : 'Cổng Tháp vẫn đóng. Em cần đạt ít nhất 900 điểm. Ôn lại rồi thử lần nữa nhé!', pass ? '🥳' : '💪');
      renderSide(); renderMain();
      window.scrollTo(0, 0);
      if (pass) confetti();
    }
  }

  /* ---------- hiển thị: cột trái ---------- */
  function applyTheme() {
    var st = stage(), root = document.documentElement.style;
    root.setProperty('--accent', st.color);
    root.setProperty('--accent-soft', 'color-mix(in srgb, ' + st.color + ' 12%, white)');
  }
  function renderStory() {
    if (!S) return;
    $('mascot').textContent = S.mood;
    $('bubble').textContent = S.say;
  }
  function renderSide() {
    var st = stage();
    applyTheme();
    var fin = S.view === 'final';
    $('place-icon').textContent = fin ? '🏰' : st.icon;
    $('place-lesson').textContent = fin ? 'Chặng cuối' : st.lesson;
    $('place-name').textContent = fin ? 'Tháp Bảo Vệ' : st.place;
    renderStory();

    var map = $('map'); map.textContent = '';
    STAGES.forEach(function (s, i) {
      var done = i < S.stage || (i === S.stage && (S.view === 'stageClear' || fin)) || fin;
      var cls = done ? 'done' : (i === S.stage ? 'now' : 'lock');
      var r = stageStats(i);
      map.appendChild(h('li', { class: cls, style: '--c:' + s.color }, [
        h('span', { class: 'ico', text: s.icon }),
        h('span', null, [s.lesson + ' · ' + s.place, h('small', { text: s.title })]),
        h('span', { class: 'st', text: done ? r.ok + '/' + r.n : '' })
      ]));
    });

    var sc = score();
    $('score').textContent = sc;
    $('meter-fill').style.width = Math.min(100, sc / 10) + '%';
    var answered = S.correct + S.wrong;
    $('score-note').textContent = 'Đúng ' + S.correct + '/' + answered + ' câu · cần ít nhất ' + NEED + '/' + TOTAL + ' câu đúng.';

    var bulbs = $('bulbs'); bulbs.textContent = '';
    for (var i = 0; i < MAX_HINTS; i++) bulbs.appendChild(h('span', { class: i < S.hints ? '' : 'off', text: '💡' }));

    var keys = $('keys'); keys.textContent = '';
    STAGES.forEach(function (s, j) {
      var got = j < S.stage || (j === S.stage && (S.view === 'stageClear' || fin)) || fin;
      var r = stageStats(j);
      var cls = !got ? 'empty' : (r.ok / r.n >= 0.9 ? 'gold' : 'silver');
      keys.appendChild(h('li', { class: cls }, [
        h('span', { class: 'ico', text: s.key.icon }),
        h('span', { text: s.key.name })
      ]));
    });
  }

  /* ---------- hiển thị: khu vực chính ---------- */
  function renderMain() {
    var main = $('main'); main.textContent = '';
    if (S.view === 'stageIntro') main.appendChild(viewIntro());
    else if (S.view === 'question') main.appendChild(viewQuestion());
    else if (S.view === 'stageClear') main.appendChild(viewClear());
    else main.appendChild(viewFinal());
    save();
  }

  function viewIntro() {
    var st = stage();
    return h('section', { class: 'card hero' }, [
      h('div', { class: 'big-ico', 'aria-hidden': 'true', text: st.icon }),
      h('p', { class: 'chip', style: 'display:inline-block', text: st.lesson + ' · Khu vực ' + (S.stage + 1) + '/' + STAGES.length }),
      h('h2', { text: st.place }),
      h('p', { text: st.title, style: 'font-weight:700;color:var(--muted)' }),
      h('p', { class: 'story', text: st.intro }),
      h('div', { class: 'facts' }, [
        h('span', { class: 'chip', text: st.questions.length + ' câu hỏi' }),
        h('span', { class: 'chip', text: 'Phần thưởng: ' + st.key.icon + ' ' + st.key.name })
      ]),
      h('button', { class: 'btn btn-big', type: 'button', text: 'Vào khu vực ➜', onclick: loadQuestion })
    ]);
  }

  function viewQuestion() {
    var c = S.cur, q = c.q, st = stage();
    var dots = h('div', { class: 'dots', 'aria-hidden': 'true' });
    st.questions.forEach(function (_, i) {
      var r = S.res[S.stage][i];
      dots.appendChild(h('span', { class: 'dot ' + (r ? (r.ok ? 'ok' : 'bad') : (i === S.qi ? 'now' : '')) }));
    });

    var card = h('section', { class: 'card' }, [
      h('div', { class: 'chips' }, [
        h('span', { class: 'chip', text: st.lesson }),
        h('span', { class: 'chip', text: 'Câu ' + (S.qi + 1) + '/' + st.questions.length }),
        dots
      ]),
      h('p', { class: 'q-text', text: q.q })
    ]);

    if (q.type === 'multi') card.appendChild(h('p', { class: 'q-hint', text: 'Chọn đúng ' + q.pick + ' đáp án.' }));
    if (q.type === 'order') card.appendChild(h('p', { class: 'q-hint', text: 'Bấm vào một bước để chuyển sang phần trả lời, dùng ▲ ▼ để đổi thứ tự.' }));

    card.appendChild(q.type === 'tf' ? bodyTF(c) : q.type === 'order' ? bodyOrder(c) : bodyChoice(c));

    var actions = h('div', { class: 'actions' });
    if (!c.checked) {
      actions.appendChild(h('button', {
        class: 'btn btn-hint', type: 'button', text: '💡 Gợi ý (' + S.hints + ')',
        disabled: S.hints <= 0, onclick: useHint
      }));
      actions.appendChild(h('span', { class: 'msg', text: c.msg || '' }));
      actions.appendChild(h('span', { class: 'spacer' }));
      actions.appendChild(h('button', { class: 'btn', type: 'button', text: 'Kiểm tra ✔', disabled: !isReady(c), onclick: check }));
    } else {
      actions.appendChild(h('span', { class: 'spacer' }));
      var last = S.qi + 1 >= st.questions.length;
      actions.appendChild(h('button', { class: 'btn', type: 'button', text: last ? 'Hoàn thành khu vực ➜' : 'Câu tiếp theo ➜', onclick: next }));
    }

    if (c.checked) {
      card.appendChild(h('div', { class: 'feedback ' + (c.ok ? 'ok' : 'bad'), role: 'status' }, [
        h('strong', { text: c.ok ? '✅ Chính xác! +' + PER.toFixed(2).replace('.', ',') + ' điểm' : '❌ Chưa đúng. Em xem đáp án đúng bên trên nhé.' }),
        h('span', { text: '📌 ' + q.tip })
      ]));
    }
    card.appendChild(actions);
    return card;
  }

  /* mc + multi */
  function bodyChoice(c) {
    var q = c.q, wrap = h('div', { class: 'opts' });
    c.order.forEach(function (oi, pos) {
      var cls = 'opt', selected = c.sel.indexOf(oi) > -1;
      if (selected) cls += ' sel';
      if (c.elim && c.elim[oi]) cls += ' gone';
      if (c.locked[oi]) cls += ' glow';
      var isRight = q.type === 'mc' ? oi === q.answer : q.answers.indexOf(oi) > -1;
      if (c.checked) {
        cls = 'opt' + (isRight ? ' right' : (selected ? ' wrong' : ''));
      }
      wrap.appendChild(h('button', {
        class: cls, type: 'button',
        disabled: c.checked || (c.elim && c.elim[oi]) || (c.locked[oi]) || false,
        onclick: function () { pickOption(c, oi); }
      }, [
        h('span', { class: 'tag', text: String.fromCharCode(65 + pos) }),
        h('span', { text: q.options[oi] })
      ]));
    });
    return wrap;
  }
  function pickOption(c, oi) {
    var q = c.q, i = c.sel.indexOf(oi);
    c.msg = '';
    if (q.type === 'mc') c.sel = [oi];
    else if (i > -1) c.sel.splice(i, 1);
    else if (c.sel.length < q.pick) c.sel.push(oi);
    else c.msg = 'Chỉ được chọn ' + q.pick + ' đáp án. Bỏ một lựa chọn trước nhé!';
    renderMain();
  }

  /* tf */
  function bodyTF(c) {
    var q = c.q, wrap = h('div', { class: 'tf' });
    q.items.forEach(function (it, i) {
      var cls = 'tf-row';
      if (c.checked) cls += c.sel[i] === it.a ? ' right' : ' wrong';
      else if (c.locked[i]) cls += ' glow';
      var row = h('div', { class: cls }, [h('span', { class: 'tf-text', text: it.t })]);
      var btns = h('div', { class: 'tf-btns', role: 'group', 'aria-label': it.t });
      [true, false].forEach(function (v) {
        btns.appendChild(h('button', {
          class: 'tf-btn' + (c.sel[i] === v ? ' sel' : ''), type: 'button',
          'aria-pressed': c.sel[i] === v ? 'true' : 'false',
          disabled: c.checked || !!c.locked[i],
          text: v ? q.labels[0] : q.labels[1],
          onclick: function () { c.sel[i] = v; c.msg = ''; renderMain(); }
        }));
      });
      row.appendChild(btns);
      if (c.checked && c.sel[i] !== it.a) {
        row.appendChild(h('div', { class: 'tf-fix', text: 'Đáp án đúng: ' + (it.a ? q.labels[0] : q.labels[1]) }));
      }
      wrap.appendChild(row);
    });
    return wrap;
  }

  /* order */
  function bodyOrder(c) {
    var q = c.q;
    var pool = h('div', { class: 'order-col order-pool' });
    if (!c.pool.length) pool.appendChild(h('p', { class: 'order-empty', text: 'Đã chuyển hết các bước.' }));
    c.pool.forEach(function (si) {
      pool.appendChild(h('div', { class: 'step' }, [
        h('button', {
          class: 'step-text', type: 'button', text: q.steps[si], disabled: c.checked,
          onclick: function () {
            c.pool = c.pool.filter(function (x) { return x !== si; });
            c.ans.push(si); c.msg = ''; renderMain();
          }
        })
      ]));
    });

    var ans = h('div', { class: 'order-col order-ans' });
    if (!c.ans.length) ans.appendChild(h('p', { class: 'order-empty', text: 'Chưa có bước nào. Hãy bấm chọn bước đầu tiên.' }));
    c.ans.forEach(function (si, pos) {
      var locked = pos < c.lock;
      var cls = 'step' + (c.checked ? (si === pos ? ' right' : ' wrong') : (locked ? ' locked' : ''));
      var row = h('div', { class: cls }, [
        h('span', { class: 'num', text: String(pos + 1) }),
        h('button', {
          class: 'step-text', type: 'button', text: q.steps[si] + (locked && !c.checked ? ' 🔒' : ''),
          disabled: c.checked || locked,
          onclick: function () {
            c.ans.splice(pos, 1); c.pool.push(si); c.msg = ''; renderMain();
          }
        })
      ]);
      if (!c.checked) {
        row.appendChild(h('button', { class: 'mini', type: 'button', text: '▲', 'aria-label': 'Đưa lên', disabled: pos <= c.lock, onclick: function () { swap(c, pos, pos - 1); } }));
        row.appendChild(h('button', { class: 'mini', type: 'button', text: '▼', 'aria-label': 'Đưa xuống', disabled: locked || pos >= c.ans.length - 1, onclick: function () { swap(c, pos, pos + 1); } }));
      }
      ans.appendChild(row);
    });

    var wrap = h('div', { class: 'order' }, [
      h('div', null, [h('h3', { text: 'Các bước' }), pool]),
      h('div', null, [h('h3', { text: 'Phần trả lời' }), ans])
    ]);
    if (c.checked && !c.ok) {
      wrap.appendChild(h('div', { class: 'feedback bad', style: 'grid-column:1/-1;margin-top:0' }, [
        h('strong', { text: 'Thứ tự đúng:' }),
        h('span', { style: 'white-space:pre-line', text: q.steps.map(function (s, i) { return (i + 1) + '. ' + s; }).join('\n') })
      ]));
    }
    return wrap;
  }
  function swap(c, a, b) {
    var t = c.ans[a]; c.ans[a] = c.ans[b]; c.ans[b] = t; renderMain();
  }

  /* ---------- hoàn thành khu vực ---------- */
  function viewClear() {
    var st = stage(), r = stageStats(S.stage), good = r.ok / r.n >= 0.9;
    var last = S.stage + 1 >= STAGES.length;
    return h('section', { class: 'card hero' }, [
      h('div', { class: 'key-reveal', 'aria-hidden': 'true', text: st.key.icon }),
      h('h2', { text: 'Em đã lấy lại ' + st.key.name + '!' }),
      h('p', { class: 'story', text: st.outro }),
      h('div', { class: 'facts' }, [
        h('span', { class: 'chip', text: 'Đúng ' + r.ok + '/' + r.n + ' câu' }),
        h('span', { class: 'chip', text: good ? '🌟 Chìa khóa vàng' : '🥈 Chìa khóa bạc – cần ôn thêm' })
      ]),
      h('button', { class: 'btn btn-big', type: 'button', text: last ? 'Đến Tháp Bảo Vệ 🏰' : 'Đi tiếp đến khu vực ' + (S.stage + 2) + ' ➜', onclick: nextStage })
    ]);
  }

  /* ---------- kết quả ---------- */
  function answerText(q) {
    if (q.type === 'mc') return q.options[q.answer];
    if (q.type === 'multi') return q.answers.map(function (i) { return q.options[i]; }).join('\n');
    if (q.type === 'tf') return q.items.map(function (it) { return (it.a ? q.labels[0] : q.labels[1]) + ' – ' + it.t; }).join('\n');
    return q.steps.map(function (s, i) { return (i + 1) + '. ' + s; }).join('\n');
  }
  function viewFinal() {
    var sc = score(), pass = sc >= PASS;
    var table = h('table', { class: 'table' }, [
      h('thead', null, [h('tr', null, [h('th', { text: 'Khu vực' }), h('th', { text: 'Chìa khóa' }), h('th', { text: 'Đúng' })])])
    ]);
    var body = h('tbody');
    STAGES.forEach(function (s, i) {
      var r = stageStats(i);
      body.appendChild(h('tr', null, [
        h('td', { text: s.lesson + ' · ' + s.place }),
        h('td', { text: s.key.icon + ' ' + s.key.name }),
        h('td', { text: r.ok + '/' + r.n })
      ]));
    });
    table.appendChild(body);

    var card = h('section', { class: 'card hero' }, [
      h('div', { class: 'big-ico', 'aria-hidden': 'true', text: pass ? '🏆' : '🔒' }),
      h('h2', { text: pass ? 'Chúc mừng Hiệp sĩ Mạng!' : 'Cổng Tháp chưa mở' }),
      h('div', { class: 'final-score' }, [String(sc), h('small', { text: ' / 1000' })]),
      h('p', { class: 'verdict ' + (pass ? 'pass' : 'fail'), text: pass ? 'ĐẠT – em đã vượt mốc ' + PASS + ' điểm!' : 'CHƯA ĐẠT – cần ít nhất ' + PASS + ' điểm. Em còn thiếu ' + (PASS - sc) + ' điểm.' }),
      h('p', { text: 'Gợi ý còn lại: ' + S.hints + '/' + MAX_HINTS + ' · Đúng ' + S.correct + '/' + TOTAL + ' câu.' }),
      table
    ]);

    var wrongs = [];
    STAGES.forEach(function (s, i) {
      s.questions.forEach(function (q, j) {
        var r = S.res[i][j];
        if (r && !r.ok) wrongs.push({ s: s, q: q });
      });
    });
    if (wrongs.length) {
      var rev = h('div', { class: 'review' }, [h('h3', { text: 'Các câu cần ôn lại (' + wrongs.length + ')' })]);
      wrongs.forEach(function (w) {
        rev.appendChild(h('div', { class: 'review-item' }, [
          h('div', { class: 'rq', text: w.s.lesson + ' – ' + w.q.q }),
          h('div', { class: 'ra', text: '✔ ' + answerText(w.q) }),
          h('div', { class: 'rt', text: '📌 ' + w.q.tip })
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
    var box = $('confetti'), em = ['🎉', '⭐', '🗝️', '🛡️', '✨', '🎈'];
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
    $('start').hidden = true;
    $('game').hidden = false;
    $('confetti').textContent = '';
    say(stage().intro, '🦉');
    renderSide();
    renderMain();
    window.scrollTo(0, 0);
  }

  function resume(d) {
    S = d;
    $('start').hidden = true;
    $('game').hidden = false;
    renderSide();
    renderMain();
  }

  function init() {
    $('btn-restart').addEventListener('click', function () {
      if (window.confirm('Chơi lại từ đầu? Tiến độ hiện tại sẽ bị xóa.')) { clearSave(); startGame(); }
    });
    var saved = load();
    if (saved) { resume(saved); return; }
    var map = $('start-map');
    STAGES.forEach(function (s) {
      map.appendChild(h('li', { style: '--c:' + s.color }, [
        h('span', { class: 'ico', text: s.icon }),
        h('span', null, [s.lesson + ' · ' + s.place, h('small', { text: s.title })])
      ]));
    });
    var best = getBest();
    if (best) { $('best').hidden = false; $('best').textContent = '🏅 Điểm cao nhất của em: ' + best + '/1000'; }
    $('btn-start').addEventListener('click', startGame);
  }
  init();
})();

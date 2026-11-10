/* Bài kiểm tra: xáo trộn câu hỏi, không có chặng, gợi ý hay đáp án đúng. */
(function () {
  'use strict';
  var PASS = 1000 * 0.9, KEY = 'spark3-on-tap-7-test-v1';
  var ALL = [];
  window.STAGES.forEach(function (s) { s.questions.forEach(function (q) { ALL.push(q); }); });
  var TOTAL = ALL.length, PER = 1000 / TOTAL;
  var S = null;

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
    (kids || []).forEach(function (c) { if (c != null) e.appendChild(typeof c === 'string' ? document.createTextNode(c) : c); });
    return e;
  }
  function range(n) { var r = [], i; for (i = 0; i < n; i++) r.push(i); return r; }
  function shuffle(a) {
    a = a.slice();
    for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)), t = a[i]; a[i] = a[j]; a[j] = t; }
    return a;
  }

  function prep(q) {
    var c = { msg: '' };
    if (q.type === 'mc' || q.type === 'multi') { c.order = shuffle(range(q.options.length)); c.sel = []; }
    else if (q.type === 'tf') c.sel = q.items.map(function () { return null; });
    else {
      do { c.pool = shuffle(range(q.steps.length)); } while (c.pool.every(function (v, i) { return v === i; }));
      c.ans = [];
    }
    return c;
  }
  function fresh() {
    var order = shuffle(range(TOTAL));
    S = { order: order, i: 0, done: false, cur: order.map(function (n) { return prep(ALL[n]); }) };
  }
  function save() { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) { /* bỏ qua */ } }
  function load() {
    try {
      var d = JSON.parse(localStorage.getItem(KEY));
      if (!d || !d.order || d.order.length !== TOTAL || d.cur.length !== TOTAL) return null;
      if (!d.order.every(function (n) { return ALL[n]; })) return null;
      return d;
    } catch (e) { return null; }
  }
  function q(i) { return ALL[S.order[i]]; }

  function answered(i) {
    var c = S.cur[i], t = q(i).type;
    if (t === 'tf') return c.sel.every(function (v) { return v !== null; });
    if (t === 'order') return c.ans.length === q(i).steps.length;
    return c.sel.length > 0 && (t === 'mc' || c.sel.length === q(i).pick);
  }
  function correct(i) {
    var c = S.cur[i], x = q(i);
    if (x.type === 'mc') return c.sel[0] === x.answer;
    if (x.type === 'multi') return c.sel.length === x.answers.length && x.answers.every(function (a) { return c.sel.indexOf(a) > -1; });
    if (x.type === 'tf') return x.items.every(function (it, k) { return c.sel[k] === it.a; });
    return c.ans.every(function (v, k) { return v === k; });
  }

  /* ---------- hiển thị ---------- */
  function render() {
    var n = S.order.filter(function (_, i) { return answered(i); }).length;
    $('prog-text').textContent = S.done ? 'Đã nộp bài' : 'Đã làm ' + n + '/' + TOTAL + ' câu';
    $('prog-fill').style.width = (n / TOTAL * 100) + '%';
    $('btn-submit').hidden = S.done;
    var grid = $('grid'); grid.textContent = '';
    grid.hidden = S.done;
    S.order.forEach(function (_, i) {
      grid.appendChild(h('button', {
        class: 'qn' + (i === S.i ? ' now' : (answered(i) ? ' done' : '')), type: 'button', text: String(i + 1),
        'aria-label': 'Câu ' + (i + 1) + (answered(i) ? ' (đã làm)' : ''),
        onclick: function () { S.i = i; render(); window.scrollTo(0, 0); }
      }));
    });
    var main = $('main'); main.textContent = '';
    main.appendChild(S.done ? viewResult() : viewQuestion());
    save();
  }

  function viewQuestion() {
    var i = S.i, x = q(i), c = S.cur[i];
    var card = h('section', { class: 'card' }, [
      h('div', { class: 'chips' }, [h('span', { class: 'chip', text: 'Câu ' + (i + 1) + '/' + TOTAL })]),
      h('p', { class: 'q-text', text: x.q })
    ]);
    if (x.type === 'multi') card.appendChild(h('p', { class: 'q-hint', text: 'Chọn đúng ' + x.pick + ' đáp án.' }));
    if (x.type === 'order') card.appendChild(h('p', { class: 'q-hint', text: 'Bấm vào một bước để chuyển sang phần trả lời, dùng ▲ ▼ để đổi thứ tự.' }));
    card.appendChild(x.type === 'tf' ? bodyTF(c, x) : x.type === 'order' ? bodyOrder(c, x) : bodyChoice(c, x));
    card.appendChild(h('div', { class: 'actions' }, [
      h('button', { class: 'btn btn-ghost', type: 'button', text: '◀ Câu trước', disabled: i === 0, onclick: function () { S.i--; render(); window.scrollTo(0, 0); } }),
      h('span', { class: 'msg', text: c.msg || '' }),
      h('span', { class: 'spacer' }),
      i + 1 < TOTAL
        ? h('button', { class: 'btn', type: 'button', text: 'Câu sau ▶', onclick: function () { S.i++; render(); window.scrollTo(0, 0); } })
        : h('button', { class: 'btn', type: 'button', text: 'Nộp bài ✔', onclick: submit })
    ]));
    return card;
  }

  function bodyChoice(c, x) {
    var wrap = h('div', { class: 'opts' });
    c.order.forEach(function (oi, pos) {
      wrap.appendChild(h('button', {
        class: 'opt' + (c.sel.indexOf(oi) > -1 ? ' sel' : ''), type: 'button',
        onclick: function () {
          var k = c.sel.indexOf(oi); c.msg = '';
          if (x.type === 'mc') c.sel = [oi];
          else if (k > -1) c.sel.splice(k, 1);
          else if (c.sel.length < x.pick) c.sel.push(oi);
          else c.msg = 'Chỉ được chọn ' + x.pick + ' đáp án. Bỏ một lựa chọn trước nhé!';
          render();
        }
      }, [h('span', { class: 'tag', text: String.fromCharCode(65 + pos) }), h('span', { text: x.options[oi] })]));
    });
    return wrap;
  }

  function bodyTF(c, x) {
    var wrap = h('div', { class: 'tf' });
    x.items.forEach(function (it, k) {
      var btns = h('div', { class: 'tf-btns', role: 'group', 'aria-label': it.t });
      [true, false].forEach(function (v) {
        btns.appendChild(h('button', {
          class: 'tf-btn' + (c.sel[k] === v ? ' sel' : ''), type: 'button',
          'aria-pressed': c.sel[k] === v ? 'true' : 'false', text: v ? x.labels[0] : x.labels[1],
          onclick: function () { c.sel[k] = v; render(); }
        }));
      });
      wrap.appendChild(h('div', { class: 'tf-row' }, [h('span', { class: 'tf-text', text: it.t }), btns]));
    });
    return wrap;
  }

  function bodyOrder(c, x) {
    var pool = h('div', { class: 'order-col order-pool' });
    if (!c.pool.length) pool.appendChild(h('p', { class: 'order-empty', text: 'Đã chuyển hết các bước.' }));
    c.pool.forEach(function (si) {
      pool.appendChild(h('div', { class: 'step' }, [h('button', {
        class: 'step-text', type: 'button', text: x.steps[si],
        onclick: function () { c.pool = c.pool.filter(function (v) { return v !== si; }); c.ans.push(si); render(); }
      })]));
    });
    var ans = h('div', { class: 'order-col order-ans' });
    if (!c.ans.length) ans.appendChild(h('p', { class: 'order-empty', text: 'Chưa có bước nào. Hãy bấm chọn bước đầu tiên.' }));
    c.ans.forEach(function (si, pos) {
      function swap(b) { var t = c.ans[pos]; c.ans[pos] = c.ans[b]; c.ans[b] = t; render(); }
      ans.appendChild(h('div', { class: 'step' }, [
        h('span', { class: 'num', text: String(pos + 1) }),
        h('button', { class: 'step-text', type: 'button', text: x.steps[si], onclick: function () { c.ans.splice(pos, 1); c.pool.push(si); render(); } }),
        h('button', { class: 'mini', type: 'button', text: '▲', 'aria-label': 'Đưa lên', disabled: pos === 0, onclick: function () { swap(pos - 1); } }),
        h('button', { class: 'mini', type: 'button', text: '▼', 'aria-label': 'Đưa xuống', disabled: pos === c.ans.length - 1, onclick: function () { swap(pos + 1); } })
      ]));
    });
    return h('div', { class: 'order' }, [
      h('div', null, [h('h3', { text: 'Các bước' }), pool]),
      h('div', null, [h('h3', { text: 'Phần trả lời' }), ans])
    ]);
  }

  /* ---------- nộp bài & kết quả ---------- */
  function submit() {
    var left = S.order.filter(function (_, i) { return !answered(i); }).length;
    var msg = left ? 'Em còn ' + left + ' câu chưa làm xong. Vẫn nộp bài chứ?' : 'Nộp bài ngay bây giờ?';
    if (!window.confirm(msg)) return;
    S.done = true;
    render();
    window.scrollTo(0, 0);
  }
  function viewResult() {
    var ok = S.order.filter(function (_, i) { return correct(i); }).length;
    var sc = Math.round(ok * PER), pass = sc >= PASS;
    return h('section', { class: 'card hero' }, [
      h('div', { class: 'big-ico', 'aria-hidden': 'true', text: pass ? '🏆' : '📝' }),
      h('h2', { text: 'Kết quả bài kiểm tra' }),
      h('div', { class: 'final-score' }, [String(sc), h('small', { text: ' / 1000' })]),
      h('p', { class: 'verdict ' + (pass ? 'pass' : 'fail'), text: pass ? 'ĐẠT – em đã vượt mốc ' + PASS + ' điểm!' : 'CHƯA ĐẠT – cần ít nhất ' + PASS + ' điểm.' }),
      h('p', { text: 'Em trả lời đúng ' + ok + '/' + TOTAL + ' câu.' }),
      h('div', { class: 'actions', style: 'justify-content:center' }, [
        h('button', { class: 'btn btn-big', type: 'button', text: 'Làm lại bài mới 🔄', onclick: function () { fresh(); render(); window.scrollTo(0, 0); } })
      ])
    ]);
  }

  $('btn-submit').addEventListener('click', submit);
  S = load();
  if (!S) fresh();
  render();
})();

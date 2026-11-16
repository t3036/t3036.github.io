/* Chuỗi ổ khóa – engine dùng chung. Dữ liệu bài học nằm trong data.js (window.LESSON). */
(function () {
  'use strict';
  var L = window.LESSON;
  var KEY = 'spark2_' + L.id, SKEY = 'spark2_settings';
  var $ = function (s, r) { return (r || document).querySelector(s); };
  function lsGet(k) { try { return JSON.parse(localStorage.getItem(k)); } catch (e) { return null; } }
  function lsSet(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} }
  function lsDel(k) { try { localStorage.removeItem(k); } catch (e) {} }

  /* ---------- trạng thái ---------- */
  var cfg = Object.assign({ theme: 'light', sound: true, fs: 1 }, lsGet(SKEY) || {});
  var S = lsGet(KEY) || { done: {}, first: {}, miss: {}, ever: {} };
  var R = {};            // trạng thái tạm từng bước
  var open = {};         // slab đang mở
  var teacher = false;
  var steps = L.steps.concat([{ id: 'final', kind: 'final', icon: '🏆', title: 'Rương kho báu cuối cùng' }]);
  var started = false;

  function save() { lsSet(KEY, S); }
  function saveCfg() { lsSet(SKEY, cfg); }
  function shuffle(a) { a = a.slice(); for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
  function rs(id) { return R[id] || (R[id] = {}); }
  function curIdx() { for (var i = 0; i < steps.length; i++) if (!S.done[steps[i].id]) return i; return steps.length - 1; }
  function byId(id) { for (var i = 0; i < steps.length; i++) if (steps[i].id === id) return steps[i]; }

  /* ---------- âm thanh ---------- */
  var AC;
  function tone(seq) {
    if (!cfg.sound) return;
    try {
      AC = AC || new (window.AudioContext || window.webkitAudioContext)();
      var t = AC.currentTime;
      seq.forEach(function (n) {
        var o = AC.createOscillator(), g = AC.createGain();
        o.type = 'triangle'; o.frequency.value = n[0];
        g.gain.setValueAtTime(.001, t + n[2]); g.gain.exponentialRampToValueAtTime(.18, t + n[2] + .02);
        g.gain.exponentialRampToValueAtTime(.001, t + n[2] + n[1]);
        o.connect(g); g.connect(AC.destination); o.start(t + n[2]); o.stop(t + n[2] + n[1] + .05);
      });
    } catch (e) {}
  }
  var sOK = function () { tone([[660, .12, 0], [880, .18, .12]]); };
  var sNO = function () { tone([[300, .18, 0], [240, .25, .16]]); };
  var sKEY = function () { tone([[523, .1, 0], [659, .1, .1], [784, .1, .2], [1047, .3, .3]]); };

  /* ---------- đọc to ---------- */
  var viVoice = null;
  function findVoice() {
    if (!('speechSynthesis' in window)) return;
    var v = speechSynthesis.getVoices().filter(function (x) { return /^vi/i.test(x.lang); });
    viVoice = v[0] || null;
    document.querySelectorAll('.say').forEach(function (b) { b.disabled = !viVoice; b.title = viVoice ? 'Đọc to' : 'Máy chưa có giọng đọc tiếng Việt'; });
  }
  if ('speechSynthesis' in window) { speechSynthesis.onvoiceschanged = findVoice; }
  function speak(i) {
    if (!viVoice) { toast('Máy chưa có giọng đọc tiếng Việt'); return; }
    speechSynthesis.cancel();
    var txt = Array.prototype.map.call(document.querySelectorAll('#s-' + i + ' [data-read]'), function (n) { return n.innerText; }).join('. ');
    var u = new SpeechSynthesisUtterance(txt); u.lang = 'vi-VN'; u.voice = viVoice; u.rate = .9;
    speechSynthesis.speak(u);
  }
  var tt;
  function toast(m) { var t = $('#toast'); t.textContent = m; t.classList.add('on'); clearTimeout(tt); tt = setTimeout(function () { t.classList.remove('on'); }, 2200); }

  /* ---------- hiển thị ---------- */
  var GOOD = ['Tuyệt vời! Em mở được ổ khóa rồi!', 'Chính xác! Chìa khóa vàng là của em!', 'Giỏi quá! Cánh cửa đã mở!', 'Đúng rồi! Em là công dân số xuất sắc!'];
  var BAD = ['Chưa đúng rồi, nhưng không sao! Thử lại nhé.', 'Gần đúng rồi! Em đọc gợi ý và thử lại nhé.', 'Ổ khóa vẫn đóng. Em thử cách khác nào!', 'Đừng nản nhé, sai là để học mà!'];
  function pick(a) { return a[Math.floor(Math.random() * a.length)]; }

  function tagHtml(st) {
    if (st.tag === 'extra') return '<span class="tag extra">Luyện thêm</span>';
    if (st.tag === 'prac') return '<span class="tag prac">Thực hành</span>';
    if (st.kind === 'q') return '<span class="tag">Câu hỏi</span>';
    return '<span class="tag">Nội dung</span>';
  }
  function sub(st, i) {
    if (st.kind === 'info') return 'Nội dung bài học';
    if (st.kind === 'final') return 'Ôn lại những câu chưa đúng';
    if (st.tag === 'prac') return 'Tình huống thực hành';
    if (st.tag === 'extra') return 'Luyện thêm';
    return 'Câu hỏi trong bài';
  }

  function renderKeys() {
    var c = curIdx(), n = 0;
    var html = steps.map(function (s, i) {
      if (S.done[s.id]) n++;
      return '<span class="kdot' + (S.done[s.id] ? ' on' : '') + (i === c && !S.done[s.id] ? ' cur' : '') + '">' + (S.done[s.id] ? '🔑' : '') + '</span>';
    }).join('');
    $('#keys').innerHTML = '<b>🔑 ' + n + '/' + steps.length + '</b>' + html;
  }

  function slabHtml(i) {
    var st = steps[i], done = !!S.done[st.id], c = curIdx();
    var locked = !done && i > c && !teacher;
    var isOpen = !locked && (open[i] || (i === c && !done));
    var cls = 'slab' + (locked ? ' locked' : '') + (done ? ' done' : '') + (i === c && !done ? ' cur' : '') + (isOpen ? '' : ' collapsed');
    var ico = locked ? '🔒' : st.icon, state = done ? '🔓' : (locked ? '🔒' : '🗝️');
    var title = locked ? (st.kind === 'info' ? 'Nội dung đang bị khóa' : 'Thử thách đang bị khóa') : st.title;
    var subt = locked ? 'Mở ổ khóa phía trên để vào đây' : sub(st, i);
    var h = '<div class="slab-wrap" id="w-' + i + '">' + (i ? '<div class="link' + (S.done[steps[i - 1].id] ? ' done' : '') + '"></div>' : '') +
      '<section class="' + cls + '" id="s-' + i + '"><button class="shead" data-a="head" data-i="' + i + '"' + (locked ? ' disabled' : '') + ' aria-expanded="' + isOpen + '">' +
      '<span class="ico">' + ico + '</span><span class="tt">' + title + '<small>' + subt + '</small></span><span class="st">' + state + '</span></button>';
    if (isOpen) h += '<div class="sbody">' + bodyHtml(i) + '</div>';
    return h + '</section></div>';
  }

  function bodyHtml(i) {
    var st = steps[i];
    var say = '<button class="say" data-a="say" data-i="' + i + '" aria-label="Đọc to">🔊</button>';
    if (st.kind === 'info') return infoHtml(st, i, say);
    if (st.kind === 'final') return finalHtml(st, i, say);
    return qHtml(st, i, say);
  }

  /* ----- nội dung ----- */
  function infoHtml(st, i, say) {
    var h = say;
    if (st.lead) h += '<p class="lead" data-read>' + st.lead + '</p>';
    if (st.pts) h += '<ul class="pts" data-read>' + st.pts.map(function (p) { return '<li><i>' + p[0] + '</i><span>' + p[1] + '</span></li>'; }).join('') + '</ul>';
    if (st.img) h += '<button class="imgbtn" data-a="zoom" data-src="' + st.img + '" aria-label="Phóng to hình"><img loading="lazy" src="' + st.img + '" alt="' + (st.alt || '') + '"><span>🔍 Chạm để phóng to</span></button>';
    if (st.think) {
      var r = rs(st.id); r.th = r.th || {};
      h += '<div class="think">' + st.think.map(function (t, k) {
        return '<div><button class="tk" data-a="think" data-i="' + i + '" data-k="' + k + '">' + (k + 1) + '. ' + t[0] + (r.th[k] ? '' : ' <span class="en">– chạm để xem gợi ý</span>') + '</button>' + (r.th[k] ? '<div class="ans">' + t[1] + '</div>' : '') + '</div>';
      }).join('') + '</div>';
    }
    var d = !!S.done[st.id];
    h += '<div class="actions">' + (d ? '<button class="btn go" data-a="next" data-i="' + i + '">Tiếp tục ➜</button>' : '<button class="btn" data-a="got" data-i="' + i + '">🔑 Em đã hiểu – Mở khóa</button>') + '</div>';
    return h;
  }

  /* ----- câu hỏi ----- */
  function qHtml(st, i, say) {
    var r = rs(st.id), d = !!S.done[st.id];
    var h = say + '<div class="q" data-read>' + tagHtml(st) + st.text + '</div>';
    var body = '';
    if (st.type === 'single' || st.type === 'multi') body = optsHtml(st, r, d);
    else if (st.type === 'tf') body = tfHtml(st, r, d);
    else if (st.type === 'order') body = orderHtml(st, r, d);
    else if (st.type === 'sort') body = sortHtml(st, r, d);
    else if (st.type === 'find') body = findHtml(st, r, d);
    else if (st.type === 'chat') body = chatHtml(st, r, d);
    else if (st.type === 'reveal') body = revealHtml(st, r, d);
    h += body;
    h += fbHtml(st, r, d);
    h += actionsHtml(st, r, d, i);
    return h;
  }
  function fbHtml(st, r, d) {
    var f = r.fb;
    if (d && !f) f = { k: 'ok', t: (st.why || 'Em đã mở khóa phần này rồi!') };
    if (!f) return '<div class="fb" id="fb-' + st.id + '"><span class="fi">💬</span><p>' + (st.idle || 'Làm xong rồi bấm nút để kiểm tra nhé. Cần giúp thì bấm 💡 Gợi ý.') + '</p></div>';
    var ic = { ok: '✅', no: '❌', hint: '💡' }[f.k];
    return '<div class="fb ' + f.k + '" id="fb-' + st.id + '"><span class="fi">' + ic + '</span><p>' + f.t + '</p></div>';
  }
  function actionsHtml(st, r, d, i) {
    var nextBtn = '<button class="btn go" data-a="next" data-i="' + i + '">Tiếp tục ➜</button>';
    if (d) return '<div class="actions">' + nextBtn + '</div>';
    var hint = st.hint ? '<button class="btn ghost" data-a="hint" data-i="' + i + '">💡 Gợi ý</button>' : '';
    var t = st.type;
    if (t === 'sort' || t === 'find' || t === 'chat') return '<div class="actions">' + hint + '</div>';
    if (t === 'reveal') return '<div class="actions">' + (r.shown ? '<button class="btn" data-a="revdone" data-i="' + i + '">🔑 Em đã hiểu – Mở khóa</button>' : '') + '</div>';
    if (t === 'order') return '<div class="actions"><button class="btn" data-a="chk" data-i="' + i + '"' + ((r.pk || []).length === st.items.length ? '' : ' disabled') + '>🔑 Mở khóa</button><button class="btn ghost" data-a="reset" data-i="' + i + '">↺ Làm lại</button>' + hint + '</div>';
    var ready = isReady(st, r);
    return '<div class="actions"><button class="btn" data-a="chk" data-i="' + i + '"' + (ready ? '' : ' disabled') + '>🔑 Mở khóa</button>' + hint + '</div>';
  }
  function isReady(st, r) {
    if (st.type === 'single') return r.sel !== undefined;
    if (st.type === 'multi') return (r.sel || []).length > 0;
    if (st.type === 'tf') return st.rows.every(function (_, k) { return (r.sel || [])[k] !== undefined; });
    return true;
  }

  function optsHtml(st, r, d) {
    if (!r.ord) r.ord = shuffle(st.opts.map(function (_, k) { return k; }));
    var multi = st.type === 'multi', ans = multi ? st.ans : [st.ans];
    var sel = multi ? (r.sel || []) : (r.sel === undefined ? [] : [r.sel]);
    if (d) sel = ans;
    return '<div class="opts" role="' + (multi ? 'group' : 'radiogroup') + '">' + r.ord.map(function (k, p) {
      var on = sel.indexOf(k) >= 0, cls = 'opt' + (multi ? ' multi' : '') + (on ? ' sel' : '');
      var mk = '';
      if (d && on) { cls += ' right'; mk = '✓'; }
      else if (r.chk && on) { var ok = ans.indexOf(k) >= 0; cls += ok ? ' right' : ' wrong'; mk = ok ? '✓' : '✗'; }
      return '<button class="' + cls + '" data-a="opt" data-i="' + k + '" data-s="' + st.id + '" aria-pressed="' + on + '"' + (d ? ' disabled' : '') + '><span class="ltr">' + (multi ? (on ? '☑' : '☐') : 'ABCD'[p]) + '</span><span>' + st.opts[k] + '</span><span class="mk">' + mk + '</span></button>';
    }).join('') + '</div>' + (multi ? '<p class="en" style="margin:8px 0 0">Có thể có nhiều hơn một đáp án đúng.</p>' : '');
  }

  function tfHtml(st, r, d) {
    var lb = st.labels || ['Đúng', 'Sai'], sel = r.sel || [];
    if (d) sel = st.rows.map(function (x) { return x.ans; });
    return '<div class="stmts">' + st.rows.map(function (row, k) {
      var cls = 'srow', mk = '';
      if (d) { cls += ' right'; mk = '✓ Chính xác'; }
      else if (r.chk && sel[k] !== undefined) { var ok = sel[k] === row.ans; cls += ok ? ' right' : ' wrong'; mk = ok ? '✓ Chính xác' : '✗ Xem lại ý này'; }
      return '<div class="' + cls + '"><div class="stmt">' + row.t + '</div><div class="pair">' +
        [0, 1].map(function (v) { return '<button class="' + (sel[k] === v ? 'sel' : '') + '" data-a="tf" data-s="' + st.id + '" data-k="' + k + '" data-v="' + v + '"' + (d ? ' disabled' : '') + '>' + (sel[k] === v ? '● ' : '') + lb[v] + '</button>'; }).join('') +
        '</div>' + (mk ? '<div class="mk">' + mk + '</div>' : '') + '</div>';
    }).join('') + '</div>';
  }

  function orderHtml(st, r, d) {
    if (!r.ord) r.ord = shuffle(st.items.map(function (_, k) { return k; }));
    var pk = d ? st.items.map(function (_, k) { return k; }) : (r.pk || []);
    return '<div class="order-list">' + r.ord.map(function (k) {
      var pos = pk.indexOf(k), cls = 'ord' + (pos >= 0 ? ' pk' : '');
      if (d) cls += ' right'; else if (r.chk && pos >= 0) cls += pos === k ? ' right' : ' wrong';
      return '<button class="' + cls + '" data-a="ord" data-s="' + st.id + '" data-k="' + k + '"' + (d ? ' disabled' : '') + '><span class="no">' + (pos >= 0 ? pos + 1 : '·') + '</span><span>' + st.items[k] + '</span></button>';
    }).join('') + '</div><p class="en" style="margin:8px 0 0">Chạm lần lượt theo đúng thứ tự: bước 1, bước 2, …</p>';
  }

  function sortHtml(st, r, d) {
    if (!r.q) { r.q = shuffle(st.cards.map(function (_, k) { return k; })); r.total = st.cards.length; r.ok = 0; }
    if (d) return '<div class="deck"><div class="card-big">🎉 Em đã phân loại đúng cả ' + st.cards.length + ' thẻ!</div></div>';
    var c = st.cards[r.q[0]];
    return '<div class="prog"><i style="width:' + Math.round(r.ok / r.total * 100) + '%"></i></div><div class="deck"><div class="card-big" id="cb-' + st.id + '" data-read>' + (c.ic ? '<div style="font-size:2rem">' + c.ic + '</div>' : '') + c.t + '</div></div>' +
      '<div class="bk">' + st.buckets.map(function (b, k) { return '<button data-a="bk" data-s="' + st.id + '" data-v="' + k + '">' + b + '</button>'; }).join('') + '</div>';
  }

  function findHtml(st, r, d) {
    if (!r.hit) { r.hit = {}; r.bad = {}; }
    var order = r.ord || (r.ord = shuffle(st.items.map(function (_, k) { return k; })));
    return '<div class="phone">' + order.map(function (k) {
      var it = st.items[k], cls = 'it', mk = '';
      if (d || r.hit[k]) { if (it.ok) { cls += ' hit'; mk = '👣'; } }
      else if (r.bad[k]) { cls += ' miss'; mk = '✗'; }
      return '<button class="' + cls + '" data-a="find" data-s="' + st.id + '" data-k="' + k + '"' + (d ? ' disabled' : '') + '><span>' + it.ic + '</span><span>' + it.t + '</span><span class="mk">' + mk + '</span></button>';
    }).join('') + '</div>';
  }

  function chatHtml(st, r, d) {
    if (r.turn === undefined) { r.turn = 0; r.log = st.turns[0].them.map(function (t) { return ['them', t]; }); }
    var t = st.turns[r.turn];
    var h = '<div class="chat">' + r.log.map(function (m) { return '<div class="msg ' + m[0] + '">' + m[1] + '</div>'; }).join('') + '</div>';
    if (d || !t) return h;
    h += '<div class="opts"><p class="en" style="margin:0" data-read>' + t.ask + '</p>' + t.choices.map(function (c, k) {
      return '<button class="opt" data-a="chat" data-s="' + st.id + '" data-k="' + k + '"><span class="ltr">' + 'ABCD'[k] + '</span><span>' + c.t + '</span></button>';
    }).join('') + '</div>';
    return h;
  }

  function revealHtml(st, r, d) {
    var gone = r.shown || d;
    return '<div class="post' + (gone ? ' gone' : '') + '"><span class="pic">' + st.post.pic + '</span><div><b>' + st.post.title + '</b><div>' + st.post.text + '</div></div></div>' +
      '<div class="actions">' + (gone ? '' : '<button class="btn danger" data-a="rev" data-i="' + st.id + '">🗑 ' + st.btn + '</button>') + '</div>' +
      '<div class="copies">' + (gone ? st.copies.map(function (c) { return '<div class="copy">' + c + '</div>'; }).join('') : '') + '</div>';
  }

  /* ----- rương cuối ----- */
  function finalQueue() { return Object.keys(S.miss).filter(function (id) { var s = byId(id); return s && s.kind === 'q' && s.tag !== 'prac'; }); }
  function finalHtml(st, i, say) {
    var r = rs('final');
    if (!r.started) { r.started = true; r.queue = finalQueue(); r.i = 0; }
    var h = say;
    if (r.queue.length && r.i < r.queue.length) {
      var q = byId(r.queue[r.i]);
      h += '<p class="lead" data-read>🔁 Ôn lại câu em chưa đúng (' + (r.i + 1) + '/' + r.queue.length + ')</p>';
      var fake = Object.assign({}, q, { id: 'fin_' + q.id, tag: q.tag });
      R['fin_' + q.id] = R['fin_' + q.id] || {};
      return h + qHtmlForFinal(fake, q, i);
    }
    if (steps.every(function (x) { return x.id === 'final' || S.done[x.id]; })) { S.done['final'] = true; save(); setTimeout(renderKeys, 0); }
    var tot = 0, ok = 0;
    steps.forEach(function (s) { if (s.kind === 'q' && !s.tag) { tot++; if (S.first[s.id]) ok++; } });
    var pct = tot ? ok / tot : 1, star = pct >= .9 ? 3 : pct >= .6 ? 2 : 1;
    var ever = Object.keys(S.ever).map(byId).filter(Boolean);
    h += '<div class="final"><div class="stars" aria-label="' + star + ' sao">' + '⭐'.repeat(star) + '<span style="opacity:.25">' + '⭐'.repeat(3 - star) + '</span></div>' +
      '<h2>Em đã mở hết mọi ổ khóa!</h2><p>Em trả lời đúng ngay lần đầu <b>' + ok + '/' + tot + '</b> câu hỏi.</p>' +
      (ever.length ? '<p><b>Những câu em từng làm sai (hãy nhớ nhé):</b></p><div class="mlist">' + ever.map(function (s) { return '<div>❗ ' + (s.title || '') + ' – <i>' + (s.why || '') + '</i></div>'; }).join('') + '</div>' : '<p>🎉 Em không sai câu nào. Thật xuất sắc!</p>') +
      '<div class="actions" style="justify-content:center"><button class="btn" data-a="restart">↺ Học lại từ đầu</button></div></div>';
    return h;
  }
  function qHtmlForFinal(fake, q, i) {
    // dùng lại bộ vẽ câu hỏi nhưng ghi kết quả vào câu gốc
    var r = R['fin_' + q.id];
    var h = '<div class="q" data-read>' + q.text + '</div>';
    var t = q.type, body = '';
    var tmp = Object.assign({}, q, { id: 'fin_' + q.id });
    if (t === 'single' || t === 'multi') body = optsHtml(tmp, r, false);
    else if (t === 'tf') body = tfHtml(tmp, r, false);
    return h + body + fbHtml(tmp, r, false) + actionsHtmlFinal(tmp, r, i);
  }
  function actionsHtmlFinal(st, r, i) {
    return '<div class="actions"><button class="btn" data-a="chk" data-i="' + i + '" data-f="1"' + (isReady(st, r) ? '' : ' disabled') + '>🔑 Mở khóa</button>' + (st.hint ? '<button class="btn ghost" data-a="hint" data-i="' + i + '" data-f="1">💡 Gợi ý</button>' : '') + '</div>';
  }

  /* ---------- vẽ lại ---------- */
  function drawSlab(i, keep) {
    var w = $('#w-' + i); if (!w) return;
    var tmp = document.createElement('div'); tmp.innerHTML = slabHtml(i);
    w.replaceWith(tmp.firstChild);
    findVoice();
  }
  function drawAll() {
    $('#chain').innerHTML = steps.map(function (_, i) { return slabHtml(i); }).join('');
    renderKeys(); findVoice();
  }
  function goto(i) {
    var el = $('#s-' + i); if (el) setTimeout(function () { el.scrollIntoView({ behavior: 'smooth', block: 'start' }); }, 60);
  }

  /* ---------- kiểm tra đáp án ---------- */
  function complete(st, i, msg) {
    var wasNew = !S.done[st.id];
    S.done[st.id] = true; save(); open[i] = true;
    var r = rs(st.id); r.fb = { k: 'ok', t: msg || st.why || pick(GOOD) };
    sKEY();
    drawSlab(i); var s = $('#s-' + i); if (s) { s.classList.add('unlock'); }
    // mở khóa phần kế tiếp: vẽ lại để bỏ khóa
    if (steps[i + 1]) drawSlab(i + 1);
    var lk = $('#w-' + (i + 1) + ' .link'); if (lk) lk.classList.add('done');
    renderKeys();
  }
  function wrong(st, i, rr, fid) {
    var r = rr; r.tries = (r.tries || 0) + 1; r.chk = true;
    var base = byId(st.id.replace(/^fin_/, '')) || st;
    if (base.tag !== 'prac') { S.miss[base.id] = 1; S.ever[base.id] = 1; save(); }
    r.fb = { k: 'no', t: pick(BAD) + (st.hint ? ' <b>Gợi ý:</b> ' + st.hint : '') };
    sNO();
    drawSlab(i);
  }
  function check(st, i, final) {
    var rr = final ? R['fin_' + st.id] : rs(st.id), ok = false, t = st.type;
    if (t === 'single') ok = rr.sel === st.ans;
    else if (t === 'multi') { var a = (rr.sel || []).slice().sort().join(), b = st.ans.slice().sort().join(); ok = a === b; }
    else if (t === 'tf') ok = st.rows.every(function (x, k) { return (rr.sel || [])[k] === x.ans; });
    else if (t === 'order') ok = (rr.pk || []).every(function (v, k) { return v === k; });
    rr.chk = true;
    if (ok) {
      if (final) {
        var fr = rs('final'); delete S.miss[st.id]; save(); sOK();
        rr.fb = { k: 'ok', t: st.why }; rr.fin = true;
        var s = $('#s-' + i); drawSlab(i);
        // hiện đáp án đúng rồi cho sang câu kế bằng nút
        var box = $('#s-' + i + ' .actions');
        if (box) box.innerHTML = '<button class="btn go" data-a="finnext" data-i="' + i + '">Tiếp tục ➜</button>';
        $('#s-' + i + ' .opts, #s-' + i + ' .stmts') && $('#s-' + i + ' .opts, #s-' + i + ' .stmts').querySelectorAll('button').forEach(function (b) { b.disabled = true; });
        return;
      }
      if (S.first[st.id] === undefined && !(rr.tries > 0) && !st.tag) S.first[st.id] = true;
      complete(st, i, pick(GOOD) + ' ' + (st.why || ''));
    } else wrong(st, i, rr);
  }

  /* ---------- xử lý sự kiện ---------- */
  document.addEventListener('click', function (e) {
    var b = e.target.closest('[data-a]'); if (!b) return;
    var a = b.dataset.a, i = +b.dataset.i, st = steps[i];
    if (a === 'head') { if (i === curIdx() && !S.done[st.id]) return; open[i] = !open[i]; drawSlab(i); return; }
    if (a === 'say') return speak(i);
    if (a === 'zoom') { $('#zoom img').src = b.dataset.src; $('#zoom').classList.add('on'); return; }
    if (a === 'think') { var r = rs(st.id); r.th = r.th || {}; r.th[b.dataset.k] = true; drawSlab(i); return; }
    if (a === 'got') return complete(st, i, 'Em đã mở khóa nội dung mới!');
    if (a === 'next') { open[i] = false; drawSlab(i); var n = i + 1; open[n] = true; drawSlab(n); goto(n); return; }
    if (a === 'restart') return askReset();
    if (a === 'hint') {
      var fin = b.dataset.f, q = fin ? byId(rs('final').queue[rs('final').i]) : st;
      var rr = fin ? R['fin_' + q.id] : rs(q.id);
      rr.fb = { k: 'hint', t: q.hint || 'Hãy đọc lại phần nội dung phía trên nhé.' };
      var f = $('#fb-' + (fin ? 'fin_' + q.id : q.id)); if (f) { f.className = 'fb hint'; f.innerHTML = '<span class="fi">💡</span><p>' + rr.fb.t + '</p>'; }
      return;
    }
    if (a === 'opt') {
      var sid = b.dataset.s, fin2 = /^fin_/.test(sid), qq = fin2 ? byId(sid.slice(4)) : byId(sid), r2 = fin2 ? R[sid] : rs(sid), k = +b.dataset.i;
      if (qq.type === 'single') r2.sel = k; else { r2.sel = r2.sel || []; var p = r2.sel.indexOf(k); if (p >= 0) r2.sel.splice(p, 1); else r2.sel.push(k); }
      r2.chk = false; r2.fb = null; return drawSlab(fin2 ? curIdx() : stepIndex(sid));
    }
    if (a === 'tf') {
      var sid2 = b.dataset.s, fin3 = /^fin_/.test(sid2), r3 = fin3 ? R[sid2] : rs(sid2);
      r3.sel = r3.sel || []; r3.sel[+b.dataset.k] = +b.dataset.v; r3.chk = false; r3.fb = null;
      return drawSlab(fin3 ? curIdx() : stepIndex(sid2));
    }
    if (a === 'chk') { var fin4 = b.dataset.f, q4 = fin4 ? byId(rs('final').queue[rs('final').i]) : st; return check(fin4 ? Object.assign({}, q4, { id: q4.id }) : st, i, !!fin4); }
    if (a === 'finnext') { var fr = rs('final'); fr.i++; delete R['fin_' + fr.queue[fr.i - 1]]; drawSlab(i); renderKeys(); return; }
    if (a === 'reset') { var r4 = rs(st.id); r4.pk = []; r4.chk = false; r4.fb = null; return drawSlab(i); }
    if (a === 'ord') {
      var idx = stepIndex(b.dataset.s), s5 = steps[idx], r5 = rs(s5.id); r5.pk = r5.pk || []; var kk = +b.dataset.k, pp = r5.pk.indexOf(kk);
      if (pp < 0) r5.pk.push(kk); else if (pp === r5.pk.length - 1) r5.pk.pop();
      r5.chk = false; r5.fb = null; return drawSlab(idx);
    }
    if (a === 'bk') return sortPick(b);
    if (a === 'find') return findPick(b);
    if (a === 'chat') return chatPick(b);
    if (a === 'rev') { var idx2 = stepIndex(b.dataset.i), r6 = rs(b.dataset.i); r6.shown = true; r6.fb = { k: 'no', t: steps[idx2].after }; sNO(); return drawSlab(idx2); }
    if (a === 'revdone') { return complete(st, i, st.why); }
  });
  function stepIndex(id) { for (var i = 0; i < steps.length; i++) if (steps[i].id === id) return i; return -1; }

  function sortPick(b) {
    var idx = stepIndex(b.dataset.s), st = steps[idx], r = rs(st.id), v = +b.dataset.v, c = st.cards[r.q[0]];
    var ok = c.b === v, cb = $('#cb-' + st.id);
    if (ok) { r.q.shift(); r.ok++; r.fb = { k: 'ok', t: '<b>Đúng!</b> ' + c.why }; sOK(); if (!r.q.length) { return complete(st, idx, '🎉 Em phân loại đúng hết rồi! ' + (st.why || '')); } }
    else { r.q.push(r.q.shift()); r.fb = { k: 'no', t: '<b>Chưa đúng.</b> ' + c.why + ' Thẻ này sẽ quay lại sau nhé.' }; sNO(); }
    drawSlab(idx);
    var nc = $('#cb-' + st.id); if (nc) nc.classList.add(ok ? 'pop' : 'shake');
  }
  function findPick(b) {
    var idx = stepIndex(b.dataset.s), st = steps[idx], r = rs(st.id), k = +b.dataset.k, it = st.items[k];
    if (it.ok) { r.hit[k] = true; r.fb = { k: 'ok', t: '<b>Đúng!</b> ' + it.why }; sOK(); }
    else { r.bad[k] = true; r.fb = { k: 'no', t: '<b>Không phải.</b> ' + it.why }; sNO(); }
    var all = st.items.every(function (x, j) { return !x.ok || r.hit[j]; });
    if (all) return complete(st, idx, '🎉 Em đã tìm đủ dấu chân! ' + (st.why || ''));
    drawSlab(idx);
    setTimeout(function () { r.bad = {}; }, 1500);
  }
  function chatPick(b) {
    var idx = stepIndex(b.dataset.s), st = steps[idx], r = rs(st.id), t = st.turns[r.turn], c = t.choices[+b.dataset.k];
    if (!c.ok) { r.fb = { k: 'no', t: '<b>Chưa tốt.</b> ' + c.fb }; sNO(); return drawSlab(idx); }
    sOK(); r.log.push(['me', c.t]);
    r.fb = { k: 'ok', t: '<b>Hay lắm!</b> ' + c.fb };
    r.turn++;
    if (r.turn >= st.turns.length) { r.log.push(['sys', st.end]); return complete(st, idx, c.fb + ' ' + (st.why || '')); }
    st.turns[r.turn].them.forEach(function (m) { r.log.push(['them', m]); });
    drawSlab(idx);
  }

  /* ---------- zoom / modal / công cụ ---------- */
  $('#zoom').addEventListener('click', function () { this.classList.remove('on'); });
  function askReset() { $('#modal').classList.add('on'); $('#mno').focus(); }
  $('#mno').onclick = function () { $('#modal').classList.remove('on'); };
  $('#myes').onclick = function () {
    $('#modal').classList.remove('on'); lsDel(KEY); S = { done: {}, first: {}, miss: {}, ever: {} }; R = {}; open = {};
    begin(true);
  };
  function applyCfg() {
    document.documentElement.dataset.theme = cfg.theme; document.documentElement.style.setProperty('--fs', cfg.fs);
    $('#t-theme').textContent = cfg.theme === 'dark' ? '☀️' : '🌙'; $('#t-snd').textContent = cfg.sound ? '🔊' : '🔇';
  }
  $('#t-theme').onclick = function () { cfg.theme = cfg.theme === 'dark' ? 'light' : 'dark'; saveCfg(); applyCfg(); };
  $('#t-snd').onclick = function () { cfg.sound = !cfg.sound; saveCfg(); applyCfg(); if (cfg.sound) sOK(); };
  $('#t-sm').onclick = function () { cfg.fs = Math.max(.85, +(cfg.fs - .1).toFixed(2)); saveCfg(); applyCfg(); };
  $('#t-lg').onclick = function () { cfg.fs = Math.min(1.5, +(cfg.fs + .1).toFixed(2)); saveCfg(); applyCfg(); };
  $('#t-rs').onclick = askReset;

  /* mở khóa ẩn dành cho giáo viên: nhấp chuột phải hai lần / nhấn giữ tiêu đề 3 giây */
  var last = 0, press;
  var h1 = $('#title');
  h1.addEventListener('contextmenu', function (e) { e.preventDefault(); var n = Date.now(); if (n - last < 700) { teacher = true; drawAll(); } last = n; });
  h1.addEventListener('touchstart', function () { press = setTimeout(function () { teacher = true; drawAll(); }, 3000); }, { passive: true });
  ['touchend', 'touchmove', 'touchcancel'].forEach(function (ev) { h1.addEventListener(ev, function () { clearTimeout(press); }, { passive: true }); });

  /* ---------- màn hình bắt đầu ---------- */
  function begin(fresh) {
    started = true; $('#start').hidden = true; $('#main').hidden = false;
    open = {}; var c = curIdx(); open[c] = true;
    drawAll(); if (!fresh) goto(c); else window.scrollTo(0, 0);
  }
  function init() {
    document.title = 'Bài ' + L.no + ' · ' + L.title + ' – Spark 2';
    $('#title').textContent = L.title; $('#lno').textContent = 'Bài ' + L.no + ' · ' + L.topic;
    $('#badge').textContent = L.icon; document.documentElement.style.setProperty('--acc', L.acc); document.documentElement.style.setProperty('--acc-d', L.accD);
    applyCfg();
    var has = Object.keys(S.done).length > 0, fin = S.done['final'];
    $('#start').innerHTML = '<div class="start"><div class="big">' + L.icon + '</div><h2>' + L.title + '</h2><p>' + L.intro + '</p><p class="en">🔒 Trả lời đúng để lấy chìa khóa 🔑 mở phần tiếp theo!</p>' +
      '<div class="actions" style="justify-content:center">' + (has ? '<button class="btn" id="bgo">▶ Tiếp tục</button><button class="btn ghost" id="bre">↺ Học lại từ đầu</button>' : '<button class="btn" id="bgo">▶ Bắt đầu</button>') + '</div></div>';
    $('#bgo').onclick = function () { begin(false); };
    if (has) $('#bre').onclick = askReset;
    findVoice();
  }
  init();
})();

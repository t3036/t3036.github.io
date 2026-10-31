/* Level 1 lesson engine – reads window.LESSON (see each bai-XX/index.html) */
(function () {
  var L = window.LESSON, KEY = 'ic3gs6-l1-' + L.id, GK = 'ic3gs6-l1-global';
  var $ = function (s) { return document.querySelector(s); };
  var app = $('#app');
  var G = { theme: '', sound: true, fs: 19, teacher: false };
  var S, Q = [], cur = null, screen = 'start', reviewMode = false, fcI = 0, fcFlip = false;

  function jget(k, d) { try { var v = localStorage.getItem(k); return v ? JSON.parse(v) : d; } catch (e) { return d; } }
  function jset(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} }
  function fresh() { return { started: false, sec: 0, pos: 0, done: [], stat: {}, miss: [], explain: false, fin: false }; }
  G = Object.assign(G, jget(GK, {}));
  S = Object.assign(fresh(), jget(KEY, {}));
  function save() { jset(KEY, S); }
  function gsave() { jset(GK, G); }

  /* assign ids */
  var ALL = {};
  L.sections.forEach(function (sec, si) {
    sec.steps.forEach(function (st, i) { st.id = L.id + '-' + si + '-' + i; st.sec = si; ALL[st.id] = st; });
  });
  L.explain.id = L.id + '-explain'; ALL[L.explain.id] = L.explain;
  var GRADED = []; L.sections.forEach(function (s) { s.steps.forEach(function (st) { if (st.type !== 'learn' && st.type !== 'chat') GRADED.push(st.id); }); });

  function shuffle(a) { a = a.slice(); for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;'); }
  function toast(t) { var d = document.createElement('div'); d.className = 'toast'; d.textContent = t; document.body.appendChild(d); setTimeout(function () { d.remove(); }, 2200); }

  /* sound */
  var AC;
  function beep(ok) {
    if (!G.sound) return;
    try {
      AC = AC || new (window.AudioContext || window.webkitAudioContext)();
      var seq = ok ? [[660, 0], [880, .12]] : [[220, 0], [180, .14]];
      seq.forEach(function (n) {
        var o = AC.createOscillator(), g = AC.createGain(); o.type = ok ? 'sine' : 'triangle'; o.frequency.value = n[0];
        g.gain.setValueAtTime(.12, AC.currentTime + n[1]); g.gain.exponentialRampToValueAtTime(.001, AC.currentTime + n[1] + .2);
        o.connect(g); g.connect(AC.destination); o.start(AC.currentTime + n[1]); o.stop(AC.currentTime + n[1] + .22);
      });
    } catch (e) {}
  }
  /* theme / font */
  function applyLook() {
    var t = G.theme || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    document.documentElement.dataset.theme = t;
    document.documentElement.style.setProperty('--fs', G.fs + 'px');
  }
  applyLook();

  /* read aloud */
  var viVoice = null;
  function findVoice() { try { var v = speechSynthesis.getVoices(); viVoice = v.filter(function (x) { return /^vi/i.test(x.lang); })[0] || null; } catch (e) {} }
  findVoice(); try { speechSynthesis.onvoiceschanged = function () { findVoice(); renderTop(); }; } catch (e) {}
  function speak() {
    if (!viVoice) return;
    speechSynthesis.cancel();
    var u = new SpeechSynthesisUtterance($('#stage').innerText.replace(/[✔✖💡]/g, ''));
    u.voice = viVoice; u.lang = viVoice.lang; speechSynthesis.speak(u);
  }

  /* frame */
  app.innerHTML =
    '<div class="top"><div class="ttl" id="ttl"><h1>' + L.icon + ' ' + L.title + '</h1><small>' + L.sub + '</small></div><div class="tools" id="tools"></div></div>' +
    '<div class="wrap"><aside class="rail"><div class="mascot" id="mas">🦉</div><div class="fb" id="fb"></div><div class="trail" id="trail"></div></aside>' +
    '<section class="page"><main class="stage" id="stage"></main><div class="acts"><button class="btn alt" id="bHint">💡 Gợi ý</button><button class="btn" id="bMain">Tiếp</button></div></section></div>';

  function renderTop() {
    var t = $('#tools');
    t.innerHTML =
      '<a class="ib" href="../../../level1.html" title="Danh sách bài">🏠</a>' +
      '<button class="ib" id="tMap" title="Bản đồ">🗺️</button>' +
      '<button class="ib" id="tRead" title="' + (viVoice ? 'Đọc to' : 'Máy không có giọng đọc tiếng Việt') + '"' + (viVoice ? '' : ' disabled') + '>📢</button>' +
      '<button class="ib" id="tSnd" title="Âm thanh">' + (G.sound ? '🔔' : '🔕') + '</button>' +
      '<button class="ib" id="tThm" title="Sáng / tối">' + (document.documentElement.dataset.theme === 'dark' ? '☀️' : '🌙') + '</button>' +
      '<button class="ib" id="tFm" title="Chữ nhỏ">A−</button><button class="ib" id="tFp" title="Chữ to">A+</button>' +
      '<button class="ib" id="tFs" title="Toàn màn hình">⛶</button>' +
      '<button class="ib" id="tRs" title="Học lại từ đầu">🔄</button>';
    $('#tMap').onclick = function () { if (S.started) goMap(); };
    $('#tRead').onclick = speak;
    $('#tSnd').onclick = function () { G.sound = !G.sound; gsave(); renderTop(); };
    $('#tThm').onclick = function () { G.theme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark'; gsave(); applyLook(); renderTop(); };
    $('#tFm').onclick = function () { G.fs = Math.max(15, G.fs - 2); gsave(); applyLook(); };
    $('#tFp').onclick = function () { G.fs = Math.min(28, G.fs + 2); gsave(); applyLook(); };
    $('#tFs').onclick = function () { try { document.fullscreenElement ? document.exitFullscreen() : document.documentElement.requestFullscreen(); } catch (e) {} };
    $('#tRs').onclick = askRestart;
  }
  renderTop();

  /* hidden teacher unlock: double right-click or 3 s hold on the title */
  (function () {
    var last = 0, timer;
    var el = $('#ttl');
    function unlock() { G.teacher = true; gsave(); toast('✔ Đã mở khóa'); if (screen === 'map') goMap(); }
    el.addEventListener('contextmenu', function (e) { e.preventDefault(); var n = Date.now(); if (n - last < 700) unlock(); last = n; });
    el.addEventListener('touchstart', function () { timer = setTimeout(unlock, 3000); }, { passive: true });
    ['touchend', 'touchmove', 'touchcancel'].forEach(function (ev) { el.addEventListener(ev, function () { clearTimeout(timer); }, { passive: true }); });
  })();

  function modal(msg, yes, no, cb) {
    var m = document.createElement('div'); m.className = 'modal';
    m.innerHTML = '<div class="box"><div class="big">🤔</div><b>' + msg + '</b><div class="row"><button class="btn alt" id="mN">' + no + '</button><button class="btn" id="mY">' + yes + '</button></div></div>';
    document.body.appendChild(m);
    m.querySelector('#mN').onclick = function () { m.remove(); };
    m.querySelector('#mY').onclick = function () { m.remove(); cb(); };
  }
  function askRestart() {
    modal('Em chắc chắn muốn học lại từ đầu? Sao và câu sai sẽ bị xóa.', 'Học lại', 'Thôi', function () {
      S = fresh(); save(); goStart();
    });
  }

  /* chrome helpers */
  function setFb(cls, html) {
    var f = $('#fb'), m = $('#mas'); f.className = 'fb ' + (cls || ''); f.innerHTML = html || '';
    m.textContent = cls === 'ok' ? '🥳' : cls === 'bad' ? '🤔' : cls === 'hint' ? '💡' : '🦉';
    m.classList.remove('jump'); if (cls) { void m.offsetWidth; m.classList.add('jump'); }
  }
  function setBtns(o) {
    var h = $('#bHint'), m = $('#bMain');
    h.style.visibility = o.hint ? 'visible' : 'hidden'; h.onclick = o.hint || null;
    m.textContent = o.label || 'Tiếp'; m.disabled = !!o.off; m.className = 'btn' + (o.go ? ' go' : ''); m.onclick = o.act || null;
    m.style.visibility = o.label === null ? 'hidden' : 'visible';
  }
  function trail() {
    var t = $('#trail'); t.innerHTML = '';
    L.sections.forEach(function (sec, i) {
      var e = document.createElement('i'); e.dataset.n = i + 1;
      if (S.done[i]) e.className = 'done';
      else if (screen === 'step' && S.sec === i) e.className = 'now';
      t.appendChild(e);
    });
  }
  function stage(html) { var s = $('#stage'); s.innerHTML = html; s.scrollTop = 0; return s; }

  /* ---------- screens ---------- */
  function goStart() {
    screen = 'start'; trail(); setFb('', '');
    var has = S.started;
    stage('<div class="center"><div class="big">' + L.icon + '</div><h2>' + L.title + '</h2><p>' + L.intro + '</p>' +
      '<div class="row">' + (has ? '<button class="btn" id="cont">Tiếp tục</button><button class="btn alt" id="rest">Học lại từ đầu</button>' : '<button class="btn" id="go">Bắt đầu</button>') + '</div></div>');
    setBtns({ label: null });
    if (has) { $('#cont').onclick = function () { fullscreen(); goMap(true); }; $('#rest').onclick = askRestart; }
    else $('#go').onclick = function () { S.started = true; save(); fullscreen(); goMap(); };
  }
  function fullscreen() { try { if (!document.fullscreenElement) document.documentElement.requestFullscreen(); } catch (e) {} }

  function unlocked(i) { return G.teacher || i === 0 || S.done[i - 1]; }
  function goMap(resume) {
    if (resume && !S.fin && S.pos > 0 && !S.done[S.sec]) { openSection(S.sec, S.pos); return; }
    screen = 'map'; trail(); setFb('', '');
    var h = '<div class="tag">BẢN ĐỒ</div><div class="map">';
    L.sections.forEach(function (sec, i) {
      var d = S.done[i], lk = !unlocked(i), now = !d && !lk;
      h += '<button class="node ' + (d ? 'done' : lk ? 'lock' : 'now') + '" data-i="' + i + '"' + (lk ? ' disabled' : '') + '><span class="ic">' + sec.icon + '</span><span><b>' + sec.title + '</b><br><small>' + sec.en + '</small></span><span class="st">' + (d ? sec.badge : lk ? '🔒' : '▶️') + '</span></button>';
    });
    var allDone = L.sections.every(function (_, i) { return S.done[i]; });
    var fin = allDone || G.teacher;
    h += '<button class="node ' + (S.fin ? 'done' : fin ? 'now' : 'lock') + '" id="nFin"' + (fin ? '' : ' disabled') + '><span class="ic">🏆</span><span><b>Tổng kết</b><br><small>Nói lại bằng lời của em · Kết quả</small></span><span class="st">' + (fin ? '▶️' : '🔒') + '</span></button>';
    var fc = S.fin || G.teacher;
    h += '<button class="node ' + (fc ? 'now' : 'lock') + '" id="nFc"' + (fc ? '' : ' disabled') + '><span class="ic">🃏</span><span><b>Thẻ ghi nhớ</b><br><small>Mở khi hoàn thành bài</small></span><span class="st">' + (fc ? '▶️' : '🔒') + '</span></button></div>';
    stage(h);
    document.querySelectorAll('.node[data-i]').forEach(function (b) { b.onclick = function () { openSection(+b.dataset.i, 0); }; });
    $('#nFin').onclick = goExplain; $('#nFc').onclick = function () { fcI = 0; fcFlip = false; goCards(); };
    setBtns({ label: null });
  }

  function openSection(i, pos) {
    reviewMode = false; S.sec = i; Q = L.sections[i].steps.slice(); S.pos = pos || 0; save(); showStep();
  }

  function showStep() {
    if (S.pos >= Q.length) {
      if (reviewMode) { goResult(); return; }
      S.done[S.sec] = true; S.pos = 0; save(); sectionDone(); return;
    }
    screen = 'step'; trail(); setFb('', '');
    var st = Q[S.pos]; cur = { st: st, ans: null, checked: false, hinted: false, retry: !!st.retry };
    if (st.type === 'learn') return viewLearn(st);
    if (st.type === 'chat') return viewChat(st);
    viewQ(st);
  }
  function next() { S.pos++; save(); showStep(); }

  function sectionDone() {
    var sec = L.sections[S.sec]; screen = 'map'; trail(); setFb('', '');
    beep(true);
    stage('<div class="center"><div class="big">' + sec.badge + '</div><h2>Huy hiệu mới!</h2><p><b>' + sec.title + '</b> – em đã hoàn thành.</p></div>');
    setBtns({ label: 'Về bản đồ', act: function () { goMap(); } });
  }

  /* ---------- learn / chat ---------- */
  function viewLearn(st) {
    var h = '<div class="learn"><div class="tag">HỌC</div><div class="big">' + st.icon + '</div><h2>' + st.title + '</h2><ul>';
    st.lines.forEach(function (l) { h += '<li><span class="e">' + l[0] + '</span><span>' + l[1] + '</span></li>'; });
    h += '</ul>' + (st.note ? '<div class="note">💬 ' + st.note + '</div>' : '') + '</div>';
    stage(h); setBtns({ label: 'Tiếp', act: next });
  }
  function viewChat(st) {
    var n = 0;
    stage('<div class="tag">TRÒ CHUYỆN</div><h2 style="margin:0 0 12px">' + st.title + '</h2><div class="chat" id="chat"></div>');
    function add() {
      var m = st.msgs[n++], d = document.createElement('div');
      d.className = 'msg ' + (m[0] === 'u' ? 'u' : 'a'); d.innerHTML = '<small>' + (m[0] === 'u' ? '🧒 Em' : m[0] === 's' ? '🔎 Công cụ tìm kiếm' : '🤖 AI') + '</small>' + m[1];
      $('#chat').appendChild(d); d.scrollIntoView({ block: 'nearest' });
      setBtns({ label: n < st.msgs.length ? 'Tiếp tục chat' : 'Tiếp', act: n < st.msgs.length ? add : next });
    }
    add();
  }

  /* ---------- questions ---------- */
  function viewQ(st) {
    var h = '<div class="tag' + (st.extra ? ' extra' : '') + '">' + (st.extra ? '⭐ LUYỆN THÊM' : (st.type === 'drop' ? 'KÉO THẢ' : 'CÂU HỎI')) + (cur.retry ? ' · ÔN LẠI' : '') + '</div>';
    var T = TYPES[st.type]; h += T.render(st); stage(h);
    setBtns({ label: 'Kiểm tra', off: true, hint: showHint, act: check });
    T.bind(st);
  }
  function ready(v) { $('#bMain').disabled = !v; }
  function showHint() { cur.hinted = true; setFb('hint', '💡 ' + cur.st.hint); }

  function check() {
    if (cur.checked) { next(); return; }
    var st = cur.st, r = TYPES[st.type].check(st); cur.checked = true;
    var first = !(st.id in S.stat) && !cur.retry;
    if (first) S.stat[st.id] = r ? 'ok' : 'bad';
    if (r) {
      S.miss = S.miss.filter(function (x) { return x !== st.id; });
      setFb('ok', '<b>✔ Chính xác! 🎉</b> ' + st.exp);
    } else {
      if (S.miss.indexOf(st.id) < 0) S.miss.push(st.id);
      setFb('bad', '<b>✖ Chưa đúng – không sao, em thử lại sau nhé! 💪</b> ' + st.exp);
      if (!cur.retry && !reviewMode && st.id !== L.explain.id) { var c = Object.assign({}, st); c.retry = true; Q.splice(Math.min(S.pos + 4, Q.length), 0, c); }
    }
    beep(r); save();
    var lastQ = S.pos + 1 >= Q.length;
    setBtns({ label: lastQ ? 'Xong' : 'Tiếp', go: r, act: next });
    if (st.id === L.explain.id) setBtns({ label: 'Xem kết quả', go: r, act: function () { S.explain = true; S.fin = true; save(); goResult(); } });
  }

  function opts(st) { return shuffle(st.opts.map(function (t, i) { return { t: t, i: i }; })); }
  var TYPES = {};

  TYPES.single = {
    render: function (st) {
      cur.o = opts(st);
      return '<p class="q">' + st.q + '</p><div class="opts">' + cur.o.map(function (o, k) { return '<button class="opt" data-k="' + k + '"><span class="k">' + 'ABCDEF'[k] + '</span><span>' + o.t + '</span><span class="m"></span></button>'; }).join('') + '</div>';
    },
    bind: function () {
      document.querySelectorAll('.opt').forEach(function (b) { b.onclick = function () { if (cur.checked) return; document.querySelectorAll('.opt').forEach(function (x) { x.classList.remove('sel'); }); b.classList.add('sel'); cur.ans = +b.dataset.k; ready(true); }; });
    },
    check: function (st) {
      var ok = cur.o[cur.ans].i === st.a;
      document.querySelectorAll('.opt').forEach(function (b, k) { var right = cur.o[k].i === st.a; if (right) { b.classList.add('ok'); b.querySelector('.m').textContent = '✔'; } else if (k === cur.ans) { b.classList.add('bad'); b.querySelector('.m').textContent = '✖'; } b.classList.remove('sel'); });
      return ok;
    }
  };
  TYPES.multi = {
    render: function (st) {
      cur.o = opts(st); cur.sel = {};
      return '<p class="q">' + st.q + '</p><p class="pickn">Chọn ' + st.a.length + ' đáp án</p><div class="opts">' + cur.o.map(function (o, k) { return '<button class="opt" data-k="' + k + '"><span class="k">' + 'ABCDEF'[k] + '</span><span>' + o.t + '</span><span class="m"></span></button>'; }).join('') + '</div>';
    },
    bind: function (st) {
      document.querySelectorAll('.opt').forEach(function (b) {
        b.onclick = function () { if (cur.checked) return; var k = +b.dataset.k; cur.sel[k] = !cur.sel[k]; b.classList.toggle('sel', cur.sel[k]); ready(Object.keys(cur.sel).filter(function (x) { return cur.sel[x]; }).length === st.a.length); };
      });
    },
    check: function (st) {
      var ok = true;
      document.querySelectorAll('.opt').forEach(function (b, k) {
        var right = st.a.indexOf(cur.o[k].i) >= 0, pick = !!cur.sel[k];
        if (right !== pick) ok = false;
        b.classList.remove('sel');
        if (right) { b.classList.add('ok'); b.querySelector('.m').textContent = '✔'; } else if (pick) { b.classList.add('bad'); b.querySelector('.m').textContent = '✖'; }
      });
      return ok;
    }
  };
  TYPES.table = {
    render: function (st) {
      cur.v = st.rows.map(function () { return -1; });
      return '<p class="q">' + st.q + '</p><div class="tb">' + st.rows.map(function (r, i) { return '<div class="tr" data-i="' + i + '"><div>' + r[0] + '</div>' + st.cols.map(function (c, j) { return '<button class="seg" data-j="' + j + '">' + c + '</button>'; }).join('') + '<div class="m"></div></div>'; }).join('') + '</div>';
    },
    bind: function () {
      document.querySelectorAll('.tr').forEach(function (tr) {
        tr.querySelectorAll('.seg').forEach(function (b) { b.onclick = function () { if (cur.checked) return; cur.v[+tr.dataset.i] = +b.dataset.j; tr.querySelectorAll('.seg').forEach(function (x) { x.classList.toggle('sel', x === b); }); ready(cur.v.every(function (x) { return x >= 0; })); }; });
      });
    },
    check: function (st) {
      var ok = true;
      document.querySelectorAll('.tr').forEach(function (tr, i) {
        var right = cur.v[i] === st.rows[i][1]; if (!right) ok = false;
        tr.classList.add(right ? 'ok' : 'bad'); tr.querySelector('.m').textContent = right ? '✔ Đúng' : '✖ Đáp án: ' + st.cols[st.rows[i][1]];
      });
      return ok;
    }
  };
  TYPES.select = {
    render: function (st) {
      var n = 0;
      var html = st.text.replace(/\{(\d+)\}/g, function (_, i) { return '<select class="dd" data-i="' + i + '"><option value="">…</option>' + shuffle(st.opts[i]).map(function (o) { return '<option>' + o + '</option>'; }).join('') + '</select>'; });
      return '<p class="q">' + st.q + '</p><div class="sent">' + html + '</div>';
    },
    bind: function (st) {
      document.querySelectorAll('.dd').forEach(function (s) { s.onchange = function () { if (cur.checked) return; ready(Array.prototype.every.call(document.querySelectorAll('.dd'), function (x) { return x.value; })); }; });
    },
    check: function (st) {
      var ok = true;
      document.querySelectorAll('.dd').forEach(function (s) { var right = s.value === st.ans[+s.dataset.i]; if (!right) ok = false; s.classList.add(right ? 'ok' : 'bad'); if (!right) s.insertAdjacentHTML('afterend', ' <b style="color:var(--ok)">✔ ' + st.ans[+s.dataset.i] + '</b>'); s.disabled = true; });
      return ok;
    }
  };
  TYPES.drop = {
    render: function (st) {
      cur.fill = st.ans.map(function () { return null; }); cur.pick = null;
      var html = st.text.replace(/\{(\d+)\}/g, function (_, i) { return '<span class="blank" data-i="' + i + '" tabindex="0">&nbsp;</span>'; });
      cur.bank = shuffle(st.ans.concat(st.decoy || []));
      return '<p class="q">' + st.q + '</p><div class="sent">' + html + '</div><div class="bank">' + cur.bank.map(function (t, k) { return '<button class="chip" draggable="true" data-k="' + k + '">' + t + '</button>'; }).join('') + '</div>';
    },
    bind: function (st) {
      function paint() {
        document.querySelectorAll('.blank').forEach(function (b) { var v = cur.fill[+b.dataset.i]; b.innerHTML = v === null ? '&nbsp;' : cur.bank[v]; });
        document.querySelectorAll('.chip').forEach(function (c) { var k = +c.dataset.k; c.classList.toggle('used', cur.fill.indexOf(k) >= 0); c.classList.toggle('sel', cur.pick === k); });
        document.querySelectorAll('.blank').forEach(function (b) { b.classList.toggle('hot', cur.pick !== null); });
        ready(cur.fill.every(function (x) { return x !== null; }));
      }
      function put(i, k) { var old = cur.fill.indexOf(k); if (old >= 0) cur.fill[old] = null; cur.fill[i] = k; cur.pick = null; paint(); }
      document.querySelectorAll('.chip').forEach(function (c) {
        c.onclick = function () { if (cur.checked) return; cur.pick = cur.pick === +c.dataset.k ? null : +c.dataset.k; paint(); };
        c.ondragstart = function (e) { e.dataTransfer.setData('text', c.dataset.k); };
      });
      document.querySelectorAll('.blank').forEach(function (b) {
        b.onclick = function () { if (cur.checked) return; var i = +b.dataset.i; if (cur.pick !== null) put(i, cur.pick); else { cur.fill[i] = null; paint(); } };
        b.ondragover = function (e) { e.preventDefault(); };
        b.ondrop = function (e) { e.preventDefault(); if (!cur.checked) put(+b.dataset.i, +e.dataTransfer.getData('text')); };
      });
      paint();
    },
    check: function (st) {
      var ok = true;
      document.querySelectorAll('.blank').forEach(function (b) {
        var i = +b.dataset.i, right = cur.bank[cur.fill[i]] === st.ans[i]; if (!right) ok = false;
        b.classList.remove('hot'); b.classList.add(right ? 'ok' : 'bad'); b.innerHTML = (right ? '✔ ' : '✖ ') + cur.bank[cur.fill[i]] + (right ? '' : ' → ' + st.ans[i]);
      });
      return ok;
    }
  };
  TYPES.order = {
    render: function (st) {
      cur.list = shuffle(st.items.map(function (t, i) { return { t: t, i: i }; }));
      if (cur.list.every(function (x, k) { return x.i === k; })) cur.list.reverse();
      return '<p class="q">' + st.q + '</p><div class="ord" id="ord"></div>';
    },
    bind: function (st) {
      function paint() {
        $('#ord').innerHTML = cur.list.map(function (x, k) { return '<div class="ol"><span class="n">' + (k + 1) + '</span><span class="t">' + x.t + '</span><button class="mv" data-k="' + k + '" data-d="-1" title="Lên">▲</button><button class="mv" data-k="' + k + '" data-d="1" title="Xuống">▼</button></div>'; }).join('');
        document.querySelectorAll('.mv').forEach(function (b) {
          b.onclick = function () { if (cur.checked) return; var k = +b.dataset.k, j = k + +b.dataset.d; if (j < 0 || j >= cur.list.length) return; var t = cur.list[k]; cur.list[k] = cur.list[j]; cur.list[j] = t; paint(); };
        });
      }
      paint(); ready(true);
    },
    check: function (st) {
      var ok = true;
      document.querySelectorAll('.ol').forEach(function (r, k) { var right = cur.list[k].i === k; if (!right) ok = false; r.classList.add(right ? 'ok' : 'bad'); r.querySelectorAll('.mv').forEach(function (b) { b.remove(); }); r.insertAdjacentHTML('beforeend', '<b>' + (right ? '✔' : '✖') + '</b>'); });
      return ok;
    }
  };

  /* ---------- explain-back + result ---------- */
  function goExplain() {
    reviewMode = true; Q = [L.explain]; S.pos = 0; showStep();
    document.querySelector('.tag').textContent = '🗣️ NÓI LẠI BẰNG LỜI CỦA EM';
  }

  function goResult() {
    screen = 'result'; trail(); setFb('', ''); reviewMode = false;
    var tot = GRADED.length, ok = GRADED.filter(function (id) { return S.stat[id] === 'ok'; }).length, pct = tot ? ok / tot : 0;
    var stars = pct >= .9 ? 3 : pct >= .7 ? 2 : 1;
    var miss = S.miss.filter(function (id) { return id !== L.explain.id; });
    var h = '<div class="center"><div class="stars">' + [1, 2, 3].map(function (n) { return '<span class="' + (n > stars ? 'off' : '') + '">⭐</span>'; }).join('') + '</div><h2>' + (stars === 3 ? 'Tuyệt vời!' : stars === 2 ? 'Giỏi lắm!' : 'Cố gắng tốt!') + '</h2><p>Đúng ngay lần đầu: <b>' + ok + '/' + tot + '</b> câu</p>';
    if (miss.length) {
      h += '<div class="miss"><b>📝 Câu cần ôn lại</b>' + miss.map(function (id) { var s = ALL[id]; return '<div class="mi"><b>' + (s.q || '') + '</b><span>' + s.exp + '</span></div>'; }).join('') + '</div>';
    } else h += '<p>🎉 Không còn câu sai nào!</p>';
    h += '</div>'; stage(h);
    save();
    setBtns({ label: miss.length ? 'Luyện lại câu sai' : 'Về bản đồ', act: miss.length ? function () { reviewMode = true; Q = shuffle(miss.map(function (id) { return Object.assign({}, ALL[id]); })); S.pos = 0; showStep(); } : function () { goMap(); } });
  }

  /* ---------- flashcards ---------- */
  function goCards() {
    screen = 'cards'; trail(); setFb('', '');
    var c = L.cards[fcI];
    stage('<div class="center"><div class="tag">THẺ ' + (fcI + 1) + '/' + L.cards.length + '</div><button class="fc" id="fc">' + (fcFlip ? c[1] : '<span>' + c[0] + '<br><small>(chạm để lật)</small></span>') + '</button><div class="row"><button class="btn alt sm" id="fp">◀</button><button class="btn alt sm" id="fn">▶</button></div></div>');
    $('#fc').onclick = function () { fcFlip = !fcFlip; goCards(); };
    $('#fp').onclick = function () { fcI = (fcI + L.cards.length - 1) % L.cards.length; fcFlip = false; goCards(); };
    $('#fn').onclick = function () { fcI = (fcI + 1) % L.cards.length; fcFlip = false; goCards(); };
    setBtns({ label: 'Về bản đồ', act: function () { goMap(); } });
  }

  goStart();
})();

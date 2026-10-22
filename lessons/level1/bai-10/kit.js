/* ============================================================
   KIT "Cửa sổ trình duyệt" — dùng chung cho Level 1 · Bài 10 & Bài 11
   (hai thư mục bai-10 và bai-11 giữ bản sao giống nhau của file này)

   Kit.start({...})   → trang bài học (các thẻ = các bước, đồng hồ 30 phút)
   Kit.review({...})  → trang ôn tập (mỗi lần một câu, có tổng kết)
   Kit.MiniWeb({...}) → trình duyệt thu nhỏ để thực hành
   Kit.h              → hàm tạo phần tử DOM
   ============================================================ */
(function (global) {
  'use strict';

  /* ---------- Tiện ích ---------- */
  function h(tag, attrs) {
    const e = document.createElement(tag);
    for (const k in attrs || {}) {
      const v = attrs[k];
      if (v == null || v === false) continue;
      if (k === 'class') e.className = v;
      else if (k === 'html') e.innerHTML = v;
      else if (k.slice(0, 2) === 'on') e.addEventListener(k.slice(2), v);
      else e.setAttribute(k, v === true ? '' : v);
    }
    for (let i = 2; i < arguments.length; i++) append(e, arguments[i]);
    return e;
  }
  function append(e, c) {
    if (c == null || c === false) return;
    if (Array.isArray(c)) { c.forEach(x => append(e, x)); return; }
    e.append(c.nodeType ? c : document.createTextNode(c));
  }
  const ICON = {
    back: '<svg viewBox="0 0 24 24"><path d="M19 12H5M11 6l-6 6 6 6"/></svg>',
    fwd: '<svg viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
    reload: '<svg viewBox="0 0 24 24"><path d="M20 12a8 8 0 1 1-2.6-5.9"/><path d="M20 4v5h-5"/></svg>',
    stop: '<svg viewBox="0 0 24 24"><path d="M6 6l12 12M18 6L6 18"/></svg>',
    home: '<svg viewBox="0 0 24 24"><path d="M4 11l8-7 8 7"/><path d="M6 10v10h12V10"/></svg>',
    star: '<svg viewBox="0 0 24 24"><path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z"/></svg>',
    dots: '<svg viewBox="0 0 24 24" style="fill:currentColor;stroke:none"><circle cx="12" cy="5" r="1.8"/><circle cx="12" cy="12" r="1.8"/><circle cx="12" cy="19" r="1.8"/></svg>'
  };
  const LET = 'ABCDEFGH';
  function shuffle(a) {
    a = a.slice();
    for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
    return a;
  }
  function shuffleNoFixed(n) {
    const base = Array.from({ length: n }, (_, i) => i);
    if (n < 2) return base;
    let s; do { s = shuffle(base); } while (s.every((v, i) => v === i));
    return s;
  }
  const Store = {
    key: 'k6-kit', d: {},
    init(key) { this.key = key; try { this.d = JSON.parse(localStorage.getItem(key) || '{}') || {}; } catch (e) { this.d = {}; } },
    save() { try { localStorage.setItem(this.key, JSON.stringify(this.d)); } catch (e) {} },
    get(k, def) { return this.d[k] === undefined ? def : this.d[k]; },
    set(k, v) { this.d[k] = v; this.save(); },
    wipe() { this.d = {}; try { localStorage.removeItem(this.key); } catch (e) {} }
  };
  let toastEl, toastT;
  function toast(msg) {
    if (!toastEl) { toastEl = h('div', { class: 'toast', role: 'status' }); document.body.append(toastEl); }
    toastEl.textContent = msg; toastEl.classList.add('show');
    clearTimeout(toastT); toastT = setTimeout(() => toastEl.classList.remove('show'), 2200);
  }
  const Theme = {
    key: 'k6-theme',
    init() {
      let t = null; try { t = localStorage.getItem(this.key); } catch (e) {}
      if (!t) t = matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      this.set(t, true);
    },
    set(t, noSave) {
      document.documentElement.dataset.theme = t;
      if (!noSave) { try { localStorage.setItem(this.key, t); } catch (e) {} }
    },
    toggle() { this.set(document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark'); }
  };

  /* ============================================================
     CÂU HỎI — single | multi | tf | match
     QUIZ[key] = { type, question, ... , explain, hint, topic }
     ============================================================ */
  const BUILD = {
    single(q, api) {
      let locked = false;
      const btns = q.options.map((t, i) => h('button', {
        type: 'button', class: 'opt' + (i === q.answer ? ' is-answer' : ''),
        onclick: () => {
          if (locked) return;
          const ok = i === q.answer;
          btns[i].classList.add(ok ? 'right' : 'wrong');
          if (!ok) btns[i].disabled = true;
          api.attempt(ok);
        }
      }, h('span', { class: 'lt' }, LET[i]), h('span', { class: 'tx' }, t)));
      return {
        el: h('div', { class: 'opts' }, btns),
        lock() { locked = true; btns.forEach(b => b.disabled = true); },
        reveal() { btns[q.answer].classList.add('right'); }
      };
    },

    multi(q, api) {
      const sel = new Set(); let locked = false;
      const btns = q.options.map((t, i) => h('button', {
        type: 'button', class: 'opt multi' + (q.answer.includes(i) ? ' is-answer' : ''), 'aria-pressed': 'false',
        onclick: () => {
          if (locked) return;
          sel.has(i) ? sel.delete(i) : sel.add(i);
          btns[i].classList.remove('right', 'wrong');
          btns[i].classList.toggle('on', sel.has(i));
          btns[i].setAttribute('aria-pressed', sel.has(i));
        }
      }, h('span', { class: 'lt' }), h('span', { class: 'tx' }, t)));
      return {
        el: h('div', { class: 'opts' }, btns), needsCheck: true,
        check() {
          if (!sel.size) return null;
          btns.forEach((b, i) => {
            b.classList.toggle('right', sel.has(i) && q.answer.includes(i));
            b.classList.toggle('wrong', sel.has(i) && !q.answer.includes(i));
          });
          return sel.size === q.answer.length && q.answer.every(i => sel.has(i));
        },
        lock() { locked = true; btns.forEach(b => b.disabled = true); },
        reveal() {
          btns.forEach((b, i) => {
            const a = q.answer.includes(i);
            b.classList.toggle('on', a);
            b.classList.toggle('right', a);
            b.classList.toggle('wrong', !a && sel.has(i));
          });
        }
      };
    },

    tf(q, api) {
      const labels = q.labels || ['Đúng', 'Sai'];
      const val = q.statements.map(() => null); let locked = false;
      const rows = [], pills = [];
      q.statements.forEach((s, i) => {
        const mk = v => h('button', {
          type: 'button', class: 'pill' + (s.answer === v ? ' is-ans' : ''),
          onclick: () => { if (locked) return; val[i] = v; rows[i].classList.remove('right', 'wrong'); sync(i); }
        }, labels[v ? 0 : 1]);
        const b1 = mk(true), b0 = mk(false);
        pills.push([b1, b0]);
        rows.push(h('div', { class: 'tf-row' }, h('span', { class: 'tf-t' }, s.text), h('div', { class: 'tf-b' }, b1, b0)));
      });
      function sync(i) { pills[i][0].classList.toggle('on', val[i] === true); pills[i][1].classList.toggle('on', val[i] === false); }
      return {
        el: h('div', { class: 'tf' }, rows), needsCheck: true,
        incompleteMsg: 'Em hãy chọn cho tất cả các phát biểu nhé.',
        check() {
          if (val.some(v => v === null)) return null;
          let all = true;
          q.statements.forEach((s, i) => { const ok = val[i] === s.answer; if (!ok) all = false; rows[i].classList.toggle('right', ok); rows[i].classList.toggle('wrong', !ok); });
          return all;
        },
        lock() { locked = true; pills.forEach(p => p.forEach(b => b.disabled = true)); },
        reveal() {
          q.statements.forEach((s, i) => { const ok = val[i] === s.answer; val[i] = s.answer; sync(i); rows[i].classList.add(ok ? 'right' : 'wrong'); });
        },
        done() {
          q.statements.forEach((s, i) => { if (s.why) rows[i].append(h('span', { class: 'tf-why' }, '➜ ' + s.why)); });
        }
      };
    },

    match(q, api) {
      const n = q.pairs.length, asg = Array(n).fill(-1);
      let active = 0, locked = false;
      const order = shuffleNoFixed(n);
      const slots = [], rowEls = [];
      q.pairs.forEach((p, i) => {
        const slot = h('button', {
          type: 'button', class: 'slot', 'aria-label': 'Ô trả lời ' + (i + 1),
          onclick: () => { if (locked) return; asg[i] = -1; active = i; paint(); }
        });
        slots.push(slot);
        const left = h('div', { class: 'm-left' },
          p.leftImg ? h('img', { class: 'm-img', src: p.leftImg, alt: p.leftAlt || '' }) : null,
          p.sym ? h('span', { class: 'm-sym' }, p.sym) : null,
          p.left ? h('span', {}, p.left) : null);
        rowEls.push(h('div', { class: 'm-row' }, left, slot));
      });
      const chips = order.map(j => h('button', { type: 'button', class: 'chipx', onclick: () => assign(j) }, q.pairs[j].right));
      function assign(j) {
        if (locked) return;
        const prev = asg.indexOf(j); if (prev >= 0) asg[prev] = -1;
        if (active < 0 || asg[active] !== -1) active = asg.indexOf(-1);
        if (active < 0) return;
        asg[active] = j;
        active = asg.indexOf(-1);
        paint();
      }
      function paint() {
        slots.forEach((s, i) => {
          s.classList.remove('act', 'full');
          if (asg[i] >= 0) { s.classList.add('full'); s.textContent = q.pairs[asg[i]].right; }
          else if (i === active) { s.textContent = 'Đang chọn… bấm một đáp án bên dưới'; s.classList.add('act'); }
          else s.textContent = 'Chạm để chọn ô này';
        });
        chips.forEach((c, k) => c.classList.toggle('used', asg.includes(order[k])));
      }
      paint();
      return {
        el: h('div', {}, h('div', { class: 'm-rows' }, rowEls), h('div', { class: 'm-bank' }, chips)),
        needsCheck: true, incompleteMsg: 'Em hãy ghép đủ tất cả các cặp rồi mới kiểm tra nhé.',
        check() {
          if (asg.some(v => v < 0)) return null;
          let all = true;
          asg.forEach((j, i) => { const ok = j === i; if (!ok) all = false; slots[i].classList.toggle('right', ok); slots[i].classList.toggle('wrong', !ok); });
          return all;
        },
        lock() { locked = true; chips.forEach(c => c.disabled = true); slots.forEach(s => s.disabled = true); },
        reveal() {
          asg.forEach((j, i) => { slots[i].classList.remove('wrong'); asg[i] = i; });
          paint(); slots.forEach(s => s.classList.add('right'));
          chips.forEach(c => c.classList.remove('used'));
        }
      };
    }
  };

  function makeQuestion(key, q, o) {
    o = o || {};
    const root = h('section', { class: 'q q-' + q.type, 'data-key': key });
    const st = { first: null, done: false };
    const fb = h('div', { class: 'q-fb', 'aria-live': 'polite' });
    const api = { attempt, nudge };
    const B = BUILD[q.type](q, api);
    const chk = B.needsCheck ? h('button', { type: 'button', class: 'btn', onclick: onCheck }, 'Kiểm tra') : null;
    append(root, [
      h('div', { class: 'q-head' },
        o.label ? h('span', { class: 'q-num' }, o.label) : null,
        q.topic ? h('span', { class: 'q-topic' }, '# ' + q.topic) : null),
      h('p', { class: 'q-text' }, q.question),
      q.sub ? h('p', { class: 'q-sub' }, q.sub) : null,
      B.el,
      chk ? h('div', { class: 'q-actions' }, chk) : null,
      fb]);
    function onCheck() {
      if (st.done) return;
      const r = B.check();
      if (r === null) { nudge(B.incompleteMsg || 'Em hãy chọn đáp án trước nhé.'); return; }
      attempt(r);
    }
    function nudge(msg) { fb.className = 'q-fb nudge'; fb.textContent = msg; }
    function attempt(ok) {
      if (st.done) return;
      if (st.first === null) st.first = ok;
      if (ok) settle();
      else if (o.mode === 'review') { B.reveal(); settle(); }
      else {
        fb.className = 'q-fb bad';
        fb.textContent = '✖ Chưa đúng. ' + (q.hint || 'Em thử lại nhé!');
        root.classList.remove('shake'); void root.offsetWidth; root.classList.add('shake');
      }
    }
    function settle() {
      st.done = true; B.lock(); if (chk) chk.remove();
      root.classList.add('is-done'); if (B.done) B.done();
      const first = st.first === true;
      fb.className = 'q-fb good';
      fb.replaceChildren(
        h('b', {}, first ? '✔ Chính xác! ' : (o.mode === 'review' ? 'ℹ Đáp án đúng đã hiện màu xanh. ' : '✔ Đúng rồi! ')),
        q.explain || '');
      if (o.onDone) o.onDone(first);
    }
    if (o.restore) { st.first = o.restore === 1; B.reveal(); settle(); }
    return root;
  }

  /* ============================================================
     NHIỆM VỤ THỰC HÀNH
     ============================================================ */
  function Missions(list, onAll) {
    const done = new Set();
    const items = list.map(m => h('li', {}, h('span', {}, m.text)));
    const all = h('div', { class: 'allok' }, '🎉 Hoàn thành tất cả nhiệm vụ!');
    const el = h('aside', { class: 'missions' }, h('h4', {}, 'Nhiệm vụ'), h('ol', {}, items), all);
    function tick(id) {
      const i = list.findIndex(m => m.id === id);
      if (i < 0 || done.has(id)) return;
      done.add(id); items[i].classList.add('ok');
      if (done.size === list.length) { el.classList.add('complete'); if (onAll) onAll(); }
    }
    return { el, tick };
  }

  /* ============================================================
     TRÌNH DUYỆT THU NHỎ — các trang web giả lập để thực hành
     ============================================================ */
  const SITES = {
    'truong-em.edu.vn': {
      title: 'Trường Em', em: '🏫', c: '#2d7d84',
      lead: 'Chào mừng em đến với trang web của trường!',
      text: 'Hôm nay có gì mới? Bấm vào các siêu liên kết bên dưới để khám phá nhé.',
      links: [['Thư viện xanh', 'thuvien.edu.vn'], ['Khám phá khoa học', 'khampha.edu.vn'], ['Góc trò chơi', 'trochoi.edu.vn']]
    },
    'thuvien.edu.vn': {
      title: 'Thư viện xanh', em: '📚', c: '#3c8a4d',
      lead: 'Hàng nghìn cuốn sách hay dành cho học sinh lớp 6.',
      text: 'Chọn một chủ đề em thích rồi cùng đọc nào!',
      links: [['Về trang chủ của trường', 'truong-em.edu.vn'], ['Khám phá khoa học', 'khampha.edu.vn']]
    },
    'khampha.edu.vn': {
      title: 'Khám phá khoa học', em: '🔬', c: '#7a4fc4', slow: true,
      lead: 'Vì sao trời có cầu vồng?',
      text: 'Trang này có nhiều hình ảnh nên tải khá lâu. Em có thể bấm Stop để dừng tải nếu không muốn chờ.',
      links: [['Thư viện xanh', 'thuvien.edu.vn'], ['Góc trò chơi', 'trochoi.edu.vn']]
    },
    'trochoi.edu.vn': {
      title: 'Góc trò chơi', em: '🎲', c: '#d0612b',
      lead: 'Câu đố vui mỗi ngày!',
      text: 'Thử tài suy luận của em với các câu đố và trò chơi trí tuệ.',
      links: [['Về trang chủ của trường', 'truong-em.edu.vn'], ['Thư viện xanh', 'thuvien.edu.vn']]
    }
  };
  const DAYS = ['Chủ nhật', 'Thứ hai', 'Thứ ba', 'Thứ tư', 'Thứ năm', 'Thứ sáu', 'Thứ bảy'];
  const p2 = n => String(n).padStart(2, '0');
  const hm = d => p2(d.getHours()) + ':' + p2(d.getMinutes());
  function normHost(t) { return String(t).trim().toLowerCase().replace(/^https?:\/\//, '').replace(/^www\./, '').split(/[\/?#]/)[0]; }

  function MiniWeb(o) {
    o = Object.assign({ nav: true, bookmarks: false, history: false, seedBookmarks: [], seedVisits: [], start: 'truong-em.edu.vn', mission() {} }, o);
    const now = Date.now();
    const st = {
      hist: [], idx: -1, cur: null, loading: false, stopped: false, timer: 0, loadedAt: null,
      bms: o.seedBookmarks.map(host => ({ host, name: SITES[host].title })),
      visits: o.seedVisits.map(v => ({ host: v.host, t: new Date(now - v.mins * 60000) })),
      pop: null, newBm: false
    };
    const ib = (ic, title, fn, cls) => h('button', { type: 'button', class: 'nbtn' + (cls ? ' ' + cls : ''), title, 'aria-label': title, html: ICON[ic], onclick: fn });
    const bBack = ib('back', 'Back — quay lại trang vừa xem trước đó', () => nav(-1));
    const bFwd = ib('fwd', 'Forward — đi tiếp tới trang đã xem sau trang này', () => nav(1));
    const bRel = ib('reload', 'Refresh — tải lại trang', reloadOrStop);
    const bHome = ib('home', 'Home — về trang chủ', goHome);
    const input = h('input', { type: 'text', spellcheck: 'false', autocomplete: 'off', autocapitalize: 'off', 'aria-label': 'Thanh địa chỉ (Address Bar)', placeholder: 'Nhập địa chỉ rồi nhấn Enter' });
    input.addEventListener('keydown', e => { if (e.key === 'Enter') typed(input.value); });
    input.addEventListener('focus', () => input.select());
    const bStar = o.bookmarks ? ib('star', 'Dấu trang (Bookmark) — lưu trang này', starClick, 'mw-star') : null;
    const bMenu = o.history ? ib('dots', 'Menu của Chrome (ba chấm)', menuClick) : null;
    const prog = h('div', { class: 'mw-prog' });
    const tabIc = h('span', {}), tabTx = h('span', {});
    const view = h('div', { class: 'mw-view' });
    const bmBar = o.bookmarks ? h('div', { class: 'mw-bm' }) : null;
    const stL = h('span', {}), stR = h('span', {});
    const root = h('div', { class: 'mw' },
      h('div', { class: 'mw-tabs' }, h('div', { class: 'mw-tab' }, tabIc, tabTx)),
      h('div', { class: 'mw-bar' },
        o.nav ? [bBack, bFwd, bRel, bHome] : null,
        h('div', { class: 'mw-addr' }, input, bStar),
        bMenu),
      bmBar,
      h('div', { style: 'position:relative;flex:1;display:flex;flex-direction:column;min-height:0' }, prog, view),
      h('div', { class: 'mw-status' }, stL, stR));

    /* --- điều hướng --- */
    function visit(entry) {
      st.hist = st.hist.slice(0, st.idx + 1); st.hist.push(entry); st.idx = st.hist.length - 1;
      load(entry, true);
    }
    function nav(d) {
      const i = st.idx + d; if (i < 0 || i >= st.hist.length) return;
      st.idx = i; load(st.hist[i], false); o.mission(d < 0 ? 'back' : 'forward');
    }
    function load(entry, rec) {
      clearTimeout(st.timer); closeAll();
      const site = SITES[entry];
      const ms = site ? (site.slow ? 4000 : 450) : 0;
      st.cur = entry; st.stopped = false; st.loading = ms > 0;
      if (ms > 0) {
        prog.style.transition = 'none'; prog.style.opacity = 1; prog.style.width = '0';
        void prog.offsetWidth; prog.style.transition = 'width ' + ms + 'ms linear'; prog.style.width = '92%';
      }
      render();
      const fin = () => {
        st.loading = false; st.loadedAt = new Date();
        if (rec && site) st.visits.push({ host: entry, t: new Date() });
        prog.style.transition = 'width .15s'; prog.style.width = '100%';
        setTimeout(() => { prog.style.opacity = 0; }, 200);
        render();
      };
      if (ms > 0) st.timer = setTimeout(fin, ms); else fin();
    }
    function reloadOrStop() {
      if (st.loading) { clearTimeout(st.timer); st.loading = false; st.stopped = true; prog.style.transition = 'none'; prog.style.opacity = 0; render(); o.mission('stop'); return; }
      if (st.cur == null) return;
      load(st.cur, false); o.mission('refresh');
    }
    function goHome() { visit(o.start); o.mission('home'); }
    function typed(txt) {
      const host = normHost(txt); if (!host) return;
      if (SITES[host]) { visit(host); o.mission('typed:' + host); }
      else { visit('@err:' + txt.trim()); o.mission('typedBad'); }
    }
    function openHistory() { if (st.cur !== '@history') visit('@history'); o.mission('history'); }

    /* --- dấu trang --- */
    const bmIdx = host => st.bms.findIndex(b => b.host === host);
    function starClick() {
      if (!SITES[st.cur] || st.loading) return;
      let i = bmIdx(st.cur);
      if (i < 0) { st.bms.push({ host: st.cur, name: SITES[st.cur].title }); i = st.bms.length - 1; st.newBm = true; }
      renderBm(); openPop(i);
    }
    function openPop(i) {
      closeAll();
      const b = st.bms[i], inp = h('input', { type: 'text', value: b.name, 'aria-label': 'Tên dấu trang', maxlength: '40' });
      const fin = () => { b.name = inp.value.trim() || SITES[b.host].title; closeAll(); renderBm(); if (st.newBm) { st.newBm = false; o.mission('bmAdd'); } };
      inp.addEventListener('keydown', e => { if (e.key === 'Enter') fin(); });
      const pop = h('div', { class: 'pop', style: 'right:12px;top:88px', role: 'dialog' },
        h('h4', {}, 'Edit bookmark'),
        h('label', {}, h('span', {}, 'Name'), h('span', {}, inp, h('span', { class: 'step' }, 'B2 · Đặt tên'))),
        h('div', { class: 'pop-act' },
          h('button', { type: 'button', class: 'pb', onclick: () => { closeAll(); st.newBm = false; st.bms.splice(i, 1); renderBm(); o.mission('bmDelete'); } }, 'Remove'),
          h('button', { type: 'button', class: 'pb main', onclick: fin }, 'Done ', h('span', { class: 'step' }, 'B3'))));
      root.append(pop); st.pop = pop; setTimeout(() => { inp.focus(); inp.select(); }, 30);
    }
    function openMenu(x, y, items) {
      closeAll();
      const r = root.getBoundingClientRect();
      const m = h('div', { class: 'menu', role: 'menu', style: 'left:' + Math.max(4, Math.min(x - r.left, r.width - 215)) + 'px;top:' + Math.min(y - r.top, r.height - 160) + 'px' },
        items.map(it => it === '-' ? h('hr') : h('button', { type: 'button', disabled: !it.fn, onclick: () => { closeAll(); it.fn && it.fn(); } }, h('span', {}, it.t), it.k ? h('kbd', {}, it.k) : null)));
      root.append(m); st.pop = m;
    }
    function closeAll() { if (st.pop) { st.pop.remove(); st.pop = null; } }
    function menuClick(e) {
      const r = bMenu.getBoundingClientRect();
      openMenu(r.right - 210, r.bottom + 4, [
        { t: 'New tab', k: 'Ctrl+T' }, { t: 'New window', k: 'Ctrl+N' }, '-',
        { t: 'History', k: 'Ctrl+H', fn: openHistory },
        { t: 'Downloads', k: 'Ctrl+J' }, { t: 'Bookmarks' }, '-', { t: 'Settings' }
      ]);
      e.stopPropagation();
    }
    function bmMenu(i, x, y) {
      openMenu(x, y, [
        { t: 'Open in new tab' }, { t: 'Open in new window' }, '-',
        { t: 'Edit…', fn: () => openPop(i) },
        '-', { t: 'Delete', fn: () => { st.bms.splice(i, 1); renderBm(); o.mission('bmDelete'); } }
      ]);
    }
    function renderBm() {
      if (!bmBar) return;
      bmBar.replaceChildren();
      if (!st.bms.length) { bmBar.append(h('span', { class: 'empty' }, 'Chưa có dấu trang. Hãy bấm ngôi sao ☆ trên thanh địa chỉ.')); }
      st.bms.forEach((b, i) => {
        let lp = 0, longDone = false;
        const el = h('button', { type: 'button', class: 'bm', title: 'Bấm để mở · nhấp phải (hoặc chạm giữ) để sửa/xóa' }, h('i', {}, '★'), b.name);
        el.addEventListener('click', () => { if (longDone) { longDone = false; return; } visit(b.host); o.mission('bmOpen'); });
        el.addEventListener('contextmenu', e => { e.preventDefault(); bmMenu(i, e.clientX, e.clientY); });
        el.addEventListener('pointerdown', e => { if (e.pointerType === 'mouse') return; lp = setTimeout(() => { longDone = true; bmMenu(i, e.clientX, e.clientY); }, 550); });
        ['pointerup', 'pointerleave', 'pointercancel'].forEach(ev => el.addEventListener(ev, () => clearTimeout(lp)));
        bmBar.append(el);
      });
      if (bStar) bStar.classList.toggle('on', bmIdx(st.cur) >= 0);
    }

    /* --- vẽ trang --- */
    function sitePage(host) {
      const s = SITES[host];
      return h('div', { class: 'site' },
        h('div', { class: 'site-hero', style: '--c:' + s.c }, h('div', { class: 'em' }, s.em), h('div', {}, h('h2', {}, s.title), h('p', {}, s.lead))),
        h('div', { class: 'site-body' },
          h('p', {}, s.text),
          h('p', {}, h('b', {}, 'Siêu liên kết:')),
          h('ul', {}, s.links.map(l => h('li', {}, h('a', { class: 'hl', href: '#', onclick: e => { e.preventDefault(); o.mission('link'); visit(l[1]); } }, l[0]), h('small', { style: 'color:#8a93a4' }, '  → ' + l[1]))))),
        h('div', { class: 'site-foot' }, 'Trang mô phỏng để luyện tập · Tải lúc ' + (st.loadedAt ? hm(st.loadedAt) + ':' + p2(st.loadedAt.getSeconds()) : '--')));
    }
    function msgPage(em, title, text) {
      return h('div', { class: 'site-msg' }, h('div', { class: 'big' }, em), h('h2', {}, title), h('p', {}, text));
    }
    function histPage() {
      const d = new Date(), rows = st.visits.slice().reverse();
      return h('div', { class: 'hist' },
        h('h3', {}, 'History'),
        h('div', { class: 'day' }, h('span', { class: 'badge' }, '1'), 'Hôm nay – ' + DAYS[d.getDay()] + ', ' + p2(d.getDate()) + '/' + p2(d.getMonth() + 1) + '/' + d.getFullYear()),
        h('div', { class: 'rows' },
          h('div', { class: 'hr', style: 'background:#fafbfd;cursor:default' }, h('span'), h('span', { class: 'badge' }, '2'), h('span', {}, h('span', { class: 'badge' }, '3'))),
          rows.map(v => h('button', { type: 'button', class: 'hr', title: 'Bấm để mở lại trang này', onclick: () => { o.mission('histVisit'); visit(v.host); } },
            h('span', { class: 'bx' }), h('span', { class: 'tm' }, hm(v.t)),
            h('span', { class: 'ti' }, h('b', {}, SITES[v.host].em), SITES[v.host].title, h('span', { class: 'ho' }, '   ' + v.host))))),
        h('div', { class: 'hist-leg' },
          h('span', {}, h('span', { class: 'badge' }, '1'), 'Ngày truy cập Web'),
          h('span', {}, h('span', { class: 'badge' }, '2'), 'Khung giờ truy cập Web'),
          h('span', {}, h('span', { class: 'badge' }, '3'), 'Danh sách trang Web đã truy cập')));
    }
    function render() {
      const c = st.cur, site = SITES[c];
      bBack.disabled = st.idx <= 0; bFwd.disabled = st.idx >= st.hist.length - 1;
      bRel.innerHTML = st.loading ? ICON.stop : ICON.reload;
      bRel.title = st.loading ? 'Stop — ngừng tải trang' : 'Refresh — tải lại trang';
      bRel.setAttribute('aria-label', bRel.title);
      if (document.activeElement !== input) input.value = site ? 'https://' + c + '/' : c === '@history' ? 'chrome://history' : c && c.slice(0, 5) === '@err:' ? c.slice(5) : '';
      tabIc.textContent = site ? site.em : c === '@history' ? '🕘' : '⚠️';
      tabTx.textContent = site ? site.title : c === '@history' ? 'History' : 'Không tìm thấy trang';
      if (bStar) { bStar.disabled = !site; bStar.classList.toggle('on', bmIdx(c) >= 0); }
      view.replaceChildren();
      if (st.loading) view.append(h('div', { class: 'skeleton' }, h('i'), h('i'), h('i'), h('i')));
      else if (st.stopped) view.append(msgPage('⏹️', 'Đã dừng tải trang', 'Em vừa bấm Stop. Bấm nút Refresh (⟳) để tải lại trang.'));
      else if (site) view.append(sitePage(c));
      else if (c === '@history') view.append(histPage());
      else if (c) view.append(msgPage('🔍', 'Không tìm thấy trang này', 'Địa chỉ "' + c.slice(5) + '" chưa đúng. Hãy kiểm tra lại URL rồi thử lại.'));
      stL.textContent = st.loading ? 'Đang tải ' + c + '…' : st.stopped ? 'Đã dừng' : 'Xong';
      stR.textContent = st.hist.length ? 'Đã xem ' + st.hist.length + ' trang · đang ở trang ' + (st.idx + 1) : '';
    }
    document.addEventListener('pointerdown', e => { if (st.pop && !st.pop.contains(e.target) && !(bMenu && bMenu.contains(e.target)) && !(bStar && bStar.contains(e.target))) { const wasPop = st.pop.classList.contains('pop'); closeAll(); if (wasPop) renderBm(); } });
    if (o.history) document.addEventListener('keydown', e => {
      if (e.ctrlKey && !e.shiftKey && !e.altKey && e.key.toLowerCase() === 'h' && root.isConnected && root.offsetParent !== null) { e.preventDefault(); openHistory(); }
    });
    renderBm(); visit(o.start);
    return { el: root, visit, state: st };
  }

  /* ============================================================
     Khung trang dùng chung (thẻ + thanh công cụ)
     ============================================================ */
  function navBtn(ic, title, fn) { return h('button', { type: 'button', class: 'nbtn', title, 'aria-label': title, html: ICON[ic], onclick: fn }); }
  function themeChip() {
    const b = h('button', { type: 'button', class: 'chip', title: 'Đổi sáng / tối', 'aria-label': 'Đổi giao diện sáng / tối', onclick: () => { Theme.toggle(); sync(); } });
    function sync() { b.textContent = document.documentElement.dataset.theme === 'dark' ? '☀️' : '🌙'; }
    sync(); return b;
  }
  function timerChip(totalSec) {
    let left = totalSec, run = false, iv = 0;
    const b = h('button', { type: 'button', class: 'chip timer', title: 'Hẹn giờ cho cả buổi học (bấm để bắt đầu / tạm dừng)', onclick: toggle });
    function fmt() { return p2(Math.floor(left / 60)) + ':' + p2(left % 60); }
    function paint() {
      b.textContent = (run ? '⏱ ' : '▶ ') + (left > 0 ? fmt() : 'Hết giờ');
      b.classList.toggle('run', run && left > 300); b.classList.toggle('late', run && left <= 300 && left > 0); b.classList.toggle('over', left <= 0);
    }
    function toggle() {
      if (left <= 0) { left = totalSec; run = false; clearInterval(iv); paint(); return; }
      run = !run; clearInterval(iv);
      if (run) iv = setInterval(() => { left--; if (left <= 0) { left = 0; run = false; clearInterval(iv); toast('⏰ Hết 30 phút rồi!'); } paint(); }, 1000);
      paint();
    }
    paint(); return b;
  }

  /* ============================================================
     TRANG BÀI HỌC
     ============================================================ */
  function start(cfg) {
    Store.init(cfg.storeKey); Theme.init();
    document.documentElement.dataset.accent = cfg.accent || 'teal';
    if (/[?&]gv=1/.test(location.search)) Store.set('gv', true);
    document.body.classList.toggle('gv', !!Store.get('gv', false));
    const app = document.getElementById('app');
    const secs = cfg.sections, N = secs.length;
    const doneMap = Store.get('done', {});
    const total = secs.reduce((a, s) => a + s.min, 0);
    let cur = Math.min(Math.max(+Store.get('cur', 0) || 0, 0), N - 1);
    const tabs = [], panes = [], built = [], tasks = secs.map(() => ({})), foots = [];

    const strip = h('div', { class: 'tabstrip', role: 'tablist', 'aria-label': 'Các bước của bài học' });
    secs.forEach((s, i) => {
      const b = h('button', { type: 'button', class: 'tab', role: 'tab', title: s.title + ' · ' + s.min + ' phút', onclick: () => show(i) },
        h('span', { class: 't-ic' }, s.icon), h('span', { class: 't-tx' }, s.tab || s.title),
        h('span', { class: 't-min' }, s.min + '′'), h('span', { class: 't-ck', 'aria-hidden': 'true' }, '✓'));
      tabs.push(b); strip.append(b);
    });
    const bPrev = navBtn('back', 'Bước trước (phím ←)', () => show(cur - 1));
    const bNext = navBtn('fwd', 'Bước sau (phím →)', () => show(cur + 1));
    const home = h('a', { class: 'nbtn', href: cfg.homeUrl, title: 'Về danh sách Level 1', 'aria-label': 'Về danh sách Level 1', html: ICON.home });
    const slug = h('b', {});
    const addr = h('div', { class: 'addr', title: 'Bạn đang ở bước nào của bài học' }, h('span', { class: 'lk' }, '●'), h('span', {}, cfg.scheme), slug);
    const chStars = h('span', { class: 'chip', title: 'Số bước đã hoàn thành' });
    const chGv = h('button', { type: 'button', class: 'chip', title: 'Chế độ giáo viên: hiện gợi ý giảng và đáp án', onclick: () => { const v = !Store.get('gv', false); Store.set('gv', v); document.body.classList.toggle('gv', v); chGv.classList.toggle('on', v); } }, '📋 GV');
    chGv.classList.toggle('on', !!Store.get('gv', false));
    const meter = h('i');
    const toolbar = h('div', { class: 'toolbar' }, home, bPrev, bNext, addr, chStars, timerChip(30 * 60), chGv, themeChip());
    const stage = h('main', { class: 'stage', id: 'stage' });
    app.append(h('header', { class: 'top' }, strip, toolbar, h('div', { class: 'meter' }, meter)), stage);

    const isDone = i => !!doneMap[i];
    function refreshStatus() {
      const n = secs.filter((s, i) => isDone(i)).length;
      chStars.textContent = '⭐ ' + n + '/' + N; meter.style.width = (n / N * 100) + '%';
      tabs.forEach((t, i) => t.classList.toggle('done', isDone(i)));
      foots.forEach((f, i) => f && f.paint());
    }
    function markDone(i, quiet) {
      if (isDone(i)) return;
      doneMap[i] = 1; Store.set('done', doneMap);
      if (!quiet) toast('⭐ Hoàn thành: ' + secs[i].title);
      refreshStatus();
    }
    function build(i) {
      const s = secs[i];
      const ctx = {
        N, store: Store, goto: show,
        task(id) { tasks[i][id] = false; return () => { if (tasks[i][id]) return; tasks[i][id] = true; if (built[i] && Object.values(tasks[i]).every(Boolean)) markDone(i); }; },
        quiz(key, label) {
          const finish = ctx.task('q:' + key), saved = Store.get('q', {});
          return makeQuestion(key, QUIZ[key], {
            mode: 'lesson', label: label || 'Kiểm tra nhanh', restore: saved[key],
            onDone(first) { const m = Store.get('q', {}); if (!m[key]) { m[key] = first ? 1 : 2; Store.set('q', m); } finish(); }
          });
        },
        lab(webOpts, list) {
          const finish = ctx.task('lab:' + (list[0] && list[0].id));
          const ms = Missions(list, finish);
          const mw = MiniWeb(Object.assign({}, webOpts, { mission: id => ms.tick(id) }));
          return h('div', { class: 'lab' }, mw.el, ms.el);
        },
        missions(list) { const finish = ctx.task('m:' + list[0].id); return Missions(list, finish); },
        summary() {
          const m = Store.get('q', {}), keys = Object.keys(m);
          return { total: keys.length, first: keys.filter(k => m[k] === 1).length };
        },
        reset() { if (confirm('Xóa toàn bộ tiến độ của bài này và học lại từ đầu?')) { Store.wipe(); location.reload(); } }
      };
      const pane = h('section', { class: 'pane', id: 'p-' + s.id, role: 'tabpanel', hidden: true });
      append(pane, [
        h('div', { class: 'pane-head' },
          h('span', { class: 'kicker' }, 'Bước ' + (i + 1) + '/' + N + ' · ' + s.min + ' phút'),
          h('h1', {}, s.title), s.lead ? h('p', {}, s.lead) : null),
        s.gv ? h('div', { class: 'gv-note' }, h('b', {}, '📋 Gợi ý cho giáo viên (' + s.min + ' phút): '), s.gv) : null,
        s.build(ctx)]);
      const last = i === N - 1;
      const hint = h('span', { class: 'hint' });
      const prevB = h('button', { type: 'button', class: 'btn ghost', onclick: () => show(i - 1), hidden: i === 0 }, '◀ Quay lại');
      const nextB = last
        ? h('a', { class: 'btn', href: cfg.reviewUrl }, '📝 Làm bài ôn tập')
        : h('button', { type: 'button', class: 'btn', onclick: () => show(i + 1) }, 'Tiếp tục ▶');
      foots[i] = {
        paint() {
          const d = isDone(i);
          hint.className = 'hint' + (d ? ' ok' : ''); hint.textContent = d ? '✔ Đã xong bước này' : 'Hoàn thành phần thực hành để nhận ⭐ (vẫn có thể đi tiếp)';
          nextB.classList.toggle('pulse', d);
        }
      };
      pane.append(h('div', { class: 'pane-foot' }, prevB, hint, nextB));
      panes[i] = pane; stage.append(pane); built[i] = true;
      if (Object.values(tasks[i]).every(Boolean)) markDone(i, true);
      foots[i].paint();
    }
    function show(i) {
      if (i < 0 || i >= N) return;
      cur = i; Store.set('cur', i);
      if (!built[i]) build(i);
      panes.forEach((p, k) => { if (p) p.hidden = k !== i; });
      tabs.forEach((t, k) => { t.classList.toggle('on', k === i); t.setAttribute('aria-selected', k === i); });
      slug.textContent = cfg.hideSlug ? '' : secs[i].slug;
      bPrev.disabled = i === 0; bNext.disabled = i === N - 1;
      tabs[i].scrollIntoView({ inline: 'center', block: 'nearest' });
      window.scrollTo({ top: 0 });
      document.title = secs[i].title + ' · ' + cfg.title;
    }
    document.addEventListener('keydown', e => {
      if (e.ctrlKey || e.metaKey || e.altKey) return;
      const t = e.target && e.target.tagName; if (t === 'INPUT' || t === 'TEXTAREA') return;
      if (e.key === 'ArrowRight') show(cur + 1); else if (e.key === 'ArrowLeft') show(cur - 1);
    });
    refreshStatus(); show(cur);
    global.KitCtx = { show };
  }

  /* ============================================================
     TRANG ÔN TẬP
     ============================================================ */
  function review(cfg) {
    Store.init(cfg.storeKey); Theme.init();
    document.documentElement.dataset.accent = cfg.accent || 'teal';
    const app = document.getElementById('app');
    const tab = h('button', { type: 'button', class: 'tab on', role: 'tab', 'aria-selected': 'true' }, h('span', { class: 't-ic' }, '📝'), h('span', { class: 't-tx' }, 'Ôn tập ' + cfg.title), h('span', { class: 't-ck' }, '✓'));
    const home = h('a', { class: 'nbtn', href: cfg.homeUrl, title: 'Về danh sách Level 1', 'aria-label': 'Về danh sách Level 1', html: ICON.home });
    const back = h('a', { class: 'nbtn', href: cfg.lessonUrl, title: 'Quay lại bài học', 'aria-label': 'Quay lại bài học', html: ICON.back });
    const cnt = h('span', { class: 'chip' }), sc = h('span', { class: 'chip' });
    const meter = h('i');
    app.append(
      h('header', { class: 'top' }, h('div', { class: 'tabstrip' }, tab),
        h('div', { class: 'toolbar' }, home, back, h('div', { class: 'addr' }, h('span', { class: 'lk' }, '●'), h('span', {}, cfg.scheme), h('b', {}, cfg.hideSlug ? '' : 'on-tap')), cnt, sc, themeChip()),
        h('div', { class: 'meter' }, meter)));
    const stage = h('main', { class: 'stage' }); app.append(stage);

    function run(keys) {
      let i = 0, score = 0; const res = [];
      const order = keys.slice();
      function paint() {
        stage.replaceChildren();
        if (i >= order.length) return summary();
        const key = order[i], q = QUIZ[key];
        cnt.textContent = 'Câu ' + (i + 1) + '/' + order.length; sc.textContent = '⭐ ' + score;
        meter.style.width = (i / order.length * 100) + '%';
        const dots = h('div', { class: 'rv-dots' }, order.map((k, n) => h('i', { class: n < i ? (res[n] ? 'ok' : 'bad') : n === i ? 'cur' : '' })));
        const nextWrap = h('div', { class: 'q-actions', style: 'justify-content:flex-end;margin-top:16px' });
        const card = makeQuestion(key, q, {
          mode: 'review', label: 'Câu ' + (i + 1),
          onDone(first) {
            res[i] = first; if (first) score++; sc.textContent = '⭐ ' + score;
            const last = i === order.length - 1;
            nextWrap.append(h('button', { type: 'button', class: 'btn pulse', onclick: () => { i++; paint(); window.scrollTo({ top: 0 }); } }, last ? 'Xem kết quả 🏁' : 'Câu tiếp theo ▶'));
            setTimeout(() => nextWrap.scrollIntoView({ block: 'nearest', behavior: 'smooth' }), 80);
          }
        });
        stage.append(h('div', { class: 'rv-card' }, dots, card, nextWrap));
      }
      function summary() {
        const n = order.length, pct = Math.round(score / n * 100);
        const stars = pct >= 90 ? 3 : pct >= 70 ? 2 : pct >= 50 ? 1 : 0;
        cnt.textContent = 'Hoàn thành'; meter.style.width = '100%';
        if (keys.length === cfg.keys.length && pct > Store.get('best', 0)) Store.set('best', pct);
        const missed = order.filter((k, n) => !res[n]);
        const msg = pct === 100 ? 'Tuyệt vời! Em nắm bài rất vững.' : pct >= 70 ? 'Làm tốt lắm! Xem lại vài câu để hoàn hảo hơn nhé.' : 'Cố lên! Hãy đọc lại bài học rồi thử lại nhé.';
        stage.append(h('div', { class: 'rv-card card' }, h('div', { class: 'rv-sum' },
          h('div', { class: 'big' }, score + '/' + n),
          h('div', { class: 'stars', 'aria-label': stars + ' trên 3 sao' }, '★'.repeat(stars) + '☆'.repeat(3 - stars)),
          h('p', {}, h('b', {}, msg), ' (đúng ngay lần đầu: ' + pct + '%)'),
          missed.length ? h('div', {}, h('p', { style: 'margin-top:14px' }, 'Các câu cần xem lại:'),
            h('ul', { class: 'rv-list' }, missed.map(k => h('li', {}, h('b', {}, '✖'), h('span', {}, QUIZ[k].question))))) : null,
          h('div', { style: 'display:flex;gap:10px;justify-content:center;flex-wrap:wrap;margin-top:12px' },
            missed.length ? h('button', { type: 'button', class: 'btn', onclick: () => run(missed) }, '↻ Làm lại các câu sai') : null,
            h('button', { type: 'button', class: 'btn ghost', onclick: () => run(cfg.shuffle ? shuffle(cfg.keys) : cfg.keys) }, 'Làm lại tất cả'),
            h('a', { class: 'btn ghost', href: cfg.lessonUrl }, 'Xem lại bài học'),
            h('a', { class: 'btn ghost', href: cfg.homeUrl }, 'Về Level 1')))));
      }
      paint();
    }
    run(cfg.shuffle ? shuffle(cfg.keys) : cfg.keys);
  }

  global.Kit = { h, start, review, MiniWeb, Missions, makeQuestion, toast, ICON, Store };
})(window);

/* Trình duyệt giả lập cho bài 13–16. MiniBrowser(host, opts) */
(function () {
  const nav = (items) => `<div class="nv" data-part="nav">${items.map(([t, u]) => `<a data-go="${u}">${t}</a>`).join('')}</div>`;
  const PAGES = {
    'truong-em.edu.vn': { t: 'Trường Tiểu học Hoa Sen', f: '🏫', h: () => `<div class="pg">${nav([['Trang chủ', 'truong-em.edu.vn'], ['Tin tức', 'truong-em.edu.vn'], ['Liên hệ', 'truong-em.edu.vn']])}<h1>🏫 Trường Tiểu học Hoa Sen</h1><p>Chào mừng các em đến với trang Web của trường!</p><div class="grid"><div class="gc"><div class="e">📚</div>Học tập</div><div class="gc"><div class="e">⚽</div>Thể thao</div><div class="gc"><div class="e">🎨</div>Mỹ thuật</div></div></div>` },
    'netpc.vn': { t: 'Net PC – Máy tính cho bé', f: '🖥️', h: () => `<div class="pg">${nav([['🏠 Trang chủ', 'netpc.vn'], ['💻 Sản phẩm', 'netpc.vn/san-pham'], ['ℹ️ Giới thiệu', 'netpc.vn/gioi-thieu'], ['☎️ Liên hệ', 'netpc.vn/lien-he']])}<h1>🖥️ Net PC</h1><p data-part="text">Máy tính xinh – giá thân thiện cho học sinh.</p><div class="grid"><div class="gc"><div class="e">💻</div>Laptop</div><div class="gc"><div class="e">🖱️</div>Chuột</div><div class="gc"><div class="e">⌨️</div>Bàn phím</div></div></div>` },
    'netpc.vn/san-pham': { t: 'Sản phẩm – Net PC', f: '🖥️', h: () => `<div class="pg">${nav([['🏠 Trang chủ', 'netpc.vn'], ['💻 Sản phẩm', 'netpc.vn/san-pham'], ['ℹ️ Giới thiệu', 'netpc.vn/gioi-thieu'], ['☎️ Liên hệ', 'netpc.vn/lien-he']])}<h1>💻 Sản phẩm</h1><p>Laptop, chuột, bàn phím, tai nghe…</p></div>` },
    'netpc.vn/gioi-thieu': { t: 'Giới thiệu – Net PC', f: '🖥️', h: () => `<div class="pg">${nav([['🏠 Trang chủ', 'netpc.vn'], ['💻 Sản phẩm', 'netpc.vn/san-pham'], ['ℹ️ Giới thiệu', 'netpc.vn/gioi-thieu'], ['☎️ Liên hệ', 'netpc.vn/lien-he']])}<h1>ℹ️ Giới thiệu</h1><p>Net PC là cửa hàng máy tính dành cho học sinh.</p></div>` },
    'netpc.vn/lien-he': { t: 'Liên hệ – Net PC', f: '🖥️', h: () => `<div class="pg">${nav([['🏠 Trang chủ', 'netpc.vn'], ['💻 Sản phẩm', 'netpc.vn/san-pham'], ['ℹ️ Giới thiệu', 'netpc.vn/gioi-thieu'], ['☎️ Liên hệ', 'netpc.vn/lien-he']])}<h1>☎️ Liên hệ</h1><p>Gọi cô chú bán hàng nhé!</p></div>` },
    'daiduong.vn': { t: 'Đại dương kỳ diệu', f: '🌊', h: () => `<div class="pg"><h1>🌊 Đại dương kỳ diệu</h1><p>Đại dương luôn chuyển động. Nhiều loài động vật sống dưới biển.</p><div class="grid"><div class="gc"><div class="e">🐋</div>Cá voi</div><div class="gc"><div class="e">🐙</div>Bạch tuộc</div><div class="gc"><div class="e">🐠</div>Cá nhiệt đới</div></div></div>` },
    'hoctap.vn': { t: 'Học tập vui – Hoc Tap', f: '📘', h: () => `<div class="pg"><h1>📘 Học tập vui</h1><p>Bài giảng, trò chơi và bài tập cho học sinh lớp 3.</p><div class="grid"><div class="gc"><div class="e">➕</div>Toán</div><div class="gc"><div class="e">📖</div>Tiếng Việt</div><div class="gc"><div class="e">💻</div>Tin học</div></div></div>` },
    'thuvien.vn': { t: 'Thư viện sách thiếu nhi', f: '📚', h: () => `<div class="pg"><h1>📚 Thư viện sách</h1><p>Hàng ngàn truyện hay cho các em.</p><div class="grid"><div class="gc"><div class="e">🦊</div>Truyện cổ tích</div><div class="gc"><div class="e">🚀</div>Khoa học</div></div></div>` },
    'google.com': { t: 'Google', f: '🔎', search: 1, h: () => `<div class="pg"><div class="logo lg-g"><span>G</span><span>o</span><span>o</span><span>g</span><span>l</span><span>e</span></div><div class="sbig" data-part="pagesearch"><input placeholder="Gõ từ khóa rồi nhấn Enter" id="pgq"><button data-act="pgsearch">🔎 Tìm</button></div><p style="text-align:center;color:#7a89a8">Công cụ tìm kiếm</p></div>` },
    'bing.com': { t: 'Bing', f: '🔍', search: 1, h: () => `<div class="pg"><div class="logo" style="color:#0f7b6c">Bing</div><div class="sbig"><input placeholder="Gõ từ khóa rồi nhấn Enter" id="pgq"><button data-act="pgsearch">🔎 Tìm</button></div><p style="text-align:center;color:#7a89a8">Công cụ tìm kiếm</p></div>` },
    'cuoi-la-trang-la.xyz': { t: 'AI-Mien-Phi-Nhan-Qua!!!', f: '⚠️', h: () => `<div class="pg" style="background:#fff0f0"><h1>🎁 AI MIỄN PHÍ – NHẬP TÊN VÀ MẬT KHẨU!</h1><p>Trang này có tên lạ, dài và đòi thông tin cá nhân. Em hãy cẩn thận!</p></div>` },
  };
  const norm = (u) => (u || '').trim().toLowerCase().replace(/^https?:\/\//, '').replace(/^www\./, '').replace(/\/+$/, '');
  const pageOf = (u) => PAGES[norm(u)];
  const PART_NAMES = { tab: 'Thẻ (Tab)', newtab: 'Nút thêm thẻ (+)', 'close-tab': 'Nút đóng thẻ (X)', min: 'Thu nhỏ', max: 'Phóng to', close: 'Đóng cửa sổ', back: 'Nút điều hướng: Quay lại', forward: 'Nút điều hướng: Đi tiếp', reload: 'Nút điều hướng: Tải lại', address: 'Thanh địa chỉ (Address Bar) – cũng là khung tìm kiếm', star: 'Ngôi sao – đánh dấu trang', search: 'Khung tìm kiếm (Search Box)', menu: 'Menu ba chấm', bookmarks: 'Thanh dấu trang (Bookmarks)', nav: 'Menu của trang Web', content: 'Nội dung trang Web', text: 'Đoạn văn bản', toolbar: 'Thanh công cụ' };

  function MiniBrowser(host, o) {
    o = Object.assign({ mode: 'live', tabs: ['truong-em.edu.vn'], bookmarks: [], bmName: 'Bookmarks', keys: [], history: [], onEvent() {}, onPick() {}, badges: {}, view: 300 }, o);
    const clock = { m: 8 * 60 + 40 };
    const stamp = () => { clock.m += 3 + Math.floor(Math.random() * 4); return String(Math.floor(clock.m / 60)).padStart(2, '0') + ':' + String(clock.m % 60).padStart(2, '0'); };
    const S = { tabs: o.tabs.map((u) => ({ url: u, h: [u], i: 0 })), act: 0, bms: o.bookmarks.slice(), names: {}, vis: o.history.map(([u, t]) => ({ u, t })), panel: false, menu: false, pop: false, toast: '', addr: null };
    const quiz = o.mode === 'quiz';
    const emit = (type, via, extra) => o.onEvent(Object.assign({ type, via: via || 'click' }, extra));
    const cur = () => S.tabs[S.act];
    const flash = (m) => { S.toast = m; render(); clearTimeout(flash.t); flash.t = setTimeout(() => { S.toast = ''; render(); }, 1600); };

    function go(u, via) {
      const t = cur(); const k = norm(u); if (!k) return;
      t.h = t.h.slice(0, t.i + 1); t.h.push(k); t.i++; t.url = k; S.addr = null; S.menu = false; S.pop = false;
      S.vis.unshift({ u: k, t: stamp() });
      emit('navigate', via, { url: k }); render();
    }
    function newTab(via) { if (S.tabs.length >= 6) return flash('Mở nhiều quá rồi! 😅'); S.tabs.push({ url: 'google.com', h: ['google.com'], i: 0 }); S.act = S.tabs.length - 1; S.addr = ''; S.menu = false; emit('newtab', via); render(); focusAddr(); }
    function closeTab(i, via) { if (S.tabs.length < 2) return flash('Giữ lại ít nhất 1 thẻ nhé!'); S.tabs.splice(i, 1); S.act = Math.min(S.act > i ? S.act - 1 : S.act, S.tabs.length - 1); S.addr = null; emit('closetab', via); render(); }
    function sw(i, via) { if (i === S.act) return; S.act = i; S.addr = null; emit('switchtab', via); render(); }
    function bookmark(via) { const u = cur().url; if (!S.bms.includes(u)) S.bms.push(u); S.pop = true; S.menu = false; emit('bookmark', via, { url: u }); render(); setTimeout(() => { const n = host.querySelector('.bmname'); if (n) { n.focus(); n.select(); } }, 0); }
    function history(via) { S.panel = !S.panel; S.menu = false; emit(S.panel ? 'history' : 'historyclose', via); render(); }
    function key(c, via) {
      via = via || 'key';
      if (c === 'Ctrl+T') newTab(via); else if (c === 'Ctrl+W') closeTab(S.act, via);
      else if (c === 'Ctrl+Tab') sw((S.act + 1) % S.tabs.length, via);
      else if (c === 'Ctrl+D') bookmark(via); else if (c === 'Ctrl+H') history(via);
    }
    function search(q) { const k = norm(q); if (!k) return; const t = cur(); t.url = 'search:' + k; t.h = t.h.slice(0, t.i + 1); t.h.push(t.url); t.i++; S.addr = null; emit('search', 'click', { q: k }); render(); }
    function back(d) { const t = cur(); const n = t.i + d; if (n < 0 || n >= t.h.length) return; t.i = n; t.url = t.h[n]; S.addr = null; render(); }

    function pageHtml(u) {
      if (u.startsWith('search:')) { const q = u.slice(7); return `<div class="pg"><h1>🔎 Kết quả cho “${q.replace(/</g, '')}”</h1><div class="res"><a class="lnk" data-go="daiduong.vn">🌊 Đại dương kỳ diệu</a><p>daiduong.vn – Đại dương luôn chuyển động…</p></div><div class="res"><a class="lnk" data-go="hoctap.vn">📘 Học tập vui</a><p>hoctap.vn – Bài giảng cho học sinh lớp 3…</p></div><div class="res"><a class="lnk" data-go="thuvien.vn">📚 Thư viện sách</a><p>thuvien.vn – Truyện hay cho các em…</p></div></div>`; }
      const p = pageOf(u);
      return p ? p.h() : `<div class="pg" style="text-align:center"><div style="font-size:70px">🤔</div><h1>Không tìm thấy trang</h1><p>Em kiểm tra lại địa chỉ nhé!</p></div>`;
    }
    const tabTitle = (u) => (u.startsWith('search:') ? 'Kết quả tìm kiếm' : (pageOf(u) || { t: 'Trang mới' }).t);
    const tabIcon = (u) => (u.startsWith('search:') ? '🔎' : (pageOf(u) || { f: '📄' }).f);
    const badge = (p) => (o.badges[p] ? `<span class="br-badge">${o.badges[p]}</span>` : '');
    let focused = false;
    function focusAddr() { setTimeout(() => { const a = host.querySelector('.br-addr input'); if (a && !quiz) { a.focus(); a.select(); } }, 0); }

    function render() {
      const t = cur(); const star = S.bms.includes(t.url);
      const addrVal = S.addr !== null ? S.addr : (t.url.startsWith('search:') ? 'google.com/search?q=' + t.url.slice(7) : 'https://' + t.url);
      const hist = S.vis; const bmHtml = S.bms.length ? S.bms.map((u) => `<button class="bmi" data-bm="${u}">${tabIcon(u)} ${S.names[u] || tabTitle(u).split(' – ')[0]}</button>`).join('') : '<span class="none">(chưa có dấu trang nào)</span>';
      host.innerHTML = `<div class="br ${quiz ? 'quiz' : ''}" data-part="window">
        <div class="br-top"><div class="br-tabs" data-part="tabs">${S.tabs.map((x, i) => `<div class="br-tab ${i === S.act ? 'act' : ''}" data-part="tab" data-i="${i}">${i === 0 ? badge('tab') : ''}<span>${tabIcon(x.url)}</span><span class="tt">${tabTitle(x.url)}</span><button class="x" data-part="close-tab" data-i="${i}" title="Đóng thẻ">✕</button></div>`).join('')}<button class="br-plus" data-part="newtab" title="Thẻ mới">${badge('newtab')}＋</button></div>
          <div class="br-win" data-part="winbtns">${badge('winbtns')}<button data-part="min">—</button><button data-part="max">▢</button><button data-part="close">✕</button></div></div>
        <div class="br-bar" data-part="toolbar"><button class="nb" data-part="back">◀</button><button class="nb" data-part="forward">▶</button><button class="nb" data-part="reload">⟳</button>
          <div class="br-addr" data-part="address">${badge('address')}<span>🔒</span><input placeholder="Gõ địa chỉ hoặc từ khóa tìm kiếm" value="${addrVal.replace(/"/g, '')}" ${quiz ? 'readonly' : ''} spellcheck="false"><button class="br-star" data-part="star">${star ? '⭐' : '☆'}</button></div>
          <button class="nb" data-part="menu">⋮</button></div>
        <div class="br-bm" data-part="bookmarks">${badge('bookmarks')}<b>${o.bmName === 'Favorites' ? '⭐' : '🔖'}</b> ${bmHtml}</div>
        <div class="br-view" style="height:${o.view}px"><div data-part="content">${pageHtml(t.url)}</div>
          ${S.panel ? `<div class="br-panel"><h5>🕘 Lịch sử (History)</h5><div class="day">Hôm nay</div>${hist.length ? hist.map((v) => `<div class="hr"><time>${v.t}</time><span>${tabIcon(v.u)} ${tabTitle(v.u)}</span></div>`).join('') : '<p>Chưa có trang nào.</p>'}</div>` : ''}
          ${S.toast ? `<div class="br-toast">${S.toast}</div>` : ''}</div>
        ${S.menu ? `<div class="br-menu"><button data-act="m-history">🕘 History (Lịch sử)</button><button data-act="m-bm">🔖 ${o.bmName}</button><button data-act="m-x">⚙️ Settings</button></div>` : ''}
        ${S.pop ? `<div class="br-pop">✅ Đã thêm vào ${o.bmName}!<br><label>Tên: <input class="bmname" maxlength="24" value="${(S.names[cur().url] || tabTitle(cur().url).split(' – ')[0]).replace(/"/g, '')}" style="border:2px solid #cfdcf3;border-radius:8px;padding:3px 8px;font-size:15px;width:150px;margin-top:6px"></label><br><button data-act="done">Done</button></div>` : ''}
      </div>
      ${o.keys.length && !quiz ? `<div class="keys"><span>👆 Nhấp chuột vào nút (đừng bấm phím thật trên bàn phím):</span>${o.keys.map((k) => `<button class="kc" data-key="${k}">${k}</button>`).join('')}</div>` : ''}`;
      const a = host.querySelector('.br-addr input');
      if (a && focused && !quiz) { a.focus(); const n = a.value.length; a.setSelectionRange(n, n); }
    }

    host.onclick = (e) => {
      const el = e.target;
      if (quiz) { const p = el.closest('[data-part]'); if (!p) return; let part = p.dataset.part; if (el.closest('[data-part="close-tab"]')) part = 'close-tab'; else if (el.closest('[data-part="newtab"]')) part = 'newtab'; else if (el.closest('[data-part="nav"]')) part = 'nav'; else if (el.closest('[data-part="text"]')) part = 'text'; else if (['back', 'forward', 'reload'].includes(part)) part = part; else if (part === 'tabs' || part === 'winbtns') return; o.onPick(part, p, e); return; }
      const g = el.closest('[data-go]'); if (g) return go(g.dataset.go);
      const bm = el.closest('[data-bm]'); if (bm) return go(bm.dataset.bm);
      const k = el.closest('[data-key]'); if (k) return key(k.dataset.key, 'key');
      const ac = el.closest('[data-act]');
      if (ac) { const a = ac.dataset.act;
        if (a === 'done') { const n = host.querySelector('.bmname'), u = cur().url, def = tabTitle(u).split(' – ')[0], v = ((n && n.value) || '').trim() || def; S.names[u] = v; S.pop = false; emit('bookmark-done', 'click', { name: v, named: v !== def }); render(); }
        else if (a === 'm-history') history('menu'); else if (a === 'm-bm') { S.menu = false; flash('Các dấu trang nằm ở thanh bên dưới ↓'); } else if (a === 'm-x') flash('Phần cài đặt – chưa cần dùng 😉');
        else if (a === 'pgsearch') search((host.querySelector('#pgq') || {}).value);
        return; }
      const p = el.closest('[data-part]'); if (!p) return; const part = p.dataset.part;
      if (el.closest('[data-part="close-tab"]')) return closeTab(+el.closest('[data-part="close-tab"]').dataset.i, 'click');
      if (el.closest('[data-part="newtab"]')) return newTab('click');
      if (part === 'tab') return sw(+p.dataset.i, 'click');
      if (part === 'star') return bookmark('click');
      if (part === 'menu') { S.menu = !S.menu; return render(); }
      if (part === 'back') return back(-1); if (part === 'forward') return back(1); if (part === 'reload') return render();
      if (['min', 'max', 'close'].includes(part)) return flash('Đây là cửa sổ giả lập – không đóng được 😄');
    };
    host.onkeydown = (e) => {
      if (quiz) return; const t = e.target;
      if (t.matches('.br-addr input') && e.key === 'Enter') { const v = t.value.trim(); (/\s/.test(v) || !v.includes('.')) ? search(v) : go(v, 'click'); }
      else if (t.matches('.br-search input') && e.key === 'Enter') { search(t.value); }
      else if (t.matches('.bmname') && e.key === 'Enter') { host.querySelector('[data-act=done]').click(); }
      else if (t.id === 'pgq' && e.key === 'Enter') { search(t.value); }
      else if (e.ctrlKey && !e.altKey) { const m = { t: 'Ctrl+T', w: 'Ctrl+W', d: 'Ctrl+D', h: 'Ctrl+H' }[e.key.toLowerCase()] || (e.key === 'Tab' ? 'Ctrl+Tab' : null); if (m && o.keys.includes(m)) { e.preventDefault(); key(m, 'key'); } }
    };
    host.addEventListener('focusin', (e) => { focused = !!e.target.matches && e.target.matches('.br-addr input'); if (focused && !quiz) e.target.select(); });
    host.addEventListener('input', (e) => { if (e.target.matches('.br-addr input')) { S.addr = e.target.value; if (!quiz && !e.target.value) emit('addrclear'); } });
    render();
    return { key, go, state: S, render, pageOf };
  }
  window.MiniBrowser = MiniBrowser; window.MB = { PART_NAMES, norm };
})();

/* ============================================================
   BÀI 10 — Làm quen với trình duyệt Web · buổi học 30 phút
   6 thẻ (bước):  3′ + 7′ + 5′ + 5′ + 5′ + 5′ = 30′
   ============================================================ */
(function () {
  'use strict';
  const { h, Missions } = Kit;
  const P = html => h('p', { html });

  /* ---------- Logo 5 trình duyệt ---------- */
  const BROWSERS = [
    ['Google Chrome', 'img/chrome.png'], ['Microsoft Edge', 'img/edge.png'],
    ['Mozilla Firefox', 'img/firefox.png'], ['Safari', 'img/safari.png'], ['Opera', 'img/opera.png']
  ];
  const logoRow = () => h('div', { class: 'logo-row' }, BROWSERS.map(b =>
    h('div', { class: 'logo' }, h('img', { src: b[1], alt: 'Biểu tượng ' + b[0], width: 64, height: 64 }), h('span', {}, b[0]))));

  /* ---------- Giải phẫu một URL ---------- */
  function urlAnatomy() {
    const parts = [
      { t: 'https://', c: 'p1', name: 'Giao thức', d: 'Cách trình duyệt “nói chuyện” với trang Web. Chữ “s” cuối cho biết kết nối được bảo vệ.' },
      { t: 'www.', c: 'p2', name: 'World Wide Web', d: 'Cho biết đây là một trang trên WWW, hệ thống cho phép truy cập thông tin trên Internet.' },
      { t: 'google.com', c: 'p3', name: 'Tên miền', d: 'Tên của trang Web, giống như tên con đường. Đuôi “.com” cho biết đây là tên miền thương mại.' }
    ];
    const out = h('div', { class: 'urlnote' }, h('b', {}, 'Chạm vào từng phần của địa chỉ để xem nó nghĩa là gì 👆'));
    const btns = parts.map(p => h('button', {
      type: 'button', class: 'up ' + p.c, onclick: () => {
        btns.forEach(b => b.classList.remove('on')); btns[parts.indexOf(p)].classList.add('on');
        out.className = 'urlnote ' + p.c; out.replaceChildren(h('b', {}, p.name + ': '), p.d);
      }
    }, p.t));
    return h('div', {}, h('div', { class: 'urlbox', 'aria-label': 'Ví dụ về một URL' }, btns), out);
  }

  /* ---------- Cửa sổ trình duyệt để thực hành 4 nút điều khiển ---------- */
  function windowLab(ctx) {
    const list = [
      { id: 'newtab', text: 'Mở thêm một thẻ mới: bấm dấu +' },
      { id: 'max', text: 'Phóng to cửa sổ: bấm nút Maximize (☐)' },
      { id: 'restore', text: 'Thu về kích thước cũ: bấm nút Restore Down (❐)' },
      { id: 'min', text: 'Bấm Minimize (—) rồi mở lại từ thanh tác vụ ở đáy màn hình' },
      { id: 'close', text: 'Bấm Close (✕) rồi mở lại bằng biểu tượng trên màn hình' }
    ];
    const ms = Missions(list, ctx.task('winlab'));
    let state = 'normal', sel = 0, count = 1;
    const tabs = ['Trường Em'];
    const win = h('div', { class: 'dwin' });
    const taskbar = h('div', { class: 'dtask' });
    const icon = h('button', { type: 'button', class: 'dicon', hidden: true, onclick: () => { state = 'normal'; paint(); } }, h('span', {}, '🌐'), 'Trình duyệt');
    const showLbl = h('input', { type: 'checkbox', checked: true, id: 'lbl' + Math.random().toString(36).slice(2, 6) });
    const desk = h('div', { class: 'desk' }, icon, win, taskbar);
    const sw = h('label', { class: 'lblsw' }, showLbl, ' Hiện số chỉ các bộ phận');
    showLbl.addEventListener('change', () => desk.classList.toggle('nolbl', !showLbl.checked));
    const legend = h('div', { class: 'desk-leg' },
      h('span', {}, h('i', {}, '1'), 'Thẻ trình duyệt (Tab)'),
      h('span', {}, h('i', {}, '2'), 'Thanh địa chỉ (Address Bar)'),
      h('span', {}, h('i', {}, '3'), 'Nút điều khiển cửa sổ'));

    function paint() {
      win.className = 'dwin' + (state === 'max' ? ' max' : state === 'min' || state === 'closed' ? ' min' : '');
      icon.hidden = state !== 'closed';
      taskbar.replaceChildren(...[h('span', { class: 'dstart' }, '⊞'),
        state === 'closed' ? null : h('button', { type: 'button', class: 'dtb' + (state === 'min' ? '' : ' act'), onclick: () => { if (state === 'min') { state = 'normal'; paint(); } } }, '🌐 Trình duyệt')].filter(Boolean));
      const maxBtn = h('button', { type: 'button', title: state === 'max' ? 'Restore Down — khôi phục kích thước' : 'Maximize — toàn màn hình', 'aria-label': state === 'max' ? 'Restore Down' : 'Maximize', onclick: () => { if (state === 'max') { state = 'normal'; ms.tick('restore'); } else { state = 'max'; ms.tick('max'); } paint(); } }, state === 'max' ? '❐' : '☐');
      const minBtn = h('button', { type: 'button', title: 'Minimize — thu nhỏ xuống thanh tác vụ', 'aria-label': 'Minimize', onclick: () => { state = 'min'; ms.tick('min'); paint(); } }, '—');
      const clsBtn = h('button', { type: 'button', class: 'x', title: 'Close — đóng cửa sổ', 'aria-label': 'Close', onclick: () => { state = 'closed'; ms.tick('close'); paint(); } }, '✕');
      win.replaceChildren(
        h('div', { class: 'dtabs' },
          tabs.map((t, i) => h('button', { type: 'button', class: 'dtab' + (i === sel ? ' on' : ''), onclick: () => { sel = i; paint(); } }, '🌐 ' + t)),
          tabs.length < 4 ? h('button', { type: 'button', class: 'dplus', title: 'Thẻ mới', 'aria-label': 'Mở thẻ mới', onclick: () => { count++; tabs.push('Thẻ mới ' + count); sel = tabs.length - 1; ms.tick('newtab'); paint(); } }, '+') : null,
          h('div', { class: 'dctl' }, minBtn, maxBtn, clsBtn)),
        h('div', { class: 'dbar' }, h('span', {}, '←  →  ⟳'), h('div', { class: 'daddr' }, '🔒 ' + (sel === 0 ? 'https://truong-em.edu.vn/' : 'Nhập địa chỉ hoặc tìm kiếm…'))),
        h('div', { class: 'dpage' }, h('h3', {}, tabs[sel]), h('p', {}, sel === 0 ? 'Đây là một trang Web đang hiển thị trong thẻ trình duyệt.' : 'Thẻ mới đang trống. Mỗi thẻ là một trang Web riêng.')),
        h('i', { class: 'bdg b1' }, '1'), h('i', { class: 'bdg b2' }, '2'), h('i', { class: 'bdg b3' }, '3'));
    }
    paint();
    return h('div', { class: 'lab' }, h('div', {}, desk, h('div', { class: 'desk-tools' }, sw), legend), ms.el);
  }

  /* ============================================================
     Các bước của bài học
     ============================================================ */
  const SECTIONS = [

    /* ---------- 1. Khởi động · 3 phút ---------- */
    {
      id: 'khoi-dong', slug: 'khoi-dong', icon: '🚀', title: 'Khởi động', tab: 'Khởi động', min: 3,
      lead: 'Mai muốn hỏi một công cụ AI cách giải bài toán. Mai không cài thêm phần mềm nào, chỉ mở một chương trình trên máy rồi gõ địa chỉ Web.',
      gv: 'Hỏi cả lớp trước khi lật: “Em mở ChatGPT, Gemini hay YouTube bằng cách nào?” (1 phút). Cho học sinh lật đáp án, đọc to 4 mục tiêu rồi làm câu kiểm tra. Bấm nút “▶” ở góc phải để bắt đầu đếm 30 phút.',
      build(ctx) {
        const reveal = h('div', { class: 'def', hidden: true },
          h('p', { html: 'Chương trình đó là <b>trình duyệt Web</b> (Web Browser).' }),
          h('p', { style: 'margin:0', html: 'Nhiều công cụ AI hiện nay hoạt động <b>trên trình duyệt</b>: người dùng <b>không cần cài đặt phần mềm</b> mà có thể truy cập qua <b>địa chỉ Web</b>.' }));
        const btn = h('button', { type: 'button', class: 'btn', onclick: () => { reveal.hidden = false; btn.hidden = true; } }, '🔓 Lật đáp án: chương trình đó là gì?');
        return h('div', {},
          h('div', { class: 'card bubble' }, h('div', { class: 'who' }, '🙋'), h('div', {}, h('b', {}, 'Câu hỏi cho cả lớp'), h('p', { style: 'margin:4px 0 12px' }, 'Chương trình Mai đã dùng để vào được công cụ AI là chương trình nào?'), btn)),
          reveal,
          h('h2', {}, 'Sau buổi học này, em sẽ biết…'),
          h('div', { class: 'grid g2 goals' },
            [['🌐', 'Trình duyệt Web là gì và kể tên được các trình duyệt phổ biến.'],
             ['⌨️', 'Gõ URL vào Thanh địa chỉ để đến một trang Web.'],
             ['🧩', 'Nhận biết Thẻ (Tab), 4 nút điều khiển cửa sổ và Siêu liên kết.'],
             ['🛡️', 'Kiểm tra một liên kết trước khi mở để dùng AI an toàn.']].map(g =>
              h('div', { class: 'card goal' }, h('span', { class: 'gi' }, g[0]), h('span', {}, g[1])))),
          h('h2', {}, 'Kế hoạch 30 phút'),
          h('ol', { class: 'plan' }, SECTIONS.map(s => h('li', {}, s.tab || s.title, h('small', {}, s.min + '′')))),
          h('h2', {}, 'Kiểm tra nhanh'),
          ctx.quiz('aiBrowser', 'Khởi động'));
      }
    },

    /* ---------- 2. Trình duyệt Web là gì · 7 phút ---------- */
    {
      id: 'trinh-duyet', slug: 'trinh-duyet-web', icon: '🌐', title: 'Trình duyệt Web là gì?', tab: 'Trình duyệt', min: 7,
      lead: 'Phân biệt cho rõ: trình duyệt, Internet, WWW và công cụ tìm kiếm không phải là một.',
      gv: 'Đọc định nghĩa (1 phút) → cho học sinh chỉ ra trình duyệt đang dùng trên máy → đi qua 4 thẻ “dễ nhầm” bằng ví dụ con đường (2 phút) → học sinh làm 2 câu kiểm tra (4 phút). Lỗi hay gặp: nhầm trình duyệt với Google (công cụ tìm kiếm).',
      build(ctx) {
        return h('div', {},
          h('div', { class: 'def', html: '<b>Trình duyệt Web (Web Browser)</b> là phần mềm ứng dụng cho phép người dùng <b>truy cập, xem và điều hướng</b> các trang Web trên Internet.' }),
          h('h2', {}, 'Các trình duyệt em đã nghe tên'),
          h('div', { class: 'card' }, logoRow(), h('p', { style: 'text-align:center;margin:14px 0 0;color:var(--muted);font-size:15px' }, 'Bài 11 sẽ giúp em tìm hiểu kỹ từng trình duyệt.')),
          h('h2', {}, 'Bốn từ rất dễ nhầm'),
          h('div', { class: 'grid g4 four' },
            [['🛣️', 'Internet', 'Mạng lưới kết nối rất nhiều máy tính trên toàn thế giới.', 'Giống hệ thống đường xá.'],
             ['🏘️', 'WWW', 'Hệ thống cho phép truy cập thông tin trên Internet: trang Web, hình ảnh, video…', 'Giống các nơi để em ghé thăm.'],
             ['🚗', 'Trình duyệt Web', 'Phần mềm giúp em truy cập, xem và điều hướng các trang Web.', 'Giống chiếc xe đưa em đi.'],
             ['🧭', 'Công cụ tìm kiếm', 'Một trang Web giúp em tìm thông tin; em mở nó bằng trình duyệt.', 'Giống người chỉ đường.']].map(c =>
              h('div', { class: 'card term' }, h('div', { class: 'te' }, c[0]), h('h3', {}, c[1]), h('p', {}, c[2]), h('p', { class: 'eg' }, c[3])))),
          h('h2', {}, 'Kiểm tra nhanh'),
          ctx.quiz('notBrowser', 'Kiểm tra nhanh 1'),
          ctx.quiz('tfBasic', 'Kiểm tra nhanh 2'));
      }
    },

    /* ---------- 3. Thanh địa chỉ & URL · 5 phút ---------- */
    {
      id: 'thanh-dia-chi', slug: 'thanh-dia-chi', icon: '⌨️', title: 'Thanh địa chỉ và URL', tab: 'Thanh địa chỉ', min: 5,
      lead: 'Muốn đến một trang Web, em chỉ cần biết địa chỉ của nó — gọi là URL.',
      gv: 'Làm mẫu trên máy chiếu: gõ một URL vào Thanh địa chỉ. Cho học sinh thử nhiệm vụ 1 và 2 trong trình duyệt thu nhỏ (2 phút). Hỏi: “Vì sao gõ sai một chữ thì không vào được?” (giống viết sai số nhà).',
      build(ctx) {
        return h('div', {},
          h('div', { class: 'grid g2' },
            h('div', { class: 'card' }, h('h3', {}, '⌨️ Thanh địa chỉ (Address Bar)'), P('Là nơi <b>hiển thị URL</b> của trang Web em đang duyệt hiện tại. Em cũng <b>gõ URL vào đây</b> để đến một trang Web.')),
            h('div', { class: 'card' }, h('h3', {}, '🏠 URL = địa chỉ trang Web'), P('Giống địa chỉ nhà: có đúng địa chỉ thì mới đến đúng nơi. Chỉ cần sai một ký tự là không tìm thấy trang.'))),
          h('h2', {}, 'Một URL gồm những phần nào?'), urlAnatomy(),
          h('h2', {}, 'Thực hành: gõ địa chỉ'),
          ctx.lab({ nav: false, start: 'truong-em.edu.vn' }, [
            { id: 'typed:thuvien.edu.vn', text: 'Bấm vào Thanh địa chỉ, gõ thuvien.edu.vn rồi nhấn Enter.' },
            { id: 'typedBad', text: 'Thử gõ sai một địa chỉ (ví dụ thuvien.edu) và xem điều gì xảy ra.' }
          ]),
          h('h2', {}, 'Kiểm tra nhanh'),
          ctx.quiz('whereUrl', 'Kiểm tra nhanh 1'),
          ctx.quiz('urlWhat', 'Kiểm tra nhanh 2'));
      }
    },

    /* ---------- 4. Thẻ & nút điều khiển · 5 phút ---------- */
    {
      id: 'the-nut', slug: 'the-va-nut-dieu-khien', icon: '🧩', title: 'Thẻ và nút điều khiển cửa sổ', tab: 'Thẻ & nút', min: 5,
      lead: 'Khám phá các bộ phận của cửa sổ trình duyệt bằng cách bấm thử.',
      gv: 'Dùng trình duyệt thật trên máy chiếu: chỉ vào Tab, Thanh địa chỉ và 3 nút ở góc phải. Học sinh làm 5 nhiệm vụ trong cửa sổ mô phỏng (3 phút). Lưu ý: nút ☐ và ❐ là cùng một vị trí, đổi hình tùy cửa sổ đang phóng to hay không.',
      build(ctx) {
        const rows = [['—', 'Minimize', 'Tạm thời đóng cửa sổ, thay thế nó như một nút trên thanh tác vụ. Nhấp vào nút trên thanh tác vụ để mở hoặc khôi phục.'],
          ['☐', 'Maximize', 'Hiển thị toàn màn hình cửa sổ.'],
          ['❐', 'Restore Down', 'Khôi phục cửa sổ với kích thước trước khi nó được tối đa.'],
          ['✕', 'Close', 'Đóng cửa sổ.']];
        return h('div', {},
          h('div', { class: 'card' }, h('h3', {}, '🗂️ Thẻ trình duyệt (Tab)'), P('Khi em khởi động một trình duyệt, giao diện sẽ xuất hiện một trang Web để em tìm kiếm thông tin. Trang Web đó được gọi là <b>thẻ trình duyệt (Tab)</b>. Em có thể mở nhiều thẻ để xem nhiều trang cùng lúc.')),
          h('h2', {}, 'Thực hành: điều khiển cửa sổ'), windowLab(ctx),
          h('h2', {}, 'Bốn nút ở góc trên bên phải'),
          h('div', { class: 'ctl-list' }, rows.map(r => h('div', { class: 'ctl' }, h('span', { class: 'm-sym' }, r[0]), h('div', {}, h('b', {}, r[1]), h('p', {}, r[2]))))),
          h('h2', {}, 'Kiểm tra nhanh'),
          ctx.quiz('ctrlMatch', 'Kiểm tra nhanh'));
      }
    },

    /* ---------- 5. Siêu liên kết & an toàn · 5 phút ---------- */
    {
      id: 'sieu-lien-ket', slug: 'sieu-lien-ket-an-toan', icon: '🔗', title: 'Siêu liên kết và liên kết an toàn', tab: 'Siêu liên kết', min: 5,
      lead: 'Bấm vào một siêu liên kết là em đi sang trang khác. Vì vậy, phải biết liên kết nào đáng tin.',
      gv: 'Học sinh làm nhiệm vụ bấm siêu liên kết (1 phút). Nhấn mạnh 3 bước kiểm tra: TÊN MIỀN – MỤC ĐÍCH – NGUỒN GỬI, và quy tắc vàng: chưa chắc chắn thì hỏi giáo viên. Cho học sinh phân loại 4 liên kết (2 phút).',
      build(ctx) {
        const steps = [['1', '🌐', 'Xem tên miền', '.edu, .gov là đáng tin; .com lạ hoặc đuôi lạ thì cần kiểm tra.'],
          ['2', '🎯', 'Xem mục đích', 'Trang để học tập, hay chỉ quảng cáo, lừa đảo?'],
          ['3', '📬', 'Xem nguồn gửi', 'Liên kết do AI gợi ý hay do người lạ gửi?'],
          ['?', '🙋', 'Hỏi giáo viên', 'Khi chưa chắc chắn, hãy hỏi trước khi mở.']];
        return h('div', {},
          h('div', { class: 'def', html: '<b>Siêu liên kết (Hyperlink)</b> là những dòng văn bản có <b>màu sắc khác</b> hoặc được <b>gạch dưới</b>, khi bấm vào sẽ chuyển hướng sang một trang mới.' }),
          h('h2', {}, 'Thực hành: bấm siêu liên kết'),
          ctx.lab({ nav: false, start: 'truong-em.edu.vn' }, [{ id: 'link', text: 'Rê chuột vào một siêu liên kết (con trỏ biến thành bàn tay 👆) rồi bấm vào nó.' }]),
          h('h2', {}, 'AI gợi ý liên kết — em kiểm tra thế nào?'),
          h('div', { class: 'card' }, P('AI có thể gợi ý liên kết hoặc nguồn tham khảo, <b>nhưng không phải liên kết nào cũng an toàn hoặc đúng</b>. Trước khi mở, em hãy làm theo các bước sau:')),
          h('div', { class: 'grid g4 safe' }, steps.map(s => h('div', { class: 'card step' + (s[0] === '?' ? ' ask' : '') }, h('span', { class: 'sn' }, s[0]), h('div', { class: 'se' }, s[1]), h('h3', {}, s[2]), h('p', {}, s[3])))),
          h('h2', {}, 'Kiểm tra nhanh'),
          ctx.quiz('domainSort', 'Thử tài cảnh sát tên miền'));
      }
    },

    /* ---------- 6. Tổng kết · 5 phút ---------- */
    {
      id: 'tong-ket', slug: 'tong-ket', icon: '🏁', title: 'Tổng kết và tự đánh giá', tab: 'Tổng kết', min: 5,
      lead: 'Cùng nhìn lại 5 điều quan trọng nhất của bài hôm nay.',
      gv: 'Cho cả lớp đọc 5 ý, sau đó hỏi chốt: “Trình duyệt khác Internet ở điểm nào?” và “Trước khi mở liên kết do AI gợi ý em làm gì?”. Dành 3 phút còn lại để học sinh bắt đầu bài ôn tập (5 câu), phần còn lại giao về nhà.',
      build(ctx) {
        const s = ctx.summary();
        const recap = [['🌐', 'Trình duyệt Web là phần mềm giúp em truy cập, xem và điều hướng các trang Web. Nó không phải là Internet, cũng không phải công cụ tìm kiếm.'],
          ['⌨️', 'URL là địa chỉ của trang Web. Em gõ URL vào Thanh địa chỉ.'],
          ['🗂️', 'Mỗi trang Web mở trong một thẻ (Tab). Bốn nút ở góc phải: Minimize, Maximize, Restore Down, Close.'],
          ['🔗', 'Siêu liên kết là chữ khác màu hoặc gạch dưới; bấm vào để sang trang mới.'],
          ['🛡️', 'Trước khi mở liên kết do AI gợi ý: xem tên miền, mục đích, nguồn gửi — và hỏi giáo viên khi chưa chắc.']];
        return h('div', {},
          h('ol', { class: 'recap' }, recap.map(r => h('li', {}, h('span', { class: 're' }, r[0]), h('span', {}, r[1])))),
          h('div', { class: 'card score' },
            h('h3', {}, '📊 Kết quả của em hôm nay'),
            s.total ? P('Em đã hoàn thành <b>' + s.total + '</b> câu kiểm tra, trong đó đúng ngay lần đầu <b>' + s.first + '</b> câu.') : P('Em chưa làm câu kiểm tra nào. Hãy quay lại các thẻ trước để thử nhé!')),
          h('div', { class: 'cta' },
            h('a', { class: 'btn', href: 'review.html' }, '📝 Làm bài ôn tập 5 câu'),
            h('button', { type: 'button', class: 'btn ghost', onclick: ctx.reset }, '↺ Học lại từ đầu')));
      }
    }
  ];

  Kit.start({
    storeKey: 'k6-bai10-lesson', title: 'Bài 10 · Làm quen với trình duyệt Web',
    scheme: 'https://t3036.github.io/lessons/level1/bai-10/index.html', hideSlug: true, accent: 'teal', homeUrl: '../../../level1.html', reviewUrl: 'review.html',
    sections: SECTIONS
  });
})();

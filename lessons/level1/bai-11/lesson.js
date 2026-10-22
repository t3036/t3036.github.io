/* ============================================================
   BÀI 11 — Các trình duyệt Web phổ biến và quản lí dấu trang · 30 phút
   6 thẻ (bước):  3′ + 6′ + 6′ + 6′ + 4′ + 5′ = 30′
   ============================================================ */
(function () {
  'use strict';
  const { h, ICON } = Kit;
  const P = html => h('p', { html });
  const ic = name => h('span', { class: 'ico', html: ICON[name] });

  /* ---------- 5 trình duyệt phổ biến ---------- */
  const BROWSERS = [
    { n: 'Google Chrome', img: 'img/chrome.png', dev: 'Google', tags: ['Google', 'Nền Chromium mã nguồn mở'], d: 'Trình duyệt do Google phát triển, được xây dựng trên nền Chromium (mã nguồn mở).' },
    { n: 'Microsoft Edge', img: 'img/edge.png', dev: 'Microsoft', tags: ['Microsoft', 'Nền Chromium mã nguồn mở'], d: 'Trình duyệt do Microsoft phát triển, cũng dùng nền Chromium (mã nguồn mở).' },
    { n: 'Safari', img: 'img/safari.png', dev: 'Apple', tags: ['Apple', 'Độc quyền'], d: 'Trình duyệt độc quyền do Apple phát triển.', alt: true },
    { n: 'Mozilla Firefox', img: 'img/firefox.png', dev: 'Mozilla', tags: ['Mozilla', 'Mã nguồn mở'], d: 'Trình duyệt Web mã nguồn mở do Mozilla phát triển.' },
    { n: 'Opera', img: 'img/opera.png', dev: 'Opera Software', tags: ['Opera Software', 'Miễn phí'], d: 'Trình duyệt Web miễn phí do công ty Opera Software phát triển.' }
  ];

  /* ---------- Các bước dạng "luồng" ---------- */
  const flow = (title, steps) => h('div', { class: 'card flow' },
    h('h3', {}, title),
    h('ol', {}, steps.map((s, i) => h('li', {}, h('span', { class: 'fb' }, 'B' + (i + 1)), h('span', { html: s })))));

  const SECTIONS = [

    /* ---------- 1. Khởi động · 3 phút ---------- */
    {
      id: 'khoi-dong', slug: 'khoi-dong', icon: '🚀', title: 'Khởi động', tab: 'Khởi động', min: 3,
      lead: 'Hôm qua Nam xem một trang Web khoa học rất hay. Hôm nay Nam muốn xem lại nhưng không nhớ địa chỉ.',
      gv: 'Hỏi học sinh: “Nam có thể làm gì?” (1 phút), ghi các ý lên bảng rồi cho lật đáp án. Đọc 4 mục tiêu. Nhắc lại Bài 10 (URL, Thanh địa chỉ, Siêu liên kết) trong 30 giây. Bấm “▶” ở góc phải để bắt đầu đếm 30 phút.',
      build(ctx) {
        const done = ctx.task('reveal');
        const reveal = h('div', { class: 'grid g2', hidden: true },
          h('div', { class: 'card pick' }, h('div', { class: 'big' }, '⭐'), h('h3', {}, 'Dấu trang (Bookmark)'), P('Nếu Nam đã <b>lưu trang đó từ trước</b>, chỉ cần bấm vào dấu trang.')),
          h('div', { class: 'card pick' }, h('div', { class: 'big' }, '🕘'), h('h3', {}, 'Lịch sử duyệt Web (History)'), P('Nếu quên lưu, Nam vẫn <b>tìm lại được trong danh sách các trang đã truy cập</b>.')));
        const btn = h('button', { type: 'button', class: 'btn', onclick: () => { reveal.hidden = false; btn.hidden = true; done(); } }, '🔓 Lật đáp án: Nam có những cách nào?');
        return h('div', {},
          h('div', { class: 'card bubble' }, h('div', { class: 'who' }, '🙋'), h('div', {}, h('b', {}, 'Câu hỏi cho cả lớp'), h('p', { style: 'margin:4px 0 12px' }, 'Làm thế nào để Nam mở lại trang Web đó thật nhanh?'), btn)),
          reveal,
          h('h2', {}, 'Sau buổi học này, em sẽ…'),
          h('div', { class: 'grid g2 goals' },
            [['🧭', 'Kể tên 5 trình duyệt phổ biến và biết ai phát triển chúng.'],
             ['🕹️', 'Dùng nút Back, Forward, Stop, Home, Refresh để điều hướng.'],
             ['⭐', 'Thêm, mở và xóa dấu trang; chỉ lưu những trang an toàn.'],
             ['🕘', 'Mở Lịch sử duyệt Web để tìm lại trang đã xem.']].map(g =>
              h('div', { class: 'card goal' }, h('span', { class: 'gi' }, g[0]), h('span', {}, g[1])))),
          h('h2', {}, 'Kế hoạch 30 phút'),
          h('ol', { class: 'plan' }, SECTIONS.map(s => h('li', {}, s.tab || s.title, h('small', {}, s.min + '′')))));
      }
    },

    /* ---------- 2. Trình duyệt phổ biến · 6 phút ---------- */
    {
      id: 'pho-bien', slug: 'trinh-duyet-pho-bien', icon: '🧭', title: 'Năm trình duyệt Web phổ biến', tab: 'Trình duyệt', min: 6,
      lead: 'Mỗi trình duyệt có một biểu tượng riêng và một đơn vị phát triển riêng.',
      gv: 'Chiếu từng thẻ (30 giây/thẻ). Giải thích “mã nguồn mở” (ai cũng xem được mã tạo nên phần mềm) và “độc quyền” (chỉ chủ sở hữu nắm giữ). Lưu ý: Chrome và Edge đều xây trên Chromium nên nhìn khá giống nhau. Sau đó học sinh làm 2 câu ghép / đúng-sai (3 phút).',
      build(ctx) {
        return h('div', {},
          h('div', { class: 'grid g2 brs' }, BROWSERS.map(b =>
            h('div', { class: 'card term-card' },
              h('img', { src: b.img, alt: 'Biểu tượng ' + b.n, width: 64, height: 64 }),
              h('div', {}, h('h3', {}, b.n), h('p', { style: 'margin:0;font-size:15.5px' }, b.d),
                h('div', { class: 'tags' }, b.tags.map((t, i) => h('span', { class: 'tag' + (i === 1 && /Độc quyền|Miễn phí/.test(t) ? ' alt' : '') }, t))))))),
          h('div', { class: 'note blue' }, P('<b>Mã nguồn mở</b>: ai cũng có thể xem mã tạo nên phần mềm. <b>Độc quyền</b>: chỉ công ty sở hữu mới nắm giữ mã của phần mềm.')),
          h('h2', {}, 'Kiểm tra nhanh'),
          ctx.quiz('matchLogo', 'Kiểm tra nhanh 1'),
          ctx.quiz('browserFacts', 'Kiểm tra nhanh 2'));
      }
    },

    /* ---------- 3. Điều hướng · 6 phút ---------- */
    {
      id: 'dieu-huong', slug: 'dieu-huong', icon: '🕹️', title: 'Điều hướng trên trình duyệt', tab: 'Điều hướng', min: 6,
      lead: 'Năm nút nhỏ cạnh thanh địa chỉ giúp em đi tới, quay lui, dừng và tải lại các trang Web.',
      gv: 'Làm mẫu 1 phút trên trình duyệt thật. Học sinh làm 6 nhiệm vụ trong cửa sổ mô phỏng (3 phút): quan sát dòng “Đã xem … trang · đang ở trang …” ở đáy cửa sổ để hiểu Back/Forward. Khi nhiệm vụ Stop: trang Khám phá khoa học tải mất 4 giây nên có thời gian bấm Stop.',
      build(ctx) {
        const btns = [['back', 'Back', 'Quay lại trang vừa xem trước đó.'],
          ['fwd', 'Forward', 'Đi tiếp tới trang em vừa quay lại từ đó (chỉ dùng được sau khi đã bấm Back).'],
          ['stop', 'Stop', 'Ngừng tải một trang Web. Khi trang đang tải, nút Refresh biến thành Stop.'],
          ['home', 'Home', 'Chuyển tới trang chủ.'],
          ['reload', 'Refresh', 'Tải lại trang Web hiện tại.']];
        return h('div', {},
          h('div', { class: 'navlist' }, btns.map(b => h('div', { class: 'card nv' }, h('span', { class: 'nvi' }, ic(b[0])), h('div', {}, h('h3', {}, b[1]), h('p', {}, b[2]))))),
          h('h2', {}, 'Thực hành: đi lại giữa các trang'),
          ctx.lab({ nav: true, start: 'truong-em.edu.vn' }, [
            { id: 'link', text: 'Bấm siêu liên kết “Thư viện xanh” để sang trang khác.' },
            { id: 'back', text: 'Bấm Back ← để quay lại trang vừa xem.' },
            { id: 'forward', text: 'Bấm Forward → để đi tiếp.' },
            { id: 'home', text: 'Bấm Home ⌂ để về trang chủ.' },
            { id: 'stop', text: 'Mở “Khám phá khoa học” rồi bấm Stop ✕ khi trang đang tải.' },
            { id: 'refresh', text: 'Bấm Refresh ⟳ để tải lại một trang.' }
          ]),
          h('h2', {}, 'Kiểm tra nhanh'),
          ctx.quiz('navIconMatch', 'Kiểm tra nhanh'));
      }
    },

    /* ---------- 4. Dấu trang · 6 phút ---------- */
    {
      id: 'dau-trang', slug: 'dau-trang', icon: '⭐', title: 'Dấu trang (Bookmarks)', tab: 'Dấu trang', min: 6,
      lead: 'Lưu lại trang hay, lần sau chỉ cần một cú bấm để quay lại.',
      gv: 'Đọc định nghĩa, làm mẫu thêm/xóa 1 dấu trang (1 phút). Học sinh làm 3 nhiệm vụ trong cửa sổ mô phỏng (2 phút): chú ý các nhãn B2, B3 trên hộp thoại. Nhấn mạnh phần AN TOÀN: chỉ lưu trang đáng tin; không lưu trang lạ, quảng cáo, đòi thông tin cá nhân. Sau đó làm 3 câu kiểm tra.',
      build(ctx) {
        return h('div', {},
          h('div', { class: 'def', html: '<b>Dấu trang (Bookmarks / Favorites)</b> là chức năng giúp <b>lưu các trang Web</b> để có thể <b>dễ dàng quay lại</b> vào lần sau.' }),
          h('div', { class: 'grid g2' },
            flow('➕ Thêm dấu trang', ['Nhấp vào biểu tượng ngôi sao ☆ trên thanh địa chỉ.', 'Đặt tên cho dấu trang.', 'Chọn <b>“Done”</b>.']),
            flow('🗑️ Xóa dấu trang', ['Nhấp <b>phải</b> vào dấu trang.', 'Chọn <b>Delete</b>.'])),
          h('h2', {}, 'Thực hành: quản lí dấu trang'),
          ctx.lab({ nav: true, bookmarks: true, start: 'truong-em.edu.vn', seedBookmarks: ['trochoi.edu.vn'] }, [
            { id: 'bmAdd', text: 'Thêm dấu trang: bấm ngôi sao ☆ → đặt tên → bấm Done.' },
            { id: 'bmOpen', text: 'Sang một trang khác, rồi bấm vào dấu trang trên thanh dấu trang để quay lại.' },
            { id: 'bmDelete', text: 'Nhấp phải (hoặc chạm giữ) vào một dấu trang rồi chọn Delete.' }
          ]),
          h('h2', {}, 'Dùng AI: lưu dấu trang cho an toàn'),
          h('div', { class: 'grid g2' },
            h('div', { class: 'card dos' }, h('h3', {}, '✅ Dấu trang giúp em'), P('Tránh <b>gõ sai địa chỉ</b> và tránh <b>truy cập nhầm trang giả mạo</b> khi dùng các công cụ AI.')),
            h('div', { class: 'card donts' }, h('h3', {}, '⛔ Học sinh không nên tự lưu'), h('ul', { class: 'nolist' }, ['Trang AI lạ', 'Trang quảng cáo', 'Trang yêu cầu thông tin cá nhân không rõ mục đích'].map(t => h('li', {}, t))))),
          h('h2', {}, 'Kiểm tra nhanh'),
          ctx.quiz('saveList', 'Kiểm tra nhanh 1'),
          ctx.quiz('addSteps', 'Kiểm tra nhanh 2'),
          ctx.quiz('aiBookmark', 'Kiểm tra nhanh 3'));
      }
    },

    /* ---------- 5. Lịch sử duyệt Web · 4 phút ---------- */
    {
      id: 'lich-su', slug: 'lich-su-duyet-web', icon: '🕘', title: 'Lịch sử duyệt Web', tab: 'Lịch sử', min: 4,
      lead: 'Quên không lưu dấu trang? Lịch sử vẫn nhớ giúp em.',
      gv: 'Làm mẫu mở History bằng cả hai cách: ba chấm → History và Ctrl+H (30 giây). Học sinh làm 2 nhiệm vụ (1,5 phút), nhận biết 3 phần ①②③ của trang Lịch sử. Chốt khác biệt: Dấu trang = em chủ động lưu; Lịch sử = trình duyệt tự ghi. Còn thời gian: nhắc học sinh chú ý quyền riêng tư khi dùng máy chung.',
      build(ctx) {
        return h('div', {},
          h('div', { class: 'def', html: '<b>Lịch sử duyệt Web (Browsing History)</b> là <b>danh sách các trang Web</b> mà bạn đã truy cập.' }),
          h('div', { class: 'grid g2' },
            flow('📂 Cách mở Lịch sử', ['Nhấp vào ba chấm ⋮ ở góc trên bên phải.', 'Nhấp chọn <b>History</b>.']),
            h('div', { class: 'card keycard' }, h('h3', {}, '⌨️ Hoặc dùng phím tắt'), h('div', { class: 'keys' }, h('kbd', {}, 'Ctrl'), '+', h('kbd', {}, 'H')))),
          h('h2', {}, 'Thực hành: mở Lịch sử'),
          ctx.lab({
            nav: true, history: true, start: 'truong-em.edu.vn',
            seedVisits: [{ host: 'trochoi.edu.vn', mins: 41 }, { host: 'thuvien.edu.vn', mins: 27 }, { host: 'khampha.edu.vn', mins: 12 }]
          }, [
            { id: 'history', text: 'Mở Lịch sử: bấm ba chấm ⋮ → History (hoặc bấm Ctrl + H).' },
            { id: 'histVisit', text: 'Tìm trang “Khám phá khoa học” trong danh sách rồi bấm để mở lại.' }
          ]),
          h('h2', {}, 'Dấu trang hay Lịch sử?'),
          h('div', { class: 'grid g2' },
            h('div', { class: 'card cmp' }, h('h3', {}, '⭐ Dấu trang'), h('ul', {}, [h('li', {}, 'Em ', h('b', {}, 'chủ động'), ' lưu.'), h('li', {}, 'Chỉ có những trang em đã đánh dấu.'), h('li', {}, 'Dùng cho trang em muốn quay lại thường xuyên.')])),
            h('div', { class: 'card cmp' }, h('h3', {}, '🕘 Lịch sử'), h('ul', {}, [h('li', {}, 'Trình duyệt ', h('b', {}, 'tự ghi'), ' lại.'), h('li', {}, 'Liệt kê mọi trang đã truy cập, kèm ngày và giờ.'), h('li', {}, 'Dùng để tìm lại trang em quên không lưu.')]))),
          h('h2', {}, 'Kiểm tra nhanh'),
          ctx.quiz('toolMatch', 'Kiểm tra nhanh'));
      }
    },

    /* ---------- 6. Tổng kết · 5 phút ---------- */
    {
      id: 'tong-ket', slug: 'tong-ket', icon: '🏁', title: 'Tổng kết và tự đánh giá', tab: 'Tổng kết', min: 5,
      lead: 'Cùng nhìn lại những điều quan trọng nhất của bài hôm nay.',
      gv: 'Cho cả lớp đọc 5 ý. Hỏi chốt: “Khi nào dùng Dấu trang, khi nào dùng Lịch sử?” và “Học sinh không nên lưu trang nào?”. Dành 3 phút để học sinh bắt đầu bài ôn tập (5 câu), phần còn lại giao về nhà.',
      build(ctx) {
        const s = ctx.summary();
        const recap = [['🧭', 'Năm trình duyệt phổ biến: Chrome (Google), Edge (Microsoft), Safari (Apple, độc quyền), Firefox (Mozilla, mã nguồn mở), Opera (miễn phí).'],
          ['🕹️', 'Back quay lại, Forward đi tiếp, Stop dừng tải, Home về trang chủ, Refresh tải lại.'],
          ['⭐', 'Dấu trang: nhấp ngôi sao → đặt tên → Done. Xóa: nhấp phải → Delete.'],
          ['🛡️', 'Chỉ lưu trang đáng tin; không lưu trang AI lạ, quảng cáo, hoặc trang đòi thông tin cá nhân không rõ mục đích.'],
          ['🕘', 'Lịch sử là danh sách trang đã truy cập; mở bằng ⋮ → History hoặc Ctrl + H.']];
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
    storeKey: 'k6-bai11-lesson', title: 'Bài 11 · Trình duyệt phổ biến và dấu trang',
    scheme: 'https://t3036.github.io/lessons/level1/bai-11/index.html', hideSlug: true, accent: 'orange', homeUrl: '../../../level1.html', reviewUrl: 'review.html',
    sections: SECTIONS
  });
})();

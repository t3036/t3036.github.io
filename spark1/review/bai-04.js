/* ============================================================
   DỮ LIỆU BÀI HỌC — BÀI 4: HỆ ĐIỀU HÀNH VÀ CHƯƠNG TRÌNH ỨNG DỤNG
   (IC3 GS6 Spark — Level 1 — Chủ đề: Căn bản về công nghệ)
   ------------------------------------------------------------
   File này dùng chung engine với các bài khác (app.js + style.css),
   chỉ khác nội dung. Cấu trúc và các dạng slide y hệt quy ước đã
   dùng — xem chú thích mẫu ở cuối file nếu cần đối chiếu.

   Lưu ý đặt tên: đây là "Bài 4" theo đúng số thứ tự trong bộ PDF
   gốc (K3_B04_HeDieuHanhVaUngDung), KHÁC với file lesson-data.js /
   bai-04.html cũ (bài mẫu về "App" dựng làm demo ban đầu) — nên đặt
   tên file này là lesson-data-b04-hdh.js để không đè lên nhau.

   Đây là BẢN THỬ đầu tiên chuyển từ PDF gốc sang dữ liệu tương tác.
   Vài chỗ mình đã chủ động diễn giải lại để hợp với các dạng slide
   hiện có (ghi chú ngay tại chỗ đó), bạn xem qua và chỉnh lại câu
   chữ / mật khẩu nếu cần.
   ============================================================ */

/* ============================================================
   MẬT KHẨU TỪNG PHẦN — sửa ở đây, không cần đi tìm trong từng phần
   ------------------------------------------------------------
   Để trống '' cho phần nào muốn luôn mở sẵn (không cần mật khẩu).
   ============================================================ */
const PASSWORDS = {
  s1: 'HDH01',   // Phần 1 — Khái niệm hệ điều hành
  s2: 'HDH02',   // Phần 2 — Một số hệ điều hành thông dụng
  s3: 'HDH03',   // Phần 3 — Thanh tác vụ của hệ điều hành Windows
  s4: 'HDH04',   // Phần 4 — Một số chương trình ứng dụng trên máy tính để bàn
  s5: 'HDH05',   // Phần 5 — Khởi động công cụ AI an toàn
  s6: 'HDH06'    // Phần 6 — Ôn tập
};

const LESSON = {
  id:    'bai4-hdh',
  icon:  '🖥️',
  title: 'Bài 4 — Hệ điều hành và chương trình ứng dụng',

  sections: [

    /* ============================================================
       PHẦN 1 — Khái niệm hệ điều hành (mật khẩu: HDH01)
       ============================================================ */
    {
      id: 's1',
      title: 'Khái niệm hệ điều hành',
      password: PASSWORDS.s1,
      slides: [
        /* Slide 1 (Trang 1 / 32) */
        {
          type: 'info',
          topic: 'Phần 1 · Khái niệm HĐH',
          title: 'Khái niệm hệ điều hành',
          content: '<b>Hệ điều hành (Operating System)</b> là một <b>phần mềm hệ thống</b>, là một <b>chương trình máy tính đặc biệt</b>, quản lí tất cả các phần mềm và phần cứng trên máy tính.',
          imageUrl: null,
          things: [
            { icon: '👨‍👩‍👧', name: 'Người dùng', en: 'Em, thầy cô, cha mẹ...' },
            { icon: '🖥️', name: 'Phần cứng', en: 'Chuột, bàn phím, màn hình...' },
            { icon: '🎮', name: 'Phần mềm', en: 'Trò chơi, trình duyệt, công cụ AI...' }
          ],
          remember: 'Không có hệ điều hành? Máy tính sẽ <b>không hoạt động được</b> — mọi thứ đều do hệ điều hành điều phối.'
        },

        /* Slide 2 (Trang 2 / 32) */
        {
          type: 'info',
          topic: 'Phần 1 · Khái niệm HĐH',
          title: 'Một số ví dụ về hệ điều hành',
          content: '❌ Không có <b>hệ điều hành</b> thì máy tính không khởi động được.<br>❌ Không có <b>hệ điều hành iOS</b>, em không thể cài Game trên điện thoại iPhone.<br>❌ Không có <b>hệ điều hành Windows</b>, thì chuột và bàn phím không hoạt động được.',
          imageUrl: null
        },

        /* Slide 3 (Trang 3 / 32) */
        {
          type: 'quiz_single',
          topic: 'Luyện tập',
          question: 'Em hãy cho biết, phần mềm nào được khởi chạy đầu tiên khi khởi động một máy tính?',
          options: [
            'Trình quản lý cơ sở dữ liệu',
            'Các ứng dụng người dùng',
            'Các tiện ích hệ thống',
            'Hệ điều hành'
          ],
          correctAnswer: 3,
          hint: 'Đây là phần mềm "quản lí" tất cả các phần mềm và phần cứng khác, nên phải chạy trước tiên.',
          explain: 'Hệ điều hành phải được khởi chạy đầu tiên để quản lí phần cứng, sau đó các phần mềm/ứng dụng khác mới có thể hoạt động.'
        },

        /* Slide 4 (Trang 4 / 32) */
        {
          type: 'info',
          topic: 'Phần 1 · Chức năng của HĐH',
          title: 'Chức năng của hệ điều hành',
          content: 'Hệ điều hành có 2 chức năng chính:',
          imageUrl: null,
          things: [
            { icon: '🖱️', name: 'Quản lí thiết bị phần cứng', en: 'Màn hình, máy in, bàn phím, loa, chuột, tai nghe...' },
            { icon: '📁', name: 'Quản lí tập tin', en: 'Các tài liệu Word, Excel, PowerPoint được lưu trữ trên máy tính.' }
          ]
        },

        /* Slide 5 (Trang 5 / 32) */
        {
          type: 'quiz_multiple',
          topic: 'Luyện tập',
          question: 'Em hãy cho biết, hai nhiệm vụ của hệ điều hành là gì? (Chọn 2)',
          options: [
            'Quản lý các thiết bị phần cứng',
            'Quản lý thư điện tử',
            'Tạo bảng tính',
            'Diệt virus',
            'Quản lý tập tin'
          ],
          correctAnswers: [0, 4],
          hint: 'Nhớ lại 2 chức năng chính vừa học ở slide trước.',
          explain: 'Hệ điều hành quản lí các thiết bị phần cứng và quản lí tập tin trên máy tính — 3 lựa chọn còn lại là việc của các phần mềm ứng dụng khác.'
        }
      ]
    },

    /* ============================================================
       PHẦN 2 — Một số hệ điều hành thông dụng (mật khẩu: HDH02)
       ============================================================ */
    {
      id: 's2',
      title: 'Một số hệ điều hành thông dụng',
      password: PASSWORDS.s2,
      slides: [
        /* Slide 6 (Trang 6 / 32) */
        {
          type: 'info',
          topic: 'Phần 2 · HĐH thông dụng',
          title: 'Một số hệ điều hành thông dụng',
          content: 'Hệ điều hành được chia theo loại thiết bị sử dụng:',
          imageUrl: null,
          things: [
            { icon: '🪟', name: 'Windows 10', en: 'HĐH trên máy tính' },
            { icon: '🍎', name: 'macOS', en: 'HĐH trên máy tính' },
            { icon: '🐧', name: 'Linux', en: 'HĐH trên máy tính' },
            { icon: '📱', name: 'iOS', en: 'HĐH trên thiết bị di động' },
            { icon: '🤖', name: 'Android', en: 'HĐH trên thiết bị di động' },
            { icon: '📟', name: 'Symbian OS', en: 'HĐH trên di động (đời cũ)' },
            { icon: '🍓', name: 'BlackBerry OS', en: 'HĐH trên di động (đời cũ)' }
          ]
        },

        /* Slide 7 (Trang 7 / 32)
           Ghi chú: PDF gốc yêu cầu nối tên HĐH với ẢNH logo. Vì không có
           file ảnh logo, mình đổi "right" thành mô tả ngắn của logo đó
           bằng chữ, để vẫn giữ được tinh thần "nối tên với biểu tượng". */
        {
          type: 'quiz_matching',
          topic: 'Luyện tập',
          question: 'Em hãy nối tên các hệ điều hành di động với biểu tượng tương ứng.',
          pairs: [
            { icon: '🤖', left: 'Android', right: 'Biểu tượng robot xanh lá' },
            { icon: '🍎', left: 'iOS', right: 'Biểu tượng quả táo' },
            { icon: '🪟', left: 'Windows', right: 'Biểu tượng 4 ô vuông màu' },
            { icon: '📟', left: 'Symbian', right: 'Biểu tượng chữ S màu xám' },
            { icon: '🍓', left: 'BlackBerry', right: 'Biểu tượng quả dâu đen' }
          ],
          hint: 'Mỗi hãng có logo đặc trưng — Android là chú robot xanh, Apple là quả táo...',
          explain: 'Android dùng logo robot xanh lá, iOS dùng logo quả táo, Windows dùng 4 ô vuông màu, Symbian dùng chữ S, BlackBerry dùng hình quả dâu đen.'
        },

        /* Slide 8 (Trang 8 / 32) */
        {
          type: 'quiz_single',
          topic: 'Luyện tập',
          question: 'Em hãy cho biết, phần mềm nào sau đây là hệ điều hành?',
          options: ['Google', 'Microsoft Windows', 'Apple iPad', 'Microsoft Word'],
          correctAnswer: 1,
          hint: 'iPad là một thiết bị, không phải phần mềm. Google và Word là phần mềm nhưng không phải hệ điều hành.',
          explain: 'Microsoft Windows là hệ điều hành. Google là công cụ tìm kiếm, Apple iPad là thiết bị, Microsoft Word là phần mềm ứng dụng.'
        },

        /* Slide 9 (Trang 9 / 32) */
        {
          type: 'quiz_dropdown',
          topic: 'Luyện tập',
          question: 'Em hãy chọn Đúng hoặc Sai cho mỗi phát biểu sau: Windows là hệ điều hành độc quyền. ___ Linux là hệ điều hành độc quyền. ___ iOS là hệ điều hành trên máy tính. ___ Android là hệ điều hành dành cho điện thoại iPhone. ___ BlackBerry OS là hệ điều hành dành cho điện thoại BlackBerry. ___',
          blanks: [
            { options: ['Đúng', 'Sai'], correctAnswer: 0 },
            { options: ['Đúng', 'Sai'], correctAnswer: 1 },
            { options: ['Đúng', 'Sai'], correctAnswer: 1 },
            { options: ['Đúng', 'Sai'], correctAnswer: 1 },
            { options: ['Đúng', 'Sai'], correctAnswer: 0 }
          ],
          hint: 'Nhớ lại: Windows độc quyền (Microsoft), Linux mã nguồn mở, iOS chỉ dùng cho di động của Apple, Android không phải của Apple.',
          explain: 'Windows là độc quyền (Đúng). Linux là mã nguồn mở, không phải độc quyền (Sai). iOS chỉ chạy trên thiết bị di động của Apple, không phải máy tính (Sai). Android dành cho điện thoại Android, không phải iPhone (Sai). BlackBerry OS đúng là dành cho điện thoại BlackBerry (Đúng).'
        }
      ]
    },

    /* ============================================================
       PHẦN 3 — Thanh tác vụ của hệ điều hành Windows (mật khẩu: HDH03)
       ============================================================ */
    {
      id: 's3',
      title: 'Thanh tác vụ của hệ điều hành Windows',
      password: PASSWORDS.s3,
      slides: [
        /* Slide 10 (Trang 10 / 32) */
        {
          type: 'info',
          topic: 'Phần 3 · Thanh tác vụ Windows',
          title: 'Thanh tác vụ (Taskbar)',
          content: 'Là một phần giao diện của hệ điều hành, thường nằm ở phía dưới màn hình trên Windows.',
          imageUrl: null
        },

        /* Slide 11 (Trang 11 / 32) */
        {
          type: 'info',
          topic: 'Phần 3 · Thanh tác vụ Windows',
          title: 'Nút Start',
          content: 'Nằm ở góc trái thanh tác vụ, giúp truy cập các ứng dụng, cài đặt và chức năng hệ thống.',
          imageUrl: null,
          remember: 'Khi nhấn <b>nút Start</b> và xem qua danh sách ứng dụng, em sẽ tìm thấy các ứng dụng đã cài đặt theo <b>thứ tự bảng chữ cái</b>.'
        },

        /* Slide 12 (Trang 12 / 32) */
        {
          type: 'info',
          topic: 'Phần 3 · Thanh tác vụ Windows',
          title: 'Search Box (Thanh tìm kiếm)',
          content: 'Thường nằm cạnh nút Start, cho phép tìm kiếm ứng dụng, tập tin hoặc thông tin trực tuyến.',
          imageUrl: null
        },

        /* Slide 13 (Trang 13 / 32)
           Ghi chú: PDF gốc cho hình thanh tác vụ có đánh dấu A/B/C.../G và
           hỏi "nhấp vào đâu". Vì không có ảnh, mình chuyển thành mô tả
           bằng lời cho từng vị trí thay cho hình. */
        {
          type: 'quiz_single',
          topic: 'Luyện tập',
          question: 'Trên thanh tác vụ, nút Start (biểu tượng cửa sổ) nằm ở góc trái, ngay cạnh đó là ô "Type here to search". Em muốn tìm một trò chơi đã được cài đặt trên máy tính của mình — em nên nhấp vào đâu?',
          options: [
            'Nút Start (biểu tượng cửa sổ)',
            'Ô tìm kiếm "Type here to search"',
            'Biểu tượng đồng hồ / ngày giờ',
            'Biểu tượng loa (âm lượng)'
          ],
          correctAnswer: 0,
          hint: 'Ô nào cho phép em gõ tên trò chơi để tìm kiếm ngay?',
          explain: 'Ô tìm kiếm (Search Box) cho phép gõ tên trò chơi và tìm ngay ứng dụng đã cài đặt, nhanh hơn cách lục qua danh sách ở nút Start.'
        }
      ]
    },

    /* ============================================================
       PHẦN 4 — Một số chương trình ứng dụng trên máy tính để bàn
       (mật khẩu: HDH04)
       ============================================================ */
    {
      id: 's4',
      title: 'Một số chương trình ứng dụng trên máy tính để bàn',
      password: PASSWORDS.s4,
      slides: [
        /* Slide 14 (Trang 14 / 32) */
        {
          type: 'info',
          topic: 'Phần 4 · Chương trình ứng dụng',
          title: 'Một số chương trình ứng dụng trên máy tính để bàn',
          content: 'Mỗi chương trình ứng dụng phục vụ một công việc cụ thể:',
          imageUrl: null,
          things: [
            { icon: '📝', name: 'Microsoft Word', en: 'Xử lí văn bản' },
            { icon: '📊', name: 'Microsoft Excel', en: 'Xử lí bảng tính' },
            { icon: '📽️', name: 'Microsoft PowerPoint', en: 'Trình chiếu' },
            { icon: '🎨', name: 'Adobe Photoshop', en: 'Thiết kế đồ hoạ' }
          ]
        },

        /* Slide 15 (Trang 15 / 32) */
        {
          type: 'quiz_single',
          topic: 'Luyện tập',
          question: 'Em hãy cho biết, phần mềm nào dưới đây là phần mềm ứng dụng?',
          options: ['iOS', 'Microsoft Word', 'Flash drive', 'Windows'],
          correctAnswer: 1,
          hint: 'iOS và Windows là hệ điều hành. Flash drive là một thiết bị phần cứng (USB).',
          explain: 'Microsoft Word là phần mềm ứng dụng (dùng để soạn văn bản). iOS và Windows là hệ điều hành, Flash drive là phần cứng lưu trữ.'
        },

        /* Slide 16 (Trang 16 / 32) */
        {
          type: 'quiz_dropdown',
          topic: 'Luyện tập',
          question: 'Em hãy cho biết, phương pháp nào sau đây được dùng để khởi động ứng dụng đã cài đặt trên máy tính để bàn — chọn Có hoặc Không cho mỗi cách: Nhấp chuột trái vào biểu tượng của chương trình trên Thanh tác vụ và chọn Open. ___ Nhấp đúp chuột vào biểu tượng lối tắt của chương trình trên màn hình nền (Desktop). ___ Chọn tất cả các biểu tượng lối tắt trên màn hình và nhấn Enter trên bàn phím. ___',
          blanks: [
            { options: ['Có', 'Không'], correctAnswer: 1 },
            { options: ['Có', 'Không'], correctAnswer: 0 },
            { options: ['Có', 'Không'], correctAnswer: 1 }
          ],
          hint: 'Cách thông dụng nhất để mở 1 ứng dụng là nhấp đúp (double-click) vào biểu tượng của nó.',
          explain: 'Nhấp đúp vào biểu tượng lối tắt trên Desktop là cách đúng để khởi động ứng dụng (Có). Hai cách còn lại không phải cách khởi động ứng dụng thông thường (Không).'
        },

        /* Slide 17 (Trang 17 / 32) */
        {
          type: 'quiz_dropdown',
          topic: 'Luyện tập',
          question: 'Em hãy chọn Có nếu là cách để thoát khỏi ứng dụng trên máy tính để bàn và chọn Không nếu không phải: Rút phích cắm màn hình. ___ Nhấp vào nút có dấu "X" ở góc phải trên cùng của cửa sổ. ___ Nhấp chuột phải vào biểu tượng của chương trình trên Thanh tác vụ và chọn Close, Exit hoặc Disable. ___',
          blanks: [
            { options: ['Có', 'Không'], correctAnswer: 1 },
            { options: ['Có', 'Không'], correctAnswer: 0 },
            { options: ['Có', 'Không'], correctAnswer: 0 }
          ],
          hint: 'Rút phích cắm màn hình chỉ tắt màn hình hiển thị, không tắt được ứng dụng đang chạy trong máy.',
          explain: 'Nhấp vào dấu "X" hoặc chuột phải chọn Close/Exit đều là cách đúng để thoát ứng dụng (Có). Rút phích cắm màn hình không đóng được ứng dụng (Không).'
        },

        /* Slide 18 (Trang 18 / 32) */
        {
          type: 'quiz_single',
          topic: 'Luyện tập',
          question: 'Em sẽ tìm thấy lệnh Đóng (Close) trên thẻ tab nào sau đây trong Microsoft Word?',
          options: ['File', 'Home', 'Insert', 'View'],
          correctAnswer: 0,
          hint: 'Các lệnh liên quan đến quản lí tệp (mở, lưu, đóng, in...) thường nằm trong thẻ đầu tiên.',
          explain: 'Thẻ "File" chứa các lệnh quản lí tệp như Open, Save, Close, Print... — đây là nơi có lệnh Đóng (Close).'
        }
      ]
    },

    /* ============================================================
       PHẦN 5 — Khởi động công cụ AI an toàn (mật khẩu: HDH05)
       ============================================================ */
    {
      id: 's5',
      title: 'Khởi động công cụ AI an toàn',
      password: PASSWORDS.s5,
      slides: [
        /* Slide 19 (Trang 19 / 32) */
        {
          type: 'info',
          topic: 'Phần 5 · Khởi động công cụ AI an toàn',
          title: 'Để dùng công cụ AI, thiết bị thường cần có',
          content: 'Quy trình từ thiết bị đến kết quả học tập khi dùng công cụ AI:',
          imageUrl: null,
          things: [
            { icon: '💻', name: 'Thiết bị', en: 'Máy tính, điện thoại, máy tính bảng' },
            { icon: '🪟', name: 'Hệ điều hành', en: 'Windows, Android, iOS...' },
            { icon: '🌐', name: 'Trình duyệt / Ứng dụng', en: 'Chrome, Edge, ứng dụng học tập' },
            { icon: '🤖', name: 'Công cụ AI', en: 'Trợ lý AI hỗ trợ học tập' },
            { icon: '🌟', name: 'Kết quả học tập', en: 'Em hoàn thành bài tốt hơn' }
          ]
        },

        /* Slide 20 (Trang 20 / 32) */
        {
          type: 'info',
          topic: 'Phần 5 · Khởi động công cụ AI an toàn',
          title: 'Dùng công cụ AI an toàn',
          content: 'Một số công cụ AI chạy trên Web nên cần trình duyệt và Internet. Một số công cụ AI nằm ngay trong ứng dụng học tập.',
          imageUrl: null,
          remember: '<b>Lưu ý:</b> Khi một ứng dụng AI yêu cầu <b>cài đặt, cập nhật, dùng camera, micro, vị trí hoặc tệp</b>, em cần <b>dừng lại</b> và <b>hỏi giáo viên hoặc người lớn</b> trước khi đồng ý.'
        },

        /* Slide 21 (Trang 21 / 32) — slide hoàn thành RIÊNG cho bài học
           chính (5 phần lý thuyết + luyện tập), tách biệt với slide hoàn
           thành của phần Ôn tập ở cuối bài. Không có resetScope nên nút
           ở đây dùng hành vi mặc định: "Tiếp theo" (vì chưa phải slide
           cuối cùng của toàn bài — Ôn tập vẫn còn ở sau). */
        {
          type: 'info',
          final: true,
          scoreSections: [0, 1, 2, 3, 4],
          topic: 'Hoàn thành',
          title: 'Chúc mừng em đã học xong Bài 4!',
          content: 'Em đã hiểu được khái niệm hệ điều hành, biết một số hệ điều hành thông dụng, cách dùng thanh tác vụ Windows, một số chương trình ứng dụng trên máy tính để bàn, và cách khởi động công cụ AI an toàn.',
          imageUrl: null,
          remember: 'Muốn ôn lại toàn bộ câu hỏi của bài, bấm "Tiếp theo" để sang phần <b>Ôn tập</b> ngay sau đây.'
        }
      ]
    },

    /* ============================================================
       PHẦN 6 — Ôn tập (mật khẩu: HDH06)
       ------------------------------------------------------------
       Gom lại TẤT CẢ câu hỏi (bỏ hết slide lý thuyết) từ 5 phần
       trên để học sinh luyện lại. Đáp án làm ở đây độc lập hoàn
       toàn với đáp án đã làm ở phần gốc.
       ============================================================ */
    {
      id: 's6',
      title: 'Ôn tập',
      password: PASSWORDS.s6,
      slides: [
        /* Slide 22 (Trang 22 / 32) */
        {
          type: 'quiz_single',
          topic: 'Ôn tập',
          question: 'Em hãy cho biết, phần mềm nào được khởi chạy đầu tiên khi khởi động một máy tính?',
          options: [
            'Trình quản lý cơ sở dữ liệu',
            'Các ứng dụng người dùng',
            'Các tiện ích hệ thống',
            'Hệ điều hành'
          ],
          correctAnswer: 3,
          hint: 'Đây là phần mềm "quản lí" tất cả các phần mềm và phần cứng khác, nên phải chạy trước tiên.',
          explain: 'Hệ điều hành phải được khởi chạy đầu tiên để quản lí phần cứng, sau đó các phần mềm/ứng dụng khác mới có thể hoạt động.'
        },

        /* Slide 23 (Trang 23 / 32) */
        {
          type: 'quiz_multiple',
          topic: 'Ôn tập',
          question: 'Em hãy cho biết, hai nhiệm vụ của hệ điều hành là gì? (Chọn 2)',
          options: [
            'Quản lý các thiết bị phần cứng',
            'Quản lý thư điện tử',
            'Tạo bảng tính',
            'Diệt virus',
            'Quản lý tập tin'
          ],
          correctAnswers: [0, 4],
          hint: 'Nhớ lại 2 chức năng chính của hệ điều hành.',
          explain: 'Hệ điều hành quản lí các thiết bị phần cứng và quản lí tập tin trên máy tính — 3 lựa chọn còn lại là việc của các phần mềm ứng dụng khác.'
        },

        /* Slide 24 (Trang 24 / 32) */
        {
          type: 'quiz_matching',
          topic: 'Ôn tập',
          question: 'Em hãy nối tên các hệ điều hành di động với biểu tượng tương ứng.',
          pairs: [
            { icon: '🤖', left: 'Android', right: 'Biểu tượng robot xanh lá' },
            { icon: '🍎', left: 'iOS', right: 'Biểu tượng quả táo' },
            { icon: '🪟', left: 'Windows', right: 'Biểu tượng 4 ô vuông màu' },
            { icon: '📟', left: 'Symbian', right: 'Biểu tượng chữ S màu xám' },
            { icon: '🍓', left: 'BlackBerry', right: 'Biểu tượng quả dâu đen' }
          ],
          hint: 'Mỗi hãng có logo đặc trưng — Android là chú robot xanh, Apple là quả táo...',
          explain: 'Android dùng logo robot xanh lá, iOS dùng logo quả táo, Windows dùng 4 ô vuông màu, Symbian dùng chữ S, BlackBerry dùng hình quả dâu đen.'
        },

        /* Slide 25 (Trang 25 / 32) */
        {
          type: 'quiz_single',
          topic: 'Ôn tập',
          question: 'Em hãy cho biết, phần mềm nào sau đây là hệ điều hành?',
          options: ['Google', 'Microsoft Windows', 'Apple iPad', 'Microsoft Word'],
          correctAnswer: 1,
          hint: 'iPad là một thiết bị, không phải phần mềm. Google và Word là phần mềm nhưng không phải hệ điều hành.',
          explain: 'Microsoft Windows là hệ điều hành. Google là công cụ tìm kiếm, Apple iPad là thiết bị, Microsoft Word là phần mềm ứng dụng.'
        },

        /* Slide 26 (Trang 26 / 32) */
        {
          type: 'quiz_dropdown',
          topic: 'Ôn tập',
          question: 'Em hãy chọn Đúng hoặc Sai cho mỗi phát biểu sau: Windows là hệ điều hành độc quyền. ___ Linux là hệ điều hành độc quyền. ___ iOS là hệ điều hành trên máy tính. ___ Android là hệ điều hành dành cho điện thoại iPhone. ___ BlackBerry OS là hệ điều hành dành cho điện thoại BlackBerry. ___',
          blanks: [
            { options: ['Đúng', 'Sai'], correctAnswer: 0 },
            { options: ['Đúng', 'Sai'], correctAnswer: 1 },
            { options: ['Đúng', 'Sai'], correctAnswer: 1 },
            { options: ['Đúng', 'Sai'], correctAnswer: 1 },
            { options: ['Đúng', 'Sai'], correctAnswer: 0 }
          ],
          hint: 'Nhớ lại: Windows độc quyền (Microsoft), Linux mã nguồn mở, iOS chỉ dùng cho di động của Apple, Android không phải của Apple.',
          explain: 'Windows là độc quyền (Đúng). Linux là mã nguồn mở, không phải độc quyền (Sai). iOS chỉ chạy trên thiết bị di động của Apple, không phải máy tính (Sai). Android dành cho điện thoại Android, không phải iPhone (Sai). BlackBerry OS đúng là dành cho điện thoại BlackBerry (Đúng).'
        },

        /* Slide 27 (Trang 27 / 32) */
        {
          type: 'quiz_single',
          topic: 'Ôn tập',
          question: 'Trên thanh tác vụ, nút Start (biểu tượng cửa sổ) nằm ở góc trái, ngay cạnh đó là ô "Type here to search". Em muốn tìm một trò chơi đã được cài đặt trên máy tính của mình — em nên nhấp vào đâu?',
          options: [
            'Nút Start (biểu tượng cửa sổ)',
            'Ô tìm kiếm "Type here to search"',
            'Biểu tượng đồng hồ / ngày giờ',
            'Biểu tượng loa (âm lượng)'
          ],
          correctAnswer: 1,
          hint: 'Ô nào cho phép em gõ tên trò chơi để tìm kiếm ngay?',
          explain: 'Ô tìm kiếm (Search Box) cho phép gõ tên trò chơi và tìm ngay ứng dụng đã cài đặt, nhanh hơn cách lục qua danh sách ở nút Start.'
        },

        /* Slide 28 (Trang 28 / 32) */
        {
          type: 'quiz_single',
          topic: 'Ôn tập',
          question: 'Em hãy cho biết, phần mềm nào dưới đây là phần mềm ứng dụng?',
          options: ['iOS', 'Microsoft Word', 'Flash drive', 'Windows'],
          correctAnswer: 1,
          hint: 'iOS và Windows là hệ điều hành. Flash drive là một thiết bị phần cứng (USB).',
          explain: 'Microsoft Word là phần mềm ứng dụng (dùng để soạn văn bản). iOS và Windows là hệ điều hành, Flash drive là phần cứng lưu trữ.'
        },

        /* Slide 29 (Trang 29 / 32) */
        {
          type: 'quiz_dropdown',
          topic: 'Ôn tập',
          question: 'Em hãy cho biết, phương pháp nào sau đây được dùng để khởi động ứng dụng đã cài đặt trên máy tính để bàn — chọn Có hoặc Không cho mỗi cách: Nhấp chuột trái vào biểu tượng của chương trình trên Thanh tác vụ và chọn Open. ___ Nhấp đúp chuột vào biểu tượng lối tắt của chương trình trên màn hình nền (Desktop). ___ Chọn tất cả các biểu tượng lối tắt trên màn hình và nhấn Enter trên bàn phím. ___',
          blanks: [
            { options: ['Có', 'Không'], correctAnswer: 1 },
            { options: ['Có', 'Không'], correctAnswer: 0 },
            { options: ['Có', 'Không'], correctAnswer: 1 }
          ],
          hint: 'Cách thông dụng nhất để mở 1 ứng dụng là nhấp đúp (double-click) vào biểu tượng của nó.',
          explain: 'Nhấp đúp vào biểu tượng lối tắt trên Desktop là cách đúng để khởi động ứng dụng (Có). Hai cách còn lại không phải cách khởi động ứng dụng thông thường (Không).'
        },

        /* Slide 30 (Trang 30 / 32) */
        {
          type: 'quiz_dropdown',
          topic: 'Ôn tập',
          question: 'Em hãy chọn Có nếu là cách để thoát khỏi ứng dụng trên máy tính để bàn và chọn Không nếu không phải: Rút phích cắm màn hình. ___ Nhấp vào nút có dấu "X" ở góc phải trên cùng của cửa sổ. ___ Nhấp chuột phải vào biểu tượng của chương trình trên Thanh tác vụ và chọn Close, Exit hoặc Disable. ___',
          blanks: [
            { options: ['Có', 'Không'], correctAnswer: 1 },
            { options: ['Có', 'Không'], correctAnswer: 0 },
            { options: ['Có', 'Không'], correctAnswer: 0 }
          ],
          hint: 'Rút phích cắm màn hình chỉ tắt màn hình hiển thị, không tắt được ứng dụng đang chạy trong máy.',
          explain: 'Nhấp vào dấu "X" hoặc chuột phải chọn Close/Exit đều là cách đúng để thoát ứng dụng (Có). Rút phích cắm màn hình không đóng được ứng dụng (Không).'
        },

        /* Slide 31 (Trang 31 / 32) */
        {
          type: 'quiz_single',
          topic: 'Ôn tập',
          question: 'Em sẽ tìm thấy lệnh Đóng (Close) trên thẻ tab nào sau đây trong Microsoft Word?',
          options: ['File', 'Home', 'Insert', 'View'],
          correctAnswer: 0,
          hint: 'Các lệnh liên quan đến quản lí tệp (mở, lưu, đóng, in...) thường nằm trong thẻ đầu tiên.',
          explain: 'Thẻ "File" chứa các lệnh quản lí tệp như Open, Save, Close, Print... — đây là nơi có lệnh Đóng (Close).'
        },

        /* Slide 32 (Trang 32 / 32) — slide hoàn thành RIÊNG của phần Ôn tập.
           resetScope:'section' báo cho app.js biết: nút ở đây chỉ làm lại
           10 câu của phần Ôn tập (giữ nguyên tiến trình 5 phần trước), và
           điểm số hiển thị cũng chỉ tính trong phạm vi phần này. */
        {
          type: 'info',
          final: true,
          resetScope: 'section',
          topic: 'Hoàn thành',
          title: 'Em đã ôn tập xong Bài 4!',
          content: 'Xem lại điểm số bên dưới. Nếu muốn luyện thêm lần nữa, bấm nút "Làm lại phần này" — các đáp án của 5 phần học trước sẽ không bị ảnh hưởng.',
          imageUrl: null
        }
      ]
    }
  ]
};


/* ============================================================
   MẪU KHAI BÁO CÁC DẠNG SLIDE (tham khảo khi thêm nội dung mới)
   ------------------------------------------------------------
   Đặt bên trong mảng "slides" của bất kỳ section nào ở trên.
   Toàn bộ các dạng đều bắt buộc trả lời đúng mới bấm "Tiếp theo"
   được, trừ dạng "info".

   Slide "hoàn thành" cuối 1 phần/bài: thêm final:true để hiện điểm số
   và đổi nút cuối trang. Nếu muốn nút đó chỉ làm lại RIÊNG phần chứa
   slide này (không đụng các phần khác) thay vì học lại từ đầu cả bài,
   thêm resetScope:'section' — điểm số hiển thị cũng chỉ tính trong
   phần đó (dùng cho các phần "Ôn tập" gộp câu hỏi từ nhiều phần khác).

   Ngược lại, slide hoàn thành của BÀI CHÍNH (đứng trước phần Ôn tập)
   nên khai báo scoreSections:[0,1,2,3,4] (liệt kê đúng chỉ số các phần
   chính, bắt đầu từ 0) để không cộng nhầm điểm của các câu Ôn tập vào.
   ============================================================ */

// { type:'info', topic:'', title:'', content:'', imageUrl:null,
//   things:[{icon:'',name:'',en:''}], remember:'' }

// { type:'quiz_single', topic:'', question:'', options:['','','',''],
//   correctAnswer:0, hint:'', explain:'' }

// { type:'quiz_multiple', topic:'', question:'', options:['','','',''],
//   correctAnswers:[0,2], hint:'', explain:'' }

// { type:'quiz_dragdrop', topic:'', question:'',
//   zones:[{label:'',item:''}], hint:'', explain:'' }

// { type:'quiz_dropdown', topic:'', question:'... ___ ...',
//   blanks:[{options:['','',''],correctAnswer:0}], hint:'', explain:'' }

// { type:'quiz_matching', topic:'', question:'',
//   pairs:[{icon:'',left:'',right:''}], hint:'', explain:'' }

// { type:'quiz_hotspot', topic:'', question:'', imageUrl:null,
//   spots:[{label:'',x:10,y:15,w:25,h:25,correct:true}], hint:'', explain:'' }
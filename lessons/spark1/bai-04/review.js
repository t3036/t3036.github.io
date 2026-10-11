/* ============================================================
   DỮ LIỆU TRANG ÔN TẬP — BÀI 4: HỆ ĐIỀU HÀNH VÀ CHƯƠNG TRÌNH ỨNG DỤNG
   (tách từ phần Ôn tập của bai-04.js; dùng chung engine lesson.js)
   ============================================================ */

const LESSON = {
  id:    'bai4-hdh-on-tap',
  icon:  '🖥️',
  title: 'Ôn tập Bài 4 — Hệ điều hành và chương trình ứng dụng',

  sections: [
    /* ============================================================
       PHẦN 6 — Ôn tập
       ------------------------------------------------------------
       Gom lại TẤT CẢ câu hỏi (bỏ hết slide lý thuyết) từ 5 phần
       trên để học sinh luyện lại. Đáp án làm ở đây độc lập hoàn
       toàn với đáp án đã làm ở phần gốc.
       ============================================================ */
    {
      id: 's1',
      title: 'Ôn tập',
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

        /* Slide hoàn thành */
        {
          type: 'info',
          final: true,
          topic: 'Hoàn thành',
          title: 'Em đã ôn tập xong Bài 4!',
          content: 'Xem lại điểm số bên dưới. Nếu muốn luyện thêm lần nữa, bấm nút làm lại.',
          imageUrl: null
        }
      ]
    }
  ]
};

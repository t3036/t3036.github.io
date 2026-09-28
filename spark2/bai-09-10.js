/* ============================================================
   DỮ LIỆU BÀI HỌC — BÀI 9 + 10: CÁC KHÁI NIỆM CƠ BẢN CỦA TRÌNH DUYỆT WEB
   (IC3 GS6 Spark — Level 2 — Chủ đề: Quản lí thông tin)
   ------------------------------------------------------------
   File này dùng chung engine với các bài khác (app.js + style.css),
   chỉ khác nội dung. Cấu trúc và các dạng slide y hệt quy ước đã
   dùng — xem chú thích mẫu ở cuối file nếu cần đối chiếu.

   Nguồn: PPTX gốc K4_B09-10_TrinhDuyetWeb.pptx (80 slide), gộp
   "Bài 9 + 10" thành 1 bài liền mạch như file gốc.

   ĐÁP ÁN: lấy trực tiếp từ file PPTX (không tự suy luận):
   - Câu trắc nghiệm: đáp án là ô được animation đổi sang màu xanh.
   - Câu Đúng/Sai dạng bảng: đáp án là hình dấu tick đặt trong cột.
   - Một số câu có thêm lời giải thích trong Speaker Notes.
   - Câu ghép nối (dấu trang/tải lại/điều hướng/biểu mẫu) và câu chọn
     hành động trong danh sách thả xuống: file gốc không đánh dấu đáp
     án rõ, mình ghép theo nghĩa (đáp án nghĩa rất rõ ràng).

   Ghi chú:
   - 9 chủ đề của file gốc được gom thành 6 phần học + Ôn tập để
     không quá nhiều mật khẩu (Điều hướng + Tải lại trang; Đăng bài
     + Biểu mẫu + Tự động điền; Cookies + Xác thực đa yếu tố).
   - Câu chọn hành động (slide 46/67 gốc) có chỗ trống nằm giữa câu;
     mình viết lại để chỗ trống nằm cuối mỗi câu cho hợp với dạng
     "chọn từ trong ô" của engine, ý nghĩa giữ nguyên.
   - 3 slide gốc bị ẩn (định nghĩa Bookmark, tên gọi Chrome, tên gọi
     Edge) đã được gộp vào slide "Tên gọi khác nhau trên mỗi trình duyệt".
   - Câu ghép "Gửi / Điều hướng trang / Tải lại trang / Biểu mẫu" chỉ
     xuất hiện ở phần Ôn tập trong file gốc nên giữ nguyên như vậy.
   - "Đọc thêm" về AI và 4 bài Thực hành là slide đọc, không chấm điểm.
   ============================================================ */

/* ============================================================
   MẬT KHẨU TỪNG PHẦN — sửa ở đây, không cần đi tìm trong từng phần
   ------------------------------------------------------------
   Để trống '' cho phần nào muốn luôn mở sẵn (không cần mật khẩu).
   ============================================================ */
const PASSWORDS = {
  s1: '159',  // Phần 1 — Trình duyệt Web
  s2: '454',  // Phần 2 — Điều hướng và tải lại trang
  s3: '485',  // Phần 3 — Đăng bài, biểu mẫu và tự động điền
  s4: '110',  // Phần 4 — Dấu trang (Bookmark)
  s5: '487',  // Phần 5 — Cookies và xác thực đa yếu tố
  s6: '987',  // Phần 6 — Trình duyệt Web và công cụ AI
  s7: '642'   // Phần 7 — Ôn tập
};

const LESSON = {
  id:    'bai9-10-trinhduyet',
  icon:  '🌐',
  title: 'Bài 9 + 10 — Các khái niệm cơ bản của trình duyệt Web',

  sections: [
    /* ============================================================
       PHẦN 1 — Trình duyệt Web (mật khẩu: TD01)
       ============================================================ */
    {
      id: 's1',
      title: 'Trình duyệt Web',
      password: PASSWORDS.s1,
      slides: [
        /* Slide 1 (Trang 1 / 54) */
        {
          type: 'info',
          topic: 'Khởi động',
          title: 'Khởi động',
          content: 'Em hãy suy nghĩ và trả lời ba câu hỏi sau:',
          imageUrl: null,
          things: [
            { icon: '1️⃣', name: 'Khi em muốn xem YouTube, em mở ứng dụng nào hoặc nhập địa chỉ vào đâu?', en: '' },
            { icon: '2️⃣', name: 'Nếu một trang web bị lỗi không hiển thị đúng, em thường làm gì để sửa?', en: '' },
            { icon: '3️⃣', name: 'Khi em tìm kiếm trên Google rồi nhấn vào một kết quả, em vừa thực hiện thao tác gì?', en: '' }
          ]
        },

        /* Slide 2 (Trang 2 / 54) */
        {
          type: 'info',
          topic: 'Phần 1 · Trình duyệt Web',
          title: 'Trình duyệt Web là gì?',
          content: '<b>Trình duyệt Web</b> là một phần mềm cho phép người dùng truy cập và xem các trang Web, tài liệu, hình ảnh, Video,... trên Internet.',
          imageUrl: null,
          things: [
            { icon: '🟢', name: 'Google Chrome', en: 'Phổ biến nhất, nhanh, nhiều tiện ích mở rộng' },
            { icon: '🔷', name: 'Microsoft Edge', en: 'Tích hợp sẵn trong Windows 11, có Copilot AI' },
            { icon: '🦊', name: 'Mozilla Firefox', en: 'Mã nguồn mở, bảo mật tốt' },
            { icon: '🧭', name: 'Safari', en: 'Mặc định trên iPhone, iPad và Mac của Apple' }
          ]
        },

        /* Slide 3 (Trang 3 / 54) */
        {
          type: 'info',
          topic: 'Phần 1 · Trình duyệt Web',
          title: 'Các thành phần của trình duyệt Web',
          content: 'Mỗi trang web mở ra là một <b>tab</b>; em có thể mở nhiều tab cùng lúc. Các nút thường dùng:',
          imageUrl: null,
          things: [
            { icon: '⬅️', name: 'Nút quay lại (Back)', en: 'Quay về trang đã xem trước đó' },
            { icon: '➡️', name: 'Nút Tiến tới (Forward)', en: 'Chuyển đến trang đã từng xem rồi quay lại' },
            { icon: '🔄', name: 'Nút Tải lại (Reload)', en: 'Tải lại trang web hiện tại' },
            { icon: '🏠', name: 'Nút Home', en: 'Quay về trang chủ mặc định' },
            { icon: '🔗', name: 'Thanh địa chỉ (Address Bar)', en: 'Nơi em nhập URL để truy cập' }
          ]
        },

        /* Slide 4 (Trang 4 / 54) */
        {
          type: 'quiz_single',
          topic: 'Vận dụng',
          question: 'Em hãy cho biết, phát biểu nào sau đây là không đúng?',
          options: ['Nút Back giúp em trở lại trang Web vừa xem trước đó.', 'Việc đăng nhập vào tài khoản Email được thực hiện bằng biểu mẫu.', 'Nút Forward giúp em thoát khỏi trang Web đang truy cập.', 'Việc nhấn nút Đăng Nhập (Sign in) để đăng nhập vào tài khoản Google sẽ gửi thông tin tới máy chủ Web.'],
          correctAnswer: 2,
          hint: 'Nút Forward không phải là nút thoát trang.',
          explain: 'Nút Forward chỉ đưa TỚI trang đã xem sau đó (nếu có), KHÔNG giúp thoát khỏi trang đang truy cập — nên đây là phát biểu sai. Nút Back đưa về trang đã xem trước đó; đăng nhập Email dùng biểu mẫu (form); nhấn Đăng nhập sẽ gửi thông tin tài khoản tới máy chủ Web để xác thực.'
        }
      ]
    },

    /* ============================================================
       PHẦN 2 — Điều hướng và tải lại trang (mật khẩu: TD02)
       ============================================================ */
    {
      id: 's2',
      title: 'Điều hướng và tải lại trang',
      password: PASSWORDS.s2,
      slides: [
        /* Slide 5 (Trang 5 / 54) */
        {
          type: 'info',
          topic: 'Phần 2 · Điều hướng',
          title: 'Điều hướng là gì?',
          content: '<b>Điều hướng (Navigation)</b> là thao tác nhấp, di chuyển qua lại giữa các trang khác nhau, giúp xem qua các tài nguyên của Web.',
          imageUrl: null,
          things: [
            { icon: '👆', name: 'Nhấp vào đường Link trên trang', en: 'Để xem tài nguyên khác' },
            { icon: '⌨️', name: 'Nhập một đường Link mới', en: 'Để qua trang Web khác' },
            { icon: '⬅️', name: 'Nhấn nút Back', en: 'Quay lại trang trước đó' },
            { icon: '➡️', name: 'Nhấn nút Forward', en: 'Chuyển đến trang tiếp theo' }
          ]
        },

        /* Slide 6 (Trang 6 / 54) */
        {
          type: 'quiz_single',
          topic: 'Vận dụng',
          question: 'Trong các tùy chọn sau, tùy chọn nào là định nghĩa cho hành động "điều hướng trên Internet"?',
          options: ['Gửi dữ liệu hoặc tập tin từ máy tính của bạn.', 'Nhấp và xem qua các tài nguyên.', 'Cập nhật những gì đang được hiển thị.', 'Lưu URL để tham khảo trong tương lai.'],
          correctAnswer: 1,
          hint: 'Điều hướng là di chuyển qua lại giữa các trang, bằng cách nhấp vào liên kết.',
          explain: 'Điều hướng (Navigation) là thao tác nhấp, di chuyển qua lại giữa các trang khác nhau để xem qua các tài nguyên trên Web.'
        },

        /* Slide 7 (Trang 7 / 54) */
        {
          type: 'info',
          topic: 'Phần 2 · Tải lại trang',
          title: 'Tải lại trang',
          content: 'Nếu một trang web bị lỗi, em có thể nhấn nút <b>Tải lại (Reload)</b> hoặc phím <b>F5</b> để thử khắc phục. Em có thể tải lại trang khi:',
          imageUrl: null,
          things: [
            { icon: '🚫', name: 'Trang web bị đứng hoặc nội dung bị lỗi', en: 'Hoặc trang tải nửa chừng rồi đứng lại, hiển thị sai/không đầy đủ' },
            { icon: '🆕', name: 'Em muốn xem các thay đổi gần đây nhất', en: 'Ví dụ: giá vừa được cập nhật' }
          ],
          remember: 'Tải lại trang sẽ truy xuất một trang Web từ <b>máy chủ</b> thay vì tải nó từ <b>bộ đệm</b> (bộ lưu trữ tạm thời). Phím tắt: <b>F5</b> hoặc <b>Ctrl+R</b>.'
        },

        /* Slide 8 (Trang 8 / 54) */
        {
          type: 'quiz_single',
          topic: 'Vận dụng',
          question: 'Thao tác nào khi em buộc một trình duyệt truy xuất một trang Web từ máy chủ thay vì tải từ bộ đệm?',
          options: ['Gửi biểu mẫu (Submitting a form)', 'Tải lại (Reloading)', 'Điều hướng (Navigating)', 'Đánh dấu trang (Bookmarking)'],
          correctAnswer: 1,
          hint: 'Thao tác này giúp có bản mới nhất của trang.',
          explain: 'Tải lại trang (Reload) truy xuất trang Web từ máy chủ thay vì tải từ bộ đệm (bộ lưu trữ tạm thời).'
        },

        /* Slide 9 (Trang 9 / 54) */
        {
          type: 'quiz_single',
          topic: 'Vận dụng',
          question: 'Bạn nên làm gì nếu trang web chỉ tải được một nửa?',
          options: ['Hãy thử lại vào một ngày khác.', 'Khởi động lại máy tính.', 'Dừng lại, tạm dừng, nói chuyện với người lớn.', 'Tải lại trang web.'],
          correctAnswer: 3,
          hint: 'Trang chỉ tải một nửa là trường hợp điển hình cần tải lại (F5).',
          explain: 'Khi trang Web hiển thị không đầy đủ, bị treo hoặc chậm, em nên nhấn nút Tải lại (Reload) hoặc phím F5.'
        },

        /* Slide 10 (Trang 10 / 54) */
        {
          type: 'quiz_single',
          topic: 'Vận dụng',
          question: 'Em muốn mua một vật phẩm mới cho trò chơi trực tuyến yêu thích của mình và vật phẩm đó sẽ được khuyến mãi trong 5 phút nữa. Em đã mở sẵn trang Web trò chơi và chờ đợi. Khi hết 5 phút, em nên làm gì để nhanh chóng hiển thị mức giá mới?',
          options: ['Tải lại trang', 'Đánh dấu trang đó', 'In trang đó ra', 'Gửi Email cho công ty bán hàng'],
          correctAnswer: 0,
          hint: 'Cần cập nhật ngay nội dung mới nhất của trang đang mở.',
          explain: 'Tải lại trang giúp truy xuất bản mới nhất từ máy chủ, nên mức giá mới sẽ hiển thị ngay.'
        },

        /* Slide 11 (Trang 11 / 54) */
        {
          type: 'quiz_single',
          topic: 'Vận dụng',
          question: 'Em hãy cho biết, phát biểu nào sau đây là không đúng?',
          options: ['Tải lại trang Web sẽ giúp chuyển đến một trang Web mới.', 'Nhấn phím F5 hoặc tổ hợp phím Ctrl+R cũng giúp tải lại nội dung trang Web.', 'Khi trang Web tải về hiển thị không đầy đủ nội dung, bị treo, bị chậm thì cần tải lại trang Web.'],
          correctAnswer: 0,
          hint: 'Tải lại chỉ nạp lại đúng trang đang xem.',
          explain: 'Tải lại trang (Reload) chỉ nạp lại đúng nội dung trang đang xem, KHÔNG chuyển sang trang Web mới — nên phát biểu đầu tiên là sai. F5 hoặc Ctrl+R là phím tắt tải lại; nên tải lại khi trang thiếu nội dung, bị treo hoặc chậm.'
        }
      ]
    },

    /* ============================================================
       PHẦN 3 — Đăng bài, biểu mẫu và tự động điền (mật khẩu: TD03)
       ============================================================ */
    {
      id: 's3',
      title: 'Đăng bài, biểu mẫu và tự động điền',
      password: PASSWORDS.s3,
      slides: [
        /* Slide 12 (Trang 12 / 54) */
        {
          type: 'info',
          topic: 'Phần 3 · Đăng bài',
          title: 'Đăng bài (Posting)',
          content: '<b>Đăng bài (Posting)</b> là đưa nội dung lên Internet.',
          imageUrl: null,
          things: [
            { icon: '📸', name: 'Đăng một bức ảnh lên Facebook', en: '' },
            { icon: '🎥', name: 'Đăng video lên TikTok', en: '' },
            { icon: '💬', name: 'Viết bài lên blog hoặc diễn đàn', en: '' }
          ]
        },

        /* Slide 13 (Trang 13 / 54) */
        {
          type: 'quiz_single',
          topic: 'Vận dụng',
          question: 'Posting có nghĩa là gì?',
          options: ['Đưa một cái gì đó lên Internet.', 'Chấp nhận ai đó hoặc điều gì đó ngay cả khi bạn không đồng ý hoặc không hiểu.', 'Có thể hiểu người khác có thể cảm thấy như thế nào.', 'Những cách chúng ta thể hiện sự tôn trọng và lòng tốt trực tuyến.'],
          correctAnswer: 0,
          hint: 'Posting = đăng bài.',
          explain: 'Đăng bài (Posting) là đưa nội dung lên Internet, ví dụ đăng ảnh lên Facebook, đăng video lên TikTok, viết bài lên blog hoặc diễn đàn.'
        },

        /* Slide 14 (Trang 14 / 54) */
        {
          type: 'info',
          topic: 'Phần 3 · Biểu mẫu',
          title: 'Biểu mẫu (Form)',
          content: '<b>Biểu mẫu</b> là một cửa sổ hoặc màn hình chứa nhiều trường (ô trống) để nhập dữ liệu. Biểu mẫu trên trang Web được gọi là <b>Webform</b>, cho phép người dùng nhập thông tin và gửi đến máy chủ Web (Web Server) để xử lí.',
          imageUrl: null,
          remember: 'Ví dụ: biểu mẫu nhập thông tin đăng kí tài khoản trực tuyến, thông tin mua hàng,…'
        },

        /* Slide 15 (Trang 15 / 54) */
        {
          type: 'quiz_multiple',
          topic: 'Vận dụng',
          question: 'Em hãy cho biết, phát biểu nào sau đây về biểu mẫu là Đúng? (Chọn 2)',
          options: ['Biểu mẫu trên trang Web có tên tiếng Anh được gọi là Webform.', 'Biểu mẫu giúp em đi đến các nội dung trang Web khi sử dụng trình duyệt.', 'Thông tin được nhập vào biểu mẫu sẽ tự động được gửi tới máy chủ Web.', 'Biểu mẫu là công cụ cho phép người dùng nhập thông tin dữ liệu vào và gửi đến máy chủ Web để xử lí.'],
          correctAnswers: [0, 3],
          hint: 'Biểu mẫu không dùng để điều hướng và không tự động gửi đi — chỉ gửi khi bấm nút Gửi (Submit).',
          explain: 'Biểu mẫu tên tiếng Anh là Webform và là công cụ nhập dữ liệu rồi gửi đến máy chủ Web để xử lí (2 phát biểu đúng). Điều hướng là chức năng của liên kết/menu; thông tin chỉ được gửi đi khi người dùng bấm nút gửi (Submit), không tự động gửi.'
        },

        /* Slide 16 (Trang 16 / 54) */
        {
          type: 'info',
          topic: 'Phần 3 · Tự động điền',
          title: 'Tự động điền (Autofill)',
          content: '<b>Tự động điền (Autofill)</b> là tính năng lưu trữ thông tin và sau đó tự động điền vào các biểu mẫu.',
          imageUrl: null,
          things: [
            { icon: '💾', name: 'Trình duyệt lưu sẵn', en: 'Tên, địa chỉ email, địa chỉ nhà để điền tự động' },
            { icon: '💡', name: 'Gợi ý khi em bắt đầu nhập', en: 'Trình duyệt gợi ý thông tin đã lưu' },
            { icon: '⏱️', name: 'Tiết kiệm thời gian', en: 'Không phải điền cùng một thông tin nhiều lần' },
            { icon: '🔒', name: 'Không lưu mật khẩu trên máy dùng chung', en: 'Không lưu thông tin cá nhân nhạy cảm' },
            { icon: '⚠️', name: 'Không để Autofill điền vào trang web lạ', en: 'Chỉ Autofill trên trang web uy tín mà em tin tưởng' }
          ]
        }
      ]
    },

    /* ============================================================
       PHẦN 4 — Dấu trang (Bookmark) (mật khẩu: TD04)
       ============================================================ */
    {
      id: 's4',
      title: 'Dấu trang (Bookmark)',
      password: PASSWORDS.s4,
      slides: [
        /* Slide 17 (Trang 17 / 54) */
        {
          type: 'info',
          topic: 'Khởi động',
          title: 'Khởi động',
          content: 'Em hãy suy nghĩ và trả lời ba câu hỏi sau:',
          imageUrl: null,
          things: [
            { icon: '1️⃣', name: 'Em có trang web nào hay truy cập mà không cần gõ địa chỉ không? Em mở nó bằng cách nào?', en: '' },
            { icon: '2️⃣', name: 'Nếu em muốn lưu lại trang web đang xem để xem lại sau, em có thể làm gì?', en: '' },
            { icon: '3️⃣', name: 'Khi giáo viên giới thiệu một công cụ AI học tập, em muốn dùng lại sau, em nên làm gì?', en: '' }
          ]
        },

        /* Slide 18 (Trang 18 / 54) */
        {
          type: 'info',
          topic: 'Phần 4 · Dấu trang',
          title: 'Dấu trang (Bookmark)',
          content: '<b>Đánh dấu trang (Bookmark)</b> là đánh dấu và lưu lại những trang Web để em có thể dễ dàng quay lại trang đó mà không cần tìm lại địa chỉ. Bookmark là một cách lưu trữ URL của một trang Web.',
          imageUrl: null,
          things: [
            { icon: '⏱️', name: 'Tiết kiệm thời gian', en: 'Không cần gõ lại địa chỉ URL mỗi lần vào trang web' },
            { icon: '📌', name: 'Lưu lại các trang web hữu ích', en: 'Để dùng lâu dài (VioEdu, Duolingo, ChatGPT...)' },
            { icon: '🗂️', name: 'Tổ chức theo chủ đề', en: 'Chia thành thư mục: Toán, Tiếng Anh, AI, Giải trí...' },
            { icon: '🖱️', name: 'Truy cập nhanh', en: 'Chỉ bằng một cú nhấp từ thanh Bookmark hoặc danh sách Favorite' }
          ]
        },

        /* Slide 19 (Trang 19 / 54) */
        {
          type: 'info',
          topic: 'Phần 4 · Dấu trang',
          title: 'Tên gọi khác nhau trên mỗi trình duyệt',
          content: 'Chức năng đều giống nhau, chỉ khác tên gọi:',
          imageUrl: null,
          things: [
            { icon: '🟢', name: 'Google Chrome', en: 'Bookmark (Dấu trang)' },
            { icon: '🔷', name: 'Microsoft Edge', en: 'Favorite (Yêu thích)' },
            { icon: '🦊', name: 'Mozilla Firefox', en: 'Bookmark' },
            { icon: '🧭', name: 'Safari', en: 'Bookmark' }
          ]
        },

        /* Slide 20 (Trang 20 / 54) */
        {
          type: 'info',
          topic: 'Phần 4 · Dấu trang',
          title: 'Các bước đánh dấu trang',
          content: 'Làm theo 5 bước:',
          imageUrl: null,
          things: [
            { icon: '1️⃣', name: 'Mở trang web em muốn đánh dấu', en: 'Trong trình duyệt' },
            { icon: '2️⃣', name: 'Nhấp vào biểu tượng ngôi sao (☆)', en: 'Ở cuối thanh địa chỉ. Cách khác: Ctrl + D (Windows) hoặc Command + D (Mac)' },
            { icon: '3️⃣', name: 'Đặt tên cho bookmark', en: 'Hoặc giữ nguyên tên trang' },
            { icon: '4️⃣', name: 'Chọn thư mục lưu', en: 'Mặc định là Bookmark Bar' },
            { icon: '5️⃣', name: 'Nhấn "Xong" (Done) để lưu', en: '' }
          ]
        },

        /* Slide 21 (Trang 21 / 54) */
        {
          type: 'info',
          topic: 'Phần 4 · Dấu trang',
          title: 'Truy cập lại và quản lí Bookmark',
          content: 'Sau khi đã đánh dấu trang:',
          imageUrl: null,
          things: [
            { icon: '🔎', name: 'Cách 1: Thanh Bookmark Bar', en: 'Nhìn ngay dưới thanh địa chỉ và nhấp vào tên trang' },
            { icon: '☰', name: 'Cách 2: Menu trình duyệt', en: 'Chọn Bookmarks → tìm và nhấp vào trang muốn mở' },
            { icon: '⌨️', name: 'Cách 3: Ctrl + Shift + O', en: 'Mở Trình quản lí Bookmark (Chrome)' },
            { icon: '📁', name: 'Tạo thư mục mới', en: 'Nhấp chuột phải vào thanh Bookmark → chọn Thêm thư mục; kéo thả bookmark vào thư mục tương ứng' },
            { icon: '✏️', name: 'Đổi tên hoặc xóa', en: 'Nhấp chuột phải vào bookmark → chọn Chỉnh sửa hoặc Xóa' }
          ]
        },

        /* Slide 22 (Trang 22 / 54) */
        {
          type: 'quiz_single',
          topic: 'Vận dụng',
          question: 'Em có thể làm gì để lưu lại trang Web khi muốn quay lại sau?',
          options: ['Đánh dấu trang (Bookmark) cho URL đó.', 'Cố nhớ vào lần đăng nhập tới.', 'Nói cho một người bạn biết.', 'Nhờ ai đó gợi nhắc cho bạn.'],
          correctAnswer: 0,
          hint: 'Có một tính năng của trình duyệt giúp lưu lại địa chỉ trang.',
          explain: 'Đánh dấu trang (Bookmark) giúp lưu URL của trang để dễ dàng quay lại sau này.'
        },

        /* Slide 23 (Trang 23 / 54) */
        {
          type: 'quiz_single',
          topic: 'Vận dụng',
          question: 'Cách nhanh nhất để quay lại một trang web sau đó là gì?',
          options: ['Viết URL trên một tờ giấy.', 'In toàn bộ trang web.', 'Nói với một người bạn về trang web bạn tìm thấy.', 'Tạo dấu trang.'],
          correctAnswer: 3,
          hint: 'Chọn cách dùng ngay trên trình duyệt, chỉ cần một cú nhấp.',
          explain: 'Tạo dấu trang (Bookmark) là cách nhanh nhất để quay lại một trang web sau đó.'
        },

        /* Slide 24 (Trang 24 / 54) */
        {
          type: 'quiz_matching',
          topic: 'Vận dụng',
          question: 'Em hãy ghép nối từng thuật ngữ với định nghĩa tương ứng.',
          pairs: [
            { icon: '🔄', left: 'Tải lại (Reload)', right: 'Cung cấp bản mới nhất của trang Web.' },
            { icon: '🧭', left: 'Điều hướng (Navigate)', right: 'Khám phá để nắm rõ một ứng dụng hoặc trang Web.' },
            { icon: '📝', left: 'Biểu mẫu (Form)', right: 'Một cửa sổ hoặc màn hình chứa rất nhiều trường hoặc ô trống để nhập dữ liệu.' },
            { icon: '⭐', left: 'Dấu trang (Bookmark)', right: 'Lưu địa chỉ một trang Web trong danh sách yêu thích (Favorite).' }
          ],
          hint: 'Nhớ lại ý nghĩa từng thao tác: tải lại → bản mới nhất; điều hướng → khám phá; biểu mẫu → nhập dữ liệu; dấu trang → lưu địa chỉ.',
          explain: 'Tải lại cung cấp bản mới nhất của trang; Điều hướng là khám phá để nắm rõ trang Web; Biểu mẫu là màn hình có nhiều ô để nhập dữ liệu; Dấu trang lưu địa chỉ trang vào danh sách yêu thích.'
        },

        /* Slide 25 (Trang 25 / 54) */
        {
          type: 'quiz_dropdown',
          topic: 'Vận dụng',
          question: 'Em mở trình duyệt Web trên máy tính để hoàn thành một dự án nghiên cứu. Em hãy lựa chọn các hành động đúng từ mỗi danh sách thả xuống để hoàn thành các câu sau: Để bắt đầu tìm kiếm, hành động em phải làm với một trang trên Internet là ___ Em đang đọc tài liệu nghiên cứu thì trang bị đứng hoàn toàn, nên hành động em phải làm với trang đó là ___ Em muốn sau này có thể truy cập lại vào trang web, nên hành động em phải làm với trang web là ___',
          blanks: [
            { options: ['điều hướng đến', 'tải lại', 'đánh dấu trang'], correctAnswer: 0 },
            { options: ['điều hướng đến', 'tải lại', 'đánh dấu trang'], correctAnswer: 1 },
            { options: ['điều hướng đến', 'tải lại', 'đánh dấu trang'], correctAnswer: 2 }
          ],
          hint: 'Bắt đầu tìm kiếm → điều hướng; trang bị đứng → tải lại; muốn xem lại sau → đánh dấu trang.',
          explain: 'Để bắt đầu tìm kiếm em điều hướng đến một trang; trang bị đứng thì tải lại trang đó; muốn truy cập lại sau này thì đánh dấu trang.'
        },

        /* Slide 26 (Trang 26 / 54) */
        {
          type: 'quiz_dropdown',
          topic: 'Vận dụng',
          question: 'Với mỗi câu phát biểu về trình duyệt Web, em hãy chọn Đúng hoặc Sai: Dấu trang (Bookmark) cho phép người dùng điều hướng lại các trang Web yêu thích của họ. ___ Chức năng tải lại cho phép người dùng truy cập một trang Web mà họ thường xem. ___ Tự động điền (Autofill) cho phép trình duyệt tự điền thông tin mà không phải gõ lại. ___',
          blanks: [
            { options: ['Đúng', 'Sai'], correctAnswer: 0 },
            { options: ['Đúng', 'Sai'], correctAnswer: 1 },
            { options: ['Đúng', 'Sai'], correctAnswer: 0 }
          ],
          hint: 'Tải lại chỉ nạp lại trang đang xem, không giúp mở "trang thường xem".',
          explain: 'Dấu trang giúp quay lại các trang yêu thích (Đúng). Tải lại chỉ nạp lại trang hiện tại, không phải để truy cập trang thường xem (Sai). Autofill tự điền thông tin đã lưu vào biểu mẫu (Đúng).'
        }
      ]
    },

    /* ============================================================
       PHẦN 5 — Cookies và xác thực đa yếu tố (mật khẩu: TD05)
       ============================================================ */
    {
      id: 's5',
      title: 'Cookies và xác thực đa yếu tố',
      password: PASSWORDS.s5,
      slides: [
        /* Slide 27 (Trang 27 / 54) */
        {
          type: 'info',
          topic: 'Phần 5 · Cookies',
          title: 'Cookies',
          content: '<b>Cookies</b> là những tập tin nhỏ được lưu trữ trên máy tính hoặc thiết bị khi em truy cập các trang Web. Cookies được sử dụng để theo dõi các hoạt động trên Web và lưu trữ một số thông tin của em.',
          imageUrl: null
        },

        /* Slide 28 (Trang 28 / 54) */
        {
          type: 'info',
          topic: 'Phần 5 · Xác thực đa yếu tố',
          title: 'Xác thực đa yếu tố (MFA)',
          content: '<b>Xác thực đa yếu tố (Multi-factor Authentication - MFA)</b> là một hệ thống bảo mật, yêu cầu nhiều hơn một phương thức xác thực bằng cách sử dụng các thông tin độc lập khác nhau để bảo vệ tài khoản.',
          imageUrl: null,
          remember: 'Ví dụ: ngoài mật khẩu, có thể dùng thêm sinh trắc học dấu vân tay, nhận diện giọng nói, mã xác thực một lần (OTP),… để chứng minh em là chủ sở hữu tài khoản và ngăn việc truy cập trái phép.'
        },

        /* Slide 29 (Trang 29 / 54) */
        {
          type: 'quiz_single',
          topic: 'Vận dụng',
          question: 'Lựa chọn nào KHÔNG phải là thông tin đăng nhập có thể được sử dụng để xác thực người dùng?',
          options: ['Nhận diện giọng nói (Voice recognition)', 'Mật khẩu (Password)', 'Cookies', 'Vân tay (Fingerprint)'],
          correctAnswer: 2,
          hint: 'Cookies là tập tin nhỏ lưu thông tin duyệt web, không dùng để chứng minh em là ai.',
          explain: 'Giọng nói, mật khẩu và vân tay đều có thể dùng để xác thực người dùng. Cookies chỉ là những tập tin nhỏ dùng để theo dõi hoạt động trên Web, không phải thông tin đăng nhập.'
        }
      ]
    },

    /* ============================================================
       PHẦN 6 — Trình duyệt Web và công cụ AI (Đọc thêm + Thực hành) (mật khẩu: TD06)
       ============================================================ */
    {
      id: 's6',
      title: 'Trình duyệt Web và công cụ AI',
      password: PASSWORDS.s6,
      slides: [
        /* Slide 30 (Trang 30 / 54) */
        {
          type: 'info',
          topic: 'Đọc thêm · Trình duyệt và AI',
          title: 'Mở công cụ AI bằng trình duyệt Web',
          content: 'Chỉ cần vài bước đơn giản là em đã có thể dùng AI để học tập, tìm hiểu, sáng tạo:',
          imageUrl: null,
          things: [
            { icon: '1️⃣', name: 'Em mở trình duyệt', en: 'Ví dụ Chrome' },
            { icon: '2️⃣', name: 'Nhập địa chỉ (URL) của công cụ AI', en: 'Vào thanh địa chỉ' },
            { icon: '3️⃣', name: 'Truy cập và sử dụng công cụ AI', en: 'Ví dụ: ChatGPT, Gemini, Copilot' }
          ]
        },

        /* Slide 31 (Trang 31 / 54) */
        {
          type: 'info',
          topic: 'Đọc thêm · Trình duyệt và AI',
          title: 'Quy tắc an toàn khi dùng trình duyệt và AI',
          content: 'Em hãy nhớ 4 quy tắc:',
          imageUrl: null,
          things: [
            { icon: '🏫', name: 'Chỉ truy cập website và công cụ AI', en: 'Do giáo viên hoặc nhà trường hướng dẫn' },
            { icon: '🔗', name: 'Không tự mở trang web lạ', en: 'Không nhấp vào liên kết không rõ nguồn gốc' },
            { icon: '🧾', name: 'Không nhập thông tin cá nhân vào biểu mẫu', en: 'Họ tên, địa chỉ, số điện thoại — khi chưa hỏi ý kiến giáo viên, cha mẹ' },
            { icon: '🚫', name: 'Không để Autofill điền thông tin tự động', en: 'Vào trang web lạ' }
          ],
          remember: 'Luôn cẩn thận, kiểm tra và xin phép khi cần nhé!'
        },

        /* Slide 32 (Trang 32 / 54) */
        {
          type: 'info',
          topic: 'Đọc thêm · Bookmark với AI',
          title: 'Nên bookmark các trang này',
          content: 'Sử dụng Bookmark với công cụ AI để học tập — nên bookmark:',
          imageUrl: null,
          things: [
            { icon: '🤖', name: 'Công cụ AI do giáo viên hoặc nhà trường phê duyệt', en: 'Gemini, Copilot, ChatGPT...' },
            { icon: '🏫', name: 'Trang Web của trường', en: '' },
            { icon: '📚', name: 'Trang tài liệu học tập', en: 'Thư viện hình ảnh và video được phép dùng' },
            { icon: '📖', name: 'Trang từ điển, bách khoa toàn thư đáng tin cậy', en: 'Wikipedia tiếng Việt, từ điển Anh - Việt' }
          ]
        },

        /* Slide 33 (Trang 33 / 54) */
        {
          type: 'info',
          topic: 'Đọc thêm · Bookmark với AI',
          title: 'Không nên bookmark các trang này',
          content: 'Những trang có thể không an toàn hoặc gây hại cho thiết bị của em:',
          imageUrl: null,
          things: [
            { icon: '❌', name: 'Trang web lạ', en: 'Hoặc không rõ nguồn gốc' },
            { icon: '❌', name: 'Trang quảng cáo, pop-up', en: 'Xuất hiện bất ngờ ("giảm giá cực sốc", "trúng thưởng 100%")' },
            { icon: '❌', name: 'Trang yêu cầu đăng nhập hoặc nhập thông tin cá nhân', en: 'Mà không rõ mục đích' }
          ]
        },

        /* Slide 34 (Trang 34 / 54) */
        {
          type: 'info',
          topic: 'Vận dụng',
          title: 'Thực hành 1 — Điều hướng trên trình duyệt',
          content: 'Làm theo các bước:',
          imageUrl: null,
          things: [
            { icon: '1️⃣', name: 'Mở trình duyệt Web', en: 'Nhập địa chỉ google.com vào thanh địa chỉ' },
            { icon: '2️⃣', name: 'Tìm kiếm "trình duyệt web là gì"', en: 'Nhấn vào một kết quả' },
            { icon: '3️⃣', name: 'Nhấn nút Back (←)', en: 'Quay lại trang kết quả tìm kiếm' },
            { icon: '4️⃣', name: 'Nhấn nút Forward (→)', en: 'Quay lại trang vừa xem' },
            { icon: '5️⃣', name: 'Nhấn F5 để tải lại trang', en: 'Quan sát điều gì xảy ra' }
          ]
        },

        /* Slide 35 (Trang 35 / 54) */
        {
          type: 'info',
          topic: 'Vận dụng',
          title: 'Thực hành 2 — Điều hướng với công cụ AI',
          content: 'Thực hiện với công cụ AI do giáo viên hướng dẫn:',
          imageUrl: null,
          things: [
            { icon: '1️⃣', name: 'Mở trình duyệt', en: 'Truy cập công cụ AI theo hướng dẫn của giáo viên' },
            { icon: '2️⃣', name: 'Nhập câu hỏi vào khung chat (biểu mẫu)', en: '"Điều hướng trên trình duyệt web là gì?"' },
            { icon: '3️⃣', name: 'Nhấn nút Gửi (Submit)', en: 'Quan sát AI trả lời' },
            { icon: '4️⃣', name: 'Thử nhấn Back rồi Forward', en: 'Xem điều gì xảy ra' },
            { icon: '5️⃣', name: 'Ghi lại', en: 'Em đã thực hiện bao nhiêu thao tác điều hướng trong bài thực hành này?' }
          ]
        },

        /* Slide 36 (Trang 36 / 54) */
        {
          type: 'info',
          topic: 'Vận dụng',
          title: 'Thực hành 3 — Đánh dấu trang và quản lí Bookmark',
          content: 'Làm theo các bước:',
          imageUrl: null,
          things: [
            { icon: '1️⃣', name: 'Mở trình duyệt', en: 'Truy cập trang web do giáo viên hướng dẫn' },
            { icon: '2️⃣', name: 'Đánh dấu trang', en: 'Bằng biểu tượng ngôi sao hoặc phím Ctrl + D' },
            { icon: '3️⃣', name: 'Đặt tên bookmark là "AI Học tập"', en: 'Lưu vào Bookmark Bar' },
            { icon: '4️⃣', name: 'Mở một tab mới', en: 'Nhấp vào bookmark vừa tạo để truy cập lại trang đó' },
            { icon: '5️⃣', name: 'Tạo thư mục Bookmark tên "Bài học lớp 4"', en: 'Di chuyển bookmark vào đó' }
          ]
        },

        /* Slide 37 (Trang 37 / 54) */
        {
          type: 'info',
          topic: 'Vận dụng',
          title: 'Thực hành 4 — Chatbot AI kết hợp Bookmark',
          content: 'Làm theo các bước:',
          imageUrl: null,
          things: [
            { icon: '1️⃣', name: 'Truy cập công cụ AI do giáo viên hướng dẫn', en: 'Và đánh dấu trang đó' },
            { icon: '2️⃣', name: 'Hỏi AI', en: '"Bookmark trên trình duyệt là gì và cách sử dụng như thế nào?"' },
            { icon: '3️⃣', name: 'Đọc câu trả lời của AI', en: 'So sánh với nội dung em đã học trong bài' },
            { icon: '4️⃣', name: 'Đóng trình duyệt, mở lại', en: 'Truy cập lại trang AI qua bookmark vừa tạo' }
          ]
        },

        /* Slide 38 (Trang 38 / 54) — slide hoàn thành RIÊNG cho bài học chính (scoreSections) */
        {
          type: 'info',
          final: true,
          scoreSections: [0, 1, 2, 3, 4, 5],
          topic: 'Hoàn thành',
          title: 'Chúc mừng em đã học xong Bài 9 + 10!',
          content: 'Em đã biết trình duyệt Web là gì và các nút thường dùng, cách điều hướng và tải lại trang, đăng bài, biểu mẫu, tự động điền, dấu trang, cookies, xác thực đa yếu tố, cũng như cách dùng trình duyệt và Bookmark an toàn với công cụ AI.',
          imageUrl: null,
          remember: 'Muốn ôn lại toàn bộ câu hỏi của bài, bấm "Tiếp theo" để sang phần <b>Ôn tập</b> ngay sau đây.'
        }
      ]
    },

    /* ============================================================
       PHẦN 7 — Ôn tập (mật khẩu: TD07)
       ============================================================ */
    {
      id: 's7',
      title: 'Ôn tập',
      password: PASSWORDS.s7,
      slides: [
        /* Slide 39 (Trang 39 / 54) */
        {
          type: 'quiz_single',
          topic: 'Ôn tập',
          question: 'Trong các tùy chọn sau, tùy chọn nào là định nghĩa cho hành động "điều hướng trên Internet"?',
          options: ['Gửi dữ liệu hoặc tập tin từ máy tính của bạn.', 'Nhấp và xem qua các tài nguyên.', 'Cập nhật những gì đang được hiển thị.', 'Lưu URL để tham khảo trong tương lai.'],
          correctAnswer: 1,
          hint: 'Điều hướng là di chuyển qua lại giữa các trang, bằng cách nhấp vào liên kết.',
          explain: 'Điều hướng (Navigation) là thao tác nhấp, di chuyển qua lại giữa các trang khác nhau để xem qua các tài nguyên trên Web.'
        },

        /* Slide 40 (Trang 40 / 54) */
        {
          type: 'quiz_single',
          topic: 'Ôn tập',
          question: 'Em muốn mua một vật phẩm mới cho trò chơi trực tuyến yêu thích của mình và vật phẩm đó sẽ được khuyến mãi trong 5 phút nữa. Em đã mở sẵn trang Web trò chơi và chờ đợi. Khi hết 5 phút, em nên làm gì để nhanh chóng hiển thị mức giá mới?',
          options: ['Tải lại trang', 'Đánh dấu trang đó', 'In trang đó ra', 'Gửi Email cho công ty bán hàng'],
          correctAnswer: 0,
          hint: 'Cần cập nhật ngay nội dung mới nhất của trang đang mở.',
          explain: 'Tải lại trang giúp truy xuất bản mới nhất từ máy chủ, nên mức giá mới sẽ hiển thị ngay.'
        },

        /* Slide 41 (Trang 41 / 54) */
        {
          type: 'quiz_matching',
          topic: 'Ôn tập',
          question: 'Em hãy ghép nối từng thuật ngữ với định nghĩa tương ứng.',
          pairs: [
            { icon: '🔄', left: 'Tải lại (Reload)', right: 'Cung cấp bản mới nhất của trang Web.' },
            { icon: '🧭', left: 'Điều hướng (Navigate)', right: 'Khám phá để nắm rõ một ứng dụng hoặc trang Web.' },
            { icon: '📝', left: 'Biểu mẫu (Form)', right: 'Một cửa sổ hoặc màn hình chứa rất nhiều trường hoặc ô trống để nhập dữ liệu.' },
            { icon: '⭐', left: 'Dấu trang (Bookmark)', right: 'Lưu địa chỉ một trang Web trong danh sách yêu thích (Favorite).' }
          ],
          hint: 'Nhớ lại ý nghĩa từng thao tác: tải lại → bản mới nhất; điều hướng → khám phá; biểu mẫu → nhập dữ liệu; dấu trang → lưu địa chỉ.',
          explain: 'Tải lại cung cấp bản mới nhất của trang; Điều hướng là khám phá để nắm rõ trang Web; Biểu mẫu là màn hình có nhiều ô để nhập dữ liệu; Dấu trang lưu địa chỉ trang vào danh sách yêu thích.'
        },

        /* Slide 42 (Trang 42 / 54) */
        {
          type: 'quiz_dropdown',
          topic: 'Ôn tập',
          question: 'Em mở trình duyệt Web trên máy tính để hoàn thành một dự án nghiên cứu. Em hãy lựa chọn các hành động đúng từ mỗi danh sách thả xuống để hoàn thành các câu sau: Để bắt đầu tìm kiếm, hành động em phải làm với một trang trên Internet là ___ Em đang đọc tài liệu nghiên cứu thì trang bị đứng hoàn toàn, nên hành động em phải làm với trang đó là ___ Em muốn sau này có thể truy cập lại vào trang web, nên hành động em phải làm với trang web là ___',
          blanks: [
            { options: ['điều hướng đến', 'tải lại', 'đánh dấu trang'], correctAnswer: 0 },
            { options: ['điều hướng đến', 'tải lại', 'đánh dấu trang'], correctAnswer: 1 },
            { options: ['điều hướng đến', 'tải lại', 'đánh dấu trang'], correctAnswer: 2 }
          ],
          hint: 'Bắt đầu tìm kiếm → điều hướng; trang bị đứng → tải lại; muốn xem lại sau → đánh dấu trang.',
          explain: 'Để bắt đầu tìm kiếm em điều hướng đến một trang; trang bị đứng thì tải lại trang đó; muốn truy cập lại sau này thì đánh dấu trang.'
        },

        /* Slide 43 (Trang 43 / 54) */
        {
          type: 'quiz_dropdown',
          topic: 'Ôn tập',
          question: 'Với mỗi câu phát biểu về trình duyệt Web, em hãy chọn Đúng hoặc Sai: Dấu trang (Bookmark) cho phép người dùng điều hướng lại các trang Web yêu thích của họ. ___ Chức năng tải lại cho phép người dùng truy cập một trang Web mà họ thường xem. ___ Tự động điền (Autofill) cho phép trình duyệt tự điền thông tin mà không phải gõ lại. ___',
          blanks: [
            { options: ['Đúng', 'Sai'], correctAnswer: 0 },
            { options: ['Đúng', 'Sai'], correctAnswer: 1 },
            { options: ['Đúng', 'Sai'], correctAnswer: 0 }
          ],
          hint: 'Tải lại chỉ nạp lại trang đang xem, không giúp mở "trang thường xem".',
          explain: 'Dấu trang giúp quay lại các trang yêu thích (Đúng). Tải lại chỉ nạp lại trang hiện tại, không phải để truy cập trang thường xem (Sai). Autofill tự điền thông tin đã lưu vào biểu mẫu (Đúng).'
        },

        /* Slide 44 (Trang 44 / 54) */
        {
          type: 'quiz_single',
          topic: 'Ôn tập',
          question: 'Em có thể làm gì để lưu lại trang Web khi muốn quay lại sau?',
          options: ['Đánh dấu trang (Bookmark) cho URL đó.', 'Cố nhớ vào lần đăng nhập tới.', 'Nói cho một người bạn biết.', 'Nhờ ai đó gợi nhắc cho bạn.'],
          correctAnswer: 0,
          hint: 'Có một tính năng của trình duyệt giúp lưu lại địa chỉ trang.',
          explain: 'Đánh dấu trang (Bookmark) giúp lưu URL của trang để dễ dàng quay lại sau này.'
        },

        /* Slide 45 (Trang 45 / 54) */
        {
          type: 'quiz_single',
          topic: 'Ôn tập',
          question: 'Thao tác nào khi em buộc một trình duyệt truy xuất một trang Web từ máy chủ thay vì tải từ bộ đệm?',
          options: ['Gửi biểu mẫu (Submitting a form)', 'Tải lại (Reloading)', 'Điều hướng (Navigating)', 'Đánh dấu trang (Bookmarking)'],
          correctAnswer: 1,
          hint: 'Thao tác này giúp có bản mới nhất của trang.',
          explain: 'Tải lại trang (Reload) truy xuất trang Web từ máy chủ thay vì tải từ bộ đệm (bộ lưu trữ tạm thời).'
        },

        /* Slide 46 (Trang 46 / 54) */
        {
          type: 'quiz_single',
          topic: 'Ôn tập',
          question: 'Bạn nên làm gì nếu trang web chỉ tải được một nửa?',
          options: ['Hãy thử lại vào một ngày khác.', 'Khởi động lại máy tính.', 'Dừng lại, tạm dừng, nói chuyện với người lớn.', 'Tải lại trang web.'],
          correctAnswer: 3,
          hint: 'Trang chỉ tải một nửa là trường hợp điển hình cần tải lại (F5).',
          explain: 'Khi trang Web hiển thị không đầy đủ, bị treo hoặc chậm, em nên nhấn nút Tải lại (Reload) hoặc phím F5.'
        },

        /* Slide 47 (Trang 47 / 54) */
        {
          type: 'quiz_single',
          topic: 'Ôn tập',
          question: 'Cách nhanh nhất để quay lại một trang web sau đó là gì?',
          options: ['Viết URL trên một tờ giấy.', 'In toàn bộ trang web.', 'Nói với một người bạn về trang web bạn tìm thấy.', 'Tạo dấu trang.'],
          correctAnswer: 3,
          hint: 'Chọn cách dùng ngay trên trình duyệt, chỉ cần một cú nhấp.',
          explain: 'Tạo dấu trang (Bookmark) là cách nhanh nhất để quay lại một trang web sau đó.'
        },

        /* Slide 48 (Trang 48 / 54) */
        {
          type: 'quiz_single',
          topic: 'Ôn tập',
          question: 'Lựa chọn nào KHÔNG phải là thông tin đăng nhập có thể được sử dụng để xác thực người dùng?',
          options: ['Nhận diện giọng nói (Voice recognition)', 'Mật khẩu (Password)', 'Cookies', 'Vân tay (Fingerprint)'],
          correctAnswer: 2,
          hint: 'Cookies là tập tin nhỏ lưu thông tin duyệt web, không dùng để chứng minh em là ai.',
          explain: 'Giọng nói, mật khẩu và vân tay đều có thể dùng để xác thực người dùng. Cookies chỉ là những tập tin nhỏ dùng để theo dõi hoạt động trên Web, không phải thông tin đăng nhập.'
        },

        /* Slide 49 (Trang 49 / 54) */
        {
          type: 'quiz_single',
          topic: 'Ôn tập',
          question: 'Posting có nghĩa là gì?',
          options: ['Đưa một cái gì đó lên Internet.', 'Chấp nhận ai đó hoặc điều gì đó ngay cả khi bạn không đồng ý hoặc không hiểu.', 'Có thể hiểu người khác có thể cảm thấy như thế nào.', 'Những cách chúng ta thể hiện sự tôn trọng và lòng tốt trực tuyến.'],
          correctAnswer: 0,
          hint: 'Posting = đăng bài.',
          explain: 'Đăng bài (Posting) là đưa nội dung lên Internet, ví dụ đăng ảnh lên Facebook, đăng video lên TikTok, viết bài lên blog hoặc diễn đàn.'
        },

        /* Slide 50 (Trang 50 / 54) */
        {
          type: 'quiz_single',
          topic: 'Ôn tập',
          question: 'Em hãy cho biết, phát biểu nào sau đây là không đúng?',
          options: ['Nút Back giúp em trở lại trang Web vừa xem trước đó.', 'Việc đăng nhập vào tài khoản Email được thực hiện bằng biểu mẫu.', 'Nút Forward giúp em thoát khỏi trang Web đang truy cập.', 'Việc nhấn nút Đăng Nhập (Sign in) để đăng nhập vào tài khoản Google sẽ gửi thông tin tới máy chủ Web.'],
          correctAnswer: 2,
          hint: 'Nút Forward không phải là nút thoát trang.',
          explain: 'Nút Forward chỉ đưa TỚI trang đã xem sau đó (nếu có), KHÔNG giúp thoát khỏi trang đang truy cập — nên đây là phát biểu sai. Nút Back đưa về trang đã xem trước đó; đăng nhập Email dùng biểu mẫu (form); nhấn Đăng nhập sẽ gửi thông tin tài khoản tới máy chủ Web để xác thực.'
        },

        /* Slide 51 (Trang 51 / 54) */
        {
          type: 'quiz_single',
          topic: 'Ôn tập',
          question: 'Em hãy cho biết, phát biểu nào sau đây là không đúng?',
          options: ['Tải lại trang Web sẽ giúp chuyển đến một trang Web mới.', 'Nhấn phím F5 hoặc tổ hợp phím Ctrl+R cũng giúp tải lại nội dung trang Web.', 'Khi trang Web tải về hiển thị không đầy đủ nội dung, bị treo, bị chậm thì cần tải lại trang Web.'],
          correctAnswer: 0,
          hint: 'Tải lại chỉ nạp lại đúng trang đang xem.',
          explain: 'Tải lại trang (Reload) chỉ nạp lại đúng nội dung trang đang xem, KHÔNG chuyển sang trang Web mới — nên phát biểu đầu tiên là sai. F5 hoặc Ctrl+R là phím tắt tải lại; nên tải lại khi trang thiếu nội dung, bị treo hoặc chậm.'
        },

        /* Slide 52 (Trang 52 / 54) */
        {
          type: 'quiz_multiple',
          topic: 'Ôn tập',
          question: 'Em hãy cho biết, phát biểu nào sau đây về biểu mẫu là Đúng? (Chọn 2)',
          options: ['Biểu mẫu trên trang Web có tên tiếng Anh được gọi là Webform.', 'Biểu mẫu giúp em đi đến các nội dung trang Web khi sử dụng trình duyệt.', 'Thông tin được nhập vào biểu mẫu sẽ tự động được gửi tới máy chủ Web.', 'Biểu mẫu là công cụ cho phép người dùng nhập thông tin dữ liệu vào và gửi đến máy chủ Web để xử lí.'],
          correctAnswers: [0, 3],
          hint: 'Biểu mẫu không dùng để điều hướng và không tự động gửi đi — chỉ gửi khi bấm nút Gửi (Submit).',
          explain: 'Biểu mẫu tên tiếng Anh là Webform và là công cụ nhập dữ liệu rồi gửi đến máy chủ Web để xử lí (2 phát biểu đúng). Điều hướng là chức năng của liên kết/menu; thông tin chỉ được gửi đi khi người dùng bấm nút gửi (Submit), không tự động gửi.'
        },

        /* Slide 53 (Trang 53 / 54) */
        {
          type: 'quiz_matching',
          topic: 'Ôn tập',
          question: 'Em hãy ghép mỗi nội dung ở cột bên trái với nội dung phù hợp ở cột bên phải.',
          pairs: [
            { icon: '📤', left: 'Gửi', right: 'Submit' },
            { icon: '🧭', left: 'Điều hướng trang', right: 'Navigation' },
            { icon: '🔄', left: 'Tải lại trang', right: 'Reload' },
            { icon: '📝', left: 'Biểu mẫu', right: 'Webform' }
          ],
          hint: 'Ghép từ tiếng Việt với thuật ngữ tiếng Anh tương ứng.',
          explain: 'Gửi ↔ Submit (gửi dữ liệu biểu mẫu tới máy chủ); Điều hướng trang ↔ Navigation (di chuyển giữa các trang Web); Tải lại trang ↔ Reload (nạp lại nội dung trang hiện tại); Biểu mẫu ↔ Webform (công cụ nhập và gửi dữ liệu trên trang Web).'
        },

        /* Slide 54 (Trang 54 / 54) — slide hoàn thành RIÊNG của phần Ôn tập (resetScope:'section') */
        {
          type: 'info',
          final: true,
          resetScope: 'section',
          topic: 'Hoàn thành',
          title: 'Em đã ôn tập xong Bài 9 + 10!',
          content: 'Xem lại điểm số bên dưới. Nếu muốn luyện thêm lần nữa, bấm nút "Làm lại phần này" — các đáp án của 6 phần học trước sẽ không bị ảnh hưởng.',
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
   nên khai báo scoreSections:[0,1,2,...] (liệt kê đúng chỉ số các
   phần chính, bắt đầu từ 0) để không cộng nhầm điểm của Ôn tập vào.
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

/* ============================================================
   DỮ LIỆU TRANG ÔN TẬP — Bài 9 + 10 — Các khái niệm cơ bản của trình duyệt Web
   (tách từ phần Ôn tập của bai-09-10.js; dùng chung engine lesson.js)
   ============================================================ */

const PASSWORDS = {
  s7: ''   // Phần 7 — Ôn tập
};

const LESSON = {
  id:    'bai9-10-trinhduyet-on-tap',
  icon:  '🌐',
  title: 'Ôn tập Bài 9 + 10 — Các khái niệm cơ bản của trình duyệt Web',

  sections: [
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

        /* Slide 54 — slide hoàn thành */
        {
          type: 'info',
          final: true,
          topic: 'Hoàn thành',
          title: 'Em đã ôn tập xong Bài 9 + 10!',
          content: 'Xem lại điểm số bên dưới. Nếu muốn luyện thêm lần nữa, bấm nút làm lại.',
          imageUrl: null
        }
      ]
    }
  ]
};

/* ============================================================
   DỮ LIỆU TRANG ÔN TẬP — Bài 7 — Mạng là gì?
   (tách từ phần Ôn tập của bai-07.js; dùng chung engine lesson.js)
   ============================================================ */

const LESSON = {
  id:    'bai7-mang-on-tap',
  icon:  '🌐',
  title: 'Ôn tập Bài 7 — Mạng là gì?',

  sections: [
    /* ============================================================
       PHẦN 7 — Ôn tập
       ------------------------------------------------------------
       Gom lại TẤT CẢ câu hỏi (bỏ hết slide lý thuyết) từ 6 phần
       trên để học sinh luyện lại. Đáp án làm ở đây độc lập hoàn
       toàn với đáp án đã làm ở phần gốc.
       ============================================================ */
    {
      id: 's7',
      title: 'Ôn tập',
      slides: [
        /* Slide 31 (Trang 31 / 45) */
        {
          type: 'quiz_single',
          topic: 'Ôn tập',
          question: 'Em gọi các thiết bị máy tính được kết nối với nhau có thể trao đổi dữ liệu và chia sẻ tài nguyên là gì?',
          options: ['Bộ nhớ (Memory)', 'Ethernet', 'Bluetooth', 'Mạng máy tính (Computer network)'],
          correctAnswer: 3,
          hint: 'Đây chính là khái niệm đã học ở Phần 1.',
          explain: 'Các máy tính được kết nối với nhau để trao đổi dữ liệu và chia sẻ tài nguyên được gọi là Mạng máy tính (Computer network).'
        },

        /* Slide 32 (Trang 32 / 45) */
        {
          type: 'quiz_multiple',
          topic: 'Ôn tập',
          question: 'Em hãy cho biết, trong các tùy chọn sau, tùy chọn nào là những ưu điểm của điện toán đám mây? (Chọn 4)',
          options: [
            'Dung lượng lưu trữ có trả phí.',
            'Cần có kết nối Internet để hoạt động.',
            'Tự động sao lưu dự phòng.',
            'Nhóm quyền truy cập vào cùng một tài liệu.',
            'Truy cập bất cứ nơi nào có kết nối Internet.',
            'Khả năng chia sẻ mọi thứ với nhiều người.'
          ],
          correctAnswers: [2, 3, 4, 5],
          hint: '"Trả phí" và "cần Internet" là yêu cầu/hạn chế, không phải ưu điểm.',
          explain: 'Ưu điểm của điện toán đám mây: tự động sao lưu dự phòng, phân quyền truy cập tài liệu, truy cập từ mọi nơi có Internet, và dễ dàng chia sẻ với nhiều người.'
        },

        /* Slide 33 (Trang 33 / 45) */
        {
          type: 'quiz_multiple',
          topic: 'Ôn tập',
          question: 'Em hãy cho biết, những thiết bị nào sau đây phụ thuộc nhiều vào công nghệ lưu trữ điện toán đám mây? (Chọn 2)',
          options: ['Smartphone', 'Tablet', 'Desktop', 'Laptop'],
          correctAnswers: [0, 1],
          hint: 'Thiết bị nào có bộ nhớ nhỏ, hạn chế nhất trong 4 lựa chọn?',
          explain: 'Smartphone và Tablet thường có bộ nhớ giới hạn nên phụ thuộc nhiều vào lưu trữ đám mây, khác với Desktop/Laptop thường có ổ cứng lớn hơn.'
        },

        /* Slide 34 (Trang 34 / 45) */
        {
          type: 'quiz_multiple',
          topic: 'Ôn tập',
          question: 'Em hãy cho biết, tùy chọn nào sau đây là lợi thế của việc sử dụng USB để lưu trữ các tập tin so với lưu trữ điện toán đám mây? (Chọn 2)',
          options: [
            'USB có thể chứa nhiều dữ liệu hơn.',
            'Em không cần kết nối Internet để truy cập các tập tin.',
            'USB không có giới hạn dung lượng.',
            'Các tập tin của em an toàn hơn.'
          ],
          correctAnswers: [1, 3],
          hint: 'USB vẫn có giới hạn dung lượng — lợi thế của USB nằm ở việc KHÔNG cần mạng và tính riêng tư/an toàn.',
          explain: 'USB không cần Internet để truy cập tập tin, và vì dữ liệu chỉ nằm trên USB (không đưa lên mạng) nên nhiều người xem đây là an toàn hơn.'
        },

        /* Slide 35 (Trang 35 / 45) */
        {
          type: 'quiz_single',
          topic: 'Ôn tập',
          question: 'Hầu hết các điện thoại thông minh đều có tùy chọn gói dữ liệu di động. Em hãy cho biết, tùy chọn nào sau đây mô tả chính xác dữ liệu di động là gì?',
          options: [
            'Điện thoại của em có bao nhiêu bộ nhớ.',
            'Truy cập Internet không dây có tính phí, được đo bằng mức tiêu thụ dữ liệu.',
            'Em được phép gửi bao nhiêu tin nhắn văn bản.',
            'Em được phân bổ bao nhiêu thời gian để gọi điện thoại.'
          ],
          correctAnswer: 1,
          hint: 'Dữ liệu di động liên quan tới việc truy cập Internet qua sóng của nhà mạng, được tính theo dung lượng đã dùng.',
          explain: 'Dữ liệu di động là dịch vụ truy cập Internet không dây có tính phí, được đo bằng lượng dữ liệu (MB/GB) mà em đã sử dụng.'
        },

        /* Slide 36 (Trang 36 / 45) */
        {
          type: 'quiz_single',
          topic: 'Ôn tập',
          question: 'Em hãy cho biết, trong các tùy chọn sau, tùy chọn nào là loại lưu trữ dữ liệu được truy cập từ xa thông qua kết nối Internet?',
          options: ['Lưu trữ đám mây', 'Ổ cứng ngoài', 'Bộ lưu trữ USB', 'Đĩa CD'],
          correctAnswer: 0,
          hint: 'Ổ cứng ngoài, USB, đĩa CD đều phải cắm trực tiếp vào máy — không cần Internet.',
          explain: 'Lưu trữ đám mây là loại duy nhất trong 4 lựa chọn cho phép truy cập dữ liệu từ xa qua Internet.'
        },

        /* Slide 37 (Trang 37 / 45) */
        {
          type: 'quiz_single',
          topic: 'Ôn tập',
          question: 'Em hãy cho biết, tùy chọn nào là phương pháp cho phép truy cập và cập nhật các tập tin trực tuyến?',
          options: ['Ổ cứng ngoài', 'Email', 'Bộ lưu trữ USB', 'Lưu trữ đám mây'],
          correctAnswer: 3,
          hint: 'Cần 1 phương pháp cho phép vừa xem, vừa CẬP NHẬT tập tin ngay trên mạng.',
          explain: 'Lưu trữ đám mây cho phép truy cập và cập nhật trực tiếp các tập tin trực tuyến, mọi thay đổi được đồng bộ ngay.'
        },

        /* Slide 38 (Trang 38 / 45) */
        {
          type: 'quiz_single',
          topic: 'Ôn tập',
          question: 'Địa chỉ của một trang web được gọi là gì?',
          options: ['URL', 'Tác giả (Author)', 'Nhà xuất bản (Publisher)', 'Tiêu đề trang (Page title)'],
          correctAnswer: 0,
          hint: 'Đây chính là khái niệm đã học ở Phần 2.',
          explain: 'URL (Uniform Resource Locator) là địa chỉ duy nhất giúp xác định vị trí một trang web trên Internet.'
        },

        /* Slide 39 (Trang 39 / 45) */
        {
          type: 'quiz_single',
          topic: 'Ôn tập',
          question: 'Hành động nỗ lực khai thác hệ thống máy tính hoặc mạng riêng bên trong máy tính được gọi là gì?',
          options: ['Hacking', 'Công dân kỷ nguyên số (Digital Citizenship)', 'Dấu chân kỹ thuật số (Digital footprint)', 'Bystander'],
          correctAnswer: 0,
          hint: 'Đây chính là khái niệm đã học ở Phần 1.',
          explain: 'Hacking là hành động khai thác hệ thống máy tính hoặc mạng riêng — có thể hợp pháp (bảo mật) hoặc bất hợp pháp (xâm nhập, đánh cắp).'
        },

        /* Slide 40 (Trang 40 / 45) */
        {
          type: 'quiz_multiple',
          topic: 'Ôn tập',
          question: 'Em hãy cho biết, phần mềm Virus ảnh hưởng đến hệ thống máy tính như thế nào? (Chọn 2)',
          options: ['Phá hủy bo mạch chủ.', 'Xóa hoặc làm hỏng dữ liệu.', 'Liên quan đến một cuộc tấn công DoS.', 'Thu thập và chuyển thông tin cá nhân.'],
          correctAnswers: [1, 3],
          hint: 'Virus là phần mềm — nó tác động tới dữ liệu/thông tin trên máy, không phá hỏng phần cứng vật lý.',
          explain: 'Virus thường xóa/làm hỏng dữ liệu và thu thập, đánh cắp thông tin cá nhân. Nó không trực tiếp phá hủy phần cứng, và cũng không phải là một cuộc tấn công DoS.'
        },

        /* Slide 41 (Trang 41 / 45) */
        {
          type: 'quiz_multiple',
          topic: 'Ôn tập',
          question: 'Em hãy cho biết, hai lợi ích của việc tải xuống (Download) tập tin thay vì phát trực tuyến (Stream) tập tin đó là gì? (Chọn 2)',
          options: [
            'Không cần phải đợi trước khi chạy tập tin.',
            'Phát trực tuyến có khả năng phát lại mượt mà hơn.',
            'Sau khi tải xuống hoàn tất, quá trình phát lại đáng tin cậy hơn.',
            'Tập tin đã được tải xuống không yêu cầu kết nối Internet để phát lại.',
            'Không yêu cầu dung lượng lưu trữ.'
          ],
          correctAnswers: [2, 3],
          hint: 'So với Streaming, Download cần đợi tải xong trước — nhưng đổi lại ổn định hơn và không cần mạng khi phát lại.',
          explain: 'Sau khi tải xong, file đã tải chạy ổn định hơn (không giật/lag do mạng chậm) và không cần kết nối Internet để xem lại.'
        },

        /* Slide 42 (Trang 42 / 45) */
        {
          type: 'quiz_single',
          topic: 'Ôn tập',
          question: 'Em hãy cho biết, mạng kết nối các máy tính trên toàn cầu được gọi là gì?',
          options: ['Internet', 'RAM', 'Computer', 'Social Network'],
          correctAnswer: 0,
          hint: 'RAM là bộ nhớ, Computer là máy tính đơn lẻ, Social Network chỉ là 1 phần nhỏ chạy trên đó.',
          explain: 'Internet là mạng kết nối hàng tỉ máy tính trên khắp thế giới với nhau.'
        },

        /* Slide 43 (Trang 43 / 45) */
        {
          type: 'quiz_multiple',
          topic: 'Ôn tập',
          question: 'Em hãy cho biết, tùy chọn nào sau đây là đúng khi nói về ứng dụng của mạng máy tính trong đời sống? (Chọn 2)',
          options: ['Mua sắm trực tuyến.', 'Giúp các máy tính có thể hoạt động.', 'Tạo ra năng lượng điện.', 'Giao lưu với nhiều người bạn trên mạng xã hội.'],
          correctAnswers: [0, 3],
          hint: 'Mạng không tạo ra điện, và máy tính vẫn hoạt động được mà không cần mạng.',
          explain: 'Mua sắm trực tuyến và giao lưu trên mạng xã hội đều là ứng dụng thực tế của mạng máy tính trong đời sống hằng ngày.'
        },

        /* Slide 44 (Trang 44 / 45) */
        {
          type: 'quiz_single',
          topic: 'Ôn tập',
          question: 'Em hãy cho biết, tùy chọn nào sau đây KHÔNG thể hiện ứng dụng của Mạng trong "Hệ thống an ninh và giám sát"?',
          options: [
            'Camera kết nối với Mạng để cung cấp hình ảnh, Video tại các cảng hàng không.',
            'Cảm biến hồng ngoại kết nối với Mạng để cung cấp các tín hiệu thu được tại các cổng bảo vệ.',
            'Điện thoại kết nối với Mạng có kết nối Internet để xem Video trên Youtube.'
          ],
          correctAnswer: 2,
          hint: 'Xem Youtube trên điện thoại là giải trí, không liên quan gì tới việc giám sát/bảo vệ an ninh.',
          explain: 'Camera và cảm biến hồng ngoại phục vụ trực tiếp cho an ninh/giám sát. Xem Youtube chỉ là giải trí, không phải ứng dụng an ninh.'
        },

        /* Slide 45 — slide hoàn thành */
        {
          type: 'info',
          final: true,
          topic: 'Hoàn thành',
          title: 'Em đã ôn tập xong Bài 7!',
          content: 'Xem lại điểm số bên dưới. Nếu muốn luyện thêm lần nữa, bấm nút làm lại.',
          imageUrl: null
        }
      ]
    }
  ]
};

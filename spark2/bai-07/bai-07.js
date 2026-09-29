/* ============================================================
   DỮ LIỆU BÀI HỌC — BÀI 7: MẠNG LÀ GÌ?
   (IC3 GS6 Spark — Level 2 — Chủ đề: Căn bản về công nghệ)
   ------------------------------------------------------------
   File này dùng chung engine với các bài khác (app.js + style.css),
   chỉ khác nội dung. Cấu trúc và các dạng slide y hệt quy ước đã
   dùng — xem chú thích mẫu ở cuối file nếu cần đối chiếu.

   Nguồn: PDF gốc Bai07_Mang.pdf (64 trang). Đây là BẢN THỬ đầu
   tiên — bạn xem qua câu chữ / mật khẩu và chỉnh lại nếu cần.
   Vài chỗ mình đã gộp bớt slide lý thuyết liền kề nhau (PDF gốc
   tách rất nhỏ, gần như 1 slide/1 ý) để bài gọn hơn khi học tương
   tác, nhưng vẫn giữ đủ nội dung.
   ============================================================ */

/* ============================================================
   MẬT KHẨU TỪNG PHẦN — sửa ở đây, không cần đi tìm trong từng phần
   ------------------------------------------------------------
   Để trống '' cho phần nào muốn luôn mở sẵn (không cần mật khẩu).
   ============================================================ */
const PASSWORDS = {
  s1: '468',   // Phần 1 — Mạng máy tính
  s2: '762',   // Phần 2 — Kết nối mạng Internet
  s3: '164',   // Phần 3 — Lưu trữ điện toán đám mây
  s4: '287',   // Phần 4 — Một số ứng dụng của mạng trong đời sống
  s5: '591',   // Phần 5 — Công cụ AI và Internet
  s6: '055',   // Phần 6 — An toàn khi dùng mạng và AI
  s7: '189'    // Phần 7 — Ôn tập
};

const LESSON = {
  id:    'bai7-mang',
  icon:  '🌐',
  title: 'Bài 7 — Mạng là gì?',

  sections: [

    /* ============================================================
       PHẦN 1 — Mạng máy tính (mật khẩu: B0701)
       ============================================================ */
    {
      id: 's1',
      title: 'Mạng máy tính',
      password: PASSWORDS.s1,
      slides: [
        /* Slide 1 (Trang 1 / 45) */
        {
          type: 'info',
          topic: 'Phần 1 · Khái niệm mạng',
          title: 'Mạng (Network) là gì?',
          content: '<b>Mạng</b> là hệ thống để di chuyển các đối tượng hoặc thông tin từ nơi này đến nơi khác. Trong máy tính, <b>mạng</b> đơn giản là các máy tính được kết nối với nhau để giao tiếp và chia sẻ thông tin.',
          imageUrl: null,
          things: [
            { icon: '🚦', name: 'Mạng giao thông', en: 'Hệ thống đường, cầu, ngã tư giúp xe cộ di chuyển' },
            { icon: '☎️', name: 'Mạng điện thoại', en: 'Hệ thống dây và trạm giúp cuộc gọi truyền đi' },
            { icon: '📶', name: 'Mạng di động', en: 'Hệ thống trạm 3G/4G/5G giúp điện thoại kết nối không dây' },
            { icon: '📺', name: 'Mạng truyền hình cáp', en: 'Hệ thống cáp truyền tín hiệu từ đài phát đến TV' }
          ],
          remember: 'Điểm chung: tất cả các mạng đều giúp <b>KẾT NỐI</b> các thứ lại với nhau để <b>TRAO ĐỔI</b> thông tin hoặc tài nguyên.'
        },

        /* Slide 2 (Trang 2 / 45) */
        {
          type: 'quiz_single',
          topic: 'Luyện tập',
          question: 'Em gọi các thiết bị máy tính được kết nối với nhau có thể trao đổi dữ liệu và chia sẻ tài nguyên là gì?',
          options: ['Bộ nhớ (Memory)', 'Ethernet', 'Bluetooth', 'Mạng máy tính (Computer network)'],
          correctAnswer: 3,
          hint: 'Đây chính là khái niệm em vừa học ở slide trước.',
          explain: 'Các máy tính được kết nối với nhau để trao đổi dữ liệu và chia sẻ tài nguyên được gọi là Mạng máy tính (Computer network).'
        },

        /* Slide 3 (Trang 3 / 45) */
        {
          type: 'info',
          topic: 'Phần 1 · Khái niệm mạng',
          title: 'Internet là gì?',
          content: '<b>Mạng kết nối các máy tính trên toàn cầu</b> được gọi là <b>Internet</b>.',
          imageUrl: null
        },

        /* Slide 4 (Trang 4 / 45) */
        {
          type: 'quiz_single',
          topic: 'Luyện tập',
          question: 'Em hãy cho biết, mạng kết nối các máy tính trên toàn cầu được gọi là gì?',
          options: ['Internet', 'RAM', 'Computer', 'Social Network'],
          correctAnswer: 0,
          hint: 'RAM là bộ nhớ, Computer là máy tính đơn lẻ, Social Network chỉ là 1 phần nhỏ chạy trên đó.',
          explain: 'Internet là mạng kết nối hàng tỉ máy tính trên khắp thế giới với nhau.'
        },

        /* Slide 5 (Trang 5 / 45) */
        {
          type: 'info',
          topic: 'Phần 1 · An toàn mạng',
          title: 'Hacking là gì?',
          content: '<b>Hacking</b> là hành động nỗ lực khai thác hệ thống máy tính hoặc mạng riêng bên trong máy tính. Hacking có thể <b>hợp pháp</b> (bảo mật) hoặc <b>bất hợp pháp</b> (xâm nhập, đánh cắp).',
          imageUrl: null
        },

        /* Slide 6 (Trang 6 / 45) */
        {
          type: 'quiz_single',
          topic: 'Luyện tập',
          question: 'Hành động nỗ lực khai thác hệ thống máy tính hoặc mạng riêng bên trong máy tính được gọi là gì?',
          options: ['Hacking', 'Công dân kỷ nguyên số (Digital Citizenship)', 'Dấu chân kỹ thuật số (Digital footprint)', 'Bystander'],
          correctAnswer: 0,
          hint: 'Đây chính là khái niệm em vừa học ở slide trước.',
          explain: 'Hacking là hành động khai thác hệ thống máy tính hoặc mạng riêng — có thể hợp pháp (bảo mật) hoặc bất hợp pháp (xâm nhập, đánh cắp).'
        },

        /* Slide 7 (Trang 7 / 45) */
        {
          type: 'info',
          topic: 'Phần 1 · An toàn mạng',
          title: 'Virus là gì?',
          content: '<b>Virus</b> là một dạng phần mềm độc hại (malware) có khả năng lây lan từ máy tính này sang máy tính khác. Virus thường tấn công dữ liệu (xóa, mã hóa, làm hỏng file) hoặc ăn cắp thông tin cá nhân (password, tài khoản).',
          imageUrl: null,
          remember: 'Một trong những con đường lây nhiễm Virus phổ biến chính là qua <b>mạng máy tính</b> (LAN, Internet, email, tải file…).'
        },

        /* Slide 8 (Trang 8 / 45) */
        {
          type: 'quiz_multiple',
          topic: 'Luyện tập',
          question: 'Em hãy cho biết, phần mềm Virus ảnh hưởng đến hệ thống máy tính như thế nào? (Chọn 2)',
          options: ['Phá hủy bo mạch chủ.', 'Xóa hoặc làm hỏng dữ liệu.', 'Liên quan đến một cuộc tấn công DoS.', 'Thu thập và chuyển thông tin cá nhân.'],
          correctAnswers: [1, 3],
          hint: 'Virus là phần mềm — nó tác động tới dữ liệu/thông tin trên máy, không phá hỏng phần cứng vật lý như bo mạch chủ.',
          explain: 'Virus thường xóa/làm hỏng dữ liệu và thu thập, đánh cắp thông tin cá nhân. Nó không trực tiếp phá hủy phần cứng (bo mạch chủ), và cũng không phải là một cuộc tấn công DoS.'
        }
      ]
    },

    /* ============================================================
       PHẦN 2 — Kết nối mạng Internet (mật khẩu: B0702)
       ============================================================ */
    {
      id: 's2',
      title: 'Kết nối mạng Internet',
      password: PASSWORDS.s2,
      slides: [
        /* Slide 9 (Trang 9 / 45) */
        {
          type: 'info',
          topic: 'Phần 2 · Kết nối Internet',
          title: 'Địa chỉ web (URL)',
          content: 'Nhờ có Internet, chúng ta có thể truy cập nhiều trang web khác nhau thông qua <b>địa chỉ web (URL)</b> — đây là địa chỉ duy nhất giúp định danh và xác định vị trí của trang web trên mạng toàn cầu.',
          imageUrl: null,
          remember: 'Ví dụ: <b>https://www.google.com</b>'
        },

        /* Slide 10 (Trang 10 / 45) */
        {
          type: 'quiz_single',
          topic: 'Luyện tập',
          question: 'Địa chỉ của một trang web được gọi là gì?',
          options: ['URL', 'Tác giả (Author)', 'Nhà xuất bản (Publisher)', 'Tiêu đề trang (Page title)'],
          correctAnswer: 0,
          hint: 'Đây chính là khái niệm em vừa học ở slide trước.',
          explain: 'URL (Uniform Resource Locator) là địa chỉ duy nhất giúp xác định vị trí một trang web trên Internet.'
        },

        /* Slide 11 (Trang 11 / 45) */
        {
          type: 'info',
          topic: 'Phần 2 · Kết nối Internet',
          title: '3 cách kết nối Internet',
          content: 'Có nhiều cách để thiết bị của em kết nối vào Internet:',
          imageUrl: null,
          things: [
            { icon: '🔌', name: 'Kết nối bằng cáp Ethernet', en: 'Dây cáp mạng nối trực tiếp vào thiết bị' },
            { icon: '📶', name: 'Kết nối bằng sóng Wifi', en: 'Kết nối không dây qua sóng Wifi' },
            { icon: '📱', name: 'Đăng ký gói dữ liệu di động', en: 'Dùng sóng 3G/4G/5G của nhà mạng' }
          ]
        },

        /* Slide 12 (Trang 12 / 45) */
        {
          type: 'quiz_single',
          topic: 'Luyện tập',
          question: 'Hầu hết các điện thoại thông minh đều có tùy chọn gói dữ liệu di động. Em hãy cho biết, tùy chọn nào sau đây mô tả chính xác dữ liệu di động là gì?',
          options: [
            'Điện thoại của em có bao nhiêu bộ nhớ.',
            'Truy cập Internet không dây có tính phí, được đo bằng mức tiêu thụ dữ liệu.',
            'Em được phép gửi bao nhiêu tin nhắn văn bản.',
            'Em được phân bổ bao nhiêu thời gian để gọi điện thoại.'
          ],
          correctAnswer: 1,
          hint: 'Dữ liệu di động liên quan tới việc truy cập Internet qua sóng của nhà mạng, được tính theo dung lượng (MB/GB) đã dùng.',
          explain: 'Dữ liệu di động là dịch vụ truy cập Internet không dây có tính phí, được đo bằng lượng dữ liệu (MB/GB) mà em đã sử dụng.'
        },

        /* Slide 13 (Trang 13 / 45) */
        {
          type: 'info',
          topic: 'Phần 2 · Kết nối Internet',
          title: 'Download & Streaming',
          content: 'Hai cách phổ biến để sử dụng nội dung từ Internet:',
          imageUrl: null,
          things: [
            { icon: '⬇️', name: 'Download (Tải xuống)', en: 'Sao chép tập tin về máy để dùng lại bất cứ lúc nào, kể cả khi không có mạng' },
            { icon: '📡', name: 'Streaming (Phát trực tuyến)', en: 'Truyền tải và phát nội dung trực tiếp từ Internet, không cần lưu toàn bộ tập tin' }
          ]
        },

        /* Slide 14 (Trang 14 / 45) */
        {
          type: 'quiz_multiple',
          topic: 'Luyện tập',
          question: 'Em hãy cho biết, hai lợi ích của việc tải xuống (Download) tập tin thay vì phát trực tuyến (Stream) tập tin đó là gì? (Chọn 2)',
          options: [
            'Không cần phải đợi trước khi chạy tập tin.',
            'Phát trực tuyến có khả năng phát lại mượt mà hơn.',
            'Sau khi tải xuống hoàn tất, quá trình phát lại đáng tin cậy hơn.',
            'Tập tin đã được tải xuống không yêu cầu kết nối Internet để phát lại.',
            'Không yêu cầu dung lượng lưu trữ.'
          ],
          correctAnswers: [2, 3],
          hint: 'So với Streaming, Download cần đợi tải xong trước — nhưng đổi lại có 2 lợi ích riêng liên quan tới độ ổn định và việc không cần mạng.',
          explain: 'Sau khi tải xong, file đã tải chạy ổn định hơn (không giật/lag do mạng chậm) và không cần kết nối Internet để xem lại.'
        }
      ]
    },

    /* ============================================================
       PHẦN 3 — Lưu trữ điện toán đám mây (mật khẩu: B0703)
       ============================================================ */
    {
      id: 's3',
      title: 'Lưu trữ điện toán đám mây',
      password: PASSWORDS.s3,
      slides: [
        /* Slide 15 (Trang 15 / 45) */
        {
          type: 'info',
          topic: 'Phần 3 · Điện toán đám mây',
          title: 'Điện toán & Điện toán đám mây',
          content: 'Hai khái niệm quan trọng:',
          imageUrl: null,
          things: [
            { icon: '🖥️', name: 'Điện toán (Computing)', en: 'Dùng máy tính/thiết bị điện tử để xử lí thông tin: tính toán, lưu trữ, tìm kiếm, xem video, chơi game...' },
            { icon: '☁️', name: 'Điện toán đám mây (Cloud Computing)', en: 'Dịch vụ công nghệ cho phép lưu trữ, xử lí và truy cập dữ liệu thông qua Internet' }
          ]
        },

        /* Slide 16 (Trang 16 / 45) */
        {
          type: 'info',
          topic: 'Phần 3 · Điện toán đám mây',
          title: 'Lưu trữ đám mây (Cloud Storage)',
          content: '<b>Lưu trữ đám mây</b> là một phần quan trọng của điện toán đám mây, cho phép chúng ta lưu trữ thông tin dữ liệu và truy cập chúng từ xa thông qua kết nối Internet.',
          imageUrl: null,
          things: [
            { icon: '🔄', name: 'Tự động đồng bộ & sao lưu', en: 'Dữ liệu tự sao lưu dự phòng, không lo mất' },
            { icon: '🌍', name: 'Truy cập mọi nơi', en: 'Chỉ cần có kết nối Internet' },
            { icon: '🤝', name: 'Chia sẻ & phân quyền', en: 'Chia sẻ tài liệu, tùy chỉnh nhóm quyền truy cập' }
          ]
        },

        /* Slide 17 (Trang 17 / 45) */
        {
          type: 'quiz_single',
          topic: 'Luyện tập',
          question: 'Em hãy cho biết, trong các tùy chọn sau, tùy chọn nào là loại lưu trữ dữ liệu được truy cập từ xa thông qua kết nối Internet?',
          options: ['Lưu trữ đám mây', 'Ổ cứng ngoài', 'Bộ lưu trữ USB', 'Đĩa CD'],
          correctAnswer: 0,
          hint: 'Ổ cứng ngoài, USB, đĩa CD đều phải cắm trực tiếp vào máy — không cần Internet.',
          explain: 'Lưu trữ đám mây là loại duy nhất trong 4 lựa chọn cho phép truy cập dữ liệu từ xa qua Internet, không cần cắm thiết bị vật lý.'
        },

        /* Slide 18 (Trang 18 / 45) */
        {
          type: 'quiz_single',
          topic: 'Luyện tập',
          question: 'Em hãy cho biết, tùy chọn nào là phương pháp cho phép truy cập và cập nhật các tập tin trực tuyến?',
          options: ['Ổ cứng ngoài', 'Email', 'Bộ lưu trữ USB', 'Lưu trữ đám mây'],
          correctAnswer: 3,
          hint: 'Cần 1 phương pháp cho phép vừa xem, vừa CẬP NHẬT tập tin ngay trên mạng.',
          explain: 'Lưu trữ đám mây cho phép truy cập và cập nhật trực tiếp các tập tin trực tuyến, mọi thay đổi được đồng bộ ngay.'
        },

        /* Slide 19 (Trang 19 / 45) */
        {
          type: 'quiz_multiple',
          topic: 'Luyện tập',
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

        /* Slide 20 (Trang 20 / 45) */
        {
          type: 'info',
          topic: 'Phần 3 · Điện toán đám mây',
          title: 'Một số nhà cung cấp dịch vụ lưu trữ đám mây',
          content: 'Một vài dịch vụ lưu trữ đám mây phổ biến hiện nay:',
          imageUrl: null,
          things: [
            { icon: '🟢', name: 'Google Drive', en: 'Nhà cung cấp: Google' },
            { icon: '🔷', name: 'Dropbox', en: 'Nhà cung cấp: Dropbox' },
            { icon: '☁️', name: 'OneDrive', en: 'Nhà cung cấp: Microsoft' }
          ],
          remember: 'Smartphone/Tablet thường có bộ nhớ giới hạn, nên phụ thuộc nhiều vào các dịch vụ lưu trữ đám mây này để lưu ảnh, video, tài liệu.'
        },

        /* Slide 21 (Trang 21 / 45) */
        {
          type: 'quiz_multiple',
          topic: 'Luyện tập',
          question: 'Em hãy cho biết, những thiết bị nào sau đây phụ thuộc nhiều vào công nghệ lưu trữ điện toán đám mây? (Chọn 2)',
          options: ['Smartphone', 'Tablet', 'Desktop', 'Laptop'],
          correctAnswers: [0, 1],
          hint: 'Thiết bị nào có bộ nhớ nhỏ, hạn chế nhất trong 4 lựa chọn?',
          explain: 'Smartphone và Tablet thường có bộ nhớ giới hạn nên phụ thuộc nhiều vào lưu trữ đám mây, khác với Desktop/Laptop thường có ổ cứng lớn hơn.'
        },

        /* Slide 22 (Trang 22 / 45) */
        {
          type: 'quiz_multiple',
          topic: 'Luyện tập',
          question: 'Em hãy cho biết, tùy chọn nào sau đây là lợi thế của việc sử dụng USB để lưu trữ các tập tin so với lưu trữ điện toán đám mây? (Chọn 2)',
          options: [
            'USB có thể chứa nhiều dữ liệu hơn.',
            'Em không cần kết nối Internet để truy cập các tập tin.',
            'USB không có giới hạn dung lượng.',
            'Các tập tin của em an toàn hơn.'
          ],
          correctAnswers: [1, 3],
          hint: 'USB vẫn có giới hạn dung lượng và dung lượng cloud thường lớn hơn — lợi thế của USB nằm ở việc KHÔNG cần mạng và tính riêng tư/an toàn.',
          explain: 'USB không cần Internet để truy cập tập tin, và vì dữ liệu chỉ nằm trên USB (không đưa lên mạng) nên nhiều người xem đây là an toàn hơn.'
        }
      ]
    },

    /* ============================================================
       PHẦN 4 — Một số ứng dụng của mạng trong đời sống
       (mật khẩu: B0704)
       ============================================================ */
    {
      id: 's4',
      title: 'Một số ứng dụng của mạng trong đời sống',
      password: PASSWORDS.s4,
      slides: [
        /* Slide 23 (Trang 23 / 45) */
        {
          type: 'info',
          topic: 'Phần 4 · Ứng dụng của mạng',
          title: 'Mạng có nhiều ứng dụng trong đời sống',
          content: 'Mạng máy tính phục vụ rất nhiều nhu cầu hằng ngày của chúng ta:',
          imageUrl: null,
          things: [
            { icon: '💬', name: 'Giao tiếp & truyền thông', en: 'Email, tin nhắn, gọi thoại/video (Zalo, Facebook, Zoom...)' },
            { icon: '🗂️', name: 'Chia sẻ tài nguyên', en: 'Dùng chung máy in, chia sẻ dữ liệu qua mạng cục bộ' },
            { icon: '🛒', name: 'Mua sắm trực tuyến', en: 'Tìm sản phẩm, so sánh giá, đặt hàng, thanh toán online' },
            { icon: '🎮', name: 'Giải trí', en: 'Xem phim, nghe nhạc, chơi game trực tuyến (Netflix, YouTube, Spotify)' },
            { icon: '📱', name: 'Mạng xã hội', en: 'Kết nối bạn bè, chia sẻ ảnh/video (Facebook, Instagram, X...)' },
            { icon: '🏠', name: 'Làm việc từ xa', en: 'Làm việc ở nhà vẫn đảm bảo hiệu suất, không cần đến văn phòng' },
            { icon: '🎥', name: 'An ninh & giám sát', en: 'Camera, cảm biến kết nối mạng để theo dõi, bảo vệ an ninh' }
          ]
        },

        /* Slide 24 (Trang 24 / 45) */
        {
          type: 'quiz_multiple',
          topic: 'Luyện tập',
          question: 'Em hãy cho biết, tùy chọn nào sau đây là đúng khi nói về ứng dụng của mạng máy tính trong đời sống? (Chọn 2)',
          options: ['Mua sắm trực tuyến.', 'Giúp các máy tính có thể hoạt động.', 'Tạo ra năng lượng điện.', 'Giao lưu với nhiều người bạn trên mạng xã hội.'],
          correctAnswers: [0, 3],
          hint: 'Mạng không tạo ra điện, và máy tính vẫn hoạt động được mà không cần mạng (chỉ là không truy cập Internet).',
          explain: 'Mua sắm trực tuyến và giao lưu trên mạng xã hội đều là ứng dụng thực tế của mạng máy tính trong đời sống hằng ngày.'
        },

        /* Slide 25 (Trang 25 / 45) */
        {
          type: 'info',
          topic: 'Phần 4 · An ninh & giám sát',
          title: 'Hệ thống an ninh và giám sát',
          content: 'Mạng được ứng dụng trong các hệ thống an ninh và giám sát tại khu dân cư, tòa nhà, công ty, cơ quan chính phủ. Các hệ thống này dùng camera và cảm biến kết nối mạng để theo dõi, bảo vệ an ninh.',
          imageUrl: null
        },

        /* Slide 26 (Trang 26 / 45) */
        {
          type: 'quiz_single',
          topic: 'Luyện tập',
          question: 'Em hãy cho biết, tùy chọn nào sau đây KHÔNG thể hiện ứng dụng của Mạng trong "Hệ thống an ninh và giám sát"?',
          options: [
            'Camera kết nối với Mạng để cung cấp hình ảnh, Video tại các cảng hàng không.',
            'Cảm biến hồng ngoại kết nối với Mạng để cung cấp các tín hiệu thu được tại các cổng bảo vệ.',
            'Điện thoại kết nối với Mạng có kết nối Internet để xem Video trên Youtube.'
          ],
          correctAnswer: 2,
          hint: 'Xem Youtube trên điện thoại là giải trí, không liên quan gì tới việc giám sát/bảo vệ an ninh.',
          explain: 'Camera và cảm biến hồng ngoại phục vụ trực tiếp cho an ninh/giám sát. Việc xem Youtube trên điện thoại chỉ là giải trí, không phải ứng dụng an ninh.'
        }
      ]
    },

    /* ============================================================
       PHẦN 5 — Công cụ AI và Internet (mật khẩu: B0705)
       ============================================================ */
    {
      id: 's5',
      title: 'Công cụ AI và Internet',
      password: PASSWORDS.s5,
      slides: [
        /* Slide 27 (Trang 27 / 45) */
        {
          type: 'info',
          topic: 'Phần 5 · Công cụ AI cần Internet',
          title: 'Nhiều công cụ AI hoạt động trực tuyến',
          content: 'Nhiều công cụ AI cần <b>Internet</b> để gửi yêu cầu đến máy chủ và nhận kết quả trả về:',
          imageUrl: null,
          things: [
            { icon: '💬', name: 'ChatGPT (OpenAI)', en: 'Chatbot AI trả lời câu hỏi, hỗ trợ viết, dịch' },
            { icon: '✨', name: 'Google Gemini', en: 'AI tích hợp trong Google, hỗ trợ tìm kiếm, viết, phân tích' },
            { icon: '🖇️', name: 'Microsoft Copilot', en: 'AI trong Windows và Microsoft 365' },
            { icon: '🎨', name: 'Canva AI', en: 'Tạo và chỉnh sửa hình ảnh, thiết kế qua trình duyệt' },
            { icon: '🌐', name: 'Google Translate', en: 'Dịch văn bản và giọng nói theo thời gian thực' }
          ],
          remember: 'Vì sao cần Internet? Thiết bị của em gửi yêu cầu → máy chủ ở xa xử lí dữ liệu → kết quả được gửi về qua Internet.'
        },

        /* Slide 28 (Trang 28 / 45) */
        {
          type: 'info',
          topic: 'Phần 5 · Công cụ AI không cần Internet',
          title: 'Một số tính năng AI hoạt động Offline',
          content: 'Một số tính năng AI <b>không cần Internet</b> vì được xử lí ngay trên thiết bị:',
          imageUrl: null,
          things: [
            { icon: '🗣️', name: 'Siri (offline mode)', en: 'Một số lệnh đơn giản: đặt hẹn, gọi điện, bật nhạc' },
            { icon: '🤖', name: 'Google Assistant (offline)', en: 'Nhận dạng giọng nói cơ bản khi không có mạng' },
            { icon: '⌨️', name: 'Bàn phím dự đoán chữ', en: 'AI gợi ý từ khi gõ trên điện thoại' },
            { icon: '🔒', name: 'Nhận dạng khuôn mặt / vân tay', en: 'Mở khóa điện thoại bằng AI' },
            { icon: '🌍', name: 'Google Translate offline', en: 'Tải bộ ngôn ngữ trước, dịch không cần mạng' }
          ],
          remember: 'Những tính năng này xử lí dữ liệu ngay trên thiết bị, nên vẫn hoạt động được khi không có mạng.'
        }
      ]
    },

    /* ============================================================
       PHẦN 6 — An toàn khi dùng mạng và AI (mật khẩu: B0706)
       ============================================================ */
    {
      id: 's6',
      title: 'An toàn khi dùng mạng và AI',
      password: PASSWORDS.s6,
      slides: [
        /* Slide 29 (Trang 29 / 45) */
        {
          type: 'info',
          topic: 'Phần 6 · An toàn mạng & AI',
          title: 'An toàn khi dùng mạng và AI',
          content: 'Một số nguyên tắc quan trọng để dùng mạng và AI an toàn:',
          imageUrl: null,
          things: [
            { icon: '🔗', name: 'Không mở liên kết lạ', en: 'Gửi qua email, tin nhắn hoặc mạng xã hội' },
            { icon: '🔑', name: 'Không nhập mật khẩu Wifi/dữ liệu cá nhân vào công cụ AI', en: '' },
            { icon: '🙅', name: 'Không chia sẻ thông tin cá nhân', en: 'Tên, địa chỉ, số điện thoại, ảnh — nếu chưa được phép' },
            { icon: '📶', name: 'Chỉ dùng Wifi có mật khẩu', en: 'Tránh Wifi công cộng không rõ nguồn gốc' },
            { icon: '🙋', name: 'Hỏi giáo viên hoặc cha mẹ', en: 'Khi không chắc về 1 trang web hoặc công cụ AI nào đó' }
          ]
        },

        /* Slide 30 (Trang 30 / 45) — slide hoàn thành RIÊNG cho bài học
           chính (6 phần lý thuyết + luyện tập), tách biệt với slide hoàn
           thành của phần Ôn tập ở cuối bài. */
        {
          type: 'info',
          final: true,
          scoreSections: [0, 1, 2, 3, 4, 5],
          topic: 'Hoàn thành',
          title: 'Chúc mừng em đã học xong Bài 7!',
          content: 'Em đã hiểu khái niệm mạng máy tính, cách kết nối Internet, lưu trữ điện toán đám mây, các ứng dụng của mạng trong đời sống, cách công cụ AI dùng Internet, và cách dùng mạng/AI an toàn.',
          imageUrl: null,
          remember: 'Muốn ôn lại toàn bộ câu hỏi của bài, bấm "Tiếp theo" để sang phần <b>Ôn tập</b> ngay sau đây.'
        }
      ]
    },

    /* ============================================================
       PHẦN 7 — Ôn tập (mật khẩu: B0707)
       ------------------------------------------------------------
       Gom lại TẤT CẢ câu hỏi (bỏ hết slide lý thuyết) từ 6 phần
       trên để học sinh luyện lại. Đáp án làm ở đây độc lập hoàn
       toàn với đáp án đã làm ở phần gốc.
       ============================================================ */
    {
      id: 's7',
      title: 'Ôn tập',
      password: PASSWORDS.s7,
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

        /* Slide 45 (Trang 45 / 45) — slide hoàn thành RIÊNG của phần Ôn tập.
           resetScope:'section' báo cho app.js biết: nút ở đây chỉ làm lại
           14 câu của phần Ôn tập (giữ nguyên tiến trình 6 phần trước), và
           điểm số hiển thị cũng chỉ tính trong phạm vi phần này. */
        {
          type: 'info',
          final: true,
          resetScope: 'section',
          topic: 'Hoàn thành',
          title: 'Em đã ôn tập xong Bài 7!',
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
   nên khai báo scoreSections:[0,1,2,3,4,5] (liệt kê đúng chỉ số các
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

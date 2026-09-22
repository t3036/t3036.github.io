/* ============================================================
   DỮ LIỆU BÀI HỌC — BÀI 7: THIẾT BỊ DI ĐỘNG
   (IC3 GS6 Spark — Level 1 — Chủ đề: Căn bản về công nghệ)
   ------------------------------------------------------------
   File này dùng chung engine với các bài khác (app.js + style.css),
   chỉ khác nội dung. Cấu trúc và các dạng slide y hệt quy ước đã
   dùng — xem chú thích mẫu ở cuối file nếu cần đối chiếu.

   *** LƯU Ý VỀ TÊN FILE ***
   Bạn yêu cầu đặt tên "bai-07.html/bai-07.js", nhưng tên đó ĐÃ
   được dùng cho bài "Bài 7 — Mạng là gì?" (IC3 GS6 Spark LEVEL 2)
   làm trước đó. Vì tất cả các bài hiện đang để chung 1 thư mục
   (chưa tách theo level-1/level-2/level-3 như gợi ý trước đây),
   nếu đặt trùng tên "bai-07" sẽ ghi đè mất bài Mạng của Level 2.
   Mình đã đổi thành "bai-07-tbdd.js" / "bai-07-tbdd.html" (tbdd =
   Thiết Bị Di Động) để tránh mất dữ liệu. Khi nào bạn sắp xếp lại
   theo cấu trúc level-1/level-2/level-3, đây sẽ tự nhiên là đúng
   "bai-07.html" của riêng Level 1, không cần đổi tên lại.

   Nguồn: PDF gốc K3_B07_SuDungThietBiDiDong.pdf (34 trang). Đây là
   BẢN THỬ đầu tiên — bạn xem qua câu chữ / mật khẩu và chỉnh lại
   nếu cần.
   ============================================================ */

/* ============================================================
   MẬT KHẨU TỪNG PHẦN — sửa ở đây, không cần đi tìm trong từng phần
   ------------------------------------------------------------
   Để trống '' cho phần nào muốn luôn mở sẵn (không cần mật khẩu).
   ============================================================ */
const PASSWORDS = {
  s1: '367',   // Phần 1 — Thiết bị di động
  s2: '989',   // Phần 2 — Sử dụng thiết bị di động
  s3: '078',   // Phần 3 — An toàn khi sạc thiết bị di động
  s4: '304',   // Phần 4 — Học với AI trên thiết bị di động
  s5: '148'    // Phần 5 — Ôn tập
};

const LESSON = {
  id:    'bai7-tbdd',
  icon:  '📱',
  title: 'Bài 7 — Thiết bị di động',

  sections: [

    /* ============================================================
       PHẦN 1 — Thiết bị di động (mật khẩu: TBDD01)
       ============================================================ */
    {
      id: 's1',
      title: 'Thiết bị di động',
      password: PASSWORDS.s1,
      slides: [
        /* Slide 1 (Trang 1 / 27) */
        {
          type: 'info',
          topic: 'Phần 1 · Khái niệm',
          title: 'Thiết bị & Công nghệ di động',
          content: 'Hai khái niệm nền tảng:',
          imageUrl: null,
          things: [
            { icon: '🔧', name: 'Thiết bị (Device)', en: 'Được phát minh để phục vụ cho một mục đích cụ thể' },
            { icon: '🌍', name: 'Công nghệ di động (Mobile)', en: 'Công nghệ có thể theo chân người dùng đến mọi nơi' }
          ]
        },

        /* Slide 2 (Trang 2 / 27) */
        {
          type: 'info',
          topic: 'Phần 1 · Khái niệm',
          title: 'Thiết bị di động (Mobile Device)',
          content: '<b>Thiết bị di động</b> là thiết bị cầm tay kết hợp màn hình cảm ứng, máy ảnh,… và các phần mềm tiện ích như nhắn tin, gọi điện thoại.',
          imageUrl: null,
          remember: 'Ví dụ: Laptop, Smartphone, Tablet...'
        },

        /* Slide 3 (Trang 3 / 27) */
        {
          type: 'quiz_multiple',
          topic: 'Luyện tập',
          question: 'Em hãy cho biết, tùy chọn nào là thiết bị di động? (Chọn 2)',
          options: ['Chuột có dây', 'Điện thoại thông minh (Smartphone)', 'Máy tính bảng (Tablet)', 'Máy tính để bàn'],
          correctAnswers: [1, 2],
          hint: 'Thiết bị di động phải cầm tay và mang theo được mọi nơi — chuột có dây và máy tính để bàn thì không.',
          explain: 'Smartphone và Tablet là thiết bị cầm tay, mang theo được mọi nơi — đúng là thiết bị di động.'
        },

        /* Slide 4 (Trang 4 / 27) */
        {
          type: 'quiz_single',
          topic: 'Luyện tập',
          question: 'Em hãy cho biết, thiết bị nào là máy tính dễ dàng di chuyển gồm một phần cứng duy nhất có màn hình cảm ứng hoặc đa cảm ứng thay vì sử dụng một bàn phím riêng biệt?',
          options: ['Máy tính xách tay (Laptop)', 'Máy tính bảng (Tablet)', 'Notebook', 'Máy tính để bàn (Desktop Computer)'],
          correctAnswer: 1,
          hint: 'Laptop và Notebook đều có bàn phím RIÊNG gắn liền — thiết bị này thì không.',
          explain: 'Máy tính bảng (Tablet) chỉ gồm 1 khối màn hình cảm ứng duy nhất, không có bàn phím vật lý rời.'
        },

        /* Slide 5 (Trang 5 / 27) */
        {
          type: 'quiz_single',
          topic: 'Luyện tập',
          question: 'Em hãy cho biết, loại thiết bị máy tính nào có thể dễ dàng giữ trên bàn tay của em và có thể sử dụng bằng cách chạm vào màn hình bằng ngón tay?',
          options: ['Máy tính xách tay (Laptop Computer)', 'Máy tính để bàn (Desktop Computer)', 'Máy tính bỏ túi (Calculator)', 'Máy tính bảng (Tablet)'],
          correctAnswer: 3,
          hint: 'Cần 1 thiết bị vừa cầm gọn trong tay, vừa dùng ngón tay chạm màn hình để thao tác.',
          explain: 'Máy tính bảng (Tablet) nhỏ gọn, cầm vừa tay và điều khiển hoàn toàn bằng cách chạm ngón tay lên màn hình.'
        },

        /* Slide 6 (Trang 6 / 27) */
        {
          type: 'quiz_matching',
          topic: 'Luyện tập',
          question: 'Em hãy ghép nối từng định nghĩa ở cột bên trái sang thuật ngữ tương ứng ở cột bên phải.',
          pairs: [
            { icon: '📜', left: 'Hướng dẫn mà máy tính làm theo', right: 'Chương trình (Program)' },
            { icon: '🔩', left: 'Các bộ phận của máy tính mà em có thể chạm vào', right: 'Phần cứng (Hardware)' },
            { icon: '🔧', left: 'Thiết bị được phát minh cho một mục đích cụ thể', right: 'Thiết bị (Device)' },
            { icon: '🌍', left: 'Công nghệ đi đến nơi người dùng đi đến', right: 'Công nghệ di động (Mobile)' }
          ],
          hint: '"Chạm vào được" là phần cứng; "hướng dẫn máy tính làm theo" là chương trình (phần mềm).',
          explain: 'Chương trình là hướng dẫn máy tính làm theo; Phần cứng là các bộ phận chạm được; Thiết bị phục vụ 1 mục đích cụ thể; Công nghệ di động đi theo người dùng mọi nơi.'
        }
      ]
    },

    /* ============================================================
       PHẦN 2 — Sử dụng thiết bị di động (mật khẩu: TBDD02)
       ============================================================ */
    {
      id: 's2',
      title: 'Sử dụng thiết bị di động',
      password: PASSWORDS.s2,
      slides: [
        /* Slide 7 (Trang 7 / 27) */
        {
          type: 'info',
          topic: 'Phần 2 · Sử dụng thiết bị di động',
          title: 'Các thao tác cơ bản',
          content: 'Một số thao tác thường dùng trên thiết bị di động:',
          imageUrl: null,
          things: [
            { icon: '👆', name: 'Nhấn vào biểu tượng', en: 'Để mở ứng dụng' },
            { icon: '✋', name: 'Chạm và giữ', en: 'Chạm giữ một ứng dụng để di chuyển nó' },
            { icon: '🤏', name: 'Phóng to / thu nhỏ', en: 'Dùng ngón cái và ngón trỏ để phóng to hay thu nhỏ hình ảnh' },
            { icon: '⌨️', name: 'Bàn phím ảo', en: 'Nhấn trên bàn phím ảo để nhập kí tự và văn bản' }
          ]
        },

        /* Slide 8 (Trang 8 / 27) */
        {
          type: 'quiz_single',
          topic: 'Luyện tập',
          question: 'Em hãy cho biết, chuyện gì sẽ xảy ra nếu như chúng ta sử dụng các thiết bị di động quá lâu?',
          options: ['Sử dụng càng lâu càng tốt cho sức khỏe.', 'Sử dụng lâu ảnh hưởng xấu đến sức khỏe.', 'Sử dụng càng lâu sẽ không có ảnh hưởng gì hết.'],
          correctAnswer: 1,
          hint: 'Dùng thiết bị điện tử quá lâu (mỏi mắt, ít vận động...) có tốt cho sức khỏe không?',
          explain: 'Sử dụng thiết bị di động quá lâu ảnh hưởng xấu đến sức khỏe (mỏi mắt, ít vận động...).'
        },

        /* Slide 9 (Trang 9 / 27) */
        {
          type: 'quiz_single',
          topic: 'Luyện tập',
          question: 'Em hãy cho biết, khi thiết bị di động hết năng lượng và ngừng hoạt động chúng ta cần làm gì?',
          options: [
            'Cần cung cấp năng lượng cho thiết bị bằng cách để cạnh nguồn điện.',
            'Cần cung cấp năng lượng cho thiết bị bằng cách để dưới ánh nắng mặt trời.',
            'Cần cung cấp năng lượng cho thiết bị bằng cách sạc pin cho thiết bị và chú ý an toàn khi sạc.',
            'Cần cung cấp năng lượng cho thiết bị bằng cách tưới nước cho thiết bị.'
          ],
          correctAnswer: 2,
          hint: 'Chỉ có 1 cách đúng và an toàn để "nạp năng lượng" cho thiết bị điện tử.',
          explain: 'Khi hết pin, cần sạc pin cho thiết bị đúng cách và luôn chú ý an toàn khi sạc.'
        }
      ]
    },

    /* ============================================================
       PHẦN 3 — An toàn khi sạc thiết bị di động (mật khẩu: TBDD03)
       ============================================================ */
    {
      id: 's3',
      title: 'An toàn khi sạc thiết bị di động',
      password: PASSWORDS.s3,
      slides: [
        /* Slide 10 (Trang 10 / 27) */
        {
          type: 'info',
          topic: 'Phần 3 · An toàn khi sạc',
          title: 'Lưu ý an toàn khi sạc',
          content: '4 điều cần nhớ khi sạc thiết bị di động:',
          imageUrl: null,
          things: [
            { icon: '🔥', name: 'Dừng sạc nếu Pin quá nóng', en: '' },
            { icon: '🌬️', name: 'Sạc Pin ở nơi thoáng mát', en: '' },
            { icon: '🚫', name: 'Hạn chế vừa sạc vừa sử dụng', en: '' },
            { icon: '🔌', name: 'Dùng Pin và bộ sạc chính hãng', en: '' }
          ]
        },

        /* Slide 11 (Trang 11 / 27) */
        {
          type: 'info',
          topic: 'Phần 3 · An toàn khi sạc',
          title: 'Sạc ở nơi an toàn — Kiểm tra bộ sạc',
          content: 'Đặt điện thoại, máy tính bảng hoặc máy tính xách tay <b>trên bàn</b> khi sạc. Không để thiết bị trên giường, chăn, gối khi sạc để tránh nóng và nguy hiểm.',
          imageUrl: null,
          remember: 'Nếu bộ sạc bị hỏng hoặc không hoạt động, hãy <b>báo cho người lớn</b> để được giúp đỡ. Không tự ý dùng bộ sạc bị đứt, hở dây hoặc có dấu hiệu hỏng.'
        },

        /* Slide 12 (Trang 12 / 27) */
        {
          type: 'quiz_single',
          topic: 'Luyện tập',
          question: 'An cần sạc điện thoại vào ban đêm để có thể sử dụng nó vào sáng hôm sau. Tùy chọn nào là nơi an toàn để An giữ điện thoại của mình trong khi đang sạc?',
          options: ['Dưới gối nằm của An.', 'Trên bàn làm việc của An.', 'Trên kệ trong phòng tắm.', 'Trên sàn nhà.'],
          correctAnswer: 1,
          hint: 'Dưới gối dễ bị nóng/bí; phòng tắm có nước, nguy hiểm với điện; sàn nhà dễ bị giẫm/va vào.',
          explain: 'Trên bàn làm việc là nơi khô ráo, thoáng, an toàn nhất để sạc điện thoại qua đêm.'
        },

        /* Slide 13 (Trang 13 / 27) */
        {
          type: 'quiz_single',
          topic: 'Luyện tập',
          question: 'Em cần sử dụng máy tính bảng (Tablet) của mình trong giờ học để tham gia vào các bài học. Em nhận thấy rằng thời lượng Pin của máy tính bảng đang trở nên yếu. Bộ sạc của em không hoạt động. Em nên làm gì để tiếp tục tham gia trên máy tính bảng của mình?',
          options: [
            'Buộc bộ sạc điện thoại vào máy tính bảng của em ngay cả khi chúng không tương thích.',
            'Bí mật chuyển đổi bộ sạc với bạn bè trong giờ giải lao.',
            'Hãy để máy tính bảng của em tắt nguồn và không tham gia vào bài học.',
            'Hãy cho giáo viên của em biết rằng bộ sạc của em không hoạt động.'
          ],
          correctAnswer: 3,
          hint: 'Dùng bộ sạc không tương thích hoặc lén đổi bộ sạc đều không an toàn — nên nhờ người lớn giúp.',
          explain: 'Khi gặp sự cố với thiết bị/bộ sạc, cách đúng và an toàn nhất là báo cho giáo viên biết để được hỗ trợ.'
        },

        /* Slide 14 (Trang 14 / 27) */
        {
          type: 'info',
          topic: 'Phần 3 · An toàn khi sạc',
          title: 'Nếu ổ cắm đã có người dùng',
          content: 'Hãy <b>di chuyển và tìm ổ cắm khác</b> thay vì rút sạc của người khác. Em có thể hỏi ý kiến người đang sử dụng ổ cắm đó trước khi sử dụng.',
          imageUrl: null
        },

        /* Slide 15 (Trang 15 / 27) */
        {
          type: 'quiz_single',
          topic: 'Luyện tập',
          question: 'Em đang học trực tuyến tại thư viện công cộng. Em cần sạc Pin máy tính xách tay để hoàn thành bài tập của mình. Một bạn khác đang sạc điện thoại di động ở ổ cắm gần nhất. Em nên làm gì để vừa sạc Pin máy tính và vừa tiếp tục học?',
          options: [
            'Rút phích cắm của điện thoại di động để em có thể sử dụng ổ cắm gần đó.',
            'Di chuyển đến khu vực có sẵn một ổ cắm để sạc pin máy tính và tiếp tục buổi học.',
            'Sử dụng dây nối dài kéo dài khắp thư viện để em không phải thay đổi chỗ ngồi.',
            'Học cho đến khi hết pin máy tính xách tay để bạn không làm phiền bất cứ ai.'
          ],
          correctAnswer: 1,
          hint: 'Không được tự ý rút sạc của người khác — hãy tìm ổ cắm còn trống ở chỗ khác.',
          explain: 'Cách đúng là di chuyển đến khu vực khác có sẵn ổ cắm trống để sạc, thay vì rút sạc của người khác.'
        }
      ]
    },

    /* ============================================================
       PHẦN 4 — Học với AI trên thiết bị di động (mật khẩu: TBDD04)
       ============================================================ */
    {
      id: 's4',
      title: 'Học với AI trên thiết bị di động',
      password: PASSWORDS.s4,
      slides: [
        /* Slide 16 (Trang 16 / 27) */
        {
          type: 'info',
          topic: 'Phần 4 · Học với AI',
          title: 'Học với AI trên thiết bị di động',
          content: 'Điện thoại thông minh và máy tính bảng có thể mở ứng dụng học tập, trình duyệt hoặc công cụ AI. AI có thể hỗ trợ em học từ mới, gợi ý ý tưởng, luyện phát âm hoặc tóm tắt đơn giản.',
          imageUrl: null,
          remember: 'Khi ứng dụng AI xin quyền dùng <b>camera, micro, vị trí, ảnh hoặc thông báo</b>, em không tự bấm cho phép nếu chưa có hướng dẫn. Em cần dùng AI <b>đúng mục đích học tập</b>, không dùng AI làm thay bài và không dùng thiết bị quá lâu.'
        },

        /* Slide 17 (Trang 17 / 27) — slide hoàn thành RIÊNG cho bài học
           chính (4 phần lý thuyết + luyện tập), tách biệt với slide hoàn
           thành của phần Ôn tập ở cuối bài. */
        {
          type: 'info',
          final: true,
          scoreSections: [0, 1, 2, 3],
          topic: 'Hoàn thành',
          title: 'Chúc mừng em đã học xong Bài 7!',
          content: 'Em đã biết thiết bị di động là gì, các thao tác sử dụng cơ bản, cách sạc thiết bị an toàn, và cách học với AI trên thiết bị di động một cách an toàn.',
          imageUrl: null,
          remember: 'Muốn ôn lại toàn bộ câu hỏi của bài, bấm "Tiếp theo" để sang phần <b>Ôn tập</b> ngay sau đây.'
        }
      ]
    },

    /* ============================================================
       PHẦN 5 — Ôn tập (mật khẩu: TBDD05)
       ------------------------------------------------------------
       Gom lại TẤT CẢ câu hỏi (bỏ hết slide lý thuyết) từ 4 phần
       trên để học sinh luyện lại. Đáp án làm ở đây độc lập hoàn
       toàn với đáp án đã làm ở phần gốc.
       ============================================================ */
    {
      id: 's5',
      title: 'Ôn tập',
      password: PASSWORDS.s5,
      slides: [
        /* Slide 18 (Trang 18 / 27) */
        {
          type: 'quiz_matching',
          topic: 'Ôn tập',
          question: 'Em hãy ghép nối từng định nghĩa ở cột bên trái sang thuật ngữ tương ứng ở cột bên phải.',
          pairs: [
            { icon: '📜', left: 'Hướng dẫn mà máy tính làm theo', right: 'Chương trình (Program)' },
            { icon: '🔩', left: 'Các bộ phận của máy tính mà em có thể chạm vào', right: 'Phần cứng (Hardware)' },
            { icon: '🔧', left: 'Thiết bị được phát minh cho một mục đích cụ thể', right: 'Thiết bị (Device)' },
            { icon: '🌍', left: 'Công nghệ đi đến nơi người dùng đi đến', right: 'Công nghệ di động (Mobile)' }
          ],
          hint: '"Chạm vào được" là phần cứng; "hướng dẫn máy tính làm theo" là chương trình (phần mềm).',
          explain: 'Chương trình là hướng dẫn máy tính làm theo; Phần cứng là các bộ phận chạm được; Thiết bị phục vụ 1 mục đích cụ thể; Công nghệ di động đi theo người dùng mọi nơi.'
        },

        /* Slide 19 (Trang 19 / 27) */
        {
          type: 'quiz_single',
          topic: 'Ôn tập',
          question: 'Em đang học trực tuyến tại thư viện công cộng. Em cần sạc Pin máy tính xách tay để hoàn thành bài tập của mình. Một bạn khác đang sạc điện thoại di động ở ổ cắm gần nhất. Em nên làm gì để vừa sạc Pin máy tính và vừa tiếp tục học?',
          options: [
            'Rút phích cắm của điện thoại di động để em có thể sử dụng ổ cắm gần đó.',
            'Di chuyển đến khu vực có sẵn một ổ cắm để sạc pin máy tính và tiếp tục buổi học.',
            'Sử dụng dây nối dài kéo dài khắp thư viện để em không phải thay đổi chỗ ngồi.',
            'Học cho đến khi hết pin máy tính xách tay để bạn không làm phiền bất cứ ai.'
          ],
          correctAnswer: 1,
          hint: 'Không được tự ý rút sạc của người khác — hãy tìm ổ cắm còn trống ở chỗ khác.',
          explain: 'Cách đúng là di chuyển đến khu vực khác có sẵn ổ cắm trống để sạc, thay vì rút sạc của người khác.'
        },

        /* Slide 20 (Trang 20 / 27) */
        {
          type: 'quiz_single',
          topic: 'Ôn tập',
          question: 'Em cần sử dụng máy tính bảng (Tablet) của mình trong giờ học để tham gia vào các bài học. Em nhận thấy rằng thời lượng Pin của máy tính bảng đang trở nên yếu. Bộ sạc của em không hoạt động. Em nên làm gì để tiếp tục tham gia trên máy tính bảng của mình?',
          options: [
            'Buộc bộ sạc điện thoại vào máy tính bảng của em ngay cả khi chúng không tương thích.',
            'Bí mật chuyển đổi bộ sạc với bạn bè trong giờ giải lao.',
            'Hãy để máy tính bảng của em tắt nguồn và không tham gia vào bài học.',
            'Hãy cho giáo viên của em biết rằng bộ sạc của em không hoạt động.'
          ],
          correctAnswer: 3,
          hint: 'Dùng bộ sạc không tương thích hoặc lén đổi bộ sạc đều không an toàn — nên nhờ người lớn giúp.',
          explain: 'Khi gặp sự cố với thiết bị/bộ sạc, cách đúng và an toàn nhất là báo cho giáo viên biết để được hỗ trợ.'
        },

        /* Slide 21 (Trang 21 / 27) */
        {
          type: 'quiz_single',
          topic: 'Ôn tập',
          question: 'An cần sạc điện thoại vào ban đêm để có thể sử dụng nó vào sáng hôm sau. Tùy chọn nào là nơi an toàn để An giữ điện thoại của mình trong khi đang sạc?',
          options: ['Dưới gối nằm của An.', 'Trên bàn làm việc của An.', 'Trên kệ trong phòng tắm.', 'Trên sàn nhà.'],
          correctAnswer: 1,
          hint: 'Dưới gối dễ bị nóng/bí; phòng tắm có nước, nguy hiểm với điện; sàn nhà dễ bị giẫm/va vào.',
          explain: 'Trên bàn làm việc là nơi khô ráo, thoáng, an toàn nhất để sạc điện thoại qua đêm.'
        },

        /* Slide 22 (Trang 22 / 27) */
        {
          type: 'quiz_multiple',
          topic: 'Ôn tập',
          question: 'Em hãy cho biết, tùy chọn nào là thiết bị di động? (Chọn 2)',
          options: ['Chuột có dây', 'Điện thoại thông minh (Smartphone)', 'Máy tính bảng (Tablet)', 'Máy tính để bàn'],
          correctAnswers: [1, 2],
          hint: 'Thiết bị di động phải cầm tay và mang theo được mọi nơi — chuột có dây và máy tính để bàn thì không.',
          explain: 'Smartphone và Tablet là thiết bị cầm tay, mang theo được mọi nơi — đúng là thiết bị di động.'
        },

        /* Slide 23 (Trang 23 / 27) */
        {
          type: 'quiz_single',
          topic: 'Ôn tập',
          question: 'Em hãy cho biết, chuyện gì sẽ xảy ra nếu như chúng ta sử dụng các thiết bị di động quá lâu?',
          options: ['Sử dụng càng lâu càng tốt cho sức khỏe.', 'Sử dụng lâu ảnh hưởng xấu đến sức khỏe.', 'Sử dụng càng lâu sẽ không có ảnh hưởng gì hết.'],
          correctAnswer: 1,
          hint: 'Dùng thiết bị điện tử quá lâu (mỏi mắt, ít vận động...) có tốt cho sức khỏe không?',
          explain: 'Sử dụng thiết bị di động quá lâu ảnh hưởng xấu đến sức khỏe.'
        },

        /* Slide 24 (Trang 24 / 27) */
        {
          type: 'quiz_single',
          topic: 'Ôn tập',
          question: 'Em hãy cho biết, loại thiết bị máy tính nào có thể dễ dàng giữ trên bàn tay của em và có thể sử dụng bằng cách chạm vào màn hình bằng ngón tay?',
          options: ['Máy tính xách tay (Laptop Computer)', 'Máy tính để bàn (Desktop Computer)', 'Máy tính bỏ túi (Calculator)', 'Máy tính bảng (Tablet)'],
          correctAnswer: 3,
          hint: 'Cần 1 thiết bị vừa cầm gọn trong tay, vừa dùng ngón tay chạm màn hình để thao tác.',
          explain: 'Máy tính bảng (Tablet) nhỏ gọn, cầm vừa tay và điều khiển hoàn toàn bằng cách chạm ngón tay lên màn hình.'
        },

        /* Slide 25 (Trang 25 / 27) */
        {
          type: 'quiz_single',
          topic: 'Ôn tập',
          question: 'Em hãy cho biết, thiết bị nào là máy tính dễ dàng di chuyển gồm một phần cứng duy nhất có màn hình cảm ứng hoặc đa cảm ứng thay vì sử dụng một bàn phím riêng biệt?',
          options: ['Máy tính xách tay (Laptop)', 'Máy tính bảng (Tablet)', 'Notebook', 'Máy tính để bàn (Desktop Computer)'],
          correctAnswer: 1,
          hint: 'Laptop và Notebook đều có bàn phím RIÊNG gắn liền — thiết bị này thì không.',
          explain: 'Máy tính bảng (Tablet) chỉ gồm 1 khối màn hình cảm ứng duy nhất, không có bàn phím vật lý rời.'
        },

        /* Slide 26 (Trang 26 / 27) */
        {
          type: 'quiz_single',
          topic: 'Ôn tập',
          question: 'Em hãy cho biết, khi thiết bị di động hết năng lượng và ngừng hoạt động chúng ta cần làm gì?',
          options: [
            'Cần cung cấp năng lượng cho thiết bị bằng cách để cạnh nguồn điện.',
            'Cần cung cấp năng lượng cho thiết bị bằng cách để dưới ánh nắng mặt trời.',
            'Cần cung cấp năng lượng cho thiết bị bằng cách sạc pin cho thiết bị và chú ý an toàn khi sạc.',
            'Cần cung cấp năng lượng cho thiết bị bằng cách tưới nước cho thiết bị.'
          ],
          correctAnswer: 2,
          hint: 'Chỉ có 1 cách đúng và an toàn để "nạp năng lượng" cho thiết bị điện tử.',
          explain: 'Khi hết pin, cần sạc pin cho thiết bị đúng cách và luôn chú ý an toàn khi sạc.'
        },

        /* Slide 27 (Trang 27 / 27) — slide hoàn thành RIÊNG của phần Ôn tập.
           resetScope:'section' báo cho app.js biết: nút ở đây chỉ làm lại
           9 câu của phần Ôn tập (giữ nguyên tiến trình 4 phần trước), và
           điểm số hiển thị cũng chỉ tính trong phạm vi phần này. */
        {
          type: 'info',
          final: true,
          resetScope: 'section',
          topic: 'Hoàn thành',
          title: 'Em đã ôn tập xong Bài 7!',
          content: 'Xem lại điểm số bên dưới. Nếu muốn luyện thêm lần nữa, bấm nút "Làm lại phần này" — các đáp án của 4 phần học trước sẽ không bị ảnh hưởng.',
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
   nên khai báo scoreSections:[0,1,2,3] (liệt kê đúng chỉ số các phần
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

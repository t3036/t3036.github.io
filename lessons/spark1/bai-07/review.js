/* ============================================================
   DỮ LIỆU TRANG ÔN TẬP — Bài 7 — Thiết bị di động
   (tách từ phần Ôn tập của bai-07.js; dùng chung engine lesson.js)
   ============================================================ */

const PASSWORDS = {
  s5: '148'    // Phần 5 — Ôn tập
};

const LESSON = {
  id:    'bai7-tbdd-on-tap',
  icon:  '📱',
  title: 'Ôn tập Bài 7 — Thiết bị di động',

  sections: [
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
        /* Slide 17 (Trang 17 / 27) */
        {
          type: 'info',
          topic: 'Ôn tập',
          title: 'ÔN TẬP',
          content: 'Cùng ôn lại những kiến thức đã học trong Bài 7 qua các câu hỏi dưới đây nhé!',
          imageUrl: null
        },

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

        /* Slide 27 — slide hoàn thành */
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

/* ============================================================
   DỮ LIỆU BÀI HỌC — BÀI 9: AN TOÀN VÀ BẢO MẬT
   (IC3 GS6 Spark — Level 1 — Chủ đề: An toàn bảo mật)
   ------------------------------------------------------------
   File này dùng chung engine với các bài khác (lesson.js +
   lesson.css), chỉ khác nội dung. Cấu trúc và các dạng slide y hệt
   quy ước đã dùng ở bai-08.js — xem chú thích mẫu ở cuối file nếu
   cần đối chiếu.

   Nguồn: PPTX gốc K3_B09_AnToanVaBaoMat(1).pptx (31 slide).

   ĐÁP ÁN: lấy trực tiếp từ file PPTX (không tự suy luận):
   - Câu trắc nghiệm: đáp án là ô được animation đổi sang màu xanh.

   Ghi chú:
   - Slide 24 gốc ("Vận dụng") chỉ là slide tiêu đề mở đầu phần
     ôn tập; slide 25–30 gốc là 6 câu hỏi đã học, xáo thứ tự — được
     đưa vào phần Ôn tập.
   - Phần Digital Drama chỉ có slide đọc, không có câu hỏi trong
     file gốc.
   - "AI trong giao tiếp trực tuyến" (Đọc thêm) là slide đọc, không
     chấm điểm.
   - Hình minh họa trong slide gốc được thay bằng biểu tượng emoji
     (imageUrl: null) như các bài khác.
   ============================================================ */

/* ============================================================
   MẬT KHẨU TỪNG PHẦN — sửa ở đây, không cần đi tìm trong từng phần
   ------------------------------------------------------------
   Để trống '' cho phần nào muốn luôn mở sẵn (không cần mật khẩu).
   ============================================================ */
const PASSWORDS = {
  s1: '',  // Phần 1 — Bắt nạt trực tuyến
  s2: '',  // Phần 2 — Digital Drama
  s3: '',  // Phần 3 — Một số mối nguy hiểm khác
  s4: '',  // Phần 4 — Phương tiện truyền thông
  s5: '',  // Phần 5 — AI trong giao tiếp trực tuyến
  s6: ''   // Phần 6 — Ôn tập
};

const LESSON = {
  id:    'l1-bai9-an-toan-bao-mat',
  icon:  '🛡️',
  title: 'Bài 9 — Bắt nạt trực tuyến và ứng xử có trách nhiệm',

  sections: [
    /* ============================================================
       PHẦN 1 — Bắt nạt trực tuyến (mật khẩu: AT01)
       ============================================================ */
    {
      id: 's1',
      title: 'Bắt nạt trực tuyến',
      password: PASSWORDS.s1,
      slides: [
        /* Slide 4 */
        {
          type: 'info',
          topic: 'Phần 1 · Bắt nạt trực tuyến',
          title: 'Bắt nạt trực tuyến',
          content: '<b>Bắt nạt trực tuyến (Cyberbullying)</b> là việc sử dụng công nghệ kĩ thuật số để gây ác ý với người khác.',
          imageUrl: null,
          things: [
            { icon: '💬', name: 'Bình luận tiêu cực', en: 'Đăng bình luận tiêu cực trên bài đăng của ai đó' },
            { icon: '📩', name: 'Tin nhắn ác ý', en: 'Gửi tin nhắn ác ý cho ai đó trên phương tiện truyền thông xã hội' }
          ],
          remember: 'Một số ví dụ về bắt nạt trực tuyến: đăng bình luận tiêu cực trên bài đăng của ai đó; gửi tin nhắn ác ý cho ai đó trên phương tiện truyền thông xã hội.'
        },

        /* Slide 5 */
        {
          type: 'quiz_single',
          topic: 'Vận dụng',
          question: 'Em hãy cho biết, bắt nạt trực tuyến (Cyberbullying) là gì?',
          options: [
            'Sử dụng công nghệ để quấy rối, đe dọa hoặc khiến người khác xấu hổ.',
            'Gửi tin nhắn cho những người bạn vừa gặp.',
            'Cung cấp thông tin cá nhân của bạn cho một người lạ trực tuyến.'
          ],
          correctAnswer: 0,
          hint: 'Bắt nạt trực tuyến là dùng công nghệ để GÂY ÁC Ý với người khác.',
          explain: 'Bắt nạt trực tuyến là sử dụng công nghệ để quấy rối, đe dọa hoặc khiến người khác xấu hổ. Gửi tin nhắn cho bạn mới quen không phải là bắt nạt, còn cung cấp thông tin cá nhân cho người lạ là hành động thiếu an toàn.'
        },

        /* Slide 6 */
        {
          type: 'quiz_single',
          topic: 'Vận dụng',
          question: 'Em hãy cho biết, việc ai đó sử dụng công nghệ để gây ác ý với người khác được gọi là gì?',
          options: [
            'Là một người ngoài cuộc',
            'Bắt nạt trực tuyến (Cyberbullying)',
            'Là một người bênh vực',
            'Trêu đùa (Trolling)'
          ],
          correctAnswer: 1,
          hint: 'Dùng công nghệ để gây ác ý với người khác có một tên gọi riêng — hãy nhớ lại định nghĩa vừa học.',
          explain: 'Dùng công nghệ để gây ác ý với người khác được gọi là bắt nạt trực tuyến (Cyberbullying). Người ngoài cuộc và người bênh vực là những vai trò khi chứng kiến việc bắt nạt, không phải tên của hành vi này.'
        },

        /* Slide 7 */
        {
          type: 'quiz_single',
          topic: 'Vận dụng',
          question: 'Một người lạ đã đăng bình luận tiêu cực trên mạng xã hội về bạn An. Bạn ấy đã xóa bình luận nhưng người đó lại tiếp tục viết những bình luận ác ý hơn. Em hãy cho biết hành động của người lạ đó được gọi là gì?',
          options: [
            'Một kẻ lừa đảo (Scammer)',
            'Một Hacker (Hacker)',
            'Bắt nạt trực tuyến (Cyberbully)',
            'Một người mạo danh - lừa đảo (Catfishing)'
          ],
          correctAnswer: 2,
          hint: 'Người này liên tục viết bình luận ác ý để làm tổn thương bạn An — không hề đánh cắp thông tin hay giả mạo ai.',
          explain: 'Liên tục đăng bình luận ác ý về người khác là hành vi bắt nạt trực tuyến. Kẻ lừa đảo, hacker hay người mạo danh đều nhằm đánh cắp thông tin hoặc tiền, không phải để làm tổn thương người khác bằng lời lẽ.'
        },

        /* Slide 8 */
        {
          type: 'quiz_single',
          topic: 'Vận dụng',
          question: 'Trong các tùy chọn sau, tùy chọn nào là ví dụ về bắt nạt trực tuyến?',
          options: [
            'Đăng tin nhắn ác ý về ai đó trên phương tiện truyền thông xã hội',
            'Thích một bài đăng phương tiện truyền thông xã hội của một người bạn trực tuyến',
            'Bị bỏ rơi khỏi cuộc trò chuyện vào bữa trưa',
            'Tạo niềm vui cho một người bạn cùng lớp vào giờ ra chơi'
          ],
          correctAnswer: 0,
          hint: 'Bắt nạt trực tuyến phải có hai yếu tố: dùng công nghệ và có ý xấu với người khác.',
          explain: 'Đăng tin nhắn ác ý về ai đó trên mạng xã hội là ví dụ về bắt nạt trực tuyến. Thích bài đăng và làm bạn vui là hành động tích cực; bị bỏ rơi trong cuộc trò chuyện bữa trưa không dùng công nghệ để gây ác ý.'
        }
      ]
    },

    /* ============================================================
       PHẦN 2 — Digital Drama (mật khẩu: AT02)
       ============================================================ */
    {
      id: 's2',
      title: 'Digital Drama',
      password: PASSWORDS.s2,
      slides: [
        /* Slide 10 */
        {
          type: 'info',
          topic: 'Phần 2 · Digital Drama',
          title: 'Digital Drama',
          content: '<b>Digital Drama</b> là những xung đột và tranh cãi hàng ngày xảy ra giữa bạn bè hoặc người quen thông qua trực tuyến hoặc qua tin nhắn.',
          imageUrl: null,
          things: [
            { icon: '😢', name: 'Tin nhắn gây tổn thương', en: '' },
            { icon: '😠', name: 'Tin ác ý', en: '' },
            { icon: '🗣️', name: 'Tin đồn', en: '' },
            { icon: '🖼️', name: 'Hình ảnh thêu dệt', en: '' }
          ],
          remember: 'Digital Drama thường xảy ra giữa bạn bè hoặc người quen với nhau, qua mạng hoặc qua tin nhắn.'
        }
      ]
    },

    /* ============================================================
       PHẦN 3 — Một số mối nguy hiểm khác (mật khẩu: AT03)
       ============================================================ */
    {
      id: 's3',
      title: 'Một số mối nguy hiểm khác',
      password: PASSWORDS.s3,
      slides: [
        /* Slide 12 */
        {
          type: 'info',
          topic: 'Phần 3 · Một số mối nguy hiểm khác',
          title: 'Một số mối nguy hiểm khác',
          content: 'Trên môi trường trực tuyến, em cần biết một số mối nguy hiểm sau:',
          imageUrl: null,
          things: [
            { icon: '🎭', name: 'Scammer', en: 'Là kẻ lừa đảo.' },
            { icon: '🐱', name: 'Catfishing', en: 'Là hành vi lừa đảo bằng cách giả mạo người khác để đánh cắp thông tin cá nhân hoặc tiền trên trực tuyến.' },
            { icon: '💻', name: 'Hacker', en: 'Là người sử dụng kĩ năng máy tính để xâm nhập vào hệ thống để sửa đổi hoặc đánh cắp thông tin.' }
          ]
        },

        /* Slide 13 */
        {
          type: 'quiz_single',
          topic: 'Vận dụng',
          question: 'Em nhận được một Email từ cửa hàng yêu thích của mình nói rằng em đã giành được 1000 Đô la. Em có thể nhập thông tin của mình vào biểu mẫu trực tuyến để nhận tiền. Điều gì sẽ khiến em quan tâm về Email này?',
          options: [
            'Cửa hàng có thể đã nhầm lẫn vì em không nhớ đã tham gia cuộc thi.',
            'Tiền ở dạng thẻ quà tặng chỉ có thể được sử dụng tại một địa điểm.',
            'Cửa hàng có thể muốn bạn tham gia vào một chiến dịch quảng cáo.',
            'Email có thể là từ một kẻ lừa đảo đang cố gắng thu thập thông tin cá nhân của em.'
          ],
          correctAnswer: 3,
          hint: 'Email yêu cầu em nhập thông tin cá nhân để nhận tiền — hãy nghĩ đến mối nguy hiểm khi có người muốn lấy thông tin của em.',
          explain: 'Email báo trúng thưởng và yêu cầu nhập thông tin cá nhân rất có thể là của kẻ lừa đảo (Scammer) đang cố thu thập thông tin của em. Em không nên nhập thông tin vào biểu mẫu mà hãy báo cho người lớn.'
        }
      ]
    },

    /* ============================================================
       PHẦN 4 — Phương tiện truyền thông (mật khẩu: AT04)
       ============================================================ */
    {
      id: 's4',
      title: 'Phương tiện truyền thông',
      password: PASSWORDS.s4,
      slides: [
        /* Slide 15 */
        {
          type: 'info',
          topic: 'Phần 4 · Phương tiện truyền thông',
          title: 'Phương tiện truyền thông',
          content: '<b>Phương tiện truyền thông (Media)</b> là công cụ, cách thức truyền tải thông tin cụ thể đến với mọi người.',
          imageUrl: null,
          things: [
            { icon: '📺', name: 'Tivi', en: '' },
            { icon: '📱', name: 'Điện thoại thông minh', en: '' },
            { icon: '📰', name: 'Báo chí', en: '' }
          ]
        },

        /* Slide 16 */
        {
          type: 'info',
          topic: 'Phần 4 · Phương tiện truyền thông',
          title: 'Em cân bằng phương tiện truyền thông như thế nào?',
          content: 'Em cần <b>cân bằng</b> khi sử dụng phương tiện truyền thông:',
          imageUrl: null,
          things: [
            { icon: '🌱', name: 'Lành mạnh, chất lượng', en: 'Sử dụng các phương tiện truyền thông một cách lành mạnh, chất lượng giúp em phát triển toàn diện.' },
            { icon: '⏱️', name: 'Thời gian vừa phải', en: 'Cân bằng với các sinh hoạt hằng ngày cùng bạn bè, gia đình, …' }
          ]
        },

        /* Slide 17 */
        {
          type: 'quiz_single',
          topic: 'Vận dụng',
          question: 'Em hãy cho biết, cân bằng phương tiện (Media Balance) là gì?',
          options: [
            'Dành tất cả thời gian rảnh trên điện thoại thông minh của bạn.',
            'Sử dụng phương tiện để cảm thấy khỏe mạnh và cân bằng với các hoạt động sống khác.',
            'Bản trình chiếu sử dụng kết hợp hình ảnh, văn bản và âm thanh'
          ],
          correctAnswer: 1,
          hint: '"Cân bằng" nghĩa là không dành quá nhiều thời gian cho một việc mà bỏ qua các hoạt động khác.',
          explain: 'Cân bằng phương tiện là sử dụng phương tiện truyền thông sao cho em khỏe mạnh và vẫn có thời gian cho các hoạt động sống khác. Dành toàn bộ thời gian rảnh cho điện thoại là không cân bằng; bản trình chiếu kết hợp hình ảnh, văn bản, âm thanh là khái niệm đa phương tiện.'
        }
      ]
    },

    /* ============================================================
       PHẦN 5 — AI trong giao tiếp trực tuyến (Đọc thêm) (mật khẩu: AT05)
       ============================================================ */
    {
      id: 's5',
      title: 'AI trong giao tiếp trực tuyến',
      password: PASSWORDS.s5,
      slides: [
        /* Slide 19 */
        {
          type: 'info',
          topic: 'Đọc thêm · AI trong giao tiếp trực tuyến',
          title: 'AI có thể giúp em tạo nội dung',
          content: 'AI có thể giúp tạo câu văn, bình luận, tin nhắn, tiêu đề hoặc hình ảnh. Em hãy <b>mô tả rõ ràng</b> điều em cần, AI sẽ gợi ý nhanh và hiệu quả hơn. Sau đó, em nên <b>chỉnh sửa</b> để nội dung phù hợp và thể hiện đúng ý của mình.',
          imageUrl: null,
          things: [
            { icon: '💌', name: 'Tin nhắn', en: 'Cảm ơn bạn rất nhiều!' },
            { icon: '✏️', name: 'Câu văn', en: 'Bạn học rất chăm chỉ.' },
            { icon: '💬', name: 'Bình luận', en: 'Bài viết của bạn thật hay!' },
            { icon: '🏷️', name: 'Tiêu đề', en: 'Ngày hội sáng tạo của lớp' }
          ]
        },

        /* Slide 20 */
        {
          type: 'info',
          topic: 'Đọc thêm · AI trong giao tiếp trực tuyến',
          title: 'Dùng AI để giao tiếp lịch sự',
          content: 'Nếu dùng đúng cách, AI có thể hỗ trợ em viết lời nhắc, nhắc lịch sự hoặc góp ý tích cực. AI luôn sẵn sàng lắng nghe và đưa ra gợi ý hữu ích để em giao tiếp tốt hơn mỗi ngày.',
          imageUrl: null,
          things: [
            { icon: '🙂', name: 'Nhắc nhở nhẹ nhàng', en: '"Bạn ơi, mình nghĩ chúng ta nên nói chuyện nhẹ nhàng hơn nhé! 🙂"' },
            { icon: '👍', name: 'Góp ý tích cực', en: '"Mình rất thích ý tưởng của bạn, có thể chia sẻ thêm được không? 👍"' }
          ]
        },

        /* Slide 21 */
        {
          type: 'info',
          topic: 'Đọc thêm · AI trong giao tiếp trực tuyến',
          title: 'Không dùng AI để làm tổn thương người khác',
          content: 'Em <b>không</b> dùng AI để viết lời trêu chọc, chế giễu, xúc phạm, bịa chuyện hoặc tạo nội dung làm người khác xấu hổ. Hãy luôn tôn trọng người khác và chịu trách nhiệm với nội dung mình làm ra khi có AI hỗ trợ.',
          imageUrl: null,
          things: [
            { icon: '😡', name: 'Trêu chọc / Xúc phạm', en: '"Bạn thật dở tệ!"' },
            { icon: '🤣', name: 'Chế giễu', en: '"Haha, nhìn bạn buồn cười quá đi!"' },
            { icon: '🤥', name: 'Bịa chuyện', en: '"Mình sẽ bịa chuyện về bạn nhé!"' }
          ]
        },

        /* Slide 22 */
        {
          type: 'info',
          topic: 'Đọc thêm · AI trong giao tiếp trực tuyến',
          title: 'Tự hỏi trước khi đăng hoặc chia sẻ',
          content: 'Trước khi đăng, gửi hoặc chia sẻ nội dung có AI hỗ trợ, em cần tự hỏi:',
          imageUrl: null,
          things: [
            { icon: '✅', name: 'Nội dung này có đúng không?', en: '' },
            { icon: '😢', name: 'Nội dung này có làm ai buồn không?', en: '' },
            { icon: '🔒', name: 'Nội dung này có tiết lộ thông tin riêng tư không?', en: '' },
            { icon: '🙋', name: 'Em có sẵn sàng chịu trách nhiệm không?', en: '' }
          ]
        },

        /* Slide 23 — slide hoàn thành RIÊNG cho bài học chính (scoreSections) */
        {
          type: 'info',
          final: true,
          scoreSections: [0, 1, 2, 3, 4],
          topic: 'Hoàn thành',
          title: 'Chúc mừng em đã học xong Bài 9!',
          content: 'Em đã biết bắt nạt trực tuyến, Digital Drama, một số mối nguy hiểm trên mạng (Scammer, Catfishing, Hacker), cách cân bằng phương tiện truyền thông và cách dùng AI để giao tiếp tôn trọng, có trách nhiệm.',
          imageUrl: null,
          remember: 'Không dùng AI để tạo nội dung xúc phạm, trêu chọc hoặc bắt nạt. Người dùng chịu trách nhiệm với nội dung mình gửi, kể cả khi nội dung đó có AI hỗ trợ. Bấm "Tiếp theo" để sang phần <b>Ôn tập</b>.'
        }
      ]
    },

    /* ============================================================
       PHẦN 6 — Ôn tập (mật khẩu: AT06)
       ============================================================ */
    {
      id: 's6',
      title: 'Ôn tập',
      password: PASSWORDS.s6,
      slides: [
        /* Slide 25 */
        {
          type: 'quiz_single',
          topic: 'Ôn tập',
          question: 'Trong các tùy chọn sau, tùy chọn nào là ví dụ về bắt nạt trực tuyến?',
          options: [
            'Đăng tin nhắn ác ý về ai đó trên phương tiện truyền thông xã hội',
            'Thích một bài đăng phương tiện truyền thông xã hội của một người bạn trực tuyến',
            'Bị bỏ rơi khỏi cuộc trò chuyện vào bữa trưa',
            'Tạo niềm vui cho một người bạn cùng lớp vào giờ ra chơi'
          ],
          correctAnswer: 0,
          hint: 'Bắt nạt trực tuyến phải có hai yếu tố: dùng công nghệ và có ý xấu với người khác.',
          explain: 'Đăng tin nhắn ác ý về ai đó trên mạng xã hội là ví dụ về bắt nạt trực tuyến. Thích bài đăng và làm bạn vui là hành động tích cực; bị bỏ rơi trong cuộc trò chuyện bữa trưa không dùng công nghệ để gây ác ý.'
        },

        /* Slide 26 */
        {
          type: 'quiz_single',
          topic: 'Ôn tập',
          question: 'Một người lạ đã đăng bình luận tiêu cực trên mạng xã hội về bạn An. Bạn ấy đã xóa bình luận nhưng người đó lại tiếp tục viết những bình luận ác ý hơn. Em hãy cho biết hành động của người lạ đó được gọi là gì?',
          options: [
            'Một kẻ lừa đảo (Scammer)',
            'Một Hacker (Hacker)',
            'Bắt nạt trực tuyến (Cyberbully)',
            'Một người mạo danh - lừa đảo (Catfishing)'
          ],
          correctAnswer: 2,
          hint: 'Người này liên tục viết bình luận ác ý để làm tổn thương bạn An — không hề đánh cắp thông tin hay giả mạo ai.',
          explain: 'Liên tục đăng bình luận ác ý về người khác là hành vi bắt nạt trực tuyến. Kẻ lừa đảo, hacker hay người mạo danh đều nhằm đánh cắp thông tin hoặc tiền, không phải để làm tổn thương người khác bằng lời lẽ.'
        },

        /* Slide 27 */
        {
          type: 'quiz_single',
          topic: 'Ôn tập',
          question: 'Em hãy cho biết, việc ai đó sử dụng công nghệ để gây ác ý với người khác được gọi là gì?',
          options: [
            'Là một người ngoài cuộc',
            'Bắt nạt trực tuyến (Cyberbullying)',
            'Là một người bênh vực',
            'Trêu đùa (Trolling)'
          ],
          correctAnswer: 1,
          hint: 'Dùng công nghệ để gây ác ý với người khác có một tên gọi riêng — hãy nhớ lại định nghĩa vừa học.',
          explain: 'Dùng công nghệ để gây ác ý với người khác được gọi là bắt nạt trực tuyến (Cyberbullying). Người ngoài cuộc và người bênh vực là những vai trò khi chứng kiến việc bắt nạt, không phải tên của hành vi này.'
        },

        /* Slide 28 */
        {
          type: 'quiz_single',
          topic: 'Ôn tập',
          question: 'Em nhận được một Email từ cửa hàng yêu thích của mình nói rằng em đã giành được 1000 Đô la. Em có thể nhập thông tin của mình vào biểu mẫu trực tuyến để nhận tiền. Điều gì sẽ khiến em quan tâm về Email này?',
          options: [
            'Cửa hàng có thể đã nhầm lẫn vì em không nhớ đã tham gia cuộc thi.',
            'Tiền ở dạng thẻ quà tặng chỉ có thể được sử dụng tại một địa điểm.',
            'Cửa hàng có thể muốn bạn tham gia vào một chiến dịch quảng cáo.',
            'Email có thể là từ một kẻ lừa đảo đang cố gắng thu thập thông tin cá nhân của em.'
          ],
          correctAnswer: 3,
          hint: 'Email yêu cầu em nhập thông tin cá nhân để nhận tiền — hãy nghĩ đến mối nguy hiểm khi có người muốn lấy thông tin của em.',
          explain: 'Email báo trúng thưởng và yêu cầu nhập thông tin cá nhân rất có thể là của kẻ lừa đảo (Scammer) đang cố thu thập thông tin của em. Em không nên nhập thông tin vào biểu mẫu mà hãy báo cho người lớn.'
        },

        /* Slide 29 */
        {
          type: 'quiz_single',
          topic: 'Ôn tập',
          question: 'Em hãy cho biết, cân bằng phương tiện (Media Balance) là gì?',
          options: [
            'Dành tất cả thời gian rảnh trên điện thoại thông minh của bạn.',
            'Sử dụng phương tiện để cảm thấy khỏe mạnh và cân bằng với các hoạt động sống khác.',
            'Bản trình chiếu sử dụng kết hợp hình ảnh, văn bản và âm thanh'
          ],
          correctAnswer: 1,
          hint: '"Cân bằng" nghĩa là không dành quá nhiều thời gian cho một việc mà bỏ qua các hoạt động khác.',
          explain: 'Cân bằng phương tiện là sử dụng phương tiện truyền thông sao cho em khỏe mạnh và vẫn có thời gian cho các hoạt động sống khác. Dành toàn bộ thời gian rảnh cho điện thoại là không cân bằng; bản trình chiếu kết hợp hình ảnh, văn bản, âm thanh là khái niệm đa phương tiện.'
        },

        /* Slide 30 */
        {
          type: 'quiz_single',
          topic: 'Ôn tập',
          question: 'Em hãy cho biết, bắt nạt trực tuyến (Cyberbullying) là gì?',
          options: [
            'Sử dụng công nghệ để quấy rối, đe dọa hoặc khiến người khác xấu hổ.',
            'Gửi tin nhắn cho những người bạn vừa gặp.',
            'Cung cấp thông tin cá nhân của bạn cho một người lạ trực tuyến.'
          ],
          correctAnswer: 0,
          hint: 'Bắt nạt trực tuyến là dùng công nghệ để GÂY ÁC Ý với người khác.',
          explain: 'Bắt nạt trực tuyến là sử dụng công nghệ để quấy rối, đe dọa hoặc khiến người khác xấu hổ. Gửi tin nhắn cho bạn mới quen không phải là bắt nạt, còn cung cấp thông tin cá nhân cho người lạ là hành động thiếu an toàn.'
        },

        /* Slide hoàn thành RIÊNG của phần Ôn tập (resetScope:'section') */
        {
          type: 'info',
          final: true,
          resetScope: 'section',
          topic: 'Hoàn thành',
          title: 'Em đã ôn tập xong Bài 9!',
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

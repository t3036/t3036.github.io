/* ============================================================
   DỮ LIỆU TRANG ÔN TẬP — BÀI 9: BẮT NẠT TRỰC TUYẾN VÀ ỨNG XỬ CÓ TRÁCH NHIỆM
   (tách từ phần Ôn tập của bai-09.js; dùng chung engine lesson.js)
   ============================================================ */

const PASSWORDS = {
  s1: ''   // Ôn tập
};

const LESSON = {
  id:    'l1-bai9-an-toan-bao-mat-on-tap',
  icon:  '🛡️',
  title: 'Ôn tập Bài 9 — Bắt nạt trực tuyến và ứng xử có trách nhiệm',

  sections: [
    /* ============================================================
       Ôn tập
       ============================================================ */
    {
      id: 's1',
      title: 'Ôn tập',
      password: PASSWORDS.s1,
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

        /* Slide 40 */
        {
          type: 'quiz_single',
          topic: 'Ôn tập',
          question: 'Em hãy cho biết, bắt nạt trực tuyến có tên tiếng Anh là gì?',
          options: [
            'Drama',
            'Digital Drama',
            'Cyberbullying',
            'Media'
          ],
          correctAnswer: 2,
          hint: 'Hãy nhớ lại tên tiếng Anh trong định nghĩa vừa học.',
          explain: 'Bắt nạt trực tuyến có tên tiếng Anh là Cyberbullying. Digital Drama là xung đột giữa bạn bè qua mạng, còn Media là phương tiện truyền thông.'
        },

        /* Slide 39 */
        {
          type: 'quiz_single',
          topic: 'Ôn tập',
          question: 'Bạn của em gửi một tin nhắn có nội dung xúc phạm cho người khác. Em hãy cho biết, việc làm này có ĐÚNG hay KHÔNG?',
          options: [
            'Đúng, chỉ là một tin nhắn trêu chọc',
            'Không đúng, vì bạn của em không thể đọc được tin nhắn',
            'Không đúng, vì đó là bắt nạt trực tuyến',
            'Đúng, chỉ là một tin nhắn rác'
          ],
          correctAnswer: 2,
          hint: 'Tin nhắn xúc phạm là dùng công nghệ để gây ác ý với người khác.',
          explain: 'Gửi tin nhắn xúc phạm cho người khác là bắt nạt trực tuyến nên việc làm này không đúng. Đó không phải là trêu chọc vô hại hay tin nhắn rác.'
        },

        /* Slide 38 */
        {
          type: 'quiz_single',
          topic: 'Ôn tập',
          question: 'Em hãy cho biết, khi em nhận được tin nhắn đe dọa từ một người khác, em nên làm gì?',
          options: [
            'Giữ im lặng',
            'Nói với người em tin tưởng như ba mẹ, thầy cô',
            'Hẹn gặp người lạ để nói rõ vấn đề'
          ],
          correctAnswer: 1,
          hint: 'Hãy tìm sự giúp đỡ từ người lớn đáng tin cậy.',
          explain: 'Khi bị đe dọa, em nên nói với người em tin tưởng như ba mẹ, thầy cô. Giữ im lặng không giải quyết được vấn đề, còn hẹn gặp người lạ rất nguy hiểm.'
        },

        /* Slide 36 */
        {
          type: 'quiz_single',
          topic: 'Ôn tập',
          question: 'Em hãy cho biết, tùy chọn nào sau đây là đúng khi nói về bắt nạt trực tuyến (Cyberbullying)?',
          options: [
            'Chỉ xảy ra trong giờ học tại trường',
            'Loại bỏ hình ảnh hoặc tin nhắn quấy rối là rất khó khăn khi chúng đã được đăng trực tuyến',
            'Rất khó đe dọa một người ẩn danh trực tuyến',
            'Không gây hại như In-person bullying'
          ],
          correctAnswer: 1,
          hint: 'Nội dung đã đăng trực tuyến có thể được sao chép và chia sẻ rất nhanh.',
          explain: 'Hình ảnh hoặc tin nhắn quấy rối khi đã đăng trực tuyến rất khó loại bỏ. Bắt nạt trực tuyến có thể xảy ra mọi lúc, người ẩn danh vẫn có thể đe dọa người khác và gây hại không kém bắt nạt trực tiếp.'
        },

        /* Slide 37 */
        {
          type: 'quiz_single',
          topic: 'Ôn tập',
          question: 'Em hãy cho biết, nếu em làm việc với máy tính trong một thời gian dài thì em nên làm gì?',
          options: [
            'Nghỉ 5 phút sau mỗi 60 phút làm việc',
            'Có nước ngọt và đồ ăn nhẹ trong tầm với',
            'Tắt hết đèn trong phòng',
            'Sử dụng tai nghe'
          ],
          correctAnswer: 0,
          hint: 'Làm việc lâu cần cho mắt và cơ thể được nghỉ ngơi.',
          explain: 'Em nên nghỉ ngắn sau mỗi khoảng thời gian làm việc với máy tính để bảo vệ mắt và sức khỏe. Đồ ăn, nước ngọt gần máy dễ làm hỏng máy; tắt đèn hay dùng tai nghe không giúp cơ thể nghỉ ngơi.'
        },

        /* Slide hoàn thành */
        {
          type: 'info',
          final: true,
          topic: 'Hoàn thành',
          title: 'Em đã ôn tập xong Bài 9!',
          content: 'Xem lại điểm số bên dưới. Nếu muốn luyện thêm lần nữa, bấm nút làm lại.',
          imageUrl: null
        }
      ]
    }
  ]
};

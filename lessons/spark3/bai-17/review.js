/* ============================================================
   DỮ LIỆU TRANG ÔN TẬP — Bài 17 — Tin tặc
   (dùng chung engine lesson.js)
   ============================================================ */

const LESSON = {
  id:    'bai17-tin-tac-on-tap',
  icon:  '🕵️',
  title: 'Ôn tập Bài 17 — Tin tặc',

  sections: [
    {
      id: 's4',
      title: 'Ôn tập',
      slides: [
        {
          type: 'quiz_matching',
          topic: 'Ôn tập',
          question: 'Em hãy ghép nối từng thuật ngữ ở cột bên phải sang ví dụ tương ứng ở cột bên trái.',
          pairs: [
            { icon: '🔒', left: 'Tấn công một hệ thống mạng để chặn không cho người dùng truy cập các tập tin của họ', right: 'Tin tặc vô đạo đức (Unethical Hacker)' },
            { icon: '✊', left: 'Tấn công một công ty để lôi kéo sự chú ý về một vấn đề nào đó, ví dụ như trả lương không công bằng cho nhân viên', right: 'Tin tặc kiêm nhà hoạt động (Hacktivist)' },
            { icon: '🛡️', left: 'Kiểm tra hệ thống mạng của một công ty để xem có dễ để tìm mật khẩu hay không, rồi cho công ty đó biết cách khắc phục', right: 'Tin tặc có đạo đức (Ethical Hacker)' }
          ],
          hint: 'Chặn người dùng = vô đạo đức; gây chú ý về vấn đề xã hội = nhà hoạt động; báo cách khắc phục = có đạo đức.',
          explain: 'Chặn truy cập là tin tặc vô đạo đức. Gây chú ý về vấn đề xã hội là Hacktivist. Kiểm tra rồi báo cách khắc phục là tin tặc có đạo đức.'
        },
        {
          type: 'quiz_multiple',
          topic: 'Ôn tập',
          question: 'Em hãy cho biết, hai loại tin tặc nào dù không có mục đích xấu, nhưng cũng không được tự ý xâm nhập vào hệ thống? (Chọn 2)',
          options: ['Tin tặc mũ trắng', 'Tin tặc mũ đen', 'Tin tặc mũ xám', 'Tin tặc kiêm nhà hoạt động (Hacktivist)'],
          correctAnswers: [2, 3],
          hint: 'Mũ đen có mục đích xấu; mũ trắng được phép xâm nhập hợp pháp.',
          explain: 'Tin tặc mũ xám và Hacktivist không hẳn có mục đích xấu nhưng vẫn không có quyền tự ý xâm nhập vào hệ thống.'
        },
        {
          type: 'quiz_single',
          topic: 'Ôn tập',
          question: 'Em hãy điền vào chỗ trống để hoàn thành phát biểu sau: “………………….. hoạt động để xác định lỗ hổng bảo mật và đưa ra đề xuất để cải thiện.”',
          options: ['Tin tặc vô đạo đức', 'Tin tặc có đạo đức'],
          correctAnswer: 1,
          hint: 'Ai tìm lỗ hổng rồi đề xuất cải thiện?',
          explain: 'Tin tặc có đạo đức hoạt động để xác định lỗ hổng bảo mật và đưa ra đề xuất để cải thiện.'
        },
        {
          type: 'quiz_matching',
          topic: 'Ôn tập',
          question: 'Em hãy di chuyển từng thuật ngữ từ danh sách ở bên phải sang phát biểu tương ứng ở bên trái.',
          pairs: [
            { icon: '🔓', left: 'Hành động truy cập trái phép vào thông tin kĩ thuật số', right: 'Hacking' },
            { icon: '🖤', left: 'Người sử dụng các kĩ năng Hack một cách bất hợp pháp và có mục đích xấu', right: 'Hacker (Tin tặc mũ đen)' },
            { icon: '🩶', left: 'Ai đó sử dụng các kĩ năng Hack để xác định các lỗ hổng bảo mật mà không có sự cho phép của chủ sở hữu, sau đó chia sẻ phát hiện của họ - thường phải trả phí', right: 'Gray Hat Hacker (Tin tặc mũ xám)' },
            { icon: '🤍', left: 'Người sử dụng các kĩ năng Hack hợp pháp để xác định các lỗ hổng bảo mật trong công nghệ', right: 'White Hat Hacker (Tin tặc mũ trắng)' }
          ],
          hint: 'Hợp pháp = mũ trắng; bất hợp pháp, mục đích xấu = mũ đen; không được phép nhưng chia sẻ phát hiện = mũ xám.',
          explain: 'Hacking là truy cập trái phép. Mũ đen: bất hợp pháp, mục đích xấu. Mũ xám: tìm lỗ hổng khi chưa được phép rồi chia sẻ. Mũ trắng: hợp pháp.'
        },
        {
          type: 'quiz_single',
          topic: 'Ôn tập',
          question: 'Em hãy cho biết, Hacker mũ trắng là gì?',
          options: ['Ai đó đội mũ trắng để che giấu danh tính', 'Một người sử dụng các kĩ năng và kiến thức máy tính cho mục đích tốt', 'Người mặc đồ trắng khi sử dụng máy tính', 'Ai đó nhắm vào những người xấu trực tuyến'],
          correctAnswer: 1,
          hint: '"Mũ trắng" chỉ mục đích tốt, không phải trang phục.',
          explain: 'Hacker mũ trắng là người sử dụng kĩ năng và kiến thức máy tính cho mục đích tốt.'
        },
        {
          type: 'quiz_single',
          topic: 'Ôn tập',
          question: 'Em hãy cho biết, tùy chọn nào sau đây là đúng nhất về tin tặc (Hacker)?',
          options: ['Tin tặc (Hacker) là người sử dụng kiến thức và kĩ năng về công nghệ máy tính và Internet để xâm nhập trái phép vào hệ thống máy tính.', 'Tin tặc (Hacker) là người sử dụng kiến thức và kĩ năng về công nghệ máy tính và Internet để bán hàng trực tuyến.', 'Tin tặc (Hacker) là người sử dụng kiến thức và kĩ năng về công nghệ máy tính và Internet để truyền thông và Marketing.', 'Tin tặc (Hacker) là người sử dụng kiến thức và kĩ năng về công nghệ máy tính và Internet để tạo các Website giả mạo.'],
          correctAnswer: 0,
          hint: 'Từ khóa: "xâm nhập trái phép".',
          explain: 'Tin tặc là người dùng kiến thức và kĩ năng về công nghệ máy tính và Internet để xâm nhập trái phép vào hệ thống máy tính.'
        },
        {
          type: 'quiz_single',
          topic: 'Ôn tập',
          question: 'Em hãy cho biết, loại tin tặc nào sau đây sử dụng các kĩ năng Hack vì mục đích, động cơ chính trị hoặc xã hội?',
          options: ['Tin tặc kiêm nhà hoạt động (Hacktivist)', 'Tin tặc mũ đen (Black Hat Hacker)', 'Tin tặc mũ nâu (Brown Hat Hacker)', 'Tin tặc mũ trắng (White Hat Hacker)'],
          correctAnswer: 0,
          hint: 'Động cơ chính trị hoặc xã hội = nhà hoạt động.',
          explain: 'Hacktivist là tin tặc kiêm nhà hoạt động, dùng kĩ năng Hack vì mục đích, động cơ chính trị hoặc xã hội.'
        },
        {
          type: 'info',
          final: true,
          topic: 'Hoàn thành',
          title: 'Em đã ôn tập xong Bài 17!',
          content: 'Xem lại điểm số bên dưới. Nếu muốn luyện thêm, bấm nút làm lại.',
          imageUrl: null
        }
      ]
    }
  ]
};

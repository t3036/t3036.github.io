/* ============================================================
   DỮ LIỆU TRANG ÔN TẬP — Bài 16 — Đạo đức và hợp pháp
   (dùng chung engine lesson.js)
   ============================================================ */

const LESSON = {
  id:    'bai16-dao-duc-hop-phap-on-tap',
  icon:  '⚖️',
  title: 'Ôn tập Bài 16 — Đạo đức và hợp pháp',

  sections: [
    {
      id: 's4',
      title: 'Ôn tập',
      slides: [
        {
          type: 'quiz_matching',
          topic: 'Ôn tập',
          question: 'Em hãy di chuyển từng thuật ngữ từ danh sách ở bên phải sang phát biểu tương ứng ở bên trái.',
          pairs: [
            { icon: '🤝', left: 'Hành động có trách nhiệm, tôn trọng và hợp pháp khi sử dụng các công cụ kĩ thuật số và trực tuyến', right: 'Ethical (Đạo đức)' },
            { icon: '🏴‍☠️', left: 'Sao chép, phân phối hoặc sử dụng nội dung kĩ thuật số mà không có sự cho phép của chủ sở hữu', right: 'Piracy (Vi phạm bản quyền)' }
          ],
          hint: '"Không có sự cho phép của chủ sở hữu" là vi phạm bản quyền.',
          explain: 'Ethical = có trách nhiệm, tôn trọng, hợp pháp. Piracy = dùng nội dung số khi chưa được chủ sở hữu cho phép.'
        },
        {
          type: 'quiz_single',
          topic: 'Ôn tập',
          question: 'Em hãy cho biết, tùy chọn nào sau đây là đúng nhất về đạo đức (Ethical) khi sử dụng các công cụ kĩ thuật số và tham gia trực tuyến?',
          options: ['Đạo đức (Ethical) là việc làm hài lòng mọi người khi sử dụng các công cụ kĩ thuật số và tham gia trực tuyến.', 'Đạo đức (Ethical) là việc có trách nhiệm bảo vệ bản thân khi sử dụng các công cụ kĩ thuật số và tham gia trực tuyến.', 'Đạo đức (Ethical) là việc bảo vệ quan điểm cá nhân bằng các hình thức, câu từ làm cho đối phương ức chế, khó chịu khi tham gia trực tuyến.', 'Đạo đức (Ethical) là việc có trách nhiệm, tôn trọng và tuân thủ luật pháp khi sử dụng các công cụ kĩ thuật số và tham gia trực tuyến.'],
          correctAnswer: 3,
          hint: 'Ba từ khóa: trách nhiệm, tôn trọng, tuân thủ luật pháp.',
          explain: 'Đạo đức là việc có trách nhiệm, tôn trọng và tuân thủ luật pháp khi sử dụng công cụ kĩ thuật số.'
        },
        {
          type: 'quiz_multiple',
          topic: 'Ôn tập',
          question: 'Em hãy cho biết, tùy chọn nào sau đây thể hiện việc có đạo đức (Ethical) khi sử dụng các công cụ kĩ thuật số và tham gia trực tuyến? (Chọn 3)',
          options: ['Chế giễu', 'Có trách nhiệm', 'Tuân thủ luật pháp', 'Tôn trọng'],
          correctAnswers: [1, 2, 3],
          hint: 'Chế giễu không phải là hành vi có đạo đức.',
          explain: 'Có đạo đức là có trách nhiệm, tôn trọng và tuân thủ luật pháp.'
        },
        {
          type: 'quiz_single',
          topic: 'Ôn tập',
          question: 'Em hãy cho biết, tùy chọn nào sau đây là đúng nhất về hợp pháp (Legal) trong môi trường kĩ thuật số?',
          options: ['Hợp pháp (Legal) là những hành động hoặc hoạt động được cho phép và không vi phạm các quy định hay luật pháp hiện hành.', 'Hợp pháp (Legal) là những hành động hoặc hoạt động trong trường học hoặc công ty.', 'Hợp pháp (Legal) là những hành động hoặc hoạt động tôn giáo.', 'Hợp pháp (Legal) là những hành động hoặc hoạt động mình thích.'],
          correctAnswer: 0,
          hint: 'Hợp pháp = được cho phép và không vi phạm luật.',
          explain: 'Hợp pháp là những hành động được cho phép và không vi phạm quy định hay luật pháp hiện hành.'
        },
        {
          type: 'quiz_single',
          topic: 'Ôn tập',
          question: 'Em hãy cho biết, tùy chọn nào sau đây thể hiện hành động hợp pháp (Legal) khi tham gia trực tuyến?',
          options: ['Chị An thường chia sẻ các kiến thức về Tin học lên mạng xã hội với nội dung gần gũi và lời văn lịch sự.', 'Anh Duy sử dụng các kĩ thuật bẻ khóa để sử dụng các phần mềm mà không phải trả tiền.', 'Anh Minh liên hệ với các hội nhóm mua chứng chỉ giả để bổ sung vào hồ sơ xin việc.', 'Anh Nhân thường tìm các cửa hàng buôn bán đồ điện tử giá rẻ và không có giấy phép kinh doanh để trao đổi mua bán.'],
          correctAnswer: 0,
          hint: 'Ba hành động còn lại đều vi phạm luật.',
          explain: 'Chỉ có chia sẻ kiến thức Tin học với nội dung phù hợp là hợp pháp.'
        },
        {
          type: 'quiz_multiple',
          topic: 'Ôn tập',
          question: 'Em hãy cho biết, tùy chọn nào sau đây thể hiện có đạo đức (Ethical) khi sử dụng các công cụ kĩ thuật số và tham gia trực tuyến? (Chọn 2)',
          options: ['Bạn Hải chế ảnh của bạn cùng lớp, đưa lên mạng xã hội để chia sẻ với mọi người.', 'Bạn An báo cáo các bài viết miệt thị ngoại hình với nhà quản lí của nền tảng mạng xã hội.', 'Bạn Bình làm theo các hướng dẫn trên mạng để gian lận các bài kiểm tra trực tuyến.', 'Bạn Nhân luôn sử dụng ngôn từ lịch sự, văn minh khi nói chuyện, trao đổi thông tin với mọi người trên mạng xã hội.'],
          correctAnswers: [1, 3],
          hint: 'Chọn những hành động tôn trọng người khác và có trách nhiệm.',
          explain: 'Báo cáo bài viết miệt thị và dùng ngôn từ lịch sự, văn minh là hành vi có đạo đức.'
        },
        {
          type: 'info',
          final: true,
          topic: 'Hoàn thành',
          title: 'Em đã ôn tập xong Bài 16!',
          content: 'Xem lại điểm số bên dưới. Nếu muốn luyện thêm, bấm nút làm lại.',
          imageUrl: null
        }
      ]
    }
  ]
};

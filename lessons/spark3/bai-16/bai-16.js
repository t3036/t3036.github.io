/* ============================================================
   DỮ LIỆU BÀI HỌC — BÀI 16: ĐẠO ĐỨC VÀ HỢP PHÁP
   (IC3 GS6 Spark — Level 3 — Chủ đề: Công dân số)
   ------------------------------------------------------------
   Dùng chung engine với các bài khác (lesson.js + lesson.css).
   Nguồn: PPTX gốc K5_B16_DaoDucVaHopPhap.pptx.
   Đáp án xác định theo nội dung bài học.
   ============================================================ */

const PASSWORDS = {
  s1: '',  // Phần 1 — Đạo đức và hợp pháp trong môi trường kĩ thuật số
  s2: '',  // Phần 2 — Vi phạm bản quyền
  s3: '',  // Phần 3 — Cách sử dụng AI đạo đức và hợp pháp (Đọc thêm)
};

const LESSON = {
  id:    'bai16-dao-duc-hop-phap',
  icon:  '⚖️',
  title: 'Bài 16 — Đạo đức và hợp pháp',

  sections: [
    {
      id: 's1',
      title: 'Đạo đức và hợp pháp trong môi trường kĩ thuật số',
      password: PASSWORDS.s1,
      slides: [
        /* Slide 6 */
        {
          type: 'info',
          topic: 'Phần 1 · Đạo đức',
          title: 'Đạo đức (Ethical)',
          content: '<b>Đạo đức (Ethical)</b> là việc có <b>trách nhiệm, tôn trọng và tuân thủ luật pháp</b> khi sử dụng các công cụ kĩ thuật số và tham gia trực tuyến.',
          imageUrl: null
        },
        /* Slide 7 */
        {
          type: 'quiz_single',
          topic: 'Vận dụng',
          question: 'Em hãy cho biết, tùy chọn nào sau đây là đúng nhất về đạo đức (Ethical) khi sử dụng các công cụ kĩ thuật số và tham gia trực tuyến?',
          options: ['Đạo đức (Ethical) là việc có trách nhiệm bảo vệ bản thân khi sử dụng các công cụ kĩ thuật số và tham gia trực tuyến.', 'Đạo đức (Ethical) là việc có trách nhiệm, tôn trọng và tuân thủ luật pháp khi sử dụng các công cụ kĩ thuật số và tham gia trực tuyến.', 'Đạo đức (Ethical) là việc làm hài lòng mọi người khi sử dụng các công cụ kĩ thuật số và tham gia trực tuyến.', 'Đạo đức (Ethical) là việc bảo vệ quan điểm cá nhân bằng các hình thức, câu từ làm cho đối phương ức chế, khó chịu khi tham gia trực tuyến.'],
          correctAnswer: 1,
          hint: 'Ba từ khóa: trách nhiệm, tôn trọng, tuân thủ luật pháp.',
          explain: 'Đạo đức là việc có trách nhiệm, tôn trọng và tuân thủ luật pháp khi sử dụng công cụ kĩ thuật số và tham gia trực tuyến.'
        },
        /* Slide 9 */
        {
          type: 'quiz_multiple',
          topic: 'Vận dụng',
          question: 'Em hãy cho biết, tùy chọn nào sau đây thể hiện việc có đạo đức (Ethical) khi sử dụng các công cụ kĩ thuật số và tham gia trực tuyến? (Chọn 3)',
          options: ['Có trách nhiệm', 'Chế giễu', 'Tôn trọng', 'Tuân thủ luật pháp'],
          correctAnswers: [0, 2, 3],
          hint: 'Chế giễu người khác thì không phải là hành vi có đạo đức.',
          explain: 'Có đạo đức là có trách nhiệm, tôn trọng người khác và tuân thủ luật pháp. Chế giễu không phải là hành vi có đạo đức.'
        },
        /* Slide 10 */
        {
          type: 'quiz_multiple',
          topic: 'Vận dụng',
          question: 'Em hãy cho biết, tùy chọn nào sau đây thể hiện có đạo đức (Ethical) khi sử dụng các công cụ kĩ thuật số và tham gia trực tuyến? (Chọn 2)',
          options: ['Bạn An báo cáo các bài viết miệt thị ngoại hình với nhà quản lí của nền tảng mạng xã hội.', 'Bạn Hải chế ảnh của bạn cùng lớp, đưa lên mạng xã hội để chia sẻ với mọi người.', 'Bạn Nhân luôn sử dụng ngôn từ lịch sự, văn minh khi nói chuyện, trao đổi thông tin với mọi người trên mạng xã hội.', 'Bạn Bình làm theo các hướng dẫn trên mạng để gian lận các bài kiểm tra trực tuyến.'],
          correctAnswers: [0, 2],
          hint: 'Chọn những hành động tôn trọng người khác và có trách nhiệm.',
          explain: 'Báo cáo bài viết miệt thị và dùng ngôn từ lịch sự, văn minh là hành vi có đạo đức. Chế ảnh bạn và gian lận kiểm tra thì không.'
        },
        /* Slide 11 */
        {
          type: 'info',
          topic: 'Phần 1 · Hợp pháp',
          title: 'Hợp pháp (Legal)',
          content: 'Trong môi trường kĩ thuật số, <b>hợp pháp (Legal)</b> là những hành động hoặc hoạt động được cho phép và không vi phạm các quy định hay luật pháp hiện hành.',
          imageUrl: null,
          things: [
            { icon: '🎵', name: 'Tải nhạc từ các trang Web chia sẻ âm nhạc có giấy phép', en: 'Ví dụ hợp pháp' },
            { icon: '🛒', name: 'Mua hàng trực tuyến từ các trang Web có giấy phép kinh doanh', en: 'Ví dụ hợp pháp' }
          ]
        },
        /* Slide 12 */
        {
          type: 'quiz_single',
          topic: 'Vận dụng',
          question: 'Em hãy cho biết, tùy chọn nào sau đây là đúng nhất về hợp pháp (Legal) trong môi trường kĩ thuật số?',
          options: ['Hợp pháp (Legal) là những hành động hoặc hoạt động trong trường học hoặc công ty.', 'Hợp pháp (Legal) là những hành động hoặc hoạt động tôn giáo.', 'Hợp pháp (Legal) là những hành động hoặc hoạt động mình thích.', 'Hợp pháp (Legal) là những hành động hoặc hoạt động được cho phép và không vi phạm các quy định hay luật pháp hiện hành.'],
          correctAnswer: 3,
          hint: 'Hợp pháp = được cho phép và không vi phạm luật.',
          explain: 'Hợp pháp là những hành động hoặc hoạt động được cho phép và không vi phạm các quy định hay luật pháp hiện hành.'
        },
        /* Slide 13 */
        {
          type: 'quiz_single',
          topic: 'Vận dụng',
          question: 'Em hãy cho biết, tùy chọn nào sau đây thể hiện hành động hợp pháp (Legal) khi tham gia trực tuyến?',
          options: ['Anh Duy sử dụng các kĩ thuật bẻ khóa để sử dụng các phần mềm mà không phải trả tiền.', 'Anh Minh liên hệ với các hội nhóm mua chứng chỉ giả để bổ sung vào hồ sơ xin việc.', 'Chị An thường chia sẻ các kiến thức về Tin học lên mạng xã hội với nội dung gần gũi và lời văn lịch sự.', 'Anh Nhân thường tìm các cửa hàng buôn bán đồ điện tử giá rẻ và không có giấy phép kinh doanh để trao đổi mua bán.'],
          correctAnswer: 2,
          hint: 'Ba hành động còn lại đều vi phạm quy định hoặc luật pháp.',
          explain: 'Chia sẻ kiến thức Tin học với nội dung phù hợp là hợp pháp. Bẻ khóa phần mềm, mua chứng chỉ giả, mua bán ở nơi không có giấy phép kinh doanh đều vi phạm pháp luật.'
        }
      ]
    },

    {
      id: 's2',
      title: 'Vi phạm bản quyền',
      password: PASSWORDS.s2,
      slides: [
        /* Slide 15 */
        {
          type: 'info',
          topic: 'Phần 2 · Vi phạm bản quyền',
          title: 'Vi phạm bản quyền (Piracy)',
          content: '<b>Vi phạm bản quyền (Piracy)</b> là việc sao chép, phân phối hoặc sử dụng nội dung kĩ thuật số mà <b>không có sự cho phép</b> của chủ sở hữu.',
          imageUrl: null,
          things: [
            { icon: '🏴‍☠️', name: 'Đánh cắp ứng dụng thương mại và cung cấp cho người khác', en: 'Ví dụ vi phạm bản quyền' }
          ]
        },
        /* Slide 16 */
        {
          type: 'quiz_matching',
          topic: 'Vận dụng',
          question: 'Em hãy di chuyển từng thuật ngữ từ danh sách ở bên phải sang phát biểu tương ứng ở bên trái.',
          pairs: [
            { icon: '🤝', left: 'Hành động có trách nhiệm, tôn trọng và hợp pháp khi sử dụng các công cụ kĩ thuật số và trực tuyến', right: 'Ethical (Đạo đức)' },
            { icon: '🏴‍☠️', left: 'Sao chép, phân phối hoặc sử dụng nội dung kĩ thuật số mà không có sự cho phép của chủ sở hữu', right: 'Piracy (Vi phạm bản quyền)' }
          ],
          hint: '"Không có sự cho phép của chủ sở hữu" là vi phạm bản quyền; "có trách nhiệm, tôn trọng, hợp pháp" là đạo đức.',
          explain: 'Ethical (Đạo đức) = có trách nhiệm, tôn trọng và hợp pháp. Piracy (Vi phạm bản quyền) = sao chép, phân phối, sử dụng nội dung số khi chưa được chủ sở hữu cho phép.'
        }
      ]
    },

    {
      id: 's3',
      title: 'Cách sử dụng AI đạo đức và hợp pháp (Đọc thêm)',
      password: PASSWORDS.s3,
      slides: [
        /* Slide 18 */
        {
          type: 'info',
          topic: 'Đọc thêm · AI',
          title: 'Cách sử dụng AI đạo đức và hợp pháp',
          content: '<b>AI làm được không có nghĩa là ta nên làm.</b> Dùng AI phải trung thực, an toàn và có trách nhiệm.',
          imageUrl: null,
          things: [
            { icon: '🧾', name: 'Trung thực', en: 'Không nhận sản phẩm của AI là của mình' },
            { icon: '🛡️', name: 'An toàn', en: 'Không dùng AI để gây hại' },
            { icon: '🤝', name: 'Có trách nhiệm', en: 'Chịu trách nhiệm về cách mình dùng AI' }
          ]
        },
        /* Slide 26 */
        {
          type: 'info',
          topic: 'Thảo luận',
          title: 'Tình huống: ảnh AI cho poster lớp',
          content: 'Em dùng AI để tạo một bức ảnh cho poster của lớp. Một bạn đề nghị ghi tên mình là người tự vẽ bức ảnh đó.<br><br>• Theo em, điều này có phù hợp không?<br>• Em sẽ xử lí tình huống này như thế nào?',
          imageUrl: null,
          remember: 'Không phù hợp: cần <b>trung thực</b>, ghi rõ ảnh được tạo với sự hỗ trợ của AI.'
        },
        {
          type: 'info',
          final: true,
          scoreSections: [0, 1, 2],
          topic: 'Hoàn thành',
          title: 'Chúc mừng em đã học xong Bài 16!',
          content: 'Em đã biết thế nào là đạo đức (Ethical), hợp pháp (Legal), vi phạm bản quyền (Piracy) và cách dùng AI trung thực, an toàn, có trách nhiệm.',
          imageUrl: null,
          remember: 'Muốn ôn lại các câu hỏi của bài, hãy vào trang <b>Ôn tập</b> để luyện thêm.'
        }
      ]
    }
  ]
};

/* ============================================================
   DỮ LIỆU BÀI HỌC — BÀI 17: TIN TẶC
   (IC3 GS6 Spark — Level 3 — Chủ đề: Công dân số)
   ------------------------------------------------------------
   Dùng chung engine với các bài khác (lesson.js + lesson.css).
   Nguồn: PPTX gốc K5_B17_TinTac.pptx.
   Đáp án xác định theo nội dung bài học.
   ============================================================ */

const PASSWORDS = {
  s1: '',  // Phần 1 — Khái niệm tin tặc
  s2: '',  // Phần 2 — Phân biệt các loại tin tặc
  s3: '',  // Phần 3 — Công nghệ AI bị lợi dụng (Đọc thêm)
};

const LESSON = {
  id:    'bai17-tin-tac',
  icon:  '🕵️',
  title: 'Bài 17 — Tin tặc',

  sections: [
    {
      id: 's1',
      title: 'Khái niệm tin tặc',
      password: PASSWORDS.s1,
      slides: [
        /* Slide 6 */
        {
          type: 'info',
          topic: 'Phần 1 · Khái niệm',
          title: 'Tin tặc (Hacker)',
          content: '<b>Tin tặc (Hacker)</b> là người sử dụng kiến thức và kĩ năng về công nghệ máy tính và Internet để <b>xâm nhập trái phép</b> vào hệ thống máy tính.',
          imageUrl: null,
          things: [
            { icon: '🛠️', name: 'Mục đích tốt', en: 'Giúp khắc phục các lỗ hổng bảo mật trong hệ thống' },
            { icon: '💥', name: 'Mục đích xấu', en: 'Đánh cắp thông tin hoặc phá hoại hệ thống' }
          ]
        },
        /* Slide 7 */
        {
          type: 'quiz_single',
          topic: 'Vận dụng',
          question: 'Em hãy cho biết, tùy chọn nào sau đây là đúng nhất về tin tặc (Hacker)?',
          options: ['Tin tặc (Hacker) là người sử dụng kiến thức và kĩ năng về công nghệ máy tính và Internet để bán hàng trực tuyến.', 'Tin tặc (Hacker) là người sử dụng kiến thức và kĩ năng về công nghệ máy tính và Internet để truyền thông và Marketing.', 'Tin tặc (Hacker) là người sử dụng kiến thức và kĩ năng về công nghệ máy tính và Internet để xâm nhập trái phép vào hệ thống máy tính.', 'Tin tặc (Hacker) là người sử dụng kiến thức và kĩ năng về công nghệ máy tính và Internet để tạo các Website giả mạo.'],
          correctAnswer: 2,
          hint: 'Từ khóa: "xâm nhập trái phép".',
          explain: 'Tin tặc là người dùng kiến thức và kĩ năng về công nghệ máy tính và Internet để xâm nhập trái phép vào hệ thống máy tính.'
        }
      ]
    },

    {
      id: 's2',
      title: 'Phân biệt các loại tin tặc',
      password: PASSWORDS.s2,
      slides: [
        /* Slide 8 */
        {
          type: 'info',
          topic: 'Phần 2 · Các loại tin tặc',
          title: 'Các loại tin tặc',
          content: 'Dựa vào mục đích và việc có được phép hay không, tin tặc được chia thành nhiều loại:',
          imageUrl: null,
          things: [
            { icon: '🤍', name: 'Tin tặc mũ trắng\n(White Hat)', en: 'Dùng kĩ năng Hack hợp pháp để xác định lỗ hổng bảo mật trong công nghệ' },
            { icon: '🖤', name: 'Tin tặc mũ đen\n(Black Hat)', en: 'Dùng kĩ năng Hack bất hợp pháp và có mục đích xấu' },
            { icon: '🩶', name: 'Tin tặc mũ xám\n(Gray Hat)', en: 'Tìm lỗ hổng bảo mật mà không có sự cho phép của chủ sở hữu, rồi chia sẻ phát hiện - thường phải trả phí' },
            { icon: '✊', name: 'Tin tặc kiêm nhà hoạt động\n(Hacktivist)', en: 'Dùng kĩ năng Hack vì mục đích, động cơ chính trị hoặc xã hội' }
          ]
        },
        /* Slide 9 */
        {
          type: 'quiz_matching',
          topic: 'Vận dụng',
          question: 'Em hãy di chuyển từng thuật ngữ từ danh sách ở bên phải sang phát biểu tương ứng ở bên trái.',
          pairs: [
            { icon: '🔓', left: 'Hành động truy cập trái phép vào thông tin kĩ thuật số', right: 'Hacking' },
            { icon: '🖤', left: 'Người sử dụng các kĩ năng Hack một cách bất hợp pháp và có mục đích xấu', right: 'Hacker (Tin tặc mũ đen)' },
            { icon: '🩶', left: 'Ai đó sử dụng các kĩ năng Hack để xác định các lỗ hổng bảo mật mà không có sự cho phép của chủ sở hữu, sau đó chia sẻ phát hiện của họ - thường phải trả phí', right: 'Gray Hat Hacker (Tin tặc mũ xám)' },
            { icon: '🤍', left: 'Người sử dụng các kĩ năng Hack hợp pháp để xác định các lỗ hổng bảo mật trong công nghệ', right: 'White Hat Hacker (Tin tặc mũ trắng)' }
          ],
          hint: 'Hợp pháp = mũ trắng; bất hợp pháp, mục đích xấu = mũ đen; không được phép nhưng chia sẻ phát hiện = mũ xám.',
          explain: 'Hacking là truy cập trái phép. Mũ đen: bất hợp pháp, mục đích xấu. Mũ xám: tìm lỗ hổng khi chưa được phép rồi chia sẻ, thường lấy phí. Mũ trắng: hợp pháp, tìm lỗ hổng để khắc phục.'
        },
        /* Slide 10 */
        {
          type: 'quiz_single',
          topic: 'Vận dụng',
          question: 'Em hãy cho biết, Hacker mũ trắng là gì?',
          options: ['Người mặc đồ trắng khi sử dụng máy tính', 'Ai đó nhắm vào những người xấu trực tuyến', 'Một người sử dụng các kĩ năng và kiến thức máy tính cho mục đích tốt', 'Ai đó đội mũ trắng để che giấu danh tính'],
          correctAnswer: 2,
          hint: '"Mũ trắng" chỉ mục đích tốt, không phải trang phục.',
          explain: 'Hacker mũ trắng là người sử dụng kĩ năng và kiến thức máy tính cho mục đích tốt.'
        },
        /* Slide 11 */
        {
          type: 'quiz_single',
          topic: 'Vận dụng',
          question: 'Em hãy cho biết, loại tin tặc nào sau đây sử dụng các kĩ năng Hack vì mục đích, động cơ chính trị hoặc xã hội. Ví dụ, họ có thể sử dụng các kĩ thuật tấn công mạng và xâm nhập hệ thống để thay đổi thông tin và truyền tải thông điệp và bảo vệ môi trường?',
          options: ['Tin tặc mũ đen (Black Hat Hacker)', 'Tin tặc kiêm nhà hoạt động (Hacktivist)', 'Tin tặc mũ nâu (Brown Hat Hacker)', 'Tin tặc mũ trắng (White Hat Hacker)'],
          correctAnswer: 1,
          hint: 'Động cơ chính trị hoặc xã hội = nhà hoạt động.',
          explain: 'Hacktivist là tin tặc kiêm nhà hoạt động, dùng kĩ năng Hack vì mục đích, động cơ chính trị hoặc xã hội.'
        },
        /* Slide 12 */
        {
          type: 'quiz_multiple',
          topic: 'Vận dụng',
          question: 'Em hãy cho biết, hai loại tin tặc nào dù không có mục đích xấu, nhưng cũng không được tự ý xâm nhập vào hệ thống? (Chọn 2)',
          options: ['Tin tặc mũ đen', 'Tin tặc mũ xám', 'Tin tặc kiêm nhà hoạt động (Hacktivist)', 'Tin tặc mũ trắng'],
          correctAnswers: [1, 2],
          hint: 'Mũ đen có mục đích xấu; mũ trắng được phép xâm nhập hợp pháp.',
          explain: 'Tin tặc mũ xám và Hacktivist không hẳn có mục đích xấu nhưng vẫn không có quyền tự ý xâm nhập vào hệ thống.'
        },
        /* Slide 13 */
        {
          type: 'quiz_matching',
          topic: 'Vận dụng',
          question: 'Em hãy ghép nối từng thuật ngữ ở cột bên phải sang ví dụ tương ứng ở cột bên trái.',
          pairs: [
            { icon: '🔒', left: 'Tấn công một hệ thống mạng để chặn không cho người dùng truy cập các tập tin của họ', right: 'Tin tặc vô đạo đức (Unethical Hacker)' },
            { icon: '✊', left: 'Tấn công một công ty để lôi kéo sự chú ý về một vấn đề nào đó, ví dụ như trả lương không công bằng cho nhân viên', right: 'Tin tặc kiêm nhà hoạt động (Hacktivist)' },
            { icon: '🛡️', left: 'Kiểm tra hệ thống mạng của một công ty để xem có dễ để tìm mật khẩu hay không, rồi cho công ty đó biết cách khắc phục', right: 'Tin tặc có đạo đức (Ethical Hacker)' }
          ],
          hint: 'Chặn người dùng = vô đạo đức; thu hút sự chú ý về vấn đề xã hội = nhà hoạt động; kiểm tra rồi báo cách khắc phục = có đạo đức.',
          explain: 'Chặn người dùng truy cập tập tin là tin tặc vô đạo đức. Tấn công để gây chú ý về vấn đề xã hội là Hacktivist. Kiểm tra rồi báo cách khắc phục là tin tặc có đạo đức.'
        },
        /* Slide 14 */
        {
          type: 'quiz_single',
          topic: 'Vận dụng',
          question: 'Em hãy điền vào chỗ trống để hoàn thành phát biểu sau: “………………….. hoạt động để xác định lỗ hổng bảo mật và đưa ra đề xuất để cải thiện.”',
          options: ['Tin tặc có đạo đức', 'Tin tặc vô đạo đức'],
          correctAnswer: 0,
          hint: 'Ai tìm lỗ hổng rồi đề xuất cải thiện?',
          explain: 'Tin tặc có đạo đức hoạt động để xác định lỗ hổng bảo mật và đưa ra đề xuất để cải thiện.'
        }
      ]
    },

    {
      id: 's3',
      title: 'Công nghệ AI bị lợi dụng trong hoạt động của tin tặc (Đọc thêm)',
      password: PASSWORDS.s3,
      slides: [
        /* Slide 16 */
        {
          type: 'info',
          topic: 'Đọc thêm · AI và tin tặc',
          title: 'AI bị lợi dụng trong hoạt động của tin tặc',
          content: 'Kẻ xấu có thể dùng AI để tạo nội dung lừa đảo thuyết phục hơn.',
          imageUrl: null,
          things: [
            { icon: '🚫', name: 'Không bấm link lạ', en: '' },
            { icon: '📎', name: 'Không tải tệp lạ', en: '' },
            { icon: '🔑', name: 'Không chia sẻ mật khẩu', en: '' }
          ],
          remember: 'Khi nghi ngờ, hãy <b>dừng lại và hỏi người lớn đáng tin cậy</b>.'
        },
        /* Slide 25 */
        {
          type: 'quiz_multiple',
          topic: 'Vận dụng',
          question: 'Đọc các tình huống sau và cho biết tình huống nào có dấu hiệu bị tin tặc lợi dụng AI: (Chọn 2)',
          options: ['Em nhận được email thông báo trúng thưởng và yêu cầu nhấp vào liên kết lạ.', 'Em dùng AI để giải thích bài học.', 'Em nhận được cuộc gọi có giọng nói giống người quen xin chuyển tiền gấp.'],
          correctAnswers: [0, 2],
          hint: 'Chọn tình huống có liên kết lạ hoặc yêu cầu chuyển tiền gấp.',
          explain: 'Email trúng thưởng kèm liên kết lạ và cuộc gọi giả giọng người quen xin chuyển tiền gấp là dấu hiệu lừa đảo có lợi dụng AI. Dùng AI để học thì không.'
        },
        {
          type: 'info',
          final: true,
          scoreSections: [0, 1, 2],
          topic: 'Hoàn thành',
          title: 'Chúc mừng em đã học xong Bài 17!',
          content: 'Em đã biết tin tặc là gì, phân biệt được các loại tin tặc và cách cảnh giác với lừa đảo dùng AI.',
          imageUrl: null,
          remember: 'Muốn ôn lại các câu hỏi của bài, hãy vào trang <b>Ôn tập</b> để luyện thêm.'
        }
      ]
    }
  ]
};

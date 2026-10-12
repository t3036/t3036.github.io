/* ============================================================
   DỮ LIỆU TRANG ÔN TẬP — Bài 18 — Rủi ro trực tuyến
   (dùng chung engine lesson.js)
   ============================================================ */

const LESSON = {
  id:    'bai18-rui-ro-truc-tuyen-on-tap',
  icon:  '🕵️',
  title: 'Ôn tập Bài 18 — Rủi ro trực tuyến',

  sections: [
    {
      id: 's4',
      title: 'Ôn tập',
      slides: [
        {
          type: 'quiz_matching',
          topic: 'Ôn tập',
          question: 'Em hãy ghép nối từng thuật ngữ ở cột bên phải sang định nghĩa tương ứng ở cột bên trái.',
          pairs: [
            { icon: '🎭', left: 'Mạo danh là một người khác với ý định lừa đảo', right: 'Lừa đảo công nghệ cao (Catfishing)' },
            { icon: '💿', left: 'Đánh cắp ứng dụng thương mại và cung cấp cho người khác', right: 'Vi phạm bản quyền (Piracy)' },
            { icon: '🔓', left: 'Truy cập trái phép vào một tài nguyên với ý định gây hại', right: 'Tấn công xâm nhập (Hacking)' }
          ],
          hint: 'Mạo danh = Catfishing; đánh cắp ứng dụng = Piracy; truy cập trái phép = Hacking.',
          explain: 'Catfishing là mạo danh để lừa đảo. Piracy là đánh cắp ứng dụng thương mại. Hacking là truy cập trái phép.'
        },
        {
          type: 'quiz_matching',
          topic: 'Ôn tập',
          question: 'Em hãy di chuyển từng thuật ngữ từ danh sách ở bên phải sang phát biểu tương ứng ở bên trái.',
          pairs: [
            { icon: '🎣', left: 'Trang Web hoặc Email giả mạo dùng để thu thập thông tin cá nhân', right: 'Tấn công giả mạo (Phishing)' },
            { icon: '🦠', left: 'Một chương trình được dùng để đánh cắp thông tin hoặc tổn hại đến máy tính', right: 'Virus' },
            { icon: '🧱', left: 'Được sử dụng để lọc những dữ liệu vào hoặc ra khỏi một máy tính, nhằm giới hạn việc truy cập trái phép', right: 'Tường lửa (Firewall)' },
            { icon: '🍪', left: 'Các tập tin được lưu trên một máy tính từ các trang Web để theo dõi dữ liệu', right: 'Cookies' }
          ],
          hint: 'Giả mạo thu thập thông tin = Phishing; lọc dữ liệu vào/ra = Tường lửa; lưu từ trang Web = Cookies.',
          explain: 'Phishing: Web/Email giả mạo. Virus: chương trình tổn hại máy tính. Tường lửa: lọc dữ liệu vào/ra. Cookies: tập tin lưu từ trang Web để theo dõi dữ liệu.'
        },
        {
          type: 'quiz_single',
          topic: 'Ôn tập',
          question: 'Em hãy cho biết, thuật ngữ nào chỉ các bit dữ liệu nhỏ được thu thập bởi trang Web mà em truy cập?',
          options: ['Cookies', 'Dữ kiện', 'Bảng tính', 'Tấn công xâm nhập (Hacking)'],
          correctAnswer: 0,
          hint: 'Tập tin nhỏ lưu trên máy khi em vào Web.',
          explain: 'Cookies là các bit dữ liệu nhỏ được trang Web thu thập và lưu trên thiết bị của em.'
        },
        {
          type: 'quiz_single',
          topic: 'Ôn tập',
          question: 'Em hãy cho biết, Catfishing là gì?',
          options: ['Một cách an toàn để kết bạn trực tuyến', 'Một loại nghiên cứu được thực hiện trực tuyến', 'Giả vờ là người khác trên mạng để đánh lừa hoặc lừa đảo người khác', 'Một môn thể thao liên quan đến câu cá'],
          correctAnswer: 2,
          hint: 'Catfishing là giả mạo một con người cụ thể.',
          explain: 'Catfishing là giả vờ là người khác trên mạng để đánh lừa hoặc lừa đảo người khác.'
        },
        {
          type: 'quiz_single',
          topic: 'Ôn tập',
          question: 'Em hãy cho biết, tùy chọn nào sau đây là đúng nhất về Virus máy tính?',
          options: ['Virus máy tính là một loại phần mềm độc hại với mục đích gây hại cho dữ liệu, ngăn chặn hoạt động của hệ thống máy tính hoặc đánh cắp thông tin cá nhân.', 'Virus máy tính là một loại phần mềm trò chơi với mục đích mã hóa dữ liệu và thách đố người dùng.', 'Virus máy tính là một loại phần mềm độc hại với mục đích quảng cáo sản phẩm trực tuyến.', 'Virus máy tính là một loại phần mềm độc hại với mục đích làm chậm máy tính.'],
          correctAnswer: 0,
          hint: 'Virus là phần mềm độc hại gây hại dữ liệu, chặn hệ thống hoặc đánh cắp thông tin.',
          explain: 'Virus máy tính là phần mềm độc hại với mục đích gây hại cho dữ liệu, ngăn chặn hoạt động của hệ thống hoặc đánh cắp thông tin cá nhân.'
        },
        {
          type: 'quiz_single',
          topic: 'Ôn tập',
          question: 'Em hãy cho biết, tùy chọn nào sau đây là đúng nhất về tường lửa (Firewall)?',
          options: ['Tường lửa (Firewall) được sử dụng để quét các tập tin rác trong máy tính.', 'Tường lửa (Firewall) được sử dụng để lọc những dữ liệu vào hoặc ra khỏi một máy tính, giúp bảo vệ máy tính và dữ liệu khỏi các cuộc tấn công mạng.', 'Tường lửa (Firewall) được sử dụng để tăng tốc máy tính.', 'Tường lửa (Firewall) được sử dụng để ngăn chặn các lời mời kết bạn lạ trên mạng xã hội.'],
          correctAnswer: 1,
          hint: 'Tường lửa là "lá chắn" lọc dữ liệu vào/ra.',
          explain: 'Tường lửa dùng để lọc dữ liệu vào hoặc ra khỏi máy tính, giúp bảo vệ máy tính và dữ liệu khỏi các cuộc tấn công mạng.'
        },
        {
          type: 'quiz_single',
          topic: 'Ôn tập',
          question: 'Em hãy cho biết, tùy chọn nào sau đây là đúng nhất về Cookies trong máy tính khi duyệt Web?',
          options: ['Cookies được sử dụng để theo dõi các hoạt động trên Web và lưu trữ một số thông tin của em.', 'Cookies được sử dụng để quét rác và ngăn chặn Virus khi bạn duyệt Web.', 'Cookies được sử dụng để theo dõi các hoạt động trên Web của bạn và đề xuất các lời mời kết bạn mới trên mạng xã hội.', 'Cookies được sử dụng để tăng tốc truy cập Internet.'],
          correctAnswer: 0,
          hint: 'Cookies: theo dõi hoạt động và lưu thông tin.',
          explain: 'Cookies được dùng để theo dõi các hoạt động trên Web và lưu trữ một số thông tin của em.'
        },
        {
          type: 'quiz_single',
          topic: 'Ôn tập',
          question: 'Em hãy cho biết, tùy chọn nào sau đây là đúng nhất về chương trình chặn quảng cáo (Ad Blocker)?',
          options: ['Ad Blocker là các tiện ích mở rộng mà bạn có thể cài đặt trên trình duyệt Web của mình để ngăn chặn các Virus máy tính.', 'Ad Blocker là các tiện ích mở rộng mà bạn có thể cài đặt trên trình duyệt Web của mình để chụp màn hình nội dung của trang Web.', 'Ad Blocker là các tiện ích mở rộng mà bạn có thể cài đặt trên trình duyệt Web của mình để quét các tập tin tạm trên các trang Web.', 'Ad Blocker là các tiện ích mở rộng mà bạn có thể cài đặt trên trình duyệt Web của mình để ngăn các quảng cáo xuất hiện khi đang lướt Web.'],
          correctAnswer: 3,
          hint: 'Ad = quảng cáo.',
          explain: 'Ad Blocker là tiện ích mở rộng cài trên trình duyệt để ngăn các quảng cáo xuất hiện khi lướt Web.'
        },
        {
          type: 'info',
          final: true,
          topic: 'Hoàn thành',
          title: 'Em đã ôn tập xong Bài 18!',
          content: 'Xem lại điểm số bên dưới. Nếu muốn luyện thêm, bấm nút làm lại.',
          imageUrl: null
        }
      ]
    }
  ]
};

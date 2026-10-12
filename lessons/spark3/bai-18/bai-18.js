/* ============================================================
   DỮ LIỆU BÀI HỌC — BÀI 18: RỦI RO TRỰC TUYẾN
   (IC3 GS6 Spark — Level 3 — Chủ đề: Công dân số)
   ------------------------------------------------------------
   Dùng chung engine với các bài khác (lesson.js + lesson.css).
   Nguồn: PPTX gốc K5_B18_RuiRoTrucTuyen.pptx và kịch bản
   Spark3_B18_KichBan.docx.
   ============================================================ */

const PASSWORDS = {
  s1: '',  // Phần 1 — Một số khái niệm về rủi ro trực tuyến
  s2: '',  // Phần 2 — Phân biệt Catfishing và Phishing
  s3: '',  // Phần 3 — Công nghệ AI giúp phát hiện rủi ro (Đọc thêm)
};

const LESSON = {
  id:    'bai18-rui-ro-truc-tuyen',
  icon:  '🕵️',
  title: 'Bài 18 — Rủi ro trực tuyến',

  sections: [
    {
      id: 's1',
      title: 'Một số khái niệm về rủi ro trực tuyến',
      password: PASSWORDS.s1,
      slides: [
        /* Slide 7 */
        {
          type: 'info',
          topic: 'Phần 1 · Virus máy tính',
          title: 'Virus máy tính',
          content: '<b>Virus máy tính</b> là một loại <b>phần mềm độc hại</b> với mục đích gây hại cho dữ liệu, ngăn chặn hoạt động của hệ thống máy tính hoặc đánh cắp thông tin cá nhân.',
          imageUrl: null,
          things: [
            { icon: '🦠', name: 'Tự sao chép', en: 'Virus có thể tự sao chép và lây nhiễm vào các hệ thống máy tính' },
            { icon: '📧', name: 'Con đường lây nhiễm', en: 'Email, các trang Web không an toàn hoặc các thiết bị lưu trữ dữ liệu' }
          ]
        },
        /* Slide 8 */
        {
          type: 'quiz_single',
          topic: 'Vận dụng',
          question: 'Em hãy cho biết, tùy chọn nào sau đây là đúng nhất về Virus máy tính?',
          options: ['Virus máy tính là một loại phần mềm trò chơi với mục đích mã hóa dữ liệu và thách đố người dùng.', 'Virus máy tính là một loại phần mềm độc hại với mục đích gây hại cho dữ liệu, ngăn chặn hoạt động của hệ thống máy tính hoặc đánh cắp thông tin cá nhân.', 'Virus máy tính là một loại phần mềm độc hại với mục đích quảng cáo sản phẩm trực tuyến.', 'Virus máy tính là một loại phần mềm độc hại với mục đích làm chậm máy tính.'],
          correctAnswer: 1,
          hint: 'Virus là phần mềm độc hại gây hại dữ liệu, chặn hệ thống hoặc đánh cắp thông tin.',
          explain: 'Virus máy tính là phần mềm độc hại với mục đích gây hại cho dữ liệu, ngăn chặn hoạt động của hệ thống máy tính hoặc đánh cắp thông tin cá nhân.'
        },
        /* Slide 9 */
        {
          type: 'info',
          topic: 'Phần 1 · Tường lửa',
          title: 'Tường lửa (Firewall)',
          content: '<b>Tường lửa (Firewall)</b> được dùng để <b>lọc dữ liệu vào hoặc ra</b> khỏi một máy tính, giúp bảo vệ máy tính và dữ liệu khỏi các cuộc tấn công mạng.',
          imageUrl: null,
          things: [
            { icon: '🧱', name: 'Tường lửa phần cứng\n(Hardware Firewall)', en: 'Là thiết bị vật lí được đặt giữa mạng nội bộ và mạng bên ngoài' },
            { icon: '💻', name: 'Tường lửa phần mềm\n(Software Firewall)', en: 'Là chương trình máy tính được cài đặt trên thiết bị hoặc máy tính' }
          ]
        },
        /* Slide 10 */
        {
          type: 'quiz_single',
          topic: 'Vận dụng',
          question: 'Em hãy cho biết, tùy chọn nào sau đây là đúng nhất về tường lửa (Firewall)?',
          options: ['Tường lửa (Firewall) được sử dụng để quét các tập tin rác trong máy tính.', 'Tường lửa (Firewall) được sử dụng để tăng tốc máy tính.', 'Tường lửa (Firewall) được sử dụng để ngăn chặn các lời mời kết bạn lạ trên mạng xã hội.', 'Tường lửa (Firewall) được sử dụng để lọc những dữ liệu vào hoặc ra khỏi một máy tính, giúp bảo vệ máy tính và dữ liệu khỏi các cuộc tấn công mạng.'],
          correctAnswer: 3,
          hint: 'Tường lửa là "lá chắn" lọc dữ liệu vào/ra.',
          explain: 'Tường lửa dùng để lọc dữ liệu vào hoặc ra khỏi máy tính, giúp bảo vệ máy tính và dữ liệu khỏi các cuộc tấn công mạng.'
        },
        /* Slide 11 */
        {
          type: 'info',
          topic: 'Phần 1 · Cookies',
          title: 'Cookies',
          content: '<b>Cookies</b> là những tập tin nhỏ được lưu trữ trên máy tính hoặc thiết bị khi em truy cập các trang Web.',
          imageUrl: null,
          things: [
            { icon: '🍪', name: 'Theo dõi hoạt động', en: 'Cookies được dùng để theo dõi các hoạt động trên Web' },
            { icon: '🗂️', name: 'Lưu thông tin', en: 'Cookies lưu trữ một số thông tin của em, ví dụ: mật khẩu, giỏ hàng' }
          ]
        },
        /* Slide 12 */
        {
          type: 'quiz_single',
          topic: 'Vận dụng',
          question: 'Em hãy cho biết, thuật ngữ nào chỉ các bit dữ liệu nhỏ được thu thập bởi trang Web mà em truy cập?',
          options: ['Dữ kiện', 'Cookies', 'Bảng tính', 'Tấn công xâm nhập (Hacking)'],
          correctAnswer: 1,
          hint: 'Tập tin nhỏ lưu trên máy khi em vào Web.',
          explain: 'Cookies là các bit dữ liệu nhỏ được trang Web thu thập và lưu trên thiết bị của em.'
        },
        /* Slide 13 */
        {
          type: 'quiz_single',
          topic: 'Vận dụng',
          question: 'Em hãy cho biết, tùy chọn nào sau đây là đúng nhất về Cookies trong máy tính khi duyệt Web?',
          options: ['Cookies được sử dụng để quét rác và ngăn chặn Virus khi bạn duyệt Web.', 'Cookies được sử dụng để theo dõi các hoạt động trên Web của bạn và đề xuất các lời mời kết bạn mới trên mạng xã hội.', 'Cookies được sử dụng để theo dõi các hoạt động trên Web và lưu trữ một số thông tin của em.', 'Cookies được sử dụng để tăng tốc truy cập Internet.'],
          correctAnswer: 2,
          hint: 'Cookies: theo dõi hoạt động và lưu thông tin.',
          explain: 'Cookies được dùng để theo dõi các hoạt động trên Web và lưu trữ một số thông tin của em.'
        },
        /* Slide 14 */
        {
          type: 'info',
          topic: 'Phần 1 · Chặn quảng cáo',
          title: 'Chương trình chặn quảng cáo (Ad Blocker)',
          content: '<b>Ad Blocker</b> là các tiện ích mở rộng mà em có thể cài đặt trên trình duyệt Web của mình để <b>ngăn các quảng cáo</b> xuất hiện khi đang lướt Web.',
          imageUrl: null,
          things: [
            { icon: '🚫', name: 'Chặn quảng cáo phiền phức', en: 'Hạn chế quảng cáo lạ hoặc độc hại xuất hiện khi lướt Web' }
          ]
        },
        /* Slide 15 */
        {
          type: 'quiz_single',
          topic: 'Vận dụng',
          question: 'Em hãy cho biết, tùy chọn nào sau đây là đúng nhất về chương trình chặn quảng cáo (Ad Blocker)?',
          options: ['Ad Blocker là các tiện ích mở rộng mà bạn có thể cài đặt trên trình duyệt Web của mình để ngăn chặn các Virus máy tính.', 'Ad Blocker là các tiện ích mở rộng mà bạn có thể cài đặt trên trình duyệt Web của mình để chụp màn hình nội dung của trang Web.', 'Ad Blocker là các tiện ích mở rộng mà bạn có thể cài đặt trên trình duyệt Web của mình để ngăn các quảng cáo xuất hiện khi đang lướt Web.', 'Ad Blocker là các tiện ích mở rộng mà bạn có thể cài đặt trên trình duyệt Web của mình để quét các tập tin tạm trên các trang Web.'],
          correctAnswer: 2,
          hint: 'Ad = quảng cáo.',
          explain: 'Ad Blocker là tiện ích mở rộng cài trên trình duyệt để ngăn các quảng cáo xuất hiện khi lướt Web.'
        }
      ]
    },

    {
      id: 's2',
      title: 'Phân biệt Catfishing và Phishing',
      password: PASSWORDS.s2,
      slides: [
        /* Slide 17 */
        {
          type: 'info',
          topic: 'Phần 2 · Catfishing',
          title: 'Catfishing — Giả mạo cá nhân',
          content: '<b>Catfishing</b> là hành động của một cá nhân giả mạo trực tuyến với mục đích lừa đảo.',
          imageUrl: null,
          things: [
            { icon: '🎭', name: 'Ví dụ', en: 'Dùng ảnh do AI tạo ra để giả mạo người thân hoặc bạn bè, rồi yêu cầu chuyển tiền hoặc cung cấp thông tin cá nhân' }
          ]
        },
        /* Slide 18 */
        {
          type: 'quiz_single',
          topic: 'Vận dụng',
          question: 'Em hãy cho biết, Catfishing là gì?',
          options: ['Một cách an toàn để kết bạn trực tuyến', 'Giả vờ là người khác trên mạng để đánh lừa hoặc lừa đảo người khác', 'Một loại nghiên cứu được thực hiện trực tuyến', 'Một môn thể thao liên quan đến câu cá'],
          correctAnswer: 1,
          hint: 'Catfishing là giả mạo một con người cụ thể.',
          explain: 'Catfishing là giả vờ là người khác trên mạng để đánh lừa hoặc lừa đảo người khác.'
        },
        /* Slide 19 */
        {
          type: 'quiz_matching',
          topic: 'Vận dụng',
          question: 'Em hãy ghép nối từng thuật ngữ ở cột bên phải sang định nghĩa tương ứng ở cột bên trái.',
          pairs: [
            { icon: '🎭', left: 'Mạo danh là một người khác với ý định lừa đảo', right: 'Lừa đảo công nghệ cao (Catfishing)' },
            { icon: '💿', left: 'Đánh cắp ứng dụng thương mại và cung cấp cho người khác', right: 'Vi phạm bản quyền (Piracy)' },
            { icon: '🔓', left: 'Truy cập trái phép vào một tài nguyên với ý định gây hại', right: 'Tấn công xâm nhập (Hacking)' }
          ],
          hint: 'Mạo danh = Catfishing; đánh cắp ứng dụng = Piracy; truy cập trái phép = Hacking.',
          explain: 'Catfishing là mạo danh để lừa đảo. Piracy là đánh cắp ứng dụng thương mại. Hacking là truy cập trái phép với ý định gây hại.'
        },
        /* Slide 20 */
        {
          type: 'info',
          topic: 'Phần 2 · Phishing',
          title: 'Phishing — Giả mạo tổ chức',
          content: '<b>Phishing</b> là việc sử dụng trang Web hoặc Email giả mạo một tổ chức để lừa đảo với mục đích thu thập thông tin cá nhân.',
          imageUrl: null,
          things: [
            { icon: '🎣', name: 'Kẻ tấn công đánh cắp', en: 'Tên đăng nhập, mật khẩu, thông tin thẻ tín dụng hoặc thông tin tài khoản ngân hàng,…' }
          ]
        },
        /* Slide 21 */
        {
          type: 'quiz_matching',
          topic: 'Vận dụng',
          question: 'Em hãy di chuyển từng thuật ngữ từ danh sách ở bên phải sang phát biểu tương ứng ở bên trái.',
          pairs: [
            { icon: '🎣', left: 'Trang Web hoặc Email giả mạo dùng để thu thập thông tin cá nhân', right: 'Tấn công giả mạo (Phishing)' },
            { icon: '🦠', left: 'Một chương trình được dùng để đánh cắp thông tin hoặc tổn hại đến máy tính', right: 'Virus' },
            { icon: '🧱', left: 'Được sử dụng để lọc những dữ liệu vào hoặc ra khỏi một máy tính, nhằm giới hạn việc truy cập trái phép', right: 'Tường lửa (Firewall)' },
            { icon: '🍪', left: 'Các tập tin được lưu trên một máy tính từ các trang Web để theo dõi dữ liệu', right: 'Cookies' }
          ],
          hint: 'Giả mạo thu thập thông tin = Phishing; lọc dữ liệu vào/ra = Tường lửa; lưu từ trang Web = Cookies.',
          explain: 'Phishing: Web/Email giả mạo thu thập thông tin. Virus: chương trình tổn hại máy tính. Tường lửa: lọc dữ liệu vào/ra. Cookies: tập tin lưu từ trang Web để theo dõi dữ liệu.'
        },
        /* Slide 22-23 */
        {
          type: 'info',
          topic: 'Phần 2 · So sánh',
          title: 'Catfishing và Phishing khác nhau thế nào?',
          content: 'Cả hai đều là lừa đảo trực tuyến, nhưng khác nhau ở đối tượng bị giả mạo:',
          imageUrl: null,
          things: [
            { icon: '🎭', name: 'CATFISHING', en: 'Tập trung vào giả mạo danh tính cá nhân (bạn bè, người thân)' },
            { icon: '🎣', name: 'PHISHING', en: 'Tập trung vào giả mạo tổ chức hoặc doanh nghiệp (ngân hàng, công ty)' }
          ]
        },
        /* Kịch bản — Ải 2 */
        {
          type: 'quiz_matching',
          topic: 'Nhiệm vụ thám tử',
          question: 'Thám tử Nam nhận được 2 tin nhắn đáng ngờ. Hãy giúp Nam dán nhãn đúng cho từng tình huống.',
          pairs: [
            { icon: '📧', left: 'Email từ địa chỉ support@gmaill.com: “Tài khoản của bạn sẽ bị khóa. Vui lòng bấm vào đây để xác minh mật khẩu.”', right: 'PHISHING' },
            { icon: '👤', left: 'Tài khoản Facebook có ảnh đại diện là anh trai của Nam nhắn: “Em ơi anh kẹt tiền quá, chuyển gấp cho anh 500k vào số tài khoản lạ này nhé.”', right: 'CATFISHING' }
          ],
          hint: 'Phishing nhắm vào ngân hàng/tổ chức; Catfishing nhắm vào bạn bè/cá nhân.',
          explain: 'Kẻ mạo danh tổ chức là Phishing, kẻ mạo danh cá nhân là Catfishing.'
        },
        /* Slide 24 */
        {
          type: 'info',
          topic: 'Phần 2 · Phòng tránh',
          title: 'Bảo vệ bản thân khỏi Phishing',
          content: 'Để bảo vệ bản thân khỏi các mối nguy hiểm đến từ các cuộc tấn công Phishing, em cần lưu ý:',
          imageUrl: null,
          things: [
            { icon: '🔗', name: 'Không bấm link lạ', en: 'Không nhấp vào siêu liên kết hoặc tải tệp đính kèm từ Email, trang Web lạ' },
            { icon: '🔑', name: 'Không chia sẻ thông tin', en: 'Không cung cấp thông tin cá nhân cho Email hoặc tin nhắn lạ, đáng ngờ' }
          ],
          remember: '<b>KHÔNG</b> bấm link lạ · <b>KHÔNG</b> tải tệp không rõ nguồn · <b>KHÔNG</b> cung cấp mật khẩu!'
        },
        /* Kịch bản — Ải 3 */
        {
          type: 'quiz_single',
          topic: 'Quyết định sinh tử',
          question: 'Máy tính của Nam đột nhiên xuất hiện rất nhiều cửa sổ quảng cáo lạ (Pop-up), nhấp nháy liên tục yêu cầu tải phần mềm “Diệt Virus Miễn Phí”. Nam cần làm gì để an toàn nhất?',
          options: ['Nhấp vào quảng cáo tải về ngay vì đó là phần mềm diệt virus.', 'Chia sẻ cửa sổ đó cho bạn bè xem.', 'Sử dụng trình chặn quảng cáo (Ad Blocker), không tải tệp lạ và hỏi ý kiến người lớn.'],
          correctAnswer: 2,
          hint: 'Cẩn trọng – Suy nghĩ – Hỏi người lớn.',
          explain: 'Phần mềm bảo vệ chỉ là công cụ hỗ trợ, quyết định an toàn vẫn thuộc về em. Nhấp vào quảng cáo lạ có thể rước Virus về máy.'
        }
      ]
    },

    {
      id: 's3',
      title: 'Công nghệ AI giúp phát hiện rủi ro trực tuyến (Đọc thêm)',
      password: PASSWORDS.s3,
      slides: [
        /* Slide 26 */
        {
          type: 'info',
          topic: 'Đọc thêm · AI phát hiện rủi ro',
          title: 'AI giúp phát hiện rủi ro trực tuyến',
          content: 'AI có thể hỗ trợ cảnh báo nhưng <b>không thay thế</b> việc kiểm tra của con người.',
          imageUrl: null,
          things: [
            { icon: '🤖', name: 'AI hỗ trợ cảnh báo', en: 'Giúp phát hiện dấu hiệu đáng ngờ' },
            { icon: '🧠', name: 'Em quyết định', en: 'Việc kiểm tra và quyết định an toàn vẫn thuộc về em' }
          ],
          remember: 'Không nhập mật khẩu, thông tin cá nhân hoặc dữ liệu riêng tư vào trang/công cụ đáng nghi.'
        },
        {
          type: 'info',
          final: true,
          scoreSections: [0, 1],
          topic: 'Hoàn thành',
          title: 'Chúc mừng em đã học xong Bài 18!',
          content: 'Em đã biết về Virus, Tường lửa, Cookies, Ad Blocker và phân biệt được Catfishing với Phishing.',
          imageUrl: null,
          remember: 'Muốn ôn lại các câu hỏi của bài, hãy vào trang <b>Ôn tập</b> để luyện thêm.'
        }
      ]
    }
  ]
};

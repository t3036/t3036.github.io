/* ============================================================
   DỮ LIỆU BÀI HỌC — BÀI 19, 20: QUYỀN RIÊNG TƯ
   (IC3 GS6 Spark — Level 3 — Chủ đề: Công dân số)
   ------------------------------------------------------------
   Dùng chung engine với các bài khác (lesson.js + lesson.css).
   Nguồn: PPTX gốc Bai19-20_QuyenRiengTu.pptx.
   Câu hỏi vận dụng nằm trong questions.js (dùng chung với ôn tập).
   ============================================================ */

const PASSWORDS = {
  s1: '',  // Phần 1 — Quyền công dân số
  s2: '',  // Phần 2 — Công dân số tích cực và tiêu cực
  s3: '',  // Phần 3 — Quyền riêng tư và ẩn danh
  s4: '',  // Phần 4 — Cài đặt quyền riêng tư
  s5: '',  // Phần 5 — Xác thực đa yếu tố
};

const LESSON = {
  id:    'bai19-20-quyen-rieng-tu',
  icon:  '🔐',
  title: 'Bài 19, 20 — Quyền riêng tư',

  sections: [
    {
      id: 's1',
      title: 'Khái niệm quyền công dân số',
      password: PASSWORDS.s1,
      slides: [
        {
          type: 'info',
          topic: 'Phần 1 · Quyền công dân số',
          title: 'Quyền công dân số (Digital Citizenship)',
          content: '<b>Quyền công dân số (Digital Citizenship)</b> là <b>quyền lợi và trách nhiệm</b> khi sử dụng công nghệ và các dịch vụ trực tuyến một cách <b>tích cực, an toàn, tôn trọng và có trách nhiệm</b>.',
          imageUrl: null,
          things: [
            { icon: '✅', name: 'Tích cực', en: 'Sử dụng công nghệ để học tập, giúp đỡ người khác' },
            { icon: '🛡️', name: 'An toàn', en: 'Bảo vệ bản thân và thông tin cá nhân' },
            { icon: '🤝', name: 'Tôn trọng, có trách nhiệm', en: 'Tôn trọng mọi người và chịu trách nhiệm về hành động của mình' }
          ]
        }
      ]
    },

    {
      id: 's2',
      title: 'Công dân số tích cực và tiêu cực',
      password: PASSWORDS.s2,
      slides: [
        {
          type: 'info',
          topic: 'Phần 2 · Công dân số tích cực',
          title: 'Hãy là một công dân số tích cực',
          content: 'Một công dân số tích cực thường:',
          imageUrl: null,
          things: [
            { icon: '🔒', name: 'Bảo vệ thông tin cá nhân', en: 'Họ tên, ngày sinh, địa chỉ,… của mình' },
            { icon: '🙈', name: 'Không tiết lộ thông tin của người khác', en: 'Giữ kín thông tin cá nhân của bạn bè' },
            { icon: '😊', name: 'Tôn trọng mọi người', en: 'Đối xử tôn trọng với tất cả mọi người' },
            { icon: '📣', name: 'Dùng mạng xã hội có trách nhiệm', en: 'Chia sẻ bài báo về thời tiết, đánh giá một nhà hàng' }
          ]
        },
        q('positiveExample', 'Vận dụng'),
        {
          type: 'info',
          topic: 'Phần 2 · Công dân số tích cực',
          title: 'Hãy là một công dân số tích cực (tiếp)',
          content: 'Ngoài ra, công dân số tích cực còn:',
          imageUrl: null,
          things: [
            { icon: '🎭', name: 'Hành động phù hợp khi ẩn danh', en: 'Ẩn danh để bảo vệ quyền riêng tư, không để làm điều sai trái' },
            { icon: '📚', name: 'Trích dẫn nguồn khi sử dụng', en: 'Ví dụ: trích dẫn nguồn của bức ảnh dùng cho áp phích kĩ thuật số' },
            { icon: '©️', name: 'Dùng sản phẩm có bản quyền', en: 'Sử dụng sản phẩm công nghệ hợp pháp' }
          ]
        },
        {
          type: 'info',
          topic: 'Phần 2 · Công dân số tiêu cực',
          title: 'Đừng là một công dân số tiêu cực',
          content: 'Những hành động của công dân số tiêu cực:',
          imageUrl: null,
          things: [
            { icon: '📢', name: 'Công khai tất cả thông tin cá nhân', en: 'Luôn công khai và cung cấp tất cả thông tin cá nhân trên mạng xã hội' },
            { icon: '😡', name: 'Bắt nạt người khác trên mạng', en: 'Bắt nạt trực tuyến gây tổn thương cho người khác' },
            { icon: '🕵️', name: 'Cố ý tiết lộ thông tin của người khác', en: 'Ví dụ: đưa địa chỉ nhà của bạn cho người lạ, đăng bảng điểm hoặc điểm thấp của bạn lên mạng' },
            { icon: '🆔', name: 'Mạo danh bạn bè', en: 'Dùng tên và ngày sinh của một người bạn làm tên hiển thị công khai của mình' }
          ]
        },
        q('nameDropdown', 'Vận dụng'),
        {
          type: 'info',
          topic: 'Phần 2 · Công dân số tiêu cực',
          title: 'Đừng là một công dân số tiêu cực (tiếp)',
          content: 'Những hành động không phù hợp khác:',
          imageUrl: null,
          things: [
            { icon: '📰', name: 'Dùng mạng xã hội thiếu trách nhiệm', en: 'Lan truyền thông tin chưa được xác thực; giả làm người khác để tăng người theo dõi; xem nội dung không phù hợp lứa tuổi' },
            { icon: '🎭', name: 'Lạm dụng ẩn danh', en: 'Dùng tài khoản ẩn danh để đăng thông tin sai lệch hoặc giả mạo' },
            { icon: '💿', name: 'Vi phạm bản quyền', en: 'Ví dụ: sao chép một trò chơi điện tử đã mua và đưa cho bạn' }
          ]
        },
        q('followDropdown', 'Vận dụng'),
        q('ageLimited', 'Vận dụng'),
        q('negativeExample', 'Vận dụng'),
        q('gameDropdown', 'Vận dụng'),
        {
          type: 'info',
          topic: 'Phần 2 · Nội dung không phù hợp',
          title: 'Khi thấy nội dung không phù hợp',
          content: 'Khi tham gia trực tuyến mà thấy nội dung không phù hợp, em hãy làm theo các bước:',
          imageUrl: null,
          things: [
            { icon: '⏹️', name: 'Dừng xem ngay', en: 'Dừng xem nội dung đó lập tức' },
            { icon: '🧑‍🏫', name: 'Nói với người lớn đáng tin cậy', en: 'Kể cho người lớn mà em tin tưởng' },
            { icon: '🚩', name: 'Báo cáo', en: 'Báo cho người kiểm duyệt trang Web để ngăn nội dung lan truyền' }
          ]
        },
        q('inappropriate', 'Vận dụng')
      ]
    },

    {
      id: 's3',
      title: 'Quyền riêng tư và ẩn danh',
      password: PASSWORDS.s3,
      slides: [
        {
          type: 'info',
          topic: 'Phần 3 · Quyền riêng tư',
          title: 'Quyền riêng tư (Privacy)',
          content: '<b>Quyền riêng tư (Privacy)</b> là quyền <b>kiểm soát và bảo vệ thông tin cá nhân</b> khi sử dụng thiết bị kĩ thuật số và Internet.',
          imageUrl: null
        },
        {
          type: 'info',
          topic: 'Phần 3 · Ẩn danh',
          title: 'Ẩn danh (Anonymity)',
          content: '<b>Ẩn danh (Anonymity)</b> là việc em tham gia hoạt động trực tuyến trên Internet <b>mà không tiết lộ thông tin cá nhân</b>, giúp bảo vệ sự riêng tư bằng cách che giấu danh tính thực của mình.',
          imageUrl: null
        },
        {
          type: 'info',
          topic: 'Phần 3 · Ẩn danh',
          title: 'Vì sao phải ẩn danh?',
          content: 'Em ẩn danh để:',
          imageUrl: null,
          things: [
            { icon: '🔐', name: 'Bảo vệ quyền riêng tư', en: 'Giữ kín thông tin cá nhân' },
            { icon: '👀', name: 'Tránh bị theo dõi', en: 'Hạn chế người khác theo dõi hoạt động của em' },
            { icon: '🙋', name: 'Không muốn tiết lộ danh tính thực', en: 'Đơn giản là em muốn giữ kín danh tính' }
          ]
        },
        {
          type: 'info',
          topic: 'Phần 3 · Ẩn danh',
          title: 'Ví dụ về ẩn danh',
          content: 'Một số cách ẩn danh khi trực tuyến:',
          imageUrl: null,
          things: [
            { icon: '🎮', name: 'Dùng bí danh (Alias)', en: 'Khi tham gia trò chơi trực tuyến' },
            { icon: '🕶️', name: 'Dùng chế độ riêng tư', en: 'Incognito / InPrivate của trình duyệt khi duyệt Web trên máy tính công cộng' },
            { icon: '🌐', name: 'Dùng dịch vụ không liên kết thông tin cá nhân', en: 'Các dịch vụ trực tuyến không gắn với thông tin cá nhân của em' }
          ]
        },
        q('termMatching', 'Vận dụng'),
        q('citizenTF', 'Vận dụng')
      ]
    },

    {
      id: 's4',
      title: 'Cài đặt quyền riêng tư',
      password: PASSWORDS.s4,
      slides: [
        {
          type: 'info',
          topic: 'Phần 4 · Cài đặt quyền riêng tư',
          title: 'Cài đặt quyền riêng tư',
          content: '<b>Cài đặt quyền riêng tư</b> là các tùy chọn mà em có thể thiết lập để <b>kiểm soát cách dữ liệu cá nhân</b> của em được thu thập và sử dụng trên Internet.',
          imageUrl: null,
          things: [
            { icon: '🛡️', name: 'Bảo vệ em', en: 'Giúp bảo vệ em khỏi những kẻ săn trẻ em trực tuyến' },
            { icon: '👥', name: 'Kiểm soát người xem', en: 'Giúp em kiểm soát ai có thể xem bài đăng của mình' }
          ]
        },
        q('privacySettingBlank', 'Vận dụng'),
        q('privacyImportance2', 'Vận dụng'),
        q('privacyImportance', 'Vận dụng'),
        {
          type: 'info',
          topic: 'Phần 4 · Cài đặt quyền riêng tư',
          title: 'Hai nơi để cài đặt quyền riêng tư',
          content: 'Em có thể thiết lập quyền riêng tư ở:',
          imageUrl: null,
          things: [
            { icon: '📱', name: 'Trên thiết bị', en: 'Chặn các kết nối như quyền truy cập và quản lí từ xa; kiểm soát quyền truy cập của ứng dụng đến Camera, vị trí, thông tin liên hệ, thông báo, Microphone,…' },
            { icon: '👤', name: 'Trên tài khoản trực tuyến', en: 'Giới hạn người có thể xem thông tin cá nhân, bài viết, hình ảnh; thiết lập người có thể gửi lời mời kết bạn hoặc theo dõi em,…' }
          ]
        },
        q('locationSetting', 'Vận dụng'),
        q('protectPost', 'Vận dụng'),
        q('controlViewers', 'Vận dụng'),
        {
          type: 'info',
          topic: 'Phần 4 · Bảo vệ quyền riêng tư',
          title: 'Chúng ta bảo vệ quyền riêng tư như thế nào?',
          content: 'Một số cách bảo vệ quyền riêng tư:',
          imageUrl: null,
          things: [
            { icon: '🧹', name: 'Xóa History, Cookies,…', en: 'Xóa lịch sử, Cookies trên trình duyệt Web' },
            { icon: '🕶️', name: 'Duyệt Web riêng tư', en: 'Sử dụng chế độ duyệt Web riêng tư' },
            { icon: '🔑', name: 'Giữ kín mật khẩu', en: 'Không tiết lộ mật khẩu và thay đổi mật khẩu thường xuyên hoặc theo định kì' },
            { icon: '📲', name: 'Xác thực đa yếu tố', en: 'Giúp bảo vệ các tài khoản hoặc thiết bị' },
            { icon: '🚷', name: 'Cài đặt bảo mật hạn chế', en: 'Chặn người lạ thấy bài đăng của em' }
          ]
        },
        q('hideLocation', 'Vận dụng')
      ]
    },

    {
      id: 's5',
      title: 'Khái niệm xác thực đa yếu tố',
      password: PASSWORDS.s5,
      slides: [
        {
          type: 'info',
          topic: 'Phần 5 · Xác thực đa yếu tố',
          title: 'Xác thực đa yếu tố (MFA)',
          content: '<b>Xác thực đa yếu tố (Multi-factor Authentication - MFA)</b> là hệ thống bảo mật yêu cầu <b>nhiều hơn một phương thức xác thực</b>, dùng các thông tin độc lập khác nhau để bảo vệ tài khoản.',
          imageUrl: null,
          things: [
            { icon: '🔑', name: 'Mật khẩu', en: 'Yếu tố xác thực thứ nhất' },
            { icon: '👆', name: 'Sinh trắc học', en: 'Dấu vân tay,… là yếu tố xác thực bổ sung' },
            { icon: '🔢', name: 'Mã xác thực một lần (OTP)', en: 'Mã dùng một lần để chứng minh em là chủ tài khoản' }
          ],
          remember: 'MFA giúp ngăn chặn việc truy cập trái phép vào tài khoản của em.'
        },
        q('privacyTF', 'Vận dụng'),
        {
          type: 'info',
          final: true,
          scoreSections: [1, 2, 3, 4],
          topic: 'Hoàn thành',
          title: 'Chúc mừng em đã học xong Bài 19, 20!',
          content: 'Em đã biết về quyền công dân số, quyền riêng tư, ẩn danh, cài đặt quyền riêng tư và xác thực đa yếu tố.',
          imageUrl: null,
          remember: 'Muốn ôn lại các câu hỏi của bài, hãy vào trang <b>Ôn tập</b> để luyện thêm.'
        }
      ]
    }
  ]
};

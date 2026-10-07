/* ============================================================
   DỮ LIỆU BÀI HỌC — BÀI 2 — CÁC HỆ ĐIỀU HÀNH THÔNG DỤNG
   (chuyển sang cấu trúc LESSON.sections dùng chung engine lesson.js)
   ============================================================ */

const PASSWORDS = {
  s1: '',  // Phần 1 — Máy tính
  s2: '',  // Phần 2 — Điện thoại
  s3: '',  // Phần 3 — Phiên bản và Ấn bản
  s4: ''   // Phần 4 — HĐH Khác & AI
};

const LESSON = {
  id:    'l2-bai2-hdh-thong-dung',
  icon:  '📱',
  title: 'Bài 2 — Các hệ điều hành thông dụng',

  sections: [
    {
      id: 's1',
      title: 'Máy tính',
      password: PASSWORDS.s1,
      slides: [
        {
          type: 'info',
          topic: 'Phần 1 · Máy tính',
          title: 'Hệ điều hành dành cho máy tính',
          content: 'Hai hệ điều hành phổ biến nhất trên máy tính là <b>Windows</b> và <b>macOS</b>.',
          imageUrl: null,
          things: [
            { icon: '🪟', name: 'Windows', en: 'Do Microsoft phát hành' },
            { icon: '🍏', name: 'macOS', en: 'Do Apple phát hành' }
          ],
          remember: 'Windows rất phổ biến trên nhiều loại máy, còn macOS chỉ chạy trên các dòng máy Mac (iMac, MacBook) của Apple.'
        }
      ]
    },
    {
      id: 's2',
      title: 'Điện thoại',
      password: PASSWORDS.s2,
      slides: [
        {
          type: 'info',
          topic: 'Phần 2 · Điện thoại',
          title: 'Hệ điều hành dành cho điện thoại',
          content: 'Trên điện thoại thông minh, hai hệ điều hành "thống trị" là <b>iOS</b> và <b>Android</b>.',
          imageUrl: null,
          things: [
            { icon: '📱', name: 'iOS (Apple)', en: 'Chạy trên iPhone, iPad, mượt mà' },
            { icon: '🤖', name: 'Android (Google)', en: 'Phổ biến nhất, linh hoạt, nhiều hãng dùng' }
          ],
          remember: 'Điện thoại Samsung, Xiaomi, Oppo thường dùng <b>Android</b>. Điện thoại iPhone thì luôn dùng <b>iOS</b>.'
        },
        {
          type: 'quiz_matching',
          topic: 'Vận dụng',
          question: 'Hãy nối Hệ điều hành với công ty phát hành ra nó.',
          pairs: [
            { icon: '🪟', left: 'Windows', right: 'Microsoft' },
            { icon: '🍏', left: 'macOS và iOS', right: 'Apple' },
            { icon: '🤖', left: 'Android', right: 'Google' }
          ],
          hint: 'Windows là của ai? Ai làm ra iPhone?',
          explain: 'Windows của Microsoft, macOS/iOS của Apple, Android của Google.'
        }
      ]
    },
    {
      id: 's3',
      title: 'Phiên bản và Ấn bản',
      password: PASSWORDS.s3,
      slides: [
        {
          type: 'info',
          topic: 'Phần 3 · Phiên bản và Ấn bản',
          title: 'Phiên bản (Version) và Ấn bản (Edition)',
          content: 'Một hệ điều hành thường có nhiều <b>phiên bản</b> (cũ/mới) và <b>ấn bản</b> (dành cho các nhóm người dùng khác nhau).',
          imageUrl: null,
          things: [
            { icon: '🔄', name: 'Phiên bản (Version)', en: 'Windows 10, Windows 11...' },
            { icon: '🏠', name: 'Ấn bản Home', en: 'Dành cho cá nhân' },
            { icon: '🏢', name: 'Ấn bản Pro', en: 'Dành cho doanh nghiệp' },
            { icon: '🏫', name: 'Ấn bản Education', en: 'Dành cho trường học' }
          ],
          remember: 'Ví dụ: <b>Windows 11 Home</b> nghĩa là Hệ điều hành Windows, phiên bản 11, ấn bản dành cho cá nhân.'
        },
        {
          type: 'quiz_dropdown',
          topic: 'Vận dụng',
          question: 'Windows 10 và Windows 11 là các ___ khác nhau. Còn Home và Pro là các ___ khác nhau.',
          blanks: [
            { options: ['thiết bị', 'phiên bản', 'phần cứng'], correctAnswer: 1 },
            { options: ['ấn bản', 'công ty', 'điện thoại'], correctAnswer: 0 }
          ],
          hint: 'Số (10, 11) chỉ độ mới/cũ, chữ (Home, Pro) chỉ đối tượng sử dụng.',
          explain: '10 và 11 là các phiên bản (Version). Home và Pro là các ấn bản (Edition).'
        }
      ]
    },
    {
      id: 's4',
      title: 'HĐH Khác & AI',
      password: PASSWORDS.s4,
      slides: [
        {
          type: 'info',
          topic: 'Phần 4 · HĐH Khác & AI',
          title: 'Các hệ điều hành khác và Trợ lí AI',
          content: 'Ngoài ra còn có <b>ChromeOS</b> (nhanh, làm việc trực tuyến) và <b>Linux</b> (mã nguồn mở, cho lập trình viên). Ngày nay, các HĐH đều tích hợp trí tuệ nhân tạo (AI).',
          imageUrl: null,
          things: [
            { icon: '💡', name: 'Windows', en: 'Tích hợp AI Copilot' },
            { icon: '🗣️', name: 'macOS / iOS', en: 'Tích hợp Siri, Apple Intelligence' },
            { icon: '✨', name: 'Android / ChromeOS', en: 'Tích hợp Google Assistant, Gemini' }
          ],
          remember: 'AI giúp tìm kiếm, viết, dịch và điều khiển máy tính dễ dàng hơn.'
        },
        {
          type: 'info',
          final: true,
          scoreSections: [0, 1, 2, 3],
          topic: 'Hoàn thành',
          title: 'Em đã học xong bài Các HĐH thông dụng!',
          content: 'Bây giờ em đã biết tên các Hệ điều hành quen thuộc trên máy tính và điện thoại, phân biệt được phiên bản và ấn bản, cũng như biết tên các trợ lí AI.',
          imageUrl: null,
          remember: 'Lần tới dùng máy tính hay điện thoại, em hãy thử tìm xem thiết bị đó đang chạy Hệ điều hành nào nhé!'
        }
      ]
    }
  ]
};

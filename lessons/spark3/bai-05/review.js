/* ============================================================
   DỮ LIỆU TRANG ÔN TẬP — Bài 5 — URL: Bộ định vị tài nguyên thống nhất
   (gom các câu hỏi của bai-05.js; dùng chung engine lesson.js)
   ============================================================ */

const LESSON = {
  id:    'l3-bai5-on-tap',
  icon:  '🔗',
  title: 'Ôn tập Bài 5 — URL: Bộ định vị tài nguyên thống nhất',

  sections: [
    {
      id: 's1',
      title: 'Ôn tập',
      slides: [
        {
          type: 'quiz_single',
          topic: 'Ôn tập',
          question: 'URL (Uniform Resource Locator) là gì?',
          options: [
            'Tác giả của một trang Web',
            'Nhà phát hành của một trang Web',
            'Địa chỉ của một trang Web',
            'Tên của một trang Web'
          ],
          correctAnswer: 2,
          hint: 'Nó đóng vai trò như "số nhà" trên môi trường mạng.',
          explain: 'URL là địa chỉ duy nhất để truy cập đến một tài nguyên (ví dụ: trang Web) trên Internet.'
        },
        {
          type: 'quiz_single',
          topic: 'Ôn tập',
          question: 'Giao thức nào đảm bảo kết nối an toàn và được mã hóa giữa trình duyệt và trang Web?',
          options: [
            'HTTP',
            'FTP',
            'SMTP',
            'HTTPS'
          ],
          correctAnswer: 3,
          hint: 'Chữ "S" ở cuối viết tắt của từ "Secure" (Bảo mật).',
          explain: 'HTTPS (Hypertext Transfer Protocol Secure) giúp mã hóa dữ liệu, đảm bảo an toàn khi truyền tải trên Internet.'
        },
        {
          type: 'quiz_single',
          topic: 'Ôn tập',
          question: 'Tùy chọn nào dưới đây KHÔNG phải là một phần của URL?',
          options: [
            'Địa chỉ IP (IP Address)',
            'Tên miền (Domain Name)',
            'Giao thức (Protocol)',
            'Tên miền phụ (Subdomain)'
          ],
          correctAnswer: 0,
          hint: 'URL là chữ (như google.com), còn cái kia là số (như 192.168...).',
          explain: 'Địa chỉ IP là một dãy số (định danh thiết bị) và không nằm trực tiếp trong một chuỗi địa chỉ URL mà con người thường đọc.'
        },
        {
          type: 'quiz_dropdown',
          topic: 'Ôn tập',
          question: 'Em định quyên góp cho một quỹ từ thiện, đuôi trang web chính thức thường là ___. Nếu tìm thông tin du lịch đáng tin cậy của nhà nước thì chọn ___.',
          blanks: [
            { options: ['.edu', '.com', '.org', '.net'], correctAnswer: 2 },
            { options: ['.com', '.gov', '.xyz', '.net'], correctAnswer: 1 }
          ],
          hint: '.org dành cho tổ chức phi lợi nhuận. .gov dành cho chính phủ.',
          explain: 'Quỹ từ thiện (phi lợi nhuận) dùng đuôi .org. Thông tin chính thống từ nhà nước dùng đuôi .gov.'
        },
        {
          type: 'quiz_single',
          topic: 'Ôn tập',
          question: 'Địa chỉ URL nào sau đây có định dạng đúng?',
          options: [
            'http://www.companypro/test',
            'https://www.companypro.net/test',
            'https://www.companypro/net/test',
            'https://.companypro.net/test'
          ],
          correctAnswer: 1,
          hint: 'Cần có giao thức (https://), tên miền phụ (www.), tên miền chính và Tên miền cấp cao nhất (đuôi .net).',
          explain: 'Đáp án B có đầy đủ cấu trúc: Giao thức (https://) + Tên miền phụ (www.) + Tên miền chính (companypro) + Đuôi (.net) + Đường dẫn (/test).'
        },
        {
          type: 'info',
          final: true,
          topic: 'Hoàn thành',
          title: 'Em đã ôn tập xong Bài 5!',
          content: 'Xem lại điểm số bên dưới. Nếu muốn luyện thêm lần nữa, bấm nút làm lại.',
          imageUrl: null
        }
    ]
    }
  ]
};

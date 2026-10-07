/* ============================================================
   DỮ LIỆU TRANG ÔN TẬP — BÀI 1 — GIỚI THIỆU VỀ HỆ ĐIỀU HÀNH
   (gom các câu hỏi của bai-01.js; dùng chung engine lesson.js)
   ============================================================ */

const PASSWORDS = {
  s1: ''   // Ôn tập
};

const LESSON = {
  id:    'l2-bai1-hdh-on-tap',
  icon:  '🖥️',
  title: 'Ôn tập Bài 1 — Giới thiệu về Hệ điều hành',

  sections: [
    {
      id: 's1',
      title: 'Ôn tập',
      password: PASSWORDS.s1,
      slides: [
        {
          type: 'quiz_single',
          topic: 'Ôn tập',
          question: 'Hệ điều hành (OS) là gì?',
          options: [
            'Khu vực làm việc của màn hình máy tính',
            'Thiết bị vật lí lưu trữ thông tin',
            'Phần mềm hỗ trợ các chức năng cơ bản của máy tính',
            'Một cái gì đó đi vào máy tính'
          ],
          correctAnswer: 2,
          hint: 'Hệ điều hành không phải là thiết bị cầm nắm được.',
          explain: 'Hệ điều hành là phần mềm quản lí và hỗ trợ các chức năng cơ bản của máy tính.'
        },
        {
          type: 'quiz_single',
          topic: 'Ôn tập',
          question: 'Loại phần mềm hệ thống nào quản lí tất cả các phần mềm và phần cứng trên máy tính?',
          options: [
            'Hệ điều hành (OS)',
            'Trình điều khiển thiết bị (Driver)',
            'Phần mềm tiện ích (Utility)',
            'Phần mềm chống virus'
          ],
          correctAnswer: 0,
          hint: 'Đây là nội dung chính của bài học hôm nay.',
          explain: 'Hệ điều hành (OS) chính là phần mềm quản lí mọi hoạt động của phần mềm và phần cứng.'
        },
        {
          type: 'quiz_single',
          topic: 'Ôn tập',
          question: 'Chương trình nào sau đây phải được cài đặt để hệ điều hành có thể hiểu được một máy in mới?',
          options: [
            'Driver',
            'Wizard',
            'Firewall',
            'Installer'
          ],
          correctAnswer: 0,
          hint: 'Nó giống như một người phiên dịch giữa máy tính và thiết bị mới.',
          explain: 'Cần cài đặt <b>Driver</b> (Trình điều khiển) để hệ điều hành giao tiếp được với thiết bị mới.'
        },
        {
          type: 'info',
          final: true,
          topic: 'Hoàn thành',
          title: 'Em đã ôn tập xong Bài 1!',
          content: 'Xem lại điểm số bên dưới. Nếu muốn luyện thêm lần nữa, bấm nút làm lại.',
          imageUrl: null
        }
    ]
    }
  ]
};

/* ============================================================
   DỮ LIỆU TRANG ÔN TẬP — BÀI 2 — CÁC HỆ ĐIỀU HÀNH THÔNG DỤNG
   (gom các câu hỏi của bai-02.js; dùng chung engine lesson.js)
   ============================================================ */

const LESSON = {
  id:    'l2-bai2-hdh-thong-dung-on-tap',
  icon:  '📱',
  title: 'Ôn tập Bài 2 — Các hệ điều hành thông dụng',

  sections: [
    {
      id: 's1',
      title: 'Ôn tập',
      slides: [
        {
          type: 'quiz_matching',
          topic: 'Ôn tập',
          question: 'Hãy nối Hệ điều hành với công ty phát hành ra nó.',
          pairs: [
            { icon: '🪟', left: 'Windows', right: 'Microsoft' },
            { icon: '🍏', left: 'macOS và iOS', right: 'Apple' },
            { icon: '🤖', left: 'Android', right: 'Google' }
          ],
          hint: 'Windows là của ai? Ai làm ra iPhone?',
          explain: 'Windows của Microsoft, macOS/iOS của Apple, Android của Google.'
        },
        {
          type: 'quiz_dropdown',
          topic: 'Ôn tập',
          question: 'Windows 10 và Windows 11 là các ___ khác nhau. Còn Home và Pro là các ___ khác nhau.',
          blanks: [
            { options: ['thiết bị', 'phiên bản', 'phần cứng'], correctAnswer: 1 },
            { options: ['ấn bản', 'công ty', 'điện thoại'], correctAnswer: 0 }
          ],
          hint: 'Số (10, 11) chỉ độ mới/cũ, chữ (Home, Pro) chỉ đối tượng sử dụng.',
          explain: '10 và 11 là các phiên bản (Version). Home và Pro là các ấn bản (Edition).'
        },
        {
          type: 'info',
          final: true,
          topic: 'Hoàn thành',
          title: 'Em đã ôn tập xong Bài 2!',
          content: 'Xem lại điểm số bên dưới. Nếu muốn luyện thêm lần nữa, bấm nút làm lại.',
          imageUrl: null
        }
    ]
    }
  ]
};

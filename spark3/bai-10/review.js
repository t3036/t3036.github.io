/* ============================================================
   DỮ LIỆU TRANG ÔN TẬP — Bài 10 — Đánh giá thông tin
   (tách từ phần Ôn tập của bai-10.js; dùng chung engine lesson.js)
   ============================================================ */

const PASSWORDS = {
  s3: ''    // Phần 3 — Ôn tập
};

const LESSON = {
  id:    'bai10-danhgia-on-tap',
  icon:  '🔎',
  title: 'Ôn tập Bài 10 — Đánh giá thông tin',

  sections: [
    /* ============================================================
       PHẦN 3 — Ôn tập (mật khẩu: DGTT03)
       ------------------------------------------------------------
       PDF gốc chỉ có duy nhất 1 bài luyện tập trong toàn bài, nên
       phần Ôn tập ở đây cũng chỉ có 1 câu — đúng theo tài liệu gốc,
       không phải thiếu sót.
       ============================================================ */
    {
      id: 's3',
      title: 'Ôn tập',
      password: PASSWORDS.s3,
      slides: [
        /* Slide 6 (Trang 6 / 7) */
        {
          type: 'quiz_matching',
          topic: 'Ôn tập',
          question: 'Em hãy di chuyển từng thuật ngữ từ danh sách ở bên phải sang phát biểu tương ứng ở bên trái.',
          pairs: [
            { icon: '🛡️', left: 'Thông tin có thể tin được hay đáng tin cậy như thế nào', right: 'Credibility (Sự uy tín)' },
            { icon: '🔍', left: 'Mức độ áp dụng hoặc hữu ích của thông tin, kết quả tìm kiếm hoặc nội dung', right: 'Relevance (Mức độ liên quan)' }
          ],
          hint: '"Tin được hay không" là Độ tin cậy; "Hữu ích/áp dụng được" là Mức độ liên quan.',
          explain: 'Credibility (Độ tin cậy) nói về việc thông tin có đáng tin hay không. Relevance (Mức độ liên quan) nói về việc thông tin có hữu ích/áp dụng được hay không.'
        },

        /* Slide 7 — slide hoàn thành */
        {
          type: 'info',
          final: true,
          topic: 'Hoàn thành',
          title: 'Em đã ôn tập xong Bài 10!',
          content: 'Xem lại điểm số bên dưới. Nếu muốn luyện lại, bấm nút làm lại.',
          imageUrl: null
        }
      ]
    }
  ]
};

/* ============================================================
   DỮ LIỆU TRANG ÔN TẬP — Bài 11 — Quan điểm và thiên kiến
   (tách từ phần Ôn tập của bai-11.js; dùng chung engine lesson.js)
   ============================================================ */

const LESSON = {
  id:    'bai11-quandiem-on-tap',
  icon:  '⚖️',
  title: 'Ôn tập Bài 11 — Quan điểm và thiên kiến',

  sections: [
    /* ============================================================
       PHẦN 4 — Ôn tập
       ------------------------------------------------------------
       Gom lại TẤT CẢ câu hỏi (bỏ hết slide lý thuyết) từ 3 phần
       trên để học sinh luyện lại. Đáp án làm ở đây độc lập hoàn
       toàn với đáp án đã làm ở phần gốc.
       ============================================================ */
    {
      id: 's4',
      title: 'Ôn tập',
      slides: [
        /* Slide 10 (Trang 10 / 14) */
        {
          type: 'quiz_dropdown',
          topic: 'Ôn tập',
          question: 'Em nhận được tin nhắn sau: "Áo khoác đang được giảm giá 40%. Đặt hàng ngay hôm nay để được giao hàng miễn phí. Chúng tôi có đủ mọi kích cỡ." Với mỗi câu trong tin nhắn này, em hãy chọn Có nếu có thiên kiến hoặc Không nếu không có: Áo khoác đang được giảm giá 40%. ___ Đặt hàng ngay hôm nay để được giao hàng miễn phí. ___ Chúng tôi có đủ mọi kích cỡ. ___',
          blanks: [
            { options: ['Có', 'Không'], correctAnswer: 1 },
            { options: ['Có', 'Không'], correctAnswer: 1 },
            { options: ['Có', 'Không'], correctAnswer: 1 }
          ],
          hint: 'Cả 3 câu đều là thông tin/ưu đãi cụ thể của cửa hàng — không đưa ra nhận định hay kết luận thiếu căn cứ nào.',
          explain: 'Cả 3 câu đều là những thông tin thực tế về sản phẩm/dịch vụ, không chứa nhận định cá nhân hay kết luận thiếu căn cứ — nên không có thiên kiến.'
        },

        /* Slide 11 (Trang 11 / 14) */
        {
          type: 'quiz_dropdown',
          topic: 'Ôn tập',
          question: 'Em nhận được Email sau: "Orson D đang tranh cử cho chức chủ tịch của câu lạc bộ khoa học. Tớ biết bạn ấy ghét khoa học vì bạn ấy chẳng bao giờ tham gia hội chợ khoa học nào cả. Bạn ấy nhận được một điểm B ở bài kiểm tra tuần trước." Với mỗi câu phát biểu trích từ Email này, em hãy chọn Có nếu có thiên kiến hoặc Không nếu không phải: Orson D đang tranh cử cho chức chủ tịch của câu lạc bộ khoa học. ___ Tớ biết bạn ấy ghét khoa học vì bạn ấy chẳng bao giờ tham gia hội chợ khoa học nào cả. ___ Bạn ấy nhận được một điểm B ở bài kiểm tra tuần trước. ___',
          blanks: [
            { options: ['Có', 'Không'], correctAnswer: 1 },
            { options: ['Có', 'Không'], correctAnswer: 0 },
            { options: ['Có', 'Không'], correctAnswer: 1 }
          ],
          hint: 'Câu nào là sự kiện có thể kiểm chứng (tranh cử, điểm số)? Câu nào là suy diễn cá nhân về cảm xúc của người khác?',
          explain: '"Tranh cử chủ tịch" và "nhận điểm B" đều là sự kiện có thể kiểm chứng (Không thiên kiến). "Biết bạn ấy ghét khoa học vì không tham gia hội chợ" là suy diễn vội vàng, thiếu căn cứ (Có thiên kiến).'
        },

        /* Slide 12 (Trang 12 / 14) */
        {
          type: 'quiz_single',
          topic: 'Ôn tập',
          question: 'Quan điểm (Perspective) là gì?',
          options: [
            'Cách ai đó nhìn hoặc hiểu điều gì đó dựa trên kinh nghiệm, kiến thức và niềm tin của chính họ.',
            'Một hình thức bảo vệ pháp lí mang lại cho người sáng tạo tác phẩm gốc quyền độc quyền kiểm soát cách tác phẩm của họ được sử dụng và phân phối.',
            'Mức độ áp dụng hoặc hữu ích của thông tin, kết quả tìm kiếm hoặc nội dung.',
            'Thông tin có thể tin được hay đáng tin cậy như thế nào.'
          ],
          correctAnswer: 0,
          hint: '3 lựa chọn còn lại là định nghĩa của các khái niệm khác (bản quyền, mức độ liên quan, độ tin cậy), không phải "quan điểm".',
          explain: 'Quan điểm là cách nhìn nhận/hiểu của riêng 1 người, dựa trên kinh nghiệm, kiến thức và niềm tin của họ.'
        },

        /* Slide 13 (Trang 13 / 14) */
        {
          type: 'quiz_dropdown',
          topic: 'Ôn tập',
          question: 'Em đọc được bài đăng sau trên mạng xã hội: "Biến đổi khí hậu chắc chắn là không có thật vì Orson bỏ phiếu chống lại chuyện đó. Mùa hè năm nay mát hơn mùa hè năm ngoái. Hầu hết những người tin vào biến đổi khí hậu là những người đưa ra thuyết âm mưu." Với mỗi câu phát biểu, em hãy chọn Có nếu có thiên kiến hoặc Không nếu không phải: Biến đổi khí hậu chắc chắn là không có thật vì Orson bỏ phiếu chống lại chuyện đó. ___ Mùa hè năm nay mát hơn mùa hè năm ngoái. ___ Hầu hết những người tin vào biến đổi khí hậu là những người đưa ra thuyết âm mưu. ___',
          blanks: [
            { options: ['Có', 'Không'], correctAnswer: 0 },
            { options: ['Có', 'Không'], correctAnswer: 1 },
            { options: ['Có', 'Không'], correctAnswer: 0 }
          ],
          hint: '1 ý kiến cá nhân (bỏ phiếu) không phải là bằng chứng khoa học. "Hầu hết những người tin..." là quy chụp cả 1 nhóm người.',
          explain: '"Mùa hè năm nay mát hơn" chỉ là 1 quan sát thời tiết (Không thiên kiến). Hai câu còn lại đều lấy ý kiến cá nhân làm bằng chứng và quy chụp cả nhóm người (Có thiên kiến).'
        },

        /* Slide 14 — slide hoàn thành */
        {
          type: 'info',
          final: true,
          topic: 'Hoàn thành',
          title: 'Em đã ôn tập xong Bài 11!',
          content: 'Xem lại điểm số bên dưới. Nếu muốn luyện thêm lần nữa, bấm nút làm lại.',
          imageUrl: null
        }
      ]
    }
  ]
};

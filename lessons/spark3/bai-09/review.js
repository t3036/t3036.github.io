/* ============================================================
   DỮ LIỆU TRANG ÔN TẬP — Bài 9 — Dữ liệu, thông tin và kiến thức
   (tách từ phần Ôn tập của bai-09.js; dùng chung engine lesson.js)
   ============================================================ */

const LESSON = {
  id:    'bai9-dulieu-on-tap',
  icon:  '🧠',
  title: 'Ôn tập Bài 9 — Dữ liệu, thông tin và kiến thức',

  sections: [
    /* ============================================================
       PHẦN 3 — Ôn tập
       ------------------------------------------------------------
       Gom lại TẤT CẢ câu hỏi (bỏ hết slide lý thuyết) từ 2 phần
       trên để học sinh luyện lại. Đáp án làm ở đây độc lập hoàn
       toàn với đáp án đã làm ở phần gốc.
       ============================================================ */
    {
      id: 's3',
      title: 'Ôn tập',
      slides: [
        /* Slide 11 (Trang 11 / 17) */
        {
          type: 'quiz_matching',
          topic: 'Ôn tập',
          question: 'Em nối từng thuật ngữ từ danh sách ở bên trái sang phát biểu tương ứng ở bên phải.',
          pairs: [
            { icon: '🔢', left: 'Dữ liệu', right: 'Dữ liệu thô, chưa được phân tích và sắp xếp.' },
            { icon: '📊', left: 'Thông tin', right: 'Dữ liệu được chuẩn bị, đã được xử lý, phân tích và lập cấu trúc.' },
            { icon: '💡', left: 'Kiến thức', right: 'Dữ liệu được thu thập về dữ kiện hoặc một người để giúp đưa ra các quyết định đủ thông tin.' }
          ],
          hint: '"Chưa xử lí" là Dữ liệu; "đã xử lí, có cấu trúc" là Thông tin; "giúp ra quyết định" là Kiến thức.',
          explain: 'Dữ liệu = thô, chưa xử lí. Thông tin = đã xử lí, có cấu trúc. Kiến thức = đủ sâu sắc để giúp đưa ra quyết định đúng đắn.'
        },

        /* Slide 12 (Trang 12 / 17) */
        {
          type: 'quiz_matching',
          topic: 'Ôn tập',
          question: 'Em nối từng thuật ngữ từ danh sách ở bên trái sang phát biểu tương ứng ở bên phải.',
          pairs: [
            { icon: '🔢', left: 'Dữ liệu', right: 'Màu trắng' },
            { icon: '📊', left: 'Thông tin', right: 'Áo khoác có màu trắng' },
            { icon: '💡', left: 'Kiến thức', right: 'Áo khoác màu trắng thường không hấp thụ nhiệt nhiều như các màu sậm hơn.' }
          ],
          hint: 'Cùng logic với ví dụ "chiếc nón" đã học — chỉ đổi thành "áo khoác".',
          explain: 'Dữ liệu = "Màu trắng". Thông tin = "Áo khoác có màu trắng". Kiến thức = giải thích được vì sao (không hấp thụ nhiệt).'
        },

        /* Slide 13 (Trang 13 / 17) */
        {
          type: 'quiz_single',
          topic: 'Ôn tập',
          question: 'Em hãy cho biết, tùy chọn nào trả lời cho các câu hỏi "vì sao" và "như thế nào"?',
          options: ['Kiến thức', 'Dữ liệu', 'Cộng tác', 'Thông tin'],
          correctAnswer: 0,
          hint: 'Đây là mức độ hiểu biết SÂU nhất trong 3 khái niệm dữ liệu/thông tin/kiến thức.',
          explain: 'Kiến thức là sự hiểu biết sâu sắc, trả lời được câu hỏi "vì sao" và "như thế nào".'
        },

        /* Slide 14 (Trang 14 / 17) */
        {
          type: 'quiz_matching',
          topic: 'Ôn tập',
          question: 'Em hãy di chuyển từng thuật ngữ từ danh sách ở bên phải sang phát biểu tương ứng ở bên trái.',
          pairs: [
            { icon: '🗂️', left: 'Việc thu thập, quản lí và phân phối thông tin từ một hoặc nhiều nguồn', right: 'Information Management (Quản lí thông tin)' },
            { icon: '🔢', left: 'Các sự kiện và số liệu thô được thu thập hoặc ghi nhận lại', right: 'Data (Dữ liệu)' },
            { icon: '📊', left: 'Kết quả của việc xử lí và tổ chức dữ liệu để làm cho dữ liệu có ý nghĩa và hữu ích', right: 'Information (Thông tin)' },
            { icon: '💡', left: 'Sự hiểu biết và hiểu biết sâu sắc thu thập được từ việc áp dụng ý nghĩa vào thông tin', right: 'Knowledge (Kiến thức)' }
          ],
          hint: '"Thu thập/ghi nhận thô" là Dữ liệu; "xử lí để có ý nghĩa" là Thông tin; "hiểu biết sâu sắc" là Kiến thức; "thu thập-quản lí-phân phối" là Quản lí thông tin.',
          explain: 'Data = sự kiện/số liệu thô. Information = dữ liệu đã xử lí có ý nghĩa. Knowledge = hiểu biết sâu sắc từ thông tin. Information Management = việc thu thập, quản lí, phân phối thông tin.'
        },

        /* Slide 15 (Trang 15 / 17) */
        {
          type: 'quiz_single',
          topic: 'Ôn tập',
          question: 'Dữ liệu (Data) là gì?',
          options: [
            'Số, văn bản, hình ảnh,... thô chưa được phân tích và sắp xếp.',
            'Kết quả của việc xử lý, phân tích và tổ chức dữ liệu.',
            'Sự hiểu biết hình thành từ việc áp dụng ý nghĩa vào thông tin.',
            'Thông tin đã được chuyển đổi thành kiến thức.'
          ],
          correctAnswer: 0,
          hint: 'Dữ liệu là "nguyên liệu thô" ban đầu, chưa qua xử lí gì cả.',
          explain: 'Dữ liệu là số, văn bản, hình ảnh... ở dạng thô, chưa được phân tích hay sắp xếp.'
        },

        /* Slide 16 (Trang 16 / 17) */
        {
          type: 'quiz_single',
          topic: 'Ôn tập',
          question: 'Em hãy cho biết, tùy chọn nào sau đây là ví dụ về kiến thức?',
          options: ['Tên các chòm sao', 'Sự hiểu biết vì sao có mưa', 'Màu sắc của cầu vồng', 'Số cơn bão trong một năm'],
          correctAnswer: 1,
          hint: 'Ba lựa chọn còn lại chỉ là dữ kiện/số liệu — chưa giải thích được "vì sao".',
          explain: 'Tên chòm sao, màu cầu vồng, số cơn bão đều chỉ là dữ kiện. "Hiểu biết vì sao có mưa" mới là kiến thức vì giải thích được nguyên nhân.'
        },

        /* Slide 17 — slide hoàn thành */
        {
          type: 'info',
          final: true,
          topic: 'Hoàn thành',
          title: 'Em đã ôn tập xong Bài 9!',
          content: 'Xem lại điểm số bên dưới. Nếu muốn luyện thêm lần nữa, bấm nút làm lại.',
          imageUrl: null
        }
      ]
    }
  ]
};

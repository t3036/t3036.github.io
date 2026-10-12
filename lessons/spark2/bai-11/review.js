/* ============================================================
   DỮ LIỆU TRANG ÔN TẬP — Bài 11 — Phân loại nội dung trực tuyến
   (gộp các câu hỏi của bài học; dùng chung engine lesson.js)
   ============================================================ */

const LESSON = {
  "id": "bai11-phanloai-on-tap",
  "icon": "🗂️",
  "title": "Ôn tập Bài 11 — Phân loại nội dung trực tuyến",
  "sections": [
    {
      "id": "s4",
      "title": "Ôn tập",
      "slides": [
        {
          "type": "quiz_single",
          "topic": "Ôn tập",
          "question": "Giáo viên yêu cầu em tìm hiểu về rừng mưa nhiệt đới và chia sẻ những điều học được với bạn cùng lớp thông qua một bài trình chiếu. Mục đích của bài trình chiếu này là gì?",
          "options": [
            "Để cung cấp thông tin",
            "Để giải trí",
            "Để giao tiếp",
            "Để thuyết phục"
          ],
          "correctAnswer": 0,
          "hint": "Bài trình chiếu chia sẻ kiến thức đã tìm hiểu được.",
          "explain": "Bài trình chiếu về rừng mưa nhiệt đới nhằm chia sẻ kiến thức cho bạn cùng lớp, nên mục đích là cung cấp thông tin."
        },
        {
          "type": "quiz_single",
          "topic": "Ôn tập",
          "question": "Em hãy cho biết, trang Web cho phép chơi Game trực tuyến miễn phí là loại trang Web gì?",
          "options": [
            "Giải trí",
            "Giao tiếp",
            "Thông tin",
            "Mạng xã hội"
          ],
          "correctAnswer": 0,
          "hint": "Chơi game là để vui chơi, thư giãn.",
          "explain": "Trò chơi trực tuyến được tạo ra để mang lại trải nghiệm thú vị, nên thuộc nhóm Giải trí."
        },
        {
          "type": "quiz_single",
          "topic": "Ôn tập",
          "question": "Tuỳ chọn nào dưới đây là một ví dụ về giải trí?",
          "options": [
            "Một bảng tính điểm của bạn.",
            "Truyền trực tuyến (streaming) một chương trình.",
            "Gửi Email cho giáo viên của bạn.",
            "Một từ điển trực tuyến."
          ],
          "correctAnswer": 1,
          "hint": "Chọn hoạt động giúp thư giãn, vui vẻ.",
          "explain": "Xem chương trình truyền trực tuyến là giải trí.<br>Bảng điểm và từ điển là thông tin, Email là giao tiếp."
        },
        {
          "type": "quiz_dropdown",
          "topic": "Ôn tập",
          "question": "Em hãy chọn Có nếu là tùy chọn nhằm mục đích giải trí hoặc chọn Không nếu không phải: Sách điện tử ___ Hướng dẫn sử dụng ___ Meme ___ Lời chứng thực (Testimonial) ___",
          "blanks": [
            {
              "options": [
                "Có",
                "Không"
              ],
              "correctAnswer": 0
            },
            {
              "options": [
                "Có",
                "Không"
              ],
              "correctAnswer": 1
            },
            {
              "options": [
                "Có",
                "Không"
              ],
              "correctAnswer": 0
            },
            {
              "options": [
                "Có",
                "Không"
              ],
              "correctAnswer": 1
            }
          ],
          "hint": "Sách điện tử và Meme dùng để giải trí; hướng dẫn sử dụng và lời chứng thực dùng để cung cấp thông tin.",
          "explain": "Sách điện tử và Meme là giải trí.<br>Hướng dẫn sử dụng và lời chứng thực chủ yếu cung cấp thông tin nên không phải giải trí."
        },
        {
          "type": "quiz_matching",
          "topic": "Ôn tập",
          "question": "Em hãy ghép nối từng ví dụ về nội dung trực tuyến với mục đích tương ứng.",
          "pairs": [
            {
              "icon": "🎮",
              "left": "Giải trí",
              "right": "Trò chơi trực tuyến"
            },
            {
              "icon": "📘",
              "left": "Cung cấp thông tin",
              "right": "Trang hướng dẫn"
            },
            {
              "icon": "💬",
              "left": "Giao tiếp",
              "right": "Phần mềm/ứng dụng nhắn tin tức thời (Instant Message)"
            }
          ],
          "hint": "Trò chơi → giải trí; trang hướng dẫn → thông tin; nhắn tin → giao tiếp.",
          "explain": "Trò chơi trực tuyến là giải trí; trang hướng dẫn cung cấp thông tin; nhắn tin tức thời dùng để giao tiếp."
        },
        {
          "type": "quiz_matching",
          "topic": "Ôn tập",
          "question": "Em hãy ghép nối từng hoạt động trực tuyến với mục đích tương ứng.",
          "pairs": [
            {
              "icon": "🔎",
              "left": "Dùng Google Scholar để tìm kiếm một chủ đề cho bài tập.",
              "right": "Thông tin"
            },
            {
              "icon": "📧",
              "left": "Gửi Email cho giáo viên của em về bài tập bị thiếu.",
              "right": "Giao tiếp"
            },
            {
              "icon": "🐕",
              "left": "Xem đoạn Video hài hước về một chú chó đi xe máy.",
              "right": "Giải trí"
            }
          ],
          "hint": "Tìm tài liệu → thông tin; gửi Email → giao tiếp; xem video hài → giải trí.",
          "explain": "Google Scholar giúp tìm thông tin; gửi Email là giao tiếp; xem video hài hước là giải trí."
        },
        {
          "type": "quiz_dropdown",
          "topic": "Ôn tập",
          "question": "Với mỗi câu phát biểu, em hãy chọn Đúng hoặc Sai: Mục đích của Video hài hước là để cung cấp thông tin. ___ Mục đích của việc gửi Email là để giao tiếp. ___ Mục đích của các bài báo tin tức trên mạng là để giải trí. ___",
          "blanks": [
            {
              "options": [
                "Đúng",
                "Sai"
              ],
              "correctAnswer": 1
            },
            {
              "options": [
                "Đúng",
                "Sai"
              ],
              "correctAnswer": 0
            },
            {
              "options": [
                "Đúng",
                "Sai"
              ],
              "correctAnswer": 1
            }
          ],
          "hint": "Video hài → giải trí; Email → giao tiếp; bài báo tin tức → thông tin.",
          "explain": "Video hài hước nhằm giải trí (Sai).<br>Gửi Email là để giao tiếp (Đúng).<br>Bài báo tin tức nhằm cung cấp thông tin (Sai)."
        },
        {
          "type": "quiz_single",
          "topic": "Ôn tập",
          "question": "Em hãy cho biết điều nào sau đây là sự khác biệt giữa Wiki và Forum?",
          "options": [
            "Wiki cho phép em nói về một chủ đề cụ thể trong khi Forum thì không.",
            "Forum cho phép em nói về một chủ đề cụ thể trong khi Wiki thì không.",
            "Forum là một phần của trang Web, trong khi Wiki tạo nên toàn bộ trang Web.",
            "Wiki là một phần của trang Web, trong khi Forum tạo nên toàn bộ trang Web."
          ],
          "correctAnswer": 2,
          "hint": "Nghĩ đến Wikipedia: cả trang Web là một Wiki.",
          "explain": "Forum (diễn đàn) thường chỉ là một phần của trang Web, còn Wiki (ví dụ Wikipedia) tạo nên toàn bộ trang Web."
        },
        {
          "type": "quiz_single",
          "topic": "Ôn tập",
          "question": "Theo quy tắc sử dụng AI, em nên làm gì khi nộp bài có dùng AI hỗ trợ?",
          "options": [
            "Ghi rõ có AI hỗ trợ.",
            "Giấu đi để bài trông như tự làm.",
            "Sao chép nguyên bài AI viết.",
            "Nhờ AI tạo thêm tin nóng cho hấp dẫn."
          ],
          "correctAnswer": 0,
          "hint": "Hãy trung thực khi dùng AI.",
          "explain": "Em cần ghi rõ có AI hỗ trợ, dùng công cụ được giáo viên cho phép, và không sao chép nguyên bài hay tạo tin giả."
        },
        {
          "type": "info",
          "final": true,
          "topic": "Hoàn thành",
          "title": "Em đã ôn tập xong Bài 11!",
          "content": "Xem lại điểm số bên dưới. Nếu muốn luyện thêm lần nữa, bấm nút làm lại.",
          "imageUrl": null
        }
      ]
    }
  ]
};

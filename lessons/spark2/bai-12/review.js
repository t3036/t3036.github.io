/* ============================================================
   DỮ LIỆU TRANG ÔN TẬP — Bài 12 — Tìm hiểu URL của một trang web
   (gộp các câu hỏi của bài học; dùng chung engine lesson.js)
   ============================================================ */

const LESSON = {
  "id": "bai12-url-on-tap",
  "icon": "🔗",
  "title": "Ôn tập Bài 12 — Tìm hiểu URL của một trang web",
  "sections": [
    {
      "id": "s4",
      "title": "Ôn tập",
      "slides": [
        {
          "type": "quiz_single",
          "topic": "Ôn tập",
          "question": "Khi bắt đầu làm dự án nghiên cứu, giáo viên gửi cho em https://www.natgeokids.com để sử dụng. Em hãy cho biết, em đã được nhận gì từ giáo viên?",
          "options": [
            "Một URL",
            "Mã nguồn",
            "Tiêu đề một trang",
            "Một tác giả"
          ],
          "correctAnswer": 0,
          "hint": "Chuỗi ký tự bắt đầu bằng https:// là gì?",
          "explain": "https://www.natgeokids.com là địa chỉ của trang Web, tức là một URL."
        },
        {
          "type": "quiz_single",
          "topic": "Ôn tập",
          "question": "Khi nghiên cứu để làm bài tập, em tìm thấy một trang Web có thông tin liên quan mà em muốn dùng. Giáo viên yêu cầu em đính kèm URL đó vào bài nộp. Tùy chọn nào bên dưới là ví dụ về một URL?",
          "options": [
            "www.natgeokids",
            "http://www.natgeokids.com/visit-the-mountains",
            "com.NatgeoKids.www",
            "NatgeoKids.com"
          ],
          "correctAnswer": 1,
          "hint": "URL đầy đủ có giao thức (http/https), tên miền và có thể có đường dẫn.",
          "explain": "http://www.natgeokids.com/visit-the-mountains có đủ giao thức, tên tài nguyên và đường dẫn nên là một URL hoàn chỉnh."
        },
        {
          "type": "quiz_single",
          "topic": "Ôn tập",
          "question": "Địa chỉ của một trang web được gọi là gì?",
          "options": [
            "URL",
            "Tác giả (Author)",
            "Nhà xuất bản (Publisher)",
            "Tiêu đề trang (Page title)"
          ],
          "correctAnswer": 0,
          "hint": "Viết tắt của Uniform Resource Locator.",
          "explain": "Địa chỉ của một trang web được gọi là URL."
        },
        {
          "type": "quiz_single",
          "topic": "Ôn tập",
          "question": "Em hãy cho biết, tùy chọn nào dưới đây là SAI?",
          "options": [
            "Tên miền cấp cao nhất .edu cho biết trang Web thuộc về lĩnh vực thương mại",
            "URL được viết đầy đủ là: Uniform Resource Locator",
            "Định danh giao thức thường gặp là http hoặc https",
            "Tên miền cấp cao nhất .ca cho biết trang Web có nguồn gốc ở Canada"
          ],
          "correctAnswer": 0,
          "hint": ".edu là viết tắt của education.",
          "explain": ".edu cho biết trang Web thuộc lĩnh vực giáo dục, không phải thương mại (thương mại là .com).<br>Các phát biểu còn lại đều đúng."
        },
        {
          "type": "quiz_single",
          "topic": "Ôn tập",
          "question": "Em hãy xác định tùy chọn nào sau đây là tên miền cấp cao nhất trong tên tài nguyên: www.ccilearning.com?",
          "options": [
            "www",
            "ccilearning",
            "ccilearning.com",
            ".com"
          ],
          "correctAnswer": 3,
          "hint": "Tên miền cấp cao nhất là phần cuối cùng của tên tài nguyên.",
          "explain": "Trong www.ccilearning.com: www là tên miền phụ, ccilearning là tên miền, .com là tên miền cấp cao nhất."
        },
        {
          "type": "quiz_matching",
          "topic": "Ôn tập",
          "question": "Em hãy ghép các trang Web với lĩnh vực hoạt động, địa điểm tương ứng.",
          "pairs": [
            {
              "icon": "🏢",
              "left": "www.microsoft.com",
              "right": "Trang Web thương mại"
            },
            {
              "icon": "🇻🇳",
              "left": "www.tuoitre.vn",
              "right": "Trang Web của Việt Nam"
            },
            {
              "icon": "🎓",
              "left": "www.harvard.edu",
              "right": "Trang Web giáo dục"
            },
            {
              "icon": "🏛️",
              "left": "www.whitehouse.gov",
              "right": "Trang Web chính phủ"
            }
          ],
          "hint": "Nhìn vào tên miền cấp cao nhất: .com, .vn, .edu, .gov.",
          "explain": ".com là thương mại, .vn là Việt Nam, .edu là giáo dục, .gov là chính phủ."
        },
        {
          "type": "quiz_dropdown",
          "topic": "Ôn tập",
          "question": "Em hãy điền vào chỗ trống để hoàn thành các câu sau về URL https://www.ccilearning.com: Phần \"https\" là ___ Phần \"www\" là ___ Phần \"ccilearning\" là ___ Phần \"com\" là ___",
          "blanks": [
            {
              "options": [
                "định danh giao thức",
                "tên miền phụ",
                "tên miền",
                "tên miền cấp cao nhất"
              ],
              "correctAnswer": 0
            },
            {
              "options": [
                "định danh giao thức",
                "tên miền phụ",
                "tên miền",
                "tên miền cấp cao nhất"
              ],
              "correctAnswer": 1
            },
            {
              "options": [
                "định danh giao thức",
                "tên miền phụ",
                "tên miền",
                "tên miền cấp cao nhất"
              ],
              "correctAnswer": 2
            },
            {
              "options": [
                "định danh giao thức",
                "tên miền phụ",
                "tên miền",
                "tên miền cấp cao nhất"
              ],
              "correctAnswer": 3
            }
          ],
          "hint": "Từ trái sang phải: giao thức → tên miền phụ → tên miền → TLD.",
          "explain": "https là giao thức; www là tên miền phụ; ccilearning là tên miền; com là tên miền cấp cao nhất."
        },
        {
          "type": "quiz_matching",
          "topic": "Ôn tập",
          "question": "Em hãy ghép nối tên miền cấp cao nhất với ý nghĩa tương ứng.",
          "pairs": [
            {
              "icon": "🏢",
              "left": ".com",
              "right": "Trang Web thương mại hoặc của công ty"
            },
            {
              "icon": "🎓",
              "left": ".edu",
              "right": "Trang Web giáo dục"
            },
            {
              "icon": "🏛️",
              "left": ".gov",
              "right": "Trang Web chính phủ"
            },
            {
              "icon": "🇻🇳",
              "left": ".vn",
              "right": "Việt Nam"
            }
          ],
          "hint": "edu = education, gov = government, vn = Việt Nam.",
          "explain": ".com là trang thương mại/công ty, .edu là giáo dục, .gov là chính phủ, .vn là Việt Nam."
        },
        {
          "type": "quiz_single",
          "topic": "Ôn tập",
          "question": "Phần nào của URL https://www.hocvui.edu.vn/bai-hoc cho biết đường dẫn đến một trang cụ thể?",
          "options": [
            "https://",
            "www",
            ".edu.vn",
            "/bai-hoc"
          ],
          "correctAnswer": 3,
          "hint": "Đường dẫn bắt đầu bằng dấu gạch chéo /.",
          "explain": "/bai-hoc là đường dẫn (Path), chỉ đến một trang cụ thể trong website."
        },
        {
          "type": "quiz_single",
          "topic": "Ôn tập",
          "question": "Trong các URL sau, URL nào đáng tin cậy nhất?",
          "options": [
            "https://www.natgeokids.com",
            "http://www.natgeokids.com",
            "https://www.natgeokids-123.xyz"
          ],
          "correctAnswer": 0,
          "hint": "Bắt đầu bằng https và tên miền rõ ràng, quen thuộc.",
          "explain": "https://www.natgeokids.com đáng tin nhất vì bắt đầu bằng https (mã hóa) và có tên miền rõ ràng.<br>http://www.natgeokids.com dùng http nên không mã hóa.<br>https://www.natgeokids-123.xyz có tên miền lạ, chứa số và đuôi .xyz."
        },
        {
          "type": "quiz_multiple",
          "topic": "Ôn tập",
          "question": "Em nhận được URL do AI gợi ý mà chưa biết rõ. Em nên làm gì trước khi nhấp vào liên kết? (Chọn 3)",
          "options": [
            "Dừng lại, không bấm ngay.",
            "Kiểm tra xem URL có quen thuộc và đáng tin không.",
            "Hỏi giáo viên hoặc người lớn nếu chưa chắc chắn.",
            "Bấm vào ngay vì AI luôn đúng."
          ],
          "correctAnswers": [
            0,
            1,
            2
          ],
          "hint": "AI không đảm bảo liên kết an toàn.",
          "explain": "Em nên dừng lại, kiểm tra URL và hỏi giáo viên hoặc người lớn.<br>AI có thể gợi ý liên kết sai hoặc không an toàn nên không bấm vội."
        },
        {
          "type": "quiz_multiple",
          "topic": "Ôn tập",
          "question": "Dấu hiệu nào cho thấy URL cần cẩn thận? (Chọn 3)",
          "options": [
            "Bắt đầu bằng http:// (không mã hóa).",
            "Tên miền giả mạo như go0gle.com.",
            "Liên kết từ email lạ hoặc pop-up báo trúng thưởng.",
            "Tên miền .edu hoặc .gov."
          ],
          "correctAnswers": [
            0,
            1,
            2
          ],
          "hint": "Tên miền .edu, .gov là các đuôi uy tín.",
          "explain": "http không mã hóa, tên miền giả mạo, và liên kết từ email lạ hoặc pop-up trúng thưởng đều là dấu hiệu cần cẩn thận.<br>Đuôi .edu, .gov là uy tín."
        },
        {
          "type": "info",
          "final": true,
          "topic": "Hoàn thành",
          "title": "Em đã ôn tập xong Bài 12!",
          "content": "Xem lại điểm số bên dưới. Nếu muốn luyện thêm lần nữa, bấm nút làm lại.",
          "imageUrl": null
        }
      ]
    }
  ]
};

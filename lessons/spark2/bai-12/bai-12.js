/* ============================================================
   DỮ LIỆU BÀI HỌC — BÀI 12: TÌM HIỂU URL CỦA MỘT TRANG WEB
   (IC3 GS6 Spark — Level 2 — Chủ đề: Quản lí thông tin)
   Nguồn: PPTX gốc K4_B12_TimHieuURL.pptx (21 slide).

   ĐÁP ÁN: file gốc chỉ đánh dấu bằng animation nên mình xác định theo
   nội dung bài học. Một số câu (điền khuyết thành phần URL, ghép TLD,
   chọn dấu hiệu URL an toàn) là câu bổ sung từ nội dung hình trong
   bài để củng cố kiến thức.
   ============================================================ */

const LESSON = {
  "id": "bai12-url",
  "icon": "🔗",
  "title": "Bài 12 — Tìm hiểu URL của một trang web",
  "sections": [
    {
      "id": "s1",
      "title": "Khái niệm URL",
      "slides": [
        {
          "type": "info",
          "topic": "Khởi động",
          "title": "Khởi động",
          "content": "Em hãy suy nghĩ và trả lời ba câu hỏi sau:",
          "imageUrl": "img/khoi-dong.png",
          "things": [
            {
              "icon": "1️⃣",
              "name": "Khi em muốn vào YouTube, em gõ gì vào thanh địa chỉ của trình duyệt?",
              "en": "Gõ địa chỉ rồi nhấn Enter để mở trang web"
            },
            {
              "icon": "2️⃣",
              "name": "Em có để ý rằng mỗi trang web có địa chỉ riêng bắt đầu bằng \"https://\" không?",
              "en": "\"https://\" giúp kết nối an toàn"
            },
            {
              "icon": "3️⃣",
              "name": "Khi chatbot AI gợi ý một trang web, em có nên bấm vào ngay không?",
              "en": "Quan sát địa chỉ, kiểm tra độ tin cậy, hỏi người lớn nếu cần"
            }
          ]
        },
        {
          "type": "info",
          "topic": "Phần 1 · Khái niệm URL",
          "title": "URL là gì?",
          "content": "Mỗi trang Web đều có một địa chỉ cụ thể. Địa chỉ này được gọi là <b>URL (Uniform Resource Locator)</b>.",
          "imageUrl": null,
          "things": [
            {
              "icon": "🔗",
              "name": "URL là một chuỗi ký tự định dạng",
              "en": "Dùng để xác định và định vị tài nguyên trên Internet"
            },
            {
              "icon": "🎯",
              "name": "URL giúp tìm ra một trang Web cụ thể",
              "en": "Có đúng URL, trình duyệt mới mở đúng trang Web"
            }
          ],
          "remember": "Giống như địa chỉ nhà: có đúng địa chỉ, em mới đến đúng ngôi nhà. Ví dụ: <b>https://www.natgeokids.com</b> hoặc <b>http://www.natgeokids.com/visit-the-mountains</b>"
        },
        {
          "type": "info",
          "topic": "Phần 1 · Khái niệm URL",
          "title": "Ví dụ về URL",
          "content": "Em hãy quan sát các ví dụ URL dưới đây:",
          "imageUrl": "img/khai-niem-url.png"
        },
        {
          "type": "quiz_single",
          "topic": "Vận dụng",
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
          "topic": "Vận dụng",
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
          "topic": "Vận dụng",
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
        }
      ]
    },
    {
      "id": "s2",
      "title": "Các thành phần của URL",
      "slides": [
        {
          "type": "info",
          "topic": "Phần 2 · Thành phần URL",
          "title": "Hai phần cơ bản của URL",
          "content": "Một URL gồm hai phần cơ bản: <b>Định danh giao thức</b> và <b>Tên tài nguyên</b>. Ví dụ: <b>http://www.ccilearning.com</b>",
          "imageUrl": null,
          "things": [
            {
              "icon": "🔐",
              "name": "Định danh giao thức",
              "en": "http (hoặc https)"
            },
            {
              "icon": "🌐",
              "name": "Tên tài nguyên",
              "en": "www.ccilearning.com"
            }
          ],
          "remember": "Hai phần được phân cách bởi dấu hai chấm <b>(:)</b> và hai dấu gạch chéo <b>(//)</b>. <b>https</b> là giao thức bảo mật, dữ liệu được mã hóa; <b>http</b> cũ hơn, không mã hóa."
        },
        {
          "type": "info",
          "topic": "Phần 2 · Thành phần URL",
          "title": "Cấu tạo của tên tài nguyên",
          "content": "Trong tên tài nguyên (ví dụ <b>www.ccilearning.com</b>) có 3 thành phần chính:",
          "imageUrl": null,
          "things": [
            {
              "icon": "1️⃣",
              "name": "Tên miền phụ (Sub-Domain)",
              "en": "www"
            },
            {
              "icon": "2️⃣",
              "name": "Tên miền (Domain name)",
              "en": "ccilearning"
            },
            {
              "icon": "3️⃣",
              "name": "Tên miền cấp cao nhất (Top-level Domain)",
              "en": "com"
            }
          ]
        },
        {
          "type": "info",
          "topic": "Phần 2 · Thành phần URL",
          "title": "Sơ đồ cấu tạo một URL",
          "content": "Quan sát URL https://www.iigvietnam.com/bai-thi-ic3 được tách thành từng phần:",
          "imageUrl": "img/thanh-phan-url.png",
          "remember": "Phần <b>đường dẫn (Path)</b> bắt đầu bằng dấu <b>/</b> và chỉ đến một trang cụ thể trong website."
        },
        {
          "type": "info",
          "topic": "Phần 2 · Tên miền cấp cao nhất",
          "title": "Tên miền cấp cao nhất (TLD)",
          "content": "TLD cho biết loại tổ chức hoặc quốc gia của trang web:",
          "imageUrl": "img/tld.png"
        },
        {
          "type": "quiz_single",
          "topic": "Vận dụng",
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
          "topic": "Vận dụng",
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
          "topic": "Vận dụng",
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
          "topic": "Vận dụng",
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
          "topic": "Vận dụng",
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
          "topic": "Vận dụng",
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
        }
      ]
    },
    {
      "id": "s3",
      "title": "Công cụ AI và URL an toàn",
      "slides": [
        {
          "type": "info",
          "topic": "AI và URL",
          "title": "URL an toàn và URL cần cẩn thận",
          "content": "Hãy kiểm tra kĩ URL trước khi nhấp:",
          "imageUrl": "img/url-an-toan.png"
        },
        {
          "type": "info",
          "topic": "AI và URL",
          "title": "AI có thể gợi ý liên kết sai",
          "content": "Khi chatbot AI gợi ý một liên kết, em cần chú ý:",
          "imageUrl": "img/ai-lien-ket.png"
        },
        {
          "type": "info",
          "topic": "AI và URL",
          "title": "Em hãy tự hỏi khi AI gợi ý liên kết",
          "content": "Dừng lại · Kiểm tra · Hỏi giáo viên · Chỉ mở khi an toàn.",
          "imageUrl": "img/tu-hoi.png"
        },
        {
          "type": "quiz_single",
          "topic": "Vận dụng",
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
          "topic": "Vận dụng",
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
          "topic": "Vận dụng",
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
          "topic": "Thảo luận",
          "title": "Câu hỏi thảo luận",
          "content": "Em hãy cùng bạn trao đổi:",
          "imageUrl": null,
          "things": [
            {
              "icon": "1️⃣",
              "name": "Khi AI cho em một URL chưa biết rõ, em cần làm gì trước khi nhấp vào liên kết?",
              "en": ""
            },
            {
              "icon": "2️⃣",
              "name": "Nếu em không chắc một URL có an toàn hay không, em nên nhờ ai kiểm tra và cần kiểm tra những gì?",
              "en": "Nhờ giáo viên hoặc người lớn, kiểm tra giao thức, tên miền, đường dẫn"
            }
          ]
        },
        {
          "type": "info",
          "final": true,
          "scoreSections": [
            0,
            1,
            2
          ],
          "topic": "Hoàn thành",
          "title": "Chúc mừng em đã học xong Bài 12!",
          "content": "Em đã biết URL là gì, hai phần cơ bản của URL, cấu tạo tên tài nguyên, ý nghĩa tên miền cấp cao nhất và cách kiểm tra URL an toàn khi AI gợi ý liên kết.",
          "imageUrl": null,
          "remember": "Muốn ôn lại toàn bộ câu hỏi của bài, hãy vào trang <b>Ôn tập</b> để luyện thêm."
        }
      ]
    }
  ]
};

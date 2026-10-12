/* ============================================================
   DỮ LIỆU BÀI HỌC — BÀI 11: PHÂN LOẠI NỘI DUNG TRỰC TUYẾN
   (IC3 GS6 Spark — Level 2 — Chủ đề: Quản lí thông tin)
   Nguồn: PPTX gốc K4_B11_PhanLoaiNoiDungTrucTuyen.pptx (21 slide).

   ĐÁP ÁN: file gốc chỉ đánh dấu bằng animation nên mình xác định theo
   nội dung bài học (đáp án rất rõ ràng).
   lấy nội dung từ hình trong file gốc.
   ============================================================ */

const LESSON = {
  "id": "bai11-phanloai",
  "icon": "🗂️",
  "title": "Bài 11 — Phân loại nội dung trực tuyến",
  "sections": [
    {
      "id": "s1",
      "title": "Giới thiệu nội dung trực tuyến",
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
              "name": "Hôm qua em đã xem hoặc đọc nội dung gì trên Internet?",
              "en": "Video, bài viết, tin nhắn,..."
            },
            {
              "icon": "2️⃣",
              "name": "Em đã dùng Internet để làm gì?",
              "en": "Học bài, xem phim, nhắn tin với bạn hay mua sắm?"
            },
            {
              "icon": "3️⃣",
              "name": "Em có biết không phải mọi nội dung trên Internet đều đúng và phù hợp không?",
              "en": "Hãy cùng tìm hiểu cách phân loại nội dung trực tuyến nhé!"
            }
          ]
        }
      ]
    },
    {
      "id": "s2",
      "title": "Phân loại nội dung trực tuyến theo mục đích",
      "slides": [
        {
          "type": "info",
          "topic": "Phần 2 · Phân loại",
          "title": "Phân loại nội dung trực tuyến",
          "content": "Có <b>3 loại</b> nội dung trực tuyến được phân loại theo mục đích:",
          "imageUrl": null,
          "things": [
            {
              "icon": "💬",
              "name": "Giao tiếp (Communications)",
              "en": "Trò chuyện, tương tác, kết nối với người khác"
            },
            {
              "icon": "📚",
              "name": "Thông tin (Information)",
              "en": "Tìm kiếm để học hỏi, tìm hiểu kiến thức"
            },
            {
              "icon": "🎮",
              "name": "Giải trí (Entertainment)",
              "en": "Mang lại trải nghiệm thú vị, giảm căng thẳng"
            }
          ]
        },
        {
          "type": "info",
          "topic": "Phần 2 · Giao tiếp",
          "title": "Giao tiếp (Communications)",
          "content": "<b>Giao tiếp</b> là những loại nội dung được tạo ra và chia sẻ với mục đích giao tiếp, tương tác và kết nối với người khác. Người dùng sử dụng để: gửi tin nhắn, chia sẻ thông tin, trò chuyện,...",
          "imageUrl": null,
          "things": [
            {
              "icon": "📧",
              "name": "Email",
              "en": ""
            },
            {
              "icon": "💬",
              "name": "Tin nhắn văn bản",
              "en": ""
            },
            {
              "icon": "📹",
              "name": "Cuộc trò chuyện qua Video",
              "en": ""
            },
            {
              "icon": "👥",
              "name": "Mạng xã hội và diễn đàn trực tuyến",
              "en": ""
            }
          ]
        },
        {
          "type": "info",
          "topic": "Phần 2 · Thông tin",
          "title": "Thông tin (Information)",
          "content": "<b>Thông tin</b> là những tài liệu có tính chất học thuật, giáo dục, kiến thức đời sống,... mà người dùng tìm kiếm để học hỏi hoặc tìm hiểu về các chủ đề cụ thể.",
          "imageUrl": null,
          "things": [
            {
              "icon": "📰",
              "name": "Tin tức, bài viết",
              "en": ""
            },
            {
              "icon": "📖",
              "name": "Sách điện tử",
              "en": ""
            },
            {
              "icon": "🎓",
              "name": "Bài giảng trực tuyến",
              "en": ""
            },
            {
              "icon": "📊",
              "name": "Bài trình chiếu",
              "en": ""
            },
            {
              "icon": "📘",
              "name": "Tài liệu hướng dẫn sử dụng",
              "en": ""
            }
          ]
        },
        {
          "type": "info",
          "topic": "Phần 2 · Giải trí",
          "title": "Giải trí (Entertainment)",
          "content": "<b>Giải trí</b> là các loại nội dung được tạo ra để cung cấp trải nghiệm thú vị, giúp giảm căng thẳng cho người sử dụng.",
          "imageUrl": null,
          "things": [
            {
              "icon": "📖",
              "name": "Sách điện tử",
              "en": ""
            },
            {
              "icon": "😂",
              "name": "Meme",
              "en": ""
            },
            {
              "icon": "🎵",
              "name": "Âm nhạc",
              "en": ""
            },
            {
              "icon": "🎮",
              "name": "Trò chơi trực tuyến",
              "en": ""
            },
            {
              "icon": "📚",
              "name": "Truyện tranh",
              "en": ""
            }
          ],
          "remember": "Một nội dung có thể phục vụ nhiều mục đích (ví dụ sách điện tử vừa để học, vừa để giải trí). Hãy xác định <b>mục đích chính</b> khi em sử dụng nó."
        },
        {
          "type": "quiz_single",
          "topic": "Vận dụng",
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
          "topic": "Vận dụng",
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
          "topic": "Vận dụng",
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
          "topic": "Vận dụng",
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
          "topic": "Vận dụng",
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
          "topic": "Vận dụng",
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
          "topic": "Vận dụng",
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
          "topic": "Vận dụng",
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
        }
      ]
    },
    {
      "id": "s3",
      "title": "Công cụ AI tạo nội dung trực tuyến",
      "slides": [
        {
          "type": "info",
          "topic": "Công cụ AI",
          "title": "Lựa chọn công cụ AI để tạo nội dung trực tuyến",
          "content": "Công cụ AI có thể hỗ trợ em tạo nhiều dạng nội dung trực tuyến khác nhau:",
          "imageUrl": "img/cong-cu-ai.png"
        },
        {
          "type": "info",
          "topic": "Công cụ AI",
          "title": "Quy tắc sử dụng AI tạo nội dung",
          "content": "Khi dùng AI để tạo nội dung, em cần ghi nhớ:",
          "imageUrl": "img/quy-tac-ai.png",
          "remember": "<b>Không</b> xúc phạm, hù dọa · <b>Không</b> tạo tin giả · <b>Không</b> sao chép nguyên bài. <b>Nên</b> ghi rõ có AI hỗ trợ và dùng công cụ được giáo viên cho phép."
        },
        {
          "type": "quiz_single",
          "topic": "Vận dụng",
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
          "topic": "Thực hành",
          "title": "Thực hành — Phân loại nội dung",
          "content": "Hãy làm theo các bước:",
          "imageUrl": null,
          "things": [
            {
              "icon": "1️⃣",
              "name": "Liệt kê 6 nội dung trực tuyến em đã xem/đọc/nghe trong tuần qua",
              "en": ""
            },
            {
              "icon": "2️⃣",
              "name": "Phân loại mỗi nội dung vào 1 trong 3 nhóm",
              "en": "Giao tiếp / Thông tin / Giải trí"
            },
            {
              "icon": "3️⃣",
              "name": "Nhận xét",
              "en": "Loại nội dung nào em dùng nhiều nhất? Có cân bằng không?"
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
          "title": "Chúc mừng em đã học xong Bài 11!",
          "content": "Em đã biết 3 loại nội dung trực tuyến theo mục đích: giao tiếp, thông tin, giải trí, cách phân loại các ví dụ thực tế, cũng như quy tắc dùng AI để tạo nội dung.",
          "imageUrl": null,
          "remember": "Muốn ôn lại toàn bộ câu hỏi của bài, hãy vào trang <b>Ôn tập</b> để luyện thêm."
        }
      ]
    }
  ]
};

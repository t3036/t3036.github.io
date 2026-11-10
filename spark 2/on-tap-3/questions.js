/* Dữ liệu chặng + câu hỏi — nội dung câu hỏi lấy nguyên từ tmp/questionspark2.docx
   Loại câu: choice (1 đáp án), multi (nhiều đáp án), match (ghép nối),
             rows (Đúng/Sai hoặc phân loại từng dòng), hotspot (chọn trên hình) */
window.TOTAL_SCORE = 1000;
window.PASS_SCORE = 900;
window.TOTAL_HINTS = 3;

window.STAGES = [
  {
    id: 1, icon: "🏘️", name: "Làng Từ Ngữ", lesson: "Bài 15 · Các khái niệm cơ bản trong sáng tạo nội dung",
    story: "Bit — chú robot nhỏ — chạy đến báo tin dữ: Phù thủy Lỗi Lầm đã làm vỡ Chìa Khóa Vàng của Tòa Tháp Văn Phòng thành 8 mảnh Tinh Thể! Mảnh đầu tiên rơi xuống Làng Từ Ngữ, nơi mọi từ ngữ bị xáo trộn. Hãy ghép đúng từng thuật ngữ với ý nghĩa của nó để lấy lại Tinh Thể.",
    goal: "Ghép thuật ngữ với định nghĩa: Tiêu đề, Căn lề, Đoạn văn, Đề mục, Danh sách, Trang, Trang chiếu."
  },
  {
    id: 2, icon: "🏝️", name: "Đảo Trình Chiếu", lesson: "Bài 16+17 · Ứng dụng văn phòng — Trình chiếu",
    story: "Con thuyền của Bit cập bờ Đảo Trình Chiếu. Trên đảo, những màn hình khổng lồ đã tắt ngúm vì Lỗi Lầm giấu mất bí quyết dùng PowerPoint. Hãy trả lời đúng để bật sáng từng màn hình!",
    goal: "Nhớ ứng dụng PowerPoint, thẻ Insert, Transitions, Animations và Slide Show."
  },
  {
    id: 3, icon: "🏙️", name: "Thành Phố Tài Liệu", lesson: "Bài 16+17 · Ứng dụng văn phòng — Microsoft Word",
    story: "Bit và em bước vào Thành Phố Tài Liệu. Mọi con phố đều là một trang Word, nhưng chữ đang chạy lung tung, lỗi chính tả mọc khắp nơi! Hãy sửa lại thành phố bằng các thao tác đúng với Word.",
    goal: "Tiêu đề, đề mục, căn lề, chọn văn bản, Clipboard, Find/Replace, bảng và chia sẻ tài liệu."
  },
  {
    id: 4, icon: "⛏️", name: "Mỏ Bảng Tính Excel", lesson: "Bài 16+17 · Ứng dụng văn phòng — Microsoft Excel",
    story: "Dưới lòng đất là Mỏ Bảng Tính — một mê cung toàn ô vuông. Muốn đi đúng đường, em phải biết cột nào là chữ cái, dòng nào là con số và cách di chuyển con trỏ. Chỉ 4 thử thách nữa là tới Tinh Thể!",
    goal: "Tiêu đề cột và dòng, di chuyển con trỏ, chỉnh độ rộng cột."
  },
  {
    id: 5, icon: "🌲", name: "Rừng Danh Sách", lesson: "Bài 18 · Danh sách Bullets và Numbering",
    story: "Trong Rừng Danh Sách có tiệm bánh Doe's Bakery của bác thợ làm bánh. Lỗi Lầm đã xáo trộn thực đơn! Bác nhờ em phân biệt danh sách có ký hiệu đầu hàng và danh sách đánh số để thực đơn gọn gàng trở lại.",
    goal: "Phân biệt Bulleted List và Numbered List, biết khi nào dùng mỗi loại."
  },
  {
    id: 6, icon: "⛰️", name: "Núi Định Dạng", lesson: "Bài 19 · Định dạng văn bản cơ bản",
    story: "Ngọn Núi Định Dạng cao chót vót, trên đỉnh có tấm bảng chữ rất nhạt nhòa. Muốn bảng chữ nổi bật, em phải chọn đúng kiểu định dạng. Leo lên nào, chỉ 3 thử thách thôi!",
    goal: "Dùng in đậm, màu chữ, cỡ chữ để làm nổi bật tiêu đề và ý quan trọng."
  },
  {
    id: 7, icon: "🏞️", name: "Hồ Hình Ảnh", lesson: "Bài 20 · Thao tác với hình ảnh",
    story: "Mặt hồ phản chiếu rất nhiều bức ảnh, nhưng chỉ vài bức hợp với bài trình chiếu của em. Giúp Bit chọn ảnh đúng chủ đề, rõ nét, không có dấu mờ, và biết dùng các Handle để đổi kích thước ảnh.",
    goal: "Chọn hình ảnh phù hợp; Handle dùng để thay đổi kích thước."
  },
  {
    id: 8, icon: "🏰", name: "Hang Chú Thích", lesson: "Bài 21 · Tạo chú thích cho hình ảnh",
    story: "Mảnh Tinh Thể cuối cùng nằm trong Hang Chú Thích, nơi Phù thủy Lỗi Lầm đang chờ! Chỉ một câu hỏi cuối cùng thôi. Trả lời đúng để ghép Chìa Khóa Vàng và mở cửa Tòa Tháp Văn Phòng!",
    goal: "Biết cách cung cấp thông tin cho hình ảnh bằng chú thích."
  }
];

/* stage: số thứ tự chặng (1–8). a: đáp án (chỉ số, bắt đầu từ 0) */
window.QUESTIONS = [
  /* ===== Bài 15 ===== */
  { stage: 1, type: "match",
    q: "Em ghép nối từng thuật ngữ về tạo nội dung ở bên phải sang định nghĩa tương ứng ở bên trái.",
    pairs: [
      ["Tóm tắt (các) ý chính trong nội dung của em.", "Tiêu đề (Title)"],
      ["Tính năng cho phép người dùng căn đều từng dòng văn bản.", "Căn lề (Alignment)"],
      ["Một chuỗi các câu nói về một luận điểm hoặc chủ đề cụ thể.", "Đoạn văn (Paragraph)"]
    ],
    clue: "Căn đều dòng là việc sắp xếp chữ trên trang; đoạn văn gồm nhiều câu." },
  { stage: 1, type: "match",
    q: "Em hãy ghép nối từng thuật ngữ ở bên phải sang định nghĩa tương ứng ở bên trái.",
    pairs: [
      ["Cách sắp xếp hoặc đặt vị trí văn bản.", "Căn lề (Alignment)"],
      ["Một tài liệu có thể hiển thị bằng trình duyệt.", "Trang (Page)"],
      ["Một đoạn mô tả ngắn về trang Web, xuất hiện ở phía trên đầu cửa sổ trình duyệt.", "Tiêu đề (Title)"],
      ["Một trang đơn lẻ của một bài trình chiếu.", "Trang chiếu (Slide)"]
    ],
    clue: "Trình duyệt hiển thị trang Web; bài trình chiếu gồm nhiều trang chiếu." },
  { stage: 1, type: "match",
    q: "Em hãy ghép nối từng thuật ngữ ở bên phải sang định nghĩa tương ứng ở bên trái.",
    pairs: [
      ["Một chuỗi các câu đều liên quan đến một chủ đề duy nhất.", "Đoạn văn (Paragraph)"],
      ["Một từ, cụm từ hoặc câu tóm tắt nội dung sẽ trình bày ở phần tiếp theo.", "Đề mục (Heading)"],
      ["Kiểm soát cách hiển thị và hướng của một mục, ví dụ như đoạn văn hoặc hình ảnh.", "Căn lề (Alignment)"],
      ["Một chuỗi các mục có ký hiệu hoặc số ở đầu.", "Danh sách (List)"]
    ],
    clue: "Đề mục nằm trước mỗi phần để báo cho người đọc biết phần đó nói về gì." },

  /* ===== Bài 16+17 — Trình chiếu ===== */
  { stage: 2, type: "choice",
    q: "Ứng dụng nào có thể được sử dụng để hiển thị hình ảnh, văn bản, Video và nội dung trực quan khác cho khán giả?",
    opts: ["Ứng dụng bảng tính (Spreadsheet Applications)", "Ứng dụng trình chiếu (Slideshow Applications)", "Ứng dụng nhắn tin (Text/SMS Applications)", "Ứng dụng thư điện tử (Email Applications)"],
    a: 1, clue: "Khán giả ngồi xem một loạt trang chiếu trên màn hình lớn." },
  { stage: 2, type: "hotspot",
    q: "Em hãy cho biết, ứng dụng nào được dùng để tạo bài trình chiếu?",
    img: "img/app-icons.jpg", alt: "Các biểu tượng: Edge, Word, Excel, PowerPoint, Mail, Calendar", ratio: "718 / 103", wide: true,
    regions: [
      { id: "edge", x: 2, y: 4, w: 15, h: 92 }, { id: "word", x: 19, y: 4, w: 15, h: 92 },
      { id: "excel", x: 35, y: 4, w: 15, h: 92 }, { id: "ppt", x: 51, y: 4, w: 15, h: 92 },
      { id: "mail", x: 68, y: 4, w: 15, h: 92 }, { id: "cal", x: 83, y: 4, w: 15, h: 92 }
    ],
    a: "ppt", answerText: "PowerPoint", clue: "Biểu tượng của ứng dụng này có chữ P màu cam." },
  { stage: 2, type: "choice",
    q: "Tùy chọn nào dưới đây là một ứng dụng trình chiếu?",
    opts: ["Microsoft PowerPoint", "Google Docs", "Microsoft Excel", "Gmail"],
    a: 0, clue: "Docs để viết văn bản, Excel để làm bảng tính, Gmail để gửi thư." },
  { stage: 2, type: "choice",
    q: "Em hãy cho biết, hành động nào trong các tùy chọn sau được dùng để di chuyển một Slide trong PowerPoint?",
    opts: ["Reset bài trình chiếu.", "Nhấp (Click) và kéo (Drag) một Slide sang vị trí mới.", "Tính năng Reorder Slides Appropriately.", "Tính năng Layout."],
    a: 1, clue: "Em dùng chuột để nắm lấy trang chiếu rồi thả vào chỗ khác." },
  { stage: 2, type: "choice",
    q: "Các từ hoặc cụm từ ngắn ở đầu trang trình chiếu kĩ thuật số (Digital Slide) là gì?",
    opts: ["Nhà xuất bản (Publisher)", "Đề mục (Heading)", "Tác giả (Author)", "URL"],
    a: 1, clue: "Nó cho biết trang chiếu sắp nói về nội dung gì." },
  { stage: 2, type: "choice",
    q: "Em hãy cho biết, thẻ nào trong các tùy chọn sau cho phép thêm một Video vào bài trình chiếu PowerPoint?",
    opts: ["File", "Home", "Design", "Insert"],
    a: 3, clue: "Thẻ này có nghĩa là “chèn vào”." },
  { stage: 2, type: "choice",
    q: "Em hãy cho biết, chức năng nào trong PowerPoint cho phép em áp dụng một hiệu ứng chuyển Slide (Transitions) cho tất cả các Slide trong bài trình chiếu?",
    opts: ["Apply To All", "Effect Options", "Advance Slide", "Timing Duration"],
    a: 0, clue: "“All” nghĩa là tất cả." },
  { stage: 2, type: "multi", pick: 2,
    q: "Em hãy cho biết, tùy chọn nào sau đây có thể được thực hiện trong thẻ Animations của PowerPoint? (Chọn 2)",
    opts: ["Thay đổi thứ tự của các hiệu ứng hoạt hình phát đầu tiên trên một Slide.", "Tạo tùy chỉnh hiệu ứng hoạt hình (Animations) từ các tập tin (Files) trên máy tính.", "Nhập hiệu ứng hoạt hình từ các chương trình khác.", "Thay đổi thời gian khi phát hiệu ứng hoạt hình (Animations)."],
    a: [0, 3], clue: "Hai đáp án đúng nói về thứ tự và thời gian phát hiệu ứng." },
  { stage: 2, type: "choice",
    q: "Em hãy cho biết, thẻ nào trong các tùy chọn sau có thể chứa các tùy chọn trình chiếu?",
    opts: ["Review", "File", "Slide Show", "Home"],
    a: 2, clue: "Tên thẻ trùng với tên việc em muốn làm: trình chiếu." },

  /* ===== Bài 16+17 — Word ===== */
  { stage: 3, type: "choice",
    q: "Em hãy cho biết, tùy chọn nào là ứng dụng đám mây?",
    opts: ["Notepad", "Microsoft Word", "Google Tài liệu", "Văn bản sửa đổi"],
    a: 2, clue: "Ứng dụng này dùng trên Internet, không cần cài đặt vào máy." },
  { stage: 3, type: "choice",
    q: "Em hãy cho biết, tiêu đề (Title) là gì?",
    opts: ["Các từ và cụm từ giới thiệu chủ đề của một tài liệu hoặc nội dung công việc.", "Nguồn thông tin trong tài liệu.", "Văn bản xuất hiện bên dưới một hình ảnh.", "Cách ứng dụng xác thực người dùng."],
    a: 0, clue: "Tiêu đề giới thiệu chủ đề của cả tài liệu." },
  { stage: 3, type: "hotspot",
    q: "Em cần chỉ ra các phần của một tài liệu. Trong hình sau, đâu là phần “tiêu đề”?",
    img: "img/tai-lieu-thu-cung.jpg", alt: "Tài liệu “Thú cưng được yêu thích” gồm 5 khung", ratio: "515 / 671",
    regions: [
      { id: "k1", x: 3, y: 3, w: 82, h: 7, label: "1" }, { id: "k2", x: 2, y: 11, w: 95, h: 18, label: "2" },
      { id: "k3", x: 2, y: 29.5, w: 70, h: 4.5, label: "3" }, { id: "k4", x: 2, y: 34.5, w: 45, h: 22, label: "4" },
      { id: "k5", x: 2, y: 58.5, w: 95, h: 25, label: "5" }
    ],
    a: "k1", answerText: "Tiêu đề “Thú cưng được yêu thích” (khung 1)", clue: "Tiêu đề to nhất và nằm ở đầu trang." },
  { stage: 3, type: "hotspot",
    q: "Em hãy chọn vị trí đề mục (Heading) trong tài liệu sau.",
    img: "img/tai-lieu-thu-cung.jpg", alt: "Tài liệu “Thú cưng được yêu thích” gồm 5 khung", ratio: "515 / 671",
    regions: [
      { id: "k1", x: 3, y: 3, w: 82, h: 7, label: "1" }, { id: "k2", x: 2, y: 11, w: 95, h: 18, label: "2" },
      { id: "k3", x: 2, y: 29.5, w: 70, h: 4.5, label: "3" }, { id: "k4", x: 2, y: 34.5, w: 45, h: 22, label: "4" },
      { id: "k5", x: 2, y: 58.5, w: 95, h: 25, label: "5" }
    ],
    a: "k3", answerText: "Đề mục “Loài Vật Được Nuôi Làm Thú Cưng Phổ Biến Nhất Ở Mỹ” (khung 3)", clue: "Đề mục là dòng ngắn báo hiệu phần sắp trình bày bên dưới." },
  { stage: 3, type: "choice",
    q: "Khi viết tài liệu, em nên dùng gì để cho người đọc biết về nội dung sẽ được trình bày trong từng phần?",
    opts: ["Tóm lược (Summary)", "Đề mục (Heading)", "Đoạn văn (Paragraph)", "Tiêu đề (Title)"],
    a: 1, clue: "Mỗi phần của tài liệu có một dòng giới thiệu riêng." },
  { stage: 3, type: "choice",
    q: "Em hãy cho biết, Alignment trong tài liệu là gì?",
    opts: ["Những người bạn mong đợi sẽ đọc nội dung của bạn.", "Nội dung được sắp xếp như thế nào trên trang.", "Khi các thành viên của một nhóm làm việc cùng nhau.", "Văn bản xuất hiện bên dưới một hình ảnh."],
    a: 1, clue: "Alignment là căn lề: chữ nằm bên trái, giữa hay bên phải trang." },
  { stage: 3, type: "choice",
    q: "Em hãy cho biết, trong Microsoft Word, tùy chọn nào cho biết lỗi chính tả?",
    opts: ["Một vòng tròn màu xanh lam.", "Một đường lượn sóng màu xanh.", "Một đường lượn sóng màu đỏ.", "Một vòng tròn màu đỏ."],
    a: 2, clue: "Đáp án đúng là một đường lượn sóng, nằm dưới từ viết sai." },
  { stage: 3, type: "choice",
    q: "Em hãy cho biết, nhấp chuột ba lần vào vùng chọn (Selection Area) trong tài liệu Word sẽ dẫn đến hành động nào sau đây?",
    opts: ["Chọn toàn bộ tài liệu.", "Chọn một đoạn văn bản duy nhất.", "Chọn một từ duy nhất.", "Chọn một dòng duy nhất."],
    a: 0, clue: "Ba lần nhấp là nhiều nhất, nên chọn phạm vi lớn nhất." },
  { stage: 3, type: "choice",
    q: "Khi em sao chép hoặc di chuyển văn bản từ một tài liệu. Em hãy cho biết, tùy chọn nào sau đây được máy tính sử dụng để tạm thời lưu trữ văn bản đã được sao chép?",
    opts: ["Clipboard", "Driver", "GPU", "USB Drive"],
    a: 0, clue: "Nó giống như tờ giấy nháp trong bộ nhớ máy tính." },
  { stage: 3, type: "choice",
    q: "Em hãy cho biết, tính năng nào trong chương trình Microsoft Word cho phép tìm và thay thế các từ trong toàn bộ tài liệu?",
    opts: ["Spelling & Grammar", "Undo", "Redo", "Replace"],
    a: 3, clue: "Tên tính năng có nghĩa là “thay thế”." },
  { stage: 3, type: "choice",
    q: "Em hãy cho biết, tính năng nào được sử dụng với tính năng Find, sẽ thay thế văn bản sau khi nó được tìm thấy?",
    opts: ["Thay đổi (Change)", "Thu hồi (Retrieve)", "Thay thế (Substitute)", "Thay thế (Replace)"],
    a: 3, clue: "Từ tiếng Anh của nó là Replace." },
  { stage: 3, type: "choice",
    q: "Em hãy cho biết, tùy chọn nào là tính năng tìm kiếm cho phép em tìm kiếm các từ dựa trên các mẫu và trình tự cụ thể?",
    opts: ["Go To", "Undo", "Replace", "Wildcard Characters (Ký tự đại diện)"],
    a: 3, clue: "Ký tự này “đại diện” cho nhiều ký tự khác." },
  { stage: 3, type: "choice",
    q: "Em hãy cho biết, văn bản được thêm vào bảng (Table) trong tài liệu Word như thế nào?",
    opts: ["Văn bản không khả dụng cho bảng trong tài liệu Word.", "Văn bản được nhập thủ công khi người dùng nhấp chuột vào ô và bắt đầu nhập.", "Văn bản được nhập tự động.", "Văn bản được chèn qua thẻ Insert."],
    a: 1, clue: "Em tự nhấp vào ô và gõ chữ." },
  { stage: 3, type: "choice",
    q: "Em hãy cho biết, tùy chọn nào trong chương trình Microsoft Word cho phép người khác đọc hoặc chỉnh sửa bản sao tập tin của em?",
    opts: ["Save", "Export", "Share", "Save As"],
    a: 2, clue: "Tên tính năng nghĩa là “chia sẻ”." },
  { stage: 3, type: "choice",
    q: "Khi em chia sẻ tài liệu trực tuyến với ai đó, em quyết định những quyền mà người đó có. Em hãy cho biết, quyền nào cho phép ai đó xem tài liệu nhưng không được thực hiện thay đổi đối với tài liệu?",
    opts: ["Tạo nhận xét (Make Comments)", "Chỉnh sửa tài liệu (Edit Document)", "Xem tài liệu (View Document)"],
    a: 2, clue: "Chỉ xem, không sửa và cũng không viết nhận xét." },

  /* ===== Bài 16+17 — Excel ===== */
  { stage: 4, type: "choice",
    q: "Em hãy cho biết, tùy chọn nào sau đây biểu diễn tiêu đề cột trong Excel?",
    opts: ["Số La Mã (Roman Numerals)", "Kí tự (Letters)", "Con số (Numbers)", "Màu sắc (Colors)"],
    a: 1, clue: "Cột có tên A, B, C…" },
  { stage: 4, type: "choice",
    q: "Em hãy cho biết, tùy chọn nào sau đây được dùng để biểu diễn tiêu đề dòng trong Excel?",
    opts: ["Số La Mã (Roman Numerals)", "Kí tự (Letters)", "Con số (Numbers)", "Màu sắc (Colors)"],
    a: 2, clue: "Dòng được đánh số 1, 2, 3…" },
  { stage: 4, type: "choice",
    q: "Em hãy cho biết, tùy chọn nào sau đây sẽ di chuyển con trỏ xuống hàng bên dưới trong Excel?",
    opts: ["Backspace", "Enter", "Shift", "Tab"],
    a: 1, clue: "Sau khi gõ xong một ô, em nhấn phím này để xuống ô kế tiếp." },
  { stage: 4, type: "multi", pick: 2,
    q: "Em hãy cho biết, tùy chọn nào sau đây sẽ tăng độ rộng cột trong Excel? (Chọn 2)",
    opts: ["Sử dụng tổ hợp phím Ctrl+Shift+R.", "Nhấp (Click) và kéo (Drag) chuột lên ranh giới cột.", "Nhấp chuột một lần (Single Click) lên ranh giới cột.", "Nhấp đúp chuột (Double Click) lên ranh giới cột."],
    a: [1, 3], clue: "Cả hai cách đúng đều làm việc ở ranh giới cột: một cách kéo, một cách nhấp đúp." },

  /* ===== Bài 18 ===== */
  { stage: 5, type: "hotspot",
    q: "Em làm việc tại tiệm bánh Doe's Bakery. Người chủ nhờ em đổi danh sách Menu từ kiểu có kí hiệu đầu hàng thành đánh số. Trên tài liệu Word, tùy chọn nào là danh sách có kí hiệu đầu hàng?",
    img: "img/doe-bake.png", alt: "Hai danh sách: “Tiệm bánh Doe’s Bake” và “Bạn có thể đặt hàng theo 3 cách”", ratio: "1044 / 325", wide: true,
    regions: [{ id: "left", x: 0, y: 0, w: 49, h: 100, label: "A" }, { id: "right", x: 51, y: 0, w: 49, h: 100, label: "B" }],
    a: "left", answerText: "Danh sách tiệm bánh Doe’s Bake", clue: "Kí hiệu đầu hàng là dấu chấm tròn, không phải con số." },
  { stage: 5, type: "rows",
    q: "Em hãy chọn loại dạng danh sách đánh số hoặc danh sách có kí hiệu đầu hàng cho từng tình huống sau.",
    choices: ["Danh sách có ký hiệu đầu hàng", "Danh sách đánh số"],
    rows: [
      ["Danh sách những món đồ ăn nhẹ em yêu thích.", 0],
      ["Danh sách các loài vật có trong sở thú.", 0],
      ["Danh sách hướng dẫn cách nướng bánh quy.", 1],
      ["Danh sách các bước lắp ráp một món đồ chơi mới.", 1],
      ["Danh sách các món đồ em cần xếp vào hành lí để đi chơi.", 0]
    ],
    clue: "Có thứ tự trước sau (các bước) thì dùng số; chỉ liệt kê thì dùng dấu chấm." },
  { stage: 5, type: "choice",
    q: "Em hãy cho biết, một loạt các mục được chia nhỏ bởi các điểm chấm là gì?",
    opts: ["Đoạn văn bản (Paragraph)", "Danh sách đánh số (Numbered List)", "Danh sách ký hiệu đầu dòng (Bulleted List)", "Đề mục (Heading)"],
    a: 2, clue: "Điểm chấm tròn còn được gọi là bullet." },
  { stage: 5, type: "choice",
    q: "Việc sử dụng thích hợp của một danh sách được đánh số là gì?",
    opts: ["Liệt kê các mục theo một thứ tự hoặc trình tự thời gian nhất định.", "Gửi tin nhắn văn bản.", "Thêm hình ảnh vào bản trình chiếu.", "Viết một lá thư gồm nhiều đoạn."],
    a: 0, clue: "Số 1, 2, 3 cho biết cái nào đứng trước, cái nào đứng sau." },
  { stage: 5, type: "rows",
    q: "Em hãy chọn Đúng hoặc Sai cho mỗi phát biểu về các loại danh sách khác nhau.",
    choices: ["Đúng", "Sai"],
    rows: [
      ["Nên dùng danh sách đánh số khi thứ tự các mục đóng vai trò quan trọng.", 0],
      ["Danh sách đánh số dùng để biểu thị các bước trong một quy trình.", 0],
      ["Danh sách có ký hiệu đầu hàng dùng để chỉ ra các ý chính trong văn bản.", 0],
      ["Nên dùng danh sách có ký hiệu đầu hàng khi thứ tự các mục đóng vai trò quan trọng.", 1]
    ],
    clue: "Thứ tự quan trọng thì dùng danh sách đánh số." },

  /* ===== Bài 19 ===== */
  { stage: 6, type: "choice",
    q: "Em nên dùng loại định dạng nào để nhấn mạnh một từ trên trang Web?",
    opts: ["Danh sách đánh số", "Phông chữ nhỏ", "Gạch ngang giữa thân chữ (Strikethrough)", "Phông in đậm"],
    a: 3, clue: "Chữ nổi bật hơn khi nó dày và đậm hơn." },
  { stage: 6, type: "rows",
    q: "Em hãy chọn Đúng hoặc Sai với phát biểu về cách thức định dạng tài liệu.",
    choices: ["Đúng", "Sai"],
    rows: [
      ["Tiêu đề tài liệu nên được đặt ở đầu trang.", 0],
      ["Việc định dạng văn bản, như in đậm, in nghiêng, màu chữ và kích cỡ to nhỏ, có thể giúp xác định thứ tự tầm quan trọng cho các phần khác nhau ở tài liệu.", 0],
      ["Dùng kích cỡ phông chữ khác nhau cho từng đoạn văn giúp dễ đọc và hiểu những phần quan trọng nhất của tài liệu.", 1]
    ],
    clue: "Đổi cỡ chữ lung tung ở từng đoạn sẽ làm tài liệu rối mắt." },
  { stage: 6, type: "choice",
    q: "Em nên định dạng tiêu đề như thế nào để trông nổi bật hơn?",
    opts: ["Chuyển tiêu đề xuống cuối trang.", "Giảm kích cỡ phông chữ.", "Đính siêu liên kết (Hyperlink) vào tiêu đề.", "Đổi định dạng thành in đậm."],
    a: 3, clue: "Muốn nổi bật thì đừng làm chữ nhỏ đi hay giấu xuống cuối trang." },

  /* ===== Bài 20 ===== */
  { stage: 7, type: "choice",
    q: "Trong chương trình Microsoft Word, khi một hình ảnh được chọn, các Handle nhỏ xuất hiện xung quanh đường viền của hình ảnh. Em hãy cho biết, chức năng của các Handle là gì?",
    opts: ["Thay đổi kích thước hình ảnh.", "Cắt (Crop) hình ảnh.", "Thêm đường viền (Border) cho hình ảnh.", "Thêm các kiểu dáng (Style) cho hình ảnh."],
    a: 0, clue: "Em kéo các chấm nhỏ ở góc để làm ảnh to hơn hoặc nhỏ hơn." },
  { stage: 7, type: "rows",
    q: "Với mỗi câu phát biểu về cách sử dụng hình ảnh phù hợp trong tài liệu và bài trình chiếu, em hãy chọn Đúng hoặc Sai.",
    choices: ["Đúng", "Sai"],
    rows: [
      ["Hình ảnh nên phù hợp với đối tượng khán giả.", 0],
      ["Hình ảnh nên đặt gần những nội dung văn bản phù hợp nhất.", 0],
      ["Hình ảnh nên hài hước và không cần liên quan đến chủ đề.", 1]
    ],
    clue: "Hình ảnh luôn phải giúp người xem hiểu rõ chủ đề." },
  { stage: 7, type: "hotspot",
    q: "Em được yêu cầu tạo một bài trình chiếu về các chú chó đang chơi đùa. Em hãy chọn hình ảnh phù hợp nhất với chủ đề này trong phần trả lời.",
    img: "img/cho-choi-dua.jpg", alt: "4 hình ảnh về chó và cừu", ratio: "1211 / 196", wide: true,
    regions: [
      { id: "h1", x: 0.5, y: 3, w: 22.5, h: 94, label: "Hình 1" }, { id: "h2", x: 26, y: 3, w: 22.5, h: 94, label: "Hình 2" },
      { id: "h3", x: 51.5, y: 3, w: 22.5, h: 94, label: "Hình 3" }, { id: "h4", x: 77, y: 3, w: 22.5, h: 94, label: "Hình 4" }
    ],
    a: "h2", answerText: "Hình 2", clue: "Tìm hai chú chó đang cùng nhau chơi đùa, không phải nằm yên." },
  { stage: 7, type: "hotspot",
    q: "Em làm việc cho tiệm bánh Benny's Bakery. Em đã thêm 4 ảnh mẫu vào Menu nhưng thực tế chỉ cần 1 ảnh. Em nên giữ lại hình ảnh nào?",
    img: "img/benny-menu.png", alt: "Thực đơn tiệm bánh và 4 biểu tượng: máy ảnh, bóng bay, bánh kem, hộp quà", ratio: "665 / 264", wide: true,
    regions: [
      { id: "i1", x: 43.5, y: 33, w: 14, h: 34, label: "1" }, { id: "i2", x: 59.5, y: 33, w: 12, h: 34, label: "2" },
      { id: "i3", x: 72.5, y: 33, w: 11, h: 34, label: "3" }, { id: "i4", x: 84, y: 33, w: 12, h: 34, label: "4" }
    ],
    a: "i3", answerText: "Hình bánh kem", clue: "Tiệm này bán gì? Hãy chọn hình gắn với thực đơn của tiệm." },
  { stage: 7, type: "rows",
    q: "Em hãy chọn Đúng hoặc Sai cho mỗi phát biểu về quy tắc chọn hình ảnh phù hợp trong tài liệu và bài trình chiếu.",
    choices: ["Đúng", "Sai"],
    rows: [
      ["Hình ảnh nên bị vỡ nét.", 1],
      ["Hình ảnh nên liên quan đến chủ đề.", 0],
      ["Hình ảnh nên có dấu ẩn mờ (Watermark) từ các trang kho hình ảnh.", 1]
    ],
    clue: "Hình đẹp phải rõ nét, sạch sẽ và đúng chủ đề." },

  /* ===== Bài 21 ===== */
  { stage: 8, type: "choice",
    q: "Em đang chuẩn bị một bài trình chiếu dài 5 phút, mỗi trang chiếu sẽ có một hình ảnh. Em nên làm gì để cung cấp thông tin về từng hình ảnh?",
    opts: ["Đổi màu nền.", "Dùng phông chữ đậm.", "Đính kèm chú thích.", "Viết một đoạn văn dài về từng ảnh."],
    a: 2, clue: "Chú thích là dòng chữ ngắn nằm bên dưới hình ảnh." }
];

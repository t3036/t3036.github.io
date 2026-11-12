/* Ngân hàng câu hỏi Ôn tập Bài 15 → 21 (Spark 2).
   mc    : 1 đáp án đúng  — o: lựa chọn, a: chỉ số đúng
   multi : chọn nhiều     — a: mảng chỉ số đúng
   mi    : chọn hình      — o: tên ảnh, a: chỉ số đúng
   tf    : Đúng / Sai     — s: [[phát biểu, đúng?]]
   match : ghép đôi       — r: [[đề, đáp án, ảnh?]]
   fill  : gõ đáp án      — a: các cách viết chấp nhận */
const SECS = [
  {id:'b15',  n:'Bài 15',    e:'🏷️', c:'#2fa8ff', d:'Khái niệm trong sáng tạo nội dung'},
  {id:'b1617',n:'Bài 16–17', e:'🖥️', c:'#19c08a', d:'Ứng dụng văn phòng & tài liệu'},
  {id:'b18',  n:'Bài 18',    e:'📝', c:'#8b6cf6', d:'Danh sách Bullets & Numbering'},
  {id:'b19',  n:'Bài 19',    e:'🅱️', c:'#ff5d6c', d:'Định dạng văn bản cơ bản'},
  {id:'b20',  n:'Bài 20',    e:'🖼️', c:'#ff9f1c', d:'Thao tác với hình ảnh'},
  {id:'b21',  n:'Bài 21',    e:'💬', c:'#f25ca8', d:'Chú thích cho hình ảnh'}
];

const QS = [
/* ===== BÀI 15 ===== */
{s:'b15',t:'match',q:'Ghép mỗi thuật ngữ với định nghĩa đúng.',r:[
  ['Cách sắp xếp hoặc đặt vị trí văn bản.','Căn lề (Alignment)'],
  ['Một tài liệu có thể hiển thị bằng trình duyệt.','Trang (Page)'],
  ['Một đoạn mô tả ngắn về trang Web, xuất hiện ở phía trên đầu cửa sổ trình duyệt.','Tiêu đề (Title)'],
  ['Một trang đơn lẻ của một bài trình chiếu.','Trang chiếu (Slide)']]},
{s:'b15',t:'match',q:'Ghép mỗi thuật ngữ với định nghĩa đúng.',r:[
  ['Một chuỗi các câu đều liên quan đến một chủ đề duy nhất.','Đoạn văn (Paragraph)'],
  ['Một từ, cụm từ hoặc câu tóm tắt nội dung sẽ trình bày ở phần tiếp theo.','Đề mục (Heading)'],
  ['Kiểm soát cách hiển thị và hướng của một mục, ví dụ như đoạn văn hoặc hình ảnh.','Căn lề (Alignment)'],
  ['Một chuỗi các mục có ký hiệu hoặc số ở đầu.','Danh sách (List)']]},
{s:'b15',t:'match',q:'Ghép mỗi thuật ngữ với định nghĩa đúng.',r:[
  ['Định dạng canh trái và phải của một đoạn văn theo chiều ngang trên trang.','Căn lề (Alignment)'],
  ['Một kiểu định dạng văn bản, dùng để phân cấp và tổ chức các phần khác trong tài liệu.','Đề mục (Heading)'],
  ['Một chuỗi các mục có ký hiệu hoặc số ở đầu dòng.','Danh sách (List)'],
  ['Một chuỗi các câu đều liên quan đến một chủ đề duy nhất.','Đoạn văn (Paragraph)']]},
{s:'b15',t:'match',q:'Ghép mỗi thuật ngữ với định nghĩa đúng.',r:[
  ['Tính năng cho phép người dùng căn đều từng dòng văn bản.','Căn lề (Alignment)'],
  ['Một chuỗi các câu nói về một luận điểm hoặc chủ đề cụ thể.','Đoạn văn (Paragraph)'],
  ['Một đoạn mô tả ngắn về trang Web, xuất hiện ở phía trên đầu cửa sổ trình duyệt.','Tiêu đề (Title)']]},

/* ===== BÀI 16 + 17 ===== */
{s:'b1617',t:'mi',q:'Biểu tượng ứng dụng nào giúp tạo bài luận với văn bản, hình ảnh, đồ thị?',o:['i1.png','i2.png','i3.png','i4.png'],a:0},
{s:'b1617',t:'mi',q:'Biểu tượng ứng dụng nào giúp tạo bài trình chiếu?',o:['i1.png','i5.png','i6.png','i7.png'],a:1},
{s:'b1617',t:'mi',q:'Biểu tượng nào là của ứng dụng Google Docs?',o:['i1.png','i8.png','i9.png','i7.png'],a:3},
{s:'b1617',t:'mi',q:'Biểu tượng nào là của ứng dụng MS Word?',o:['i1.png','i6.png','i3.png','i10.png'],a:1},
{s:'b1617',t:'mi',q:'Biểu tượng nào là của ứng dụng MS PowerPoint?',o:['i9.png','i4.png','i3.png','i5.png'],a:3},
{s:'b1617',t:'mc',q:'Ứng dụng nào dùng để hiển thị hình ảnh, văn bản, video và nội dung trực quan khác cho khán giả?',o:['Ứng dụng bảng tính (Spreadsheet)','Ứng dụng trình chiếu (Slideshow)','Ứng dụng nhắn tin (Text/SMS)','Ứng dụng thư điện tử (Email)'],a:1},
{s:'b1617',t:'fill',q:'Em hãy cho biết, ứng dụng nào trong thanh dưới đây được dùng để tạo bài trình chiếu?',img:'i11.jpg',a:['powerpoint','power point','ms powerpoint','microsoft powerpoint'],show:'PowerPoint'},
{s:'b1617',t:'mc',q:'Tùy chọn nào dưới đây là một ứng dụng trình chiếu?',o:['Microsoft PowerPoint','Google Docs','Microsoft Excel','Gmail'],a:0},
{s:'b1617',t:'mc',q:'Hành động nào dùng để di chuyển một Slide trong PowerPoint?',o:['Reset bài trình chiếu.','Nhấp (Click) và kéo (Drag) Slide sang vị trí mới.','Tính năng Reorder Slides Appropriately.','Tính năng Layout.'],a:1},
{s:'b1617',t:'mc',q:'Các từ hoặc cụm từ ngắn ở đầu trang trình chiếu kĩ thuật số (Digital Slide) là gì?',o:['Nhà xuất bản (Publisher)','Đề mục (Heading)','Tác giả (Author)','URL'],a:1},
{s:'b1617',t:'mc',q:'Thẻ nào cho phép thêm một Video vào bài trình chiếu PowerPoint?',o:['File','Home','Design','Insert'],a:3},
{s:'b1617',t:'mc',q:'Chức năng nào trong PowerPoint cho phép áp dụng một hiệu ứng chuyển Slide (Transitions) cho tất cả các Slide?',o:['Apply To All','Effect Options','Advance Slide','Timing Duration'],a:0},
{s:'b1617',t:'multi',q:'Tùy chọn nào có thể thực hiện trong thẻ Animations của PowerPoint? (Chọn 2)',o:['Thay đổi thứ tự của các hiệu ứng hoạt hình phát đầu tiên trên một Slide.','Tạo tùy chỉnh hiệu ứng hoạt hình từ các tập tin trên máy tính.','Nhập hiệu ứng hoạt hình từ các chương trình khác.','Thay đổi thời gian khi phát hiệu ứng hoạt hình.'],a:[0,3]},
{s:'b1617',t:'mc',q:'Thẻ nào có thể chứa các tùy chọn trình chiếu?',o:['Review','File','Slide Show','Home'],a:2},
{s:'b1617',t:'mc',q:'Tùy chọn nào là ứng dụng đám mây?',o:['Notepad','Microsoft Word','Google Tài liệu','Văn bản sửa đổi'],a:2},
{s:'b1617',t:'mc',q:'Tiêu đề (Title) là gì?',o:['Các từ và cụm từ giới thiệu chủ đề của một tài liệu hoặc nội dung công việc.','Nguồn thông tin trong tài liệu.','Văn bản xuất hiện bên dưới một hình ảnh.','Cách ứng dụng xác thực người dùng.'],a:0},
{s:'b1617',t:'mc',q:'Trong tài liệu dưới đây, đâu là phần “tiêu đề”?',img:'i12.jpg',o:['Khung 1: “Thú cưng được yêu thích” (ở trên cùng)','Khung 2: đoạn văn giới thiệu về chó','Khung 3: “Loài Vật Được Nuôi Làm Thú Cưng Phổ Biến Nhất Ở Mỹ”','Khung 4: danh sách đánh số các loài vật'],a:0},
{s:'b1617',t:'mc',q:'Trong tài liệu dưới đây, đâu là vị trí của đề mục (Heading)?',img:'i12.jpg',o:['Khung 1: “Thú cưng được yêu thích” (ở trên cùng)','Khung 2: đoạn văn giới thiệu về chó','Khung 3: “Loài Vật Được Nuôi Làm Thú Cưng Phổ Biến Nhất Ở Mỹ”','Khung 4: danh sách có ký hiệu đầu dòng'],a:2},
{s:'b1617',t:'mc',q:'Khi viết tài liệu, em dùng gì để cho người đọc biết nội dung sẽ trình bày trong từng phần?',o:['Tóm lược (Summary)','Đề mục (Heading)','Đoạn văn (Paragraph)','Tiêu đề (Title)'],a:1},
{s:'b1617',t:'mc',q:'Alignment (căn lề) trong tài liệu là gì?',o:['Những người bạn mong đợi sẽ đọc nội dung của bạn.','Nội dung được sắp xếp như thế nào trên trang.','Khi các thành viên của một nhóm làm việc cùng nhau.','Văn bản xuất hiện bên dưới một hình ảnh.'],a:1},
{s:'b1617',t:'mc',q:'Trong Microsoft Word, lỗi chính tả được báo bằng gì?',o:['Một vòng tròn màu xanh lam.','Một đường lượn sóng màu xanh.','Một đường lượn sóng màu đỏ.','Một vòng tròn màu đỏ.'],a:2},
{s:'b1617',t:'mc',q:'Nhấp chuột ba lần vào vùng chọn (Selection Area) trong tài liệu Word sẽ làm gì?',o:['Chọn toàn bộ tài liệu.','Chọn một đoạn văn bản duy nhất.','Chọn một từ duy nhất.','Chọn một dòng duy nhất.'],a:0},
{s:'b1617',t:'mc',q:'Khi sao chép hoặc di chuyển văn bản, máy tính dùng nơi nào để tạm thời lưu văn bản đã sao chép?',o:['Clipboard','Driver','GPU','USB Drive'],a:0},
{s:'b1617',t:'mc',q:'Tính năng nào trong Word cho phép tìm và thay thế các từ trong toàn bộ tài liệu?',o:['Spelling & Grammar','Undo','Redo','Replace'],a:3},
{s:'b1617',t:'mc',q:'Tính năng nào được dùng với Find, sẽ thay thế văn bản sau khi nó được tìm thấy?',o:['Thay đổi (Change)','Thu hồi (Retrieve)','Thay thế (Substitute)','Thay thế (Replace)'],a:3},
{s:'b1617',t:'mc',q:'Tính năng tìm kiếm nào cho phép tìm các từ dựa trên các mẫu và trình tự cụ thể?',o:['Go To','Undo','Replace','Wildcard Characters (Ký tự đại diện)'],a:3},
{s:'b1617',t:'mc',q:'Văn bản được thêm vào bảng (Table) trong tài liệu Word như thế nào?',o:['Văn bản không khả dụng cho bảng trong Word.','Nhập thủ công: nhấp chuột vào ô rồi bắt đầu gõ.','Văn bản được nhập tự động.','Văn bản được chèn qua thẻ Insert.'],a:1},
{s:'b1617',t:'mc',q:'Tùy chọn nào trong Word cho phép người khác đọc hoặc chỉnh sửa bản sao tập tin của em?',o:['Save','Export','Share','Save As'],a:2},
{s:'b1617',t:'mc',q:'Khi chia sẻ tài liệu trực tuyến, quyền nào cho phép ai đó xem tài liệu nhưng không được thay đổi?',o:['Tạo nhận xét (Make Comments)','Chỉnh sửa tài liệu (Edit Document)','Xem tài liệu (View Document)'],a:2},
{s:'b1617',t:'mc',q:'Trong Excel, tiêu đề cột được biểu diễn bằng gì?',o:['Số La Mã (Roman Numerals)','Kí tự (Letters)','Con số (Numbers)','Màu sắc (Colors)'],a:1},
{s:'b1617',t:'mc',q:'Trong Excel, tiêu đề dòng được biểu diễn bằng gì?',o:['Số La Mã (Roman Numerals)','Kí tự (Letters)','Con số (Numbers)','Màu sắc (Colors)'],a:2},
{s:'b1617',t:'mc',q:'Phím nào di chuyển con trỏ xuống hàng bên dưới trong Excel?',o:['Backspace','Enter','Shift','Tab'],a:1},
{s:'b1617',t:'multi',q:'Cách nào sau đây làm tăng độ rộng cột trong Excel? (Chọn 2)',o:['Dùng tổ hợp phím Ctrl+Shift+R.','Nhấp (Click) và kéo (Drag) chuột lên ranh giới cột.','Nhấp chuột một lần lên ranh giới cột.','Nhấp đúp chuột (Double Click) lên ranh giới cột.'],a:[1,3]},

/* ===== BÀI 18 ===== */
{s:'b18',t:'mc',q:'Em làm việc tại tiệm bánh Doe’s Bakery. Trong hình, phần nào là danh sách có kí hiệu đầu hàng (bullets)?',img:'i13.png',o:['Danh sách tiệm bánh Doe’s Bake (Bánh quy, Bánh vòng, Cupcake…)','Danh sách “Bạn có thể đặt hàng theo 3 cách”'],a:0},
{s:'b18',t:'match',q:'Chọn loại danh sách phù hợp cho từng tình huống.',r:[
  ['Danh sách những món đồ ăn nhẹ em yêu thích.','Danh sách có ký hiệu đầu hàng'],
  ['Danh sách các loài vật có trong sở thú.','Danh sách có ký hiệu đầu hàng'],
  ['Danh sách hướng dẫn cách nướng bánh quy.','Danh sách đánh số'],
  ['Danh sách các bước lắp ráp một món đồ chơi mới.','Danh sách đánh số'],
  ['Danh sách các món đồ cần xếp vào hành lí để đi chơi.','Danh sách có ký hiệu đầu hàng']]},
{s:'b18',t:'mc',q:'Một loạt các mục được chia nhỏ bởi các điểm chấm là gì?',o:['Đoạn văn bản (Paragraph)','Danh sách đánh số (Numbered List)','Danh sách ký hiệu đầu dòng (Bulleted List)','Đề mục (Heading)'],a:2},
{s:'b18',t:'mc',q:'Danh sách đánh số được dùng thích hợp nhất để làm gì?',o:['Liệt kê các mục theo một thứ tự hoặc trình tự thời gian nhất định.','Gửi tin nhắn văn bản.','Thêm hình ảnh vào bản trình chiếu.','Viết một lá thư gồm nhiều đoạn.'],a:0},
{s:'b18',t:'tf',q:'Chọn Đúng hoặc Sai cho mỗi phát biểu về các loại danh sách.',s2:[
  ['Nên dùng danh sách đánh số khi thứ tự các mục đóng vai trò quan trọng.',true],
  ['Danh sách đánh số dùng để biểu thị các bước trong một quy trình.',true],
  ['Danh sách có ký hiệu đầu hàng dùng để chỉ ra các ý chính trong văn bản.',true],
  ['Nên dùng danh sách có ký hiệu đầu hàng khi thứ tự các mục đóng vai trò quan trọng.',false]]},
{s:'b18',t:'mc',q:'Tạo danh sách đánh dấu đầu dòng: Bước 1: chọn danh sách, nhấp thẻ Home. Bước 2: nhấp vào mũi tên của nút lệnh ………… Bước 3: chọn kiểu dấu đầu dòng thích hợp.',o:['Numbering','File','Bullets','None'],a:2},
{s:'b18',t:'match',q:'Ghép hình ảnh nút lệnh với tính năng phù hợp.',r:[
  ['','Numbering','i14.jpg'],['','Bullets','i15.jpg'],['','Font Color','i16.jpg']]},

/* ===== BÀI 19 ===== */
{s:'b19',t:'mc',q:'Em nên dùng loại định dạng nào để nhấn mạnh một từ trên trang Web?',o:['Danh sách đánh số','Phông chữ nhỏ','Gạch ngang giữa thân chữ (Strikethrough)','Phông in đậm'],a:3},
{s:'b19',t:'tf',q:'Chọn Đúng hoặc Sai về cách thức định dạng tài liệu.',s2:[
  ['Tiêu đề tài liệu nên được đặt ở đầu trang.',true],
  ['In đậm, in nghiêng, màu chữ và kích cỡ to nhỏ có thể giúp xác định thứ tự quan trọng của các phần trong tài liệu.',true],
  ['Dùng kích cỡ phông chữ khác nhau cho từng đoạn văn giúp dễ đọc và hiểu những phần quan trọng nhất.',false]]},
{s:'b19',t:'mc',q:'Em nên định dạng tiêu đề như thế nào để trông nổi bật hơn?',o:['Chuyển tiêu đề xuống cuối trang.','Giảm kích cỡ phông chữ.','Đính siêu liên kết (Hyperlink) vào tiêu đề.','Đổi định dạng thành in đậm.'],a:3},
{s:'b19',t:'multi',q:'Tùy chọn nào phù hợp để tăng kích thước Font chữ trong MS Word? (Chọn 2)',o:['Dùng nút lệnh Increase Font Size','Dùng nút lệnh Decrease Font Size','Dùng tổ hợp phím Ctrl + Shift + >','Dùng tổ hợp phím Ctrl + Shift + <'],a:[0,2]},
{s:'b19',t:'mc',q:'Trong MS Word, tổ hợp phím Ctrl + U dùng để làm gì?',o:['In đậm','In nghiêng','Gạch chân','Tăng kích thước phông chữ'],a:2},
{s:'b19',t:'mc',q:'Trong MS Word, tổ hợp phím Ctrl + B dùng để làm gì?',o:['In đậm','In nghiêng','Gạch chân','Giảm kích thước phông chữ'],a:0},
{s:'b19',t:'mc',q:'Chức năng tương ứng từ trái sang phải của ba nút lệnh được khoanh đỏ trong hình là gì?',img:'i17.png',o:['In nghiêng, In đậm, Gạch chân','In đậm, In nghiêng, Gạch chân','Gạch chân, In đậm, In nghiêng','In nghiêng, Gạch chân, In đậm'],a:1},

/* ===== BÀI 20 ===== */
{s:'b20',t:'mc',q:'Khi một hình ảnh được chọn trong Word, các Handle nhỏ xuất hiện quanh viền ảnh. Chức năng của Handle là gì?',o:['Thay đổi kích thước hình ảnh.','Cắt (Crop) hình ảnh.','Thêm đường viền (Border) cho hình ảnh.','Thêm các kiểu dáng (Style) cho hình ảnh.'],a:0},
{s:'b20',t:'tf',q:'Chọn Đúng hoặc Sai về cách dùng hình ảnh phù hợp trong tài liệu và bài trình chiếu.',s2:[
  ['Hình ảnh nên phù hợp với đối tượng khán giả.',true],
  ['Hình ảnh nên đặt gần những nội dung văn bản phù hợp nhất.',true],
  ['Hình ảnh nên hài hước và không cần liên quan đến chủ đề.',false]]},
{s:'b20',t:'mc',q:'Em tạo một bài trình chiếu về các chú chó đang chơi đùa. Hình nào phù hợp nhất?',img:'i18.jpg',o:['Hình 1: chó nằm nhìn camera','Hình 2: hai chú chó đang nhảy chơi với đĩa bay','Hình 3: chó con đang ngủ','Hình 4: đàn cừu và chó trên đồng cỏ'],a:1},
{s:'b20',t:'mc',q:'Em làm cho tiệm bánh Benny’s Bakery. Em thêm 4 ảnh mẫu vào Menu nhưng thực tế chỉ cần 1 ảnh. Em nên giữ lại hình nào?',img:'i19.png',o:['Hình máy ảnh','Hình bóng bay','Hình bánh kem','Hình hộp quà'],a:2},
{s:'b20',t:'tf',q:'Chọn Đúng hoặc Sai về quy tắc chọn hình ảnh phù hợp.',s2:[
  ['Hình ảnh nên bị vỡ nét.',false],
  ['Hình ảnh nên liên quan đến chủ đề.',true],
  ['Hình ảnh nên có dấu ẩn mờ (Watermark) từ các trang kho hình ảnh.',false]]},
{s:'b20',t:'multi',q:'Chèn hình ảnh vào tài liệu, trang chiếu có tác dụng gì? (Chọn 2)',o:['Trực quan.','Sinh động, hấp dẫn và dễ hiểu hơn.','Chỉ làm tăng dung lượng tập tin (File).','Làm cho nội dung phức tạp và khó hiểu.'],a:[0,1]},
{s:'b20',t:'mc',q:'Phát biểu nào dưới đây là SAI?',o:['Nhấp giữ chuột và kéo một Handle để tăng/giảm kích thước hình ảnh.','Nhấp giữ chuột và xoay nút Rotate Handle để xoay hình ảnh.','Nút lệnh Crop dùng để di chuyển hình ảnh.','Thẻ Picture Format hiển thị các công cụ hỗ trợ thao tác với hình ảnh.'],a:2},
{s:'b20',t:'match',q:'Ghép mỗi thuật ngữ với nội dung phù hợp.',r:[
  ['Crop','Cắt xén'],['Rotate Handle','Nút tùy chỉnh xoay'],['Handle','Nút tùy chỉnh']]},
{s:'b20',t:'multi',q:'Các thao tác với hình ảnh là gì? (Chọn 4)',o:['Thay đổi kích thước','Di chuyển','Xoay','Cắt xén','Tạo một ảnh mới'],a:[0,1,2,3]},

/* ===== BÀI 21 ===== */
{s:'b21',t:'mc',q:'Em chuẩn bị bài trình chiếu dài 5 phút, mỗi trang chiếu có một hình ảnh. Em nên làm gì để cung cấp thông tin về từng hình ảnh?',o:['Đổi màu nền.','Dùng phông chữ đậm.','Đính kèm chú thích.','Viết một đoạn văn dài về từng ảnh.'],a:2},
{s:'b21',t:'mc',q:'Tùy chọn nào là lợi ích của việc tạo chú thích cho một hình ảnh?',o:['Cung cấp thông tin bổ sung.','Gia tăng truyền tải thông điệp.','Hỗ trợ người dùng có vấn đề về thị giác.','Tất cả các đáp án trên đều đúng.'],a:3},
{s:'b21',t:'mc',q:'Thẻ lệnh nào giúp tạo chú thích cho một hình ảnh trong MS Word?',o:['Thẻ Design','Thẻ Layout','Thẻ References','Thẻ Review'],a:2},
{s:'b21',t:'mc',q:'Nhấp chuột phải vào hình ảnh, một Menu xuất hiện, em chọn lệnh ____________, nhập nội dung vào mục Caption rồi chọn OK. Lệnh đó là gì?',o:['Insert Caption','Add Caption','Import Caption','View Caption'],a:0}
];

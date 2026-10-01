"use strict";

/* ============================================================
DỮ LIỆU CÂU HỎI (giáo viên chỉ cần sửa/thêm ở đây)
Nguồn: SparkLV3_QLesson_QuanLyThongTin.docx — 28 câu, giữ nguyên nội dung & đáp án.
Mỗi câu:
  id, group (tên bài), short (tiêu đề rút gọn), type, question,
  quote (tùy chọn, đoạn trích), prompt (tùy chọn, yêu cầu), explanation, tip (tùy chọn)
Các dạng (type):
  "single"  : options[], answer = chỉ số đáp án đúng (bắt đầu từ 0)
  "multi"   : options[], answers = [các chỉ số đúng], pick = số lượng phải chọn
  "tf-set"  : items = [{text, answer:true/false}]  (true = "Có", false = "Không")
  "match"   : pairs = [{left: phát biểu, right: thuật ngữ}]
   ============================================================ */
const GAME_TITLE = "Chuyến Tàu Tri Thức";

const QUESTION_BANK = [
  /* ===== Bài 9: Dữ liệu, thông tin và kiến thức ===== */
  { id:1, group:"Bài 9", short:"Câu hỏi “vì sao” và “như thế nào”", type:"single",
    question:"Em hãy cho biết, tùy chọn nào trả lời cho các câu hỏi vì sao và như thế nào?",
    options:["Kiến thức","Cộng tác","Dữ liệu","Thông tin"], answer:0,
    explanation:"Kiến thức là sự hiểu biết sâu sắc có được khi áp dụng ý nghĩa vào thông tin, nên giúp trả lời “vì sao” và “như thế nào”.",
    tip:"Dữ liệu → Thông tin → Kiến thức." },

  { id:2, group:"Bài 9", short:"Ghép thuật ngữ: Data, Information, Knowledge", type:"match",
    question:"Em hãy di chuyển từng thuật ngữ sang phát biểu tương ứng.",
    pairs:[
      {left:"Các sự kiện và số liệu thô được thu thập hoặc ghi nhận lại.", right:"Data (Dữ liệu)"},
      {left:"Kết quả của việc xử lí và tổ chức dữ liệu để làm cho dữ liệu có ý nghĩa và hữu ích.", right:"Information (Thông tin)"},
      {left:"Sự hiểu biết và hiểu biết sâu sắc thu thập được từ việc áp dụng ý nghĩa vào thông tin.", right:"Knowledge (Kiến thức)"},
      {left:"Việc thu thập, quản lí và phân phối thông tin từ một hoặc nhiều nguồn.", right:"Information Management (Quản lí thông tin)"}
    ],
    explanation:"Dữ liệu là số liệu thô; thông tin là dữ liệu đã được xử lí có ý nghĩa; kiến thức là sự hiểu biết từ thông tin; quản lí thông tin là thu thập, quản lí và phân phối thông tin.",
    tip:"Thô → xử lí → hiểu sâu." },

  { id:3, group:"Bài 9", short:"Ghép: Kiến thức, Dữ liệu, Thông tin (1)", type:"match",
    question:"Em hãy di chuyển từng thuật ngữ sang phát biểu tương ứng.",
    pairs:[
      {left:"Dữ liệu được thu thập về dữ kiện hoặc một người để giúp đưa ra các quyết định đủ thông tin.", right:"Kiến thức"},
      {left:"Dữ liệu thô, chưa được phân tích và sắp xếp.", right:"Dữ liệu"},
      {left:"Dữ liệu được chuẩn bị, đã được xử lí, phân tích và lập cấu trúc.", right:"Thông tin"}
    ],
    explanation:"Dữ liệu còn thô và chưa sắp xếp; thông tin là dữ liệu đã được xử lí, phân tích và lập cấu trúc; kiến thức giúp đưa ra quyết định đủ thông tin.",
    tip:"Chưa sắp xếp = dữ liệu. Đã sắp xếp = thông tin." },

  { id:4, group:"Bài 9", short:"Ghép: áo khoác trắng", type:"match",
    question:"Em hãy di chuyển từng thuật ngữ sang phát biểu tương ứng.",
    pairs:[
      {left:"Áo khoác màu trắng thường không hấp thụ nhiệt nhiều như các màu sậm hơn.", right:"Kiến thức"},
      {left:"Áo khoác có màu trắng.", right:"Thông tin"},
      {left:"Màu trắng.", right:"Dữ liệu"}
    ],
    explanation:"“Màu trắng” chỉ là một dữ kiện (dữ liệu). “Áo khoác có màu trắng” đã có ý nghĩa (thông tin). Hiểu rằng áo trắng hấp thụ ít nhiệt là kiến thức.",
    tip:"Một từ đơn lẻ = dữ liệu." },

  { id:5, group:"Bài 9", short:"Ghép: xe màu đỏ", type:"match",
    question:"Hãy di chuyển từng thuật ngữ sang phát biểu tương ứng.",
    pairs:[
      {left:"Màu đỏ", right:"Dữ liệu"},
      {left:"Có nhiều xe màu đỏ chạy trong mùa hè hơn so với những xe có màu khác.", right:"Kiến thức"},
      {left:"Xe màu đỏ", right:"Thông tin"}
    ],
    explanation:"“Màu đỏ” là dữ liệu. “Xe màu đỏ” là thông tin. Nhận ra có nhiều xe đỏ chạy trong mùa hè hơn xe màu khác là kiến thức.",
    tip:"Dữ liệu → Thông tin → Kiến thức." },

  /* ===== Bài 10: Đánh giá thông tin — file không có câu hỏi ===== */

  /* ===== Bài 11: Quan điểm và thiên kiến ===== */
  { id:6, group:"Bài 11", short:"Thiên kiến (Bias) nghĩa là gì?", type:"single",
    question:"Em hãy cho biết, thuật ngữ Thiên kiến (Bias) có nghĩa là gì trong truyền thông kĩ thuật số?",
    options:["Xu hướng ủng hộ một bên hoặc có một quan điểm cụ thể.",
             "Là loại trò chơi trực tuyến được chơi với ít nhất 3 người.",
             "Một tính năng cho phép em thay đổi cài đặt phông chữ.",
             "Một cách để bày tỏ ý kiến trên trực tuyến của em, đặc biệt là phương tiện truyền thông xã hội."],
    answer:0,
    explanation:"Thiên kiến (Bias) là xu hướng ủng hộ một bên hoặc có một quan điểm cụ thể." },

  { id:7, group:"Bài 11", short:"Phát biểu nào thể hiện thiên kiến?", type:"single",
    question:"Em hãy cho biết, phát biểu nào sau đây thể hiện sự thiên kiến?",
    options:["Sử dụng điện thoại thông minh là cần thiết để mọi người duy trì kết nối.",
             "Tôi thích chơi trò chơi điện tử vì chúng rất thú vị.",
             "Học lập trình máy tính có thể giúp phát triển kĩ năng tư duy phản biện.",
             "Ăn rau giúp bạn duy trì lối sống lành mạnh."],
    answer:0,
    explanation:"Câu “Sử dụng điện thoại thông minh là cần thiết…” thể hiện thiên kiến vì nghiêng hẳn về một quan điểm." },

  { id:8, group:"Bài 11", short:"Thiên kiến trong Email (Orson D)", type:"tf-set",
    question:"Em nhận được Email sau:",
    quote:"“Orson D đang tranh cử cho chức chủ tịch của câu lạc bộ khoa học. Tớ biết bạn ấy ghét khoa học vì bạn ấy chẳng bao giờ tham gia hội chợ khoa học nào cả. Bạn ấy nhận được một điểm B ở bài kiểm tra tuần trước.”",
    prompt:"Với mỗi câu phát biểu trích từ Email này, em hãy chọn Có nếu phát biểu đó có bao gồm thiên kiến hoặc Không nếu không phải.",
    items:[
      {text:"Orson D đang tranh cử cho chức chủ tịch của câu lạc bộ khoa học.", answer:false},
      {text:"Tớ biết bạn ấy ghét khoa học vì bạn ấy chẳng bao giờ tham gia hội chợ khoa học nào cả.", answer:true},
      {text:"Bạn ấy nhận được một điểm B ở bài kiểm tra tuần trước.", answer:false}
    ],
    explanation:"Chỉ câu “Tớ biết bạn ấy ghét khoa học…” có thiên kiến, vì đó là suy đoán cá nhân. Hai câu còn lại nêu sự việc." },

  { id:9, group:"Bài 11", short:"Thiên kiến trong bài đăng mạng xã hội", type:"tf-set",
    question:"Em đọc được bài đăng sau trên mạng xã hội:",
    quote:"“Biến đổi khí hậu chắc chắn là không có thật vì Orson bỏ phiếu chống lại chuyện đó. Mùa hè năm nay mát hơn mùa hè năm ngoái. Hầu hết những người tin vào biến đổi khí hậu là những người đưa ra thuyết âm mưu.”",
    prompt:"Với mỗi câu phát biểu trong bài đăng trên mạng xã hội này, hãy chọn Có nếu phát biểu đó có bao gồm thiên kiến hoặc Không nếu không phải.",
    items:[
      {text:"Biến đổi khí hậu chắc chắn là không có thật vì Orson bỏ phiếu chống lại chuyện đó.", answer:true},
      {text:"Mùa hè năm nay mát hơn mùa hè năm ngoái.", answer:false},
      {text:"Hầu hết những người tin vào biến đổi khí hậu là những người đưa ra thuyết âm mưu.", answer:true}
    ],
    explanation:"Phát biểu về việc Orson bỏ phiếu và phát biểu về “những người tin vào biến đổi khí hậu” có thiên kiến vì nghiêng về một phía và chê người khác. Phát biểu về mùa hè chỉ so sánh thời tiết." },

  { id:10, group:"Bài 11", short:"Thiên kiến trong tin nhắn: áo khoác", type:"tf-set",
    question:"Em nhận được tin nhắn sau:",
    quote:"“Áo khoác đang được giảm giá 40%. Đặt hàng ngay hôm nay để được giao hàng miễn phí. Chúng tôi có đủ mọi kích cỡ.”",
    prompt:"Với mỗi câu phát biểu trong tin nhắn này, em hãy chọn Có nếu phát biểu đó có bao gồm thiên kiến hoặc chọn Không nếu không phải.",
    items:[
      {text:"Áo khoác đang được giảm giá 40%.", answer:false},
      {text:"Đặt hàng ngay hôm nay để được giao hàng miễn phí.", answer:false},
      {text:"Chúng tôi có đủ mọi kích cỡ.", answer:false}
    ],
    explanation:"Cả ba câu chỉ thông báo thông tin bán hàng, không đứng về một phía nào, nên không có thiên kiến." },

  { id:11, group:"Bài 11", short:"Thiên kiến trong tin nhắn: laptop", type:"tf-set",
    question:"Em nhận được tin nhắn sau:",
    quote:"“Laptop đang được giảm giá 40%. Đặt hàng ngay hôm nay để được giao hàng miễn phí. Chúng tôi có đủ mọi cấu hình.”",
    prompt:"Với mỗi câu trong tin nhắn này, bạn hãy chọn Có nếu câu đó có chứa thiên kiến hoặc chọn Không nếu không có.",
    items:[
      {text:"Laptop đang được giảm giá 40%.", answer:false},
      {text:"Đặt hàng ngay hôm nay để được giao hàng miễn phí.", answer:false},
      {text:"Chúng tôi có đủ mọi cấu hình.", answer:false}
    ],
    explanation:"Cả ba câu chỉ thông báo thông tin bán hàng, không đứng về một phía nào, nên không có thiên kiến." },

  { id:12, group:"Bài 11", short:"Thiên kiến trong tin nhắn: quần áo", type:"tf-set",
    question:"Bạn nhận được tin nhắn sau:",
    quote:"“Quần áo đang được giảm giá 50%. Đặt hàng ngay hôm nay để được giao hàng miễn phí. Chúng tôi có đủ mọi kích cỡ.”",
    prompt:"Với mỗi câu trong tin nhắn này, bạn hãy chọn Có nếu câu đó có chứa thiên kiến hoặc chọn Không nếu không có.",
    items:[
      {text:"Quần áo đang được giảm giá 50%.", answer:false},
      {text:"Đặt hàng ngay hôm nay để được giao hàng miễn phí.", answer:false},
      {text:"Chúng tôi có đủ mọi kích cỡ.", answer:false}
    ],
    explanation:"Cả ba câu chỉ thông báo thông tin bán hàng, không đứng về một phía nào, nên không có thiên kiến." },

  /* ===== Bài 12+13: Nguồn thông tin đáng tin cậy ===== */
  { id:13, group:"Bài 12+13", short:"Orson và giới hạn độ tuổi mạng xã hội", type:"single",
    question:"Bạn Orson muốn dùng mạng xã hội nhưng nền tảng này có giới hạn độ tuổi. Những người 12 tuổi trở xuống chưa được phép sử dụng mạng xã hội. Bạn Orson sau 2 tháng nữa mới đủ 13 tuổi. Bạn ấy nên làm gì?",
    options:["Tạo hồ sơ giả làm một người 25 tuổi.",
             "Đợi đến lúc đủ 13 tuổi rồi tạo tài khoản.",
             "Đăng nhập và dùng tài khoản của bố hoặc mẹ của bạn ấy.",
             "Thay đổi ngày sinh trên hệ thống đăng kí để đủ 13 tuổi."],
    answer:1,
    explanation:"Cách đúng là chờ đến khi đủ tuổi rồi mới tạo tài khoản. Khai sai tuổi hay dùng tài khoản của người khác là không phù hợp." },

  { id:14, group:"Bài 12+13", short:"Nguồn đáng tin cậy: cá voi xanh (1)", type:"tf-set",
    question:"Với mỗi câu phát biểu, em hãy chọn Có nếu là nguồn thông tin đáng tin cậy hoặc chọn Không nếu không phải.",
    items:[
      {text:"Tác giả sử dụng trang Web của National Geographic về cá voi xanh.", answer:true},
      {text:"Không có thông tin trích dẫn nào trong bài viết về cá voi xanh.", answer:false},
      {text:"Sử dụng một bách khoa toàn thư trực tuyến mà trường của em giới thiệu.", answer:true}
    ],
    explanation:"Trang của tổ chức uy tín và bách khoa toàn thư do trường giới thiệu là nguồn đáng tin cậy. Bài viết không có trích dẫn thì chưa thể kiểm chứng." },

  { id:15, group:"Bài 12+13", short:"Nguồn đáng tin cậy: cá voi xanh (2)", type:"tf-set",
    question:"Với mỗi câu phát biểu, em hãy chọn Có nếu nguồn đó đáng tin cậy hoặc chọn Không nếu không phải.",
    items:[
      {text:"Tác giả sử dụng trang Web của National Geographic về cá voi xanh.", answer:true},
      {text:"Không có thông tin trích dẫn nào trong bài viết về cá voi xanh.", answer:false},
      {text:"Tác giả nghiên cứu nhiều nguồn để đánh giá nơi cá voi xanh di cư đến.", answer:true}
    ],
    explanation:"Trang National Geographic và việc đối chiếu nhiều nguồn là đáng tin cậy. Bài không có trích dẫn thì chưa thể kiểm chứng." },

  { id:16, group:"Bài 12+13", short:"Cách xác định nguồn đáng tin cậy", type:"tf-set",
    question:"Với mỗi phát biểu về việc xác định một nguồn thông tin đáng tin cậy, hãy chọn Có nếu đó là việc làm phù hợp và chọn Không nếu không phải.",
    items:[
      {text:"Đọc bình luận từ mạng xã hội.", answer:false},
      {text:"Thực hiện một khảo sát với những người bạn thân.", answer:false},
      {text:"Sử dụng một bách khoa toàn thư trực tuyến mà trường của em giới thiệu.", answer:true}
    ],
    explanation:"Bình luận mạng xã hội hay ý kiến của vài người bạn chưa đủ tin cậy. Bách khoa toàn thư do trường giới thiệu là nguồn phù hợp." },

  { id:17, group:"Bài 12+13", short:"Tìm nhiều trang Web về khủng long", type:"single",
    question:"Khi muốn tìm ra nhiều trang Web viết về chủ đề khủng long, em nên sử dụng trang Web nào để thực hiện một lệnh tìm kiếm?",
    options:["dinosaurs.com","google.com","encyclopedia.com","wikipedia.com"], answer:1,
    explanation:"google.com là công cụ tìm kiếm, cho em danh sách nhiều trang Web về cùng một chủ đề." },

  { id:18, group:"Bài 12+13", short:"Nguồn đáng tin cậy cho bài viết về công nghệ", type:"tf-set",
    question:"Bạn cần tìm các nguồn thông tin đáng tin cậy và hợp lệ cho một bài viết của mình về tình hình sử dụng công nghệ hiện nay ở trường học.",
    prompt:"Với mỗi phát biểu về các nguồn thông tin, em hãy chọn Có nếu là nguồn đáng tin cậy, chọn Không nếu không phải.",
    items:[
      {text:"Một bài viết được đăng bởi một trường đại học với URL có đuôi là .com.", answer:false},
      {text:"Trang Web được phát hành vào tháng 01 năm 1989.", answer:false},
      {text:"Có hai nguồn tài nguyên khác đồng ý với trang Web này.", answer:true}
    ],
    explanation:"Nguồn có nhiều nguồn khác đồng ý thì đáng tin hơn. Trang quá cũ (1989) hoặc có URL chưa phù hợp với một trường đại học thì chưa đáng tin cậy." },

  { id:19, group:"Bài 12+13", short:"Biết tác giả của trang Web ở đâu?", type:"single",
    question:"Em hãy cho biết, tùy chọn nào sau đây sẽ cho em biết tác giả của một trang Web?",
    options:["Số điện thoại ở mục liên hệ với chúng tôi","URL","Trang hỗ trợ khách hàng","Trang giới thiệu"], answer:3,
    explanation:"Trang giới thiệu thường cho biết ai là tác giả hoặc ai đứng sau trang Web." },

  { id:20, group:"Bài 12+13", short:"Kiểm tra thông tin có chính xác", type:"single",
    question:"Em hãy cho biết, làm thế nào có thể xác định thông tin trên một trang Web có chính xác và đáng tin cậy hay không?",
    options:["Mọi thứ trên Internet đều là sự thật và có thể tin được.",
             "Tìm kiếm các trích dẫn hoặc tài liệu tham khảo đến các nguồn đáng tin cậy khác.",
             "Chia sẻ thông tin với bạn bè và xem họ nghĩ gì.",
             "Kiểm tra xem trang Web có tên hấp dẫn và thiết kế đầy màu sắc hay không."],
    answer:1,
    explanation:"Trích dẫn hoặc tài liệu tham khảo đến các nguồn đáng tin cậy giúp em kiểm chứng thông tin." },

  { id:21, group:"Bài 12+13", short:"Thông tin có trong trích dẫn (chọn 3)", type:"multi",
    question:"Em có các trích dẫn sau:",
    quote:"Orson, D: 2010. Sách mẫu. (Tái bản lần thứ 2). Companypro.",
    prompt:"Em hãy cho biết, thông tin nào có trong trích dẫn? (Chọn 3)",
    options:["Số trang (Number of Pages)","URL (Uniform Resource Locator)","Tập tin (File)",
             "Tác giả (Author)","Tiêu đề (Title)","Nhà xuất bản (Publisher)"],
    answers:[3,4,5], pick:3,
    explanation:"Trích dẫn có tác giả (Orson, D), tiêu đề (Sách mẫu) và nhà xuất bản (Companypro)." },

  { id:22, group:"Bài 12+13", short:"Mục đích của trích dẫn", type:"single",
    question:"Em hãy cho biết, mục đích của việc đưa các trích dẫn vào một bài nghiên cứu ở trường là gì?",
    options:["Để thêm trang vào bài tập.","Để làm cho nhiệm vụ của em trông đẹp hơn.",
             "Để ghi công cho các tác giả ban đầu và tránh đạo văn.","Để thể hiện kiến thức của em về nhiều nguồn."],
    answer:2,
    explanation:"Trích dẫn giúp ghi công cho tác giả ban đầu và tránh đạo văn." },

  /* ===== Bài 14: Bảo vệ sở hữu trí tuệ ===== */
  { id:23, group:"Bài 14", short:"Bảo vệ sách, phim, trò chơi, hình ảnh", type:"single",
    question:"Em hãy cho biết, phương tiện nào được sử dụng để bảo vệ sách, phim, trò chơi điện tử và hình ảnh?",
    options:["Bản quyền (Copyright)","Bằng sáng chế (Patent)","Mã nguồn mở (Open Source)","Nhãn hiệu (Trademark)"], answer:0,
    explanation:"Bản quyền (Copyright) bảo vệ các tác phẩm sáng tạo như sách, phim, trò chơi điện tử và hình ảnh." },

  { id:24, group:"Bài 14", short:"Ghép: Open Source, Proprietary, Cookies…", type:"match",
    question:"Em hãy di chuyển từng thuật ngữ sang phát biểu tương ứng.",
    pairs:[
      {left:"Phần mềm hoặc công nghệ được cung cấp miễn phí cho mọi người sử dụng, sửa đổi và phân phối.", right:"Open Source (Nguồn mở)"},
      {left:"Công nghệ thuộc sở hữu của một công ty hoặc cá nhân cụ thể.", right:"Proprietary (Độc quyền)"},
      {left:"Những sáng tạo của trí tuệ được pháp luật bảo vệ để trao cho người sáng tạo hoặc chủ sở hữu các quyền độc quyền để kiểm soát và hưởng lợi từ những sáng tạo của họ.", right:"Intellectual Property (Sở hữu trí tuệ)"},
      {left:"Những mẩu dữ liệu nhỏ mà các trang Web lưu trữ trên máy tính hoặc thiết bị của em.", right:"Cookies"}
    ],
    explanation:"Nguồn mở là miễn phí cho mọi người; độc quyền thuộc về một chủ sở hữu; sở hữu trí tuệ là những sáng tạo được pháp luật bảo vệ; cookies là mẩu dữ liệu nhỏ lưu trên thiết bị." },

  { id:25, group:"Bài 14", short:"Ghép: Copyright, Credibility, Relevance…", type:"match",
    question:"Em hãy di chuyển từng thuật ngữ sang phát biểu tương ứng.",
    pairs:[
      {left:"Một hình thức bảo vệ pháp lí mang lại cho người sáng tạo tác phẩm gốc quyền độc quyền kiểm soát cách tác phẩm của họ được sử dụng và phân phối.", right:"Copyright (Bản quyền)"},
      {left:"Thông tin có thể tin được hay đáng tin cậy như thế nào.", right:"Credibility (Sự uy tín)"},
      {left:"Mức độ áp dụng hoặc hữu ích của thông tin, kết quả tìm kiếm hoặc nội dung.", right:"Relevance (Mức độ liên quan)"},
      {left:"Cách ai đó nhìn hoặc hiểu điều gì đó dựa trên kinh nghiệm, kiến thức và niềm tin của chính họ.", right:"Perspective (Quan điểm)"}
    ],
    explanation:"Bản quyền là bảo vệ pháp lí cho tác phẩm gốc; sự uy tín là mức độ đáng tin; mức độ liên quan là mức độ hữu ích của thông tin; quan điểm là cách mỗi người nhìn nhận dựa trên kinh nghiệm và niềm tin của họ." },

  /* ===== Bài 15: Khám phá Creative Commons ===== */
  { id:26, group:"Bài 15", short:"Tổ chức cấp quyền sử dụng miễn phí", type:"single",
    question:"Em hãy cho biết, tổ chức nào cung cấp phương thức để người sáng tạo có thể cấp quyền sử dụng miễn phí sản phẩm sáng tạo của họ theo luật bản quyền?",
    options:["Creative Commons","Canva","Wix","Shutterstock"], answer:0,
    explanation:"Creative Commons cung cấp phương thức để người sáng tạo cho phép người khác sử dụng sản phẩm của mình." },

  { id:27, group:"Bài 15", short:"Mục đích của Creative Commons", type:"single",
    question:"Mục đích của Creative Commons là gì?",
    options:["Cho phép nhà sáng tạo trao quyền sử dụng sản phẩm của họ cho người khác.",
             "Cho phép nhà sáng tạo từ bỏ mọi quyền đối với sản phẩm của họ.",
             "Cho phép mọi người tự do sao chép mọi sản phẩm mà không cần ghi công người sáng tạo.",
             "Cho phép mọi người chỉnh sửa và bán sản phẩm của người khác."],
    answer:0,
    explanation:"Creative Commons cho phép nhà sáng tạo trao quyền sử dụng sản phẩm của họ cho người khác." },

  { id:28, group:"Bài 15", short:"Mục tiêu chính của Creative Commons", type:"single",
    question:"Em hãy cho biết, tùy chọn nào là mục tiêu chính của Creative Commons?",
    options:["Để phân phối thông tin một cách tự do.","Để giới hạn việc sáng tác nghệ thuật.",
             "Để đảm bảo mọi phần mềm đều được sở hữu độc quyền.","Để áp dụng luật bản quyền đến mức độ cao nhất."],
    answer:0,
    explanation:"Mục tiêu chính của Creative Commons là phân phối thông tin một cách tự do." }
];

/* Mốc phần thưởng (tính theo số trạm đã hoàn thành). Chỉ để động viên. */
const milestones = [
  {at:7,  icon:"🚂", name:"Đã rời ga"},
  {at:14, icon:"🌟", name:"Nhà thám hiểm nhí"},
  {at:21, icon:"🏅", name:"Người chinh phục tri thức"},
  {at:28, icon:"🏆", name:"Chủ nhân Kho Báu Tri Thức"}
];

/* Tỉ lệ câu đúng tối thiểu để được chúc mừng "ĐẠT" */
const PASS_RATE = 0.9;

/* Lời động viên ở màn hình cuối (từ điểm cao xuống thấp) */
const endMessages = [
  {min:28, text:"Kho báu Tri Thức đã được mở! Tuyệt vời!"},
  {min:23, text:"Bạn đã hoàn thành hành trình với rất nhiều kiến thức mới!"},
  {min:18, text:"Bạn đã đi được một chặng đường thật dài. Hãy xem lại những câu mình chưa chắc nhé!"},
  {min:0,  text:"Bạn đã hoàn thành chuyến tàu! Hãy xem lại lời giải và thử lại để khám phá thêm."}
];

let questions = QUESTION_BANK;
const TOTAL = QUESTION_BANK.length;
const $ = s => document.querySelector(s);

/* Tạo phần tử DOM an toàn (dùng textContent, không dùng innerHTML với dữ liệu câu hỏi) */
function h(tag, props = {}, ...kids) {
  const e = document.createElement(tag);
  for (const [k, v] of Object.entries(props)) {
    if (k === "class") e.className = v;
    else if (k === "text") e.textContent = v;
    else if (k.startsWith("on")) e.addEventListener(k.slice(2), v);
    else e.setAttribute(k, v);
  }
  for (const c of kids.flat()) if (c != null) e.append(c.nodeType ? c : document.createTextNode(c));
  return e;
}
const shuffle = a => { a = [...a]; for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };

/* Xáo trộn thứ tự câu hỏi và thứ tự đáp án (single/multi) mỗi lượt chơi; đáp án đúng được ánh xạ lại theo vị trí mới */
function randomizeQuestions() {
  return shuffle(QUESTION_BANK).map(q => {
    if (q.type === "tf-set") return { ...q, items: shuffle(q.items) };
    if (q.type !== "single" && q.type !== "multi") return q;
    const order = shuffle(q.options.map((_, i) => i));   // order[vị trí mới] = chỉ số cũ
    const pos = old => order.indexOf(old);
    const c = { ...q, options: order.map(i => q.options[i]) };
    if (q.type === "single") c.answer = pos(q.answer);
    else c.answers = q.answers.map(pos);
    return c;
  });
}

/* ---------- Âm thanh (mặc định TẮT) ---------- */
let soundOn = false, actx = null;
function beep(freqs) {
  if (!soundOn) return;
  try {
    actx = actx || new (window.AudioContext || window.webkitAudioContext)();
    const d = 0.13; let t = actx.currentTime;
    freqs.forEach((f, i) => {
      const o = actx.createOscillator(), g = actx.createGain();
      o.type = "sine"; o.frequency.value = f;
      g.gain.setValueAtTime(0.12, t + i * d);
      g.gain.exponentialRampToValueAtTime(0.001, t + (i + 1) * d);
      o.connect(g); g.connect(actx.destination); o.start(t + i * d); o.stop(t + (i + 1) * d);
    });
  } catch (e) {}
}
const SND = { click:[600], right:[660, 880], wrong:[440, 392], station:[523, 659], finish:[523, 659, 784, 1047] };

/* ---------- Trạng thái ---------- */
let state, ctl;   // ctl = bộ điều khiển của câu hỏi đang hiển thị
function newState() { return { i: 0, results: Array(TOTAL).fill(null), score: 0 }; }

/* ============================================================
   BỘ HIỂN THỊ THEO DẠNG CÂU (đọc trường "type")
   Mỗi renderer: build(q, box, onChange) -> {complete(), correct(), lock(), reveal(), hint()}
                answerNode(q) -> nội dung "đáp án đúng"
   Muốn thêm dạng mới: thêm một mục vào RENDERERS.
   ============================================================ */
const LETTERS = "ABCDEFGH";
const RENDERERS = {

  /* --- Trắc nghiệm 1 đáp án --- */
  single: {
    build(q, box, onChange) {
      let sel = null, locked = false;
      const btns = q.options.map((t, i) => h("button", { class: "opt", type: "button", onclick: () => {
        if (locked) return; sel = i; beep(SND.click);
        btns.forEach((b, j) => b.classList.toggle("selected", j === i)); onChange();
      } }, h("span", { class: "letter", text: LETTERS[i] }), h("span", { text: t })));
      box.append(...btns);
      return {
        complete: () => sel !== null,
        correct: () => sel === q.answer,
        lock() { locked = true; btns.forEach(b => b.classList.add("lock")); },
        reveal() { btns.forEach((b, j) => { b.classList.remove("selected"); if (j === q.answer) b.classList.add("right"); else if (j === sel) b.classList.add("wrong"); }); },
        hint: () => ""
      };
    },
    answerNode: q => h("span", { text: q.options[q.answer] })
  },

  /* --- Trắc nghiệm nhiều lựa chọn (cần nút Xác nhận) --- */
  multi: {
    build(q, box, onChange) {
      const chosen = new Set(); let locked = false;
      box.classList.add("multi");
      const hint = h("div", { class: "pickhint" });
      const upd = () => { hint.textContent = `Đã chọn ${chosen.size}/${q.pick}`; };
      const btns = q.options.map((t, i) => h("button", { class: "opt", type: "button", onclick: () => {
        if (locked) return; beep(SND.click);
        chosen.has(i) ? chosen.delete(i) : chosen.add(i);
        btns[i].classList.toggle("selected", chosen.has(i)); upd(); onChange();
      } }, h("span", { class: "letter", text: LETTERS[i] }), h("span", { text: t })));
      upd(); box.append(hint, ...btns);
      return {
        complete: () => chosen.size === q.pick,
        correct: () => chosen.size === q.answers.length && q.answers.every(a => chosen.has(a)),
        lock() { locked = true; btns.forEach(b => b.classList.add("lock")); },
        reveal() { btns.forEach((b, j) => { b.classList.remove("selected"); const ok = q.answers.includes(j); if (ok) b.classList.add("right"); else if (chosen.has(j)) b.classList.add("wrong"); }); },
        hint: () => ""
      };
    },
    answerNode: q => h("ul", {}, q.answers.map(a => h("li", { text: q.options[a] })))
  },

  /* --- Nhiều phát biểu, mỗi phát biểu chọn Có / Không --- */
  "tf-set": {
    build(q, box, onChange) {
      const val = q.items.map(() => null); let locked = false;
      const rows = q.items.map((it, i) => {
        const yes = h("button", { class: "tfb", type: "button", text: "✅ CÓ" });
        const no  = h("button", { class: "tfb", type: "button", text: "❌ KHÔNG" });
        const set = v => { if (locked) return; beep(SND.click); val[i] = v; yes.classList.toggle("selected", v === true); no.classList.toggle("selected", v === false); onChange(); };
        yes.onclick = () => set(true); no.onclick = () => set(false);
        return { row: h("div", { class: "tf-row" }, h("div", { class: "t", text: it.text }), h("div", { class: "tf-btns" }, yes, no)), yes, no };
      });
      box.append(...rows.map(r => r.row));
      return {
        complete: () => val.every(v => v !== null),
        correct: () => q.items.every((it, i) => val[i] === it.answer),
        lock() { locked = true; },
        reveal() {
          rows.forEach((r, i) => {
            const ok = val[i] === q.items[i].answer;
            r.row.classList.add(ok ? "right" : "wrong");
            [r.yes, r.no].forEach(b => b.classList.remove("selected"));
            (q.items[i].answer ? r.yes : r.no).classList.add("right");
            if (!ok) (val[i] ? r.yes : r.no).classList.add("wrong");
            if (!ok) r.row.append(h("div", { class: "note", text: "Đáp án đúng: " + (q.items[i].answer ? "Có" : "Không") }));
          });
        },
        hint: () => ""
      };
    },
    answerNode: q => h("ul", {}, q.items.map(it => h("li", { text: (it.answer ? "Có" : "Không") + " — " + it.text })))
  },

  /* --- Ghép nối: chạm để chọn rồi chạm ô, hoặc kéo thả --- */
  match: {
    build(q, box, onChange) {
      const n = q.pairs.length;
      const placed = Array(n).fill(null);     // placed[ô] = chỉ số thuật ngữ
      const order = shuffle([...Array(n).keys()]);
      let picked = null, locked = false, dragId = null;

      const bank = h("div", { class: "bank" });
      const slots = q.pairs.map((_, s) => h("div", { class: "slot", text: "Kéo hoặc chạm để đặt vào đây" }));
      const rows = q.pairs.map((p, s) => h("div", { class: "m-row" }, h("div", { class: "t", text: p.left }), slots[s]));
      box.append(h("div", { class: "match-rows" }, rows), h("div", { class: "bank-label", text: "THUẬT NGỮ" }), bank);

      const place = (id, s) => { const old = placed.indexOf(id); if (old >= 0) placed[old] = null; placed[s] = id; picked = null; beep(SND.click); draw(); onChange(); };
      const unplace = id => { const old = placed.indexOf(id); if (old >= 0) placed[old] = null; picked = null; draw(); onChange(); };

      function makeChip(id) {
        const c = h("div", { class: "chip" + (picked === id ? " picked" : ""), role: "button", tabindex: "0", draggable: locked ? "false" : "true", text: q.pairs[id].right });
        if (locked) { c.classList.add("static"); return c; }
        const click = e => {
          e.stopPropagation();
          const s = placed.indexOf(id);
          if (picked === null) { if (s >= 0) unplace(id); else { picked = id; beep(SND.click); draw(); } }
          else if (picked === id) { picked = null; draw(); }
          else if (s >= 0) place(picked, s);
          else { picked = id; draw(); }
        };
        c.addEventListener("click", click);
        c.addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); click(e); } });
        c.addEventListener("dragstart", e => { dragId = id; e.dataTransfer.setData("text/plain", String(id)); });
        return c;
      }

      function draw() {
        bank.replaceChildren(...order.filter(id => !placed.includes(id)).map(makeChip));
        slots.forEach((el, s) => {
          if (placed[s] === null) { el.replaceChildren("Kéo hoặc chạm để đặt vào đây"); }
          else el.replaceChildren(makeChip(placed[s]));
        });
      }
      slots.forEach((el, s) => {
        el.addEventListener("click", () => { if (!locked && picked !== null && placed[s] === null) place(picked, s); });
        el.addEventListener("dragover", e => { if (!locked) { e.preventDefault(); el.classList.add("over"); } });
        el.addEventListener("dragleave", () => el.classList.remove("over"));
        el.addEventListener("drop", e => { e.preventDefault(); el.classList.remove("over"); if (!locked && dragId !== null) place(dragId, s); dragId = null; });
      });
      bank.addEventListener("dragover", e => { if (!locked) { e.preventDefault(); bank.classList.add("over"); } });
      bank.addEventListener("dragleave", () => bank.classList.remove("over"));
      bank.addEventListener("drop", e => { e.preventDefault(); bank.classList.remove("over"); if (!locked && dragId !== null) unplace(dragId); dragId = null; });
      draw();

      return {
        complete: () => placed.every(v => v !== null),
        correct: () => placed.every((v, s) => v === s),
        lock() { locked = true; picked = null; draw(); },
        reveal() {
          rows.forEach((r, s) => {
            const ok = placed[s] === s;
            r.classList.add(ok ? "right" : "wrong");
            if (!ok) r.append(h("div", { class: "fix", text: "Đáp án đúng: " + q.pairs[s].right }));
          });
        },
        hint: () => ""
      };
    },
    answerNode: q => h("ul", {}, q.pairs.map(p => h("li", { text: p.right + " — " + p.left })))
  }
};

/* ============================================================
   ĐIỀU KHIỂN MÀN HÌNH
   ============================================================ */
function show(id) {
  ["start", "guide", "game", "end"].forEach(s => $("#screen-" + s).classList.toggle("hidden", s !== id));
  window.scrollTo({ top: 0 });
}

function counts() {
  const ok = state.results.filter(r => r === true).length;
  const no = state.results.filter(r => r === false).length;
  return { ok, no, done: ok + no, left: TOTAL - ok - no };
}

/* Bản đồ hành trình: 🚂 ─ ● ─ ● … ─ 🏆 */
function buildTrack() {
  const tr = $("#track"); tr.replaceChildren();
  questions.forEach((_, i) => tr.append(h("div", { class: "st" }, h("div", { class: "dot", id: "dot" + i, title: "Trạm " + (i + 1), text: String(i + 1) }))));
  tr.append(h("div", { class: "st end" }, h("div", { class: "dot", text: "🏆", title: "Ga Kho Báu Tri Thức" })));
}
function updateTrack(current) {
  questions.forEach((_, i) => {
    const d = $("#dot" + i), r = state.results[i];
    d.className = "dot" + (r === true ? " ok" : r === false ? " no" : "") + (i === current ? " now" : "");
    d.textContent = i === current ? "🚂" : r === true ? "✓" : String(i + 1);
  });
  const d = $("#dot" + Math.min(current, TOTAL - 1)), tr = $("#track");
  tr.scrollLeft = d.parentElement.offsetLeft - tr.clientWidth / 2 + d.offsetWidth / 2;
}

function updateStats(current) {
  const c = counts();
  $("#st-station").textContent = `🚉 Trạm ${Math.min(current + 1, TOTAL)}/${TOTAL}`;
  $("#st-done").textContent = `Đã hoàn thành: ${c.done}/${TOTAL}`;
  $("#st-star").textContent = `⭐ Tri Thức: ${state.score}/${TOTAL}`;
  $("#c-ok").textContent = `Câu đúng: ${c.ok}`;
  $("#c-no").textContent = `Câu sai: ${c.no}`;
  $("#c-left").textContent = `Chưa làm: ${c.left}`;
  $("#bar-fill").style.width = (c.done / TOTAL * 100) + "%";
  $("#badges").replaceChildren(...milestones.map(m => h("span", { class: "badge" + (c.done >= m.at ? " on" : ""), title: m.at + " trạm", text: `${m.icon} ${m.name}` })));
}

function showQuestion() {
  const q = questions[state.i];
  updateStats(state.i); updateTrack(state.i);
  $("#q-lesson").textContent = `${q.group} • ${q.short}`;
  const body = $("#q-body"); body.replaceChildren(h("div", { class: "qtext", text: q.question }));
  if (q.quote) body.append(h("div", { class: "quote", text: q.quote }));
  if (q.prompt) body.append(h("div", { class: "prompt", text: q.prompt }));
  const ans = $("#q-answers"); ans.replaceChildren(); ans.className = "answers";
  $("#q-feedback").replaceChildren();
  const confirm = $("#btn-confirm"); confirm.classList.remove("hidden"); confirm.disabled = true;
  $("#btn-next").classList.add("hidden");
  ctl = RENDERERS[q.type].build(q, ans, () => { confirm.disabled = !ctl.complete(); });
}

function starBurst() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const r = $("#st-star").getBoundingClientRect(), cx = window.innerWidth / 2, cy = window.innerHeight / 2;
  for (let k = 0; k < 8; k++) {
    const s = h("span", { class: "star-burst", text: "⭐" });
    s.style.left = cx + "px"; s.style.top = cy + "px";
    s.style.setProperty("--dx", (r.left + r.width / 2 - cx + (Math.random() - .5) * 160) + "px");
    s.style.setProperty("--dy", (r.top - cy + (Math.random() - .5) * 60) + "px");
    document.body.append(s); setTimeout(() => s.remove(), 1000);
  }
}

/* Bấm XÁC NHẬN: chấm, khóa, hiện phản hồi */
function confirmAnswer() {
  if (!ctl.complete()) return;
  const q = questions[state.i], ok = ctl.correct();
  state.results[state.i] = ok;
  ctl.lock(); ctl.reveal();
  if (ok) { state.score++; $("#st-star").classList.remove("pop"); void $("#st-star").offsetWidth; $("#st-star").classList.add("pop"); starBurst(); }
  beep(ok ? SND.right : SND.wrong);
  updateStats(state.i);
  updateTrack(state.i);

  const fb = h("div", { class: "feedback " + (ok ? "good" : "miss") },
    h("div", { class: "fb-title", text: ok ? "🎉 CHÍNH XÁC!" : "💡 CHƯA CHÍNH XÁC!" }));
  if (ok) fb.append(h("div", { class: "fb-ans", text: "⭐ Bạn nhận được 1 Mảnh Tri Thức!" }));
  else fb.append(h("div", { class: "fb-ans" }, "Đáp án đúng:", RENDERERS[q.type].answerNode(q)));
  fb.append(h("div", { text: q.explanation }));
  if (!ok && q.tip) fb.append(h("div", { class: "fb-tip", text: "🧠 Mẹo nhớ: " + q.tip }));
  const done = counts().done, ms = milestones.find(m => m.at === done);
  if (ms) { fb.append(h("div", { class: "fb-badge", text: `${ms.icon} Huy hiệu mới: ${ms.name}!` })); beep(SND.station); }
  $("#q-feedback").replaceChildren(fb);

  $("#btn-confirm").classList.add("hidden");
  const next = $("#btn-next"); next.classList.remove("hidden");
  next.textContent = state.i === TOTAL - 1 ? "🏆 ĐẾN GA KHO BÁU" : ok ? "🚂 ĐI TIẾP" : "🚂 TIẾP TỤC HÀNH TRÌNH";
  fb.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

function nextStation() {
  beep(SND.station);
  if (state.i < TOTAL - 1) { state.i++; showQuestion(); window.scrollTo({ top: 0, behavior: "smooth" }); }
  else showEnd();
}

/* Màn hình hoàn thành */
function showEnd() {
  const c = counts();
  show("end");
  $("#e-score").textContent = `${state.score}/${TOTAL}`;
  $("#e-done").textContent = `📚 Đã hoàn thành: ${c.done}/${TOTAL}`;
  const top = [...milestones].reverse().find(m => c.done >= m.at);
  $("#e-achv").textContent = top ? `🏆 Thành tích: ${top.icon} ${top.name}` : "";
  const passed = state.score / TOTAL >= PASS_RATE;
  $("#e-msg").textContent = (passed
    ? "🎉 Chúc mừng bạn đã ĐẠT (" + Math.round(state.score / TOTAL * 100) + "% câu đúng)! "
    : "💪 Chưa đạt (" + Math.round(state.score / TOTAL * 100) + "% câu đúng, cần từ " + Math.round(PASS_RATE * 100) + "%). Đừng nản nhé, hãy xem lại lời giải rồi bấm chơi lại — lần sau bạn sẽ làm tốt hơn! ")
    + endMessages.find(m => state.score >= m.min).text;
  $("#e-msg").classList.add("hidden");
  // rương kho báu mở ra
  const chest = $("#chest"); chest.textContent = "🎁"; chest.className = "chest";
  setTimeout(() => { chest.textContent = "🏆"; chest.className = "chest open"; $("#e-msg").classList.remove("hidden"); beep(SND.finish); }, 1300);
  // các câu cần xem lại
  const rv = $("#e-review"); rv.replaceChildren();
  const wrong = questions.map((q, i) => ({ q, i })).filter(x => state.results[x.i] === false);
  if (wrong.length) {
    rv.append(h("div", { class: "qlabel", text: "📝 NHỮNG TRẠM NÊN XEM LẠI" }));
    wrong.forEach(({ q, i }) => rv.append(h("details", {},
      h("summary", { text: `Trạm ${i + 1}: ${q.short}` }),
      h("div", { class: "fb-ans" }, "Đáp án đúng:", RENDERERS[q.type].answerNode(q)),
      h("div", { text: q.explanation }))));
  }
}

function startGame() { questions = randomizeQuestions(); state = newState(); show("game"); showQuestion(); }

/* ---------- Khởi tạo ---------- */
$("#start-sub").textContent = `${TOTAL} trạm đang chờ bạn khám phá!`;
$("#start-chips").append(
  h("span", { class: "pill", text: `📚 ${TOTAL} câu hỏi` }),
  h("span", { class: "pill", text: `⭐ ${TOTAL} mảnh Tri Thức` }),
  h("span", { class: "pill", text: "🏆 1 Kho Báu cuối hành trình" }));
$("#guide-last").textContent = `🏆 Hoàn thành ${TOTAL} trạm để đến Kho Báu Tri Thức.`;
buildTrack();
$("#btn-start").onclick = () => { beep(SND.click); show("guide"); };
$("#btn-begin").onclick = () => { beep(SND.click); startGame(); };
$("#btn-confirm").onclick = confirmAnswer;
$("#btn-next").onclick = nextStation;
$("#btn-replay").onclick = () => { beep(SND.click); startGame(); };   // reset điểm, tiến trình, câu trả lời
$("#btn-sound").onclick = () => {
  soundOn = !soundOn;
  $("#btn-sound").textContent = soundOn ? "🔊 Âm thanh: BẬT" : "🔇 Âm thanh: TẮT";
  $("#btn-sound").setAttribute("aria-pressed", soundOn);
  beep(SND.click);
};

/* Bưu cục Spark — ôn tập Chủ đề 5 (SparkLV3, Giao tiếp kĩ thuật số)
   3 trạm = 3 bài: 24 Giao tiếp kĩ thuật số · 25 Thư điện tử · 26 Kĩ năng giao tiếp kĩ thuật số phù hợp
   Tổng 1000 điểm, từ 900 là ĐẠT. Mỗi lá thư (câu hỏi) chỉ trả lời 1 lần, trả lời xong là hiện đáp án đúng. Cả chuyến có 3 lượt gợi ý.
   Nội dung và dạng câu lấy từ spark3-cd5.docx. Kiểu câu: single | tf | match | form (chọn trong hộp thoại) */

/* MODE "test" (test.html): không chia trạm, xáo trộn cả 24 câu, không gợi ý, không hiện đáp án khi đang làm bài. */
const TEST = window.MODE === "test";

const STAGES = [
{
  no:"Bài 24", name:"Giao tiếp kĩ thuật số", desk:"Trạm Tổng đài", icon:"📞",
  lede:"Bưu cục Spark vừa chuyển sang kĩ thuật số. Em hãy xem mỗi lá thư đi bằng đường nào nhé!",
  tips:[
    "<b>Giao tiếp kĩ thuật số giữa các cá nhân</b> là dùng thiết bị số để trao đổi với <b>người khác</b>.",
    "<b>Đồng bộ</b>: trò chuyện cùng một lúc. <b>Không đồng bộ</b>: em gửi trước, người nhận trả lời sau.",
    "Mỗi công cụ có việc riêng: Email, Phần mềm Quản lí lịch, Hội nghị truyền hình, Lưu trữ đám mây."
  ],
  toy:"chan",
  qs:[
  {h:"Bưu thiếp định nghĩa",t:"single",q:"Em hãy cho biết, định nghĩa của giao tiếp kĩ thuật số giữa các cá nhân là gì?",
   o:["Sử dụng các thiết bị kĩ thuật số để trò chuyện với bạn bè và gia đình.","Nói chuyện với trợ lí ảo hoặc Robot.","Xem Video trực tuyến.","Cách các máy tính nói chuyện với nhau."],a:0,
   why:"Giao tiếp kĩ thuật số giữa các cá nhân là <mark>dùng thiết bị kĩ thuật số để trò chuyện với bạn bè và gia đình</mark>, tức là có người ở đầu bên kia.<br>Nói chuyện với trợ lí ảo, xem Video hay máy tính nói chuyện với nhau đều không phải là người trao đổi với người."},
  {h:"Thư trả lời, cuộc gọi, Video",t:"tf",q:"Với mỗi câu phát biểu, em hãy chọn Có nếu đó là một ví dụ về giao tiếp kĩ thuật số giữa các cá nhân hoặc chọn Không nếu không phải.",
   lab:["Có","Không"],rows:[["Một bình luận trên mạng xã hội trả lời câu hỏi từ một người bạn.",true],["Một cuộc gọi điện thoại cho gia sư của em để nhờ trợ giúp về một bài tập.",true],["Một cuộc trò chuyện Video giữa em và bạn cùng lớp.",true]],
   why:"• Bình luận trả lời bạn → <mark>Có</mark>: em trao đổi với một người bạn.<br>• Gọi điện cho gia sư → <mark>Có</mark>: em và gia sư nói chuyện qua điện thoại.<br>• Trò chuyện Video với bạn cùng lớp → <mark>Có</mark>: hai người nhìn thấy và nghe nhau.<br>Cả ba đều là <mark>người trao đổi với người</mark> bằng thiết bị kĩ thuật số."},
  {h:"Email, hội thảo, tin nhắn",t:"tf",q:"Với mỗi câu phát biểu, em hãy chọn Có nếu đó là giao tiếp kĩ thuật số giữa các cá nhân hoặc chọn Không nếu không phải.",
   lab:["Có","Không"],rows:[["Một Email em gửi cho giáo viên để đặt câu hỏi về bài tập được giao.",true],["Một hội thảo Video giữa các thành viên trong nhóm của em với một nhóm ở trường học khác.",true],["Một tin nhắn văn bản giữa em và bạn cùng lớp.",true],["Em gọi điện thoại để hỏi giáo viên về bài tập.",true]],
   why:"• Email cho giáo viên → <mark>Có</mark>.<br>• Hội thảo Video giữa hai nhóm → <mark>Có</mark>.<br>• Tin nhắn văn bản với bạn cùng lớp → <mark>Có</mark>.<br>• Gọi điện thoại hỏi giáo viên → <mark>Có</mark>.<br>Ở cả bốn việc, em đều trao đổi trực tiếp với một người khác."},
  {h:"Việc em làm một mình",t:"tf",q:"Với mỗi câu phát biểu, em hãy chọn Có nếu đó là ví dụ về hoạt động giao tiếp kĩ thuật số giữa các cá nhân hoặc chọn Không nếu không phải.",
   lab:["Có","Không"],rows:[["Viết ghi chú trong một ứng dụng nhật kí trên máy tính bảng của em.",false],["Sử dụng máy ghi âm để thu lại khi em đọc một bài phát biểu.",false],["Quay Video chính mình đọc thuộc lòng một kịch bản.",false]],
   why:"• Viết ghi chú trong ứng dụng nhật kí → <mark>Không</mark>.<br>• Dùng máy ghi âm khi đọc bài phát biểu → <mark>Không</mark>.<br>• Quay Video chính mình đọc kịch bản → <mark>Không</mark>.<br>Cả ba việc em làm một mình và <mark>chưa có người nhận trao đổi</mark>: chúng chỉ ghi lại nội dung."},
  {h:"Gửi trước, trả lời sau",t:"single",q:"Em hãy cho biết, tùy chọn nào dưới đây là ví dụ về giao tiếp không đồng bộ (Asynchronous Communication)?",
   o:["Nói chuyện điện thoại với ai đó ở múi giờ khác.","Chủ trì cuộc họp Video cho một nhóm người.","Có một cuộc trò chuyện trực tiếp.","Gửi và nhận tin nhắn văn bản."],a:3,
   why:"Giao tiếp <mark>không đồng bộ</mark> là không cần hai bên có mặt cùng một lúc: em gửi tin nhắn văn bản, người kia đọc và trả lời sau.<br>Nói chuyện điện thoại, họp Video và trò chuyện trực tiếp đều diễn ra <mark>cùng một lúc</mark> (đồng bộ)."},
  {h:"Công cụ nào, việc nấy",t:"match",q:"Em hãy di chuyển danh sách công nghệ ở bên phải với cách sử dụng phù hợp ở bên trái tương ứng.",
   pairs:[["Nhân viên có thể gửi và nhận thông tin liên lạc mọi lúc, mọi nơi.","Email"],["Người dùng có thể luôn tổ chức và quản lí công việc giữa nhiều người.","Calendars &amp; Scheduling Software (Phần mềm Quản lí lịch)"],["Mọi người có thể cộng tác và chia sẻ thông tin theo thời gian thực, bất kể vị trí địa lí.","Video Conferencing (Hội nghị truyền hình)"],["Các tập tin có thể được truy cập từ bất cứ nơi nào có kết nối Internet.","Cloud Storage (Lưu trữ đám mây)"]],
   why:"• Gửi và nhận thông tin mọi lúc, mọi nơi → <mark>Email</mark>.<br>• Tổ chức và quản lí công việc giữa nhiều người → <mark>Calendars &amp; Scheduling Software (Phần mềm Quản lí lịch)</mark>.<br>• Cộng tác theo thời gian thực, bất kể vị trí → <mark>Video Conferencing (Hội nghị truyền hình)</mark>.<br>• Truy cập tập tin ở bất cứ nơi nào có Internet → <mark>Cloud Storage (Lưu trữ đám mây)</mark>."},
  {h:"Chọn nền tảng thích hợp",t:"form",q:"Với mỗi ví dụ về giao tiếp, em hãy chọn nền tảng giao tiếp kĩ thuật số thích hợp.",
   o:["Hội thảo Video","Email","Tin nhắn trực tiếp"],
   fields:[["Họp nhóm trực tuyến với các bạn cùng lớp để cùng thực hiện một bài tập nhóm và để mỗi người đều có thể thấy được phần làm của người khác.",0],["Em cần gửi cho giáo viên một danh sách các câu hỏi lưu trong tập tin tài liệu Word.",1],["Em có một câu hỏi ngắn cho bạn của mình và muốn được trả lời ngay.",2]],
   why:"• Họp nhóm để mọi người thấy phần làm của nhau → <mark>Hội thảo Video</mark>.<br>• Gửi danh sách câu hỏi trong tập tin Word cho giáo viên → <mark>Email</mark> (đính kèm tập tin).<br>• Hỏi nhanh một bạn và muốn được trả lời ngay → <mark>Tin nhắn trực tiếp</mark>."},
  {h:"Họp nhóm bằng Video",t:"single",q:"Em sẽ sử dụng hội nghị truyền hình như thế nào để cộng tác kĩ thuật số trong một dự án nhóm?",
   o:["Để theo dõi bất kì liên kết hoặc trang Web hữu ích nào.","Để bỏ phiếu ẩn danh về một chủ đề dự án.","Để thảo luận về nghiên cứu của mỗi thành viên đã thu thập.","Để gửi các tập tin lớn cho các thành viên trong nhóm."],a:2,
   why:"Hội nghị truyền hình giúp cả nhóm <mark>gặp nhau và thảo luận</mark>, ví dụ về nghiên cứu mỗi người đã thu thập.<br>Theo dõi liên kết, bỏ phiếu ẩn danh hay gửi tập tin lớn cần những công cụ khác."},
  {h:"Học tập hay giải trí?",t:"tf",q:"Với mỗi câu phát biểu về cộng tác kĩ thuật số, hãy chọn Mục đích học tập hoặc Mục đích giải trí để xác định trường hợp sử dụng đúng.",
   lab:["Mục đích học tập","Mục đích giải trí"],rows:[["Thêm Emoji mặt cười vào tin nhắn của bạn.",false],["Tham gia hội thảo Video với giáo viên và các bạn cùng lớp.",true],["Chia sẻ Video hài hước cho bạn cùng lớp về một con gấu tuyết bị trượt trên băng.",false]],
   why:"• Thêm Emoji mặt cười vào tin nhắn → <mark>Mục đích giải trí</mark>.<br>• Tham gia hội thảo Video với giáo viên và các bạn → <mark>Mục đích học tập</mark>.<br>• Chia sẻ Video hài hước về gấu tuyết trượt băng → <mark>Mục đích giải trí</mark>."}
  ]
},
{
  no:"Bài 25", name:"Thư điện tử", desk:"Quầy Soạn thư", icon:"✉️",
  lede:"Đến quầy soạn thư rồi! Một bức thư gửi đi cần rõ người gửi, người nhận, chủ đề và chữ kí.",
  tips:[
    "<b>From</b> là người gửi, <b>To</b> là người nhận, còn <b>Cc</b> và <b>Bcc</b> dùng để gửi bản sao.",
    "<b>Chủ đề (Subject)</b> cho người nhận biết thư viết về việc gì và vì sao được gửi.",
    "Thư cho công ty hay giáo viên cần văn phong <b>chuyên nghiệp</b>: lịch sự, rõ ràng, không viết HOA toàn bộ."
  ],
  toy:"mail",
  qs:[
  {h:"Người soạn thư",t:"single",q:"Em nên tìm thông tin người soạn Email ở vị trí nào?",
   o:["From","Bcc","To","Cc"],a:0,
   why:"<mark>From</mark> cho biết ai đã soạn và gửi Email. To là người nhận chính; Cc và Bcc là những người nhận bản sao."},
  {h:"Vì sao cần chủ đề?",t:"single",q:"Em hãy cho biết, mục đích của việc đưa chủ đề vào Email là gì?",
   o:["Để viết lời chào.","Để chỉ ra chủ đề và mục đích chính của nội dung Email.","Để tóm tắt chủ đề Email.","Để bao gồm một nhận xét kết thúc."],a:1,
   why:"Dòng chủ đề giúp người nhận biết ngay <mark>Email nói về việc gì và vì sao được gửi</mark>. Lời chào và nhận xét kết thúc nằm trong phần nội dung."},
  {h:"Tên và cách liên hệ",t:"single",q:"Em sẽ tìm tên và thông tin liên hệ của ai đó ở đâu trong Email?",
   o:["Địa chỉ (Address)","Nội dung (Body)","Chủ đề (Subject)","Chữ kí (Signature)"],a:3,
   why:"<mark>Chữ kí (Signature)</mark> ở cuối Email thường ghi tên và thông tin liên hệ của người viết."},
  {h:"Hộp thoại gửi cho công ty",t:"form",q:"Em viết Email cho một công ty để yêu cầu họ giúp đỡ về dự án ở trường. Đây là dạng Email có văn phong chuyên nghiệp. Em hãy chọn các tùy chọn đúng trong hộp thoại cho Email này.",
   fields:[["Tới (To):",4,["thebeautysalonnet@gmail.com","myhealthyeats.com","@wintersportsc","@companypronet.com","companypro.net@gmail.com"]],["Chủ đề (Subject):",1,["Hãy giúp ngay","Cần hỗ trợ dự án của trường"]]],
   why:"• Tới (To) → <mark>companypro.net@gmail.com</mark>: địa chỉ Email đầy đủ của công ty. myhealthyeats.com, @wintersportsc và @companypronet.com thiếu phần tên hoặc thiếu dấu @ nên không dùng được.<br>• Chủ đề (Subject) → <mark>Cần hỗ trợ dự án của trường</mark>: ngắn gọn, rõ nội dung và lịch sự. “Hãy giúp ngay” chưa nói rõ cần giúp việc gì."},
  {h:"Chủ đề gửi thầy cô",t:"single",q:"Em đang viết Email cho giáo viên để hỏi về điểm của mình. Ví dụ nào sẽ là dòng chủ đề thích hợp nhất?",
   o:["Câu hỏi về điểm","Chào thầy,","CÓ LỖI RỒI THẦY ƠI"],a:0,
   why:"<b>Vì sao?</b> Dòng chủ đề cần <mark>ngắn gọn, rõ ràng và lịch sự</mark>, nói đúng việc em hỏi: “Câu hỏi về điểm”.<br>“Chào thầy,” là lời chào nên viết ở đầu phần nội dung. “CÓ LỖI RỒI THẦY ƠI” viết HOA toàn bộ nghe như đang hét và thiếu tôn trọng."}
  ]
},
{
  no:"Bài 26", name:"Kĩ năng giao tiếp kĩ thuật số phù hợp", desk:"Phòng Lễ nghi", icon:"🤝",
  lede:"Trạm cuối: thư gửi đi phải đúng lễ nghi, đúng người nhận và đúng lúc!",
  tips:[
    "Chọn lời lẽ theo <b>người nhận</b>: thầy cô, thầy Hiệu trưởng cần trang trọng; bạn bè có thể thân mật.",
    "<b>Thiên kiến (Bias)</b> là nghiêng về một phía. Hãy hỏi: đây là sự thật hay chỉ là một quan điểm?",
    "Trong cuộc gọi Video, hãy <b>lịch sự và đúng lúc</b>: dùng Micro, Camera và phần trò chuyện cho đúng cách."
  ],
  toy:"tone",
  qs:[
  {h:"Lễ nghi với thầy cô",t:"tf",q:"Với mỗi câu phát biểu, em hãy chọn Có nếu điều đó là phù hợp trong giao tiếp kĩ thuật số hoặc chọn Không nếu không phù hợp.",
   lab:["Có","Không"],rows:[["Em trả lời Email của giáo viên bằng ngôn ngữ nhắn tin kiểu KLQ cho \"không liên quan\".",false],["Em nhập \"LÀM ƠN GIÚP TỚ\" trong dòng chủ đề khi yêu cầu sự giúp đỡ từ bạn cùng lớp.",false],["Em dùng Emoji kiểu đảo mắt khi trả lời câu hỏi của thầy Hiệu trưởng về kế hoạch tập luyện của nhóm.",false]],
   why:"• Trả lời Email giáo viên bằng ngôn ngữ nhắn tin viết tắt → <mark>Không</mark>.<br>• Viết HOA “LÀM ƠN GIÚP TỚ” trong dòng chủ đề → <mark>Không</mark>: chữ HOA toàn bộ nghe như đang hét.<br>• Emoji đảo mắt khi trả lời thầy Hiệu trưởng → <mark>Không</mark>: thiếu tôn trọng.<br>Với người lớn và việc nghiêm túc, hãy viết rõ ràng và lịch sự."},
  {h:"Mục đích của lời nhắn",t:"tf",q:"Với mỗi câu phát biểu về mục đích của cộng tác kĩ thuật số, hãy chọn Học tập hoặc Giải trí để xác định trường hợp sử dụng đúng.",
   lab:["Học tập","Giải trí"],rows:[["Hey tớ thấy cậu ở trung tâm mua sắm ngày hôm nay đó. Lol có BFF mới nha!",false],["Cảm ơn cậu đã giúp tớ làm bài tập về nhà hôm nay.",true],["Rian đang tìm bạn của mình ở đâu tại trận ⚽ nhưng rồi cậu ấy phải ❌.",false],["Orson bảo rằng bạn ấy sẽ quay lại ngay sau khi nói chuyện với giáo viên.",false]],
   why:"• “Hey tớ thấy cậu ở trung tâm mua sắm… Lol có BFF mới nha!” → <mark>Giải trí</mark>.<br>• “Cảm ơn cậu đã giúp tớ làm bài tập về nhà” → <mark>Học tập</mark>: nói về việc học.<br>• Rian tìm bạn tại trận ⚽ rồi phải ❌ → <mark>Giải trí</mark>.<br>• Orson bảo sẽ quay lại ngay sau khi nói chuyện với giáo viên → <mark>Giải trí</mark>: chỉ là lời nhắn thông thường."},
  {h:"Emoji hợp với ai?",t:"single",q:"Em hãy cho biết, biểu tượng cảm xúc (Emoji) phù hợp với loại giao tiếp kĩ thuật số nào?",
   o:["Email cho các nhà tuyển dụng tiềm năng.","Tin nhắn văn bản với một người bạn.","Nhắn tin trong ứng dụng cho giáo viên của bạn về bài tập.","Tài liệu nghiên cứu."],a:1,
   why:"Emoji hợp với giao tiếp thân mật, đó là <mark>tin nhắn văn bản với một người bạn</mark>.<br>Email cho nhà tuyển dụng, tin nhắn cho giáo viên về bài tập và tài liệu nghiên cứu cần trang trọng hơn."},
  {h:"Thiên kiến là gì?",t:"single",q:"Em hãy cho biết, thuật ngữ Thiên kiến (Bias) có nghĩa là gì trong truyền thông kĩ thuật số?",
   o:["Xu hướng ủng hộ một bên hoặc có một quan điểm cụ thể.","Là loại trò chơi trực tuyến được chơi với ít nhất 3 người.","Một tính năng cho phép em thay đổi cài đặt phông chữ.","Một cách để bày tỏ ý kiến trên trực tuyến của em, đặc biệt là phương tiện truyền thông xã hội."],a:0,
   why:"<mark>Thiên kiến (Bias)</mark> là xu hướng ủng hộ một bên hoặc có một quan điểm cụ thể. Nó không phải là trò chơi, tính năng phông chữ hay cách bày tỏ ý kiến trên mạng."},
  {h:"Câu nào thiên kiến?",t:"single",q:"Em hãy cho biết, phát biểu nào sau đây thể hiện sự thiên kiến?",
   o:["Sử dụng điện thoại thông minh là cần thiết để mọi người duy trì kết nối.","Tôi thích chơi trò chơi điện tử vì chúng rất thú vị.","Học lập trình máy tính có thể giúp phát triển kĩ năng tư duy phản biện.","Ăn rau giúp bạn duy trì lối sống lành mạnh."],a:0,
   why:"Câu <mark>“Sử dụng điện thoại thông minh là cần thiết để mọi người duy trì kết nối”</mark> khẳng định một quan điểm nghiêng về một phía như thể ai cũng phải đồng ý.<br>“Tôi thích…” chỉ là sở thích cá nhân; hai câu còn lại nêu lợi ích chung một cách hợp lí."},
  {h:"Nói gì trong cuộc gọi Video?",t:"single",q:"Em hãy cho biết, ví dụ về giao tiếp bằng lời nói phù hợp trong cuộc gọi điện Video là gì?",
   o:["Ngắt lời và nói chuyện với mọi người.","Nói rõ ràng trong khi nhìn vào máy ảnh và Micro của em.","Dùng tay che Micro khi em đang nói.","Tắt máy ảnh và giữ im lặng trong suốt thời gian đó."],a:1,
   why:"Hãy <mark>nói rõ ràng trong khi nhìn vào máy ảnh và Micro</mark> để mọi người nghe và thấy em rõ. Ngắt lời, che Micro hay im lặng suốt buổi đều không phù hợp."},
  {h:"Rời máy một lát",t:"single",q:"Em đang trong một cuộc gọi Video, em nên làm gì khi cần rời khỏi máy tính một thời gian ngắn?",
   o:["Che máy tính bằng một chiếc khăn.","Tắt Camera và Micro trên thiết bị của em.","Ngắt lời người nói để cho họ biết em cần nghỉ ngơi.","Mang theo máy tính bên mình."],a:1,
   why:"Hãy <mark>tắt Camera và Micro</mark> để mọi người không phải nghe hay thấy những gì xảy ra quanh em. Không nên che máy, ngắt lời hay mang máy đi theo."},
  {h:"Emoji đồng ý",t:"single",q:"Em nên gửi Emoji nào vào phần trò chuyện để thể hiện với diễn giả rằng bạn đồng ý với điều họ nói?",
   o:["Mặt giận dữ","Chắp tay","Mặt cười khóc","Ra hiệu đồng ý"],im:["img/e-gian.png","img/e-chap-tay.png","img/e-cuoi-khoc.png","img/e-dong-y.png"],a:3,
   why:"<mark>Ra hiệu đồng ý</mark> (ngón tay cái giơ lên) cho diễn giả biết em đồng ý. Mặt giận dữ nghe như phản đối, còn mặt cười khóc dễ bị hiểu là đang cười nhạo."},
  {h:"Cho thầy cô biết em đang nghe",t:"single",q:"Em được giáo viên giảng bài qua ứng dụng Video phát trực tiếp. Ứng dụng cho phép em gửi tin nhắn, bật Camera và Micro. Trong buổi học, có những thời điểm em cần thông báo một cách phù hợp cho giáo viên rằng em đang chăm chú lắng nghe và hiểu bài. Em nên làm gì?",
   o:["Bật Micro lên và vỗ tay.","Bật Camera lên và nói thành tiếng \"Hay lắm”.","Gửi Emoji ra hiệu đồng ý trong phần trò chuyện.","Giữ im lặng trong suốt bài trình bày."],a:2,
   why:"<mark>Gửi Emoji ra hiệu đồng ý trong phần trò chuyện</mark> báo cho giáo viên biết em hiểu bài mà không làm gián đoạn buổi học. Vỗ tay hay nói thành tiếng sẽ ngắt bài giảng, còn im lặng thì giáo viên không biết em có hiểu không."},
  {h:"Khi chưa đồng ý",t:"single",q:"Em đang dự một hội thảo Video trực tiếp. Hội thảo cho phép Em gửi tin nhắn, bật Camera và nói chuyện qua Micro. Em không đồng ý với một ý kiến mà diễn giả đang nói. Em nên làm gì?",
   o:["Lập tức rời hội thảo.","Gửi Emoji ra hiệu từ chối vào phần trò chuyện.","Đợi diễn giả trình bày đến một điểm dừng rồi mới nói lên ý kiến của mình.","Ngắt lời diễn giả trước khi bài giảng kết thúc."],a:2,
   why:"Em vẫn được nói ra ý kiến, nhưng hãy <mark>đợi diễn giả đến một điểm dừng</mark> rồi mới nói. Rời đi, gửi Emoji từ chối hay ngắt lời đều thiếu tôn trọng diễn giả."}
  ]
}
];

/* ---------------- tiện ích ---------------- */
const $ = s => document.querySelector(s);
const same = (a, b) => a.every((x, i) => x === b[i]);
const shuffle = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.random() * (i + 1) | 0; [a[i], a[j]] = [a[j], a[i]]; } return a; };
const shuffleDiff = (a, ...avoid) => { let r, n = 0; do { r = shuffle(a); n++; } while (a.length > 1 && n < 20 && avoid.some(v => same(r, v))); return r; };
const LET = "ABCDEF";

/* Gợi ý: mỗi lá thư có 1 gợi ý riêng, cả chuyến chỉ được dùng 3 lượt. Thứ tự khớp với STAGES ở trên. */
const HINTS = [
 ["Phải có một người ở đầu bên kia. Chọn mô tả có bạn bè và gia đình.",
  "Hỏi: có người khác nhận được và trao đổi với em không? Bình luận, cuộc gọi, Video đều có.",
  "Email, hội thảo Video, tin nhắn, cuộc gọi: ở mỗi việc, em đang trao đổi với ai?",
  "Ghi chú, ghi âm, quay Video: em làm cho ai nghe, hay chỉ để lưu lại?",
  "“Không đồng bộ” nghĩa là không cùng một lúc: em gửi trước, người kia trả lời sau.",
  "Mỗi công cụ lo một việc: gửi nhận thư, xếp lịch, họp từ xa và cất tập tin lên mạng.",
  "Đọc kĩ từng tình huống: cần thấy phần làm của nhau, cần gửi tập tin, hay cần trả lời ngay?",
  "Hội nghị truyền hình là nơi mọi người nói chuyện với nhau. Chọn việc cần cả nhóm cùng trao đổi.",
  "Tự hỏi: việc này giúp em học hỏi, hay chỉ để vui?"],
 ["Chữ “From” trong tiếng Anh nghĩa là “từ”. Thư từ ai gửi đến?",
  "Người nhận nhìn thấy dòng này ngay cả khi chưa mở thư. Nó giúp họ đoán thư nói về việc gì.",
  "Phần cuối thư, dưới lời kết, thường ghi tên người viết và cách liên hệ.",
  "Địa chỉ Email đầy đủ có tên, dấu @ và tên miền. Chủ đề thì phải rõ ràng và lịch sự.",
  "Chủ đề cần ngắn, rõ, lịch sự. Lời chào hay chữ viết HOA toàn bộ có hợp làm chủ đề không?"],
 ["Giáo viên và thầy Hiệu trưởng cần được tôn trọng: viết đủ câu, tránh viết tắt hay biểu tượng trêu đùa.",
  "Lời nhắn nói về việc học, hay chỉ là trò chuyện thông thường với bạn?",
  "Emoji hợp với người nhận thân thiết. Còn người nhận trang trọng thì sao?",
  "“Thiên kiến” là nghiêng về một phía. Đây không phải là trò chơi hay phông chữ.",
  "Tìm câu nghe như một quan điểm nghiêng về một phía mà ai cũng phải đồng ý, chứ không phải sở thích hay sự thật.",
  "Trong cuộc gọi Video, mọi người cần nghe và nhìn thấy em rõ ràng mà không bị cắt ngang.",
  "Khi rời đi, em không muốn mọi người nghe thấy hay nhìn thấy những gì xảy ra quanh mình.",
  "Biểu tượng nào nghĩa là “tốt”, “đồng ý”? Tránh những mặt cảm xúc dễ gây hiểu lầm.",
  "Em muốn báo đã hiểu bài mà không làm gián đoạn giáo viên. Cách nào lặng lẽ và lịch sự?",
  "Ý kiến khác vẫn được nói ra, nhưng phải đúng lúc. Có nên ngắt lời hay bỏ đi không?"]
];
STAGES.forEach((S, i) => S.qs.forEach((q, j) => { q.hint = HINTS[i][j]; q.id = j; q.lesson = S.no; }));
const LESSONS = STAGES.map(S => ({ no: S.no, name: S.name, desk: S.desk, icon: S.icon }));
if (TEST) {
  const all = STAGES.flatMap(S => S.qs);
  STAGES.splice(0, STAGES.length, { no: "Kiểm tra", name: "Kiểm tra Chủ đề 5", desk: "Bài kiểm tra", icon: "📝", qs: all });
  all.forEach((q, i) => q.id = i);
}
const ORIG = STAGES.map(S => S.qs.slice());
const TOTAL_Q = STAGES.reduce((n, s) => n + s.qs.length, 0);
const SCORE = 1000, PASS = 900, HINT_MAX = TEST ? 0 : 3;
/* Điểm mỗi câu (tổng đúng 1000): 16 câu 42 điểm + 8 câu 41 điểm. Đúng một phần được điểm một phần, nhưng luôn nhỏ hơn điểm tối đa. */
{ let k = 0; STAGES.forEach(S => S.qs.forEach(q => { q.w = Math.floor(SCORE / TOTAL_Q) + (k++ < SCORE % TOTAL_Q ? 1 : 0); })); }
const pointsOf = (q, f) => f >= 1 ? q.w : Math.min(q.w - 1, Math.round(f * q.w));
const KEY = TEST ? "sparkOnTap5TestBest" : "sparkOnTap5Best";
const SAVE = TEST ? "sparkOnTap5TestState" : "sparkOnTap5State";
const blank = () => STAGES.map(s => s.qs.map(() => null));
const app = { s: 0, qi: 0, hints: HINT_MAX, pts: blank(), sc: blank() };
const add = a => a.reduce((x, y) => x + (y || 0), 0);
const total = () => add(app.sc.flat());
const stageScore = s => add(app.sc[s]);
const stageMax = s => add(STAGES[s].qs.map(q => q.w));
const fullN = s => app.pts[s].filter(p => p === 1).length;
const starsOf = r => r === 1 ? 3 : r >= .66 ? 2 : r > 0 ? 1 : 0;
const stageDone = s => app.pts[s].every(p => p !== null);
const startStage = st => { if (TEST) { app.s = st; app.qi = 0; question(); } else stageIntro(st); };

function plates() {
  if (TEST) {
    const n = STAGES[0].qs.length, d = app.pts[0].filter(p => p !== null).length;
    $("#plates").className = "plates one";
    $("#plates").innerHTML = `<div class="plate now"><b>Đã làm ${d}/${n} câu</b><div class="dots">${app.pts[0].map((p, k) => `<i class="${p === null ? (k === app.qi ? "cur" : "") : p === 1 ? "ok" : p > 0 ? "mid" : "bad"}">${p === null ? "" : p === 1 ? "✔" : p > 0 ? "◐" : "✘"}</i>`).join("")}</div></div>`;
    $("#scoreline").textContent = "";
    document.body.dataset.stage = 0;
    return;
  }
  $("#plates").innerHTML = STAGES.map((s, i) => {
    const d = stageDone(i), now = i === app.s && !d;
    return `<div class="plate ${d ? "done" : now ? "now" : ""}"><small>Trạm ${i + 1} · ${s.no}</small><b>${s.desk}</b><span class="st">${d ? "✔" : ""}</span></div>`;
  }).join("");
  $("#scoreline").textContent = total() + " / " + SCORE + " điểm · 💡 " + app.hints;
  document.body.dataset.stage = app.s;
}
function mount(html) { const el = $("#stage"); el.innerHTML = html; plates(); window.scrollTo({ top: 0, behavior: "smooth" }); return el; }

/* ---- lưu tiến độ: câu đã trả lời được đánh dấu (pts !== null), tải lại trang không làm lại được ---- */
function save() {
  try { localStorage.setItem(SAVE, JSON.stringify({ order: STAGES.map(S => S.qs.map(q => q.id)), pts: app.pts, sc: app.sc, hints: app.hints, hint: app.hint || null, at: app.at || null, snap: app.snap || null })); } catch (e) {}
}
function clearSave() { try { localStorage.removeItem(SAVE); } catch (e) {} }
function load() {
  try {
    const d = JSON.parse(localStorage.getItem(SAVE));
    if (!d || !Array.isArray(d.order) || d.order.length !== STAGES.length) return false;
    const ok = STAGES.every((S, i) => d.order[i].length === S.qs.length && [...d.order[i]].sort().join() === S.qs.map((_, k) => k).join()
      && d.pts[i].length === S.qs.length && d.sc[i].length === S.qs.length);
    if (!ok) return false;
    STAGES.forEach((S, i) => S.qs = d.order[i].map(id => ORIG[i][id]));
    app.pts = d.pts; app.sc = d.sc; app.hints = d.hints; app.hint = d.hint; app.at = d.at; app.snap = d.snap;
    return true;
  } catch (e) { return false; }
}

function resume() {
  const at = app.at;
  if (at && app.snap && app.pts[at.s] && app.pts[at.s][at.qi] !== null && at.qi < STAGES[at.s].qs.length) {
    app.s = at.s; app.qi = at.qi; return question(true);
  }
  for (let st = 0; st < STAGES.length; st++) {
    const qi = app.pts[st].indexOf(null);
    if (qi < 0) continue;
    if (qi === 0) return startStage(st);
    app.s = st; app.qi = qi; return question();
  }
  final();
}

/* ---------------- màn hình ---------------- */
function welcome() {
  clearSave(); app.hint = null;
  STAGES.forEach(S => S.qs = shuffle(S.qs));
  app.s = 0; app.qi = 0; app.hints = HINT_MAX; app.pts = blank(); app.sc = blank();
  let best = ""; try { const b = localStorage.getItem(KEY); if (b) best = `<p class="kicker">Kỷ lục của em: ${b}/${SCORE} điểm</p>`; } catch (e) {}
  mount(`<section class="sheet">
    <h2>${TEST ? "Bài <i>kiểm tra</i> Chủ đề 5" : "Em là <i>bưu tá số</i> của Bưu cục Spark!"}</h2>
    <p class="lede">${TEST ? `${TOTAL_Q} câu hỏi từ Bài 24, 25 và 26, xáo trộn ngẫu nhiên.` : `Bưu cục vừa chuyển sang kĩ thuật số. Em sẽ đi qua <b>3 trạm</b>, mỗi trạm là một bài học, để giao <b>${TOTAL_Q} lá thư</b> (câu hỏi) đến đúng nơi.`}</p>
    <div class="cols">
      <p><b>Cách chấm.</b> <b>1000 điểm</b>, đạt từ <b>900</b>. Mỗi câu chỉ trả lời <b>một lần</b>. ${TEST ? "Đáp án chỉ hiện sau khi nộp xong cả bài." : "Trả lời xong sẽ hiện <b>đáp án đúng</b>."} Đúng một phần vẫn được điểm một phần.</p>
      ${TEST ? "<p><b>Không có gợi ý.</b> Em hãy tự làm bài nhé!</p><p><b>Tiếp tục.</b> Nếu tải lại trang, em sẽ quay về đúng câu đang làm.</p>" : "<p><b>Gợi ý.</b> Cả chuyến có <b>3 lượt 💡</b>, hãy dùng khôn ngoan.</p><p><b>Mở khóa.</b> Giao xong trạm này mới sang trạm sau.</p>"}
    </div>
    ${best}
    <button class="btn" id="go">${TEST ? "Bắt đầu làm bài →" : "Nhận túi thư →"}</button>
  </section>`);
  $("#go").onclick = () => { save(); startStage(0); };
}

function stageIntro(s) {
  app.s = s; app.qi = 0;
  const S = STAGES[s];
  const toyTitle = { chan: "Kênh nào, nhịp nào?", mail: "Soi một lá thư điện tử", tone: "Thư này gửi cho ai?" }[S.toy];
  mount(`<section class="sheet">
    <h2>Trạm ${s + 1}: <i>${S.name}</i></h2>
    <p class="lede">${S.icon} <b>${S.desk}</b> · ${S.no}. ${S.lede}</p>
    <div class="toy"><h3>${toyTitle}</h3><div id="toy"></div><p class="cap" id="cap"></p></div>
    <div class="cols">${S.tips.map(t => `<p>${t}</p>`).join("")}</div>
    <button class="btn" id="go">Mở túi ${S.qs.length} lá thư →</button>
  </section>`);
  TOYS[S.toy]();
  $("#go").onclick = () => question();
}

/* ---------------- 3 góc thực hành ---------------- */
function pillToy(items, intro) {
  $("#toy").innerHTML = `<div class="pills">${items.map((x, i) => `<button data-i="${i}">${x[0]} ${x[1]}</button>`).join("")}</div>`;
  $("#cap").textContent = intro;
  $("#toy").onclick = e => {
    const b = e.target.closest("button"); if (!b) return;
    document.querySelectorAll(".pills button").forEach(x => x.classList.remove("on")); b.classList.add("on");
    $("#cap").innerHTML = items[b.dataset.i][2];
  };
}
const TOYS = {
  chan() {
    pillToy([
      ["💬", "Tin nhắn văn bản", "<b>Không đồng bộ</b>: em gửi bây giờ, bạn đọc và trả lời lúc khác."],
      ["✉️", "Email", "<b>Không đồng bộ</b>: thư nằm trong hộp thư chờ người nhận mở."],
      ["📞", "Cuộc gọi điện thoại", "<b>Đồng bộ</b>: hai người nói chuyện cùng một lúc."],
      ["🎥", "Hội nghị truyền hình", "<b>Đồng bộ</b>: mọi người gặp nhau trực tuyến cùng một lúc."],
      ["💭", "Bình luận mạng xã hội", "<b>Không đồng bộ</b>: bình luận để đó, bạn bè trả lời khi họ vào xem."]
    ], "Chạm vào một cách liên lạc để xem nó là đồng bộ hay không đồng bộ.");
  },
  mail() {
    const P = [["From", "em.hocsinh@example.com", "<b>From</b>: người soạn và gửi thư."],
      ["To", "thay.hieu@example.com", "<b>To</b>: người nhận chính của thư."],
      ["Cc", "ban.cung.lop@example.com", "<b>Cc</b>: gửi bản sao cho người khác và mọi người đều thấy tên họ."],
      ["Bcc", "(địa chỉ được giấu)", "<b>Bcc</b>: gửi bản sao ẩn, những người khác không thấy tên người nhận này."],
      ["Subject", "Câu hỏi về bài tập", "<b>Chủ đề (Subject)</b>: nói ngắn gọn thư viết về việc gì."],
      ["Body", "Chào thầy, em xin hỏi về bài tập tuần này. Em cảm ơn thầy.", "<b>Nội dung (Body)</b>: lời chào, nội dung chính và lời kết."],
      ["Signature", "Học sinh lớp 5A · em.hocsinh@example.com", "<b>Chữ kí (Signature)</b>: tên và thông tin liên hệ ở cuối thư."]];
    $("#toy").innerHTML = `<div class="mail">${P.map((p, i) => `<button class="${p[0] === "Body" ? "body" : ""}" data-i="${i}"><span>${p[0]}</span><em style="font-style:normal">${p[1]}</em></button>`).join("")}</div>`;
    $("#cap").textContent = "Chạm vào từng dòng của lá thư để biết nó dùng làm gì.";
    $("#toy").onclick = e => {
      const b = e.target.closest("button"); if (!b) return;
      document.querySelectorAll(".mail button").forEach(x => x.classList.remove("on")); b.classList.add("on");
      $("#cap").innerHTML = P[b.dataset.i][2];
    };
  },
  tone() {
    pillToy([
      ["🧒", "Bạn thân", "<b>Thân mật</b>: tin nhắn văn bản với một người bạn có thể dùng Emoji."],
      ["👩‍🏫", "Giáo viên", "<b>Trang trọng</b>: viết đủ câu, lịch sự, hạn chế Emoji và từ viết tắt."],
      ["🏫", "Thầy Hiệu trưởng", "<b>Rất trang trọng</b>: tôn trọng, không dùng Emoji trêu đùa hay chữ HOA."],
      ["💼", "Nhà tuyển dụng", "<b>Rất trang trọng</b>: Email chuyên nghiệp, rõ ràng và không đùa cợt."],
      ["📄", "Tài liệu nghiên cứu", "<b>Nghiêm túc</b>: dùng câu chữ chính xác, không dùng Emoji."]
    ], "Chạm vào người nhận để biết nên viết thân mật hay trang trọng.");
  }
};

/* ---------------- câu hỏi ---------------- */
let Q = null; // trạng thái câu hiện tại
const SNAP = ["ord", "bad", "pick", "sel", "ans", "state", "rows", "chips", "slot", "st", "fo", "val"];
const snapQ = () => { const o = {}; SNAP.forEach(k => { if (Q[k] !== undefined) o[k] = Q[k] instanceof Set ? { set: [...Q[k]] } : Q[k]; }); return o; };
const unsnap = o => SNAP.forEach(k => { if (o[k] !== undefined) Q[k] = o[k] && o[k].set ? new Set(o[k].set) : o[k]; });

function question(restore) {
  const S = STAGES[app.s], q = S.qs[app.qi];
  Q = { q, done: false, hinted: !!(app.hint && app.hint.s === app.s && app.hint.qi === app.qi), fb: "", warn: false };
  if (q.t === "single") { Q.ord = shuffle(q.o.map((_, i) => i)); Q.bad = new Set(); Q.pick = null; }
  if (q.t === "tf") { Q.ord = shuffleDiff(q.rows.map((_, i) => i), q.rows.map((_, i) => i)); Q.ans = q.rows.map(() => null); Q.state = q.rows.map(() => ""); }
  if (q.t === "match") {
    const idx = q.pairs.map((_, i) => i);
    Q.rows = shuffleDiff(idx, idx); Q.chips = shuffleDiff(idx, idx, Q.rows);
    Q.slot = q.pairs.map(() => null); Q.st = q.pairs.map(() => ""); Q.sel = null;
  }
  if (q.t === "form") {
    Q.fo = q.fields.map(f => shuffle((f[2] || q.o).map((_, i) => i)));
    Q.val = q.fields.map(() => null); Q.st = q.fields.map(() => "");
  }
  mount(`<section class="sheet" id="sheet">
    <div class="qhead"><span>${TEST ? "Câu" : S.desk + " · Thư"} ${app.qi + 1}/${S.qs.length}</span><span></span></div>
    ${TEST ? "" : `<p class="slug">✉ ${q.h}</p>`}
    <h3 class="q">${q.q}</h3>
    <div id="body"></div>
    <div class="act"><button class="btn" id="submit">Đóng dấu gửi thư</button><button class="btn ghost" id="hint"></button><span class="fb" id="fb"></span></div>
    <div id="hintbox"></div>
    <div id="note"></div>
  </section>`);
  $("#body").onclick = onBody;
  $("#body").onchange = onChange;
  $("#submit").onclick = submit;
  $("#hint").onclick = useHint;
  if (Q.hinted) showHint();
  if (restore) {
    unsnap(app.snap); Q.done = true; draw();
    return showResult(app.pts[app.s][app.qi], app.sc[app.s][app.qi]);
  }
  app.at = { s: app.s, qi: app.qi }; app.snap = null; save();
  draw();
}

function draw() {
  const { q } = Q;
  const reveal = !TEST; /* kiểm tra: không lộ đáp án, chỉ hiện đúng/sai */
  const hb = $("#hint"); hb.textContent = `💡 Gợi ý (còn ${app.hints})`;
  hb.disabled = Q.done || Q.hinted || app.hints <= 0; hb.classList.toggle("hidden", Q.done || !HINT_MAX);
  let h = "";
  if (q.t === "single") h = `<div class="opts">${Q.ord.map((i, n) => {
    const cls = reveal && Q.done && i === q.a ? "ok" : reveal && Q.bad.has(i) ? "no" : Q.pick === i ? "pick" : "";
    return `<button class="opt ${cls}" data-i="${i}" ${Q.done ? "disabled" : ""}><span class="mk">${LET[n]}</span>${q.im ? `<span class="im"><img src="${q.im[i]}" alt=""></span>` : ""}<span>${q.o[i]}</span></button>`;
  }).join("")}</div>`;
  if (q.t === "tf") h = `<div class="tf">${Q.ord.map(i => { const r = q.rows[i]; return `<div class="tfrow ${reveal ? Q.state[i] : ""}"><span>${r[0]}</span><div class="sw">${q.lab.map((l, k) => `<button data-r="${i}" data-k="${k}" class="${Q.ans[i] === k ? "on" : ""}" ${Q.state[i] === "ok" || Q.done ? "disabled" : ""}>${l}</button>`).join("")}</div></div>`; }).join("")}</div>`;
  if (q.t === "match") {
    const used = new Set(Q.slot);
    h = `<div class="match">${Q.rows.map((pi, j) => {
      const c = Q.slot[j];
      return `<div class="mrow"><div class="l">${q.pairs[pi][0]}</div><button class="slot ${(reveal ? Q.st[j] : "") || (c !== null ? "full" : Q.sel !== null ? "hot" : "")}" data-j="${j}">${c !== null ? `<span class="chip">${q.pairs[c][1]}</span>` : "Đặt mảnh vào đây"}</button></div>`;
    }).join("")}</div>${Q.done ? "" : `<div class="pool">${Q.chips.filter(c => !used.has(c)).map(c => `<button class="chip ${Q.sel === c ? "sel" : ""}" data-c="${c}">${q.pairs[c][1]}</button>`).join("")}</div>`}`;
  }
  if (q.t === "form") h = `<div class="frm">${q.fields.map((f, i) => {
    const o = f[2] || q.o;
    return `<div class="frow ${reveal ? Q.st[i] : ""}"><label for="f${i}">${f[0]}</label><div><select id="f${i}" data-f="${i}" ${Q.done ? "disabled" : ""}><option value="">Chọn…</option>${Q.fo[i].map(k => `<option value="${k}" ${Q.val[i] === k ? "selected" : ""}>${o[k]}</option>`).join("")}</select>${reveal && Q.st[i] === "no" ? `<div class="ans">Đáp án đúng: <b>${o[f[1]]}</b></div>` : ""}</div></div>`;
  }).join("")}</div>`;
  $("#body").innerHTML = h;
  const fb = $("#fb"); fb.textContent = Q.fb; fb.className = "fb" + (Q.warn ? " warn" : "");
  const sb = $("#submit");
  sb.classList.toggle("hidden", Q.done);
  sb.disabled = q.t === "single" ? Q.pick === null : q.t === "tf" ? Q.ans.some((a, i) => a === null && Q.state[i] !== "ok") : q.t === "match" ? Q.slot.some(c => c === null) : q.t === "form" ? Q.val.some(v => v === null) : false;
}

function onBody(e) {
  if (Q.done) return;
  const { q } = Q;
  if (q.t === "single") {
    const b = e.target.closest(".opt"); if (!b) return;
    Q.pick = +b.dataset.i; Q.fb = ""; draw();
  }
  if (q.t === "tf") {
    const b = e.target.closest("button"); if (!b) return;
    const r = +b.dataset.r; Q.ans[r] = +b.dataset.k; Q.state[r] = ""; Q.fb = ""; draw();
  }
  if (q.t === "match") {
    const c = e.target.closest(".chip"), s = e.target.closest(".slot");
    if (s) {
      const j = +s.dataset.j;
      if (Q.st[j] === "ok") return;
      if (Q.slot[j] !== null && Q.sel === null) { Q.slot[j] = null; Q.st[j] = ""; }
      else if (Q.sel !== null) { Q.slot[j] = Q.sel; Q.st[j] = ""; Q.sel = null; }
      Q.fb = ""; draw();
    } else if (c && c.dataset.c !== undefined) {
      const k = +c.dataset.c; Q.sel = Q.sel === k ? null : k; draw();
    }
  }
}
function onChange(e) {
  if (Q.done || Q.q.t !== "form") return;
  const s = e.target.closest("select"); if (!s) return;
  Q.val[+s.dataset.f] = s.value === "" ? null : +s.value; Q.fb = ""; draw();
}

function useHint() {
  if (Q.done || Q.hinted || app.hints <= 0) return;
  app.hints--; Q.hinted = true; app.hint = { s: app.s, qi: app.qi }; save(); plates();
  showHint(); draw();
}
function showHint() { $("#hintbox").innerHTML = `<div class="note hintnote"><b>💡 Gợi ý</b>${Q.q.hint}</div>`; }

function submit() {
  if (Q.done) return;
  const { q } = Q;
  let f = 0;
  if (q.t === "single") { f = Q.pick === q.a ? 1 : 0; if (!f) Q.bad.add(Q.pick); }
  if (q.t === "tf") {
    q.rows.forEach((r, i) => Q.state[i] = Q.ans[i] === (r[1] ? 0 : 1) ? "ok" : "no");
    f = Q.state.filter(x => x === "ok").length / q.rows.length;
  }
  if (q.t === "match") {
    Q.slot.forEach((c, j) => Q.st[j] = c === Q.rows[j] ? "ok" : "no");
    f = Q.st.filter(x => x === "ok").length / q.pairs.length;
  }
  if (q.t === "form") {
    q.fields.forEach((fl, i) => Q.st[i] = Q.val[i] === fl[1] ? "ok" : "no");
    f = Q.st.filter(x => x === "ok").length / q.fields.length;
  }
  finish(f);
}

function finish(f) {
  Q.done = true; Q.warn = false; Q.fb = "";
  const pt = pointsOf(Q.q, f);
  app.pts[app.s][app.qi] = f; app.sc[app.s][app.qi] = pt;
  app.at = { s: app.s, qi: app.qi }; app.snap = snapQ(); save();
  draw(); showResult(f, pt);
}

function showResult(f, pt) {
  plates();
  const last = app.qi === STAGES[app.s].qs.length - 1;
  if (TEST) {
    const ok = f === 1 ? "ok" : f > 0 ? "mid" : "bad";
    $("#note").innerHTML = `<div class="verdict ${ok}">${f === 1 ? "✔ Đúng" : f > 0 ? "◐ Đúng một phần" : "✘ Sai"}</div>
    <div class="act"><button class="btn" id="next">${last ? "Xem kết quả →" : "Câu tiếp theo →"}</button></div>`;
  } else $("#note").innerHTML = `<div class="note"><b>${f === 1 ? "Chính xác" : f > 0 ? "Đúng một phần" : "Chưa đúng"} · +${pt}/${Q.q.w} điểm</b><p class="why">${Q.q.why}</p></div>
    <div class="act"><button class="btn" id="next">${last ? "Khóa túi thư →" : "Lá thư tiếp theo →"}</button></div>`;
  $("#next").onclick = () => { if (last) { app.snap = null; save(); TEST ? final() : stageEnd(); } else { app.qi++; question(); } };
  $("#note").scrollIntoView({ behavior: "smooth", block: "nearest" });
}

/* ---------------- kết trạm & tổng kết ---------------- */
function stageEnd() {
  const s = app.s, S = STAGES[s], pts = app.pts[s], mx = S.qs.length, r = stageScore(s) / stageMax(s);
  const stars = starsOf(r);
  const last = s === STAGES.length - 1;
  mount(`<section class="sheet">
    <h2>Xong trạm ${s + 1}!</h2>
    <div class="stars">${"★".repeat(stars)}<span class="off">${"★".repeat(3 - stars)}</span></div>
    <p class="lede"><b>${stageScore(s)}/${stageMax(s)} điểm</b> · đúng hoàn toàn ${fullN(s)}/${mx} lá thư ở ${S.no}. ${stars === 3 ? "Túi thư giao trọn vẹn, không lá nào lạc!" : stars === 2 ? "Phần lớn thư đã đến nơi, nhưng vẫn có thư giao chưa đúng." : "Nhiều lá thư bị thất lạc. Hãy xem lại các câu sai ở cuối chuyến!"}</p>
    <div class="pagebox"><div class="ph"><span>Trạm ${s + 1} · ${S.desk}</span><span>${S.no}</span></div>
      <div class="tiles">${S.qs.map((q, i) => `<div class="tile p${pts[i] === 1 ? 2 : pts[i] > 0 ? 1 : 0}"><h4>${q.h}</h4><p></p></div>`).join("")}</div></div>
    <div class="row"><button class="btn" id="next">${last ? "Xem kết quả chuyến giao thư →" : `Sang trạm ${s + 2}: ${STAGES[s + 1].desk} →`}</button></div>
  </section>`);
  $("#next").onclick = () => last ? final() : stageIntro(s + 1);
}

function groups() {
  if (!TEST) return STAGES.map((S, i) => ({ S, got: stageScore(i), max: stageMax(i) }));
  return LESSONS.map(L => {
    let got = 0, max = 0;
    STAGES[0].qs.forEach((q, j) => { if (q.lesson === L.no) { got += app.sc[0][j] || 0; max += q.w; } });
    return { S: { ...L, desk: L.no, icon: "📝" }, got, max };
  });
}

function final() {
  app.s = 0;
  const tot = total(), pass = tot >= PASS;
  const rank = tot >= SCORE ? "Bưu điện trưởng" : pass ? "Trưởng bưu cục" : tot >= 600 ? "Bưu tá" : "Bưu tá tập sự";
  const msg = tot >= SCORE ? "Chuyến giao thư hoàn hảo! Cả bưu cục đứng dậy vỗ tay." : pass ? "Em đã đạt! Xem lại các câu bên dưới để hoàn hảo hơn nhé." : `Em cần ${PASS} điểm để đạt, còn thiếu ${PASS - tot} điểm. Xem lại các câu bên dưới rồi chơi lại nhé!`;
  let best = tot; try { const b = +localStorage.getItem(KEY) || 0; best = Math.max(b, tot); localStorage.setItem(KEY, best); } catch (e) {}
  const full = STAGES.reduce((n, _, i) => n + fullN(i), 0);
  const wrong = [];
  STAGES.forEach((S, i) => S.qs.forEach((q, j) => { if (app.pts[i][j] < 1) wrong.push({ S: { no: q.lesson }, q }); }));
  const review = wrong.length ? `<h3 class="rvh">Các câu cần xem lại (${wrong.length})</h3>
    <div class="rv">${wrong.map(({ S, q }) => `<details open><summary><span class="rvt">${S.no}</span>${q.q}</summary>
      <p class="why">${q.why}</p></details>`).join("")}</div>`
    : `<p class="lede">Em trả lời đúng cả ${TOTAL_Q} câu, không có câu nào cần xem lại!</p>`;
  mount(`<section class="sheet">
    <h2>${TEST ? (pass ? "Em đã <i>đạt</i>!" : "Em <i>chưa đạt</i>") : (pass ? "Em đã <i>giao thư xong</i>!" : "Chuyến giao thư <i>chưa đạt</i>")}</h2>
    <div class="bigscore">${tot}<small> / ${SCORE} điểm</small></div>
    <p class="lede">Đúng hoàn toàn <b>${full}/${TOTAL_Q}</b> câu · cần xem lại <b>${TOTAL_Q - full}</b> câu</p>
    <div class="rank">${rank}</div>
    <p class="lede">${msg} (Kỷ lục: ${best}/${SCORE})</p>
    <div class="pagebox"><div class="ph"><span>${TEST ? "Kết quả theo bài" : "Nhật kí chuyến giao thư"}</span><span>${TEST ? TOTAL_Q + " câu" : "3 trạm · " + TOTAL_Q + " lá thư · còn " + app.hints + " gợi ý"}</span></div>
      <div class="tiles">${groups().map(g => {
        const S = g.S, got = g.got, max = g.max, st = starsOf(got / max);
        return `<div class="tile fin p${got / max >= .66 ? 2 : 1}"><h4>${S.icon} ${S.desk}</h4><p style="text-transform:none;letter-spacing:0;font-size:13px">${S.no}: ${S.name}<br><span class="stars" style="font-size:20px;letter-spacing:2px">${"★".repeat(st)}<span class="off">${"★".repeat(3 - st)}</span></span> ${got}/${max} điểm</p></div>`;
      }).join("")}</div></div>
    <div class="row"><button class="btn" id="again">Làm lại</button><a class="btn ghost" style="text-decoration:none" href="../../../spark-lv3.html">Về danh sách bài</a></div>
    ${review}
  </section>`);
  $("#again").onclick = () => { welcome(); save(); startStage(0); };
}

if (load()) resume(); else welcome();

/* Dữ liệu câu hỏi: giữ nguyên nội dung & dạng câu hỏi của tài liệu gốc.
   Đã loại 1 câu trùng: "Em hãy cho biết, tùy chọn nào sau đây là phù hợp để trở thành một người bạn trực tuyến?"
   (cùng nội dung/đáp án với câu "Em hãy chọn ví dụ về một người bạn trực tuyến thích hợp?"). */
const Q=[
/* ===== Bài 9 ===== */
{l:"Bài 9: An toàn và bảo mật (1)",t:"single",q:"Em hãy cho biết, bắt nạt trực tuyến (Cyberbullying) là gì?",
 o:["Cung cấp thông tin cá nhân của em cho một người lạ trực tuyến.","Sử dụng công nghệ để quấy rối, đe dọa hoặc khiến người khác xấu hổ.","Gửi tin nhắn cho những người bạn vừa gặp."],a:1},
{l:"Bài 9: An toàn và bảo mật (1)",t:"single",q:"Em hãy cho biết, việc ai đó sử dụng công nghệ để gây ác ý với người khác được gọi là gì?",
 o:["Bắt nạt trên mạng (Cyberbullying)","Trêu đùa (Trolling)","Là một người ngoài cuộc","Là một người bênh vực"],a:0},
{l:"Bài 9: An toàn và bảo mật (1)",t:"single",q:"Một người lạ đã đăng bình luận tiêu cực trên mạng xã hội về bạn An. Bạn ấy đã xóa bình luận nhưng người đó lại tiếp tục viết những bình luận ác ý hơn. Em hãy cho biết hành động của người lạ đó được gọi là gì?",
 o:["Bắt nạt trực tuyến (Cyberbully)","Một người mạo danh - lừa đảo (Catfish)","Một Hacker (Hacker)","Một kẻ lừa đảo (Scammer)"],a:0},
{l:"Bài 9: An toàn và bảo mật (1)",t:"single",q:"Trong các tùy chọn sau, tùy chọn nào là ví dụ về bắt nạt trực tuyến?",
 o:["Tạo niềm vui cho một người bạn cùng lớp vào giờ ra chơi.","Bị bỏ rơi khỏi cuộc trò chuyện vào bữa trưa.","Đăng tin nhắn ác ý về ai đó trên phương tiện truyền thông xã hội.","Thích một bài đăng trên phương tiện truyền thông xã hội của một người bạn trực tuyến mà em không biết."],a:2},
{l:"Bài 9: An toàn và bảo mật (1)",t:"single",q:"Em nhận được một Email từ cửa hàng yêu thích của mình nói rằng em đã giành được 1000 Đô la. Em có thể nhập thông tin của mình vào biểu mẫu trực tuyến để nhận tiền. Điều gì sẽ khiến em quan tâm về Email này?",
 o:["Cửa hàng có thể đã nhầm lẫn vì em không nhớ đã tham gia cuộc thi.","Cửa hàng có thể muốn em tham gia vào một chiến dịch quảng cáo.","Email có thể là từ một kẻ lừa đảo đang cố gắng thu thập thông tin cá nhân của em.","Tiền ở dạng thẻ quà tặng chỉ có thể được sử dụng tại một địa điểm."],a:2},
{l:"Bài 9: An toàn và bảo mật (1)",t:"single",q:"Em hãy cho biết, cân bằng phương tiện (Media Balance) là gì?",
 o:["Dành tất cả thời gian rảnh trên điện thoại thông minh của em.","Bản trình chiếu sử dụng kết hợp hình ảnh, văn bản và âm thanh.","Sử dụng phương tiện để cảm thấy khỏe mạnh và cân bằng với các hoạt động sống khác."],a:2},
/* ===== Bài 10 ===== */
{l:"Bài 10: An toàn và bảo mật (2)",t:"single",q:"Em hãy cho biết, mật khẩu an toàn là gì?",
 o:["Mật khẩu khó đoán bởi con người hoặc máy tính.","Mật khẩu mà một người bạn đã cung cấp cho em.","Mật khẩu bao gồm tất cả các số và chữ cái."],a:0},
{l:"Bài 10: An toàn và bảo mật (2)",t:"yn",q:"Em hãy chọn Mạnh nếu mật khẩu mạnh hoặc chọn Yếu nếu mật khẩu yếu.",
 labels:["Mạnh","Yếu"],items:[["W3*ud28x",0],["1234567890",1],["ILoveC@ndy2",0]],mono:true},
{l:"Bài 10: An toàn và bảo mật (2)",t:"single",q:"Những bạn học sinh mới cần tạo một trang Web với mật khẩu là banana mà trường học của em sử dụng để quản lí bài tập về nhà. Những bạn học sinh này yêu cầu em cung cấp các mẹo đặt mật khẩu mạnh. Em nên nói gì với các bạn ấy?",
 o:["Tạo mật khẩu ngắn để dễ nhớ.","Sử dụng tên thú cưng của họ làm mật khẩu.","Sử dụng số và kí hiệu trong mật khẩu.","Chia sẻ mật khẩu với bạn trong trường hợp họ quên nó."],a:2},
{l:"Bài 10: An toàn và bảo mật (2)",t:"single",q:"Em hãy cho biết, thông tin cá nhân nào em KHÔNG nên chia sẻ trực tuyến?",
 o:["Địa chỉ","Tên","Tuổi","Lớp"],a:0},
{l:"Bài 10: An toàn và bảo mật (2)",t:"multi",n:3,q:"Em hãy chọn những thông tin nào KHÔNG nên được chia sẻ trực tuyến? (Chọn 3)",
 o:["Tuổi (Age)","Địa chỉ nhà (Home Address)","Bài hát em yêu thích (Favourite Song)","Ngày sinh (Birthdate)"],a:[0,1,3]},
{l:"Bài 10: An toàn và bảo mật (2)",t:"single",q:"Em hãy cho biết, thông tin nào là an toàn để chia sẻ trực tuyến?",
 o:["Màu sắc yêu thích của em.","Tên trường của em.","Địa điểm yêu thích của em.","Công viên yêu thích của em."],a:0},
{l:"Bài 10: An toàn và bảo mật (2)",t:"single",q:"Em hãy chọn nội dung nào KHÔNG an toàn để chia sẻ trực tuyến?",
 o:["Vị trí GPS của công viên bên cạnh ngôi nhà của em.","Danh sách những cuốn sách yêu thích của em.","Một bức ảnh về bữa tối ngon miệng của em.","Một bức ảnh về dự án nghệ thuật hoàn toàn tuyệt vời của em."],a:0},
{l:"Bài 10: An toàn và bảo mật (2)",t:"single",q:"Em gửi ảnh của em và gia đình cho một người bạn cùng lớp. Bạn ấy đăng ảnh đó lên mạng xã hội. Em có thể làm gì để xóa ảnh vĩnh viễn khỏi Internet?",
 o:["Bảo bạn cùng lớp của em gỡ ảnh xuống nếu không em sẽ không còn là bạn của bạn ấy nữa.","Đột nhập vào máy tính của bạn cùng lớp và cố gắng xóa các bức ảnh.","Gửi yêu cầu hỗ trợ đến dịch vụ khách hàng của ứng dụng truyền thông xã hội.","Em không thể xóa ảnh mãi mãi, vì Internet là công khai và vĩnh viễn."],a:3},
{l:"Bài 10: An toàn và bảo mật (2)",t:"single",q:"Em hãy cho biết, nhóm nào sau đây thích hợp để trở thành bạn bè trực tuyến?",
 o:["Những người em gặp khi chơi trò chơi trực tuyến.","Những người thực hiện giao hàng đến nhà em.","Những người em biết trong cuộc sống thực."],a:2},
{l:"Bài 10: An toàn và bảo mật (2)",t:"single",q:"Em hãy chọn ví dụ về một người bạn trực tuyến thích hợp?",
 o:["Ai đó gửi tin nhắn trong ứng dụng yêu cầu em chia sẻ thông tin cá nhân của mình.","Một người nổi tiếng trên Internet, như Vlogger hoặc danh nhân.","Một người bạn học cùng lớp và cùng chơi trò chơi trực tuyến vào cuối tuần."],a:2},
{l:"Bài 10: An toàn và bảo mật (2)",t:"single",q:"Em hãy cho biết, em có thể nói chuyện với người lạ trực tuyến khi nào?",
 o:["Ban ngày","Bất cứ lúc nào","Không bao giờ","Cuối tuần"],a:2,keep:true},
{l:"Bài 10: An toàn và bảo mật (2)",t:"single",q:"Em gặp một người trong phòng trò chuyện chơi Game trực tuyến và người này yêu cầu em cung cấp địa chỉ nhà. Em nên kết luận điều gì từ yêu cầu của họ?",
 o:["Họ muốn đến thăm em.","Họ muốn gửi cho em một cái gì đó.","Họ không phải là một người bạn trực tuyến thích hợp.","Họ tò mò về nơi em sống."],a:2},
{l:"Bài 10: An toàn và bảo mật (2)",t:"single",q:"Một người lạ mà em gặp trực tuyến đã yêu cầu em cung cấp tên và địa chỉ để họ gửi cho em lời mời dự tiệc. Theo em, em nên làm gì?",
 o:["Cung cấp tên và địa chỉ của em.","Từ chối cung cấp tên hoặc địa chỉ của em.","Đề nghị gặp họ tại bữa tiệc.","Cung cấp tên của em nhưng không cho biết địa chỉ của em."],a:1},
{l:"Bài 10: An toàn và bảo mật (2)",t:"single",q:"Em nên làm gì nếu em bị người lạ có hành vi trực tuyến tục tĩu không phù hợp?",
 o:["Nói với cha mẹ hoặc giáo viên của em.","Nói với người lạ rằng em không thích hành vi của họ.","Yêu cầu người lạ dừng hành vi.","Trò chuyện với người lạ để giữ họ trực tuyến."],a:0},
{l:"Bài 10: An toàn và bảo mật (2)",t:"single",q:"Em nhận được Email từ một người gửi không xác định nói rằng em đã giành được giải thưởng và yêu cầu em trả lời kèm theo tên, địa chỉ và số điện thoại của em. Điều an toàn nhất để làm tiếp theo là gì?",
 o:["Nói với một người lớn rằng em đã nhận được một Email giống như một trò lừa đảo.","Trả lời người gửi với thông tin được yêu cầu.","Trả lời người gửi bằng một tin nhắn yêu cầu thêm thông tin."],a:0},
{l:"Bài 10: An toàn và bảo mật (2)",t:"yn",popup:true,q:"Em đang truy cập Internet và cửa sổ hiển thị bên dưới bật lên. Em hãy chọn Có nếu là điều em nên làm hoặc chọn Không nếu không phải.",
 labels:["Có","Không"],items:[["Nhập địa chỉ Email và mật khẩu thông thường của em.",1],["Đồng ý với các Điều khoản và Điều kiện.",1],["Nhấp vào Get More Free Games!!! để nhận thêm Game miễn phí.",1]]},
/* ===== Bài 11 ===== */
{l:"Bài 11: An toàn và bảo mật (3)",t:"yn",q:"Em hãy chọn Có nếu đáp án là phù hợp giúp bảo mật kĩ thuật số và Không nếu không phải.",
 labels:["Có","Không"],items:[["Không chia sẻ mật khẩu với người khác.",0],["Lưu trữ mật khẩu trên máy tính.",1],["Sử dụng một mật khẩu khác nhau cho mỗi tài khoản.",0],["Nói cho ai đó biết mật khẩu của em để họ cũng có thể sử dụng chúng.",1]]},
{l:"Bài 11: An toàn và bảo mật (3)",t:"multi",n:3,q:"Em hãy chọn những yếu tố nào sau đây làm cho thiết bị có thể bị hỏng? (Chọn 3)",
 o:["Ngón tay (Fingers)","Cọ vệ sinh","Mưa (Rain)","Thực phẩm (Food)"],a:[0,2,3]},
{l:"Bài 11: An toàn và bảo mật (3)",t:"single",q:"Em hãy chọn vị trí nào sau đây là nơi tốt nhất để sạc Pin điện thoại thông minh?",
 o:["Trên bề mặt phẳng, nơi không có thức ăn, chất lỏng hoặc nhiệt độ quá cao.","Trên sàn nhà bằng cách sử dụng bộ sạc của người lạ.","Dưới chăn của một chiếc giường."],a:0},
{l:"Bài 11: An toàn và bảo mật (3)",t:"single",q:"Em hãy chọn cách nào sau đây là an toàn nhất để sạc thiết bị di động?",
 o:["Đặt thiết bị trên sàn và cắm cáp sạc của một thiết bị khác.","Đặt ở nơi an toàn gần ổ cắm và cắm cáp sạc đi kèm với thiết bị.","Đặt thiết bị di động bên ngoài trong ngày và sạc nó dưới ánh nắng trực tiếp."],a:1},
{l:"Bài 11: An toàn và bảo mật (3)",t:"multi",n:2,q:"Em hãy cho biết, điều nào sau đây có thể làm hỏng máy tính xách tay? (Chọn 2)",
 o:["Di chuyển máy tính xách tay bằng cách xách màn hình.","Để máy tính xách tay trong xe quá nóng hoặc quá lạnh.","Sử dụng túi đựng máy tính xách tay có đệm với dây đeo để giữ cố định máy tính xách tay."],a:[0,1]},
{l:"Bài 11: An toàn và bảo mật (3)",t:"yn",q:"Em hãy chọn Đúng nếu là phát biểu đúng trong việc vận chuyển máy tính xách tay hoặc chọn Sai nếu không phải.",
 labels:["Đúng","Sai"],items:[["Máy tính xách tay có thể được giữ trong xe một cách an toàn.",1],["Máy tính xách tay được vận chuyển an toàn trong túi đựng máy tính xách tay.",0],["Máy tính xách tay có thể bị hỏng nếu tiếp xúc với nhiệt độ khắc nghiệt.",0]]},
{l:"Bài 11: An toàn và bảo mật (3)",t:"single",q:"Em có một máy tính, một màn hình và một bàn phím trong phòng của em. Vì sao em nên che bàn phím khi em không sử dụng?",
 o:["Để bảo vệ bàn phím khỏi nhiệt độ lạnh.","Để bảo vệ bàn phím khỏi bụi.","Để bảo vệ bàn phím khỏi ánh sáng mặt trời.","Để bảo vệ bàn phím khỏi nhiệt độ ấm áp."],a:1},
/* ===== Bài 12 ===== */
{l:"Bài 12: Máy tính và sức khỏe",t:"single",q:"Thuật ngữ thời gian em dành để làm những việc như:\n• Xem một chương trình truyền hình với gia đình của em;\n• Chơi trò chơi điện tử trên bảng điều khiển;\n• Gửi tin nhắn văn bản từ điện thoại thông minh;\n• Nghiên cứu một cái gì đó trên máy tính.",
 o:["Tương tác trực tuyến (Online Interaction).","Thời gian tập trung (Focus Time).","Thời gian sử dụng thiết bị (Screen Time).","Cân bằng truyền thông (Media Balance)."],a:2},
{l:"Bài 12: Máy tính và sức khỏe",t:"match",q:"Em hãy ghép nối mỗi thuật ngữ ở cột bên phải với định nghĩa tương ứng ở cột bên trái.",
 pairs:[["Vị trí và cách chúng ta giữ đầu, cổ, lưng và cột sống khi đứng, ngồi hoặc nằm.","Tư thế (Posture)"],["Một chuỗi ký tự được sử dụng để xác minh danh tính của người dùng trong quá trình xác thực.","Mật khẩu (Password)"],["Thông tin có thể được sử dụng để xác định một người, chẳng hạn như địa chỉ đường phố và số điện thoại.","Dữ liệu cá nhân (Personal Data)"],["Các hoạt động được thực hiện trước màn hình, như TV hoặc máy tính.","Screen Time"]]},
{l:"Bài 12: Máy tính và sức khỏe",t:"yn",q:"Em hãy chọn Có nếu là đáp án đúng về tư thế tốt khi làm việc với máy tính và Không nếu không phải.",
 labels:["Có","Không"],items:[["Giữ chân trên sàn.",0],["Cúi người về phía trước để xem màn hình.",1],["Bắt chéo chân dưới bàn làm việc.",1],["Thư giãn vai của bạn.",0]]},
{l:"Bài 12: Máy tính và sức khỏe",t:"single",q:"Lưng mẹ em đau khi ngồi vào bàn làm việc để sử dụng máy tính. Mẹ yêu cầu em cho lời khuyên về cách có tư thế tốt. Em nên nói gì với mẹ?",
 o:["Nâng màn hình máy tính lên trên tầm mắt để phải ngước nhìn lên nó.","Ngồi thẳng lưng và chân phẳng trên sàn nhà.","Nghiêng về phía màn hình máy tính.","Bắt chéo chân và ngả người ra sau."],a:1}
];

/* Điểm: tổng đúng 1000. 1000 = 33*30 + 10 -> 10 câu đầu 31 điểm, còn lại 30 điểm */
const E=["Bắt nạt trực tuyến = dùng điện thoại, máy tính để <b>làm người khác buồn, sợ hoặc xấu hổ</b>. 💡 Nhớ: “Mạng không phải nơi để bắt nạt”.", "Dùng công nghệ để <b>cố ý làm người khác tổn thương</b> gọi là Bắt nạt trên mạng (Cyberbullying). 💡 Nhớ: Cyber = mạng, Bully = bắt nạt.", "Xóa rồi mà vẫn viết tiếp những lời ác ý hơn là <b>cố ý và lặp đi lặp lại</b> → đó là bắt nạt trực tuyến. 💡 Nhớ: Ác ý + lặp lại = bắt nạt.", "Đăng tin nhắn ác ý về ai đó là bắt nạt. Chơi vui, thích bài đăng… <b>không làm ai tổn thương</b> nên không phải. 💡 Nhớ: Có người bị đau lòng = bắt nạt.", "Tự nhiên được “trúng thưởng” và bắt nhập thông tin? <b>Rất có thể là kẻ lừa đảo</b>. 💡 Nhớ: Quà từ trên trời rơi xuống = lừa đảo!", "Cân bằng phương tiện = dùng thiết bị <b>vừa đủ</b>, còn thời gian vận động, học, chơi với bạn và gia đình. 💡 Nhớ: Màn hình vừa đủ, đời thật vẫn vui.", "Mật khẩu an toàn là mật khẩu <b>khó đoán</b> với cả người lẫn máy tính. 💡 Nhớ: Dễ nhớ với em, khó đoán với người khác.", "Mật khẩu mạnh có <b>chữ, số và kí hiệu</b> (W3*ud28x). Chỉ có dãy số dễ đoán (1234567890) là yếu. 💡 Nhớ: Chữ + Số + Kí hiệu = Mạnh.", "Muốn mật khẩu mạnh hãy thêm <b>số và kí hiệu</b>. “banana” là tên quả chuối, quá dễ đoán. 💡 Nhớ: Dài, lẫn số và kí hiệu, không dùng tên thú cưng.", "Địa chỉ nhà cho người lạ biết nơi em ở, rất nguy hiểm. 💡 Nhớ: Địa chỉ, số điện thoại, mật khẩu là “bí mật của em”.", "Tuổi, địa chỉ nhà và ngày sinh giúp người xấu tìm ra em. Bài hát yêu thích thì không sao. 💡 Nhớ: Cái gì “nói em là ai” thì giữ kín.", "Màu yêu thích chỉ là sở thích, không chỉ ra em là ai hay ở đâu. Tên trường và địa điểm thì giúp người lạ tìm em. 💡 Nhớ: Sở thích thì chia sẻ, nơi chốn thì giữ kín.", "Vị trí GPS cho biết em ở đâu, nhất là gần nhà. 💡 Nhớ: Đừng cho người lạ biết “em đang ở đâu”.", "Ảnh đã đăng lên mạng có thể bị lưu lại và chia sẻ lại, không xóa hẳn được. 💡 Nhớ: Mạng là vĩnh viễn, nghĩ kĩ rồi mới đăng.", "Bạn bè trực tuyến nên là người em <b>biết ngoài đời thật</b>. 💡 Nhớ: Ngoài đời không quen thì trên mạng cũng không kết bạn.", "Bạn học cùng lớp, chơi game cuối tuần là người em đã biết thật. Người đòi thông tin cá nhân là nguy hiểm. 💡 Nhớ: Bạn tốt thì không đòi thông tin.", "Với người lạ trực tuyến: <b>không bao giờ</b> nói chuyện. 💡 Nhớ: Người lạ trên mạng = dừng lại, không trả lời.", "Người tốt không hỏi địa chỉ nhà của trẻ em. Họ <b>không phải bạn trực tuyến thích hợp</b>. 💡 Nhớ: Hỏi địa chỉ = báo động đỏ 🚨.", "Không đưa tên, địa chỉ cho người lạ, dù để “mời dự tiệc”. 💡 Nhớ: Người lạ + tên + địa chỉ = Từ chối!", "Gặp hành vi tục tĩu: không nói chuyện với họ mà <b>báo ngay cho cha mẹ hoặc thầy cô</b>. 💡 Nhớ: Gặp chuyện lạ, báo người lớn.", "Email lạ báo trúng thưởng là trò lừa đảo. Không trả lời, hãy <b>nói với người lớn</b>. 💡 Nhớ: Lạ → Không trả lời → Báo người lớn.", "Cửa sổ bật lên đòi email, mật khẩu hay mời bấm “game miễn phí” đều không an toàn. 💡 Nhớ: Pop-up lạ thì <b>đóng lại</b>, không bấm, không nhập gì.", "Giữ bí mật mật khẩu, không lưu trên máy tính, mỗi tài khoản một mật khẩu riêng. 💡 Nhớ: Mật khẩu như bàn chải đánh răng: không dùng chung!", "Ngón tay bẩn, mưa và thức ăn làm hỏng thiết bị. Cọ vệ sinh dùng để làm sạch, không phải gây hỏng. 💡 Nhớ: Nước, thức ăn, tay bẩn tránh xa máy.", "Sạc trên mặt phẳng, khô ráo, mát mẻ. Dưới chăn dễ nóng, sạc người lạ không an toàn. 💡 Nhớ: Phẳng – Khô – Mát.", "Dùng đúng cáp sạc đi kèm, đặt gần ổ cắm ở nơi an toàn, tránh nắng gắt. 💡 Nhớ: Sạc “của nhà” là sạc an toàn.", "Xách màn hình làm hỏng bản lề. Xe quá nóng hoặc quá lạnh làm hỏng máy. Túi có đệm thì tốt. 💡 Nhớ: Xách bằng thân máy, đừng để nóng lạnh.", "Nhiệt độ quá nóng/lạnh làm hỏng máy nên không để trong xe. Mang trong túi chuyên dụng là an toàn. 💡 Nhớ: Máy tính thích nhiệt độ vừa phải.", "Che bàn phím để chống <b>bụi</b> lọt vào dưới phím. 💡 Nhớ: Che phím = chống bụi.", "Screen Time = thời gian nhìn các màn hình (TV, game, điện thoại, máy tính). 💡 Nhớ: Screen = màn hình, Time = thời gian.", "💡 Nhớ: Posture – đứng/ngồi thẳng; Password – dãy kí tự xác minh em; Personal Data – thông tin nhận ra em; Screen Time – thời gian trước màn hình.", "Tư thế tốt: chân đặt sàn, vai thả lỏng. Cúi người, bắt chéo chân làm đau lưng. 💡 Nhớ: Lưng thẳng, vai thả lỏng, chân chạm đất.", "Ngồi thẳng lưng, chân đặt phẳng trên sàn. Màn hình ngang tầm mắt. 💡 Nhớ: Lưng thẳng – chân phẳng – mắt nhìn ngang."];
Q.forEach((q,i)=>q.e=E[i]);
const N=Q.length, BASE=Math.floor(1000/N), EXTRA=1000-BASE*N;
Q.forEach((q,i)=>q.pts=BASE+(i<EXTRA?1:0));
const STN=[
 {key:"Bài 9",ic:"🏰",name:"Trạm 1: Lâu Đài Bình Yên",lesson:"Bài 9: An toàn và bảo mật (1)",shard:"Mảnh Khiên Dũng Cảm",
  story:"Ở Thành phố Mạng, Hacker Mã Độc đã làm vỡ Chiếc Khiên Thần thành 4 mảnh! Vệ sĩ nhí cùng Robot Bit lên đường đi tìm. Trạm đầu tiên là Lâu Đài Bình Yên – nơi những kẻ bắt nạt và lừa đảo trên mạng hay xuất hiện. Hãy nhận ra chúng để lấy mảnh khiên đầu tiên nhé!"},
 {key:"Bài 10",ic:"🔐",name:"Trạm 2: Cổng Mật Khẩu Bí Mật",lesson:"Bài 10: An toàn và bảo mật (2)",shard:"Mảnh Khiên Bí Mật",
  story:"Tuyệt vời! Mảnh khiên đầu tiên đã sáng lên. Trạm thứ hai là Cổng Mật Khẩu Bí Mật, canh giữ bởi người lạ và những email giả danh. Chỉ ai biết giữ mật khẩu và thông tin cá nhân an toàn mới mở được cổng này!"},
 {key:"Bài 11",ic:"🔧",name:"Trạm 3: Xưởng Sửa Chữa Thiết Bị",lesson:"Bài 11: An toàn và bảo mật (3)",shard:"Mảnh Khiên Bền Vững",
  story:"Hai mảnh khiên đã về tay! Robot Bit bị trầy xước và hết pin. Ở Xưởng Sửa Chữa Thiết Bị, em phải biết cách bảo vệ và sạc thiết bị đúng cách để Bit khỏe mạnh trở lại."},
 {key:"Bài 12",ic:"💚",name:"Trạm 4: Đảo Sức Khỏe",lesson:"Bài 12: Máy tính và sức khỏe",shard:"Mảnh Khiên Khỏe Mạnh",
  story:"Chỉ còn một mảnh khiên cuối cùng, nằm trên Đảo Sức Khỏe! Muốn lấy được, em phải biết dùng máy tính đúng tư thế và hiểu thời gian sử dụng thiết bị. Cố lên, sắp hoàn thành rồi!"}
];
const stOf=q=>STN.findIndex(x=>q.l===x.lesson);
let stRight,stScore,stTotal,curSt;
const PASS=900, LETTERS="ABCD";
let order,idx,score,correctCount,answered,state;
const $=s=>document.querySelector(s), app=$("#app");
const shuffle=a=>{a=a.slice();for(let i=a.length-1;i>0;i--){const j=Math.random()*(i+1)|0;[a[i],a[j]]=[a[j],a[i]]}return a};
const esc=s=>String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");

function start(){
 /* câu hỏi chia theo bài (trạm), xáo trộn ngẫu nhiên trong từng trạm */
 order=[];stRight=[0,0,0,0];stScore=[0,0,0,0];stTotal=[0,0,0,0];
 STN.forEach((_,k)=>{const ids=Q.map((q,i)=>i).filter(i=>stOf(Q[i])===k);stTotal[k]=ids.length;order.push(...shuffle(ids))});
 idx=0;score=0;correctCount=0;curSt=-1;enter()}
function mapHtml(done,now){return `<div class="map">${STN.map((s,k)=>`<div class="node ${k<done?"won":k===now?"now":""}">${k<done?"🛡️":s.ic}</div>${k<3?`<div class="road ${k<done?"won":""}"></div>`:""}`).join("")}</div>`}
function enter(){
 const k=stOf(Q[order[idx]]),s=STN[k];
 if(k===curSt){render();return}
 const prev=curSt>=0?stSummary(curSt):"";
 curSt=k;
 $("#stn").style.display="";$("#stn").textContent=s.ic+" Trạm "+(k+1)+"/4";
 app.innerHTML=`<div class="card center">${prev}<div class="big">${s.ic}</div><h2>${s.name}</h2>${mapHtml(k,k)}
 <div class="story">${s.story}</div><p class="hint">${s.lesson} · ${stTotal[k]} câu hỏi</p>
 <div class="actions" style="justify-content:center"><button class="btn" onclick="render()">${k===0?"🚀 Lên đường":"➡️ Đến trạm này"}</button></div></div>`;
 hud();window.scrollTo(0,0);
}
function stSummary(k){
 const r=stRight[k],t=stTotal[k],ok=r/t>=0.9,st=r===t?3:r/t>=0.7?2:1;
 return `<div class="story" style="text-align:center;background:#f0fdf4;border-color:#22c55e"><div class="stars">${"⭐".repeat(st)}${"☆".repeat(3-st)}</div>Hoàn thành <b>${STN[k].name.replace(/^Trạm \d: /,"")}</b>: đúng ${r}/${t} câu (${stScore[k]} điểm).<br>${ok?"🛡️ Em nhận được <b>"+STN[k].shard+"</b>!":"🛡️ Em nhận được <b>"+STN[k].shard+"</b> nhưng nó chưa sáng hết. Cố gắng hơn nhé!"}</div>`;
}
function hud(){$("#score").textContent=score;$("#pt").textContent=Math.min(idx+1,N)+"/"+N;$("#barFill").style.width=(idx/N*100)+"%"}

function intro(){
 app.innerHTML=`<div class="card center"><div class="big">🛡️</div><h1>Vệ Sĩ An Toàn Mạng</h1>
 <p class="q" style="font-size:1.1rem">Hacker Mã Độc đã làm vỡ Chiếc Khiên Thần của Thành phố Mạng thành 4 mảnh! Hãy cùng Robot Bit đi qua <b>4 trạm</b> (Bài 9 – 12), trả lời ${N} câu hỏi về <b>An toàn và bảo mật</b> để gom đủ mảnh khiên và trở thành Vệ Sĩ An Toàn Mạng nhé!</p>
 <ul class="rule"><li>🗺️ 4 trạm = 4 bài học; câu hỏi trong mỗi trạm được xáo trộn ngẫu nhiên.</li><li>📝 Có ${N} câu hỏi, mỗi câu trả lời đúng được khoảng ${BASE} điểm.</li><li>⭐ Tổng điểm tối đa: <b>1000</b></li><li>🏆 Cần đạt từ <b>900 điểm</b> để vượt qua thử thách.</li><li>👆 Mỗi câu chỉ được trả lời một lần, hãy suy nghĩ kĩ nhé!</li></ul>
 <div class="actions" style="justify-content:center"><button class="btn" onclick="start()">🚀 Bắt đầu</button></div></div>`;
 $("#pt").textContent="0/"+N;$("#score").textContent=0;$("#barFill").style.width="0";
}

function render(){
 hud();answered=false;
 const q=Q[order[idx]];state={sel:new Set(),yn:{},m:{pick:null,map:{}}};
 let body="";
 if(q.t==="single"||q.t==="multi"){
   q._ord=shuffle(q.o.map((_,i)=>i));
   body=`<div class="opts">${q._ord.map((oi,p)=>`<button class="opt" data-o="${oi}" onclick="pick(${oi})"><span class="k">${LETTERS[p]}</span><span>${esc(q.o[oi])}</span></button>`).join("")}</div>`;
 }else if(q.t==="yn"){
   body=(q.popup?`<div class="popup"><div class="bar"><span>🎮 Free Games Zone</span><span>✖</span></div><div class="body"><div>🎉 Chúc mừng! Bạn được nhận Game miễn phí!</div><div class="f">Địa chỉ Email của bạn...</div><div class="f">Mật khẩu của bạn...</div><div class="c">☑ Tôi đồng ý với Các điều khoản và Điều kiện</div><div class="b">Get More Free Games!!!</div></div></div>`:"")+
   q.items.map((it,i)=>`<div class="row" id="r${i}"><span class="t${q.mono?"":""}">${q.mono?`<span class="mono">${esc(it[0])}</span>`:esc(it[0])}</span><span class="tg">${q.labels.map((lb,k)=>`<button data-i="${i}" data-k="${k}" onclick="yn(${i},${k})">${lb}</button>`).join("")}</span></div>`).join("");
 }else if(q.t==="match"){
   q._terms=shuffle(q.pairs.map((_,i)=>i));
   body=`<div class="match"><div><h4>Định nghĩa</h4>${q.pairs.map((p,i)=>`<button class="mi" id="d${i}" onclick="mdef(${i})">${esc(p[0])}</button>`).join("")}</div>
   <div><h4>Thuật ngữ</h4>${q._terms.map(i=>`<button class="mi" id="t${i}" onclick="mterm(${i})">${esc(q.pairs[i][1])}</button>`).join("")}</div></div><p class="hint">👆 Chạm vào một định nghĩa, rồi chạm vào thuật ngữ tương ứng.</p>`;
 }
 const hint=q.t==="multi"?`<div class="hint">Chọn đúng ${q.n} đáp án.</div>`:"";
 app.innerHTML=`<div class="card" id="card"><span class="lesson">${esc(q.l)}</span>
  <div class="hero"><div class="face">🧑‍🚀</div><div><div class="q">${esc(q.q)}</div>${hint}</div></div>${body}
  <div class="fb" id="fb"></div>
  <div class="actions"><button class="btn blue" id="ck" onclick="check()" disabled>Kiểm tra</button><button class="btn" id="nx" onclick="next()" style="display:none">${idx===N-1?"Xem kết quả 🏁":"Câu tiếp ➡️"}</button></div></div>`;
 window.scrollTo(0,0);
}

function ready(){
 const q=Q[order[idx]];let ok=false;
 if(q.t==="single")ok=state.sel.size===1;
 else if(q.t==="multi")ok=state.sel.size===q.n;
 else if(q.t==="yn")ok=Object.keys(state.yn).length===q.items.length;
 else ok=Object.keys(state.m.map).length===q.pairs.length;
 $("#ck").disabled=!ok;
}
function pick(o){
 if(answered)return;const q=Q[order[idx]];
 if(q.t==="single"){state.sel=new Set([o])}
 else{state.sel.has(o)?state.sel.delete(o):(state.sel.size<q.n&&state.sel.add(o))}
 document.querySelectorAll(".opt").forEach(b=>b.classList.toggle("sel",state.sel.has(+b.dataset.o)));ready();
}
function yn(i,k){
 if(answered)return;state.yn[i]=k;
 document.querySelectorAll(`.tg button[data-i="${i}"]`).forEach(b=>b.classList.toggle("on",+b.dataset.k===k));ready();
}
function mdef(i){
 if(answered)return;
 if(i in state.m.map){ // bỏ ghép
  const t=state.m.map[i];delete state.m.map[i];$("#d"+i).classList.remove("done");$("#d"+i).querySelector("small")?.remove();
  $("#t"+t).classList.remove("done");$("#t"+t).querySelector("small")?.remove();ready();return}
 state.m.pick=i;document.querySelectorAll("[id^=d]").forEach(b=>b.classList.remove("sel"));$("#d"+i).classList.add("sel");
}
function mterm(t){
 if(answered)return;const used=Object.values(state.m.map).includes(t);if(used||state.m.pick===null)return;
 const d=state.m.pick;state.m.map[d]=t;state.m.pick=null;
 const dn=Object.keys(state.m.map).length;
 [["d"+d,"t"+t]].forEach(([a,b])=>{[$("#"+a),$("#"+b)].forEach(e=>{e.classList.remove("sel");e.classList.add("done");e.insertAdjacentHTML("beforeend",`<small>🔗 Cặp ${dn}</small>`)})});
 ready();
}

function check(){
 if(answered)return;answered=true;const q=Q[order[idx]];let ok=false;
 $("#ck").style.display="none";
 if(q.t==="single"){
   const s=[...state.sel][0];ok=s===q.a;
   document.querySelectorAll(".opt").forEach(b=>{const o=+b.dataset.o;b.classList.add("locked");if(o===q.a)b.classList.add("ok");else if(o===s)b.classList.add("bad")});
 }else if(q.t==="multi"){
   const A=new Set(q.a);ok=state.sel.size===A.size&&[...state.sel].every(x=>A.has(x));
   document.querySelectorAll(".opt").forEach(b=>{const o=+b.dataset.o;b.classList.add("locked");if(A.has(o))b.classList.add("ok");else if(state.sel.has(o))b.classList.add("bad")});
 }else if(q.t==="yn"){
   ok=true;
   q.items.forEach((it,i)=>{const good=state.yn[i]===it[1];if(!good)ok=false;const r=$("#r"+i);r.classList.add(good?"ok":"bad");
     document.querySelectorAll(`.tg button[data-i="${i}"]`).forEach(b=>{b.disabled=true;if(+b.dataset.k===it[1])b.classList.add("on")});
     r.insertAdjacentHTML("beforeend",good?"":`<small style="color:#991b1b">Đáp án: ${q.labels[it[1]]}</small>`)});
 }else{
   ok=true;
   q.pairs.forEach((p,d)=>{const t=state.m.map[d];const good=t===d;if(!good)ok=false;$("#d"+d).classList.add(good?"ok":"bad");$("#t"+t).classList.add(good?"ok":"bad")});
   if(!ok){$("#fb").dataset.ans=q.pairs.map(p=>"• "+p[1]+" ⟷ "+p[0]).join("\n")}
 }
 const fb=$("#fb");
 if(ok){score+=q.pts;correctCount++;stRight[curSt]++;stScore[curSt]+=q.pts;fb.className="fb good";fb.textContent=`🎉 Chính xác! +${q.pts} điểm`;confetti(14)}
 else{fb.className="fb no";fb.style.whiteSpace="pre-line";fb.textContent="😅 Chưa đúng rồi, cố gắng ở câu sau nhé!"+(q.t==="match"?"\nĐáp án đúng:\n"+fb.dataset.ans:"");$("#card").classList.add("shake")}
 fb.insertAdjacentHTML("afterend",`<div class="exp">🧠 <b>Giải thích dễ nhớ:</b> ${q.e.replace(/\s*💡/g,"<br>💡")}</div>`);
 $("#score").textContent=score;$("#barFill").style.width=((idx+1)/N*100)+"%";
 $("#nx").style.display="";$("#nx").focus();
}
function next(){idx++;idx>=N?end():enter()}

function end(){
 const pass=score>=PASS;
 $("#barFill").style.width="100%";$("#pt").textContent=N+"/"+N;
 app.innerHTML=`<div class="card center"><div class="big">${pass?"🏆":"💪"}</div>
 ${mapHtml(4,-1)}${stSummary(3)}<h1 class="${pass?"pass":"fail"}">${pass?"Chúc mừng! Bạn là Vệ Sĩ An Toàn Mạng!":"Chưa đạt, thử lại nhé!"}</h1>
 <div class="score">${score} / 1000</div>
 <p class="q">Bạn trả lời đúng <b>${correctCount}/${N}</b> câu.<br>Điểm đạt: <b>${PASS}</b> điểm.</p>
 <p class="q">${pass?"Bạn đã nắm vững cách giữ an toàn khi dùng Internet và bảo vệ thiết bị. Thật tuyệt vời! 🌟":"Hãy đọc lại Bài 9 – 12 và chơi lại để đạt ít nhất 900 điểm nhé!"}</p>
 <div class="actions" style="justify-content:center"><button class="btn" onclick="start()">🔄 Chơi lại</button></div></div>`;
 if(pass)confetti(60);
}
function confetti(n){
 const fx=$("#fx"),em=["🎉","⭐","✨","🎈","🛡️","💙"];
 for(let i=0;i<n;i++){const s=document.createElement("span");s.className="cf";s.textContent=em[i%em.length];s.style.left=Math.random()*100+"vw";s.style.animationDelay=Math.random()*.6+"s";fx.appendChild(s);setTimeout(()=>s.remove(),3500)}
}
intro();

/* ============ NGÂN HÀNG CÂU HỎI (từ SparkLV3_QLesson_CongDanSo) ============
 type: single | multi | match | tf
 single/multi: o = đáp án, a = chỉ số đúng
 match: pairs = [mô tả, thuật ngữ]  (terms = thuật ngữ gây nhiễu thêm nếu có)
 tf: rows = [phát biểu, đúng?], labels = [nhãn đúng, nhãn sai]                     */
const CO = ["Có", "Không"], DS = ["Đúng", "Sai"];
const BANK = [
/* ---- Bài 17: Tin tặc ---- */
{b:"Bài 17 · Tin tặc",type:"match",q:"Ghép mỗi thuật ngữ với phát biểu tương ứng.",pairs:[
 ["Người sử dụng các kĩ năng Hack hợp pháp để xác định các lỗ hổng bảo mật trong công nghệ.","White Hat Hacker (Tin tặc mũ trắng)"],
 ["Người sử dụng các kĩ năng Hack một cách bất hợp pháp và có mục đích xấu.","Black Hat Hacker (Tin tặc mũ đen)"],
 ["Ai đó dùng kĩ năng Hack để tìm lỗ hổng bảo mật mà không được chủ sở hữu cho phép, rồi chia sẻ phát hiện - thường phải trả phí.","Gray Hat Hacker (Tin tặc mũ xám)"],
 ["Hành động truy cập trái phép vào thông tin kĩ thuật số.","Hacking"]],
 why:"Mũ trắng = hợp pháp, mũ đen = xấu, mũ xám = ở giữa (không xin phép). Hacking là truy cập trái phép."},
{b:"Bài 17 · Tin tặc",type:"single",q:"Hacker mũ trắng là gì?",o:["Một người sử dụng các kĩ năng và kiến thức máy tính cho mục đích tốt.","Ai đó đội mũ trắng để che giấu danh tính.","Người mặc đồ trắng khi sử dụng máy tính.","Ai đó nhắm vào những người xấu trực tuyến."],a:0,why:"Hacker mũ trắng dùng kĩ năng máy tính cho mục đích tốt và hợp pháp."},
{b:"Bài 17 · Tin tặc",type:"match",q:"Ghép mỗi loại tin tặc với ví dụ tương ứng.",pairs:[
 ["Tấn công một hệ thống mạng để chặn không cho người dùng truy cập các tập tin của họ.","Tin tặc vô đạo đức (Unethical Hacker)"],
 ["Tấn công một công ty để lôi kéo sự chú ý về một vấn đề, ví dụ trả lương không công bằng cho nhân viên.","Tin tặc kiêm nhà hoạt động (Hacktivist)"],
 ["Kiểm tra mạng của công ty xem mật khẩu có dễ bị tìm ra không, rồi chỉ cách khắc phục.","Tin tặc có đạo đức (Ethical Hacker)"]],
 why:"Tin tặc có đạo đức giúp sửa lỗi; hacktivist tấn công để gây chú ý; vô đạo đức gây hại."},
{b:"Bài 17 · Tin tặc",type:"single",q:"Hoàn thành câu: “______ hoạt động để xác định lỗ hổng bảo mật và đưa ra đề xuất để cải thiện.”",o:["Tin tặc có đạo đức","Tin tặc vô đạo đức"],a:0,why:"Chỉ tin tặc có đạo đức mới tìm lỗ hổng để giúp cải thiện bảo mật."},
{b:"Bài 17 · Tin tặc",type:"multi",q:"Hai loại tin tặc nào dù không có mục đích xấu, nhưng cũng không được tự ý xâm nhập vào hệ thống? (Chọn 2)",o:["Tin tặc mũ xám","Tin tặc mũ trắng","Tin tặc kiêm nhà hoạt động (Hacktivist)","Tin tặc mũ đen"],a:[0,2],why:"Mũ xám và Hacktivist không có ý xấu hoàn toàn nhưng vẫn xâm nhập khi chưa được phép — như vậy là sai."},
/* ---- Bài 18: Rủi ro trực tuyến ---- */
{b:"Bài 18 · Rủi ro trực tuyến",type:"single",q:"Thuật ngữ nào chỉ các bit dữ liệu nhỏ được thu thập bởi trang Web mà em truy cập?",o:["Cookies","Dữ kiện","Tấn công xâm nhập (Hacking)","Bảng tính"],a:0,why:"Cookies là các tập tin nhỏ do trang Web lưu để theo dõi dữ liệu."},
{b:"Bài 18 · Rủi ro trực tuyến",type:"single",q:"Catfishing là gì?",o:["Một cách an toàn để kết bạn trực tuyến.","Một môn thể thao liên quan đến câu cá.","Giả vờ là người khác trên mạng để đánh lừa hoặc lừa đảo người khác.","Một loại nghiên cứu được thực hiện trực tuyến."],a:2,why:"Catfishing = mạo danh người khác trên mạng để lừa đảo."},
{b:"Bài 18 · Rủi ro trực tuyến",type:"match",q:"Ghép mỗi thuật ngữ bảo mật với mô tả tương ứng.",pairs:[
 ["Trang Web hoặc Email giả mạo dùng để thu thập thông tin cá nhân.","Tấn công giả mạo (Phishing)"],
 ["Một chương trình được dùng để đánh cắp thông tin hoặc gây hại cho máy tính.","Virus"],
 ["Các tập tin được lưu trên máy tính từ các trang Web để theo dõi dữ liệu.","Cookies"],
 ["Lọc dữ liệu vào hoặc ra khỏi máy tính, nhằm giới hạn truy cập trái phép.","Tường lửa (Firewall)"]],
 why:"Phishing = giả mạo; Virus = chương trình hại máy; Cookies = theo dõi; Firewall = lọc & chặn truy cập trái phép."},
{b:"Bài 18 · Rủi ro trực tuyến",type:"match",q:"Ghép mỗi thuật ngữ với phát biểu tương ứng.",pairs:[
 ["Đánh cắp ứng dụng thương mại và cung cấp cho người khác.","Vi phạm Bản quyền (Piracy)"],
 ["Truy cập trái phép vào một tài nguyên với ý định gây hại.","Tấn công xâm nhập (Hacking)"],
 ["Mạo danh là một người khác với ý định lừa đảo.","Lừa đảo công nghệ cao (Catfishing)"]],
 why:"Piracy = vi phạm bản quyền, Hacking = xâm nhập trái phép, Catfishing = mạo danh để lừa."},
/* ---- Bài 19+20: Quyền riêng tư ---- */
{b:"Bài 19–20 · Quyền riêng tư",type:"single",q:"Một ví dụ về quyền công dân kĩ thuật số TÍCH CỰC là gì?",o:["Tạo tài khoản giả để lừa gạt người khác.","Không báo cáo nội dung không phù hợp được tìm thấy trực tuyến.","Sử dụng nền tảng trực tuyến để chia sẻ kiến thức và giúp đỡ người khác.","Chia sẻ thông tin cá nhân với người lạ trực tuyến."],a:2,why:"Chia sẻ kiến thức và giúp đỡ người khác là hành động tích cực."},
{b:"Bài 19–20 · Quyền riêng tư",type:"tf",labels:CO,q:"Chọn Có nếu là ví dụ về công dân số mẫu mực, chọn Không nếu không phải.",rows:[
 ["Sử dụng tên và ngày sinh của một người bạn làm tên hiển thị công khai của mình.",false],
 ["Đưa địa chỉ nhà của bạn cùng lớp cho một người em gặp trên mạng.",false],
 ["Trích dẫn nguồn của bức ảnh mà em dùng cho áp phích kĩ thuật số của mình.",true]],
 why:"Không dùng thông tin của người khác và không tiết lộ địa chỉ nhà bạn; nên trích dẫn nguồn."},
{b:"Bài 19–20 · Quyền riêng tư",type:"tf",labels:CO,q:"Chọn Có nếu là hành động của công dân kĩ thuật số mẫu mực, chọn Không nếu không phải.",rows:[
 ["Giả làm một người khác để tăng số lượng người theo dõi trên mạng xã hội.",false],
 ["Đưa ra đánh giá (Review) về một nhà hàng trên trang mạng xã hội.",true],
 ["Tải thông tin điểm thấp của bạn cùng lớp lên trang mạng xã hội của bản thân.",false]],
 why:"Giả danh và tung thông tin cá nhân của bạn là sai; đánh giá trung thực là ổn."},
{b:"Bài 19–20 · Quyền riêng tư",type:"single",q:"Ví dụ về nội dung kĩ thuật số có thể bị giới hạn độ tuổi là gì?",o:["Phim hoạt hình trẻ em.","Trò chơi điện tử bạo lực.","Nội dung giáo dục được đăng trên trang Web của trường.","Công thức nấu ăn và hướng dẫn nấu ăn."],a:1,why:"Nội dung bạo lực không phù hợp với trẻ nhỏ nên bị giới hạn độ tuổi."},
{b:"Bài 19–20 · Quyền riêng tư",type:"single",q:"Ví dụ về quyền công dân kĩ thuật số TIÊU CỰC là gì?",o:["Khen ngợi tác phẩm nghệ thuật của một người bạn trực tuyến.","Tải xuống tài liệu có bản quyền mà không được phép.","Khuyến khích bạn bè tôn trọng và tử tế trên mạng.","Tham gia vào các dự án hợp tác trực tuyến."],a:1,why:"Tải tài liệu có bản quyền khi chưa được phép là vi phạm bản quyền."},
{b:"Bài 19–20 · Quyền riêng tư",type:"tf",labels:CO,q:"Chọn Có nếu là hành động của công dân kĩ thuật số mẫu mực, chọn Không nếu không phải.",rows:[
 ["Em sao chép một trò chơi điện tử đã mua và đưa cho bạn của mình.",false],
 ["Em tải ảnh chụp bảng điểm của bạn cùng lớp lên mạng.",false],
 ["Em chia sẻ bài đăng về một bài báo liên quan đến thời tiết.",true]],
 why:"Sao chép game là vi phạm bản quyền; đăng bảng điểm của bạn là xâm phạm quyền riêng tư."},
{b:"Bài 19–20 · Quyền riêng tư",type:"single",q:"Em nên làm gì khi thấy nội dung trực tuyến không phù hợp với lứa tuổi của mình?",o:["Báo cáo việc này cho người lớn đáng tin cậy hoặc người điều hành trang Web.","Chia sẻ với bạn bè của em.","Bỏ qua và tiếp tục duyệt Web.","Để lại một bình luận rằng nội dung làm em khó chịu."],a:0,why:"Hãy báo cho người lớn đáng tin cậy hoặc quản trị viên trang Web."},
{b:"Bài 19–20 · Quyền riêng tư",type:"single",q:"Chọn đáp án đúng: “______ cho phép em kiểm soát một số thông tin cá nhân trực tuyến của mình.”",o:["Cài đặt Tùy chọn (Preference)","Cài đặt Quyền riêng tư (Privacy)","Cài đặt Trợ năng (Accessibility)","Cài đặt Hình thức (Appearance)"],a:1,why:"Cài đặt Quyền riêng tư giúp em kiểm soát thông tin cá nhân."},
{b:"Bài 19–20 · Quyền riêng tư",type:"multi",q:"Tùy chọn nào giải thích tầm quan trọng của cài đặt quyền riêng tư? (Chọn 2)",o:["Giúp em có được nhiều người theo dõi hơn trên mạng xã hội.","Có thể giúp bảo vệ em khỏi những kẻ săn trẻ em trực tuyến.","Giúp em kiểm soát ai có thể xem bài đăng của mình.","Có thể giúp bảo vệ em khỏi những bình luận tiêu cực trên mạng từ bạn bè.","Có thể cho em sự riêng tư tuyệt đối."],a:[1,2],why:"Cài đặt riêng tư giúp bảo vệ em khỏi người xấu và cho em kiểm soát ai xem bài đăng."},
{b:"Bài 19–20 · Quyền riêng tư",type:"single",q:"Tầm quan trọng của cài đặt quyền riêng tư là gì?",o:["Để có được người theo dõi hoặc lượt thích.","Để bảo vệ thông tin cá nhân và kiểm soát những người nhìn thấy thông tin đó.","Để chia sẻ thông tin cá nhân với công chúng.","Để tăng khả năng hiển thị của bài viết hoặc tin nhắn trực tuyến."],a:1,why:"Mục đích chính: bảo vệ thông tin cá nhân và kiểm soát người xem."},
{b:"Bài 19–20 · Quyền riêng tư",type:"single",q:"Cài đặt thiết bị di động nào cho phép ứng dụng theo dõi vị trí của em?",o:["Cài đặt thông báo","Cài đặt Wifi","Cài đặt vị trí","Cài đặt độ sáng màn hình"],a:2,why:"Cài đặt vị trí quyết định ứng dụng có biết em đang ở đâu hay không."},
{b:"Bài 19–20 · Quyền riêng tư",type:"single",q:"Em có thể bảo vệ quyền riêng tư của mình khi đăng bài trực tuyến bằng cách nào?",o:["Điều chỉnh cài đặt quyền riêng tư để giới hạn người có thể xem bài đăng của bạn.","Sử dụng mật khẩu phức tạp cho tài khoản của bạn.","Làm cho tất cả các bài viết của bạn có thể xem được công khai.","Xóa bài viết của bạn vài ngày một lần để đảm bảo sự riêng tư."],a:0,why:"Giới hạn người xem bằng cài đặt quyền riêng tư."},
{b:"Bài 19–20 · Quyền riêng tư",type:"single",q:"Làm cách nào có thể kiểm soát ai có thể xem, thích và nhận xét về bài đăng trực tuyến của em?",o:["Điều chỉnh cài đặt quyền riêng tư.","Sửa đổi cài đặt kiểu phông chữ.","Thay đổi cài đặt thông báo.","Cập nhật mật khẩu tài khoản của em."],a:0,why:"Chỉ cài đặt quyền riêng tư mới kiểm soát được ai xem, thích và bình luận."},
{b:"Bài 19–20 · Quyền riêng tư",type:"tf",labels:DS,q:"Với mỗi câu phát biểu về quyền riêng tư, chọn Đúng hoặc Sai.",rows:[
 ["Xác thực đa yếu tố có thể giúp bảo vệ tài khoản trực tuyến của em.",true],
 ["Không thể sử dụng cài đặt quyền riêng tư để giới hạn người có thể xem dữ liệu của em.",false],
 ["Sử dụng cài đặt bảo mật hạn chế để chặn người lạ thấy bài đăng của em.",true]],
 why:"Xác thực đa yếu tố và cài đặt riêng tư đều giúp bảo vệ tài khoản và giới hạn người xem."},
{b:"Bài 19–20 · Quyền riêng tư",type:"match",q:"Ghép mỗi thuật ngữ với phát biểu tương ứng.",pairs:[
 ["Không xác định được danh tính hoặc che giấu thông tin cá nhân trực tuyến.","Anonymity (Ẩn danh)"],
 ["Người dùng kĩ năng và kiến thức máy tính để thử nghiệm, khám phá và giải quyết các vấn đề về công nghệ.","Hacker"],
 ["Hành động có trách nhiệm, tôn trọng và hợp pháp khi sử dụng các công cụ kĩ thuật số và trực tuyến.","Ethical (Đạo đức)"],
 ["Sao chép, phân phối hoặc sử dụng nội dung kĩ thuật số mà không có sự cho phép của chủ sở hữu.","Piracy (Vi phạm bản quyền)"]],
 why:"Ẩn danh = giấu danh tính; Ethical = có đạo đức; Piracy = vi phạm bản quyền."},
{b:"Bài 19–20 · Quyền riêng tư",type:"tf",labels:DS,q:"Với mỗi câu phát biểu về công dân số, chọn Đúng hoặc Sai.",rows:[
 ["Ẩn danh là sử dụng họ và tên thật của em trên Internet.",false],
 ["Tấn công xâm nhập (Hacking) là truy cập trái phép vào một thiết bị.",true],
 ["Lừa đảo công nghệ cao (Catfishing) là giả vờ làm một người khác.",true]],
 why:"Ẩn danh là KHÔNG để lộ danh tính thật."}
];

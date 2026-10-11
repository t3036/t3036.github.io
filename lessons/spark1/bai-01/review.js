/* ==================== BỘ CÂU HỎI THEO LEVEL ==================== */
const BANK = {
1:[
 {lv:"Nhận biết",topic:"Khái niệm phần cứng",
q:"Phần cứng (Hardware) của máy tính là gì?",
opts:["Những thiết bị em có thể cầm, nắm và nhìn thấy được","Những bài hát và bộ phim lưu trong máy","Các trò chơi em cài vào máy tính","Những dòng chữ hiện trên màn hình"],ans:0,
hint:"Thử nghĩ xem thứ nào em có thể chạm tay vào được.",
exp:"Phần cứng là các bộ phận có thật, sờ được: màn hình, bàn phím, chuột, loa…"},
 {lv:"Nhận biết",topic:"Thiết bị nhập",
q:"Thiết bị nào sau đây là thiết bị nhập (Input Device)?",
opts:["Máy in (Printer)","Loa (Speakers)","Bàn phím (Keyboard)","Màn hình (Monitor)"],ans:2,
hint:"Thiết bị nhập là thiết bị đưa thông tin vào trong máy tính.",
exp:"Em gõ chữ và số trên bàn phím để đưa thông tin vào máy, nên bàn phím là thiết bị nhập."},
 {lv:"Nhận biết",topic:"Thiết bị xuất",
q:"Thiết bị xuất (Output Device) có nhiệm vụ gì?",
opts:["Gửi thông tin vào máy tính","Đưa kết quả xử lí của máy tính đến con người","Nối máy tính với mạng Internet","Cung cấp điện cho máy tính"],ans:1,
hint:"Chữ “xuất” có nghĩa là đưa ra ngoài.",
exp:"Màn hình hiện hình, loa phát tiếng, máy in in ra giấy — tất cả đều đưa kết quả ra cho em."},
 {lv:"Nhận biết",topic:"Nhận dạng máy tính",
q:"Máy tính nào có bàn di chuột (Touchpad) gắn sẵn ngay dưới bàn phím?",
opts:["Máy tính để bàn (Desktop)","Máy tính bảng (Tablet)","Điện thoại thông minh (Smartphone)","Máy tính xách tay (Laptop)"],ans:3,
hint:"Đây là loại máy tính có thể gập lại và mang đi học.",
exp:"Laptop tích hợp sẵn touchpad để trỏ và nhấp mà không cần chuột rời."},
 {lv:"Nhận biết",topic:"Thiết bị xuất",
q:"Thiết bị nào sau đây KHÔNG phải là thiết bị xuất?",
opts:["Màn hình (Monitor)","Loa (Speakers)","Chuột (Mouse)","Máy in (Printer)"],ans:2,
hint:"Thiết bị nào dùng để ra lệnh cho máy tính?",
exp:"Chuột đưa lệnh vào máy nên là thiết bị nhập; màn hình, loa, máy in đều đưa kết quả ra ngoài."},
 {lv:"Nhận biết",topic:"Thiết bị nhập",
q:"Máy quét (Scanner) dùng để làm gì?",
opts:["In tài liệu ra giấy","Đưa hình ảnh và chữ từ tờ giấy vào máy tính","Phát nhạc cho cả lớp nghe","Nối máy tính với mạng Internet"],ans:1,
hint:"“Quét” là đưa hình từ tờ giấy vào đâu?",
exp:"Scanner chụp lại trang giấy rồi đưa vào máy tính, nên nó là thiết bị nhập."},
 {lv:"Nhận biết",topic:"Thiết bị nhập",
q:"Micro (Microphone) thuộc nhóm thiết bị nào?",
opts:["Thiết bị nhập","Thiết bị xuất","Thiết bị lưu trữ","Thiết bị kết nối"],ans:0,
hint:"Em nói vào micro thì tiếng đi vào máy hay đi ra ngoài?",
exp:"Micro thu giọng nói của em rồi đưa vào máy tính, nên nó là thiết bị nhập."},
 {lv:"Nhận biết",topic:"Nhận dạng máy tính",
q:"Một bộ máy tính để bàn (Desktop) gồm những bộ phận chính nào?",
opts:["Thùng máy, bàn phím, chuột và màn hình","Chỉ cần một chiếc màn hình","Màn hình và cục pin","Máy in và máy quét"],ans:0,
hint:"Hãy nhớ lại bộ máy tính trong phòng tin học của trường.",
exp:"Desktop gồm thùng máy (Case), bàn phím, chuột và màn hình tách rời nhau."},
 {lv:"Thông hiểu",topic:"Tích hợp nhập – xuất",
q:"Điện thoại thông minh nhận lệnh của em bằng cách nào?",
opts:["Bằng chuột rời","Bằng bàn di chuột","Bằng màn hình cảm ứng","Bằng máy quét"],ans:2,
hint:"Em chạm ngón tay vào đâu để mở một ứng dụng?",
exp:"Smartphone dùng màn hình cảm ứng: vừa hiện hình cho em xem, vừa nhận lệnh khi em chạm."},
 {lv:"Nhận biết",topic:"Thiết bị xuất",
q:"Loa (Speakers) giúp em làm được việc gì?",
opts:["Gõ chữ vào máy tính","Nghe được âm thanh từ máy tính","Lưu bài tập mang về nhà","Nối máy tính với TV"],ans:1,
hint:"Loa phát ra thứ gì cho em?",
exp:"Loa đưa âm thanh — kết quả xử lí của máy — đến tai em, nên loa là thiết bị xuất."}
],
2:[
 {lv:"Thông hiểu",topic:"Tích hợp nhập – xuất",
q:"Vì sao màn hình cảm ứng (Touchscreen) vừa là thiết bị nhập, vừa là thiết bị xuất?",
opts:["Vì nó rất mỏng và nhẹ","Vì nó cần cắm điện mới chạy được","Vì nó hiện hình cho em xem, đồng thời nhận lệnh khi em chạm tay","Vì nó chỉ có trên điện thoại thông minh"],ans:2,
hint:"Hãy nghĩ tới hai việc mà màn hình cảm ứng làm cùng một lúc.",
exp:"Hiện kết quả là xuất, chạm tay ra lệnh là nhập — nó làm cả hai việc nên gọi là thiết bị tích hợp."},
 {lv:"Thông hiểu",topic:"Tích hợp nhập – xuất",
q:"Bộ tai nghe (Headset) khác tai nghe thường (Headphone) ở điểm nào?",
opts:["Có gắn thêm micro nên vừa nghe vừa nói được","Có dây dài hơn","Chỉ dùng được cho máy tính để bàn","Không cần cắm vào máy tính"],ans:0,
hint:"Khi gọi video cho ông bà, em cần thêm thiết bị gì để nói chuyện?",
exp:"Headset gồm loa (thiết bị xuất) và micro (thiết bị nhập) trong cùng một bộ."},
 {lv:"Thông hiểu",topic:"Thiết bị ngoại vi",
q:"Vì sao loa, máy in, tai nghe được gọi là thiết bị ngoại vi?",
opts:["Vì chúng nằm bên trong thùng máy","Vì chúng đắt tiền hơn máy tính","Vì chúng chỉ dùng được với laptop","Vì chúng nối từ bên ngoài vào và không tự hoạt động một mình"],ans:3,
hint:"Chữ “ngoại” có nghĩa là ở bên ngoài.",
exp:"Thiết bị ngoại vi là bộ phận bổ sung, kết nối từ bên ngoài và cần nguồn điện từ thiết bị chính."},
 {lv:"Thông hiểu",topic:"Thiết bị kết nối",
q:"Cô giáo muốn nối máy tính xách tay với máy chiếu để trình chiếu bài. Cô nên dùng cổng nào?",
opts:["Cổng mạng (Ethernet)","Cổng HDMI","Khe cắm thẻ nhớ","Ổ cắm điện"],ans:1,
hint:"Cổng này chuyên dùng cho màn hình, TV và máy chiếu.",
exp:"Cổng HDMI và VGA truyền hình ảnh từ máy tính ra màn hình, TV hoặc máy chiếu."},
 {lv:"Thông hiểu",topic:"Thiết bị kết nối",
q:"Cổng USB trên máy tính dùng để nối những thiết bị nào?",
opts:["Chỉ nối được với TV","Máy in, chuột, bàn phím, ổ đĩa Flash","Chỉ nối được với Internet","Chỉ nối được với máy chiếu"],ans:1,
hint:"USB là cổng đa năng nhất trên máy tính.",
exp:"USB (Universal Serial Bus) nối được máy in, máy quét, máy ảnh, chuột, bàn phím và ổ đĩa Flash."},
 {lv:"Thông hiểu",topic:"Thiết bị kết nối",
q:"Muốn nối máy tính vào mạng bằng dây cáp, em dùng cổng nào?",
opts:["Cổng mạng (Network port)","Cổng HDMI","Cổng VGA","Cổng cắm tai nghe"],ans:0,
hint:"Cổng này dùng sợi cáp mạng có đầu bấm hình vuông nhỏ.",
exp:"Cổng mạng dùng cáp có dây; ngoài ra máy tính còn nối mạng không dây bằng Wifi."},
 {lv:"Thông hiểu",topic:"Nhận dạng máy tính",
q:"Máy tính tất cả trong một (All-in-One) khác máy tính để bàn ở điểm nào?",
opts:["Có pin nên dùng được khi mất điện","Thùng máy được gộp chung vào màn hình","Không cần bàn phím","Nhỏ bằng chiếc điện thoại"],ans:1,
hint:"“Tất cả trong một” nghĩa là gộp bộ phận nào lại với nhau?",
exp:"All-in-One gộp thùng máy vào màn hình nên ít chiếm chỗ, nhưng vẫn phải cắm nguồn điện."},
 {lv:"Thông hiểu",topic:"Nhận dạng máy tính",
q:"Vì sao máy tính bảng và điện thoại dễ mang theo hơn máy tính để bàn?",
opts:["Vì màn hình của chúng lớn hơn","Vì nhỏ, nhẹ và chạy được bằng pin","Vì có nhiều cổng kết nối hơn","Vì chúng không cần màn hình"],ans:1,
hint:"Thiết bị nào không phải cắm điện liên tục khi dùng?",
exp:"Tablet và smartphone nhỏ nhẹ, dùng pin nên di động được; desktop phải cắm điện và đặt cố định."},
 {lv:"Thông hiểu",topic:"Thiết bị nhập",
q:"Webcam gắn sẵn trên laptop thuộc nhóm thiết bị nào?",
opts:["Thiết bị xuất","Thiết bị nhập","Thiết bị lưu trữ","Thiết bị kết nối"],ans:1,
hint:"Webcam đưa hình ảnh của em đi vào đâu?",
exp:"Webcam thu hình rồi đưa vào máy tính nên là thiết bị nhập, thường tích hợp sẵn trên laptop."},
 {lv:"Thông hiểu",topic:"Nhận dạng máy tính",
q:"Phát biểu nào sau đây đúng về máy tính để bàn (Desktop)?",
opts:["Có thể vừa đi vừa dùng","Đặt cố định và luôn phải cắm nguồn điện","Chạy bằng pin nên rất dễ di động","Màn hình luôn luôn là màn hình cảm ứng"],ans:1,
hint:"Máy tính trong phòng tin học có mang đi chơi được không?",
exp:"Desktop hạn chế di chuyển vì kích thước lớn và luôn cần kết nối với nguồn điện."},
 {lv:"Thông hiểu",topic:"Tích hợp nhập – xuất",
q:"Thiết bị nào sau đây vừa là thiết bị nhập, vừa là thiết bị xuất?",
opts:["Máy in (Printer)","Bàn phím (Keyboard)","Bộ tai nghe (Headset)","Máy quét (Scanner)"],ans:2,
hint:"Thiết bị nào vừa cho em nghe, vừa cho em nói?",
exp:"Headset có loa (xuất) và micro (nhập) nên là thiết bị tích hợp nhập – xuất."},
 {lv:"Thông hiểu",topic:"Thiết bị nhập",
q:"Bàn di chuột (Touchpad) trên laptop thay thế cho thiết bị nào?",
opts:["Bàn phím","Chuột","Màn hình","Loa"],ans:1,
hint:"Nó dùng để di con trỏ và nhấp chọn.",
exp:"Touchpad là thiết bị nhập cảm ứng, giúp trỏ và nhấp thay cho chuột rời."}
],
3:[
 {lv:"Vận dụng",topic:"Nhận dạng máy tính",
q:"Bạn An muốn mang máy tính đến lớp và vẫn dùng được khi chưa có ổ cắm điện. An nên chọn máy nào?",
opts:["Máy tính để bàn (Desktop)","Máy tính tất cả trong một (All-in-One)","Máy tính xách tay (Laptop)","Máy in (Printer)"],ans:2,
hint:"Máy nào vừa nhỏ nhẹ, vừa có pin bên trong?",
exp:"Laptop nhỏ, nhẹ và chạy bằng pin nên mang đi và dùng được khi chưa cắm điện."},
 {lv:"Vận dụng",topic:"Thiết bị nhập",
q:"Em muốn đưa bài vẽ trên giấy vào máy tính để nộp cho cô. Em nên dùng thiết bị nào?",
opts:["Máy in (Printer)","Máy quét (Scanner)","Loa (Speakers)","Máy chiếu (Projector)"],ans:1,
hint:"Thiết bị nào biến tờ giấy thành hình ảnh trong máy tính?",
exp:"Scanner là thiết bị nhập, đưa hình ảnh từ tờ giấy vào máy tính. Máy in thì làm ngược lại."},
 {lv:"Vận dụng",topic:"Thiết bị nhập",
q:"Nhóm em quay video giới thiệu lớp học. Cần thiết bị nhập nào để thu lời thuyết minh?",
opts:["Loa","Micro","Máy in","Màn hình"],ans:1,
hint:"Thiết bị nào đưa giọng nói vào máy tính?",
exp:"Micro là thiết bị nhập, thu giọng nói và đưa vào máy tính; loa thì phát tiếng ra ngoài."},
 {lv:"Vận dụng",topic:"Thiết bị xuất",
q:"Máy tính mở nhạc nhưng không nghe thấy gì. Em nên kiểm tra thiết bị nào trước tiên?",
opts:["Bàn phím","Máy quét","Loa hoặc tai nghe","Máy in"],ans:2,
hint:"Âm thanh là kết quả đi ra ngoài, vậy phải kiểm tra nhóm thiết bị nào?",
exp:"Âm thanh là kết quả xuất ra, nên cần kiểm tra thiết bị xuất âm thanh là loa hoặc tai nghe."},
 {lv:"Vận dụng",topic:"Thiết bị kết nối",
q:"Em cần chép bài tập mang về nhà mà không dùng Internet. Em nên dùng cách nào?",
opts:["Cắm ổ đĩa Flash (USB) vào cổng USB","Nối cáp HDMI sang máy chiếu","Bật webcam quay lại màn hình","Cắm tai nghe vào máy tính"],ans:0,
hint:"Thiết bị nhỏ gọn nào giúp em mang dữ liệu đi theo?",
exp:"Ổ đĩa Flash là thiết bị lưu trữ nhỏ gọn, cắm vào cổng USB để chép bài mang về."},
 {lv:"Vận dụng",topic:"Thiết bị ngoại vi",
q:"Vì sao một thiết bị ngoại vi như máy in không thể tự làm việc một mình?",
opts:["Vì nó quá nhỏ","Vì nó cần nhận lệnh và nguồn điện từ thiết bị chính","Vì nó không có màn hình","Vì nó chỉ hoạt động vào ban đêm"],ans:1,
hint:"Thiết bị ngoại vi là bộ phận bổ sung hay bộ phận chính?",
exp:"Thiết bị ngoại vi nối từ bên ngoài vào, phải nhận lệnh và nguồn điện từ thiết bị chính mới chạy được."},
 {lv:"Vận dụng",topic:"Tích hợp nhập – xuất",
q:"Bạn Lan dùng máy tính bảng để học bài. Bộ phận nào giúp Lan vừa xem vừa ra lệnh cho máy?",
opts:["Chuột rời","Màn hình cảm ứng","Máy quét","Bàn di chuột"],ans:1,
hint:"Máy tính bảng không có chuột và bàn phím rời.",
exp:"Màn hình cảm ứng của tablet vừa hiện nội dung (xuất) vừa nhận lệnh chạm (nhập)."},
 {lv:"Vận dụng",topic:"Thiết bị kết nối",
q:"Phòng máy có laptop, máy chiếu và loa. Để cả lớp cùng xem và nghe một video, cần dùng gì?",
opts:["Chỉ cần laptop là đủ","Laptop nối máy chiếu qua cổng HDMI và nối loa","Chỉ cần máy quét","Chỉ cần bàn phím rời"],ans:1,
hint:"Một thiết bị lo phần hình, một thiết bị lo phần tiếng.",
exp:"Máy chiếu và loa đều là thiết bị xuất: máy chiếu đưa hình lên màn lớn, loa đưa âm thanh ra cả phòng."},
 {lv:"Vận dụng",topic:"Thiết bị kết nối",
q:"Thiết bị nào sau đây KHÔNG phải là cổng kết nối?",
opts:["Cổng HDMI","Cổng USB","Cổng mạng (Network port)","Bàn phím (Keyboard)"],ans:3,
hint:"Ba thứ kia đều là chỗ để cắm dây vào máy tính.",
exp:"Bàn phím là thiết bị nhập; HDMI, USB và cổng mạng là các cổng kết nối trên máy tính."},
 {lv:"Vận dụng",topic:"An toàn với AI",
q:"Em nhờ AI vẽ giúp một bức tranh cho bài học. Việc nào sau đây em KHÔNG nên làm?",
opts:["Gõ yêu cầu bằng bàn phím","Xem bức tranh trên màn hình","Nghe AI đọc kết quả bằng loa","Tự gửi ảnh thật của mình cho AI khi chưa xin phép thầy cô"],ans:3,
hint:"Có một thứ em phải giữ riêng cho mình, không đưa cho AI.",
exp:"Không dùng hình ảnh, giọng nói hay thông tin cá nhân thật làm đầu vào cho AI nếu chưa được phép."},
 {lv:"Vận dụng",topic:"An toàn với AI",
q:"Khi em gõ câu hỏi gửi cho AI, câu hỏi đó được gọi là gì?",
opts:["Thông tin đầu vào","Thông tin đầu ra","Thiết bị lưu trữ","Cổng kết nối"],ans:0,
hint:"Câu hỏi đi từ em vào máy hay từ máy ra ngoài?",
exp:"Câu hỏi hay yêu cầu em gửi cho AI là thông tin đầu vào; câu trả lời hiện ra là thông tin đầu ra."},
 {lv:"Vận dụng",topic:"An toàn với AI",
q:"Trước khi bật camera hoặc micro để làm việc với AI, em cần làm gì?",
opts:["Bật ngay cho nhanh","Xin phép thầy cô hoặc người lớn","Tắt máy tính đi","Tháo bàn phím ra"],ans:1,
hint:"Camera và micro thu hình, thu tiếng thật của em.",
exp:"Em không tự bật camera, micro hay gửi ảnh, giọng nói nếu chưa được thầy cô hoặc người lớn cho phép."},
 {lv:"Vận dụng",topic:"An toàn với AI",
q:"Trong giờ ra chơi, em muốn dùng AI luyện tập nhanh vài câu hỏi. Thiết bị nào tiện nhất?",
opts:["Máy tính để bàn","Máy chiếu","Máy tính bảng hoặc điện thoại","Máy in"],ans:2,
hint:"Thiết bị nào cầm được trên tay và mở lên là dùng ngay?",
exp:"Tablet và smartphone tiện tra cứu nhanh, luyện tập ngắn nhờ nhỏ gọn và có màn hình cảm ứng."},
 {lv:"Vận dụng",topic:"Khái niệm phần cứng",
q:"Bạn Minh nói: “Bài hát trong máy tính cũng là phần cứng.” Em nhận xét thế nào?",
opts:["Đúng, vì bài hát nằm trong máy tính","Sai, vì bài hát không cầm nắm được nên không phải phần cứng","Đúng, vì bài hát phát ra từ loa","Sai, vì bài hát không có trong máy tính"],ans:1,
hint:"Phần cứng phải là thứ em cầm và nhìn thấy được.",
exp:"Bài hát là dữ liệu, không cầm nắm được. Chỉ loa, tai nghe — thứ phát bài hát ra — mới là phần cứng."}
]
};

/* ==================== CẤU HÌNH 3 MÊ CUNG ==================== */
const LEVELS = [
 { id:1, name:"Mê cung mạch đồng", sub:"Đường mạch đi thẳng theo hàng, dễ theo dõi",
 skill:"Nhận biết", time:30,
 accent:"#FFC531", accent2:"#F2A007", bg1:"#123F52", bg2:"#0C2E3D", bg3:"#133F52",
 bgA:"#1D6B83", bgB:"#0E3446", wall:"#071F2A", litFill:"#6E4A05", dim:"#2A5769", dimtext:"#8FB6C4",
 cols:4, rows:3, cw:104, ch:92,
 path:[[0,0],[1,0],[2,0],[3,0],[3,1],[2,1],[1,1],[0,1],[0,2],[1,2],[2,2],[3,2]] },

 { id:2, name:"Mê cung xoắn ốc", sub:"Đường mạch cuộn tròn dần vào tâm bo mạch",
 skill:"Thông hiểu", time:25,
 accent:"#5FE3D3", accent2:"#25A99B", bg1:"#123452", bg2:"#0B2338", bg3:"#12324B",
 bgA:"#1A5478", bgB:"#0A2B44", wall:"#061726", litFill:"#12554E", dim:"#2B4E70", dimtext:"#93B4CE",
 cols:4, rows:4, cw:104, ch:92,
 path:[[0,0],[1,0],[2,0],[3,0],[3,1],[3,2],[3,3],[2,3],[1,3],[0,3],[0,2],[0,1],[1,1],[2,1]] },

 { id:3, name:"Mê cung nhánh rẽ", sub:"Đường mạch bẻ ngoặt liên tục, nhiều ngõ cụt",
 skill:"Vận dụng", time:20,
 accent:"#D6A2FF", accent2:"#9B5DE5", bg1:"#2A2249", bg2:"#1C1633", bg3:"#2A2149",
 bgA:"#443A6E", bgB:"#221B3D", wall:"#130E24", litFill:"#4A2C77", dim:"#493C6E", dimtext:"#B3A3D6",
 cols:5, rows:4, cw:100, ch:90,
 path:[[0,3],[0,2],[1,2],[1,3],[2,3],[2,2],[2,1],[1,1],[1,0],[2,0],[3,0],[3,1],[4,1],[4,2],[3,2],[3,3]] }
];
LEVELS.forEach(L=>{ L.qs=BANK[L.id]; });

/* ==================== THAM SỐ CHUNG ==================== */
const BASE=100, PER_SEC=5, STREAK_BONUS=50, HINT_COST=25, LETTERS=["A","B","C","D"];
const SVGNS="http://www.w3.org/2000/svg";
const $=id=>document.getElementById(id);
const el=(t,a)=>{const n=document.createElementNS(SVGNS,t);for(const k in a)n.setAttribute(k,a[k]);return n;};

/* ==================== TRẠNG THÁI ==================== */
let cfg=null, QS=[], idx=0, pos=0, score=0, right=0, streak=0, bestStreak=0;
let locked=false, hintUsed=false, left=0, ticker=null, results=[];

/* ==================== ÂM THANH ==================== */
let ctx=null, muted=false;
const AC=()=>{ if(!ctx) ctx=new (window.AudioContext||window.webkitAudioContext)(); return ctx; };
function tone(f,at,dur,type="sine",vol=.16){
if(muted) return;
try{
  const c=AC(),o=c.createOscillator(),g=c.createGain();
  o.type=type;o.frequency.setValueAtTime(f,c.currentTime+at);
  g.gain.setValueAtTime(0,c.currentTime+at);
  g.gain.linearRampToValueAtTime(vol,c.currentTime+at+.015);
  g.gain.exponentialRampToValueAtTime(.0001,c.currentTime+at+dur);
  o.connect(g);g.connect(c.destination);
  o.start(c.currentTime+at);o.stop(c.currentTime+at+dur+.03);
}catch(e){}
}
const sfx={
tap:()=>tone(620,0,.07,"triangle",.09),
right:()=>[523,659,784,1047].forEach((f,i)=>tone(f,i*.075,.3,"triangle",.15)),
wrong:()=>{tone(300,0,.2,"sine",.14);tone(210,.16,.32,"sine",.13);},
tick:()=>tone(950,0,.05,"square",.06),
timeout:()=>{tone(420,0,.16,"sine",.13);tone(300,.14,.2,"sine",.12);tone(200,.3,.3,"sine",.11);},
hint:()=>{tone(760,0,.09,"triangle",.1);tone(1010,.08,.14,"triangle",.09);},
win:()=>{[523,659,784,1047,1319].forEach((f,i)=>tone(f,i*.11,.45,"triangle",.16));tone(784,.62,.7,"sine",.13);},
end:()=>[523,587,659].forEach((f,i)=>tone(f,i*.14,.4,"sine",.13))
};

/* ==================== HÌNH HỌC MÊ CUNG ==================== */
const cx=(L,c)=>(c+0.5)*L.cw, cy=(L,r)=>(r+0.5)*L.ch;
const viewBox=L=>`-10 -10 ${L.cols*L.cw+20} ${L.rows*L.ch+20}`;
function wallCells(L){
const used=new Set(L.path.map(p=>p[0]+","+p[1])), out=[];
for(let r=0;r<L.rows;r++) for(let c=0;c<L.cols;c++)
  if(!used.has(c+","+r)) out.push([c,r]);
return out;
}

/* ---- Bản đồ thu nhỏ trên thẻ chọn level ---- */
function preview(L){
const s=el("svg",{viewBox:viewBox(L),preserveAspectRatio:"xMidYMid meet"});
wallCells(L).forEach(([c,r])=>s.appendChild(el("rect",{
  x:c*L.cw+11,y:r*L.ch+11,width:L.cw-22,height:L.ch-22,rx:12,
  fill:"rgba(255,255,255,.05)"})));
for(let i=1;i<L.path.length;i++){
  const a=L.path[i-1],b=L.path[i];
  s.appendChild(el("line",{x1:cx(L,a[0]),y1:cy(L,a[1]),x2:cx(L,b[0]),y2:cy(L,b[1]),
    stroke:L.accent2,"stroke-width":11,"stroke-linecap":"round"}));
}
L.path.forEach((p,i)=>s.appendChild(el("circle",{
  cx:cx(L,p[0]),cy:cy(L,p[1]),r:i===L.path.length-1?17:10,
  fill:i===L.path.length-1?L.accent:"#fff",opacity:i===L.path.length-1?1:.55})));
return s;
}

/* ---- Bàn chơi ---- */
function buildMaze(){
const L=cfg, m=$("maze");
m.setAttribute("viewBox",viewBox(L));
["gWalls","segBase","segLit","gNodes","gChip"].forEach(g=>$(g).innerHTML="");
const last=L.path.length-1;

wallCells(L).forEach(([c,r])=>$("gWalls").appendChild(el("rect",{
  x:c*L.cw+10,y:r*L.ch+10,width:L.cw-20,height:L.ch-20,rx:14,class:"wall"})));

for(let i=1;i<L.path.length;i++){
  const a=L.path[i-1],b=L.path[i];
  const d={x1:cx(L,a[0]),y1:cy(L,a[1]),x2:cx(L,b[0]),y2:cy(L,b[1])};
  $("segBase").appendChild(el("line",{...d,class:"seg-base"}));
  $("segLit").appendChild(el("line",{...d,class:"seg-lit",id:"lit"+i}));
}

L.path.forEach((p,i)=>{
  if(i===last) return;
  const x=cx(L,p[0]),y=cy(L,p[1]);
  $("gNodes").appendChild(el("circle",{cx:x,cy:y,r:i===0?14:22,class:"node",id:"nd"+i}));
  if(i>0){const t=el("text",{x,y,class:"node-num",id:"nn"+i});t.textContent=i;$("gNodes").appendChild(t);}
});

const tx=cx(L,L.path[last][0]), ty=cy(L,L.path[last][1]);
const chip=$("gChip");
chip.appendChild(el("circle",{cx:tx,cy:ty,r:38,fill:"url(#glow)",class:"chip-glow",id:"chipGlow"}));
chip.appendChild(el("rect",{x:tx-17,y:ty-17,width:34,height:34,rx:7,fill:L.bg2,stroke:L.dim,"stroke-width":3}));
chip.appendChild(el("rect",{x:tx-9,y:ty-9,width:18,height:18,rx:4,fill:L.dim,id:"chipCore"}));
[-11,0,11].forEach(o=>{
  chip.appendChild(el("path",{d:`M${tx+o} ${ty-17}v-7M${tx+o} ${ty+17}v7`,stroke:L.dim,"stroke-width":3,"stroke-linecap":"round"}));
  chip.appendChild(el("path",{d:`M${tx-17} ${ty+o}h-7M${tx+17} ${ty+o}h7`,stroke:L.dim,"stroke-width":3,"stroke-linecap":"round"}));
});
moveBee(0,false);
}
function moveBee(i,animate=true){
const b=$("bee"), p=cfg.path[i];
if(!animate) b.style.transition="none";
b.style.transform=`translate(${cx(cfg,p[0])}px, ${cy(cfg,p[1])-30}px)`;
if(!animate) requestAnimationFrame(()=>b.style.transition="");
}

/* ==================== ĐIỀU HƯỚNG ==================== */
function show(id){["scStart","scPlay","scEnd","scHist"].forEach(s=>$(s).classList.toggle("on",s===id));}
function applyTheme(L){
const s=document.documentElement.style;
s.setProperty("--accent",L.accent); s.setProperty("--accent-2",L.accent2);
s.setProperty("--bg-1",L.bg1); s.setProperty("--bg-2",L.bg2); s.setProperty("--bg-3",L.bg3);
s.setProperty("--bg-a",L.bgA);  s.setProperty("--bg-b",L.bgB);
s.setProperty("--lit-fill",L.litFill); s.setProperty("--wall",L.wall);
s.setProperty("--dim",L.dim); s.setProperty("--dimtext",L.dimtext);
}

function buildLevelCards(){
const box=$("levelCards"); box.innerHTML="";
LEVELS.forEach(L=>{
  const c=document.createElement("button");
  c.className="lvcard"; c.style.borderColor=L.accent2+"66";
  c.innerHTML=`<span class="lvnum" style="background:${L.accent}">LEVEL ${L.id}</span>
    <h3>${L.name}</h3>
    <p class="meta">${L.qs.length} câu, ${L.time} giây mỗi câu<br>Mức độ: ${L.skill}</p>
    <div class="prev"></div>
    <p class="rec" id="rec${L.id}" style="color:${L.accent}"></p>
    <span class="go" style="color:${L.accent}">Bắt đầu bay ▸</span>`;
  c.querySelector(".prev").appendChild(preview(L));
  c.addEventListener("mouseenter",()=>c.style.borderColor=L.accent);
  c.addEventListener("mouseleave",()=>c.style.borderColor=L.accent2+"66");
  c.addEventListener("click",()=>{ AC(); sfx.tap(); startLevel(L); });
  box.appendChild(c);
});
}

function goHome(){
clearInterval(ticker);
show("scStart");
applyTheme(LEVELS[0]);
["pillLv","pillQ","pillScore"].forEach(p=>$(p).hidden=true);
$("btnHome").hidden=true;
}

/* ==================== VÒNG CHƠI ==================== */
function startLevel(L){
cfg=L; QS=L.qs;
idx=0;pos=0;score=0;right=0;streak=0;bestStreak=0;results=[];
applyTheme(L);
["pillLv","pillQ","pillScore"].forEach(p=>$(p).hidden=false);
$("btnHome").hidden=false;
$("lvNow").textContent=L.id;
$("qTotal").textContent=QS.length;
$("scoreNow").textContent="0";
$("mazeName").textContent=L.name;
show("scPlay"); buildMaze(); updateProgress(); render();
}
function updateProgress(){ $("mazeProg").textContent=`Đã thắp ${pos}/${QS.length} đoạn mạch`; }

/* Vẽ lại toàn bộ đường mạch theo vị trí hiện tại của Ong Vàng */
function paintPath(){
for(let i=1;i<cfg.path.length;i++){
  const seg=$("lit"+i);
  if(seg) seg.classList.toggle("on", i<=pos);
}
for(let i=1;i<=QS.length;i++){
  const nd=$("nd"+i), nn=$("nn"+i);
  if(nd) nd.classList.toggle("lit", i<=pos);
  if(nn) nn.classList.toggle("lit", i<=pos);
}
}
/* Nháy đỏ chốt mà Ong Vàng vừa phải rời khỏi */
function flashNode(i){
const nd=$("nd"+i), nn=$("nn"+i);
if(!nd) return;
nd.classList.add("miss"); if(nn) nn.classList.add("miss");
setTimeout(()=>{ nd.classList.remove("miss"); if(nn) nn.classList.remove("miss"); paintPath(); },900);
}

function render(){
const q=QS[idx];
locked=false;hintUsed=false;left=cfg.time;
$("qNow").textContent=idx+1;
$("tagLevel").textContent=q.lv;
$("tagLevel").className="tag "+(q.lv==="Nhận biết"?"lv1":q.lv==="Thông hiểu"?"lv2":"lv3");
$("tagTopic").textContent=q.topic;
$("qText").textContent=q.q;
$("feedback").className="feedback";
$("hintBox").className="hintbox";
$("scorePop").className="score-pop";
$("btnNext").style.display="none";
$("btnHint").disabled=false;
$("btnHint").textContent=`💡 Gợi ý (−${HINT_COST} điểm)`;

const box=$("opts"); box.innerHTML="";
q.opts.forEach((text,i)=>{
  const b=document.createElement("button");
  b.className="opt"; b.dataset.i=i;
  b.innerHTML=`<span class="letter">${LETTERS[i]}</span><span>${text}</span><span class="mark"></span>`;
  b.addEventListener("click",()=>answer(i));
  box.appendChild(b);
});
document.querySelector(".card").scrollTop=0;
startTimer();
}

function startTimer(){
clearInterval(ticker); paintTimer();
ticker=setInterval(()=>{
  left-=0.1;
  if(left<=0){ left=0; paintTimer(); clearInterval(ticker); answer(-1); return; }
  const s=Math.ceil(left);
  if(s<=5 && Math.abs(left-s)<0.06) sfx.tick();
  paintTimer();
},100);
}
function paintTimer(){
const f=$("timerFill"), n=$("timerNum"), s=Math.ceil(left);
f.style.width=(left/cfg.time*100)+"%";
n.textContent=s+"s";
f.className="timer-fill"+(left<=5?" danger":left<=10?" warn":"");
n.className="timer-num"+(left<=5?" danger":"");
}

function answer(pick){
if(locked) return;
locked=true; clearInterval(ticker);
const q=QS[idx], ok=(pick===q.ans), timeout=(pick===-1), secs=Math.max(0,Math.floor(left));

document.querySelectorAll(".opt").forEach(b=>{
  const i=+b.dataset.i; b.disabled=true;
  if(i===q.ans){b.classList.add("right");b.querySelector(".mark").textContent="✓";}
  else if(i===pick){b.classList.add("wrong");b.querySelector(".mark").textContent="✗";}
});

let stepMsg="";
if(ok){
  right++;streak++;bestStreak=Math.max(bestStreak,streak);
  let g=BASE+secs*PER_SEC+(streak>=3?STREAK_BONUS:0)-(hintUsed?HINT_COST:0);
  g=Math.max(0,g); score+=g;
  pos=Math.min(pos+1,QS.length);
  sfx.right();
  const pop=$("scorePop");
  pop.textContent=`+${g} điểm${streak>=3?`  ·  chuỗi ${streak} câu!`:""}`;
  pop.classList.add("show");
  stepMsg=`Ong Vàng tiến lên chốt số ${pos}.`;
}else{
  streak=0;
  if(pos>0){
    flashNode(pos);
    pos--;
    stepMsg=`Ong Vàng lùi về ${pos===0?"vạch xuất phát":"chốt số "+pos} và đoạn mạch vừa thắp tắt đi.`;
  }else{
    stepMsg="Ong Vàng đang ở vạch xuất phát nên không lùi thêm được.";
  }
  timeout?sfx.timeout():sfx.wrong();
}
$("scoreNow").textContent=score;
paintPath(); updateProgress(); moveBee(pos);

const fb=$("feedback");
fb.className="feedback show "+(ok?"ok":"no");
fb.innerHTML= ok
  ? `<strong>Chính xác! ⚡ ${stepMsg}</strong>${q.exp}`
  : `<strong>${timeout?"Hết giờ mất rồi!":"Chưa đúng."} Đáp án là ${LETTERS[q.ans]}. ${q.opts[q.ans]}</strong>${stepMsg}<br>${q.exp}`;

results.push({n:idx+1,q:q.q,ans:LETTERS[q.ans]+". "+q.opts[q.ans],exp:q.exp,ok});
$("btnHint").disabled=true;
const nx=$("btnNext");
nx.style.display="inline-block";
nx.textContent=(idx===QS.length-1)?"Xem kết quả":"Câu tiếp theo";
nx.focus();
}

function next(){ if(idx<QS.length-1){idx++;render();} else finish(); }

function finish(){
const total=QS.length, ratio=right/total;
const stopAt=pos, reached=(pos>=total);
if(reached){
  pos=cfg.path.length-1; paintPath(); moveBee(pos);
  $("chipGlow").classList.add("on"); $("chipCore").setAttribute("fill",cfg.accent);
  sfx.win();
}else{
  if(ratio>=.8) $("chipGlow").classList.add("on");
  ratio>=.8 ? sfx.win() : sfx.end();
}

const badges={1:["Ong Vàng tập bay","Thợ học việc","Thợ học việc giỏi","Trợ lý phần cứng"],
              2:["Ong Vàng tập bay","Thợ máy tập sự","Thợ máy khéo tay","Thợ máy tài ba"],
              3:["Ong Vàng tập bay","Kĩ thuật viên tập sự","Kĩ thuật viên giỏi","Kỹ sư phần cứng nhí"]};
let tier,stars,title;
if(ratio>=.8){tier=3;stars="⭐⭐⭐";title=reached?"Hoàn hảo! Ong Vàng chạm tới con chip kho báu.":"Xuất sắc!";}
else if(ratio>=.6){tier=2;stars="⭐⭐";title="Giỏi lắm!";}
else if(ratio>=.4){tier=1;stars="⭐";title="Khá rồi đó!";}
else {tier=0;stars="✨";title="Cùng ôn lại bài nhé!";}

$("stars").textContent=stars;
$("endTitle").textContent=title;
$("endBadge").textContent=badges[cfg.id][tier];
$("endRight").textContent=right+"/"+total;
$("endSteps").textContent=(reached?total:stopAt)+"/"+total;
$("endScore").textContent=score;
$("endBest").textContent=bestStreak;
$("reviewTitle").textContent=`Cùng xem lại ${total} câu hỏi của ${cfg.name}`;
$("reviewList").innerHTML=results.map(r=>`
  <div class="rv ${r.ok?"ok":"no"}">
    <div class="q">${r.ok?"✓":"✗"} Câu ${r.n}. ${r.q}</div>
    <div class="a">Đáp án: ${r.ans}</div>
    <div class="e">${r.exp}</div>
  </div>`).join("");

$("whoAmI").textContent="Kết quả của: "+playerName();
addRecord({id:plays.length+1, name:playerName(), lvId:cfg.id, lvName:cfg.name,
           right, total, steps:(reached?total:stopAt), score, stars:tier, when:stamp()});

const nextLv=LEVELS.find(L=>L.id===cfg.id+1);
const bn=$("btnNextLv");
if(nextLv){ bn.style.display="inline-block"; bn.textContent=`Sang Level ${nextLv.id}`; }
else bn.style.display="none";

setTimeout(()=>{ show("scEnd"); $("pillQ").hidden=true; $("scEnd").scrollTop=0; },1000);
}

/* ==================== BẢNG THÀNH TÍCH ==================== */
const plays=[];
const STAR=t=>t>0?"⭐".repeat(t):"✨";
function playerName(){ const v=$("playerName").value.trim(); return v || "Chưa đặt tên"; }
function stamp(){
const d=new Date(), z=n=>String(n).padStart(2,"0");
return `${z(d.getHours())}:${z(d.getMinutes())} ${z(d.getDate())}/${z(d.getMonth()+1)}`;
}
function bestOf(lvId){
const r=plays.filter(h=>h.lvId===lvId);
return r.length ? r.reduce((a,b)=>b.score>a.score?b:a) : null;
}
function refreshRecords(){
LEVELS.forEach(L=>{
  const e=$("rec"+L.id); if(!e) return;
  const b=bestOf(L.id);
  e.textContent = b ? `🏅 Kỷ lục ${b.score} điểm — ${b.name}` : "Chưa có kỷ lục";
  e.style.opacity = b ? ".95" : ".45";
});
$("histCount").textContent=plays.length;
}
function addRecord(r){ plays.push(r); refreshRecords(); }

function renderHist(){
const has=plays.length>0;
$("histEmpty").style.display = has?"none":"block";
$("tableWrap").style.display = has?"block":"none";
$("btnExport").style.display = has?"inline-block":"none";
$("btnClearHist").style.display = has?"inline-block":"none";

$("bestCards").innerHTML = LEVELS.map(L=>{
  const b=bestOf(L.id);
  return `<div class="reccard" style="border-left-color:${L.accent2}">
    <div class="t">Level ${L.id} — ${L.name}</div>
    <b>${b?b.score+" điểm":"—"}</b>
    <span>${b?`${b.name} · ${b.right}/${b.total} câu đúng · ${STAR(b.stars)}`:"chưa có lượt chơi nào"}</span>
  </div>`;
}).join("");

const bestIds=new Set(LEVELS.map(L=>bestOf(L.id)).filter(Boolean).map(b=>b.id));
$("histBody").innerHTML = plays.slice().reverse().map(h=>`
  <tr class="${bestIds.has(h.id)?"best":""}">
    <td>${h.id}</td><td class="nm">${bestIds.has(h.id)?"🏅 ":""}${h.name}</td>
    <td>${h.lvId} — ${h.lvName}</td><td>${h.right}/${h.total}</td>
    <td>${h.steps}/${h.total}</td><td class="pt">${h.score}</td>
    <td>${STAR(h.stars)}</td><td>${h.when}</td>
  </tr>`).join("");
}

function exportCSV(){
if(!plays.length) return;
const rows=[["STT","Tên","Level","Mê cung","Câu đúng","Tổng câu","Đoạn mạch đã thắp","Điểm","Số sao","Thời gian"]];
plays.forEach(h=>rows.push([h.id,h.name,h.lvId,h.lvName,h.right,h.total,h.steps,h.score,h.stars,h.when]));
const csv="\uFEFF"+rows.map(r=>r.map(f=>{
  const t=String(f);
  return /[",;\r\n]/.test(t) ? '"'+t.replace(/"/g,'""')+'"' : t;
}).join(",")).join("\r\n");
try{
  const a=document.createElement("a");
  a.href=URL.createObjectURL(new Blob([csv],{type:"text/csv;charset=utf-8;"}));
  a.download=`BangDiem_MeCungPhanCung_${new Date().toISOString().slice(0,10)}.csv`;
  document.body.appendChild(a); a.click();
  setTimeout(()=>{URL.revokeObjectURL(a.href); a.remove();},1000);
}catch(e){
  alert("Trình duyệt đang chặn tải file ở chế độ xem trước. Hãy mở file game trực tiếp bằng trình duyệt rồi tải lại.");
}
}

function goHist(){
clearInterval(ticker);
["pillLv","pillQ","pillScore"].forEach(p=>$(p).hidden=true);
$("btnHome").hidden=false;
renderHist(); show("scHist"); $("scHist").scrollTop=0;
}

/* ==================== SỰ KIỆN ==================== */
$("btnNext").addEventListener("click",()=>{sfx.tap();next();});
$("btnReplay").addEventListener("click",()=>{sfx.tap();startLevel(cfg);});
$("btnPick").addEventListener("click",()=>{sfx.tap();goHome();});
$("btnHome").addEventListener("click",()=>{sfx.tap();goHome();});
$("btnNextLv").addEventListener("click",()=>{
const n=LEVELS.find(L=>L.id===cfg.id+1); if(n){sfx.tap();startLevel(n);}
});
$("btnHint").addEventListener("click",()=>{
if(locked||hintUsed) return;
hintUsed=true; sfx.hint();
const h=$("hintBox"); h.textContent="💡 "+QS[idx].hint; h.classList.add("show");
$("btnHint").disabled=true; $("btnHint").textContent="💡 Đã dùng gợi ý";
});
$("btnHist").addEventListener("click",()=>{AC();sfx.tap();goHist();});
$("btnHist2").addEventListener("click",()=>{sfx.tap();goHist();});
$("btnBackHome").addEventListener("click",()=>{sfx.tap();goHome();});
$("btnExport").addEventListener("click",()=>{sfx.tap();exportCSV();});
let clearArmed=false;
$("btnClearHist").addEventListener("click",e=>{
const b=e.currentTarget;
if(!clearArmed){
  clearArmed=true; b.textContent="Bấm lần nữa để xoá hết";
  setTimeout(()=>{ if(clearArmed){clearArmed=false; b.textContent="Xoá bảng thành tích";} },4000);
  return;
}
clearArmed=false; b.textContent="Xoá bảng thành tích";
plays.length=0; refreshRecords(); renderHist(); sfx.tap();
});
$("btnMute").addEventListener("click",e=>{
muted=!muted;
e.currentTarget.textContent=muted?"🔇":"🔊";
e.currentTarget.title=muted?"Bật âm thanh":"Tắt âm thanh";
});
document.addEventListener("keydown",e=>{
if(!$("scPlay").classList.contains("on")) return;
const k=e.key.toUpperCase();
if(!locked && LETTERS.includes(k)) answer(LETTERS.indexOf(k));
else if(!locked && ["1","2","3","4"].includes(k)) answer(+k-1);
else if(locked && (e.key==="Enter"||e.key===" ")){e.preventDefault();next();}
});

buildLevelCards();
refreshRecords();

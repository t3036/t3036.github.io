const rawDB = [
    {
        type: 'mcq-multi',
        q: "Em hãy cho biết, hai thiết bị nào sau đây là thiết bị ngoại vi? (Chọn 2)",
        hint: "Ngoại vi = gắn thêm bên ngoài, em có thể cầm và gõ/bấm trực tiếp.",
        explain: "Thiết bị ngoại vi là đồ “gắn thêm bên ngoài” máy: chuột, bàn phím. Mẹo nhớ: ngoại vi = ở NGOÀI thùng máy.",
        options: ["Chuột", "Bộ sạc", "Thùng máy", "Bàn phím"],
        ans: ["Chuột", "Bàn phím"]
    },
    {
        type: 'mcq',
        q: "Em hãy cho biết, loại phần cứng (Hardware) nào gửi dữ liệu đến máy tính?",
        hint: "Dữ liệu đi vào → tiếng Anh là In...",
        explain: "Nhập = Input = dữ liệu đi VÀO máy (bàn phím, chuột). Xuất = Output = dữ liệu đi RA (màn hình, loa).",
        options: ["Thiết bị xuất (Output Device)", "Thiết bị nhập (Input Device)", "Thiết bị lưu trữ (Storage Device)", "Màn hình (Monitor)"],
        ans: "Thiết bị nhập (Input Device)"
    },
    {
        type: 'mcq',
        q: "Em hãy cho biết, thiết bị nào có bàn di chuột tích hợp để trỏ và nhấp?",
        hint: "Thiết bị này gập mở như một quyển sách và mang đi được.",
        explain: "Laptop có bàn di chuột (touchpad) ngay dưới bàn phím để thay chuột. Mẹo nhớ: lap = đùi, đặt lên đùi cũng dùng được.",
        options: ["Máy tính để bàn (Desktop)", "Điện thoại thông minh (Smartphone)", "Máy tính bảng (Tablet)", "Máy tính xách tay (Laptop)"],
        ans: "Máy tính xách tay (Laptop)"
    },
    {
        type: 'mcq',
        q: "Em hãy cho biết, thiết bị đầu vào (Input Device) nào sau đây được tích hợp vào điện thoại thông minh?",
        hint: "Em chạm ngón tay vào đâu để điều khiển điện thoại?",
        explain: "Điện thoại không có bàn phím hay chuột, em chạm thẳng vào màn hình cảm ứng (touchscreen) để điều khiển.",
        options: ["Bàn di chuột (Touchpad)", "Màn hình cảm ứng (Touchscreen)", "Tai nghe (Earbuds)", "Bộ sạc pin (Charger)"],
        ans: "Màn hình cảm ứng (Touchscreen)"
    },
    {
        type: 'mcq',
        q: "Em hãy cho biết, tùy chọn nào sau đây là ví dụ về thiết bị đầu vào được tích hợp sẵn trên máy tính?",
        hint: "Tai nghe và chuột là đồ cắm thêm. Loại nào nằm ngay trên thân máy?",
        explain: "Tích hợp = gắn sẵn trong máy. Màn hình cảm ứng có sẵn trên máy; chuột và tai nghe phải cắm thêm.",
        options: ["Màn hình cảm ứng (Touchscreen)", "Tai nghe (Headphones)", "Chuột (Mouse)"],
        ans: "Màn hình cảm ứng (Touchscreen)"
    },
    {
        type: 'mcq',
        q: "Em hãy cho biết, hình ảnh này là loại thiết bị máy tính nào?",
        hint: "Quan sát: có bàn phím gắn liền với màn hình không?",
        explain: "Có màn hình gập, bàn phím liền thân và mang đi được → đó là Laptop.",
        img: "https://cdn.pixabay.com/photo/2025/09/09/08/52/design-9824072_1280.jpg",
        options: ["Máy tính để bàn (Desktop)", "Điện thoại thông minh (Smartphone)", "Máy tính bảng (Tablet)", "Máy tính xách tay (Laptop)"],
        ans: "Máy tính xách tay (Laptop)"
    },
    {
        type: 'mcq',
        q: "Em hãy cho biết, hình ảnh nào sau đây là một chiếc Laptop?",
        hint: "Tìm hình có màn hình gập lên và bàn phím nằm phía dưới.",
        explain: "Laptop = màn hình gập lên + bàn phím phía dưới. Tablet chỉ có một tấm màn hình phẳng.",
        img: "find-laptop.png",
        options: ["Hình 1", "Hình 2", "Hình 3", "Hình 4"],
        ans: "Hình 2"
    },
    {
        type: 'matching',
        q: "Em hãy ghép mỗi thuật ngữ ở cột bên phải với định nghĩa phù hợp ở cột bên trái.",
        hint: "Bắt đầu từ mô tả dễ nhất: “một khối duy nhất” và “một vị trí duy nhất”.",
        explain: "Mẹo nhớ: All-in-One = tất cả trong MỘT khối. Desktop = để một chỗ. Tablet = ở giữa laptop và điện thoại. Laptop = mang đi nhiều nơi.",
        items: [
            { text: "Một máy tính có các thành phần của máy tính để bàn được tích hợp trong một khối duy nhất (thay vì tách biệt giữa thùng máy và màn hình hiển thị).", ans: "Máy tính tất cả trong một (All-in-One Computer)" },
            { text: "Máy tính cá nhân đặt trên hoặc gần bàn làm việc và được sử dụng tại một vị trí duy nhất do yêu cầu về kích thước và nguồn điện.", ans: "Máy tính để bàn (Desktop)" },
            { text: "Điện thoại thông minh thường có màn hình cảm ứng, khả năng kết nối Internet và hệ điều hành.", ans: "Điện thoại thông minh (Smartphone)" },
            { text: "Một thiết bị di động có kích thước trung gian giữa máy tính xách tay và điện thoại di động, thường có màn hình cảm ứng và khả năng kết nối Internet. (Nó có thể có hoặc không có quyền truy cập vào mạng di động.)", ans: "Máy tính bảng (Tablet)" },
            { text: "Một máy tính di động được sử dụng ở nhiều địa điểm. Nguồn điện từ Pin hoặc AC.", ans: "Máy tính xách tay (Laptop)" }
        ]
    },
    {
        type: 'tf',
        q: "Em hãy chọn Có nếu phát biểu đó đúng và Không nếu phát biểu đó sai.",
        hint: "Máy tính để bàn cần cắm điện cố định. Thiết bị nào mang theo người được?",
        explain: "Desktop cắm điện cố định nên không di động. Điện thoại, tablet, laptop mang theo người được. Tai nghe và loa là ngoại vi âm thanh.",
        items: [
            { text: "Máy tính để bàn có thể di động được.", ans: "Không" },
            { text: "Điện thoại thông minh, máy tính bảng và máy tính xách tay có thể di động được.", ans: "Có" },
            { text: "Tai nghe (Headsets, Headphones), loa đều là thiết bị ngoại vi cho âm thanh (Sound/Audio).", ans: "Có" }
        ]
    },
    {
        type: 'matching',
        q: "Em hãy xác định mỗi tùy chọn là phần cứng hoặc phần mềm.",
        hint: "Chạm vào được = phần cứng. Chỉ nhìn thấy trên màn hình = phần mềm.",
        explain: "Phần cứng = chạm vào được (máy in, chuột, bàn phím). Phần mềm = chỉ thấy trên màn hình (email, cơ sở dữ liệu).",
        items: [
            { text: "Máy in (Printer)", ans: "Phần cứng (Hardware)" },
            { text: "Cơ sở dữ liệu (Database)", ans: "Phần mềm (Software)" },
            { text: "Chuột (Mouse)", ans: "Phần cứng (Hardware)" },
            { text: "Bàn phím (Keyboard)", ans: "Phần cứng (Hardware)" },
            { text: "Thư điện tử (Email)", ans: "Phần mềm (Software)" }
        ]
    },
    {
        type: 'mcq',
        q: "Em hãy chọn phát biểu đúng nhất về một phần mềm ứng dụng trên máy tính để bàn?",
        hint: "Muốn dùng, em phải làm gì với phần mềm trước khi mở nó?",
        explain: "Phần mềm phải được CÀI ĐẶT vào máy rồi mới mở được, giống như em phải cất đồ vào tủ rồi mới lấy ra dùng.",
        options: ["Phần mềm không yêu cầu bất kỳ dung lượng lưu trữ nào trên máy tính của em.", "Em có thể đăng nhập vào phần mềm từ bất kỳ thiết bị nào.", "Máy tính của em phải được kết nối với Internet để chạy phần mềm.", "Phần mềm phải được cài đặt trên máy tính của em trước khi em có thể khởi chạy."],
        ans: "Phần mềm phải được cài đặt trên máy tính của em trước khi em có thể khởi chạy."
    },
    {
        type: 'mcq',
        q: "Em hãy cho biết, thuật ngữ nào là phần mềm chạy trên điện thoại hoặc máy tính bảng?",
        hint: "Tên gọi ngắn, chỉ 3 chữ cái, em hay tải từ cửa hàng ứng dụng.",
        explain: "App = Application (ứng dụng) bản nhẹ cho điện thoại và máy tính bảng. Em tải từ cửa hàng ứng dụng.",
        options: ["Icon", "Widget", "Program", "App"],
        ans: "App"
    },
    {
        type: 'matching',
        q: "Em hãy ghép thuật ngữ từ cột bên phải sang định nghĩa phù hợp của ở cột bên trái.",
        hint: "“Phiên bản nhẹ” cho điện thoại là thuật ngữ viết tắt ngắn nhất.",
        explain: "Desktop Application: phải cài vào máy. Application: nhiều chức năng. App: bản nhẹ cho điện thoại.",
        items: [
            { text: "Phải được cài đặt trên máy tính trước khi nó có thể chạy.", ans: "Desktop Application" },
            { text: "Được thiết kế để thực hiện nhiều chức năng khác nhau.", ans: "Application" },
            { text: "Phiên bản nhẹ của ứng dụng phần mềm thường được thiết kế để chạy trên điện thoại thông minh và máy tính bảng, nhưng có một số cũng chạy trên máy tính xách tay.", ans: "App" }
        ]
    },
    {
        type: 'mcq',
        q: "Em hãy cho biết, phần mềm nào dưới đây là phần mềm ứng dụng?",
        hint: "Phần mềm ứng dụng giúp em làm việc cụ thể, ví dụ soạn văn bản.",
        explain: "Microsoft Word dùng để soạn văn bản nên là phần mềm ứng dụng. Windows và iOS là hệ điều hành. Flash Drive là phần cứng.",
        options: ["Microsoft Word", "Flash Drive", "Windows", "iOS"],
        ans: "Microsoft Word"
    },
    {
        type: 'tf',
        q: "Em hãy cho biết, phương pháp nào sau đây được sử dụng để khởi động ứng dụng đã cài đặt trên máy tính để bàn? Chọn Có nếu đáp án đúng và Không nếu đáp án sai.",
        hint: "Biểu tượng lối tắt trên màn hình nền: nhấp đúp là mở.",
        explain: "Mở ứng dụng: nhấp ĐÚP vào biểu tượng lối tắt trên màn hình nền. Nhấp một lần trên Taskbar hay chọn tất cả rồi Enter thì không đúng.",
        items: [
            { text: "Nhấp chuột trái vào biểu tượng của chương trình trên Thanh tác vụ (Taskbar) và chọn Open.", ans: "Không" },
            { text: "Nhấp đúp chuột vào biểu tượng lối tắt của chương trình trên màn hình nền (Desktop).", ans: "Có" },
            { text: "Chọn tất cả các biểu tượng lối tắt trên màn hình và nhấn Enter trên bàn phím.", ans: "Không" }
        ]
    },
    {
        type: 'tf',
        q: "Em hãy chọn Có nếu là cách để thoát khỏi ứng dụng trên máy tính để bàn đã được cài đặt và chọn Không nếu không phải.",
        hint: "Tắt phần mềm bằng nút hoặc lệnh của chính nó, không phải rút dây.",
        explain: "Thoát đúng cách: bấm nút X hoặc chọn Close/Exit. Rút phích cắm màn hình không thoát được ứng dụng.",
        items: [
            { text: "Nhấp vào nút có dấu \"X\" ở góc phải trên cùng của cửa sổ.", ans: "Có" },
            { text: "Rút phích cắm màn hình.", ans: "Không" },
            { text: "Nhấp chuột phải vào biểu tượng của chương trình trên thanh tác vụ (Taskbar) và chọn Close, Exit hoặc Disable.", ans: "Có" }
        ]
    },
    {
        type: 'mcq',
        q: "Em sẽ tìm thấy lệnh Đóng (Close) trên thẻ (Tab) nào sau đây? (Hình minh họa thanh công cụ Word)",
        hint: "Thẻ này chứa các lệnh về tập tin: Mới, Mở, Lưu, Đóng.",
        explain: "Các lệnh về tập tin (New, Open, Save, Close) đều nằm ở thẻ File. Mẹo nhớ: File = tập tin = lệnh Đóng.",
        img: "word-ribbon.svg",
        options: ["File", "Home", "Insert", "Design", "View"],
        ans: "File"
    },
    {
        type: 'mcq',
        q: "Em hãy cho biết, phần mềm nào sau đây là hệ điều hành?",
        hint: "Hệ điều hành là phần mềm “nền”, có sẵn khi bật máy.",
        explain: "Hệ điều hành là phần mềm “nền” điều khiển máy, ví dụ Windows. Word là ứng dụng chạy bên trên hệ điều hành.",
        options: ["Microsoft Windows", "Apple iPad", "Microsoft Word", "Google"],
        ans: "Microsoft Windows"
    },
    {
        type: 'mcq',
        q: "Em muốn tìm một trò chơi đã được cài đặt trên máy tính của mình. Trên thanh tác vụ được hiển thị, em nhấp vào đâu để tìm trò chơi?",
        hint: "Nút này mở danh sách tất cả ứng dụng, nằm ở góc trái thanh tác vụ.",
        explain: "Nút Start (biểu tượng Windows) ở góc trái là cửa mở ra tất cả ứng dụng và trò chơi đã cài.",
        img: "taskbar.png",
        options: ["Biểu tượng Windows (Start)", "Ô tìm kiếm (Type here to search)", "Biểu tượng thư mục (File Explorer)", "Biểu tượng túi xách (Store)"],
        ans: "Biểu tượng Windows (Start)"
    },
    {
        type: 'mcq',
        q: "Em hãy cho biết, tùy chọn nào sau đây là một tập tin (File)?",
        hint: "Tập tin là một tài liệu cụ thể, không phải nơi chứa nhiều thứ.",
        explain: "Tập tin (File) là MỘT tài liệu cụ thể. Thư mục (Folder) là nơi CHỨA nhiều tập tin.",
        options: ["Một liên kết đến trang Web trường học của em.", "Một thư mục ảnh từ một chuyến đi thực địa.", "Tài liệu chứa danh sách bài tập cần làm của em.", "Buổi phát trực tiếp sự kiện thể thao."],
        ans: "Tài liệu chứa danh sách bài tập cần làm của em."
    },
    {
        type: 'matching',
        q: "Em hãy ghép nối từng thuật ngữ ở cột bên phải sang định nghĩa tương ứng ở cột bên trái.",
        hint: "Ô vuông đen trắng là mã QR. Nơi “chứa” các thứ khác là thư mục.",
        explain: "Mã QR có các ô vuông đen trắng. Tập tin = tài liệu. Thư mục = nơi chứa. Mẹo nhớ: thư mục giống như chiếc cặp đựng vở.",
        items: [
            { text: "Mã có thể đọc được bằng máy. Mã này bao gồm các ô vuông đen và trắng, thường dùng để lưu trữ các URL hoặc các thông tin khác.", ans: "Mã QR (QR Code)" },
            { text: "Tài nguyên để lưu trữ thông tin có sẵn cho một chương trình máy tính.", ans: "Tập tin (File)" },
            { text: "Vị trí ảo để lưu trữ và sắp xếp các ứng dụng, tài liệu, dữ liệu.", ans: "Thư mục (Folder)" }
        ]
    },
    {
        type: 'matching',
        q: "Em hãy ghép nối từng định nghĩa ở cột bên trái sang thuật ngữ tương ứng ở cột bên phải.",
        hint: "“Chạm vào được” → phần cứng. “Hướng dẫn máy làm theo” → chương trình.",
        explain: "Phần cứng = chạm vào được. Chương trình = hướng dẫn máy làm theo. Thiết bị = dụng cụ cho một việc riêng. Mobile = đi theo người dùng.",
        items: [
            { text: "Các bộ phận của máy tính mà bạn có thể chạm vào", ans: "Phần cứng (Hardware)" },
            { text: "Công nghệ đi đến nơi người dùng đến", ans: "Công nghệ di động (Mobile)" },
            { text: "Hướng dẫn mà máy tính làm theo", ans: "Chương trình (Program)" },
            { text: "Thiết bị được phát minh cho một mục đích cụ thể", ans: "Thiết bị (Device)" }
        ]
    },
    {
        type: 'mcq',
        q: "An cần sạc điện thoại vào ban đêm để có thể sử dụng nó vào sáng hôm sau. Tùy chọn nào là nơi an toàn để An giữ điện thoại của mình trong khi đang sạc?",
        hint: "Chỗ thoáng, khô ráo, không dễ bắt lửa và không bị che kín.",
        explain: "Sạc điện thoại ở nơi khô ráo, thoáng, cứng phẳng như mặt bàn. Không để dưới gối, nơi ẩm hay sàn nhà vì dễ nóng và nguy hiểm.",
        options: ["Trên kệ trong phòng tắm", "Trên bàn làm việc của An", "Dưới gối nằm của An", "Trên sàn nhà"],
        ans: "Trên bàn làm việc của An"
    },
    {
        type: 'mcq',
        q: "Em cần sử dụng máy tính bảng (Tablet) của mình trong giờ học để tham gia vào các bài học. Em nhận thấy rằng thời lượng Pin của máy tính bảng đang trở nên yếu. Bộ sạc của em không hoạt động. Em nên làm gì để tiếp tục tham gia trên máy tính bảng của mình?",
        hint: "Gặp sự cố ở lớp học, hãy nhờ người lớn đáng tin cậy.",
        explain: "Gặp sự cố ở lớp: báo ngay cho giáo viên. Không dùng sạc không hợp hay đổi lén vì có thể làm hỏng máy.",
        options: ["Buộc bộ sạc điện thoại vào máy tính bảng của em ngay cả khi chúng không tương thích.", "Bí mật chuyển đổi bộ sạc với em bè trong giờ giải lao.", "Hãy để máy tính bảng của em tắt nguồn và không tham gia vào bài học.", "Hãy cho giáo viên của em biết rằng bộ sạc của em không hoạt động."],
        ans: "Hãy cho giáo viên của em biết rằng bộ sạc của em không hoạt động."
    },
    {
        type: 'mcq',
        q: "Em đang học trực tuyến tại thư viện công cộng. Em cần sạc Pin máy tính xách tay để hoàn thành bài tập của mình. Một bạn khác đang sạc điện thoại di động ở ổ cắm gần nhất. Em nên làm gì để vừa sạc Pin máy tính và vừa tiếp tục học?",
        hint: "Không tháo đồ của người khác và không kéo dây vướng lối đi.",
        explain: "Cần ổ cắm thì tìm chỗ còn trống. Không rút phích của người khác, không kéo dây dài vướng lối đi.",
        options: ["Học cho đến khi hết pin máy tính xách tay để em không làm phiền bất cứ ai.", "Di chuyển đến khu vực có sẵn một ổ cắm để sạc Pin máy tính và tiếp tục buổi học.", "Rút phích cắm của điện thoại di động để em có thể sử dụng ổ cắm gần đó.", "Sử dụng dây nối dài kéo dài khắp thư viện để em không phải thay đổi chỗ ngồi."],
        ans: "Di chuyển đến khu vực có sẵn một ổ cắm để sạc Pin máy tính và tiếp tục buổi học."
    },
    {
        type: 'mcq',
        q: "Em cần kết nối máy tính bảng với Internet. Em nên sử dụng phương tiện gì dưới đây?",
        hint: "Kết nối không dây, không cần cáp, ở nhà em thường có.",
        explain: "Máy tính bảng kết nối Internet bằng Wi-Fi, không cần dây. Mẹo nhớ: cáp màn hình và cáp máy in không phải để lên mạng.",
        options: ["Monitor Cable", "Printer Cable", "Bluetooth", "Wi-Fi"],
        ans: "Wi-Fi"
    },
    {
        type: 'mcq',
        q: "Em hãy cho biết, máy tính để bàn có thể sử dụng loại thiết bị nào để kết nối Internet?",
        hint: "Tên thiết bị nhắc đến cách kết nối không dây quen thuộc.",
        explain: "Máy tính để bàn kết nối Internet qua thiết bị Wi-Fi. Mẹo nhớ: Wi-Fi = Internet không dây.",
        options: ["Một thiết bị hiển thị (Display Device)", "Một thiết bị Wi-Fi (Wi-Fi Device)", "Một thiết bị đa phương tiện (Media Device)", "Một thiết bị lưu trữ (Storage Device)"],
        ans: "Một thiết bị Wi-Fi (Wi-Fi Device)"
    },
    {
        type: 'mcq-multi',
        q: "Em hãy cho biết, điện thoại thông minh có thể kết nối với Internet bằng những cách nào? (Chọn 2)",
        hint: "Một cách là mạng không dây ở nhà, một cách là mạng của nhà mạng.",
        explain: "Điện thoại lên mạng bằng Wi-Fi hoặc gói dữ liệu di động (4G/5G). USB và Ethernet là cổng cắm dây.",
        options: ["USB", "Wi-Fi", "Gói dữ liệu từ nhà cung cấp dịch vụ di động", "Ethernet"],
        ans: ["Wi-Fi", "Gói dữ liệu từ nhà cung cấp dịch vụ di động"]
    },
    {
        type: 'mcq-multi',
        q: "Em hãy cho biết, tùy chọn nào sau đây là những cách có thể sử dụng để kết nối máy tính bảng với Internet? (Chọn 2)",
        hint: "Máy tính bảng nhỏ gọn, không có cổng cắm dây mạng.",
        explain: "Máy tính bảng lên mạng bằng gói dữ liệu di động hoặc Wi-Fi. Cáp Ethernet không phải cách quen thuộc với máy tính bảng.",
        options: ["Sử dụng gói dữ liệu từ nhà cung cấp dịch vụ di động.", "Sử dụng kết nối Wi-Fi công cộng.", "Cắm cáp Ethernet vào thiết bị và tường."],
        ans: ["Sử dụng gói dữ liệu từ nhà cung cấp dịch vụ di động.", "Sử dụng kết nối Wi-Fi công cộng."]
    }
];

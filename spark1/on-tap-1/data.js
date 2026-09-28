const rawDB = [
    {
        type: 'mcq-multi',
        q: "Em hãy cho biết, hai thiết bị nào sau đây là thiết bị ngoại vi? (Chọn 2)",
        options: ["Chuột", "Bộ sạc", "Thùng máy", "Bàn phím"],
        ans: ["Chuột", "Bàn phím"]
    },
    {
        type: 'mcq',
        q: "Em hãy cho biết, loại phần cứng (Hardware) nào gửi dữ liệu đến máy tính?",
        options: ["Xuất (Output)", "Màn hình (Monitor)", "Lưu trữ (Storage)", "Nhập (Input)"],
        ans: "Nhập (Input)"
    },
    {
        type: 'mcq',
        q: "Em hãy cho biết, thiết bị nào có bàn di chuột tích hợp để trỏ và nhấp?",
        options: ["Máy tính để bàn (Desktop)", "Điện thoại thông minh (Smartphone)", "Máy tính bảng (Tablet)", "Máy tính xách tay (Laptop)"],
        ans: "Máy tính xách tay (Laptop)"
    },
    {
        type: 'mcq',
        q: "Em hãy cho biết, thiết bị đầu vào (Input Device) nào sau đây được tích hợp vào điện thoại thông minh?",
        options: ["Bàn di chuột (Touchpad)", "Màn hình cảm ứng (Touchscreen)", "Tai nghe (Earbuds)", "Bộ sạc pin (Charger)"],
        ans: "Màn hình cảm ứng (Touchscreen)"
    },
    {
        type: 'mcq',
        q: "Em hãy cho biết, tùy chọn nào sau đây là ví dụ về thiết bị đầu vào được tích hợp sẵn trên máy tính?",
        options: ["Màn hình cảm ứng (Touchscreen)", "Tai nghe (Headphones)", "Chuột (Mouse)"],
        ans: "Màn hình cảm ứng (Touchscreen)"
    },
    {
        type: 'mcq',
        q: "Em hãy cho biết, hình ảnh này là loại thiết bị máy tính nào?",
        img: "https://cdn.pixabay.com/photo/2025/09/09/08/52/design-9824072_1280.jpg",
        options: ["Máy tính để bàn (Desktop)", "Điện thoại thông minh (Smartphone)", "Máy tính bảng (Tablet)", "Máy tính xách tay (Laptop)"],
        ans: "Máy tính xách tay (Laptop)"
    },
    {
        type: 'mcq',
        q: "Em hãy cho biết, hình ảnh nào sau đây là một chiếc Laptop?",
        img: "find-laptop.png",
        options: ["Hình 1", "Hình 2", "Hình 3", "Hình 4"],
        ans: "Hình 2"
    },
    {
        type: 'matching',
        q: "Em hãy ghép mỗi thuật ngữ ở cột bên phải với định nghĩa phù hợp ở cột bên trái.",
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
        items: [
            { text: "Máy tính để bàn có thể di động được.", ans: "Không" },
            { text: "Điện thoại thông minh, máy tính bảng và máy tính xách tay có thể di động được.", ans: "Có" },
            { text: "Tai nghe (Headsets, Headphones), loa đều là thiết bị ngoại vi cho âm thanh (Sound/Audio).", ans: "Có" }
        ]
    },
    {
        type: 'matching',
        q: "Em hãy xác định mỗi tùy chọn là phần cứng hoặc phần mềm.",
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
        options: ["Phần mềm không yêu cầu bất kỳ dung lượng lưu trữ nào trên máy tính của em.", "Em có thể đăng nhập vào phần mềm từ bất kỳ thiết bị nào.", "Máy tính của em phải được kết nối với Internet để chạy phần mềm.", "Phần mềm phải được cài đặt trên máy tính của em trước khi em có thể khởi chạy."],
        ans: "Phần mềm phải được cài đặt trên máy tính của em trước khi em có thể khởi chạy."
    },
    {
        type: 'mcq',
        q: "Em hãy cho biết, thuật ngữ nào là phần mềm chạy trên điện thoại hoặc máy tính bảng?",
        options: ["Icon", "Widget", "Program", "App"],
        ans: "App"
    },
    {
        type: 'matching',
        q: "Em hãy ghép thuật ngữ từ cột bên phải sang định nghĩa phù hợp của ở cột bên trái.",
        items: [
            { text: "Phải được cài đặt trên máy tính trước khi nó có thể chạy.", ans: "Desktop Application" },
            { text: "Được thiết kế để thực hiện nhiều chức năng khác nhau.", ans: "Application" },
            { text: "Phiên bản nhẹ của ứng dụng phần mềm thường được thiết kế để chạy trên điện thoại thông minh và máy tính bảng, nhưng có một số cũng chạy trên máy tính xách tay.", ans: "App" }
        ]
    },
    {
        type: 'mcq',
        q: "Em hãy cho biết, phần mềm nào dưới đây là phần mềm ứng dụng?",
        options: ["Microsoft Word", "Flash Drive", "Windows", "iOS"],
        ans: "Microsoft Word"
    },
    {
        type: 'tf',
        q: "Em hãy cho biết, phương pháp nào sau đây được sử dụng để khởi động ứng dụng đã cài đặt trên máy tính để bàn? Chọn Có nếu đáp án đúng và Không nếu đáp án sai.",
        items: [
            { text: "Nhấp chuột trái vào biểu tượng của chương trình trên Thanh tác vụ (Taskbar) và chọn Open.", ans: "Không" },
            { text: "Nhấp đúp chuột vào biểu tượng lối tắt của chương trình trên màn hình nền (Desktop).", ans: "Có" },
            { text: "Chọn tất cả các biểu tượng lối tắt trên màn hình và nhấn Enter trên bàn phím.", ans: "Không" }
        ]
    },
    {
        type: 'tf',
        q: "Em hãy chọn Có nếu là cách để thoát khỏi ứng dụng trên máy tính để bàn đã được cài đặt và chọn Không nếu không phải.",
        items: [
            { text: "Nhấp vào nút có dấu \"X\" ở góc phải trên cùng của cửa sổ.", ans: "Có" },
            { text: "Rút phích cắm màn hình.", ans: "Không" },
            { text: "Nhấp chuột phải vào biểu tượng của chương trình trên thanh tác vụ (Taskbar) và chọn Close, Exit hoặc Disable.", ans: "Có" }
        ]
    },
    {
        type: 'mcq',
        q: "Em sẽ tìm thấy lệnh Đóng (Close) trên thẻ (Tab) nào sau đây? (Hình minh họa thanh công cụ Word)",
        options: ["File", "Home", "Insert", "Design", "View"],
        ans: "File"
    },
    {
        type: 'mcq',
        q: "Em hãy cho biết, phần mềm nào sau đây là hệ điều hành?",
        options: ["Microsoft Windows", "Apple iPad", "Microsoft Word", "Google"],
        ans: "Microsoft Windows"
    },
    {
        type: 'mcq',
        q: "Em muốn tìm một trò chơi đã được cài đặt trên máy tính của mình. Trên thanh tác vụ được hiển thị, em nhấp vào đâu để tìm trò chơi?",
        options: ["Biểu tượng Windows (Start)", "Ô tìm kiếm (Type here to search)", "Biểu tượng thư mục (File Explorer)", "Biểu tượng túi xách (Store)"],
        ans: "Biểu tượng Windows (Start)"
    },
    {
        type: 'mcq',
        q: "Em hãy cho biết, tùy chọn nào sau đây là một tập tin (File)?",
        options: ["Một liên kết đến trang Web trường học của em.", "Một thư mục ảnh từ một chuyến đi thực địa.", "Tài liệu chứa danh sách bài tập cần làm của em.", "Buổi phát trực tiếp sự kiện thể thao."],
        ans: "Tài liệu chứa danh sách bài tập cần làm của em."
    },
    {
        type: 'matching',
        q: "Em hãy ghép nối từng thuật ngữ ở cột bên phải sang định nghĩa tương ứng ở cột bên trái.",
        items: [
            { text: "Mã có thể đọc được bằng máy. Mã này bao gồm các ô vuông đen và trắng, thường dùng để lưu trữ các URL hoặc các thông tin khác.", ans: "Mã QR (QR Code)" },
            { text: "Tài nguyên để lưu trữ thông tin có sẵn cho một chương trình máy tính.", ans: "Tập tin (File)" },
            { text: "Vị trí ảo để lưu trữ và sắp xếp các ứng dụng, tài liệu, dữ liệu.", ans: "Thư mục (Folder)" }
        ]
    },
    {
        type: 'matching',
        q: "Em hãy ghép nối từng định nghĩa ở cột bên trái sang thuật ngữ tương ứng ở cột bên phải.",
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
        options: ["Trên kệ trong phòng tắm", "Trên bàn làm việc của An", "Dưới gối nằm của An", "Trên sàn nhà"],
        ans: "Trên bàn làm việc của An"
    },
    {
        type: 'mcq',
        q: "Em cần sử dụng máy tính bảng (Tablet) của mình trong giờ học để tham gia vào các bài học. Em nhận thấy rằng thời lượng Pin của máy tính bảng đang trở nên yếu. Bộ sạc của em không hoạt động. Em nên làm gì để tiếp tục tham gia trên máy tính bảng của mình?",
        options: ["Buộc bộ sạc điện thoại vào máy tính bảng của em ngay cả khi chúng không tương thích.", "Bí mật chuyển đổi bộ sạc với em bè trong giờ giải lao.", "Hãy để máy tính bảng của em tắt nguồn và không tham gia vào bài học.", "Hãy cho giáo viên của em biết rằng bộ sạc của em không hoạt động."],
        ans: "Hãy cho giáo viên của em biết rằng bộ sạc của em không hoạt động."
    },
    {
        type: 'mcq',
        q: "Em đang học trực tuyến tại thư viện công cộng. Em cần sạc Pin máy tính xách tay để hoàn thành bài tập của mình. Một bạn khác đang sạc điện thoại di động ở ổ cắm gần nhất. Em nên làm gì để vừa sạc Pin máy tính và vừa tiếp tục học?",
        options: ["Học cho đến khi hết pin máy tính xách tay để em không làm phiền bất cứ ai.", "Di chuyển đến khu vực có sẵn một ổ cắm để sạc Pin máy tính và tiếp tục buổi học.", "Rút phích cắm của điện thoại di động để em có thể sử dụng ổ cắm gần đó.", "Sử dụng dây nối dài kéo dài khắp thư viện để em không phải thay đổi chỗ ngồi."],
        ans: "Di chuyển đến khu vực có sẵn một ổ cắm để sạc Pin máy tính và tiếp tục buổi học."
    },
    {
        type: 'mcq',
        q: "Em cần kết nối máy tính bảng với Internet. Em nên sử dụng phương tiện gì dưới đây?",
        options: ["Monitor Cable", "Printer Cable", "Bluetooth", "Wi-Fi"],
        ans: "Wi-Fi"
    },
    {
        type: 'mcq',
        q: "Em hãy cho biết, máy tính để bàn có thể sử dụng loại thiết bị nào để kết nối Internet?",
        options: ["Một thiết bị hiển thị (Display Device)", "Một thiết bị Wi-Fi (Wi-Fi Device)", "Một thiết bị đa phương tiện (Media Device)", "Một thiết bị lưu trữ (Storage Device)"],
        ans: "Một thiết bị Wi-Fi (Wi-Fi Device)"
    },
    {
        type: 'mcq-multi',
        q: "Em hãy cho biết, điện thoại thông minh có thể kết nối với Internet bằng những cách nào? (Chọn 2)",
        options: ["USB", "Wi-Fi", "Gói dữ liệu từ nhà cung cấp dịch vụ di động", "Ethernet"],
        ans: ["Wi-Fi", "Gói dữ liệu từ nhà cung cấp dịch vụ di động"]
    },
    {
        type: 'mcq-multi',
        q: "Em hãy cho biết, tùy chọn nào sau đây là những cách có thể sử dụng để kết nối máy tính bảng với Internet? (Chọn 2)",
        options: ["Sử dụng gói dữ liệu từ nhà cung cấp dịch vụ di động.", "Sử dụng kết nối Wi-Fi công cộng.", "Cắm cáp Ethernet vào thiết bị và tường."],
        ans: ["Sử dụng gói dữ liệu từ nhà cung cấp dịch vụ di động.", "Sử dụng kết nối Wi-Fi công cộng."]
    }
];

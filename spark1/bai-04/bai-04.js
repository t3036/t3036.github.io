
/* ============================================================
   0. THÔNG TIN BÀI HỌC
   ============================================================ */
const CONFIG = {
  icon:  '⚙️',
  title: 'Bài 4 — Hệ điều hành và Chương trình ứng dụng'
};

/* ============================================================
   1. DỮ LIỆU BÀI HỌC
   ============================================================ */
const slidesData = [
  {
    type: 'info',
    topic: 'Phần 1 · Hệ điều hành',
    title: 'Hệ điều hành (Operating System)',
    content: '<b>Hệ điều hành</b> là một phần mềm hệ thống đặc biệt, làm nhiệm vụ quản lí tất cả các phần mềm và phần cứng trên máy tính.',
    imageUrl: null,
    things: [
      { icon: '💻', name: 'Phần cứng', en: 'Chuột, bàn phím, màn hình' },
      { icon: '🎮', name: 'Phần mềm', en: 'Trò chơi, trình duyệt, AI' },
      { icon: '⚙️', name: 'Hệ điều hành', en: 'Trung tâm quản lí mọi thứ' }
    ],
    remember: 'Không có hệ điều hành thì máy tính <b>không hoạt động</b> được.'
  },
  {
    type: 'quiz_single',
    topic: 'Luyện tập',n
    question: 'Phần mềm nào được khởi chạy đầu tiên khi khởi động một máy tính?',
    options: [
      'Trình quản lý cơ sở dữ liệu',
      'Các ứng dụng người dùng',
      'Các tiện ích hệ thống',
      'Hệ điều hành'
    ],
    correctAnswer: 3,
    hint: 'Nó là "nền móng" để các phần mềm khác có thể hoạt động.',
    explain: 'Hệ điều hành là phần mềm hệ thống được chạy đầu tiên để quản lí và đánh thức toàn bộ máy tính.'
  },
  {
    type: 'quiz_multiple',
    topic: 'Luyện tập',
    question: 'Hai nhiệm vụ của hệ điều hành là gì? (Chọn 2 đáp án)',
    options: [
      'Quản lý các thiết bị phần cứng',
      'Quản lý thư điện tử',
      'Tạo bảng tính',
      'Diệt virus',
      'Quản lý tập tin'
    ],
    correctAnswers: [0, 4],
    hint: 'Hệ điều hành làm công việc quản lí hệ thống chung chứ không tạo bảng tính hay gửi mail thay em.',
    explain: 'Hệ điều hành quản lí thiết bị phần cứng và quản lí các tập tin/thư mục được lưu trữ trên máy tính.'
  },
  {
    type: 'info',
    topic: 'Phần 2 · Thông dụng',
    title: 'Một số Hệ điều hành thông dụng',
    content: 'Trên thế giới có nhiều hệ điều hành khác nhau dành cho cả máy tính và thiết bị di động.',
    imageUrl: null,
    things: [
      { icon: '🪟', name: 'HĐH Máy tính', en: 'Windows 10, Mac OS, Linux' },
      { icon: '📱', name: 'HĐH Di động', en: 'iOS, Android, BlackBerry OS' }
    ],
    remember: 'Hệ điều hành Windows và Mac OS phổ biến trên máy tính. iOS và Android rất phổ biến trên điện thoại.'
  },
  {
    type: 'quiz_matching',
    topic: 'Luyện tập',
    question: 'Nối tên các Hệ điều hành với biểu tượng tương ứng.',
    pairs: [
      { icon: '🤖', left: 'Android', right: 'Điện thoại đa dạng hãng (Google)' },
      { icon: '🍏', left: 'iOS', right: 'Điện thoại iPhone (Apple)' },
      { icon: '🪟', left: 'Windows', right: 'Máy tính phổ biến nhất (Microsoft)' }
    ],
    hint: 'Ai dùng iPhone? Ai dùng robot xanh?',
    explain: 'Android có biểu tượng robot, iOS gắn với quả táo Apple, Windows là hình cửa sổ.'
  },
  {
    type: 'quiz_single',
    topic: 'Luyện tập',
    question: 'Phần mềm nào sau đây là hệ điều hành?',
    options: [
      'Google',
      'Microsoft Windows',
      'Apple iPad',
      'Microsoft Word'
    ],
    correctAnswer: 1,
    hint: 'iPad là thiết bị, Word là ứng dụng văn bản, Google là công ty/trình tìm kiếm.',
    explain: 'Microsoft Windows là hệ điều hành phổ biến nhất dành cho máy tính để bàn.'
  },
  {
    type: 'quiz_dropdown',
    topic: 'Luyện tập',
    question: 'Chọn Đúng hoặc Sai cho mỗi phát biểu: Windows là hệ điều hành độc quyền ___. iOS là hệ điều hành trên máy tính ___. Android là hệ điều hành dành cho iPhone ___.',
    blanks: [
      { options: ['Đúng', 'Sai'], correctAnswer: 0 },
      { options: ['Đúng', 'Sai'], correctAnswer: 1 },
      { options: ['Đúng', 'Sai'], correctAnswer: 1 }
    ],
    hint: 'Windows là độc quyền. iOS cho điện thoại iPhone. iPhone không dùng Android.',
    explain: 'Windows là độc quyền (Đúng). iOS chạy trên điện thoại/iPad (Sai). iPhone chạy iOS chứ không chạy Android (Sai).'
  },
  {
    type: 'info',
    topic: 'Phần 3 · Thanh tác vụ',
    title: 'Thanh tác vụ (Taskbar) của Windows',
    content: '<b>Thanh tác vụ (Taskbar)</b> thường nằm ở phía dưới màn hình, chứa các nút và biểu tượng quan trọng.',
    imageUrl: null,
    things: [
      { icon: '🏁', name: 'Nút Start', en: 'Góc trái, giúp mở danh sách ứng dụng, cài đặt' },
      { icon: '🔍', name: 'Thanh tìm kiếm', en: 'Tìm nhanh ứng dụng, tập tin (Search Box)' },
      { icon: '📌', name: 'Biểu tượng ghim', en: 'Nhấp chuột trái vào icon trên taskbar để mở ứng dụng' }
    ],
    remember: 'Để thoát ứng dụng, em nhấn nút "X" ở góc phải trên cùng của cửa sổ.'
  },
  {
    type: 'quiz_multiple',
    topic: 'Luyện tập',
    question: 'Em muốn tìm một trò chơi đã cài đặt trên máy. Trên thanh tác vụ, em nhấp vào đâu để tìm?',
    options: [
      'Nút Start (Logo Windows)',
      'Thanh Search (Type here to search)',
      'Khu vực đồng hồ/ngày tháng'
    ],
    correctAnswers: [0, 1],
    hint: 'Có 2 nơi trên thanh tác vụ đều giúp em mở được trò chơi đã cài — một nơi để tìm theo tên, một nơi để duyệt qua danh sách ứng dụng.',
    explain: 'Em có thể nhấp vào thanh Search để gõ tên trò chơi và tìm nhanh, hoặc nhấp vào nút Start để mở danh sách ứng dụng rồi tìm trò chơi trong đó. Khu vực đồng hồ/ngày tháng chỉ hiển thị thời gian, không dùng để tìm ứng dụng.'
  },
  {
    type: 'quiz_dropdown',
    topic: 'Luyện tập',
    question: 'Phương pháp nào dùng để khởi động ứng dụng: Nhấp chuột trái vào biểu tượng trên Taskbar ___. Nhấp đúp chuột vào biểu tượng trên Desktop ___. Rút phích cắm màn hình để thoát ứng dụng ___.',
    blanks: [
      { options: ['Đúng', 'Sai'], correctAnswer: 0 },
      { options: ['Đúng', 'Sai'], correctAnswer: 0 },
      { options: ['Đúng', 'Sai'], correctAnswer: 1 }
    ],
    hint: 'Cách thoát ứng dụng chuẩn là nhấn nút X chứ không phải rút phích cắm.',
    explain: 'Nhấp đúp trên Desktop và nhấp đơn trên Taskbar đều dùng để mở ứng dụng. Rút điện không phải là cách tắt ứng dụng an toàn.'
  },
  {
    type: 'info',
    topic: 'Phần 4 · Chương trình ứng dụng',
    title: 'Một số chương trình ứng dụng',
    content: 'Các ứng dụng (Desktop Application) giúp em thực hiện các tác vụ cụ thể trên máy tính.',
    imageUrl: null,
    things: [
      { icon: 'W', name: 'Microsoft Word', en: 'Xử lí văn bản' },
      { icon: 'X', name: 'Microsoft Excel', en: 'Xử lí bảng tính' },
      { icon: 'P', name: 'Microsoft PowerPoint', en: 'Trình chiếu' }
    ],
    remember: 'Khi dùng các ứng dụng, em sẽ tìm thấy nút Đóng (Close) ở góc phải trên cùng của màn hình cửa sổ (dấu X).'
  },
  {
    type: 'info',
    topic: 'Phần 5 · An toàn',
    title: 'Khởi động công cụ AI an toàn',
    content: 'Để dùng AI, thiết bị cần có hệ điều hành và trình duyệt/ứng dụng. Khi dùng AI, hãy cẩn thận với quyền truy cập.',
    imageUrl: null,
    things: [
      { icon: '📷', name: 'Camera', en: 'Chú ý quyền truy cập' },
      { icon: '🎤', name: 'Micro', en: 'Dừng lại hỏi người lớn nếu app yêu cầu' },
      { icon: '📍', name: 'Vị trí', en: 'Không tùy tiện cấp quyền' }
    ],
    remember: 'Khi ứng dụng AI yêu cầu cài đặt, cập nhật, hoặc xin cấp quyền, em cần <b>dừng lại và hỏi giáo viên hoặc người lớn</b>.'
  },
  {
    type: 'info',
    final: true,
    topic: 'Hoàn thành',
    title: 'Chúc mừng em đã học xong Bài 4!',
    content: 'Em đã nắm vững vai trò của Hệ điều hành, phân biệt các HĐH thông dụng, biết thao tác trên thanh Taskbar và sử dụng các chương trình ứng dụng an toàn.',
    imageUrl: null,
    remember: 'Hệ điều hành giống như người nhạc trưởng, điều khiển mọi thứ trên máy tính của em!'
  }
];
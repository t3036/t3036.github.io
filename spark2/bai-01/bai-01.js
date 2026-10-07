/* ============================================================
   DỮ LIỆU BÀI HỌC — BÀI 1 — GIỚI THIỆU VỀ HỆ ĐIỀU HÀNH
   (chuyển sang cấu trúc LESSON.sections dùng chung engine lesson.js)
   ============================================================ */

const PASSWORDS = {
  s1: '',  // Phần 1 — Khái niệm
  s2: '',  // Phần 2 — Chức năng
  s3: '',  // Phần 3 — Nhận diện thiết bị mới
  s4: ''   // Phần 4 — Hệ điều hành và AI
};

const LESSON = {
  id:    'l2-bai1-hdh',
  icon:  '🖥️',
  title: 'Bài 1 — Giới thiệu về Hệ điều hành',

  sections: [
    {
      id: 's1',
      title: 'Khái niệm',
      password: PASSWORDS.s1,
      slides: [
        {
          type: 'info',
          topic: 'Phần 1 · Khái niệm',
          title: 'Hệ điều hành là gì?',
          content: '<b>Hệ điều hành (Operating System - OS)</b> là phần mềm hệ thống đặc biệt, quản lí tất cả các phần mềm và phần cứng trên máy tính.',
          imageUrl: null,
          things: [
            { icon: '⌨️', name: 'Phần cứng', en: 'Chuột, bàn phím, màn hình' },
            { icon: '💻', name: 'Hệ điều hành', en: 'Quản lí và điều khiển' },
            { icon: '🎮', name: 'Phần mềm', en: 'Trò chơi, trình duyệt, AI' }
          ],
          remember: 'Không có hệ điều hành thì máy tính <b>không thể hoạt động</b> được.'
        },
        {
          type: 'quiz_single',
          topic: 'Luyện tập',
          question: 'Hệ điều hành (OS) là gì?',
          options: [
            'Khu vực làm việc của màn hình máy tính',
            'Thiết bị vật lí lưu trữ thông tin',
            'Phần mềm hỗ trợ các chức năng cơ bản của máy tính',
            'Một cái gì đó đi vào máy tính'
          ],
          correctAnswer: 2,
          hint: 'Hệ điều hành không phải là thiết bị cầm nắm được.',
          explain: 'Hệ điều hành là phần mềm quản lí và hỗ trợ các chức năng cơ bản của máy tính.'
        }
      ]
    },
    {
      id: 's2',
      title: 'Chức năng',
      password: PASSWORDS.s2,
      slides: [
        {
          type: 'info',
          topic: 'Phần 2 · Chức năng',
          title: 'Chức năng của Hệ điều hành',
          content: 'Hệ điều hành giống như người nhạc trưởng, điều khiển mọi hoạt động của máy tính để chúng phối hợp nhịp nhàng với nhau.',
          imageUrl: null,
          things: [
            { icon: '🖨️', name: 'Quản lí phần cứng', en: 'Giao tiếp với các thiết bị' },
            { icon: '🎬', name: 'Quản lí phần mềm', en: 'Kiểm soát các ứng dụng' },
            { icon: '📁', name: 'Quản lí tập tin', en: 'Sao chép, di chuyển, xóa dữ liệu' }
          ],
          remember: ''
        },
        {
          type: 'quiz_single',
          topic: 'Luyện tập',
          question: 'Loại phần mềm hệ thống nào quản lí tất cả các phần mềm và phần cứng trên máy tính?',
          options: [
            'Hệ điều hành (OS)',
            'Trình điều khiển thiết bị (Driver)',
            'Phần mềm tiện ích (Utility)',
            'Phần mềm chống virus'
          ],
          correctAnswer: 0,
          hint: 'Đây là nội dung chính của bài học hôm nay.',
          explain: 'Hệ điều hành (OS) chính là phần mềm quản lí mọi hoạt động của phần mềm và phần cứng.'
        }
      ]
    },
    {
      id: 's3',
      title: 'Nhận diện thiết bị mới',
      password: PASSWORDS.s3,
      slides: [
        {
          type: 'info',
          topic: 'Phần 3 · Nhận diện thiết bị mới',
          title: 'Driver — Trình điều khiển thiết bị',
          content: 'Khi em kết nối thiết bị mới (ví dụ: máy in) vào máy tính, hệ điều hành cần một phần mềm đặc biệt gọi là <b>Driver</b>. Driver giúp hệ điều hành hiểu và giao tiếp với thiết bị đó.',
          imageUrl: null,
          things: [
            { icon: '🔌', name: 'Kết nối', en: 'Cắm thiết bị vào máy tính' },
            { icon: '⚙️', name: 'Cài Driver', en: 'Cài đặt phần mềm điều khiển' },
            { icon: '✅', name: 'Hoạt động', en: 'Hệ điều hành nhận diện và sử dụng' }
          ],
          remember: 'Mỗi thiết bị phần cứng cần một <b>Driver riêng</b> để có thể hoạt động trên hệ thống.'
        },
        {
          type: 'quiz_single',
          topic: 'Luyện tập',
          question: 'Chương trình nào sau đây phải được cài đặt để hệ điều hành có thể hiểu được một máy in mới?',
          options: [
            'Driver',
            'Wizard',
            'Firewall',
            'Installer'
          ],
          correctAnswer: 0,
          hint: 'Nó giống như một người phiên dịch giữa máy tính và thiết bị mới.',
          explain: 'Cần cài đặt <b>Driver</b> (Trình điều khiển) để hệ điều hành giao tiếp được với thiết bị mới.'
        }
      ]
    },
    {
      id: 's4',
      title: 'Hệ điều hành và AI',
      password: PASSWORDS.s4,
      slides: [
        {
          type: 'info',
          topic: 'Phần 4 · Hệ điều hành và AI',
          title: 'Vai trò của Hệ điều hành khi dùng AI',
          content: 'AI thường chạy trên ứng dụng, trình duyệt hoặc máy chủ trực tuyến. Hệ điều hành đóng vai trò như <b>cầu nối</b> giữa em, công cụ AI và phần cứng máy tính.',
          imageUrl: null,
          things: [
            { icon: '⌨️', name: 'Nhận tín hiệu', en: 'Từ bàn phím, chuột, micrô' },
            { icon: '🌐', name: 'Chuyển yêu cầu', en: 'Đưa yêu cầu đến công cụ AI' },
            { icon: '🖥️', name: 'Hiển thị', en: 'Hiện kết quả lên màn hình' }
          ],
          remember: 'AI <b>không phải</b> là phần cứng. Thiết bị cần có hệ điều hành thì em mới sử dụng được các công cụ AI.'
        },
        {
          type: 'info',
          final: true,
          scoreSections: [0, 1, 2, 3],
          topic: 'Hoàn thành',
          title: 'Em đã học xong bài Giới thiệu về Hệ điều hành!',
          content: 'Bây giờ em đã biết Hệ điều hành là gì, các chức năng cơ bản, vai trò của Driver và cách Hệ điều hành giúp chúng ta tương tác với AI.',
          imageUrl: null,
          remember: 'Hãy thử quan sát máy tính của em và tìm xem có những thiết bị phần cứng và phần mềm nào đang được Hệ điều hành quản lí nhé!'
        }
      ]
    }
  ]
};

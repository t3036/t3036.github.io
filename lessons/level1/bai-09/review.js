/* ============================================================
   DỮ LIỆU TRANG ÔN TẬP — Level 1 · Bài 09 — Kết nối mạng không dây
   (dùng chung engine lesson.js; câu hỏi lấy từ questions.js)
   ============================================================ */

const KEYS = [
  'adapterWifi', 'nicSpeed', 'modemWhat', 'matchNetTech',
  'wiredWirelessTwo', 'wiredWirelessYN', 'wiredAdvantages', 'phoneInternet',
  'adhoc', 'wifiBand', 'bluetoothStep', 'checkInternet'
];

const LESSON = {
  id:    'k6-bai09-ket-noi-khong-day-on-tap',
  icon:  '📶',
  title: 'Ôn tập Bài 09 — Kết nối mạng không dây',

  sections: [
    {
      id: 's9',
      title: 'Ôn tập',
      slides: KEYS.map(k => q(k, 'Ôn tập')).concat([
        {
          type: 'info',
          final: true,
          topic: 'Hoàn thành',
          title: 'Em đã ôn tập xong Bài 09!',
          content: 'Xem lại điểm số bên dưới. Nếu muốn luyện thêm, bấm nút làm lại.',
          imageUrl: null
        }
      ])
    }
  ]
};

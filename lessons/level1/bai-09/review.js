/* ============================================================
   DỮ LIỆU TRANG ÔN TẬP — Level 1 · Bài 09 — Kết nối mạng không dây
   (dùng chung engine lesson.js; câu hỏi lấy từ questions.js)
   ============================================================ */

const KEYS = [
  'adapterWifi', 'handheldAdapter', 'nicNeed', 'nicSpeed', 'ethernetWhat', 'matchCable', 'ispWhat', 'ispExample',
  'lanWhat', 'wlanWhat', 'matchLanWlan', 'wifiTech', 'adhocSafe', 'infraMode', 'signalDistance', 'wiredWirelessTwo', 'wiredWirelessYN', 'wiredAdvantages', 'adhoc', 'phoneInternet',
  'wifiBand', 'obstacle', 'bluetoothUse', 'bluetoothStep', 'bluetoothPairTF', 'bluetoothStranger', 'publicWifi',
  'matchNetTech', 'useWireless', 'useWired',
  'checkInternet', 'airplane', 'aiDoThree', 'aiDontTF'
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

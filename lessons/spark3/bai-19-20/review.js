/* ============================================================
   DỮ LIỆU TRANG ÔN TẬP — Bài 19, 20 — Quyền riêng tư
   (dùng chung engine lesson.js; câu hỏi lấy từ questions.js)
   ============================================================ */

const LESSON = {
  id:    'bai19-20-quyen-rieng-tu-on-tap',
  icon:  '🔐',
  title: 'Ôn tập Bài 19, 20 — Quyền riêng tư',

  sections: [
    {
      id: 's6',
      title: 'Ôn tập',
      slides: [
        q('gameDropdown', 'Ôn tập'),
        q('nameDropdown', 'Ôn tập'),
        q('hideLocation', 'Ôn tập'),
        q('privacyImportance2', 'Ôn tập'),
        q('citizenTF', 'Ôn tập'),
        q('privacySettingBlank', 'Ôn tập'),
        q('privacyTF', 'Ôn tập'),
        q('inappropriate', 'Ôn tập'),
        q('positiveExample', 'Ôn tập'),
        q('protectPost', 'Ôn tập'),
        q('termMatching', 'Ôn tập'),
        q('negativeExample', 'Ôn tập'),
        q('ageLimited', 'Ôn tập'),
        q('privacyImportance', 'Ôn tập'),
        q('controlViewers', 'Ôn tập'),
        q('locationSetting', 'Ôn tập'),
        q('followDropdown', 'Ôn tập'),
        {
          type: 'info',
          final: true,
          topic: 'Hoàn thành',
          title: 'Em đã ôn tập xong Bài 19, 20!',
          content: 'Xem lại điểm số bên dưới. Nếu muốn luyện thêm, bấm nút làm lại.',
          imageUrl: null
        }
      ]
    }
  ]
};

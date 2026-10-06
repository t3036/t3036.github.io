// app.js — dùng chung cho mọi trang (index.html, spark-lv*.html, level*.html)
// Vì mỗi cấp độ giờ là 1 trang riêng (điều hướng bằng liên kết <a>),
// tệp này chỉ còn giữ vài tiện ích nhỏ, không cần lệnh ẩn/hiện nữa.

document.addEventListener('DOMContentLoaded', function () {
  // Khi vào 1 trang danh sách bài (không phải trang chủ),
  // đưa focus lên tiêu đề để thuận tiện cho người dùng bàn phím / đọc màn hình.
  if (!document.getElementById('trang-chu')) {
    var h1 = document.querySelector('h1');
    if (h1) {
      h1.setAttribute('tabindex', '-1');
      h1.focus();
    }
  }

  // Menu di động trên trang chủ (nút hamburger mở/đóng danh sách liên kết).
  var nutMenu = document.getElementById('nutMenu');
  var danhSachMenu = document.getElementById('danhSachMenu');
  if (nutMenu && danhSachMenu) {
    nutMenu.addEventListener('click', function () {
      var dangMo = danhSachMenu.classList.toggle('mo');
      nutMenu.setAttribute('aria-expanded', dangMo ? 'true' : 'false');
    });
    danhSachMenu.querySelectorAll('a').forEach(function (lienKet) {
      lienKet.addEventListener('click', function () {
        danhSachMenu.classList.remove('mo');
        nutMenu.setAttribute('aria-expanded', 'false');
      });
    });
  }
});
document.addEventListener('DOMContentLoaded', function () {
  var nut = document.getElementById('nutSaoChep');
  var mk = document.getElementById('matKhau');
  if (!nut || !mk) return;
  nut.addEventListener('click', function () {
    var van = mk.textContent.trim();
    function xong() {
      nut.textContent = 'Đã sao chép ✓';
      setTimeout(function () { nut.textContent = 'Sao chép'; }, 1500);
    }
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(van).then(xong, function () { duPhong(); });
    } else { duPhong(); }
    function duPhong() {
      var o = document.createElement('textarea');
      o.value = van; document.body.appendChild(o); o.select();
      try { document.execCommand('copy'); xong(); } catch (e) {}
      document.body.removeChild(o);
    }
  });
});

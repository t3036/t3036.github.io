/* Kiểm tra độ an toàn mật khẩu - chạy hoàn toàn trên trình duyệt, không lưu / gửi mật khẩu.
   Cách ước tính (đơn giản hóa theo ý tưởng của zxcvbn):
   chia mật khẩu thành các đoạn, mỗi đoạn là một "mẫu dễ đoán" (từ phổ biến, chuỗi liên tiếp,
   hàng phím, lặp lại, năm) hoặc ký tự ngẫu nhiên; chọn cách chia cho SỐ LẦN ĐOÁN ÍT NHẤT. */
(function(){
  'use strict';

  // ---- Từ điển nhỏ: mật khẩu / từ phổ biến (xếp theo độ phổ biến), gồm cả tiếng Việt không dấu ----
  const TU_PHO_BIEN = (
    'password 123456 12345678 qwerty abc123 monkey 1234567 letmein trustno1 dragon baseball iloveyou ' +
    'master sunshine ashley bailey passw0rd shadow 123123 654321 superman qazwsx michael football ' +
    'admin welcome login princess hello freedom whatever qwertyuiop starwars computer football ' +
    'matkhau anhyeuem emyeuanh yeuem vietnam hanoi saigon hochiminh admin123 minecraft roblox ' +
    'doraemon pikachu pokemon naruto goku fortnite youtube facebook google zalo tiktok messi ronaldo ' +
    'manchester barcelona real chelsea liverpool arsenal bongda lopmot lophai lopba lopbon lopnam ' +
    'truonghoc hocsinh thaygiao tinhoc conan tom jerry hello kitty love iloveu thanhpho 111111 000000 ' +
    '1q2w3e4r 1qaz2wsx asdfgh zxcvbn user guest test root abc abcd secret mypass pass'
  ).split(' ').filter(function(v, i, a){ return v && a.indexOf(v) === i; });
  const XEP_HANG = {};
  TU_PHO_BIEN.forEach(function(t, i){ XEP_HANG[t] = i + 1; });

  const HANG_PHIM = ['qwertyuiop', 'asdfghjkl', 'zxcvbnm', '1234567890', 'qazwsxedcrfvtgbyhnujmikolp'];
  const LEET = { '@': 'a', '4': 'a', '8': 'b', '3': 'e', '1': 'i', '!': 'i', '0': 'o', '5': 's', '$': 's', '7': 't', '+': 't' };

  // ---- Các mốc đánh giá (theo số lần đoán) ----
  const MUC = ['Rất yếu', 'Yếu', 'Khá', 'Mạnh'];
  const TOC_DO = [
    { ten: 'Trang web có giới hạn số lần thử', toc: 100 },
    { ten: 'Máy tính mạnh (kẻ xấu có kho mật khẩu bị lộ)', toc: 1e10, chinh: true },
    { ten: 'Cụm máy tính cực mạnh', toc: 1e12 }
  ];

  // ---- Phát hiện mẫu ----
  function kichThuocBoKyTu(mk){
    let n = 0;
    if(/[a-z]/.test(mk)) n += 26;
    if(/[A-Z]/.test(mk)) n += 26;
    if(/[0-9]/.test(mk)) n += 10;
    if(/[ -\/:-@\[-`{-~]/.test(mk)) n += 33;
    if(/[^\x00-\x7F]/.test(mk)) n += 100;
    return n || 10;
  }

  function giaiLeet(s){
    let dung = false, kq = '';
    for(const c of s){
      if(LEET[c]){ kq += LEET[c]; dung = true; } else kq += c;
    }
    return { s: kq, dung: dung };
  }

  function heSoVietHoa(doan){
    const hoa = (doan.match(/[A-Z]/g) || []).length;
    if(!hoa) return 1;
    const chu = (doan.match(/[A-Za-z]/g) || []).length;
    if(hoa === 1 && /^[A-Z]/.test(doan)) return 2;
    if(hoa === chu) return 2;
    return Math.max(4, Math.pow(2, Math.min(hoa, chu - hoa)));
  }

  function timMau(mk){
    const mau = []; // { i, j (không gồm), loai, doan, doan_khoang, guesses, mota }
    const n = mk.length;
    const thuong = mk.toLowerCase();

    for(let i = 0; i < n; i++){
      for(let j = i + 3; j <= n; j++){
        const doan = mk.slice(i, j);
        const tl = thuong.slice(i, j);

        // 1) Từ phổ biến (kể cả khi thay chữ bằng số / ký hiệu: p@ssw0rd)
        let hang = XEP_HANG[tl];
        let leet = false;
        if(!hang){
          const g = giaiLeet(tl);
          if(g.dung && XEP_HANG[g.s]){ hang = XEP_HANG[g.s]; leet = true; }
        }
        if(hang){
          const g = hang * heSoVietHoa(doan) * (leet ? 3 : 1);
          mau.push({ i: i, j: j, loai: 'tu', doan: doan, guesses: g,
            mota: 'Chứa từ rất phổ biến "' + doan + '"' + (leet ? ' (đổi chữ thành số/ký hiệu giống như vậy kẻ xấu cũng biết)' : '') });
        }

        // 2) Chuỗi liên tiếp: abc, 123, cba, 321
        if(doan.length >= 3){
          const d = doan.charCodeAt(1) - doan.charCodeAt(0);
          if(Math.abs(d) === 1){
            let ok = true;
            for(let k = 1; k < doan.length; k++){
              if(doan.charCodeAt(k) - doan.charCodeAt(k - 1) !== d){ ok = false; break; }
            }
            if(ok) mau.push({ i: i, j: j, loai: 'chuoi', doan: doan, guesses: 26 * doan.length * 2,
              mota: 'Có chuỗi liên tiếp "' + doan + '"' });
          }
        }

        // 3) Hàng phím: qwerty, asdf, 1qaz...
        for(const h of HANG_PHIM){
          const xuoi = h.indexOf(tl) >= 0;
          const nguoc = h.split('').reverse().join('').indexOf(tl) >= 0;
          if(xuoi || nguoc){
            mau.push({ i: i, j: j, loai: 'phim', doan: doan, guesses: 40 * doan.length,
              mota: 'Có dãy phím liền nhau trên bàn phím "' + doan + '"' });
            break;
          }
        }

        // 4) Một ký tự lặp lại: aaaa, 1111
        if(/^(.)\1{2,}$/.test(doan)){
          mau.push({ i: i, j: j, loai: 'lap', doan: doan, guesses: 10 * doan.length,
            mota: 'Lặp lại một ký tự "' + doan + '"' });
        }

        // 5) Khối lặp lại: abcabc, 1212
        for(let b = 1; b <= doan.length / 2; b++){
          if(doan.length % b === 0 && doan.length / b >= 2){
            const khoi = doan.slice(0, b);
            if(khoi.repeat(doan.length / b) === doan && b > 1){
              mau.push({ i: i, j: j, loai: 'lap', doan: doan,
                guesses: Math.pow(kichThuocBoKyTu(khoi), khoi.length) * (doan.length / b),
                mota: 'Lặp lại một cụm "' + khoi + '"' });
              break;
            }
          }
        }
      }
      // 6) Năm sinh 19xx / 20xx và ngày tháng (ddmmyy, ddmmyyyy)
      [[4, /^(19|20)\d\d$/, 130, 'Chứa một năm'], [6, /^([0-2]\d|3[01])(0\d|1[0-2])\d\d$/, 365 * 100, 'Chứa ngày tháng năm'],
       [8, /^([0-2]\d|3[01])(0\d|1[0-2])(19|20)\d\d$/, 365 * 100, 'Chứa ngày tháng năm']].forEach(function(r){
        if(i + r[0] <= n && r[1].test(mk.slice(i, i + r[0]))){
          mau.push({ i: i, j: i + r[0], loai: 'nam', doan: mk.slice(i, i + r[0]), guesses: r[2],
            mota: r[3] + ' "' + mk.slice(i, i + r[0]) + '" (rất dễ đoán)' });
        }
      });
    }
    return mau;
  }

  // ---- Quy hoạch động: chọn cách chia mật khẩu có số lần đoán ít nhất ----
  function phanTich(mk){
    const n = mk.length;
    const C = kichThuocBoKyTu(mk);
    const mau = timMau(mk);
    const theoKetThuc = {};
    mau.forEach(function(m){ (theoKetThuc[m.j] = theoKetThuc[m.j] || []).push(m); });

    // best[k] = log10(số lần đoán) nhỏ nhất cho k ký tự đầu, cách chọn truy vết
    const best = [0], vet = [null];
    for(let k = 1; k <= n; k++){
      best[k] = best[k - 1] + Math.log10(C);          // ký tự ngẫu nhiên
      vet[k] = { tu: k - 1, mau: null };
      (theoKetThuc[k] || []).forEach(function(m){
        const v = best[m.i] + Math.log10(m.guesses);
        if(v < best[k]){ best[k] = v; vet[k] = { tu: m.i, mau: m }; }
      });
    }
    const cacMau = [];
    for(let k = n; k > 0; k = vet[k].tu){ if(vet[k].mau) cacMau.push(vet[k].mau); }
    cacMau.reverse();
    return { logGuesses: best[n], cacMau: cacMau, boKyTu: C };
  }

  function danhGia(mk){
    const dai = mk.length;
    const loai = {
      thuong: /[a-z]/.test(mk), hoa: /[A-Z]/.test(mk), so: /[0-9]/.test(mk),
      dacBiet: /[^A-Za-z0-9]/.test(mk)
    };
    const pt = phanTich(mk);
    // Nhiều lần đoán -> mất thêm khi có nhiều đoạn; trừ nhẹ để tránh đánh giá quá cao
    const log = pt.logGuesses;

    let muc = log < 10 ? 0 : log < 13 ? 1 : log < 16 ? 2 : 3;
    // Giới hạn theo độ dài để dễ hiểu cho học sinh
    if(dai < 6) muc = 0;
    else if(dai < 8) muc = Math.min(muc, 1);
    else if(dai < 10) muc = Math.min(muc, 2);
    return { dai: dai, loai: loai, log: log, muc: muc, cacMau: pt.cacMau, boKyTu: pt.boKyTu };
  }

  // ---- Định dạng thời gian ----
  function dinhDangSo(x){
    return x >= 1e6 ? x.toExponential(1).replace('e+', ' × 10^') : Math.round(x).toLocaleString('vi-VN');
  }
  function dinhDangThoiGian(giay){
    if(giay < 0.001) return 'tức thì';
    if(giay < 1) return 'chưa đến 1 giây';
    const don = [['giây', 60], ['phút', 60], ['giờ', 24], ['ngày', 30.4], ['tháng', 12], ['năm', 1e3]];
    let v = giay;
    for(let i = 0; i < don.length; i++){
      if(v < don[i][1]) return Math.floor(v) + ' ' + don[i][0];
      v /= don[i][1];
    }
    // v tính bằng nghìn năm
    const nam = v * 1e3;
    if(nam < 1e6) return 'khoảng ' + Math.round(nam).toLocaleString('vi-VN') + ' năm';
    if(nam < 1e9) return 'khoảng ' + Math.round(nam / 1e6).toLocaleString('vi-VN') + ' triệu năm';
    if(nam < 1e12) return 'khoảng ' + Math.round(nam / 1e9).toLocaleString('vi-VN') + ' tỷ năm';
    return 'hàng nghìn tỷ năm (lâu hơn tuổi của Trái Đất)';
  }
  function giaiThichThoiGian(giay){
    if(giay < 1) return 'Nhanh hơn một cái chớp mắt! Mật khẩu này gần như không có tác dụng bảo vệ.';
    if(giay < 3600) return 'Chỉ trong thời gian một tiết học hoặc ngắn hơn. Kẻ xấu đoán ra rất dễ.';
    if(giay < 86400 * 30) return 'Vài ngày đến vài tuần, vẫn có thể bị phá nếu kẻ xấu kiên nhẫn.';
    if(giay < 86400 * 365 * 10) return 'Tạm ổn với nhiều tài khoản, nhưng nên dài hơn để chắc chắn.';
    if(giay < 86400 * 365 * 1e6) return 'Rất lâu! Máy tính hiện nay gần như không thể đoán ra trong thực tế.';
    return 'Lâu đến mức không thể tưởng tượng. Mật khẩu này rất an toàn!';
  }

  // ---- Giao diện ----
  const $ = function(id){ return document.getElementById(id); };
  const o = $('mk-o'), kq = $('mk-kq');

  function dongKiemTra(dat, nhan){
    return '<li class="' + (dat === null ? '' : dat ? 'dat' : 'chua') + '"><span class="dau">' + (dat === null ? '✘' : dat ? '✔' : '✘') + '</span>' + nhan + '</li>';
  }
  function thoat(s){
    return s.replace(/[&<>"']/g, function(c){ return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; });
  }

  function ketQuaKiemTra(r){
    const n = r === null;
    $('mk-kiem-tra').innerHTML =
      dongKiemTra(n ? null : r.dai >= 12, n ? 'Độ dài từ 12 ký tự trở lên' : 'Độ dài: <b>' + r.dai + '</b> ký tự (nên từ 12)') +
      dongKiemTra(n ? null : r.loai.hoa, 'Chữ HOA (A–Z)') +
      dongKiemTra(n ? null : r.loai.thuong, 'Chữ thường (a–z)') +
      dongKiemTra(n ? null : r.loai.so, 'Chữ số (0–9)') +
      dongKiemTra(n ? null : r.loai.dacBiet, 'Ký tự đặc biệt (! @ # - _ ...)');
  }

  function capNhat(){
    const mk = o.value;
    $('mk-muc-do').hidden = $('mk-kiem-tra').hidden = !mk;
    if(!mk){ kq.hidden = true; ketQuaKiemTra(null); $('mk-day').style.width = '0'; $('mk-thanh').setAttribute('aria-valuenow', 0); return; }
    kq.hidden = false;
    const r = danhGia(mk);
    const guesses = Math.pow(10, r.log);
    ketQuaKiemTra(r);

    document.querySelector('.mk').dataset.muc = r.muc;
    $('mk-mat').textContent = ['😱', '😟', '🙂', '😎'][r.muc];
    document.querySelectorAll('.mk-bac span').forEach(function(s, i){ s.classList.toggle('on', i === r.muc); });
    $('mk-day').style.width = ((r.muc + 1) * 25) + '%';
    $('mk-thanh').setAttribute('aria-valuenow', (r.muc + 1) * 25);

    const giay = guesses / 2 / 1e10;
    $('mk-tg').textContent = dinhDangThoiGian(giay);
    $('mk-tg-gt').textContent = giaiThichThoiGian(giay);

  }

  ketQuaKiemTra(null);
  o.addEventListener('input', capNhat);
  $('mk-hien').addEventListener('click', function(){
    const hien = o.type === 'password';
    o.type = hien ? 'text' : 'password';
    this.setAttribute('aria-pressed', hien);
    this.setAttribute('aria-label', hien ? 'Ẩn mật khẩu' : 'Hiện mật khẩu');
    this.title = hien ? 'Ẩn mật khẩu' : 'Hiện mật khẩu';
    this.textContent = hien ? '👁️' : '🙈';
    o.focus();
  });
  $('mk-xoa').addEventListener('click', function(){ o.value = ''; capNhat(); o.focus(); });
  document.querySelectorAll('.mk-mau button').forEach(function(b){
    b.addEventListener('click', function(){ o.value = b.dataset.mau; capNhat(); });
  });
})();

/* Nút "Quay lại" nằm trên thanh điều hướng, cùng hàng với "Trang chủ" */
(function(){
  function chen(){
    const hang = document.querySelector('.thanh-menu .menu-trong');
    if(!hang || hang.querySelector('.mk-quay-lai')) return !!hang;
    const a = document.createElement('a');
    a.className = 'mk-quay-lai';
    a.href = new URL('../vui-cung-tin-hoc.html', location.href).href; // tuyệt đối để site.js không đổi lại
    a.textContent = '← Quay lại';
    hang.insertBefore(a, hang.firstChild);
    return true;
  }
  if(chen()) return;
  const quan = new MutationObserver(function(){ if(chen()) quan.disconnect(); });
  quan.observe(document.body, { childList: true, subtree: true });
})();

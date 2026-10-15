/* ============================================================
   BÀI HỌC TƯƠNG TÁC — LEVEL 1 · BÀI 08: TÌM HIỂU VỀ MẠNG VÀ CƠ SỞ HẠ TẦNG
   Nội dung sinh ra từ bộ câu hỏi trong questions.js (QUIZ).
   5 nhiệm vụ: mỗi nhiệm vụ có phần khám phá/mô phỏng + chuỗi câu hỏi vận dụng.
   Phần động cơ dùng chung (quizBlock, sorter, explorer, stepper…) ở cuối file.
   ============================================================ */

const CFG = {
  groups: [
    { t: 'Mạng, Internet và Intranet', i: '🌐', keys: ['internetBiggest', 'shareTwo', 'inetIntranetTF'], notes: [
      'Mạng máy tính: liên kết các thiết bị để chia sẻ tài nguyên và trao đổi dữ liệu.',
      'Internet: mạng lớn nhất, công khai, không giới hạn người dùng, không của riêng ai.',
      'Intranet: mạng riêng của một tổ chức, bảo mật cao, chỉ người có quyền mới vào được.',
      'Nhận dữ liệu qua Internet: Downloading (tải về, lưu lại) và Streaming (xem/nghe ngay).'] },
    { t: 'Cơ sở hạ tầng mạng', i: '🏗️', keys: ['infraWhat', 'infraGoodTF', 'infraSchool'], notes: [
      'Cơ sở hạ tầng mạng = phần cứng + phần mềm giúp thiết bị kết nối và di chuyển dữ liệu.',
      'Mạng chất lượng: kết nối thông suốt và dễ mở rộng.'] },
    { t: 'Thiết bị mạng', i: '📡', keys: ['modemConvert'], notes: [
      'Thiết bị đầu cuối: điện thoại, máy tính, máy tính bảng.',
      'Router: chỉ đường cho gói dữ liệu.', 
      'Modem: đổi tín hiệu số (digital) ↔ tương tự (analog).', 
      'Switch: nối các đoạn mạng.'] }
  ],
  N: 5, KEY: 'k6b08-progress', name: 'Bài 08',
  bits: ['🎉', '⭐', '🌐', '📡', '🏆', '✨'],
  congrats: 'Em đã hiểu mạng máy tính, Internet và Intranet, cơ sở hạ tầng mạng, các thiết bị mạng và vì sao công cụ AI cần có mạng.',
  missions: [
    { t: 'Mạng & Internet', i: '🌐' },
    { t: 'Cơ sở hạ tầng mạng', i: '🏗️' },
    { t: 'Thiết bị mạng', i: '📡' },
    { t: 'AI cần mạng', i: '🤖' },
    { t: 'Kiểm tra cuối bài', i: '🏁' }
  ]
};

/* ============================================================
   NHIỆM VỤ 1 — Mạng máy tính, Internet và Intranet
   (internetBiggest, shareTwo, inetIntranetTF, netPurpose, companyNetwork)
   ============================================================ */
function m1(root) {
  root.innerHTML = head(0, 'Mạng máy tính, Internet và Intranet', 'Mạng giúp các thiết bị nói chuyện với nhau. Hãy xem Internet và Intranet khác nhau ở đâu.') + `
  <div class="card"><h3>Mạng máy tính là gì?</h3>
    <div class="split"><div>
      <div class="key">Mạng máy tính là sự <b>liên kết các thiết bị máy tính</b>, thực hiện thông qua cơ sở hạ tầng mạng tương thích. Mục đích chính là <b>chia sẻ tài nguyên</b> và trao đổi giữa các thiết bị.</div>
      <div class="cols" style="margin-top:10px">
        <div class="mini"><span class="ic">💬</span><b>Giao tiếp</b></div>
        <div class="mini"><span class="ic">🗂️</span><b>Chia sẻ tài nguyên</b></div>
        <div class="mini"><span class="ic">📶</span><b>Chia sẻ kết nối Internet</b></div>
      </div></div>
      ${fig('mang.jpg', 'Mạng kết nối người dùng và thiết bị trên toàn thế giới')}
    </div></div>

  <div class="card"><h3>Chia sẻ qua Internet: tải xuống và phát trực tuyến</h3>
    <p style="margin-top:0">Khi chia sẻ kết nối Internet, thiết bị của em nhận dữ liệu (tệp, video, nhạc…) theo <b>hai cách</b> chính:</p>
    <div class="cols">
      <div class="mini"><span class="ic">⬇️</span><b>Downloading (tải xuống)</b><p>Sao chép tệp từ Internet về <strong>lưu trên thiết bị</strong> của em. Ví dụ: tải một ứng dụng, một tài liệu hay một bài hát về máy.</p></div>
      <div class="mini"><span class="ic">▶️</span><b>Streaming (phát trực tuyến)</b><p>Xem hoặc nghe nội dung <strong>ngay khi dữ liệu đang được gửi đến</strong>, không cần tải trọn nội dung về máy. Ví dụ: xem video, nghe nhạc trực tuyến.</p></div></div>
    <table class="cmp" style="margin-top:12px"><tr><th>Đặc điểm</th><th>⬇️ Downloading</th><th>▶️ Streaming</th></tr>
      <tr><td>Dữ liệu</td><td>Được lưu lại trên thiết bị.</td><td>Thường không lưu lại trên thiết bị.</td></tr>
      <tr><td>Bắt đầu dùng</td><td>Phải chờ tải xong (hoặc tải đủ).</td><td>Xem/nghe gần như ngay lập tức.</td></tr>
      <tr><td>Khi mất mạng</td><td>Phần đã tải xong vẫn dùng được.</td><td>Bị gián đoạn, cần mạng ổn định liên tục.</td></tr>
      <tr><td>Dung lượng máy</td><td>Chiếm bộ nhớ của thiết bị.</td><td>Chiếm rất ít bộ nhớ.</td></tr></table>
</div>

  <div class="card"><h3><span class="st">1</span>Luyện nhanh: tải xuống hay phát trực tuyến?</h3><div id="m1dl"></div></div>

  <div class="card"><h3>Internet và Intranet khác nhau thế nào?</h3>
    <table class="cmp"><tr><th>Đặc điểm</th><th>🌍 Internet</th><th>🏢 Intranet</th></tr>
      <tr><td>Quyền sở hữu</td><td>Không thuộc sở hữu riêng của bất kì tổ chức nào.</td><td>Thuộc sở hữu của một công ty/tổ chức.</td></tr>
      <tr><td>Bảo mật</td><td>Công khai, ít bảo mật hơn.</td><td>Bảo mật cao hơn, chỉ người có quyền mới truy cập được.</td></tr>
      <tr><td>Số lượng người dùng</td><td>Không giới hạn, ai cũng có thể truy cập.</td><td>Giới hạn: chỉ nhân viên hoặc thành viên có quyền.</td></tr></table></div>

  <div class="card"><h3><span class="st">2</span>Thẻ này thuộc Internet hay Intranet?</h3><div id="m1sorter"></div></div>
  <div id="m1q" hidden></div>
  ${navBtns(0)}`;

  sorter($('#m1dl'), {
    bins: [{ id: 'dl', label: '⬇️ Downloading' }, { id: 'st', label: '▶️ Streaming', cls: 'alt' }],
    cards: [
      { e: '📲', t: 'Tải một ứng dụng về điện thoại để dùng sau', bin: 'dl', note: 'Tệp được lưu trên thiết bị: đó là Downloading.' },
      { e: '🎬', t: 'Xem video trực tuyến, vừa nhận dữ liệu vừa xem', bin: 'st', note: 'Xem ngay khi dữ liệu đang được gửi đến: đó là Streaming.' },
      { e: '📄', t: 'Lưu tệp bài tập từ email về máy tính', bin: 'dl', note: 'Sao chép tệp về lưu trên máy: đó là Downloading.' },
      { e: '🎧', t: 'Nghe nhạc trực tuyến mà không lưu bài hát lại', bin: 'st', note: 'Nghe ngay, không tải trọn bài về máy: đó là Streaming.' },
      { e: '✈️', t: 'Tải phim về trước để xem khi đi máy bay (không có mạng)', bin: 'dl', note: 'Phần đã tải xong dùng được cả khi mất mạng: Downloading.' },
      { e: '📶', t: 'Đang xem bị giật vì mạng yếu', bin: 'st', note: 'Streaming cần mạng ổn định liên tục nên dễ bị giật khi mạng yếu.' }
    ]
  });

  sorter($('#m1sorter'), {
    bins: [{ id: 'net', label: '🌍 Internet' }, { id: 'intra', label: '🏢 Intranet', cls: 'alt' }],
    cards: [
      { e: '🌍', t: 'Ai cũng có thể truy cập', bin: 'net', note: 'Internet không giới hạn người dùng.' },
      { e: '🔐', t: 'Chỉ nhân viên có quyền mới đăng nhập được', bin: 'intra', note: 'Intranet chỉ dành cho người có quyền.' },
      { e: '🚫', t: 'Không thuộc sở hữu riêng của tổ chức nào', bin: 'net', note: 'Internet là mạng toàn cầu, không của riêng ai.' },
      { e: '🏢', t: 'Thuộc sở hữu của một công ty/tổ chức', bin: 'intra', note: 'Intranet là mạng riêng của một tổ chức.' },
      { e: '🔒', t: 'Bảo mật cao hơn', bin: 'intra', note: 'Intranet bảo mật cao hơn Internet.' },
      { e: '📢', t: 'Công khai, ít bảo mật hơn', bin: 'net', note: 'Internet công khai nên ít bảo mật hơn.' },
      { e: '♾️', t: 'Số lượng người dùng không giới hạn', bin: 'net', note: 'Internet cho phép số người dùng không giới hạn.' },
      { e: '👥', t: 'Số lượng người dùng giới hạn', bin: 'intra', note: 'Intranet chỉ có các thành viên được cấp quyền.' }
    ],
    onDone() { revealQuiz('#m1q', ['internetBiggest', 'shareTwo', 'inetIntranetTF', 'netPurpose', 'companyNetwork'], 0); }
  });
}

/* ============================================================
   NHIỆM VỤ 2 — Cơ sở hạ tầng mạng
   (infraWhat, infraGoodTF, infraSchool, goodNetTwo)
   ============================================================ */
function m2(root) {
  root.innerHTML = head(1, 'Cơ sở hạ tầng mạng', 'Phần cứng và phần mềm nào giúp dữ liệu di chuyển? Một mạng tốt cần những gì?') + `
  <div class="card"><h3>Khái niệm</h3>
    <div class="split"><div>
      <div class="key">Cơ sở hạ tầng mạng gồm <b>phần cứng</b> và <b>phần mềm</b> giúp các thiết bị kết nối để di chuyển dữ liệu. Đó là cấu trúc cơ bản, cần thiết cho hoạt động của một dịch vụ hoặc doanh nghiệp.</div>
      <div class="key gr">Cơ sở hạ tầng mạng <b>chất lượng</b> phải:<br>✔ Đảm bảo kết nối thông suốt.<br>✔ Hỗ trợ khả năng mở rộng.</div></div>
      ${fig('so-do-mang.png', 'Sơ đồ mạng: Internet → Modem → Router → Switch → máy tính, máy in, Wi-Fi, máy chủ')}
    </div></div>

  <div class="card"><h3><span class="st">1</span>Thí nghiệm: mạng nhà trường khi có thêm học sinh</h3>
    <p style="margin-top:0">Kéo thanh trượt để tăng số học sinh cùng dùng mạng. Hãy so sánh hai loại hạ tầng. <b>Thử cả hai</b> với trên 400 học sinh.</p>
    <div class="modes" id="mode"><button class="on" data-m="weak">📉 Mạng chưa chuẩn bị mở rộng</button><button data-m="good">📈 Mạng chất lượng (dễ mở rộng)</button></div>
    <div class="sim">
      <div class="ctl"><label for="stu">👩‍🎓 Số học sinh đang dùng mạng: <b id="stuN">60</b></label></div>
      <input type="range" id="stu" min="20" max="600" step="10" value="60">
      <div class="gauges">
        <div class="gauge"><div class="gl"><span>⚡ Tốc độ truy cập</span><b id="g1t"></b></div><div class="gb"><i id="g1"></i></div></div>
        <div class="gauge"><div class="gl"><span>🔗 Kết nối thông suốt</span><b id="g2t"></b></div><div class="gb"><i id="g2"></i></div></div>
      </div>
      <div class="verdict" id="vd" style="background:var(--okbg)"></div>
    </div>
    <p id="tried" style="font-weight:700;margin:8px 0 0"></p></div>
  <div id="m2q" hidden></div>
  ${navBtns(1)}`;

  let mode = 'weak'; const tried = { weak: false, good: false };
  const cl = x => Math.max(5, Math.min(100, Math.round(x)));
  function draw() {
    const n = +$('#stu').value; $('#stuN').textContent = n;
    let sp, st, msg;
    if (mode === 'weak') {
      sp = cl(100 - Math.max(0, n - 60) * 0.18); st = cl(100 - Math.max(0, n - 100) * 0.2);
      msg = n < 150 ? '🙂 Ít người dùng nên mạng vẫn ổn.' : n < 300 ? '😟 Mạng bắt đầu chậm vì hệ thống không được thiết kế để mở rộng.' : '😣 Mạng quá tải: chậm và nhiều học sinh bị mất kết nối. Phải thiết kế lại hệ thống!';
    } else {
      sp = cl(95 - Math.max(0, n - 300) * 0.03); st = cl(98 - Math.max(0, n - 400) * 0.02);
      msg = n < 150 ? '🙂 Mạng ổn định.' : '😎 Hệ thống dễ mở rộng nên chỉ cần thêm thiết bị, không phải thiết kế lại. Mạng vẫn thông suốt!';
    }
    if (n >= 400) tried[mode] = true;
    [[sp, 'g1'], [st, 'g2']].forEach(([v, id]) => { const el = $('#' + id); el.style.width = v + '%'; el.className = v < 40 ? 'low' : v < 70 ? 'mid' : ''; $('#' + id + 't').textContent = v + '%'; });
    const vd = $('#vd'); vd.textContent = msg; vd.style.background = (sp < 40 || st < 40) ? 'var(--badbg)' : (sp < 70 || st < 70) ? 'var(--warnbg)' : 'var(--okbg)';
    $('#tried').textContent = (tried.weak ? '✅' : '⬜') + ' Đã thử mạng chưa mở rộng với ≥ 400 học sinh   ' + (tried.good ? '✅' : '⬜') + ' Đã thử mạng chất lượng với ≥ 400 học sinh';
    if (tried.weak && tried.good) revealQuiz('#m2q', ['infraWhat', 'infraGoodTF', 'infraSchool', 'goodNetTwo'], 1);
  }
  $('#stu').oninput = draw;
  $('#mode').onclick = e => { const b = e.target.closest('button'); if (!b) return; mode = b.dataset.m; $$('#mode button').forEach(x => x.classList.toggle('on', x === b)); draw(); };
  draw();
}

/* ============================================================
   NHIỆM VỤ 3 — Thiết bị mạng
   (devEndpoint, devRouter, devModem, devSwitch, matchDevices)
   ============================================================ */
function m3(root) {
  root.innerHTML = head(2, 'Thiết bị mạng: đầu cuối, Router, Modem, Switch', 'Mỗi thiết bị có một nhiệm vụ riêng. Hãy khám phá cả bốn rồi theo dõi hành trình của một gói dữ liệu.') + `
  <div class="card"><h3><span class="st">1</span>Khám phá các thiết bị</h3><div id="m3x"></div></div>
  <div class="card"><h3><span class="st">2</span>Hành trình của một gói dữ liệu</h3><div id="m3s"></div></div>
  <div class="card"><h3><span class="st">3</span>Em nhận ra thiết bị nào?</h3><div id="m3sort"></div></div>
  <div id="m3q" hidden></div>
  ${navBtns(2)}`;

  explorer($('#m3x'), [
    { e: ICON.end, t: 'Thiết bị đầu cuối', html: `<h4>Thiết bị đầu cuối</h4><p>Là những thiết bị <b>nhận yêu cầu và trả kết quả trực tiếp cho người dùng</b>.</p><div class="tags"><span>Điện thoại thông minh</span><span>Máy tính</span><span>Máy tính bảng</span></div>${figs([['dien-thoai.png', 'Điện thoại'], ['may-tinh.png', 'Máy tính xách tay'], ['may-tinh-bang.png', 'Máy tính bảng']])}` },
    { e: ICON.router, t: 'Router', html: `<h4>Thiết bị định tuyến (Router)</h4><p>Hướng dẫn các <b>gói dữ liệu đi đến đúng đích</b>, đảm bảo thông tin được truyền đi hiệu quả và an toàn.</p>${figs([['router-1.jpg', 'Router'], ['router-2.jpg', 'Router Wi-Fi']])}` },
    { e: ICON.modem, t: 'Modem', html: `<h4>Thiết bị điều chế và giải điều chế (Modem)</h4><p>Chuyển đổi dữ liệu thành tín hiệu và ngược lại; là thiết bị <b>gửi và nhận thông tin</b>.</p><p>Chức năng chính: chuyển đổi tín hiệu giữa dạng <b>số (Digital)</b> và dạng <b>tương tự (Analog)</b>.</p>${figs([['modem-1.jpg', 'Modem'], ['modem-2.jpg', 'Modem']])}` },
    { e: ICON.switch, t: 'Switch', html: `<h4>Thiết bị chuyển mạch (Switch)</h4><p>Dùng để <b>kết nối các đoạn mạng với nhau</b>.</p>${figs([['switch.jpg', 'Switch nhiều cổng']])}` }
  ]);

  const JN = [[ICON.end, 'Điện thoại'], [ICON.switch, 'Switch'], [ICON.router, 'Router'], [ICON.modem, 'Modem'], ['<span class="jg">🌍</span>', 'Internet']];
  const journeyMap = k => `<div class="jmap${k === 4 ? ' back' : ''}">` + JN.map(([ic, n], i) => { const hid = i > k; return `<div class="jn${i < k && k < 4 ? ' done' : ''}${i === k ? ' cur' : ''}${hid ? ' hid' : ''}"><span class="ji">${hid ? '<span class="jg">❓</span>' : ic}</span><b>${hid ? '?' : n}</b></div>${i < 4 ? `<i class="ja${i < k ? ' on' : ''}">${k === 4 ? '⬅' : '➜'}</i>` : ''}`; }).join('') + `</div>`;
  stepper($('#m3s'), [
    { e: ICON.end, t: 'Em gửi yêu cầu', d: 'Em mở một trang web trên điện thoại (thiết bị đầu cuối). Yêu cầu của em bắt đầu đi vào mạng.', html: journeyMap(0) },
    { e: ICON.switch, t: 'Switch nối các đoạn mạng', d: 'Switch nối các thiết bị trong mạng và chuyển yêu cầu về phía Router.', html: journeyMap(1) },
    { e: ICON.router, t: 'Router chỉ đường', d: 'Router hướng dẫn gói dữ liệu đi đến đúng đích để thông tin được truyền hiệu quả và an toàn.', html: journeyMap(2) },
    { e: ICON.modem, t: 'Modem đổi tín hiệu', d: 'Modem chuyển đổi tín hiệu giữa dạng số và dạng tương tự để gửi lên Internet.', html: journeyMap(3) },
    { e: '🌍', t: 'Internet trả kết quả', d: 'Máy chủ trả trang web về, đi theo đường ngược lại và hiện ra trên màn hình của em.', html: journeyMap(4) }
  ]);

  sorter($('#m3sort'), {
    bins: [{ id: 'end', label: ICON.end + ' Thiết bị đầu cuối' }, { id: 'rt', label: ICON.router + ' Router', cls: 'alt' }, { id: 'md', label: ICON.modem + ' Modem' }, { id: 'sw', label: ICON.switch + ' Switch', cls: 'alt' }],
    cards: [
      { img: 'dien-thoai.png', t: '', hint: 'Nhỏ gọn, cầm gọn trong một tay, dùng màn hình cảm ứng để gọi điện và lướt web.', bin: 'end', note: 'Điện thoại thông minh là thiết bị đầu cuối.' },
      { img: 'may-tinh.png', t: '', hint: 'Có màn hình và bàn phím, gập lại được và mang đi khắp nơi.', bin: 'end', note: 'Máy tính xách tay là thiết bị đầu cuối.' },
      { img: 'may-tinh-bang.png', t: '', hint: 'Màn hình cảm ứng lớn hơn điện thoại, mỏng và dễ mang theo.', bin: 'end', note: 'Máy tính bảng là thiết bị đầu cuối.' },
      { img: 'router-1.jpg', t: '', hint: 'Có nhiều ăng-ten để phát sóng Wi-Fi cho các thiết bị xung quanh; chỉ đường cho gói dữ liệu.', bin: 'rt', note: 'Router: có ăng-ten phát sóng, hướng dẫn gói dữ liệu đến đúng đích.' },
      { img: 'router-3.jpg', t: '', hint: 'Ba ăng-ten ngả ra hai bên để phát sóng; thiết bị này chỉ đường cho gói dữ liệu.', bin: 'rt', note: 'Đây cũng là Router (Router Wi-Fi có 3 ăng-ten).' },
      { img: 'router-4.jpg', t: '', hint: 'Có hai ăng-ten phía sau và vài cổng mạng; giúp dữ liệu đi đúng hướng.', bin: 'rt', note: 'Router không dây: có ăng-ten và vài cổng mạng.' },
      { img: 'modem-1.jpg', t: '', hint: 'Có hàng đèn báo tín hiệu; nhận đường truyền Internet từ nhà cung cấp dịch vụ.', bin: 'md', note: 'Modem: chuyển đổi tín hiệu số và tương tự.' },
      { img: 'modem-3.jpg', t: '', hint: 'Hộp đứng có nhiều đèn báo; nối đường truyền từ nhà cung cấp Internet vào nhà.', bin: 'md', note: 'Modem cáp: nối đường dây từ nhà cung cấp Internet vào nhà.' },
      { img: 'modem-4.jpg', t: '', hint: 'Nối với đường dây điện thoại; đổi tín hiệu số và tương tự.', bin: 'md', note: 'Modem ADSL: nối với đường dây điện thoại.' },
      { img: 'switch.jpg', t: '', hint: 'Có một hàng nhiều cổng để cắm cáp mạng.', bin: 'sw', note: 'Switch: nhiều cổng để kết nối các đoạn mạng.' },
      { img: 'switch-2.jpg', t: '', hint: 'Một hàng cổng mạng giống nhau, dùng để nối các đoạn mạng lại với nhau.', bin: 'sw', note: 'Switch 8 cổng: dùng để nối nhiều thiết bị trong mạng.' },
      { img: 'switch-3.jpg', t: '', hint: 'Một hàng cổng mạng, dùng để kết nối các đoạn mạng với nhau.', bin: 'sw', note: 'Switch: một hàng cổng mạng để kết nối các thiết bị.' }
    ],
    onDone() { revealQuiz('#m3q', ['devEndpoint', 'devRouter', 'devModem', 'modemConvert', 'devSwitch', 'matchDevices'], 2); }
  });
}

/* ============================================================
   NHIỆM VỤ 4 — AI cần mạng
   (aiNeedsNet, aiFlow, aiWeak)
   ============================================================ */
const AI_PROMPTS = [
  { q: 'Làm thế nào để viết bài văn hay?', a: 'Dưới đây là các bước để viết: 1) Lập dàn ý. 2) Viết mở bài hấp dẫn. 3) Dùng từ ngữ sinh động. 4) Đọc lại và sửa lỗi.' },
  { q: 'Vì sao bầu trời có màu xanh?', a: 'Ánh sáng Mặt Trời có nhiều màu. Màu xanh bị không khí tán xạ nhiều nhất nên bầu trời trông có màu xanh.' },
  { q: 'Gợi ý cách ôn bài môn Tin học.', a: 'Em hãy ôn lại các khái niệm chính, làm câu hỏi vận dụng và ghi chú ngắn gọn bằng từ khóa của em.' }
];
function m4(root) {
  root.innerHTML = head(3, 'Công cụ AI trực tuyến cần có mạng', 'Nhiều công cụ AI không chạy hoàn toàn trên máy của em. Hãy thử hỏi AI khi mạng mạnh, yếu và mất kết nối.') + `
  <div class="card"><h3>Dữ liệu đi đâu khi em hỏi AI?</h3>
    <div class="split"><div class="key">Nhiều công cụ AI trực tuyến <b>không chạy hoàn toàn trên máy của người dùng</b> mà hoạt động qua <b>máy chủ trên Internet</b>. Khi em nhập một câu hỏi, dữ liệu có thể được gửi qua mạng đến máy chủ AI, sau đó kết quả được gửi lại cho thiết bị của em.
      <div class="key am" style="margin-top:10px">Nếu mạng yếu hoặc mất kết nối, công cụ AI trực tuyến có thể phản hồi chậm hoặc không hoạt động.</div></div>
      ${fig('ai-may-chu.jpg', 'Câu hỏi đi qua Internet đến máy chủ AI, kết quả được gửi lại')}
    </div></div>

  <div class="card"><h3><span class="st">1</span>Thí nghiệm "Hỏi AI"</h3>
    <p style="margin-top:0">Chọn chất lượng mạng, rồi chọn một câu hỏi. <b>Thử cả 3 trạng thái mạng</b> để mở bài tập.</p>
    <div class="modes" id="net"><button class="on" data-n="strong">📶 Mạng mạnh</button><button data-n="weak">📉 Mạng yếu</button><button data-n="off">❌ Mất kết nối</button></div>
    <div class="chat">
      <div class="route" id="route"><span class="node" data-r="0">💻 Thiết bị</span><span class="arr">⇄</span><span class="node" data-r="1">🌐 Internet</span><span class="arr">⇄</span><span class="node" data-r="2">🖥️ Máy chủ AI</span></div>
      <div class="msgs" id="msgs"></div>
      <div class="prompts" id="prompts">${AI_PROMPTS.map((p, i) => `<button data-i="${i}">💬 ${esc(p.q)}</button>`).join('')}</div>
    </div>
    <p id="seen" style="font-weight:700;margin:8px 0 0"></p></div>
  <div id="m4q" hidden></div>
  ${navBtns(3)}`;

  let net = 'strong', busy = false; const seen = new Set();
  const lab = { strong: '📶 Mạng mạnh', weak: '📉 Mạng yếu', off: '❌ Mất kết nối' };
  const alive = () => !!$('#msgs');
  function node(i, cls) { const n = $(`.node[data-r="${i}"]`); if (n) n.className = 'node ' + (cls || ''); }
  function say(cls, t) { const m = $('#msgs'); if (!m) return; m.insertAdjacentHTML('beforeend', `<div class="bub ${cls}">${esc(t)}</div>`); m.scrollTop = m.scrollHeight; }
  function mark() {
    seen.add(net);
    $('#seen').textContent = ['strong', 'weak', 'off'].map(k => (seen.has(k) ? '✅ ' : '⬜ ') + lab[k]).join('   ');
    if (seen.size === 3) revealQuiz('#m4q', ['aiNeedsNet', 'aiFlow', 'aiWeak'], 3);
  }
  $('#seen').textContent = ['strong', 'weak', 'off'].map(k => '⬜ ' + lab[k]).join('   ');
  $('#net').onclick = e => { const b = e.target.closest('button'); if (!b || busy) return; net = b.dataset.n; $$('#net button').forEach(x => x.classList.toggle('on', x === b)); };
  $('#prompts').onclick = e => {
    const b = e.target.closest('button'); if (!b || busy) return; const P = AI_PROMPTS[+b.dataset.i];
    busy = true; $$('#prompts button').forEach(x => x.disabled = true); $$('.node').forEach(n => n.className = 'node');
    say('me', P.q);
    const gap = net === 'strong' ? 450 : 1300, fin = () => { busy = false; if (alive()) $$('#prompts button').forEach(x => x.disabled = false); mark(); };
    node(0, 'on');
    if (net === 'off') {
      setTimeout(() => { if (!alive()) return; node(1, 'bad'); say('sys', '⚠️ Không có kết nối mạng: câu hỏi không gửi được đến máy chủ AI, nên AI không thể trả lời.'); fin(); }, 700);
      return;
    }
    setTimeout(() => { if (!alive()) return; node(1, 'on'); }, gap);
    setTimeout(() => { if (!alive()) return; node(2, 'on'); if (net === 'weak') say('sys', '⏳ Mạng yếu nên máy chủ phản hồi rất chậm…'); }, gap * 2);
    setTimeout(() => { if (!alive()) return; say('ai', '🤖 ' + P.a); $$('.node').forEach(n => n.className = 'node on'); fin(); }, gap * 3 + (net === 'weak' ? 1200 : 0));
  };
}

/* ============================================================
   NHIỆM VỤ 5 — Kiểm tra cuối bài
   ============================================================ */
function m5(root) {
  root.innerHTML = head(4, 'Kiểm tra cuối bài', '12 câu ngẫu nhiên trong toàn bộ bài. Hoàn thành để nhận kết quả.') +
    `<div id="m5q"></div>${navBtns(4)}`;
  const q = $("#m5q"), pick = () => shuffle(Object.keys(QUIZ)).slice(0, 12), keys = state.keys[4] || pick();
  if (state.done[4] && state.res[4]) doneCard(q, 4, () => runQuiz(q, pick(), 4, "Bài kiểm tra tổng hợp")); else runQuiz(q, keys, 4, "Bài kiểm tra tổng hợp");
}

const RENDER = [m1, m2, m3, m4, m5];

/* ============================================================
   ĐỘNG CƠ BÀI HỌC (dùng chung cho các nhiệm vụ ở trên)
   Cần khai báo CFG, QUIZ (questions.js) và các hàm m1…mN trước phần này.
   ============================================================ */

/* ---------- helpers ---------- */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const shuffle = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.random() * (i + 1) | 0; [a[i], a[j]] = [a[j], a[i]]; } return a; };
let toastT;
function toast(msg, bad) {
  const t = $('#toast'); t.textContent = msg; t.className = 'toast show' + (bad ? ' bad' : '');
  clearTimeout(toastT); toastT = setTimeout(() => t.className = 'toast' + (bad ? ' bad' : ''), 2200);
}
function shake(el) { el.classList.remove('shake'); void el.offsetWidth; el.classList.add('shake'); }
function fig(src, cap) { return `<figure class="fig"><img src="img/${src}" alt="${esc(cap || '')}" loading="lazy">${cap ? `<figcaption>${cap}</figcaption>` : ''}</figure>`; }
function figs(list) { return `<div class="figrow">${list.map(([s, c]) => fig(s, c)).join('')}</div>`; }
/* thẻ kết quả khi quay lại phần đã hoàn thành */
function doneCard(root, i, rerun) {
  const r = state.res[i];
  root.innerHTML = `<div class="card"><h3><span class="st">✔</span>Em đã hoàn thành phần này</h3><div class="resultbox"><div style="font-size:50px">🏅</div><div class="big">${r.s}/${r.t}</div><p>câu đúng ngay lần đầu (lần làm gần nhất)</p><button class="btn ghost" id="redoQ">↺ Làm lại phần câu hỏi</button></div></div>`;
  $('#redoQ', root).onclick = () => { delete state.qp[i]; save(); rerun(); };
}
/* chạy câu hỏi của nhiệm vụ i: nhớ danh sách câu, vị trí đang làm và điểm */
function runQuiz(root, keys, i, title) {
  state.keys[i] = keys; save();
  quizBlock(root, keys, (s, t) => { state.res[i] = { s, t }; delete state.qp[i]; save(); complete(i); }, title, i);
}
function revealQuiz(id, keys, i, title) {
  const q = $(id); if (!q.hidden) return; q.hidden = false;
  keys = state.keys[i] || keys;
  if (state.done[i] && state.res[i]) doneCard(q, i, () => runQuiz(q, keys, i, title)); else runQuiz(q, keys, i, title);
}

/* ---------- tiến độ ---------- */
const N = CFG.N, SAVE_KEY = CFG.KEY;
const state = { cur: 0, done: Array(N).fill(false), res: [], keys: [], qp: [] };
try {
  const s = JSON.parse(localStorage.getItem(SAVE_KEY) || 'null');
  if (s && Array.isArray(s.done) && s.done.length === N) { state.done = s.done.map(Boolean); state.cur = Math.min(N - 1, Math.max(0, s.cur | 0)); state.res = s.res || []; state.keys = s.keys || []; state.qp = s.qp || []; }
} catch (e) {}
function save() { try { localStorage.setItem(SAVE_KEY, JSON.stringify({ cur: state.cur, done: state.done, res: state.res, keys: state.keys, qp: state.qp })); } catch (e) {} }
function resetAll() {
  if (!confirm('Xóa toàn bộ tiến độ và học lại từ đầu?')) return;
  try { localStorage.removeItem(SAVE_KEY); } catch (e) {}
  state.done = Array(N).fill(false); state.res = []; state.keys = []; state.qp = []; $('#congrats')?.remove(); go(0);
}
function complete(i) {
  if (state.done[i]) return;
  state.done[i] = true; save(); drawTabs(); toast('✅ Hoàn thành nhiệm vụ ' + (i + 1) + '!');
  if (state.done.every(Boolean)) setTimeout(showCongrats, 900);
}
function showCongrats() {
  if ($('#congrats')) return;
  const el = document.createElement('div'); el.id = 'congrats'; let conf = '';
  for (let i = 0; i < 24; i++) conf += `<i style="left:${(i * 41) % 100}%;animation-delay:${(i % 8) * .3}s;animation-duration:${3 + (i % 5) * .6}s">${CFG.bits[i % CFG.bits.length]}</i>`;
  el.innerHTML = `<div class="confetti" aria-hidden="true">${conf}</div><div class="cg-box"><div class="cg-ic">🏆</div><h2>Chúc mừng em!</h2>
    <p>Em đã hoàn thành cả <b>${N} nhiệm vụ</b> của ${CFG.name}.</p><p>${CFG.congrats}</p>
    <div class="cg-btns"><button class="btn" id="cgClose">Tiếp tục</button><button class="btn ghost" id="cgReset">↺ Học lại</button></div></div>`;
  document.body.appendChild(el);
  $('#cgClose').onclick = () => el.remove(); $('#cgReset').onclick = resetAll;
}

/* ============================================================
   THÀNH PHẦN DÙNG CHUNG
   ============================================================ */

/* đo chiều cao lớn nhất của một nhóm nội dung (để khóa chiều cao khung, không bị nhảy) */
function measureMax(host, cls, htmls) {
  const w = host.clientWidth || host.parentElement.clientWidth; if (!w) return 0;
  const m = document.createElement('div'); m.className = cls;
  m.style.cssText = 'position:absolute;visibility:hidden;left:-9999px;top:0;width:' + w + 'px;min-height:0';
  document.body.appendChild(m); let h = 0;
  htmls.forEach(x => { m.innerHTML = x; h = Math.max(h, m.offsetHeight); });
  m.remove(); return Math.ceil(h) + 12;
}
/* chạy fn() lại khi đổi kích thước cửa sổ, chỉ khi el còn trên trang */
function onResizeLock(el, fn) {
  let t; window.addEventListener('resize', () => { clearTimeout(t); t = setTimeout(() => { if (document.body.contains(el)) fn(); }, 150); });
}

/* ---- quizBlock: chạy tuần tự các câu hỏi lấy từ QUIZ theo khóa ---- */
function quizBlock(root, keys, onDone, title, slot) {
  const rs = (slot != null && !state.done[slot] && state.qp[slot]) || null;
  let idx = rs ? Math.min(rs.idx, keys.length) : 0, firstTry = rs ? rs.ft : 0;
  const L = 'ABCDEF';
  root.innerHTML = `<div class="card"><h3><span class="st">✔</span>${title || 'Thử thách vận dụng'}</h3><div id="qbBody"></div></div>`;
  let body = $('#qbBody', root);
  /* khóa chiều cao khung câu hỏi bằng câu cao nhất (cả khi hiện phản hồi) để trang không bị nhảy */
  function lockHeight() {
    const real = body, w = real.clientWidth; if (!w) return;
    const m = document.createElement('div'); m.style.cssText = 'position:absolute;visibility:hidden;left:-9999px;top:0;width:' + w + 'px';
    document.body.appendChild(m); body = m; const keep = idx; let h = 0;
    try {
      keys.forEach((k, i) => {
        idx = i; show(); const Q = QUIZ[k], fb = $('#qFb', m), nx = $('#qNext', m); nx.hidden = false;
        fb.innerHTML = `<div class="fb ok">🎉 Chính xác! ${esc(Q.explain)}</div>`; h = Math.max(h, m.offsetHeight);
        fb.innerHTML = `<div class="fb no">Chưa đúng. Hãy chọn lại.</div><div class="fb hint">💡 Gợi ý: ${esc(Q.hint)}</div>`; h = Math.max(h, m.offsetHeight);
      });
    } catch (e) {}
    body = real; idx = keep; m.remove(); real.style.minHeight = Math.ceil(h) + 'px';
  }

  function show() {
    if (idx >= keys.length) return finish();
    const Q = QUIZ[keys[idx]]; let tries = 0, answered = false;
    body.innerHTML = `<div class="qb-head"><span>Câu ${idx + 1} / ${keys.length}</span></div>
      <div class="qb-bar">${keys.map((_, i) => `<i class="${i < idx ? 'on' : i === idx ? 'cur' : ''}"></i>`).join('')}</div>
      <div id="qArea"></div><div id="qFb"></div><div class="nav" style="justify-content:flex-end"><button class="btn" id="qNext" hidden>${idx === keys.length - 1 ? 'Hoàn thành ✓' : 'Câu tiếp theo →'}</button></div>`;
    const area = $('#qArea', body), fb = $('#qFb', body), next = $('#qNext', body);
    next.onclick = () => { idx++; if (slot != null) { state.qp[slot] = { idx, ft: firstTry }; save(); } show(); };
    function good() {
      if (answered) return; answered = true; if (tries === 0) firstTry++;
      fb.innerHTML = `<div class="fb ok">🎉 Chính xác! ${esc(Q.explain)}</div>`; next.hidden = false; next.focus();
    }
    function bad(extra) {
      tries++; shake(area);
      fb.innerHTML = `<div class="fb no">Chưa đúng.${extra || ''}</div>` + (tries >= 1 ? `<div class="fb hint">💡 Gợi ý: ${esc(Q.hint)}</div>` : '');
    }
    if (Q.type === 'quiz_single') {
      const order = shuffle(Q.options.map((t, i) => i)), isTF = Q.options.length === 2 && Q.options[0] === 'Đúng';
      const list = isTF ? Q.options.map((t, i) => i) : order;
      area.innerHTML = `<p class="q-text">${esc(Q.question)}</p>` + list.map((oi, p) => `<button class="opt" data-o="${oi}"><span class="l">${L[p]}</span><span>${esc(Q.options[oi])}</span></button>`).join('');
      area.onclick = e => {
        const b = e.target.closest('.opt'); if (!b || b.disabled || answered) return;
        if (+b.dataset.o === Q.correctAnswer) { b.classList.add('right'); $$('.opt', area).forEach(x => x.disabled = true); good(); }
        else { b.classList.add('wrong'); b.disabled = true; bad(); }
      };
    } else if (Q.type === 'quiz_multiple') {
      const need = Q.correctAnswers.length, order = shuffle(Q.options.map((t, i) => i));
      area.innerHTML = `<p class="q-text">${esc(Q.question)}</p>` + order.map((oi, p) => `<button class="opt" data-o="${oi}"><span class="l">${L[p]}</span><span>${esc(Q.options[oi])}</span></button>`).join('') +
        `<button class="btn sm" id="chk" style="margin-top:6px">Kiểm tra (chọn ${need})</button>`;
      area.onclick = e => {
        if (e.target.closest('#chk')) {
          const sel = $$('.opt.sel', area).map(b => +b.dataset.o);
          if (sel.length !== need) return toast('Hãy chọn đúng ' + need + ' đáp án', true);
          if (sel.every(o => Q.correctAnswers.includes(o))) { $$('.opt', area).forEach(b => { b.disabled = true; b.classList.remove('sel'); if (Q.correctAnswers.includes(+b.dataset.o)) b.classList.add('right'); }); $('#chk', area).hidden = true; good(); }
          else { $$('.opt.sel', area).forEach(b => b.classList.remove('sel')); bad(' Hãy chọn lại.'); }
          return;
        }
        const b = e.target.closest('.opt'); if (!b || b.disabled || answered) return;
        if (!b.classList.contains('sel') && $$('.opt.sel', area).length >= need) return toast('Chỉ chọn ' + need + ' đáp án', true);
        b.classList.toggle('sel');
      };
    } else if (Q.type === 'quiz_dropdown') {
      const parts = Q.question.split('___');
      area.innerHTML = `<p class="q-text">${esc(parts[0].split(':')[0])}:</p>` + parts.slice(0, Q.blanks.length).map((t, i) =>
        `<div class="row-dd">${esc(i === 0 ? t.split(':').slice(1).join(':').trim() : t.trim())}
          <select data-i="${i}"><option value="">— chọn —</option>${Q.blanks[i].options.map((o, k) => `<option value="${k}">${esc(o)}</option>`).join('')}</select></div>`).join('') +
        `<button class="btn sm" id="chk">Kiểm tra</button>`;
      $('#chk', area).onclick = () => {
        const sels = $$('select', area); if (sels.some(s => s.value === '')) return toast('Hãy chọn đủ các ô', true);
        let ok = true; sels.forEach((s, i) => { const r = +s.value === Q.blanks[i].correctAnswer; s.classList.toggle('right', r); s.classList.toggle('wrong', !r); if (!r) ok = false; });
        if (ok) { sels.forEach(s => s.disabled = true); $('#chk', area).hidden = true; good(); } else bad(' Các ô màu đỏ cần sửa lại.');
      };
    } else if (Q.type === 'quiz_matching') {
      const left = Q.pairs.map((p, i) => ({ i, t: p.left, ic: p.icon })), right = shuffle(Q.pairs.map((p, i) => ({ i, t: p.right })));
      let selL = null, matched = 0;
      area.innerHTML = `<p class="q-text">${esc(Q.question)}</p><div class="mt"><div id="mtL">${left.map(l => `<button data-i="${l.i}" style="width:100%;margin-bottom:8px">${l.ic} ${esc(l.t)}</button>`).join('')}</div>
        <div id="mtR">${right.map(r => `<button data-i="${r.i}" style="width:100%;margin-bottom:8px">${esc(r.t)}</button>`).join('')}</div></div>`;
      area.onclick = e => {
        const b = e.target.closest('button'); if (!b || b.classList.contains('done') || answered) return;
        if (b.parentElement.id === 'mtL') { $$('#mtL button', area).forEach(x => x.classList.remove('sel')); b.classList.add('sel'); selL = b; return; }
        if (!selL) return toast('Chọn một mô tả bên trái trước', true);
        if (selL.dataset.i === b.dataset.i) { selL.classList.remove('sel'); selL.classList.add('done'); b.classList.add('done'); selL = null; if (++matched === Q.pairs.length) good(); }
        else { b.classList.add('sel'); setTimeout(() => b.classList.remove('sel'), 400); bad(); }
      };
    }
  }
  function finish() {
    body.innerHTML = `<div class="resultbox"><div style="font-size:50px">🏅</div><div class="big">${firstTry}/${keys.length}</div><p>câu đúng ngay lần đầu</p></div>`;
    onDone && onDone(firstTry, keys.length);
  }
  lockHeight(); show();
  onResizeLock(body, () => { body.style.minHeight = ''; lockHeight(); });
}

/* ---- sorter: phân loại từng thẻ vào các ngăn ---- */
function sorter(root, o) {
  let queue = shuffle(o.cards), total = o.cards.length, solved = 0, lock = false;
  root.innerHTML = `<div class="sorter"><div id="scCard"></div><div class="sc-bins" id="scBins">${o.bins.map(b => `<button class="btn ${b.cls || ''}" data-b="${b.id}">${b.label}</button>`).join('')}</div><div id="scFb"></div><div class="pips" id="scPips">${o.cards.map(() => '<i></i>').join('')}</div></div>`;
  const cardEl = $('#scCard', root), fb = $('#scFb', root);
  let fbTimer = 0;
  const showFb = html => { clearTimeout(fbTimer); fb.innerHTML = html; fbTimer = setTimeout(() => { fb.innerHTML = ''; }, 3000); };
  function draw() {
    if (!queue.length) { cardEl.innerHTML = `<div class="sc-card" style="border-color:var(--green)"><span class="e">🎉</span>Phân loại xong!</div>`; $('#scBins', root).hidden = true; o.onDone && o.onDone(); return; }
    const c = queue[0]; cardEl.innerHTML = c.img ? `<div class="sc-card sc-photo"><img src="img/${c.img}" alt="Thiết bị cần nhận biết"><div class="hintbox"><button class="btn sm alt" id="scHint">💡 Gợi ý</button></div></div>` : `<div class="sc-card"><span class="e">${c.e || ''}</span>${esc(c.t)}</div>`;
const hb = $('#scHint', cardEl); if (hb) hb.onclick = () => { clearTimeout(fbTimer); fb.innerHTML = ''; hb.parentElement.innerHTML = '<span>' + esc(c.hint || 'Hãy quan sát kĩ hình dạng, cổng và ăng-ten.') + '</span>'; };
  }
  $('#scBins', root).onclick = e => {
    const b = e.target.closest('button'); if (!b || lock || !queue.length) return;
    const c = queue[0];
    if (b.dataset.b === c.bin) {
      queue.shift(); solved++; $$('#scPips i', root)[solved - 1].classList.add('on');
      showFb(`<div class="fb ok">✅ ${esc(c.note || 'Đúng rồi!')}</div>`);
    } else {
      queue.push(queue.shift()); shake(cardEl);
      showFb(`<div class="fb no">❌ ${esc(c.img ? 'Chưa đúng, hãy quan sát kĩ hình rồi thử lại. Thẻ này sẽ quay lại sau.' : (c.note || 'Chưa đúng, thẻ này sẽ quay lại sau.'))}</div>`);
    }
    draw();
  };
  draw();
}

/* ---- explorer: bấm từng thẻ để xem chi tiết; xem hết thì gọi onAll ---- */
function explorer(root, items, onAll) {
  const seen = new Set(); let fired = false;
  root.innerHTML = `<div class="xp-tabs">${items.map((it, i) => `<button class="xp-tab" data-i="${i}"><span>${it.e}</span>${esc(it.t)}<i class="chk">✓</i></button>`).join('')}</div><div class="xp-panel" id="xpPanel"><p style="color:var(--mute)">👆 Bấm vào từng thẻ để khám phá.</p></div>`;
  const xp = $('#xpPanel', root), lockXp = () => { xp.style.minHeight = measureMax(xp, 'xp-panel', items.map(it => it.html)) + 'px'; };
  lockXp(); onResizeLock(xp, () => { xp.style.minHeight = ''; lockXp(); });
  root.onclick = e => {
    const b = e.target.closest('.xp-tab'); if (!b) return;
    const i = +b.dataset.i; seen.add(i);
    $$('.xp-tab', root).forEach(x => x.classList.toggle('on', x === b)); b.classList.add('seen');
    const p = $('#xpPanel', root); p.innerHTML = items[i].html; p.style.animation = 'none'; void p.offsetWidth; p.style.animation = '';
    if (!fired && seen.size === items.length) { fired = true; onAll && onAll(); }
  };
}

/* ---- stepper: đi qua từng bước một ---- */
function stepper(root, steps, onDone) {
  let s = 0, fired = false, stpH = 0;
  const inner = (t, k) => `<div class="big-e">${t.e}</div><h4>${k + 1}. ${t.t}</h4><p>${t.d}</p>${t.html || ''}
      <div class="stepdots">${steps.map((_, i) => `<i class="${i <= k ? 'on' : ''}"></i>`).join('')}</div>
      <button class="btn sm" id="stpN">${k === steps.length - 1 ? '↺ Xem lại' : 'Bước tiếp theo →'}</button>`;
  function draw() {
    root.innerHTML = `<div class="stp">${inner(steps[s], s)}</div>${fired ? `<div class="stp-line">${steps.map((x, i) => `<span><em>${i + 1}</em>${x.t}</span>`).join("<i>➜</i>")}</div>` : ""}`;
    const st = root.firstElementChild;
    if (!stpH) stpH = measureMax(st, 'stp', steps.map(inner));
    st.style.minHeight = stpH + 'px';
    $('#stpN', root).onclick = () => { s = (s + 1) % steps.length; draw(); };
    if (s === steps.length - 1 && !fired) { fired = true; onDone && onDone(); draw(); }
  }
  draw();
  onResizeLock(root, () => { stpH = 0; draw(); });
}

/* ---- orderGame: bấm các bước theo đúng thứ tự ---- */
function orderGame(root, items, onDone) {
  let k = 0; const order = shuffle(items.map((t, i) => ({ t, i })));
  root.innerHTML = `<div class="ordgame">${order.map(o => `<button data-i="${o.i}">${esc(o.t)}</button>`).join('')}</div><div id="ogFb"></div>`;
  root.onclick = e => {
    const b = e.target.closest('button'); if (!b || b.classList.contains('done')) return;
    if (+b.dataset.i === k) { b.classList.add('done'); b.innerHTML = `<span class="no">${k + 1}</span>` + b.innerHTML; k++; $('#ogFb', root).innerHTML = ''; if (k === items.length) { $('#ogFb', root).innerHTML = '<div class="fb ok">✅ Đúng thứ tự rồi!</div>'; onDone && onDone(); } }
    else { shake(root); $('#ogFb', root).innerHTML = `<div class="fb no">Chưa đúng. Hãy nghĩ xem bước ${k + 1} là gì nhé.</div>`; }
  };
}

/* ============================================================
   KHUNG: tab, điều hướng
   ============================================================ */
/* ============================================================
   TÓM TẮT: ghi nhớ nhanh theo chủ đề (CFG.groups) + câu hỏi và đáp án dựng từ QUIZ.
   Có nút ẩn đáp án để tự kiểm tra. Không tính vào tiến độ.
   ============================================================ */
function sumAnswer(Q) {
  const one = t => `<span class="sum-ok">${esc(t)}</span>`;
  if (Q.type === 'quiz_single') return one(Q.options[Q.correctAnswer]);
  if (Q.type === 'quiz_multiple') return Q.correctAnswers.map(i => one(Q.options[i])).join('');
  if (Q.type === 'quiz_dropdown') {
    const parts = Q.question.split('___');
    return Q.blanks.map((b, i) => `<span class="sum-line">${esc((i === 0 ? parts[0].split(':').slice(1).join(':') : parts[i]).trim())} <b>→ ${esc(b.options[b.correctAnswer])}</b></span>`).join('');
  }
  return Q.pairs.map(p => `<span class="sum-line">${esc(p.left)} <b>→ ${esc(p.right)}</b></span>`).join('');
}
function sumQuestion(Q) {
  const t = (Q.type === 'quiz_dropdown' ? Q.question.split(':')[0] + ':' : Q.question).replace(/^Em hãy (cho biết|xác định), */i, '');
  return t.charAt(0).toUpperCase() + t.slice(1);
}
function summaryView(root) {
  root.innerHTML = `<div class="sum-tools"><button class="btn sm" id="sumHide">🙈 Ẩn đáp án để tự kiểm tra</button></div>` +
    CFG.groups.map(g => `<div class="card sum-group"><h3>${g.i} ${g.t}</h3>
      <div class="key"><ul>${g.notes.map(n => `<li>${esc(n)}</li>`).join('')}</ul>${g.keys.length ? `<button class="qbtn" data-tip="Câu hỏi ôn tập" aria-label="Câu hỏi ôn tập" aria-expanded="false">?</button>` : ''}</div>` +
      (g.keys.length ? `<div class="sum-qs" hidden>` + g.keys.map(k => { const Q = QUIZ[k]; return `<div class="sum-row"><div class="sum-q">${esc(sumQuestion(Q))}</div><div class="sum-a">${sumAnswer(Q)}</div></div>`; }).join('') + `</div>` : '') + `</div>`).join('');
  const btn = $('#sumHide', root);
  btn.onclick = () => { const h = root.classList.toggle('hide-ans'); btn.textContent = h ? '👁️ Hiện đáp án' : '🙈 Ẩn đáp án để tự kiểm tra'; if (!h) $$('.sum-a.show', root).forEach(a => a.classList.remove('show')); };
  root.onclick = e => { const q = e.target.closest('.qbtn'); if (q) { const box = q.closest('.sum-group').querySelector('.sum-qs'); box.hidden = !box.hidden; q.classList.toggle('on', !box.hidden); q.setAttribute('aria-expanded', String(!box.hidden)); return; } const r = e.target.closest('.sum-row'); if (r && root.classList.contains('hide-ans')) $('.sum-a', r).classList.toggle('show'); };
}
RENDER[N] = summaryView;

const MISSIONS = CFG.missions;
function drawTabs() {
  $('#tabs').innerHTML = MISSIONS.map((m, i) => `<button class="tab ${i === state.cur ? 'on' : ''} ${state.done[i] ? 'done' : ''}" data-i="${i}"><span class="n">${state.done[i] ? '✓' : i + 1}</span>${m.i} ${m.t}</button>`).join('') + `<button class="tab sumtab ${state.cur === N ? 'on' : ''}" data-i="${N}"><span class="n">📚</span>Tóm tắt</button>`;
  const n = state.done.filter(Boolean).length;
  $('#xpfill').style.width = n / N * 100 + '%'; $('#xptxt').textContent = n + ' / ' + N;
}
$('#tabs').addEventListener('click', e => { const b = e.target.closest('.tab'); if (b) go(+b.dataset.i); });
function go(i) {
  state.cur = i; save(); drawTabs(); const m = $('#main'); m.innerHTML = ''; RENDER[i](m);
  const qid = '#m' + (i + 1) + 'q'; if (state.keys[i] && $(qid) && $(qid).hidden) revealQuiz(qid, state.keys[i], i);
  window.scrollTo({ top: 0 });
}
function head(i, title, lead) { return `<div class="crumb">Nhiệm vụ ${i + 1} / ${N}</div><h2 class="title">${title}</h2><p class="lead">${lead}</p>`; }
function navBtns(i) {
  return `<div class="nav"><button class="btn ghost" ${i === 0 ? 'disabled' : ''} data-nav="${i - 1}">← Trước</button>
  <button class="btn" ${i === N - 1 ? 'disabled' : ''} data-nav="${i + 1}">Nhiệm vụ tiếp →</button></div>`;
}
document.addEventListener('click', e => { const b = e.target.closest('[data-nav]'); if (b && !b.disabled) go(+b.dataset.nav); });
(function () { const n = state.done.filter(Boolean).length; if (n) $('#start').textContent = '▶ Tiếp tục học (' + n + '/' + N + ')'; })();
$('#start').onclick = () => { $('#boot').classList.add('hidden'); $('#shell').classList.remove('hidden'); go(state.cur); };
$('#resetBtn').onclick = resetAll;

/* ---------- giao diện sáng / tối ---------- */
(function () {
  const root = document.documentElement, btn = $('#themeBtn'), KEY = 'k6b08-theme';
  let t = null; try { t = localStorage.getItem(KEY); } catch (e) {}
  if (t !== 'light' && t !== 'dark') t = matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  function apply(v) {
    root.setAttribute('data-theme', v); btn.textContent = v === 'dark' ? '☀️' : '🌙';
    btn.title = v === 'dark' ? 'Chuyển sang chế độ sáng' : 'Chuyển sang chế độ tối';
    try { localStorage.setItem(KEY, v); } catch (e) {}
  }
  btn.onclick = () => apply(root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
  apply(t);
})();

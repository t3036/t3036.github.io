/* ============================================================
   BÀI HỌC TƯƠNG TÁC — LEVEL 1 · BÀI 09: TÌM HIỂU VỀ KẾT NỐI MẠNG KHÔNG DÂY
   Nội dung sinh ra từ bộ câu hỏi trong questions.js (QUIZ).
   6 nhiệm vụ: mỗi nhiệm vụ có phần khám phá/mô phỏng + chuỗi câu hỏi vận dụng.
   Phần động cơ dùng chung (quizBlock, sorter, explorer, stepper…) ở cuối file.
   ============================================================ */

const CFG = {
  groups: [
    { t: 'Thiết bị và công nghệ kết nối', i: '🧩', keys: ['adapterWifi', 'nicSpeed', 'matchNetTech'], notes: [
      'Network Adapter: bảng mạch giúp máy tính để bàn kết nối với mạng.',
      'Wireless Adapter: truyền và nhận tín hiệu Radio; điện thoại, máy tính bảng có sẵn.',
      'Access Point: điểm phát sóng, giúp thiết bị truy cập được Wi-Fi',
      'Card mạng NIC: tạo kết nối Ethernet với LAN (10Mbps, 100Mbps, 1Gbps).',
      'Cáp Ethernet: kết nối các máy tính với nhau trong mạng cục bộ',
      'DSL: đường dây điện thoại.',
      'Cable: cáp đồng trục TV.',
      'ISP: nhà cung cấp dịch vụ Internet.',
      'Modem: nối nhà em với ISP.'] },
    { t: 'Có dây và không dây', i: '📶', keys: ['adhoc', 'wiredWirelessTwo', 'wiredWirelessYN', 'wiredAdvantages', 'phoneInternet'], notes: [
      'Ethernet (có dây): nhanh, ổn định, bảo mật cao, ít độ trễ, chi phí thấp.',
      'Wi-Fi (không dây): dùng sóng vô tuyến; kém ổn định và kém an toàn hơn.',
      'Ad-hoc: kết nối trực tiếp thiết bị qua Wi-Fi, rất KHÔNG an toàn.'] },
    { t: 'Băng tần và Bluetooth', i: '🎧', keys: ['wifiBand', 'bluetoothStep'], notes: [
      'Wi-Fi dùng băng tần 2.4 GHz hoặc 5 GHz.',
      'Bluetooth: phải đặt thiết bị vào chế độ khám phá (Discovery Mode), ghép nối (Paired) trước khi kết nối.'] },
    { t: 'Khắc phục sự cố mạng', i: '🛠️', keys: ['checkInternet'], notes: [
      'Kiểm tra có mạng không: mở trình duyệt và thử vào một trang web.'] }
  ],
  N: 6, KEY: 'k6b09-progress', name: 'Bài 09',
  bits: ['🎉', '⭐', '📶', '🔌', '🏆', '✨'],
  congrats: 'Em biết các thiết bị kết nối mạng, phân biệt mạng có dây và không dây, dùng Bluetooth an toàn và khắc phục sự cố mạng đơn giản.',
  missions: [
    { t: 'Thiết bị kết nối', i: '🧩' },
    { t: 'Có dây & không dây', i: '📶' },
    { t: 'Băng tần & Bluetooth', i: '🎧' },
    { t: 'Công nghệ & lựa chọn', i: '🔗' },
    { t: 'Khắc phục sự cố', i: '🛠️' },
    { t: 'Kiểm tra cuối bài', i: '🏁' }
  ]
};

/* ============================================================
   NHIỆM VỤ 1 — Thiết bị kết nối
   (adapterWifi, nicNeed, nicSpeed, ethernetWhat, matchCable, ispWhat, ispExample)
   ============================================================ */
function m1(root) {
  root.innerHTML = head(0, 'Thiết bị giúp máy tính kết nối mạng', 'Bộ điều hợp, card mạng, cáp Ethernet và nhà cung cấp dịch vụ Internet: mỗi thứ có một vai trò.') + `
  <div class="card"><h3><span class="st">1</span>Khám phá</h3><div id="m1x"></div></div>
  <div class="card"><h3><span class="st">2</span>Bộ điều hợp không dây hay Card mạng NIC?</h3><p style="margin-top:0">Mô tả này nói về thiết bị nào?</p><div id="m1sort"></div></div>
  <div id="m1q" hidden></div>
  ${navBtns(0)}`;

  let a = false, b = false;
  const chk = () => { if (a && b) revealQuiz('#m1q', ['adapterWifi', 'handheldAdapter', 'nicNeed', 'nicSpeed', 'ethernetWhat', 'matchCable', 'ispWhat', 'ispExample'], 0); };
  explorer($('#m1x'), [
    { e: '📡', t: 'Bộ điều hợp (Adapter)', html: `<h4>Bộ điều hợp (Adapter)</h4><p>Là thiết bị <b>truyền và nhận tín hiệu Radio</b>. Các thiết bị tham gia vào mạng WLAN phải có <b>Wireless Adapter</b>.</p><p>Người dùng có thể gắn thêm <b>Wireless Card</b> vào Slot trên Bo mạch chủ (Motherboard) hoặc kết nối Wireless Adapter qua <b>cổng USB</b>.</p><p>Hầu hết các thiết bị cầm tay (<b>Smartphone, Tablet</b>) đều được tích hợp <b>Wireless Adapter</b> bên trong thiết bị.</p>${figs([['usb-wifi.jpg', 'Wireless Adapter cắm cổng USB'], ['nic-icon.png', 'Wireless Card gắn vào khe trên bo mạch chủ']])}` },
    { e: '🛰️', t: 'Điểm truy cập (AP)', html: `<h4>Điểm truy cập (Access Point)</h4><p><b>Access Point (AP)</b> là thiết bị <b>phát sóng Wi-Fi</b> để các thiết bị không dây (laptop, điện thoại, máy tính bảng) kết nối vào mạng.</p><p>AP được nối bằng <b>cáp Ethernet</b> với <b>Router/Switch</b> của mạng LAN có dây, nên các thiết bị không dây có thể liên lạc với máy tính trong LAN và ra Internet.</p><div class="tags"><span>Phát sóng Wi-Fi</span><span>Nối với mạng có dây</span><span>Dùng trong chế độ Infrastructure</span></div><p>Nhiều Router trong gia đình đã <b>tích hợp sẵn</b> chức năng Access Point.</p>${figs([['wifi.jpg', 'Access Point/Router phát Wi-Fi cho nhiều thiết bị']])}` },
    { e: '🔗', t: 'Card mạng NIC', html: `<h4>Card giao diện mạng NIC</h4><p>Để tạo kết nối <b>Ethernet</b> giữa máy tính và mạng LAN, máy tính phải có <b>Card mạng NIC</b>.</p><p>NIC được sản xuất để hỗ trợ các tốc độ đường truyền khác nhau:</p><div class="tags"><span>10 Mbps</span><span>100 Mbps</span><span>1 Gbps</span></div>${figs([['card-nic.jpg', 'Card mạng NIC có cổng cắm cáp']])}` },
    { e: '🔌', t: 'Cáp & cổng Ethernet', html: `<h4>Kết nối có dây Ethernet</h4><p>Là công nghệ kết nối và truyền tải dữ liệu qua mạng bằng các kết nối có dây. Gồm <b>cáp Ethernet</b> và <b>cổng Ethernet</b>.</p><div class="tags"><span>Cat5e: phổ biến nhất, đến 1 Gb/s</span><span>Cat6: chất lượng cao, đến 10 Gb/s</span><span>Cat7: cao cấp, băng thông rất lớn</span></div>${figs([['cap-ethernet.jpg', 'Cáp Ethernet'], ['cong-ethernet.jpg', 'Cổng Ethernet'], ['cap-cat.png', 'Các loại cáp Cat5e, Cat6, Cat6a, Cat7']])}` },
    { e: '🏢', t: 'ISP', html: `<h4>ISP (Internet Service Provider)</h4><p><b>Nhà cung cấp dịch vụ Internet</b> cung cấp cho người dùng khả năng kết nối với Internet.</p>${figs([['viettel.png', 'Viettel'], ['fpt.png', 'FPT'], ['vnpt.png', 'VNPT']])}` }
  ], () => { a = true; chk(); });

  sorter($('#m1sort'), {
    bins: [{ id: 'ad', label: '📡 Bộ điều hợp không dây' }, { id: 'nic', label: '🔗 Card mạng NIC', cls: 'alt' }],
    cards: [
      { e: '📡', t: 'Truyền và nhận tín hiệu Radio', bin: 'ad', note: 'Bộ điều hợp truyền và nhận tín hiệu Radio.' },
      { e: '🔩', t: 'Gắn vào Slot trên bo mạch chủ hoặc cắm cổng USB', bin: 'ad', note: 'Wireless Card/Adapter gắn vào Slot hoặc cổng USB.' },
      { e: '📶', t: 'Thiết bị tham gia mạng WLAN phải có', bin: 'ad', note: 'Mọi thiết bị trong mạng WLAN đều cần Wireless Adapter.' },
      { e: '🔗', t: 'Tạo kết nối Ethernet giữa máy tính và mạng LAN', bin: 'nic', note: 'Đó là nhiệm vụ của Card mạng NIC.' },
      { e: '🏎️', t: 'Hỗ trợ tốc độ 10Mbps, 100Mbps và 1Gbps', bin: 'nic', note: 'NIC được sản xuất để hỗ trợ các tốc độ đó.' },
      { e: '🔌', t: 'Có cổng để cắm cáp Ethernet', bin: 'nic', note: 'NIC có cổng để cắm cáp Ethernet.' }
    ], onDone() { b = true; chk(); }
  });
}

/* ============================================================
   NHIỆM VỤ 2 — Có dây & không dây
   (wifiTech, signalDistance, wiredWirelessTwo, wiredWirelessYN, wiredAdvantages, adhoc, phoneInternet)
   ============================================================ */
function m2(root) {
  root.innerHTML = head(1, 'Mạng có dây và mạng không dây', 'Ethernet dùng dây cáp, Wi-Fi dùng sóng vô tuyến. Hãy thử xem khoảng cách và nhiễu ảnh hưởng thế nào.') + `
  <div class="card"><h3>Hai cách kết nối</h3><div class="split"><div class="cols">
      <div class="mini"><span class="ic">🔌</span><b>Ethernet (có dây)</b><p>Truyền dữ liệu qua cáp Ethernet và cổng Ethernet.</p></div>
      <div class="mini"><span class="ic">📶</span><b>Wi-Fi (không dây)</b><p>Dùng <strong>sóng vô tuyến</strong> để truyền và nhận tín hiệu. Sóng vô tuyến tương tự sóng điện thoại, sóng truyền hình, sóng Radio…</p></div></div>
      ${fig('wifi.jpg', 'Wi-Fi kết nối nhiều thiết bị không cần dây')}</div></div>

  <div class="card"><h3><span class="st">1</span>Thí nghiệm: Wi-Fi yếu dần khi ra xa</h3>
    <div class="sim">
      <div class="ctl"><label for="dist">📏 Khoảng cách đến router: <b id="distN">3</b> m</label></div>
      <input type="range" id="dist" min="1" max="40" value="3">
      <div class="ctl"><button class="sw" id="wall">🧱 Có tường bê tông chắn</button><button class="sw" id="noise">📡 Nhiều thiết bị phát sóng quanh đó</button></div>
      <div class="gauges">
        <div class="gauge"><div class="gl"><span>📶 Wi-Fi · tốc độ</span><b id="w1t"></b></div><div class="gb"><i id="w1"></i></div></div>
        <div class="gauge"><div class="gl"><span>📶 Wi-Fi · ổn định</span><b id="w2t"></b></div><div class="gb"><i id="w2"></i></div></div>
        <div class="gauge"><div class="gl"><span>🔌 Ethernet · tốc độ</span><b id="e1t"></b></div><div class="gb"><i id="e1"></i></div></div>
        <div class="gauge"><div class="gl"><span>🔌 Ethernet · ổn định</span><b id="e2t"></b></div><div class="gb"><i id="e2"></i></div></div>
      </div>
      <div class="verdict" id="vd"></div></div></div>

  <div class="card"><h3>So sánh</h3>
    <table class="cmp"><tr><th>Đặc điểm</th><th>🔌 Ethernet</th><th>📶 Wi-Fi</th></tr>
      <tr><td>Tốc độ</td><td>Rất cao</td><td>Cao nhưng không bằng Ethernet</td></tr>
      <tr><td>Độ ổn định</td><td>Ổn định, ít bị nhiễu sóng</td><td>Kém ổn định, bị ảnh hưởng bởi nhiễu sóng</td></tr>
      <tr><td>Độ tin cậy, bảo mật, độ trễ</td><td>Tin cậy, bảo mật cao; ít độ trễ</td><td>Kém an toàn hơn; độ trễ nhiều hơn</td></tr>
      <tr><td>Chi phí</td><td>Thấp: thiết bị và cáp tương đối rẻ</td><td>—</td></tr></table></div>

  <div class="card"><h3><span class="st">2</span>Đặc điểm này thuộc kết nối nào?</h3><div id="m2sort"></div></div>

  <div class="card"><h3>Hai chế độ kết nối không dây</h3>
    <div class="cols">
      <div class="mini"><span class="ic">🔁</span><b>Ad-hoc</b><p>Các thiết bị kết nối <strong>trực tiếp với nhau</strong> bằng Wi-Fi, không qua thiết bị trung gian.</p></div>
      <div class="mini"><span class="ic">🛰️</span><b>Infrastructure</b><p>Các thiết bị kết nối, liên lạc với nhau thông qua <strong>Router</strong> hoặc <strong>điểm truy cập (Access Point)</strong> và kết nối với các hệ thống khác trên mạng <strong>LAN có dây</strong> thông qua Router.</p></div></div>
    <div class="key am"><b>Lưu ý:</b> Kết nối Ad-hoc là kết nối rất <b>KHÔNG an toàn</b>.</div></div>

  <div class="card"><h3>🗺️ Bản đồ mạng</h3>
    <p style="margin-top:0">Chọn chế độ rồi bấm vào từng thiết bị để xem vai trò của nó.</p>
    <div class="ctl"><button class="sw on" data-mode="infra">🛰️ Infrastructure</button><button class="sw" data-mode="adhoc">🤝 Ad-hoc</button></div>
    <svg id="netmap" viewBox="0 0 760 400" role="img" aria-label="Bản đồ mạng"></svg>
    <div class="verdict" id="mapInfo" style="background:var(--okbg)"></div></div>

  <div class="card"><h3><span class="st">3</span>Luyện nhanh: Ad-hoc hay Infrastructure?</h3><div id="m2mode"></div></div>


  <div class="card"><h3>LAN và WLAN</h3>
    <div class="cols">
      <div class="mini"><span class="ic">🏫</span><b>LAN (Local Area Network)</b><p>Mạng cục bộ: kết nối các thiết bị trong một <strong>phạm vi nhỏ</strong> như một phòng học, ngôi nhà, trường học hay văn phòng. Thường nối bằng <strong>cáp Ethernet</strong> qua Switch/Router; máy tính cần có <strong>Card mạng NIC</strong>.</p></div>
      <div class="mini"><span class="ic">📶</span><b>WLAN (Wireless LAN)</b><p>Mạng cục bộ <strong>không dây</strong>: cũng là mạng trong phạm vi nhỏ nhưng dùng <strong>sóng vô tuyến (Wi-Fi)</strong> thay cho dây cáp. Thiết bị cần có <strong>Wireless Adapter</strong>; dùng băng tần 2.4 GHz hoặc 5 GHz.</p></div></div>
    <table class="cmp" style="margin-top:12px"><tr><th>Đặc điểm</th><th>🏫 LAN</th><th>📶 WLAN</th></tr>
      <tr><td>Phạm vi</td><td>Nhỏ: một phòng, một tòa nhà.</td><td>Nhỏ: trong vùng phủ sóng của thiết bị phát.</td></tr>
      <tr><td>Đường truyền</td><td>Cáp Ethernet (có dây).</td><td>Sóng vô tuyến Wi-Fi (không dây).</td></tr>
      <tr><td>Thiết bị cần có</td><td>Card mạng NIC, cáp Ethernet, cổng Ethernet.</td><td>Wireless Adapter (gắn vào khe hoặc cổng USB).</td></tr>
      <tr><td>Đặc điểm</td><td>Ổn định, tốc độ cao, bảo mật tốt.</td><td>Linh hoạt, tiện di chuyển; tín hiệu yếu dần khi ra xa.</td></tr></table>
    <div class="key">WLAN là một loại LAN <b>không dây</b>. Cả hai đều là mạng <b>cục bộ</b>, khác với <b>Internet</b> là mạng toàn cầu.</div></div>

  <div class="card"><h3><span class="st">4</span>Luyện nhanh: LAN hay WLAN?</h3><div id="m2lan"></div></div>

  <div id="m2q" hidden></div>
  ${navBtns(1)}`;

  /* ---- Bản đồ mạng demo ---- */
  const MAPN = {
    net: { e: '☁️', n: 'Internet', i: 'Mạng toàn cầu. Dữ liệu từ các trang web, video, AI… đi về nhà em qua ISP.' },
    modem: { e: '📟', n: 'Modem', i: 'Nối nhà em với ISP và chuyển đổi tín hiệu số ↔ tương tự.' },
    ap: { e: '📡', n: 'Router / AP', i: 'Phát sóng Wi-Fi và nối với mạng LAN có dây. Các thiết bị không dây liên lạc với nhau và ra Internet thông qua nó.' },
    pc: { e: '🖥️', n: 'Máy tính để bàn', i: 'Nối bằng cáp Ethernet (có dây) vào Router: ổn định, tốc độ cao, bảo mật tốt.' },
    lap: { e: '💻', n: 'Laptop', i: 'Có Wireless Adapter nên kết nối Wi-Fi (không dây).' },
    phone: { e: '📱', n: 'Điện thoại', i: 'Đã tích hợp sẵn Wireless Adapter nên dùng Wi-Fi.' },
    tab: { e: '📲', n: 'Máy tính bảng', i: 'Đã tích hợp sẵn Wireless Adapter nên dùng Wi-Fi.' }
  };
  const MAPM = {
    infra: { nodes: { net: [60, 170], modem: [215, 170], ap: [380, 170], pc: [620, 280], lap: [620, 45], phone: [650, 170] },
      links: [['net', 'modem', 0], ['modem', 'ap', 0], ['ap', 'pc', 0], ['ap', 'lap', 1], ['ap', 'phone', 1]],
      msg: '🛰️ Infrastructure: mọi thiết bị kết nối thông qua Router/Access Point, rồi mới ra Internet.' },
    adhoc: { nodes: { lap: [160, 70], phone: [560, 70], tab: [360, 270] },
      links: [['lap', 'phone', 1], ['phone', 'tab', 1], ['tab', 'lap', 1]],
      msg: '🤝 Ad-hoc: các thiết bị nối trực tiếp với nhau bằng Wi-Fi, không có Router/Access Point. Rất KHÔNG an toàn!' }
  };
  let mapMode = 'infra';
  function drawMap(sel) {
    const M = MAPM[mapMode], svg = $('#netmap');
    svg.innerHTML = M.links.map(([a, b, w]) => { const p = M.nodes[a], q = M.nodes[b]; return `<line x1="${p[0]}" y1="${p[1]}" x2="${q[0]}" y2="${q[1]}" stroke="${w ? '#2f6bff' : '#12b5a5'}" stroke-width="5" ${w ? 'stroke-dasharray="3 12" stroke-linecap="round"' : ''}/>`; }).join('') +
      Object.entries(M.nodes).map(([k, [x, y]]) => `<g class="mn${k === sel ? ' on' : ''}" data-k="${k}" tabindex="0" role="button" aria-label="${MAPN[k].n}"><circle cx="${x}" cy="${y}" r="42"/><text x="${x}" y="${y + 12}" text-anchor="middle" font-size="38">${MAPN[k].e}</text><text x="${x}" y="${y + 66}" text-anchor="middle" class="mt">${MAPN[k].n}</text></g>`).join('') +
      `<g font-size="18" class="mt"><line x1="20" y1="378" x2="60" y2="378" stroke="#12b5a5" stroke-width="5"/><text x="68" y="384">Có dây</text><line x1="170" y1="378" x2="210" y2="378" stroke="#2f6bff" stroke-width="5" stroke-dasharray="3 12" stroke-linecap="round"/><text x="218" y="384">Không dây (Wi-Fi)</text></g>`;
    $('#mapInfo').innerHTML = sel ? `<b>${MAPN[sel].e} ${MAPN[sel].n}:</b> ${MAPN[sel].i}` : M.msg;
  }
  $('#netmap').closest('.card').onclick = e => {
    const bt = e.target.closest('[data-mode]'); if (bt) { mapMode = bt.dataset.mode; $$('[data-mode]', e.currentTarget).forEach(x => x.classList.toggle('on', x === bt)); drawMap(); return; }
    const g = e.target.closest('.mn'); if (g && g.closest('#netmap')) drawMap(g.dataset.k);
  };
  drawMap();
  let wall = false, noise = false;
  const cl = x => Math.max(5, Math.min(99, Math.round(x)));
  function draw() {
    const d = +$('#dist').value; $('#distN').textContent = d;
    const ws = cl(95 - d * 1.6 - (wall ? 15 : 0) - (noise ? 20 : 0)), wt = cl(92 - d * 1.2 - (wall ? 10 : 0) - (noise ? 30 : 0));
    [[ws, 'w1'], [wt, 'w2'], [98, 'e1'], [99, 'e2']].forEach(([v, id]) => { const el = $('#' + id); el.style.width = v + '%'; el.className = v < 40 ? 'low' : v < 70 ? 'mid' : ''; $('#' + id + 't').textContent = v + '%'; });
    $('#wall').classList.toggle('on', wall); $('#noise').classList.toggle('on', noise);
    const vd = $('#vd'); const bad = ws < 50 || wt < 50;
    vd.textContent = bad ? '😣 Wi-Fi yếu hẳn đi: tín hiệu càng yếu khi càng xa, hoặc khi bị nhiễu sóng. Ethernet vẫn ổn định!' : '🙂 Wi-Fi vẫn khá tốt khi ở gần. Hãy kéo ra xa hoặc bật nhiễu để so sánh với Ethernet.';
    vd.style.background = bad ? 'var(--badbg)' : 'var(--okbg)';
  }
  $('#dist').oninput = draw; $('#wall').onclick = () => { wall = !wall; draw(); }; $('#noise').onclick = () => { noise = !noise; draw(); };
  draw();

  sorter($('#m2mode'), {
    bins: [{ id: 'adhoc', label: '🔁 Ad-hoc' }, { id: 'infra', label: '🛰️ Infrastructure', cls: 'alt' }],
    cards: [
      { e: '📱', t: 'Hai điện thoại nối trực tiếp với nhau bằng Wi-Fi', bin: 'adhoc', note: 'Nối trực tiếp bằng Wi-Fi hoặc Bluetooth, không qua trung gian: Ad-hoc.' },
      { e: '🛰️', t: 'Laptop kết nối qua Access Point của trường', bin: 'infra', note: 'Kết nối qua điểm truy cập: Infrastructure.' },
      { e: '⚠️', t: 'Kết nối rất không an toàn', bin: 'adhoc', note: 'Ad-hoc là kết nối rất không an toàn.' },
      { e: '📶', t: 'Máy tính nối qua Router Wi-Fi ở nhà', bin: 'infra', note: 'Qua Router: Infrastructure.' },
      { e: '🔗', t: 'Nối được với các hệ thống khác trên mạng LAN có dây qua Router', bin: 'infra', note: 'Infrastructure nối được với mạng LAN có dây thông qua Router.' },
      { e: '🤝', t: 'Các thiết bị liên lạc với nhau mà không cần Router', bin: 'adhoc', note: 'Không cần Router/Access Point: Ad-hoc.' }
    ]
  });

  sorter($('#m2lan'), {
    bins: [{ id: 'lan', label: '🏫 LAN' }, { id: 'wlan', label: '📶 WLAN', cls: 'alt' }],
    cards: [
      { e: '🖥️', t: 'Máy tính phòng tin học nối vào mạng bằng cáp Ethernet', bin: 'lan', note: 'Nối bằng cáp Ethernet vào mạng cục bộ: LAN.' },
      { e: '📱', t: 'Điện thoại kết nối Wi-Fi của lớp học', bin: 'wlan', note: 'Kết nối bằng Wi-Fi: WLAN (mạng cục bộ không dây).' },
      { e: '🔗', t: 'Máy tính cần Card mạng NIC để nối cáp vào mạng', bin: 'lan', note: 'NIC tạo kết nối Ethernet với mạng LAN.' },
      { e: '📡', t: 'Thiết bị cần có Wireless Adapter để tham gia mạng', bin: 'wlan', note: 'Thiết bị tham gia mạng WLAN phải có Wireless Adapter.' },
      { e: '📻', t: 'Dùng sóng vô tuyến ở băng tần 2.4 GHz hoặc 5 GHz', bin: 'wlan', note: 'Mạng WLAN dùng băng tần 2.4 GHz hoặc 5 GHz.' },
      { e: '🔌', t: 'Cắm cáp vào cổng Ethernet trên Switch', bin: 'lan', note: 'Cáp và cổng Ethernet thuộc mạng LAN có dây.' }
    ]
  });

  sorter($('#m2sort'), {
    bins: [{ id: 'eth', label: '🔌 Ethernet (có dây)' }, { id: 'wifi', label: '📶 Wi-Fi (không dây)', cls: 'alt' }],
    cards: [
      { e: '🧘', t: 'Ổn định, ít bị ảnh hưởng bởi nhiễu sóng', bin: 'eth', note: 'Ethernet ít bị nhiễu sóng bên ngoài.' },
      { e: '🚀', t: 'Tốc độ truyền dữ liệu rất cao', bin: 'eth', note: 'Ethernet thường nhanh hơn Wi-Fi.' },
      { e: '🛡️', t: 'Độ tin cậy và bảo mật cao hơn', bin: 'eth', note: 'Cáp Ethernet bền và ít sự cố.' },
      { e: '💰', t: 'Thiết bị và cáp tương đối rẻ', bin: 'eth', note: 'Ethernet có chi phí thấp.' },
      { e: '🏃', t: 'Tốc độ cao nhưng không bằng Ethernet', bin: 'wifi', note: 'Wi-Fi nhanh nhưng thường chậm hơn Ethernet.' },
      { e: '📻', t: 'Bị ảnh hưởng bởi nhiễu sóng', bin: 'wifi', note: 'Wi-Fi kém ổn định vì dùng sóng vô tuyến.' },
      { e: '⏱️', t: 'Kém an toàn hơn, độ trễ nhiều hơn', bin: 'wifi', note: 'Wi-Fi có độ trễ nhiều hơn Ethernet.' },
      { e: '📉', t: 'Tín hiệu yếu dần khi ra xa thiết bị phát', bin: 'wifi', note: 'Càng xa thiết bị phát, tín hiệu Wi-Fi càng yếu.' }
    ], onDone() { revealQuiz('#m2q', ['lanWhat', 'wlanWhat', 'matchLanWlan', 'wifiTech', 'adhocSafe', 'infraMode', 'signalDistance', 'wiredWirelessTwo', 'wiredWirelessYN', 'wiredAdvantages', 'adhoc', 'phoneInternet'], 1); }
  });
}

/* ============================================================
   NHIỆM VỤ 3 — Băng tần & Bluetooth
   (wifiBand, bluetoothUse, bluetoothStep, bluetoothPairTF, bluetoothStranger, publicWifi)
   ============================================================ */
function m3(root) {
  root.innerHTML = head(2, 'Băng tần Wi-Fi và Bluetooth', 'Sóng Wi-Fi có hai băng tần. Bluetooth dùng để ghép nối phụ kiện. Cả hai đều cần dùng an toàn.') + `
  <div class="card"><h3><span class="st">1</span>Băng tần</h3>
    <div class="split"><div>
      <div class="key"><b>Băng tần</b> là dải tần số của sóng điện từ dùng để thu, phát tín hiệu liên lạc giữa các thiết bị không dây. Mạng WLAN dùng một trong hai băng tần sóng Radio: <b>2.4 GHz</b> hoặc <b>5 GHz</b>. Tín hiệu càng yếu khi càng xa thiết bị phát. Các vật cản như <b>sàn bê tông, tường bê tông</b>… có thể làm giảm tín hiệu Radio.</div>
      <div class="modes" id="band"><button class="on" data-b="24">2.4 GHz</button><button data-b="5">5 GHz</button></div>
      <div class="gauges"><div class="gauge"><div class="gl"><span>📏 Phạm vi phủ sóng</span><b id="b1t"></b></div><div class="gb"><i id="b1"></i></div></div>
        <div class="gauge"><div class="gl"><span>⚡ Tốc độ</span><b id="b2t"></b></div><div class="gb"><i id="b2"></i></div></div></div>
      <p id="bnote" style="margin:4px 0 0;color:var(--mute)"></p></div>
      ${fig('bang-tan.png', 'Băng tần 2.4GHz và 5GHz trên router')}</div>
    <div class="key am">Phần so sánh phạm vi và tốc độ giữa hai băng tần là kiến thức mở rộng giúp em chọn băng tần phù hợp.</div></div>

  <div class="card"><h3><span class="st">2</span>Bluetooth</h3>
    <div class="key">Bluetooth là công nghệ không dây dùng để kết nối thiết bị như máy tính/điện thoại với phụ kiện hỗ trợ Bluetooth như <b>tai nghe, chuột, bàn phím</b>… Các thiết bị và phụ kiện phải được <b>ghép nối (Paired)</b> với nhau trước khi giao tiếp.</div>
    ${figs([['loa-bluetooth.png', 'Loa'], ['tai-nghe-bluetooth.png', 'Tai nghe'], ['dien-thoai-bluetooth.png', 'Điện thoại']])}
    <p style="font-weight:700">Hãy bấm các bước ghép nối tai nghe Bluetooth theo đúng thứ tự:</p><div id="m3o"></div></div>

  <div class="card"><h3><span class="st">3</span>Rủi ro cần biết</h3>
    <div class="split"><div class="cols" style="grid-template-columns:1fr">
      <div class="mini"><span class="ic">☕</span><b>Wi-Fi công cộng không bảo mật</b><p>Kết nối Wi-Fi lạ, không mật khẩu ở quán cà phê, sân bay… có thể bị kẻ xấu lấy email, tài khoản ngân hàng, mật khẩu.</p></div>
      <div class="mini"><span class="ic">🚉</span><b>Bluetooth lạ ghép nối</b><p>Đồng ý ghép nối với thiết bị lạ có thể làm lộ ảnh, danh bạ, tin nhắn, vị trí.</p></div></div>
      ${fig('rui-ro.jpg', 'Wi-Fi và Bluetooth: tiện lợi nhưng tiềm ẩn rủi ro đánh cắp dữ liệu')}</div></div>
  <div id="m3q" hidden></div>
  ${navBtns(2)}`;

  const B = { 24: { r: 85, s: 60, n: '2.4 GHz: sóng đi xa và xuyên tường tốt hơn, nhưng tốc độ thấp hơn.' }, 5: { r: 55, s: 92, n: '5 GHz: tốc độ cao hơn, nhưng phạm vi phủ sóng ngắn hơn, nên ngồi gần router.' } };
  function band(k) {
    const v = B[k]; $('#b1').style.width = v.r + '%'; $('#b2').style.width = v.s + '%'; $('#b1t').textContent = v.r + '%'; $('#b2t').textContent = v.s + '%'; $('#bnote').textContent = v.n;
    $$('#band button').forEach(b => b.classList.toggle('on', b.dataset.b === k));
  }
  $('#band').onclick = e => { const b = e.target.closest('button'); if (b) band(b.dataset.b); }; band('24');
  orderGame($('#m3o'), ['Bật Bluetooth trên máy tính xách tay', 'Đặt tai nghe vào chế độ khám phá (Discovery Mode)', 'Máy tính tìm kiếm và chọn tên tai nghe', 'Ghép nối (Pair) và xác nhận để sử dụng'],
    () => revealQuiz('#m3q', ['wifiBand', 'obstacle', 'bluetoothUse', 'bluetoothStep', 'bluetoothPairTF', 'bluetoothStranger', 'publicWifi'], 2));
}

/* ============================================================
   NHIỆM VỤ 4 — Công nghệ kết nối & lựa chọn thích hợp
   (matchNetTech, useWireless, useWired)
   ============================================================ */
const PICKS = [
  { t: 'Chiếc điện thoại thông minh muốn vào mạng (không có cổng Ethernet).', a: 1, why: 'Điện thoại không có cổng Ethernet nên dùng kết nối không dây (Wi-Fi).' },
  { t: 'Máy tính để bàn trong phòng máy có sẵn ổ cắm mạng LAN, cần đường truyền ổn định.', a: 0, why: 'Có cổng Ethernet và hạ tầng LAN đáp ứng nhu cầu → dùng kết nối có dây.' },
  { t: 'Laptop mỏng không có cổng Ethernet, em muốn ngồi học ngoài sân.', a: 1, why: 'Không có cổng Ethernet và cần di chuyển → dùng không dây.' },
  { t: 'Máy chủ của trường cần tốc độ cao, ổn định và bảo mật.', a: 0, why: 'Ethernet nhanh, ổn định và bảo mật hơn → dùng có dây.' },
  { t: 'Máy tính bảng đặt trên ghế sofa, có khả năng kết nối Wi-Fi.', a: 1, why: 'Thiết bị có khả năng kết nối Wi-Fi → dùng không dây.' }
];
function m4(root) {
  root.innerHTML = head(3, 'Công nghệ kết nối mạng và cách chọn phù hợp', 'Từ nhà cung cấp Internet đến thiết bị của em là cả một chặng đường. Sau đó hãy chọn đúng kiểu kết nối.') + `
  <div class="card"><h3>Các công nghệ chính</h3><div class="cols">
    <div class="mini"><img class="mini-img" src="img/dsl-phone.jpg" alt="Điện thoại bàn"><b>Digital Subscriber Line (DSL)</b><p>Công nghệ mạng chạy trên đường dây điện thoại.</p></div>
    <div class="mini"><img class="mini-img" src="img/cable-tv.jpg" alt="Ti vi"><b>Cable Service</b><p>Công nghệ mạng chạy trên cáp đồng trục của TV.</p></div>
    <div class="mini"><img class="mini-img" src="img/cap-ethernet.jpg" alt="Cáp Ethernet"><b>Ethernet</b><p>Kết nối có dây trong mạng cục bộ, nhanh hơn Wi-Fi, tin cậy và bảo mật hơn.</p></div>
    <div class="mini"><img class="mini-img" src="img/card-nic.jpg" alt="Card mạng"><b>Network Adapter</b><p>Bảng mạch cho phép máy tính để bàn kết nối với mạng.</p></div>
    <div class="mini"><img class="mini-img" src="img/modem.jpg" alt="Modem"><b>Modem</b><p>Gửi và nhận thông tin giữa nhà em và ISP qua đường dây điện thoại, cáp quang hoặc cáp đồng trục TV.</p></div></div></div>

  <div class="card"><h3><span class="st">1</span>Từ ISP đến thiết bị của em</h3><div id="m4s"></div></div>
  <div class="card"><h3><span class="st">2</span>Em chọn kết nối nào?</h3><div id="pick"></div></div>
  <div id="m4q" hidden></div>
  ${navBtns(3)}`;

  stepper($('#m4s'), [
    { e: '🏢', t: 'ISP cung cấp Internet', d: 'Nhà cung cấp dịch vụ Internet (như Viettel, FPT, VNPT) đưa Internet đến nhà em.' },
    { e: '🛣️', t: 'Đường truyền vào nhà', d: 'Internet đi vào nhà qua đường dây điện thoại (DSL), cáp đồng trục TV (Cable) hoặc cáp quang.' },
    { e: '🔁', t: 'Modem', d: 'Modem gửi và nhận thông tin giữa nhà em và ISP, chuyển đổi tín hiệu số ↔ tương tự.' },
    { e: '📶', t: 'Wi-Fi hoặc cáp Ethernet', d: 'Tín hiệu đến thiết bị bằng sóng Wi-Fi (không dây) hoặc cáp Ethernet (có dây).' },
    { e: '💻', t: 'Network Adapter / NIC', d: 'Bảng mạch mạng trong thiết bị của em nhận tín hiệu để em vào được Internet.' }
  ]);

  let si = 0;
  function pick() {
    if (si >= PICKS.length) { $('#pick').innerHTML = `<div class="fb ok">🎉 Em đã chọn đúng kiểu kết nối cho cả ${PICKS.length} tình huống!</div>`; revealQuiz('#m4q', ['matchNetTech', 'useWireless', 'useWired'], 3); return; }
    const s = PICKS[si];
    $('#pick').innerHTML = `<div class="scn">Tình huống ${si + 1}/${PICKS.length}: ${esc(s.t)}</div><div class="dock"><button data-i="0">🔌 Có dây (Ethernet)</button><button data-i="1">📶 Không dây (Wi-Fi)</button></div><div id="pfb"></div>`;
    $('#pick .dock').onclick = e => {
      const b = e.target.closest('button'); if (!b || b.disabled) return;
      if (+b.dataset.i === s.a) { b.classList.add('right'); $$('#pick .dock button').forEach(x => x.disabled = true); $('#pfb').innerHTML = `<div class="fb ok">✅ ${esc(s.why)}</div>`; si++; setTimeout(pick, 1600); }
      else { b.classList.add('wrong'); b.disabled = true; shake($('#pick .dock')); $('#pfb').innerHTML = `<div class="fb no">Chưa phù hợp, thử lại nhé.</div>`; }
    };
  }
const pk = $('#pick'), lockPk = () => { pk.style.minHeight = measureMax(pk, '', PICKS.map((s, k) => `<div class="scn">Tình huống ${k + 1}/${PICKS.length}: ${esc(s.t)}</div><div class="dock"><button>🔌 Có dây (Ethernet)</button><button>📶 Không dây (Wi-Fi)</button></div><div class="fb ok">✅ ${esc(s.why)}</div>`)) + 'px'; };  lockPk(); onResizeLock(pk, () => { pk.style.minHeight = ''; lockPk(); });
  pick();
}

/* ============================================================
   NHIỆM VỤ 5 — Khắc phục sự cố mạng
   (checkInternet, airplane, aiDoThree, aiDontTF)
   ============================================================ */
function m5(root) {
  root.innerHTML = head(4, 'Khắc phục sự cố mạng', 'Máy của em báo "không có Internet". Hãy tự kiểm tra các bước đơn giản, an toàn trước nhé.') + `
  <div class="card"><h3>AI hỗ trợ kiểm tra kết nối mạng</h3>
    <div class="key">AI có thể gợi ý các bước kiểm tra. Em chỉ nên tự làm những việc <b>đơn giản và an toàn</b>: kiểm tra biểu tượng Wi-Fi, khởi động lại trình duyệt, kiểm tra Chế độ Máy bay. <b>Không tự ý</b> đổi cài đặt mạng, nhập lại mật khẩu Wi-Fi hay cài ứng dụng sửa lỗi.</div>
    ${fig('ai-khac-phuc.jpg', 'Nên làm (AI gợi ý) và không nên tự ý làm (cảnh báo)')}</div>

  <div class="card"><h3><span class="st">1</span>Sửa lỗi mạng trên máy tính</h3>
    <p style="margin-top:0" id="round"></p>
    <div class="laptop"><div class="scr"><div class="st" id="scrT"></div><p id="scrD" style="margin:6px 0 0;color:var(--mute)"></p></div>
      <div class="tray" id="tray">
        <button data-a="air">✈️ Chế độ Máy bay</button><button data-a="wifi">📶 Wi-Fi</button><button data-a="restart">🔄 Khởi động lại trình duyệt</button>
        <button data-a="open" style="border-color:var(--blue)">🌐 Mở trình duyệt</button></div>
      <div class="tray"><button class="warn" data-a="dns">⚙️ Đổi DNS/IP</button><button class="warn" data-a="pass">🔑 Nhập lại mật khẩu Wi-Fi</button><button class="warn" data-a="fix">🛠️ Cài ứng dụng sửa lỗi</button></div></div>
    <div id="lfb"></div></div>

  <div class="card" id="m5c" hidden><h3><span class="st">2</span>Nên làm hay không nên tự ý làm?</h3><div id="m5sort"></div></div>
  <div id="m5q" hidden></div>
  ${navBtns(4)}`;

  const faults = shuffle(['air', 'wifi', 'browser']); let r = 0, air, wifiOff, frozen, tries;
  function setup() {
    air = faults[r] === 'air'; wifiOff = faults[r] === 'wifi'; frozen = faults[r] === 'browser'; tries = 0;
    $('#round').innerHTML = `<b>Lần ${r + 1} / 3:</b> Em không vào được Internet. Hãy kiểm tra rồi bấm <b>Mở trình duyệt</b> để thử lại.`;
    $('#lfb').innerHTML = ''; paint();
  }
  function paint() {
    $('[data-a=air]').classList.toggle('on', air); $('[data-a=wifi]').classList.toggle('on', wifiOff);
    $('[data-a=air]').textContent = air ? '✈️ Chế độ Máy bay: BẬT' : '✈️ Chế độ Máy bay: tắt';
    $('[data-a=wifi]').textContent = wifiOff ? '📶 Wi-Fi: TẮT' : '📶 Wi-Fi: bật';
    $('#scrT').innerHTML = '<span class="status-bad">❌ Không có Internet</span>'; $('#scrD').textContent = frozen ? 'Trình duyệt đang không phản hồi…' : 'Hãy kiểm tra và thử lại.';
  }
  $('#tray').parentElement.onclick = e => {
    const b = e.target.closest('button'); if (!b) return; const a = b.dataset.a, fb = $('#lfb');
    if (r >= 3) return;
    if (a === 'air') { air = !air; paint(); }
    else if (a === 'wifi') { wifiOff = !wifiOff; paint(); }
    else if (a === 'restart') { frozen = false; paint(); fb.innerHTML = '<div class="fb ok">🔄 Đã đóng hoàn toàn trình duyệt và mở lại.</div>'; }
    else if (a === 'dns' || a === 'pass' || a === 'fix') { shake($('.laptop')); fb.innerHTML = '<div class="fb no">🚫 Không tự ý làm việc này, dù AI có gợi ý! Nguy cơ bảo mật cao: hãy hỏi thầy cô hoặc người lớn.</div>'; }
    else if (a === 'open') {
      if (!air && !wifiOff && !frozen) {
        $('#scrT').innerHTML = '<span class="status-ok">✅ Đã kết nối Internet!</span>'; $('#scrD').textContent = 'Trang web đã tải xong.';
        fb.innerHTML = '<div class="fb ok">🎉 Em đã khắc phục được sự cố!</div>'; r++;
        if (r < 3) setTimeout(setup, 1500); else { $('#round').innerHTML = '<b>🎉 Đã sửa xong cả 3 lần!</b>'; $('#m5c').hidden = false; startSort(); }
      } else {
        tries++; shake($('.laptop'));
        fb.innerHTML = '<div class="fb no">❌ Vẫn không vào được trang web.</div>' + (tries >= 2 ? '<div class="fb hint">💡 Gợi ý: kiểm tra biểu tượng Wi-Fi, Chế độ Máy bay và trình duyệt.</div>' : '');
      }
    }
  };
  let sortStarted = false;
  function startSort() {
    if (sortStarted) return; sortStarted = true;
    sorter($('#m5sort'), {
      bins: [{ id: 'do', label: '✅ Nên làm' }, { id: 'dont', label: '🚫 Không nên tự ý làm', cls: 'alt' }],
      cards: [
        { e: '📶', t: 'Kiểm tra biểu tượng Wi-Fi', bin: 'do', note: 'Việc đơn giản và an toàn.' },
        { e: '🔄', t: 'Đóng hoàn toàn trình duyệt và mở lại', bin: 'do', note: 'Khởi động lại trình duyệt là an toàn.' },
        { e: '✈️', t: 'Đảm bảo Chế độ Máy bay đã tắt', bin: 'do', note: 'Chế độ Máy bay tắt các kết nối không dây.' },
        { e: '⚙️', t: 'Thay đổi cài đặt mạng (DNS, IP)', bin: 'dont', note: 'Dù AI gợi ý, tuyệt đối không tự ý đổi cài đặt mạng.' },
        { e: '🔑', t: 'Nhập lại mật khẩu Wi-Fi', bin: 'dont', note: 'Không tự ý làm, ngay cả khi được nhắc.' },
        { e: '🛠️', t: 'Cài ứng dụng sửa lỗi', bin: 'dont', note: 'Nguy cơ bảo mật cao, không tự ý cài.' }
      ], onDone() { revealQuiz('#m5q', ['checkInternet', 'airplane', 'aiDoThree', 'aiDontTF'], 4); }
    });
  }
  setup();
}

/* ============================================================
   NHIỆM VỤ 6 — Kiểm tra cuối bài
   ============================================================ */
function m6(root) {
  root.innerHTML = head(5, 'Kiểm tra cuối bài', '15 câu ngẫu nhiên trong toàn bộ bài. Hoàn thành để nhận kết quả.') +
    `<div id="m6q"></div>${navBtns(5)}`;
  const q = $("#m6q"), pick = () => shuffle(Object.keys(QUIZ)).slice(0, 15), keys = state.keys[5] || pick();
  if (state.done[5] && state.res[5]) doneCard(q, 5, () => runQuiz(q, pick(), 5, "Bài kiểm tra tổng hợp")); else runQuiz(q, keys, 5, "Bài kiểm tra tổng hợp");
}

const RENDER = [m1, m2, m3, m4, m5, m6];

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
  const root = document.documentElement, btn = $('#themeBtn'), KEY = 'k6b09-theme';
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

(function () {
  'use strict';

  var TOTAL_POINTS = 1000;  // tổng điểm, chia đều cho các câu hỏi
  var PENALTY = 20;        // mỗi gợi ý trừ 20 điểm của câu đó
  var PASS = 900;          // điểm để vượt qua
  var SAVE_KEY = 'spark3-ontap6-save';
  var MIN_POINTS = 20;
  var HINTS_TOTAL = 3;
  var BEST_KEY = 'spark3-ontap6-best';

  var CD = ['Cộng tác', 'Cộng tác không đồng bộ', 'Cộng tác đồng bộ', 'Đồng tác giả'];
  var KDB = 'Cộng tác không đồng bộ', DB = 'Cộng tác đồng bộ', DTG = 'Đồng tác giả';

  /* ---------- Ngân hàng câu hỏi theo từng bài ---------- */
  var ISLANDS = [
    {
      name: 'Đảo Kết Nối', lesson: 'Bài 27 · Cộng tác', icon: '🏝️',
      intro: 'Tấm bia đá ở cổng đảo khắc: "Muốn lấy mảnh bản đồ, hãy hiểu cách mọi người làm việc cùng nhau!"',
      pool: [
        { type: 'match', q: 'Ghép mỗi phát biểu với thuật ngữ phù hợp.',
          s: 'Bi đọc dòng chữ trên bia đá và nhờ em ghép các thẻ lại.',
          why: 'Cộng tác là cùng tạo ra sản phẩm. Giao tiếp đồng bộ là làm cùng một thời gian, còn không đồng bộ là làm ở những thời gian khác nhau.',
          terms: ['Cộng tác', 'Giao tiếp đồng bộ', 'Giao tiếp không đồng bộ'],
          items: [
            { t: 'Mọi người cùng tạo ra sản phẩm.', a: 0 },
            { t: 'Mọi người cùng làm việc trong cùng một thời gian.', a: 1 },
            { t: 'Mọi người cùng dùng chung một tài liệu để tạo ra sản phẩm ở những thời gian khác nhau.', a: 2 }
          ] },
        { type: 'match', q: 'Di chuyển từng thuật ngữ sang phát biểu tương ứng.',
          s: 'Cánh cửa gỗ có ba ổ khóa, mỗi ổ cần một thuật ngữ.',
          why: 'Không đồng bộ: dùng tài liệu chung, làm vào thời gian riêng. Đồng bộ: cùng hợp tác cùng lúc. Đồng tác giả: nhiều người cùng tạo ra một sản phẩm.',
          terms: [KDB, DB, DTG],
          items: [
            { t: 'Một quy trình mà nhiều người sử dụng các tài liệu dùng chung để tạo ra một sản phẩm theo thời gian riêng.', a: 0 },
            { t: 'Một quy trình mà nhiều người hợp tác cùng lúc để tạo ra một sản phẩm.', a: 1 },
            { t: 'Một quy trình mà nhiều người cùng tạo ra một sản phẩm.', a: 2 }
          ] },
        { type: 'match', q: 'Di chuyển thuật ngữ sang tình huống phù hợp.',
          s: 'Mimi đưa em ba bức tranh vẽ các bạn nhỏ đang làm việc nhóm.',
          why: 'Dùng tài liệu chung → không đồng bộ. Ngồi cùng nhau thiết kế → đồng bộ. Vừa hợp tác ở lớp vừa làm riêng ở nhà → đồng tác giả.',
          terms: [KDB, DB, DTG],
          items: [
            { t: 'Em và năm học sinh khác làm bài tập nhóm bằng một tài liệu dùng chung.', a: 0 },
            { t: 'Em và một bạn cùng lớp ngồi trong thư viện để cùng thiết kế trang Web cho lớp.', a: 1 },
            { t: 'Em và một bạn cùng lớp tạo một ứng dụng: hợp tác ở lớp và làm việc một mình khi ở nhà.', a: 2 }
          ] },
        { type: 'match', q: 'Di chuyển mỗi kiểu hợp tác kĩ thuật số sang ví dụ tương ứng.',
          s: 'Trên bãi cát có ba chiếc hộp thư, mỗi hộp cần đúng một kiểu hợp tác.',
          why: 'Gửi Email theo lịch → không đồng bộ (không cần cùng lúc). Hội thảo Video → đồng bộ (cùng lúc). Mỗi người làm một phần của sản phẩm chung → đồng tác giả.',
          terms: [KDB, DB, DTG],
          items: [
            { t: 'Em lên lịch gửi Email sau giờ học để hỏi bạn về mẹo cải thiện bài tập.', a: 0 },
            { t: 'Em tổ chức hội thảo Video cho đội bóng chuyền để bàn các chiến thuật mới.', a: 1 },
            { t: 'Em và bạn cùng lớp mỗi người tạo 5 trang chiếu cho bài trình chiếu về động vật hoang dã.', a: 2 }
          ] },
        { type: 'match', q: 'Nối từng ví dụ với khái niệm tương ứng.',
          s: 'Chiếc la bàn chỉ quay khi em nối đúng ba ví dụ cuối cùng.',
          why: 'Cùng chỉnh sửa tài liệu trên mạng → không đồng bộ. Gặp mặt trao đổi → đồng bộ. Gặp nhau rồi mỗi người tự làm phần của mình → đồng tác giả.',
          terms: [KDB, DB, DTG],
          items: [
            { t: 'Em và các bạn cùng chỉnh sửa một tài liệu trên mạng.', a: 0 },
            { t: 'Em và các bạn gặp mặt trong lớp để trao đổi ý tưởng về bài thuyết trình.', a: 1 },
            { t: 'Em và các bạn gặp nhau ở trường, sau đó về nhà mỗi người tự hoàn thành phần việc của mình.', a: 2 }
          ] },
      ]
    },
    {
      name: 'Đảo Hợp Sức', lesson: 'Bài 28 · Lợi ích của cộng tác', icon: '🌋',
      intro: 'Núi lửa đang ngủ! Chỉ khi em kể đúng lợi ích của việc làm việc nhóm, đường lên đỉnh mới mở ra.',
      pool: [
        { type: 'multi', need: 2, q: 'Tùy chọn nào là lợi ích khi cộng tác với người khác? (Chọn 2)',
          s: 'Hai viên đá phát sáng đang chờ em chọn.',
          opts: [['Làm việc một mình.', 0], ['Đa dạng quan điểm.', 1], ['Đồng quan điểm.', 0], ['Tiết kiệm thời gian.', 1]],
          why: 'Làm nhóm giúp có nhiều quan điểm khác nhau và tiết kiệm thời gian.' },
        { type: 'single', q: 'Hành động nào có các lợi ích: tiết kiệm thời gian, khám phá nhiều quan điểm đa dạng và chia công việc theo thế mạnh cá nhân?',
          s: 'Mimi chỉ vào cây cầu dây: "Ai chọn đúng sẽ qua được!"',
          opts: [['Sử dụng một quy trình cộng tác.', 1], ['Hành động của công dân kĩ thuật số tích cực.', 0], ['Áp dụng các công cụ quản lí thông tin.', 0], ['Sử dụng công cụ thu thập dữ liệu.', 0]],
          why: 'Quy trình cộng tác mang lại cả ba lợi ích đó.' },
        { type: 'multi', need: 2, q: 'Rian muốn cộng tác với một nhóm để làm bài tập. Bạn ấy nhận được lợi ích gì? (Chọn 2)',
          s: 'Chú khỉ Rian trên cây gọi: "Giúp tớ chọn với!"',
          opts: [['Đạt được điểm số cao nhất.', 0], ['Chia sẻ bớt khối lượng công việc.', 1], ['Có nhiều quyền kiểm soát hơn đối với bài tập.', 0], ['Nhiều ý tưởng sáng tạo hơn.', 1]],
          why: 'Làm nhóm giúp chia sẻ việc và có thêm nhiều ý tưởng sáng tạo.' },
        { type: 'group', q: 'Chọn "Có" nếu là lợi ích của việc cộng tác và "Không" nếu không phải.',
          s: 'Bốn tảng đá ghi bốn câu, mỗi tảng cần một dấu.',
          choices: ['Có', 'Không'],
          items: [
            { t: 'Dữ liệu có giá trị hơn khi có nhiều người xem nó.', a: 1 },
            { t: 'Chia sẻ khối lượng công việc giúp tiết kiệm thời gian.', a: 0 },
            { t: 'Những quan điểm đa dạng được chia sẻ.', a: 0 },
            { t: 'Nhiệm vụ có thể phù hợp với kĩ năng của mỗi người.', a: 0 }
          ] },
      ]
    },
    {
      name: 'Đảo Học & Chơi', lesson: 'Bài 29 · Cộng tác trong học tập và giải trí', icon: '🏰',
      intro: 'Lâu đài cuối cùng cất giữ mảnh bản đồ thứ ba. Gác cổng hỏi: "Em dùng công nghệ để học và để vui như thế nào?"',
      pool: [
        { type: 'single', q: 'Công nghệ hỗ trợ làm việc từ xa và linh hoạt tại nơi làm việc như thế nào?',
          s: 'Chuông cổng lâu đài ngân lên một câu hỏi.',
          opts: [['Cung cấp các công cụ và phần mềm để cộng tác và liên lạc từ xa.', 1], ['Hạn chế quyền truy cập vào thông tin liên quan đến công việc.', 0], ['Không khuyến khích sử dụng thiết bị di động và máy tính xách tay.', 0], ['Yêu cầu nhân viên phải luôn có mặt tại văn phòng.', 0]],
          why: 'Công nghệ cho phép làm việc và liên lạc từ xa bằng các công cụ, phần mềm.' },
        { type: 'group', q: 'Với mỗi câu về cộng tác kĩ thuật số, chọn Mục đích học tập hoặc Mục đích giải trí.',
          s: 'Ba lá cờ trên tháp: một lá xanh cho học, một lá vàng cho chơi.',
          choices: ['Học tập', 'Giải trí'],
          items: [
            { t: 'Thêm Emoji mặt cười vào tin nhắn của bạn.', a: 1 },
            { t: 'Tham gia hội thảo Video với giáo viên và các bạn cùng lớp.', a: 0 },
            { t: 'Chia sẻ Video hài hước cho bạn cùng lớp về một con gấu tuyết bị trượt trên băng.', a: 1 }
          ] },
        { type: 'group', q: 'Với mỗi tin nhắn, hãy chọn mục đích: Học tập hay Giải trí?',
          s: 'Bi nhặt được bốn mẩu giấy nhắn dưới sàn lâu đài.',
          choices: ['Học tập', 'Giải trí'],
          items: [
            { t: '"Hey tớ thấy cậu ở trung tâm mua sắm hôm nay đó. Lol có BFF mới nha!"', a: 1 },
            { t: '"Cảm ơn cậu đã giúp tớ làm bài tập về nhà hôm nay."', a: 0 },
            { t: 'Rian đang tìm bạn của mình ở trận bóng, nhưng rồi cậu ấy phải "❌".', a: 1 },
            { t: 'Orson bảo rằng bạn ấy sẽ quay lại ngay sau khi nói chuyện với giáo viên.', a: 1 }
          ] },
        { type: 'single', q: 'Ken và Orson đều đang ở nhà. Họ có thể làm bài tập cùng nhau và cùng lúc bằng cách nào?',
          s: 'Hai người bạn của Mimi ở hai đầu đảo muốn cùng học.',
          opts: [['Tạo một hội thảo Video lúc 6 giờ chiều.', 1], ['Chụp ảnh để chia sẻ ở trường.', 0], ['Viết ghi chú cho nhau.', 0], ['Gửi Email vào buổi sáng.', 0]],
          why: 'Hội thảo Video là cách để cùng làm việc cùng lúc dù ở xa nhau.' },
        { type: 'single', q: 'Nếu hai người bạn muốn cùng làm bài tập vào cùng một thời gian thì phải làm thế nào?',
          s: 'Chim hải âu mang đến một lá thư hỏi cách hẹn giờ học chung.',
          opts: [['Gọi hội nghị video vào lúc 5 giờ chiều.', 1], ['Chụp màn hình.', 0], ['Nhập ghi chú.', 0], ['Gửi mail.', 0]],
          why: 'Gọi hội nghị video giúp hai bạn làm việc cùng lúc.' },
        { type: 'single', q: 'Em sẽ sử dụng hội nghị truyền hình như thế nào để cộng tác kĩ thuật số trong một dự án nhóm?',
          s: 'Câu hỏi cuối cùng! Cánh cổng kho báu đã hé mở.',
          opts: [['Để thảo luận về nghiên cứu mà mỗi thành viên đã thu thập.', 1], ['Để theo dõi bất kì liên kết hoặc trang Web hữu ích nào.', 0], ['Để bỏ phiếu ẩn danh về một chủ đề dự án.', 0], ['Để gửi các tập tin lớn cho các thành viên trong nhóm.', 0]],
          why: 'Hội nghị truyền hình giúp các thành viên nói chuyện và thảo luận trực tiếp.' }
      ]
    }
  ];

  /* ---------- Dạng câu hỏi ---------- */
  function buildChoice(q, card) {
    var multi = q.type === 'multi';
    var opts = shuffle(q.opts.map(function (o) { return { t: o[0], c: !!o[1], out: false, on: false }; }));
    var longOpt = opts.some(function (o) { return o.t.length > 40; });
    var wrap = el('div', 'opts' + (multi ? ' multi' : '') + (longOpt ? ' rows' : ''));
    if (multi) card.appendChild(el('div', 'note', 'Chọn đúng ' + q.need + ' đáp án.'));
    var btns = opts.map(function (o) {
      var b = el('button', 'opt');
      b.type = 'button';
      b.appendChild(el('span', 'mark'));
      b.appendChild(el('span', '', o.t));
      b.onclick = function () {
        if (cur.done || o.out) return;
        if (multi) {
          var n = opts.filter(function (x) { return x.on; }).length;
          if (!o.on && n >= q.need) return;
          o.on = !o.on;
        } else {
          opts.forEach(function (x) { x.on = false; });
          o.on = true;
        }
        paint();
      };
      wrap.appendChild(b);
      return b;
    });
    card.appendChild(wrap);
    function paint() {
      opts.forEach(function (o, i) {
        btns[i].classList.toggle('on', o.on);
        btns[i].classList.toggle('out', o.out);
      });
    }
    return {
      check: function () {
        var chosen = opts.filter(function (o) { return o.on; });
        if (chosen.length < (multi ? q.need : 1)) return { empty: multi ? 'Em cần chọn đủ ' + q.need + ' đáp án nhé.' : 'Em hãy chọn một đáp án nhé.' };
        var right = chosen.filter(function (o) { return o.c; }).length;
        return { frac: right / (multi ? q.need : 1) };
      },
      hint: function () {
        if (multi) {
          var c = opts.filter(function (o, i) { return o.c && !btns[i].classList.contains('glow'); });
          if (!c.length) return false;
          btns[opts.indexOf(shuffle(c)[0])].classList.add('glow');
          return true;
        }
        var w = shuffle(opts.filter(function (o) { return !o.c && !o.out; }));
        if (w.length < 2) return false;
        w.slice(0, 2).forEach(function (o) { o.out = true; o.on = false; });
        paint();
        return true;
      },
      reveal: function () {
        opts.forEach(function (o, i) {
          var b = btns[i];
          b.classList.remove('glow', 'on');
          if (o.c) b.classList.add('ok');
          else if (o.on) b.classList.add('bad');
          b.disabled = true;
        });
      }
    };
  }

  function buildGroup(q, card) {
    var rows = shuffle(q.items).map(function (it) { return { it: it, pick: null, locked: false, user: null }; });
    rows.forEach(function (r) {
      var row = el('div', 'row');
      var left = el('div', 'rtext', r.it.t);
      row.appendChild(left);
      var two = el('div', 'two');
      r.btns = q.choices.map(function (ch, i) {
        var b = el('button', '', ch);
        b.type = 'button';
        b.onclick = function () {
          if (cur.done || r.locked) return;
          r.pick = i; paint();
        };
        two.appendChild(b);
        return b;
      });
      row.appendChild(two);
      r.node = row;
      card.appendChild(row);
    });
    function paint() {
      rows.forEach(function (r) {
        r.btns.forEach(function (b, i) {
          b.classList.toggle('on', r.pick === i && !r.locked && !r.shown);
        });
      });
    }
    return {
      check: function () {
        if (rows.some(function (r) { return r.pick == null; })) return { empty: 'Em hãy chọn đáp án cho tất cả các dòng nhé.' };
        var n = 0;
        rows.forEach(function (r) { if (r.locked || r.pick === r.it.a) n++; });
        return { frac: n / rows.length };
      },
      hint: function () {
        var c = rows.filter(function (r) { return !r.locked; });
        if (c.length < 2) return false;
        var r = shuffle(c)[0];
        r.pick = r.it.a; r.locked = true;
        r.node.classList.add('glow');
        r.btns[r.it.a].classList.add('ok');
        paint();
        return true;
      },
      reveal: function () {
        rows.forEach(function (r) {
          var wrong = !r.locked && r.pick !== r.it.a;
          r.shown = true;
          r.btns.forEach(function (b, i) {
            b.disabled = true;
            b.classList.remove('on');
            if (i === r.it.a) b.classList.add('ok');
            else if (wrong && i === r.pick) b.classList.add('bad');
          });
          r.node.classList.remove('glow');
          r.node.classList.add(wrong ? 'wrong' : 'ok');
        });
      }
    };
  }

  function buildMatch(q, card) {
    var rows = shuffle(q.items).map(function (it) { return { it: it, term: null, locked: false, wrong: false, user: null }; });
    var terms = shuffle(q.terms.map(function (t, i) { return { t: t, i: i }; }));
    var selTerm = null, selRow = null, over = false;
    var rowsBox = el('div', ''), tray = el('div', 'tray');
    card.appendChild(el('div', 'note', 'Chạm vào thẻ rồi chạm vào ô trống (hoặc chạm ô trước, thẻ sau). Chạm thẻ đã đặt để lấy lại.'));
    card.appendChild(rowsBox);
    card.appendChild(tray);

    function used(t) { return rows.some(function (r) { return r.term === t; }); }
    function place(r, t) {
      if (r.locked || over || cur.done) return;
      r.term = t; selTerm = null; selRow = null; paint();
    }
    function paint() {
      rowsBox.textContent = '';
      rows.forEach(function (r) {
        var row = el('div', 'row' + (over ? (r.wrong ? ' wrong' : ' ok') : (r.locked ? ' ok' : '')) + (selRow === r ? ' act' : ''));
        var left = el('div', 'rtext', r.it.t);
        if (over && r.wrong) left.appendChild(el('div', 'was', 'Em đã chọn: ' + r.user.t));
        row.appendChild(left);
        row.appendChild(el('div', 'slot' + (r.term ? ' full' : ''), r.term ? r.term.t : 'Đặt thẻ vào đây'));
        row.onclick = function () {
          if (over || cur.done || r.locked) return;
          if (selTerm && !r.term) { place(r, selTerm); return; }
          if (r.term) { r.term = null; selRow = r; selTerm = null; paint(); return; }
          selRow = selRow === r ? null : r; paint();
        };
        rowsBox.appendChild(row);
      });
      tray.textContent = '';
      var free = terms.filter(function (t) { return !used(t); });
      if (over) tray.style.display = 'none';
      else if (!free.length) tray.appendChild(el('span', 'note', 'Đã đặt hết thẻ — bấm Trả lời!'));
      free.forEach(function (t) {
        if (over) return;
        var b = el('button', 'term' + (selTerm === t ? ' sel' : ''), t.t);
        b.disabled = cur.done;
        b.type = 'button';
        b.onclick = function () {
          if (selRow && !selRow.term) { place(selRow, t); return; }
          selTerm = selTerm === t ? null : t; paint();
        };
        tray.appendChild(b);
      });
    }
    paint();
    return {
      check: function () {
        if (rows.some(function (r) { return !r.term; })) return { empty: 'Em hãy đặt thẻ vào tất cả các ô nhé.' };
        var n = 0;
        rows.forEach(function (r) { if (r.locked || r.term.i === r.it.a) n++; });
        return { frac: n / rows.length };
      },
      hint: function () {
        var c = rows.filter(function (r) { return !r.locked; });
        if (c.length < 2) return false;
        var r = shuffle(c)[0];
        r.term = terms.filter(function (t) { return t.i === r.it.a; })[0];
        r.locked = true;
        rows.forEach(function (o) { if (o !== r && o.term === r.term && !o.locked) o.term = null; });
        selTerm = null; selRow = null;
        paint();
        return true;
      },
      reveal: function () {
        rows.forEach(function (r) {
          if (!r.locked && r.term.i !== r.it.a) {
            r.wrong = true; r.user = r.term;
            r.term = terms.filter(function (t) { return t.i === r.it.a; })[0];
          }
        });
        over = true; selTerm = null; selRow = null;
        paint();
      }
    };
  }


  /* ---------- Bài kiểm tra: không trạm, không gợi ý, không hiện đáp án ---------- */
  var TEST_SAVE = 'spark3-ontap6-test-save';
  var TEST_BEST = 'spark3-ontap6-test-best';

  function $(id) { return document.getElementById(id); }
  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  }
  function shuffle(a) {
    a = a.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1)), t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }
  function getBest() { try { return +localStorage.getItem(TEST_BEST) || 0; } catch (e) { return 0; } }
  function setBest(v) { try { localStorage.setItem(TEST_BEST, v); } catch (e) { /* bỏ qua */ } }

  var stage = $('stage');
  var T = null;          // bài kiểm tra hiện tại
  var cur = null;        // câu đang làm

  function save() {
    if (!T) return;
    try {
      localStorage.setItem(TEST_SAVE, JSON.stringify({
        v: 1, ids: T.ids, qi: T.qi, score: T.score, done: T.done, rec: !!T.rec
      }));
    } catch (e) { /* bỏ qua */ }
  }
  function clearSave() { try { localStorage.removeItem(TEST_SAVE); } catch (e) { /* bỏ qua */ } }
  function loadSave() {
    try {
      var d = JSON.parse(localStorage.getItem(TEST_SAVE));
      if (!d || d.v !== 1 || !d.ids || !d.ids.length) return null;
      var qs = d.ids.map(function (p) { return ISLANDS[p[0]] && ISLANDS[p[0]].pool[p[1]]; });
      if (qs.some(function (q) { return !q; })) return null;
      return { ids: d.ids, qs: qs, qi: d.qi, score: d.score, done: !!d.done, rec: !!d.rec };
    } catch (e) { return null; }
  }

  function newTest() {
    var ids = [];
    ISLANDS.forEach(function (is, i) {
      shuffle(is.pool.map(function (_, k) { return k; })).forEach(function (k) { ids.push([i, k]); });
    });
    T = { ids: ids, qs: ids.map(function (p) { return ISLANDS[p[0]].pool[p[1]]; }), qi: 0, score: 0, done: false, rec: false };
    save();
  }

  function qPoints(i) {
    var base = Math.floor(TOTAL_POINTS / T.qs.length), extra = TOTAL_POINTS - base * T.qs.length;
    return base + (i < extra ? 1 : 0);
  }

  function setScore() { $('score').textContent = T ? T.score : 0; }

  function setProgress() {
    setScore();
    $('progress').textContent = T && !T.done ? 'Câu ' + Math.min(T.qi + 1, T.qs.length) + '/' + T.qs.length : '';
  }
  function clear() { stage.textContent = ''; window.scrollTo(0, 0); }

  function showCover() {
    T = null; cur = null; setProgress(); clear();
    var saved = loadSave();
    var c = el('section', 'card cover center');
    c.appendChild(el('div', 'emo', '📝'));
    c.appendChild(el('h1', '', 'Kiểm tra Chủ đề 6'));
    c.appendChild(el('p', '', 'Bài kiểm tra Cộng tác gồm tất cả câu hỏi của Bài 27, 28, 29, xáo trộn thứ tự.'));
    var ul = el('ul', 'rules');
    ['⭐ Tổng tối đa 1000 điểm, chia đều cho các câu hỏi. Cần đạt từ ' + PASS + ' điểm.',
     '🚫 Không có gợi ý. Sau mỗi câu em chỉ biết mình đúng hay sai, đáp án đúng không được hiện.',
     '➡️ Mỗi câu chỉ trả lời một lần. Dù đúng hay sai, em đều được đi tiếp.',
     '💾 Tiến độ được tự động lưu, tải lại trang vẫn làm tiếp được.'
    ].forEach(function (t) { ul.appendChild(el('li', '', t)); });
    c.appendChild(ul);
    var best = getBest();
    if (best) c.appendChild(el('p', '', '🏆 Điểm cao nhất của em: ' + best + '/1000'));
    if (saved) {
      c.appendChild(el('p', '', '💾 Em đang làm dở: đã xong ' + (saved.done ? saved.qs.length : saved.qi) + '/' + saved.qs.length + ' câu.'));
      var go = el('button', 'btn', 'Làm tiếp');
      go.type = 'button';
      go.onclick = function () { T = saved; if (T.done) showResult(); else showQuestion(); };
      c.appendChild(go);
      var fresh = el('button', 'btn alt', 'Làm lại từ đầu');
      fresh.type = 'button';
      fresh.style.marginLeft = '10px';
      fresh.onclick = function () { newTest(); showQuestion(); };
      c.appendChild(fresh);
    } else {
      var b = el('button', 'btn', 'Bắt đầu làm bài');
      b.type = 'button';
      b.onclick = function () { newTest(); showQuestion(); };
      c.appendChild(b);
    }
    stage.appendChild(c);
  }

  function showQuestion() {
    var q = T.qs[T.qi];
    cur = { done: false };
    setProgress(); clear();

    var card = el('section', 'card');
    var head = el('div', 'qhead');
    head.appendChild(el('span', '', 'Câu ' + (T.qi + 1) + '/' + T.qs.length));
    head.appendChild(el('span', 'pill', qPoints(T.qi) + ' điểm'));
    card.appendChild(head);
    card.appendChild(el('div', 'qtext', q.q));

    var api = { single: buildChoice, multi: buildChoice, group: buildGroup, match: buildMatch }[q.type](q, card);

    var msg = el('div', 'msg');
    var foot = el('div', 'foot');
    foot.appendChild(msg);
    var acts = el('div', 'acts');
    var last = T.qi === T.qs.length - 1;
    var btn = el('button', 'btn', 'Trả lời');
    btn.type = 'button';
    acts.appendChild(btn);
    foot.appendChild(acts);
    card.appendChild(foot);
    stage.appendChild(card);

    btn.onclick = function () {
      if (cur.done) return;
      var r = api.check();
      if (r.empty) { msg.className = 'msg bad'; msg.textContent = r.empty; return; }
      cur.done = true;
      T.score += Math.round(qPoints(T.qi) * r.frac);
      setScore();
      // chỉ báo đúng/sai, không hiện đáp án đúng
      msg.className = 'msg ' + (r.frac >= 1 ? 'good' : 'bad');
      msg.textContent = r.frac >= 1 ? '🎉 Chính xác!' : (r.frac > 0 ? '👍 Em trả lời đúng một phần.' : '😅 Chưa đúng rồi.');
      card.classList.add('answered');
      if (last) {
        T.done = true;
        var prev = getBest();
        T.rec = T.score > prev && prev > 0;
        if (T.score > prev) setBest(T.score);
      } else {
        T.qi++;
      }
      save();
      btn.textContent = last ? 'Xem kết quả →' : 'Câu tiếp theo →';
      btn.onclick = function () { if (last) showResult(); else showQuestion(); };
      btn.focus();
    };
  }

  function showResult() {
    cur = null; setProgress(); clear();
    var s = T.score, pass = s >= PASS;
    var c = el('section', 'card center ' + (pass ? 'passed' : 'failed'));
    c.appendChild(el('div', 'piece', pass ? '🏆' : '📚'));
    c.appendChild(el('h2', '', 'Em đã hoàn thành bài kiểm tra!'));
    c.appendChild(el('div', 'verdict ' + (pass ? 'ok' : 'no'), pass ? '✅ ĐẠT' : '❌ CHƯA ĐẠT'));
    var stars = s >= PASS ? 3 : s >= 700 ? 2 : s >= 500 ? 1 : 0;
    c.appendChild(el('div', 'stars', '⭐'.repeat(stars) + '☆'.repeat(3 - stars)));
    c.appendChild(el('p', 'bigscore', s + ' / 1000 điểm'));
    c.appendChild(el('p', 'note', 'Điểm đạt: ' + PASS + '/1000'));
    c.appendChild(el('p', '', pass
      ? 'Tuyệt vời! Em nắm rất chắc kiến thức về cộng tác.'
      : 'Em hãy ôn lại Bài 27, 28, 29 bằng trò chơi ôn tập rồi làm lại bài kiểm tra nhé!'));
    c.appendChild(el('p', '', T.rec ? '🎉 Kỉ lục mới!' : '🏆 Điểm cao nhất: ' + getBest() + '/1000'));
    var again = el('button', 'btn', 'Làm lại');
    again.type = 'button';
    again.onclick = function () { newTest(); showQuestion(); };
    var rev = el('a', 'btn alt', 'Ôn tập');
    rev.href = 'index.html';
    var home = el('a', 'btn alt', 'Danh sách bài');
    home.href = '../../../spark-lv3.html';
    [rev, home].forEach(function (a) { a.style.cssText = 'display:inline-block;text-decoration:none;margin-left:10px;margin-top:8px'; });
    c.appendChild(again); c.appendChild(rev); c.appendChild(home);
    stage.appendChild(c);
  }

  showCover();
})();

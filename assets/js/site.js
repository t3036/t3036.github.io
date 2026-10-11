/* Nạp header/footer dùng chung cho các trang gốc (index, spark-lv*, level*, games, update),
   rồi mới chạy script.js. Đặt <div data-include="site-header"></div> và
   <div data-include="site-footer"></div> vào trang.
   Liên kết ẩn khi nhấp đúp chuột phải vào "SnowT" nằm trong site-footer.html.
   Cần chạy qua http(s) (GitHub Pages hoặc Live Server), không mở trực tiếp file://. */
(function(){
  const base = new URL('../', document.currentScript.src);
  const slots = Array.from(document.querySelectorAll('[data-include]'));

  Promise.all(slots.map(slot =>
    fetch(new URL('partials/' + slot.dataset.include + '.html', base)).then(r => {
      if(!r.ok) throw new Error(slot.dataset.include + ': ' + r.status);
      return r.text();
    })
  )).then(parts => {
    slots.forEach((slot, i) => {
      const tpl = document.createElement('template');
      tpl.innerHTML = parts[i].trim();
      slot.replaceWith(tpl.content);
    });
    const s = document.createElement('script');
    s.src = new URL('js/script.js', base).href;
    document.body.appendChild(s);
  }).catch(err => {
    document.body.insertAdjacentHTML('afterbegin',
      '<p style="padding:1rem;font:16px sans-serif">Không tải được giao diện (' + err.message +
      '). Hãy mở bằng Live Server hoặc GitHub Pages.</p>');
  });
})();

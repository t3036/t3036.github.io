/* Nạp header/footer dùng chung rồi mới chạy lesson.js (lesson.js cần các phần tử này).
   Cần chạy qua http(s) (GitHub Pages hoặc Live Server), không mở trực tiếp file://. */
(function(){
  const base = new URL('../', document.currentScript.src);
  const get = name => fetch(new URL('partials/' + name + '.html', base)).then(r => {
    if(!r.ok) throw new Error(name + ': ' + r.status);
    return r.text();
  });

  Promise.all([get('lesson-header'), get('lesson-footer')]).then(([head, foot]) => {
    const app = document.getElementById('app');
    app.insertAdjacentHTML('afterbegin', head);
    app.insertAdjacentHTML('beforeend', foot);
    const s = document.createElement('script');
    s.src = new URL('js/lesson.js', base).href;
    document.body.appendChild(s);
  }).catch(err => {
    document.body.insertAdjacentHTML('afterbegin',
      '<p style="padding:1rem;font:16px sans-serif">Không tải được giao diện bài học (' + err.message +
      '). Hãy mở bằng Live Server hoặc GitHub Pages.</p>');
  });
})();

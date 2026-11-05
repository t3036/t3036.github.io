// Mỗi bài: ['Tên bài', 'link']. Tên '' thì hiện "Bài ôn N"; link '' = chưa có (7 bài).
var ON_TAP = {
  spark1: { ten: 'SPARK Level 1', tai: 'https://drive.google.com/drive/folders/1u6SQvgswefPCEqlBE-VgtfwLnkDBbqf4?usp=drive_link', tests: [
    ['', 'https://server1-ic3.netlify.app/bai-kiem-tra-hoc-sinh-spark-lv1-can-ban-ve-cong-nghe-munqfhp207o4.html'],
    ['', 'https://tinhoc247.github.io/ic3-spark-lv1/bai-kiem-tra-hoc-sinh-spark-lv1-an-toan-va-bao-mat-mvac5zpz6c3l.html'],
    ['', 'https://tinhoc247.github.io/ic3-spark-lv1/bai-kiem-tra-hoc-sinh-spark-lv1-quan-ly-thong-tin-mvt0ftsteq4u.html'],
    ['', ''],
    ['', ''],
    ['', ''],
    ['', '']
  ] },
  spark2: { ten: 'SPARK Level 2', tai: 'https://drive.google.com/drive/folders/15uIfllDedxTDwMYGiz_3px-ZYbl_HcPT?usp=drive_link', tests: [
    ['', 'https://server2-ic3.netlify.app/bai-kiem-tra-hoc-sinh-spark-lv2-can-ban-ve-cong-nghe-mugnjayd2ayh.html'],
    ['', 'https://tinhoc247.github.io/ic3-spark-lv2/bai-kiem-tra-hoc-sinh-spark-lv2-quan-ly-thong-tin-mvachx9gs8cx.html'],
    ['', ''],
    ['', ''],
    ['', ''],
    ['', ''],
    ['', '']
  ] },
  spark3: { ten: 'SPARK Level 3', tai: 'https://drive.google.com/drive/folders/1NwCZqbz4oUI6waxidgivKi-OFnaM2WPx?usp=drive_link', tests: [
    ['', 'https://server3-ic3.netlify.app/bai-on-luyen-hoc-sinh-spark-lv3-can-ban-ve-cong-nghe-muajzpmcmpsb.html'],
    ['', 'https://server3-ic3.netlify.app/bai-kiem-tra-hoc-sinh-spark-lv3-quan-ly-thong-tin-muqm0yl9m42x.html'],
    ['', 'https://tinhoc247.github.io/ic3-spark-lv3/bai-kiem-tra-hoc-sinh-spark-lv3-cong-dan-so-mvacoju8i4pl.html'],
    ['', 'https://tinhoc247.github.io/ic3-spark-lv3/bai-kiem-tra-hoc-sinh-spark-lv3-sang-tao-noi-dung-mvqsda7yzrdu.html'],
    ['', 'https://tinhoc247.github.io/ic3-spark-lv3/bai-kiem-tra-hoc-sinh-spark-lv3-giao-tiep-ki-thuat-so-mvt0kmvvozfa.html'],
    ['', ''],
    ['', '']
  ] },
  gs61:   { ten: 'GS6 Level 1', tai: 'https://drive.google.com/drive/u/1/folders/1f3yelu5x2Vu2cnZmChQHKFB4G45Q7Xbv', tests: [
    ['Chủ đề 1 - Test 1', 'https://server4-ic3.netlify.app/bai-on-luyen-hoc-sinh-gs6-lv1-can-ban-ve-cong-nghe-test-1-can-ban-ve-cong-nghe-test-2-mvp1tsxb6a21-T1.html'],
    ['Chủ đề 1 - Test 2', 'https://server4-ic3.netlify.app/bai-on-luyen-hoc-sinh-gs6-lv1-can-ban-ve-cong-nghe-test-1-can-ban-ve-cong-nghe-test-2-mvp1tsxb6a21-T2.html'],
    ['', ''],
    ['', ''],
    ['', ''],
    ['', ''],
    ['', '']
  ] },
  gs62:   { ten: 'GS6 Level 2', tests: [
    ['Chủ đề 1 - Test 1', 'https://server5-ic3.netlify.app/bai-on-luyen-hoc-sinh-gs6-lv2-can-ban-ve-cong-nghe-mw1i45b2axov-T1.html'],
    ['Chủ đề 1 - Test 2', 'https://server5-ic3.netlify.app/bai-on-luyen-hoc-sinh-gs6-lv2-can-ban-ve-cong-nghe-mw1i45b2axov-T2.html'],
    ['', ''],
    ['', ''],
    ['', ''],
    ['', ''],
    ['', '']
  ] },
  gs63:   { ten: 'GS6 Level 3', tests: [
    ['', ''],
    ['', ''],
    ['', ''],
    ['', ''],
    ['', ''],
    ['', ''],
    ['', '']
  ] }
};
var ALIAS = { 'level-1': 'gs61', 'level-2': 'gs62', 'level-3': 'gs63',
  'spark-level-1': 'spark1', 'spark-level-2': 'spark2', 'spark-level-3': 'spark3' };
var id = location.search.replace(/^\?(c=)?/, '').split('&')[0];
id = ALIAS[id] || id;
var cf = ON_TAP[id] || ON_TAP.spark1;
document.getElementById('trang').className = 'on-tap chuong-trinh muc-' + (ON_TAP[id] ? id : 'spark1');
document.getElementById('tieu-de').textContent = 'Ôn tập ' + cf.ten;
document.title = 'Ôn tập ' + cf.ten + ' — IC3 GS6';
document.getElementById('tai-lieu').href = cf.tai || '#';
var luoi = document.getElementById('luoi');
cf.tests.forEach(function (t, i) {
  var name = t[0], href = t[1];
  if (!href) return;
  var d = document.createElement('a');
  d.className = 'the-cap-do ' + (ON_TAP[id] ? id : 'spark1');
  d.href = href || 'update.html';
  if (href) { d.target = '_blank'; d.rel = 'noopener'; }
  else d.style.opacity = '.55';
  d.innerHTML = '<span class="the-icon" aria-hidden="true">📝</span>' +
    '<span class="the-ten">' + (name || 'Bài ôn ' + (i + 1)) + '</span>' +
    (href ? '' : '<span class="the-nuts"><span class="the-nut het">Sắp có</span></span>');
  luoi.appendChild(d);
});

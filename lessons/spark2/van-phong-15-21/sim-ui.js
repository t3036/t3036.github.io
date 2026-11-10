/* Bộ biểu tượng và mảnh giao diện dùng chung cho 3 cửa sổ Word / Excel / PowerPoint (kiểu Microsoft 365). */
const IC = {
  save:'<path d="M4 4h13l3 3v13H4z"/><path d="M8 4v5h8V4M7 20v-6h10v6"/>',
  undo:'<path d="M9 14 4 9l5-5"/><path d="M4 9h10a6 6 0 0 1 0 12h-3"/>',
  redo:'<path d="m15 14 5-5-5-5"/><path d="M20 9H10a6 6 0 0 0 0 12h3"/>',
  share:'<circle cx="9" cy="8" r="3.2"/><path d="M3 20c0-3.4 2.7-6 6-6s6 2.6 6 6"/><path d="M17 8v6M14 11h6"/>',
  paste:'<rect x="5" y="5" width="14" height="16" rx="2"/><rect x="9" y="3" width="6" height="4" rx="1" fill="currentColor"/>',
  cut:'<circle cx="6" cy="18" r="3"/><circle cx="18" cy="18" r="3"/><path d="M8 16 19 3M16 16 5 3"/>',
  copy:'<rect x="8" y="8" width="12" height="12" rx="2"/><path d="M16 8V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h3"/>',
  brush:'<path d="m14 4 6 6-8 8-3-1-3-3-1-3z"/><path d="M4 21c2 0 3-1 3-3"/>',
  bullets:'<circle cx="5" cy="7" r="1.4" fill="currentColor"/><circle cx="5" cy="12" r="1.4" fill="currentColor"/><circle cx="5" cy="17" r="1.4" fill="currentColor"/><path d="M10 7h10M10 12h10M10 17h10"/>',
  numbers:'<path d="M10 7h10M10 12h10M10 17h10"/><path d="M4 5.5 5.5 5v4M4 14.5c0-1 2-1 2 0s-2 1.5-2 2.5h2"/>',
  indentL:'<path d="M3 5h18M11 10h10M11 14h10M3 19h18"/><path d="m7 9-3 3 3 3"/>',
  indentR:'<path d="M3 5h18M11 10h10M11 14h10M3 19h18"/><path d="m3 9 3 3-3 3"/>',
  alignL:'<path d="M4 6h16M4 10h10M4 14h16M4 18h10"/>',
  alignC:'<path d="M4 6h16M7 10h10M4 14h16M7 18h10"/>',
  alignR:'<path d="M4 6h16M10 10h10M4 14h16M10 18h10"/>',
  alignJ:'<path d="M4 6h16M4 10h16M4 14h16M4 18h16"/>',
  highlight:'<path d="m5 15 8-8 4 4-8 8H5z"/><path d="M3 21h18" stroke="#ffd400" stroke-width="3"/>',
  strike:'<path d="M4 12h16"/><path d="M16 7c-1-2-7-2.500-7 .5 0 3 7 2 7 5.500 0 3-6.500 3-8 .500"/>',
  sub:'<path d="m4 6 8 10M12 6 4 16"/><path d="M16 17c0-1.500 4-1.500 4 0 0 1.500-4 2-4 3.500h4" />',
  sup:'<path d="m4 8 8 10M12 8 4 18"/><path d="M16 3c0-1.500 4-1.500 4 0 0 1.500-4 2-4 3.500h4"/>',
  table:'<rect x="3" y="4" width="18" height="16" rx="1"/><path d="M3 10h18M3 15h18M9 4v16M15 4v16"/>',
  picture:'<rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="9" cy="10" r="2"/><path d="m4 19 5-5 4 4 3-3 4 4"/>',
  caption:'<rect x="3" y="4" width="18" height="11" rx="1"/><path d="M6 19h12M9 22h6"/>',
  crop:'<path d="M7 2v15h15M2 7h15v15"/>',
  rotate:'<path d="M20 12a8 8 0 1 1-3-6.200"/><path d="M20 4v5h-5"/>',
  border:'<rect x="4" y="4" width="16" height="16" rx="1" stroke-width="2.500"/>',
  find:'<circle cx="10" cy="10" r="6"/><path d="m15 15 6 6"/>',
  replace:'<path d="M4 8h12l-3-3M20 16H8l3 3"/>',
  sum:'<path d="M18 4H7l6 8-6 8h11"/>',
  fill:'<path d="m5 11 7-7 7 7-7 7z"/><path d="M20 15c1.500 2 1.500 3 0 4-1.500-1-1.500-2 0-4z" fill="currentColor"/>',
  bold:'<path d="M7 5h6a3.500 3.500 0 0 1 0 7H7zM7 12h7a3.500 3.500 0 0 1 0 7H7z" stroke-width="2"/>',
  slide:'<rect x="3" y="5" width="18" height="12" rx="1"/><path d="M12 20v-3M8 20h8"/>',
  newslide:'<rect x="3" y="4" width="14" height="11" rx="1"/><path d="M19 14v7M15.500 17.500h7"/>',
  video:'<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m10 9 5 3-5 3z" fill="currentColor"/>',
  theme:'<path d="M12 3a9 9 0 1 0 0 18c1.500 0 2-1 1.500-2s0-2 1.500-2h2a3 3 0 0 0 3-3A9 9 0 0 0 12 3z"/><circle cx="8" cy="11" r="1" fill="currentColor"/><circle cx="12" cy="7.500" r="1" fill="currentColor"/><circle cx="16" cy="11" r="1" fill="currentColor"/>',
  trans:'<rect x="2" y="6" width="9" height="12" rx="1"/><rect x="13" y="6" width="9" height="12" rx="1" stroke-dasharray="3 2"/>',
  all:'<rect x="3" y="3" width="13" height="10" rx="1"/><rect x="8" y="9" width="13" height="10" rx="1" fill="#fff"/>',
  star:'<path d="m12 3 2.800 5.800 6.200.9-4.500 4.400 1.100 6.200L12 17.300 6.400 20.300l1.100-6.200L3 9.700l6.200-.9z"/>',
  up:'<path d="m6 15 6-6 6 6"/>',
  down:'<path d="m6 9 6 6 6-6"/>',
  play:'<path d="m7 4 13 8-13 8z" fill="currentColor"/>',
  playcur:'<rect x="3" y="4" width="18" height="12" rx="1"/><path d="m10 7 5 3-5 3z" fill="currentColor"/><path d="M8 20h8"/>',
  font:'<path d="M5 19 12 4l7 15M8 14h8"/>',
  fontcolor:'<path d="M7 16 12 4l5 12M9 12h6"/><path d="M5 21h14" stroke="#e02020" stroke-width="3"/>',
  search:'<circle cx="10" cy="10" r="6"/><path d="m15 15 5 5"/>',
  chevron:'<path d="m7 10 5 5 5-5"/>',
  wand:'<path d="m5 19 10-10M14 4l1 2 2 1-2 1-1 2-1-2-2-1 2-1zM19 12l.7 1.300L21 14l-1.300.7L19 16l-.7-1.300L17 14l1.300-.7z"/>'
};
const ic=(n,s=18)=>`<svg class="ic" width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${IC[n]}</svg>`;

/* nút lớn (biểu tượng to + chữ) và nút nhỏ; extra = thuộc tính data-* */
const bigBtn=(extra,icon,label,cls='')=>`<button class="cmd big ${cls}" ${extra}>${ic(icon,32)}<span>${label}</span></button>`;
const smBtn=(extra,icon,label='',cls='')=>`<button class="cmd ${cls}" ${extra}>${ic(icon,18)}${label?`<span>${label}</span>`:''}</button>`;
const grp=(inner,name)=>`<div class="grp"><div class="gc">${inner}</div><i>${name}</i></div>`;
const stack=(...rows)=>`<div class="col">${rows.map(r=>`<div class="row">${r}</div>`).join('')}</div>`;
const winTitle=(app,logo,name,right='')=>`<div class="tt ${app}-tt"><img class="lg" src="img/${logo}.svg" alt="">
  <button class="cmd qs dis" aria-label="Save">${ic('save',16)}</button><button class="cmd qs dis" aria-label="Undo">${ic('undo',16)}</button>
  <span class="nm">${name}</span>${right}<span class="wc"><i>—</i><i>☐</i><i>✕</i></span></div>`;
const tabRow=(cls,tabs)=>`<div class="tabs ${cls}">${tabs.map(([n,t,x])=>t?`<button data-tab="${t}" class="${x||''}" ${x==='w-pictab'?'hidden':''}>${n}</button>`:`<button class="dis ${x||''}">${n}</button>`).join('')}</div>`;

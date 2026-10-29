// ===========================================================
// SCOTT SLAGLE — ACTOR SITE — behavior
// ===========================================================

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- Curtain intro ---------- */
  const overlay = document.querySelector('.curtain-overlay');
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) {
    overlay.classList.add('done');
  } else {
    requestAnimationFrame(() => overlay.classList.add('open'));
    overlay.addEventListener('animationend', () => overlay.classList.add('done'), { once: true });
    // safety fallback in case animationend doesn't fire
    setTimeout(() => overlay.classList.add('done'), 1600);
  }

  /* ---------- Sticky header shadow ---------- */
  const header = document.getElementById('siteHeader');
  const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 8);
  document.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------- Mobile nav toggle ---------- */
  const navToggle = document.getElementById('navToggle');
  const mainNav = document.getElementById('mainNav');
  navToggle.addEventListener('click', () => {
    const isOpen = mainNav.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });
  mainNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mainNav.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });

  /* ---------- Footer year ---------- */
  document.getElementById('year').textContent = new Date().getFullYear();

  /* ---------- Scroll reveal ---------- */
  const revealTargets = document.querySelectorAll('.section .container > *');
  revealTargets.forEach(el => el.classList.add('reveal'));
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealTargets.forEach(el => io.observe(el));

  /* =========================================================
     DATA — credits pulled from Scott's resume
     ========================================================= */

  const theaterCredits = [
    { show: 'Little Shop of Horrors', company: 'Bay Area Stage', year: 2026, role: 'Mr. Mushnik'},
    { show: 'The Cemetery Club', company: 'Bay Area Stage', year: 2026, role: 'Sam Katz'},
    { show: 'Lily the Virtuous Seamstress', company: 'Gaslighters Theatrical Co', year: 2026, role: 'Jeremiah White' },
    { show: 'The Best Christmas Pageant Ever', company: 'Lucky Penny Productions', year: 2025, role: 'Rev. Hopkins' },
    { show: 'Bus Stop', company: 'Bay Area Stage', year: 2025, role: 'Carl the Bus Driver' },
    { show: 'Social Security', company: 'Bay Area Stage', year: 2025, role: 'Martin Heyman' },
    { show: 'Little Women — The Musical', company: 'Sonoma Arts Live', year: 2024, role: 'Mr. Laurence' },
    { show: 'Taming of the Shrew', company: 'Solano Theater Alumni Collective', year: 2024, role: 'Gremio' },
    { show: 'Anything Goes', company: 'Solano College Theatre', year: 2024, role: 'Elisha Whitney' },
    { show: 'The Secret Garden', company: 'Missouri Street Theatre', year: 2023, role: 'Maj. Holmes / Lt. Shaw' },
    { show: 'Guys & Dolls', company: 'Sonoma Live Arts', year: 2023, role: 'Harry the Horse' },
    { show: 'August: Osage County', company: 'Valley Players', year: 2023, role: 'Sheriff Deon Gilbeau' },
    { show: 'Disney\u2019s Descendants', company: 'Lucky Penny Productions', year: 2023, role: 'Maurice' },
    { show: 'Bright Star', company: 'Lucky Penny Productions', year: 2022, role: 'Daddy Murphy' },
    { show: 'Pippin', company: 'Solano College Theatre', year: 2022, role: 'King Charlemagne' },
    { show: 'Into the Woods', company: 'Missouri Street Theatre', year: 2021, role: 'Cinderella\u2019s Father' },
    { show: 'She Loves Me', company: 'Missouri Street Theatre', year: 2019, role: 'Ladislav Sipos' },
    { show: 'Lucky Stiff', company: 'Bay Area Stage Theatre', year: 2019, role: 'Vinnie Diruzzio' },
    { show: 'My Fair Lady', company: 'Solano College Theatre', year: 2019, role: 'Colonel Pickering' },
    { show: 'Scrooge In Love', company: 'Lucky Penny Productions', year: 2018, role: 'Mr. Smith / Ensemble' },
    { show: 'Nice Work If You Can Get It', company: 'Solano College Theatre', year: 2018, role: 'Cookie McGee' },
    { show: 'Death of a Salesman', company: 'Bay Area Stage', year: 2018, role: 'Ben' },
    { show: 'Disney\u2019s Beauty & the Beast', company: 'Missouri Street Theatre', year: 2017, role: 'Monsieur D\u2019Arques' },
    { show: 'Dracula: The Musical?', company: 'Gaslighters Theatrical Co.', year: 2017, role: 'Dr. Sam Seward' },
    { show: 'Sweeney Todd', company: 'Missouri Street Theatre', year: 2017, role: 'Multiple Roles' },
    { show: 'Cabaret', company: 'Solano College Theatre', year: 2017, role: 'Herr Schultz' },
    { show: 'Fiddler on the Roof', company: 'Missouri Street Theatre', year: 2016, role: 'Mordcha the Innkeeper' },
    { show: 'Picasso at the Lapin Agile', company: 'Solano College Theatre', year: 2016, role: 'Gaston' },
    { show: 'The Little Mermaid', company: 'Missouri Street Theatre', year: 2016, role: 'Grimsby' },
    { show: 'Jesus Christ Superstar', company: 'Missouri Street Theatre', year: 2016, role: 'High Priest' },
    { show: 'The Laramie Project', company: 'On The Fringe VAPA', year: 2016, role: 'Multiple Roles' },
    { show: 'The Wizard of Oz', company: 'Missouri Street Theatre', year: 2015, role: 'Prof. Marvel / Wizard' },
    { show: 'The Secret Garden', company: 'Lucky Penny Productions', year: 2015, role: 'Lt. Wright / Shaw' },
    { show: 'Chitty Chitty Bang Bang', company: 'Bay Area Stage Productions', year: 2015, role: 'Baron Bomburst' },
    { show: 'To Kill a Mockingbird', company: 'Bay Area Stage Productions', year: 2015, role: 'Judge Taylor' },
    { show: 'The Addams Family', company: 'Bay Area Stage Productions', year: 2014, role: 'Uncle Fester' },
    { show: 'Gypsy', company: 'Missouri Street Theatre', year: 2013, role: 'Herbie' },
    { show: 'The Music Man', company: 'Missouri Street Theatre', year: 2012, role: 'Mayor Shinn' },
    { show: 'Oliver!', company: 'Bay Area Stage Productions', year: 2012, role: 'Mr. Brownlow' },
    { show: 'Arsenic & Old Lace', company: 'Bay Area Stage Productions', year: 2012, role: 'Teddy Brewster' },
    { show: 'Chess in Concert', company: 'Missouri Street Theatre', year: 2012, role: 'Leonid Viigand' },
    { show: 'Scrooge! The Musical', company: 'Bay Area Stage Productions', year: 2011, role: 'Bob Cratchit' },
    { show: 'Avenue Q', company: 'Missouri Street Theatre', year: 2011, role: 'Box / Ricky / Nicky\u2019s Arm / Mrs. T' },
    { show: 'Man of La Mancha', company: 'Missouri Street Theatre', year: 2011, role: 'Barber' },
    { show: 'Brigadoon', company: 'Missouri Street Theatre', year: 2011, role: 'McGuffie / McDuff' },
    { show: 'Jesus Christ Superstar', company: 'Bay Area Stage Productions', year: 2010, role: 'Apostle / Guard' },
    { show: 'Joseph and the Amazing Technicolor Dreamcoat', company: 'Missouri Street Theatre', year: 2010, role: 'Jacob' },
  ].sort((a, b) => b.year - a.year);

  const filmCredits = [
  {
    show: 'Wonderville',
    company: 'Swing Shot Films',
    year: 2023,
    role: 'Lead Actor',
    video: 'https://www.youtube.com/embed/1vMVGSUo96U'
  },
  {
    show: 'Tell-A-Gram',
    company: 'Swing Shot Films',
    year: 2018,
    role: 'Lead Actor',
    video: 'https://player.vimeo.com/video/285698701?h=eec4dcd589'
  },
  {
    show: 'Hungry Like the Wolf',
    company: 'Wet Water Entertainment',
    year: 2017,
    role: 'Supporting Actor',
    video: 'https://www.youtube.com/embed/xXn2O7DERNs'
  },
  {
    show: 'Garden Hose',
    company: 'Zack Sharp Films',
    year: 2015,
    role: 'Lead Actor',
    video: 'https://www.youtube.com/embed/ZkyX6GJ-3j0'
  },
  {
    show: 'The Smiths — Episode 7',
    company: 'Alan Massa Productions',
    year: 2013,
    role: 'Supporting Actor',
    video: 'https://drive.google.com/file/d/1ZHEnFx7NeobfBd4xowVPdKjmQuAlXZ6G/view?usp=drive_link'
  }
];

  const voCredits = [
    { show: 'Single Wide Pride', company: 'Circle B Productions (Todd Bull)', type: '3D Animated Film', role: 'Bertram Gorman' },
    { show: 'War of the Worlds', company: 'Alumni Productions (RJ Burke)', type: 'Student Film Adaptation', role: 'Opening Narration' },
    { show: 'Fawn\u2019s Justice', company: 'Circle B Productions (Todd Bull)', type: '3D Animated Film', role: 'Winston Biehn' },
    { show: '49 Miles — Mile 35', company: 'Blackbox Theatre (Trevor Allen)', type: 'Audio Play', role: 'Cowboy Sam' },
    { show: 'Outgoing Phone Message', company: 'Trushine Window Cleaning', type: 'IVR', role: 'Voice Talent' },
    { show: 'Outgoing Phone Message', company: 'Dump Run Express', type: 'IVR', role: 'Voice Talent' },
    { show: 'Generation Z — S2, E2', company: 'Chronosphere Fiction (Daniel Fishbonius)', type: 'Audio Story', role: 'Voice Talent' },
    { show: 'Event Promo Commercial', company: 'Kingdom Cornhole', type: 'Commercial', role: 'Voice Over' },
    { show: '12 Days of Christmas', company: 'Jammin\u2019 101.5, Aurora CO', type: 'Radio Contest', role: 'Santa Claus' },
    { show: 'Yule Ball Invite', company: 'Alex Guo', type: 'Audio Invitation', role: 'Wizard' },
    { show: 'Escape Room Australia', company: 'Wizard Escape Room', type: 'Interactive Audio', role: 'Wizard' },
  ];

  const galleryImages = [
    '1ec8c5_7a2dd2761266470eb58a838ddd074b50~mv2.jpg',
    '1ec8c5_280b544ce14c4472b001f4e2be1408b7~mv2.jpg',
    '1ec8c5_aac08ae396db4511baef56cbe1ee5da2~mv2.jpg',
    '1ec8c5_8caee365c5584aae961a24b70a132184~mv2.jpg',
    '1ec8c5_9e413344be71477c8768c2fd3030d254~mv2.jpg',
    '1ec8c5_f166997e81c348d5958ebc513bb62374~mv2.jpg',
    '1ec8c5_8ac2033e0e334589bd895a2a7ab24f2a~mv2_d_1600_1280_s_2.jpg',
    '1ec8c5_0c63448c20bf4a7c83e953887887f6b8~mv2_d_1600_1280_s_2.jpg',
    '1ec8c5_cf7bcd0ad3334439ab379549e7bb182d~mv2.jpg',
    '1ec8c5_5dbbe4d4becf4b63bc91db3bcdb36a5c~mv2.jpg',
    '1ec8c5_c0c13a0971684895b6eb49bac16bd7ef~mv2.jpg',
    '1ec8c5_1385f2a98c82442eaa39361da9754be9~mv2.jpg',
    '1ec8c5_770c61df1ddd429cb0f19f8baebe1da2~mv2.jpg',
    '1ec8c5_275b0edcf66e4c5b871723dbfa49d898~mv2.jpg',
    '1ec8c5_070d9d0b5c5d497ab8f640b9e93f8a0f~mv2.jpg',
    '1ec8c5_feac3d40897c40d2869beca8b1394af6~mv2.jpg',
  ].map(name => `images/${name}`);

  /* ---------- Render: Theater program table ---------- */
  const theaterRowsEl = document.getElementById('theaterRows');
  const theaterEmpty = document.getElementById('theaterEmpty');

  function renderTheater(list) {
    theaterRowsEl.innerHTML = list.map(c => `
      <div class="program-row" role="row">
        <span role="cell" data-label="Production" class="show-title">${c.show}</span>
        <span role="cell" data-label="Company">${c.company}</span>
        <span role="cell" data-label="Role">${c.role}</span>
        <span role="cell" data-label="Year">${c.year}</span>
      </div>
    `).join('');
    theaterEmpty.hidden = list.length !== 0;
  }
  renderTheater(theaterCredits);

  let activeDecade = 'all';
  let activeQuery = '';

  function applyTheaterFilters() {
    const filtered = theaterCredits.filter(c => {
      const decadeMatch = activeDecade === 'all' || Math.floor(c.year / 10) * 10 === Number(activeDecade);
      const q = activeQuery.trim().toLowerCase();
      const textMatch = !q ||
        c.show.toLowerCase().includes(q) ||
        c.role.toLowerCase().includes(q) ||
        c.company.toLowerCase().includes(q);
      return decadeMatch && textMatch;
    });
    renderTheater(filtered);
  }

  document.getElementById('theaterSearch').addEventListener('input', (e) => {
    activeQuery = e.target.value;
    applyTheaterFilters();
  });

  document.querySelectorAll('#theaterFilters .chip').forEach(chip => {
    chip.addEventListener('click', () => {
      document.querySelectorAll('#theaterFilters .chip').forEach(c => c.classList.remove('is-active'));
      chip.classList.add('is-active');
      activeDecade = chip.dataset.decade;
      applyTheaterFilters();
    });
  });

  /* ---------- Render: Film cards + video pop-up ---------- */
const filmCardsEl = document.getElementById('filmCards');

filmCardsEl.innerHTML = filmCredits.map((c, i) => `
  <div class="credit-card">
    <p class="role">${c.role}</p>
    <p class="meta">${c.show}</p>
    <p class="company">${c.company} &middot; ${c.year}</p>
    ${c.video ? `
      <button class="btn btn-gold film-watch"
              type="button"
              data-film-index="${i}">
        Watch Film
      </button>
    ` : ''}
  </div>
`).join('');

const videoModal = document.getElementById('videoModal');
const videoModalTitle = document.getElementById('videoModalTitle');
const videoModalClose = document.getElementById('videoModalClose');
const filmVideo = document.getElementById('filmVideo');

let lastVideoTrigger = null;

function openFilmVideo(film, trigger) {
  lastVideoTrigger = trigger;
  videoModalTitle.textContent = film.show;
  filmVideo.title = `${film.show} video`;
  filmVideo.src = film.video;
  videoModal.hidden = false;
  document.body.style.overflow = 'hidden';
  videoModalClose.focus();
}

function closeFilmVideo() {
  videoModal.hidden = true;
  filmVideo.removeAttribute('src');
  document.body.style.overflow = '';

  if (lastVideoTrigger) {
    lastVideoTrigger.focus();
  }
}

filmCardsEl.addEventListener('click', (e) => {
  const button = e.target.closest('.film-watch');
  if (!button) return;

  const film = filmCredits[Number(button.dataset.filmIndex)];
  openFilmVideo(film, button);
});

videoModalClose.addEventListener('click', closeFilmVideo);

videoModal.addEventListener('click', (e) => {
  if (e.target === videoModal) {
    closeFilmVideo();
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && !videoModal.hidden) {
    closeFilmVideo();
  }
});

  /* ---------- Render: Voice Over cards ---------- */
  document.getElementById('voCards').innerHTML = voCredits.map(c => `
    <div class="credit-card">
      <p class="role">${c.role}</p>
      <p class="meta">${c.show}</p>
      <p class="company">${c.company} &middot; ${c.type}</p>
    </div>
  `).join('');

  /* ---------- Render: Gallery + lightbox ---------- */
  const galleryGrid = document.getElementById('galleryGrid');
  galleryGrid.innerHTML = galleryImages.map((src, i) => `
    <img src="${src}" alt="Scott Slagle in performance, photo ${i + 1}" loading="lazy" data-index="${i}">
  `).join('');

  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightboxImg');
  let currentIndex = 0;

  function openLightbox(index) {
    currentIndex = index;
    lightboxImg.src = galleryImages[currentIndex];
    lightboxImg.alt = `Scott Slagle in performance, photo ${currentIndex + 1}`;
    lightbox.hidden = false;
    document.body.style.overflow = 'hidden';
  }
  function closeLightbox() {
    lightbox.hidden = true;
    document.body.style.overflow = '';
  }
  function showRelative(delta) {
    currentIndex = (currentIndex + delta + galleryImages.length) % galleryImages.length;
    lightboxImg.src = galleryImages[currentIndex];
  }

  galleryGrid.addEventListener('click', (e) => {
    if (e.target.tagName === 'IMG') openLightbox(Number(e.target.dataset.index));
  });
  document.getElementById('lightboxClose').addEventListener('click', closeLightbox);
  document.getElementById('lightboxPrev').addEventListener('click', () => showRelative(-1));
  document.getElementById('lightboxNext').addEventListener('click', () => showRelative(1));
  lightbox.addEventListener('click', (e) => { if (e.target === lightbox) closeLightbox(); });
  document.addEventListener('keydown', (e) => {
    if (lightbox.hidden) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') showRelative(-1);
    if (e.key === 'ArrowRight') showRelative(1);
  });

});

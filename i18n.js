/*
  Moon Agency — shared site translations (English / Taglish)

  How this works:
  - Any element with data-i18n="key" has its text content swapped.
  - Any element with data-i18n-html="key" has its innerHTML swapped
    (used where the original text contains a link or <strong> tag).
  - Any element with data-i18n-placeholder="key" has its placeholder swapped.
  - The chosen language is remembered in a cookie ("site_lang") for 365 days,
    so it persists across pages and future visits.
  - Every <select class="lang"> on the page drives the switch — changing
    any one of them updates the whole page immediately.

  To add a new page to this system: wrap its text in data-i18n attributes
  using unique dot-namespaced keys (e.g. "host.introTitle"), add the same
  key to both the en and tl objects below, and include this file with
  <script src="i18n.js"></script> near the end of the page.
*/

const translations = {
  en: {
    "nav.home": "Home",
    "nav.host": "Host",
    "nav.pkevent": "PK Event",
    "nav.calculator": "Calculator",
    "nav.tutorial": "Tutorial",
    "nav.game": "Game",
    "nav.askluna": "Ask Luna",
    "nav.about": "About",

    "footer.tagline": "Official BIGO Live PH agency helping hosts grow, earn, and thrive on stream.",
    "footer.copyright": "&copy; 2025 Moon Agency. All rights reserved. Hosts must be 18 years or older to apply.",
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms of Service",
    "footer.cookies": "Cookie Policy",
    "footer.manageCookies": "Manage Cookie Preferences",

    "cookieBanner.text": "We use cookies for essential site function and, where you consent, for embedded YouTube videos that may set their own cookies. See our <a href=\"cookie-policy.html\">Cookie Policy</a> for details.",
    "cookieBanner.reject": "Reject non-essential",
    "cookieBanner.accept": "Accept all",

    "home.heroTitle": "Become a <span class=\"gold\">BIGO Live</span> Host<br>with <span class=\"gold\">Moon Agency</span>",
    "home.badge": "Official BIGO PH Agency (PH-MOON2)",
    "home.subtitle": "Grow Your Audience. Earn Income. Get Professional Support.",
    "home.perk1title": "Join Free",
    "home.perk1sub": "No fees, no hidden charges",
    "home.perk2title": "Official Agency",
    "home.perk2sub": "Verified BIGO Partner",
    "home.perk3title": "24/7 Support",
    "home.perk3sub": "We're here for you",
    "home.joinBtn": "Join Now →",
    "home.learnBtn": "Learn More ▷",
    "home.statHosts": "Active Hosts",
    "home.statBeansNum": "Millions",
    "home.statBeans": "Beans Earned",
    "home.statPK": "PK Events Held",
    "home.statSupport": "Support Available",
    "home.whyTitle": "Why Join <span class=\"gold\">Moon Agency?</span>",
    "home.card1title": "Official BIGO Partner",
    "home.card1desc": "We are an official BIGO PH agency (PH-MOON2).",
    "home.card2title": "Monthly Salary Opportunities",
    "home.card2desc": "Earn based on your performance and dedication.",
    "home.card3title": "Growth Support",
    "home.card3desc": "Get help to grow your followers and increase your audience.",
    "home.card4title": "PK Event Support",
    "home.card4desc": "Join exciting PK Battles and win amazing rewards.",
    "home.card5title": "Competitions &amp; Rewards",
    "home.card5desc": "Regular competitions with cash and in-app rewards.",
    "home.card6title": "Dedicated Managers",
    "home.card6desc": "Our managers are here to guide and support you 24/7.",
    "home.gamesTitle": "Play Our <span class=\"gold\">Mini Games</span>",
    "home.gamesLead": "Play fun games and win rewards!",
    "home.gameCat": "Cat Roll",
    "home.gameSpin": "Lucky Spin",
    "home.gameMemory": "Memory Game",
    "home.gameQuiz": "Quiz Challenge",

    "luna.status": "Available 24/7 — answers BIGO Live &amp; agency questions",
    "luna.chip1": "How do I join as a host?",
    "luna.chip2": "What are beans and diamonds?",
    "luna.chip3": "What's a PK battle?",
    "luna.chip4": "No one is watching my stream",
    "luna.chip5": "How do I contact a manager?",
    "luna.inputPlaceholder": "Ask about BIGO Live, hosting, PK events...",
    "luna.disclaimer": "Luna answers from a fixed set of Moon Agency &amp; BIGO Live topics — she's not a live person and won't always have what you need. For anything else, email our <a href=\"mailto:1234@gmail.com\">Manager</a> or <a href=\"mailto:5678@gmail.com\">Co-Manager Eka</a>."
  },

  tl: {
    "nav.home": "Home",
    "nav.host": "Host",
    "nav.pkevent": "PK Event",
    "nav.calculator": "Calculator",
    "nav.tutorial": "Tutorial",
    "nav.game": "Game",
    "nav.askluna": "Ask Luna",
    "nav.about": "About",

    "footer.tagline": "Official BIGO Live PH agency na tumutulong sa mga host na lumago, kumita, at umunlad sa stream.",
    "footer.copyright": "&copy; 2025 Moon Agency. All rights reserved. Dapat 18 years old pataas para mag-apply as host.",
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms of Service",
    "footer.cookies": "Cookie Policy",
    "footer.manageCookies": "I-manage ang Cookie Preferences",

    "cookieBanner.text": "Gumagamit kami ng cookies para sa essential site function at, kung papayagan mo, para sa embedded YouTube videos na baka may sariling cookies. Tingnan ang aming <a href=\"cookie-policy.html\">Cookie Policy</a> for details.",
    "cookieBanner.reject": "I-reject ang non-essential",
    "cookieBanner.accept": "Accept all",

    "home.heroTitle": "Maging <span class=\"gold\">BIGO Live</span> Host<br>kasama ang <span class=\"gold\">Moon Agency</span>",
    "home.badge": "Official BIGO PH Agency (PH-MOON2)",
    "home.subtitle": "Palakihin ang Audience Mo. Kumita. Mag-enjoy ng Professional Support.",
    "home.perk1title": "Libreng Sumali",
    "home.perk1sub": "Walang bayad, walang hidden charges",
    "home.perk2title": "Official Agency",
    "home.perk2sub": "Verified BIGO Partner",
    "home.perk3title": "24/7 Support",
    "home.perk3sub": "Nandito kami para sa'yo",
    "home.joinBtn": "Sumali Na →",
    "home.learnBtn": "Alamin Pa ▷",
    "home.statHosts": "Active na Hosts",
    "home.statBeansNum": "Milyon-milyon",
    "home.statBeans": "Beans na Nakuha",
    "home.statPK": "PK Events na Ginanap",
    "home.statSupport": "Support Available",
    "home.whyTitle": "Bakit Sumali sa <span class=\"gold\">Moon Agency?</span>",
    "home.card1title": "Official BIGO Partner",
    "home.card1desc": "Kami ay official BIGO PH agency (PH-MOON2).",
    "home.card2title": "Monthly Salary Opportunities",
    "home.card2desc": "Kumita base sa performance at dedication mo.",
    "home.card3title": "Growth Support",
    "home.card3desc": "Tutulungan kang lumago ang followers at audience mo.",
    "home.card4title": "PK Event Support",
    "home.card4desc": "Sumali sa exciting PK Battles at manalo ng amazing rewards.",
    "home.card5title": "Mga Kompetisyon &amp; Rewards",
    "home.card5desc": "Regular na kompetisyon na may cash at in-app rewards.",
    "home.card6title": "Dedicated na Managers",
    "home.card6desc": "Nandito ang mga manager namin para gabayan at suportahan ka 24/7.",
    "home.gamesTitle": "I-play ang Aming <span class=\"gold\">Mini Games</span>",
    "home.gamesLead": "Mag-enjoy ng fun games at manalo ng rewards!",
    "home.gameCat": "Cat Roll",
    "home.gameSpin": "Lucky Spin",
    "home.gameMemory": "Memory Game",
    "home.gameQuiz": "Quiz Challenge",

    "luna.status": "Available 24/7 — sumasagot ng BIGO Live &amp; agency questions",
    "luna.chip1": "Paano ako sumali bilang host?",
    "luna.chip2": "Ano ang beans at diamonds?",
    "luna.chip3": "Ano ang PK battle?",
    "luna.chip4": "Walang manonood sa stream ko",
    "luna.chip5": "Paano makontak ang manager?",
    "luna.inputPlaceholder": "Magtanong tungkol sa BIGO Live, hosting, PK events...",
    "luna.disclaimer": "Sumasagot si Luna galing sa fixed na set ng Moon Agency &amp; BIGO Live topics — hindi siya live na tao kaya hindi laging may sagot siya sa lahat. Para sa iba pa, i-email na lang ang aming <a href=\"mailto:1234@gmail.com\">Manager</a> o <a href=\"mailto:5678@gmail.com\">Co-Manager Eka</a>."
  }
};

function getCookie(name) {
  const match = document.cookie.match(new RegExp('(?:^|; )' + name + '=([^;]*)'));
  return match ? decodeURIComponent(match[1]) : null;
}

function setCookie(name, value, days) {
  const d = new Date();
  d.setTime(d.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = name + '=' + encodeURIComponent(value) + ';expires=' + d.toUTCString() + ';path=/;SameSite=Lax';
}

function applyLanguage(lang) {
  const dict = translations[lang] || translations.en;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key] !== undefined) el.textContent = dict[key];
  });

  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    if (dict[key] !== undefined) el.innerHTML = dict[key];
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (dict[key] !== undefined) el.placeholder = dict[key];
  });

  document.querySelectorAll('select.lang').forEach(sel => {
    sel.value = lang;
  });

  document.documentElement.setAttribute('lang', lang === 'tl' ? 'tl' : 'en');
}

function initLanguageSwitcher() {
  const saved = getCookie('site_lang') || 'en';
  applyLanguage(saved);

  document.querySelectorAll('select.lang').forEach(sel => {
    sel.addEventListener('change', e => {
      const lang = e.target.value;
      setCookie('site_lang', lang, 365);
      applyLanguage(lang);
    });
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initLanguageSwitcher);
} else {
  initLanguageSwitcher();
}
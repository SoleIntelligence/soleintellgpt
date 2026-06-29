// The GuideWire — main page script
// Handles: mobile nav, dynamic infographic cards (from infographics.js),
// the Substack feed, and motion choreography (scroll reveals, nav state,
// magnetic buttons).

document.documentElement.classList.add('js');

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// ---------- Mobile nav --------------------------------------------------
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.site-nav');

function closeMenu() {
  if (!nav) return;
  nav.classList.remove('is-open');
  if (menuToggle) menuToggle.setAttribute('aria-expanded', 'false');
  document.body.style.overflow = '';
}

if (menuToggle && nav) {
  menuToggle.addEventListener('click', () => {
    const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!expanded));
    nav.classList.toggle('is-open', !expanded);
    document.body.style.overflow = !expanded ? 'hidden' : '';
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeMenu();
  });
}

// ---------- Floating-nav scrolled state ---------------------------------
const header = document.querySelector('.site-header');
if (header && 'IntersectionObserver' in window) {
  const sentinel = document.createElement('div');
  sentinel.setAttribute('aria-hidden', 'true');
  sentinel.style.cssText = 'position:absolute;top:0;left:0;width:1px;height:8px;pointer-events:none;';
  document.body.prepend(sentinel);
  new IntersectionObserver(
    ([entry]) => header.classList.toggle('is-scrolled', !entry.isIntersecting),
    { threshold: 0 }
  ).observe(sentinel);
}

// ---------- Infographic cards -------------------------------------------
function escapeHtml(value) {
  if (value == null) return '';
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function formatCardDate(value) {
  if (!value) return '';
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return '';
  return date.toLocaleDateString(undefined, { year: 'numeric', month: 'short' });
}

function renderInfographicCard(item) {
  const kicker = escapeHtml(item.kicker || 'Infographic');
  const title = escapeHtml(item.title || 'Untitled');
  const desc = escapeHtml(item.description || '');
  const url = escapeHtml(item.url || '#');
  const date = formatCardDate(item.date);
  const hasThumb = Boolean(item.thumbnail);
  const thumb = hasThumb ? `
          <div class="cat-card-thumb">
            <img src="${escapeHtml(item.thumbnail)}" alt="" loading="lazy" />
          </div>` : '';
  const cardClass = hasThumb ? 'cat-card bezel cat-card--with-thumb' : 'cat-card bezel';

  return `
    <a class="${cardClass}" href="${url}">
      <div class="bezel-core">${thumb}
        <div class="cat-card-body">
          <p class="cat-card-kicker">${kicker}</p>
          <h3>${title}</h3>
          <p>${desc}</p>
          <div class="cat-card-footer">
            <span class="cat-card-date">${escapeHtml(date)}</span>
            <span class="cat-card-arrow">
              Open
              <span class="cat-card-arrow-pip" aria-hidden="true">
                <svg viewBox="0 0 16 16"><path d="M3 8h10M9 4l4 4-4 4" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>
              </span>
            </span>
          </div>
        </div>
      </div>
    </a>
  `;
}

function renderEmptyState(label) {
  return `
    <div class="empty-card">
      New ${escapeHtml(label)} are on the way. Add one by dropping its HTML file into the project and registering it in <code>infographics.js</code>.
    </div>
  `;
}

const CATEGORY_LABELS = {
  'ai-tutorials': 'AI tutorials',
  'politics-culture': 'politics &amp; culture posts',
  'student-resident': 'education pieces'
};

function renderInfographics() {
  const grids = document.querySelectorAll('.card-grid[data-category]');
  if (!grids.length) return;
  const all = Array.isArray(window.INFOGRAPHICS) ? window.INFOGRAPHICS : [];

  grids.forEach((grid) => {
    const category = grid.getAttribute('data-category');
    const items = all
      .filter((item) => item && item.category === category)
      .sort((a, b) => {
        const da = a.date ? new Date(a.date).getTime() : 0;
        const db = b.date ? new Date(b.date).getTime() : 0;
        return db - da;
      });

    if (!items.length) {
      grid.innerHTML = renderEmptyState(CATEGORY_LABELS[category] || 'infographics');
      return;
    }
    grid.innerHTML = items.map(renderInfographicCard).join('');
  });
}

renderInfographics();

// ---------- Scroll reveals ----------------------------------------------
(function setupReveals() {
  const revealEls = document.querySelectorAll('[data-reveal]');
  if (!revealEls.length) return;

  if (prefersReducedMotion || !('IntersectionObserver' in window)) {
    revealEls.forEach((el) => el.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);
        }
      });
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.08 }
  );

  revealEls.forEach((el) => observer.observe(el));
})();

// ---------- Magnetic buttons --------------------------------------------
(function setupMagnetic() {
  if (prefersReducedMotion || !window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;

  const magnets = document.querySelectorAll('.button-primary, .nav-cta');
  magnets.forEach((el) => {
    const strength = 0.28;
    el.addEventListener('pointermove', (event) => {
      const rect = el.getBoundingClientRect();
      const x = (event.clientX - rect.left - rect.width / 2) * strength;
      const y = (event.clientY - rect.top - rect.height / 2) * strength;
      el.style.transform = `translate(${x.toFixed(1)}px, ${y.toFixed(1)}px)`;
    });
    el.addEventListener('pointerleave', () => {
      el.style.transform = '';
    });
  });
})();

// ---------- Substack feed -----------------------------------------------
const postsContainer = document.getElementById('substack-posts');

const FEED_URLS = [
  'https://soleintell.substack.com/feed',
  'https://substack.com/feed/@petersorensendpm'
];

const RSS_TO_JSON = (url) => `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(url)}`;

function formatPostDate(value) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return 'Recent post';
  return date.toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
}

function trimText(text, max = 150) {
  const plain = text.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
  if (plain.length <= max) return plain;
  return `${plain.slice(0, max).trim()}…`;
}

function renderPosts(items) {
  postsContainer.innerHTML = items.slice(0, 3).map((item) => `
    <article class="post-card">
      <p class="post-meta">${escapeHtml(formatPostDate(item.pubDate || item.published || item.isoDate))}</p>
      <h3>${escapeHtml(item.title || 'Untitled post')}</h3>
      <p>${escapeHtml(trimText(item.description || item.content || 'Visit the publication for the latest writing.'))}</p>
      <a href="${escapeHtml(item.link || '#')}" target="_blank" rel="noreferrer">Read post →</a>
    </article>
  `).join('');
}

function renderFallback() {
  postsContainer.innerHTML = `
    <article class="post-card">
      <p class="post-meta">Substack</p>
      <h3>Latest posts live on the publication</h3>
      <p>The feed did not load in this browser, but the publication link is active and ready to use.</p>
      <a href="https://substack.com/@petersorensendpm" target="_blank" rel="noreferrer">Open the Substack →</a>
    </article>
  `;
}

(async function loadSubstackPosts() {
  if (!postsContainer) return;

  for (const feedUrl of FEED_URLS) {
    try {
      const response = await fetch(RSS_TO_JSON(feedUrl));
      if (!response.ok) continue;
      const data = await response.json();
      if (data && Array.isArray(data.items) && data.items.length) {
        renderPosts(data.items);
        return;
      }
    } catch (_error) {
      // try next feed URL
    }
  }

  renderFallback();
})();

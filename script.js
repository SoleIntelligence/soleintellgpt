const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.site-nav');

if (menuToggle && nav) {
  menuToggle.addEventListener('click', () => {
    const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!expanded));
    nav.classList.toggle('is-open');
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('is-open');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

const postsContainer = document.getElementById('substack-posts');

const FEED_URLS = [
  'https://soleintell.substack.com/feed',
  'https://substack.com/feed/@soleintell'
];

const RSS_TO_JSON = (url) => `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(url)}`;

function formatDate(value) {
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
      <p class="post-meta">${formatDate(item.pubDate || item.published || item.isoDate)}</p>
      <h3>${item.title || 'Untitled post'}</h3>
      <p>${trimText(item.description || item.content || 'Visit the publication for the latest writing.')}</p>
      <a href="${item.link}" target="_blank" rel="noreferrer">Read post</a>
    </article>
  `).join('');
}

function renderFallback() {
  postsContainer.innerHTML = `
    <article class="post-card">
      <p class="post-meta">Substack</p>
      <h3>Latest posts live on the publication</h3>
      <p>The feed did not load in this browser, but the publication link is active and ready to use.</p>
      <a href="https://substack.com/soleintell" target="_blank" rel="noreferrer">Open Sole Intelligence on Substack</a>
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
      if (data?.items?.length) {
        renderPosts(data.items);
        return;
      }
    } catch (error) {
      // try next feed URL
    }
  }

  renderFallback();
})();

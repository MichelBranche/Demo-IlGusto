/* Il Gusto - Vanilla JS (no framework) */

const menuItems = [
  {
    category: "Pizza al Taglio",
    items: [
      { name: "Margherita", price: "2.50 €", image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38" },
      { name: "Marinara", price: "2.50 €", image: "https://images.unsplash.com/photo-1610371800517-6776c0611378" },
      { name: "Speciale", price: "3.50 €", image: "https://images.pexels.com/photos/5848286/pexels-photo-5848286.jpeg" }
    ]
  },
  {
    category: "Focacce Farcite",
    items: [
      { name: "Focaccia Prosciutto", price: "4.50 €", image: "https://images.unsplash.com/photo-1605466237823-49122fcaf198" },
      { name: "Focaccia Vegetariana", price: "4.50 €", image: "https://images.pexels.com/photos/9433002/pexels-photo-9433002.jpeg" },
      { name: "Focaccia Speciale", price: "5.50 €", image: "https://images.unsplash.com/photo-1605466237823-49122fcaf198" }
    ]
  },
  {
    category: "Specialità",
    items: [
      { name: "Arancini", price: "3.00 €", image: "https://images.unsplash.com/photo-1632778140142-d62dee6e124c" },
      { name: "Crocchette", price: "2.50 €", image: "https://images.unsplash.com/photo-1683694062041-cc62c5390b13" },
      { name: "Slice Premium", price: "5.00 €", image: "https://images.unsplash.com/photo-1690642109209-18176b898182" }
    ]
  }
];

const reviews = [
  { name: "Marco R.", rating: 5, text: "La migliore pizza al taglio di Aosta! Sempre fresca e gustosa." },
  { name: "Laura B.", rating: 5, text: "Focacce fantastiche e personale cordiale. Consigliatissimo!" },
  { name: "Giuseppe M.", rating: 4, text: "Ottimo rapporto qualità-prezzo. Tornerò sicuramente!" }
];

/* Simple inline SVG icons (Lucide-inspired) */
function iconSvg(name) {
  const base = 'stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"';
  if (name === "menu") {
    return `<svg viewBox="0 0 24 24" width="24" height="24" ${base}><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>`;
  }
  if (name === "x") {
    return `<svg viewBox="0 0 24 24" width="24" height="24" ${base}><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`;
  }
  if (name === "map-pin") {
    return `<svg viewBox="0 0 24 24" width="40" height="40" ${base}><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 0 1 16 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>`;
  }
  if (name === "clock") {
    return `<svg viewBox="0 0 24 24" width="40" height="40" ${base}><circle cx="12" cy="12" r="10"></circle><path d="M12 6v6l4 2"></path></svg>`;
  }
  if (name === "phone") {
    return `<svg viewBox="0 0 24 24" width="40" height="40" ${base}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.08 4.18 2 2 0 0 1 4.06 2h3a2 2 0 0 1 2 1.72c.12.86.31 1.7.57 2.5a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.58-1.09a2 2 0 0 1 2.11-.45c.8.26 1.64.45 2.5.57A2 2 0 0 1 22 16.92z"></path></svg>`;
  }
  return "";
}

function starSvg({ size = 20, fill = "#FFD700", stroke = "#FFD700" } = {}) {
  // Lucide star path
  return `<svg viewBox="0 0 24 24" width="${size}" height="${size}" stroke="${stroke}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="${fill}"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>`;
}

/* Header shadow on scroll */
function setupHeaderScroll() {
  const header = document.getElementById("site-header");
  function onScroll() {
    if (window.scrollY > 50) header.classList.add("scrolled");
    else header.classList.remove("scrolled");
  }
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
}

/* Smooth scroll */
function setupNavScroll() {
  const nav = document.getElementById("site-nav");
  nav.addEventListener("click", (e) => {
    const a = e.target.closest("a[data-scroll]");
    if (!a) return;
    e.preventDefault();
    const id = a.getAttribute("data-scroll");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  });
}

/* Mobile menu toggle (DISABLED: nav sempre visibile)
   Nota: abbiamo lasciato le funzioni per compatibilità, ma non vengono più agganciate.
*/
const navEl = document.getElementById("site-nav");
const btnEl = document.getElementById("mobile-menu-btn");
const btnIconEl = document.getElementById("mobile-menu-icon");

function setMobileIcon(open) {
  btnIconEl.innerHTML = open ? iconSvg("x") : iconSvg("menu");
  btnEl.setAttribute("aria-expanded", String(open));
  btnEl.setAttribute("aria-label", open ? "Chiudi menu" : "Apri menu");
}
function openMobileMenu() {
  navEl.classList.add("open");
  setMobileIcon(true);
}
function closeMobileMenu() {
  navEl.classList.remove("open");
  setMobileIcon(false);
}
function toggleMobileMenu() {
  const isOpen = navEl.classList.contains("open");
  if (isOpen) closeMobileMenu();
  else openMobileMenu();
}

/* Render sections */
function renderHeroStars() {
  const root = document.getElementById("hero-stars");
  if (!root) return;
  root.innerHTML = [
    starSvg({ size: 20, fill: "#FFD700", stroke: "#FFD700" }),
    starSvg({ size: 20, fill: "#FFD700", stroke: "#FFD700" }),
    starSvg({ size: 20, fill: "#FFD700", stroke: "#FFD700" }),
    starSvg({ size: 20, fill: "#FFD700", stroke: "#FFD700" }),
    starSvg({ size: 20, fill: "#E0E0E0", stroke: "#E0E0E0" })
  ].join("");
}

function renderMenu() {
  const root = document.getElementById("menu-root");
  if (!root) return;

  root.innerHTML = menuItems.map((section) => {
    const itemsHtml = section.items.map((item) => `
      <div class="menu-card">
        <div class="menu-card-image">
          <img src="${item.image}" alt="${escapeHtml(item.name)}" loading="lazy" />
        </div>
        <div class="menu-card-content">
          <h4 class="menu-item-name">${escapeHtml(item.name)}</h4>
          <p class="menu-item-price">${escapeHtml(item.price)}</p>
        </div>
      </div>
    `).join("");

    return `
      <div class="menu-category">
        <h3 class="category-title">${escapeHtml(section.category)}</h3>
        <div class="menu-grid">
          ${itemsHtml}
        </div>
      </div>
    `;
  }).join("");
}

function renderReviews() {
  const root = document.getElementById("reviews-root");
  if (!root) return;

  root.innerHTML = reviews.map((r) => {
    const stars = Array.from({ length: 5 }).map((_, i) => {
      const filled = i < r.rating;
      return starSvg({ size: 18, fill: filled ? "#FFD700" : "#E0E0E0", stroke: filled ? "#FFD700" : "#E0E0E0" });
    }).join("");
    return `
      <div class="review-card">
        <div class="review-stars">${stars}</div>
        <p class="review-text">"${escapeHtml(r.text)}"</p>
        <p class="review-author">- ${escapeHtml(r.name)}</p>
      </div>
    `;
  }).join("");
}

function injectContactIcons() {
  document.querySelectorAll("[data-icon]").forEach((el) => {
    el.innerHTML = iconSvg(el.getAttribute("data-icon")) || "";
  });
}

/* Tiny helper to prevent markup injection in text fields */
function escapeHtml(str) {
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function setupOutsideClickToClose() {
  document.addEventListener("click", (e) => {
    const isOpen = navEl.classList.contains("open");
    if (!isOpen) return;
    const insideNav = e.target.closest("#site-nav");
    const insideBtn = e.target.closest("#mobile-menu-btn");
    if (!insideNav && !insideBtn) closeMobileMenu();
  });
}

function setupResizeClose() {
  window.addEventListener("resize", () => {
    // When switching to desktop layout, ensure no stale "open" state
    if (window.innerWidth > 768) closeMobileMenu();
  });
}

function init() {
  // Nav sempre visibile: rimuovi eventuale stato "open" e non attaccare handler hamburger.
  if (navEl) navEl.classList.remove("open");
  if (btnEl && btnIconEl) setMobileIcon(false);

  setupHeaderScroll();
  setupNavScroll();
  // setupOutsideClickToClose();
  // setupResizeClose();

  renderHeroStars();
  renderMenu();
  renderReviews();
  injectContactIcons();
}

document.addEventListener("DOMContentLoaded", init);

/* The GuideWire. Local, progressively enhanced HTML.
   MotionSites source mapping: DESIGN-NOTES.md. No standalone document is altered. */
(() => {
  "use strict";
  const $ = (s, root = document) => root.querySelector(s);
  const $$ = (s, root = document) => [...root.querySelectorAll(s)];
  const reduced = matchMedia("(prefers-reduced-motion: reduce)");
  const narrow = matchMedia("(max-width: 899px)");
  const nav = $(".site-nav");
  const menu = $(".menu-toggle");
  const inertTargets = $$("main, footer");

  function closeMenu(returnFocus = false) {
    nav?.classList.remove("is-open");
    menu?.setAttribute("aria-expanded", "false");
    document.body.classList.remove("menu-open");
    inertTargets.forEach((el) => {
      el.inert = false;
    });
    if (returnFocus) menu?.focus();
  }
  menu?.addEventListener("click", () => {
    if (menu.getAttribute("aria-expanded") === "true") return closeMenu(true);
    menu.setAttribute("aria-expanded", "true");
    nav.classList.add("is-open");
    document.body.classList.add("menu-open");
    inertTargets.forEach((el) => {
      el.inert = true;
    });
    $("a", nav)?.focus();
  });
  $$("a", nav).forEach((a) => a.addEventListener("click", () => closeMenu()));
  narrow.addEventListener("change", () => {
    if (!narrow.matches) closeMenu();
  });
  document.addEventListener("keydown", (event) => {
    if (menu?.getAttribute("aria-expanded") !== "true") return;
    if (event.key === "Escape") {
      event.preventDefault();
      closeMenu(true);
    }
    if (event.key === "Tab") {
      const links = $$("a", nav);
      const first = menu,
        last = links[links.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }
  });

  const escape = (value) =>
    String(value ?? "").replace(
      /[&<>"']/g,
      (c) =>
        ({
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#39;",
        })[c],
    );
  const normalize = (text) =>
    String(text)
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();
  const items = Array.isArray(window.INFOGRAPHICS) ? window.INFOGRAPHICS : null;
  const labels = {
    "ai-tutorials": "AI Tutorials",
    "politics-culture": "Politics & Culture",
    "student-resident": "Education",
  };
  const dateLabel = (value) => {
    const date = new Date(`${value}T12:00:00`);
    return Number.isNaN(date.getTime())
      ? ""
      : date.toLocaleDateString("en-US", { month: "short", year: "numeric" });
  };
  function resourceCard(item, index) {
    return `<a class="resource-card" href="${escape(item.url)}" data-card-index="${index}"><div class="resource-image"><img src="${escape(window.GUIDEWIRE_THUMBNAILS?.[item.thumbnail] || item.thumbnail)}" alt="" width="640" height="400" loading="lazy"></div><div class="resource-copy"><p class="resource-kicker">${escape(item.kicker || "Infographic")}</p><h3>${escape(item.title)}</h3><p class="resource-description">${escape(item.description)}</p><div class="resource-bottom"><time datetime="${escape(item.date)}">${escape(dateLabel(item.date))}</time><span>Explore <span aria-hidden="true">↗</span></span></div></div></a>`;
  }
  const search = $("#resource-search");
  let activeFilter = "all";
  let expanded = new Set();
  const refreshLayout = () =>
    requestAnimationFrame(() => window.ScrollTrigger?.refresh());
  if (search && items) {
    $$(".resource-grid[data-category]").forEach((grid) => {
      const records = items
        .filter((item) => item.category === grid.dataset.category)
        .sort((a, b) => (b.date || "").localeCompare(a.date || ""));
      grid.innerHTML = records.map(resourceCard).join("");
      $$(".resource-card", grid).forEach((card, index) => {
        card.dataset.search = normalize(
          `${records[index].title} ${records[index].description} ${records[index].kicker || ""}`,
        );
      });
    });
    $(".library-tools").hidden = false;

    function updateLibrary() {
      const query = normalize(search.value.trim());
      const tokens = query.split(/\s+/).filter(Boolean);
      let totalMatches = 0;
      $$("[data-category-section]").forEach((section) => {
        const category = section.dataset.categorySection;
        const cards = $$(".resource-card", section);
        const categoryAllowed =
          activeFilter === "all" || activeFilter === category;
        const matches = cards.filter(
          (card) =>
            categoryAllowed &&
            tokens.every((token) => card.dataset.search.includes(token)),
        );
        totalMatches += matches.length;
        section.hidden = matches.length === 0;
        const visibleLimit = query || expanded.has(category) ? Infinity : 6;
        cards.forEach((card) => {
          const i = matches.indexOf(card);
          card.hidden = i < 0 || i >= visibleLimit;
        });
        $(".category-count", section).textContent =
          `${matches.length} ${matches.length === 1 ? "resource" : "resources"}`;
        const button = $("[data-more]", section);
        button.hidden = !!query || matches.length <= 6;
        button.setAttribute("aria-expanded", String(expanded.has(category)));
        button.innerHTML = expanded.has(category)
          ? 'Show fewer resources <span aria-hidden="true">↑</span>'
          : `View all ${matches.length} resources <span aria-hidden="true">↓</span>`;
      });
      $$("[data-filter]").forEach((button) => {
        const active = button.dataset.filter === activeFilter;
        button.classList.toggle("is-active", active);
        button.setAttribute("aria-pressed", String(active));
      });
      $("#search-status").textContent = query
        ? `${totalMatches} ${totalMatches === 1 ? "result" : "results"} for “${search.value.trim()}”`
        : `${totalMatches} resources${activeFilter === "all" ? " across AI, politics, and education" : ` in ${labels[activeFilter]}`}`;
      $(".empty-state").hidden = totalMatches > 0;
      refreshLayout();
    }
    search.addEventListener("input", updateLibrary);
    $$("[data-filter]").forEach((button) =>
      button.addEventListener("click", () => {
        activeFilter = button.dataset.filter;
        updateLibrary();
      }),
    );
    $$("[data-more]").forEach((button) =>
      button.addEventListener("click", () => {
        const category = button.dataset.more;
        if (expanded.has(category)) {
          expanded.delete(category);
          updateLibrary();
          document.getElementById(category).scrollIntoView({
            behavior: reduced.matches ? "instant" : "smooth",
            block: "start",
          });
        } else {
          expanded.add(category);
          updateLibrary();
          // Keep the first newly revealed item immediately accessible to keyboard users.
          $$(".resource-card", document.getElementById(category))[6]?.focus({
            preventScroll: true,
          });
        }
      }),
    );
    function resetLibrary() {
      search.value = "";
      activeFilter = "all";
      expanded.clear();
      updateLibrary();
    }
    $("#clear-search")?.addEventListener("click", () => {
      resetLibrary();
      search.focus();
    });
    document.addEventListener("keydown", (event) => {
      if (
        event.key === "/" &&
        !event.metaKey &&
        !event.ctrlKey &&
        !event.altKey &&
        !/INPUT|TEXTAREA|SELECT/.test(document.activeElement.tagName) &&
        !document.activeElement.isContentEditable &&
        !document.body.classList.contains("menu-open")
      ) {
        event.preventDefault();
        search.focus();
      }
    });
    $$('a[href^="#"]').forEach((link) =>
      link.addEventListener("click", () => {
        if (labels[link.hash.slice(1)]) resetLibrary();
      }),
    );
    window.addEventListener("hashchange", () => {
      if (labels[location.hash.slice(1)]) {
        resetLibrary();
        document.getElementById(location.hash.slice(1))?.scrollIntoView();
      }
    });
    updateLibrary();
  }

  // MotionSites choreography, implemented with self-hosted GSAP and native sticky layout.
  // Static HTML remains visible if the animation runtime cannot load.
  if (window.gsap && window.ScrollTrigger) {
    gsap.registerPlugin(ScrollTrigger);
    const media = gsap.matchMedia();
    media.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.from(".hero .line > span, .about-hero .line > span", {
        yPercent: 108,
        duration: 1.05,
        stagger: 0.13,
        ease: "power4.out",
        clearProps: "transform",
      });
      gsap.from(
        ".hero .eyebrow, .hero-lead, .hero-actions, .about-hero .eyebrow",
        {
          y: 20,
          opacity: 0,
          duration: 0.8,
          delay: 0.25,
          stagger: 0.08,
          ease: "power3.out",
          clearProps: "transform,opacity",
        },
      );
      $$("[data-reveal]").forEach((el) => {
        gsap.from(el, {
          y: 30,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 94%", once: true },
          clearProps: "transform,opacity",
        });
      });
      const statement = $("[data-word-reveal]");
      let originalStatement;
      if (statement) {
        originalStatement = statement.innerHTML;
        statement.setAttribute(
          "aria-label",
          statement.innerText.replace(/\n/g, " "),
        );
        statement.innerHTML = originalStatement
          .split(/(<br\s*\/?>)/i)
          .map((part) =>
            /^<br/i.test(part)
              ? part
              : part.replace(
                  /\S+/g,
                  (word) =>
                    `<span class="word" aria-hidden="true">${word}</span>`,
                ),
          )
          .join("");
        gsap.fromTo(
          $(".mission-statement").querySelectorAll(".word"),
          { opacity: 0.58 },
          {
            opacity: 1,
            stagger: 0.13,
            ease: "none",
            scrollTrigger: {
              trigger: statement,
              start: "top 83%",
              end: "bottom 42%",
              scrub: 0.6,
            },
          },
        );
      }
      $$(".marquee-row").forEach((row, index) => {
        gsap.fromTo(
          row,
          { x: index ? 0 : -200 },
          {
            x: index ? -250 : 30,
            ease: "none",
            scrollTrigger: {
              trigger: ".image-marquee",
              start: "top bottom",
              end: "bottom top",
              scrub: 0.7,
            },
          },
        );
      });
      const art = $(".hero-art img");
      if (art && !narrow.matches)
        gsap.to(art, {
          y: 70,
          rotation: -4,
          scale: 1.06,
          ease: "none",
          scrollTrigger: {
            trigger: ".hero",
            start: "top top",
            end: "bottom top",
            scrub: 1,
          },
        });
      const magnets = $$(".button-primary, .button-dark");
      const handlers = [];
      if (matchMedia("(hover: hover) and (pointer: fine)").matches) {
        magnets.forEach((button) => {
          const move = (event) => {
            const r = button.getBoundingClientRect();
            gsap.to(button, {
              x: (event.clientX - r.left - r.width / 2) * 0.08,
              y: (event.clientY - r.top - r.height / 2) * 0.12,
              duration: 0.3,
              overwrite: true,
            });
          };
          const leave = () =>
            gsap.to(button, { x: 0, y: 0, duration: 0.5, ease: "power3.out" });
          button.addEventListener("pointermove", move);
          button.addEventListener("pointerleave", leave);
          handlers.push(() => {
            button.removeEventListener("pointermove", move);
            button.removeEventListener("pointerleave", leave);
          });
        });
      }
      const artBox = $(".hero-art");
      const spotlight = (event) => {
        const r = artBox.getBoundingClientRect();
        artBox.style.setProperty("--pointer-x", `${event.clientX - r.left}px`);
        artBox.style.setProperty("--pointer-y", `${event.clientY - r.top}px`);
      };
      artBox?.addEventListener("pointermove", spotlight);
      return () => {
        handlers.forEach((remove) => remove());
        artBox?.removeEventListener("pointermove", spotlight);
        if (statement) {
          statement.innerHTML = originalStatement;
          statement.removeAttribute("aria-label");
        }
      };
    });
    media.add(
      "(min-width: 900px) and (prefers-reduced-motion: no-preference)",
      () => {
        const panels = $$(".pathway");
        panels.slice(0, -1).forEach((panel, index) => {
          gsap.to($(".pathway-inner", panel), {
            scale: 0.94,
            opacity: 0.38,
            ease: "none",
            scrollTrigger: {
              trigger: panels[index + 1],
              start: "top 85%",
              end: "top 76px",
              scrub: 0.65,
            },
          });
        });
        $$(".gallery-stack .gallery-card").forEach((card, index) => {
          gsap.from(card, {
            y: index % 2 ? 45 : 20,
            opacity: 0.4,
            ease: "none",
            scrollTrigger: {
              trigger: card,
              start: "top 96%",
              end: "top 65%",
              scrub: 0.6,
            },
          });
        });
      },
    );
    window.addEventListener(
      "load",
      () => {
        ScrollTrigger.refresh();
        // Native fragments are resolved again after fonts and image dimensions stabilize.
        if (location.hash)
          document
            .getElementById(decodeURIComponent(location.hash.slice(1)))
            ?.scrollIntoView({ behavior: "instant" });
      },
      { once: true },
    );
    document.fonts?.ready.then(() => ScrollTrigger.refresh());
  }

  // Preserve the publication feed, with bounded requests and a useful static fallback.
  const appearance = $(".appearance-toggle");
  if (appearance) {
    appearance.hidden = false;
    const modes = ["system", "light", "dark"];
    const updateLabel = () => {
      const mode = document.documentElement.dataset.theme || "system";
      $("span", appearance).textContent = mode[0].toUpperCase() + mode.slice(1);
    };
    updateLabel();
    appearance.addEventListener("click", () => {
      const current = document.documentElement.dataset.theme || "system";
      const next = modes[(modes.indexOf(current) + 1) % modes.length];
      if (next === "system") delete document.documentElement.dataset.theme;
      else document.documentElement.dataset.theme = next;
      try {
        localStorage.setItem("guidewire-appearance", next);
      } catch {
        /* Optional preference storage. */
      }
      updateLabel();
    });
  }
  const posts = $("#substack-posts");
  async function loadFeed() {
    if (!posts || !navigator.onLine) return;
    for (const feed of [
      "https://soleintell.substack.com/feed",
      "https://substack.com/feed/@petersorensendpm",
    ]) {
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 4500);
      try {
        const response = await fetch(
          `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(feed)}`,
          { signal: controller.signal },
        );
        if (!response.ok) continue;
        const data = await response.json();
        const safePosts = (data.items || []).filter((item) => {
          try {
            const url = new URL(item.link);
            return (
              url.protocol === "https:" &&
              (url.hostname === "substack.com" ||
                url.hostname.endsWith(".substack.com"))
            );
          } catch {
            return false;
          }
        });
        if (!safePosts.length) continue;
        posts.innerHTML = safePosts
          .slice(0, 3)
          .map((item) => {
            const parser = new DOMParser().parseFromString(
              item.description || item.content || "",
              "text/html",
            );
            const plain = (parser.body.textContent || "")
              .replace(/\s+/g, " ")
              .trim();
            const description =
              plain.length > 150 ? `${plain.slice(0, 150)}…` : plain;
            return `<article class="post-card"><p class="post-meta">From the Substack</p><h3>${escape(item.title)}</h3><p>${escape(description)}</p><a href="${escape(item.link)}" target="_blank" rel="noreferrer">Read post ↗</a></article>`;
          })
          .join("");
        refreshLayout();
        return;
      } catch {
        /* The static publication link remains usable during feed outages. */
      } finally {
        clearTimeout(timeout);
      }
    }
  }
  if (posts && "IntersectionObserver" in window) {
    const feedObserver = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          feedObserver.disconnect();
          loadFeed();
        }
      },
      { rootMargin: "300px" },
    );
    feedObserver.observe(posts);
  } else {
    loadFeed();
  }
})();

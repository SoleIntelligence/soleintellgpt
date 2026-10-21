# GuideWire design overhaul

## Scope

Rebuilt `index.html` and `about.html`, with their shared `styles.css` and `script.js`. All 48 standalone HTML documents, the `infographics.js` catalog, and every original image/video remain unchanged. The site remains a static site with no build step.

## Visual direction

Vivid editorial design: condensed Barlow display type, Manrope body type, the original GuideWire mint-teal (#4fd6d1), pale mint (#7defe9), deep navy-black (#070c10), and cool off-white (#ecf2f0). Saturated full-width chapters connect the main page; documentary photography grounds the About page. Light/dark reading surfaces follow the system, with an optional footer appearance control.

## MotionSites MCP sources

Retrieved through the authenticated MotionSites MCP on September 15, 2026. These are adaptations into this site's existing HTML/CSS/JavaScript architecture, not unmodified templates.

| MotionSites reference                                                               | Application                                                                                                    |
| ----------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| [Bold Portfolio Hero](https://motionsites.ai/?prompt=6)                             | Oversized condensed typography and strong image/type layering in both heroes.                                  |
| [Reveal Hero](https://motionsites.ai/?prompt=reveal-hero)                           | Pointer-following highlight on the guidewire sculpture. Uses a CSS mask instead of canvas data-URL generation. |
| [Scroll Marquee](https://motionsites.ai/?prompt=scroll-marquee)                     | Opposing, scroll-linked rows using the site's real resource thumbnails.                                        |
| [Nimbus Sticky Cards](https://motionsites.ai/?prompt=nimbus-sticky-cards)           | Three sticky topic panels that stack and recede as the next chapter arrives.                                   |
| [Rare Gallery](https://motionsites.ai/?prompt=rare-gallery)                         | Full-height mobile navigation, animated menu bars, and staggered hero entrance.                                |
| [Editorial Collection CTA](https://motionsites.ai/?prompt=editorial-collection-cta) | Oversized subscription section and sequenced scroll reveals with the actual Substack destination.              |
| [Kresna Footer](https://motionsites.ai/?prompt=kresna-footer)                       | Two-part brand/navigation footer and edge-to-edge wordmark.                                                    |

Also reviewed Max Reed Portfolio. Its sample identities, endorsements, numbers, and third-party video assets were not incorporated.

The configured MCP host had a missing `z`. The verified provider URL is `https://xgdzyqfalbibzelpdpvr.supabase.co/functions/v1/mcp`, as published at [MotionSites MCP setup](https://motionsites.ai/mcp). The global MCP configuration was not changed; this task connected directly to the verified provider using the existing sign-in.

## Implementation

- Self-hosted GSAP 3.13.0 and ScrollTrigger; native smooth anchor scrolling and CSS sticky panels. [ScrollTrigger documentation](https://gsap.com/docs/v3/Plugins/ScrollTrigger/).
- No animation is required to read content. Reduced-motion preference disables entrances, marquee parallax, sticky stacking, and magnetic effects. Mobile chapters use normal document flow.
- Local fonts and optimized copies of the portrait and logo. Original files remain intact.
- All 48 resource entries are present in the HTML as a no-JavaScript fallback. With JavaScript, the existing `infographics.js` remains the source of truth; local search, category filters, and show-all controls improve browsing.
- Existing About publications, lectures, biography, advocacy captions/credits, social URLs, and Formspree action/field contracts are retained. Hero and section headings were rewritten for the visual direction.
- The Substack feed loads near the viewport, uses bounded requests, and keeps a useful publication link if the remote service is unavailable.
- No deployment or contact-form submission was performed.

## Generated hero asset

Built-in image generation; output: `assets/images/guidewire-sculpture.webp`. The image is an abstract brand visual, not a device illustration or procedural teaching image.

Prompt: “Use case: stylized-concept. Create a premium abstract 3D brand image for The GuideWire, an educational website about AI and podiatry. A single beautifully intricate flexible metallic guidewire, tightly wound micro-coil construction, bending in a huge elegant continuous open loop like a flowing lowercase cursive g, sculptural rather than literal typography. Floating in a clean very dark blue-black studio (#081517). Brushed chrome with intense electric turquoise and acid-yellow reflections, polished convincing microdetails, cinematic directional lighting, tack sharp, exceptional high-end industrial product rendering, dynamic diagonal composition with generous negative space. Square composition, sculpture fills most of frame. No text, no letters rendered as typography, no logos, no human anatomy, no medical procedure, no particles, no lens flare. This is an abstract visual metaphor for connection and guidance.”

Intermediate palette edit, also using built-in image generation: “Edit this exact image for a website palette change. Preserve the complete sculptural guidewire shape, coiled metal texture, composition, framing, dark blue-black studio background, chrome, and electric turquoise highlights. Replace ALL yellow, gold, and acid-green reflections with vivid coral reflections (#ff795e). The final lighting palette must be chrome silver, electric turquoise, and coral only. No yellow anywhere. Do not add text or change geometry. Keep it sharp, premium, and photorealistic.”

## Preview optimization

The 47 catalog preview images were reduced from 27.9 MB to 1.6 MB (94.4% smaller). Original assets and standalone files are unchanged. The thumbnail manifest is optional: future catalog entries and unavailable mappings fall back to their original thumbnail paths.

Final brand restoration: preserved the original GuideWire mint-teal, pale mint, navy-black, and cool off-white palette. Warm colors and periwinkle were removed from the redesign. Generated image edit preserved all sculpture geometry and chrome detail while replacing warm highlights with #4fd6d1 and #7defe9 over #070c10. Original artwork embedded in resource previews remains unchanged.

The local display and body fonts use compressed WOFF2 Latin subsets; the source fonts and their licenses are retained.

## Verification

- Hash comparison against the pre-redesign inventory: only index.html, about.html, styles.css, and script.js changed among existing files. All 48 standalone HTML documents, the catalog, and original media are unchanged.
- Both pages: local links and assets resolve, IDs are unique, JavaScript parses, and git diff whitespace checks pass. The About form action and required fields match the original; original content links remain. Google-hosted font requests were replaced with local fonts.
- Browser checks: no horizontal overflow at 320px, 390px, 768px, and desktop widths; working resource search, category filters, expansion, empty-state reset, mobile navigation focus loop/Escape, and About section anchors. No console errors observed. Form submission was not exercised.
- The 48-entry catalog renders from the original data. Preview artwork, large headers, scrolling topic panels, research, speaking, contact, and mobile navigation were visually inspected.
- Local Lighthouse mobile simulation: Home performance 81, accessibility 100, best practices 100; About performance 88, accessibility 100, best practices 100. Layout-shift scores were 0 and 0.013 respectively. These measurements use Python's uncompressed local static server and are not production hosting measurements.
- A separate experimental accessible-name warning on the brand link was resolved by using its visible text as its accessible name. Reduced-motion behavior is implemented through CSS and GSAP media queries; it was reviewed in source.

## Foot-and-ankle hero correction

The final hero is `assets/images/guidewire-foot-kwire-v2.webp`, generated using the original `Sole Intelligence Images/logogw.png` as the visual reference. It preserves the recognizable foot silhouette and mint circuitry while showing a smooth, straight, rigid steel K-wire. The earlier flexible coiled guidewire concept is no longer used. The wire sits in front of the abstract foot as a brand composition, not a procedural illustration. The image fits within its container so the foot and pin remain visible on small screens.

Image prompt specified a logo-derived translucent foot sculpture with five stylized toes, mint circuit nodes, and one slender straight smooth stainless-steel pin with a pointed tip. Constraints excluded coils, springs, flexible tubing, curved metal, arrows, badge borders, text, and warm colors. Original logo files remain unchanged.

September 16 correction: the initial foot artwork incorrectly had six toes. The replacement v2 image was edited and visually checked for exactly five distinct toe tips and four interdigital gaps before integration. The straight K-wire and brand palette are retained.

## Awards, honors, and reveal timing (2026-10-20)

### Scope

`about.html`, plus `styles.css` and `script.js` (shared, so the script change applies to both
pages). `index.html` is unchanged apart from the asset cache version. The 48 standalone HTML
documents, `infographics.js`, and the original media are untouched.

A video-led homepage hero and a brand-film section were built and then reverted at Peter's
request: the illustrated `.hero-art` hero stays. `index.html`, `styles.css`, and `script.js` were
restored from their pre-change state and the About work re-applied on top, so no part of that
homepage experiment remains in the stylesheet or the script.

Web encodes of the showreel are kept, unreferenced, in `assets/video/` (hero loop, 720p variant,
the full 0:15 reel with audio, the 0:06 logo sting, and two WebP posters, about 6.3 MB total) in
case they are wanted later. Nothing links to them; `rm -rf "assets/video"` removes them.

### About page

- The AMCAIM Outstanding Research Award leads the research section as a photo-and-copy feature
  (`.award-feature`) with a medal seal over the photograph. AMCAIM is the American College of
  Artificial Intelligence and Medicine; the award was presented in Chicago in October 2026 for the
  AI billing study.
- The 1st MTPJ dynamization poster carries a `.award-ribbon` corner band reading
  "Winner / The National 2026". Its geometry and type are sized in `cqw` against
  `.content-card-media` (`container-type: inline-size`), so it reads the same on a span-2 research
  card and on a phone.
- The 2026 IPMA lecture ("Actually Useful AI in Podiatry Practice") is a wide plate in the speaking
  gallery and heads the selected-lectures list.
- Both awards appear in the honors strip as `.badge-award`.

### About page image weight

The About page was loading **33.0 MB of imagery** — `ToddYoung.jpg` and `Lobbying.jpg` alone were
5.4 MB and 5.1 MB. Scrolling to the advocacy section started a multi-megabyte download and left
empty boxes in place until it finished. Optimized WebP copies now live in `assets/images/about/`,
capped at twice their rendered width, and `about.html` points at those with matching
`width`/`height` attributes. Originals in `Sole Intelligence Images/` are untouched and still serve
the standalone documents.

**33.0 MB to 1.61 MB, 95% smaller.** The same approach as the earlier thumbnail pass.

### Reveal timing

Fast scrolling previously left cards blank: `[data-reveal]` starts at opacity 0, fired at
`start: "top 94%"`, and took 0.8s. The award feature added roughly 600px above the research grid,
which pushed more of the page into that window and made it obvious. The oversized photographs above
compounded it — the fade was masking how long the artwork took to arrive.

- `start: "top bottom"` — the fade begins as the element enters the viewport rather than when it is
  almost fully in view, giving it a full viewport of scrolling to finish.
- `duration: 0.55` instead of 0.8.
- `onEnter` snaps the tween to its end state when `getVelocity()` exceeds 1800 px/s, so a hard flick
  shows content outright. Measured peak here is about 6100 px/s on a fast scroll, while ordinary
  wheel scrolling stays well under the threshold, so the animation still plays normally.

A per-image `ScrollTrigger.refresh()` was tried and removed: every image carries `width`/`height`,
so late artwork reserves its own space and trigger positions never move, while refreshing on each
image load measurably disturbed in-flight smooth scrolling.

### Editorial structure for the second half

Advocacy, speaking, and support were three large flat colour fields carrying nothing but body copy.
Numerals now carry the rhythm, all driven by CSS counters so the markup stays as authored:

- **Section indices.** `01 Research` through `05 Contact`, set in the display face with a trailing
  rule. The opening story section stays unnumbered as the narrative lead-in.
- **Advocacy.** The first paragraph is promoted to a lead statement, and the three pillars become a
  numbered list with rules between. The numeral holds its own grid column spanning both rows, so the
  heading and its copy stack beside it rather than the paragraph falling into the next row.
- **Lecture archive.** The ten uniform cards become a single numbered index: number, title, and a
  right-aligned venue and date, with a hover state. On narrow screens the meta drops to its own row.
- **Ways to help.** The same numerals replace the arrow bullets, scoped to `.support-card` so the
  speaking section's topic list keeps its original treatment.

Every restyled class (`.section-index`, `.feature-item`, `.lecture-list`, `.support-card
.topic-list`, `.advocacy-copy`) is used only on the About page, so the homepage and the 48
standalone documents are unaffected.

### Advocacy photographs fading out (2026-10-21)

The six figures in the advocacy gallery carry `data-reveal` **and** match
`.gallery-stack .gallery-card`, so two `gsap.from()` tweens owned the same elements. Because
`gsap.from()` captures its END value when the tween is created:

1. The `data-reveal` tween is built first and, through `immediateRender`, sets `opacity: 0`.
2. The `.gallery-stack` tween is built second. `gsap.from(card, {opacity: 0.65})` means "animate
   from 0.65 to whatever this element is now" — and it was now `0`.
3. So its scrub ran `0.65 -> 0`: the nearer a photograph came to the top of the screen, the more it
   faded out.

`.gallery-stack .gallery-card` is now excluded from the generic `[data-reveal]` loop; the
scroll-linked treatment owns those figures alone. The speaking gallery is unaffected, as its
figures sit in `.media-pair`, not `.gallery-stack`.

The scrub was also softened from `opacity: 0.4`, `top 96%` -> `top 65%` to `opacity: 0.65`,
`top 100%` -> `top 78%`, so the photographs enter mostly solid and reach full strength while still
low on the screen. It reads as a lift rather than a fade. Those four numbers are the dial if it
wants to be more or less pronounced.

### Measuring this correctly

Two traps cost real time here, both producing confident but wrong readings:

- **A hidden preview pane** reports `innerWidth: 0`, so `(min-width: 900px)` does not match, the
  scrub tweens are never created, lazy images never load, and rAF is throttled — every element
  reads as opacity 0. Confirm `innerWidth` is non-zero before trusting any measurement.
- **Programmatic `window.scrollTo()`** does not drive ScrollTrigger in this automation:
  `trigger.scroll()` stays at 0 while `pageYOffset` moves, so every tween reads as progress 0. Real
  wheel events through the `computer` tool track correctly. Measure with real scrolling, or call
  `ScrollTrigger.update()` after each jump.

Verified after the fix with a continuous wheel scroll and a 120ms sampler: across 95 samples no
card fell below 0.65 and none dropped after rising.

### Verification

- About page at 375px, 1024px, and 1440px: no horizontal overflow, all local references resolve,
  ids unique, no dangling fragments.
- After sweeping the full page, no `[data-reveal]` element scrolled past is left under full
  opacity, and the only image still unloaded is the footer logo several thousand pixels below.
- The blank-card failure was originally reproduced against a `Cache-Control: no-store` server
  (`NOCACHE=1 python3 .claude/serve.py 8787`) and confirmed fixed under the same conditions.
- Note when testing through an automated browser: with the preview pane hidden the page runs as a
  background page, so lazy loading and IntersectionObserver do not fire and every image reads as
  unloaded. Verify with the pane visible.
- Homepage re-checked: no `<video>`, no reel section, no scroll rail, illustrated hero intact, and
  the catalog rendering all 50 entries. Its diff against `HEAD` is Peter's own two resource cards
  plus the asset cache version.
- `styles.css` and `script.js` pass Prettier.
- `.claude/serve.py` and `.claude/launch.json` are local preview helpers, not part of the site.

## ELP capstone article and MILES photo (2026-10-21)

### New page

`professional_literacy.html` — "Podiatry's Alphabet Soup Problem", the ELP capstone write-up,
copied from `Desktop/Website Playground/Guidewire-Podiatric-Literacy.html`. It is self-contained
with its own styles and inline base64 artwork, matching how the other standalone documents work.

Before copying, the source file (and the copy) had its two article controls removed: the
"Copy article link" and "Print or save PDF" buttons, the status line they wrote to, the `.action-row`
/ `.button` / `.copy-status` styles, their entry in the print rule, and the `<script>` block that
existed only to drive them. The shared `a:focus-visible` outline was kept out of the deleted
`.button:focus-visible` rule. The only remaining script is the JSON-LD schema in the head.

Catalogued under `politics-culture` with kicker "ELP Capstone" and date `2026-08-09`, which places
it third in that section. Added to `infographics.js`, to the no-JavaScript fallback grid in
`index.html` (whose `data-card-index` values were renumbered and whose count went 28 -> 29), and to
`assets/thumbnails/manifest.js`.

### Thumbnail

The supplied hero image is 1498x930, but catalog cards render square under `object-fit: cover`, so
a straight resize would have sliced the headline. `assets/thumbnails/professional_literacy.webp` is
960x873 — matching the proportions of its neighbours — with the full composition scaled to the
width and padded top and bottom in the hero's own background (`#09151b`), so the padding is
invisible and nothing is cropped. The original is archived at
`Sole Intelligence Images/professional_literacy.png`.

### Catalog cache busting

`infographics.js` and `assets/thumbnails/manifest.js` were loaded with no version query, so a
returning visitor kept a stale catalog and would not see newly added entries. Both now carry `?v=`
alongside the existing `styles.css` and `script.js` versions. Bump all four together when
publishing.

### MILES award photo

The 2025 MILES resident-faculty award photograph was removed from the speaking gallery. Its
generated `assets/images/about/speaking-miles-award.webp` was deleted as it is now unreferenced;
the original `Sole Intelligence Images/award.jpg` is untouched. The two other MILES mentions are
different items and remain: the limb-salvage poster in the research grid, and the San Antonio entry
in the lecture list.

With that figure gone, the 2026 IPMA lecture plate became the second child of the gallery and would
have inherited `.topic-gallery .gallery-card:nth-child(2)` (65% wide, right-aligned). The wide-plate
rule is now `.topic-gallery .media-pair .gallery-card-wide`, which matches that specificity and wins
on order, holding it at 86% and left-aligned. Verified at 1440px: 628.6px of a 731px column.

### Verification

- All three pages: local references resolve, ids unique.
- Catalog: 51 entries, 29 in politics-culture, no duplicate urls, every entry's target page exists.
- The new card renders in position three with the right kicker, title, date and thumbnail, and
  clicking it lands on `professional_literacy.html`, which reports zero buttons and one script.

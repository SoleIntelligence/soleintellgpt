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

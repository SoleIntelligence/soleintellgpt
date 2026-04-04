# Sole Intelligence Website

Static site build for GitHub + Vercel deployment.

## Files

- `index.html` — main one-page site
- `styles.css` — all styling
- `script.js` — mobile nav and Substack feed loading
- `Sole Intelligence Images/` — put all provided images and mp4 files here

## Required asset folder

Keep this exact folder name in the project root:

`Sole Intelligence Images`

Put these files inside it:

- `logo.jpg`
- `logoanimation.mp4`
- `logoanimationplayful.mp4`
- `headshot.jpg`
- `ToddYoung.jpg`
- `Lobbying.jpg`
- `speaking.jpg`
- `apma.jpg`
- `elp.jpg`
- `IPMA.jpg`
- `award.jpg`
- `Martorell.jpg`
- `PCFD.jpg`
- `Staged Dynamization.jpg`
- `Calc Fx.jpg`
- `Fish Skin.jpg`
- `miles.jpg`

## Deploy to Vercel

1. Push this folder to GitHub.
2. Import the repo into Vercel.
3. Framework preset: `Other` or static site.
4. No build command needed.
5. Output directory: leave blank.

## Notes

- The contact form is already wired to Formspree.
- The site is mobile-first and uses plain HTML/CSS/JS for easy deployment.
- The Substack section tries to load the latest posts dynamically. If the feed does not resolve in a browser, it falls back to the main Substack link.
- All speaking and lobbying images already include caption areas in the layout.

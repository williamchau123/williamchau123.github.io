# Copilot Instructions for williamchau123.github.io

## Project Overview
Personal portfolio website for William Chau—a web developer & UI designer. Built with **Vite** (no frameworks) as a vanilla JavaScript + CSS project. Emphasis on smooth animations, custom cursor interactions, and responsive design.

## Architecture

### Module Structure
- **`src/main.js`** — Entry point. Handles:
  - Scroll animations via `IntersectionObserver` (fade-in-up effects)
  - Smooth anchor link scrolling
  - Custom cursor movement and hover effects
  - Directional hover effects on CTA buttons and project cards
- **`src/counter.js`** — Utility module (setupCounter) for interactive elements
- **`src/style.css`** — Global styles with CSS variables for theming
- **`index.html`** — Single page with semantic sections (home, work, about, contact)

### Key Files
- `vite.config.js` — Dev server on port 3000, outputs to `dist/`, base path `/`
- `package.json` — Minimal deps: only Vite
- `public/` — Static assets (favicon, web manifest)

## Build & Dev Workflow

```bash
npm run dev      # Start Vite dev server (port 3000, auto-opens browser)
npm run build    # Bundle to dist/ (no sourcemaps)
npm run preview  # Preview production build locally
```

**Deployment Strategy**: Built files in `dist/` are likely deployed to GitHub Pages (based on repo name).

## Design Patterns & Conventions

### CSS Variables & Theming
All colors and spacing defined in `:root`:
```css
--bg-color: #000000
--brand-color: #fff8c0      /* Accent yellow */
--text-primary/secondary    /* Text colors */
--transition-speed: 0.6s    /* Animations timing */
```
Modify theme globally by updating CSS variables. No hard-coded colors in rule sets.

### Animation Triggers
- **Scroll animations**: Elements with class `.fade-in-up` are observed; class `.visible` triggers transitions
- **Hover interactions**: Custom cursor scales/changes on `.hovering` body class
- **Directional effects**: CTA buttons and project cards use CSS custom properties (`--x`, `--y`) set by JavaScript for light-based hover effects

### Interactive Elements
Interactive elements trigger `.hovering` state: `<a>`, `<button>`, `.cta-button`, `.bento-card`

## Critical Patterns

1. **Single-Page with Hash Navigation**: All navigation uses `#` anchors. Smooth scrolling handled in `main.js`
2. **No Framework**: Pure vanilla JS—no React, Vue, etc. Keep it lightweight
3. **Custom Cursor**: Replaces default; ensure `cursor: none` on body and never change it to auto
4. **Lazy Loading via IntersectionObserver**: Efficient scroll animations—don't replace with scroll event listeners
5. **CSS Grid/Flexbox**: Project cards use `bento-grid` layout; likely CSS Grid for responsiveness

## Common Tasks

### Adding New Sections
1. Create `<section id="...">` in `index.html`
2. Add `.fade-in-up` class to elements for animation
3. Add anchor link in nav `<ul>`
4. Style in `src/style.css` using existing CSS variables

### Modifying Interactions
- Cursor behavior: Edit `main.js` mousemove/hover event listeners
- Animation timing: Adjust `--transition-speed` or individual transition durations in CSS
- Hover effects: Modify CSS for `.hovering` state or JavaScript event handlers

### Styling
- Keep all colors as CSS variables
- Use `clamp()` for responsive font sizes (e.g., `font-size: clamp(40px, 8vw, 80px)`)
- Leverage `-webkit-background-clip: text` for gradient text effects

## Testing & Debugging

- **Dev mode**: `npm run dev` auto-reloads on file changes
- **Browser DevTools**: Inspect custom cursor positioning (`.cursor-dot`), animation class toggling (`.visible`, `.hovering`)
- **Mobile testing**: Vite's dev server responds to network requests; test cursor behavior on touch devices (may need fallback)

## Dependencies & Constraints

- **Only Vite** as dev dependency—no UI libraries, no CSS frameworks
- No build-time templating—HTML is static
- No Node.js runtime code—runs entirely in browser
- Favicon files (`apple-touch-icon.png`, `favicon-32x32.png`, etc.) must exist in `public/`

## File Structure Guidelines

- **Keep `main.js` focused**: If adding complex interactivity, extract into separate modules in `src/`
- **CSS organization**: Related styles grouped by component/section
- **Asset naming**: Prefix with component name (e.g., `project-thumbnail.png`)

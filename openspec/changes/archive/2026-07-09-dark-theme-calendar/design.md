## Context

Current state: `index.html` uses Apple-style light theme with SF Pro Display font, white background (#f5f5f7), and blue accents (#007aff). The calendar displays trading P/L data but the visual style doesn't match the stock trading context.

Target state: `index-2.html` with dark trading theme inspired by IB/Futu, using cute/playful aesthetics, Tailwind CSS, and optional sparkline charts.

## Goals / Non-Goals

**Goals:**
- Create visually appealing dark theme for trading P/L review
- Maintain all existing functionality (CSV loading, P/L calculation, month navigation)
- Use Tailwind CSS for efficient styling
- Implement cute/playful fonts (Nunito)
- Provide optional sparkline charts with easy rollback
- Preserve original `index.html` unchanged

**Non-Goals:**
- No hover effects or animations (static display only)
- No new data features or calculation changes
- No mobile-responsive design (desktop focus)
- No backend changes

## Decisions

### 1. Tailwind CSS via CDN
**Choice:** Use Tailwind Play CDN for development
**Why:** Fast iteration, no build step, easy to customize
**Alternatives considered:**
- Custom CSS only: More work, less utility
- Tailwind CLI build: Overkill for single file

### 2. Cute Font: Nunito
**Choice:** Google Fonts Nunito (rounded, friendly)
**Why:** Matches "可愛情" requirement, good readability
**Alternatives considered:**
- Comfortaa: More geometric, less warm
- Quicksand: Similar but lighter weight

### 3. Color Palette
**Choice:** Deep purple-blue backgrounds with pink/red profit/loss colors
**Why:** Trading theme + cute aesthetic balance
```
Background: #1a1a2e (deep purple-blue)
Profit: #ff6b9d (pink 💖)
Loss: #c44569 (rose)
Accent: #f8b500 (gold ✨)
```

### 4. Sparkline Implementation
**Choice:** Lightweight canvas solution (~5KB) with fallback
**Why:** Minimal dependency, easy rollback
**Rollback strategy:** Remove `<script src="sparklines.js">` and `.sparkline-container` CSS

### 5. File Structure
**Choice:** Single `index-2.html` file with inline styles + optional sparklines.js
**Why:** Simple deployment, no build process

## Risks / Trade-offs

- **CDN dependency:** Tailwind/Fonts require internet → Mitigation: Works offline with cached assets
- **File size:** Inline CSS/JS may be larger → Acceptable for single-page app
- **Sparkline complexity:** May need tuning → Mitigation: Make it optional/removable

## Migration Plan

1. Create `index-2.html` alongside existing `index.html`
2. Test all functionality works identically
3. No production deployment needed (local review tool)
4. Rollback: Delete `index-2.html` or remove sparklines.js reference

## Open Questions

- Confirm font choice: Nunito vs Comfortaa?
- Sparkline detail level: Simple line vs candlestick style?

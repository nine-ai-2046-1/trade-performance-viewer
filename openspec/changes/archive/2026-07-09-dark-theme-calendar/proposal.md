## Why

The current calendar uses a light Apple-style theme which doesn't match the stock trading context. A dark trading-themed calendar would be more visually appropriate for reviewing P/L data, similar to professional trading platforms like IB and Futu. The new design should use cute/playful aesthetics rather than serious terminal style.

## What Changes

- Create a new `index-2.html` with dark trading theme (original `index.html` preserved)
- Apply Tailwind CSS for rapid dark mode styling
- Use cute/playful fonts (Nunito or similar) instead of system fonts
- Implement dark color palette with profit/loss color coding (pink for profit, red for loss)
- Add emoji indicators with cute kaomoji faces for emotional context
- Optional sparkline mini-charts (can be rolled back by removing script tag)
- Static display only (no hover effects or animations)

## Capabilities

### New Capabilities
- `dark-theme-styling`: Dark color scheme, Tailwind CSS integration, custom color palette
- `cute-fonts`: Playful typography with Google Fonts (Nunito/Comfortaa)
- `sparkline-charts`: Optional mini P/L charts in calendar cells (rollback-safe)

### Modified Capabilities

## Impact

- New file: `index-2.html` (no changes to existing `index.html`)
- Dependencies: Tailwind CSS CDN, Google Fonts CDN
- Optional: Chart.js for sparklines (~60KB) or lightweight canvas solution (~5KB)

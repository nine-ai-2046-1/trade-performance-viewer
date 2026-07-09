## Why

Need a simple, static web calendar view that displays June 2026 and July 2026 in a clean Apple Calendar-style layout. Events are defined in a JavaScript array and rendered on their corresponding dates. This serves as a lightweight, single-page calendar component with no build tools or frameworks required.

## What Changes

- Create a single HTML file (`index.html`) with embedded CSS and JavaScript
- Display two monthly calendar grids: June 2026 and July 2026
- Render events from a JS array onto corresponding date cells
- Use `YYMMDD` format as event IDs (e.g., `260709` = July 9, 2026)
- Highlight today's date (2026-07-09)
- Pure HTML/CSS/JS — no dependencies, no build step

## Capabilities

### New Capabilities

- `calendar-view`: Monthly grid calendar displaying June and July 2026 with event rendering from a JS array, using YYMMDD date IDs

### Modified Capabilities

None (new project)

## Impact

- New file: `index.html` (single-page application)
- No external dependencies
- No API calls — all data is client-side static JS

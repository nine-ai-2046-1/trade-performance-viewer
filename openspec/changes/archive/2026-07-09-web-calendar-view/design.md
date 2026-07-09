## Context

Building a static single-page web calendar that displays June 2026 and July 2026 in an Apple Calendar-style layout. The calendar renders events from a hardcoded JS array onto corresponding date cells using `YYMMDD` as the date ID format. No frameworks, no build tools — pure HTML/CSS/JS.

## Goals / Non-Goals

**Goals:**
- Two monthly calendar grids (June 2026, July 2026) stacked vertically
- Events defined in a JS array, rendered on matching dates
- `YYMMDD` format as event ID (e.g., `260709` = July 9, 2026)
- Highlight today's date (2026-07-09)
- Clean Apple Calendar aesthetic
- Single `index.html` file — zero dependencies

**Non-Goals:**
- Month navigation (fixed to June/July 2026)
- Event creation/editing UI
- Responsive/mobile layout
- Persistence or backend

## Decisions

### 1. Single HTML file with embedded CSS/JS

**Decision**: All code in one `index.html` file.

**Rationale**: User explicitly requested a simple single-page solution. No build step, no external files. Easy to open directly in a browser.

### 2. YYMMDD as event ID

**Decision**: Events use `YYMMDD` string as their ID (e.g., `260709`).

**Rationale**: User specified this format. Simple to parse: first 2 chars = year, next 2 = month, last 2 = day. Events are matched to calendar cells by comparing IDs.

### 3. CSS Grid for calendar layout

**Decision**: Use CSS Grid (7 columns) for the calendar grid.

**Rationale**: Natural fit for a 7-day week layout. Clean, predictable, no float hacks needed.

### 4. Event display in date cells

**Decision**: Show event title directly inside the date cell, below the date number.

**Rationale**: Matches Apple Calendar style. Keeps events visible without extra clicks.

## Risks / Trade-offs

- **Fixed date range** → No navigation, but that's the requirement
- **Hardcoded events** → User edits JS array directly, which is the intended workflow
- **No responsiveness** → Desktop-first layout, acceptable for the scope

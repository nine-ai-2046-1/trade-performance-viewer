## ADDED Requirements

### Requirement: Optional sparkline charts
The system SHALL support optional mini sparkline charts in calendar cells showing daily P/L trend.

#### Scenario: Sparkline displayed
- **WHEN** sparklines.js is included AND day has P/L data
- **THEN** small line chart SHALL be rendered in the cell

### Requirement: Rollback-safe implementation
The system SHALL allow sparklines to be disabled by removing a single script tag.

#### Scenario: Remove sparklines
- **WHEN** user removes `<script src="sparklines.js">` tag
- **THEN** calendar SHALL continue working normally without charts

### Requirement: Lightweight canvas implementation
The system SHALL use canvas-based sparklines (~5KB) instead of heavy charting libraries.

#### Scenario: Canvas element created
- **WHEN** sparkline renders
- **THEN** it SHALL use HTML5 Canvas element with minimal footprint

### Requirement: Sparkline color coding
The system SHALL display sparklines in green for profit days and red for loss days.

#### Scenario: Green sparkline
- **WHEN** day's total P/L is positive
- **THEN** sparkline line SHALL be green (#00d4aa)

#### Scenario: Red sparkline
- **WHEN** day's total P/L is negative
- **THEN** sparkline line SHALL be red (#ff4757)

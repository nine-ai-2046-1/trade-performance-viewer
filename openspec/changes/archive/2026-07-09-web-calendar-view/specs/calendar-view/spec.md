## ADDED Requirements

### Requirement: Display June 2026 calendar grid
The system SHALL display a monthly calendar grid for June 2026 with 7 columns (Mon–Sun) and correct date placement.

#### Scenario: June 2026 renders correctly
- **WHEN** the page loads
- **THEN** a calendar grid for June 2026 is shown with dates 1–30 placed in correct weekday columns

### Requirement: Display July 2026 calendar grid
The system SHALL display a monthly calendar grid for July 2026 with 7 columns (Mon–Sun) and correct date placement.

#### Scenario: July 2026 renders correctly
- **WHEN** the page loads
- **THEN** a calendar grid for July 2026 is shown with dates 1–31 placed in correct weekday columns

### Requirement: Render events from JS array
The system SHALL read events from a JavaScript array and display each event's title on its corresponding date cell.

#### Scenario: Event appears on correct date
- **WHEN** the JS array contains `{ id: "260709", title: "Meeting" }`
- **THEN** the July 9 cell displays "Meeting"

#### Scenario: Multiple events on same date
- **WHEN** the JS array contains multiple events with the same date ID
- **THEN** all event titles appear in that date cell

#### Scenario: No events on a date
- **WHEN** a date has no matching events in the JS array
- **THEN** the date cell shows only the date number

### Requirement: YYMMDD event ID format
Events SHALL use `YYMMDD` string format as their ID, where YY = year (2 digits), MM = month (2 digits), DD = day (2 digits).

#### Scenario: Valid ID parsing
- **WHEN** an event has `id: "260709"`
- **THEN** it maps to July 9, 2026

### Requirement: Highlight today's date
The system SHALL visually highlight the current date (2026-07-09) with a distinct style.

#### Scenario: Today is highlighted
- **WHEN** the page loads on 2026-07-09
- **THEN** the July 9 cell has a highlighted background or border

### Requirement: Apple Calendar aesthetic
The system SHALL use a clean, minimal visual style inspired by Apple Calendar — light background, clear grid lines, readable typography.

#### Scenario: Visual style matches Apple Calendar
- **WHEN** the page loads
- **THEN** the calendar displays with clean grid lines, sans-serif font, and a minimal header per month

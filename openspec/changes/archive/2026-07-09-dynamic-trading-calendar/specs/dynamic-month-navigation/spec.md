## ADDED Requirements

### Requirement: Generate months from data
The system SHALL generate month list based on the date range in the data.

#### Scenario: Extract available months
- **WHEN** data spans from 2026-05-29 to 2026-07-09
- **THEN** the system generates months: May 2026, June 2026, July 2026

#### Scenario: Single month data
- **WHEN** data only exists in July 2026
- **THEN** the system generates only July 2026

### Requirement: Navigate between months
The system SHALL allow users to navigate to previous and next months.

#### Scenario: Click next month
- **WHEN** user clicks next button and next month exists
- **THEN** the system displays the next month's calendar

#### Scenario: Click previous month
- **WHEN** user clicks previous button and previous month exists
- **THEN** the system displays the previous month's calendar

#### Scenario: At first month boundary
- **WHEN** user is viewing the first available month
- **THEN** the previous button is disabled or hidden

#### Scenario: At last month boundary
- **WHEN** user is viewing the last available month
- **THEN** the next button is disabled or hidden

### Requirement: Default to current month
The system SHALL display the current month if it exists in the data.

#### Scenario: Current month has data
- **WHEN** the current month (July 2026) has trading data
- **THEN** the system displays July 2026 by default

#### Scenario: Current month has no data
- **WHEN** the current month has no trading data
- **THEN** the system displays the latest available month

## ADDED Requirements

### Requirement: Parse CSV content
The system SHALL parse CSV content and extract trading records.

#### Scenario: Parse valid CSV
- **WHEN** CSV content is provided
- **THEN** the system extracts fields: close_time, product, direction, entry_price, close_price, volume, net_profit, balance

#### Scenario: Handle CSV header
- **WHEN** CSV contains header row
- **THEN** the system skips the header row and processes data rows only

#### Scenario: Handle empty rows
- **WHEN** CSV contains empty rows
- **THEN** the system ignores empty rows

#### Scenario: Parse date format
- **WHEN** close_time field is parsed
- **THEN** the system converts "09 7 月 2026 09:21:29.429" format to Date object

#### Scenario: Parse numeric fields
- **WHEN** net_profit field is parsed
- **THEN** the system converts string to number (e.g., "190.98" to 190.98)

#### Scenario: Parse product names
- **WHEN** product field is parsed
- **THEN** the system normalizes to "JPN225", "US500", or "HK50"

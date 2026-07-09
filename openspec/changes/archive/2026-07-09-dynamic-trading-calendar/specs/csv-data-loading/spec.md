## ADDED Requirements

### Requirement: Load CSV data from file
The system SHALL load trading data from data/data.csv using the Fetch API.

#### Scenario: Successful data loading
- **WHEN** the page loads or refreshes
- **THEN** the system fetches data/data.csv with cache-control: no-cache

#### Scenario: File not found
- **WHEN** data/data.csv is not accessible
- **THEN** the system displays an error message and prevents calendar rendering

#### Scenario: Network error
- **WHEN** a network error occurs during fetch
- **THEN** the system displays an error message and prevents calendar rendering

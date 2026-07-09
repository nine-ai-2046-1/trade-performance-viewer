## ADDED Requirements

### Requirement: Calculate daily P/L by product
The system SHALL calculate the sum of net_profit for each product per day.

#### Scenario: Single product single day
- **WHEN** there are multiple trades for JPN225 on 2026-07-09
- **THEN** the system sums all net_profit values for JPN225 on that date

#### Scenario: Multiple products same day
- **WHEN** there are trades for JPN225, US500, and HK50 on 2026-07-08
- **THEN** the system calculates separate P/L totals for each product

#### Scenario: No trades for product on day
- **WHEN** there are no trades for US500 on 2026-07-09
- **THEN** the system does not include US500 in that day's data

### Requirement: Calculate daily total P/L
The system SHALL calculate the total P/L for all products per day.

#### Scenario: Calculate daily total
- **WHEN** there are trades for multiple products on a day
- **THEN** the system sums all product P/L totals for that day

#### Scenario: Single product day
- **WHEN** there is only one product traded on a day
- **THEN** the daily total equals that product's P/L

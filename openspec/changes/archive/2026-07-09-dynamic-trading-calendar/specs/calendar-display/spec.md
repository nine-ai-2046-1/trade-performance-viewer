## ADDED Requirements

### Requirement: Display product P/L in calendar cell
The system SHALL display each product's name and P/L total in the calendar cell.

#### Scenario: Single product day
- **WHEN** only JPN225 was traded on a day with P/L of +1953.24
- **THEN** the cell displays "🟢 JPN225 +1953.24"

#### Scenario: Multiple products day
- **WHEN** JPN225 (+1953.24), US500 (-892.15), and HK50 (+578.90) were traded
- **THEN** the cell displays three lines with each product's P/L

#### Scenario: Product not traded
- **WHEN** US500 was not traded on a day
- **THEN** US500 is not displayed in that day's cell

### Requirement: Display profit/loss emoji
The system SHALL display emoji before product name based on P/L sign.

#### Scenario: Profit emoji
- **WHEN** product P/L is positive
- **THEN** display 🟢 before product name

#### Scenario: Loss emoji
- **WHEN** product P/L is negative
- **THEN** display 🔴 before product name

#### Scenario: Zero P/L
- **WHEN** product P/L is zero
- **THEN** display ⚪ before product name

### Requirement: Apply product-specific font colors
The system SHALL apply different font colors for each product.

#### Scenario: JPN225 color
- **WHEN** displaying JPN225
- **THEN** use font color #8B5CF6 (purple)

#### Scenario: US500 color
- **WHEN** displaying US500
- **THEN** use font color #3B82F6 (blue)

#### Scenario: HK50 color
- **WHEN** displaying HK50
- **THEN** use font color #92400E (brown)

### Requirement: Display daily total P/L
The system SHALL display the total P/L for each day.

#### Scenario: Show daily total
- **WHEN** there are trades on a day
- **THEN** display "總計: +1540.00" at the bottom of the cell

#### Scenario: No trades day
- **WHEN** there are no trades on a day
- **THEN** do not display any total

### Requirement: Remove hardcoded data
The system SHALL remove all hardcoded EVENTS and MONTHS arrays.

#### Scenario: Clean index.html
- **WHEN** the change is implemented
- **THEN** EVENTS and MONTHS arrays are removed from index.html

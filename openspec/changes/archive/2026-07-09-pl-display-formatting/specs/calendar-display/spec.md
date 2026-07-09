## MODIFIED Requirements

### Requirement: Display product P/L in calendar cell
The system SHALL display each product's name and P/L total in the calendar cell.

#### Scenario: Single product day
- **WHEN** only JPN225 was traded on a day with P/L of +1953
- **THEN** the cell displays "🟢 JPN225 +$1953"

#### Scenario: Multiple products day
- **WHEN** JPN225 (+1953), US500 (-892), and HK50 (+578) were traded
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
The system SHALL display the total P/L for each day with emoji and $ symbol.

#### Scenario: Show daily total with profit
- **WHEN** there are trades on a day and total is positive
- **THEN** display "🟢 Total: +$1953" at the bottom of the cell

#### Scenario: Show daily total with loss
- **WHEN** there are trades on a day and total is negative
- **THEN** display "🔴 Total: -$892" at the bottom of the cell

#### Scenario: No trades day
- **WHEN** there are no trades on a day
- **THEN** do not display any total

### Requirement: Display monthly P/L under month label
The system SHALL display the total P/L for the month under the month label.

#### Scenario: Show monthly total
- **WHEN** rendering a month
- **THEN** display "🟢 Total: +$12,345" under the month label

#### Scenario: Monthly total with loss
- **WHEN** the month's total P/L is negative
- **THEN** display "🔴 Total: -$1,234" under the month label

### Requirement: Format P/L values without decimals
The system SHALL display P/L values as integers without decimal points.

#### Scenario: Integer formatting
- **WHEN** P/L value is 1953.24
- **THEN** display as "$1953" (rounded to nearest integer)

### Requirement: Use English labels
The system SHALL use English labels instead of Chinese.

#### Scenario: Total label
- **WHEN** displaying daily or monthly total
- **THEN** use "Total:" instead of "總計:"

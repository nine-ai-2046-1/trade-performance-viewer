## MODIFIED Requirements

### Requirement: Display application title
The system SHALL display the application title as "Nines".

#### Scenario: Show title
- **WHEN** the page loads
- **THEN** display "Nines" as the main title

### Requirement: Apply product-specific font colors
The system SHALL apply different font colors for each product.

#### Scenario: HK50 color
- **WHEN** displaying HK50
- **THEN** use font color #3B82F6 (blue)

#### Scenario: US500 color
- **WHEN** displaying US500
- **THEN** use font color #8B5CF6 (purple)

#### Scenario: JPN225 color
- **WHEN** displaying JPN225
- **THEN** use font color #FF9500 (orange)

### Requirement: Display monthly P/L under month label
The system SHALL display the total P/L for the month using `<br>` to connect with the month label.

#### Scenario: Show monthly total
- **WHEN** rendering a month
- **THEN** display month label followed by `<br>` and then "🟢 Total: +$12,345"

#### Scenario: Monthly total with loss
- **WHEN** the month's total P/L is negative
- **THEN** display month label followed by `<br>` and then "🔴 Total: -$1,234"

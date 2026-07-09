## ADDED Requirements

### Requirement: Dark color scheme
The system SHALL display the calendar with a dark background theme using deep purple-blue colors (#1a1a2e, #16213e).

#### Scenario: Dark background applied
- **WHEN** user opens index-2.html
- **THEN** page background SHALL be dark (#1a1a2e or similar)

### Requirement: Profit/loss color coding
The system SHALL use pink (#ff6b9d) for profit amounts and rose (#c44569) for loss amounts.

#### Scenario: Profit displayed in pink
- **WHEN** daily P/L is positive
- **THEN** amount SHALL be displayed in pink color with + prefix

#### Scenario: Loss displayed in rose
- **WHEN** daily P/L is negative
- **THEN** amount SHALL be displayed in rose color with parentheses notation

### Requirement: Tailwind CSS integration
The system SHALL use Tailwind CSS via CDN for styling utilities.

#### Scenario: Tailwind classes available
- **WHEN** page loads
- **THEN** Tailwind CSS framework SHALL be loaded from CDN

### Requirement: Cell styling
The system SHALL display calendar cells with semi-transparent white backgrounds and subtle borders.

#### Scenario: Cell appearance
- **WHEN** calendar renders
- **THEN** each cell SHALL have background: rgba(255,255,255,0.05) and border-radius: 12px

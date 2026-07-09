## ADDED Requirements

### Requirement: Cute playful font
The system SHALL use Nunito font from Google Fonts for all text display.

#### Scenario: Font loaded
- **WHEN** page loads
- **THEN** Nunito font SHALL be loaded from Google Fonts CDN

### Requirement: Rounded font appearance
The system SHALL display text with rounded, friendly typography suitable for cute aesthetic.

#### Scenario: Text rendered with Nunito
- **WHEN** any text is displayed
- **THEN** font-family SHALL include Nunito as primary font

### Requirement: Kaomoji indicators
The system SHALL use cute kaomoji faces alongside emoji for emotional context on P/L displays.

#### Scenario: Happy face for profit
- **WHEN** product P/L is positive
- **THEN** display SHALL include (◕‿◕) or similar happy kaomoji

#### Scenario: Sad face for loss
- **WHEN** product P/L is negative
- **THEN** display SHALL include (｡•́︿•̀｡) or similar sad kaomoji

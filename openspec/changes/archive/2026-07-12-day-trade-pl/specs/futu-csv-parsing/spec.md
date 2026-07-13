## ADDED Requirements

### Requirement: Parse Futu CSV format
The system SHALL parse Futu CSV files with 37 columns and Chinese headers using column index-based extraction.

#### Scenario: Parse filled trades
- **WHEN** Futu CSV is loaded
- **THEN** system SHALL extract trades where 交易狀態 == "全部成交"

### Requirement: Handle BOM encoding
The system SHALL handle UTF-8-BOM encoded CSV files correctly.

#### Scenario: BOM header present
- **WHEN** CSV file starts with BOM character
- **THEN** first header SHALL be parsed correctly without encoding artifacts

### Requirement: Extract trade fields
The system SHALL extract the following fields from each trade row:
- 方向 (direction): 買入 or 賣出
- 代碼 (stock code)
- 名稱 (stock name)
- 成交數量 (filled quantity)
- 成交價格 (filled price)
- 成交金額 (filled amount)
- 成交時間 (fill time)
- 幣種 (currency): HKD or USD
- 合計費用 (total fees)

#### Scenario: Extract US stock trade
- **WHEN** row has 市場 == "美股" and 幣種 == "USD"
- **THEN** system SHALL extract all fields with USD currency

#### Scenario: Extract HK stock trade
- **WHEN** row has 市場 == "港股" and 幣種 == "HKD"
- **THEN** system SHALL extract all fields with HKD currency

### Requirement: Parse date from fill time
The system SHALL parse the date portion from 成交時間 field.

#### Scenario: Parse US time format
- **WHEN** 成交時間 is "2026/07/02 04:27:00 (美東)"
- **THEN** date SHALL be "2026-07-02"

#### Scenario: Parse HK time format
- **WHEN** 成交時間 is "2026/07/09 17:31:58 (香港)"
- **THEN** date SHALL be "2026-07-09"

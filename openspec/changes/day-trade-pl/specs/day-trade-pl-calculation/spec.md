## ADDED Requirements

### Requirement: Detect day trades
The system SHALL identify day trades by grouping trades by (date + stock code) and checking for both 買入 and 賣出 directions.

#### Scenario: Both buy and sell on same day
- **WHEN** date+stock group has both 買入 and 賣出 trades
- **THEN** group SHALL be marked as day trade

#### Scenario: Only buy or only sell
- **WHEN** date+stock group has only 買入 or only 賣出
- **THEN** group SHALL NOT be counted as day trade

### Requirement: Calculate matched quantity
The system SHALL calculate matched quantity as min(total_buy_qty, total_sell_qty).

#### Scenario: Equal quantities
- **WHEN** buy qty is 4 and sell qty is 4
- **THEN** matched qty SHALL be 4

#### Scenario: Partial fill
- **WHEN** buy qty is 4 and sell qty is 2
- **THEN** matched qty SHALL be 2

### Requirement: Calculate day trade P/L
The system SHALL calculate P/L using matched quantity with proportional cost basis.

#### Scenario: Full match calculation
- **WHEN** buy 4 @ $100, sell 4 @ $110, fees $8
- **THEN** P/L SHALL be (4×110) - (4×100) - 8 = $32

#### Scenario: Partial match calculation
- **WHEN** buy 4 @ $100, sell 2 @ $110, fees $5
- **THEN** P/L SHALL be (2×110) - (2×100) - 5 = $15

#### Scenario: Multiple sells calculation
- **WHEN** buy 4 @ $100, sell 2 @ $110 + sell 1 @ $105, fees $10
- **THEN** matched qty SHALL be 3
- **AND** P/L SHALL be (2×110 + 1×105) - (3×100) - 10 = $15

### Requirement: Include all fees
The system SHALL aggregate all fee columns (佣金, 平台使用費, 交收費, 印花稅, 交易費, 證監會徵費, 財匯局徵費, 綜合審計跟蹤監管費, 交易活動費, 證監會規費) into total fees.

#### Scenario: Aggregate fees
- **WHEN** trades have multiple fee components
- **THEN** total fees SHALL be sum of all fee columns

### Requirement: Currency display
The system SHALL append " USD" suffix for USD currency trades and no suffix for HKD trades.

#### Scenario: USD trade display
- **WHEN** day trade P/L is +$22.93 USD
- **THEN** display SHALL be "+$22.93 USD"

#### Scenario: HKD trade display
- **WHEN** day trade P/L is +$229 HKD
- **THEN** display SHALL be "+$229"

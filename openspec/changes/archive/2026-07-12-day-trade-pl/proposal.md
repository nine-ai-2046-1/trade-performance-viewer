## Why

The current calendar uses simple daily P/L aggregation from data.csv (Trading 212 CFDs). We now need to support Futu (富途) stock trading data with proper day trade P/L calculation. Day trades require special logic: only count trades where the same stock has both buy and sell on the same day, with matched quantity costing.

## What Changes

- Add `dayTradePL()` function to calculate day trade P/L from Futu CSV data
- Parse Futu CSV format (37 columns, Chinese headers, mixed currencies USD/HKD)
- Filter only filled trades (交易狀態 == "全部成交")
- Group by date + stock code, detect day trades (both buy & sell)
- Calculate matched quantity P/L with proportional cost basis
- Include all fees (佣金, 平台使用費, 交收費, etc.) in P/L calculation
- Display currency suffix: USD trades show "USD", HKD trades show no suffix

## Capabilities

### New Capabilities
- `futu-csv-parsing`: Parse Futu CSV format with 37 columns, Chinese headers, mixed currencies
- `day-trade-pl-calculation`: Calculate day trade P/L with matched quantity costing and fee inclusion

### Modified Capabilities

## Impact

- New file: `data/futu-data.csv` (Futu trading data, 555 rows)
- New functions in index.html: `dayTradePL()`, `parseFutuCSV()`
- Calendar display updates to show Futu day trade data
- No changes to existing Trading 212 data parsing

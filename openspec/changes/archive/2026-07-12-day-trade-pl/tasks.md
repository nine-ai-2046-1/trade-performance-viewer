## 1. Futu CSV Parsing

- [x] 1.1 Create `parseFutuCSV()` function to parse 37-column format
- [x] 1.2 Handle UTF-8-BOM encoding
- [x] 1.3 Filter only filled trades (交易狀態 == "全部成交")
- [x] 1.4 Extract fields: direction, stock code, name, qty, price, amount, time, currency, fees
- [x] 1.5 Parse date from 成交時間 field (handle both 美東 and 香港 formats)

## 2. Day Trade Detection

- [x] 2.1 Create `groupByDateStock()` function to group trades by date + stock code
- [x] 2.2 Create `isDayTrade()` function to check both 買入 and 賣出 exist
- [x] 2.3 Filter groups to only day trades

## 3. Day Trade P/L Calculation

- [x] 3.1 Create `dayTradePL()` function
- [x] 3.2 Calculate matched quantity: min(total_buy_qty, total_sell_qty)
- [x] 3.3 Calculate average buy price: total_buy_amount / total_buy_qty
- [x] 3.4 Calculate matched buy cost: matched_qty × avg_buy_price
- [x] 3.5 Calculate matched sell amount (proportional to matched qty)
- [x] 3.6 Aggregate all fee columns per trade
- [x] 3.7 Calculate net P/L: matched_sell - matched_buy - total_fees
- [x] 3.8 Return result with currency suffix (USD suffix, HKD no suffix)

## 4. Calendar Integration

- [x] 4.1 Add data source toggle or selection in UI
- [x] 4.2 Update `buildCalendarData()` to support Futu data
- [x] 4.3 Display day trade P/L in calendar cells
- [x] 4.4 Show monthly P/L for Futu data

## 5. Testing & Verification

- [ ] 5.1 Test parsing with real futu-data.csv
- [ ] 5.2 Verify day trade detection accuracy
- [ ] 5.3 Verify P/L calculation with sample trades
- [ ] 5.4 Verify currency display (USD suffix, HKD no suffix)

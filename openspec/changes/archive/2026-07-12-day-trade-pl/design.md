## Context

Current state: `index.html` parses Trading 212 CSV data (7 columns) for CFD products (JPN225, US500, HK50). The data has simple net profit per trade.

New requirement: Support Futu (富途) stock trading data (`data/futu-data.csv`) with 37 columns, Chinese headers, mixed currencies (USD/HKD), and complex fee structure. Day trades require special P/L calculation logic.

## Goals / Non-Goals

**Goals:**
- Parse Futu CSV format with 37 columns and Chinese headers
- Calculate day trade P/L with matched quantity costing
- Include all fees in P/L calculation
- Support mixed currencies (USD with suffix, HKD without)
- Display day trades in calendar

**Non-Goals:**
- Modify existing Trading 212 data parsing
- Support leveraged/margin trading calculations
- Real-time price feeds
- Portfolio-level P/L aggregation

## Decisions

### 1. Futu CSV Parsing Strategy
**Choice:** Column index-based parsing (not header name matching)
**Why:** Header names are in Chinese with BOM encoding, fragile to match
**Alternative:** Header name matching → rejected due to encoding issues

### 2. Day Trade Detection
**Choice:** Group by (date + stock_code), check both 買入 AND 賣出 exist
**Why:** Simple, clear logic, matches user requirement
**Alternative:** Time-based matching → rejected as overly complex

### 3. Matched Quantity P/L Calculation
**Choice:** proportional cost basis for partial fills
**Why:** User confirmed: "只計賣出嘅量，唔好計多/少咗貨尾"
**Formula:**
```
matched_qty = min(total_buy_qty, total_sell_qty)
avg_buy_price = total_buy_amount / total_buy_qty
matched_buy_cost = matched_qty × avg_buy_price
matched_sell_amount = (matched_qty / total_sell_qty) × total_sell_amount
net_pl = matched_sell_amount - matched_buy_cost - total_fees
```

### 4. Fee Aggregation
**Choice:** Sum all fee columns (27-37) per trade, then aggregate per day
**Why:** Complete fee inclusion, matches user requirement

### 5. Currency Handling
**Choice:** Detect from �幣種 column (17), append " USD" suffix for USD trades
**Why:** Clear visual distinction, user specified

## Risks / Trade-offs

- **BOM encoding** → Use UTF-8-BOM aware parsing
- **Empty rows** → Filter out rows with missing critical fields
- **Multiple fills per order** → Each row is a fill, not an order

## Migration Plan

1. Add new parsing functions alongside existing ones
2. Add toggle or data source selection in UI
3. No breaking changes to existing functionality

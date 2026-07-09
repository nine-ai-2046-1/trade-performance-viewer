## 1. Setup and Data Loading

- [x] 1.1 Remove hardcoded EVENTS and MONTHS arrays from index.html
- [x] 1.2 Create loadCSVData() function using Fetch API with no-cache headers
- [x] 1.3 Add error handling for CSV loading failures

## 2. CSV Parsing

- [x] 2.1 Create parseCSV() function to parse CSV content
- [x] 2.2 Implement date parsing for "09 7 月 2026 09:21:29.429" format
- [x] 2.3 Implement numeric field parsing (net_profit, balance)
- [x] 2.4 Handle CSV header row and empty rows

## 3. Data Calculation

- [x] 3.1 Create dailyPLByProduct() function to calculate P/L per product per day
- [x] 3.2 Create dailyTotalPL() function to calculate total P/L per day
- [x] 3.3 Build calendarData structure with product totals and daily totals

## 4. Dynamic Month Navigation

- [x] 4.1 Create getAvailableMonths() function to extract months from data
- [x] 4.2 Implement month navigation UI (prev/next buttons)
- [x] 4.3 Add boundary checking (disable prev at first month, next at last month)
- [x] 4.4 Set default month to current month or latest available month

## 5. Calendar Display

- [x] 5.1 Update renderMonth() function to display product P/L data
- [x] 5.2 Add emoji display logic (🟢 for profit, 🔴 for loss, ⚪ for zero)
- [x] 5.3 Apply product-specific font colors (JPN225: #8B5CF6, US500: #3B82F6, HK50: #92400E)
- [x] 5.4 Display daily total P/L at bottom of each cell

## 6. Integration and Testing

- [x] 6.1 Integrate all functions into main initialization flow
- [x] 6.2 Test with actual data/data.csv file
- [x] 6.3 Verify month navigation works correctly
- [x] 6.4 Verify calendar display shows correct data and formatting

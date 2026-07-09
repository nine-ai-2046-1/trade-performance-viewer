## Why

現有嘅日曆應用需要 UI 優化：標題需要改名、產品顏色需要調整、月份 P/L 顯示方式需要簡化。用戶希望應用名稱改為 "Nines"，並調整產品顏色以提高可讀性。

## What Changes

- 標題 "Trading Calendar" 改為 "Nines"
- 產品顏色調整：HK50 用 Blue、US500 用 Purple、JPN225 用 Orange
- 月份 P/L 顯示方式改用 `<br>` 連接月份標籤，移除獨立 div

## Capabilities

### New Capabilities

（無新增 capabilities）

### Modified Capabilities

- `calendar-display`: 修改標題、產品顏色、月份 P/L 顯示方式

## Impact

- **代碼文件**: index.html（修改標題、PRODUCT_COLORS、renderMonth() 函數）
- **影響範圍**: 日曆標題、產品顏色、月份標籤顯示
- **依賴**: 無外部依賴

## Why

現有嘅日曆 P/L 顯示格式唔夠清晰：使用中文「總計」、無 emoji 邏輯、無 $ 符號、無小數點。用戶需要更直觀嘅顯示格式，包括月度 P/L 總和顯示喺月份標籤下方。

## What Changes

- 移除小數點，使用整數顯示 P/L 數值
- 所有 P/L 數值前加 $ 符號
- 總計行使用英文 "Total" 代替中文 "總計"
- 總計行加入 emoji 邏輯（正數 🟢、負數 🔴）
- 月份標籤下方顯示月度 P/L 總和（含 emoji）

## Capabilities

### New Capabilities

（無新增 capabilities）

### Modified Capabilities

- `calendar-display`: 修改 P/L 顯示格式，包括數值格式、emoji 邏輯、月份標籤顯示

## Impact

- **代碼文件**: index.html（修改 createCell() 和 renderMonth() 函數）
- **影響範圍**: 日曆格仔顯示邏輯
- **依賴**: 無外部依賴

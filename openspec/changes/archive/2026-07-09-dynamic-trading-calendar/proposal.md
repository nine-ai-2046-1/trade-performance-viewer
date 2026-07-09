## Why

現有嘅日曆應用使用硬編碼嘅 events 數據，無法展示真實嘅交易 P/L 數據。用戶需要一個動態嘅交易日曆，可以實時從 CSV 數據加載並計算每日每產品嘅盈虧情況，方便追踪交易表現。

## What Changes

- 移除硬編碼嘅 EVENTS 和 MONTHS 數據
- 新增 CSV 數據加載功能（fetch data/data.csv，唔缓存）
- 新增 CSV 解析功能，提取交易數據
- 新增每日每產品 P/L 計算功能
- 新增每日總 P/L 計算功能
- 新增動態月份生成（根據數據實際日期範圍）
- 新增月份導航功能（Prev/Next），包含邊界檢查
- 修改日曆格仔顯示邏輯：顯示產品名稱 + 該產品當日 P/L 總和
- 新增產品顏色區分：JPN225（紫色）、US500（藍色）、HK50（棕色）
- 新增盈虧 emoji 顯示：正數 🟢、負數 🔴

## Capabilities

### New Capabilities

- `csv-data-loading`: 從 data/data.csv 載入交易數據，支持 fetch API，唔缓存
- `csv-parsing`: 解析 CSV 格式，提取交易時間、產品、方向、盈虧等字段
- `daily-pl-calculation`: 計算每日每產品嘅 P/L 總和，以及每日總 P/L
- `dynamic-month-navigation`: 根據數據範圍動態生成月份，支持 Prev/Next 導航及邊界檢查
- `calendar-display`: 日曆格仔顯示邏輯，包括產品名稱、P/L 數值、emoji 和顏色

### Modified Capabilities

（無現有 capabilities 需要修改）

## Impact

- **代碼文件**: index.html（主要修改）
- **數據文件**: data/data.csv（唯讀，用於加載）
- **依賴**: 無外部依賴，純 JavaScript + HTML + CSS
- **瀏覽器兼容性**: 需要支持 Fetch API 的現代瀏覽器

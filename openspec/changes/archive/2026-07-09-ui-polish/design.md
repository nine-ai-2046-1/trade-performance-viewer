## Context

現有嘅日曆應用需要以下 UI 優化：
- 標題使用 "Trading Calendar"，用戶希望改為 "Nines"
- 產品顏色方案需要調整
- 月份 P/L 顯示方式需要簡化

**當前狀態**:
- 標題: "Trading Calendar"
- 產品顏色: JPN225=#8B5CF6, US500=#3B82F6, HK50=#92400E
- 月份 P/L 使用獨立 div 顯示

## Goals / Non-Goals

**Goals**:
- 標題改為 "Nines"
- 產品顏色調整：HK50=Blue、US500=Purple、JPN225=Orange
- 月份 P/L 改用 `<br>` 連接月份標籤

**Non-Goals**:
- 唔修改日曆格仔佈局
- 唔修改月份導航功能
- 唔修改 P/L 計算邏輯

## Decisions

### 1. 標題改名
**選擇**: 直接修改 `<h1>` 內容
**理由**:
- 簡單直接
- 無需修改其他代碼

### 2. 產品顏色
**選擇**: 修改 PRODUCT_COLORS 對象
**理由**:
- 集中管理顏色
- 易於維護

### 3. 月份 P/L 顯示
**選擇**: 使用 `<br>` 連接月份標籤
**理由**:
- 簡化 HTML 結構
- 用戶明確要求

## Risks / Trade-offs

### 風險 1: 顏色對比度
**風險**: 新顏色可能影響可讀性
**缓解**: 選擇高對比度顏色

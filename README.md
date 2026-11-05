# Nord Stage 4 說明書繁體中文翻譯

本專案旨在將 Nord Stage 4 說明書（目前版本 OS 1.6x，Edition N）翻譯為繁體中文，供 Nord Stage 4 88 使用者及其他同系列機型使用者參考，協助理解樂器的功能、操作方式與各項設定。

目前已由 1.4x 第一輪譯稿對照更新至 1.6x，補上新增段落、踏板設定差異及新版圖示。後續將持續校對，確認內容完整性、操作說明的準確性，以及專有名詞與用語的一致性。

## 翻譯者

**WiSH 隨筆**

- 部落格：[WiSH 隨筆](https://blog.wishstudio.net)
- Email：[wishnoblog@gmail.com](mailto:wishnoblog@gmail.com)

## 專案內容

- `Nord Stage 4 User Manual v1.4X Edition L.pdf`：1.4x 原文說明書。
- `Nord Stage 4 User Manual v1.6X-Edition-N.pdf`：1.6x 原文說明書。
- `src/`：目前 1.6x 中英雙語譯稿，包含 13 章、附錄及章節圖片。
- `src/SUMMARY.md`：章節目錄。
- `book.toml`：電子書設定。
- `theme/`：網站樣式與翻譯者署名。

線上閱讀：[Nord Stage 4 使用手冊](https://nordstage4manual.wishstudio.net)

## 文件說明

本翻譯為非官方中文參考資料。產品名稱、商標及原文說明書的相關權利歸原權利人所有；如譯文與原文有差異，請以原文說明書為準。

## 版本管理

- **OS 1.6x／Edition N**：根目錄 `src/` 為目前版本；`versions/v1.6/` 保存相同版本的完整書籍快照。
- **OS 1.4x／Edition L**：`versions/v1.4/` 保留先前完成的譯稿、專有名詞與圖示。
- 網站首頁使用 1.6x，頁面上方可切換版本並保留目前章節。
- [線上 1.6x](https://nordstage4manual.wishstudio.net/v1.6/) · [線上 1.4x](https://nordstage4manual.wishstudio.net/v1.4/)
- [1.6x 更新重點](src/version_changes.md)
- [版本差異與更新計畫](review/版本差異/版本差異與更新計畫.md)
- [版本差異 Excel](review/版本差異/NordStage4_1.4x至1.6x_版本差異.xlsx)
- [書內專有名詞對照](src/glossary.md)

譯名以譯者修訂的 Excel 為準；定案欄空白項目採用建議譯法。原始 Excel 保留於 `review/`，本次未覆寫使用者的修改。

## 建置

先安裝 mdBook 0.4.36 與 Python 3，再於專案根目錄執行：

```powershell
python scripts/build_books.py
```

輸出位於 `book/`：首頁為目前 1.6x，另包含 `v1.4/` 與 `v1.6/`。只執行 `mdbook build` 會僅建置目前版本；GitHub Pages 工作流程使用上述腳本建置三個入口。

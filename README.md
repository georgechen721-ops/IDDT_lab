# 智慧決策與數位雙生實驗室網站（IDDT Lab）

國立清華大學工業工程與工程管理學系 **智慧決策與數位雙生實驗室** 的官方網站。

**線上網站：** https://georgechen721-ops.github.io/IDDT_lab/

---

## 快速開始

### 安裝與本地預覽

```bash
npm install
npm run dev
```

### 發佈更新

推送到 `main` 分支後，GitHub Actions 會自動部署到 GitHub Pages。

---

## 編輯網站內容

**所有文字和圖片只需在一個檔案修改：`src/data/labData.js`**

### 內容變數說明

| 變數                   | 用途                                   |
| ---------------------- | -------------------------------------- |
| `SITE`                 | 各頁標題、按鈕文字、導覽列、頁尾、預設顯示筆數 |
| `LAB_NAME` / `LAB_NAME_EN` | 實驗室中英文名稱                  |
| `SLIDES`               | 首頁「研究室日常」照片與標題           |
| `RESEARCH_AREAS`       | 首頁研究領域卡片                       |
| `PROFESSOR`            | 教授資料（聯絡方式、學歷、經歷、獎項） |
| `TEAM`                 | 成員資料（碩一、碩二、已畢業、在職專班） |
| `PUBLICATIONS`         | 國科會計畫、產學合作、期刊論文           |

### 新增與編輯成員

在 `TEAM.masters` 或 `TEAM.graduated` 中加入或修改成員：

```js
{
  name: "王小明",
  interest: "Scheduling",
  year: "碩一",   // 碩一、碩二（需與 SITE.team.mastersYearOrder 一致）
  image: "ming.jpg",
}
```

### 上傳照片

1. 將照片放進 `public/` 資料夾
2. 在 `labData.js` 中只寫檔名：`image: "shirley.jpg"`（不需要加路徑）
3. **建議將照片壓縮到 500 KB 以下**，網站載入會更快
4. 成員照片會自動裁成正方形（1:1），**建議臉部居中**

### 論文標籤

期刊論文結尾的索引標記（如 `(SCI)` `(EI, TSSCI)` 等）會自動轉成小標籤，照原本格式寫即可。

```js
title: "Your paper title here (SCI, EI)."
// 會自動變成：Your paper title here + 兩個標籤 [SCI] [EI]
```

### 特例：HTML 標籤

以下內容**必須在 `index.html` 中編輯**：
- 瀏覽器分頁標題
- Google 搜尋結果的標題與說明
- LINE/Facebook 分享預覽

---

## 網站頁面與網址

所有頁面都有獨立網址，可直接分享：

| 頁面     | 網址                                    |
| -------- | --------------------------------------- |
| 首頁     | https://georgechen721-ops.github.io/IDDT_lab/#/ |
| 研究領域 | https://georgechen721-ops.github.io/IDDT_lab/#/research |
| 論文著作 | https://georgechen721-ops.github.io/IDDT_lab/#/publications |
| 團隊成員 | https://georgechen721-ops.github.io/IDDT_lab/#/team |

---

## 搜尋引擎最佳化（SEO）

### Google Search Console 驗證

1. 進入 [Google Search Console](https://search.google.com/search-console)
2. 新增資源：`https://georgechen721-ops.github.io/IDDT_lab/`
3. 用 Meta 標籤驗證網站所有權（已設定在 `index.html`）

### Sitemap 提交

網站已包含 `sitemap.xml`，在 Google Search Console 提交：
1. 進入「Sitemap」頁面
2. 輸入：`sitemap.xml`
3. 點擊「提交」

---

## 專案結構

```
.
├── public/
│   ├── sitemap.xml           # 搜尋引擎網站地圖
│   └── [照片檔案]             # 成員照片、背景圖等
├── src/
│   ├── App.jsx               # 頁面路由與切換
│   ├── data/labData.js        # ✏️ 網站所有內容
│   ├── hooks/useHashRoute.js  # 網址路由邏輯
│   ├── utils/                 # 工具函數（圖片路徑、連結等）
│   ├── components/            # 共用元件（導覽列、頁尾、卡片等）
│   └── pages/                 # 各頁面（首頁、成員頁、論文頁）
├── index.html                # ✏️ 網頁標題、Meta 標籤（SEO）
└── vite.config.js
```

---

## 技術棧

- **React 18** — UI 框架
- **Vite** — 建置工具
- **Tailwind CSS** — 樣式
- **Lucide React** — 圖示
- **GitHub Pages** — 部署平台

---

## 常見問題

**Q: 我只想改文字/圖片，不想碰程式碼？**  
A: 完全可以！只需編輯 `src/data/labData.js` 一個檔案。

**Q: 修改後多久才會看到更新？**  
A: Push 到 `main` 分支後，GitHub Actions 會自動部署，通常 1-3 分鐘生效。

**Q: 照片放在哪裡？**  
A: 放在 `public/` 資料夾，在 `labData.js` 中只需寫檔名。

**Q: 怎樣讓網站在 Google 搜尋「陳子立」時出現？**  
A: 已設定 Meta 關鍵詞和 sitemap。Google 需要 1-4 週才能完全索引。

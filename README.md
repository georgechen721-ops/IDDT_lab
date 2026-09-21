# 智慧決策與數位雙生實驗室網站（IDDT Lab）

國立清華大學工業工程與工程管理學系 **智慧決策與數位雙生實驗室** 網站，使用 **React + Vite + Tailwind CSS** 製作。

網站：https://georgechen721-ops.github.io/IDDT_lab/

## 本地啟動

```bash
npm install
npm run dev
```

## 修改網站內容

**網站上所有文字和圖片都只在一個檔案修改：`src/data/labData.js`**，其他程式檔不需要動。

| 變數                   | 內容                                   |
| ---------------------- | -------------------------------------- |
| `SITE`                 | 各頁標題、按鈕文字、導覽列、頁尾、Hero 背景圖、預設顯示幾筆 |
| `LAB_NAME` / `LAB_NAME_EN` | 實驗室中、英文名稱                  |
| `SLIDES`               | 首頁「研究室日常」照片與標題           |
| `RESEARCH_AREAS`       | 首頁研究領域卡片                       |
| `PROFESSOR`            | 教授資料（聯絡方式、學歷、經歷、獎項） |
| `TEAM`                 | 碩士班、在職專班、已畢業學生           |
| `PUBLICATIONS`         | 國科會計畫、產學合作（合作企業＋計畫名稱）、期刊論文 |

> 期刊論文結尾的 `(SCI)`、`(EI, TSSCI)` 等會自動變成小標籤，照原本的格式寫即可。
>
> 唯一的例外是 `index.html` 裡的網頁標題與分享預覽文字（Google 搜尋、LINE 分享時顯示的內容），這些必須寫在 HTML 裡。

### 照片

1. 把照片放進 `public/` 資料夾。
2. 在 `labData.js` 只寫檔名，例如 `image: "shirley.jpg"`，不要加 `/IDDT_lab/`。
3. 照片建議先壓縮到 500 KB 以下，網頁會開得比較快。
4. 成員照片會自動裁成正方形（1:1），建議臉放在照片中間。

### 新增成員

在 `TEAM.masters` 加一筆：

```js
{
  name: "王小明",
  interest: "Scheduling",
  year: "碩一",   // 碩一 或 碩二（要跟 SITE.team.mastersYearOrder 裡的寫法一樣）
  image: "ming.jpg",
},
```

本機預覽前請先執行一次 `npm install`（有新增字型套件）。

## 網址

每一頁都有自己的網址，可以直接分享：

| 頁面     | 網址            |
| -------- | --------------- |
| 首頁     | `#/`            |
| 研究領域 | `#/research`    |
| 學術研究 | `#/publications`|
| 團隊成員 | `#/team`        |

## 部署

推送到 `main` 分支後，GitHub Actions（`.github/workflows/deploy.yml`）會自動建置並部署到 GitHub Pages。

## 專案結構

```
src/
├── App.jsx                   # 頁面切換
├── data/labData.js           # ✏️ 網站內容
├── hooks/useHashRoute.js     # 網址路由
├── utils/                    # 圖片路徑、電話連結等小工具
├── components/               # 導覽列、頁尾、共用卡片與按鈕
└── pages/                    # 首頁、成員頁、著作頁
```

## 技術

React 18、Vite、Tailwind CSS、Lucide React

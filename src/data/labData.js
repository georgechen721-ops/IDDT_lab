// ══════════════════════════════════════════════════════════════════════════
//  網站所有文字與圖片都在這個檔案修改，其他程式檔不需要動。
//  圖片：放進 public/ 資料夾，這裡只寫檔名（例如 "cover.jpg"）。
// ══════════════════════════════════════════════════════════════════════════

// ── 網站共用文字（標題、按鈕、頁尾…）────────────────────────────────────────
export const SITE = {
  department: "國立清華大學　工業工程與工程管理學系", // 首頁 Hero 小字
  heroImage: "cover.jpg", // 首頁 Hero 背景圖
  heroShape: "curve", // Banner 底部形狀："curve"（弧形）、"triangle"（三角形）、"none"（平的）
  heroButtons: { team: "探索研究團隊", publications: "相關學術研究" },

  nav: { home: "首頁", research: "研究領域", publications: "學術研究", team: "團隊成員", contact: "聯絡我們" },

  footer: {
    tagline: "IDDT LABORATORY",
    description: "以隨機最佳化、強化學習、系統模擬與數位雙生等方法，研究製造、物流與醫療中的決策問題。",
    contactTitle: "聯繫資訊",
    copyright: "National Tsing Hua University",
  },

  home: {
    researchTitle: "核心研究領域",
    researchMore: "研究重點", // 研究領域的「查看更多」文字，也是彈跳視窗裡的小標
    researchStyle: "honeycomb", // "honeycomb"（左邊蜂巢＋右邊內容）或 "list"（列表）；手機與平板一律用列表
    galleryTitle: "研究室日常",
  },

  team: {
    title: "成員介紹",
    professorSections: {
      interests: "研究領域 Focus",
      education: "學歷背景",
      experience: "工作經歷",
      honors: "榮譽與獎項",
    },
    honorsPreview: 8, // 榮譽與獎項預設顯示幾筆
    masters: { title: "碩士班", badge: "Full-time Masters" },
    mastersYearOrder: ["碩二", "碩一"], // 碩士班依年級分組的順序（沒有人的年級會自動隱藏）
    mastersYearSuffix: "生", // 年級標題 = 年級 + 這個字，例如「碩二學生」
    photoInterval: 1000, // 多張照片時每張停留幾毫秒（1000 = 1 秒）
    professional: { title: "在職專班", badge: "Part-time / Professional" },
    graduates: {
      button: "查看已畢業學生",
      mastersTitle: "碩士班已畢業學生",
      professionalTitle: "在職專班已畢業學生",
      empty: "目前尚無已畢業學生資料。",
    },
  },

  publications: {
    title: "相關學術研究",
    nstc: "國科會計畫",
    industry: "產學合作計畫",
    journals: "期刊論文",
    nstcPreview: 10, // 期刊論文預設顯示幾篇
    industryPreview: 10, // 期刊論文預設顯示幾篇
    journalsPreview: 10, // 期刊論文預設顯示幾篇
  },
    // 點「聯絡我們」或 email 時跳出的選單
  contactMenu: {
    gmail: "用 Gmail 寄信",
    mailApp: "用預設郵件軟體寄信",
    copy: "複製 Email 地址",
    copied: "已複製！",
  },
  ui: { showAll: "顯示全部", collapse: "收合" },
};

// ── HomePage Data ─────────────────────────────────────────────────────────
export const LAB_NAME = "智慧決策與數位雙生";
export const LAB_NAME_EN = "Intelligent Decision & Digital Twin";

export const SLIDES = [
  {
    url: "2025.10.01.jpg",
    title: "2025/10/01 教師節聚餐",
  },
  {
    url: "2025.11.18.jpg",
    title: "2025/11/18 研究室聚餐",
  },
  {
    url: "2025.12.26.jpg",
    title: "2025/12/26 年末尾牙",
  },
  {
    url: "2026.02.04.jpg",
    title: "2026/02/04 Lab遊",
  },
  {
    url: "2026.03.10.jpg",
    title: "2026/03/10 老師生日快樂！",
  },
  {
    url: "2026.05.11.jpg",
    title: "2026/05/11 研究室聚餐",
  },
  {
    url: "2026.06.24.jpg",
    title: "2026/06/24 研究室聚餐",
  },
  {
    url: "2026.09.21.jpg",
    title: "2026/09/21 迎新＆教師節聚餐",
  },
];

// 研究領域（首頁依這裡的順序排列，點開會跳出完整內容）
// - id：英文代號，每一項不要重複
// - icon：可用 brain / calendar / llm / warehouse / shield / network / chart / factory / truck / cpu
export const RESEARCH_AREAS = [
  {
    id: "rl",
    icon: "brain",
    title: "強化學習",
    subtitle: "Reinforcement Learning",
    tags: ["半導體智慧排程", "AMR 動態調度", "強化學習優化"],
    body: "研究強化學習在製造與物流決策中的應用，從設備狀態、任務分配到 AMR 路徑規劃，探討系統如何根據環境變化調整決策策略，並透過模擬場景評估不同方法的表現。",
    points: [
      "將設備狀態與作業條件轉換為可學習的決策模型",
      "研究 AMR 任務分配、路徑規劃與充電等動態決策問題",
      "利用模擬環境測試不同情境下的策略表現",
      "比較強化學習與傳統啟發式方法在排程問題上的差異",
    ],
  },
  {
    id: "scheduling",
    icon: "calendar",
    title: "排程改善",
    subtitle: "Scheduling",
    tags: ["啟發式算法", "AI 決策", "生產排程"],
    body: "研究製造現場的排程與資源配置問題，針對訂單變動、設備限制與資源衝突等情況，建立適合不同生產情境的排程方法，並比較最佳化、啟發式與學習式方法的求解效果。",
    points: [
      "處理多工序、多設備與多資源限制下的生產排程",
      "分析插單、設備狀態變化等事件對原有排程的影響",
      "研究啟發式與數學最佳化方法在大型排程問題上的應用",
      "探討學習式方法在動態排程與決策調整上的可能性",
    ],
  },
  {
    id: "llm",
    icon: "llm",
    title: "LLM",
    subtitle: "Large Language Models",
    tags: ["大型語言模型", "智慧代理人", "任務流程自動化"],
    body: "研究大型語言模型在實際工作情境中的應用，著重於如何讓模型理解使用者需求、整合不同資料來源與工具，並協助完成資訊查詢、問題分析及工作流程自動化。",
    points: ["設計可依任務需求進行判斷與工具操作的智慧代理", 
             "探討如何結合外部工具與既有系統，提升模型處理實際任務的能力", 
             "研究 Muti-Agent 協作與任務分工機制，使不同 Agent 可依功能進行分析與決策",
             "探討大型語言模型在知識問答與工業等場域中的準確性、穩定性與可用性",
    ],
  },
  {
    id: "warehouse",
    icon: "warehouse",
    title: "倉儲管理",
    subtitle: "Warehouse Management",
    tags: ["自動化微型倉", "聯合最佳化", "parts to picker"],
    body: "研究微型倉儲結構，探討從庫存配置、出庫作業至入庫回庫等整體倉儲聯合決策流程。研究結合數學最佳化模型、啟發式演算法與強化學習等方法，尋找適合此類物流環境的倉儲配置與作業策略。",
    points: ["分析不同倉儲作業情境下的決策與資源配置",
             "研究微型倉 reshuffle/replenishment/retrieval 內排序機制", 
             "整合工作站配置、動態訂單到達資訊與料箱配置，建置即時調度與系統負載平衡模型",
             "建立微型倉儲作業數學模型，作為後續演算法與強化學習方法之基礎研究",
    ],
  },
  {
    id: "disaster",
    icon: "shield",
    title: "災防管理",
    subtitle: "Disaster Management",
    tags: ["防災韌性", "隨機與模擬最佳化", "人道物流"],
    body: "研究災害前後的應變決策與資源調度問題，結合數學規劃與模擬最佳化，評估在需求、路網與醫療量能不確定下的配置策略成效。長期與國家災害防救科技中心（NCDR）合作。",
    points: ["探討設施選址、物資預置、救護車派遣與疏散規劃等應變策略",
             "建立涵蓋路網損毀、救護車派遣與醫療量能變動的兩階段隨機最佳化模型", 
             "發展大規模問題的分解演算法與模擬最佳化求解方法",
             "應用數位孿生強化決策支援與模擬結果呈現",
    ],
  },
  {
    id: "supply-chain",
    icon: "network",
    title: "供應鏈設計",
    subtitle: "Supply Chain",
    tags: ["供應鏈韌性", "隨機最佳化", "經濟分析"],
    body: "研究全球供應鏈在不確定環境下的韌性、布局與成本決策，結合情境模擬、數學最佳化與經濟因素分析，評估不同風險事件對供應鏈網路、工廠營運參數與整體成本結構的影響。",
    points: [
      "探討多來源、生產轉移、備援配置等供應鏈韌性策略",
      "分析需求、市場、地緣政治與經濟變化對供應鏈的影響",
      "建立包含產能、lead time、成本與物流限制的不確定性模型",
      "研究大型供應鏈最佳化問題的數學建模與演算法求解方法",
    ],
  },
];

// ── 研究架構圖（成員頁・教授介紹）──────────────────────────────────────────────────────────
// - 文字裡的 \n 代表換行
// - topics 依順時針排列，第一個在最上方
export const RESEARCH_FRAMEWORK = {
  title: "研究架構",
  subtitle: "以不確定性下的決策方法為核心，應用於智慧製造與智慧醫療",
  domains: [
    {
      title: "Smart Manufacturing",
      subtitle: "智慧製造",
      items: [
        "Semiconductor Manufacturing",
        "TFT-LCD Manufacturing",
        "Computer Assembly",
        "Footwear Manufacturing",
        "Electronic Component Manufacturing",
      ],
    },
    {
      title: "Smart Healthcare",
      subtitle: "智慧醫療",
      items: [
        "Healthcare Operations",
        "Cloud Computing Service",
        "Logistics / Warehouse Operations",
        "Disaster Operations",
      ],
    },
  ],
  // 圓環上的應用主題，依順時針排列，第一個在最上方
  topics: [
    "Smart\nLogistics",
    "Medical\nInformatics",
    "Disaster Operation\nManagement",
    "Big Data\nAnalytics",
    "Supply Chain\nManagement",
    "Production Planning\n& Scheduling",
  ],
  // 中間的三個齒輪（大 → 中 → 小），\n 決定齒輪裡文字怎麼換行
  methods: [
    { title: "Decision Making\nunder Uncertainty", detail: "SP · RO · MDP\nSim-Opt · RL" },
    { title: "Big Data\nAnalytics &\nMachine\nLearning" },
    { title: "System\nSimulation &\nInformation\nTechnology" },
  ],
};

// ── TeamPage Data ───────────────────────────────────────────────────────────
export const PROFESSOR = {
  name: "陳子立 教授",
  title: "實驗室主持人 / 副教授",
  image: "professor.jpg",
  imageFallback: "https://ieem.site.nthu.edu.tw/var/file/310/1310/img/1228/115482499.jpg",
  contact: {
    phone: "(03)-5715131 #42656",
    email: "chentzuli@ie.nthu.edu.tw",
    office: "國立清華大學 工程一館9樓R925室",
  },
  education: [
    "Ph.D. , Department of Industrial Engineering and Engineering Management, National Tsing Hua University, Taiwan",
    "M.S. , Department of Industrial Engineering and Engineering Management, National Tsing Hua University, Taiwan",
    "B.S. , Department of Industrial Engineering and Engineering Management, National Tsing Hua University, Taiwan",
  ],
  experience: [
    "Associate Professor, Department of Industrial Engineering and Engineering Management, National Tsing Hua University (2025/02-present)",
    "Associate Professor, Graduate Institute of Intelligent Manufacturing Technology, National Taiwan University of Science and Technology (2023/02-2025/01)",
    "Deputy Secretary-General, Chinese Institute of Industrial Engineers (CIIE) (2022/12-2024/12)",
    "Section Chief, International Student Section, Office of International Affairs, National Taipei University of Technology (2022/08-2023/01)",
    "Associate Professor, Department of Industrial Engineering and Management, National Taipei University of Technology (2021/09-2023/01)",
    "Associate Professor, Department of Information Management, Fu Jen Catholic University (2016/02-2021/08)",
    "Adjunct Assistant Professor, Department of Industrial Management, National Taiwan University of Science and Technology (2011/03-2011/07)",
    "Assistant Professor, Department of Information Management, Fu Jen Catholic University (2010/09-2016/01)",
    "Visiting Scholar, Edward P. Fitts Department of Industrial and Systems Engineering, North Carolina State University, Hosted by Professor Shu-Cherng Fang (2007/01-2007/06)",
  ],
  honors: [
    "An Integrated MILP for Scheduling Flexible Job Shops with Multi-Load AGVs and Single-Port Machines, 2025 第二十一屆台灣作業研究學會年會暨國際研討會，獲得優良論文",
    "指導研究生蔡明亮論文，結合異質圖神經網路與深度強化學習以最小化隨機動態分散式彈性作業排程問題中的延遲，2025台灣作業研究學會碩博士論文競賽，獲得優勝",
    "Optimizing AED Placement and Human Resource Dispatch for OHCA Emergency Medical Services Considering the Stochastic Behavior of Volunteers, 15th Annual International Conference on Industrial Engineering and Operations Management, First Place, Graduate Student Paper Competition Awards",
    "共同指導研究生周星妤論文，利用模擬最佳化演算法求解大量傷患事件下檢傷站設置與資源配置問題，第十八屆（2025）崇越論文大賞碩士論文競賽，獲得優等",
    "指導研究生李雨軒論文，混整數模擬最佳化求解非法供應鏈下的自主移動機器人分揀系統資源配置問題，2024台灣作業研究學會碩博士論文競賽，獲得佳作",
    "2024 Outstanding Young Scholar Award by Ministry of Science and Technology (科技部優秀年輕學者計畫)",
    "2024 台灣科技大學 112學年度優良研究獎－學術研究類",
    "應用模擬為基礎近似動態規劃演算法求解大量傷患下動態救護車派遣與傷患配送問題，2022 第十八屆台灣作業研究學會年會暨國際研討會，獲得最佳論文",
    "大規模災難下二階隨機最佳化之災前檢傷站選址與災後救護車路徑規劃，2022 中國工業工程學會年會暨學術研討會，獲得最佳論文",
    "共同指導研究生李旖庭論文，大量傷患在道路損壞下救護車派遣兩階段隨機最佳化，2022台灣作業研究學會碩博士論文競賽，獲得佳作",
    "共同指導研究生楊富豪論文，利用模擬最佳化演算法求解大量傷患事件下檢傷站設置與資源配置問題，2022全國「工業工程與管理」碩士論文競賽，獲得優等",
    "共同指導研究生李旖庭論文，大量傷患在道路損壞下救護車派遣兩階段隨機最佳化，2022全國「工業工程與管理」碩士論文競賽，獲得優等",
    "在道路損壞下大量傷患救護車派遣兩階段隨機最佳化，2021 第十七屆台灣作業研究學會年會暨國際研討會，獲得優良論文(作業研究領域)",
    "大量傷患事件下檢傷站設置與資源配置模擬最佳化問題，2021 中國工業工程學會年會暨學術研討會，獲得最佳論文獎",
    "2020 Best Research Poster Award by Ministry of Science and Technology (科技部專題海報成果優等獎)",
    "2020 Outstanding Young Scholar Award by Ministry of Science and Technology (科技部優秀年輕學者計畫)",
    "Solving a Quantile-Based Stochastic Resource Allocation Problem with Simulation-Optimization Method, 2018 International Symposium on Business and Management, Distinguished Paper Award",
    "指導專題生陳常樂、洪大禹、林柏聿、張瑋翎、徐啓文，馬偕醫院急診室排班系統，2017第22屆全國大專校院資訊應用服務創新競賽，產學合作組，獲得第一名",
    "指導專題生林亞璇、許沁瑩、楊容、趙翊婷、萬家妤，POST－綠腳排排GO，2014第19屆全國大專校院資訊應用服務創新競賽，產學合作組，獲得第三名",
    "指導研究生周益漢論文，考慮能源效率下之批量分割混和流程排程問題探討，2014台灣作業研究學會碩博士論文競賽，獲得佳作",
    "指導研究生陳仲揚論文，考慮風險趨避之多目標隨機產能規劃，2013台灣作業研究學會碩博士論文競賽，獲得第二名",
    "指導研究生周珈筠論文，不確定環境下之隨機物料採購規劃─以 TFT-LCD產業為例，2013供應鏈管理論文獎(中華民國管理科學學會)，獲得佳作",
    "共同指導研究生王心恕論文，多目標群粒子搜尋演算法應用於正逆向物流整合型永續供應鏈網絡設計－以太陽能產業為例，2013供應鏈管理論文獎(中華民國管理科學學會)，獲得優勝",
    "指導研究生陳仲揚論文，考慮風險趨避之多目標隨機產能規劃，2013供應鏈管理論文獎(中華民國管理科學學會)，獲得優勝",
    "考量不確定性之正逆向物流整合型永續供應鏈網絡設計-以太陽能產業為例，2012工業工程與管理學術研討會，獲得佳作",
    "模擬為基之近似動態規劃應用在TFT-LCD隨機產能規劃問題，2011兩岸工業工程與管理學術研討會，獲得優等獎",
    "Material and Capacity Planning for TFT-LCD Production Chain, 2010 Supply Chain Management Thesis Awards, Excellent Thesis Award",
    "TFT-LCD生產鏈物料與產能規劃之研究，2010年中華決策科學學會暨台灣作業研究學會碩博士論文競賽，博士組，獲得佳作",
    "TFT-LCD 產業階層式先進規劃與排程，2009年中國工業工程學會會議論文競賽，生產系統規劃與管制組，獲得佳作",
    "TFT Array多廠區之產能與產品組合規劃問題，2006年中國工業工程學會會議論文競賽，獲得佳作",
  ],
  researchInterests: [
    "Smart Healthcare",
    "Smart Manufacturing",
    "Production Planning and Scheduling",
    "System Simulation",
    "Decision Making under Uncertainty (Stochastic Programming, Robust Optimization, Markov Decision Process, Simulation Optimization, Reinforcement Learning)",
    "Big Data Analytics"
  ],
  biography: "Tzu-Li Chen is an Associate Professor in the Department of Industrial Engineering and Engineering Management at National Tsing Hua University (NTHU), Taiwan. Dr. Chen received his B.S., M.S. and Ph.D. degrees in Industrial Engineering and Engineering Management from National Tsing Hua University. He has been a visiting scholar in the Edward P. Fitts Department of Industrial and Systems Engineering at North Carolina State University. He worked for National Taiwan University of Science and Technology (NTUST), National Taipei University of Technology (NTUT) and Fu Jen Catholic University (FJU) before he joined NTHU. His research interests include smart healthcare, smart manufacturing, production and logistics management, stochastic optimization and reinforcement learning, system simulation and digital twin, and big data analysis. He has been working on several university-industry collaboration projects with high tech industries including semiconductor manufacturing, semiconductor assembly & testing, Thin Film Transistor Liquid Crystal Display (TFT-LCD) and electronics industry, traditional industries including equipment manufacturing, metal processing industry, postal service industry and healthcare/medical service industries.",
};

// 成員資料
// - year：填「碩一」或「碩二」
// - 照片會裁成正方形，建議上傳時就用 1:1、臉在中間的照片
export const TEAM = {
  masters: [
    {
      name: "林柏均",
      interest: "Deep Learning",
      year: "碩二",
      images: ["jim_1.jpg", "jim_2.jpg", "jim_3.jpg", "jim_4.jpg"],
    },
    {
      name: "江俊佑",
      interest: "Deep Learning",
      year: "碩二",
      image: "alston.jpg",
    },
    {
      name: "劉璨瑤",
      interest: "Scheduling",
      year: "碩二",
      image: "liu.jpg",
    },
    {
      name: "李孟儒",
      interest: "Scheduling",
      year: "碩二",
      image: "sophia.jpg",
    },
    {
      name: "蕭禮英",
      interest: "Disaster Management",
      year: "碩二",
      image: "amy.jpg",
    },
    {
      name: "歐芸亘",
      interest: "Supply chain",
      year: "碩二",
      image: "shirley.jpg",
    },
    {
      name: "李奕安",
      interest: "Supply chain",
      year: "碩二",
      image: "ann.jpg",
    },
    {
      name: "Hannah Vu",
      interest: "Supply chain",
      year: "碩二",
      image: "hannah.jpg",
    },
    {
      name: "傅煒宸",
      interest: "Deep Learning",
      year: "碩一",
      image: "fu.jpg",
    },
    {
      name: "范峻嘉",
      interest: "Scheduling",
      year: "碩一",
      image: "feng.jpg",
    },
    {
      name: "黃荏榆",
      interest: "LLM",
      year: "碩一",
      image: "yellow.jpg",
    },
    {
      name: "游敏妍",
      interest: "Warehouse Management",
      year: "碩一",
      image: "yo.jpg",
    },
    {
      name: "詹映庭",
      interest: "Warehouse Management",
      year: "碩一",
      image: "maple.jpg",
    },
    {
      name: "洪于涵",
      interest: "Disaster Management",
      year: "碩一",
      image: "hong.jpg",
    },
  ],
  professional: [
    {
      name: "李妍柔",
      interest: "系統模擬應用於高樓層工廠",
      company: "緯創資通",
      image: "karen.jpg",
    },
    {
      name: "蔡宜珊",
      interest: "半導體智慧供應鏈與供應規劃研究",
      company: "美光科技",
      image: "furfur.jpg",
    },
    {
      name: "林琦琪",
      interest: "自動化物流系統之智慧調度與優化研究",
      company: "盟立自動化",
      image: "chichi.jpg",
    },
    {
      name: "林芸如",
      interest: "供應鏈管理",
      company: "艾司摩爾",
      image: "yun.jpg",
    },
    {
      name: "林彥伯",
      interest: "數位雙生決策架構開發",
      company: "台控科技",
      image: "leo.jpg",
    },
    {
      name: "蕭吉助",
      interest: "半導體凸塊(Bumping)排程研究",
      company: "Amkor Technology",
      image: "jim2.jpg",
    },
  ],
  graduates: {
    masters: [
      {
        name: "左其右",
        interest: "機器人密集式自動倉儲與存取系統之數位孿生架構\nDigital Twin Architecture for Robotic Compact Storage and Retrieval Systems",
      },
      {
        name: "李采錡",
        interest: "多保真度代理模型輔助與任務相關性知識轉移之基因程式設計高階啟發式演算法應用於具多載自動導引車之隨機動態彈性零工式排程\nA Multi-Fidelity Surrogate-Assisted Genetic Programming Hyper-Heuristic with Task-Relatedness Knowledge Transfer for Stochastic Dynamic Flexible Job Shop Scheduling with Multi-Load AGVs",
      },

    ],
    professional: [
      {
        name: "",
        interest: "",
      },
    ],
  },
};

export const PUBLICATIONS = {
  nstc: [
    {
      title: "結合數位孿生、多智能體強化學習與模仿學習之半導體封裝產線多負載自主移動機器人控制決策最佳化",
      partner: "國科會",
      date: "115",
    },
    {
      title: "AI人機協作深化智慧製造產學聯盟(1/3)",
      partner: "國科會",
      date: "115",
    },
    {
      title: "人工智慧先進製造與前瞻技術開發(2/2)",
      partner: "國科會",
      date: "115",
    },
    {
      title: "結合數位孿生與智慧運算於模組化高密度自動倉儲系統的車輛調度與物流排程之研究",
      partner: "國科會",
      date: "115",
    },
    {
      title: "人工智慧先進製造與前瞻技術開發(1/2)",
      partner: "國科會",
      date: "114",
    },
    {
      title: "資料驅動隨機最佳化來實現地震後最佳災害應變和復原策略：醫療資源分配、救護車調度和損壞道路修復決策",
      partner: "國科會",
      date: "113",
    },
    {
      title: "Edward Huang",
      partner: "國科會",
      date: "112",
    },
    {
      title: "應用深度學習與強化學習於半導體製造自動化物料傳送系統之智慧動態調度策略之研究",
      partner: "國科會",
      date: "112",
    },
    {
      title: "建立地震醫療救難之決策支援系統-建立地震災警急救難之模擬系統以及最佳化決策(2/2)",
      partner: "國科會",
      date: "112",
    },
    {
      title: "建立地震醫療救難之決策支援系統-建立地震災警急救難之模擬系統以及最佳化決策(1/2)",
      partner: "國科會",
      date: "111",
    },
    {
      title: "建立地震醫療救難之決策支援系統-建立地震災警急救難之模擬系統以及最佳化決策(總計畫)(1)",
      partner: "國科會",
      date: "110",
    },
    {
      title: "基於自主移動代理人考量市場需求不確定、綠色能源與邊緣機器交易之全球供應鏈網路優化配置之研究",
      partner: "國科會",
      date: "109",
    },
    {
      title: "多診室醫療資源規劃與排程之研究",
      partner: "國科會",
      date: "106",
    },
    {
      title: "不確定環境下之順序物料採購規劃",
      partner: "國科會",
      date: "104",
    },
    {
      title: "考慮二手市場交易與不確定性之封閉循環供應鏈網路設計(I)",
      partner: "國科會",
      date: "103",
    },
    {
      title: "考慮短期動態多目標隨機生產排程之研究(I)",
      partner: "國科會",
      date: "102",
    },
    {
      title: "應用多目標模擬最佳化於半導體廠急診醫療資源配置問題(I)",
      partner: "國科會",
      date: "101",
    },
    {
      title: "整合物聯網技術與系統模擬技術之急診室病患追蹤與決策支援系統(I)",
      partner: "國科會",
      date: "101",
    },
    {
      title: "TFT-LCD產能排程與排程規劃—模型與演算法(I)",
      partner: "國科會",
      date: "100",
    },
    {
      title: "TFT-LCD生產排程與規劃問題之探討(I)",
      partner: "國科會",
      date: "099",
    },
    
  ],
  industry: [
    {
      title: "智慧搬運網絡之感知驅動與動態編織",
      partner: "Advanced Semiconductor Engineering (日月光半導體製造股份有限公司)",
      date: "09/2026~08/2027",
    },
    {
      title: "結合數位雙生與智慧演算法於機器人式高密度自動倉儲系統訂單排序與料箱重新配置之研究",
      partner: "泰科動力",
      date: "06/2026~05/2026",
    },
    {
      title: "Agentic AI多智能體系統應用於自適應與韌性工業能源管理架構研究",
      partner: "Industrial Technology Research Institute(ITRI)",
      date: "04/2026~11/2026",
    },
    {
      title: "AI智慧代理人",
      partner: "HIWIN Technologies (上銀科技股份有限公司)",
      date: "12/2025~11/2026",
    },
    {
      title: "智慧需求預測與顧客行為分析研究",
      partner: "TXC Corporation (台灣晶技股份有限公司)",
      date: "09/2025~08/2026",
    },
    {
      title: "針對AMR搬運效率進行多目標最佳化",
      partner: "Advanced Semiconductor Engineering (日月光半導體製造股份有限公司)",
      date: "09/2025~08/2026",
    },
    {
      title: "建置智慧城市中電動車火災造成有毒氣體外洩事件緊急疏散數位孿生模擬系統",
      partner: "鴻海精密工業股份有限公司",
      date: "08/2025~10/2026",
    },
    {
      title: "整線製造智慧排程",
      partner: "HIWIN Technologies (上銀科技股份有限公司)",
      date: "08/2025~07/2026",
    },
    {
      title: "金屬接頭AOI(Automated Optical Inspection)自動光學瑕疵檢測系統",
      partner: "泉盛股份有限公司",
      date: "07/2025~06/2026",
    },
    {
      title: "AI自動判斷料號模型",
      partner: "信邦電子股份有限公司",
      date: "07/2025~06/2026",
    },
    {
      title: "AI with Flexsim model",
      partner: "Advanced Semiconductor Engineering (日月光半導體製造股份有限公司)",
      date: "09/2024~08/2025",
    },
    {
      title: "開發智慧商情銷售預測模型與動態安全庫存調整模型",
      partner: "Walsin (華新麗華股份有限公司)",
      date: "06/2024~11/2025",
    },
    {
      title: "智慧排程專案",
      partner: "HIWIN Technologies (上銀科技股份有限公司)",
      date: "06/2024~05/2025",
    },
    {
      title: "最適庫存決策智慧化",
      partner: "Feedback Technology (翔名科技股份有限公司)",
      date: "01/2024~12/2025",
    },
    {
      title: "智慧商機搜尋",
      partner: "KINIK (中國砂輪企業股份有限公司)",
      date: "01/2024~06/2025",
    },
    {
      title: "整合作業排程與AGV派車之同步排程演算法產學合作案計畫",
      partner: "Cloud Network Technology Singapore (新加坡商鴻運科股份有限公司)",
      date: "12/2023~11/2024",
    },
    {
      title: "砂輪配方設計系統開發",
      partner: "KINIK (中國砂輪企業股份有限公司)",
      date: "11/2023~04/2025",
    },
    {
      title: "智慧化輔導方案與技術蒐集研析",
      partner: "Foundation Of Taiwan Industry Service",
      date: "10/2023~12/2023",
    },
    {
      title: "應用系統模擬於產線製程改善之分析",
      partner: "Cycling & Health Tech Industry R&D Center",
      date: "10/2023~11/2023",
    },
    {
      title: "電車線聚合礙子資訊管理系統開發與老化分析應用",
      partner: "Taiwan High Speed Rail (THRS)",
      date: "09/2023~09/2026",
    },
    {
      title: "Early Deployment Decision of Optimal Resources for Emergency Medical Services (緊急醫療服務最佳資源提前佈署決策)",
      partner: "National Science and Technology Center for Disaster Reduction (NCDR)",
      date: "07/2023~6/2024",
    },
    {
      title: "邊緣運算機制-電力消耗異常偵測技術與程式開發測試",
      partner: "Industrial Technology Research Institute(ITRI)",
      date: "06/2022~11/2022",
    },
    {
      title: "Simulation and Optimization for Mass Casualty Incident in Metropolitan Area (都會區大量傷患處置模擬分析與最佳決策)",
      partner: "National Science and Technology Center for Disaster Reduction (NCDR)",
      date: "03/2022~10/2022",
    },
    {
      title: "先進排程系統設計與開發",
      partner: "Pronology Service (研騰科技)",
      date: "02/2022~01/2023",
    },
    {
      title: "Optimal medical resource allocation to combat COVID-19 (透過最佳醫療資源配置決策對抗COVID-19大流行)",
      partner: "Mackey Memorial Hospital",
      date: "01/2022~12/2022",
    },
    {
      title: "Development of Smart Recommendation System for Grinding Wheel Spec (智慧型砂輪規格推薦系統研發)",
      partner: "KINIK (中國砂輪企業股份有限公司)",
      date: "10/2022~09/2023",
    },
    {
      title: "Order Fulfillment Module Maintenance II (訂單履行模組維護 II)",
      partner: "Richtek Technology",
      date: "09/2022~04/2023",
    },
    {
      title: "Maintenance of Conversion Module for Long and Short Material Codes (長短型料號轉換模組維護精進)",
      partner: "Richtek Technology",
      date: "09/2022~04/2023",
    },
    {
      title: "Development of Conversion Module for Long and Short Material Codes (長短型料號轉換模組開發)",
      partner: "Richtek Technology",
      date: "04/2022~08/2023",
    },
    {
      title: "Increase Prediction Model Accuracy of Defective Rate at Customer Sites to Increase Customer Satisfaction (客端不良率預測)",
      partner: "AUO",
      date: "05/2022~04/2023",
    },
    {
      title: "Analysis of Production Planning Process and Evaluation of Future Software System Requirements (生產規劃流程現況分析與未來軟體需求評估)",
      partner: "Richtek Technology",
      date: "09/2021~08/2022",
    },
    {
      title: "Demand Fulfillment Module Optimization (訂單履行模組優化)",
      partner: "Richtek Technology",
      date: "09/2021~08/2022",
    },
    {
      title: "Demand Fulfillment Module Maintenance (訂單履行模組維護)",
      partner: "Richtek Technology",
      date: "08/2021~07/2022",
    },
    {
      title: "SMT of Smart Manufacturing (SMT 智慧製造)",
      partner: "Kinpo Electronics",
      date: "06/2021~05/2022",
    },
    {
      title: "KPI Analysis for Smart Manufacturing (智慧製造績效指標架構分析)",
      partner: "Kinpo Electronics",
      date: "06/2021~05/2022",
    },
    {
      title: "Simulation and Optimization for Mass Casualty Incident (大量傷患處置模擬分析與最佳決策)",
      partner: "National Science and Technology Center for Disaster Reduction (NCDR)",
      date: "03/2021~10/2021",
    },
    {
      title: "專業精密零組件精實管理診斷服務計畫",
      partner: "Industrial Technology Research Institute(ITRI)",
      date: "04/2021~10/2021",
    },
    {
      title: "Aging Analysis of Train Line Polymer Insulator and Plan and Investigation of Train Line Pollution Areas (電車線聚合礙子老化分析暨全線汙染區調查與規劃)",
      partner: "Taiwan High Speed Rail (THRS)",
      date: "09/2020~08/2022",
    },
    {
      title: "Study of Optimization and Automation Application for Domestic Registered Small Package Picking Process (國內掛號小包分揀流程優化與善用自動化設備研究)",
      partner: "Post Office",
      date: "08/2020~11/2020",
    },
    {
      title: "Demand Fulfillment Module Development (訂單履行模組開發)",
      partner: "Richtek Technology",
      date: "07/2020~04/2021",
    },
    {
      title: "最佳車輛數模擬與求解驗證",
      partner: "Industrial Technology Research Institute(ITRI)",
      date: "08/2020~11/2020",
    },
    {
      title: "爭鮮門市與中央廚房智慧物聯網創新服務計畫",
      partner: "Sushi Express Company",
      date: "08/2020~05/2021",
    },
    {
      title: "Order Lead Time Analysis (訂單生產前置時間分析)",
      partner: "Richtek Technology",
      date: "03/2020~06/2020",
    },
    {
      title: "Survey and Analysis of AGVS (無人搬運車(AGV)系統文獻探討與分析)",
      partner: "Industrial Technology Research Institute(ITRI)",
      date: "03/2020~06/2020",
    },
    {
      title: "Smart Predictive Maintenance (智慧預測保養)",
      partner: "Cal-Comp Automation and Industrial 4.0 Service (CCAU)",
      date: "01/2020~12/2020",
    },
    {
      title: "Predicting Emergency Department Admissions by Machine Learning (應用機器學習於急診住院預測)",
      partner: "Mackey Memorial Hospital",
      date: "01/2020~12/2020",
    },
    {
      title: "郵件處理作業流程精進及管理資訊蒐集研究",
      partner: "Post Office",
      date: "11/2019~02/2020",
    },
    {
      title: "應用人工智慧於檢測脈絡膜與近視之關係",
      partner: "Fu Jen Catholic University Hospital",
      date: "06/2019~11/2019",
    },
    {
      title: "工業能源管理節能技術-使用電氣資訊進行轉動設備預知保養系統軟體開發",
      partner: "Industrial Technology Research Institute(ITRI)",
      date: "05/2019~12/2019",
    },
    {
      title: "機器學習為基礎之急診室住院需求預測與壅塞成因之研究",
      partner: "Mackey Memorial Hospital",
      date: "06/2019~05/2020",
    },
    {
      title: "System Development for MoneySQ P2P Platform (MoneySQ線上借貸平台第二期開發計畫)",
      partner: "MoneySQ(香港商錢匯發展有限公司台灣分公司)",
      date: "12/2018~11/2019",
    },
    {
      title: "Prediction of Patient Numbers for a Regional Emergency Medical Center Using Hybrid Artificial Intelligence (應用混合式人工智慧模型於急診病患人數預測)",
      partner: "Taichung Tzu Chi Hospital",
      date: "01/2019~12/2019",
    },
    {
      title: "Credit Risk and Pricing Evaluation for MoneySQ P2P Platform (MoneySQ 線上借貸平台-風險與定價評估模組)",
      partner: "MoneySQ(香港商錢匯發展有限公司台灣分公司)",
      date: "10/2017~09/2018",
    },
    {
      title: "Advanced Planning and Scheduling in Semiconductor Assembly and Testing Industry",
      partner: "Siliconware Precision Industries (SPIL)",
      date: "05/2018~08/2018",
    },
    {
      title: "Market Survey and Analysis of IoT Applications (IoT應用市場調查分析)",
      partner: "Chicony Power",
      date: "01/2018~12/2018",
    },
    {
      title: "Lean Management to Improve the Scheduling of Intensity-Modulated Radiotherapy (以精實管理改善強度調控放射治療排程)",
      partner: "Mackey Memorial Hospital",
      date: "01/2018~12/2018",
    },
    {
      title: "Lean Management (精實管理)",
      partner: "Chicony Power",
      date: "12/2017~11/2019",
    },
    {
      title: "A Study of Operation Flow and Capacity Planning of Mail Processing Center in North Taiwan (北臺灣郵件作業中心作業流程及產能規劃研究)",
      partner: "Post Office",
      date: "10/2017~02/2018",
    },
    {
      title: "Smart Healthcare and Elderly Care (智慧醫療與熟齡照護)",
      partner: "Chicony Power",
      date: "06/2017~05/2018",
    },
    {
      title: "Lean Management in Hospital (改善強度調控放射治療流程之精實管理及創新模式)",
      partner: "Mackey Memorial Hospital",
      date: "01/2017~12/2017",
    },
    {
      title: "急診病患行為與壅塞關聯之資料探勘與分析",
      partner: "Mackey Memorial Hospital",
      date: "09/2016~09/2018",
    },
    {
      title: "造紙業能源使用分析技術",
      partner: "Industrial Technology Research Institute(ITRI)",
      date: "03/2016~11/2016",
    },
    {
      title: "Simulation Analysis of the Loading Efficiency of Moving Platform (移動平台運載效率模擬分析)",
      partner: "Industrial Technology Research Institute(ITRI)",
      date: "02/2016~06/2016",
    },
    {
      title: "Lean Management (精實管理)",
      partner: "Chicony Power",
      date: "12/2015~11/2017",
    },
    {
      title: "Simulation of Loaded Robot Scheduling (運載機器人排程系統軟體模擬)",
      partner: "Industrial Technology Research Institute(ITRI)",
      date: "10/2015~12/2015",
    },
    {
      title: "SQL Server 與 HBase資料整合之視覺化報表系統",
      partner: "Industrial Technology Research Institute(ITRI)",
      date: "09/2015~11/2015",
    },
    {
      title: "Simulation of Transportation Management System (運載管理系統模擬)",
      partner: "Industrial Technology Research Institute(ITRI)",
      date: "07/2015~08/2015",
    },
    {
      title: "System Simulation of Dispatching for Multiple Vehicle System (多車運載系統派工流程規劃與系統模擬)",
      partner: "Industrial Technology Research Institute(ITRI)",
      date: "06/2015~11/2015",
    },
    {
      title: "工廠製程能源使用分析技術",
      partner: "Industrial Technology Research Institute(ITRI)",
      date: "04/2015~11/2015",
    },
    {
      title: "Development of Traffic Control Code for AGV (無人搬運車交通管理程式開發)",
      partner: "Industrial Technology Research Institute(ITRI)",
      date: "04/2015~07/2015",
    },
    {
      title: "Lean Construction (精實營建)",
      partner: "Lien Jade Group",
      date: "01/2015~12/2017",
    },
    {
      title: "An improvement and analysis of automatic transportation process (自動化工作流程與搬運流程改善與分析)",
      partner: "Industrial Technology Research Institute(ITRI)",
      date: "09/2014~11/2014",
    },
    {
      title: "Lean Management (精實管理)",
      partner: "Lien Jade Group",
      date: "08/2014~08/2017",
    },
    {
      title: "Manufacturing System Automation and Design of Experiments (製造系統自動化及PCBA實驗設計)",
      partner: "Coretronic Company",
      date: "02/2014~05/2014",
    },
    {
      title: "An advanced analysis of the industrial electricity consumption (工業電力能源資料分析進階研究計畫)",
      partner: "Industrial Technology Research Institute(ITRI)",
      date: "04/2014~11/2014",
    },
    {
      title: "A Study on Manpower Competency of Production Management at Craft Industry (工藝產業生產管理人才職能之研究)",
      partner: "Industrial Technology Research Institute(ITRI)",
      date: "10/2013~03/2014",
    },
    {
      title: "Analysis and Integration of Lean Systems (精實系統分析與整合)",
      partner: "Industrial Technology Research Institute(ITRI)",
      date: "08/2013~12/2013",
    },
    {
      title: "Critical path analysis of block and overcrowding in emergency department: discrete event simulation and real-time tracking system",
      partner: "Mackey Memorial Hospital",
      date: "01/2011~12/2011",
    },
  ],
  journals: [
    {
      title: "James C. Chen, Tzu-Li Chen, Yin-Yann Chen, Chen-Yu Wang and Dewanti Anggrahinia, “Rolling Horizon Supply Chain Capacity Planning for IC Design House Considering Forecast Evolution and Capacity Regret”, Journal of Industrial and Management Optimization, in press. (SCI)",
    },
    {
      title: "Ming-Sung Shih, James C. Chen, Tzu-Li Chen*,Ming-Hsiang Chen and Ching-Lan Hsu, “Agentic AI for Dynamic Aging & Test Sampling Optimization and High-Performance Defect Detection in TFT-LCD Industry”, Advanced Engineering Informatics, in press. (SCI)",
    },
    {
      title: "Jr-Fong Dang, Tzu-Li Chen* and Bing-Yi Lin, “A Closed-Loop cGAN-Based Framework for Surface Defect Detection in Industrial LPG Rubber Hoses”, International Journal of Advanced Manufacturing Technology, in press. (SCI)",
    },
    {
      title: "James C. Chen, Tzu-Li Chen, Yin-Yann Chen, Chung-Wei Su and Dewanti Anggrahini, “Supply chain planning for back-end production networks with mixed traditional and wafer-level chip-scale packaging for IC design houses”, Journal of the Chinese Institute of Engineers, in press. (SCI)",
    },
    {
      title: "James C. Chen, Tzu-Li Chen, Wen-Han Chang, Weide Tsai and Julio Eduardo Sanchez Avellan, “Modified variable neighbourhood search algorithm for physician rostering optimisation problem in a hospital emergency department”, Asian Journal of Management Science and Applications, in press.",
    },
    {
      title: "Tzu-Li Chen, James C. Chen, Yin-Yann Chen and Chia-Hsin Tsou, “Adaptive Large Neighborhood Search for the Pickup and Delivery Problem with Nonlinear Charging and Load-Dependent Discharging Using Autonomous Mobile Robots”, Flexible Services and Manufacturing Journal, in press. (SCI)",
    },
    {
      title: "Kuo-Hao Chang, Tzu-Li Chen*, Lan-Hsin Yu and Tzu-Yin Chang, “Simulation-based Dynamic Optimization for Ambulance Dispatch and Casualty Distribution in Mass Casualty Incident”, Computers and Operations Research, Vol. 194, Article 107559, 2026. (SCI)",
    },
    {
      title: "Jr-Fong Dang, Li-Na Wang and Tzu-Li Chen*, “Intelligent Defect‑Detection Framework Integrating a Modified YOLO Algorithm, a Domain Knowledge Graph, and RAG‑Enabled Large Language Model”, Advanced Engineering Informatics, Vol. 75, Article 104709, 2026. (SCI)",
    },
    {
      title: "Tzu-Li Chen, James C. Chen, Yi-Jing Lin, Kuo-Ching Yao and Ping-Chen Chang, “Application of GAN-based Data Augmentation and Filtering Methods for Imbalanced Grinding Wheel Specification Classification”, Advanced Engineering Informatics, Vol. 73, Article 104514, 2026. (SCI)",
    },
    {
      title: "Yen-Yi Feng, I-Chin Wu, Tzu-Li Chen, Zhi-Rou Lin, Liang-Hao Chin and Wen-Han Chang, “Early Prediction of Hospital Admission in the Emergency Department by Generating Expanded Chief Complaints”, Intelligent Data Analysis, Vol. 30, No. 2, pp. 451-477, 2026. (SCI).",
    },
    {
      title: "James C. Chen, Tzu-Li Chen, Bing-Ying Kew and Ping-Chen Chang, “Simultaneous scheduling optimization for machines and multiple-load AGVs in a digital-twin-based environment”, Journal of Industrial and Management Optimization, Vol. 21, No. 9, pp. 5914-5937, 2025. (SCI)",
    },
    {
      title: "Tzu-Li Chen, James C. Chen, Yin-Yann Chen, and Yu-Jie Chang, “The optimal configuration for various placement machines in PCB assembly lines”, Annals of Operations Research, 349, pp. 365–396, 2025. (SCI)",
    },
    {
      title: "Ming-Sung Shih, James C. Chen, Tzu-Li Chen* and Ching-Lan Hsu, “Two-Phase Cost-Sensitive-Learning-Based Framework on Customer-Side Quality Inspection for TFT-LCD Industry”, Journal of Intelligent Manufacturing, 36, pp. 4251–4267, 2025. (SCI)",
    },
    {
      title: "Chyh-Ming Lai, Chun-Chih Chiu and Tzu-Li Chen, “A nondominated sorting simplified swarm optimization with local search mechanisms for multi-objective vehicle routing problems with time windows”, Applied Soft Computing, Vol. 174, Article 112989, 2025. (SCI).",
    },
    {
      title: "Ming-Sung Shih, James C. Chen, Tzu-Li Chen*, Chih-Hsiung Chiang and Ching-Lan Hsu, “Machine-learning-based sampling inspection under OQC capacity for real-time quality monitoring in the TFT-LCD industry”, International Journal of Production Research, Vol. 63, No. 6, pp. 2090-2113, 2025. (SCI)",
    },
    {
      title: "Jr-Fong Dang, Tzu-Li Chen* and Hung-Yi Huang, “The Human-Centric Framework Integrating Knowledge Distillation Architecture with Fine-Tuning Mechanism for Equipment Health Monitoring”, Advanced Engineering Informatics, Vol. 65, Article 103167, 2025. (SCI)",
    },
    {
      title: "Tzu-Li Chen* and Yu-Xuan Li, “Applying Mixed-Integer Simulation Optimization for Tactical Design Decisions of Robotic Sorting System with Guaranteed Security Level to Combat Illicit Trade”, Advanced Engineering Informatics, Vol. 65, Article 103164, 2025. (SCI).",
    },
    {
      title: "Kuo-Hao Chang, Tzu-Li Chen*, Yi-Ting Lee and Tzu-Yin Chang, “Stochastic Ambulance Dispatching and Routing in Mass Casualty Incident under Road Vulnerability”, Journal of the Operational Research Society, Vol. 76, No. 1, pp. 34-60, 2025. (SCI)",
    },
    {
      title: "James C. Chen, Tzu-Li Chen, Yin-Yann Chen and Yung-Hsin Su, “Applying a Modified Adaptive Large Neighborhood Search for Truck Scheduling and Pile Assignment in a Two-Stage Sorting System”, European Journal of Industrial Engineering, Vol. 19, No. 2, pp. 128-161, 2025. (SCI)",
    },
    {
      title: "James C. Chen, Dewanti Anggrahini and Tzu-Li Chen, “Current research and future challenges in parcel hub towards logistics 4.0: A systematic literature review from a decision-making perspective”, International Journal of Production Research, Vol. 62, No. 23, pp. 8562-8593, 2024. (SCI)",
    },
    {
      title: "Kuo-Ching Yao, Tzu-Li Chen*, James C. Chen and Chia-Ruei Li, “Grinding Wheel Specification Cybernetic Recommendation with Multi-Task Multi-Imbalanced Learning in Smart Manufacturing System”, Advanced Engineering Informatics, Vol. 61, Article 102565, 2024. (SCI)",
    },
    {
      title: "Kuo-Hao Chang and Tzu-Li Chen*, “Simulation Learning and Optimization: Methodology and Applications”, Asia-Pacific Journal of Operational Research, in press, 2024. (SCI)",
    },
    {
      title: "James C. Chen, Tzu-Li Chen*, and Ping-Hsuan Wu, “Truck Scheduling with Fixed Outbound Departures in a Closed-Loop Conveyor System with Shortcuts”, Flexible Services and Manufacturing Journal, Vol. 36, pp. 1107–1156, 2024. (SCI)",
    },
    {
      title: "James C. Chen, Tzu-Li Chen, Yin-Yann Chen, and Min-Yu Chung, “Multi-resource constrained scheduling considering process plan flexibility and lot streaming for the CNC machining industry”, Flexible Services and Manufacturing Journal, Vol. 36, pp. 946–993, 2024. (SCI)",
    },
    {
      title: "Chen-Yang Cheng, Pourya Pourhejazy and Tzu-Li Chen*, “Computationally Efficient Approximate Dynamic Programming for Multi-site Production Capacity Planning with Uncertain Demands”, Flexible Services and Manufacturing Journal, Vol. 35, pp. 797–837, 2023. (SCI)",
    },
    {
      title: "James C. Chen, Tzu-Li Chen*, Wei-Chen Huang, Peter Peng and Tony Lin, “Supply Chain Planning for IC Design House Back-end Production Network with Turnkey Service”, IEEE Transactions on Semiconductor Manufacturing, Vol. 36, No.3, pp. 458-475, 2023. (SCI)",
    },
    {
      title: "Yin-Yann Chen, Tzu-Li Chen, Chun-Chih Chiu and Yi-Jia Wu, “A multi-trip vehicle routing problem considering time windows and limited duration under parking constraints with a heterogeneous fleet in cold supply chain logistics”, Transportation Planning and Technology, Vol. 46, No.3, pp. 335-358, 2023. (SCI)",
    },
    {
      title: "Kuo-Hao Chang, Tzu-Li Chen*, Fu-Hao Yang and Tzu-Yin Chang, “Simulation Optimization for Stochastic Casualty Collection Point Location and Resource Allocation Problem in a Mass Casualty Incident”, European Journal of Operational Research, Vol. 309, No.3, pp. 1237-1262, 2023. (SCI)",
    },
    {
      title: "James C. Chen, Tzu-Li Chen* and Yu-Hsin Lee, “Simulation Optimization for Parcel Hub Scheduling Problem in Closed-loop Sortation System with Shortcuts”, Simulation Modelling Practice and Theory, Vol. 124, Article 102728, 2023. (SCI)",
    },
    {
      title: "James C. Chen, Tzu-Li Chen*, Han-Yu Hu, Peter Peng and Tony Lin, “Multi-objective Order Promising for Outsourcing Supply Network of IC Design Houses”, IEEE Transactions on Semiconductor Manufacturing, Vol. 35, No.4, pp. 680-697, 2022. (SCI)",
    },
    {
      title: "James C. Chen, Tzu-Li Chen, Hsiang-Leng Wang and Ping-Chen Chang, “Underwater Abnormal Classification System Based on Deep Learning: A Case study on Aquaculture Fish Farm in Taiwan”, Aquacultural Engineering, Vol. 99, Article 102290, 2022. (SCI)",
    },
    {
      title: "Tzu-Li Chen*, James C. Chen, Wen-Han Chang, Weide Tsai, Mei-Chuan Shih and Achmad Wildan Nabila, “Imbalanced Prediction of Emergency Department Admission Using Natural Language Processing and Deep Neural Network”, Journal of Biomedical Informatics, Vol. 133, Article 104171, 2022. (SCI)",
    },
    {
      title: "James C. Chen, Yin-Yann Chen, Tzu-Li Chen and Yu-Chia Yang, “An adaptive genetic algorithm-based and AND/OR graph approach for disassembly line balancing problem”, Engineering Optimization, Vol. 54, No.9, pp. 1583-1599, 2022. (SCI)",
    },
    {
      title: "Ming. Zhao, Shuo-Tsung Chen, Tzu-Li Chen, Shu-Yi Tu, Cheng-Ta Yeh, Fang-Yu Lin and Hao-Chun Lu, “Intelligent Healthcare System Using Patients Confidential Data Communication in Electrocardiogram Signals”, Frontiers in Aging Neuroscience, Vol. 14, Article 870844, 2022. (SCI)",
    },
    {
      title: "James C. Chen, Yin-Yann Chen, Tzu-Li Chen and Yi-Hsuan Lin, “Multi-Project Scheduling with Multi-Skilled Workforce Assignment Considering Uncertainty and Learning Effect for Large-Scale Equipment Manufacturer”, Computers & Industrial Engineering, Vol. 169, Article 108240, 2022. (SCI)",
    },
    {
      title: "James C. Chen, Hung-Yu Lee, Wen-Haiung Hsieh and Tzu-Li Chen*, “Applying hybrid genetic algorithm to multi-mode resource constrained multi-project scheduling problems”, Journal of the Chinese Institute of Engineers, Vol. 45, No.1, pp.42-53, 2022. (SCI)",
    },
    {
      title: "James C. Chen, Tzu-Li Chen*, Wei-Jun Liu, C. C. Cheng and Meng-Gung Li, “Combining Empirical Mode Decomposition and Deep Recurrent Neural Networks for Predictive Maintenance of Lithium-Ion Battery”, Advanced Engineering Informatics, Vol. 50, Article 101405, 2021. (SCI)",
    },
    {
      title: "James C. Chen, Tzu-Li Chen* and Yu-Ching Teng, “Meta-model based Simulation Optimization for Automated Guided Vehicle System under Different Charging Mechanisms”, Simulation Modelling Practice and Theory, Vol. 106, Article 102208, 2021. (SCI)",
    },
    {
      title: "Tzu-Li Chen, James C. Chen, Chien-Fu Huang and Ping-Chen Chang, “Solving the layout design problem by simulation-optimization approach—A case study on a sortation conveyor system”, Simulation Modelling Practice and Theory, Vol. 106, Article 102192, 2021. (SCI)",
    },
    {
      title: "James C. Chen, Tzu-Li Chen* and Hsiao-Ching Hung, “Capacity allocation with lot splitting in photolithography area using hybrid genetic algorithm based on self-tuning strategy”, Computers & Industrial Engineering, Vol. 148, Article 106656, 2020. (SCI)",
    },
    {
      title: "Wen-Han Chang, Sonia M. Lo, Tzu-Li Chen, James C. Chen and Hao-Ning Wu, “Utilizing Online Stochastic Optimization on Scheduling of Intensity-Modulate Radiotherapy Therapy (IMRT)”, Journal of Biomedical Informatics, Vol. 108, Article 103499, 2020. (SCI)",
    },
    {
      title: "Tzu-Li Chen, Chen-Yang Cheng and Yi-Han Chou, “Multi-Objective Genetic Algorithm for Energy-Efficient Hybrid Flow Shop Scheduling with Lot Streaming”, Annals of Operations Research, Vol. 290, No.1-2, pp.813-836, 2020. (SCI)",
    },
    {
      title: "James C. Chen, Tzu-Li Chen*, Ting-Chieh Ou and Yu-Hsin Lee, “Adaptive Genetic Algorithm for Parcel Hub Scheduling Problem with Shortcuts in Closed-Loop Sortation System”, Computers & Industrial Engineering, Vol. 138, Article 106114, 2019. (SCI)",
    },
    {
      title: "James C. Chen, Yin-Yann Chen, Tzu-Li Chen and Yi-Hsin Kuo, “Applying two-phase adaptive genetic algorithm to solve multi-model assembly line balancing problems in TFT–LCD module process”, Journal of Manufacturing Systems, Vol. 52, pp. 86-99, 2019. (SCI)",
    },
    {
      title: "Yen-Yi Feng, I-Chin Wu, Tzu-Li Chen and Wen-Han Chang, \"A Hybrid Data Mining Approach for Generalizing Characteristics of Emergency Department Visits Causing Overcrowding\", Journal of Library and Information Studies, 2019, Vol. 17, pp. 1–35, (TSSCI). [in Chinese].",
    },
    {
      title: "James C. Chen, Tzu-Li Chen*, Bayu Rezki Pratama and Qian-Fang Tu, “Capacity Planning with Ant Colony Optimization for TFT-LCD Array Manufacturing”, Journal of Intelligent Manufacturing, Vol. 29, No.8, pp.1695-1713, 2018. (SCI)",
    },
    {
      title: "I-Chin Wu, Tzu-Li Chen, Guan-Qun Hong, Yen-Ming Chen and Tzu-Chi Liu, \"A Symbolic Time-series Data Mining Framework for Analyzing Load Profiles of Electricity Consumption\", Journal of Library and Information Studies, 2017, Vol. 15, pp. 21–44, (TSSCI). [in Chinese].",
    },
    {
      title: "James C. Chen, Yin-Yann Chen, Tzu-Li Chen and Jim Z. Lin, “Comparison of Simulated Annealing and Tabu-Search Algorithms in Advanced Planning and Scheduling System for TFT-LCD Color Filter Fabs”, International Journal of Computer Integrated Manufacturing, Vol. 30, pp. 516–534, 2017. (SCI)",
    },
    {
      title: "Yen-Yi Feng, I-Chin Wu and Tzu-Li Chen*, “Stochastic resource allocation in emergency departments with a multi-objective simulation optimization algorithm”, Health Care Management Science,Vol. 20, pp. 55–75, 2017. (SSCI)",
    },
    {
      title: "James C. Chen, Tzu-Li Chen* and Harry Harianto, “Capacity Planning for Packaging Industry”, Journal of Manufacturing Systems, Vol. 42, pp. 153–169, 2017. (SCI)",
    },
    {
      title: "Yi-Wen Chen, Li-Chih Wang, Allen Wang, and Tzu-Li Chen, “A particle swarm approach for optimizing a multi-stage closed loop supply chain for the solar cell industry”, Robotics and Computer-Integrated Manufacturing, Vol. 43, pp. 111–123, 2017. (SCI)",
    },
    {
      title: "Tzu-Li Chen, I-Chin Wu, Chung-Lun Yang and Yen-Yi Feng, \"An Empirical Study on Mining Behaviors of Patients Based on Their Length of Stay in the Emergency Department \", Journal of Management & Systems, Vol. 23, pp. 527-561, 2016. (TSSCI). [in Chinese].",
    },
    {
      title: "James C. Chen, Tzu-Li Chen*, Bayu Rezki Pratama and Qian-Fang Tu, “Capacity Planning in Thin Film Transistor - Liquid Crystal Display Cell Process”, Journal of Manufacturing Systems, Vol. 39, pp. 63-78, 2016. (SCI)",
    },
    {
      title: "Tzu-Li Chen* and Chih-Chieh Wang “Multi-objective simulation optimization for medical capacity allocation in emergency department”, Journal of Simulation, Vol. 10, No.1, pp. 50-68, 2016. (SCI)",
    },
    {
      title: "Chen-Yang Cheng, Yin-Yann Chen, Tzu-Li Chen and John Jung-Woon Yoo, “Using a hybrid approach based on the particle swarm optimization and ant colony optimization to solve a joint order batching and picker routing problem”, International Journal of Production Economics , Vol. 170, pp. 805-814, 2015. (SCI)",
    },
    {
      title: "James C. Chen, Cheng-Ju Sun and Tzu-Li Chen*, “Capacity Planning for Integrated Circuit Final Test Plants”, International Journal of Computer Integrated Manufacturing, Vol. 28, No.12, pp. 1262-1274, 2015. (SCI)",
    },
    {
      title: "Tzu-Li Chen, Chen-Yang Cheng, Yin-Yann Chen and Li-Kai Chan, “An efficient hybrid algorithm for integrated order batching, sequencing and routing problem”, International Journal of Production Economics, Vol. 159, pp. 158-167, 2015. (SCI)",
    },
    {
      title: "Chen-Yang Cheng, Tsung Yin Ou, Tzu-Li Chen and Yin-Yann Chen, “Transferring cognitive apprenticeship to manufacturing process knowledge management system: a case study of small and medium-sized coating industry”, VINE, Vol. 44, No.3, pp. 420-444, 2014.",
    },
    {
      title: "I-Chin Wu, Ruei-Jie Li, and Tzu-Li Chen*, “A Vehicular Maintenance and Replacement Decision Support System in Distribution Services: A Data Mining Technique\", Journal of Management & Systems, Vol. 21, pp. 111-137, 2014. (TSSCI). [in Chinese].",
    },
    {
      title: "Chen-Yang Cheng, Tzu-Li Chen, and Yin-Yann Chen, “An Analysis of the Structural Complexity of Supply Chain Networks”, Applied Mathematical Modelling,Vol. 38, No.9-10 pp. 2328–2344, 2014. (SCI)",
    },
    {
      title: "Li-Chih Wang, Yin-Yann Chen, Tzu-Li Chen, Chen-Yang Cheng and Chin-Wei Chang, “A Hybrid Flowshop Scheduling Model Considering Dedicated Machines and Lot-splitting for the Solar Cell Industry”, International Journal of Systems Science, Vol. 45, No.10 pp. 2055–2071, 2014. (SCI)",
    },
    {
      title: "James T. Lin, Tzu-Li Chen*, and Hsiao-Ching Chu, “A Stochastic Dynamic Programming Approach for Multi-Site Capacity Planning in TFT-LCD Manufacturing under Demand Uncertainty”, International Journal of Production Economics, Vol. 148, pp. 21-36, 2014. (SCI)",
    },
    {
      title: "Tzu-Li Chen*, James T. Lin, and Cheng-Hung Wu, “Coordinated Capacity Planning in Two-stage Thin-Film-Transistor Liquid-Crystal-Display (TFT-LCD) Production Networks”, OMEGA-INTERNATIONAL JOURNAL OF MANAGEMENT SCIENCE , Vol. 42, No.1, pp. 141-156, 2014. (SCI)",
    },
    {
      title: "Tzu-Li Chen*, Yin-Yann Chen and Hao-Chun Lu, “A capacity allocation and expansion model for TFT-LCD multi-site manufacturing”, Journal of Intelligent Manufacturing, Vol. 24, No.4, pp.847-872, 2013. (SCI)",
    },
    {
      title: "Chen-Yang Cheng, Tzu-Li Chen*, Li-Chih Wang and Yin-Yann Chen “A Genetic Algorithm for the Multi-Stage and Parallel-Machine Scheduling Problem with job splitting – A Case Study for the Solar Cell Industry”,International Journal of Production Research, Vol. 51, No.16, pp. 4755-4777, 2013. (SCI)",
    },
    {
      title: "Yin-Yann Chen, Tzu-Li Chen and Cheng-Dar Liou, “Medium-term Multi-plant Capacity Planning Problems Considering Auxiliary Tools for the Semiconductor Foundry”, International Journal of Advanced Manufacturing Technology, Vol. 64, pp. 1213-1230, 2013. (SCI)",
    },
    {
      title: "Hao-Chun Lu and Tzu-Li Chen*, “EfficientModel for Interval Goal Programming with Arbitrary Penalty Function”, Optimization Letters, Vol. 7, pp.325-341, 2013. (SCI)",
    },
    {
      title: "Yin-Yann Chen, Chen-Yang Cheng, Li-Chih Wang and Tzu-Li Chen, “A hybrid approach based on the variable neighborhood search and particle swarm optimization for parallel machine scheduling problems- a case study for solar cell industry”, International Journal of Production Economics, Vol. 141, pp. 66-78, 2013. (SCI)",
    },
    {
      title: "Tzu-Li Chen and Hao-Chun Lu, “Stochastic Multi-Site Capacity Planning of TFT-LCD Manufacturing Using Expected Shadow-Price Based Decomposition”, Applied Mathematical Modelling, Vol. 36, pp.5901-5919, 2012. (SCI)",
    },
    {
      title: "Yin-Yann Chen, James T. Lin and Tzu-Li Chen, \"A Two-Phase Dynamic Dispatching Approach to Semiconductor Wafer Testing\", Robotics and Computer-Integrated Manufacturing, Vol. 27, pp.889-901, 2011. (SCI)",
    },
    {
      title: "James T. Lin, Cheng-Hung Wu, Tzu-Li Chen and Shin-Hui Shih, “A Stochastic Programming Model for Strategic Capacity Planning in Thin Film Transistor – Liquid Crystal Display (TFT-LCD) Industry”, Computers & Operations Research, Vol. 38, pp.992-1007, 2011. (SCI)",
    },
    {
      title: "James T. Lin* and Tzu-Li Chen, “A Hierarchical Planning and Scheduling Framework for TFT-LCD Production Chain”, Automation Quarterly, Sep. 2010. [in Chinese].",
    },
    {
      title: "Tzu-Li Chen*, James T. Lin and Shu-Cherng Fang, “A Shadow-Price Based Heuristic for Capacity Planning of TFT-LCD Manufacturing”, Journal of Industrial and Management Optimization, Vol. 6, No.1, pp.209-239, 2010. (SCI)",
    },
    {
      title: "James T. Lin, Tzu-Li Chen and Yen-Ting Lin, “Critical Material Planning for TFT-LCD Production Industry”, International Journal of Production Economics, Vol.122, No. 2, pp.639-655, 2009. (SCI)",
    },
    {
      title: "James T. Lin, Chien-Chi Tsai, Yin-Yann Chen and Tzu-Li Chen, \"Dispatching Rules with Queue-Time-Limit Consideration for Furnace in Wafer Fabrication Factory\", Journal of Advanced Engineering, Vol. 4, No. 3, pp. 273-278, 2009. [in Chinese]",
    },
    {
      title: "James T. Lin, Tzu-Li Chen* and Wei-June Chen, “Capacity and product mix planning problem for TFT Array multi-plant”, Journal of the Chinese Institute of Industrial Engineers, Vol.24, No.6, pp.489-504, 2007. (EI, TSSCI)",
    },
    {
      title: "James T. Lin, Tzu-Li Chen, Tiffany Tsai, Jeffery J. Lai and Tuo-Chung Huang, “A SCOR-Based Methodology for Analyzing and Designing Supply Chain”, International Journal of Electronic Business Management, Vol.3, No.1, pp.1-7, 2005. (EI)",
    },
    {
      title: "James T. Lin, Tzu-Li Chen* and Chien-Chung Huang, “A Hierarchy Planning Model for TFT-LCD Production Chain”, International Journal of Electronic Business Management, Vol.2, No.1, pp.59-68, 2004. (EI)",
    },
  ]
};


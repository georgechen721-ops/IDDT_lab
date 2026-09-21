// ══════════════════════════════════════════════════════════════════════════
//  網站所有文字與圖片都在這個檔案修改，其他程式檔不需要動。
//  圖片：放進 public/ 資料夾，這裡只寫檔名（例如 "cover.jpg"）。
// ══════════════════════════════════════════════════════════════════════════

// ── 網站共用文字（標題、按鈕、頁尾…）────────────────────────────────────────
export const SITE = {
  department: "國立清華大學　工業工程與工程管理學系", // 首頁 Hero 小字
  heroImage: "cover.jpg", // 首頁 Hero 背景圖
  heroButtons: { team: "探索研究團隊", publications: "相關學術研究" },

  nav: { home: "首頁", research: "研究領域", publications: "學術研究", team: "團隊成員", contact: "聯絡我們" },

  footer: {
    tagline: "IDDT LABORATORY",
    description: "致力於跨領域整合，透過數據科學與工程仿真，為企業與學界提供最強大的決策支持平台。",
    contactTitle: "聯繫資訊",
    copyright: "National Tsing Hua University",
  },

  home: {
    researchTitle: "核心研究領域",
    researchMore: "研究重點", // 研究領域的「查看更多」文字，也是彈跳視窗裡的小標
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
    body: "以強化學習驅動 AMR 智慧調度，完美銜接半導體點膠站與充電決策的最佳路徑。",
    points: [
      "設備行為參數化建模",
      "即時同步物理狀態",
      "虛擬場景壓力測試",
      "預測性維護排程",
    ],
  },
  {
    id: "scheduling",
    icon: "calendar",
    title: "排程改善",
    subtitle: "Scheduling",
    tags: ["啟發式算法", "AI 決策", "生產排程"],
    body: "結合人工智慧與優化演算法，動態處理多目標排程與資源調度，提升產線效率並降低生產成本。",
    points: [
      "多目標排程最佳化",
      "動態插單即時調整",
      "資源衝突自動解析",
      "強化學習策略訓練",
    ],
  },
  {
    id: "llm",
    icon: "llm",
    title: "LLM",
    subtitle: "Large Language Models",
    tags: ["關鍵字一（待填）", "關鍵字二（待填）"],
    body: "（待填）一句話說明這個研究領域在做什麼。",
    points: ["重點一（待填）", "重點二（待填）", "重點三（待填）"],
  },
  {
    id: "warehouse",
    icon: "warehouse",
    title: "倉儲管理",
    subtitle: "Warehouse Management",
    tags: ["關鍵字一（待填）", "關鍵字二（待填）"],
    body: "（待填）一句話說明這個研究領域在做什麼。",
    points: ["重點一（待填）", "重點二（待填）", "重點三（待填）"],
  },
  {
    id: "disaster",
    icon: "shield",
    title: "災防管理",
    subtitle: "Disaster Management",
    tags: ["深度學習", "智慧控制", "決策支援"],
    body: "探索深度學習、自然語言處理與智慧控制技術，打造工業流程的智慧決策支援系統。",
    points: [
      "深度學習模型訓練",
      "自然語言處理整合",
      "工業流程智慧控制",
      "決策支援系統開發",
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
      image: "jim.jpg",
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
      image: "",
    },
    {
      name: "范峻嘉",
      interest: "Scheduling",
      year: "碩一",
      image: "",
    },
    {
      name: "黃荏榆",
      interest: "LLM",
      year: "碩一",
      image: "",
    },
    {
      name: "游敏妍",
      interest: "Warehouse Management",
      year: "碩一",
      image: "",
    },
    {
      name: "詹映庭",
      interest: "Warehouse Management",
      year: "碩一",
      image: "",
    },
    {
      name: "洪于涵",
      interest: "Disaster Management",
      year: "碩一",
      image: "",
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
      title: "資料驅動隨機最佳化來實現地震後最佳災害應變和復原策略：醫療資源分配、救護車調度和損壞道路修復決策 (1/3)\nData-driven stochastic optimization for optimal disaster response and recovery strategies after earthquakes: Medical resource allocation, ambulance dispatch and road restoration decisions",
      partner: "國科會",
      date: "2024.08-2027.07",
    },
    {
      title: "結合數位孿生、多智能體強化學習與模仿學習之半導體封裝產線多負載自主移動機器人控制決策最佳化",
      partner: "國科會",
      date: "2026.0X-",
    },
    
  ],
  industry: [
    {
      title: "針對 AMR 搬運效率進行多目標最佳化",
      partner: "日月光半導體",
    },
    {
      title: "整線智慧生產排程",
      partner: "上銀科技",
    },
    {
      title: "動態 Hot Lot Scheduling 排程系統",
      partner: "旺宏電子",
    },
    {
      title: "災防",
      partner: "鴻海科技",
    },
    {
      title: "",
      partner: "泰科動力",
    },
  ],
  journals: [
    {
      title: "Jr-Fong Dang, Li-Na Wang and Tzu-Li Chen*, Intelligent Defect‑Detection Framework Integrating a Modified YOLO Algorithm, a Domain Knowledge Graph, and RAG‑Enabled Large Language Model, Advanced Engineering Informatics, in press. (SCI)",
    },
    {
      title: "Tzu-Li Chen, James C. Chen, Yi-Jing Lin, Kuo-Ching Yao and Ping-Chen Chang, Application of GAN-based Data Augmentation and Filtering Methods for Imbalanced Grinding Wheel Specification Classification, Advanced Engineering Informatics, Vol. 73, Article 104514, 2026. (SCI)",
    },
    {
      title: "Tzu-Li Chen, James C. Chen, Yin-Yann Chen and Chia-Hsin Tsou, Adaptive Large Neighborhood Search for the Pickup and Delivery Problem with Nonlinear Charging and Load-Dependent Discharging Using Autonomous Mobile Robots, Flexible Services and Manufacturing Journal, in press. (SCI)",
    },
    {
      title: "Yen-Yi Feng, I-Chin Wu, Tzu-Li Chen, Zhi-Rou Lin, Liang-Hao Chin and Wen-Han Chang, Early Prediction of Hospital Admission in the Emergency Department by Generating Expanded Chief Complaints, Intelligent Data Analysis, Vol. 30, No. 2, pp. 451-477, 2026. (SCI).",
    },
    {
      title: "James C. Chen, Tzu-Li Chen, Bing-Ying Kew and Ping-Chen Chang, Simultaneous scheduling optimization for machines and multiple-load AGVs in a digital-twin-based environment, Journal of Industrial and Management Optimization, Vol. 21, No. 9, pp. 5914-5937, 2025. (SCI)",
    },
    {
      title: "Tzu-Li Chen, James C. Chen, Yin-Yann Chen, and Yu-Jie Chang, The optimal configuration for various placement machines in PCB assembly lines, Annals of Operations Research, 349, pp. 365–396, 2025. (SCI)",
    },
    {
      title: "Ming-Sung Shih, James C. Chen, Tzu-Li Chen* and Ching-Lan Hsu, Two-Phase Cost-Sensitive-Learning-Based Framework on Customer-Side Quality Inspection for TFT-LCD Industry, Journal of Intelligent Manufacturing, 36, pp. 4251–4267, 2025. (SCI)",
    },
    {
      title: "Chyh-Ming Lai, Chun-Chih Chiu and Tzu-Li Chen, A nondominated sorting simplified swarm optimization with local search mechanisms for multi-objective vehicle routing problems with time windows, Applied Soft Computing, Vol. 174, Article 112989, 2025. (SCI).",
    },
    {
      title: "Ming-Sung Shih, James C. Chen, Tzu-Li Chen*, Chih-Hsiung Chiang and Ching-Lan Hsu, Machine-learning-based sampling inspection under OQC capacity for real-time quality monitoring in the TFT-LCD industry, International Journal of Production Research, Vol. 63, No. 6, pp. 2090-2113, 2025. (SCI)",
    },
    {
      title: "Jr-Fong Dang, Tzu-Li Chen* and Hung-Yi Huang, The Human-Centric Framework Integrating Knowledge distillation Architecture with Fine-Tuning Mechanism for Equipment Health Monitoring, Advanced Engineering Informatics, Vol. 65, Article 103167, 2025. (SCI)",
    },
    {
      title: "Tzu-Li Chen* and Yu-Xuan Li, Applying Mixed-Integer Simulation Optimization for Tactical Design Decisions of Robotic Sorting System with Guaranteed Security Level to Combat Illicit Trade, Advanced Engineering Informatics, Vol. 65, Article 103164, 2025. (SCI).",
    },
    {
      title: "Kuo-Hao Chang, Tzu-Li Chen*, Yi-Ting Lee and Tzu-Yin Chang, Stochastic Ambulance Dispatching and Routing in Mass Casualty Incident under Road Vulnerability, Journal of the Operational Research Society, Vol. 76, No. 1, pp. 34-60, 2025. (SCI)",
    },
    {
      title: "James C. Chen, Tzu-Li Chen, Yin-Yann Chen and Yung-Hsin Su, Applying a Modified Adaptive Large Neighborhood Search for Truck Scheduling and Pile Assignment in a Two-Stage Sorting System, European Journal of Industrial Engineering, Vol. 19, No. 2, pp. 128-161, 2025. (SCI)",
    },
    {
      title: "James C. Chen, Dewanti Anggrahini and Tzu-Li Chen, Current research and future challenges in parcel hub towards logistics 4.0: A systematic literature review from a decision-making perspective, International Journal of Production Research, Vol. 62, No. 23, pp. 8562-8593, 2024. (SCI)",
    },
    {
      title: "Kuo-Ching Yao, Tzu-Li Chen*, James C. Chen and Chia-Ruei Li, Grinding Wheel Specification Cybernetic Recommendation with Multi-Task Multi-Imbalanced Learning in Smart Manufacturing System, Advanced Engineering Informatics, Vol. 61, Article 102565, 2024. (SCI)",
    },
    {
      title: "Kuo-Hao Chang and Tzu-Li Chen*, Simulation Learning and Optimization: Methodology and Applications, Asia-Pacific Journal of Operational Research, in press, 2024. (SCI)",
    },
    {
      title: "James C. Chen, Tzu-Li Chen*, and Ping-Hsuan Wu, Truck Scheduling with Fixed Outbound Departures in a Closed-Loop Conveyor System with Shortcuts, Flexible Services and Manufacturing Journal, Vol. 36, pp. 1107–1156, 2024. (SCI)",
    },
    {
      title: "James C. Chen, Tzu-Li Chen, Yin-Yann Chen, and Min-Yu Chung, Multi-resource constrained scheduling considering process plan flexibility and lot streaming for the CNC machining industry, Flexible Services and Manufacturing Journal, Vol. 36, pp. 946–993, 2024. (SCI)",
    },
    {
      title: "Chen-Yang Cheng, Pourya Pourhejazy and Tzu-Li Chen*, Computationally Efficient Approximate Dynamic Programming for Multi-site Production Capacity Planning with Uncertain Demands, Flexible Services and Manufacturing Journal, Vol. 35, pp. 797–837, 2023. (SCI)",
    },
    {
      title: "James C. Chen, Tzu-Li Chen*, Wei-Chen Huang, Peter Peng and Tony Lin, Supply Chain Planning for IC Design House Back-end Production Network with Turnkey Service, IEEE Transactions on Semiconductor Manufacturing, Vol. 36, No.3, pp. 458-475, 2023. (SCI)",
    },
    {
      title: "Yin-Yann Chen, Tzu-Li Chen, Chun-Chih Chiu and Yi-Jia Wu, A multi-trip vehicle routing problem considering time windows and limited duration under parking constraints with a heterogeneous fleet in cold supply chain logistics, Transportation Planning and Technology, Vol. 46, No.3, pp. 335-358, 2023. (SCI)",
    },
    {
      title: "Kuo-Hao Chang, Tzu-Li Chen*, Fu-Hao Yang and Tzu-Yin Chang, Simulation Optimization for Stochastic Casualty Collection Point Location and Resource Allocation Problem in a Mass Casualty Incident, European Journal of Operational Research, Vol. 309, No.3, pp. 1237-1262, 2023. (SCI)",
    },
    {
      title: "James C. Chen, Tzu-Li Chen* and Yu-Hsin Lee, Simulation Optimization for Parcel Hub Scheduling Problem in Closed-loop Sortation System with Shortcuts, Simulation Modelling Practice and Theory, Vol. 124, Article 102728, 2023. (SCI)",
    },
    {
      title: "James C. Chen, Tzu-Li Chen*, Han-Yu Hu, Peter Peng and Tony Lin, Multi-objective Order Promising for Outsourcing Supply Network of IC Design Houses, IEEE Transactions on Semiconductor Manufacturing, Vol. 35, No.4, pp. 680-697, 2022. (SCI)",
    },
    {
      title: "James C. Chen, Tzu-Li Chen, Hsiang-Leng Wang and Ping-Chen Chang, Underwater Abnormal Classification System Based on Deep Learning: A Case study on Aquaculture Fish Farm in Taiwan, Aquacultural Engineering, Vol. 99, Article 102290, 2022. (SCI)",
    },
    {
      title: "Tzu-Li Chen*, James C. Chen, Wen-Han Chang, Weide Tsai, Mei-Chuan Shih and Achmad Wildan Nabila, Imbalanced Prediction of Emergency Department Admission Using Natural Language Processing and Deep Neural Network, Journal of Biomedical Informatics, Vol. 133, Article 104171, 2022. (SCI)",
    },
    {
      title: "James C. Chen, Yin-Yann Chen, Tzu-Li Chen and Yu-Chia Yang, An adaptive genetic algorithm-based and AND/OR graph approach for disassembly line balancing problem, Engineering Optimization, Vol. 54, No.9, pp. 1583-1599, 2022. (SCI)",
    },
    {
      title: "Ming. Zhao, Shuo-Tsung Chen, Tzu-Li Chen, Shu-Yi Tu, Cheng-Ta Yeh, Fang-Yu Lin and Hao-Chun Lu, Intelligent Healthcare System Using Patients Confidential Data Communication in Electrocardiogram Signals, Frontiers in Aging Neuroscience, Vol. 14, Article 870844, 2022. (SCI)",
    },
    {
      title: "James C. Chen, Yin-Yann Chen, Tzu-Li Chen and Yi-Hsuan Lin, Multi-Project Scheduling with Multi-Skilled Workforce Assignment Considering Uncertainty and Learning Effect for Large-Scale Equipment Manufacturer, Computers & Industrial Engineering, Vol. 169, Article 108240, 2022. (SCI)",
    },
    {
      title: "James C. Chen, Hung-Yu Lee, Wen-Haiung Hsieh and Tzu-Li Chen*, Applying hybrid genetic algorithm to multi-mode resource constrained multi-project scheduling problems, Journal of the Chinese Institute of Engineers, Vol. 45, No.1, pp.42-53, 2022. (SCI)",
    },
    {
      title: "James C. Chen, Tzu-Li Chen*, Wei-Jun Liu, C. C. Cheng and Meng-Gung Li, Combining Empirical Mode Decomposition and Deep Recurrent Neural Networks for Predictive Maintenance of Lithium-Ion Battery, Advanced Engineering Informatics, Vol. 50, Article 101405, 2021. (SCI)",
    },
    {
      title: "James C. Chen, Tzu-Li Chen* and Yu-Ching Teng, Meta-model based Simulation Optimization for Automated Guided Vehicle System under Different Charging Mechanisms, Simulation Modelling Practice and Theory, Vol. 106, Article 102208, 2021. (SCI)",
    },
    {
      title: "Tzu-Li Chen, James C. Chen, Chien-Fu Huang and Ping-Chen Chang, Solving the layout design problem by simulation-optimization approach—A case study on a sortation conveyor system, Simulation Modelling Practice and Theory, Vol. 106, Article 102192, 2021. (SCI)",
    },
    {
      title: "James C. Chen, Tzu-Li Chen* and Hsiao-Ching Hung, Capacity allocation with lot splitting in photolithography area using hybrid genetic algorithm based on self-tuning strategy, Computers & Industrial Engineering, Vol. 148, Article 106656, 2020. (SCI)",
    },
    {
      title: "Wen-Han Chang, Sonia M. Lo, Tzu-Li Chen, James C. Chen and Hao-Ning Wu, Utilizing Online Stochastic Optimization on Scheduling of Intensity-Modulate Radiotherapy Therapy (IMRT), Journal of Biomedical Informatics, Vol. 108, Article 103499, 2020. (SCI)",
    },
    {
      title: "Tzu-Li Chen, Chen-Yang Cheng and Yi-Han Chou, Multi-Objective Genetic Algorithm for Energy-Efficient Hybrid Flow Shop Scheduling with Lot Streaming, Annals of Operations Research, Vol. 290, No.1-2, pp.813-836, 2020. (SCI)",
    },
    {
      title: "James C. Chen, Tzu-Li Chen*, Ting-Chieh Ou and Yu-Hsin Lee, Adaptive Genetic Algorithm for Parcel Hub Scheduling Problem with Shortcuts in Closed-Loop Sortation System, Computers & Industrial Engineering, Vol. 138, Article 106114, 2019. (SCI)",
    },
    {
      title: "James C. Chen, Yin-Yann Chen, Tzu-Li Chen and Yi-Hsin Kuo, Applying two-phase adaptive genetic algorithm to solve multi-model assembly line balancing problems in TFT–LCD module process, Journal of Manufacturing Systems, Vol. 52, pp. 86-99, 2019. (SCI)",
    },
    {
      title: "Yen-Yi Feng, I-Chin Wu, Tzu-Li Chen and Wen-Han Chang, A Hybrid Data Mining Approach for Generalizing Characteristics of Emergency Department Visits Causing Overcrowding, Journal of Library and Information Studies, 2019, Vol. 17, pp. 1–35, (TSSCI). [in Chinese].",
    },
    {
      title: "James C. Chen, Tzu-Li Chen*, Bayu Rezki Pratama and Qian-Fang Tu, Capacity Planning with Ant Colony Optimization for TFT-LCD Array Manufacturing, Journal of Intelligent Manufacturing, Vol. 29, No.8, pp.1695-1713, 2018. (SCI)",
    },
    {
      title: "I-Chin Wu, Tzu-Li Chen, Guan-Qun Hong, Yen-Ming Chen and Tzu-Chi Liu, A Symbolic Time-series Data Mining Framework for Analyzing Load Profiles of Electricity Consumption, Journal of Library and Information Studies, 2017, Vol. 15, pp. 21–44, (TSSCI). [in Chinese].",
    },
    {
      title: "James C. Chen, Yin-Yann Chen, Tzu-Li Chen and Jim Z. Lin, Comparison of Simulated Annealing and Tabu-Search Algorithms in Advanced Planning and Scheduling System for TFT-LCD Color Filter Fabs, International Journal of Computer Integrated Manufacturing, Vol. 30, pp. 516–534, 2017. (SCI)",
    },
    {
      title: "Yen-Yi Feng, I-Chin Wu and Tzu-Li Chen*, Stochastic resource allocation in emergency departments with a multi-objective simulation optimization algorithm, Health Care Management Science, Vol. 20, pp. 55–75, 2017. (SSCI)",
    },
    {
      title: "James C. Chen, Tzu-Li Chen* and Harry Harianto, Capacity Planning for Packaging Industry, Journal of Manufacturing Systems, Vol. 42, pp. 153–169, 2017. (SCI)",
    },
    {
      title: "Yi-Wen Chen, Li-Chih Wang, Allen Wang, and Tzu-Li Chen, A particle swarm approach for optimizing a multi-stage closed loop supply chain for the solar cell industry, Robotics and Computer-Integrated Manufacturing, Vol. 43, pp. 111–123, 2017. (SCI)",
    },
    {
      title: "Tzu-Li Chen, I-Chin Wu, Chung-Lun Yang and Yen-Yi Feng, An Empirical Study on Mining Behaviors of Patients Based on Their Length of Stay in the Emergency Department , Journal of Management & Systems, Vol. 23, pp. 527-561, 2016. (TSSCI). [in Chinese].",
    },
    {
      title: "James C. Chen, Tzu-Li Chen*, Bayu Rezki Pratama and Qian-Fang Tu, Capacity Planning in Thin Film Transistor - Liquid Crystal Display Cell Process, Journal of Manufacturing Systems, Vol. 39, pp. 63-78, 2016. (SCI)",
    },
    {
      title: "Tzu-Li Chen* and Chih-Chieh Wang Multi-objective simulation optimization for medical capacity allocation in emergency department, Journal of Simulation, Vol. 10, No.1, pp. 50-68, 2016. (SCI)",
    },
    {
      title: "Chen-Yang Cheng, Yin-Yann Chen, Tzu-Li Chen and John Jung-Woon Yoo, Using a hybrid approach based on the particle swarm optimization and ant colony optimization to solve a joint order batching and picker routing problem, International Journal of Production Economics , Vol. 170, pp. 805-814, 2015. (SCI)",
    },
    {
      title: "James C. Chen, Cheng-Ju Sun and Tzu-Li Chen*, Capacity Planning for Integrated Circuit Final Test Plants, International Journal of Computer Integrated Manufacturing, Vol. 28, No.12, pp. 1262-1274, 2015. (SCI)",
    },
    {
      title: "Tzu-Li Chen, Chen-Yang Cheng, Yin-Yann Chen and Li-Kai Chan, An efficient hybrid algorithm for integrated order batching, sequencing and routing problem, International Journal of Production Economics, Vol. 159, pp. 158-167, 2015. (SCI)",
    },
    {
      title: "Chen-Yang Cheng, Tsung Yin Ou, Tzu-Li Chen and Yin-Yann Chen, Transferring cognitive apprenticeship to manufacturing process knowledge management system: a case study of small and medium-sized coating industry, VINE, Vol. 44, No.3, pp. 420-444, 2014.",
    },
    {
      title: "I-Chin Wu, Ruei-Jie Li, and Tzu-Li Chen*, A Vehicular Maintenance and Replacement Decision Support System in Distribution Services: A Data Mining Technique, Journal of Management & Systems, Vol. 21, pp. 111-137, 2014. (TSSCI). [in Chinese].",
    },
    {
      title: "Chen-Yang Cheng, Tzu-Li Chen, and Yin-Yann Chen, An Analysis of the Structural Complexity of Supply Chain Networks, Applied Mathematical Modelling, Vol. 38, No.9-10 pp. 2328–2344, 2014. (SCI)",
    },
    {
      title: "Li-Chih Wang, Yin-Yann Chen, Tzu-Li Chen, Chen-Yang Cheng and Chin-Wei Chang, A Hybrid Flowshop Scheduling Model Considering Dedicated Machines and Lot-splitting for the Solar Cell Industry, International Journal of Systems Science, Vol. 45, No.10 pp. 2055–2071, 2014. (SCI)",
    },
    {
      title: "James T. Lin, Tzu-Li Chen*, and Hsiao-Ching Chu, A Stochastic Dynamic Programming Approach for Multi-Site Capacity Planning in TFT-LCD Manufacturing under Demand Uncertainty, International Journal of Production Economics, Vol. 148, pp. 21-36, 2014. (SCI)",
    },
    {
      title: "Tzu-Li Chen*, James T. Lin, and Cheng-Hung Wu, Coordinated Capacity Planning in Two-stage Thin-Film-Transistor Liquid-Crystal-Display (TFT-LCD) Production Networks, OMEGA-INTERNATIONAL JOURNAL OF MANAGEMENT SCIENCE , Vol. 42, No.1, pp. 141-156, 2014. (SCI)",
    },
    {
      title: "Tzu-Li Chen*, Yin-Yann Chen and Hao-Chun Lu, A capacity allocation and expansion model for TFT-LCD multi-site manufacturing, Journal of Intelligent Manufacturing, Vol. 24, No.4, pp.847-872, 2013. (SCI)",
    },
    {
      title: "Chen-Yang Cheng, Tzu-Li Chen*, Li-Chih Wang and Yin-Yann Chen A Genetic Algorithm for the Multi-Stage and Parallel-Machine Scheduling Problem with job splitting – A Case Study for the Solar Cell Industry, International Journal of Production Research, Vol. 51, No.16, pp. 4755-4777, 2013. (SCI)",
    },
    {
      title: "Yin-Yann Chen, Tzu-Li Chen and Cheng-Dar Liou, Medium-term Multi-plant Capacity Planning Problems Considering Auxiliary Tools for the Semiconductor Foundry, International Journal of Advanced Manufacturing Technology, Vol. 64, pp. 1213-1230, 2013. (SCI)",
    },
    {
      title: "Hao-Chun Lu and Tzu-Li Chen*, Efficient Model for Interval Goal Programming with Arbitrary Penalty Function, Optimization Letters, Vol. 7, pp.325-341, 2013. (SCI)",
    },
    {
      title: "Yin-Yann Chen, Chen-Yang Cheng, Li-Chih Wang and Tzu-Li Chen, A hybrid approach based on the variable neighborhood search and particle swarm optimization for parallel machine scheduling problems- a case study for solar cell industry, International Journal of Production Economics, Vol. 141, pp. 66-78, 2013. (SCI)",
    },
    {
      title: "Tzu-Li Chen and Hao-Chun Lu, Stochastic Multi-Site Capacity Planning of TFT-LCD Manufacturing Using Expected Shadow-Price Based Decomposition, Applied Mathematical Modelling, Vol. 36, pp.5901-5919, 2012. (SCI)",
    },
    {
      title: "Yin-Yann Chen, James T. Lin and Tzu-Li Chen, A Two-Phase Dynamic Dispatching Approach to Semiconductor Wafer Testing, Robotics and Computer-Integrated Manufacturing, Vol. 27, pp.889-901, 2011. (SCI)",
    },
    {
      title: "James T. Lin, Cheng-Hung Wu, Tzu-Li Chen and Shin-Hui Shih, A Stochastic Programming Model for Strategic Capacity Planning in Thin Film Transistor – Liquid Crystal Display (TFT-LCD) Industry, Computers & Operations Research, Vol. 38, pp.992-1007, 2011. (SCI)",
    },
    {
      title: "James T. Lin* and Tzu-Li Chen, A Hierarchical Planning and Scheduling Framework for TFT-LCD Production Chain, Automation Quarterly, Sep. 2010. [in Chinese].",
    },
    {
      title: "Tzu-Li Chen*, James T. Lin and Shu-Cherng Fang, A Shadow-Price Based Heuristic for Capacity Planning of TFT-LCD Manufacturing, Journal of Industrial and Management Optimization, Vol. 6, No.1, pp.209-239, 2010. (SCI)",
    },
    {
      title: "James T. Lin, Tzu-Li Chen and Yen-Ting Lin, Critical Material Planning for TFT-LCD Production Industry, International Journal of Production Economics, Vol.122, No. 2, pp.639-655, 2009. (SCI)",
    },
    {
      title: "James T. Lin, Chien-Chi Tsai, Yin-Yann Chen and Tzu-Li Chen, Dispatching Rules with Queue-Time-Limit Consideration for Furnace in Wafer Fabrication Factory, Journal of Advanced Engineering, Vol. 4, No. 3, pp. 273-278, 2009. [in Chinese]",
    },
    {
      title: "James T. Lin, Tzu-Li Chen* and Wei-June Chen, Capacity and product mix planning problem for TFT Array multi-plant, Journal of the Chinese Institute of Industrial Engineers, Vol.24, No.6, pp.489-504, 2007. (EI, TSSCI)",
    },
    {
      title: "James T. Lin, Tzu-Li Chen, Tiffany Tsai, Jeffery J. Lai and Tuo-Chung Huang, A SCOR-Based Methodology for Analyzing and Designing Supply Chain, International Journal of Electronic Business Management, Vol.3, No.1, pp.1-7, 2005. (EI)",
    },
    {
      title: "James T. Lin, Tzu-Li Chen* and Chien-Chung Huang, A Hierarchy Planning Model for TFT-LCD Production Chain, International Journal of Electronic Business Management, Vol.2, No.1, pp.59-68, 2004. (EI)",
    }
  ],
};


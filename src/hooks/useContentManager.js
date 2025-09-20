import { useState, useEffect } from 'react';

// 內容管理Hook - 支援多種數據源
export const useContentManager = () => {
  const [articles, setArticles] = useState([]);
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // 默認內容（作為後備）
  const defaultArticles = [
    {
      title: '文體旅融合發展的新趨勢與機遇',
      date: '2024-08-20',
      author: 'Sam Kwok',
      summary: '探討文化、體育與旅遊產業融合發展的最新趨勢，分析香港在大灣區文體旅一體化發展中的獨特優勢和發展機遇。',
      content: '隨著消費者對體驗式旅遊需求的增長，文體旅融合發展已成為產業發展的重要方向...'
    },
    {
      title: '智慧旅遊技術在香港的應用與前景',
      date: '2024-08-15',
      author: 'Anson Chan',
      summary: '分析人工智能、大數據、VR/AR等新興技術在香港旅遊業中的應用現狀，展望智慧旅遊的發展前景。',
      content: '香港作為國際金融中心，在智慧旅遊技術應用方面具有得天獨厚的優勢...'
    },
    {
      title: '可持續發展理念下的體育產業創新',
      date: '2024-08-10',
      author: 'Zappa Ho',
      summary: '從ESG角度探討體育產業的可持續發展模式，介紹零排放體育設施和綠色體育賽事的實踐經驗。',
      content: '在全球氣候變化的背景下，體育產業正積極探索可持續發展的新路徑...'
    },
    {
      title: '文化遺產活化與旅遊開發的平衡之道',
      date: '2024-08-05',
      author: 'Sam Kwok',
      summary: '討論如何在保護文化遺產的同時，合理開發旅遊資源，實現文化傳承與經濟發展的雙贏。',
      content: '文化遺產是人類共同的寶貴財富，如何在保護中開發，在開發中保護...'
    }
  ];

  const defaultNews = [
    {
      title: '香港旅遊業復甦強勁，2024年訪港旅客數量創新高',
      date: '2024-08-25',
      source: '香港旅遊發展局',
      summary: '最新數據顯示，香港旅遊業復甦勢頭良好，2024年上半年訪港旅客數量較去年同期增長35%，其中文體旅融合項目備受歡迎。',
      link: '#'
    },
    {
      title: '大灣區體育產業合作協議簽署，促進區域一體化發展',
      date: '2024-08-22',
      source: '體育委員會',
      summary: '粵港澳三地體育部門簽署合作協議，將在體育賽事、人才培養、設施共享等方面加強合作，推動大灣區體育產業一體化發展。',
      link: '#'
    },
    {
      title: '香港文化創意產業園區獲政府資助，推動產業數位轉型',
      date: '2024-08-18',
      source: '創新科技署',
      summary: '政府宣布向香港文化創意產業園區提供5億港元資助，支持園區內企業進行數位轉型，提升文創產業競爭力。',
      link: '#'
    },
    {
      title: '國際體育科技峰會將於香港舉辦，聚焦智能體育發展',
      date: '2024-08-12',
      source: '香港貿發局',
      summary: '2024年國際體育科技峰會將於10月在香港會展中心舉行，預計吸引全球500多名業界專家參與，探討體育科技創新趨勢。',
      link: '#'
    }
  ];

  // 從多個數據源獲取內容
  const fetchContent = async () => {
    setLoading(true);
    setError(null);

    try {
      // 嘗試從多個數據源獲取內容
      const sources = [
        // 1. 本地JSON文件
        () => fetchFromLocalJSON(),
        // 2. 外部API
        () => fetchFromAPI(),
        // 3. GitHub Raw文件
        () => fetchFromGitHub(),
        // 4. Google Sheets (如果配置)
        () => fetchFromGoogleSheets()
      ];

      let articlesData = null;
      let newsData = null;

      // 依次嘗試各個數據源
      for (const source of sources) {
        try {
          const result = await source();
          if (result && result.articles && result.news) {
            articlesData = result.articles;
            newsData = result.news;
            break;
          }
        } catch (err) {
          console.warn('數據源獲取失敗:', err.message);
          continue;
        }
      }

      // 如果所有數據源都失敗，使用默認內容
      setArticles(articlesData || defaultArticles);
      setNews(newsData || defaultNews);

    } catch (err) {
      console.error('內容獲取失敗:', err);
      setError(err.message);
      // 使用默認內容作為後備
      setArticles(defaultArticles);
      setNews(defaultNews);
    } finally {
      setLoading(false);
    }
  };

  // 從本地JSON文件獲取
  const fetchFromLocalJSON = async () => {
    const response = await fetch('/content/articles-news.json');
    if (!response.ok) throw new Error('本地JSON文件不存在');
    return await response.json();
  };

  // 從外部API獲取
  const fetchFromAPI = async () => {
    const apiUrl = process.env.REACT_APP_CONTENT_API_URL;
    if (!apiUrl) throw new Error('未配置API URL');
    
    const response = await fetch(apiUrl);
    if (!response.ok) throw new Error('API請求失敗');
    return await response.json();
  };

  // 從GitHub Raw文件獲取
  const fetchFromGitHub = async () => {
    const githubUrl = process.env.REACT_APP_GITHUB_CONTENT_URL;
    if (!githubUrl) throw new Error('未配置GitHub URL');
    
    const response = await fetch(githubUrl);
    if (!response.ok) throw new Error('GitHub文件獲取失敗');
    return await response.json();
  };

  // 從Google Sheets獲取
  const fetchFromGoogleSheets = async () => {
    const sheetsUrl = process.env.REACT_APP_GOOGLE_SHEETS_URL;
    if (!sheetsUrl) throw new Error('未配置Google Sheets URL');
    
    const response = await fetch(sheetsUrl);
    if (!response.ok) throw new Error('Google Sheets獲取失敗');
    return await response.json();
  };

  // 手動刷新內容
  const refreshContent = () => {
    fetchContent();
  };

  // 組件掛載時獲取內容
  useEffect(() => {
    fetchContent();
  }, []);

  return {
    articles,
    news,
    loading,
    error,
    refreshContent
  };
};

export default useContentManager;


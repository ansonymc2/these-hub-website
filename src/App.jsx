import React, { useState, useEffect } from 'react';
import { ChevronDown, Users, Target, BookOpen, Briefcase, Globe, Award, Mail, ExternalLink, Menu, X, BarChart3, TrendingUp, Building2, GraduationCap, ArrowRight, CheckCircle, Star, Calendar, MapPin, RefreshCw } from 'lucide-react';
import './App.css';
import useContentManager from './hooks/useContentManager';

// 導入圖片
import heroImage from './assets/文旅體發展研究中心.png';
import newHeroBg from './assets/new-hero-bg.webp';

// LOGO圖片
import logoNav from './assets/logo-nav.png';
import logoFooter from './assets/logo-footer.png';

// 團隊成員圖片
import samImage from './assets/sam.png';
import ansonImage from './assets/anson.png';
import zappaImage from './assets/zappa.png';

// 課程特色配圖
import feature1Image from './assets/1.png';
import feature2Image from './assets/2.png';
import feature3Image from './assets/3.png';
import feature4Image from './assets/4.png';

// 畫廊圖片使用絕對路徑

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [showAllArticles, setShowAllArticles] = useState(false);
  const [showAllNews, setShowAllNews] = useState(false);
  
  // 使用內容管理Hook
  const { articles, news, loading, error, refreshContent } = useContentManager();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const courses = [
    {
      id: 'culture',
      title: '文化創意與文化管理',
      icon: <BookOpen className="w-8 h-8" />,
      color: 'from-purple-500 to-pink-500',
      items: [
        '文化產業數位轉型與創新策略',
        '文化遺產活化與體驗設計',
        '創意內容開發與IP管理',
        '文化政策與公共行政'
      ]
    },
    {
      id: 'tourism',
      title: '旅遊管理與可持續發展',
      icon: <Globe className="w-8 h-8" />,
      color: 'from-blue-500 to-cyan-500',
      items: [
        '智慧旅遊與數據分析應用',
        '生態旅遊與社區參與模式',
        '旅遊目的地品牌建設與推廣',
        '可持續旅遊與生態旅遊'
      ]
    },
    {
      id: 'sports',
      title: '體育產業與活動管理',
      icon: <Award className="w-8 h-8" />,
      color: 'from-green-500 to-emerald-500',
      items: [
        '體育賽事商業化運營',
        '運動健康產業鏈管理',
        '體育科技與數位化應用',
        '體育旅遊發展趨勢'
      ]
    },
    {
      id: 'management',
      title: '管理與創新',
      icon: <TrendingUp className="w-8 h-8" />,
      color: 'from-orange-500 to-red-500',
      items: [
        '跨界融合商業模式創新',
        '數位營銷與社群媒體策略',
        '可持續發展與ESG管理',
        '創業與創新管理'
      ]
    }
  ];

  const features = [
    {
      title: '實踐為本 接軌產業',
      description: '與香港本地文體旅機構及企業緊密合作，提供實習機會及產業專題研究，讓學生在學習期間深入參與實際項目。',
      examples: ['產學合作實習計劃', '藝術節策劃', '體育賽事', '文化遺產保護項目'],
      image: feature1Image
    },
    {
      title: '國際視野 本土結合',
      description: '除了學習香港本地的文體旅產業特點，課程亦涵蓋國際案例分析及海外交流機會。',
      examples: ['大灣區及東南亞市場研究', '亞洲文化交流', '國際企業交流', '海外實習機會'],
      image: feature2Image
    },
    {
      title: '創新方式 科技共融',
      description: '引入智慧旅遊及體育科技的應用，教授學生如何利用數據分析與數字化技術提升管理效率及用戶體驗。',
      examples: ['AI與大數據', 'VR/AR應用', '智能場館管理', '數位化營銷'],
      image: feature3Image
    },
    {
      title: '專業認證 升學機會',
      description: '課程內容與多個國際專業機構接軌，畢業生可獲得相關專業認證，並有機會申請進一步深造課程。',
      examples: ['國際旅遊組織認可課程', '體育管理協會認證', '碩士學位銜接', '專業資格考試'],
      image: feature4Image
    }
  ];

  // 畫廊圖片數組
  const galleryImages = [
    { id: 1, src: '/gallery/photo1.png', alt: '香港小米公司旗艦店重開推廣活動' },
    { id: 2, src: '/gallery/photo2.png', alt: '為香港中旅社製作「糖妹放飛旅行團」系列' },
    { id: 3, src: '/gallery/photo3.png', alt: '參與紫砂俊傑 壺耀香江——《中國工藝美術大師全集·呂俊傑卷》活動' },
    { id: 4, src: '/gallery/photo4.png', alt: '宣傳「金庸江湖28景」香港推廣活動' },
    { id: 5, src: '/gallery/photo5.png', alt: '跟中國旅遊雜誌合辦第一屆「大灣區金子品牌大獎」，香港中國旅遊協會主席吳熹安先生全力支持' },
    { id: 6, src: '/gallery/photo6.png', alt: '香港發展局副局長陳百里到場支持' },
    { id: 7, src: '/gallery/photo7.png', alt: '香港立法局議員姚柏良（旅遊界）到場支持' },
    { id: 8, src: '/gallery/photo8.png', alt: '推動泰國one Lumpinee海外宣傳項目' },
    { id: 9, src: '/gallery/photo9.png', alt: '為泰國鄭王廟（Wat Arun）製作虛擬佛牌，推動泰國文旅活動' },
    { id: 10, src: '/gallery/photo10.png', alt: '為馬來西亞朋友舉辦「李所當瀾」活動，跟蔡瀾先生共聚午餐' },
    { id: 11, src: '/gallery/photo11.png', alt: '參與中英街深港旅遊消費合作區推廣活動' },
    { id: 12, src: '/gallery/photo12.png', alt: '跟泰國中國移動合作，推廣文旅體驗' }
  ];

  const jobCategories = [
    {
      title: '文化產業管理',
      icon: <BookOpen className="w-6 h-6" />,
      jobs: ['文化科技融合', '數位內容策劃', '藝術中心總監', '文化遺產保護專員'],
      growth: '+25%'
    },
    {
      title: '旅遊產業管理',
      icon: <Globe className="w-6 h-6" />,
      jobs: ['智慧旅遊顧問', '大數據分析師', '酒店管理經理', '旅遊產品開發專員'],
      growth: '+35%'
    },
    {
      title: '體育產業管理',
      icon: <Award className="w-6 h-6" />,
      jobs: ['體育科技產品', '數位化營運', '健身中心營運總監', '體育品牌經理'],
      growth: '+30%'
    },
    {
      title: '跨界創新管理',
      icon: <Building2 className="w-6 h-6" />,
      jobs: ['文體旅融合', 'ESG顧問', '旅遊局項目經理', '體育發展官員'],
      growth: '+20%'
    }
  ];

  const advisors = [
    {
      name: "Anson Chan 陳煜明",
      title: "發展顧問",
      image: ansonImage,
      credentials: ["高能文旅創辦人", "多年旅遊策劃及文旅推廣經驗"],
      description: [
        "Anson Chan陳煜明是THESE HUB文體旅發展研究中心發展顧問，專注旅遊及體育領域，具15年文體旅項目相關經驗。作為文體旅數據分析專家，他曾於香港中國旅行社任職、負責銷售及旅行團產品策劃。喜愛運動的Anson在離開中旅社後轉型至亞洲運動及體適能專業學院 (AASFP) 擔任市場推廣及運動公關，同時亦擁有新興運動電競產業的經驗。",
        "Anson Chan聯合創辦的高能文旅致力與各地旅遊產業合作，包括港澳及中國各地，泰國，越南及馬來西亞等地。同時亦創辦了一間運動健康設備公司，以電子科技化配合運動器材為多間企業(包括康文署)提供智能運動方案。多年的實戰經驗及與各行各業客戶的合作、揉合自身於旅遊業及運動產業的經驗，擔任文體旅研究中心發展顧問的主要目的就是為了推廣中港澳的文體旅產業並培育更多相關人才。"
      ],
      badgeColor: "bg-red-600"
    },
    {
      name: "黎樂文",
      title: "課程顧問",
      image: "/advisors/黎樂文.png",
      credentials: ["香港日本人旅客手配業社協會副會長", "港旅國際旅遊有限公司董事總經理"],
      description: [
        "從事旅遊業超過30年以上經驗，所設計行程多次獲香港旅遊發展局選定為「創意旅遊產品」、同時亦時日本株式会社UBA的代表取締役社長（本社東京，分社大阪，名古屋，福岡）。黎先生創辦的港旅國際擁有自家敞篷巴士和大型觀光巴士車隊，結合多年豐富經驗的旅款團隊服務每一位訪港客人。"
      ],
      badgeColor: "bg-green-600"
    },
    {
      name: "陳勄如",
      title: "課程顧問",
      image: "/advisors/陳勄如.png",
      credentials: ["加拿大西安大略大學世界藝術史文學士", "當代藝術專精"],
      description: [
        "陳女士是香港旅遊業界的傑出領袖，擁有超過20年的豐富經驗。她現任香港專業導遊總工會主席及香港旅遊業議會理事，致力於提升導遊的專業水平及推動行業的健康發展。她對香港的歷史文化、風土人情有著深入的了解，並積極參與各類旅遊推廣活動，為香港旅遊業的發展作出了重要貢獻。"
      ],
      badgeColor: "bg-green-600"
    },
    {
      name: "Francis Robert Low",
      title: "學術顧問",
      image: "/advisors/FrancisRobertLow.png",
      credentials: ["B.A. in Philosophy & Linguistics, M.A. in Socio-Linguistics", "Specialised in Visual Communication"],
      description: [
        "Francis is the Academic Adviser for THESE HUB. He has devoted over 30 years to tertiary education in HK and Australia. His area of study and research was based on Systemic Functional Linguistics (SFL), and he specialised in Visual communication and Multi-semiotics studies, text and image in advertisements, culture, and film art. Additionally, he was responsible for the English edition of the Skyyer travel book.",
        "His main interests over the past decade and a half have been primarily in the theoretical development of multimodal communication, a model for understanding filmic construction, and visual communication. His contributions to course design and material development were well recognised. He also had various international research collaborations with scholars worldwide. Now, in the capacity of an Academic Adviser, he would like to continue contributing his knowledge and experience to THESE HUB."
      ],
      badgeColor: "bg-blue-600"
    }
  ].sort((a, b) => {
    if (a.name === "Francis Robert Low") return 1;
    if (b.name === "Francis Robert Low") return -1;
    return 0;
  });

  const teamMembers = [
    {
      name: 'Zappa Ho 何承鍇',
      title: '總幹事',
      image: zappaImage,
      description: [
        'Zappa Ho何承鍇是THESE HUB文體旅發展研究中心總幹事，擁有15年財富管理與投資經驗，畢業於美國加州大學洛杉磯分校（UCLA）數學/經濟學系。作為文體旅可持續發展專家，他曾創辦匯才投資顧問，專注為高淨值個人及家族辦公室提供財富防守與傳承方案，奠定家族顧問領域的專業基礎。',
        '疫情期間，Zappa Ho轉型文體旅發展，聯合創辦高能文旅，推動東南亞多國以文化帶動新旅遊地標，並領導ZEBUS項目，成功推出香港首款本地設計生產的零排放電動巴士，彰顯可持續發展承諾。現職下，他將多年家族繼承經驗融入社會層面，整合文化、旅遊與體育資源，培育跨界人才，推動香港文體旅產業創新與可持續成長。'
      ]
    },
    {
      name: 'Sam Kwok 郭昊展',
      title: '首席顧問及召集人',
      image: samImage,
      description: [
        'Sam Kwok郭昊展是THESE HUB文體旅發展研究中心的創辦人及首席顧問，香港文體旅融合發展的權威專家。作為THESE理論的創始人，郭昊展曾創辦香港一級旅遊推廣品牌 Skyyer Holding Limited（"Skyyer"），也是創紀錄旅遊指南系列的出版商。在文體旅產業研究、政策分析和創新實踐方面具備豐富經驗。',
        '多年來Sam Kwok郭昊展為超過 10,000 家公司提供營銷服務，從科技巨頭包括SAMSUNG及SONY、政府機構（如日本旅遊局、香港旅遊局）到領先金融機構（如 AIG、中國平安、中國工商銀行和銀聯）。他在媒體推廣丶內容創作丶網絡營銷和出版方面擁有超過二十年的經驗。憑藉旅遊書的成功令他擁有強大的東南亞旅遊網絡，曾經是日本多個地區的官方宣傳大使，現為文體旅發展研究中心首席顧問，致力於推動香港文體旅產業融合發展，為業界提供專業的戰略指導和諮詢服務。'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 固定導航欄 */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-lg'
            : 'bg-white shadow-md'
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
          <div className="flex-shrink-0 flex items-center">
            <img src={logoNav} alt="THESE Logo" className="h-10 w-auto" />
          </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <button
                  onClick={() => scrollToSection('home')}
                  className="text-gray-900 hover:text-teal-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                >
                  首頁
                </button>
                <button
                  onClick={() => scrollToSection('background')}
                  className="text-gray-700 hover:text-teal-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                >
                  背景
                </button>
                <button
                  onClick={() => scrollToSection('these-meaning')}
                  className="text-gray-700 hover:text-teal-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                >
                  THESE的深層意義
                </button>
                <button
                  onClick={() => scrollToSection('goals')}
                  className="text-gray-700 hover:text-teal-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                >
                  目標
                </button>
                <button
                  onClick={() => scrollToSection('courses')}
                  className="text-gray-700 hover:text-teal-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                >
                  課程
                </button>
                <button
                  onClick={() => scrollToSection('gallery')}
                  className="text-gray-700 hover:text-teal-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                >
                  活動花絮
                </button>
                <button
                  onClick={() => scrollToSection('team')}
                  className="text-gray-700 hover:text-teal-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                >
                  創辦團隊
                </button>
                <button
                  onClick={() => scrollToSection('advisors')}
                  className="text-gray-700 hover:text-teal-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                >
                  顧問團隊
                </button>
                <button
                  onClick={() => scrollToSection('news-articles')}
                  className="text-gray-700 hover:text-teal-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                >
                  文章及新聞
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-700 hover:text-teal-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                >
                  聯絡我們
                </button>
              </div>
            </div>
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-teal-600 p-2"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
        {/* 移動端菜單 */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button
                onClick={() => scrollToSection('home')}
                className="block w-full text-left px-3 py-2 text-gray-900 hover:text-teal-600"
              >
                首頁
              </button>
              <button
                onClick={() => scrollToSection('background')}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-teal-600"
              >
                背景
              </button>
              <button
                onClick={() => scrollToSection('these-meaning')}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-teal-600"
              >
                THESE的深層意義
              </button>
              <button
                onClick={() => scrollToSection('goals')}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-teal-600"
              >
                目標
              </button>
              <button
                onClick={() => scrollToSection('courses')}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-teal-600"
              >
                課程
              </button>
              <button
                onClick={() => { scrollToSection('gallery'); setIsMenuOpen(false); }}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-teal-600"
              >
                活動花絮
              </button>
              <button
                onClick={() => { scrollToSection('team'); setIsMenuOpen(false); }}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-teal-600"
              >
                創辦團隊
              </button>
              <button
                onClick={() => { scrollToSection('advisors'); setIsMenuOpen(false); }}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-teal-600"
              >
                顧問團隊
              </button>
              <button
                onClick={() => scrollToSection('news-articles')}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-teal-600"
              >
                文章及新聞
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-teal-600"
              >
                聯絡我們
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* 首頁 Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
          style={{ backgroundImage: `url(${newHeroBg})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-teal-900/80 to-teal-700/60"></div>
        </div>
        <div className="relative z-10 text-center text-white p-8 bg-black/30 rounded-lg shadow-xl max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-4 drop-shadow-lg">
            文體旅發展研究中心
          </h1>
          <p className="text-xl md:text-2xl font-medium mb-8 drop-shadow-md">
            THESE HUB文體旅發展研究機構，專注文化、體育及旅遊發展。啟迪未來，引領香港文旅產業新篇章
          </p>
          <button
            onClick={() => scrollToSection('these-meaning')}
            className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 transform hover:scale-105 shadow-lg"
          >
            了解these hub
          </button>
        </div>
      </section>

      {/* 背景 */}
      <section id="background" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">背景</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-teal-600 mx-auto mb-6"></div>
          </div>

          <div className="grid lg:grid-cols-1 gap-12">
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                隨著全球文化、旅遊及體育產業的快速發展，香港作為國際化大都市及亞洲重要的文化交流中心，擁有得天獨厚的地理位置、豐富多元的文化資源及高度成熟的旅遊基建。
              </p>

              <div className="bg-gradient-to-r from-teal-50 to-teal-100 p-6 rounded-xl border-l-4 border-teal-500">
                <p className="text-gray-800 font-medium mb-2">《香港旅遊業發展藍圖2.0》重點數據：</p>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center">
                    <BarChart3 className="w-4 h-4 text-teal-600 mr-2" />
                    <span>目標就業人數：21萬人</span>
                  </div>
                  <div className="flex items-center">
                    <TrendingUp className="w-4 h-4 text-teal-600 mr-2" />
                    <span>預計職位空缺：1.4萬個</span>
                  </div>
                </div>
              </div>

              <p className="text-lg text-gray-700 leading-relaxed">
                在《香港旅遊業發展藍圖2.0》的指引下，文體旅發展研究中心正行其道，成為推動香港文化、體育及旅遊融合發展的重要智庫。
              </p>

              <div className="bg-teal-50 p-6 rounded-xl">
                <p className="text-gray-800 leading-relaxed">
                  因應香港發展藍圖，在香港設立文體旅學科能促進經濟多元化，提升行業專業水平，增強文化交流，支持政府政策實施，激發創新思維，並增強社會凝聚力。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THESE的深層意義 */}
      <section id="these-meaning" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">THESE HUB 的深層意義</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-teal-600 mx-auto"></div>
          </div>
          <div className="max-w-4xl mx-auto text-left text-gray-700 leading-relaxed">
            <p className="mb-6">「THESE HUB」這個名稱，從logo可看出創作意念是「TH与SE 」， 不僅僅是幾個英文字母的簡單組合，它承載著我們對文化、體育及旅遊發展的深刻理解與願景。其中，TH與SE分別代表了我們研究與實踐的四大核心領域：</p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <h3 className="text-2xl font-bold text-teal-600 mb-2">T (Travel)</h3>
                <p>旅遊，不僅是地理上的位移，更是文化的交流與體驗的過程。我們致力於探索旅遊的無限可能，推動可持續旅遊發展，讓每一次旅程都成為一次人生體驗的一點累積。</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <h3 className="text-2xl font-bold text-teal-600 mb-2">H (Heritage)</h3>
                <p>文化遺產，是人類文明的瑰寶，是連接過去與現在的橋樑。我們將深入研究和保護各地的文化遺產，通過創新方式使其煥發新生，讓更多人認識、欣賞並傳承這些寶貴的財富。</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <h3 className="text-2xl font-bold text-teal-600 mb-2">S (Sport)</h3>
                <p>體育，是力量、毅力與團隊精神的象徵，也是促進健康生活與社會和諧的重要載體。我們將關注體育產業的發展，推動全民健身，並探索體育與文化、旅遊的融合，創造更多元的發展。</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <h3 className="text-2xl font-bold text-teal-600 mb-2">E (Education)</h3>
                <p>教育，是知識的傳遞與智慧的啟迪，是推動社會進步的基石。我們將致力於將文化、體育和旅遊的豐富內容融入教育體系，培養具備全球視野和跨文化理解能力的新一代。</p>
              </div>
            </div>

            <p className="mb-6">而名稱中間的古字「与」，更是我們理念的精髓所在。在古漢語中，「与」字有「給予」和「連接」的功能。它象徵著：</p>

            <div className="space-y-6 mb-8">
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <h4 className="text-xl font-bold text-gray-800">給予 (Giving)</h4>
                <p>我們將致力於將研究成果、創新理念和實踐經驗「給予」社會，為文化、體育及旅遊發展提供智力支持和解決方案，回饋社會，貢獻力量。</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <h4 className="text-xl font-bold text-gray-800">連接 (Connecting)</h4>
                <p>我們將作為一個「連接」的樞紐（HUB），不僅要將文化體育及旅遊，通過不同形式連接起來，更會連接不同領域的專家學者、業界夥伴、政府機構和廣大民眾，促進跨界合作與交流，共同推動文化、體育及旅遊的融合發展。</p>
              </div>
            </div>

            <p className="bg-gray-50 p-6 rounded-lg shadow-sm">「与」的延伸，就像是一道橋，可以將不同領域連接起來，而在廣東話文化中，亦有點子的意思，「你有沒有橋？」，我們希望通過「THESE HUB」這個平台，培育更多有「橋」之能人，有創意地將「文體旅」連接成為各種新型態的服務、產品及IP等產業，為香港乃至全球的文化、體育及旅遊創造更大的價值。</p>
          </div>
        </div>
      </section>

      {/* 目標 */}
      <section id="goals" className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">目標</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-teal-600 mx-auto mb-6"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
            <div className="flex items-start space-x-4 group p-6 bg-white rounded-lg shadow-md">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 text-left">促進跨界融合</h3>
                <p className="text-gray-700 leading-relaxed text-left">
                  打破傳統產業壁壘，推動文化、體育、旅遊三大領域的深度融合，創造新的商業模式與價值。
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 group p-6 bg-white rounded-lg shadow-md">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-pink-500 to-rose-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 text-left">培養專業人才</h3>
                <p className="text-gray-700 leading-relaxed text-left">
                  提供系統化的課程與實踐機會，培養具備跨學科知識和創新能力的複合型人才。
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 group p-6 bg-white rounded-lg shadow-md">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Target className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 text-left">引領產業研究</h3>
                <p className="text-gray-700 leading-relaxed text-left">
                  深入了解香港及國際文化資源，探索如何將文化與旅遊、體育活動相結合，提升產業價值。
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 group p-6 bg-white rounded-lg shadow-md">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 text-left">支持香港文體旅產業發展</h3>
                <p className="text-gray-700 leading-relaxed text-left">
                  以實踐為導向，為香港文旅體產業的發展提供創新解決方案，助力區域經濟與社會進步。
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 group p-6 bg-white rounded-lg shadow-md">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 text-left">提升國際競爭力</h3>
                <p className="text-gray-700 leading-relaxed text-left">
                  結合本地特色，培養學生具備全球化視野，迎接國際文體旅產業的挑戰。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 課程內容 */}
      <section id="courses" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">課程內容</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-teal-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              我們的課程涵蓋文化創意、旅遊管理、體育產業及管理創新四大核心領域，旨在培養學生的專業知識和實踐能力。
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {courses.map((course) => (
              <div
                key={course.id}
                className={`bg-white p-6 rounded-xl shadow-lg cursor-pointer transform transition-transform duration-300 hover:scale-105 border-t-4 ${selectedCourse === course.id ? 'border-teal-500' : 'border-transparent'}`}
                onClick={() => setSelectedCourse(selectedCourse === course.id ? null : course.id)}
              >
                <div className={`flex items-center justify-center w-16 h-16 rounded-full mx-auto mb-4 bg-gradient-to-br ${course.color} text-white`}>
                  {course.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">{course.title}</h3>
                {selectedCourse === course.id && (
                  <ul className="mt-4 space-y-2 text-gray-700 text-sm text-left">
                    {course.items.map((item, i) => (
                      <li key={i} className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-teal-500 mr-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 課程特色 */}
      <section id="features" className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">課程特色</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-teal-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              我們的課程設計獨具匠心，旨在為學生提供最優質的學習體驗和最廣闊的發展前景。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-700 leading-relaxed mb-6">{feature.description}</p>
                <ul className="space-y-3 text-gray-600">
                  {feature.examples.map((example, i) => (
                    <li key={i} className="flex items-center">
                      <ArrowRight className="w-4 h-4 text-teal-500 mr-3 flex-shrink-0" />
                      <span className="text-sm">{example}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 活動花絮畫廊 */}
      <section id="gallery" className="py-20 bg-gray-50 relative">
        <div className="absolute top-4 right-4">
          <ExternalLink className="w-6 h-6 text-gray-400" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">活動花絮</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-teal-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              記錄我們在文體旅領域的精彩時刻，見證學習與實踐的完美結合。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryImages.map((image) => (
              <div
                key={image.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105"
              >
                <div className="relative">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{image.alt}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 就業前景 */}
      <section id="prospects" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">就業前景</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-teal-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              文體旅產業的蓬勃發展為畢業生提供了廣闊的就業機會和多元化的職業選擇。
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {jobCategories.map((category, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg text-center transform transition-transform duration-300 hover:scale-105">
                <div className={`flex items-center justify-center w-16 h-16 rounded-full bg-teal-100 text-teal-600 mx-auto mb-4`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{category.title}</h3>
                <p className="text-gray-600 mb-4">預計增長: <span className="font-bold text-teal-600">{category.growth}</span></p>
                <ul className="text-sm text-gray-700 space-y-1 text-left">
                  {category.jobs.map((job, i) => (
                    <li key={i} className="flex items-center">
                      <Star className="w-3 h-3 mr-2 text-yellow-500" />
                      {job}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 創辦團隊 */}
      <section id="team" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">創辦團隊</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-teal-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              THESE HUB文體旅發展研究中心匯聚了文化、體育及旅遊各領域的資深專家，形成了專業的文體旅研究團隊。THESE HUB專家團隊在文體旅融合發展、香港文旅產業創新、旅遊業發展研究等方面具備深厚的專業背景和豐富的實踐經驗。
            </p>
          </div>

          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-12">
            {teamMembers.map((member, index) => {
              const memberId = index === 0 ? 'zappa-ho-team-member' : 'sam-kwok-team-member';
              return (
              <div key={index} id={memberId} className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
                <div className="relative">
                  <img src={member.image} alt={`THESE HUB文體旅發展研究中心${member.title} - ${member.name}`}
 className="w-full h-64 object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-6 text-white">
                    <h3 className="text-3xl font-bold mb-1">{member.name}</h3>
                    <p className="text-teal-300 text-lg">{member.title}</p>
                  </div>
                </div>
                <div className="p-6">
                  {member.description.map((paragraph, i) => (
                    <p key={i} className="text-gray-700 leading-relaxed mb-4 last:mb-0">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
              );
            })}
          </div>
        </div>
       </section>

      {/* 顧問團隊 */}
      <section id="advisors" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">顧問團隊</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-teal-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              THESE HUB 匯聚了來自學術界和產業界的資深專家，為我們的研究和發展提供專業指導。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advisors.map((advisor, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
                <div className="relative">
                  <img src={advisor.image} alt={advisor.name} className="w-full h-80 object-cover" />
                  <div className="absolute top-4 left-4">
                    <span className={`${advisor.badgeColor} text-white px-3 py-1 rounded-full text-sm font-medium`}>{advisor.title}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{advisor.name}</h3>
                  <div className="mb-4">
                    {advisor.credentials.map((cred, i) => (
                      <p key={i} className="text-teal-600 font-semibold text-base">{cred}</p>
                    ))}
                  </div>
                  {advisor.description.map((desc, i) => (
                    <p key={i} className="text-gray-700 text-sm leading-relaxed mb-2 last:mb-0">{desc}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 文章及新聞 */}
      <section id="news-articles" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">文章及新聞</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-teal-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              探索我們對文體旅產業的深度洞察和最新動態。
            </p>
          </div>

          {loading && <p>正在加載內容...</p>}
          {error && <p className="text-red-500 text-center">{error}</p>}
          {!loading && !error && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* 文章 */}
              <div className="space-y-8">
                <h3 className="text-3xl font-bold text-gray-900 mb-6">精選文章</h3>
                <div className="space-y-6">
                  {(showAllArticles ? articles : articles.slice(0, 3)).map((article, index) => (
                    <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden">
                      {article.image && (
                        <div className="h-48 overflow-hidden">
                          <img 
                            src={article.image} 
                            alt={article.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      )}
                      <div className="p-6">
                        <h4 className="text-xl font-bold text-gray-900 mb-2">{article.title}</h4>
                        <p className="text-sm text-gray-500 mb-3">作者：{article.author} | 來源：{article.source} | 日期：{article.date}</p>
                        <p className="text-gray-700 leading-relaxed mb-4">{article.summary}</p>
                        {article.link && (
                          <a href={article.link} target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:text-teal-800 font-semibold flex items-center">
                            閱讀原文 <ExternalLink className="w-4 h-4 ml-2" />
                          </a>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                {articles.length > 3 && (
                  <div className="text-center mt-6">
                    <button onClick={() => setShowAllArticles(!showAllArticles)} className="text-teal-600 hover:text-teal-800 font-semibold">
                      {showAllArticles ? '收合文章' : '顯示更多文章'}
                    </button>
                  </div>
                )}
              </div>

              {/* 新聞 */}
              <div className="space-y-8">
                <h3 className="text-3xl font-bold text-gray-900 mb-6">最新新聞</h3>
                <div className="space-y-6">
                  {(showAllNews ? news : news.slice(0, 3)).map((item, index) => (
                    <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden">
                      {item.image && (
                        <div className="h-48 overflow-hidden">
                          <img 
                            src={item.image} 
                            alt={item.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      )}
                      <div className="p-6">
                        <h4 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h4>
                        <p className="text-sm text-gray-500 mb-3">來源：{item.source} | 日期：{item.date}</p>
                        <p className="text-gray-700 leading-relaxed mb-4">{item.summary}</p>
                        {item.link && (
                          <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:text-teal-800 font-semibold flex items-center">
                            閱讀原文 <ExternalLink className="w-4 h-4 ml-2" />
                          </a>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                {news.length > 3 && (
                  <div className="text-center mt-6">
                    <button onClick={() => setShowAllNews(!showAllNews)} className="text-teal-600 hover:text-teal-800 font-semibold">
                      {showAllNews ? '收合新聞' : '顯示更多新聞'}
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 聯絡我們 */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">聯絡我們</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-teal-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              我們期待與您交流，共同探討文體旅產業的未來。歡迎通過以下方式與我們聯繫。
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-gray-50 p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">聯絡方式</h3>
              <div className="space-y-4 text-gray-700">
                <div className="flex items-start">
                  <Mail className="w-6 h-6 text-teal-600 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold">電子郵件</h4>
                    <p>info@these-hub.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-teal-600 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold">地址</h4>
                    <p>火炭坳背灣街34號豐盛工業中心B座17樓B02室</p>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <img src={logoFooter} alt="THESE HUB Footer Logo" className="h-16 w-auto mx-auto mb-6" />
          <p className="mb-4">THESE HUB 文體旅發展研究中心</p>
          <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} THESE HUB. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;

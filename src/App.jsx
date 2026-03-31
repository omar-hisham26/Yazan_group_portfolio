// src/App.jsx
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Navbar from './components/Navbar';
import Stats from './components/Stats';
import Brands from './components/Brands';
import About from './components/About';
import Contact from './components/Contact'; // استيراد صفحة التواصل الجديدة
import { groupInfo } from './data/brandsData';

// تأكد من مسار الصورة الخاصة بك هنا
import myHeroBg from './assets/images/background-image.avif'; 

function App() {
  const { t, i18n } = useTranslation();
  
  // المتغير الذي يتحكم في الصفحة المعروضة
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <div className="app-container">
      
      {/* نمرر الدالة للنافبار عشان يقدر يغير الصفحة */}
      <Navbar setCurrentPage={setCurrentPage} />

      {/* الرندرة الشرطية: إذا الصفحة home نعرض الواجهة الرئيسية، وإلا نعرض التواصل */}
      {currentPage === 'home' ? (
        <>
          <header className="hero">
            <div className="hero-bg" style={{ backgroundImage: `url(${myHeroBg})` }}>
              <div className="orb orb1"></div>
              <div className="orb orb2"></div>
            </div>
            
            <div className="hero-content">
              <div className="hero-line top-line"></div>
              <p className="hero-tagline">{i18n.language === 'ar' ? groupInfo.tagline : t('hero_tagline')}</p>
              <h1 className="text-gradient-gold main-title">{i18n.language === 'ar' ? groupInfo.name : t('hero_name')}</h1>
              <h2 className="sub-title">{i18n.language === 'ar' ? groupInfo.type : t('hero_type')}</h2>
              <p className="hero-desc">{i18n.language === 'ar' ? groupInfo.description : t('hero_desc')}</p>
              <div className="hero-line bottom-line"></div>
            </div>
          </header>

          <Stats />
          <About />
          <Brands />
        </>
      ) : (
        <Contact />
      )}

      <footer className="footer" id="footer">
        <div className="container">
          <h3 className="text-gradient-gold">
            {i18n.language === 'ar' ? `${groupInfo.name} ${groupInfo.type}` : `${t('hero_name')} ${t('hero_type')}`}
          </h3>
          <p>&copy; {new Date().getFullYear()} {t('footer_rights')}</p>
        </div>
      </footer>

      {/* الستايل الخاص بالـ App نفس ما هو */}
      <style jsx global>{`
        html { scroll-behavior: smooth; }
        .container { max-width: 1200px; margin: 0 auto; padding: 0 1.5rem; width: 100%; }
        .hero { position: relative; min-height: 100vh; display: flex; align-items: center; justify-content: center; overflow: hidden; padding: 2rem 0; }
        .hero-bg { position: absolute; inset: 0; z-index: 0; background-color: hsl(215, 15%, 10%); background-size: cover; background-position: center; background-attachment: fixed; background-blend-mode: luminosity; }
        .hero-bg::before { content: ''; position: absolute; inset: 0; background: radial-gradient(ellipse at center, hsla(38, 45%, 60%, 0.1) 0%, hsl(215, 15%, 10%, 0.95) 100%); z-index: 1; }
        .orb { position: absolute; border-radius: 50%; filter: blur(60px); opacity: 0.6; }
        .orb1 { top: 20%; right: 20%; width: 25rem; height: 25rem; background: hsla(38, 45%, 60%, 0.07); }
        .orb2 { bottom: 20%; left: 20%; width: 18rem; height: 18rem; background: hsla(38, 45%, 60%, 0.04); }
        .hero-content { position: relative; z-index: 10; text-align: center; max-width: 900px; margin: 0 auto; padding: 0 1.5rem; }
        .hero-line { width: 7rem; height: 2px; background: var(--gradient-gold); margin: 0 auto; transform: scaleX(0); }
        .top-line { margin-bottom: 2.5rem; animation: lineIn 1.2s ease forwards 0.3s; }
        .bottom-line { margin-top: 1rem; animation: lineIn 1.2s ease forwards 1.3s; }
        .hero-tagline { color: var(--primary); font-size: 1.15rem; font-weight: 500; letter-spacing: 0.15em; margin-bottom: 1.5rem; opacity: 0; animation: fadeUp 1s ease forwards 0.5s; }
        .main-title { font-size: clamp(1.8rem, 5vw, 4.5rem); font-weight: 900; line-height: 1.4; padding-bottom: 0.2em; margin-bottom: 1rem; opacity: 0; animation: fadeUp 1s ease forwards 0.7s; white-space: nowrap; }
        .sub-title { font-size: clamp(1.8rem, 4vw, 2.2rem); font-weight: 600; color: var(--muted-foreground); margin-bottom: 2.5rem; opacity: 0; animation: fadeUp 1s ease forwards 0.9s; }
        .hero-desc { color: var(--muted-foreground); font-size: clamp(1.1rem, 2.5vw, 1.3rem); max-width: 700px; margin: 0 auto 4rem; line-height: 1.9; opacity: 0; animation: fadeUp 1s ease forwards 1.1s; }
        .footer { padding: 4rem 0; border-top: 1px solid hsla(42, 60%, 55%, 0.1); background: hsl(215, 15%, 10%); text-align: center; }
        .footer h3 { font-size: 1.6rem; font-weight: 700; margin-bottom: 1rem; }
        .footer p { color: var(--muted-foreground); font-size: 0.95rem; opacity: 0.8; direction: ltr; }
        @keyframes lineIn { to { transform: scaleX(1); } }
        @media (max-width: 768px) { .hero-bg { background-attachment: scroll !important; } }
      `}</style>
    </div>
  );
}

export default App;
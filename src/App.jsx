// src/App.jsx
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Navbar from './components/Navbar';
import Stats from './components/Stats';
import Brands from './components/Brands';
import About from './components/About';
import Contact from './components/Contact'; 
import { groupInfo } from './data/brandsData';

// تأكد من مسار الصورة الخاصة بك هنا
import myHeroBg from './assets/images/background-image.avif'; 

function App() {
  const { t, i18n } = useTranslation();
  
  // المتغير الذي يتحكم في الصفحة المعروضة
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <div className="app-container">
      
      <Navbar setCurrentPage={setCurrentPage} />

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

      {/* 👇 الفوتر الجديد الفخم (بدون سوشيال ميديا) */}
      <footer className="footer" id="footer">
        <div className="container">
          <div className="footer-grid">
            
            {/* العمود 1: الوقو والنص */}
            <div className="footer-col footer-info">
              <div className="footer-logo">
                <span className="text-gradient-gold footer-name">{t('hero_name')}</span> 
                <span className="footer-type">{t('hero_type')}</span>
              </div>
              <p className="footer-desc-text">{t('footer_desc')}</p>
            </div>

            {/* العمود 2: روابط سريعة */}
            <div className="footer-col footer-links">
              <h4>{t('quick_links')}</h4>
              <ul>
                <li><a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage('home'); window.scrollTo(0, 0); }}>{t('home')}</a></li>
                <li><a href="#about" onClick={(e) => { e.preventDefault(); setCurrentPage('home'); setTimeout(() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }), 100); }}>{t('about')}</a></li>
                <li><a href="#brands" onClick={(e) => { e.preventDefault(); setCurrentPage('home'); setTimeout(() => document.getElementById('brands')?.scrollIntoView({ behavior: 'smooth' }), 100); }}>{t('brands')}</a></li>
                <li><a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage('contact'); }}>{t('contact')}</a></li>
              </ul>
            </div>

            {/* العمود 3: قطاعاتنا */}
            <div className="footer-col footer-sectors">
              <h4>{t('our_sectors')}</h4>
              <ul className="sectors-list">
                <li><span className="gold-dot"></span> {t('f_realestate')}</li>
                <li><span className="gold-dot"></span> {t('f_construction')}</li>
                <li><span className="gold-dot"></span> {t('f_hospitality')}</li>
                <li><span className="gold-dot"></span> {t('f_logistics')}</li>
              </ul>
            </div>

          </div>

          <div className="footer-bottom" style={{ justifyContent: 'center' }}>
            <p>&copy; {new Date().getFullYear()} {t('footer_rights')}</p>
          </div>

        </div>
      </footer>

      <style jsx global>{`
        html { scroll-behavior: smooth; font-family: 'Cairo', sans-serif; }
        .container { max-width: 1200px; margin: 0 auto; padding: 0 1.5rem; width: 100%; }
        
        /* --- ستايلات الهيرو --- */
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
        @keyframes lineIn { to { transform: scaleX(1); } }
        @media (max-width: 768px) { .hero-bg { background-attachment: scroll !important; } }

        /* --- ستايلات الفوتر الفخم --- */
        .footer { 
          padding: 6rem 0 3rem; 
          border-top: 1px solid hsla(42, 60%, 55%, 0.1); 
          background: hsl(215, 15%, 11%); 
          color: var(--muted-foreground);
        }
        .footer-grid {
          display: grid;
          grid-template-columns: 1.5fr 1fr 1fr;
          gap: 4rem;
          margin-bottom: 4rem;
        }
        .footer-logo {
          margin-bottom: 1.5rem;
          display: flex;
          align-items: baseline;
          gap: 8px;
        }
        .footer-name {
          font-size: 1.8rem;
          font-weight: 900;
          letter-spacing: -0.02em;
        }
        .footer-type {
          font-size: 1.1rem;
          color: white;
          opacity: 0.9;
          font-weight: 600;
        }
        .footer-desc-text {
          font-size: 1rem;
          line-height: 1.8;
          max-width: 400px;
        }
        .footer-col h4 {
          font-size: 1.3rem;
          color: var(--gold);
          font-weight: 700;
          margin-bottom: 1.8rem;
          position: relative;
        }
        .footer-col h4::after {
          content: '';
          position: absolute;
          bottom: -10px;
          right: 0;
          width: 40px;
          height: 2px;
          background: var(--gradient-gold);
        }
        [dir='ltr'] .footer-col h4::after { right: auto; left: 0; }
        .footer-col ul { list-style: none; padding: 0; margin: 0; }
        .footer-col ul li { margin-bottom: 1rem; }
        
        .footer-links ul li a {
          color: var(--muted-foreground);
          text-decoration: none;
          transition: var(--transition-smooth);
          font-size: 1rem;
        }
        .footer-links ul li a:hover {
          color: white;
          padding-right: 8px;
        }
        [dir='ltr'] .footer-links ul li a:hover { padding-right: 0; padding-left: 8px; }

        .sectors-list li {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 1rem;
        }
        .gold-dot {
          width: 8px; height: 8px;
          background: var(--gold);
          border-radius: 50%;
          box-shadow: var(--shadow-gold);
        }
        .footer-bottom {
          padding-top: 2rem;
          border-top: 1px solid hsla(0, 0%, 100%, 0.05);
          display: flex;
          align-items: center;
          gap: 2rem;
        }
        .footer-bottom p {
          color: var(--muted-foreground);
          font-size: 0.95rem;
          opacity: 0.8;
          direction: ltr; 
        }
        [dir='ar'] .footer-bottom p { direction: rtl; }

        /* موبايل */
        @media (max-width: 968px) {
          .footer-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
            text-align: center;
          }
          .footer-logo { justify-content: center; }
          .footer-desc-text { margin: 0 auto; }
          .footer-col h4::after { right: 50%; transform: translateX(50%); }
          .sectors-list li { justify-content: center; }
          .footer-bottom {
            flex-direction: column;
            text-align: center;
          }
        }
      `}</style>
    </div>
  );
}

export default App;
// src/App.jsx
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Navbar from './components/Navbar';
import Stats from './components/Stats';
import Brands from './components/Brands';
import About from './components/About';
import Contact from './components/Contact'; 
import { groupInfo } from './data/brandsData';

import myHeroBg from './assets/images/background-image.avif'; 

function App() {
  const { t, i18n } = useTranslation();
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

      <footer className="footer" id="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-col footer-info">
              <div className="footer-logo">
                <span className="text-gradient-gold footer-name">{t('hero_name')}</span> 
                <span className="footer-type">{t('hero_type')}</span>
              </div>
              <p className="footer-desc-text">{t('footer_desc')}</p>
            </div>

            <div className="footer-col footer-links">
              <h4>{t('quick_links')}</h4>
              <ul>
                <li><a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage('home'); window.scrollTo(0, 0); }}>{t('home')}</a></li>
                <li><a href="#about" onClick={(e) => { e.preventDefault(); setCurrentPage('home'); setTimeout(() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }), 100); }}>{t('about')}</a></li>
                <li><a href="#brands" onClick={(e) => { e.preventDefault(); setCurrentPage('home'); setTimeout(() => document.getElementById('brands')?.scrollIntoView({ behavior: 'smooth' }), 100); }}>{t('brands')}</a></li>
                <li><a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage('contact'); }}>{t('contact')}</a></li>
              </ul>
            </div>

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
    </div>
  );
}

export default App;
// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next'; 
import './Navbar.css';

const Navbar = ({ setCurrentPage }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'ar' ? 'en' : 'ar';
    i18n.changeLanguage(newLang);
    document.documentElement.dir = newLang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = newLang;
  };

  useEffect(() => {
    document.documentElement.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = i18n.language;

    const handleScroll = () => {
      if (window.scrollY > 40) setIsScrolled(true);
      else setIsScrolled(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [i18n.language]);

  const closeMenu = () => setIsMobileMenuOpen(false);

  // السحر هنا: دوال التنقل
  const goHome = (e) => {
    e.preventDefault();
    setCurrentPage('home');
    window.scrollTo(0, 0);
    closeMenu();
  };

  const goSection = (e, id) => {
    e.preventDefault();
    setCurrentPage('home'); // نضمن الرجوع للرئيسية أولاً
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
    closeMenu();
  };

  const goContact = (e) => {
    e.preventDefault();
    setCurrentPage('contact');
    window.scrollTo(0, 0);
    closeMenu();
  };

  return (
    <>
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          
          <a href="#" onClick={goHome} className="nav-logo">
            <span className="text-gradient-gold" style={{ margin: '0 8px' }}>{t('hero_name')}</span> 
            <span style={{ fontSize: '0.85em', opacity: 0.9 }}>{t('hero_type')}</span>
          </a>

          <ul className="desktop-nav-links">
            <li><a href="#" onClick={goHome}>{t('home')}</a></li> 
            <li><a href="#brands" onClick={(e) => goSection(e, 'brands')}>{t('brands')}</a></li> 
            <li><a href="#about" onClick={(e) => goSection(e, 'about')}>{t('about')}</a></li> 
          </ul>

          <div className="desktop-contact" style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <button onClick={toggleLanguage} style={{ background: 'transparent', border: '1px solid var(--gold)', color: 'var(--gold)', padding: '0.4rem 1rem', borderRadius: '4px', cursor: 'pointer', fontFamily: 'inherit', fontWeight: 'bold', transition: '0.3s' }}>
              {t('lang_btn')}
            </button>
            <a href="#" onClick={goContact} className="contact-btn">{t('contact')}</a>
          </div>

          <div className={`menu-toggle ${isMobileMenuOpen ? 'active' : ''}`} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            <span></span>
            <span></span>
          </div>

        </div>
      </nav>

      <div className={`mobile-menu-panel ${isMobileMenuOpen ? 'active' : ''}`}>
        <div className="panel-container">
          <ul className="nav-links">
            <li style={{ '--i': '1' }}><a href="#" onClick={goHome}>{t('home')}</a></li>
            <li style={{ '--i': '2' }}><a href="#brands" onClick={(e) => goSection(e, 'brands')}>{t('brands')}</a></li>
            <li style={{ '--i': '3' }}><a href="#about" onClick={(e) => goSection(e, 'about')}>{t('about')}</a></li>
            
            <li className="mobile-contact" style={{ '--i': '4', display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1.5rem' }}>
              <button onClick={() => { toggleLanguage(); closeMenu(); }} style={{ background: 'transparent', border: '1px solid var(--gold)', color: 'var(--gold)', padding: '0.6rem 1.8rem', borderRadius: '4px', cursor: 'pointer', fontFamily: 'inherit', fontSize: '1.1rem', fontWeight: 'bold' }}>
                {t('lang_btn')}
              </button>
              <a href="#" onClick={goContact} className="contact-btn">{t('contact')}</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
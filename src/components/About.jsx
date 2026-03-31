// src/components/About.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import './About.css';
import aboutImage from '../assets/images/about-image.jpg';
const About = () => {
  const { t } = useTranslation();

  return (
    <section className="about-section" id="about">
      <div className="container">
        <div className="about-grid">
          
          <div className="about-content">
            <h2 className="text-gradient-gold">{t('about_section_title')}</h2>
            <p className="about-subtitle">{t('about_subtitle')}</p>
            
            <p className="about-text">{t('about_desc1')}</p>
            <p className="about-text">{t('about_desc2')}</p>

            <div className="about-cards">
              <div className="about-card">
                <h4>{t('vision_title')}</h4>
                <p>{t('vision_desc')}</p>
              </div>
              <div className="about-card">
                <h4>{t('mission_title')}</h4>
                <p>{t('mission_desc')}</p>
              </div>
            </div>
          </div>

          <div className="about-image-wrapper">
            <img 
              src={aboutImage}
              alt="عن مجموعة يزن العلي" 
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
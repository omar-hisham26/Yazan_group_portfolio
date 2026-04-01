// src/components/BrandCard.jsx
import React from 'react';
import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'react-i18next';

const BrandCard = ({ brand, index, onOpenModal }) => {
  const { t, i18n } = useTranslation();
  
  // أداة المراقبة للأنيميشن
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  
  const isComingSoon = brand.status === 'coming_soon';
  const delay = `${(index % 3) * 0.20}s`; // تأخير متتابع

  // تجهيز الاسم والوصف
  const currentTitle = i18n.language === 'ar' ? brand.name : t(`b${brand.id}_title`);
  const currentDesc = i18n.language === 'ar' ? brand.desc : t(`b${brand.id}_desc`);

  return (
    <div
      ref={ref}
      className={`brand-card ${inView ? 'visible' : ''} ${isComingSoon ? 'coming-soon-card' : ''}`}
      style={{ animationDelay: delay }}
    >
      <div className="brand-img-wrapper">
        <img 
          src={brand.logo || "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800"} 
          alt={currentTitle} 
          className="brand-image" 
        />
        
        {isComingSoon && (
          <div className="coming-soon-badge">
            {t('coming_soon_badge')}
          </div>
        )}
      </div>

      <div className="brand-content">
        <h3 className="brand-title">{currentTitle}</h3>
        <p className="brand-desc">{currentDesc}</p>
        
        <button 
          className="details-btn" 
          disabled={isComingSoon}
          onClick={onOpenModal}
        >
          <span>
            {isComingSoon 
              ? t('coming_soon_badge') 
              : brand.id === 1
                ? (i18n.language === 'ar' ? 'تواصل معنا' : 'Contact Us')
                : (brand.id === 2 || brand.id === 3)
                  ? (i18n.language === 'ar' ? 'احجز الآن' : 'Book Now')
                  : (i18n.language === 'ar' ? 'عرض التفاصيل' : 'View Details')}
          </span>
          
          {!isComingSoon && (
            <svg className="btn-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transform: i18n.language === 'ar' ? 'rotate(180deg)' : 'none' }}>
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          )}
        </button>
      </div>
    </div>
  );
};

export default BrandCard;
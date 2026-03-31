// src/components/Brands.jsx
import React, { useState } from 'react'; // أضفنا useState هنا
import { useTranslation } from 'react-i18next';
import { brands } from '../data/brandsData'; 
import Modal from './Modal'; // استيراد النافذة المنبثقة
import './Brands.css';

const Brands = () => {
  const { t, i18n } = useTranslation();
  
  // ذاكرة لتخزين المشروع اللي تم الضغط عليه (إذا كان null يعني النافذة مقفلة)
  const [selectedBrand, setSelectedBrand] = useState(null);

  const activeBrands = brands.filter(brand => brand.id !== 4 );

  return (
    <section className="brands-section" id="brands">
      <h2 className="section-title text-gradient-gold">
        {t('brands_section_title')}
      </h2>

      <div className="brands-grid">
        {activeBrands.map((brand) => {
          const isComingSoon = brand.status === 'coming_soon';
          
          // تجهيز الاسم والوصف بناءً على اللغة عشان نرسلها للنافذة المنبثقة
          const currentTitle = i18n.language === 'ar' ? brand.name : t(`b${brand.id}_title`);
          const currentDesc = i18n.language === 'ar' ? brand.desc : t(`b${brand.id}_desc`);

          return (
            <div key={brand.id} className={`brand-card ${isComingSoon ? 'coming-soon-card' : ''}`}>
              
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
                
                {/* هنا السحر: عند الضغط، نحفظ بيانات هذا المشروع لفتح النافذة */}
                <button 
                  className="details-btn" 
                  disabled={isComingSoon}
                  onClick={() => setSelectedBrand({ rawBrand: brand, title: currentTitle, desc: currentDesc })}
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
        })}
      </div>

      {/* استدعاء النافذة المنبثقة في حال كان هناك مشروع محدد */}
      {selectedBrand && (
        <Modal 
          brand={selectedBrand.rawBrand} 
          title={selectedBrand.title}
          desc={selectedBrand.desc}
          onClose={() => setSelectedBrand(null)} 
        />
      )}

    </section>
  );
};

export default Brands;
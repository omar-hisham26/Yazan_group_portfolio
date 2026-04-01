// src/components/Brands.jsx
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { brands } from '../data/brandsData'; 
import BrandCard from './BrandCard'; 
import Modal from './Modal';
import './Brands.css';

const Brands = () => {
  const { t, i18n } = useTranslation();
  const [selectedBrand, setSelectedBrand] = useState(null);

  const activeBrands = brands.filter(brand => brand.id !== 4);

  return (
    <section className="brands-section" id="brands">
      <h2 className="section-title text-gradient-gold">
        {t('brands_section_title')}
      </h2>

      <div className="brands-grid">
        {activeBrands.map((brand, index) => (
          <BrandCard 
            key={brand.id}
            brand={brand}
            index={index}
            onOpenModal={() => {
              const currentTitle = i18n.language === 'ar' ? brand.name : t(`b${brand.id}_title`);
              const currentDesc = i18n.language === 'ar' ? brand.desc : t(`b${brand.id}_desc`);
              setSelectedBrand({ rawBrand: brand, title: currentTitle, desc: currentDesc });
            }}
          />
        ))}
      </div>

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
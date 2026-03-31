// src/components/BrandCard.jsx
import React from 'react';
import { useInView } from 'react-intersection-observer';

const BrandCard = ({ brand }) => {
  // استخدام مكتبة الـ Observer لتفعيل الأنيميشن عند الظهور
  const { ref, inView } = useInView({
    triggerOnce: true, // الأنيميشن تعمل مرة واحدة فقط
    threshold: 0.2,    // تظهر عندما يصبح 20% من العنصر مرئياً
  });

  const isComingSoon = brand.status === 'coming_soon';

  return (
    <div
      ref={ref}
      className={`brand-card ${inView ? 'visible' : ''}`}
      style={{ animationDelay: `${brand.id * 0.1}s` }} // تأخير الأنيميشن بناءً على الترتيب
    >
      {/* تأثير الإضاءة الخلفية (Glow) من كودك الأصلي */}
      <div className="glow"></div>
      
      <div className="card-content">
        {/* مكان اللوقو أو الأيقونة الاحتياطية */}
        <div className="card-icon-container">
          {brand.logo ? (
            <img src={brand.logo} alt={`لوقو ${brand.name}`} className="brand-logo-img" />
          ) : (
            // أيقونة احتياطية بسيطة في حال عدم وجود لوقو
            <div className="placeholder-icon">M</div>
          )}
        </div>

        <h3>{brand.name}</h3>
        <p>{brand.desc}</p>
        
        {isComingSoon && <span className="coming-soon-badge">قريباً</span>}
      </div>

      {/* تنسيقات الـ CSS الخاصة بالبطاقة (Scoped to this component) */}
      <style jsx>{`
        .brand-card {
          position: relative;
          border-radius: 1rem;
          background: var(--card);
          border: 1px solid var(--border-gold);
          padding: 2.5rem 2rem;
          overflow: hidden;
          transition: var(--transition-smooth);
          opacity: 0; /* مخفي في البداية */
          cursor: pointer;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        /* الكلاس الذي يضيفه الـ Observer عند التمرير */
        .brand-card.visible {
          animation: fadeUp 0.8s ease forwards;
        }

        .brand-card:hover {
          transform: translateY(-10px) scale(1.03);
          box-shadow: var(--shadow-gold);
          border-color: var(--border-gold-hover);
        }

        .glow {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom right, hsla(38, 45%, 60%, 0.08), transparent);
          opacity: 0;
          transition: opacity 0.5s;
        }

        .brand-card:hover .glow {
          opacity: 1;
        }

        .card-content {
          position: relative;
          z-index: 10;
          width: 100%;
        }

        .card-icon-container {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 5rem;
          height: 5rem;
          border-radius: 1rem;
          background: var(--secondary);
          color: var(--primary);
          margin-bottom: 2rem;
          transition: var(--transition-smooth);
          overflow: hidden; /* لضمان عدم خروج الصور الكبيرة */
          padding: 0.5rem;
        }

        .brand-card:hover .card-icon-container {
          background: var(--gradient-gold);
          color: var(--primary-foreground);
          transform: rotate(-5deg);
        }

        .brand-logo-img {
          width: 100%;
          height: 100%;
          object-fit: contain; /* للحفاظ على أبعاد اللوقو */
        }

        .placeholder-icon {
          font-family: var(--font-cairo);
          font-size: 2.5rem;
          font-weight: 800;
        }

        .brand-card h3 {
          font-size: 1.35rem;
          font-weight: 700;
          color: var(--foreground);
          margin-bottom: 1rem;
          line-height: 1.4;
        }

        .brand-card p {
          color: var(--muted-foreground);
          font-size: 0.95rem;
          line-height: 1.8;
          margin-bottom: 1.5rem;
          flex-grow: 1; /* لجعل النصوص تأخذ المساحة المتاحة وتتساوى البطاقات */
        }

        .coming-soon-badge {
          display: inline-block;
          padding: 0.5rem 1.5rem;
          border-radius: 9999px;
          font-size: 0.8rem;
          font-weight: 700;
          background: var(--gradient-gold);
          color: var(--primary-foreground);
          box-shadow: 0 4px 10px rgba(0,0,0,0.2);
        }
      `}</style>
    </div>
  );
};

export default BrandCard;
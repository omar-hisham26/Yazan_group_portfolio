// src/components/Stats.jsx
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useInView } from 'react-intersection-observer';
import './Stats.css';

// مكون صغير مسؤول عن عد رقم واحد فقط
const AnimatedCounter = ({ end, duration = 2000, suffix = "", prefix = "", startCounting }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (startCounting) {
      let startTimestamp = null;
      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        
        // استخدام دالة رياضية عشان يتباطأ الرقم في النهاية (حركة فخمة)
        const easeOutQuad = progress * (2 - progress);
        setCount(Math.floor(easeOutQuad * end));
        
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }
  }, [startCounting, end, duration]);

  return (
    <div className="stat-number text-gradient-gold">
      {prefix}{count}{suffix}
    </div>
  );
};

const Stats = () => {
  const { t } = useTranslation();
  
  // 👇 السحر هنا: نراقب القسم كامل عشان نبدأ الأنيميشن
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  // بيانات الإحصائيات مع أيقونات SVG بسيطة ونظيفة
  const statsData = [
    {
      id: 1,
      end: 8,
      prefix: "+",
      labelKey: "stat_experience",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
      )
    },
    {
      id: 2,
      end: 10,
      prefix: "+",
      labelKey: "stat_projects",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="2" width="16" height="20" rx="2" ry="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M12 6h.01"/><path d="M12 10h.01"/><path d="M12 14h.01"/><path d="M16 10h.01"/><path d="M16 14h.01"/><path d="M8 10h.01"/><path d="M8 14h.01"/></svg>
      )
    },
    {
      id: 3,
      end: 5,
      labelKey: "stat_brands",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
      )
    },
    {
      id: 4,
      end: 2,
      prefix: "+",
      suffix: "K",
      labelKey: "stat_clients",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
      )
    }
  ];

  return (
    <section className="stats-section" ref={ref}>
      <div className="stats-container">
        {statsData.map((stat, index) => (
          // 👇 نضيف كلاس visible مع تأخير زمني بناءً على الترتيب
          <div 
            key={stat.id} 
            className={`stat-item ${inView ? 'visible' : ''}`}
            style={{ animationDelay: `${index * 0.15}s` }}
          >
            <div className="stat-icon">{stat.icon}</div>
            <AnimatedCounter end={stat.end} prefix={stat.prefix} suffix={stat.suffix} startCounting={inView} />
            <p className="stat-label">{t(stat.labelKey)}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
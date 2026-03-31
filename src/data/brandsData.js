// src/data/brandsData.js

// 1. استيراد صور اللوقو (قم بتغيير الأسماء لتطابق ملفاتك في src/assets/images)
// مثال: import mainLogo from '../assets/images/logo-main.svg';
// سأضع روابط احتياطية الآن، وعليك استبدالها بملفاتك المحلية.

import logoRealEstate from '../assets/images/morjan-almajd.jpeg';
import logoChalets from '../assets/images/morjan-resdient.jpeg';
import clothing from '../assets/images/morjan-clothing.jpeg';
// ... إلخ لجميع البراندات

export const groupInfo = {
  name: "مجموعة يزن العلي",
  type: "للاستثمار",
  tagline: "رؤية تتجسد في كل مشروع",
  description: "نبني المستقبل بتميز واحترافية",
  // logo: mainLogo, // فك التعليق عند تجهيز اللوقو الرئيسي
};

export const brands = [
  {
    id: 1,
    name: "مرجان المجد العقارية",
    desc: "حلول عقارية متكاملة تجمع بين الفخامة والاستثمار الذكي في أبرز المواقع",
    logo: logoRealEstate, // فك التعليق واربط الصورة المناسبة
    category: "عقارات",
    status: "active",
  },
  {
    id: 2,
    name: "شاليهات مرجان ريزدنس",
    desc: "شاليهات فاخرة بتصاميم عصرية توفر تجربة إقامة استثنائية",
    logo: logoChalets,
    category: "ضيافة",
    status: "active",
  },
  {
    id: 3,
    name: "استوديوهات مرجان ريزدنس",
    desc: "وحدات سكنية عصرية مصممة بعناية لتلبي احتياجات الحياة المعاصرة",
    logo: logoChalets,
    category: "سكن",
    status: "active",
  },
  {
    id: 4,
    name: "مرجان للمقاولات والترميم",
    desc: "خدمات مقاولات وترميم بأعلى معايير الجودة والإتقان",
    // logo: logoConstruction,
    category: "إنشاءات",
    status: "active",
  },
  {
    id: 5,
    name: "مقطع وجاهز",
    desc: "مفهوم جديد في عالم الخدمات... انتظرونا قريباً",
    // logo: logoSoon1,
    category: "خدمات",
    status: "coming_soon",
  },
  {
    id: 6,
    name: "مغاسل مرجان الحديثة",
    desc: "خدمات غسيل متطورة بأحدث التقنيات... انتظرونا قريباً",
    logo: clothing,
    category: "خدمات",
    status: "coming_soon",
  },
];
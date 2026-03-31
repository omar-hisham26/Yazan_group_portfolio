// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  ar: {
    translation: {
      "home": "الرئيسية",
      "brands": "البراندات",
      "about": "عن المجموعة",
      "contact": "تواصل معنا",
      "lang_btn": "English",
      
      "stat_experience": "سنوات خبرة",
      "stat_projects": "مشروع منجز",
      "stat_brands": "علامات تجارية",
      "stat_clients": "عميل سعيد",

      "brands_section_title": "علاماتنا التجارية ومشاريعنا",
      "view_details": "عرض التفاصيل",
      "coming_soon_badge": "قريباً",
      
      // تفاصيل الواجهة والفوتر (عربي)
      "hero_tagline": "رؤية تتجسد في كل مشروع",
      "hero_name": "مجموعة يزن العلي",
      "hero_type": "للاستثمار",
      "hero_desc": "المستقبل بتميز واحترافية ",
      "footer_rights": "جميع الحقوق محفوظة",

      "b1_title": "مرجان المجد العقارية",
      "b1_desc": "حلول عقارية متكاملة ورؤية استثمارية ثاقبة تلبي تطلعاتك السكنية والتجارية بأعلى معايير الجودة.",
      "b2_title": "شاليهات مرجان ريزدنس",
      "b2_desc": "ملاذك الفاخر للراحة والاستجمام. تصاميم عصرية ومرافق متكاملة تضمن لك تجربة استثنائية.",
      "b3_title": "استديوهات مرجان ريزدنس",
      "b3_desc": "مساحات سكنية ذكية وأنيقة، مصممة بعناية لتوفير أقصى درجات الراحة والعملية لحياتك اليومية.",
      "b4_title": "مرجان للمقاولات والترميم",
      "b4_desc": "دقة في التنفيذ وجودة في البناء. نقدم خدمات المقاولات والترميم الشاملة بأيدي خبراء متخصصين.",
      "b5_title": "مقطع وجاهز",
      "b5_desc": "مفهوم جديد ومبتكر في التجهيزات لتسهيل أعمالك وتوفير وقتك بجودة لا تضاهى.",
      "b6_title": "مغاسل مرجان الحديثة",
      "b6_desc": "عناية فائقة ونظافة مثالية. نستخدم أحدث التقنيات لضمان أفضل مستويات العناية بمقتنياتك."
    }
  },
  en: {
    translation: {
      "home": "Home",
      "brands": "Brands",
      "about": "About Us",
      "contact": "Contact Us",
      "lang_btn": "العربية",
      
      "stat_experience": "Years Experience",
      "stat_projects": "Completed Projects",
      "stat_brands": "Active Brands",
      "stat_clients": "Happy Clients",

      "brands_section_title": "Our Brands & Projects",
      "view_details": "View Details",
      "coming_soon_badge": "Coming Soon",

      // تفاصيل الواجهة والفوتر (إنجليزي)
      "hero_tagline": "A Vision Embodied in Every Project",
      "hero_name": "Yazan Al-Ali Group",
      "hero_type": "For Investment",
      "hero_desc": "We build the future with excellence and professionalism.",
      "footer_rights": "All Rights Reserved",

      "b1_title": "Murjan Al-Majd Real Estate",
      "b1_desc": "Comprehensive real estate solutions and insightful investment visions meeting your commercial and residential needs.",
      "b2_title": "Murjan Residence Chalets",
      "b2_desc": "Your luxurious getaway for relaxation. Modern designs and premium facilities for an exceptional experience.",
      "b3_title": "Murjan Residence Studios",
      "b3_desc": "Smart and elegant living spaces, carefully designed to provide maximum comfort and practicality.",
      "b4_title": "Murjan Contracting & Restoration",
      "b4_desc": "Precision in execution and quality in construction. Comprehensive contracting services by industry experts.",
      "b5_title": "Cut & Ready",
      "b5_desc": "A new and innovative concept in preparation to facilitate your work and save your time with unmatched quality.",
      "b6_title": "Modern Murjan Laundries",
      "b6_desc": "Supreme care and perfect cleanliness. We use the latest technologies to ensure the best care for your belongings."
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "ar", 
    fallbackLng: "ar",
    interpolation: { escapeValue: false }
  });

export default i18n;
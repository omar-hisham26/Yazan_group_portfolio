// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  ar: {
    translation: {
      "home": "الرئيسية",
      "brands": "العلامات التجارية",
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
      "b6_desc": "عناية فائقة ونظافة مثالية. نستخدم أحدث التقنيات لضمان أفضل مستويات العناية بمقتنياتك.",
      "about_section_title": "عن المجموعة",
      "about_subtitle": "ريادة في الأعمال.. وتميز في التنفيذ",
      "about_desc1": "مجموعة يزن العلي للاستثمار هي كيان رائد يجمع بين الخبرة العميقة والرؤية المستقبلية. نحن نؤمن بأن الاستثمار الحقيقي يبدأ ببناء الثقة وتقديم قيمة مضافة للمجتمع.",
      "about_desc2": "منذ تأسيسنا، قمنا بتنويع محفظتنا الاستثمارية لتشمل قطاعات حيوية مثل العقارات، الضيافة، المقاولات، والخدمات، مع الالتزام الصارم بأعلى معايير الجودة والابتكار.","about_desc2": "منذ انطلاقتنا، حرصنا على ترسيخ تواجدنا في قطاعات حيوية مثل العقارات، الضيافة، والمقاولات، متبعين رؤية طموحة تهدف للنمو المستدام والتميز في كل قطاع ننشط فيه.",
      "vision_title": "رؤيتنا",
      "vision_desc": "أن نكون الخيار الأول والوجهة الموثوقة للاستثمار والخدمات المتكاملة في المملكة، مع ترك بصمة إيجابية مستدامة.",
      "mission_title": "رسالتنا",
      "mission_desc": "تقديم حلول مبتكرة وخدمات استثنائية تفوق توقعات عملائنا، من خلال فريق عمل محترف وشراكات استراتيجية ناجحة.",




      /* 📱 كلمات الفوتر الجديد */
          "footer_desc": "كيان رائد للاستثمار، يجمع بين الخبرة العميقة والرؤية المستقبلية، نقدم حلولاً مبتكرة تفوق توقعات عملائنا.",
          "footer_rights": "جميع الحقوق محفوظة. مجموعة يزن العلي للاستثمار",
          "quick_links": "روابط سريعة",
          "social_media": "تواصل اجتماعي",
          "our_sectors": "قطاعاتنا",
          "f_realestate": "العقارات",
          "f_construction": "المقاولات",
          "f_hospitality": "الضيافة",
          "f_logistics": "الخدمات اللوجستية",
          "follow_us": "تابعنا عبر:"

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
      "b5_title": "Knife",
      "b5_desc": "A new and innovative concept in preparation to facilitate your work and save your time with unmatched quality.",
      "b6_title": "Modern Murjan Laundries",
      "b6_desc": "Supreme care and perfect cleanliness. We use the latest technologies to ensure the best care for your belongings.",
      "about_section_title": "About The Group",
      "about_subtitle": "Leadership in Business.. Excellence in Execution",
      "about_desc1": "Yazan Al-Ali Investment Group is a leading entity combining deep experience with futuristic vision. We believe that true investment starts with building trust and adding value to society.",
      "about_desc2": "Since our inception, we have been keen to consolidate our presence in vital sectors such as real estate, hospitality, and contracting, following an ambitious vision aimed at sustainable growth and excellence in every sector we operate in.",
      "vision_title": "Our Vision",
      "vision_desc": "To be the first choice and trusted destination for investments and integrated services in the Kingdom, leaving a sustainable positive footprint.",
      "mission_title": "Our Mission",
      "mission_desc": "To provide innovative solutions and exceptional services that exceed our clients' expectations, through a professional team and successful strategic partnerships.",



      
      /* 📱 كلمات الفوتر الجديد */
          "footer_desc": "A leading investment entity, combining experience with vision, providing innovative solutions that exceed expectations.",
          "footer_rights": "All Rights Reserved. Yazan Al-Ali Investment Group",
          "quick_links": "Quick Links",
          "social_media": "Social Media",
          "our_sectors": "Our Sectors",
          "f_realestate": "Real Estate",
          "f_construction": "Construction",
          "f_hospitality": "Hospitality",
          "f_logistics": "Logistics",
          "follow_us": "Follow us on:"
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
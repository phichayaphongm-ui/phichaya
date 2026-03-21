import React from 'react';

interface StructuredDataProps {
  type?: 'organization' | 'localbusiness' | 'website';
  page?: string;
}

export function StructuredData({ type = 'organization', page = 'home' }: StructuredDataProps) {
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Phichaya HR Solutions",
    "alternateName": "พิชัย HR โซลูชั่นส์",
    "url": "https://phichaya.com",
    "logo": "https://phichaya.com/logo.png",
    "description": "Experts in HR Digital Transformation for over 15 years. Providing comprehensive HR solutions for organizations and SMEs in Thailand.",
    "foundingDate": "2010",
    "areaServed": {
      "@type": "Country",
      "name": "Thailand"
    },
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "TH",
      "addressRegion": "Bangkok",
      "addressLocality": "Bangkok",
      "postalCode": "10110",
      "streetAddress": "Sukhumvit Road, Bangkok"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "13.7563",
      "longitude": "100.5018"
    },
    "telephone": "+66-2-123-4567",
    "email": "contact@phichaya.com",
    "website": "https://phichaya.com",
    "sameAs": [
      "https://www.facebook.com/phichayahrsolutions",
      "https://www.linkedin.com/company/phichaya-hr-solutions",
      "https://line.me/ti/p/@phichayahrsolutions"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+66-2-123-4567",
      "contactType": "customer service",
      "availableLanguage": ["Thai", "English"],
      "email": "contact@phichaya.com"
    },
    "serviceType": [
      "HR Consulting",
      "Digital HR Transformation",
      "Recruitment Services",
      "Organization Development",
      "HR Systems & Applications",
      "Resume/CV Writing",
      "Website Development",
      "Training Solutions"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "HR Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Digital HR Transformation",
            "description": "Complete digital transformation of HR processes and systems"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "HR Consulting",
            "description": "Professional HR consulting and strategic planning"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Recruitment Services",
            "description": "Professional recruitment and headhunting services"
          }
        }
      ]
    }
  };

  const localBusinessData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Phichaya HR Solutions",
    "alternateName": "พิชัย HR โซลูชั่นส์",
    "url": "https://phichaya.com",
    "logo": "https://phichaya.com/logo.png",
    "description": "Experts in HR Digital Transformation for over 15 years. Providing comprehensive HR solutions for organizations and SMEs in Thailand.",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "TH",
      "addressRegion": "Bangkok",
      "addressLocality": "Bangkok",
      "postalCode": "10110",
      "streetAddress": "Sukhumvit Road, Bangkok"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "13.7563",
      "longitude": "100.5018"
    },
    "telephone": "+66-2-123-4567",
    "email": "contact@phichaya.com",
    "website": "https://phichaya.com",
    "openingHours": "Mo-Fr 09:00-18:00",
    "priceRange": "$$",
    "paymentAccepted": ["Cash", "Credit Card", "Bank Transfer"],
    "areaServed": "Bangkok and throughout Thailand",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "HR Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Digital HR Transformation",
            "description": "Complete digital transformation of HR processes"
          }
        }
      ]
    }
  };

  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "บริการ HR Digital Transformation คืออะไร?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "HR Digital Transformation คือการนำเทคโนโลยีและกระบวนการดิจิทัลมาปรับปรุงกระบวนการจัดการทรัพยากรมนุษย์ให้มีประสิทธิภาพมากขึ้น"
        }
      },
      {
        "@type": "Question",
        "name": "Phichaya HR Solutions มีประสบการณ์มากแค่ไหน?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Phichaya HR Solutions มีประสบการณ์มากกว่า 15 ปีในการให้บริการด้าน HR และการแปลงเปลี่ยนดิจิทัลสำหรับองค์กรในประเทศไทย"
        }
      },
      {
        "@type": "Question",
        "name": "บริการของเราเหมาะกับองค์กรขนาดไหน?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "เราให้บริการทุกขนาดขององค์กรตั้งแต่ SME จนถึงองค์กรขนาดใหญ่ พร้อมแบบฟอร์มที่ปรับแต่งได้ตามความต้องการ"
        }
      }
    ]
  };

  const howToData = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "วิธีเริ่มต้น Digital HR Transformation กับเรา",
    "description": "ขั้นตอนการเริ่มต้นการแปลงเปลี่ยนดิจิทัล HR กับ Phichaya HR Solutions",
    "totalTime": "PT30M",
    "supply": [
      {
        "@type": "HowToSupply",
        "name": "ข้อมูลองค์กรปัจจุบัน"
      },
      {
        "@type": "HowToSupply", 
        "name": "เป้าหมายทางธุรกิจ"
      }
    ],
    "step": [
      {
        "@type": "HowToStep",
        "name": "ติดต่อเรา",
        "text": "ติดต่อทีมผู้เชี่ยวชาญของเราเพื่อปรึกษาความต้องการ",
        "image": "https://phichaya.com/images/contact-us.jpg"
      },
      {
        "@type": "HowToStep",
        "name": "วิเคราะห์ความต้องการ",
        "text": "ทีมผู้เชี่ยวชาญจะวิเคราะห์ความต้องการและเสนอโซลูชั่นที่เหมาะสม",
        "image": "https://phichaya.com/images/analysis.jpg"
      },
      {
        "@type": "HowToStep",
        "name": "เริ่มต้นโครงการ",
        "text": "ดำเนินการตามแผนที่วางไว้พร้อมการติดตามผล",
        "image": "https://phichaya.com/images/implementation.jpg"
      }
    ]
  };

  const getStructuredData = () => {
    switch (page) {
      case 'faq':
        return faqData;
      case 'howto':
        return howToData;
      case 'contact':
        return localBusinessData;
      default:
        return organizationData;
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(getStructuredData()),
      }}
    />
  );
}

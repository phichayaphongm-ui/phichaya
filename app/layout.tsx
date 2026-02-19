import React from "react"
import type { Metadata } from "next";
import { Kanit, Inter } from "next/font/google";

import "./globals.css";

const kanit = Kanit({
  subsets: ["thai", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://phichaya.com"),
  title: {
    default: "Phichaya HR Solutions | HR Digital Transformation Expert",
    template: "%s | Phichaya HR Solutions"
  },
  description:
    "Phichaya HR Solutions: Experts in HR Digital Transformation for over 15 years. Providing comprehensive HR solutions for organizations and SMEs in Thailand.",
  keywords: [
    "HR Solutions",
    "Digital Transformation",
    "HR Consulting",
    "Thailand HR",
    "Recruitment Services",
    "Organization Development",
    "ที่ปรึกษา HR",
    "วางระบบ HR",
    "Digital HR",
    "SME HR Solutions"
  ],
  authors: [{ name: "Phichaya HR Solutions" }],
  creator: "Phichaya HR Solutions",
  publisher: "Phichaya HR Solutions",
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  /* 
     alternates: {
       canonical: "/",
     }, 
  */
  openGraph: {
    type: "website",
    locale: "th_TH",
    url: "https://phichaya.com",
    siteName: "Phichaya HR Solutions",
    title: "Phichaya HR Solutions | HR Digital Transformation Expert",
    description: "Experts in HR Digital Transformation for over 15 years. Strategic HR Solutions for Sustainable Growth.",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 600,
        alt: "Phichaya HR Solutions Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Phichaya HR Solutions | HR Digital Transformation Expert",
    description: "Experts in HR Digital Transformation for over 15 years. Strategic HR Solutions for Sustainable Growth.",
    images: ["/logo.png"],
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

import { I18nProvider } from "@/lib/i18n-context";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th">
      <body className={`${kanit.variable} ${inter.variable} font-sans antialiased`}>
        <I18nProvider>
          {children}
        </I18nProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://phichaya.com/#local-business",
              "name": "Phichaya HR Solutions",
              "alternateName": "พิจารยา เอชอาร์ โซลูชั่น",
              "url": "https://phichaya.com",
              "logo": {
                "@type": "ImageObject",
                "url": "https://phichaya.com/logo.png"
              },
              "image": "https://phichaya.com/logo.png",
              "description": "Strategic HR Solutions & Digital Transformation Expert for Organizations and SMEs in Thailand.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Bangkok",
                "addressLocality": "Bangkok",
                "addressRegion": "Bangkok",
                "postalCode": "10XXX",
                "addressCountry": "TH"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 13.7563,
                "longitude": 100.5018
              },
              "telephone": "+66-2-XXX-XXXX",
              "priceRange": "$$$",
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday"
                  ],
                  "opens": "09:00",
                  "closes": "18:00"
                }
              ],
              "sameAs": [
                "https://www.facebook.com/phichaya.hr",
                "https://www.linkedin.com/company/phichaya-hr"
              ],
              "knowsAbout": [
                "Human Resources",
                "Digital Transformation",
                "Recruitment",
                "Organization Development",
                "Payroll Management",
                "Training and Development"
              ]
            }),
          }}
        />

      </body>
    </html>
  );
}

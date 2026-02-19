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
  title: "Phichaya HR Solutions | HR Digital Transformation Expert",
  description:
    "ผู้เชี่ยวชาญด้าน HR Digital Transformation มากกว่า 15 ปี โซลูชั่น HR ครบวงจร สำหรับองค์กรและ SME",
  keywords:
    "HR Solutions, Digital Transformation, HR Consulting, Thailand, Recruitment, Organization Development",
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
              "@type": "Organization",
              "name": "Phichaya HR Solutions",
              "url": "https://phichaya.com",
              "logo": "https://phichaya.com/logo.png",
              "description": "Strategic HR Solutions & Digital Transformation for Sustainable Growth",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Bangkok",
                "addressCountry": "TH"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer service",
                "areaServed": "TH",
                "availableLanguage": ["Thai", "English"]
              },
              "sameAs": [
                "https://www.facebook.com/phichaya.hr"
              ]
            }),
          }}
        />
      </body>
    </html>
  );
}

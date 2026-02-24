"use client";

import { Facebook } from "lucide-react";
import Image from "next/image";
import { LineIcon } from "@/components/line-icon";
import { useLanguage } from "@/lib/i18n-context";
import { dictionaries } from "@/lib/dictionaries";

export function SiteFooter() {
  const { language } = useLanguage();
  const t = dictionaries[language].footer;
  const navT = dictionaries[language].nav;

  const quickLinks = [
    { href: "/#home", label: navT.home },
    { href: "/about", label: navT.about },
    { href: "/#services", label: navT.services },
    { href: "/faq", label: language === 'th' ? "คำถามที่พบบ่อย (FAQ)" : "FAQ" },
    { href: "/#portfolio", label: navT.portfolio },
    { href: "/#articles", label: navT.articles },
    { href: "/#contact", label: navT.contact },
  ];

  const serviceLinks = [
    "HR Consulting",
    "Digital Transformation",
    "Recruitment Services",
    "Training Solutions",
    "HR Systems & Apps",
    "Website Development",
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="Phichaya HR Solutions"
                width={36}
                height={36}
                className="h-9 w-auto brightness-0 invert"
              />
              <span className="text-base font-bold text-white">
                Phichaya HR
              </span>
            </div>
            <p className="mt-4 text-sm text-gray-400 leading-relaxed">
              {t.about}
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://line.me/R/ti/p/@106vnkyh"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-gray-400 transition-all hover:bg-primary hover:text-white"
                aria-label="Line Official"
              >
                <LineIcon className="h-4 w-4" />
              </a>
              <a
                href="https://www.facebook.com/share/174YVEitJY/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-gray-400 transition-all hover:bg-primary hover:text-white"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
              {t.quickLinks}
            </h3>
            <ul className="mt-4 flex flex-col gap-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
              {t.services}
            </h3>
            <ul className="mt-4 flex flex-col gap-2.5">
              {serviceLinks.map((service) => (
                <li key={service}>
                  <span className="text-sm text-gray-400">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
              {t.contact}
            </h3>
            <ul className="mt-4 flex flex-col gap-2.5 text-sm text-gray-400">
              <li>
                <a href="mailto:contact@phichaya.com" className="transition-colors hover:text-white">
                  contact@phichaya.com
                </a>
              </li>
              <li>
                <a href="tel:0826465526" className="transition-colors hover:text-white">
                  082-646-5526
                </a>
              </li>
              <li>
                <a
                  href="https://line.me/R/ti/p/@106vnkyh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 transition-colors hover:text-white"
                >
                  <LineIcon className="h-3.5 w-3.5" />
                  @106vnkyh
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 sm:flex-row">
          <p className="text-xs text-gray-500">
            {t.copyright}
          </p>
          <div className="flex items-center gap-6 text-xs text-gray-500">
            <a href="/privacy-policy" className="transition-colors hover:text-white">
              {t.privacy}
            </a>
            <a href="/terms-of-use" className="transition-colors hover:text-white">
              {t.terms}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

"use client";

import { useState, useEffect } from "react";
import { Menu, X, Globe } from "lucide-react";
import { useLanguage } from "@/lib/i18n-context";
import { dictionaries } from "@/lib/dictionaries";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const { language, toggleLanguage } = useLanguage();
  const t = dictionaries[language].nav;

  const navLinks = [
    { href: "#home", label: t.home },
    { href: "#services", label: t.services },
    { href: "#portfolio", label: t.portfolio },
    { href: "#articles", label: t.articles },
    { href: "#contact", label: t.contact },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? "bg-white/90 backdrop-blur-xl shadow-sm"
        : "bg-white/70 backdrop-blur-sm"
        }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#home" className="flex items-center gap-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo.png"
            alt="Phichaya HR Solutions"
            className="h-10 w-auto md:h-12"
          />
          <span className="hidden text-lg font-bold text-gray-900 sm:block">
            Phichaya HR Solutions
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-base font-medium text-gray-600 transition-colors hover:text-primary"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <button
            onClick={toggleLanguage}
            className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-primary transition-colors border border-gray-200 rounded-full px-3 py-1 bg-white/50 hover:bg-white"
          >
            <Globe className="w-4 h-4" />
            {language === 'th' ? 'EN' : 'TH'}
          </button>

          <a
            href="#contact"
            className="rounded-lg bg-primary px-5 py-2.5 text-base font-semibold text-white transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25"
          >
            {t.contactBtn}
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4 lg:hidden">
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-primary transition-colors border border-gray-200 rounded-full px-3 py-1 bg-white/50"
          >
            {language === 'th' ? 'EN' : 'TH'}
          </button>
          <button
            type="button"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="text-gray-700"
            aria-label="Toggle menu"
          >
            {isMobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Nav */}
      {isMobileOpen && (
        <div className="border-t border-gray-100 bg-white/95 backdrop-blur-xl lg:hidden">
          <ul className="flex flex-col px-6 py-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block py-3 text-base font-medium text-gray-600 transition-colors hover:text-primary"
                  onClick={() => setIsMobileOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                className="mt-2 block rounded-lg bg-primary px-5 py-2.5 text-center text-base font-semibold text-white"
                onClick={() => setIsMobileOpen(false)}
              >
                {t.contactConsult}
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

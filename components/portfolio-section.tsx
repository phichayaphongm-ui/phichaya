"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  Users,
  GraduationCap,
  Calculator,
  Bot,
  Building2,
  FileCheck,
  Globe,
  Smartphone,
  Briefcase,
  TrendingUp,
  BarChart3,
  Target,
  FileText,
  Search,
  ChevronDown,
  ArrowRight,
  Play,
  Sparkles,
  Gamepad2,
  BookOpen,
  Palette,
} from "lucide-react";
import { useLanguage } from "@/lib/i18n-context";
import { dictionaries } from "@/lib/dictionaries";

const portfolioItems = [
  { icon: Users, id: "ระบบสรรหาบุคคล", category: "Recruitment" },
  { icon: GraduationCap, id: "ระบบฝึกอบรม", category: "Training" },
  { icon: Calculator, id: "ระบบเงินเดือนและภาษี", category: "Payroll" },
  { icon: Bot, id: "AI Chatbot", category: "AI" },
  { icon: Building2, id: "Organization Development", category: "OD" },
  { icon: FileCheck, id: "ระบบควบคุมเอกสาร", category: "Documents" },
  { icon: Globe, id: "Website & Branding", category: "Web" },
  { icon: Smartphone, id: "Web App & Mobile App", category: "App" },
  { icon: Briefcase, id: "HR Consulting", category: "Consulting" },
  { icon: TrendingUp, id: "Digital Transformation Planning", category: "DX" },
  { icon: BarChart3, id: "Performance Appraisal System", category: "Performance" },
  { icon: Target, id: "KPI/OKRs System", category: "KPI" },
  { icon: FileText, id: "Resume Writing", category: "Resume" },
  { icon: Search, id: "Recruitment Service", category: "Recruitment" },
  { icon: Palette, id: "Employee Branding", category: "Branding" },
];

export function PortfolioSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const { language } = useLanguage();
  const t = dictionaries[language].portfolio;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const displayed = portfolioItems;

  return (
    <section id="portfolio" className="section-light py-28 relative overflow-hidden">
      {/* Decorative blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] gradient-blob gradient-blob-purple animate-pulse-soft opacity-10" />

      <div className="mx-auto max-w-7xl px-6 relative z-10" ref={ref}>
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-wider text-primary">
            {t.label}
          </span>
          <h2 className="mt-4 text-balance text-3xl font-bold text-gray-900 md:text-4xl heading-accent">
            {t.title}
          </h2>
          <p className="mx-auto mt-8 max-w-2xl text-pretty text-gray-500 leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* Featured Demos Grid */}
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {/* Training Game Card */}
          <Link
            href="/portfolio/training-game"
            className="group block relative overflow-hidden rounded-2xl bg-gradient-to-r from-slate-900 via-blue-950 to-indigo-950 p-6 md:p-8 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-1"
          >
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full filter blur-3xl animate-pulse" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-500 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
            </div>
            <div className="relative z-10 flex flex-col items-start gap-6 h-full">
              <div className="flex w-full items-center gap-4">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-white shadow-lg shadow-blue-500/30 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/game-demo/logogame.png" alt="Service Mind Game" className="h-full w-full object-cover" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <Sparkles className="h-4 w-4 text-cyan-300" />
                    <span className="text-xs font-semibold uppercase tracking-wider text-cyan-300">{t.featured}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white leading-tight">
                    {t.gameTitle}
                  </h3>
                </div>
              </div>

              <p className="text-sm text-blue-200/70 line-clamp-2">
                {t.gameDesc}
              </p>

              <div className="mt-auto flex items-center gap-2 rounded-xl bg-blue-500/20 border border-blue-400/30 px-4 py-2 text-sm font-semibold text-white group-hover:bg-blue-500/40 transition-colors w-fit">
                <Play className="h-4 w-4" />
                {t.gamePlay}
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Link>

          {/* Recruitment Solution Card */}
          <Link
            href="/portfolio/recruitment-solution"
            className="group block relative overflow-hidden rounded-2xl bg-gradient-to-r from-indigo-950 via-purple-950 to-slate-900 p-6 md:p-8 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 hover:-translate-y-1"
          >
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500 rounded-full filter blur-3xl animate-pulse" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-pink-500 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
            </div>
            <div className="relative z-10 flex flex-col items-start gap-6 h-full">
              <div className="flex w-full items-center gap-4">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500 to-indigo-500 shadow-lg shadow-purple-500/30 text-white">
                  <Smartphone className="h-8 w-8" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <Sparkles className="h-4 w-4 text-purple-300" />
                    <span className="text-xs font-semibold uppercase tracking-wider text-purple-300">{t.featured}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white leading-tight">
                    Recruitment Solution
                  </h3>
                </div>
              </div>

              <p className="text-sm text-purple-200/70 line-clamp-2">
                {language === 'th' ? 'ระบบสรรหาพนักงานยุคดิจิทัล คัดกรองผู้สมัครแบบ Real-time' : 'Digital Recruitment System with Real-time candidate screening'}
              </p>

              <div className="mt-auto flex items-center gap-2 rounded-xl bg-purple-500/20 border border-purple-400/30 px-4 py-2 text-sm font-semibold text-white group-hover:bg-purple-500/40 transition-colors w-fit">
                <Play className="h-4 w-4" />
                {language === 'th' ? 'ดูวิดีโอแนะนำ' : 'Watch Video'}
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Link>

          {/* Gallery Book Card */}
          <Link
            href="/portfolio/gallery"
            className="group block relative overflow-hidden rounded-2xl bg-gradient-to-r from-emerald-950 via-teal-950 to-slate-900 p-6 md:p-8 transition-all duration-500 hover:shadow-2xl hover:shadow-teal-500/20 hover:-translate-y-1"
          >
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500 rounded-full filter blur-3xl animate-pulse" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-emerald-500 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
            </div>
            <div className="relative z-10 flex flex-col items-start gap-6 h-full">
              <div className="flex w-full items-center gap-4">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-teal-500 to-emerald-500 shadow-lg shadow-teal-500/30 text-white">
                  <BookOpen className="h-8 w-8" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <Sparkles className="h-4 w-4 text-teal-300" />
                    <span className="text-xs font-semibold uppercase tracking-wider text-teal-300">{t.featured}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white leading-tight">
                    {language === 'th' ? 'ตัวอย่างเว็บไซต์' : 'Website Gallery'}
                  </h3>
                </div>
              </div>

              <p className="text-sm text-teal-200/70 line-clamp-2">
                {language === 'th' ? 'พาธุรกิจคุณออกสู่โลกกว้าง ตัวอย่างเว็บไซต์ที่เราออกแบบในรูปแบบหนังสือเปิดอ่าน' : 'Take your business to the world — browse our website designs as a flip book'}
              </p>

              <div className="mt-auto flex items-center gap-2 rounded-xl bg-teal-500/20 border border-teal-400/30 px-4 py-2 text-sm font-semibold text-white group-hover:bg-teal-500/40 transition-colors w-fit">
                <BookOpen className="h-4 w-4" />
                {language === 'th' ? 'เปิดดูผลงาน' : 'View Gallery'}
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Link>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {displayed.map((item, index) => {
            // @ts-ignore
            const content = t.items[item.id];
            return (
              <div
                key={item.id}
                className="group flex items-start gap-4 rounded-2xl card-gradient-border bg-white p-6 transition-all duration-500 hover:-translate-y-1"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible
                    ? "translateY(0)"
                    : "translateY(24px)",
                  transitionDelay: `${index * 60}ms`,
                }}
              >
                <div className="icon-glow flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 text-primary transition-all group-hover:from-primary group-hover:to-secondary group-hover:text-white group-hover:shadow-lg group-hover:shadow-primary/20">
                  <item.icon className="h-5 w-5" />
                </div>
                <div>
                  <span className="mb-1.5 inline-block rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-500 group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                    {item.category}
                  </span>
                  <h3 className="text-sm font-semibold text-gray-900 group-hover:text-primary transition-colors">
                    {content.title}
                  </h3>
                  <p className="mt-1 text-sm text-gray-500 leading-relaxed">
                    {content.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

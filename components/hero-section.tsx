"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { useLanguage } from "@/lib/i18n-context";
import { dictionaries } from "@/lib/dictionaries";

export function HeroSection() {
  const [scrollY, setScrollY] = useState(0);
  const { language } = useLanguage();
  const t = dictionaries[language].hero;

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-[95vh] lg:min-h-[90vh] overflow-hidden bg-white flex items-center"
    >
      {/* Background Video — right side */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute right-0 top-0 h-full w-full object-cover grayscale-[0.1] brightness-[1.05]"
          style={{ transform: `scale(1.05) translateY(${scrollY * 0.15}px)` }}
        >
          <source src="/videos/heropage-phichaya.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Modern Gradient Overlays */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0.98) 30%, rgba(255,255,255,0.85) 60%, rgba(255,255,255,0.2) 90%, transparent 100%)"
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-white/60 pointer-events-none" />

      {/* Decorative Blobs from globals.css */}
      <div className="absolute top-20 left-[-5%] w-[500px] h-[500px] gradient-blob gradient-blob-blue animate-pulse-soft opacity-10" />
      <div className="absolute bottom-[-5%] right-[25%] w-[400px] h-[400px] gradient-blob gradient-blob-cyan animate-pulse-soft opacity-5" style={{ animationDelay: "2s" }} />

      {/* Content Area */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-20 lg:py-0">
        <div className="max-w-3xl animate-fade-in-up">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] mb-8 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 animate-pulse" />
            <span>{language === 'th' ? "นวัตกรรม HR ยุคใหม่" : "Digital HR Pioneer"}</span>
          </div>

          <h1 className="text-gray-900 mb-10 flex flex-col">
            <span className="text-lg sm:text-xl lg:text-2xl font-light tracking-[0.1em] text-gray-500 mb-3 leading-relaxed uppercase">
              {t.titleStart}
            </span>
            <span className="text-4xl sm:text-6xl lg:text-[68px] font-black leading-[1.3] tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-primary via-blue-700 to-indigo-800 py-2 sm:py-3">
              {t.titleHighlight}
            </span>
          </h1>

          {/* Sub-headline with improved flow */}
          <div className="relative mb-12">
            <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-primary to-blue-400 rounded-full" />
            <p className="max-w-2xl text-base sm:text-lg lg:text-xl text-gray-600 font-medium leading-[1.7] whitespace-pre-line pl-6 sm:pl-8 text-pretty">
              {t.description}
            </p>
          </div>

          {/* Premium CTAs */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <a
              href="#contact"
              className="group relative inline-flex w-full sm:w-auto items-center justify-center gap-3 overflow-hidden rounded-2xl bg-gradient-to-r from-primary to-blue-700 px-8 py-4 text-base sm:text-lg font-bold text-white shadow-2xl shadow-primary/30 transition-all hover:scale-[1.03] hover:shadow-primary/40 active:scale-95"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer" />
              {t.secondaryBtn}
              <ArrowRight className="h-5 w-5 sm:h-6 sm:w-6 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#services"
              className="group inline-flex w-full sm:w-auto items-center justify-center gap-3 rounded-2xl border-2 border-gray-200 bg-white/40 backdrop-blur-xl px-8 py-4 text-base sm:text-lg font-bold text-gray-700 transition-all hover:border-primary hover:bg-white hover:text-primary hover:shadow-xl active:scale-95"
            >
              {t.primaryBtn}
              <div className="rounded-full bg-gray-100 p-1 group-hover:bg-primary/10 transition-colors">
                <ArrowRight className="h-5 w-5" />
              </div>
            </a>
          </div>

          {/* Stats Polish */}
          <div className="mt-16 sm:mt-24 grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-12 max-w-3xl">
            {[
              { value: "15+", label: language === 'th' ? "โซลูชั่น HR" : "HR Solutions", color: "from-blue-600 to-primary" },
              { value: "Custom", label: language === 'th' ? "บริการในแบบคุณ" : "Custom Services", color: "from-primary to-indigo-600" },
              { value: "Reasonable", label: language === 'th' ? "ราคามิตรภาพ" : "Reasonable Price", color: "from-indigo-600 to-purple-600" },
            ].map((stat) => (
              <div key={stat.label} className="group flex flex-col items-start gap-1">
                <div className={`text-3xl lg:text-4xl font-black bg-clip-text text-transparent bg-gradient-to-r ${stat.color} tracking-tighter transition-transform group-hover:scale-110 duration-500`}>
                  {stat.value}
                </div>
                <div className="text-[10px] lg:text-xs font-bold text-gray-400 uppercase tracking-widest mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

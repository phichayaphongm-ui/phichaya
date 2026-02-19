"use client";

import { ArrowRight, Sparkles } from "lucide-react";
import { useLanguage } from "@/lib/i18n-context";
import { dictionaries } from "@/lib/dictionaries";

export function CtaBanner() {
    const { language } = useLanguage();
    const t = dictionaries[language].cta;

    return (
        <section className="relative overflow-hidden py-20">
            {/* Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_100%]" style={{ animation: "gradient-shift 8s ease infinite" }} />

            {/* Subtle pattern overlay */}
            <div className="absolute inset-0 opacity-10" style={{
                backgroundImage: `radial-gradient(circle at 20% 50%, rgba(255,255,255,0.3) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(255,255,255,0.2) 0%, transparent 50%)`,
            }} />

            {/* Floating decorative elements */}
            <div className="absolute top-6 left-[10%] w-20 h-20 rounded-full bg-white/10 animate-float" />
            <div className="absolute bottom-8 right-[15%] w-14 h-14 rounded-full bg-white/10 animate-float" style={{ animationDelay: "2s" }} />
            <div className="absolute top-1/2 left-[30%] w-8 h-8 rounded-full bg-white/10 animate-float" style={{ animationDelay: "4s" }} />

            <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm mb-6">
                    <Sparkles className="h-4 w-4" />
                    {t.consult}
                </div>
                <h2 className="text-balance text-3xl font-bold text-white md:text-4xl lg:text-5xl leading-tight">
                    {t.title}
                </h2>
                <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80 leading-relaxed">
                    {t.subtitle}
                </p>
                <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                    <a
                        href="#contact"
                        className="group inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 text-base font-bold text-primary shadow-xl transition-all hover:shadow-2xl hover:-translate-y-0.5"
                    >
                        {t.bookBtn}
                        <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </a>
                    <a
                        href="https://line.me/R/ti/p/@106vnkyh"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-xl border-2 border-white/40 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20 hover:-translate-y-0.5"
                    >
                        {t.chatBtn}
                    </a>
                </div>
            </div>
        </section>
    );
}

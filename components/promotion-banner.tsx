"use client";

import React from "react";
import { Download, Sparkles, FileText, ArrowRight } from "lucide-react";
import { useLanguage } from "@/lib/i18n-context";
import { dictionaries } from "@/lib/dictionaries";

export function PromotionBanner() {
    const [mounted, setMounted] = React.useState(false);
    const { language } = useLanguage();
    const t = dictionaries[language].promotion;

    React.useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <section className="relative overflow-hidden py-24">
            {/* Background with Gradient and Pattern */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900">
                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
            </div>

            <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                    {/* Content Side */}
                    <div className="flex-1 text-center lg:text-left">
                        <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-blue-200 ring-1 ring-inset ring-blue-400/20 mb-6 backdrop-blur-sm">
                            <Sparkles className="h-4 w-4 text-yellow-400 animate-pulse" />
                            {t.badge}
                        </div>

                        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl leading-tight mb-6">
                            {t.title}
                        </h2>

                        <p className="text-lg leading-8 text-blue-100 mb-10 max-w-2xl mx-auto lg:mx-0">
                            {t.desc}
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                            <a
                                href="/HR_2026_Transformation.pdf"
                                download
                                className="group relative inline-flex items-center gap-3 rounded-xl bg-white px-8 py-4 text-base font-bold text-indigo-600 shadow-xl transition-all hover:bg-blue-50 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                            >
                                <Download className="h-5 w-5 transition-transform group-hover:-translate-y-1" />
                                {t.btn}
                                <div className="absolute inset-0 rounded-xl ring-2 ring-white/50 group-hover:ring-white"></div>
                            </a>
                            <span className="text-sm text-blue-200/80">
                                {t.note}
                            </span>
                        </div>
                    </div>

                    {/* Visual/Icon Side */}
                    <div className="relative flex-none hidden md:block">
                        {/* Abstract Document visual since we don't have a cover image yet */}
                        <div className="relative w-[300px] h-[400px] bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-2xl border border-white/20 shadow-2xl skew-y-6 rotate-6 transition-transform hover:rotate-0 hover:skew-y-0 duration-500 flex items-center justify-center group">
                            {/* Decorative Lines */}
                            <div className="absolute top-8 left-8 right-8 h-4 bg-white/10 rounded-full"></div>
                            <div className="absolute top-16 left-8 right-20 h-4 bg-white/10 rounded-full"></div>

                            <div className="absolute bottom-20 left-8 right-8 space-y-3">
                                <div className="h-2 bg-white/5 rounded-full w-3/4"></div>
                                <div className="h-2 bg-white/5 rounded-full w-1/2"></div>
                                <div className="h-2 bg-white/5 rounded-full w-full"></div>
                            </div>

                            {/* Center Icon */}
                            <div className="h-24 w-24 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500">
                                <FileText className="h-12 w-12 text-white" />
                            </div>

                            {/* Badge */}
                            <div className="absolute -top-4 -right-4 h-20 w-20 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                                <span className="text-xs font-black text-yellow-900 uppercase text-center leading-tight">
                                    Free<br />PDF
                                </span>
                            </div>
                        </div>

                        {/* Background Glow */}
                        <div className="absolute -inset-4 bg-indigo-500/30 blur-3xl -z-10 rounded-full"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}

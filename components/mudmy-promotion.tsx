"use client";

import React from "react";
import { MapPin, Briefcase, Heart, Newspaper, ArrowRight, Sparkles } from "lucide-react";
import { useLanguage } from "@/lib/i18n-context";
import { dictionaries } from "@/lib/dictionaries";

export function MudmyPromotion() {
    const { language } = useLanguage();
    const t = dictionaries[language].mudmyPromotion;

    return (
        <section className="relative overflow-hidden py-24 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5"></div>
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-400/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-teal-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

            <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                    {/* Image Side */}
                    <div className="relative flex-none w-full lg:w-1/2">
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/50 backdrop-blur-sm">
                            <img
                                src="/images/promote.jpg"
                                alt="Mudmy App Promotion"
                                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-500"
                            />
                            {/* Decorative overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/20 to-transparent"></div>
                            
                            {/* Floating badge */}
                            <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-md rounded-full px-4 py-2 shadow-lg flex items-center gap-2">
                                <Sparkles className="h-4 w-4 text-emerald-600 animate-pulse" />
                                <span className="text-sm font-semibold text-emerald-800">แอปใหม่</span>
                            </div>
                        </div>

                        {/* Background Glow */}
                        <div className="absolute -inset-4 bg-emerald-500/20 blur-3xl -z-10 rounded-full"></div>
                    </div>

                    {/* Content Side */}
                    <div className="flex-1 text-center lg:text-left">
                        <div className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-1.5 text-sm font-medium text-emerald-700 ring-1 ring-inset ring-emerald-400/30 mb-6">
                            <Sparkles className="h-4 w-4 text-emerald-600 animate-pulse" />
                            {t.badge}
                        </div>

                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl leading-tight mb-6">
                            {t.title}
                        </h2>

                        <p className="text-lg leading-8 text-gray-600 mb-10 max-w-2xl mx-auto lg:mx-0">
                            {t.desc}
                        </p>

                        {/* Features Grid */}
                        <div className="grid grid-cols-2 gap-4 mb-10">
                            <div className="flex items-start gap-3 p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-emerald-100">
                                <div className="flex-shrink-0 w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                                    <MapPin className="h-5 w-5 text-emerald-600" />
                                </div>
                                <div className="text-left">
                                    <p className="font-semibold text-gray-900 text-sm">{t.features.marketplace}</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3 p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-emerald-100">
                                <div className="flex-shrink-0 w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center">
                                    <Briefcase className="h-5 w-5 text-teal-600" />
                                </div>
                                <div className="text-left">
                                    <p className="font-semibold text-gray-900 text-sm">{t.features.jobs}</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3 p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-emerald-100">
                                <div className="flex-shrink-0 w-10 h-10 bg-rose-100 rounded-lg flex items-center justify-center">
                                    <Heart className="h-5 w-5 text-rose-600" />
                                </div>
                                <div className="text-left">
                                    <p className="font-semibold text-gray-900 text-sm">{t.features.help}</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3 p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-emerald-100">
                                <div className="flex-shrink-0 w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                                    <Newspaper className="h-5 w-5 text-amber-600" />
                                </div>
                                <div className="text-left">
                                    <p className="font-semibold text-gray-900 text-sm">{t.features.news}</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                            <a
                                href="https://mudmy.app"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 px-8 py-4 text-base font-bold text-white shadow-xl transition-all hover:from-emerald-700 hover:to-teal-700 hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600"
                            >
                                {t.btn}
                                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                                <div className="absolute inset-0 rounded-xl ring-2 ring-white/50 group-hover:ring-white"></div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
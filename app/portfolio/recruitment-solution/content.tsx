"use client";

import { Navigation } from "@/components/navigation";
import { SiteFooter } from "@/components/site-footer";
import {
    Laptop,
    UserCheck,
    BarChart3,
    Play,
    Sparkles,
    ArrowLeft,
    CheckCircle2,
} from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/lib/i18n-context";
import { dictionaries } from "@/lib/dictionaries";

export function RecruitmentSolutionContent() {
    const { language } = useLanguage();
    // @ts-ignore
    const t = dictionaries[language].recruitmentSolution;

    const featuresList = [
        {
            id: "application",
            icon: Laptop,
            gradient: "from-blue-500 to-cyan-400",
        },
        {
            id: "screening",
            icon: UserCheck,
            gradient: "from-violet-500 to-purple-400",
        },
        {
            id: "dashboard",
            icon: BarChart3,
            gradient: "from-emerald-500 to-teal-400",
        },
    ];

    return (
        <div className="bg-white min-h-screen">
            <Navigation />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
                {/* Animated Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950" />
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-screen filter blur-3xl animate-pulse" />
                    <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full mix-blend-screen filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-500 rounded-full mix-blend-screen filter blur-3xl animate-pulse" style={{ animationDelay: '4s' }} />
                </div>

                {/* Grid Pattern */}
                <div className="absolute inset-0 opacity-5" style={{
                    backgroundImage: 'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)',
                    backgroundSize: '40px 40px',
                }} />

                <div className="mx-auto max-w-7xl px-6 relative z-10">
                    <Link
                        href="/#portfolio"
                        className="inline-flex items-center gap-2 mb-8 text-blue-300 hover:text-white transition-colors text-sm font-medium"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        {t.backToPortfolio}
                    </Link>

                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 rounded-full bg-blue-500/20 border border-blue-500/30 px-4 py-1.5 text-sm font-semibold text-blue-300 mb-6">
                                <Sparkles className="h-4 w-4" />
                                {t.badge}
                            </div>
                            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl leading-tight">
                                {t.hero.titleStart}
                                <span className="block bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                                    {t.hero.titleHighlight}
                                </span>
                            </h1>
                            <p className="mt-6 text-lg text-blue-100/80 leading-relaxed max-w-xl">
                                {t.hero.desc}
                            </p>
                            <div className="mt-8 flex flex-wrap gap-4">
                                <a
                                    href="#video-demo"
                                    className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 px-8 py-4 text-base font-bold text-white shadow-lg shadow-blue-500/25 transition-all hover:shadow-xl hover:shadow-blue-500/40 hover:-translate-y-0.5"
                                >
                                    <Play className="h-5 w-5" />
                                    {t.hero.playBtn}
                                </a>
                            </div>
                        </div>

                        {/* Hero Visual - Abstract Representation of Recruitment */}
                        <div className="relative">
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-blue-500/20 border border-white/10">
                                <div className="aspect-video bg-gradient-to-br from-blue-900/50 to-purple-900/50 backdrop-blur-sm flex items-center justify-center p-8">
                                    <div className="grid grid-cols-2 gap-4 w-full max-w-md">
                                        <div className="bg-white/10 p-4 rounded-xl border border-white/5 backdrop-blur-md">
                                            <div className="h-2 w-16 bg-blue-400 rounded-full mb-2"></div>
                                            <div className="h-2 w-10 bg-white/20 rounded-full"></div>
                                        </div>
                                        <div className="bg-white/10 p-4 rounded-xl border border-white/5 backdrop-blur-md translate-y-4">
                                            <div className="h-2 w-16 bg-purple-400 rounded-full mb-2"></div>
                                            <div className="h-2 w-10 bg-white/20 rounded-full"></div>
                                        </div>
                                        <div className="bg-white/10 p-4 rounded-xl border border-white/5 backdrop-blur-md -translate-y-2">
                                            <div className="h-2 w-16 bg-emerald-400 rounded-full mb-2"></div>
                                            <div className="h-2 w-10 bg-white/20 rounded-full"></div>
                                        </div>
                                        <div className="bg-white/10 p-4 rounded-xl border border-white/5 backdrop-blur-md translate-y-2">
                                            <div className="h-2 w-16 bg-orange-400 rounded-full mb-2"></div>
                                            <div className="h-2 w-10 bg-white/20 rounded-full"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Video Section */}
            <section id="video-demo" className="py-20 bg-gray-900 relative">
                <div className="mx-auto max-w-5xl px-6 relative z-10">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-white md:text-4xl">
                            {t.video.title}
                        </h2>
                    </div>
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-blue-500/20 border border-gray-700 aspect-video">
                        <iframe
                            className="w-full h-full"
                            src={`https://www.youtube.com/embed/${t.video.youtubeId}`}
                            title="Recruitment Solution Video"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 bg-gray-50 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full filter blur-3xl opacity-30" />
                <div className="mx-auto max-w-7xl px-6 relative z-10">
                    <div className="text-center mb-16">
                        <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-wider text-primary">
                            {t.features.label}
                        </span>
                        <h2 className="mt-4 text-3xl font-bold text-gray-900 md:text-4xl">
                            {t.features.title}
                        </h2>
                        <p className="mx-auto mt-4 max-w-2xl text-gray-500 leading-relaxed">
                            {t.features.desc}
                        </p>
                    </div>

                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {featuresList.map((feature, index) => {
                            // @ts-ignore
                            const item = t.features.items[feature.id];
                            return (
                                <div
                                    key={feature.id}
                                    className="group relative bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500"
                                >
                                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                        <feature.icon className="h-7 w-7 text-white" />
                                    </div>
                                    <h3 className="font-bold text-gray-900 text-xl mb-2">{item.title}</h3>
                                    <p className="text-sm font-semibold text-primary mb-4 uppercase tracking-wide">{item.subtitle}</p>
                                    <ul className="space-y-3">
                                        {item.items.map((subItem: string, idx: number) => (
                                            <li key={idx} className="flex items-start gap-3 text-gray-600">
                                                <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                                                <span className="text-sm leading-relaxed">{subItem}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-white">
                <div className="mx-auto max-w-4xl px-6 text-center">
                    <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
                        {t.cta.title}
                    </h2>
                    <p className="mx-auto mt-4 max-w-2xl text-gray-500 leading-relaxed">
                        {t.cta.desc}
                    </p>
                    <div className="mt-8 flex flex-wrap justify-center gap-4">
                        <a
                            href="/#contact"
                            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-primary to-blue-600 px-8 py-4 text-base font-bold text-white shadow-lg shadow-primary/25 transition-all hover:shadow-xl hover:-translate-y-0.5"
                        >
                            {t.cta.consultBtn}
                        </a>
                        <Link
                            href="/#portfolio"
                            className="inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-8 py-4 text-base font-semibold text-gray-700 transition-all hover:border-primary hover:text-primary hover:shadow-md"
                        >
                            <ArrowLeft className="h-4 w-4" />
                            {t.cta.backBtn}
                        </Link>
                    </div>
                </div>
            </section>

            <SiteFooter />
        </div>
    );
}

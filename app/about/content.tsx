"use client";

import {
    Trophy,
    Users,
    Target,
    Lightbulb,
    ArrowRight,
    ShieldCheck,
    Zap,
    Cpu,
    LayoutList,
    UserCheck,
    LineChart,
    Repeat
} from "lucide-react";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/lib/i18n-context";
import { dictionaries } from "@/lib/dictionaries";

export default function AboutContent() {
    const { language } = useLanguage();
    const t = dictionaries[language].about;
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    // Icons mapping
    const coreValueIcons = [Target, Cpu, ShieldCheck, UserCheck, Zap];

    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="relative py-28 lg:py-36 overflow-hidden bg-gray-50">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent pointer-events-none" />
                <div className="mx-auto max-w-7xl px-6 relative z-10">
                    <div className="text-center max-w-4xl mx-auto">
                        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl heading-accent">
                            {t.hero.title}
                        </h1>
                        <p className="mt-8 text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                            {t.hero.description}
                        </p>
                    </div>
                </div>
            </section>

            {/* Who We Are Section */}
            <section className="py-24 bg-white">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="grid gap-16 lg:grid-cols-2 items-center">
                        <div className="relative">
                            <div className="absolute -top-10 -left-10 w-80 h-80 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse-soft" />
                            <div className="relative rounded-3xl overflow-hidden shadow-2xl skew-y-1 transform transition-all duration-700 hover:skew-y-0 card-gradient-border">
                                <Image
                                    src="/about-poster.png"
                                    alt="Strategic HR Consulting Thailand"
                                    width={1000}
                                    height={1200}
                                    className="w-full h-auto object-cover"
                                    priority
                                />
                            </div>
                        </div>

                        <div className="space-y-10">
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">{t.whoWeAre.title}</h2>
                                <div className="w-20 h-1.5 bg-gradient-to-r from-primary to-secondary rounded-full mb-8" />
                                <p className="text-lg text-gray-700 leading-relaxed">
                                    {t.whoWeAre.p1}
                                </p>
                                <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                                    {t.whoWeAre.p2}
                                </p>
                            </div>

                            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 lg:gap-12">
                                {t.whoWeAre.stats.map((stat, i) => (
                                    <div key={i} className="group flex flex-col items-start gap-1">
                                        <div className={`text-4xl lg:text-5xl font-black bg-clip-text text-transparent bg-gradient-to-r tracking-tighter transition-transform group-hover:scale-110 duration-500 ${i === 0 ? "from-blue-600 to-primary" :
                                            i === 1 ? "from-primary to-indigo-600" :
                                                "from-indigo-600 to-purple-600"
                                            }`}>
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
                </div>
            </section>

            {/* Vision & Mission */}
            <section className="py-24 bg-gray-50">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="grid gap-12 lg:grid-cols-2">
                        <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                            <div className="h-14 w-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-8">
                                <Target className="h-7 w-7" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">{t.visionMission.visionTitle}</h3>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                {t.visionMission.visionDesc}
                            </p>
                        </div>
                        <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                            <div className="h-14 w-14 bg-secondary/10 rounded-2xl flex items-center justify-center text-secondary mb-8">
                                <Lightbulb className="h-7 w-7" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">{t.visionMission.missionTitle}</h3>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                {t.visionMission.missionDesc}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* PPT Model Section */}
            <section className="py-28 bg-white relative overflow-hidden">
                <div className="absolute bottom-0 right-0 w-80 h-80 gradient-blob gradient-blob-cyan opacity-10" />
                <div className="mx-auto max-w-7xl px-6 relative z-10">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">{t.pptModel.title}</h2>
                        <p className="text-xl text-gray-500 max-w-2xl mx-auto">
                            {t.pptModel.subtitle}
                        </p>
                    </div>

                    <div className="grid gap-10 md:grid-cols-3">
                        {/* People */}
                        <div className="group p-8 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-500">
                            <div className="h-16 w-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-500">
                                <Users className="h-8 w-8" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-6 font-primary">{t.pptModel.peopleTitle}</h3>
                            <ul className="space-y-4 text-gray-600 text-base">
                                {t.pptModel.peopleItems.map((item: string, i: number) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <div className="h-2 w-2 rounded-full bg-blue-400" /> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Process */}
                        <div className="group p-8 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-500 scale-105 z-10">
                            <div className="h-16 w-16 bg-primary/5 text-primary rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white transition-colors duration-500">
                                <LayoutList className="h-8 w-8" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-6 font-primary">{t.pptModel.processTitle}</h3>
                            <ul className="space-y-4 text-gray-600 text-base">
                                {t.pptModel.processItems.map((item: string, i: number) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <div className="h-2 w-2 rounded-full bg-primary/40" /> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Technology */}
                        <div className="group p-8 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-500">
                            <div className="h-16 w-16 bg-cyan-50 text-cyan-600 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-cyan-600 group-hover:text-white transition-colors duration-500">
                                <Cpu className="h-8 w-8" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-6 font-primary">{t.pptModel.techTitle}</h3>
                            <ul className="space-y-4 text-gray-600 text-base">
                                {t.pptModel.techItems.map((item: string, i: number) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <div className="h-2 w-2 rounded-full bg-cyan-400" /> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="mt-16 p-8 bg-blue-50/50 rounded-2xl text-center">
                        <p className="text-gray-700 leading-relaxed font-medium">
                            {t.pptModel.footer}
                        </p>
                    </div>
                </div>
            </section>

            {/* Differentiation Section */}
            <section className="py-24 bg-gray-900 text-white overflow-hidden relative">
                <div className="mx-auto max-w-7xl px-6 relative z-10">
                    <div className="grid gap-16 lg:grid-cols-2 lg:gap-24 items-center">
                        <div>
                            <h2 className="text-3xl font-bold mb-8">{t.differentiation.title}</h2>
                            <p className="text-gray-400 text-lg mb-12">
                                {t.differentiation.subtitle}
                            </p>
                            <div className="space-y-8">
                                {t.differentiation.items.map((item, i) => (
                                    <div key={i} className="flex gap-5">
                                        <div className="mt-1 flex-shrink-0 h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                                            <Zap className="h-3.5 w-3.5" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-xl mb-1">{item.title}</h4>
                                            <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative group">
                            {/* Animated Background Rings */}
                            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                <div className="w-[120%] h-[120%] border border-white/5 rounded-full animate-ping-slow" />
                                <div className="absolute w-[140%] h-[140%] border border-white/5 rounded-full animate-ping-slow" style={{ animationDelay: "1s" }} />
                            </div>

                            <div className="aspect-square relative rounded-[40px] overflow-hidden border border-white/10 shadow-3xl bg-gradient-to-br from-gray-800 via-gray-900 to-black p-12 flex items-center justify-center transition-all duration-700 group-hover:scale-[1.02] group-hover:shadow-primary/20">
                                {/* Glassmorphism Overlay */}
                                <div className="absolute inset-0 bg-white/[0.02] backdrop-blur-3xl" />

                                <div className="relative z-10 text-center">
                                    <div className="relative inline-block mb-10">
                                        <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full animate-pulse" />
                                        <ShieldCheck className="h-36 w-36 text-primary relative z-10 animate-fade-in transition-transform duration-700 group-hover:scale-110" />
                                    </div>
                                    <div className="text-4xl lg:text-5xl font-black mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-white/40">
                                        Strategic Trust
                                    </div>
                                    <p className="text-gray-400 text-lg leading-relaxed max-w-sm mx-auto font-medium">
                                        Your vision, our expertise, integrated together for sustainable growth.
                                    </p>
                                </div>

                                {/* Floating Icons */}
                                <div className="absolute top-10 right-10 p-4 bg-white/5 rounded-2xl backdrop-blur-md border border-white/10 group-hover:translate-y-[-10px] transition-transform duration-700">
                                    <Zap className="h-8 w-8 text-primary shadow-glow" />
                                </div>
                                <div className="absolute bottom-10 left-10 p-4 bg-white/5 rounded-2xl backdrop-blur-md border border-white/10 group-hover:translate-y-[10px] transition-transform duration-700 delay-100">
                                    <Repeat className="h-8 w-8 text-secondary shadow-glow" />
                                </div>

                                {/* Decorative Gradient Light */}
                                <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/20 blur-[100px] rounded-full" />
                                <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-secondary/20 blur-[100px] rounded-full" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Values Section */}
            <section className="py-28 bg-white">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl font-bold text-gray-900">{t.coreValues.title}</h2>
                    </div>

                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {t.coreValues.items.map((value, i) => {
                            const Icon = coreValueIcons[i] || Zap;
                            return (
                                <div key={i} className="group bg-gray-50 p-10 rounded-3xl border border-gray-100 hover:bg-white hover:shadow-xl hover:translate-y-[-4px] transition-all duration-300">
                                    <div className="h-14 w-14 bg-white rounded-2xl flex items-center justify-center text-primary mb-8 shadow-sm group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                        <Icon className="h-7 w-7" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                                    <p className="text-gray-500 leading-relaxed">{value.desc}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="py-24 bg-gray-50">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl font-bold text-gray-900 mb-12">{t.whyUs.title}</h2>
                        <div className="grid gap-6 text-left">
                            {t.whyUs.items.map((item, i) => (
                                <div key={i} className="bg-white p-6 rounded-2xl flex items-start gap-5 border border-gray-100 shadow-sm">
                                    <CheckCircleIcon className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-bold text-gray-900 mb-1">{item.title}</h4>
                                        <p className="text-gray-500">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-primary relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                    <Cpu className="absolute top-10 right-10 h-64 w-64 text-white" />
                    <Users className="absolute bottom-10 left-10 h-64 w-64 text-white" />
                </div>
                <div className="mx-auto max-w-7xl px-6 relative z-10 text-center text-white">
                    <h2 className="text-3xl font-bold mb-8 md:text-5xl">{t.cta.title}</h2>
                    <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">
                        {t.cta.subtitle}
                    </p>
                    <Link
                        href="/#contact"
                        className="inline-flex items-center gap-2 rounded-full bg-white px-10 py-4 text-lg font-bold text-primary hover:bg-gray-100 transition-all hover:scale-105 shadow-xl"
                    >
                        {t.cta.btn} <ArrowRight className="h-5 w-5" />
                    </Link>
                </div>
            </section>
        </div>
    );
}

function CheckCircleIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
            <polyline points="22 4 12 14.01 9 11.01" />
        </svg>
    );
}

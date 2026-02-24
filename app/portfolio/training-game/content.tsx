"use client";

import {
    Gamepad2,
    MessageCircle,
    BarChart3,
    Settings2,
    Play,
    Sparkles,
    Target,
    BrainCircuit,
    ArrowLeft,
} from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/lib/i18n-context";
import { dictionaries } from "@/lib/dictionaries";

export function TrainingGameContent() {
    const { language } = useLanguage();
    const t = dictionaries[language].trainingGame;

    const featuresList = [
        {
            id: "scenario",
            icon: Gamepad2,
            gradient: "from-blue-500 to-cyan-400",
        },
        {
            id: "guidance",
            icon: MessageCircle,
            gradient: "from-violet-500 to-purple-400",
        },
        {
            id: "tracking",
            icon: BarChart3,
            gradient: "from-emerald-500 to-teal-400",
        },
        {
            id: "designer",
            icon: Settings2,
            gradient: "from-orange-500 to-amber-400",
        },
    ];

    const stepsList = [
        {
            id: "step1",
            step: "01",
            color: "from-blue-600 to-blue-400",
        },
        {
            id: "step2",
            step: "02",
            color: "from-violet-600 to-violet-400",
        },
        {
            id: "step3",
            step: "03",
            color: "from-emerald-600 to-emerald-400",
        },
        {
            id: "step4",
            step: "04",
            color: "from-amber-600 to-amber-400",
        },
    ];

    return (
        <div className="bg-white">

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
                                    href="#play-demo"
                                    className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 px-8 py-4 text-base font-bold text-white shadow-lg shadow-blue-500/25 transition-all hover:shadow-xl hover:shadow-blue-500/40 hover:-translate-y-0.5"
                                >
                                    <Play className="h-5 w-5" />
                                    {t.hero.playBtn}
                                </a>
                            </div>
                        </div>

                        {/* Hero Visual */}
                        <div className="relative">
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-blue-500/20 border border-white/10">
                                <div className="aspect-video bg-gradient-to-br from-blue-900/50 to-purple-900/50 backdrop-blur-sm flex items-center justify-center">
                                    <div className="text-center space-y-4 p-8">
                                        <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center shadow-lg shadow-blue-500/30">
                                            <Gamepad2 className="h-10 w-10 text-white" />
                                        </div>
                                        <div>
                                            <h3 className="text-white font-bold text-xl">Foryou Hotel</h3>
                                            <p className="text-blue-200/70 text-sm mt-1">Service Mind Training Game</p>
                                        </div>
                                        <div className="flex justify-center gap-6 pt-2">
                                            <div className="text-center">
                                                <div className="text-2xl font-bold text-cyan-300">5</div>
                                                <div className="text-xs text-blue-200/60">{t.stats.scenarios}</div>
                                            </div>
                                            <div className="text-center">
                                                <div className="text-2xl font-bold text-cyan-300">15+</div>
                                                <div className="text-xs text-blue-200/60">{t.stats.questions}</div>
                                            </div>
                                            <div className="text-center">
                                                <div className="text-2xl font-bold text-cyan-300">100%</div>
                                                <div className="text-xs text-blue-200/60">{t.stats.interactive}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Floating badges */}
                            <div className="absolute -bottom-3 -left-3 bg-white rounded-xl px-4 py-2.5 shadow-xl flex items-center gap-2">
                                <Target className="h-5 w-5 text-blue-600" />
                                <span className="text-sm font-bold text-gray-900">Skill Assessment</span>
                            </div>
                            <div className="absolute -top-3 -right-3 bg-white rounded-xl px-4 py-2.5 shadow-xl flex items-center gap-2">
                                <BrainCircuit className="h-5 w-5 text-purple-600" />
                                <span className="text-sm font-bold text-gray-900">AI Feedback</span>
                            </div>
                        </div>
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

                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {featuresList.map((feature, index) => {
                            // @ts-ignore
                            const item = t.features.items[feature.id];
                            return (
                                <div
                                    key={feature.id}
                                    className="group relative bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500"
                                >
                                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                        <feature.icon className="h-7 w-7 text-white" />
                                    </div>
                                    <h3 className="font-bold text-gray-900 text-lg mb-1">{item.title}</h3>
                                    <p className="text-sm font-medium text-primary mb-3">{item.subtitle}</p>
                                    <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="py-20 bg-white">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
                            {t.howItWorks.title}
                        </h2>
                        <p className="mx-auto mt-4 max-w-2xl text-gray-500">
                            {t.howItWorks.desc}
                        </p>
                    </div>

                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                        {stepsList.map((item) => {
                            // @ts-ignore
                            const stepData = t.howItWorks.steps[item.id];
                            return (
                                <div key={item.step} className="relative">
                                    <div className={`text-7xl font-black bg-gradient-to-b ${item.color} bg-clip-text text-transparent opacity-20 mb-4 leading-none`}>
                                        {item.step}
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900 -mt-4 mb-2">{stepData.title}</h3>
                                    <p className="text-sm text-gray-500 leading-relaxed">{stepData.desc}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Playable Demo Section */}
            <section id="play-demo" className="py-20 bg-gradient-to-b from-slate-900 to-slate-800 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500 rounded-full filter blur-3xl" />
                    <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-500 rounded-full filter blur-3xl" />
                </div>

                <div className="mx-auto max-w-7xl px-6 relative z-10">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 rounded-full bg-blue-500/20 border border-blue-500/30 px-4 py-1.5 text-sm font-semibold text-blue-300 mb-4">
                            <Play className="h-4 w-4" />
                            {t.demo.badge}
                        </div>
                        <h2 className="text-3xl font-bold text-white md:text-4xl">
                            {t.demo.title}
                        </h2>
                        <p className="mx-auto mt-4 max-w-2xl text-blue-200/70">
                            {t.demo.desc}
                        </p>
                    </div>

                    <div className="relative max-w-5xl mx-auto">
                        {/* Browser Frame */}
                        <div className="rounded-t-2xl bg-gray-800 border border-gray-700 px-4 py-3 flex items-center gap-2">
                            <div className="flex gap-1.5">
                                <div className="w-3 h-3 rounded-full bg-red-500" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                                <div className="w-3 h-3 rounded-full bg-green-500" />
                            </div>
                            <div className="flex-1 bg-gray-700 rounded-lg px-4 py-1.5 text-xs text-gray-400 font-mono ml-4">
                                phichaya.space/game-demo
                            </div>
                        </div>
                        <div className="rounded-b-2xl overflow-hidden border-x border-b border-gray-700 shadow-2xl shadow-blue-500/10">
                            <iframe
                                src={`/game-demo/index.html?lang=${language}`}
                                title="Service Mind Training Game Demo"
                                className="w-full bg-black"
                                style={{ height: '80vh', minHeight: '400px' }}
                                allow="autoplay; fullscreen"
                                sandbox="allow-scripts allow-same-origin allow-popups"
                            />
                        </div>
                    </div>

                    <p className="text-center text-sm text-blue-200/50 mt-6">
                        {t.demo.hint}
                    </p>
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
                        <Link
                            href="/#contact"
                            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-primary to-blue-600 px-8 py-4 text-base font-bold text-white shadow-lg shadow-primary/25 transition-all hover:shadow-xl hover:-translate-y-0.5"
                        >
                            {t.cta.consultBtn}
                        </Link>
                        <Link
                            href="/"
                            className="inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-8 py-4 text-base font-semibold text-gray-700 transition-all hover:border-primary hover:text-primary hover:shadow-md"
                        >
                            <ArrowLeft className="h-4 w-4" />
                            {t.cta.backBtn}
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

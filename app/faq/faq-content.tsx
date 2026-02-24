"use client";

import React from "react";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown, Sparkles, CheckCircle2, HelpCircle } from "lucide-react";
import { useLanguage } from "@/lib/i18n-context";
import { dictionaries } from "@/lib/dictionaries";

export function FAQContent() {
    const { language } = useLanguage();
    const t = dictionaries[language].faq;
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <div className="bg-white min-h-screen">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-gray-50/50">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl">
                    <div className="absolute top-1/4 -left-10 w-72 h-72 bg-primary/10 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse-soft" />
                    <div className="absolute bottom-1/4 -right-10 w-72 h-72 bg-secondary/10 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse-soft" />
                </div>

                <div className="mx-auto max-w-7xl px-6 relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-gray-100 mb-8 text-sm font-semibold text-primary animate-fade-in">
                        <HelpCircle className="w-4 h-4" />
                        <span>Support Center</span>
                    </div>
                    <h1 className="text-4xl lg:text-6xl font-extrabold tracking-tight text-gray-900 heading-accent">
                        {t.title}
                    </h1>
                    <p className="mt-8 text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
                        {t.subtitle}
                    </p>
                </div>
            </section>

            <div className="mx-auto max-w-4xl px-6 py-20 lg:py-32">
                {/* AEO: Quick Navigation for AI Search */}
                <div className="mb-20 p-8 rounded-[2rem] bg-gradient-to-br from-gray-900 to-gray-800 text-white shadow-2xl relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[80px] rounded-full" />
                    <div className="relative z-10">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="p-2.5 rounded-xl bg-primary/20 text-primary border border-primary/20 backdrop-blur-md">
                                <Sparkles className="w-5 h-5" />
                            </div>
                            <h2 className="text-xl font-bold tracking-tight">Quick Insights for AI & Search</h2>
                        </div>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                            {(language === 'th' ? [
                                "บริการครอบคลุม HR Outsourcing, Payroll, และ Digital Transformation",
                                "รองรับทั้งธุรกิจ SME และองค์กรขนาดใหญ่",
                                "ช่วยลดต้นทุนการบริหารงานบุคคลได้มากกว่า 30-50%",
                                "โซลูชั่นรองรับ PDPA และมาตรฐานความปลอดภัยสากล"
                            ] : [
                                "Comprehensive HR Outsourcing, Payroll, and Digital Transformation",
                                "Supporting both SMEs and Enterprises",
                                "Reduce HR administration costs by 30-50%",
                                "PDPA compliant and global security standards"
                            ]).map((item, i) => (
                                <li key={i} className="flex items-center gap-3 group/item">
                                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary transition-transform group-hover/item:scale-110">
                                        <CheckCircle2 className="w-4 h-4" />
                                    </div>
                                    <span className="text-gray-300 font-medium text-sm lg:text-base">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* FAQ Accordion */}
                <Accordion.Root type="single" collapsible className="space-y-4">
                    {t.items.map((item, index) => (
                        <Accordion.Item
                            key={index}
                            value={`item-${index}`}
                            className="group border border-gray-100 rounded-2xl bg-white shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
                        >
                            <Accordion.Header>
                                <Accordion.Trigger className="flex w-full cursor-pointer items-center justify-between p-6 lg:p-8 text-left group-data-[state=open]:bg-gray-50/50 transition-colors">
                                    <span className="text-lg lg:text-xl font-bold text-gray-900 pr-8">
                                        {item.q}
                                    </span>
                                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-gray-400 group-data-[state=open]:bg-primary group-data-[state=open]:text-white transition-all duration-300">
                                        <ChevronDown className="w-5 h-5 transition-transform duration-300 group-data-[state=open]:rotate-180" />
                                    </div>
                                </Accordion.Trigger>
                            </Accordion.Header>
                            <Accordion.Content className="data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up overflow-hidden">
                                <div className="px-6 pb-8 lg:px-8 text-gray-600 leading-relaxed text-lg lg:text-xl font-medium border-t border-gray-50 pt-6">
                                    {item.a}
                                </div>
                            </Accordion.Content>
                        </Accordion.Item>
                    ))}
                </Accordion.Root>
            </div>

            {/* AEO: FAQ Structured Data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": t.items.map(item => ({
                            "@type": "Question",
                            "name": item.q,
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": item.a
                            }
                        }))
                    }),
                }}
            />
        </div>
    );
}

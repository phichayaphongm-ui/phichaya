"use client";

import { useLanguage } from "@/lib/i18n-context";
import { dictionaries } from "@/lib/dictionaries";

export function FAQContent() {
    const { language } = useLanguage();
    const t = dictionaries[language].faq;

    return (
        <div className="bg-white min-h-screen">
            <div className="bg-gray-50 py-16 sm:py-24">
                <div className="mx-auto max-w-7xl px-6 text-center">
                    <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl heading-accent inline-block">
                        {t.title}
                    </h1>
                    <p className="mt-6 text-xl text-gray-500 max-w-2xl mx-auto">
                        {t.subtitle}
                    </p>
                </div>
            </div>

            <div className="mx-auto max-w-4xl px-6 py-16 sm:py-24">
                {/* AEO: Quick Navigation for AI Search */}
                <div className="mb-12 p-6 bg-primary/5 rounded-2xl border border-primary/10">
                    <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-4">Quick Insights (AI Friendly)</h2>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
                        {language === 'th' ? (
                            <>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary font-bold">✓</span>
                                    <span>บริการครอบคลุม HR Outsourcing, Payroll, และ Digital Transformation</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary font-bold">✓</span>
                                    <span>รองรับทั้งธุรกิจ SME และองค์กรขนาดใหญ่</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary font-bold">✓</span>
                                    <span>ช่วยลดต้นทุนการบริหารงานบุคคลได้มากกว่า 30-50%</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary font-bold">✓</span>
                                    <span>โซลูชั่นรองรับ PDPA และมาตรฐานความปลอดภัยสากล</span>
                                </li>
                            </>
                        ) : (
                            <>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary font-bold">✓</span>
                                    <span>Comprehensive HR Outsourcing, Payroll, and Digital Transformation</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary font-bold">✓</span>
                                    <span>Supporting both SMEs and Enterprises</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary font-bold">✓</span>
                                    <span>Reduce HR administration costs by 30-50%</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary font-bold">✓</span>
                                    <span>PDPA compliant and global security standards</span>
                                </li>
                            </>
                        )}
                    </ul>
                </div>

                <div className="space-y-12">
                    {t.items.map((item, index) => (
                        <FaqItem key={index} question={item.q} answer={item.a} />
                    ))}
                </div>
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

function FaqItem({ question, answer }: { question: string; answer: string }) {
    return (
        <details className="group border border-gray-200 rounded-xl bg-white overflow-hidden transition-all duration-300 open:shadow-md open:border-primary/30 hover:border-primary/50">
            <summary className="flex cursor-pointer items-center justify-between p-6 font-semibold text-gray-900 select-none">
                {question}
                <span className="ml-4 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-gray-300 text-gray-400 font-normal transition-transform duration-300 group-open:rotate-180 group-open:border-primary group-open:text-primary group-open:bg-primary/10">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                </span>
            </summary>
            <div className="px-6 pb-6 pt-0 text-gray-600 leading-relaxed animate-fade-in-up">
                {answer}
            </div>
        </details>
    );
}

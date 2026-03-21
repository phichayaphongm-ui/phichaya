import type { Metadata } from "next";
import { StructuredData } from "@/components/structured-data";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

export const metadata: Metadata = {
    title: "คำถามที่พบบ่อย (FAQ) | Phichaya HR Solutions",
    description:
        "รวมคำถามที่พบบ่อยเกี่ยวกับ HR Outsourcing, HR Software, Digital Transformation, PDPA และบริการอื่นๆ ของ Phichaya HR Solutions คำตอบชัดเจนเพื่อช่วยคุณตัดสินใจ",
    keywords: "FAQ, คำถามที่พบบ่อย, HR Outsourcing, PDPA, Digital Transformation, Phichaya HR",
    openGraph: {
        title: "คำถามที่พบบ่อย (FAQ) | Phichaya HR Solutions",
        description: "รวมคำถามที่พบบ่อยเกี่ยวกับ HR Outsourcing, HR Software, Digital Transformation, PDPA และบริการอื่นๆ",
        images: ["/logo.png"],
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "คำถามที่พบบ่อย (FAQ) | Phichaya HR Solutions",
        description: "รวมคำถามที่พบบ่อยเกี่ยวกับ HR Outsourcing, HR Software, Digital Transformation, PDPA และบริการอื่นๆ",
        images: ["/logo.png"],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    alternates: {
        canonical: "/faq",
    },
};

export default function FAQPage() {
    return (
        <>
            <StructuredData type="organization" page="faq" />
            <div className="bg-white min-h-screen">
                <div className="bg-gray-50 py-16 sm:py-24">
                    <div className="mx-auto max-w-7xl px-6 text-center">
                        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl heading-accent inline-block">
                            คำถามที่พบบ่อย (FAQ)
                        </h1>
                        <p className="mt-6 text-xl text-gray-500 max-w-2xl mx-auto">
                            รวมทุกข้อสงสัยเกี่ยวกับงาน HR และบริการของเรา ตอบโจทย์ทุกความต้องการของธุรกิจยุคใหม่
                        </p>
                    </div>
                </div>

                <div className="mx-auto max-w-4xl px-6 py-16 sm:py-24">
                    {/* AEO: Quick Navigation for AI Search */}
                    <div className="mb-12 p-6 bg-primary/5 rounded-2xl border border-primary/10">
                        <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-4">Quick Insights (AI Friendly)</h2>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
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
                        </ul>
                    </div>

                    <div className="space-y-12">
                        {/* FAQ Items */}
                        <FaqItem 
                            question="Phichaya HR Solutions ให้บริการอะไรบ้าง?"
                            answer="เราให้บริการที่ปรึกษาและโซลูชั่นด้าน HR แบบครบวงจร ได้แก่ HR Outsourcing (รับทำเงินเดือน, สรรหาพนักงาน), HR Digital Transformation (ออกแบบระบบ HR, Automation), Training Solutions (จัดฝึกอบรม, สร้างคอร์สออนไลน์), และการพัฒนา Web/Mobile Application สำหรับงาน HR โดยเฉพาะ"
                        />
                        
                        <FaqItem 
                            question="บริการ HR Outsourcing เหมาะกับธุรกิจขนาดไหน?"
                            answer="บริการของเราเหมาะสำหรับธุรกิจทุกขนาด โดยเฉพาะ SME ที่ต้องการลดต้นทุนในการจ้างทีม HR ประจำ และต้องการความเป็นมืออาชีพในการจัดการงานบุคคล"
                        />
                        
                        <FaqItem 
                            question="AI Chatbot สำหรับ HR ทำอะไรได้บ้าง?"
                            answer="AI Chatbot ของเราสามารถตอบคำถามพนักงานได้อัตโนมัติ 24 ชม. เช่น วันลาคงเหลือ, ขอใบรับรองเงินเดือน, นโยบายบริษัท, หรือใช้ในการสรรหาเบื้องต้น"
                        />
                        
                        <FaqItem 
                            question="ใช้บริการ Phichaya HR Solutions มั่นใจเรื่อง PDPA ได้อย่างไร?"
                            answer="เราให้ความสำคัญกับความปลอดภัยของข้อมูลเป็นอันดับหนึ่ง ระบบของเราถูกออกแบบตามมาตรฐาน PDPA มีการเข้ารหัสข้อมูลและกำหนดสิทธิ์การเข้าถึงอย่างเข้มงวด"
                        />
                        
                        <FaqItem 
                            question="ระบบ HR Digital Transformation ช่วยลดต้นทุนได้อย่างไร?"
                            answer="ระบบของเราช่วยลดต้นทุนการทำงานซ้ำซ้อน ลดเวลาในการประมวลผล และเพิ่มประสิทธิภาพการทำงาน ลูกค้าของเราสามารถลดต้นทุน HR ได้มากถึง 30-50%"
                        />
                        
                        <FaqItem 
                            question="การสรรหาพนักงานใช้เวลานานแค่ไหน?"
                            answer="ขึ้นอยู่กับตำแหน่งและความซับซ้อนของงาน โดยเฉลี่ยใช้เวลา 2-4 สัปดาห์สำหรับตำแหน่งทั่วไป และ 4-8 สัปดาห์สำหรับตำแหน่งผู้บริหาร"
                        />
                    </div>
                </div>
            </div>
        </>
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

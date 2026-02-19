import type { Metadata } from "next";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"; // Assuming you have shadcn accordion or I will build a simple one. 
// Wait, I don't have shadcn components installed in this context properly or I need to check. 
// Standard html/css accordion is safer to implement directly to avoid dependency issues if not present.
// I'll implement a custom Accordion component inside this file for simplicity and zero-dependency.

export const metadata: Metadata = {
    title: "คำถามที่พบบ่อย (FAQ) | Phichaya HR Solutions",
    description:
        "รวมคำถามที่พบบ่อยเกี่ยวกับ HR Outsourcing, HR Software, Digital Transformation, PDPA และบริการอื่นๆ ของ Phichaya HR Solutions คำตอบชัดเจนเพื่อช่วยคุณตัดสินใจ",
};

export default function FAQPage() {
    return (
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
                <div className="space-y-12">

                    {/* Section 1: Services */}
                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                            <span className="w-2 h-8 bg-primary rounded-full" />
                            บริการของเรา
                        </h2>
                        <div className="space-y-4">
                            <FaqItem
                                question="Phichaya HR Solutions ให้บริการอะไรบ้าง?"
                                answer="เราให้บริการที่ปรึกษาและโซลูชั่นด้าน HR แบบครบวงจร ได้แก่ HR Outsourcing (รับทำเงินเดือน, สรรหาพนักงาน), HR Digital Transformation (ออกแบบระบบ HR, Automation), Training Solutions (จัดฝึกอบรม, สร้างคอร์สออนไลน์), และการพัฒนา Web/Mobile Application สำหรับงาน HR โดยเฉพาะ"
                            />
                            <FaqItem
                                question="บริการ HR Outsourcing เหมาะกับธุรกิจขนาดไหน?"
                                answer="บริการของเราเหมาะสำหรับธุรกิจทุกขนาด โดยเฉพาะ SME ที่ต้องการลดต้นทุนในการจ้างทีม HR ประจำ และต้องการความเป็นมืออาชีพในการจัดการงานบุคคล เรามีแพ็คเกจที่ยืดหยุ่นตามความต้องการของลูกค้า"
                            />
                            <FaqItem
                                question="รับทำ Digital Transformation สำหรับองค์กรที่ยังใช้กระดาษอยู่หรือไม่?"
                                answer="ใช่ครับ เราเชี่ยวชาญในการเปลี่ยนผ่านจากระบบ Manual (กระดาษ/Excel) ไปสู่ระบบ Digital 100% เราจะช่วยวิเคราะห์กระบวนการทำงานเดิม เลือกเครื่องมือที่เหมาะสม และวางแผนการเปลี่ยนผ่านให้ราบรื่นที่สุด"
                            />
                        </div>
                    </section>

                    {/* Section 2: HR Tech & Software */}
                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                            <span className="w-2 h-8 bg-secondary rounded-full" />
                            ระบบ HR และเทคโนโลยี
                        </h2>
                        <div className="space-y-4">
                            <FaqItem
                                question="มีระบบ HR Software จำหน่ายหรือไม่?"
                                answer="เราไม่ได้จำหน่าย HR Software สำเร็จรูปเพียงอย่างเดียว แต่เราเน้นการ 'ออกแบบและพัฒนา' ระบบให้เหมาะกับ Workflow ขององค์กรคุณ (Custom Solution) หรือช่วยคัดเลือกและ Implement Software ที่มีในตลาดให้ตอบโจทย์ที่สุด"
                            />
                            <FaqItem
                                question="AI Chatbot สำหรับ HR ทำอะไรได้บ้าง?"
                                answer="AI Chatbot ของเราสามารถตอบคำถามพนักงานได้อัตโนมัติ 24 ชม. เช่น วันลาคงเหลือ, ขอใบรับรองเงินเดือน, นโยบายบริษัท, หรือใช้ในการสรรหา (Screening Candidate) เบื้องต้น ช่วยลดงาน Routine ของ HR ได้กว่า 70%"
                            />
                        </div>
                    </section>

                    {/* Section 3: Legal & PDPA */}
                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                            <span className="w-2 h-8 bg-purple-500 rounded-full" />
                            กฎหมายและ PDPA
                        </h2>
                        <div className="space-y-4">
                            <FaqItem
                                question="บริการของ Phichaya HR รองรับ PDPA หรือไม่?"
                                answer="ถูกต้องครับ ทุกกระบวนการและระบบที่เราออกแบบ ให้ความสำคัญกับ พ.ร.บ. คุ้มครองข้อมูลส่วนบุคคล (PDPA) อย่างเคร่งครัด มีการจัดทำ Privacy Notice, Consent Form และมาตรการรักษาความปลอดภัยข้อมูลพนักงาน"
                            />
                            <FaqItem
                                question="ถ้าจ้างทำเงินเดือน ข้อมูลจะรั่วไหลหรือไม่?"
                                answer="เรามีมาตรฐานการรักษาความปลอดภัยข้อมูลขั้นสูง ข้อมูลเงินเดือนจะถูกเก็บเป็นความลับและเข้าถึงได้เฉพาะเจ้าหน้าที่ที่ได้รับอนุญาตเท่านั้น (Strict Access Control) และมีการทำสัญญา Non-Disclosure Agreement (NDA) กับลูกค้าทุกราย"
                            />
                        </div>
                    </section>

                </div>
            </div>
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

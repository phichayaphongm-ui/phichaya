import type { Metadata } from "next";
import { Navigation } from "@/components/navigation";
import { SiteFooter } from "@/components/site-footer";
import { BackToTop } from "@/components/back-to-top";

export const metadata: Metadata = {
    title: "นโยบายความเป็นส่วนตัว (Privacy Policy)",
    description:
        "นโยบายการคุ้มครองข้อมูลส่วนบุคคลของ Phichaya HR Solutions อธิบายถึงวิธีการเก็บรวบรวม ใช้ และเปิดเผยข้อมูลส่วนบุคคลของคุณตาม พ.ร.บ. คุ้มครองข้อมูลส่วนบุคคล (PDPA)",
    alternates: {
        canonical: "https://phichaya.com/privacy-policy",
    },
};

export default function PrivacyPolicyPage() {
    return (
        <main>
            <Navigation />
            <div className="bg-white pt-24 pb-16">
                <div className="mx-auto max-w-4xl px-6">
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-8">
                        นโยบายความเป็นส่วนตัว (Privacy Policy)
                    </h1>

                    <div className="prose prose-lg text-gray-500 max-w-none space-y-6">
                        <p>
                            Phichaya HR Solutions (&quot;เรา&quot;) ให้ความสำคัญกับความเป็นส่วนตัวของคุณ นโยบายความเป็นส่วนตัวนี้อธิบายถึงวิธีการที่เราเก็บรวบรวม ใช้ และเปิดเผยข้อมูลส่วนบุคคลของคุณ เมื่อคุณใช้งานเว็บไซต์และบริการของเรา โดยสอดคล้องกับพระราชบัญญัติคุ้มครองข้อมูลส่วนบุคคล พ.ศ. 2562 (PDPA)
                        </p>

                        <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">1. ข้อมูลที่เราเก็บรวบรวม</h3>
                        <p>เราอาจเก็บรวบรวมข้อมูลส่วนบุคคลของคุณ ดังนี้:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>ข้อมูลระบุตัวตน เช่น ชื่อ นามสกุล</li>
                            <li>ข้อมูลการติดต่อ เช่น อีเมล เบอร์โทรศัพท์ ที่อยู่</li>
                            <li>ข้อมูลการใช้งานเว็บไซต์ เช่น IP Address, Cookies, ประวัติการเข้าชม</li>
                            <li>ข้อมูลที่คุณให้เพิ่มเติมผ่านแบบฟอร์มติดต่อสอบถาม</li>
                        </ul>

                        <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">2. วัตถุประสงค์การใช้ข้อมูล</h3>
                        <p>เรานำข้อมูลของคุณไปใช้เพื่อ:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>ให้บริการและตอบกลับข้อซักถามของคุณ</li>
                            <li>ปรับปรุงประสิทธิภาพของเว็บไซต์และบริการของเรา</li>
                            <li>วิเคราะห์สถิติการใช้งานเพื่อพัฒนาการตลาด (โดยไม่ระบุตัวตน)</li>
                            <li>ปฎิบัติตามกฎหมายและข้อกำหนดที่เกี่ยวข้อง</li>
                        </ul>

                        <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">3. การเปิดเผยข้อมูล</h3>
                        <p>
                            เราจะไม่เปิดเผยข้อมูลส่วนบุคคลของคุณให้แก่บุคคลภายนอก เว้นแต่ได้รับความยินยอมจากคุณ หรือเป็นการปฏิบัติตามกฎหมาย หรือเพื่อการให้บริการที่เกี่ยวข้อง (เช่น ผู้ให้บริการ Server, Analytics) ซึ่งเราจะดำเนินการให้มั่นใจว่าผู้รับข้อมูลมีมาตรการคุ้มครองข้อมูลที่เหมาะสม
                        </p>

                        <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">4. การรักษาความปลอดภัย</h3>
                        <p>
                            เรามีมาตรการรักษาความปลอดภัยที่เหมาะสมเพื่อป้องกันการเข้าถึง การใช้ หรือการเปิดเผยข้อมูลส่วนบุคคลโดยไม่ได้รับอนุญาต อย่างไรก็ตาม การส่งข้อมูลผ่านอินเทอร์เน็ตยังมีความเสี่ยง และเราไม่สามารถรับประกันความปลอดภัยของข้อมูลได้อย่างสมบูรณ์
                        </p>

                        <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">5. Cookies</h3>
                        <p>
                            เว็บไซต์ของเราใช้คุกกี้เพื่อเพิ่มประสบการณ์การใช้งานที่ดีขึ้น คุณสามารถตั้งค่าเบราว์เซอร์เพื่อปฏิเสธคุกกี้ได้ แต่อาจทำให้การใช้งานบางฟังก์ชันของเว็บไซต์ไม่สมบูรณ์
                        </p>

                        <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">6. สิทธิของคุณ</h3>
                        <p>
                            คุณมีสิทธิในการขอเข้าถึง แก้ไข ลบ หรือระงับการใช้ข้อมูลส่วนบุคคลของคุณ ตามหลักเกณฑ์ของกฎหมาย PDPA หากคุณต้องการใช้สิทธิ สามารถติดต่อเราได้ตามช่องทางด้านล่าง
                        </p>

                        <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">7. ติดต่อเรา</h3>
                        <p>
                            หากมีข้อสงสัยเกี่ยวกับนโยบายความเป็นส่วนตัวนี้ โปรดติดต่อเราที่:<br />
                            <strong>Phichaya HR Solutions</strong><br />
                            Email: contact@phichaya.com<br />
                            Tel: 082-646-5526
                        </p>
                    </div>
                </div>
            </div>
            <SiteFooter />
            <BackToTop />
        </main>
    );
}

import type { Metadata } from "next";
import { GalleryBookContent } from "./content";

export const metadata: Metadata = {
    title: "ตัวอย่างผลงานเว็บไซต์ | พาธุรกิจคุณออกสู่โลกกว้าง | Phichaya HR Solutions",
    description:
        "รวมตัวอย่างผลงานเว็บไซต์และโซลูชั่นที่เราออกแบบ พาธุรกิจคุณออกสู่โลกกว้างด้วยเว็บไซต์ระดับมืออาชีพ",
    keywords:
        "ตัวอย่างผลงาน, Web Design, Website Portfolio, Phichaya HR Solutions, ออกแบบเว็บไซต์",
};

export default function GalleryPage() {
    return <GalleryBookContent />;
}

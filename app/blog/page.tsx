import type { Metadata } from "next";
import { BlogListContent } from "./content";
import { Navigation } from "@/components/navigation";
import { SiteFooter } from "@/components/site-footer";
import { BackToTop } from "@/components/back-to-top";

export const metadata: Metadata = {
    title: "บทความและความรู้ด้าน HR",
    description: "รวบรวมเทรนด์ HR เทคโนโลยี และกฎหมายแรงงานที่คุณต้องรู้ เพื่อการก้าวไปข้างหน้าอย่างมั่นคงในยุค Digital Transformation",
    keywords: "บทความ HR, ความรู้ HR, Digital Transformation, Thailand HR Trends, กฎหมายแรงงาน",
    alternates: {
        canonical: "https://phichaya.com/blog",
    },
};

export default function BlogListPage() {
    return (
        <main>
            <Navigation />
            <BlogListContent />
            <SiteFooter />
            <BackToTop />
        </main>
    );
}

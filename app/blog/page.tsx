import type { Metadata } from "next";
import { BlogListContent } from "./content";

export const metadata: Metadata = {
    title: "บทความและความรู้ด้าน HR | Phichaya HR Solutions",
    description: "รวบรวมเทรนด์ HR เทคโนโลยี และกฎหมายแรงงานที่คุณต้องรู้ เพื่อการก้าวไปข้างหน้าอย่างมั่นคงในยุค Digital Transformation",
    keywords: "บทความ HR, ความรู้ HR, Digital Transformation, Thailand HR Trends, กฎหมายแรงงาน",
};

export default function BlogListPage() {
    return <BlogListContent />;
}

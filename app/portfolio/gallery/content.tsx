"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import dynamic from "next/dynamic";

const GalleryBook = dynamic(() => import("@/components/gallery-book").then(mod => mod.GalleryBook), {
    ssr: false,
    loading: () => (
        <div className="flex flex-col items-center justify-center min-h-[500px] w-full py-6 sm:py-10">
            <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin mb-4"></div>
            <p className="text-gray-400 text-sm font-mono uppercase tracking-[0.2em]">Preparing Gallery...</p>
        </div>
    )
});

export function GalleryBookContent() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50 pt-20">

            {/* Hero */}
            <section className="py-12 md:py-16 text-center px-6">
                <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-1.5 text-sm font-semibold uppercase tracking-wider text-blue-600">
                    ✨ ตัวอย่างผลงาน
                </span>
                <h1 className="mt-4 text-3xl md:text-5xl font-bold text-gray-900">
                    พาธุรกิจคุณ
                    <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                        {" "}ออกสู่โลกกว้าง
                    </span>
                </h1>
                <p className="mt-4 text-gray-500 max-w-xl mx-auto">
                    รวมแบบเว็บไซต์และโซลูชั่นที่เราออกแบบ พร้อมปรับแต่งได้ในแบบที่คุณต้องการ
                    เปิดดูทีละหน้าเหมือนหนังสือจริง
                </p>
            </section>

            {/* Book */}
            <section className="pb-20 px-4">
                <GalleryBook />
            </section>
        </div>
    );
}

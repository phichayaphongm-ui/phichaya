"use client";

import Link from "next/link";
import { ArrowLeft, Home, Search } from "lucide-react";
import { Navigation } from "@/components/navigation";
import { SiteFooter } from "@/components/site-footer";
import { BackToTop } from "@/components/back-to-top";

export default function NotFound() {
    return (
        <main>
            <Navigation />
            <div className="flex min-h-[80vh] flex-col items-center justify-center bg-white px-6 text-center relative overflow-hidden">
                <head>
                    <meta name="robots" content="noindex, nofollow" />
                </head>
                {/* Decorative Blobs */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-50 rounded-full blur-3xl opacity-50 -z-10 animate-pulse-soft" />
                <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-purple-50 rounded-full blur-3xl opacity-50 -z-10 animate-blob" />
                <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-cyan-50 rounded-full blur-3xl opacity-50 -z-10 animate-blob animation-delay-2000" />

                <div className="relative z-10 animate-fade-in-up">
                    <h1 className="text-[150px] font-extrabold leading-none tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_auto] animate-gradient">
                        404
                    </h1>
                    <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        ไม่พบหน้าที่คุณต้องการ
                    </h2>
                    <p className="mt-6 text-lg text-gray-500 max-w-lg mx-auto leading-relaxed">
                        หน้าเว็บที่คุณกำลังมองหาอาจถูกลบ เปลี่ยนชื่อ หรือไม่มีอยู่จริง
                        ลองตรวจสอบ URL อีกครั้ง หรือกลับไปที่หน้าแรก
                    </p>

                    <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                        <Link
                            href="/"
                            className="btn-shimmer inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-primary to-secondary px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-primary/25 transition-all hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5"
                        >
                            <Home className="h-4 w-4" />
                            กลับหน้าแรก
                        </Link>
                        <button
                            onClick={() => window.history.back()}
                            className="inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-8 py-3.5 text-sm font-semibold text-gray-700 transition-all hover:border-gray-300 hover:bg-gray-50 hover:-translate-y-0.5"
                        >
                            <ArrowLeft className="h-4 w-4" />
                            ย้อนกลับ
                        </button>
                    </div>

                    <div className="mt-12 pt-12 border-t border-gray-100 w-full max-w-md mx-auto">
                        <p className="text-sm text-gray-400 mb-4">หรือลองดูลิงก์ยอดนิยมเหล่านี้</p>
                        <div className="flex flex-wrap justify-center gap-3">
                            {[
                                { label: "บริการของเรา", href: "/#services" },
                                { label: "บทความ", href: "/#articles" },
                                { label: "เกี่ยวกับเรา", href: "/about" },
                                { label: "ติดต่อเรา", href: "/#contact" },
                            ].map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="rounded-full bg-gray-50 px-4 py-1.5 text-xs font-medium text-gray-600 transition-colors hover:bg-primary/10 hover:text-primary"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <SiteFooter />
            <BackToTop />
        </main>
    );
}

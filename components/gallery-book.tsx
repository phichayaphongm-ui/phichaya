"use client";

import React, { forwardRef, useState, useRef, useEffect, useMemo, useCallback } from "react";
// @ts-ignore
import HTMLFlipBook from "react-pageflip";
import { ChevronLeft, ChevronRight, Volume2, VolumeX, Sparkles } from "lucide-react";

// Types
interface PageProps {
    children: React.ReactNode;
    number?: number | string;
    className?: string;
}

const galleryImages = [
    {
        src: "/images/gallery/HR.png",
        title: "HR Solutions",
        concept: "Efficiency & Trust",
        design: "ออกแบบโดยเน้นความน่าเชื่อถือและความเป็นมืออาชีพ ใช้โทนสีน้ำเงินสื่อถึงความมั่นคง จัดวาง Layout ให้สะอาดตา (Clean Design) เพื่อให้ผู้ใช้เข้าถึงข้อมูลบริการต่างๆ ได้ง่าย เหมาะสำหรับองค์กรที่ต้องการภาพลักษณ์ที่ทันสมัยและเป็นทางการ",
        recommendation: "แนะนำให้เพิ่มระบบคัดกรองเรซูเม่ด้วย AI เพื่อลดขั้นตอนการทำงานของฝ่ายบุคคล"
    },
    {
        src: "/images/gallery/Apartment.png",
        title: "Prime Apartments",
        concept: "Living & Comfort",
        design: "ดีไซน์เน้นบรรยากาศอบอุ่นและความสะดวกสบาย ใช้ภาพถ่ายจริงขนาดใหญ่เพื่อดึงดูดความสนใจ การจัดวางเนื้อหาเน้นการแสดงห้องพักและสิ่งอำนวยความสะดวกอย่างชัดเจน พร้อมระบบ Booking ที่ใช้งานง่าย",
        recommendation: "แนะนำให้เพิ่มฟีเจอร์ Virtual Tour 360 องศา เพื่อให้ผู้เช่ายอดเยี่ยมชมห้องได้เสมือนจริง"
    },
    {
        src: "/images/gallery/Durian.png",
        title: "Durian Business",
        concept: "Freshness & Premium",
        design: "นำเสนอสินค้าเกษตรในรูปแบบพรีเมียม ใช้โทนสีเหลืองทองและเขียวสื่อถึงความสดใหม่และคุณภาพของทุเรียน เน้นการถ่ายภาพสินค้าแบบ Close-up เพื่อกระตุ้นความอยากซื้อ พร้อมระบบ E-commerce ที่รองรับการสั่งซื้อออนไลน์",
        recommendation: "แนะนำให้มีระบบแจ้งสถานะการจัดส่งแบบ Real-time และการรับประกันสินค้าเกษตร"
    },
    {
        src: "/images/gallery/EV.png",
        title: "EV Solutions",
        concept: "Innovation & Future",
        design: "ออกแบบด้วยสไตล์ Futuristic ใช้โทนสีขาว-ฟ้า-ดำ เพื่อสื่อถึงเทคโนโลยีและยานยนต์แห่งอนาคต กราฟิกเน้นความโฉบเฉี่ยวและทันสมัย เหมาะสำหรับธุรกิจยานยนต์ไฟฟ้าและเทคโนโลยี",
        recommendation: "แนะนำให้เพิ่มแผนที่แสดงจุดชาร์จไฟที่เชื่อมต่อกับ Google Maps เพื่อความสะดวกของผู้ใช้"
    },
    {
        src: "/images/gallery/Muaythai.png",
        title: "Muay Thai Academy",
        concept: "Strength & Culture",
        design: "ผสมผสานศิลปะวัฒนธรรมไทยเข้ากับการออกแบบสมัยใหม่ ใช้โทนสีแดง-ดำ-ทอง สื่อถึงพลังและความแข็งแกร่ง ฟอนต์อักษรที่มีเอกลักษณ์ เพื่อสร้างความจดจำและดึงดูดชาวต่างชาติที่สนใจศิลปะการต่อสู้",
        recommendation: "แนะนำให้เพิ่มวิดีโอตัวอย่างการฝึกซ้อมและระบบจองตารางเรียนออนไลน์"
    },
    {
        src: "/images/gallery/car.png",
        title: "Car Business",
        concept: "Luxury & Performance",
        design: "ดีไซน์หรูหราเน้นโชว์รูมเสมือนจริง (Virtual Showroom) ให้ผู้ใช้สามารถดูรถยนต์ได้รอบคัน ใช้พื้นหลังสีเข้มเพื่อขับให้รถดูโดดเด่น พร้อมตารางเปรียบเทียบสเปคและคำนวณค่างวดที่ใช้งานง่าย",
        recommendation: "แนะนำให้มีปุ่ม Call-to-action สำหรับการจอง Test Drive ที่เห็นเด่นชัดทุกหน้า"
    },
    {
        src: "/images/gallery/factory.png",
        title: "Factory Management",
        concept: "Data & Structure",
        design: "เน้นการแสดงผลข้อมูล (Data Visualization) Dashboard ที่เข้าใจง่าย ใช้ Grid Layout เพื่อจัดระเบียบข้อมูลจำนวนมาก โทนสีเทา-น้ำเงิน สื่อถึงอุตสาหกรรมและมาตรฐานการผลิต",
        recommendation: "แนะนำให้เน้นระบบความปลอดภัยของข้อมูลและการเข้าถึงแบบกำหนดสิทธิ์ผู้ใช้"
    },
    {
        src: "/images/gallery/resort.png",
        title: "Resort & Hotel",
        concept: "Relaxation & Nature",
        design: "ใช้ภาพเต็มจอ (Full-screen Background) เพื่อถ่ายทอดบรรยากาศการพักผ่อน โทนสีธรรมชาติ (Earth Tone) เน้นความผ่อนคลาย การนำเสนอห้องพักและกิจกรรมต่างๆ ทำได้อย่างลื่นไหลน่าสนใจ",
        recommendation: "แนะนำให้ผสานรีวิวจาก Social Media และระบบสะสมแต้มเพื่อสร้างความภักดีในแบรนด์"
    },
    {
        src: "/images/gallery/retail.png",
        title: "Retail Business",
        concept: "Dynamic & Friendly",
        design: "ดีไซน์สดใส สนุกสนาน เข้าถึงง่าย ใช้สีสันหลากหลายในการแยกหมวดหมู่สินค้า เน้นโปรโมชั่นและสินค้าขายดี (Best Seller) เพื่อกระตุ้นยอดขาย เหมาะสำหรับร้านค้าปลีกและซูเปอร์มาร์เก็ต",
        recommendation: "แนะนำให้เพิ่มระบบแชทสด (Live Chat) เพื่อตอบคำถามและช่วยปิดการขายได้รวดเร็ว"
    },
    {
        src: "/images/gallery/tea.png",
        title: "Tea Brand",
        concept: "Craft & Heritage",
        design: "เล่าเรื่องราว (Storytelling) เกี่ยวกับที่มาของชา กรรมวิธีการผลิตที่พิถีพิถัน ใช้ Font แบบลายมือและภาพวาดประกอบ (Illustration) เพื่อสร้างความรู้สึก Handmade และใส่ใจในรายละเอียด",
        recommendation: "แนะนำให้สร้าง Blog Content เกี่ยวกับคุณประโยชน์ของชาเพื่อดึงดูดกลุ่มคนรักสุขภาพ"
    },
    {
        src: "/images/gallery/tuter.png",
        title: "Tutor Platform",
        concept: "Knowledge & Growth",
        design: "ออกแบบให้ดูเป็นมิตรและกระตือรือร้น ใช้สีสว่างและ Icon น่ารักๆ เพื่อลดความเครียดในการเรียนรู้ จัดหมวดหมู่วิชาเรียนให้ค้นหาง่าย มีระบบ Profile ติวเตอร์ที่น่าเชื่อถือ",
        recommendation: "แนะนำให้มีระบบทดลองเรียนฟรี (Free Trial) เพื่อสร้างความมั่นใจก่อนตัดสินใจซื้อคอร์ส"
    },
];

const Page = forwardRef<HTMLDivElement, PageProps>((props, ref) => {
    return (
        <div className={`demoPage h-full w-full shadow-inner ${props.className || ""}`} ref={ref}>
            <div className="h-full w-full p-8 flex flex-col relative overflow-hidden bg-[#fffdfa]">
                {/* Visual Texture Overlay */}
                <div className="absolute inset-0 pointer-events-none opacity-[0.03] mix-blend-multiply"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                    }}></div>
                <div className="absolute inset-0 pointer-events-none opacity-20"
                    style={{
                        backgroundImage: "radial-gradient(#d4c5b0 0.5px, transparent 0.5px)",
                        backgroundSize: "24px 24px"
                    }}></div>

                {/* Left/Right Page Shadow (Binding effect) */}
                <div className="absolute inset-y-0 w-16 pointer-events-none z-20"
                    style={{
                        left: props.number && parseInt(props.number.toString()) % 2 === 0 ? 'auto' : 0,
                        right: props.number && parseInt(props.number.toString()) % 2 === 0 ? 0 : 'auto',
                        background: props.number && parseInt(props.number.toString()) % 2 === 0
                            ? 'linear-gradient(to right, rgba(0,0,0,0), rgba(0,0,0,0.04))'
                            : 'linear-gradient(to left, rgba(0,0,0,0), rgba(0,0,0,0.04))'
                    }}></div>

                {/* Content */}
                <div className="relative z-10 h-full flex flex-col">
                    {props.children}
                </div>

                {/* Page Number */}
                <div className="absolute bottom-6 left-0 right-0 text-center text-[10px] text-gray-300 font-inter tracking-[0.2em] uppercase">
                    — {props.number} —
                </div>
            </div>
        </div>
    );
});
Page.displayName = "Page";

const Cover = forwardRef<HTMLDivElement, any>((props, ref) => {
    return (
        <div className="demoPage bg-[#1a202c] text-white h-full w-full" ref={ref} data-density="hard">
            <div className="h-full w-full relative overflow-hidden">
                <img
                    src="/images/gallery/cover-front.png"
                    alt="Cover"
                    className="w-full h-full object-cover shadow-2xl"
                />
                <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.5)] pointer-events-none"></div>
            </div>
        </div>
    );
});
Cover.displayName = "Cover";

const EndCover = forwardRef<HTMLDivElement, any>((props, ref) => {
    return (
        <div className="demoPage bg-[#1a202c] text-white h-full w-full" ref={ref} data-density="hard">
            <div className="h-full w-full relative overflow-hidden">
                <img
                    src="/images/gallery/cover-back.png"
                    alt="End Cover"
                    className="w-full h-full object-cover shadow-2xl"
                />
                <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.5)] pointer-events-none"></div>
            </div>
        </div>
    );
});
EndCover.displayName = "EndCover";

export function GalleryBook() {
    const bookRef = useRef<any>(null);
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const [isMuted, setIsMuted] = useState(false);
    const [mounted, setMounted] = useState(false);
    const [windowSize, setWindowSize] = useState({
        width: typeof window !== 'undefined' ? window.innerWidth : 1200,
        height: typeof window !== 'undefined' ? window.innerHeight : 800
    });

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        // Handle window resize
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight
            });
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const isMobile = windowSize.width < 768;

    const playFlipSound = useCallback(() => {
        if (audioRef.current && !isMuted) {
            try {
                audioRef.current.currentTime = 0;
                const playPromise = audioRef.current.play();
                if (playPromise !== undefined) {
                    playPromise.catch(e => {
                        console.log("Audio play failed:", e);
                    });
                }
            } catch (err) {
                console.log("Audio play exception:", err);
            }
        }
    }, [isMuted]);

    const onFlip = (e: any) => {
        playFlipSound();
    };

    const toggleMute = () => setIsMuted(!isMuted);

    const next = () => bookRef.current?.pageFlip()?.flipNext();
    const prev = () => bookRef.current?.pageFlip()?.flipPrev();

    // Flatten pages to avoid React.Fragment which breaks HTMLFlipBook
    const pages = useMemo(() => {
        const bookPages = [];
        // ... (Same page content as before, keeping it for continuity)
        // [omitted for brevity in this replace call as it uses the existing useMemo logic]
        // Actually, the useMemo logic needs to be fully present if I'm replacing the whole component body.
        // I will re-include the relevant parts of useMemo to ensure it's complete.

        // 1. Cover
        bookPages.push(<Cover key="cover" />);

        // 2. Intro Page
        bookPages.push(
            <Page key="intro" number="01">
                <div className="h-full flex flex-col justify-center text-center px-6">
                    <div className="mb-8 opacity-20">
                        <svg className="w-12 h-12 mx-auto" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9v-2h2v2zm0-4H9V7h2v5z" /></svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-6 italic leading-relaxed">
                        "Design is not just what it looks like and feels like. Design is how it works."
                    </h3>
                    <p className="text-primary text-xs font-bold uppercase tracking-widest mb-12">— Steve Jobs</p>
                    <div className="w-8 h-[1px] bg-gray-200 mx-auto mb-8"></div>
                    <p className="text-gray-500 leading-loose font-medium text-xs uppercase tracking-[0.2em]">
                        Welcome to our portfolio catalog<br />
                        Exploring Diverse Design Horizons<br />
                        Crafted for Success
                    </p>
                </div>
            </Page>
        );

        // 2.1 Table of Contents Page
        bookPages.push(
            <Page key="toc" number="02">
                <div className="h-full flex flex-col pt-12 px-2">
                    <div className="mb-10">
                        <h2 className="text-3xl font-bold text-gray-900 tracking-tight mb-2">Portfolio</h2>
                        <h3 className="text-[10px] font-black text-primary uppercase tracking-[0.4em]">Table of Contents</h3>
                        <div className="w-10 h-1 bg-primary mt-4"></div>
                    </div>

                    <div className="flex-1 space-y-3 pr-2 overflow-y-auto custom-scrollbar">
                        {galleryImages.map((img, idx) => (
                            <div key={idx} className="group flex items-center justify-between py-2 border-b border-gray-50 hover:border-primary/20 transition-colors">
                                <div className="flex items-center gap-3">
                                    <span className="text-[9px] font-black text-gray-300 group-hover:text-primary transition-colors italic">{(idx + 1).toString().padStart(2, '0')}</span>
                                    <span className="text-xs font-bold text-gray-700 group-hover:text-primary transition-colors tracking-wide">
                                        {img.title}
                                    </span>
                                </div>
                                <div className="flex-1 border-b border-dotted border-gray-100 mx-4 opacity-40"></div>
                                <span className="text-[9px] font-bold text-gray-400 font-inter">P.{(4 + (idx * 2)).toString().padStart(2, '0')}</span>
                            </div>
                        ))}
                    </div>

                    <div className="mt-auto pb-4">
                        <p className="text-[8px] text-gray-400 font-black uppercase tracking-[0.3em] leading-relaxed">
                            Selected Works & Case Studies<br />
                            Strategic HR Solutions 2026
                        </p>
                    </div>
                </div>
            </Page>
        );

        // 3. Content Pages
        galleryImages.forEach((img, index) => {
            // Left Page: Description
            bookPages.push(
                <Page key={`page-${index}-left`} number={(3 + (index * 2)).toString().padStart(2, '0')}>
                    <div className="h-full flex flex-col pt-12">
                        <div className="mb-8">
                            <span className="inline-block text-[9px] font-black text-primary uppercase tracking-[0.5em] mb-2">Style {(index + 1).toString().padStart(2, '0')}</span>
                            <h2 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight">{img.title}</h2>
                            <div className="w-10 h-1 bg-gradient-to-r from-primary to-blue-400 mt-4"></div>
                        </div>

                        <div className="flex-1 space-y-8">
                            <section>
                                <h4 className="text-[9px] font-black text-gray-300 uppercase tracking-widest mb-3 flex items-center gap-2">
                                    <div className="w-3 h-[1px] bg-gray-200"></div>
                                    The concept
                                </h4>
                                <p className="text-gray-800 font-medium leading-relaxed italic text-base sm:text-lg pr-4 text-pretty text-sm sm:text-base">
                                    "{img.concept}"
                                </p>
                            </section>

                            <section>
                                <h4 className="text-[9px] font-black text-gray-300 uppercase tracking-widest mb-3 flex items-center gap-2">
                                    <div className="w-3 h-[1px] bg-gray-200"></div>
                                    Design insight
                                </h4>
                                <p className="text-gray-600 text-[11px] sm:text-[13px] leading-[1.6] sm:leading-[1.8] text-pretty">
                                    {img.design}
                                </p>
                            </section>

                            <section className="relative p-3 sm:p-5 rounded-2xl bg-gradient-to-br from-blue-50/50 to-indigo-50/50 border border-blue-100/50 shadow-sm overflow-hidden">
                                <h4 className="text-[9px] font-black text-blue-800 uppercase tracking-widest mb-2 flex items-center gap-2">
                                    <Sparkles className="w-3 h-3 text-primary animate-pulse" />
                                    Expert Recommendation
                                </h4>
                                <p className="text-blue-900/80 font-bold text-[11px] sm:text-[13px] leading-relaxed">
                                    {img.recommendation}
                                </p>
                            </section>
                        </div>

                        <div className="mt-auto grid grid-cols-2 gap-4 pb-4">
                            <div className="text-[9px] text-gray-400">
                                <p className="font-bold uppercase tracking-widest mb-1">Status</p>
                                <p className="font-medium text-gray-500 text-[8px] sm:text-[9px]">Ready to deploy</p>
                            </div>
                            <div className="text-[9px] text-gray-400">
                                <p className="font-bold uppercase tracking-widest mb-1">Type</p>
                                <p className="font-medium text-gray-500 text-[8px] sm:text-[9px]">Custom UI/UX</p>
                            </div>
                        </div>
                    </div>
                </Page>
            );

            // Right Page: Image
            bookPages.push(
                <Page key={`page-${index}-right`} number={(4 + (index * 2)).toString().padStart(2, '0')}>
                    <div className="h-full w-full p-1 sm:p-2 flex items-center justify-center">
                        <div className="relative w-full aspect-[3/4.5] rounded-sm overflow-hidden shadow-2xl border border-gray-200/50 bg-white p-1 sm:p-2 group">
                            <div className="w-full h-full relative overflow-hidden rounded-sm border border-gray-100">
                                <img
                                    src={img.src}
                                    alt={img.title}
                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            </div>
                            <div className="absolute inset-0 shadow-[inset_0_0_40px_rgba(0,0,0,0.05)] pointer-events-none"></div>
                        </div>
                    </div>
                </Page>
            );
        });

        // 4. End Cover
        bookPages.push(<EndCover key="end-cover" />);

        return bookPages;
    }, []);

    const bookWidth = isMobile ? Math.min(windowSize.width - 40, 400) : 400;
    const bookHeight = isMobile ? Math.min(windowSize.height - 200, 600) : 550;

    if (!mounted) return (
        <div className="flex flex-col items-center justify-center min-h-[500px] w-full py-6 sm:py-10">
            <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin mb-4"></div>
            <p className="text-gray-400 text-sm font-mono uppercase tracking-[0.2em]">Initialing Gallery...</p>
        </div>
    );

    return (
        <div className="flex flex-col items-center justify-center min-h-[500px] w-full py-6 sm:py-10 relative">

            {/* Audio Toggle */}
            <button
                onClick={toggleMute}
                className="absolute top-0 right-4 p-2 rounded-full bg-white/80 hover:bg-white text-gray-500 hover:text-blue-500 transition-colors z-10"
                title={isMuted ? "Unmute" : "Mute"}
            >
                {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
            </button>

            <HTMLFlipBook
                width={bookWidth}
                height={bookHeight}
                size="stretch"
                minWidth={250}
                maxWidth={500}
                minHeight={350}
                maxHeight={700}
                maxShadowOpacity={0.5}
                showCover={true}
                mobileScrollSupport={true}
                className="shadow-2xl"
                ref={bookRef}
                usePortrait={isMobile}
                startPage={0}
                drawShadow={true}
                flippingTime={1000}
                useMouseEvents={true}
                swipeDistance={30}
                showPageCorners={true}
                disableFlipByClick={false}
                onFlip={onFlip}
                style={{}}
                startZIndex={0}
                autoSize={true}
                clickEventForward={true}
            >
                {pages}
            </HTMLFlipBook>

            {/* Controls */}
            <div className="flex items-center gap-4 mt-8">
                <button
                    onClick={prev}
                    className="p-2 sm:p-3 rounded-full bg-white shadow-lg text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-all active:scale-95"
                    aria-label="Previous Page"
                >
                    <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>
                <div className="text-gray-400 text-[10px] font-mono whitespace-nowrap">
                    {isMobile ? "SWIPE OR TAP CORNERS" : "CLICK CORNERS OR DRAG TO FLIP"}
                </div>
                <button
                    onClick={next}
                    className="p-2 sm:p-3 rounded-full bg-white shadow-lg text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-all active:scale-95"
                    aria-label="Next Page"
                >
                    <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>
            </div>
            {/* Audio element for page flip sound */}
            <audio
                ref={audioRef}
                src="/sounds/page-flip.wav"
                preload="auto"
            />
        </div>
    );
}

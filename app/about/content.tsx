"use client";

import { CheckCircle2, Trophy, Users, History } from "lucide-react";
import React from "react";
import Image from "next/image";

export default function AboutContent() {
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="relative py-24 lg:py-32 overflow-hidden bg-gray-50">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none" />
                <div className="mx-auto max-w-7xl px-6 relative z-10">
                    <div className="text-center max-w-3xl mx-auto">
                        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl heading-accent inline-block">
                            เกี่ยวกับเรา
                        </h1>
                        <p className="mt-6 text-xl text-gray-500 leading-relaxed">
                            {"Phichaya HR Solutions มุ่งมั่นที่จะยกระดับการบริหารทรัพยากรบุคคลขององค์กรไทย ด้วยการผสมผสานความเชี่ยวชาญด้าน HR เข้ากับเทคโนโลยีดิจิทัลที่ทันสมัย"}
                        </p>
                    </div>
                </div>
            </section>

            {/* Story Section */}
            <section className="py-20 bg-white">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="grid gap-12 lg:grid-cols-2 lg:gap-24 items-center">
                        <div className="relative">
                            <div className="absolute -top-4 -left-4 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
                            <div className="absolute -bottom-8 -right-4 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000" />
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl skew-y-1 transform transition-all hover:skew-y-0 duration-500 card-gradient-border">
                                <Image
                                    src="/about-poster.png"
                                    alt="Phichaya HR Solutions Poster Image New"
                                    width={1000}
                                    height={1200}
                                    className="w-full h-auto object-cover"
                                    loading="eager"
                                    priority
                                />
                            </div>
                        </div>

                        <div className="space-y-8">
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                                    ทำไมถึงต้อง Phichaya HR Solutions?
                                </h2>
                                <div className="w-20 h-1.5 bg-gradient-to-r from-primary to-secondary rounded-full mb-6" />
                                <p className="text-lg text-gray-600 leading-relaxed">
                                    เราเชื่อว่า &quot;คน&quot; คือทรัพยากรที่มีค่าที่สุดของทุกองค์กร และเทคโนโลยีคือเครื่องมือที่จะช่วยปลดล็อกศักยภาพของคนเหล่านั้น
                                </p>
                                <p className="mt-4 text-base text-gray-500 leading-relaxed">
                                    ด้วยประสบการณ์กว่า 15 ปีในวงการบริหารทรัพยากรบุคคล เราได้เห็นการเปลี่ยนแปลงและความท้าทายมากมายที่เกิดขึ้นกับองค์กรธุรกิจ เราจึงก่อตั้ง Phichaya HR Solutions ขึ้นมาเพื่อเป็นพาร์ทเนอร์ที่ช่วยแก้ปัญหาและวางรากฐานด้าน HR ที่แข็งแกร่งให้กับลูกค้า ไม่ว่าจะเป็น SME ที่ต้องการระบบ HR พื้นฐาน หรือองค์กรขนาดใหญ่ที่ต้องการทำ Digital Transformation เต็มรูปแบบ
                                </p>
                                <p className="mt-4 text-base text-gray-500 leading-relaxed">
                                    เราไม่เพียงแค่ให้คำปรึกษา แต่เราลงมือทำจริง ออกแบบระบบที่ใช้งานได้จริง และอยู่เคียงข้างคุณในทุกขั้นตอนของการเติบโต
                                </p>
                            </div>

                            <div className="grid grid-cols-2 gap-6">
                                <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                                    <Trophy className="h-8 w-8 text-primary mb-3" />
                                    <div className="font-bold text-gray-900">15+ ปี</div>
                                    <div className="text-sm text-gray-500">ประสบการณ์</div>
                                </div>
                                <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                                    <Users className="h-8 w-8 text-primary mb-3" />
                                    <div className="font-bold text-gray-900">100+</div>
                                    <div className="text-sm text-gray-500">ลูกค้าที่ไว้วางใจ</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-20 bg-gray-50 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 gradient-blob gradient-blob-cyan opacity-20" />
                <div className="mx-auto max-w-7xl px-6 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900">ค่านิยมของเรา (Core Values)</h2>
                    </div>

                    <div className="grid gap-8 sm:grid-cols-3">
                        {[
                            {
                                title: "Professionalism",
                                desc: "ความเป็นมืออาชีพ ความถูกต้องแม่นยำ และจริยธรรมในการทำงาน คือมาตรฐานสูงสุดของเรา",
                                icon: Trophy
                            },
                            {
                                title: "Innovation",
                                desc: "เราไม่หยุดนิ่งที่จะเรียนรู้และนำเทคโนโลยีใหม่ๆ มาปรับใช้เพื่อเพิ่มประสิทธิภาพ",
                                icon: History
                            },
                            {
                                title: "Empathy",
                                desc: "เราเข้าใจความต้องการของทั้งเจ้าของกิจการและพนักงาน เพื่อสร้างสมดุลที่ยั่งยืน",
                                icon: Users
                            }
                        ].map((value, i) => (
                            <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                <div className="h-12 w-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6">
                                    <value.icon className="h-6 w-6" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                                <p className="text-gray-500 leading-relaxed">{value.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

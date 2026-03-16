"use client";

import Link from "next/link";
import Image from "next/image";
import { CheckCircle2, Sparkles, ShieldCheck, Users, Workflow, Cpu, LineChart } from "lucide-react";

export function PhrOneContent() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-16 -left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-screen filter blur-3xl animate-pulse" />
          <div className="absolute bottom-16 -right-10 w-96 h-96 bg-cyan-500 rounded-full mix-blend-screen filter blur-3xl animate-pulse" />
        </div>
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.12) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-1.5 text-sm font-medium text-blue-100 ring-1 ring-white/10 hover:bg-white/10 transition-colors"
            >
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-400/90 text-[10px] font-bold text-slate-900">
                NEW
              </span>
              <span>ผลิตภัณฑ์หลัก PHR-One – All-in-one HR Platform</span>
            </Link>
            <p className="text-xs text-blue-100/70">
              Powered by PPT Strategy: <span className="font-semibold">People • Process • Technology</span>
            </p>
          </div>

          <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
            <div>
              <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-[3.2rem] leading-tight">
                PHR-One โปรแกรม HR Solution
                <span className="block bg-gradient-to-r from-cyan-300 via-emerald-300 to-blue-300 bg-clip-text text-transparent">
                  All-in-one HR เต็มรูปแบบ
                </span>
              </h1>
              <p className="mt-6 max-w-xl text-base sm:text-lg text-blue-100/85 leading-relaxed">
                แพลตฟอร์ม HR ดิจิทัลครบวงจรที่ออกแบบมาสำหรับองค์กรไทยยุคใหม่ ครอบคลุมงาน{" "}
                <span className="font-semibold">
                  เงินเดือน, สรรหาว่าจ้าง, Time &amp; Attendance, HRIS, การฝึกอบรม, OD &amp; KPI, PMS
                </span>{" "}
                และการประเมินผลในระบบเดียว เชื่อมต่อข้อมูลทุกจุด ลดกระดาษ 100% และรองรับ PDPA อย่างมืออาชีพ
              </p>
              <div className="mt-7 grid max-w-xl gap-3 text-sm text-blue-100/90 sm:grid-cols-2">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-400" />
                  <p>
                    <span className="font-semibold">All-in-one HR Platform</span> ครบทุกโมดูลในแอปเดียว ลดการใช้หลายระบบ
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-400" />
                  <p>
                    <span className="font-semibold">Zero Paper HR</span> ดิจิทัลทุกกระบวนการ ตั้งแต่สมัครงานจนถึงประเมินผล
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-400" />
                  <p>
                    <span className="font-semibold">ขับเคลื่อนด้วยกลยุทธ์ PPT</span> People – Process – Technology ออกแบบโดยผู้เชี่ยวชาญ
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-400" />
                  <p>
                    <span className="font-semibold">รองรับองค์กรทุกขนาด</span> ตั้งแต่ SME ไปจนถึงองค์กรขนาดใหญ่ ปรับแต่ง Workflow ได้ยืดหยุ่น
                  </p>
                </div>
              </div>

              <div className="mt-9 flex flex-wrap gap-4">
                <Link
                  href="/#contact"
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 px-7 py-3.5 text-sm sm:text-base font-semibold text-slate-900 shadow-lg shadow-emerald-400/30 hover:shadow-xl hover:shadow-emerald-400/40 hover:-translate-y-0.5 transition-all"
                >
                  <Sparkles className="h-5 w-5" />
                  ขอเดโม &amp; ปรึกษาฟรีเกี่ยวกับ PHR-One
                </Link>
                <a
                  href="#phr-one-modules"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/25 bg-white/5 px-7 py-3.5 text-sm sm:text-base font-semibold text-blue-100 hover:bg-white/10 hover:border-emerald-300/70 transition-all"
                >
                  ดูโมดูลที่รองรับทั้งหมด
                </a>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-blue-100/80">
                <div className="inline-flex items-center gap-2 rounded-full bg-black/30 px-3 py-1 ring-1 ring-white/10">
                  <ShieldCheck className="h-4 w-4 text-emerald-300" />
                  <span>รองรับ PDPA • Audit Trail ครบถ้วน</span>
                </div>
                <div className="inline-flex items-center gap-2 rounded-full bg-black/30 px-3 py-1 ring-1 ring-white/10">
                  <Cpu className="h-4 w-4 text-cyan-300" />
                  <span>ออกแบบสำหรับ HR Digital Transformation 2026</span>
                </div>
              </div>
            </div>

            {/* Visual / Poster */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/60 shadow-2xl shadow-cyan-500/20 backdrop-blur">
                <div className="bg-gradient-to-br from-cyan-500/15 via-blue-500/10 to-emerald-500/20">
                  <div className="p-3 sm:p-4">
                    <div className="overflow-hidden rounded-2xl bg-slate-950/60">
                      <Image
                        src="/images/phr-one-poster.png"
                        alt="PHR-One All-in-one HR Program Poster"
                        width={900}
                        height={1200}
                        className="h-full w-full object-contain"
                        priority
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="pointer-events-none absolute -bottom-4 right-4 inline-flex items-center gap-2 rounded-2xl bg-white px-3 py-2 text-xs font-semibold text-slate-900 shadow-xl">
                <Users className="h-4 w-4 text-emerald-600" />
                <span>ออกแบบโดยทีม HR &amp; Tech Expert</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modules Section */}
      <section id="phr-one-modules" className="relative bg-gray-50 py-20">
        <div className="absolute top-0 right-0 h-72 w-72 -translate-y-1/2 translate-x-1/3 rounded-full bg-emerald-100 blur-3xl opacity-60" />
        <div className="mx-auto max-w-7xl px-6 relative z-10">
          <div className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700 ring-1 ring-emerald-100">
              All-in-one HR Modules
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold text-slate-900">
              ครบทุกฟังก์ชัน HR ในแพลตฟอร์มเดียว
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm sm:text-base text-slate-600 leading-relaxed">
              PHR-One ถูกออกแบบให้ครอบคลุมวงจรชีวิตพนักงานตั้งแต่ก่อนเข้าทำงานจนถึงหลังออกจากองค์กร
              เพิ่มความแม่นยำ ลดงานเอกสาร และเพิ่มมุมมองเชิงกลยุทธ์ให้กับผู้บริหาร
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <ModuleCard
              title="โปรแกรมเงินเดือน (Payroll)"
              subtitle="ลดผิดพลาด เพิ่มความถูกต้อง"
              bullets={[
                "คำนวณเงินเดือน ภาษี ประกันสังคม และสวัสดิการอัตโนมัติ",
                "ออก e-Payslip และเอกสารภาษีได้ในไม่กี่คลิก",
                "รองรับ OT, กะ, คอมมิชชั่น และค่าตอบแทนซับซ้อน",
              ]}
            />
            <ModuleCard
              title="โปรแกรมสรรหาว่าจ้าง (Recruitment)"
              subtitle="หาคนเก่งได้เร็วขึ้น"
              bullets={[
                "Applicant Tracking System (ATS) ครบวงจร",
                "ฟอร์มสมัครงานออนไลน์ เชื่อมต่อ Social &amp; Job Board",
                "ติดตามสถานะผู้สมัครและสื่อสารอัตโนมัติ",
              ]}
            />
            <ModuleCard
              title="โปรแกรม Time &amp; Attendance"
              subtitle="จัดการเวลาเข้าออกอย่างยืดหยุ่น"
              bullets={[
                "บันทึกเวลาเข้า–ออกผ่านมือถือ, GPS หรือเชื่อมเครื่องสแกน",
                "คำนวณ OT, กะ และสาย/ขาด โดยอัตโนมัติ",
                "แดชบอร์ดสรุปข้อมูลแบบ Real-time สำหรับหัวหน้างาน",
              ]}
            />
            <ModuleCard
              title="โปรแกรม HRIS &amp; Employee Self-service"
              subtitle="ฐานข้อมูลพนักงานดิจิทัล"
              bullets={[
                "จัดเก็บประวัติและเอกสารพนักงานครบถ้วนในที่เดียว",
                "พนักงานเข้าดูข้อมูลสวัสดิการ วันลา สลิปเงินเดือนได้เอง",
                "กำหนดสิทธิ์การเข้าถึงข้อมูลตามบทบาท รองรับ PDPA",
              ]}
            />
            <ModuleCard
              title="โปรแกรมฝึกอบรม (L&D / e-Learning)"
              subtitle="พัฒนาคนอย่างต่อเนื่อง"
              bullets={[
                "ออกแบบหลักสูตรออนไลน์ วัดผลการเรียนรู้แบบ Interactive",
                "ติดตามชั่วโมงอบรมและใบ Certificate รายบุคคล",
                "วิเคราะห์ Skill Gap เพื่อวางแผนพัฒนาบุคลากร",
              ]}
            />
            <ModuleCard
              title="โปรแกรม OD, KPI, PMS และประเมินผล"
              subtitle="เชื่อมกลยุทธ์องค์กรกับผลงานจริง"
              bullets={[
                "กำหนด OKR / KPI ลงสู่ระดับทีมและพนักงาน",
                "ประเมินผลรายรอบ พร้อมฟีเจอร์ 360° Feedback",
                "Dashboard สรุปคะแนนผลงาน ใช้วางแผนปรับเงินเดือน/โบนัส",
              ]}
            />
          </div>
        </div>
      </section>

      {/* PPT Strategy & Benefits */}
      <section className="relative bg-slate-900 py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.22),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(74,222,128,0.18),_transparent_55%)]" />
        <div className="relative z-10 mx-auto flex max-w-7xl flex-col gap-12 px-6 lg:flex-row">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              ขับเคลื่อนด้วยกลยุทธ์ PPT
              <span className="block text-lg font-semibold text-cyan-200 mt-2">
                People • Process • Technology
              </span>
            </h2>
            <p className="mt-4 text-sm sm:text-base text-slate-100/80 leading-relaxed">
              PHR-One ไม่ได้เป็นเพียงซอฟต์แวร์ แต่คือ framework การทำงานด้าน HR ที่เชื่อม{" "}
              <span className="font-semibold">คน–กระบวนการ–เทคโนโลยี</span> เข้าไว้ด้วยกัน
              เพื่อให้ทุกฝ่ายทำงานไปในทิศทางเดียวกับกลยุทธ์องค์กร รองรับการเติบโตในอนาคตอย่างยั่งยืน
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <PptPillar
                label="People"
                desc="ออกแบบประสบการณ์ของพนักงานให้ใช้งานง่าย รู้สึกมีส่วนร่วม และได้รับการดูแล"
              />
              <PptPillar
                label="Process"
                desc="มาตรฐานกระบวนการ HR ที่ชัดเจน ลดงานซ้ำซ้อน และควบคุมคุณภาพได้"
              />
              <PptPillar
                label="Technology"
                desc="แพลตฟอร์มคลาวด์ ปลอดภัย ปรับสเกลง่าย เชื่อมต่อระบบอื่นในองค์กรได้"
              />
            </div>
          </div>

          <div className="flex-1 rounded-3xl bg-white/5 p-6 sm:p-8 shadow-2xl shadow-slate-900/80 ring-1 ring-white/10">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200">
              <LineChart className="h-4 w-4" />
              <span>ผลลัพธ์ทางธุรกิจที่วัดได้ (SEO/GEO Friendly)</span>
            </div>
            <h3 className="mt-4 text-xl sm:text-2xl font-bold text-white">
              เปลี่ยนงานเอกสาร HR ให้กลายเป็นข้อมูลเชิงกลยุทธ์
            </h3>
            <p className="mt-3 text-sm sm:text-base text-slate-100/80">
              ข้อมูลจาก Payroll, Time &amp; Attendance, Performance และ Engagement ถูกดึงมาแสดงบน Dashboard เดียว
              เพื่อช่วยผู้บริหารตัดสินใจรวดเร็วและแม่นยำยิ่งขึ้น
            </p>

            <dl className="mt-6 grid gap-4 sm:grid-cols-2">
              <StatItem label="ลดเวลางานเอกสาร HR" value="70%" description="ลดเวลางาน Admin ซ้ำๆ ให้ทีมโฟกัสงานเชิงกลยุทธ์" />
              <StatItem label="ลดการใช้กระดาษ" value="100%" description="เดินหน้า Zero Paper HR อย่างแท้จริง" />
              <StatItem label="ความแม่นยำของข้อมูล" value="95%" description="ลดความผิดพลาดจากการคีย์ข้อมูลหลายระบบ" />
              <StatItem label="ความพึงพอใจของพนักงาน" value="+สูงขึ้น" description="บริการตนเองผ่านแอป (Self-service) ได้ทุกที่ทุกเวลา" />
            </dl>

            <p className="mt-6 text-xs text-slate-300">
              *ตัวเลขเป็นค่าเฉลี่ยจากประสบการณ์โครงการ Digital HR Transformation ที่ทีม Phichaya HR Solutions
              ดูแลให้กับองค์กรลูกค้าหลากหลายอุตสาหกรรม
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
            พร้อมยกระดับงาน HR ขององค์กรสู่ Zero Paper แล้วหรือยัง?
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm sm:text-base text-slate-600 leading-relaxed">
            ทีมที่ปรึกษาของเราเชี่ยวชาญทั้งด้าน{" "}
            <span className="font-semibold">HR, เทคโนโลยี และการเปลี่ยนผ่านสู่ Digital</span>{" "}
            พร้อมช่วยออกแบบโซลูชัน PHR-One ให้เหมาะกับองค์กรของคุณโดยเฉพาะ
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-4">
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-primary to-blue-600 px-8 py-3.5 text-sm sm:text-base font-semibold text-white shadow-lg shadow-primary/25 hover:shadow-xl hover:-translate-y-0.5 transition-all"
            >
              นัดหมายพูดคุยกับผู้เชี่ยวชาญ PHR-One
            </Link>
            <Link
              href="/blog/hr-software-zero-paper"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-8 py-3.5 text-sm sm:text-base font-semibold text-slate-700 hover:border-primary hover:text-primary hover:shadow-md transition-all"
            >
              อ่านบทความ: PHR-One โปรแกรม HR ครบวงจร Zero Paper
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

type ModuleCardProps = {
  title: string;
  subtitle: string;
  bullets: string[];
};

function ModuleCard({ title, subtitle, bullets }: ModuleCardProps) {
  return (
    <div className="flex h-full flex-col rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100 hover:shadow-xl hover:ring-emerald-200 transition-all">
      <h3 className="text-base sm:text-lg font-semibold text-slate-900">{title}</h3>
      <p className="mt-1 text-xs font-medium uppercase tracking-[0.18em] text-emerald-600">{subtitle}</p>
      <ul className="mt-4 space-y-2 text-sm text-slate-600 leading-relaxed">
        {bullets.map((item) => (
          <li key={item} className="flex gap-2">
            <span className="mt-[6px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-500" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

type PptPillarProps = {
  label: string;
  desc: string;
};

function PptPillar({ label, desc }: PptPillarProps) {
  return (
    <div className="rounded-2xl bg-white/5 p-4 sm:p-5 ring-1 ring-white/10">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">{label}</p>
      <p className="mt-2 text-sm text-slate-100/85 leading-relaxed">{desc}</p>
    </div>
  );
}

type StatItemProps = {
  label: string;
  value: string;
  description: string;
};

function StatItem({ label, value, description }: StatItemProps) {
  return (
    <div className="rounded-2xl bg-slate-900/60 p-4 ring-1 ring-white/10">
      <dt className="text-xs font-medium uppercase tracking-[0.18em] text-slate-300">{label}</dt>
      <dd className="mt-1 flex items-baseline gap-1">
        <span className="text-2xl font-bold text-emerald-400">{value}</span>
      </dd>
      <p className="mt-1 text-xs text-slate-300">{description}</p>
    </div>
  );
}


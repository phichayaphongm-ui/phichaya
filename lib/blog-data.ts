export type BlogPost = {
    slug: string;
    title: Record<'th' | 'en', string>;
    excerpt: Record<'th' | 'en', string>;
    content: Record<'th' | 'en', string>;
    date: string;
    author: string;
    category: string;
    image: string;
    tldr?: Record<'th' | 'en', string>; // GEO/AI friendly summary
};

export const blogPosts: BlogPost[] = [
    {
        slug: "hr-digital-transformation-2026",
        date: "2026-02-19",
        author: "Phichaya Team",
        category: "Technology",
        image: "/images/blog/digital-hr.jpg",
        title: {
            th: "HR Digital Transformation ในปี 2026: สิ่งที่ SME ไทยต้องรู้",
            en: "HR Digital Transformation in 2026: What Thai SMEs Need to Know"
        },
        excerpt: {
            th: "เจาะลึกแนวทางการเปลี่ยนผ่านจากระบบ Manual ไปสู่ระบบ Digital แบบครบวงจร เพื่อเพิ่มประสิทธิภาพและลดต้นทุน",
            en: "Deep dive into the transition from manual to digital systems to increase efficiency and reduce costs."
        },
        tldr: {
            th: "HR Digital Transformation ไม่ใช่แค่การใช้ Software แต่เป็นการออกแบบ Workflow ใหม่เพื่อรองรับ AI และการทำงานแบบ Hybrid",
            en: "HR Digital Transformation is not just about software; it's about redesigning workflows to support AI and hybrid work."
        },
        content: {
            th: `
        ## ทำไมต้องทำ Digital Transformation ตอนนี้?
        ในยุคที่ตลาดแรงงานมีการแข่งขันสูง การใช้ Excel หรือกระดาษในการจัดการงานบุคคลอาจไม่เพียงพออีกต่อไป...
        
        ### 1. การลดงานที่ซ้ำซ้อน (Automation)
        การใช้ระบบ Automation ช่วยลดเวลาในการคำนวณเงินเดือนจากเดิมหลายวันเหลือเพียงไม่กี่ชั่วโมง...
        
        ### 2. การตัดสินใจด้วยข้อมูล (Data-Driven)
        การมี Dashboard แสดงสถานะพนักงานแบบ Real-time ช่วยให้ผู้บริหารตัดสินใจเรื่องกำลังคนได้อย่างแม่นยำ...
        
        ### 3. การรองรับ PDPA
        ระบบ Digital ที่ดีจะมีระบบรักษาความปลอดภัยข้อมูลที่เป็นมาตรฐานสากล ช่วยลดความเสี่ยงทางกฎหมาย...
      `,
            en: `
        ## Why Digital Transformation Now?
        In an era of high labor market competition, using Excel or paper for HR management is no longer enough...
        
        ### 1. Reducing Redundancy (Automation)
        Using automation systems reduces payroll calculation time from several days to just a few hours...
        
        ### 2. Data-Driven Decision Making
        Having a real-time HR dashboard helps executives make accurate staffing decisions...
      `,
        }
    },
    {
        slug: "pdpa-for-hr-updates",
        date: "2026-02-10",
        author: "Legal Expert",
        category: "Legal",
        image: "/images/blog/pdpa-hr.jpg",
        title: {
            th: "เจาะลึก PDPA สำหรับ HR: ข้อควรระวังและการจัดการข้อมูลพนักงาน",
            en: "Deep Dive into PDPA for HR: Precautions and Employee Data Management"
        },
        excerpt: {
            th: "สรุปประเด็นสำคัญของ พ.ร.บ. คุ้มครองข้อมูลส่วนบุคคล ที่ฝ่ายบุคคลต้องเข้มงวดในปี 2026",
            en: "Summary of key PDPA issues that HR departments must be strict about in 2026."
        },
        tldr: {
            th: "HR ต้องมีเอกสารยินยอม (Consent) และนโยบายการเก็บข้อมูล (Privacy Notice) ที่ชัดเจนเพื่อเลี่ยงค่าปรับหลักล้าน",
            en: "HR must have clear Consent documents and Privacy Notices to avoid million-baht fines."
        },
        content: {
            th: `
        ## PDPA ไม่ใช่เรื่องไกลตัว
        พ.ร.บ. คุ้มครองข้อมูลส่วนบุคคล มีผลกระทบโดยตรงต่อฝ่ายบุคคล ตั้งแต่การสรรหาไปจนถึงการพ้นสภาพพนักงาน...
      `,
            en: `
        ## PDPA is Not Far Away
        The Personal Data Protection Act (PDPA) directly impacts HR, from recruitment to termination...
      `,
        }
    }
];

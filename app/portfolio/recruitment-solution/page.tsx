import type { Metadata } from "next";
import { RecruitmentSolutionContent } from "./content";

export const metadata: Metadata = {
    title:
        "Recruitment Solution | ตัวอย่างผลงาน | Phichaya HR Solutions",
    description:
        "ระบบสรรหาพนักงานยุคดิจิทัล (Digital Recruitment) ช่วยให้การสมัครงานง่าย รวดเร็ว และมีประสิทธิภาพ พร้อมระบบคัดกรองและรายงานผลแบบ Real-time",
    keywords:
        "Recruitment System, Digital Recruitment, HR Software, Applicant Tracking System, HR Solutions, ระบบสรรหา",
};

export default function RecruitmentSolutionPage() {
    return <RecruitmentSolutionContent />;
}

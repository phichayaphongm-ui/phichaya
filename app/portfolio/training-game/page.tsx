import type { Metadata } from "next";
import { TrainingGameContent } from "./content";

export const metadata: Metadata = {
    title:
        "Service Mind Simulation Game | ตัวอย่างผลงาน | Phichaya HR Solutions",
    description:
        "เกมฝึกอบรมแบบจำลองสถานการณ์ (Scenario-based Training) สำหรับ e-learning ช่วยให้พนักงานเรียนรู้ผ่านสถานการณ์จริงในรูปแบบเกม สนุก เข้าใจง่าย และมีส่วนร่วมสูง",
    keywords:
        "Service Mind, Training Game, Simulation, E-learning, HR Training, Scenario-based Training",
};

export default function TrainingGamePage() {
    return <TrainingGameContent />;
}

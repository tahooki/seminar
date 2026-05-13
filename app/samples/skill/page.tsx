import type { Metadata } from "next";
import { SampleShell } from "@/src/presentation/components/SampleShell";
import {
  AiBasicSlideViewer,
  type AiBasicSlide,
} from "../ai-basic/AiBasicSlideViewer";

export const metadata: Metadata = {
  title: "Skill 슬라이드 | Seminar Visual Lab",
  description:
    "Codex Skill과 Runtime 주입 흐름을 넘겨 보며 발표할 수 있는 슬라이드 페이지",
};

const slides: AiBasicSlide[] = Array.from({ length: 12 }, (_, index) => {
  const number = String(index).padStart(2, "0");

  return {
    id: `skill-slide-${number}`,
    number,
    src: `/skill/slide-${number}.png`,
    alt: `Skill ${number}번 슬라이드`,
  };
});

export default function SkillPage() {
  return (
    <SampleShell
      eyebrow="Presentation / Skill"
      title="Skill 슬라이드"
      description="Skill을 파일 기반 작업 매뉴얼, metadata discovery, Runtime context injection 흐름으로 설명하는 발표 덱입니다."
      note="방향키, Space, Home/End로 이동하고 F로 전체 화면을 켤 수 있습니다."
    >
      <AiBasicSlideViewer slides={slides} ariaLabel="Skill 슬라이드 뷰어" />
    </SampleShell>
  );
}

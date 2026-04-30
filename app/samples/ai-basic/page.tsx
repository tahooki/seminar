import type { Metadata } from "next";
import { SampleShell } from "@/src/presentation/components/SampleShell";
import { AiBasicSlideViewer, type AiBasicSlide } from "./AiBasicSlideViewer";

export const metadata: Metadata = {
  title: "AI Agent 기초 슬라이드 | Seminar Visual Lab",
  description: "AI Agent 기초 이미지를 넘겨 보며 발표할 수 있는 슬라이드 페이지",
};

const slides: AiBasicSlide[] = Array.from({ length: 16 }, (_, index) => {
  const number = String(index).padStart(2, "0");

  return {
    id: `slide-${number}`,
    number,
    src: `/ai-basic/slide-${number}.png`,
    alt: `AI Agent 기초 ${number}번 슬라이드`,
  };
});

export default function AiBasicPage() {
  return (
    <SampleShell
      eyebrow="Presentation / AI Agent Basics"
      title="AI Agent 기초 슬라이드"
      description="생성된 슬라이드 이미지만 크게 띄워 발표용으로 넘겨볼 수 있게 구성했습니다."
      note="방향키, Space, Home/End로 이동하고 F로 전체 화면을 켤 수 있습니다."
    >
      <AiBasicSlideViewer slides={slides} />
    </SampleShell>
  );
}

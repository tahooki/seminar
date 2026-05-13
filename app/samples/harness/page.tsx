import type { Metadata } from "next";
import { SampleShell } from "@/src/presentation/components/SampleShell";
import {
  AiBasicSlideViewer,
  type AiBasicSlide,
} from "../ai-basic/AiBasicSlideViewer";

export const metadata: Metadata = {
  title: "AI Harness 슬라이드 | Seminar Visual Lab",
  description:
    "AI Harness의 제약, 피드백, 반복 구조를 넘겨 보며 발표할 수 있는 슬라이드 페이지",
};

const slides: AiBasicSlide[] = Array.from({ length: 13 }, (_, index) => {
  const number = String(index).padStart(2, "0");

  return {
    id: `harness-slide-${number}`,
    number,
    src: `/harness/slide-${number}.png`,
    alt: `AI Harness ${number}번 슬라이드`,
  };
});

export default function HarnessPage() {
  return (
    <SampleShell
      eyebrow="Presentation / AI Harness"
      title="AI Harness 슬라이드"
      description="AI가 생성한 결과를 검증하고, 실패 이유를 피드백으로 돌려보내며, 완료 기준까지 반복하는 구조를 설명하는 발표 덱입니다."
      note="방향키, Space, Home/End로 이동하고 F로 전체 화면을 켤 수 있습니다."
    >
      <AiBasicSlideViewer
        slides={slides}
        ariaLabel="AI Harness 슬라이드 뷰어"
      />
    </SampleShell>
  );
}

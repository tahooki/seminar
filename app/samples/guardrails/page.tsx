import type { Metadata } from "next";
import { SampleShell } from "@/src/presentation/components/SampleShell";
import {
  AiBasicSlideViewer,
  type AiBasicSlide,
} from "../ai-basic/AiBasicSlideViewer";

export const metadata: Metadata = {
  title: "Guardrails 슬라이드 | Seminar Visual Lab",
  description:
    "Agent Guardrails 발표 이미지를 넘겨 보며 발표할 수 있는 슬라이드 페이지",
};

const slides: AiBasicSlide[] = Array.from({ length: 10 }, (_, index) => {
  const number = String(index).padStart(2, "0");

  return {
    id: `guardrails-slide-${number}`,
    number,
    src: `/guardrails/slide-${number}.png`,
    alt: `Guardrails ${number}번 슬라이드`,
  };
});

export default function GuardrailsPage() {
  return (
    <SampleShell
      eyebrow="Presentation / Guardrails"
      title="Guardrails 슬라이드"
      description="Agent가 실제 도구를 실행하기 전에 Runtime에서 정책, 승인, 차단을 어떻게 적용하는지 설명하는 발표 덱입니다."
      note="방향키, Space, Home/End로 이동하고 F로 전체 화면을 켤 수 있습니다."
    >
      <AiBasicSlideViewer
        slides={slides}
        ariaLabel="Guardrails 슬라이드 뷰어"
      />
    </SampleShell>
  );
}

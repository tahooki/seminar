import type { Metadata } from "next";
import { SampleShell } from "@/src/presentation/components/SampleShell";
import {
  AiBasicSlideViewer,
  type AiBasicSlide,
} from "../ai-basic/AiBasicSlideViewer";

export const metadata: Metadata = {
  title: "Agents란 무엇인가 슬라이드 | Seminar Visual Lab",
  description:
    "Agents란 무엇인가 발표 이미지를 넘겨 보며 발표할 수 있는 슬라이드 페이지",
};

const slides: AiBasicSlide[] = Array.from({ length: 19 }, (_, index) => {
  const number = String(index).padStart(2, "0");

  return {
    id: `agents-slide-${number}`,
    number,
    src: `/agents/slide-${number}.png`,
    alt: `Agents란 무엇인가 ${number}번 슬라이드`,
  };
});

export default function AgentsPage() {
  return (
    <SampleShell
      eyebrow="Presentation / Agents"
      title="Agents란 무엇인가 슬라이드"
      description="크레용 톤의 로봇 가이드 이미지로 Agent의 개념, 코드 구조, Runtime, Tools, MCP, Memory, Guardrails를 순서대로 설명하는 발표 덱입니다."
      note="방향키, Space, Home/End로 이동하고 F로 전체 화면을 켤 수 있습니다."
    >
      <AiBasicSlideViewer
        slides={slides}
        ariaLabel="Agents란 무엇인가 슬라이드 뷰어"
      />
    </SampleShell>
  );
}

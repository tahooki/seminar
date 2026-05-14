import type { Metadata } from "next";
import { SampleShell } from "@/src/presentation/components/SampleShell";
import {
  AiBasicSlideViewer,
  type AiBasicSlide,
} from "../ai-basic/AiBasicSlideViewer";

export const metadata: Metadata = {
  title: "Open Design Agent Harness 슬라이드 | Seminar Visual Lab",
  description:
    "한 문장 prompt가 실제 디자인 artifact가 되는 Open Design Agent Harness 구조를 설명하는 발표 덱",
};

const slides: AiBasicSlide[] = Array.from({ length: 18 }, (_, index) => {
  const number = String(index + 1).padStart(2, "0");

  return {
    id: `open-design-harness-slide-${number}`,
    number,
    src: `/open-design-harness/slide-${number}.png`,
    alt: `Open Design Agent Harness ${number}번 슬라이드`,
  };
});

export default function OpenDesignHarnessPage() {
  return (
    <SampleShell
      eyebrow="Presentation / Open Design Agent Harness"
      title="Open Design Agent Harness 슬라이드"
      description="한 문장으로 받은 모호한 요청이 discovery, skill, design system, CLI adapter, preview를 거쳐 실제 디자인 artifact가 되는 흐름을 설명하는 발표 덱입니다."
      note="방향키, Space, Home/End로 이동하고 F로 전체 화면을 켤 수 있습니다."
    >
      <AiBasicSlideViewer
        slides={slides}
        ariaLabel="Open Design Agent Harness 슬라이드 뷰어"
      />
    </SampleShell>
  );
}

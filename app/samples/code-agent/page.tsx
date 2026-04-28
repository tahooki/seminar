import type { Metadata } from "next";
import { SampleShell } from "@/src/presentation/components/SampleShell";
import {
  AiBasicSlideViewer,
  type AiBasicSlide,
} from "../ai-basic/AiBasicSlideViewer";

export const metadata: Metadata = {
  title: "Code Agent 온보딩 슬라이드 | Seminar Visual Lab",
  description:
    "Code Agent 온보딩 이미지를 넘겨 보며 발표할 수 있는 슬라이드 페이지",
};

const slideFiles = [
  "slide-00-cover.png",
  "slide-01-why-code-agent.png",
  "slide-02-autocomplete.png",
  "slide-03-code-conversation.png",
  "slide-04-file-editing-agent.png",
  "slide-05-work-loop.png",
  "slide-06-mcp.png",
  "slide-07-cli-agent.png",
  "slide-08-agents-md.png",
  "slide-09-skills.png",
  "slide-10-harness.png",
  "slide-11-flow-summary.png",
  "slide-12-closing-questions.png",
] as const;

const slides: AiBasicSlide[] = slideFiles.map((fileName, index) => {
  const number = String(index).padStart(2, "0");

  return {
    id: `code-agent-slide-${number}`,
    number,
    src: `/code-agent/${fileName}`,
    alt: `Code Agent 온보딩 ${number}번 슬라이드`,
  };
});

export default function CodeAgentPage() {
  return (
    <SampleShell
      eyebrow="Presentation / Code Agent"
      title="Code Agent 온보딩 슬라이드"
      description="생성된 Code Agent 온보딩 이미지를 발표용으로 크게 띄우고 넘겨볼 수 있게 구성했습니다."
      note="방향키, Space, Home/End로 이동하고 F로 전체 화면을 켤 수 있습니다."
    >
      <AiBasicSlideViewer
        slides={slides}
        ariaLabel="Code Agent 온보딩 슬라이드 뷰어"
      />
    </SampleShell>
  );
}

import type { Metadata } from "next";
import { SampleShell } from "@/src/presentation/components/SampleShell";
import {
  AiBasicSlideViewer,
  type AiBasicSlide,
} from "../ai-basic/AiBasicSlideViewer";

export const metadata: Metadata = {
  title: "MCP 슬라이드 | Seminar Visual Lab",
  description:
    "MCP와 Agent 도구 연결 구조를 넘겨 보며 발표할 수 있는 슬라이드 페이지",
};

const slides: AiBasicSlide[] = Array.from({ length: 12 }, (_, index) => {
  const number = String(index).padStart(2, "0");

  return {
    id: `mcp-slide-${number}`,
    number,
    src: `/mcp/slide-${number}.png`,
    alt: `MCP ${number}번 슬라이드`,
  };
});

export default function McpPage() {
  return (
    <SampleShell
      eyebrow="Presentation / MCP"
      title="MCP 슬라이드"
      description="MCP Server, MCP Client, tools/list, tools/call, tool result 재주입 흐름을 순서대로 보여주는 발표 덱입니다."
      note="방향키, Space, Home/End로 이동하고 F로 전체 화면을 켤 수 있습니다."
    >
      <AiBasicSlideViewer slides={slides} ariaLabel="MCP 슬라이드 뷰어" />
    </SampleShell>
  );
}

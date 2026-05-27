import type { Metadata } from "next";
import { SampleShell } from "@/src/presentation/components/SampleShell";
import {
  AiBasicSlideViewer,
  type AiBasicSlide,
} from "../ai-basic/AiBasicSlideViewer";

export const metadata: Metadata = {
  title: "A2UI POC 이미지 슬라이드 | Seminar Visual Lab",
  description:
    "Agent와 A2UI POC 발표용 생성 이미지와 실제 POC 캡처를 넘겨 보며 발표할 수 있는 슬라이드 페이지",
};

const slides: AiBasicSlide[] = [
  {
    id: "a2ui-poc-slide-00",
    number: "00",
    src: "/images/a2ui-poc/generated/slide-00-opening.png",
    alt: "Agent와 A2UI 오프닝 슬라이드",
  },
  {
    id: "a2ui-poc-slide-01",
    number: "01",
    src: "/images/a2ui-poc/generated/slide-01-flow.png",
    alt: "오늘의 흐름 슬라이드",
  },
  {
    id: "a2ui-poc-slide-02",
    number: "02",
    src: "/images/a2ui-poc/generated/slide-02-question.png",
    alt: "답변만 잘하면 충분할까 질문 슬라이드",
  },
  {
    id: "a2ui-poc-slide-03",
    number: "03",
    src: "/images/a2ui-poc/generated/slide-03-agent.png",
    alt: "Agent란 무엇인지 설명하는 슬라이드",
  },
  {
    id: "a2ui-poc-slide-04",
    number: "04",
    src: "/images/a2ui-poc/generated/slide-04-agent-components.png",
    alt: "Agent 구성 요소 슬라이드",
  },
  {
    id: "a2ui-poc-slide-05",
    number: "05",
    src: "/images/a2ui-poc/generated/slide-05-llm.png",
    alt: "LLM은 Agent의 두뇌 역할이라는 슬라이드",
  },
  {
    id: "a2ui-poc-slide-06",
    number: "06",
    src: "/images/a2ui-poc/generated/slide-06-mcp.png",
    alt: "MCP는 도구 연결 통로라는 슬라이드",
  },
  {
    id: "a2ui-poc-slide-07",
    number: "07",
    src: "/images/a2ui-poc/generated/slide-07-skill.png",
    alt: "Skill은 작업법이라는 슬라이드",
  },
  {
    id: "a2ui-poc-slide-08",
    number: "08",
    src: "/images/a2ui-poc/generated/slide-08-background.png",
    alt: "A2UI POC 배경 슬라이드",
  },
  {
    id: "a2ui-poc-slide-09",
    number: "09",
    src: "/images/a2ui-poc/generated/slide-09-a2ui.png",
    alt: "A2UI란 무엇인지 설명하는 슬라이드",
  },
  {
    id: "a2ui-poc-slide-10",
    number: "10",
    src: "/images/a2ui-poc/generated/slide-10-direction.png",
    alt: "UI를 어디까지 Agent에게 맡길지 고민하는 슬라이드",
  },
  {
    id: "a2ui-poc-slide-11",
    number: "11",
    src: "/images/a2ui-poc/generated/slide-11-operation.png",
    alt: "A2UI 동작 방식 슬라이드",
  },
  {
    id: "a2ui-poc-slide-12",
    number: "12",
    src: "/images/a2ui-poc/poc-flow/01-table.png",
    alt: "목록 요청에 테이블 UI를 렌더링한 A2UI POC 화면",
  },
  {
    id: "a2ui-poc-slide-13",
    number: "13",
    src: "/images/a2ui-poc/poc-flow/02-card-list.png",
    alt: "일부 요청에 카드 리스트 UI를 렌더링한 A2UI POC 화면",
  },
  {
    id: "a2ui-poc-slide-14",
    number: "14",
    src: "/images/a2ui-poc/poc-flow/03-profile-card.png",
    alt: "상세 요청에 단일 상세 카드 UI를 렌더링한 A2UI POC 화면",
  },
  {
    id: "a2ui-poc-slide-15",
    number: "15",
    src: "/images/a2ui-poc/generated/slide-15-closing.png",
    alt: "더 똑똑한 Chatbot Agent 마무리 슬라이드",
  },
];

export default function A2UIPocSlidesPage() {
  return (
    <SampleShell
      eyebrow="Presentation / A2UI POC Slides"
      title="Agent와 A2UI POC 이미지 슬라이드"
      description="생성한 크레용 스타일 개념 이미지와 실제 Chatbot A2UI POC 캡처 3장을 순서대로 넘겨 보며 발표할 수 있는 스와이프 덱입니다."
      note="모바일에서는 좌우 스와이프로 넘기고, 격자 아이콘으로 전체 슬라이드 보기를 열 수 있습니다."
    >
      <AiBasicSlideViewer
        slides={slides}
        ariaLabel="Agent와 A2UI POC 이미지 슬라이드 뷰어"
      />
    </SampleShell>
  );
}

import type { Metadata } from "next";
import { SampleShell } from "@/src/presentation/components/SampleShell";
import {
  AiBasicSlideViewer,
  type AiBasicSlide,
} from "../ai-basic/AiBasicSlideViewer";

export const metadata: Metadata = {
  title: "A2UI POC 이미지 슬라이드 | Seminar Visual Lab",
  description:
    "Agent, MCP, Skill, RAG, A2UI POC 흐름을 넘겨 보며 발표할 수 있는 최종 이미지 슬라이드 페이지",
};

const slideEntries = [
  ["00", "/images/a2ui-poc/final/slide-00-title.png", "Agent와 A2UI POC 타이틀 슬라이드"],
  ["01", "/images/a2ui-poc/final/slide-01-agenda.png", "오늘의 발표 순서 슬라이드"],
  ["02", "/images/a2ui-poc/final/slide-02-ai-names.png", "최신 AI 모델과 제품 이름을 소개하는 슬라이드"],
  ["03", "/images/a2ui-poc/final/slide-03-agent-question.png", "Agent란 무엇인지 질문하는 슬라이드"],
  ["04", "/images/a2ui-poc/final/slide-04-agent-system.png", "Agent는 실행 시스템이라는 구성도 슬라이드"],
  ["05", "/images/a2ui-poc/final/slide-05-gpt-chatgpt-question.png", "GPT-5.5와 ChatGPT가 같은 Agent인지 묻는 슬라이드"],
  ["06", "/images/a2ui-poc/final/slide-06-model-product.png", "LLM 모델과 Agent처럼 동작하는 제품을 비교하는 슬라이드"],
  ["07", "/images/a2ui-poc/final/slide-07-llm.png", "LLM은 문맥을 바탕으로 글을 생성한다는 슬라이드"],
  ["08", "/images/a2ui-poc/final/slide-08-llm-generates.png", "LLM이 입력 문맥으로 답변을 생성하는 과정 슬라이드"],
  ["09", "/images/a2ui-poc/final/slide-09-agent-expands-llm.png", "Agent가 LLM을 업무로 확장한다는 슬라이드"],
  ["10", "/images/a2ui-poc/final/slide-10-agent-examples.png", "ChatGPT Claude Code Figma Make 등 Agent 예시 슬라이드"],
  ["11", "/images/a2ui-poc/final/slide-11-early-agent.png", "초기 Agent 구성 슬라이드"],
  ["12", "/images/a2ui-poc/final/slide-12-code-execution.png", "코드 실행이 붙은 Agent 슬라이드"],
  ["13", "/images/a2ui-poc/final/slide-13-more-tools.png", "Agent가 더 많은 외부 도구를 쓰고 싶어지는 전환 슬라이드"],
  ["14", "/images/a2ui-poc/final/slide-14-mcp-intro.png", "MCP는 외부 도구 연결 방식이라는 슬라이드"],
  ["15", "/images/a2ui-poc/final/slide-15-mcp-structure.png", "MCP 구조와 Tool List MCP Server 함수 호출 슬라이드"],
  ["16", "/images/a2ui-poc/final/slide-16-figma-mcp-example.png", "Figma MCP 사용 예 슬라이드"],
  ["17", "/images/a2ui-poc/final/slide-17-tools-not-enough.png", "MCP 도구만으로는 부족하다는 슬라이드"],
  ["18", "/images/a2ui-poc/final/slide-18-skill-intro.png", "Skill은 Agent의 작업 매뉴얼이라는 슬라이드"],
  ["19", "/images/a2ui-poc/final/slide-19-skill-flow.png", "Skill 동작 흐름 슬라이드"],
  ["20", "/images/a2ui-poc/final/slide-20-rag-intro.png", "RAG는 찾아보고 답하기라는 슬라이드"],
  ["21", "/images/a2ui-poc/final/slide-21-rag-example.png", "RAG로 사내 배포 승인 기준을 답하는 사용 예 슬라이드"],
  ["22", "/images/a2ui-poc/final/slide-22-agent-components-extra.png", "Agent를 더 강하게 만드는 Memory Runtime Guardrails Observability 슬라이드"],
  ["23", "/images/a2ui-poc/final/slide-23-how-show-result.png", "Agent 결과를 어떻게 보여줄지 A2UI로 전환하는 슬라이드"],
  ["24", "/images/a2ui-poc/generated/slide-11-background.png", "답변만으로 부족한 순간과 A2UI POC 배경 슬라이드"],
  ["25", "/images/a2ui-poc/final/slide-25-a2ui-intro.png", "A2UI는 Agent to UI라는 슬라이드"],
  ["26", "/images/a2ui-poc/final/slide-26-html-css-risk.png", "HTML CSS를 매번 생성하면 위험하다는 슬라이드"],
  ["27", "/images/a2ui-poc/generated/slide-13-direction.png", "Agent에게 UI를 어디까지 맡길지 방향성을 고민하는 슬라이드"],
  ["28", "/images/a2ui-poc/final/slide-28-a2ui-poc-structure.png", "A2UI Component Admin MCP Agent Function으로 구성된 A2UI POC 주요 구성 슬라이드"],
  ["29", "/images/a2ui-poc/generated/slide-18-admin-ui-catalog.png", "가치 있는 UI를 미리 만들어 Admin UI Catalog에 등록하는 슬라이드"],
  ["30", "/images/a2ui-poc/generated/slide-19-api-data-profile.png", "API Registry와 Data Profile로 A2UI 데이터를 설명하는 슬라이드"],
  ["31", "/images/a2ui-poc/generated/slide-20-a2ui-runtime-flow.png", "A2UI 실제 동작 방식 사용자 질문 API 선택 파라미터 추출 SurfaceRenderer 슬라이드"],
  ["32", "/images/a2ui-poc/poc-flow/01-table.png", "대시보드 전체 화면에서 목록 요청에 테이블 UI를 렌더링한 A2UI POC 화면"],
  ["33", "/images/a2ui-poc/poc-flow/01-table-chat-crop.png", "채팅 영역을 확대해 목록 요청과 테이블 UI를 보여주는 A2UI POC 화면"],
  ["34", "/images/a2ui-poc/poc-flow/02-card-list-chat-crop.png", "채팅 영역을 확대해 5건 카드 리스트 UI를 보여주는 A2UI POC 화면"],
  ["35", "/images/a2ui-poc/poc-flow/03-profile-card-chat-crop.png", "채팅 영역을 확대해 1건 상세 카드 UI를 보여주는 A2UI POC 화면"],
  ["36", "/images/a2ui-poc/generated/slide-18-a2ui-need.png", "A2UI가 필요한 순간은 업무가 복잡하거나 반복되거나 수정이 어려울 때라는 슬라이드"],
  ["37", "/images/a2ui-poc/generated/slide-19-closing.png", "LLM에서 Agent를 거쳐 A2UI 업무 화면으로 확장되는 마무리 슬라이드"],
  ["38", "/images/a2ui-poc/generated/slide-20-qa.png", "QA 질문 받겠습니다 슬라이드"],
] as const;

const slides: AiBasicSlide[] = slideEntries.map(([number, src, alt]) => ({
  id: `a2ui-poc-slide-${number}`,
  number,
  src,
  alt,
}));

export default function A2UIPocSlidesPage() {
  return (
    <SampleShell
      eyebrow="Presentation / A2UI POC Slides"
      title="Agent와 A2UI POC 이미지 슬라이드"
      description="Agent의 개념에서 MCP, Skill, RAG, A2UI POC 화면까지 이어지는 39장 스와이프 덱입니다."
      note="모바일에서는 좌우 스와이프로 넘기고, 격자 아이콘으로 전체 슬라이드 보기를 열 수 있습니다."
    >
      <AiBasicSlideViewer
        slides={slides}
        ariaLabel="Agent와 A2UI POC 이미지 슬라이드 뷰어"
      />
    </SampleShell>
  );
}

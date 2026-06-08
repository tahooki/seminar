import type { Metadata } from "next";
import { SampleShell } from "@/src/presentation/components/SampleShell";
import {
  AiBasicSlideViewer,
  type AiBasicSlide,
} from "../ai-basic/AiBasicSlideViewer";

export const metadata: Metadata = {
  title: "Chatbot A2UI 제품 소개 슬라이드 | Seminar Visual Lab",
  description:
    "Chatbot A2UI 제품 소개용 7장 이미지 슬라이드를 넘겨 볼 수 있는 발표 페이지",
};

const slideEntries = [
  [
    "01",
    "/images/a2ui-poc/product-intro/slides/slide-01-product-definition.png",
    "기존 고객 Agent와 API 뒤에 A2UI가 붙어 조회 결과 화면을 표시하는 연결 흐름 슬라이드",
  ],
  [
    "02",
    "/images/a2ui-poc/product-intro/slides/slide-03-screen-table.png",
    "여러 행 비교 요청이 표 화면으로 표시되는 실제 화면 슬라이드",
  ],
  [
    "03",
    "/images/a2ui-poc/product-intro/slides/slide-04-screen-card-list.png",
    "빠른 훑어보기 요청이 카드 목록 화면으로 표시되는 실제 화면 슬라이드",
  ],
  [
    "04",
    "/images/a2ui-poc/product-intro/slides/slide-05-screen-profile.png",
    "한 건 분석 요청이 프로필 화면으로 표시되는 실제 화면 슬라이드",
  ],
  [
    "05",
    "/images/a2ui-poc/product-intro/slides/slide-06-runtime-flow.png",
    "고객 서비스 기존 흐름과 A2UI 화면화 흐름을 나눈 8단계 작동 순서 슬라이드",
  ],
  [
    "06",
    "/images/a2ui-poc/product-intro/slides/slide-08-role-separation.png",
    "고객 서비스는 Agent와 API를 유지하고 A2UI는 결과 화면을 맡는 역할 분리 슬라이드",
  ],
  [
    "07",
    "/images/a2ui-poc/product-intro/slides/slide-09-expansion-roadmap.png",
    "템플릿 선택에서 데이터 기반 UI 제안으로 확장되는 로드맵 슬라이드",
  ],
] as const;

const slides: AiBasicSlide[] = slideEntries.map(([number, src, alt]) => ({
  id: `a2ui-product-intro-slide-${number}`,
  number,
  src,
  alt,
}));

export default function A2UIProductIntroSlidesPage() {
  return (
    <SampleShell
      eyebrow="Presentation / A2UI Product Intro"
      title="Chatbot A2UI 제품 소개 이미지 슬라이드"
      description="고객 서비스의 기존 Agent/API 흐름 뒤에 A2UI Admin MCP와 Renderer를 붙여 조회 결과 화면을 표시하는 흐름을 7장 이미지 슬라이드로 정리했습니다."
      note="모바일에서는 좌우 스와이프로 넘기고, 격자 아이콘으로 전체 슬라이드 보기를 열 수 있습니다."
    >
      <div className="tag-row" aria-label="다운로드 링크">
        <a
          className="tag"
          href="/docs/20260608_a2ui_product_intro_image_slides.pdf"
        >
          PDF 열기
        </a>
        <a
          className="tag"
          href="/docs/20260605_a2ui_product_intro_presentation.html"
        >
          HTML 제품 소개 보기
        </a>
      </div>

      <AiBasicSlideViewer
        slides={slides}
        ariaLabel="Chatbot A2UI 제품 소개 이미지 슬라이드 뷰어"
      />
    </SampleShell>
  );
}

import type { Metadata } from "next";
import { SampleShell } from "@/src/presentation/components/SampleShell";
import {
  AiBasicSlideViewer,
  type AiBasicSlide,
} from "../ai-basic/AiBasicSlideViewer";

export const metadata: Metadata = {
  title: "Chatbot A2UI 제품 소개 슬라이드 | Seminar Visual Lab",
  description:
    "Chatbot A2UI 제품 소개용 9장 이미지 슬라이드를 넘겨 볼 수 있는 발표 페이지",
};

const slideEntries = [
  [
    "01",
    "/images/a2ui-poc/product-intro/slides/slide-01-product-definition.png",
    "질문을 업무 화면으로 바꾸는 Chatbot A2UI 제품 정의 슬라이드",
  ],
  [
    "02",
    "/images/a2ui-poc/product-intro/slides/slide-02-product-value.png",
    "질문 하나가 등록된 조회 결과 화면으로 이어지는 제품 가치 슬라이드",
  ],
  [
    "03",
    "/images/a2ui-poc/product-intro/slides/slide-03-screen-table.png",
    "여러 행 비교 요청이 표 화면으로 표시되는 실제 화면 슬라이드",
  ],
  [
    "04",
    "/images/a2ui-poc/product-intro/slides/slide-04-screen-card-list.png",
    "빠른 훑어보기 요청이 카드 목록 화면으로 표시되는 실제 화면 슬라이드",
  ],
  [
    "05",
    "/images/a2ui-poc/product-intro/slides/slide-05-screen-profile.png",
    "한 건 분석 요청이 프로필 화면으로 표시되는 실제 화면 슬라이드",
  ],
  [
    "06",
    "/images/a2ui-poc/product-intro/slides/slide-06-runtime-flow.png",
    "A2UI가 사용자 질문에서 Renderer 표시까지 이어지는 작동 순서 슬라이드",
  ],
  [
    "07",
    "/images/a2ui-poc/product-intro/slides/slide-07-integration-points.png",
    "A2UI 코드를 네 지점으로 연결하는 연동 구조 슬라이드",
  ],
  [
    "08",
    "/images/a2ui-poc/product-intro/slides/slide-08-role-separation.png",
    "Library Team이 관리하고 End User는 사용만 하는 역할 분리 슬라이드",
  ],
  [
    "09",
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
      description="Chatbot A2UI가 자연어 질문을 업무 화면으로 바꾸고, 관리된 템플릿과 규칙 위에서 확장되는 흐름을 9장 이미지 슬라이드로 정리했습니다."
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

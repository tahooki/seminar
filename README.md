# Seminar

이 프로젝트는 세미나 발표자료를 HTML 기반의 한 페이지로 만들기 위한 Next.js 프로젝트입니다.

목표는 발표자가 브라우저에서 바로 사용할 수 있는 발표자료를 만들고, 그 과정에서 재사용 가능한 발표용 디자인 시스템을 구축하는 것입니다. 한글과 영어가 모두 편하게 읽히는 둥근 고딕 계열 타이포그래피, 발표용 슬라이드 컴포넌트, 코드 블록, Mermaid.js 기반 다이어그램 등을 활용하는 방향으로 설계합니다.

프로젝트 기획서는 [docs/presentation-system-plan.md](docs/presentation-system-plan.md)에 정리되어 있습니다.
A2UI 도입 발표 기획서는 [docs/a2ui-presentation-plan.md](docs/a2ui-presentation-plan.md)에 정리되어 있습니다.

## 샘플 페이지

- `/` - 시각화 샘플 허브
- `/samples/guides` - 발표 시각화 선택 가이드 예제 모음
- `/samples/guides/mermaid-flow` - Mermaid 기반 흐름/상태 전이 예제
- `/samples/guides/mermaid-sequence` - Mermaid sequence 기반 메시지 순서 예제
- `/samples/guides/mermaid-timeline-roadmap` - Mermaid 기반 일정/로드맵 예제
- `/samples/guides/mermaid-state-machine` - Mermaid state diagram 기반 lifecycle 예제
- `/samples/guides/mermaid-erd-schema` - Mermaid ERD 기반 schema 관계 예제
- `/samples/guides/user-journey-flow` - 사용자 여정과 경험 흐름 예제
- `/samples/guides/swimlane-ownership` - 역할별 책임 lane 예제
- `/samples/guides/quadrant-priority-map` - 2x2 우선순위 판단 예제
- `/samples/guides/risk-tradeoff-board` - 리스크와 대응책 보드 예제
- `/samples/guides/rough-sketch-flow` - Rough.js 기반 손그림 단계 흐름 예제
- `/samples/guides/rough-cycle` - Rough.js 기반 반복 사이클 예제
- `/samples/guides/markmap-concept` - Markmap 기반 개념 지도 예제
- `/samples/guides/react-flow-architecture` - React Flow 기반 아키텍처 맵 예제
- `/samples/guides/observable-plot-comparison` - Observable Plot 기반 수치 비교 예제
- `/samples/guides/plot-trend-story` - Observable Plot 기반 추세선 예제
- `/samples/guides/plot-annotation` - Observable Plot 기반 annotation 차트 예제
- `/samples/guides/comparison-matrix` - 비교표 기반 선택 기준 예제
- `/samples/guides/code-walkthrough` - 코드 블록 + 흐름도 기반 기술 설명 예제
- `/samples/guides/before-after-visual` - 시각화 전후 비교 예제
- `/samples/guides/visual-picker` - 장면별 도구 추천 인터랙티브 예제
- `/samples/guides/slide-pattern-gallery` - 발표 기본 블록 갤러리 예제
- `/samples/guides/prompt-to-slide-pipeline` - 프롬프트에서 발표 페이지까지의 생성 파이프라인 예제
- `/samples/guides/talk-track-notes` - 발표자 대본과 화면 문장 분리 예제
- `/samples/guides/lucide-status-ui` - Lucide 기반 상태 UI 예제
- `/samples/guides/composed-research-story` - Markmap + Plot + Mermaid 조합 예제
- `/samples/guides/composed-system-briefing` - React Flow + Mermaid + Plot 조합 예제
- `/samples/idea-cycle` - Rough.js + Mermaid를 섞은 Napkin 스타일 아이디어 순환 샘플
- `/samples/system-map` - React Flow + Mermaid를 섞은 시스템 맵 샘플
- `/samples/data-story` - Observable Plot + Markmap을 섞은 데이터 설명 샘플
- `/samples/a2ui` - A2UI 도입 기획서를 바탕으로 만든 HTML 발표 덱

## 설치된 시각화 라이브러리

- `mermaid` - 정형 다이어그램
- `roughjs` - 손그림 스타일 도형과 화살표
- `@xyflow/react` - 인터랙티브 노드 그래프
- `markmap-lib`, `markmap-view` - Markdown 기반 마인드맵
- `@observablehq/plot` - 데이터 차트
- `lucide-react` - 발표 UI 아이콘

## 개발 실행

개발 서버를 실행합니다.

```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 엽니다.
이미 3000번 포트가 사용 중이면 Next.js가 다른 포트를 안내합니다.

## 검증

```bash
npm run lint
npm run build
```

## 주요 위치

- `app/page.tsx` - 샘플 허브
- `app/samples/*/page.tsx` - 시각화 조합 샘플
- `src/presentation/components` - 발표자료용 시각화 컴포넌트
- `app/globals.css` - 발표 톤, 색상, 레이아웃 토큰
- `docs/presentation-visual-guide.md` - 어떤 그림에 어떤 도구를 쓸지 정리한 최종 선택 가이드
- `docs/presentation-guides` - 라이브러리별 발표 시각화 가이드
- `skills/seminar-presentation-builder` - 발표 페이지 제작용 Codex skill 원본

## Next.js 주의사항

이 프로젝트의 Next.js 버전은 기존 지식과 다른 부분이 있을 수 있습니다.
코드를 변경하기 전에는 `node_modules/next/dist/docs/` 안의 관련 문서를 먼저 확인합니다.

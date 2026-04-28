# 발표 시각화 Use Case Index

확인일: 2026-04-23

이 문서는 라이브러리별 가이드를 다시 읽고, 실제 발표 페이지를 만들 때 어떤 도구를 먼저 선택할지 정리한 색인이다.

## 그리고 싶은 결과물 기준

| 그리고 싶은 것 | 먼저 볼 가이드 | 예제 route | 기본 선택 |
| --- | --- | --- | --- |
| 작업 단계, 의사결정 흐름 | [Mermaid](./mermaid.md) | `/samples/guides/mermaid-flow` | Mermaid flowchart |
| 사용자와 시스템 간 시간 순서 | [Mermaid](./mermaid.md) | `/samples/guides/mermaid-sequence` | Mermaid sequence |
| 일정, 출시 순서, 로드맵 | [Mermaid](./mermaid.md) | `/samples/guides/mermaid-timeline-roadmap` | Mermaid gantt |
| 상태 전이, lifecycle | [Mermaid](./mermaid.md) | `/samples/guides/mermaid-state-machine` | Mermaid state diagram |
| 데이터베이스 관계 | [Mermaid](./mermaid.md) | `/samples/guides/mermaid-erd-schema` | Mermaid ER diagram |
| 사용자 여정과 경험 흐름 | [Mermaid](./mermaid.md) | `/samples/guides/user-journey-flow` | Mermaid journey |
| 역할별 책임과 handoff | [Next.js, React, Tailwind](./next-react-tailwind.md) | `/samples/guides/swimlane-ownership` | Swimlane layout |
| 우선순위 판단 | [Next.js, React, Tailwind](./next-react-tailwind.md) | `/samples/guides/quadrant-priority-map` | Quadrant map |
| 리스크와 대응책 | [Next.js, React, Tailwind](./next-react-tailwind.md), [Lucide](./lucide-icons.md) | `/samples/guides/risk-tradeoff-board` | Risk board |
| 아이디어 흐름, 손그림 단계 | [RoughJS](./roughjs.md) | `/samples/guides/rough-sketch-flow` | SketchFlow |
| 반복 루프, 개선 사이클 | [RoughJS](./roughjs.md) | `/samples/guides/rough-cycle` | CycleDiagram |
| 발표 목차와 개념 분해 | [Markmap](./markmap.md) | `/samples/guides/markmap-concept` | MarkmapView |
| 시스템 아키텍처 맵 | [React Flow](./react-flow.md) | `/samples/guides/react-flow-architecture` | React Flow |
| 수치 비교, 전후 변화 | [Observable Plot](./observable-plot.md) | `/samples/guides/observable-plot-comparison` | PlotChart |
| 시간에 따른 추세 | [Observable Plot](./observable-plot.md) | `/samples/guides/plot-trend-story` | TrendLineChart |
| 차트 위 사건 주석 | [Observable Plot](./observable-plot.md) | `/samples/guides/plot-annotation` | AnnotationPlot |
| 후보 비교와 선택 기준 | [Next.js, React, Tailwind](./next-react-tailwind.md), [Lucide](./lucide-icons.md) | `/samples/guides/comparison-matrix` | Comparison matrix |
| 코드 설명과 실행 흐름 | [Next.js, React, Tailwind](./next-react-tailwind.md), [Mermaid](./mermaid.md) | `/samples/guides/code-walkthrough` | Code + Mermaid |
| 도입 전후 비교 | [Observable Plot](./observable-plot.md), [Mermaid](./mermaid.md) | `/samples/guides/before-after-visual` | Before/After + Plot |
| 장면별 도구 추천 UI | [Lucide](./lucide-icons.md), [Next.js, React, Tailwind](./next-react-tailwind.md) | `/samples/guides/visual-picker` | Interactive picker |
| 발표 기본 블록 갤러리 | [Next.js, React, Tailwind](./next-react-tailwind.md) | `/samples/guides/slide-pattern-gallery` | Slide pattern gallery |
| 프롬프트에서 발표 페이지까지 | [Mermaid](./mermaid.md), [Next.js, React, Tailwind](./next-react-tailwind.md) | `/samples/guides/prompt-to-slide-pipeline` | Pipeline diagram |
| 발표자 대본과 화면 문장 분리 | [Next.js, React, Tailwind](./next-react-tailwind.md) | `/samples/guides/talk-track-notes` | Talk track notes |
| 상태, 섹션, 액션 아이콘 | [Lucide](./lucide-icons.md) | `/samples/guides/lucide-status-ui` | Lucide React |
| 조사 자료를 발표 스토리로 구성 | [Markmap](./markmap.md), [Observable Plot](./observable-plot.md), [Mermaid](./mermaid.md) | `/samples/guides/composed-research-story` | Markmap + Plot + Mermaid |
| 시스템 브리핑 한 페이지 | [React Flow](./react-flow.md), [Mermaid](./mermaid.md), [Observable Plot](./observable-plot.md) | `/samples/guides/composed-system-briefing` | React Flow + Mermaid + Plot |

## 라이브러리 조합 기준

| 조합 | 좋은 장면 | 피할 장면 |
| --- | --- | --- |
| Mermaid + RoughJS | 같은 흐름을 정형/감성 두 방식으로 비교 | 한 화면이 이미 복잡한 경우 |
| Mermaid + React Flow | 시스템 구조와 시간 순서를 분리해 설명 | 정적인 문서 한 장이면 충분한 경우 |
| Markmap + Observable Plot | 개념 구조와 숫자 근거를 함께 제시 | 데이터가 없거나 수치가 주장이 아닌 경우 |
| React Flow + Observable Plot | 시스템 구조와 성능/효과를 함께 보여줌 | 단순 플로우 설명이면 과함 |
| Lucide + 모든 패널 | 섹션 의미와 상태를 빠르게 구분 | 아이콘이 본문보다 많아지는 경우 |

## 발표 흐름별 추천 구성

### 문제 제기

- 핵심 문장: `slide-slab`
- 문제 구조: Markmap
- 문제 흐름: Mermaid flowchart
- 도입 전후 차이: Before/After
- 사용자 여정: Mermaid journey
- 분위기를 부드럽게 시작: RoughJS SketchFlow

### 기술 설명

- 아키텍처: React Flow
- 호출 순서: Mermaid sequence
- 상태 전이: Mermaid state diagram
- schema 관계: Mermaid ERD
- 코드 설명: code walkthrough
- 역할 분담: swimlane ownership
- 구현 계약: 코드 블록 또는 간단한 table

### 데이터 설득

- 비교 수치: Observable Plot
- 원인 분해: Markmap
- 결과 요약: `metric-strip`
- 후보 평가: comparison matrix
- 시간 추세: Plot trend story
- 사건 주석: Plot annotation
- 상태 아이콘: Lucide

### 결론

- 기억할 항목: `slide-list`
- 전체 구조 복습: Markmap
- 발표 블록 선택: slide pattern gallery
- 발표 대본 분리: talk track notes
- 다음 액션: Lucide + `tag-row`

## 새 발표 페이지 최소 체크리스트

- [ ] 발표 목적을 한 문장으로 정한다.
- [ ] 그리고 싶은 결과물이 흐름, 구조, 개념, 데이터, 상태 중 무엇인지 고른다.
- [ ] 위 표에서 기본 도구를 하나 고른다.
- [ ] 기존 컴포넌트가 있으면 먼저 재사용한다.
- [ ] 새 client component가 필요하면 `"use client"` 범위를 작게 둔다.
- [ ] page는 `SampleShell` 또는 deck 구조를 사용한다.
- [ ] 샘플 허브에서 접근할 수 있게 링크를 추가한다.
- [ ] 빌드는 사용자가 명시적으로 요청한 경우에만 실행한다.

## 관련 문서

- [Next.js, React, Tailwind 발표 페이지 가이드](./next-react-tailwind.md)
- [Mermaid 발표 다이어그램 가이드](./mermaid.md)
- [RoughJS 발표 스케치 가이드](./roughjs.md)
- [Markmap 발표 개념 지도 가이드](./markmap.md)
- [React Flow 발표 시스템 맵 가이드](./react-flow.md)
- [Observable Plot 발표 차트 가이드](./observable-plot.md)
- [Lucide React 발표 아이콘 가이드](./lucide-icons.md)

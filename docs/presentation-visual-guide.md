# 발표 시각화 최종 선택 가이드

확인일: 2026-04-23

발표 페이지를 만들 때 먼저 "무엇을 그리고 싶은가"를 고른다. 그 다음 아래 기준으로 가이드와 예제 페이지를 확인한다.

## 빠른 선택

- 프로세스의 큰 흐름을 그리고 싶다: [Mermaid](./presentation-guides/mermaid.md), `/samples/guides/mermaid-flow`
- API 호출이나 agent 응답 순서를 설명하고 싶다: [Mermaid sequence](./presentation-guides/mermaid.md), `/samples/guides/mermaid-sequence`
- 일정, 출시 순서, 작업 로드맵을 보여주고 싶다: [Mermaid gantt](./presentation-guides/mermaid.md), `/samples/guides/mermaid-timeline-roadmap`
- 상태 변화나 lifecycle을 설명하고 싶다: [Mermaid state diagram](./presentation-guides/mermaid.md), `/samples/guides/mermaid-state-machine`
- 데이터베이스 관계를 간단히 보여주고 싶다: [Mermaid ER diagram](./presentation-guides/mermaid.md), `/samples/guides/mermaid-erd-schema`
- 사용자 여정과 제품 경험을 보여주고 싶다: Mermaid journey, `/samples/guides/user-journey-flow`
- 역할별 책임과 handoff를 보여주고 싶다: swimlane ownership, `/samples/guides/swimlane-ownership`
- 우선순위를 두 축으로 판단하고 싶다: quadrant priority map, `/samples/guides/quadrant-priority-map`
- 리스크와 대응책을 함께 보여주고 싶다: risk trade-off board, `/samples/guides/risk-tradeoff-board`
- 발표 목차나 개념 구조를 한 번에 펼치고 싶다: [Markmap](./presentation-guides/markmap.md), `/samples/guides/markmap-concept`
- 복잡한 시스템 노드를 직접 움직여 보며 설명하고 싶다: [React Flow](./presentation-guides/react-flow.md), `/samples/guides/react-flow-architecture`
- 아키텍처를 정적인 그림으로 빠르게 설명하고 싶다: [Mermaid](./presentation-guides/mermaid.md)
- 정량 데이터를 비교하고 싶다: [Observable Plot](./presentation-guides/observable-plot.md), `/samples/guides/observable-plot-comparison`
- 시간에 따른 변화 추세를 보여주고 싶다: Observable Plot line chart, `/samples/guides/plot-trend-story`
- 차트의 특정 지점에 이유를 붙이고 싶다: Observable Plot annotation, `/samples/guides/plot-annotation`
- 후보, 도구, 전략을 비교하고 싶다: comparison matrix, `/samples/guides/comparison-matrix`
- 코드 일부를 보여주며 설명하고 싶다: code walkthrough, `/samples/guides/code-walkthrough`
- 도입 전후 차이를 설득하고 싶다: before/after visual, `/samples/guides/before-after-visual`
- 사용자가 장면을 고르면 추천 도구가 바뀌게 하고 싶다: interactive picker, `/samples/guides/visual-picker`
- 발표 기본 블록을 골라 조립하고 싶다: slide pattern gallery, `/samples/guides/slide-pattern-gallery`
- 프롬프트가 발표 페이지가 되는 과정을 보여주고 싶다: prompt-to-slide pipeline, `/samples/guides/prompt-to-slide-pipeline`
- 화면 문장과 발표자 대본을 분리하고 싶다: talk track notes, `/samples/guides/talk-track-notes`
- 설문, 성능, 전후 비교를 이야기로 만들고 싶다: [Observable Plot](./presentation-guides/observable-plot.md) + [Markmap](./presentation-guides/markmap.md), `/samples/guides/composed-research-story`
- 아이디어 단계라 너무 딱딱하지 않게 보이고 싶다: [RoughJS](./presentation-guides/roughjs.md), `/samples/guides/rough-sketch-flow`
- 반복 루프나 제작 사이클을 보여주고 싶다: [RoughJS CycleDiagram](./presentation-guides/roughjs.md), `/samples/guides/rough-cycle`
- 버튼, 상태, 도구, 섹션 의미를 한눈에 보여주고 싶다: [Lucide React](./presentation-guides/lucide-icons.md), `/samples/guides/lucide-status-ui`
- 발표 페이지 전체의 구조와 네비게이션을 만들고 싶다: [Next.js, React, Tailwind](./presentation-guides/next-react-tailwind.md)

## 조합 선택

- "구조 + 순서"를 같이 보여준다: React Flow + Mermaid, `/samples/guides/composed-system-briefing`
- "개념 + 데이터"를 같이 보여준다: Markmap + Observable Plot, `/samples/guides/composed-research-story`
- "아이디어 + 정형 흐름"을 같이 보여준다: RoughJS + Mermaid, `/samples/idea-cycle`
- "시스템 맵 + 호출 순서"를 같이 보여준다: React Flow + Mermaid, `/samples/system-map`
- "데이터 차트 + 개념 지도"를 같이 보여준다: Observable Plot + Markmap, `/samples/data-story`
- "코드 + 실행 흐름"을 같이 보여준다: code window + Mermaid, `/samples/guides/code-walkthrough`
- "도입 효과 + 수치"를 같이 보여준다: before/after + Observable Plot, `/samples/guides/before-after-visual`
- "도구 선택 + UI 데모"를 같이 보여준다: Lucide + client state, `/samples/guides/visual-picker`
- "역할 경계 + 책임"을 같이 보여준다: swimlane + status panel, `/samples/guides/swimlane-ownership`
- "추세 + 사건"을 같이 보여준다: Plot line + annotation, `/samples/guides/plot-annotation`

## 기본 추천

- 판단이 어렵다면 첫 번째 선택은 Mermaid다. 텍스트로 빠르게 만들고 수정하기 쉽다.
- 발표가 딱딱해 보이면 RoughJS를 섞는다.
- 구조가 복잡하고 탐색이 필요하면 React Flow로 넘어간다.
- 개념이 너무 많아 목차가 길어지면 Markmap으로 압축한다.
- 숫자가 주장의 근거라면 Observable Plot을 반드시 넣는다.
- 섹션 의미가 헷갈리면 Lucide 아이콘을 heading 옆에만 넣는다.

## 피해야 할 조합

- 노드가 10개를 넘는 Mermaid flowchart를 한 화면에 넣지 않는다.
- React Flow를 단순 3단계 흐름도에 쓰지 않는다.
- Markmap을 임의 연결선이 필요한 시스템 구조도에 쓰지 않는다.
- Observable Plot을 데이터가 없는 추상 개념 설명에 쓰지 않는다.
- RoughJS를 정확한 수치나 schema 설명에 쓰지 않는다.
- Lucide 아이콘을 본문 대체 수단으로 쓰지 않는다.

## 작업 순서

- 1단계: 발표 목적을 한 문장으로 적는다.
- 2단계: 흐름, 순서, 구조, 개념, 데이터, 상태 중 어떤 그림인지 고른다.
- 3단계: 이 문서의 빠른 선택 표에서 가이드와 예제 페이지를 연다.
- 4단계: 기존 컴포넌트가 있으면 재사용한다.
- 5단계: 필요한 client component만 작게 만든다.
- 6단계: 샘플 허브에서 접근할 수 있게 route 링크를 추가한다.
- 7단계: build 검증은 사용자가 명시적으로 요청한 경우에만 한다.

## 전체 색인

- [발표 시각화 Use Case Index](./presentation-guides/use-case-index.md)
- [Next.js, React, Tailwind 발표 페이지 가이드](./presentation-guides/next-react-tailwind.md)
- [Mermaid 발표 다이어그램 가이드](./presentation-guides/mermaid.md)
- [RoughJS 발표 스케치 가이드](./presentation-guides/roughjs.md)
- [Markmap 발표 개념 지도 가이드](./presentation-guides/markmap.md)
- [React Flow 발표 시스템 맵 가이드](./presentation-guides/react-flow.md)
- [Observable Plot 발표 차트 가이드](./presentation-guides/observable-plot.md)
- [Lucide React 발표 아이콘 가이드](./presentation-guides/lucide-icons.md)

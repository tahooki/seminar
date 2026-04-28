# Mermaid 발표 다이어그램 가이드

확인일: 2026-04-23

## 한 줄 정의

Mermaid는 텍스트 문법으로 플로우차트, 시퀀스, 상태, ERD, 타임라인 같은 정형 다이어그램을 빠르게 그리는 도구다.

## 이걸 쓰면 좋은 경우

- 작업 흐름, 의사결정, 분기 구조를 보여줄 때
- 사용자, agent, 서버, UI 사이의 시간 순서를 설명할 때
- 상태 전이나 lifecycle을 발표할 때
- 데이터베이스 관계나 도메인 모델을 간단히 보여줄 때
- 문서와 다이어그램을 함께 유지해야 할 때

## 쓰지 않는 편이 좋은 경우

- 노드를 발표 중 직접 움직이거나 확대/축소하며 탐색해야 하면 React Flow가 낫다.
- 일부러 손그림처럼 부드러운 분위기를 원하면 RoughJS가 낫다.
- Markdown 목차를 그대로 개념 지도처럼 펼치고 싶으면 Markmap이 낫다.
- 정량 차트가 핵심이면 Observable Plot을 사용한다.

## 현재 프로젝트 연결 지점

- 컴포넌트: `src/presentation/components/MermaidChart.tsx`
- 기존 예제: `app/samples/idea-cycle/page.tsx`
- 기존 예제: `app/samples/system-map/page.tsx`
- 기존 발표 덱: `app/samples/a2ui/page.tsx`

## 공식 문서

- [Mermaid About and Docs](https://mermaid.js.org/intro/)
- [Mermaid Flowchart Syntax](https://mermaid.js.org/syntax/flowchart.html)
- [Mermaid Sequence Diagram Syntax](https://mermaid.js.org/syntax/sequenceDiagram.html)
- [Mermaid Theming](https://mermaid.js.org/config/theming.html)
- [Mermaid Security](https://mermaid.js.org/config/usage.html)

## 발표자료로 만들 수 있는 패턴

- 문제에서 해결책으로 가는 flowchart
- agent와 renderer 사이의 sequence diagram
- 기능 상태를 설명하는 state diagram
- schema 또는 catalog 관계를 보여주는 ER diagram
- 발표 로드맵을 보여주는 timeline

## 예제 페이지 아이디어

- `/samples/guides/mermaid-flow`
- `/samples/guides/mermaid-sequence`
- `/samples/guides/composed-system-briefing`

## 사용 예시

```tsx
const chart = `
flowchart LR
  A["문제"] --> B["분석"]
  B --> C{"그림 선택"}
  C -->|"흐름"| D["Mermaid"]
  C -->|"탐색"| E["React Flow"]
`;

<MermaidChart chart={chart} />
```

## 주의사항

- Mermaid 렌더링은 client component에서 실행한다.
- 사용자 입력을 그대로 렌더링할 때는 security level과 sanitization 정책을 별도로 검토한다.
- 긴 label은 줄바꿈을 의도적으로 넣어 발표 화면에서 넘치지 않게 한다.
- 한 화면에 너무 많은 노드를 넣기보다, 발표용으로 5-9개 노드 안에서 설명한다.

## 발표 페이지 생성 prompt 예시

```text
이 시스템의 데이터 흐름을 Mermaid flowchart로 발표 페이지에 넣어줘. 노드는 7개 이하로 줄이고, 각 노드 label은 발표장에서 읽기 쉽게 짧게 만들어줘.
```

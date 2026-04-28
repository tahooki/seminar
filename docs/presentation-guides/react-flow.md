# React Flow 발표 시스템 맵 가이드

확인일: 2026-04-23

## 한 줄 정의

React Flow는 노드와 엣지 기반의 인터랙티브 그래프를 React 안에서 만들 수 있게 해, 시스템 구조와 워크플로우를 탐색형 발표 화면으로 보여주는 도구다.

## 이걸 쓰면 좋은 경우

- 서비스, agent, 데이터 저장소, UI 컴포넌트 관계를 노드로 보여줄 때
- 발표 중 노드를 이동하거나 확대/축소하며 설명하고 싶을 때
- 복잡한 아키텍처를 한 화면에 두고 부분별로 짚고 싶을 때
- 의존성 그래프, 파이프라인, workflow editor 같은 느낌이 필요할 때

## 쓰지 않는 편이 좋은 경우

- 정적인 흐름도만 필요하면 Mermaid가 더 빠르다.
- 발표 톤이 손그림이어야 하면 RoughJS가 낫다.
- Markdown 계층 구조를 자동으로 펼치려면 Markmap을 사용한다.
- 간단한 수치 비교는 Observable Plot이 낫다.

## 현재 프로젝트 연결 지점

- 컴포넌트: `src/presentation/components/SystemFlow.tsx`
- 신규 컴포넌트 후보: `src/presentation/components/GuideArchitectureFlow.tsx`
- 기존 예제: `app/samples/system-map/page.tsx`

## 공식 문서

- [React Flow Quick Start](https://reactflow.dev/learn)
- [React Flow API Reference](https://reactflow.dev/api-reference)
- [React Flow Theming](https://reactflow.dev/learn/customization/theming)
- [React Flow Accessibility](https://reactflow.dev/learn/advanced-use/accessibility)

## 발표자료로 만들 수 있는 패턴

- 시스템 아키텍처 맵
- agent workflow map
- 데이터 파이프라인
- 컴포넌트 catalog 관계도
- 제품 기능 간 의존성 지도

## 예제 페이지 아이디어

- `/samples/guides/react-flow-architecture`
- `/samples/guides/composed-system-briefing`
- `/samples/system-map`

## 사용 예시

```tsx
import { ReactFlow, Background, Controls } from "@xyflow/react";

<div className="flow-box">
  <ReactFlow nodes={nodes} edges={edges} fitView>
    <Background />
    <Controls showInteractive={false} />
  </ReactFlow>
</div>
```

## 주의사항

- React Flow는 client component에서 렌더링한다.
- 부모 요소에 width와 height가 없으면 화면이 비어 보일 수 있다.
- Tailwind CSS v4를 쓸 때는 React Flow CSS가 Tailwind import 뒤에 로드되도록 관리한다.
- 발표용 노드는 label을 짧게 유지하고, 설명은 주변 panel이나 발표 대본으로 분리한다.
- 복잡한 자동 레이아웃이 필요하면 별도 layouting 라이브러리 도입을 검토한다.

## 발표 페이지 생성 prompt 예시

```text
이 시스템을 React Flow 아키텍처 맵으로 보여줘. 노드는 6개 이하로 정리하고, 핵심 데이터 흐름만 엣지로 연결해줘.
```

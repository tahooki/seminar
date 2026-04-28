# RoughJS 발표 스케치 가이드

확인일: 2026-04-23

## 한 줄 정의

RoughJS는 SVG 또는 Canvas에 손으로 그린 듯한 선, 박스, 원, 화살표를 그려 발표 화면을 덜 딱딱하게 만드는 도구다.

## 이걸 쓰면 좋은 경우

- 아이디어 단계라 완성된 시스템보다 생각의 흐름을 보여주고 싶을 때
- Napkin 스타일의 친근한 설명 그림이 필요할 때
- 순환 구조, 반복 루프, 간단한 단계 흐름을 부드럽게 보여줄 때
- 발표 초반에 청중의 부담을 낮추는 시각 언어가 필요할 때

## 쓰지 않는 편이 좋은 경우

- 정확한 노드 배치와 복잡한 엣지 연결이 필요하면 React Flow가 낫다.
- 문법으로 유지되는 정형 다이어그램이 필요하면 Mermaid가 낫다.
- 데이터 차트나 축, legend가 필요하면 Observable Plot을 사용한다.
- 텍스트 계층을 자동으로 펼치는 개념 지도가 필요하면 Markmap을 사용한다.

## 현재 프로젝트 연결 지점

- 컴포넌트: `src/presentation/components/SketchDiagrams.tsx`
- 기존 예제: `app/samples/idea-cycle/page.tsx`
- 주요 컴포넌트: `CycleDiagram`, `SketchFlow`

## 공식 문서

- [RoughJS GitHub README](https://github.com/rough-stuff/rough)
- [RoughJS Wiki](https://github.com/rough-stuff/rough/wiki)

## 발표자료로 만들 수 있는 패턴

- `CycleDiagram`: 반복 프로세스, 개선 루프, 제작 사이클
- `SketchFlow`: 아이디어에서 산출물까지 이어지는 단계
- hand-drawn callout: 강조 문장 주변의 가벼운 박스
- rough arrow: 인과관계나 전환 방향 강조

## 예제 페이지 아이디어

- `/samples/guides/rough-sketch-flow`
- `/samples/guides/rough-cycle`
- `/samples/idea-cycle`

## 사용 예시

```tsx
const items = [
  { title: "조사", description: "자료 수집", color: "#2f80ed" },
  { title: "정리", description: "구조화", color: "#6ba84f" },
  { title: "발표", description: "시각화", color: "#ef7d6c" },
];

<SketchFlow items={items} />
```

## 주의사항

- RoughJS는 브라우저 SVG/Canvas를 직접 다루므로 client component에서 사용한다.
- `useEffect`에서 다시 그릴 때 기존 SVG group을 비워 중복 노드가 생기지 않게 한다.
- 발표용 텍스트는 SVG text 안에 들어가므로 너무 긴 문장을 피한다.
- 노드 수가 많아지면 손그림 느낌이 산만해질 수 있으니 3-6개 정도로 제한한다.

## 발표 페이지 생성 prompt 예시

```text
이 아이디어를 너무 딱딱하지 않은 손그림 흐름으로 보여줘. RoughJS SketchFlow를 사용하고 단계는 4개 이하로 줄여줘.
```

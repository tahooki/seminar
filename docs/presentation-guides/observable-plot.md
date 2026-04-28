# Observable Plot 발표 차트 가이드

확인일: 2026-04-23

## 한 줄 정의

Observable Plot은 D3 기반의 간결한 API로 막대, 선, 점, 영역, 텍스트 annotation 같은 발표용 데이터 차트를 빠르게 만드는 도구다.

## 이걸 쓰면 좋은 경우

- 성능 비교, 전후 변화, 설문 결과처럼 숫자가 주장의 근거일 때
- 차트 위에 직접 값이나 설명을 얹어 발표장에서 읽기 쉽게 만들 때
- 작은 데이터셋을 빠르게 시각화해 스토리로 연결할 때
- bar, line, dot, rule, text mark를 조합해 설명하고 싶을 때

## 쓰지 않는 편이 좋은 경우

- 시스템 구조나 통신 흐름은 Mermaid 또는 React Flow가 낫다.
- 개념 계층은 Markmap이 낫다.
- 정서적으로 부드러운 설명 그림은 RoughJS가 낫다.
- 대시보드급 인터랙션이나 복잡한 chart editor가 필요하면 별도 설계를 한다.

## 현재 프로젝트 연결 지점

- 컴포넌트: `src/presentation/components/PlotChart.tsx`
- 기존 예제: `app/samples/data-story/page.tsx`

## 공식 문서

- [Observable Plot Getting Started](https://observablehq.com/plot/getting-started)
- [Observable Plot Plots](https://observablehq.com/plot/features/plots)
- [Observable Plot Marks](https://observablehq.com/plot/features/marks)
- [Observable Plot Accessibility](https://observablehq.com/plot/features/accessibility)

## 발표자료로 만들 수 있는 패턴

- 전후 비교 bar chart
- 성능 변화 line chart
- 카테고리별 설문 결과
- 특정 지점을 강조하는 annotation chart
- 차트와 Markmap을 연결한 데이터 스토리

## 예제 페이지 아이디어

- `/samples/guides/observable-plot-comparison`
- `/samples/guides/plot-trend-story`
- `/samples/guides/plot-annotation`
- `/samples/guides/composed-research-story`
- `/samples/data-story`

## 사용 예시

```tsx
const data = [
  { label: "Before", value: 42, group: "기본 문서" },
  { label: "After", value: 86, group: "시각 시스템" },
];

<PlotChart data={data} />
```

## 주의사항

- Plot은 SVG/DOM element를 생성하므로 client component에서 사용한다.
- route 이동이나 data 변경 시 이전 plot element를 cleanup한다.
- 발표용 chart는 축 label보다 제목, subtitle, 직접 값 label을 우선한다.
- 너무 많은 mark를 겹치면 발표장에서 읽기 어렵다.

## 발표 페이지 생성 prompt 예시

```text
이 수치를 발표용 Observable Plot 막대 차트로 보여줘. 값 label을 막대 위에 표시하고, 결론 문장은 옆 slide-slab에 크게 넣어줘.
```

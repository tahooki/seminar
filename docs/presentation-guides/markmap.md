# Markmap 발표 개념 지도 가이드

확인일: 2026-04-23

## 한 줄 정의

Markmap은 Markdown 목록을 계층형 마인드맵 SVG로 변환해, 발표 목차와 개념 관계를 한눈에 보여주는 도구다.

## 이걸 쓰면 좋은 경우

- 발표 전체 구조를 목차보다 생동감 있게 보여주고 싶을 때
- 하나의 주제에서 하위 개념이 어떻게 뻗는지 보여줄 때
- 조사한 자료를 큰 범주와 세부 항목으로 정리할 때
- 발표 중 "지금 어느 가지를 설명하는가"를 보여주고 싶을 때

## 쓰지 않는 편이 좋은 경우

- 노드 사이에 임의 연결선이 필요하면 React Flow가 낫다.
- 프로세스의 방향과 분기 조건이 핵심이면 Mermaid flowchart가 낫다.
- 수치 데이터와 축이 필요하면 Observable Plot을 사용한다.
- 손그림 스타일의 정서가 중요하면 RoughJS를 사용한다.

## 현재 프로젝트 연결 지점

- 컴포넌트: `src/presentation/components/MarkmapView.tsx`
- 기존 예제: `app/samples/data-story/page.tsx`

## 공식 문서

- [Markmap Docs](https://markmap.js.org/docs/markmap)
- [markmap-lib](https://markmap.js.org/docs/packages--markmap-lib)
- [markmap-view](https://markmap.js.org/docs/packages--markmap-view)

## 발표자료로 만들 수 있는 패턴

- 발표 목차를 마인드맵으로 시각화
- 기술 개념의 상위/하위 관계
- 리서치 자료의 범주화
- 문제 원인과 해결책의 분해
- 발표 마지막 요약 지도

## 예제 페이지 아이디어

- `/samples/guides/markmap-concept`
- `/samples/guides/composed-research-story`
- `/samples/data-story`

## 사용 예시

```tsx
const markdown = `
# Agent UI
## 입력
### 사용자 요청
### 컨텍스트
## 생성
### 구조화
### 시각화 선택
## 출력
### 발표 페이지
### 예제 route
`;

<MarkmapView markdown={markdown} />
```

## 주의사항

- Markdown depth가 너무 깊으면 발표 화면에서 읽기 어렵다.
- 3단계 depth 안에서 핵심 개념을 정리하는 편이 좋다.
- Markmap 렌더링은 client component에서 실행한다.
- cleanup에서 markmap instance를 destroy해 route 전환 시 잔여 SVG 상태를 줄인다.

## 발표 페이지 생성 prompt 예시

```text
이 발표 내용을 Markmap으로 개념 지도화해줘. 최상위 주제 1개, 큰 가지 4개, 각 가지 하위 항목 2-3개로 정리해줘.
```

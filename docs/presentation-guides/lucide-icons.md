# Lucide React 발표 아이콘 가이드

확인일: 2026-04-23

## 한 줄 정의

Lucide React는 발표 UI에서 상태, 섹션, 액션, 도구의 의미를 빠르게 구분하게 해주는 SVG 아이콘 컴포넌트 모음이다.

## 이걸 쓰면 좋은 경우

- 샘플 카드나 섹션 heading에 의미 있는 시각 단서를 붙일 때
- 완료, 대기, 위험, 아이디어, 데이터, 시스템 같은 상태를 빠르게 구분할 때
- 버튼이나 작은 UI에서 텍스트보다 익숙한 기호가 더 나을 때
- 발표 페이지 전체의 정보 위계를 가볍게 보강할 때

## 쓰지 않는 편이 좋은 경우

- 아이콘 자체가 핵심 설명 자료가 되어야 할 때는 직접 SVG나 다이어그램을 만든다.
- 브랜드 로고가 필요하면 Lucide가 아니라 공식 브랜드 asset을 사용한다.
- 아이콘이 너무 많아 본문보다 시끄러워지면 줄인다.

## 현재 프로젝트 연결 지점

- `app/page.tsx` 샘플 카드 아이콘
- `app/samples/*/page.tsx` panel heading icon
- `card-icon` CSS class

## 공식 문서

- [Lucide React Guide](https://lucide.dev/guide/react)
- [Lucide Icon Search](https://lucide.dev/icons)

## 발표자료로 만들 수 있는 패턴

- 상태 카드: check, clock, alert, sparkles
- 데이터 섹션: chart, table, database
- 시스템 섹션: workflow, network, boxes
- 발표 단계: search, pen, presentation, send
- 액션 버튼: arrow, download, external link

## 예제 페이지 아이디어

- `/samples/guides/lucide-status-ui`
- `/samples/guides/composed-research-story`
- `/`

## 사용 예시

```tsx
import { CheckCircle2 } from "lucide-react";

<span className="card-icon" aria-hidden="true">
  <CheckCircle2 size={26} />
</span>
```

## 주의사항

- 장식용 아이콘은 `aria-hidden="true"`를 둔다.
- 의미가 있는 아이콘 버튼에는 `aria-label`을 제공한다.
- 발표 UI에서는 `size`, `strokeWidth`, 색상을 일관되게 유지한다.
- 아이콘은 본문을 대체하지 말고 의미를 보강하는 수준으로 쓴다.

## 발표 페이지 생성 prompt 예시

```text
이 발표 페이지의 네 가지 섹션에 Lucide 아이콘을 붙여줘. 아이콘은 heading 옆에만 쓰고, 상태 의미가 겹치지 않게 골라줘.
```

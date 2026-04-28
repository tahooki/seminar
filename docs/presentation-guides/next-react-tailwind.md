# Next.js, React, Tailwind 발표 페이지 가이드

확인일: 2026-04-23

## 한 줄 정의

Next.js App Router, React, Tailwind CSS는 발표 페이지의 화면 구조, route, 공통 레이아웃, 타이포그래피, 색상 토큰을 담당하는 기반 레이어다.

## 이걸 쓰면 좋은 경우

- 새 발표 페이지 route를 만들고 싶을 때
- 여러 시각화 컴포넌트를 한 화면에 배치해야 할 때
- 발표 톤을 `app/globals.css`의 색상, 폰트, 간격 규칙으로 통일해야 할 때
- 브라우저 API가 필요한 라이브러리를 client component로 분리해야 할 때
- 샘플 허브에서 새 예제 페이지로 이동하게 만들 때

## 쓰지 않는 편이 좋은 경우

- 단일 SVG 조각이나 작은 UI 조각만 필요할 때는 route를 새로 만들지 말고 기존 컴포넌트 안에 넣는다.
- 복잡한 다이어그램 문법을 React JSX로 직접 하드코딩해야 하는 경우에는 먼저 Mermaid, Markmap, React Flow, RoughJS 중 하나로 표현할 수 있는지 본다.
- 발표 데이터가 단순 텍스트라면 별도 상태 관리나 client component를 만들지 않는다.

## 현재 프로젝트 연결 지점

- route: `app/page.tsx`, `app/samples/*/page.tsx`
- 레이아웃: `src/presentation/components/SampleShell.tsx`
- 스타일 토큰: `app/globals.css`
- client 시각화 컴포넌트: `src/presentation/components/*`

## 공식 문서

- 로컬 Next.js 문서: `node_modules/next/dist/docs/01-app/01-getting-started/03-layouts-and-pages.md`
- 로컬 Next.js 문서: `node_modules/next/dist/docs/01-app/01-getting-started/05-server-and-client-components.md`
- [Next.js App Router Docs](https://nextjs.org/docs/app)
- [React Reference](https://react.dev/reference/react)
- [Tailwind CSS Theme Variables](https://tailwindcss.com/docs/theme)

## 발표자료로 만들 수 있는 패턴

- `SampleShell` 기반 한 페이지 설명 화면
- `stage-grid` 기반 12-column 시각화 배치
- `visual-panel` 기반 다이어그램/차트 패널
- `slide-slab` 기반 큰 메시지 카드
- `deck-slide` 기반 실제 발표 덱
- client component를 하위에 두고 page는 server component로 유지하는 구조

## 예제 페이지 아이디어

- `/samples/guides/composed-research-story`
- `/samples/guides/composed-system-briefing`
- `/samples/a2ui`
- `/samples/code-agent`

## 데이터와 컴포넌트 구조 예시

```tsx
import { SampleShell } from "@/src/presentation/components/SampleShell";

export default function Page() {
  return (
    <SampleShell
      eyebrow="Guide / Visual Pattern"
      title="발표의 핵심 문장"
      description="이 페이지에서 말하려는 한 문단 요약"
    >
      <section className="stage-grid">
        <article className="visual-panel span-7">...</article>
        <article className="slide-slab span-5">...</article>
      </section>
    </SampleShell>
  );
}
```

## 주의사항

- `app/**/page.tsx`는 기본적으로 Server Component다.
- `useEffect`, `window`, `document`, SVG/Canvas 직접 조작이 필요하면 별도 파일에 `"use client"`를 둔다.
- Mermaid, Markmap, RoughJS, Observable Plot은 client boundary 안에서 렌더링한다.
- React Flow는 부모 요소에 안정적인 width/height가 필요하다.
- 프로젝트 규칙에 따라 build 검증은 사용자가 명시적으로 요청한 경우에만 실행한다.

## 발표 페이지 생성 prompt 예시

```text
이 내용을 세미나 발표 페이지로 만들어줘. SampleShell을 쓰고, 핵심 메시지는 slide-slab으로 크게 보여줘. 구조 설명은 Mermaid 또는 React Flow 중 맞는 것을 고르고, 브라우저 API가 필요한 컴포넌트는 client component로 분리해줘.
```

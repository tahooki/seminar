# Seminar

이 프로젝트는 세미나 발표자료를 HTML 기반의 한 페이지로 만들기 위한 Next.js 프로젝트입니다.

목표는 발표자가 브라우저에서 바로 사용할 수 있는 발표자료를 만들고, 그 과정에서 재사용 가능한 발표용 디자인 시스템을 구축하는 것입니다. 한글과 영어가 모두 편하게 읽히는 둥근 고딕 계열 타이포그래피, 발표용 슬라이드 컴포넌트, 코드 블록, Mermaid.js 기반 다이어그램 등을 활용하는 방향으로 설계합니다.

프로젝트 기획서는 [docs/presentation-system-plan.md](docs/presentation-system-plan.md)에 정리되어 있습니다.
A2UI 도입 발표 기획서는 [docs/a2ui-presentation-plan.md](docs/a2ui-presentation-plan.md)에 정리되어 있습니다.

## 샘플 페이지

- `/` - 시각화 샘플 허브
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

## Next.js 주의사항

이 프로젝트의 Next.js 버전은 기존 지식과 다른 부분이 있을 수 있습니다.
코드를 변경하기 전에는 `node_modules/next/dist/docs/` 안의 관련 문서를 먼저 확인합니다.

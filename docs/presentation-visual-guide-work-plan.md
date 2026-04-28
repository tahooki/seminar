# Presentation Visual Guide Work Plan

작성일: 2026-04-23

## 1. 목적

이 문서는 현재 `seminar` 프로젝트에 설치된 패키지를 기준으로, 발표 페이지를 만들 때 "이런 그림을 그리고 싶을 때는 무엇을 쓰면 좋은가"를 정리하는 작업 계획서다.

최종 목표는 다음 세 가지다.

- 발표용 시각화 라이브러리별 가이드 문서를 만든다.
- 각 가이드를 실제로 확인할 수 있는 예제 페이지를 충분히 만든다.
- 이 지식을 Codex skill로 만들어, 이후 발표 페이지를 만들 때 자동으로 참고하게 한다.

## 2. 현재 프로젝트 기준

`package.json` 기준으로 바로 활용할 수 있는 핵심 도구는 다음과 같다.

| 패키지 | 현재 역할 후보 | 우선순위 |
| --- | --- | --- |
| `next`, `react`, `react-dom` | 발표 페이지 라우팅, 서버/클라이언트 컴포넌트 구성, 샘플 페이지 구조 | 높음 |
| `tailwindcss`, `@tailwindcss/postcss` | 발표용 레이아웃, 색상, 타이포그래피, 디자인 토큰 | 높음 |
| `mermaid` | 플로우차트, 시퀀스, 상태 전이, ERD, 타임라인 같은 정형 다이어그램 | 높음 |
| `roughjs` | 손그림 느낌의 박스, 화살표, 순환 구조, Napkin 스타일 설명 그림 | 높음 |
| `markmap-lib`, `markmap-view` | Markdown 목록 기반 마인드맵, 개념 분해, 발표 목차 시각화 | 높음 |
| `@xyflow/react` | 인터랙티브 노드 그래프, 시스템 맵, 워크플로우, 의존성 맵 | 높음 |
| `@observablehq/plot` | 수치 비교, 성능 비교, 설문 결과, 데이터 스토리 차트 | 높음 |
| `lucide-react` | 발표 UI 아이콘, 상태 라벨, 액션 버튼, 샘플 허브 카드 아이콘 | 중간 |
| `typescript` | 시각화 데이터 구조와 컴포넌트 props 계약 정리 | 중간 |
| `eslint`, `eslint-config-next` | 작업 후 가벼운 정적 검증 | 중간 |

이미 존재하는 관련 파일:

- `src/presentation/components/MermaidChart.tsx`
- `src/presentation/components/SketchDiagrams.tsx`
- `src/presentation/components/MarkmapView.tsx`
- `src/presentation/components/SystemFlow.tsx`
- `src/presentation/components/PlotChart.tsx`
- `src/presentation/components/SampleShell.tsx`
- `app/samples/idea-cycle/page.tsx`
- `app/samples/system-map/page.tsx`
- `app/samples/data-story/page.tsx`
- `app/samples/a2ui/page.tsx`
- `app/samples/code-agent/page.tsx`

## 3. 작업 원칙

- Next.js 코드를 수정하기 전에는 `node_modules/next/dist/docs/` 안의 관련 문서를 먼저 확인한다.
- 브라우저 전용 라이브러리인 Mermaid, RoughJS, Markmap, React Flow, Observable Plot은 클라이언트 컴포넌트 경계를 명확히 둔다.
- 발표 페이지는 문서가 아니라 한 화면에서 설명하기 쉬운 시각 자료를 목표로 한다.
- 새 예제 페이지는 기존 `app/samples/*` 구조와 `src/presentation/components` 패턴을 우선 재사용한다.
- 최종 가이드는 긴 설명보다 선택 기준을 우선한다.
- 프로젝트 규칙에 따라 사용자가 명시적으로 요청하지 않는 한 `npm run build`, `next build` 같은 빌드 검증은 하지 않는다.
- 필요하면 `npm run lint` 같은 가벼운 검증만 실행하고, 시각 검증은 개발 서버와 브라우저 확인으로 진행한다.
- Git branch 이동, 생성, rebase, merge 작업은 사용자가 명시적으로 요청한 경우에만 한다.

## 4. 참고 문서 후보

각 라이브러리별 md 문서를 만들 때 아래 공식 문서를 우선 조사한다.

| 주제 | 우선 참고 문서 |
| --- | --- |
| Next.js App Router | 로컬 `node_modules/next/dist/docs/01-app/01-getting-started/03-layouts-and-pages.md`, 로컬 `node_modules/next/dist/docs/01-app/01-getting-started/05-server-and-client-components.md`, [Next.js App Router Docs](https://nextjs.org/docs/app) |
| React | [React Reference](https://react.dev/reference/react) |
| Tailwind CSS v4 | [Tailwind Theme Variables](https://tailwindcss.com/docs/theme) |
| Mermaid | [Mermaid About and Docs](https://mermaid.js.org/intro/) |
| RoughJS | [RoughJS GitHub README](https://github.com/rough-stuff/rough), [RoughJS Wiki](https://github.com/rough-stuff/rough/wiki) |
| Markmap | [Markmap Docs](https://markmap.js.org/docs/markmap) |
| React Flow / XYFlow | [React Flow Quick Start](https://reactflow.dev/learn), [React Flow API Reference](https://reactflow.dev/api-reference) |
| Observable Plot | [Observable Plot Getting Started](https://observablehq.com/plot/getting-started), [Observable Plot Plots](https://observablehq.com/plot/features/plots) |
| Lucide React | [Lucide React Guide](https://lucide.dev/guide/react) |
| TypeScript | [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html) |
| ESLint | [ESLint Docs](https://eslint.org/docs/latest/) |

## 5. 최종 산출물 구조

### 5.1 라이브러리별 가이드 문서

아래 파일을 만든다.

- `docs/presentation-guides/next-react-tailwind.md`
- `docs/presentation-guides/mermaid.md`
- `docs/presentation-guides/roughjs.md`
- `docs/presentation-guides/markmap.md`
- `docs/presentation-guides/react-flow.md`
- `docs/presentation-guides/observable-plot.md`
- `docs/presentation-guides/lucide-icons.md`

각 문서의 기본 구성:

- 한 줄 정의
- 이걸 쓰면 좋은 경우
- 쓰지 않는 편이 좋은 경우
- 현재 프로젝트에서 이미 있는 컴포넌트와 연결 지점
- 공식 문서 링크
- 발표자료로 만들 수 있는 패턴
- 예제 페이지 아이디어
- props 또는 데이터 구조 예시
- 접근성, 렌더링, SSR 주의사항
- 발표 페이지 생성 prompt 예시

### 5.2 활용 패턴 요약 문서

각 md 파일을 읽고 발표자료 제작에 쓸 수 있는 패턴을 한 번 더 정리한다.

- `docs/presentation-guides/use-case-index.md`

이 문서에는 다음 내용을 넣는다.

- 그리고 싶은 결과물 기준 선택표
- 라이브러리 조합 기준 선택표
- 발표 흐름별 추천 구성
- 예제 페이지 링크
- 새 발표 페이지를 만들 때의 최소 체크리스트

### 5.3 예제 페이지

각 가이드 문서를 실제로 확인할 수 있는 예제 페이지를 만든다.

권장 route:

- `app/samples/guides/mermaid-flow/page.tsx`
- `app/samples/guides/mermaid-sequence/page.tsx`
- `app/samples/guides/rough-sketch-flow/page.tsx`
- `app/samples/guides/rough-cycle/page.tsx`
- `app/samples/guides/markmap-concept/page.tsx`
- `app/samples/guides/react-flow-architecture/page.tsx`
- `app/samples/guides/observable-plot-comparison/page.tsx`
- `app/samples/guides/lucide-status-ui/page.tsx`
- `app/samples/guides/composed-research-story/page.tsx`
- `app/samples/guides/composed-system-briefing/page.tsx`

기존 샘플 페이지는 유지하되, 새 가이드 예제가 생기면 `app/page.tsx`의 샘플 허브에 링크를 추가한다.

### 5.4 최종 선택 가이드

최종적으로 아래 파일을 만든다.

- `docs/presentation-visual-guide.md`

이 문서는 길게 설명하지 않고 bullet point 중심으로 구성한다.

예상 형식:

- 시스템 구조를 그리고 싶다: `Mermaid` 또는 `React Flow`
- 통신 순서를 보여주고 싶다: `Mermaid sequence`
- 개념을 분해하고 싶다: `Markmap`
- 성능이나 설문 데이터를 보여주고 싶다: `Observable Plot`
- 부드러운 아이디어 흐름을 보여주고 싶다: `RoughJS`
- 액션, 상태, 섹션 의미를 빠르게 구분하고 싶다: `Lucide`
- 여러 방식이 섞인 발표 페이지를 만들고 싶다: 조합 예제 페이지 확인

### 5.5 Codex skill

발표 페이지 제작용 skill을 만든다.

권장 원본 위치:

- `skills/seminar-presentation-builder/SKILL.md`
- `skills/seminar-presentation-builder/references/visual-tool-choice.md`
- `skills/seminar-presentation-builder/references/example-pages.md`
- `skills/seminar-presentation-builder/references/component-contracts.md`

실제 설치가 필요하면 원본을 기준으로 `$CODEX_HOME/skills/seminar-presentation-builder/`에 설치한다.

skill의 목적:

- 사용자가 "발표 페이지 만들어줘", "이 내용을 세미나 페이지로 만들어줘", "다이어그램으로 설명해줘"라고 요청하면 이 프로젝트의 가이드와 예제 페이지를 먼저 참고하게 한다.
- 그리고 싶은 그림의 종류에 따라 `Mermaid`, `RoughJS`, `Markmap`, `React Flow`, `Observable Plot`, `Lucide` 중 적절한 도구를 고르게 한다.
- 새 페이지를 만들 때 기존 컴포넌트와 디자인 톤을 우선 재사용하게 한다.
- Next.js 16 계열의 로컬 문서 확인 규칙과 빌드 금지 규칙을 skill 안에 포함한다.

## 6. 단계별 Todo

### Phase 0. 인벤토리 정리

- [x] `package.json`에서 활용 가능한 패키지 1차 확인
- [x] 기존 `docs` 문서 확인
- [x] 기존 `src/presentation/components` 확인
- [x] 기존 `app/samples/*` 페이지 확인
- [x] 패키지별 현재 사용 위치를 `rg`로 더 촘촘히 매핑
- [x] 기존 샘플 페이지가 어떤 라이브러리 조합을 쓰는지 표로 정리

### Phase 1. 라이브러리별 조사 md 작성

- [x] `docs/presentation-guides/next-react-tailwind.md` 작성
- [x] `docs/presentation-guides/mermaid.md` 작성
- [x] `docs/presentation-guides/roughjs.md` 작성
- [x] `docs/presentation-guides/markmap.md` 작성
- [x] `docs/presentation-guides/react-flow.md` 작성
- [x] `docs/presentation-guides/observable-plot.md` 작성
- [x] `docs/presentation-guides/lucide-icons.md` 작성
- [x] 각 문서에 공식 docs 링크와 확인일 추가
- [x] 각 문서에 "이럴 때 사용"과 "이럴 때 피함" 섹션 추가
- [x] 각 문서에 예제 페이지 후보 추가

### Phase 2. 활용 패턴 정리

- [x] 라이브러리별 md 파일을 다시 읽고 공통 패턴 추출
- [x] `docs/presentation-guides/use-case-index.md` 작성
- [x] "그리고 싶은 것" 기준으로 선택표 작성
- [x] "발표 흐름" 기준으로 조합표 작성
- [x] 기존 샘플과 신규 샘플을 함께 볼 수 있는 링크 목록 작성

### Phase 3. 예제 페이지 구현

- [x] 예제 페이지 공통 레이아웃이 필요한지 확인
- [x] `SampleShell` 재사용 또는 확장 여부 결정
- [x] Mermaid flow 예제 페이지 작성
- [x] Mermaid sequence 예제 페이지 작성
- [x] RoughJS sketch flow 예제 페이지 작성
- [x] RoughJS cycle 예제 페이지 작성
- [x] Markmap concept 예제 페이지 작성
- [x] React Flow architecture 예제 페이지 작성
- [x] Observable Plot comparison 예제 페이지 작성
- [x] Lucide status UI 예제 페이지 작성
- [x] 조합형 research story 예제 페이지 작성
- [x] 조합형 system briefing 예제 페이지 작성
- [x] `app/page.tsx` 샘플 허브에 신규 링크 추가
- [x] 각 예제 페이지에서 해당 가이드 md로 돌아갈 수 있는 문맥 링크 제공 여부 검토

### Phase 4. 최종 선택 가이드 작성

- [x] `docs/presentation-visual-guide.md` 작성
- [x] bullet point 중심의 선택 가이드 작성
- [x] 각 항목에 관련 md 문서 링크 연결
- [x] 각 항목에 관련 예제 페이지 route 연결
- [x] "처음 판단이 어려울 때" 기본 추천 조합 작성
- [x] "피해야 할 조합" 작성

### Phase 5. Skill 제작

- [x] `skills/seminar-presentation-builder/` 폴더 생성
- [x] `SKILL.md` frontmatter 작성
- [x] skill trigger description 작성
- [x] skill workflow 작성
- [x] `references/visual-tool-choice.md` 작성
- [x] `references/example-pages.md` 작성
- [x] `references/component-contracts.md` 작성
- [x] skill 안에 로컬 Next.js docs 확인 규칙 추가
- [x] skill 안에 build 금지 규칙 추가
- [x] skill 안에 "필요한 reference만 읽기" 원칙 추가
- [x] 예시 사용자 요청과 대응 흐름 추가
- [x] `$CODEX_HOME/skills/seminar-presentation-builder/`에 설치

### Phase 6. 검증과 정리

- [x] 모든 md 링크가 실제 파일 또는 공식 문서로 연결되는지 확인
- [x] 모든 예제 route가 샘플 허브에서 접근 가능한지 확인
- [x] 브라우저에서 주요 예제 페이지 시각 확인
- [x] Mermaid 렌더링 오류 상태 확인
- [x] React Flow 부모 높이와 CSS import 순서 확인
- [x] Observable Plot 컨테이너 cleanup 확인
- [x] Markmap destroy cleanup 확인
- [x] RoughJS SVG 재렌더링 중 중복 노드가 생기지 않는지 확인
- [x] `npm run lint` 실행
- [x] build 검증은 명시 요청이 없어 실행하지 않음

## 7. 예제 페이지별 목표

| 페이지 | 목표 | 핵심 도구 |
| --- | --- | --- |
| `/samples/guides/mermaid-flow` | 발표의 논리 흐름, 작업 단계, 의사결정 흐름을 빠르게 그리는 법 제시 | Mermaid |
| `/samples/guides/mermaid-sequence` | 사용자, agent, 서버, UI 사이의 시간 순서 설명 | Mermaid |
| `/samples/guides/rough-sketch-flow` | 정형 문서보다 부드러운 아이디어 흐름 표현 | RoughJS |
| `/samples/guides/rough-cycle` | 반복 루프, 개선 사이클, 제작 프로세스 표현 | RoughJS |
| `/samples/guides/markmap-concept` | 한 주제에서 하위 개념이 뻗는 발표 목차와 개념 지도 표현 | Markmap |
| `/samples/guides/react-flow-architecture` | 시스템 구성 요소와 연결 관계를 조작 가능한 맵으로 표현 | React Flow |
| `/samples/guides/observable-plot-comparison` | 수치 비교와 전후 변화를 발표용 차트로 표현 | Observable Plot |
| `/samples/guides/lucide-status-ui` | 아이콘으로 섹션, 상태, 액션의 의미를 빠르게 구분 | Lucide |
| `/samples/guides/composed-research-story` | 조사 내용에서 주장, 근거, 데이터, 결론으로 이어지는 발표 흐름 | Markmap, Plot, Mermaid |
| `/samples/guides/composed-system-briefing` | 시스템 개요, 상세 흐름, 데이터 변화까지 한 페이지에 결합 | React Flow, Mermaid, Plot |

## 8. 최종 가이드에 들어갈 선택 기준 초안

- 프로세스의 큰 흐름을 그리고 싶다: `Mermaid flowchart`
- API 호출이나 agent 응답 순서를 설명하고 싶다: `Mermaid sequence`
- 상태 변화나 lifecycle을 설명하고 싶다: `Mermaid state diagram`
- 데이터베이스 관계를 간단히 보여주고 싶다: `Mermaid ER diagram`
- 발표 목차나 개념 구조를 한 번에 펼치고 싶다: `Markmap`
- 복잡한 시스템 노드를 직접 움직여 보며 설명하고 싶다: `React Flow`
- 아키텍처를 정적인 그림으로 빠르게 설명하고 싶다: `Mermaid`
- 정량 데이터를 비교하고 싶다: `Observable Plot`
- 설문, 성능, 전후 비교를 이야기로 만들고 싶다: `Observable Plot`과 `Markmap`
- 아이디어 단계라 너무 딱딱하지 않게 보이고 싶다: `RoughJS`
- Napkin처럼 친근한 그림 언어가 필요하다: `RoughJS`
- 버튼, 상태, 도구, 섹션 의미를 한눈에 보여주고 싶다: `Lucide React`
- 발표 페이지 전체의 구조와 네비게이션을 만들고 싶다: `Next.js App Router`, `React`, `Tailwind CSS`

## 9. Skill 설계 초안

skill 이름 후보:

- `seminar-presentation-builder`

skill description 초안:

```yaml
description: Use when creating, revising, or choosing visual patterns for seminar presentation pages in the seminar Next.js project. Helps select between Mermaid, RoughJS, Markmap, React Flow, Observable Plot, Lucide, and the existing presentation components, then builds pages that follow the local presentation design system and project workflow rules.
```

skill workflow 초안:

1. 사용자의 발표 목적과 그리고 싶은 시각 자료를 분류한다.
2. `docs/presentation-visual-guide.md` 또는 `references/visual-tool-choice.md`에서 도구를 고른다.
3. 필요한 경우 해당 라이브러리별 md 가이드만 읽는다.
4. 기존 `src/presentation/components`에 맞는 컴포넌트가 있으면 재사용한다.
5. 없으면 작은 클라이언트 컴포넌트로 추가한다.
6. 새 예제 또는 발표 페이지를 `app/samples/*` 아래에 만든다.
7. 샘플 허브 링크를 업데이트한다.
8. 빌드 검증은 사용자가 요청한 경우에만 실행한다.

skill references 후보:

- `references/visual-tool-choice.md`: 최종 선택 가이드의 압축본
- `references/example-pages.md`: route별 예제와 사용 목적
- `references/component-contracts.md`: 현재 컴포넌트 props와 사용 예시

## 10. 완료 기준

- 라이브러리별 md 문서가 모두 존재한다.
- 각 md 문서는 공식 문서 링크, 사용 기준, 예제 페이지 후보를 포함한다.
- 최종 선택 가이드가 bullet point 중심으로 정리되어 있다.
- 최소 8개 이상의 신규 예제 페이지가 존재한다.
- 샘플 허브에서 신규 예제 페이지로 이동할 수 있다.
- skill 원본 폴더가 존재하고, `SKILL.md`가 skill-creator 원칙에 맞게 간결하게 작성되어 있다.
- skill references는 필요한 경우에만 읽을 수 있도록 분리되어 있다.
- 프로젝트 규칙인 Next.js 로컬 문서 확인, build 금지, branch 작업 금지가 문서와 skill에 반영되어 있다.

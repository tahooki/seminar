# Chatbot A2UI Product Intro Design Guide

> 기준 파일: `docs/20260605_a2ui_product_intro_presentation.html`
> 기준 슬라이드: `public/images/a2ui-poc/product-intro/slides/`
> 목적: Chatbot A2UI 제품 소개 페이지와 이미지 슬라이드의 컬러톤, UI 밀도, 이미지 생성 톤을 재사용 가능하게 고정한다.

## 디자인 방향

Chatbot A2UI의 제품 톤은 "AI가 즉흥적으로 화면을 만든다"가 아니라 "관리된 API와 화면 템플릿을 선택해 안정적인 업무 화면을 보여준다"에 맞춘다.

따라서 시각 스타일은 마케팅 랜딩보다 기술 세미나와 제품 콘솔의 중간에 둔다. 밝은 배경, 짙은 네이비 텍스트, 청록 포인트, 얇은 라인, 절제된 그림자를 사용해 신뢰감과 구조감을 만든다.

## 컬러 토큰

| Token | Hex | 역할 |
| --- | --- | --- |
| `--a2ui-bg` | `#f3f6f9` | 페이지 전체 배경 |
| `--a2ui-surface` | `#ffffff` | 카드, 패널, 슬라이드 표면 |
| `--a2ui-panel` | `#f8fafc` | 보조 패널, 코드 주변 배경 |
| `--a2ui-ink` | `#0f1722` | 가장 진한 텍스트, 다크 프레임 |
| `--a2ui-text` | `#111827` | 기본 본문 텍스트 |
| `--a2ui-muted` | `#4b5565` | 설명 문구, 보조 텍스트 |
| `--a2ui-line` | `#c9d4e0` | 카드 라인, 이미지 프레임 |
| `--a2ui-line-soft` | `#d8dee8` | 섹션 구분선 |
| `--a2ui-primary` | `#173b57` | 네이비 포인트, 버튼/번호의 깊은 톤 |
| `--a2ui-primary-soft` | `#e7eef5` | 네이비 보조 배경 |
| `--a2ui-teal` | `#1f7a6d` | 핵심 포인트, 번호 배지, 선택 상태 |
| `--a2ui-teal-soft` | `#e4f3f0` | 청록 배지 배경 |
| `--a2ui-code` | `#15202b` | 코드 블록 배경 |
| `--a2ui-shadow` | `rgba(20, 35, 52, 0.12)` | 부드러운 그림자 |

## CSS 기본값

```css
:root {
  --a2ui-bg: #f3f6f9;
  --a2ui-surface: #ffffff;
  --a2ui-panel: #f8fafc;
  --a2ui-ink: #0f1722;
  --a2ui-text: #111827;
  --a2ui-muted: #4b5565;
  --a2ui-line: #c9d4e0;
  --a2ui-line-soft: #d8dee8;
  --a2ui-primary: #173b57;
  --a2ui-primary-soft: #e7eef5;
  --a2ui-teal: #1f7a6d;
  --a2ui-teal-soft: #e4f3f0;
  --a2ui-code: #15202b;
  --a2ui-shadow: 0 18px 42px rgba(20, 35, 52, 0.12);
}
```

## 타이포그래피

- 기본 폰트는 Pretendard를 우선 사용한다.
- 이미지 합성이나 로컬 렌더링에서는 Apple SD Gothic Neo를 fallback으로 사용한다.
- 제목은 굵고 크게 둔다. 제품 메시지가 먼저 읽혀야 한다.
- 본문은 짧은 문장으로 제한한다.
- 버튼, 배지, 카드 내부 텍스트는 letter spacing을 0으로 둔다.
- 이미지 안 한글은 길게 쓰지 않는다. 긴 설명은 HTML 캡션이나 발표자 멘트로 뺀다.

## 레이아웃 규칙

- 슬라이드 이미지는 16:9, `1672 x 941` 기준으로 제작한다.
- 섹션 이미지는 가로 100%로 배치하고, 카드 안에 다시 카드를 넣지 않는다.
- 정보가 많은 흐름도는 4개씩 2줄 카드 배열을 사용한다.
- 반복되는 화면 예시는 한 화면당 한 슬라이드로 분리한다.
- 실제 제품 화면은 AI로 다시 상상해서 그리기보다 캡처를 중심에 두고 프레임과 라벨만 정리한다.
- 카드 radius는 8px 내외로 유지한다. 큰 이미지 프레임만 20px 이상을 허용한다.
- 배경 장식은 거의 쓰지 않는다. gradient orb, bokeh, 보라색 계열 장식은 피한다.

## 컴포넌트 톤

### 번호 배지

- 원형 또는 짧은 pill.
- 배경은 `--a2ui-teal`.
- 텍스트는 흰색.
- 8단계 플로우에서는 번호 배지를 모든 카드의 좌상단에 둔다.

### 카드

- 배경은 `--a2ui-surface`.
- border는 `--a2ui-line`.
- shadow는 약하게만 사용한다.
- 카드 안 텍스트는 제목 1개, 보조 설명 1개, 작은 UI 도식 1개 정도로 제한한다.

### 코드 블록

- 배경은 `--a2ui-code`.
- 코드가 길어지면 이미지 생성에서 오타가 발생하기 쉽다.
- 이미지 안에는 `server.tool(...)`, `callTool(...)`, `<SurfaceRenderer />`처럼 짧은 코드만 넣는다.
- 실제 코드 설명은 페이지 본문이나 별도 코드 패널에 둔다.

### 제품 화면

- 채팅 안 업무 화면은 다크 사이드바와 밝은 표면을 조합한다.
- 고객 설명용 화면에는 pagination, refresh, action button을 꼭 필요한 경우에만 넣는다.
- "조회 결과 표시"를 설명하는 정적 화면에서는 액션 요소를 제거한다.

## A2UI 작동 순서 표현

현재 제품 소개에서 쓰는 기본 흐름은 다음 8단계다.

1. 사용자 질문
2. Agent 판단
3. API 호출
4. A2UI Admin MCP 호출
5. API 데이터와 UI 템플릿 데이터 비교
6. 템플릿 선택
7. 데이터 변환
8. 화면 표시

이 흐름은 "A2UI가 API를 고른다"가 아니라 "고객 서비스 Agent가 기존 API를 호출하고, A2UI가 그 결과를 등록된 템플릿으로 화면화한다"를 강조한다. 특히 1-3번은 고객 서비스 기존 흐름, 4-8번은 A2UI 화면화 흐름으로 묶어 표현한다. 8번 화면은 정적 결과 화면으로 보여준다.

## Imagegen 프롬프트 프리픽스

```text
Korean 16:9 product infographic slide.
Bright white background, deep navy text, teal number badges, soft blue accents.
Rounded SaaS UI cards, thin gray-blue borders, subtle shadows.
Calm trustworthy technical seminar tone.
Keep Korean text large and sparse.
No decorative gradient blobs.
No dense code blocks.
```

## Imagegen 금지/주의

- 코드 블록에 긴 코드를 넣지 않는다.
- 생성 이미지 안에 작은 한글 문장을 많이 넣지 않는다.
- "AI가 새 화면을 만들어낸다"처럼 보이는 표현을 피한다.
- `API 표시`라고 쓰지 않는다. 사용자가 보는 것은 API가 아니라 화면이다.
- 정적 결과 화면에는 pagination, refresh, action button을 넣지 않는다.
- 보라색/남색 그라데이션만으로 화면을 채우지 않는다.

## 추천 이미지 구성

| 장면 | 구성 |
| --- | --- |
| 제품 정의 | 질문 말풍선, Agent, 채팅 안 표 화면 |
| 제품 가치 | 조회 조건 이해, 화면 선택, 화면 안 액션 |
| 실제 화면 | 캡처 중심, 좌측 설명, 우측 실제 화면 |
| 작동 순서 | 8단계, 4개씩 2줄 |
| 코드 연동 | 네 지점 카드, 짧은 코드 라벨 |
| 역할 분리 | Library Team과 End User 2-lane |
| 확장 로드맵 | 현재, 다음, 이후 3단계 |

## 한 줄 요약

Chatbot A2UI 디자인은 밝은 업무 콘솔 톤 위에 네이비와 청록을 얹어, "관리된 구조 안에서 자연어 요청이 안정적인 업무 화면으로 바뀐다"는 메시지를 전달한다.

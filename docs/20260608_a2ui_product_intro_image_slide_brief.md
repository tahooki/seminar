# A2UI Product Intro Image Slide Brief

> 기준 메시지: 기존 Agent/API는 그대로 두고, 조회 결과 화면만 A2UI로 붙인다.
> 참고 문서: `docs/20260608_a2ui_customer_agent_integration_flow.md`, `docs/20260608_a2ui_product_intro_design.md`

## 방향

이 덱은 A2UI를 새로운 Agent 제품처럼 설명하지 않는다. 고객 서비스에는 이미 사용자 채팅, Agent 판단, 기존 API 호출 로직이 있고, A2UI는 그 뒤에 붙어 API 결과를 등록된 템플릿과 Renderer로 채팅 안 업무 화면으로 표시한다.

핵심 문장은 다음과 같다.

> 기존 Agent/API는 그대로 두고, 조회 결과 화면만 A2UI로 붙입니다.

## 공통 이미지 톤

- 배경은 밝은 종이색 또는 거의 흰 배경을 사용한다.
- 메인 텍스트는 짙은 네이비, 강조 배지는 청록, 보조 강조는 부드러운 블루를 사용한다.
- 카드는 8px 내외의 둥근 모서리, 얇은 라인, 약한 그림자만 사용한다.
- 한글 텍스트는 크게, 짧게 넣는다.
- 이미지 안에는 긴 코드나 작은 문장을 넣지 않는다.
- 정적 조회 결과 화면에는 pagination, refresh, action button을 넣지 않는다.

## 최종 슬라이드 구성

이전 구성에서 제품 가치 슬라이드와 코드 연동 지점 슬라이드를 제거하고, 고객 Agent 연동 흐름을 먼저 보여주는 7장 구성으로 정리한다.

1. 고객 Agent와 A2UI 연결 흐름
2. 실제 화면 1: 표 화면
3. 실제 화면 2: 카드 목록 화면
4. 실제 화면 3: 프로필 화면
5. A2UI 작동 순서
6. 책임 분리: 고객 서비스와 A2UI
7. 확장 로드맵

## Slide 01 - 고객 Agent와 A2UI 연결 흐름

### 생성 이미지

- `/images/a2ui-poc/product-intro/slides/slide-01-product-definition.png`

### 목적

첫 장에서 A2UI가 고객 서비스 Agent를 대체하지 않고, 기존 Agent/API 뒤에 붙어 조회 결과 화면을 표시한다는 점을 고정한다.

### 화면 문구

- 기존 Agent/API는 그대로, 조회 결과 화면만 A2UI로 붙입니다
- 고객 서비스 기존 흐름
- A2UI 화면화 흐름
- 사용자 채팅
- 고객 Agent/API
- Admin MCP
- 조회 결과 화면

### 구도

왼쪽은 고객 서비스 기존 흐름, 오른쪽은 A2UI 화면화 흐름으로 나눈다.

```text
사용자 채팅 -> 고객 Agent/API -> Admin MCP -> 조회 결과 화면
```

## Slide 02 - 실제 화면 1: 표 화면

### 생성 이미지

- `/images/a2ui-poc/product-intro/slides/slide-03-screen-table.png`

### 목적

여러 행과 여러 필드를 비교해야 할 때 표 화면으로 표시되는 장면을 보여준다.

### 화면 문구

- 목록 비교는 표 화면
- table.paginated

### 유지 판단

현재 이미지에는 하단 설명 멘트가 없고, 하단 여백도 안정적이므로 유지한다.

## Slide 03 - 실제 화면 2: 카드 목록 화면

### 생성 이미지

- `/images/a2ui-poc/product-intro/slides/slide-04-screen-card-list.png`

### 목적

몇 개 항목을 빠르게 훑어볼 때 카드 목록으로 표시되는 장면을 보여준다.

### 화면 문구

- 빠른 훑어보기는 카드 목록
- card.simpleList

### 유지 판단

현재 이미지에는 하단 설명 멘트가 없고, 하단 여백도 안정적이므로 유지한다.

## Slide 04 - 실제 화면 3: 프로필 화면

### 생성 이미지

- `/images/a2ui-poc/product-intro/slides/slide-05-screen-profile.png`

### 목적

한 건을 자세히 분석할 때 프로필 화면으로 표시되는 장면을 보여준다.

### 화면 문구

- 한 건 분석은 프로필 화면
- card.profile

### 유지 판단

현재 이미지에는 하단 설명 멘트가 없고, 하단 여백도 안정적이므로 유지한다.

## Slide 05 - A2UI 작동 순서

### 생성 이미지

- `/images/a2ui-poc/product-intro/slides/slide-06-runtime-flow.png`

### 목적

1-3번은 고객 서비스의 기존 Agent/API 흐름이고, 4-8번부터 A2UI가 붙어 화면화한다는 구조를 보여준다.

### 8단계

1. 사용자 질문
2. Agent 판단
3. API 호출
4. A2UI Admin MCP 호출
5. API 데이터와 UI 템플릿 비교
6. 템플릿 선택
7. 데이터 변환
8. 화면 표시

### 구도

4개씩 2줄 카드 배열을 유지한다. 왼쪽 묶음에는 `고객 서비스 기존 흐름`, 오른쪽 묶음에는 `A2UI 화면화 흐름` 라벨을 붙인다.

## Slide 06 - 책임 분리

### 생성 이미지

- `/images/a2ui-poc/product-intro/slides/slide-08-role-separation.png`

### 목적

고객 서비스가 기존 Agent/API를 유지하고, A2UI Library Team이 결과 화면을 맡는다는 역할 분리를 보여준다.

### 화면 문구

- 고객 서비스는 Agent와 API를 유지하고, A2UI는 결과 화면을 맡습니다
- 고객 서비스: 고객 서비스 Agent, 기존 API, 업무 데이터/권한
- A2UI Library Team: Component UI, Admin MCP 템플릿, Renderer

## Slide 07 - 확장 로드맵

### 생성 이미지

- `/images/a2ui-poc/product-intro/slides/slide-09-expansion-roadmap.png`

### 목적

현재는 등록된 템플릿 선택으로 시작하고, 이후에는 정해진 패턴 안의 UI 생성과 사용 데이터 기반 UI 제안으로 확장된다는 메시지를 보여준다.

### 화면 문구

- 템플릿 선택에서 시작해, 패턴 생성과 데이터 기반 UI로 확장됩니다
- 현재: 등록된 템플릿 선택
- 다음: 패턴 안에서 UI 생성
- 이후: 사용 데이터 기반 UI 제안

## 제거한 슬라이드

다음 슬라이드는 최종 덱과 PDF에서 제거한다.

- 기존 2번 제품 가치 슬라이드
- 기존 7번 코드 연동 지점 슬라이드

## 최종 산출물

- 슬라이드 페이지: `/samples/a2ui-product-intro-slides`
- PDF: `/docs/20260608_a2ui_product_intro_image_slides.pdf`
- 정적 제품 소개 HTML: `/docs/20260605_a2ui_product_intro_presentation.html`

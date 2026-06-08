# A2UI Product Intro Image Slide Brief

> 기준 화면: `docs/20260605_a2ui_product_intro_presentation.html`
> 참고 문서: `docs/a2ui-poc-final-presentation.md` Slide 31-35, `docs/20260602_a2ui_poc_mcp_story_presentation.md` 실제 화면 예시
> 기준 톤: `public/images/a2ui-poc/product-intro/runtime-flow-v2.png`

## 방향

현재 HTML 페이지는 제품 설명이 텍스트와 카드 UI로 나뉘어 있다. 다음 버전에서는 각 주요 섹션을 16:9 이미지 슬라이드처럼 만들고, 페이지에는 그 이미지를 가로 100%로 배치한다.

핵심은 "AI가 매번 UI를 그린다"가 아니라 "우리가 관리하는 템플릿과 규칙을 Agent가 선택하고, 사용자는 채팅 안 결과 화면만 사용한다"는 제품 메시지를 더 직관적으로 보여주는 것이다.

## 공통 이미지 톤

- 배경: 밝은 종이색 또는 거의 흰 배경.
- 메인 컬러: 짙은 네이비 텍스트, 청록 포인트, 부드러운 블루 보조색.
- 형태: 8px 내외의 둥근 카드, 얇은 라인, 은은한 그림자.
- 구성: 큰 제목 1개, 짧은 보조 문구 1개, 핵심 도식 또는 제품 화면 1개.
- 한글 텍스트는 크게, 짧게. 이미지 안에 긴 문장을 넣지 않는다.
- 화면 캡처가 필요한 슬라이드는 실제 POC 화면을 중심에 두고, 주변만 같은 톤의 프레임과 라벨로 정리한다.
- `runtime-flow-v2.png`처럼 정보가 많은 슬라이드는 번호 배지와 카드 배열을 유지한다.

### 공통 프롬프트 프리픽스

```text
Clean Korean product presentation slide, wide 16:9 composition.
Bright paper-white background, deep navy typography, teal accent badges, soft blue secondary accents.
Modern SaaS UI infographic style, rounded rectangles with 8px radius, thin gray-blue borders, subtle shadows.
Clear readable Korean labels, large headline, minimal text, no decorative gradient blobs.
Use the visual tone of a polished technical seminar slide: calm, structured, trustworthy.
```

## 추천 이미지 슬라이드 구성

기존 페이지 섹션은 7개지만, "실제 화면" 섹션은 이전 A2UI POC 발표처럼 슬라이드당 화면 1개로 쪼개는 편이 설득력이 좋다. 그래서 총 9장 구성이 자연스럽다.

1. 제품 한 줄 정의
2. 질문이 화면으로 바뀌는 제품 가치
3. 실제 화면 1 - 표 화면
4. 실제 화면 2 - 카드 목록 화면
5. 실제 화면 3 - 프로필 화면
6. A2UI 작동 순서
7. 코드 연동 지점
8. 역할 분리
9. 확장 로드맵

## Slide 01 - 제품 한 줄 정의

### 생성 이미지

- `/images/a2ui-poc/product-intro/slides/slide-01-product-definition.png`

### 목적

첫 화면에서 Chatbot A2UI가 무엇인지 바로 보이게 한다. "채팅 UI"라는 말보다 "질문을 업무 화면으로 바꾸는 제품"을 먼저 보여준다.

### 화면 문구

- Chatbot A2UI
- 질문을 업무 화면으로 바꾸는 채팅 UI
- 자연어 요청 → 등록된 API 호출 → 조회 결과 표시

### 구도

왼쪽은 사용자 질문 말풍선, 가운데는 Agent 판단 노드, 오른쪽은 채팅 안에 렌더링된 업무 화면. 질문 하나가 표 화면으로 변하는 장면을 크게 보여준다.

### 이미지 생성 프롬프트

```text
Clean Korean product presentation slide, wide 16:9 composition.
Bright paper-white background, deep navy typography, teal accent badges, soft blue secondary accents.
Modern SaaS UI infographic style, rounded rectangles with 8px radius, thin gray-blue borders, subtle shadows.
Clear readable Korean labels, large headline, minimal text.

Title: "질문을 업무 화면으로 바꾸는 채팅 UI"
Small product label: "Chatbot A2UI"
Visual: left side a chat input bubble with Korean request, center a compact Agent decision node, right side a chatbot response area containing a structured table UI.
Add three small steps under the main visual: "자연어 요청", "등록된 API 호출", "조회 결과 표시".
Calm enterprise product tone, no cartoon characters, no fake brand logos.
```

## Slide 02 - 질문이 화면으로 바뀌는 제품 가치

### 생성 이미지

- `/images/a2ui-poc/product-intro/slides/slide-02-product-value.png`

### 목적

사용자 질문이 조회 조건으로 정리되고, 등록된 API와 화면 규칙을 거쳐 조회 결과 화면으로 표시된다는 점을 명확히 한다.

### 화면 문구

- 질문 하나가 등록된 조회 결과 화면으로 이어집니다
- 01 조회 조건 이해
- 02 화면 선택
- 03 결과 화면 표시

### 구도

3개의 큰 카드가 왼쪽에서 오른쪽으로 이어진다. 각 카드는 현재 HTML의 feature-list 3개를 시각화한다.

### 이미지 생성 프롬프트

```text
Clean Korean product presentation slide, wide 16:9 composition.
Bright paper-white background, deep navy typography, teal accent badges, soft blue secondary accents.
Modern SaaS UI infographic style, rounded rectangles with 8px radius, thin gray-blue borders, subtle shadows.

Title: "질문 하나가 등록된 조회 결과 화면으로 이어집니다"
Create three connected cards with teal number badges.
Card 1 label: "조회 조건 이해" with small icons for calendar, environment, status filter.
Card 2 label: "화면 선택" with small table, card list, profile UI thumbnails.
Card 3 label: "결과 화면 표시" with table, card list, and profile result screen symbols.
Use short Korean labels only. Make the flow feel like a product capability, not a generic process.
```

## Slide 03 - 실제 화면 1: 표 화면

### 생성 이미지

- `/images/a2ui-poc/product-intro/slides/slide-03-screen-table.png`

### 목적

여러 행을 비교해야 하는 요청은 표 화면이 적합하다는 점을 실제 화면 중심으로 보여준다.

### 화면 문구

- 목록 비교는 표 화면
- "지난주 production에서 실패한 배포 목록 보여줘"
- table.paginated

### 사용 자산

- `/images/a2ui-poc/mcp-story/chat-table.png`
- 참고: `docs/a2ui-poc-final-presentation.md` Slide 32-33

### 구도

실제 화면 캡처를 크게 중앙에 둔다. 왼쪽 위에 요청 말풍선, 오른쪽 아래에 `table.paginated` 라벨을 붙인다. 배경과 프레임만 `runtime-flow-v2.png` 톤으로 맞춘다.

### 이미지 생성 프롬프트

```text
Clean Korean product presentation slide, wide 16:9 composition.
Bright paper-white background, deep navy typography, teal accent badges, soft blue secondary accents.
Modern SaaS UI infographic style, rounded rectangles with 8px radius, thin gray-blue borders, subtle shadows.

Title: "목록 비교는 표 화면"
Main visual: a large framed chatbot response screenshot area showing a table UI inside chat.
Add a user request bubble: "지난주 production에서 실패한 배포 목록 보여줘"
Add a small teal label: "table.paginated"
The table should feel like an actual product screenshot, clean and dense, with many comparable rows.
Keep all text large and sparse except the table mock details.
```

## Slide 04 - 실제 화면 2: 카드 목록 화면

### 생성 이미지

- `/images/a2ui-poc/product-intro/slides/slide-04-screen-card-list.png`

### 목적

같은 배포 데이터라도 "몇 건만 빠르게 훑는" 목적이면 카드 목록이 더 적합하다는 점을 보여준다.

### 화면 문구

- 빠른 훑어보기는 카드 목록
- "실패한 배포 5건 카드로 보여줘"
- card.simpleList

### 사용 자산

- `/images/a2ui-poc/mcp-story/chat-card-list.png`
- 참고: `docs/a2ui-poc-final-presentation.md` Slide 34

### 구도

중앙에는 카드 목록 화면. 화면 주변에는 "5건", "요약", "상태" 같은 짧은 라벨을 배치한다. 표 화면과 같은 템플릿을 사용해 연속성을 만든다.

### 이미지 생성 프롬프트

```text
Clean Korean product presentation slide, wide 16:9 composition.
Bright paper-white background, deep navy typography, teal accent badges, soft blue secondary accents.
Modern SaaS UI infographic style, rounded rectangles with 8px radius, thin gray-blue borders, subtle shadows.

Title: "빠른 훑어보기는 카드 목록"
Main visual: a large framed chatbot response screenshot area showing five compact cards inside chat.
Add a user request bubble: "실패한 배포 5건 카드로 보여줘"
Add a small teal label: "card.simpleList"
Each card should suggest deployment status, service, version, and short summary.
Maintain the same layout system as the table screen slide.
```

## Slide 05 - 실제 화면 3: 프로필 화면

### 생성 이미지

- `/images/a2ui-poc/product-intro/slides/slide-05-screen-profile.png`

### 목적

한 건을 자세히 봐야 할 때는 표 한 줄보다 프로필 화면이 읽기 좋다는 점을 보여준다.

### 화면 문구

- 한 건 분석은 프로필 화면
- "상세 한 개만 보여줘"
- card.profile

### 사용 자산

- `/images/a2ui-poc/mcp-story/chat-profile.png`
- 참고: `docs/a2ui-poc-final-presentation.md` Slide 35

### 구도

프로필 화면을 크게 보여주고, `failure reason`, `incident id`, `owner` 같은 상세 필드가 정리되는 느낌을 준다.

### 이미지 생성 프롬프트

```text
Clean Korean product presentation slide, wide 16:9 composition.
Bright paper-white background, deep navy typography, teal accent badges, soft blue secondary accents.
Modern SaaS UI infographic style, rounded rectangles with 8px radius, thin gray-blue borders, subtle shadows.

Title: "한 건 분석은 프로필 화면"
Main visual: a large framed chatbot response screenshot area showing one detailed profile card inside chat.
Add a user request bubble: "상세 한 개만 보여줘"
Add a small teal label: "card.profile"
The profile card should show grouped detail fields, incident context, failure reason, owner, and status details.
Keep the product UI realistic and calm.
```

## Slide 06 - A2UI 작동 순서

### 생성 이미지

- `/images/a2ui-poc/product-intro/slides/slide-06-runtime-flow.png`

### 목적

등록된 API와 화면 템플릿을 순서대로 선택해 채팅 안의 업무 화면으로 표시하는 흐름을 보여준다. UI를 동적으로 생성한다기보다, 관리된 계약과 템플릿 중 맞는 것을 고르는 구조를 강조한다.

### 화면 문구

- A2UI 작동 순서
- 사용자 질문
- Agent 판단
- Admin MCP 호출
- API 선택
- API 조회 조건 생성
- API 실행
- 템플릿 선택
- Renderer 화면 표시

### 사용 자산

- 현재 이미지: `/images/a2ui-poc/product-intro/runtime-flow-v2.png`
- 참고: `docs/a2ui-poc-final-presentation.md` Slide 31

### 구도

4개씩 2줄 카드 배열을 유지한다. 8번 Renderer 화면은 정적 결과 화면만 보여준다.

### 이미지 생성 프롬프트

```text
Clean Korean product presentation slide, wide 16:9 composition.
Bright paper-white background, deep navy typography, teal accent badges, soft blue secondary accents.
Modern SaaS UI infographic style, rounded rectangles with 8px radius, thin gray-blue borders, subtle shadows.

Title: "A2UI 작동 순서"
Make an 8-step flow in two rows, four cards per row, with teal number badges and arrows.
Cards:
1 "사용자 질문" - chat input
2 "Agent 판단" - decision node
3 "Admin MCP 호출" - Agent connected to MCP tool
4 "API 선택" - API catalog
5 "API 조회 조건 생성" - filters for API execution
6 "API 실행" - database/API result
7 "템플릿 선택" - template catalog with table, card list, profile
8 "Renderer 화면 표시" - static chat result screen
Footer sentence: "등록된 API와 화면 템플릿을 선택해 채팅 안의 업무 화면으로 표시합니다."
```

## Slide 07 - 코드 연동 지점

### 생성 이미지

- `/images/a2ui-poc/product-intro/slides/slide-07-integration-points.png`

### 목적

제품 설명 뒤 개발자가 봐야 하는 연결 지점을 한 장으로 정리한다. 코드를 길게 보여주기보다 "어디를 붙이면 되는지"를 보여준다.

### 화면 문구

- 코드는 네 지점으로 연결됩니다
- Admin MCP Tool
- Agent SDK
- Chatbot Agent
- Chat Renderer

### 구도

4개의 코드 카드가 왼쪽에서 오른쪽으로 이어진다. 각 카드에는 2~3줄짜리 pseudo code만 넣고, 하단에는 역할 라벨을 붙인다.

### 이미지 생성 프롬프트

```text
Clean Korean product presentation slide, wide 16:9 composition.
Bright paper-white background, deep navy typography, teal accent badges, soft blue secondary accents.
Modern SaaS UI infographic style, rounded rectangles with 8px radius, thin gray-blue borders, subtle shadows.

Title: "코드는 네 지점으로 연결됩니다"
Create four connected technical cards:
1 "Admin MCP Tool" with tiny code lines: server.tool(...)
2 "Agent SDK" with tiny code lines: callTool(...)
3 "Chatbot Agent" with tiny code lines: normalize surface
4 "Chat Renderer" with tiny code lines: <SurfaceRenderer />
Use arrows between the cards.
Make it feel implementation-ready but not text-heavy.
```

## Slide 08 - 역할 분리

### 생성 이미지

- `/images/a2ui-poc/product-intro/slides/slide-08-role-separation.png`

### 목적

제품의 핵심 메시지인 "우리가 관리하고, 사용자는 사용만 한다"를 설득력 있게 보여준다.

### 화면 문구

- 우리가 관리하고, 사용자는 사용만 합니다
- Library Team: Component UI, API 규칙, 화면 계약, Renderer
- End User: 자연어 질문, 조회 결과 확인

### 구도

왼쪽은 Library Team의 관리 콘솔, 오른쪽은 End User의 채팅 화면. 가운데에는 관리된 규칙이 결과 화면으로 이어지는 얇은 연결선. End User 쪽은 질문 입력과 조회 결과 확인만 단순하게 보여준다.

### 이미지 생성 프롬프트

```text
Clean Korean product presentation slide, wide 16:9 composition.
Bright paper-white background, deep navy typography, teal accent badges, soft blue secondary accents.
Modern SaaS UI infographic style, rounded rectangles with 8px radius, thin gray-blue borders, subtle shadows.

Title: "우리가 관리하고, 사용자는 사용만 합니다"
Two-lane diagram.
Left lane title: "Library Team"
Left items: "Component UI", "API 규칙", "화면 계약", "Renderer"
Right lane title: "End User"
Right items: "자연어 질문 입력", "조회 결과 확인"
Center connector: managed templates and rules flow into a chatbot result screen.
Make the right lane simpler than the left lane to emphasize the user only uses the chat result screen.
```

## Slide 09 - 확장 로드맵

### 생성 이미지

- `/images/a2ui-poc/product-intro/slides/slide-09-expansion-roadmap.png`

### 목적

현재는 미리 만든 템플릿 선택에서 시작하지만, 이후에는 정해진 패턴 안의 UI 생성과 사용자 데이터 기반 UI 제안으로 확장될 수 있다는 메시지를 보여준다.

### 화면 문구

- 템플릿 선택에서 데이터 기반 UI로 확장됩니다
- 현재: 등록된 템플릿 선택
- 다음: 패턴 안에서 UI 생성
- 이후: 사용 데이터 기반 UI 제안

### 사용 자산

- 현재 이미지: `/images/a2ui-poc/product-intro/expansion-roadmap-v2.png`

### 구도

3단계 로드맵. 첫 단계는 검증된 템플릿 카탈로그, 두 번째는 패턴 조합 빌더, 세 번째는 사용 데이터와 추천 UI가 연결된 장면.

### 이미지 생성 프롬프트

```text
Clean Korean product presentation slide, wide 16:9 composition.
Bright paper-white background, deep navy typography, teal accent badges, soft blue secondary accents.
Modern SaaS UI infographic style, rounded rectangles with 8px radius, thin gray-blue borders, subtle shadows.

Title: "템플릿 선택에서 데이터 기반 UI로 확장됩니다"
Create a three-stage roadmap from left to right.
Stage 1 title: "현재"
Stage 1 label: "등록된 템플릿 선택" with catalog of table, card, profile templates.
Stage 2 title: "다음"
Stage 2 label: "패턴 안에서 UI 생성" with layout blocks combining safely.
Stage 3 title: "이후"
Stage 3 label: "사용 데이터 기반 UI 제안" with usage signals feeding recommended screens.
Keep it optimistic but product-realistic.
```

## 이미지 제작 순서 제안

1. Slide 01, 02, 08, 09를 먼저 생성한다. 이 네 장은 제품 메시지를 잡는 이미지라 톤 검수가 쉽다.
2. Slide 03-05는 실제 POC 캡처를 활용해 같은 프레임 템플릿으로 합성한다. 화면 자체를 AI로 새로 만들면 제품 신뢰도가 떨어질 수 있다.
3. Slide 06은 현재 `runtime-flow-v2.png`를 유지하거나, 텍스트만 조금 조정해서 재생성한다.
4. Slide 07은 코드가 너무 작아지지 않게 라벨 중심으로 만든다.

## 페이지 반영 방식

- 생성 이미지는 `public/images/a2ui-poc/product-intro/slides/` 아래에 둔다.
- HTML에서는 각 섹션의 긴 카드 UI를 줄이고, `<figure class="generated-visual">` 형태로 100% 폭 이미지와 짧은 캡션을 넣는다.
- 실제 화면 3장은 `#screens` 안에서 3개 카드가 아니라, 세로로 이어지는 3개의 큰 이미지 슬라이드처럼 배치한다.
- 텍스트가 깨지면 이미지 안 텍스트를 줄이고, HTML에서 제목과 라벨을 오버레이한다.

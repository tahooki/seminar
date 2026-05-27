# Agent와 A2UI - 발표 자료 스크립트

> 목적: AI Chatbot A2UI POC 발표에서 사용할 슬라이드 흐름과 발표자 스크립트를 정리한다.
> 톤: 비개발자도 흐름을 따라올 수 있게 Agent 기초를 먼저 잡고, A2UI POC가 왜 필요한지와 어떻게 동작하는지를 실제 화면 설명으로 연결한다.
> 발표 원칙: Patrick Winston의 "How to Speak" 원칙을 반영해, 시작은 청중이 얻게 될 것을 약속하고, 핵심 메시지를 반복하며, A2UI가 아닌 것과 맞는 것을 분명히 구분한다.

---

## 발표 핵심 메시지

**AI Chatbot A2UI POC는 AI가 매번 화면 코드를 마음대로 만드는 실험이 아니라, Chatbot Agent가 사용자의 요청과 데이터 구조를 이해한 뒤 검증된 UI를 선택해 보여줄 수 있는지 확인한 실험이다.**

발표 중 반복해서 가져갈 문장:

> **Chatbot은 답변을 만들고, Agent는 일을 진행하고, A2UI는 그 결과를 화면으로 보여줍니다.**

---

## 전체 흐름

1. Opening
2. Agent란?
3. Agent 기초
4. LLM이란?
5. MCP란?
6. Skill이란?
7. A2UI POC 배경
8. A2UI란?
9. 방향성 고민
10. A2UI 동작 방식
11. POC 화면 1 - 목록 요청 → 테이블
12. POC 화면 2 - 일부 요청 → 카드 리스트
13. POC 화면 3 - 상세 요청 → 단일 상세 카드
14. 마무리
15. QA

---

## 발표자료 섹션

### 공통 디자인 방향

- 스타일: **꼬마 로봇 가이드 + 크레용 스케치 인포그래픽**
- 배경: 따뜻한 크림색 종이 질감, 연한 노트 주석 느낌
- 캐릭터: 흰색 몸체와 민트 포인트를 가진 귀여운 AI 로봇, 둥근 머리, 작은 안테나, 큰 눈, 크레용 포인터
- 구성: 큰 주장형 제목 1개, 짧은 라벨 2-4개, 핵심 시각 요소 1개
- 색감: 민트, 코랄, 라벤더, 레몬 옐로, 연한 하늘색 같은 파스텔 포인트
- 실제 POC 화면: AI로 다시 그리지 않고 **캡처를 그대로 사용**하고, 주변에 하이라이트/번호/콜아웃만 추가
- 이미지 생성 주의: 한글 텍스트는 **시각 구조를 이해시키는 짧은 라벨이 필요할 때만** 넣는다
- 긴 제목, 긴 문장, 발표 핵심 문구는 PPT/HTML에서 직접 얹는다
- 로봇은 가리키거나 안내만 한다. **대사는 명시한 경우에만** 넣고, 격려 문구/잡담/포스트잇 문장을 임의로 만들지 않는다
- 프롬프트에는 필요한 짧은 한글/영문 라벨을 넣고, 어색한 텍스트가 나온 슬라이드만 재생성한다
- 이미지 프롬프트 공통 조건: `16:9 landscape, warm hand-drawn crayon sketch infographic on cream paper, cute white-and-mint AI robot mascot, pastel accents, clear Korean crayon handwriting, one main visual idea, not text-heavy`

### Slide 0 - Opening

#### 포함 내용

- 제목: Agent와 A2UI
- 부제: AI Chatbot을 답변 도구에서 업무 UI Agent로 확장하기
- 시각 요소: Chatbot 대화창 안에서 텍스트 답변이 A2UI 카드/테이블 surface로 확장되는 장면
- 메시지: 텍스트 답변에서 업무 화면으로 확장되는 전환

#### 이미지 프롬프트

```txt
Style: warm hand-drawn crayon sketch infographic on cream paper. Whimsical
storybook feel with light notebook annotation touches. 16:9 landscape.

Use a cute AI robot mascot as the guide: white body with mint accents, rounded
head with one small antenna, square torso, short arms and legs, big friendly
eyes, holding a crayon pointer. Keep the robot friendly and consistent with a
technical seminar deck.

Cover slide. Center: draw one large friendly chatbot window on the cream
presentation board. Inside the same chatbot window, show a natural progression:
at the top, simple chat bubbles labeled "텍스트 답변"; below them, an assistant
message expands into an embedded A2UI surface labeled "A2UI 카드" with a compact
card, mini table, status chip, and one small action button. Make it clear that
the A2UI appears inside the chatbot conversation, not as a separate dashboard.

The cute robot stands beside the chatbot window and points with a crayon
pointer at the embedded A2UI surface. Add a small crayon arrow inside the chat
window labeled "답변에서 화면으로".

Large Korean title on the board: "Agent와 A2UI".
Subtitle under the title: "AI Chatbot을 업무 UI Agent로 확장하기".
Small bottom labels: "LLM · Agent · MCP · Skill · A2UI".

Use pastel accents: mint, coral, lavender, lemon yellow, soft sky blue. Keep
the background bright cream, not dark. Make the composition spacious, friendly,
and clearly presentation-like. Korean Hangul should be clear crayon handwriting.
Suggested text: "Agent와 A2UI", "AI Chatbot을 업무 UI Agent로 확장하기",
"텍스트 답변", "A2UI 카드", "답변에서 화면으로", "LLM · Agent · MCP · Skill · A2UI".
Do not add any extra speech bubbles, sticky notes, encouragement, or side
captions.
Avoid photorealism, glossy 3D, neon cyber style, clutter, watermark, and overly small text.
```

#### 생성 이미지

- `/images/a2ui-poc/generated/slide-00-opening.png`

### Slide 1 - 오늘의 흐름

#### 포함 내용

- 오늘 발표의 진행 순서
- Agent 기초에서 A2UI POC 화면까지 이어지는 로드맵
- 메시지: 용어 설명이 아니라 사용자의 말이 업무 화면으로 연결되는 흐름을 따라간다

#### 이미지 프롬프트

```txt
Style: warm hand-drawn crayon sketch infographic on cream paper. Whimsical
storybook feel with light notebook annotation touches. 16:9 landscape.

Use a cute AI robot mascot as the guide: white body with mint accents, rounded
head with one small antenna, square torso, short arms and legs, big friendly
eyes, holding a crayon pointer. Keep the robot friendly and consistent with a
technical seminar deck.

Roadmap slide. Draw a clean winding hand-drawn crayon path across the cream
paper. The robot stands near the start of the path and points forward with a
crayon pointer. The robot must not speak.

Add six milestone cards along the path, each with one simple doodle icon and a
large readable Korean label:
1. "Agent란?" with a robot face icon
2. "Agent 기초" with a small brain/lightbulb icon
3. "A2UI 배경" with a speech bubble plus UI card icon
4. "동작 방식" with a flowchart icon
5. "POC 화면" with a small monitor icon
6. "QA" with a question mark icon

Top headline: "오늘의 흐름".
Small subtitle: "Agent를 먼저 잡고 A2UI 화면까지 연결합니다".

Use pastel accents: mint, coral, lavender, lemon yellow, soft sky blue. Keep
the slide airy and readable from a distance. Korean Hangul should be clear
crayon handwriting.

Suggested text: "오늘의 흐름", "Agent를 먼저 잡고 A2UI 화면까지 연결합니다",
"Agent란?", "Agent 기초", "A2UI 배경", "동작 방식", "POC 화면", "QA".
Do not add any other Korean sentences, speech bubbles, sticky notes, jokes,
encouraging messages, classroom phrases, or extra captions. No text such as
"궁금한 건 언제든 물어보세요", "함께 가요", "한 걸음씩".

Avoid dark SaaS dashboard style, photorealism, glossy 3D, neon cyber style,
clutter, watermark, and overly small text.
```

#### 생성 이미지

- `/images/a2ui-poc/generated/slide-01-flow.png`

### Slide 2 - 핵심 질문

#### 포함 내용

- 발표의 핵심 질문을 한 장으로 제시
- “답변만 잘하면 충분할까?”라는 문제 제기
- 메시지: 텍스트 답변만으로 부족한 업무 상황이 있다

#### 이미지 프롬프트

```txt
Style: warm hand-drawn crayon sketch infographic on cream paper. 16:9
landscape. Cute white-and-mint AI robot mascot, pastel accents, clear Korean
crayon handwriting.

Question slide, not a process diagram. Center: one large crayon question card
with the Korean text "답변만 잘하면 충분할까?". Around the question card, draw
three small workplace need doodles: a comparison table, a status chip, and a
next-action button. The robot stands beside the card, pointing at the question.

Small labels near the doodles: "비교", "상태", "다음 액션".

Suggested text: "답변만 잘하면 충분할까?", "비교", "상태", "다음 액션".
Do not draw the full A2UI solution yet. Do not add extra speech bubbles,
sticky notes, or friendly side comments.

Keep the layout friendly, spacious, and easy to read from far away. Avoid dark
dashboard style, photorealism, glossy 3D, clutter, watermark, and tiny text.
```

#### 생성 이미지

- `/images/a2ui-poc/generated/slide-02-question.png`

### Slide 3 - Agent란?

#### 포함 내용

- Agent 정의: 목표를 위해 도구를 사용하며 반복 실행하는 시스템
- 루프: Goal → Plan → Tool → Observe → Decide
- 메시지: Agent는 한 번 답하고 끝나는 구조가 아니라, 결과를 보고 다음 행동을 정한다

#### 이미지 프롬프트

```txt
Style: warm hand-drawn crayon sketch infographic on cream paper. 16:9
landscape. Cute white-and-mint AI robot mascot, pastel accents, clear Korean
crayon handwriting.

Agent loop diagram. Center: the robot labeled "Agent" holding a crayon pointer.
Around it, draw a circular crayon loop with five large stops: "목표", "계획",
"도구", "관찰", "결정". Use simple icons: target, checklist, wrench, eye,
decision diamond.

Bottom sentence in clear Korean: "Agent는 답하기 전에 필요한 일을 진행한다".
Suggested text: "Agent", "목표", "계획", "도구", "관찰", "결정",
"Agent는 답하기 전에 필요한 일을 진행한다".
Do not add extra dialogue, tips, sticky notes, or side captions.
Keep the loop simple and memorable. Avoid dark backgrounds, neon, glossy 3D,
busy labels, watermark, and tiny text.
```

#### 생성 이미지

- `/images/a2ui-poc/generated/slide-03-agent.png`

### Slide 4 - Agent의 구성

#### 포함 내용

- Agent 구성 요소: Model, Tools, State, Runtime, Guardrails
- 각 요소의 역할을 한 화면에서 분해도처럼 보여줌
- 메시지: Agent는 모델 하나가 아니라 실행 시스템이다

#### 이미지 프롬프트

```txt
Style: warm hand-drawn crayon sketch infographic on cream paper. 16:9
landscape. Cute white-and-mint AI robot mascot, pastel accents, clear Korean
crayon handwriting.

Exploded-view diagram of the robot as an Agent system. The robot is gently
separated into five labeled parts: head labeled "Model", hands holding tools
labeled "Tools", chest notebook labeled "State", small floor platform labeled
"Runtime", soft safety rail around the robot labeled "Guardrails".

Add a small title at top: "Agent의 구성". Use only these five labels plus the
title.
Suggested text: "Agent의 구성", "Model", "Tools", "State", "Runtime",
"Guardrails".
Do not add extra dialogue, tips, sticky notes, or side captions.
Keep it clean, cute, and readable. Avoid photorealism, dark dashboard
style, glossy 3D, clutter, watermark, and tiny text.
```

#### 생성 이미지

- `/images/a2ui-poc/generated/slide-04-agent-components.png`

### Slide 5 - LLM이란?

#### 포함 내용

- LLM은 언어를 이해하고 생성하는 엔진
- Agent 안에서 두뇌 역할을 하지만, 혼자서는 실제 시스템을 확인하거나 실행하지 못함
- 메시지: LLM은 핵심 요소지만 Agent 전체는 아니다

#### 이미지 프롬프트

```txt
Style: warm hand-drawn crayon sketch infographic on cream paper. 16:9
landscape. Cute white-and-mint AI robot mascot, pastel accents, clear Korean
crayon handwriting.

Concept slide about LLM. Draw a soft cloud or brain-shaped doodle labeled
"LLM" writing sentences on a sheet of paper. Next to it, draw locked systems:
a database cylinder labeled "DB", a plug labeled "API", and a small admin panel
labeled "Admin". The robot points from the LLM to the locked systems, explaining
that LLM alone cannot access them.

Top title: "LLM은 Agent의 두뇌 역할입니다". Small bottom label: "혼자서는 실제
시스템을 확인하지 못합니다".
Suggested text: "LLM", "DB", "API", "Admin", "LLM은 Agent의 두뇌 역할입니다",
"혼자서는 실제 시스템을 확인하지 못합니다".
Do not add extra dialogue, tips, sticky notes, or side captions.
Keep text short and clear. Avoid dark mood,
photorealism, glossy 3D, clutter, watermark, and tiny text.
```

#### 생성 이미지

- `/images/a2ui-poc/generated/slide-05-llm.png`

### Slide 6 - MCP란?

#### 포함 내용

- MCP는 Agent와 외부 도구를 연결하는 표준 통로
- 도구 목록 제공, 도구 실행, 결과 반환
- 메시지: Agent가 외부 시스템을 안전하게 사용할 수 있게 하는 연결 구조

#### 이미지 프롬프트

```txt
Style: warm hand-drawn crayon sketch infographic on cream paper. 16:9
landscape. Cute white-and-mint AI robot mascot, pastel accents, clear Korean
crayon handwriting.

Hub-and-spoke diagram. Left: the robot labeled "Agent". Center: a friendly
adapter hub labeled "MCP". Right: four external system cards labeled "DB",
"API", "Admin", "Files". Draw crayon cables from Agent to MCP and from MCP to
each system. The robot plugs a cable into the MCP hub.

Top headline: "MCP는 도구 연결 통로입니다". Keep labels large and simple.
Suggested text: "Agent", "MCP", "DB", "API", "Admin", "Files",
"MCP는 도구 연결 통로입니다".
Do not add extra dialogue, tips, sticky notes, or side captions.
Avoid dark dashboard style, neon, photorealism, glossy 3D, clutter, watermark,
and tiny text.
```

#### 생성 이미지

- `/images/a2ui-poc/generated/slide-06-mcp.png`

### Slide 7 - Skill이란?

#### 포함 내용

- Skill은 특정 작업을 잘하기 위한 절차와 기준
- 예시, 템플릿, 검증 방식, 작업 순서를 포함
- 메시지: MCP가 도구라면 Skill은 작업법이다

#### 이미지 프롬프트

```txt
Style: warm hand-drawn crayon sketch infographic on cream paper. 16:9
landscape. Cute white-and-mint AI robot mascot, pastel accents, clear Korean
crayon handwriting.

Draw a cozy crayon manual or playbook labeled "Skill". The robot stands beside
it with a crayon pointer. Inside the manual, draw four simple sections with
short labels: "절차", "예시", "템플릿", "검증". Add tiny doodles: checklist,
sample card, template page, check stamp.

Top headline: "Skill은 작업법입니다". Keep the page clean and seminar-like.
Suggested text: "Skill", "절차", "예시", "템플릿", "검증", "Skill은 작업법입니다".
Do not add extra dialogue, tips, sticky notes, or side captions.
Avoid dark SaaS style, photorealism, glossy 3D, clutter, watermark, and tiny
text.
```

#### 생성 이미지

- `/images/a2ui-poc/generated/slide-07-skill.png`

### Slide 8 - A2UI POC 배경

#### 포함 내용

- 기존 Chatbot의 한계: 긴 텍스트 답변만으로는 업무 이해와 액션이 어렵다
- 더 가치 있는 Chatbot을 만들기 위한 고민
- 팀 차원의 Agent 개발 역량 확보
- 메시지: 답변 품질을 넘어 업무 화면 제공이 필요했다

#### 이미지 프롬프트

```txt
Style: warm hand-drawn crayon sketch infographic on cream paper. 16:9
landscape. Cute white-and-mint AI robot mascot, pastel accents, clear Korean
crayon handwriting.

Before-and-after comparison. Left side labeled "텍스트 답변": a tall stack of
chat bubbles, slightly overwhelming but still cute. Right side labeled "업무
화면": a compact UI card with a small table, status chips, and a button. The
robot stands in the middle drawing a crayon arrow from left to right labeled
"더 바로 이해".

Top headline: "답변만으로 부족한 순간이 있습니다". Keep it friendly and
readable.
Suggested text: "답변만으로 부족한 순간이 있습니다", "텍스트 답변", "업무 화면",
"더 바로 이해".
Do not add extra dialogue, tips, sticky notes, or side captions.
Avoid dark dashboard style, photorealism, glossy 3D, clutter,
watermark, and tiny text.
```

#### 생성 이미지

- `/images/a2ui-poc/generated/slide-08-background.png`

### Slide 9 - A2UI란?

#### 포함 내용

- A2UI는 Agent-to-User Interface
- Agent가 UI 의도와 데이터를 전달하고, Chatbot이 검증된 컴포넌트로 렌더링
- 메시지: A2UI는 Agent가 코드를 마음대로 실행하는 방식이 아니다

#### 이미지 프롬프트

```txt
Style: warm hand-drawn crayon sketch infographic on cream paper. 16:9
landscape. Cute white-and-mint AI robot mascot, pastel accents, clear Korean
crayon handwriting.

Clean left-to-right system flow on a large cream paper sheet:
"Agent" -> "UI Spec" -> "Chatbot 렌더링".
Draw the robot at the Agent side sending a small paper note instead of code.
In the middle, draw a structured spec card with brackets and field doodles.
At the final side, draw a chatbot message bubble that contains a friendly
approved UI card inside it. Make it clear the UI appears inside the chatbot.

Add a small crossed-out sticker: "코드 실행 X". Top headline: "A2UI는 의도를
Chatbot UI로 렌더링합니다".

Suggested text: "Agent", "UI Spec", "Chatbot 렌더링", "코드 실행 X",
"A2UI는 의도를 Chatbot UI로 렌더링합니다". Do not add dashboard labels or
separate app-screen labels.

Keep it light, clear, and not text-heavy. Avoid dark dashboard style,
photorealism, glossy 3D, clutter, watermark, and tiny text.
```

#### 생성 이미지

- `/images/a2ui-poc/generated/slide-09-a2ui.png`

### Slide 10 - 방향성 고민

#### 포함 내용

- 질문: Agent에게 UI를 어디까지 맡길 것인가?
- 양극단 비교: 자유 생성은 불안정, 완전 고정은 유연하지 않음
- 선택한 방향: 검증된 UI + Agent의 선택
- 메시지: 핵심은 자유 생성이 아니라 적절한 선택이다

#### 이미지 프롬프트

```txt
Style: warm hand-drawn crayon sketch infographic on cream paper. 16:9
landscape. Cute white-and-mint AI robot mascot, pastel accents, clear Korean
crayon handwriting.

Decision slide. Draw a three-option fork in a crayon road. Left path labeled
"자유 생성" with messy UI fragments and a small warning mark. Right path labeled
"고정 UI" with stiff locked template cards. Center path is highlighted and
labeled "검증된 UI 선택"; the robot stands there holding a sign that says
"안전하게 동적으로".

Top headline: "UI를 어디까지 Agent에게 맡길까?". Keep labels large and simple.
Suggested text: "UI를 어디까지 Agent에게 맡길까?", "자유 생성", "고정 UI",
"검증된 UI 선택", "안전하게 동적으로".
Do not add extra dialogue, tips, sticky notes, or side captions.
Avoid dark enterprise style, photorealism, glossy 3D, clutter, watermark, and
tiny text.
```

#### 생성 이미지

- `/images/a2ui-poc/generated/slide-10-direction.png`

### Slide 11 - A2UI 동작 방식

#### 포함 내용

- Admin에 UI 스펙 등록
- User 요청 입력
- Agent가 의도와 데이터 구조 분석
- UI 선택
- Chatbot 렌더링
- 메시지: 준비된 UI 중에서 상황에 맞는 UI를 선택하고 데이터를 연결한다

#### 이미지 프롬프트

```txt
Style: warm hand-drawn crayon sketch infographic on cream paper. 16:9
landscape. Cute white-and-mint AI robot mascot, pastel accents, clear Korean
crayon handwriting.

Pipeline diagram on cream paper. Draw five rounded crayon cards connected by
wiggly arrows:
1. "UI 스펙 등록"
2. "사용자 요청"
3. "Agent 분석"
4. "UI 선택"
5. "Chatbot 렌더링"

The robot moves a small request note through the cards and stamps "검증" between
"UI 선택" and "Chatbot 렌더링". The final card should be a chatbot message
containing an embedded UI card, not a separate dashboard screen. Add tiny icons:
admin drawer, chat bubble, brain, component card, chat window.

Top headline: "A2UI는 선택하고 Chatbot 안에 렌더링합니다".

Suggested text: "UI 스펙 등록", "사용자 요청", "Agent 분석", "UI 선택",
"Chatbot 렌더링", "검증", "A2UI는 선택하고 Chatbot 안에 렌더링합니다".
Do not add extra speech bubbles, sticky notes, or side comments.

Keep it readable and not crowded. Avoid dark SaaS style, photorealism, glossy
3D, watermark, and tiny text.
```

#### 생성 이미지

- `/images/a2ui-poc/generated/slide-11-operation.png`

### Slide 12 - POC 화면 1: 목록 요청 → 테이블

#### 포함 내용

- 실제 POC 화면 캡처 중심
- 사용자 요청: “지난주 production에서 실패한 배포 목록 보여줘”
- 선택된 UI: 페이지네이션 테이블
- 메시지: 비교해야 하는 row가 많으면 테이블이 가장 적합하다

#### 사용 이미지

- `/images/a2ui-poc/poc-flow/01-table.png`

#### 슬라이드 구성

- 스크린샷을 화면 대부분에 크게 배치
- 상단 작은 제목: **목록 요청 → 테이블**
- 좌측 또는 하단 콜아웃 3개: **요청 문장**, **선택 기준: row 비교**, **렌더링: table.paginated**
- 강조 위치: 사용자 말풍선, Assistant 응답 말풍선, 테이블 surface

### Slide 13 - POC 화면 2: 일부 요청 → 카드 리스트

#### 포함 내용

- 실제 POC 화면 캡처 중심
- 사용자 요청: “지난주 production에서 실패한 배포 5건 카드로 보여줘”
- 선택된 UI: 카드 리스트
- 메시지: 같은 데이터라도 일부만 빠르게 훑는 요청이면 카드 리스트가 더 자연스럽다

#### 사용 이미지

- `/images/a2ui-poc/poc-flow/02-card-list.png`

#### 슬라이드 구성

- 스크린샷을 화면 대부분에 크게 배치
- 상단 작은 제목: **일부 요청 → 카드 리스트**
- 콜아웃 3개: **요청 수량: 5건**, **선택 기준: 빠른 훑어보기**, **렌더링: card.simpleList**
- 강조 위치: 사용자 말풍선의 “5건 카드”, 카드 리스트 첫 번째/두 번째 카드

### Slide 14 - POC 화면 3: 상세 요청 → 단일 상세 카드

#### 포함 내용

- 실제 POC 화면 캡처 중심
- 사용자 요청: “지난주 production에서 실패한 배포 상세 한 개만 보여줘”
- 선택된 UI: 단일 상세 카드
- 메시지: 한 row를 깊게 볼 때는 테이블보다 상세 카드가 더 적합하다

#### 사용 이미지

- `/images/a2ui-poc/poc-flow/03-profile-card.png`

#### 슬라이드 구성

- 스크린샷을 화면 대부분에 크게 배치
- 상단 작은 제목: **상세 요청 → 단일 상세 카드**
- 콜아웃 3개: **요청 범위: 1건**, **선택 기준: 상세 확인**, **렌더링: card.profile**
- 강조 위치: 사용자 말풍선의 “상세 한 개”, `Selected row` 영역, 실패 원인/incident 정보

### Slide 15 - 마무리

#### 포함 내용

- 최종 메시지를 한 문장으로 크게 제시
- 작은 챗봇 말풍선 안에 A2UI 카드가 들어간 장면으로 핵심을 상기
- 메시지: 답변 도구에서 업무 UI Agent로 확장 가능하다

#### 이미지 프롬프트

```txt
Style: warm hand-drawn crayon sketch infographic on cream paper. 16:9
landscape. Cute white-and-mint AI robot mascot, pastel accents, clear Korean
crayon handwriting.

Closing slide. Do not repeat the full process diagram. Center: the robot holds
a large cream sign with the final takeaway. Beside the sign, draw one small
chatbot bubble containing an embedded A2UI card as a simple visual reminder.
Add a small check mark sticker and calm crayon confetti.

Large Korean takeaway on a cream sign: "Chatbot은 업무 UI Agent로 확장될 수 있습니다".

Suggested text: "Chatbot은 업무 UI Agent로 확장될 수 있습니다".
No process labels such as "답변", "작업", "화면". Do not add extra motivational
sentences or Q&A prompts.

Keep the composition warm, memorable, and not crowded. Avoid dark SaaS style,
photorealism, glossy 3D, neon, watermark, and overly small text.
```

#### 생성 이미지

- `/images/a2ui-poc/generated/slide-15-closing.png`

---

## Slide 0 - Opening

### 화면 문구

- **Agent와 A2UI**
- **AI Chatbot을 답변 도구에서 업무 UI Agent로 확장하기**
- LLM · Agent · MCP · Skill · A2UI

### 스크립트

오늘 발표가 끝나면 여러분은 세 가지를 이해하실 수 있을 것 같습니다.

첫 번째, 요즘 많이 이야기되는 **Agent가 무엇인지, 그리고 단순히 답변을 생성하는 AI와는 어떤 점이 다른지** 이해하실 수 있습니다.

두 번째, **A2UI가 왜 필요한지**, 그리고 Chatbot에 붙이면 어떤 가치가 생기는지 이해하실 수 있습니다.

세 번째, 저희가 진행한 **AI Chatbot A2UI POC가 어떤 방식으로 동작하는지** 실제 화면 기준으로 이해하실 수 있습니다.

이번 발표의 핵심을 한 문장으로 먼저 말씀드리면 이렇습니다.

**Chatbot이 텍스트로만 답하는 도구를 넘어, 사용자의 요청에 맞는 화면까지 선택해서 보여주는 Agent로 확장될 수 있는지 확인해본 POC입니다.**

오늘은 Agent 기초, A2UI 개념, 그리고 POC 구현 방식 순서로 설명드리겠습니다.

---

## Slide 1 - 오늘의 흐름

### 화면 문구

- **Agent를 먼저 이해하고**
- **A2UI로 실제 화면까지 연결합니다**
- Agent란? → Agent 기초 → A2UI 배경 → 동작 방식 → POC 화면 → QA

### 스크립트

오늘 발표는 용어를 하나씩 외우는 발표라기보다는, **사용자의 말이 어떻게 실제 업무 화면으로 연결될 수 있는지** 따라가보는 발표입니다.

먼저 Agent가 무엇인지 간단히 정리하겠습니다. 그다음 Agent를 이해하기 위해 필요한 LLM, MCP, Skill을 설명드리고, 마지막으로 이번 Chatbot A2UI POC가 어떤 배경에서 시작됐고 어떤 방식으로 동작하는지 보여드리겠습니다.

---

## Slide 2 - 핵심 질문

### 화면 문구

- **Chatbot은 답변을 줍니다**
- **Agent는 일을 진행합니다**
- **A2UI는 결과를 화면으로 보여줍니다**

### 스크립트

먼저 오늘 발표의 핵심 질문부터 말씀드리겠습니다.

AI Chatbot을 만들다 보면 자연스럽게 이런 고민이 생깁니다.

**사용자가 질문했을 때 답변만 잘하면 충분할까?**

텍스트 답변은 빠르고 편리하지만, 업무 상황에서는 텍스트만으로 부족한 경우가 많습니다. 데이터를 비교해야 할 수도 있고, 여러 항목을 선택해야 할 수도 있고, 바로 다음 액션을 실행해야 할 수도 있습니다.

그래서 이번 POC에서는 Chatbot이 단순히 답변만 하는 것이 아니라, 사용자의 요청과 데이터 구조를 이해하고, 그에 맞는 UI를 선택해서 보여줄 수 있는지 확인해봤습니다.

다시 말하면, 이번 POC의 목표는 예쁜 화면을 자동으로 만드는 것이 아니라 **Chatbot이 더 업무적으로 쓸모 있는 Agent가 될 수 있는지 확인하는 것**이었습니다.

---

## Slide 3 - Agent란?

### 화면 문구

- **Agent = 목표를 위해 도구를 사용하며 반복 실행하는 시스템**
- Goal → Plan → Tool → Observe → Decide → Answer / Act

### 스크립트

그럼 Agent란 무엇일까요?

요즘 AI, LLM, ChatGPT, Agent 같은 단어를 자주 듣습니다. 비슷하게 들리지만 역할은 조금 다릅니다.

**Agent는 단순히 답변만 생성하는 AI가 아니라, 목표를 이해하고 필요한 도구를 사용하면서 작업을 수행하는 시스템**이라고 볼 수 있습니다.

예를 들어 사용자가 "이 데이터를 정리해줘"라고 요청했다고 해보겠습니다. Agent는 바로 답변을 만들 수도 있지만, 필요한 경우 API를 호출하고, DB나 문서를 조회하고, 결과를 다시 확인한 뒤 최종 답변이나 액션을 만들 수 있습니다.

즉 Agent는 한 번 답하고 끝나는 구조라기보다, **생각하고, 도구를 쓰고, 결과를 다시 보고, 다음 행동을 결정하는 반복 구조**에 가깝습니다.

---

## Slide 4 - Agent의 구성

### 화면 문구

- **Model**
- **Tools**
- **State**
- **Runtime**
- **Guardrails**

### 스크립트

Agent를 하나의 AI 모델로만 보면 헷갈리기 쉽습니다.

실제로 Agent는 여러 요소가 함께 동작하는 시스템입니다.

먼저 **Model**이 있습니다. GPT나 Claude 같은 LLM이 여기에 해당하고, 사용자의 말을 이해하고 다음 행동을 판단하는 두뇌 역할을 합니다.

그다음 **Tools**가 있습니다. API 호출, DB 조회, 파일 읽기, 외부 서비스 연동처럼 실제 작업을 수행하는 수단입니다.

그리고 **State**가 있습니다. 지금까지 어떤 요청이 있었고, 어떤 값을 이미 알고 있고, 어떤 값이 아직 비어 있는지 기억하는 역할입니다.

또 **Runtime**이 있습니다. 모델을 호출하고, 도구를 실행하고, 결과를 다시 모델에게 넘기는 실행 환경입니다.

마지막으로 **Guardrails**가 있습니다. 권한, 보안, 검증, fallback 같은 안전 장치입니다.

이렇게 보면 Agent는 "똑똑한 모델 하나"라기보다 **모델, 도구, 상태, 실행 환경, 안전 정책이 함께 움직이는 구조**라고 이해하시면 됩니다.

---

## Slide 5 - LLM이란?

### 화면 문구

- **LLM은 언어를 이해하고 생성하는 엔진입니다**
- **Agent의 핵심 두뇌지만, 혼자서는 실제 시스템을 확인하지 못합니다**

### 스크립트

여기서 LLM이라는 말도 많이 들어보셨을 것 같습니다.

LLM은 Large Language Model의 줄임말입니다. GPT나 Claude 같은 모델이 대표적입니다.

LLM은 사용자의 문장을 이해하고, 문맥에 맞는 답변을 생성하는 데 강합니다. 그래서 Agent 안에서는 핵심 두뇌 역할을 합니다.

다만 LLM 자체는 기본적으로 언어를 다루는 엔진에 가깝습니다. 혼자서는 우리 회사 DB를 조회하거나, 배포 API를 호출하거나, Admin에 등록된 UI 스펙을 직접 확인할 수 없습니다.

그래서 LLM만으로는 실제 업무를 안정적으로 처리하기 어렵습니다. LLM에 도구와 데이터, 실행 규칙을 연결해서 원하는 작업을 수행하게 만드는 구조가 필요하고, 그 구조가 Agent입니다.

정리하면 **LLM은 Agent의 핵심이지만, Agent 전체는 아닙니다.**

---

## Slide 6 - MCP란?

### 화면 문구

- **MCP = Agent와 외부 도구를 연결하는 표준 통로**
- Tool 목록 제공
- Tool 실행
- 결과 반환

### 스크립트

Agent가 실제 업무를 하려면 외부 도구와 연결되어야 합니다.

예를 들어 DB를 조회하거나, API를 호출하거나, GitHub, Figma, Admin 같은 시스템과 연결해야 합니다.

이때 등장하는 개념이 **MCP**입니다.

MCP는 Model Context Protocol의 줄임말이고, 쉽게 말하면 **Agent가 외부 도구나 시스템과 연결될 수 있게 해주는 표준화된 통로**라고 이해하시면 됩니다.

Agent 입장에서는 "내가 어떤 도구를 사용할 수 있는지", "그 도구는 어떤 입력을 받아야 하는지", "호출하면 어떤 결과가 돌아오는지"를 알아야 합니다.

MCP는 이런 도구 목록과 실행 방식을 Agent에게 제공해줍니다.

비유하자면, LLM이 머리라면 MCP는 손에 쥐는 도구 상자에 가깝습니다. Agent는 MCP를 통해 필요한 도구를 고르고, 실행하고, 결과를 다시 판단에 사용합니다.

---

## Slide 7 - Skill이란?

### 화면 문구

- **Skill = 특정 작업을 잘하기 위한 절차와 기준**
- 언제 어떤 도구를 쓸지 알려주는 작업법
- 예시, 템플릿, 검증 방식 포함

### 스크립트

MCP가 도구를 연결해준다면, Skill은 그 도구를 **언제 어떻게 써야 하는지 알려주는 작업법**에 가깝습니다.

예를 들어 발표 자료를 만드는 Skill이 있다면, 어떤 구조로 발표를 시작해야 하는지, 어떤 시각화 도구를 써야 하는지, 어떤 컴포넌트를 재사용해야 하는지, 검증은 어떻게 해야 하는지 같은 기준이 들어갈 수 있습니다.

코드 수정 Skill이라면 파일을 먼저 읽고, 기존 패턴을 따르고, 테스트를 실행하고, 변경 범위를 설명하는 방식이 들어갈 수 있습니다.

즉 Skill은 단순한 기능 하나가 아니라, **반복 작업을 안정적으로 수행하기 위한 절차, 기준, 예시, 템플릿의 묶음**입니다.

Agent는 Skill을 통해 매번 처음부터 고민하지 않고, 특정 작업에 맞는 방식으로 더 일관되게 행동할 수 있습니다.

---

## Slide 8 - A2UI POC 배경

### 화면 문구

- **답변만으로 충분하지 않은 순간**
- 긴 텍스트보다 바로 이해되는 화면
- 팀 차원의 Agent 개발 역량 확보

### 스크립트

이제 이번 A2UI POC를 준비하게 된 배경을 말씀드리겠습니다.

AI Chatbot을 만들면서 가장 많이 했던 고민은 이것이었습니다.

**Chatbot이 사용자에게 더 많은 가치를 주려면 무엇이 필요할까?**

처음에는 자연스럽게 답변 품질을 생각하게 됩니다. 그런데 실제 업무 흐름으로 들어가면 답변 품질만으로는 부족한 순간이 생깁니다.

예를 들어 여러 데이터를 비교해야 하거나, 상태를 한눈에 봐야 하거나, 사용자가 바로 다음 액션을 해야 하는 경우에는 긴 텍스트보다 테이블, 카드, 상세 화면 같은 UI가 훨씬 효과적입니다.

또 앞으로 Agent 기반 개발이 점점 중요해질 것이라고 보고, 팀 차원에서도 Agent 관련 개발 역량을 확보해 나갈 필요가 있다고 판단했습니다.

그래서 Chatbot에 A2UI 기능을 붙여보는 POC를 진행하게 되었습니다.

---

## Slide 9 - A2UI란?

### 화면 문구

- **A2UI = Agent-to-User Interface**
- Agent가 UI 의도를 전달하고
- Client가 검증된 컴포넌트로 렌더링합니다

### 스크립트

A2UI는 Agent-to-User Interface의 줄임말입니다.

핵심은 Agent가 사용자에게 텍스트만 전달하는 것이 아니라, **화면으로 렌더링 가능한 구조화된 UI 정보를 전달한다는 것**입니다.

다만 여기서 중요한 경계가 있습니다.

A2UI는 Agent가 매번 HTML, CSS, JavaScript를 자유롭게 만들어서 실행하는 방식이 아닙니다.

그렇게 하면 보안, 디자인 일관성, 품질 관리가 어려워집니다. 서비스마다 버튼 모양이 달라질 수도 있고, 검증되지 않은 코드가 실행될 수도 있습니다.

이번 POC에서 본 A2UI는 조금 다릅니다.

Agent는 "이 상황에서는 이런 UI가 적합하다"는 의도와 데이터를 전달하고, 실제 화면은 클라이언트가 미리 준비해둔 컴포넌트와 디자인 시스템으로 렌더링합니다.

즉 **Agent는 UI를 선택하고 데이터를 연결하고, Client는 안전하고 일관된 방식으로 화면을 그립니다.**

---

## Slide 10 - 방향성 고민

### 화면 문구

- **Agent에게 UI를 어디까지 맡길 것인가?**
- 너무 자유로우면 불안정합니다
- 너무 고정하면 유연하지 않습니다
- 그래서 선택한 방식: **검증된 UI + Agent의 선택**

### 스크립트

이번 POC에서 가장 많이 고민한 부분은 이것이었습니다.

**Agent에게 UI를 어디까지 맡길 것인가?**

Agent가 모든 화면을 자유롭게 만들게 하면 유연성은 높아집니다. 하지만 결과가 불안정해질 수 있습니다. 디자인도 흔들릴 수 있고, 서비스에서 보장해야 하는 품질을 유지하기 어렵습니다.

반대로 모든 UI를 고정해두면 안정적입니다. 하지만 사용자의 다양한 요청이나 데이터 형태에 유연하게 대응하기 어렵습니다.

그래서 이번 POC에서는 중간 지점을 선택했습니다.

**의미 있는 UI의 외형과 컴포넌트는 미리 만들어두고, Agent는 사용자의 요청과 API 데이터 형식에 따라 가장 적절한 UI를 선택하도록 했습니다.**

이게 이번 POC의 핵심 방향입니다.

---

## Slide 11 - A2UI 동작 방식

### 화면 문구

- Admin에 UI 스펙 등록
- User 요청 입력
- Agent가 의도와 데이터 구조 분석
- 적절한 UI 선택
- Client가 렌더링

### 스크립트

동작 방식은 크게 다섯 단계로 볼 수 있습니다.

첫 번째, Admin에서 사용할 수 있는 UI를 등록합니다. 예를 들어 카드형 UI, 목록형 UI, 테이블형 UI, 상세 정보 UI 같은 것들이 있을 수 있습니다.

두 번째, 각 UI가 어떤 데이터 형식을 받을 수 있는지 스펙을 함께 등록합니다. 예를 들어 이 UI는 제목, 설명, 상태값, 금액, 날짜 데이터가 필요하다는 식입니다.

세 번째, 사용자가 Chatbot에 요청을 입력하면 Agent가 요청 의도와 API 응답 데이터의 구조를 분석합니다.

네 번째, Agent가 등록된 UI 스펙을 참고해서 가장 적합한 UI를 선택합니다.

다섯 번째, Client는 선택된 UI와 데이터를 받아 실제 화면으로 렌더링합니다.

여기서 다시 한 번 중요한 점을 말씀드리면, Agent가 화면을 완전히 새로 만드는 것이 아닙니다.

**준비된 UI 중에서 상황에 맞는 UI를 선택하고, 데이터를 연결하는 방식**입니다.

---

## Slide 12 - POC 화면 1: 목록 요청 → 테이블

### 화면 문구

- **목록 요청 → 테이블**
- “지난주 production에서 실패한 배포 목록 보여줘”
- `table.paginated`

### 스크립트

이제 실제 POC 화면을 보면서 설명드리겠습니다.

첫 번째는 사용자가 **목록**을 요청한 경우입니다.

사용자가 “지난주 production에서 실패한 배포 목록 보여줘”라고 입력하면, Agent는 이 요청을 데이터 조회 요청으로 판단합니다.

그리고 응답 데이터가 여러 개의 배포 row로 구성되어 있고, 서비스, 환경, 버전, 상태, 실패 단계처럼 서로 비교해야 하는 필드가 많다는 것을 확인합니다.

그래서 이 경우에는 카드보다 **테이블**이 적합하다고 판단합니다.

화면을 보시면 오른쪽 Chatbot 안에 사용자 말풍선이 있고, 그 아래 Assistant가 “총 28건이고 우선 표로 보여드리겠다”고 답변합니다. 그리고 바로 아래에 `Deployment failures` 테이블 surface가 렌더링됩니다.

여기서 핵심은 Agent가 화면 코드를 새로 만든 것이 아니라, **등록된 UI 중에서 table.paginated를 선택하고 데이터를 연결했다는 점**입니다.

---

## Slide 13 - POC 화면 2: 일부 요청 → 카드 리스트

### 화면 문구

- **일부 요청 → 카드 리스트**
- “실패한 배포 5건 카드로 보여줘”
- `card.simpleList`

### 스크립트

두 번째는 같은 데이터지만 사용자의 요청 방식이 조금 다른 경우입니다.

이번에는 사용자가 “실패한 배포 5건 카드로 보여줘”라고 요청합니다.

데이터 도메인은 여전히 배포 실패 목록입니다. 하지만 사용자는 전체 목록을 비교하겠다는 것보다, 일부 항목을 빠르게 훑어보고 싶다는 의도를 표현하고 있습니다.

그래서 Agent는 전체 테이블보다 **카드 리스트**가 더 적합하다고 판단합니다.

화면을 보면 Chatbot 안에 5건만 카드뷰로 보여준다는 Assistant 답변이 나오고, 아래에는 각 배포 건이 카드 단위로 렌더링됩니다.

이 장면에서 보여주고 싶은 포인트는, A2UI가 단순히 데이터 타입 하나에 UI 하나를 고정 매핑하는 방식이 아니라는 점입니다.

**같은 API 데이터라도 사용자의 요청 의도에 따라 표현 방식이 달라질 수 있습니다.**

---

## Slide 14 - POC 화면 3: 상세 요청 → 단일 상세 카드

### 화면 문구

- **상세 요청 → 단일 상세 카드**
- “상세 한 개만 보여줘”
- `card.profile`

### 스크립트

세 번째는 한 건을 자세히 보고 싶은 경우입니다.

사용자가 “실패한 배포 상세 한 개만 보여줘”라고 요청하면, Agent는 여러 row를 비교하는 것보다 첫 번째 row의 상세 정보를 보여주는 것이 더 적합하다고 판단합니다.

그래서 이번에는 테이블도 아니고 카드 리스트도 아닌, **단일 상세 카드**를 선택합니다.

화면을 보면 `Selected row` 영역에 deployment id, service, version, failure stage, failure reason, incident id 같은 상세 정보가 정리되어 있습니다.

이런 정보는 테이블 한 줄 안에 다 넣으면 읽기 어렵습니다. 반대로 상세 카드로 보여주면 운영자가 “무슨 배포가 왜 실패했는지”를 바로 파악할 수 있습니다.

여기까지 세 화면을 보면 이번 POC의 핵심이 정리됩니다.

**목록이면 테이블, 일부를 훑으면 카드 리스트, 한 건을 깊게 보면 상세 카드.**

즉 A2UI는 AI가 화면을 마음대로 그리는 것이 아니라, **사용자 요청과 데이터 형태를 보고 준비된 UI 중 적절한 것을 선택해 채팅 안에 렌더링하는 방식**입니다.

---

## Slide 15 - 마무리

### 화면 문구

- **Agent는 작업을 진행합니다**
- **A2UI는 결과를 조작 가능한 화면으로 바꿉니다**
- **이번 POC는 Chatbot의 확장 가능성을 확인했습니다**

### 스크립트

마무리하겠습니다.

오늘 발표에서 말씀드린 내용을 세 가지로 정리할 수 있습니다.

첫 번째, Agent는 단순한 LLM이 아니라 도구, 데이터, 상태, 실행 규칙을 연결해서 실제 작업을 수행하는 구조입니다.

두 번째, A2UI는 Agent가 텍스트만 답하는 한계를 넘어, 사용자에게 적합한 UI를 제공할 수 있게 하는 접근 방식입니다.

세 번째, 이번 POC에서는 Agent가 직접 화면을 자유롭게 생성하는 방식이 아니라, 미리 정의된 UI와 스펙을 바탕으로 적절한 UI를 선택하는 방식으로 구현했습니다.

이번 POC를 통해 확인한 기여는 하나입니다.

**AI Chatbot을 단순 답변 도구에서, 업무 맥락에 맞는 화면을 제공하는 Agent로 확장할 수 있다는 가능성을 확인했습니다.**

이제 실제 서비스에 적용하려면 UI 스펙 관리, Agent 선택 정확도, 데이터 매핑 안정성, 권한과 감사 로그 같은 부분을 더 고도화해야 합니다.

하지만 방향성은 확인했습니다.

**Chatbot은 답변을 만들고, Agent는 일을 진행하고, A2UI는 그 결과를 화면으로 보여줍니다.**

이상으로 발표를 마치겠습니다. 질문 받겠습니다.

---

## QA 준비 메모

### Q. Agent가 UI를 직접 만드는 것과 무엇이 다른가요?

Agent가 HTML이나 JavaScript를 직접 만들어 실행하는 방식이 아닙니다. 이번 POC에서는 미리 검증된 UI와 스펙을 준비해두고, Agent는 요청과 데이터 구조에 맞는 UI를 선택하는 역할을 합니다. 그래서 디자인 일관성과 보안 경계를 유지할 수 있습니다.

### Q. 왜 그냥 프론트엔드에서 조건문으로 화면을 고르면 안 되나요?

정해진 업무 흐름만 있다면 프론트엔드 조건문으로 충분할 수 있습니다. 하지만 사용자의 요청이 자연어이고, API 응답이나 데이터 형태가 다양해지면 Agent가 요청 의도와 데이터 구조를 함께 보고 UI를 선택하는 방식이 더 유연합니다.

### Q. 이 방식에서 가장 중요한 품질 기준은 무엇인가요?

Agent가 어떤 UI를 선택했는지보다 더 중요한 것은, 선택된 UI가 받을 수 있는 데이터 스펙과 실제 payload가 맞는지 검증하는 것입니다. 즉 UI 선택 정확도, 데이터 매핑 안정성, fallback 처리가 핵심입니다.

### Q. A2UI가 있으면 기존 화면 개발이 줄어드나요?

기존 화면 개발이 사라지는 것은 아닙니다. 오히려 안정적인 컴포넌트와 UI 스펙을 잘 만들어두는 일이 더 중요해집니다. A2UI는 프론트엔드를 대체한다기보다, Agent가 기존 UI 자산을 상황에 맞게 활용할 수 있게 만드는 방식입니다.

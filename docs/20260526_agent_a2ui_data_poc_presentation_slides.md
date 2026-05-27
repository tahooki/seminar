# Agent와 A2UI - 발표 슬라이드 구성안

> 확인일: 2026-05-26
> 기준 흐름: `/Users/tahooki/Documents/git/a2ui-poc-rt-new-3`의 `feat: add data A2UI chatbot rendering` 작업
> 톤: 기존 "꼬마 로봇 가이드 + 크레파스 스케치 인포그래픽"을 유지하되, A2UI POC 구간은 실제 어두운 운영 콘솔 캡처를 따뜻한 종이/주석 레이어 안에 흡수한다.
> 목적: Agent 기초 개념에서 출발해, 오늘 구현한 Data A2UI Chatbot POC가 어떤 문제를 어떻게 풀었는지 설명하는 발표용 이미지 슬라이드 초안.

---

## 기존 슬라이드 재사용 가이드

이미 생성된 슬라이드 이미지에 슬라이드 번호가 크게 박혀 있거나 제목이 이번 발표 흐름과 다르면 새로 생성한다.
번호가 없고 개념 그림만 독립적으로 쓸 수 있으면 그대로 가져와도 된다.

| 이번 발표 구간 | 재사용 후보 | 판단 |
| --- | --- | --- |
| Agent란? | `docs/20260511171633_agents_presentation_slides.md` 슬라이드 1, 2, 7, 9 | 개념 그림은 재사용 가능. 제목/번호가 박힌 이미지는 신규 생성 권장 |
| LLM이란? | `docs/20260511171633_agents_presentation_slides.md` 슬라이드 2, 3 | 코드 설명이 필요 없으면 슬라이드 2 계열 재사용 |
| MCP란? | `docs/20260512234955_mcp_presentation_slides.md` 슬라이드 1, 2, 9, 10 | "도구 연결 표준" 그림은 재사용 가능 |
| Skill이란? | `docs/20260512234955_skill_presentation_slides.md` 슬라이드 1, 2, 8, 10 | `Skill vs MCP` 비교 그림은 이번 흐름에 잘 맞음 |
| Guardrails | `docs/20260512234955_guardrails_presentation_slides.md` 슬라이드 5, 7, 8 | A2UI 안전성 설명에 일부 재사용 가능 |
| A2UI POC | 신규 작성 | 오늘 Data A2UI 구현 흐름이 기존 deploy launchpad 중심 덱과 달라서 새로 만드는 편이 좋음 |

---

## 공통 이미지 프롬프트

이미지 생성 시 아래 공통 프롬프트를 각 슬라이드별 프롬프트 앞에 붙인다.
A2UI POC 캡처를 쓰는 슬라이드는 실제 화면을 직접 생성하지 말고, 캡처를 배치한 뒤 주변 브릿지 일러스트만 생성하거나 디자인 툴에서 얹는다.

```txt
Style: warm hand-drawn crayon sketch infographic on cream paper. Whimsical
storybook feel with light notebook annotation touches. 16:9 landscape.

Use a cute AI robot mascot as the guide: white body with mint accents, rounded
head with one small antenna, square torso, short arms and legs, big friendly
eyes, holding a crayon pointer. Keep the robot consistent across slides.

Use pastel accents: mint, coral, lavender, lemon yellow, soft sky blue. Use
hand-drawn arrows, rounded speech bubbles, sticker-like icons, simple cards,
and light crayon texture.

Each slide should have one clear headline, 2-4 short labels, and one main
visual idea. Not text-heavy, not empty.

TEXT: Korean Hangul for labels and dialogue, clear crayon handwriting. Keep
proper nouns and abbreviations in English: LLM, Agent, MCP, Skill, A2UI, API,
JSON, Registry, Renderer, Surface, Payload, Action.
```

### A2UI POC 캡처 슬라이드 톤 보정

```txt
For slides containing a real dark product UI screenshot, place the screenshot
inside a paper frame or laptop frame. Surround it with warm crayon annotations,
small labels, and the robot presenter pointing at the important area. Do not
redraw the product UI as a fake screenshot. Keep the screenshot readable.
```

### 실제 POC 캡처 후보

- 전체 화면: `/Users/tahooki/Documents/git/a2ui-poc-rt-new-3/docs/fixtures/chatbot-data-a2ui-working-prompt-and-surface.png`
- 상단 포함 전체 화면: `/Users/tahooki/Documents/git/a2ui-poc-rt-new-3/docs/fixtures/chatbot-data-a2ui-working-top.png`
- 표 전체: `/Users/tahooki/Documents/git/a2ui-poc-rt-new-3/docs/fixtures/chatbot-data-a2ui-all-table-view.png`
- 5건 카드뷰: `/Users/tahooki/Documents/git/a2ui-poc-rt-new-3/docs/fixtures/chatbot-data-a2ui-five-card-view.png`
- 1건 상세뷰: `/Users/tahooki/Documents/git/a2ui-poc-rt-new-3/docs/fixtures/chatbot-data-a2ui-one-profile-view.png`

---

# 슬라이드 구성

---

## 슬라이드 0 - 표지

### 화면 문구

- 제목: **Agent와 A2UI**
- 부제: **말하는 AI에서 조작 가능한 화면을 만드는 AI로**
- 작은 문구: **LLM · Agent · MCP · Skill · A2UI**

### 장면 구성

꼬마 로봇이 크림색 발표 보드 앞에 서 있고, 왼쪽에는 말풍선만 있는 Chatbot, 오른쪽에는 실제 운영 콘솔 화면이 작은 어두운 패널로 열린다.
중앙에는 "텍스트 답변 → 조작 가능한 UI" 화살표가 크게 놓인다.

### 발표 메모

이번 발표의 결론은 "AI가 마음대로 화면 코드를 만든다"가 아니다.
Agent가 의도를 파악하고, 허용된 API와 컴포넌트 안에서 안전하게 UI를 요청하는 구조를 설명한다.

### 이미지 프롬프트

```txt
Cover slide. Center: cute white-and-mint AI robot mascot standing beside a big
cream presentation board. Left side of the board: simple chatbot speech bubbles
labeled "Text answer". Right side: a dark but simplified product console panel
labeled "A2UI Surface".

Large Korean title: "Agent와 A2UI".
Subtitle: "말하는 AI에서 조작 가능한 화면을 만드는 AI로".
Bottom small labels: "LLM · Agent · MCP · Skill · A2UI".

Draw a warm crayon arrow from "텍스트 답변" to "조작 가능한 UI". Friendly but
technical opening mood.
```

---

## 슬라이드 1 - 오늘의 흐름

### 화면 문구

- **Agent를 먼저 잡고**
- **A2UI로 실제 화면까지 연결합니다**

### 장면 구성

한 줄 로드맵:
`Agent란? → Agent 기초 → A2UI 배경 → A2UI 동작 방식 → POC 화면 → QA`

### 발표 메모

용어를 하나씩 외우는 발표가 아니라, "사용자의 말이 어떻게 안전한 운영 UI가 되는가"를 따라가는 발표라고 안내한다.

### 이미지 프롬프트

```txt
Roadmap slide on cream paper. A winding hand-drawn path with six milestone
cards:
"Agent란?", "Agent 기초", "A2UI 배경", "동작 방식", "POC 화면", "QA".

The robot walks along the path with a small crayon pointer. Add tiny icons:
speech bubble, gear, cable, manual, UI panel, question mark. Keep labels large.
```

---

## 슬라이드 2 - 핵심 질문

### 화면 문구

- **Chatbot은 답을 줍니다**
- **Agent는 일을 진행합니다**
- **A2UI는 그 결과를 화면으로 보여줍니다**

### 장면 구성

왼쪽에는 말풍선만 쌓이는 챗봇, 가운데에는 도구를 고르는 Agent, 오른쪽에는 표와 버튼이 있는 A2UI surface.

### 발표 메모

이 발표의 큰 전환점은 "말을 잘하는 AI"에서 "업무 흐름을 안전하게 진행하는 AI"로 넘어가는 것이다.
오늘 POC는 이 전환을 데이터 조회형 운영 콘솔에서 검증했다.

### 이미지 프롬프트

```txt
Three-panel comparison.
Left: chatbot bubble stack labeled "답변".
Center: robot choosing tools from a small toolbox labeled "Agent 판단".
Right: structured UI panel with table, chart, and button labeled "A2UI Surface".

Add one large hand-drawn arrow across all panels: "질문 → 판단 → 화면".
Warm paper background, soft pastel accents, technical but friendly.
```

---

## 슬라이드 3 - Agent란?

### 화면 문구

- **Agent = 목표를 위해 반복 실행하는 시스템**
- **생각하고, 도구를 쓰고, 결과를 다시 봅니다**

### 장면 구성

Agent 루프:
`Goal → Plan → Tool → Observe → Decide → Answer / Act`

### 기존 슬라이드 활용

`docs/20260511171633_agents_presentation_slides.md`의 슬라이드 7 또는 8을 재사용 가능.
다만 이번 발표 제목과 흐름에 맞춰 새로 생성하면 더 자연스럽다.

### 발표 메모

LLM이 문장을 생성하는 능력이라면 Agent는 그 LLM을 중심으로 도구 호출, 상태 관리, 반복 판단을 묶은 실행 구조다.

### 이미지 프롬프트

```txt
Agent loop diagram. Center: robot labeled "Agent". Around it in a circular
crayon loop: "Goal", "Plan", "Tool", "Observe", "Decide".

Add one Korean sentence at bottom: "Agent는 답하기 전에 필요한 일을 진행한다".
Small tool icons: API plug, database, document, checklist. Warm cream paper.
```

---

## 슬라이드 4 - Agent의 구성

### 화면 문구

- **Model**
- **Tools**
- **State**
- **Runtime**
- **Guardrails**

### 장면 구성

로봇 내부를 투명하게 보여주는 분해도.
머리에는 Model, 양손에는 Tools, 가슴에는 State, 발밑에는 Runtime, 주변에는 Guardrails 안전 레일.

### 발표 메모

Agent를 하나의 모델로 보면 헷갈린다.
실제로는 모델, 도구, 상태, 실행 런타임, 안전 정책이 함께 작동하는 시스템이다.

### 이미지 프롬프트

```txt
Exploded-view diagram of the robot as an Agent system. Robot head labeled
"Model", hands holding small tools labeled "Tools", chest notebook labeled
"State", floor platform labeled "Runtime", soft safety rail around it labeled
"Guardrails".

Use only these five labels plus a small title: "Agent의 구성". Clear and
readable, warm crayon style.
```

---

## 슬라이드 5 - LLM이란?

### 화면 문구

- **LLM은 다음 말을 예측해 답을 만듭니다**
- **하지만 혼자서는 실제 시스템을 확인하지 못합니다**

### 장면 구성

종이에 글을 이어 쓰는 모델 구름.
옆에는 잠긴 DB, 배포 로그, API가 있고, LLM 혼자서는 직접 닿지 못하는 모습.

### 기존 슬라이드 활용

`docs/20260511171633_agents_presentation_slides.md`의 슬라이드 2 또는 3을 요약형으로 재사용 가능.

### 발표 메모

LLM은 대화와 추론의 중심이지만, 실제 운영 데이터 조회나 버튼 실행은 별도 도구와 권한이 필요하다.

### 이미지 프롬프트

```txt
Concept slide. A soft cloud labeled "LLM" writes a sentence on paper:
"다음 말을 예측".

Nearby but separated by a dotted boundary: locked database, API plug, deploy
log document. Add Korean label: "실제 시스템 확인은 Tool이 필요".

The robot points from LLM to the locked tools, explaining the limitation.
```

---

## 슬라이드 6 - MCP란?

### 화면 문구

- **MCP는 Agent와 Tool을 연결하는 표준 통로입니다**
- **도구 이름, 설명, 입력 스키마가 핵심입니다**

### 장면 구성

Agent 로봇과 여러 도구 사이에 MCP 허브가 있고, 도구 카드에는 `name`, `description`, `inputSchema`가 붙어 있다.

### 기존 슬라이드 활용

`docs/20260512234955_mcp_presentation_slides.md`의 슬라이드 1, 2, 9를 재사용 가능.

### 발표 메모

이번 POC에서 Admin MCP는 template catalog, resolver, action 실행을 Agent가 호출할 수 있는 도구로 노출한다.
다만 오늘 새 Data A2UI 흐름은 API Registry를 서버 내부 모듈로 먼저 붙이고, 최종 결과를 기존 SurfaceEnvelope로 합류시켰다.

### 이미지 프롬프트

```txt
Hub-and-spoke diagram. Left: robot labeled "Agent". Center: bridge/hub labeled
"MCP". Right: tool cards labeled "API", "DB", "Admin", "Action".

Each tool card has tiny fields: "name", "description", "inputSchema".
Add Korean label: "도구를 발견하고 호출하는 표준 통로".
```

---

## 슬라이드 7 - Skill이란?

### 화면 문구

- **Skill은 Agent에게 작업법을 건네는 매뉴얼입니다**
- **절차, 기준, 예시, 템플릿을 함께 담습니다**

### 장면 구성

로봇이 `SKILL.md` 책자를 열고, 안에는 "먼저 읽을 문서", "재사용할 컴포넌트", "검증 방식", "피해야 할 명령" 카드가 있다.

### 기존 슬라이드 활용

`docs/20260512234955_skill_presentation_slides.md`의 슬라이드 1, 2, 8을 재사용 가능.

### 발표 메모

MCP가 도구를 연결한다면 Skill은 그 도구와 프로젝트를 어떻게 다룰지 알려준다.
이 발표자료도 `seminar-presentation-builder` Skill의 톤, 컴포넌트, 검증 규칙을 따라 만든다.

### 이미지 프롬프트

```txt
Robot opens a handbook labeled "SKILL.md". Inside the handbook are four sticky
cards: "절차", "기준", "예시", "템플릿".

In the background, small icons for component, document, test checklist, and
warning sign. Korean title: "Skill = 작업법 패키지".
```

---

## 슬라이드 8 - 네 개념을 한 흐름으로 보면

### 화면 문구

- **LLM이 판단의 언어를 만들고**
- **Agent가 실행 흐름을 잡고**
- **MCP와 Skill이 도구와 작업법을 주고**
- **A2UI가 결과를 화면으로 렌더링합니다**

### 장면 구성

`LLM → Agent → MCP/Skill → A2UI → User` 흐름도.
MCP는 도구 연결, Skill은 작업법, A2UI는 UI 계약으로 표현한다.

### 발표 메모

이 슬라이드는 Agent 기초에서 A2UI POC로 넘어가는 다리다.
여기서부터 "그래서 챗봇이 실제 운영 화면을 어떻게 띄우나"로 진입한다.

### 이미지 프롬프트

```txt
Clean left-to-right system flow on a large cream paper sheet:
"LLM" -> "Agent" -> split to "MCP" and "Skill" -> merge to "A2UI" -> "User".

Under MCP write "도구 연결", under Skill write "작업법", under A2UI write
"UI 계약". The robot stands at the merge point and points to A2UI.
```

---

## 슬라이드 9 - AI Chatbot A2UI POC 배경

### 화면 문구

- **운영자는 답변만 필요한 게 아닙니다**
- **데이터를 보고, 비교하고, 다음 행동을 해야 합니다**

### 장면 구성

어두운 DevOps Console 캡처를 종이 위에 작게 배치하고, 주변에 "지난주 실패 배포", "오류율 추이", "다음 페이지" 같은 요청 카드가 붙어 있다.

### 발표 메모

기존 POC는 `payments-api 배포해줘`처럼 특정 업무 시나리오에 맞는 surface를 띄우는 구조였다.
오늘 작업은 범용 데이터 조회형 흐름을 추가했다.
사용자가 "지난주 production에서 실패한 배포 목록 보여줘"라고 말하면, 등록된 API 중 맞는 것을 고르고, 응답 데이터 모양에 맞는 UI를 선택한다.

### 이미지 프롬프트

```txt
Warm paper scene with a dark DevOps console screenshot represented as a framed
panel. Around it, three user request sticky notes:
"지난주 실패 배포", "오류율 추이", "5건만 카드로".

The robot looks at the notes and points toward a structured UI panel. Add title:
"답변만으로는 부족한 운영 질문".
```

---

## 슬라이드 10 - 이번 POC의 한 줄 정의

### 화면 문구

- **사용자의 자연어 요청을**
- **등록된 API 호출로 바꾸고**
- **응답 데이터에 맞는 A2UI 템플릿으로 보여줍니다**

### 장면 구성

세 단계 카드:
`자연어 요청 → API Registry → Data Profile → A2UI Surface`

### 발표 메모

오늘 구현한 핵심 기능은 Data A2UI Chatbot이다.
AI가 임의 React 코드를 만들지 않고, 등록된 API와 승인된 UI Part 안에서만 결과를 만든다.
현재 POC 구현은 LLM 자유판단으로 API와 UI를 고르는 단계까지 열어둔 것이 아니라, keyword scoring과 rule-based selector로 안전한 흐름을 먼저 검증한 형태다.

### 참고 코드

- `/Users/tahooki/Documents/git/a2ui-poc-rt-new-3/src/devops-chat/data-a2ui/data-a2ui-orchestrator.ts`
- `/Users/tahooki/Documents/git/a2ui-poc-rt-new-3/src/app/api/chat/route.ts`

### 이미지 프롬프트

```txt
Four connected cards:
1. "자연어 요청"
2. "API Registry"
3. "Data Profile"
4. "A2UI Surface"

Draw a robot moving a small request note through the cards. Add tiny labels:
"선택", "검증", "렌더링". Warm crayon style, clear Korean text.
```

---

## 슬라이드 11 - A2UI란?

### 화면 문구

- **A2UI는 UI 코드가 아니라 UI 설계도입니다**
- **Agent는 요청하고, Client는 검증된 컴포넌트로 렌더링합니다**

### 장면 구성

왼쪽에는 위험 표시가 붙은 `HTML/JS code` 상자.
오른쪽에는 안전한 `JSON surface`가 `Renderer`를 지나 `Trusted Parts`로 렌더링되는 모습.

### 발표 메모

A2UI의 핵심은 Agent에게 UI 구현권을 주는 것이 아니라 UI 요청권을 주는 것이다.
프론트엔드는 renderer, catalog, binding, action bridge를 통제한다.

### 이미지 프롬프트

```txt
Before/after comparison.
Left: messy box labeled "AI-generated HTML/JS" with warning sign.
Right: clean JSON blueprint labeled "A2UI Surface" flowing into "Renderer" and
"Trusted Parts".

Add Korean headline: "UI 코드가 아니라 UI 설계도". Robot points to the safe
right side.
```

---

## 슬라이드 12 - 방향성 고민

### 화면 문구

- **자유 생성 UI: 표현력은 높지만 위험합니다**
- **고정 템플릿: 안전하지만 답답합니다**
- **A2UI: 허용된 부품 안에서 동적으로 구성합니다**

### 장면 구성

세 갈래 선택지:
`Free HTML`, `Fixed Screen`, `A2UI Surface`
가운데 Agent가 고민하고, A2UI 길에는 catalog와 validation 게이트가 있다.

### 발표 메모

POC의 방향성은 자유 생성 화면을 허용하는 것이 아니다.
데이터 요청은 다양하게 받아들이되, 렌더링은 catalog에 등록된 Part와 surfaceConfig로 제한한다.

### 이미지 프롬프트

```txt
Three-way decision map.
Path 1: "Free HTML" with red warning marks.
Path 2: "Fixed Screen" with a rigid gray box.
Path 3: "A2UI" with catalog cards, validation gate, and flexible UI panel.

The robot stands at the fork holding a sign: "안전하게 동적으로". Warm crayon
style, not corporate.
```

---

## 슬라이드 13 - Data A2UI 전체 동작 방식

### 화면 문구

- **API를 고르고**
- **파라미터를 채우고**
- **데이터 모양을 읽고**
- **화면 템플릿을 고릅니다**

### 슬라이드에 얹을 흐름

```text
User message
-> API registry lookup
-> API selection
-> params extraction
-> params validation
-> sample/count API execution
-> data profile generation
-> render plan selection
-> dynamic surfaceConfig build
-> SurfaceEnvelope
-> SurfaceRenderer
```

### 발표 메모

기존 Domain A2UI는 `intent → template resolve → SurfaceEnvelope`에 가까웠다.
오늘 Data A2UI는 먼저 API Registry와 Data Profile 단계를 추가하고, 마지막에 같은 `SurfaceEnvelope`로 합류한다.
현재 코드는 API 선택과 render plan 선택을 rule-based로 구현했고, 나중에 이 selector 자리에 LLM 판단을 제한적으로 넣을 수 있는 구조다.

### 이미지 프롬프트

```txt
Long but readable pipeline diagram on cream paper. Use eight compact blocks:
"User", "API 선택", "Param 추출", "API 실행", "Data Profile", "Render Plan",
"SurfaceEnvelope", "Renderer".

The robot walks along the pipeline and stamps "검증" between steps. Use small
icons for API, checklist, chart, table, renderer.
```

---

## 슬라이드 14 - 코드로 보면: Orchestrator

### 화면 문구

- **Data A2UI는 별도 모듈로 실행됩니다**
- **결과는 기존 Chat SSE 흐름으로 합류합니다**

### 슬라이드에 얹을 코드

```ts
const selection = selectDataA2UIApi(query);
const extracted = extractDataA2UIParams(query, selection.api);
const validation = validateDataA2UIParams(selection.api, extracted.params);

const execution = await executeDataA2UIApi(selection.api, validation.params);
const profile = buildDataProfile(execution.response, execution.countResponse);
const renderPlan = selectDataA2UIRenderPlan(query, selection.api, profile);

return buildDataA2UISurface({
  api: selection.api,
  response: execution.response,
  profile,
  renderPlan,
  params: validation.params,
});
```

### 발표 메모

이 코드는 `/src/devops-chat/data-a2ui/data-a2ui-orchestrator.ts`의 요약이다.
실제 route에서는 먼저 명시 template resolve를 시도하고, 그 다음 Data A2UI를 시도한 뒤, 없으면 기존 Python/Node orchestrator로 내려간다.

### 이미지 프롬프트

```txt
Code explanation slide. Large cream code card titled "Data A2UI Orchestrator".
Leave room for TypeScript code overlay.

Around the card, small crayon labels: "select API", "extract params",
"build profile", "choose UI", "surface". Robot points at the last label.
```

---

## 슬라이드 15 - API Registry

### 화면 문구

- **판단 단계에는 공개 metadata만 사용합니다**
- **실행 URL과 인증 정보는 서버가 통제합니다**

### 장면 구성

API 등록 카드가 두 겹으로 나뉜다.
위쪽 공개 영역: `title`, `description`, `exampleQueries`, `paramsSchema`, `capabilities`
아래쪽 잠긴 영역: `method`, `urlTemplate`, `authProfileId`

### 발표 메모

오늘 fixture에는 DevOps 샘플 API 3종이 있다.
`devops.deployments.search`, `devops.releaseHealth.daily`, `platform.apiUsage.hourly`.
현재 POC에서는 서버 selector가 이 중 하나를 선택하고, 향후 Agent/LLM 판단을 붙이더라도 실제 호출과 secret 처리는 서버 코드가 책임진다.

### 참고 파일

- `/Users/tahooki/Documents/git/a2ui-poc-rt-new-3/docs/fixtures/api-registry-data-a2ui-sample-apis.json`
- `/Users/tahooki/Documents/git/a2ui-poc-rt-new-3/src/devops-chat/data-a2ui/api-selector.ts`

### 이미지 프롬프트

```txt
Two-layer API registration card.
Top open layer labeled "AI-visible metadata": title, description, examples,
paramsSchema, capabilities.
Bottom locked layer labeled "Server-only config": method, urlTemplate,
authProfileId.

Robot holds a key but points to the locked layer: "secret은 서버만". Warm crayon
technical diagram.
```

---

## 슬라이드 16 - Param 추출과 Clarification

### 화면 문구

- **요청에서 기간, 환경, 상태, 서비스명을 뽑습니다**
- **부족하면 바로 화면을 만들지 않고 다시 묻습니다**

### 장면 구성

사용자 말풍선:
`배포 안정성 지표 보여줘`
아래에 비어 있는 슬롯 `기간 ?`, `환경 ?`.
오른쪽에는 Agent가 "어느 기간과 환경을 볼까요?"라고 묻는다.

### 발표 메모

`releaseHealth` 요청은 기간과 환경이 부족하면 clarification으로 돌아간다.
반대로 "지난 2주 production"처럼 짧은 후속 답변이 오면 최근 assistant 질문 맥락을 붙여서 query를 복원한다.

### 참고 파일

- `/Users/tahooki/Documents/git/a2ui-poc-rt-new-3/src/devops-chat/data-a2ui/param-extractor.ts`
- `/Users/tahooki/Documents/git/a2ui-poc-rt-new-3/src/devops-chat/data-a2ui/data-a2ui-orchestrator.ts`

### 이미지 프롬프트

```txt
Slot-filling scene. User speech bubble: "배포 안정성 지표 보여줘".
Below it, four slot cards: "기간 ?", "환경 ?", "서비스", "지표".

Robot responds with a small speech bubble: "어느 기간과 환경을 볼까요?"
Add a gentle pause sign before the UI panel, meaning no premature rendering.
```

---

## 슬라이드 17 - Data Profile

### 화면 문구

- **응답 데이터를 그대로 넘기지 않고**
- **shape, fields, roles, rowCount로 요약합니다**

### 장면 구성

API 응답 더미 데이터가 분석 기계를 지나 `Data Profile` 카드로 바뀐다.
카드 안에는 `shape: array<object>`, `rowCount: 28`, `time field`, `metric`, `category`가 적힌다.

### 발표 메모

데이터 프로파일은 UI 선택의 근거가 된다.
행이 많으면 table.paginated, 시간이 있고 metric이 있으면 chart.line, 소량 row면 card.simpleList나 card.profile로 갈 수 있다.

### 참고 파일

- `/Users/tahooki/Documents/git/a2ui-poc-rt-new-3/src/devops-chat/data-a2ui/data-profiler.ts`

### 이미지 프롬프트

```txt
Data profiling diagram. Left: messy API response papers with rows and numbers.
Center: small friendly scanner machine labeled "Profiler".
Right: neat card labeled "Data Profile" with fields:
"shape", "rowCount", "time", "metric", "category".

Robot places a check mark on the profile card. Warm crayon style.
```

---

## 슬라이드 18 - Render Plan 선택

### 화면 문구

- **많은 row → paginated table**
- **한 건 → profile card**
- **소량 row → card list**
- **시간 + metric → line chart**

### 장면 구성

Data Profile 카드에서 네 개의 UI 템플릿 카드로 갈라지는 선택 나무.
각 템플릿은 작게 시각화된다.

### 발표 메모

오늘 구현된 선택 규칙의 실제 예시는 다음과 같다.
`지난주 production에서 실패한 배포 목록`은 `table.paginated`.
`한 개만 상세`는 `card.profile`.
`5건만`은 `card.simpleList`.
`오류율 추이`나 `배포 실패율 추이`는 `chart.line`.

### 참고 파일

- `/Users/tahooki/Documents/git/a2ui-poc-rt-new-3/src/devops-chat/data-a2ui/render-plan-selector.ts`

### 이미지 프롬프트

```txt
Decision tree from "Data Profile" to four UI cards:
"table.paginated", "card.profile", "card.simpleList", "chart.line".

Each card has a tiny sketch: table rows, profile fields, small cards, line
chart. Add Korean title: "데이터 모양에 맞춰 UI 선택".
```

---

## 슬라이드 19 - SurfaceEnvelope로 합류

### 화면 문구

- **payload = 데이터**
- **surfaceConfig = 어떤 Part로 보여줄지**
- **actions = 사용자가 누를 수 있는 이벤트**
- **renderer = 검증된 컴포넌트만 렌더링**

### 장면 구성

`payload`, `surfaceConfig`, `actions` 세 장의 종이가 하나의 `SurfaceEnvelope` 봉투에 들어가고, Renderer가 꺼내 `Trusted Parts`로 보여준다.

### 발표 메모

이 지점이 A2UI의 핵심이다.
Agent나 orchestrator는 "무엇을 보여줄지"를 SurfaceEnvelope로 말하고, 클라이언트는 등록된 Part만 렌더링한다.
오늘 추가된 Part는 `LineChartBlock`, `BarChartBlock`, `PaginatedDataTableBlock`, `RecordCardListBlock`이다.

### 참고 파일

- `/Users/tahooki/Documents/git/a2ui-poc-rt-new-3/src/devops-chat/data-a2ui/surface-builder.ts`
- `/Users/tahooki/Documents/git/a2ui-poc-rt-new-3/packages/a2ui-ui/src/dynamic/part-registry.ts`
- `/Users/tahooki/Documents/git/a2ui-poc-rt-new-3/packages/a2ui-ui/src/dynamic/DynamicA2UICardRenderer.tsx`

### 이미지 프롬프트

```txt
Envelope metaphor. Three papers labeled "payload", "surfaceConfig", "actions"
go into a large envelope labeled "SurfaceEnvelope".

The envelope flows into "Renderer", then into trusted part blocks:
"Table", "Card", "Chart", "Metric".

Robot stamps the renderer with "Trusted Parts Only".
```

---

## 슬라이드 20 - 실제 POC 화면: 실패 배포 목록

### 화면 문구

- **"지난주 production에서 실패한 배포 목록 보여줘"**
- **총 28건, 우선 10건을 표로 렌더링**

### 사용할 실제 캡처

`/Users/tahooki/Documents/git/a2ui-poc-rt-new-3/docs/fixtures/chatbot-data-a2ui-working-prompt-and-surface.png`

### 장면 구성

실제 캡처를 중앙 또는 오른쪽에 크게 넣는다.
캡처 바깥쪽에는 크레파스 주석 세 개를 얹는다.

- `API 선택: devops.deployments.search`
- `Render Plan: table.paginated`
- `Action: data.query.paginate`

### 발표 메모

이 화면은 가짜 UI가 아니라 실제 POC 캡처다.
오른쪽 Assistant에서 사용자 요청을 받아 Data A2UI surface가 뜬다.
텍스트 답변은 "총 28건"을 말하고, surface는 실제 row와 pagination action을 제공한다.

### 이미지/디자인 지시

```txt
Use the real screenshot as the main object. Put it inside a warm paper frame.
Add three crayon callout arrows pointing to the Assistant area:
"API 선택", "table.paginated", "다음 페이지 action".

Do not redraw the screenshot. Keep the dark UI readable. Add the robot presenter
on the left edge pointing at the A2UI surface.
```

---

## 슬라이드 21 - 같은 데이터, 다른 화면

### 화면 문구

- **요청이 바뀌면 같은 API도 다른 UI로 보여줍니다**
- **1건은 상세 카드, 5건은 카드 리스트, 전체는 표**

### 사용할 실제 캡처

- `/Users/tahooki/Documents/git/a2ui-poc-rt-new-3/docs/fixtures/chatbot-data-a2ui-one-profile-view.png`
- `/Users/tahooki/Documents/git/a2ui-poc-rt-new-3/docs/fixtures/chatbot-data-a2ui-five-card-view.png`
- `/Users/tahooki/Documents/git/a2ui-poc-rt-new-3/docs/fixtures/chatbot-data-a2ui-all-table-view.png`

### 장면 구성

세 개의 실제 캡처를 세로 카드처럼 배치한다.
각 카드 위에 `card.profile`, `card.simpleList`, `table.paginated` 라벨을 붙인다.

### 발표 메모

오늘 POC의 좋은 포인트는 "API 하나 = 화면 하나"가 아니라는 점이다.
사용자 의도와 데이터 프로파일, 요청 row 수에 따라 같은 데이터도 서로 다른 Part 조합으로 렌더링한다.

### 이미지/디자인 지시

```txt
Create a collage layout using the three real screenshots. Place them as three
vertical dark UI strips on cream paper.

Above each screenshot add a pastel label:
"1건 상세: card.profile", "5건 요약: card.simpleList", "전체 비교: table.paginated".

Add small crayon arrows from one shared API card to all three screenshots.
```

---

## 슬라이드 22 - Action까지 이어지는 A2UI

### 화면 문구

- **UI는 보여주기에서 끝나지 않습니다**
- **버튼 action은 다시 서버의 안전한 실행 경로로 돌아갑니다**

### 장면 구성

`A2UI Surface → Host App → /api/data-a2ui/action → action handler → 새 Surface` 루프.
`다음 페이지` 버튼을 예시로 든다.

### 발표 메모

`data.query.paginate` action은 클라이언트에서 직접 데이터를 마음대로 바꾸지 않는다.
Host가 `/api/data-a2ui/action`으로 surface와 actionId를 보내고, 서버가 등록된 API와 params validation을 다시 거쳐 새 surface를 만든다.

### 참고 파일

- `/Users/tahooki/Documents/git/a2ui-poc-rt-new-3/src/app/api/data-a2ui/action/route.ts`
- `/Users/tahooki/Documents/git/a2ui-poc-rt-new-3/src/devops-chat/data-a2ui/surface-action-handler.ts`
- `/Users/tahooki/Documents/git/a2ui-poc-rt-new-3/src/devops-chat/integrations/a2ui-surface-action-adapter.ts`

### 이미지 프롬프트

```txt
Action loop diagram with a "다음 페이지" button on an A2UI table.
Arrow: "Surface" -> "Host App" -> "Server Action API" -> "Validation" ->
"New Surface".

Robot holds a small refresh icon and says in Korean: "action도 검증 경로로".
Warm paper style with dark mini UI card.
```

---

## 슬라이드 23 - 구현 범위 요약

### 화면 문구

- **서버 모듈: data-a2ui pipeline**
- **UI Part: table/card/chart 확장**
- **Chat API: Data A2UI 우선 합류**
- **Action: pagination refresh**

### 장면 구성

작업된 코드 파일을 네 묶음으로 정리한 지도.

### 발표 메모

오늘 커밋의 변경 범위는 문서/fixture/테스트 포함 35개 파일이다.
발표에서는 파일 수보다 역할 분리를 강조한다.
기존 deploy/approval/rollback A2UI 흐름은 건드리지 않고, Data A2UI를 별도 모듈로 추가했다.

### 핵심 파일 묶음

```text
src/devops-chat/data-a2ui/
  api-selector.ts
  param-extractor.ts
  api-executor.ts
  data-profiler.ts
  render-plan-selector.ts
  surface-builder.ts
  surface-action-handler.ts

packages/a2ui-ui/src/parts/
  LineChartBlock.tsx
  BarChartBlock.tsx
  PaginatedDataTableBlock.tsx
  RecordCardListBlock.tsx

src/app/api/chat/route.ts
src/app/api/data-a2ui/action/route.ts
```

### 이미지 프롬프트

```txt
Codebase map slide. Four folder clusters drawn as paper folders:
"Data A2UI Pipeline", "UI Parts", "Chat Route", "Action Route".

Draw arrows from pipeline to SurfaceEnvelope to UI Parts. Robot places a small
label: "기존 흐름은 유지, 새 흐름은 합류".
```

---

## 슬라이드 24 - 마무리

### 화면 문구

- **Agent는 더 풍부한 응답을 만들고**
- **운영자는 같은 안전한 화면을 사용합니다**
- **A2UI는 그 사이의 계약입니다**

### 장면 구성

왼쪽에는 Agent 로봇, 오른쪽에는 운영자가 보는 안정적인 콘솔.
가운데에는 `A2UI Contract` 다리가 있고, 다리 아래에는 `Registry`, `Validation`, `Renderer`, `Actions` 기둥이 있다.

### 발표 메모

A2UI는 프론트엔드를 대체하는 기술이 아니다.
오히려 프론트엔드가 통제하는 컴포넌트와 보안 경계 안에서 Agent의 응답 표현력을 확장하는 방식이다.
오늘 Data A2UI POC는 그 방향을 데이터 조회형 챗봇으로 확인한 작업이다.

### 이미지 프롬프트

```txt
Closing concept slide. Left: robot labeled "Agent". Right: operator console
labeled "Trusted UI". Between them, a warm bridge labeled "A2UI Contract".

Bridge pillars labeled "Registry", "Validation", "Renderer", "Actions".
Korean closing sentence: "풍부한 응답, 같은 안전한 화면".
Calm conclusion mood, cream paper, pastel accents.
```

---

## 슬라이드 25 - QA

### 화면 문구

- **질문 받겠습니다**
- **Agent / MCP / Skill / A2UI / POC**

### 장면 구성

로봇이 칠판 앞에서 질문 카드를 받는다.
칠판에는 오늘 키워드 5개가 작은 카드로 붙어 있다.

### 예상 질문 메모

1. A2UI가 있으면 프론트엔드 개발이 줄어드나?
   → 줄어든다기보다 역할이 바뀐다. 컴포넌트와 renderer 품질은 여전히 프론트엔드가 책임진다.

2. AI가 API를 마음대로 호출할 위험은 없나?
   → 현재 POC는 서버 selector가 등록된 registry 안에서만 고른다. 향후 AI 판단을 붙여도 실행 config와 인증은 서버가 통제한다.

3. 왜 그냥 React 코드를 생성하지 않나?
   → 운영 UI에서는 표현력보다 보안, 일관성, action audit이 중요하다.

4. 오늘 POC가 완성형인가?
   → fixture 기반 MVP에 가깝다. 다음 단계는 Admin API 등록 UX, 실제 API auth profile, render plan 고도화다.

### 이미지 프롬프트

```txt
QA closing slide. Robot stands beside a chalkboard with five sticky keyword
cards: "Agent", "MCP", "Skill", "A2UI", "POC".

Audience question cards float gently toward the board. Large Korean text:
"질문 받겠습니다". Warm calm crayon style.
```

---

# 발표 중 강조할 문장

- **Agent는 똑똑한 챗봇이 아니라, 목표를 위해 도구를 쓰는 실행 시스템입니다.**
- **MCP는 도구를 연결하고, Skill은 작업법을 알려줍니다.**
- **A2UI는 Agent가 화면 코드를 만드는 방식이 아니라, 검증된 UI를 요청하는 계약입니다.**
- **오늘 POC의 핵심은 자연어 요청을 등록된 API 호출과 안전한 UI Part 렌더링으로 연결한 것입니다.**
- **프론트엔드는 Agent가 만든 코드를 실행하는 곳이 아니라, Agent의 의도를 검증된 컴포넌트로 렌더링하는 곳이 됩니다.**

---

# 데모 대본 초안

## 데모 1 - 실패 배포 목록

```text
사용자:
지난주 production에서 실패한 배포 목록 보여줘

설명:
API Registry에서 devops.deployments.search를 고르고,
기간/환경/상태 params를 추출한 뒤,
응답 rowCount 28을 보고 table.paginated를 선택합니다.
```

## 데모 2 - 한 건 상세

```text
사용자:
지난주 production에서 실패한 배포 한 개만 상세로 보여줘

설명:
같은 API지만 requested row count가 1이라 card.profile로 바뀝니다.
```

## 데모 3 - 5건 카드뷰

```text
사용자:
지난주 production에서 실패한 배포 5건만 카드로 보여줘

설명:
소량 row를 빠르게 훑는 요청이므로 card.simpleList를 선택합니다.
```

## 데모 4 - 추이 차트

```text
사용자:
오늘 deploy-orchestrator API 오류율 추이 보여줘

설명:
platform.apiUsage.hourly를 고르고 time field와 metric이 있어 chart.line을 선택합니다.
```

# Agents란 무엇인가 - 발표 슬라이드 구성안

> 기준 문서: `docs/20260511155313_agent_concept_and_architecture.md`
> 톤: 꼬마 로봇 가이드 + 크레용 스케치 인포그래픽
> 목적: 글이 너무 많지 않은 발표용 이미지 슬라이드. 각 슬라이드는 짧은 화면 문구와 이미지 프롬프트 중심으로 구성한다.

---

## 공통 이미지 프롬프트

이미지 생성 시 아래 공통 프롬프트를 각 슬라이드별 프롬프트 앞에 붙인다.

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
visual idea. Not text-heavy, not empty. Avoid realistic UI screenshots.

TEXT: Korean Hangul for labels and dialogue, clear crayon handwriting. Keep
proper nouns and abbreviations in English: LLM, Agent, MCP, API, Runtime, Tool,
State, Memory, Guardrails, GitHub, DB.
```

### 코드 슬라이드 사용 원칙

코드가 들어가는 슬라이드는 이미지 생성 AI가 긴 코드를 정확히 렌더링하기 어렵다. 이미지는 "코드 카드가 있는 구도"로 만들고, 실제 코드는 PPT/디자인 툴에서 텍스트 레이어로 얹는 것을 추천한다.

---

# 슬라이드 구성

---

## 슬라이드 0 - 표지

### 화면 문구

- 제목: **Agents란 무엇인가**
- 부제: **말하는 AI에서 실행하는 AI로**
- 작은 문구: **LLM + Tools + Memory + Runtime**

### 장면 구성

꼬마 로봇이 큰 지도 앞에서 발표를 시작한다. 지도에는 LLM, Tools, Memory, Guardrails, Runtime 아이콘이 작은 섬처럼 배치되어 있다.

### 이미지 프롬프트

```txt
Cover slide. Center: cute white-and-mint AI robot mascot standing in front of
a large hand-drawn map. The map has five small island icons labeled "LLM",
"Tools", "Memory", "Guardrails", "Runtime".

Large Korean title at top: "Agents란 무엇인가".
Subtitle below: "말하는 AI에서 실행하는 AI로".
Small bottom label: "LLM + Tools + Memory + Runtime".

Warm cream paper background, pastel crayon colors, gentle sparkles, friendly
opening mood. Keep text large and readable.
```

---

## 슬라이드 1 - 오늘의 핵심 질문

### 화면 문구

- **Agent는 그냥 똑똑한 챗봇일까?**
- **아니면 작업을 실행하는 시스템일까?**

### 장면 구성

왼쪽에는 말풍선만 만드는 챗봇, 오른쪽에는 도구 상자를 들고 움직이는 Agent 로봇. 가운데에는 물음표 다리.

### 발표 메모

발표는 Agent를 "더 똑똑한 답변 모델"이 아니라 "목표를 향해 도구를 쓰고 반복 실행하는 시스템"으로 이해하는 데 초점을 둔다.

### 이미지 프롬프트

```txt
Split scene. Left side: a simple chatbot bubble machine producing only speech
bubbles, labeled "챗봇". Right side: the AI robot walking with a toolbox, small
gear icons, and a checklist, labeled "Agent".

In the middle, a wobbly bridge with a big Korean question: "말만 할까? 실행도 할까?"

Use only a few labels: "챗봇", "Agent", "말", "실행". Cream paper background,
soft pastel contrast. Robot points to the right-side action scene.
```

---

## 슬라이드 2 - LLM과 Agent의 차이

### 화면 문구

- **LLM: 답을 생성한다**
- **Agent: 답하기 전에 행동한다**

### 장면 구성

위쪽은 사용자 질문이 LLM을 거쳐 답변으로 끝나는 단순 흐름. 아래쪽은 Agent가 로그 조회, 배포 이력 조회, PR 검색을 거쳐 답변하는 흐름.

### 발표 메모

LLM은 주어진 문맥 안에서 답을 만든다. Agent는 필요한 정보를 찾고, 도구를 호출하고, 결과를 관찰한 뒤 답을 만든다.

### 이미지 프롬프트

```txt
Two horizontal flow lanes.

Top lane labeled "LLM": "질문" -> cloud labeled "LLM" -> "답변".
Bottom lane labeled "Agent": "요청" -> robot labeled "Agent" -> three small
tool stops labeled "로그", "배포", "PR" -> "답변".

Use crayon arrows. The top lane should look short and simple. The bottom lane
should look active but not cluttered. Add a small side note: "Agent = 확인 후 답변".
```

---

## 슬라이드 3 - 코드로 보면: LLM은 한 번 호출된다

### 화면 문구

- **한 번 묻고**
- **한 번 답한다**

### 슬라이드에 얹을 코드

```ts
const response = await model.generate({
  messages: [
    { role: "system", content: "너는 도움이 되는 assistant다." },
    { role: "user", content: "어제 배포 실패 원인 알려줘" },
  ],
});

return response.text;
```

### 발표 메모

LLM 단독 호출은 구조가 단순하다. 메시지를 넣고 텍스트를 받는다. 실제 로그나 배포 이력을 확인하는 단계는 없다.

### 이미지 프롬프트

```txt
Create a clean code-explanation slide.

Left side: the AI robot holding one speech bubble labeled "질문".
Right side: a large cream code card with the title "LLM 단일 호출". Leave room
for a TypeScript code snippet overlay. Inside the card, use faint crayon code
lines as placeholders, not detailed readable code.

Under the card, two short labels connected by one arrow: "messages 입력" -> "text 반환".

Keep layout calm and readable. The actual code will be added as text overlay.
```

---

## 슬라이드 4 - 코드로 보면: Agent는 도구를 쓴다

### 화면 문구

- **모델이 tool call을 고른다**
- **Runtime이 실제 도구를 실행한다**

### 슬라이드에 얹을 코드

```ts
const response = await model.generate({
  messages,
  tools: [getFailedDeploys, getDeployDetail],
});

if (response.toolCall) {
  const result = await executeTool(response.toolCall);
  messages.push({
    role: "tool",
    content: JSON.stringify(result),
  });
}
```

### 발표 메모

Agent는 모델 호출만으로 끝나지 않는다. 모델이 필요한 도구를 고르면 Runtime이 그 도구를 실행하고, 결과를 다시 대화 문맥에 넣는다.

### 이미지 프롬프트

```txt
Code-explanation slide with an action loop.

Center: a large code card titled "Agent + Tools". Leave room for a TypeScript
code snippet overlay. Use faint crayon code-line placeholders only.

Around the code card, draw a simple loop:
"Model" -> "tool call" -> "Runtime 실행" -> "tool result" -> back to "Model".

The robot stands beside the loop with a crayon pointer. Add two small tool icons:
a database cylinder labeled "DB" and a document labeled "로그".
```

---

## 슬라이드 5 - Agent는 실행 시스템이다

### 화면 문구

- **Agent = LLM + 실행 환경**
- **도구, 상태, 규칙, 반복이 붙는다**

### 장면 구성

Agent를 하나의 작은 작업실로 표현한다. 안에는 Model 책상, Tools 선반, Memory 노트, Guardrails 표지판, Runtime 컨트롤 패널이 있다.

### 발표 메모

Agent는 모델 이름 하나가 아니다. 모델을 중심으로 도구, 상태, 실행 루프, 안전장치가 결합된 시스템이다.

### 이미지 프롬프트

```txt
Draw a cozy crayon workshop labeled "Agent".

Inside the workshop, show five simple stations:
1. "Model" desk with a small brain icon
2. "Tools" shelf with wrench and DB icons
3. "Memory" notebook
4. "Guardrails" safety sign
5. "Runtime" control panel

The robot is the guide standing at the door. Big Korean headline at top:
"Agent = LLM + 실행 환경". Keep labels short and clear.
```

---

## 슬라이드 6 - 코드로 보면: Agent Runtime의 뼈대

### 화면 문구

- **Runtime은 모델과 도구를 묶는다**
- **State에 작업 맥락을 저장한다**

### 슬라이드에 얹을 코드

```ts
class AgentRuntime {
  constructor(
    private model: Model,
    private tools: Tool[],
    private state: AgentState
  ) {}

  async run(userMessage: string) {
    this.state.messages.push({ role: "user", content: userMessage });

    return await this.model.generate({
      messages: this.state.messages,
      tools: this.tools,
    });
  }
}
```

### 발표 메모

Runtime은 모델, 도구, 상태를 한 곳에서 다룬다. 실제 Agent 구현은 이런 껍데기에서 시작해 도구 실행, 반복, 가드레일을 붙여간다.

### 이미지 프롬프트

```txt
Code slide showing a friendly architecture shell.

Right side: a large code card titled "AgentRuntime". Leave room for TypeScript
code overlay. Use faint crayon code-line placeholders.

Left side: three blocks stacked vertically labeled "Model", "Tools", "State".
Arrows from the three blocks go into a rounded box labeled "Runtime".
The robot connects the blocks with a crayon line.

Keep text minimal: "Model", "Tools", "State", "Runtime".
```

---

## 슬라이드 7 - Agent의 기본 루프

### 화면 문구

- **생각**
- **도구 호출**
- **결과 관찰**
- **다시 생각**

### 장면 구성

원형 루프 다이어그램. 로봇이 루프를 따라 달리며 각 지점에서 생각, 도구, 결과, 답변을 확인한다.

### 발표 메모

Agent의 핵심은 한 번의 답변이 아니라 반복이다. 판단하고, 필요한 도구를 쓰고, 결과를 보고, 다음 행동을 다시 판단한다.

### 이미지 프롬프트

```txt
Circular crayon loop diagram with four big stops:
"생각" -> "도구 호출" -> "결과 관찰" -> "다시 생각".

At the center, write "Agent Loop" in English. The AI robot runs along the loop
with a tiny crayon flag. Add small icons: lightbulb for thinking, wrench for
tool call, magnifier for observation, speech bubble for answer.

Use large Korean labels, no long sentences.
```

---

## 슬라이드 8 - 코드로 보면: Agent Loop

### 화면 문구

- **도구가 필요하면 실행**
- **결과를 다시 넣고 반복**

### 슬라이드에 얹을 코드

```ts
for (let step = 0; step < 5; step++) {
  const response = await model.generate({ messages, tools });

  if (!response.toolCall) {
    return response.text;
  }

  const toolResult = await executeTool(response.toolCall);

  messages.push({
    role: "tool",
    name: response.toolCall.name,
    content: JSON.stringify(toolResult),
  });
}
```

### 발표 메모

Agent loop는 모델 호출과 도구 실행을 번갈아 수행한다. `step` 제한은 무한 반복을 막는 가장 기본적인 안전장치다.

### 이미지 프롬프트

```txt
Create a code-focused slide.

Center-left: a large code card titled "Agent Loop". Leave room for code overlay.
Use faint crayon code placeholders.

Right side: a vertical mini flow:
"model.generate" -> "toolCall?" -> "executeTool" -> "messages에 결과 추가".

The robot points to the "toolCall?" decision diamond. Add a small badge:
"반복은 제한!".
```

---

## 슬라이드 9 - Agent를 이루는 부품들

### 화면 문구

- **Model**
- **Prompt**
- **Tools**
- **Memory**
- **Guardrails**
- **Runtime**

### 장면 구성

Agent 로봇을 조립하는 레고/부품 보드. 각 부품이 로봇 몸체에 붙는다.

### 발표 메모

이제 각 부품을 따로 본다. Agent는 여러 구성요소가 맞물려야 제대로 동작한다.

### 이미지 프롬프트

```txt
Draw the AI robot being assembled from six crayon puzzle pieces. Each piece has
one short label: "Model", "Prompt", "Tools", "Memory", "Guardrails", "Runtime".

At the top, Korean headline: "Agent를 이루는 부품들".
Use a workbench scene with pastel puzzle pieces and simple arrows.

Keep text to the six labels plus headline only.
```

---

## 슬라이드 10 - Tools: 실제 세계와 연결되는 손

### 화면 문구

- **LLM은 직접 DB를 보지 못한다**
- **Agent는 Tool로 확인한다**

### 장면 구성

로봇 팔 여러 개가 DB, 파일, 브라우저, GitHub, 배포 시스템에 연결된다.

### 발표 메모

Tools는 Agent가 실제 세계에 접근하는 손이다. 검색, 파일 읽기, DB 조회, API 호출 같은 행동이 Tool로 제공된다.

### 이미지 프롬프트

```txt
Center: AI robot with several gentle mechanical crayon arms reaching to simple
icons around it:
"DB", "파일", "브라우저", "GitHub", "API".

Top headline in Korean: "Tools = 실제 세계와 연결".
Small side note: "말만 하지 않고 확인한다".

Use friendly non-scary arms, pastel colors, clean spacing.
```

---

## 슬라이드 11 - MCP: 도구를 연결하는 표준 통로

### 화면 문구

- **MCP Server = 도구 카탈로그**
- **Agent = 도구를 고르고 실행하는 중개자**

### 장면 구성

Agent 로봇이 MCP 허브에 연결되고, MCP 허브가 GitHub, Figma, DB, Files로 이어진다.

### 발표 메모

MCP는 Agent가 외부 도구를 표준 방식으로 발견하고 호출하게 해주는 통로다. Agent는 도구 목록을 LLM에게 보여주고, LLM이 고른 도구를 대신 실행한다.

### 이미지 프롬프트

```txt
Hub-and-spoke crayon diagram.

Left: robot labeled "Agent".
Center: rounded hub labeled "MCP".
Right side: four tool cards connected to the hub: "GitHub", "Figma", "DB", "Files".

At the top: "MCP = 도구 연결 통로".
Small labels near hub: "tools/list", "tools/call".

Use USB-C-like cable shapes in crayon style, but keep it simple and readable.
```

---

## 슬라이드 12 - Memory와 State: 이어지는 작업

### 화면 문구

- **State: 지금 작업의 상태**
- **Memory: 반복되는 맥락**

### 장면 구성

로봇이 작은 노트북에 `selectedService`, `deployId`, `lastResult`를 적고, 다음 요청에서 그 노트를 다시 꺼낸다.

### 발표 메모

State가 있어야 "그거 상세 봐줘" 같은 이어지는 요청을 처리할 수 있다. Memory는 장기 선호나 반복되는 업무 맥락에 가깝다.

### 이미지 프롬프트

```txt
Notebook scene.

Robot holds an open notebook labeled "State". On the page, three short notes:
"service", "deployId", "lastResult".

Behind it, a smaller sticky note labeled "Memory" with two generic notes:
"선호 스타일", "반복 업무".

Show two speech bubbles:
User bubble: "그거 상세 봐줘"
Robot bubble: "이전 상태를 기억!"

Keep text large and sparse.
```

---

## 슬라이드 13 - Planner, Executor, Reviewer

### 화면 문구

- **Planner: 계획**
- **Executor: 실행**
- **Reviewer: 검토**

### 장면 구성

세 명의 작은 로봇이 역할을 나눠 일한다. Planner는 지도, Executor는 도구, Reviewer는 체크리스트를 들고 있다.

### 발표 메모

복잡한 Agent는 하나의 모델 호출로 끝나지 않는다. 계획하는 역할, 실행하는 역할, 결과를 검토하는 역할을 나눌 수 있다.

### 이미지 프롬프트

```txt
Three small robot variants standing side by side like a tiny project team.

Robot 1 holds a map, label "Planner".
Robot 2 holds a wrench, label "Executor".
Robot 3 holds a checklist, label "Reviewer".

Top Korean headline: "복잡한 일은 역할을 나눈다".
Below each robot, one Korean word: "계획", "실행", "검토".

Warm crayon style, clean composition.
```

---

## 슬라이드 14 - Guardrails: 위험한 행동을 막는다

### 화면 문구

- **조회는 바로 실행**
- **변경은 승인 필요**
- **위험 작업은 차단**

### 장면 구성

로봇 앞에 세 갈래 길이 있다. 초록 길은 로그 조회, 노란 길은 배포 롤백 승인, 빨간 길은 DB 삭제 차단.

### 발표 메모

Agent가 도구를 쓸 수 있다는 말은 위험한 행동도 가능하다는 뜻이다. 그래서 Runtime 단계에서 승인과 차단 정책이 필요하다.

### 이미지 프롬프트

```txt
Three-path safety diagram.

Robot stands at a fork in the road. Three paths:
Green path labeled "조회: 바로 실행" with a magnifier icon.
Yellow path labeled "변경: 승인 필요" with a hand approval icon.
Red path labeled "위험: 차단" with a stop sign.

Top headline: "Guardrails = 실행 전 안전장치".
Use friendly safety-sign visuals, not scary. Keep labels short.
```

---

## 슬라이드 15 - 예시: Coding Agent가 버그를 고치는 흐름

### 화면 문구

- **repo 검색**
- **파일 읽기**
- **수정**
- **테스트**
- **diff 요약**

### 장면 구성

크레용 로드맵 위에 다섯 단계가 놓인다. 로봇이 첫 단계에서 마지막 단계까지 이동한다.

### 발표 메모

Coding Agent는 단순히 "이럴 것 같다"고 말하지 않는다. 저장소를 읽고, 관련 파일을 찾고, 수정하고, 테스트 결과를 보고, 변경사항을 요약한다.

### 이미지 프롬프트

```txt
Horizontal roadmap with five numbered stops:
1 "repo 검색"
2 "파일 읽기"
3 "수정"
4 "테스트"
5 "diff 요약"

The robot travels along the roadmap with a tiny backpack and crayon pointer.
Add small icons: folder, document, pencil, checkmark, git diff card.

Top headline: "Coding Agent는 실제 repo에서 일한다".
Keep text minimal and readable.
```

---

## 슬라이드 16 - 요즘 Agent 아키텍처의 흐름

### 화면 문구

- **예전: LLM + Prompt + Function calling**
- **현재: Tools + Memory + Workflow + MCP + Guardrails**

### 장면 구성

왼쪽은 작은 단순한 기계, 오른쪽은 여러 부품이 연결된 작업 시스템. 로봇이 왼쪽에서 오른쪽으로 업그레이드 화살표를 그린다.

### 발표 메모

요즘 Agent는 단순한 function calling을 넘어 도구 생태계, 상태 관리, 워크플로우, 가드레일, 관측 가능성이 결합된 방향으로 가고 있다.

### 이미지 프롬프트

```txt
Before-and-after crayon comparison.

Left side labeled "예전": small simple box with labels "LLM", "Prompt",
"function call".

Right side labeled "현재": richer but clean system diagram with connected
cards: "Tools", "Memory", "Workflow", "MCP", "Guardrails", "Tracing".

The robot draws a large arrow from left to right labeled "진화".
Keep the right side organized, not cluttered.
```

---

## 슬라이드 17 - 한 문장 정리

### 화면 문구

**Agent는 말만 하는 AI가 아니라, 도구를 쓰고 상태를 기억하며 목표까지 작업을 이어가는 실행 시스템이다.**

### 장면 구성

로봇이 한 줄 정의가 적힌 큰 종이를 들고 있다. 뒤에는 도구, 기억 노트, 안전 표지판, 루프 화살표가 작게 배치된다.

### 발표 메모

마지막으로 Agent를 하나의 문장으로 정리한다. "똑똑한 답변"보다 "실행 시스템"이라는 관점이 핵심이다.

### 이미지 프롬프트

```txt
Closing summary slide before the final thank-you.

Center: robot holding a large cream paper sign. On the sign, large Korean text:
"Agent = 목표를 향해 실행하는 AI 시스템".

Around the sign, four small icons:
"도구", "상태", "반복", "안전장치".

Top small title: "한 문장 정리".
Warm crayon style, calm and memorable, enough whitespace.
```

---

## 슬라이드 18 - 종료

### 화면 문구

- **감사합니다**
- **질문을 받겠습니다**

### 장면 구성

로봇이 칠판 앞에서 인사한다. 칠판에는 오늘 배운 키워드가 작은 카드처럼 붙어 있다: LLM, Agent Loop, Tools, MCP, Memory, Guardrails.

### 이미지 프롬프트

```txt
Final thank-you slide.

Robot mascot stands at the lower-right, waving goodbye with a friendly smile.
Center: big Korean handwritten text "감사합니다".
Below it: "질문을 받겠습니다".

Background: a small chalkboard or pinboard with six tiny keyword cards:
"LLM", "Agent Loop", "Tools", "MCP", "Memory", "Guardrails".

Add gentle crayon confetti and stars, but keep it professional and clean.
Cream paper background, pastel palette.
```

---

# 사용 팁

1. 이미지 생성 프롬프트는 `공통 이미지 프롬프트 + 각 슬라이드 프롬프트`를 이어 붙여 사용한다.
2. 코드 슬라이드는 이미지에 코드를 직접 렌더링시키기보다, 이미지에는 코드 카드 영역만 만들고 실제 코드는 텍스트 레이어로 얹는 편이 안정적이다.
3. 한글 라벨이 깨지면 이미지에서는 라벨을 줄이고, PPT나 Figma에서 텍스트를 직접 얹는다.
4. 로봇 캐릭터 일관성이 중요하면 표지 슬라이드에서 생성한 로봇 이미지를 이후 슬라이드의 reference로 넣고 `same robot character as reference`를 추가한다.

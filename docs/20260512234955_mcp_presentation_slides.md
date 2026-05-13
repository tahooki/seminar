# MCP - 발표 슬라이드 구성안

> 기준 문서: `docs/20260511155313_mcp_agent_node_explanation.md`
> 톤: 꼬마 로봇 가이드 + 크레용 스케치 인포그래픽
> 목적: MCP를 Server/Client, 도구 등록, 도구 목록 전달, tool call 실행 흐름으로 설명한다.

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
proper nouns and abbreviations in English: MCP, Agent, LLM, API, DB, GitHub,
Figma, Runtime, Tool.
```

### 코드 슬라이드 사용 원칙

코드가 들어가는 슬라이드는 이미지 생성 AI가 긴 코드를 정확히 렌더링하기 어렵다. 이미지는 "코드 카드가 있는 구도"로 만들고, 실제 코드는 PPT/디자인 툴에서 텍스트 레이어로 얹는 것을 추천한다.

---

# 슬라이드 구성

---

## 슬라이드 0 - 표지

### 화면 문구

- 제목: **MCP**
- 부제: **Agent와 외부 도구를 연결하는 표준 통로**
- 작은 문구: **tools/list + tools/call**

### 장면 구성

발표를 여는 느낌으로, 로봇 진행자가 중앙 MCP 허브에 케이블을 연결한다. 허브는 DB, GitHub, Figma, Files로 이어진다.

### 이미지 프롬프트

```txt
Opening cover slide for a technical seminar. Center: rounded hub labeled "MCP".
Left: cute white-and-mint AI robot presenter labeled "Agent" plugging a crayon
cable into the hub. Right: four tool cards labeled "DB", "GitHub", "Figma",
"Files".

Large title: "MCP". Subtitle: "Agent와 외부 도구를 연결하는 표준 통로".
Small bottom label: "tools/list + tools/call".
Warm cream paper background, pastel crayon illustration, spacious opening-slide
composition.
```

---

## 슬라이드 1 - MCP란 무엇인가

### 화면 문구

- **외부 도구를 표준 방식으로 연결**
- **Agent가 도구를 발견하고 호출**

### 장면 구성

Agent 로봇과 여러 외부 시스템 사이에 표준 어댑터 허브가 놓인다.

### 발표 메모

MCP는 Agent가 GitHub, DB, API, Figma 같은 외부 시스템을 각자 따로 붙이는 대신 표준 방식으로 연결하게 해준다.

### 이미지 프롬프트

```txt
Robot on the left labeled "Agent". External systems on the right: "DB",
"GitHub", "Figma", "API". A central adapter hub labeled "MCP" connects them.

Top headline: "MCP = 도구 연결 표준".
Small note: "발견하고 호출한다".
```

---

## 슬라이드 2 - MCP는 Server와 Client로 나뉜다

### 화면 문구

- **MCP Server: 도구 제공**
- **MCP Client: 도구 목록과 실행 요청**

### 장면 구성

왼쪽 Agent 코드, 가운데 MCP Client, 오른쪽 MCP Server. Server 뒤에는 실제 DB/API가 있다.

### 발표 메모

MCP Server는 도구를 등록하고 실제 기능을 실행한다. Agent 쪽 MCP Client는 도구 목록을 가져오고, 선택된 도구를 호출한다.

### 이미지 프롬프트

```txt
Horizontal architecture diagram:
"Agent 코드" -> "MCP Client" -> "MCP Server" -> "DB/API/GitHub".

Under MCP Server: "도구 제공". Under MCP Client: "목록 조회 + 실행 요청".
Robot points to the middle connection.
```

---

## 슬라이드 3 - LLM은 내부 코드를 직접 보지 않는다

### 화면 문구

- **도구 이름**
- **도구 설명**
- **입력 스키마**
- **이전 실행 결과**

### 장면 구성

MCP Server 내부 코드가 닫힌 상자 안에 있고, LLM에게는 도구 카드만 전달된다.

### 발표 메모

LLM은 MCP Server의 내부 구현을 읽는 것이 아니다. Agent가 가져온 도구 메타데이터를 보고 어떤 도구를 쓸지 판단한다.

### 이미지 프롬프트

```txt
Draw a closed box labeled "MCP Server 내부 코드" with a lock icon. From it,
small cards flow to an LLM cloud: "name", "description", "inputSchema",
"tool result".

Top headline: "LLM은 카탈로그를 본다".
Robot holds the tool cards like index cards.
```

---

## 슬라이드 4 - 코드로 보면: MCP Server에서 도구 등록

### 화면 문구

- **server.tool()로 도구를 등록**
- **이름 + 설명 + 스키마 + 실행 함수**

### 슬라이드에 얹을 코드

```ts
server.tool(
  "get_failed_deploys",
  "실패한 배포 목록을 조회한다.",
  {
    date: z.string(),
    serviceName: z.string().optional(),
  },
  async ({ date, serviceName }) => {
    const deploys = await findFailedDeploys(date, serviceName);

    return {
      content: [
        {
          type: "text",
          text: JSON.stringify(deploys),
        },
      ],
    };
  },
);
```

### 발표 메모

MCP Server 쪽 코드는 도구 카탈로그를 만든다. 이때 description과 input schema가 LLM의 도구 선택 품질을 좌우한다.

### 이미지 프롬프트

```txt
Code slide. Large code card titled "server.tool()". Leave room for TypeScript
code overlay. Around the card, four labels: "name", "description", "schema",
"handler".

Robot points at "description" with note: "선택 품질의 핵심".
```

---

## 슬라이드 5 - 좋은 도구 설명이 중요한 이유

### 화면 문구

- **모호한 도구: getData**
- **명확한 도구: get_failed_deploys**

### 장면 구성

좌우 비교. 왼쪽은 흐릿한 도구 박스, 오른쪽은 명확한 라벨과 입력값이 적힌 도구 카드.

### 발표 메모

도구 이름과 설명만 보고 LLM이 선택하므로, 도구 목적이 모호하면 잘못 호출될 가능성이 커진다.

### 이미지 프롬프트

```txt
Split comparison. Left: blurry gray tool card labeled "getData" with question
marks. Right: clear colorful tool card labeled "get_failed_deploys" with small
notes "날짜", "서비스명", "실패 배포".

Top headline: "도구 설명이 판단을 만든다".
```

---

## 슬라이드 6 - 코드로 보면: Agent가 tools/list를 호출한다

### 화면 문구

- **도구 목록을 가져온다**
- **LLM에게 보여줄 준비를 한다**

### 슬라이드에 얹을 코드

```ts
const toolsResult = await mcpClient.listTools();

const tools = toolsResult.tools.map((tool) => ({
  name: tool.name,
  description: tool.description,
  parameters: tool.inputSchema,
}));
```

### 발표 메모

Agent는 시작할 때 MCP Server에서 사용 가능한 도구 목록을 가져온다. 이 목록이 LLM에게 전달될 도구 카탈로그가 된다.

### 이미지 프롬프트

```txt
Code slide. Left: MCP Server card. Right: Agent card. A crayon arrow labeled
"tools/list" moves from Agent to Server and returns with small tool cards.

Large code card below titled "listTools()". Leave room for code overlay.
```

---

## 슬라이드 7 - 코드로 보면: LLM에게 도구 목록을 넘긴다

### 화면 문구

- **사용자 요청 + 도구 목록**
- **LLM이 tool call을 선택**

### 슬라이드에 얹을 코드

```ts
const response = await model.generate({
  messages: [
    { role: "user", content: userMessage },
  ],
  tools,
});
```

### 발표 메모

LLM에게는 사용자 요청만 주는 것이 아니라, 사용 가능한 도구 목록도 함께 준다. 그래서 LLM이 답변 대신 tool call을 선택할 수 있다.

### 이미지 프롬프트

```txt
Diagram with two cards flowing into an LLM cloud: "사용자 요청" and "도구 목록".
Output from cloud is a small card labeled "tool call".

Code card on the side titled "model.generate({ tools })". Leave room for code overlay.
Robot points to the tools input.
```

---

## 슬라이드 8 - 코드로 보면: LLM이 고른 도구를 실행한다

### 화면 문구

- **LLM은 선택한다**
- **Agent가 실행한다**

### 슬라이드에 얹을 코드

```ts
const toolResult = await mcpClient.callTool({
  name: toolCall.name,
  arguments: toolCall.arguments,
});

messages.push({
  role: "tool",
  toolCallId: toolCall.id,
  content: JSON.stringify(toolResult),
});
```

### 발표 메모

LLM이 도구를 직접 실행하는 것이 아니다. Agent Runtime이 MCP Client를 통해 도구를 호출하고, 결과를 다시 LLM 문맥에 넣는다.

### 이미지 프롬프트

```txt
Flow diagram: "LLM 선택" -> "Agent Runtime" -> "MCP callTool" -> "도구 결과"
-> "LLM에 재주입".

Code card titled "callTool()". Leave room for code overlay. Robot stands at
Agent Runtime checkpoint.
```

---

## 슬라이드 9 - 실제 실행 흐름

### 화면 문구

**요청 → 도구 목록 → tool call → MCP 실행 → 결과 재주입 → 답변**

### 장면 구성

가로 로드맵으로 전체 흐름을 한 번에 보여준다.

### 발표 메모

MCP는 단일 호출이 아니라 Agent loop 안에서 반복될 수 있다. 도구 결과를 보고 다음 도구를 다시 고를 수 있다.

### 이미지 프롬프트

```txt
Horizontal roadmap with six stops:
"요청", "도구 목록", "tool call", "MCP 실행", "결과 재주입", "답변".

Robot walks along the path. Add a small loop arrow above "결과 재주입".
Top headline: "MCP는 Agent Loop 안에서 돈다".
```

---

## 슬라이드 10 - 한 문장 정리

### 화면 문구

**MCP는 Agent가 사용할 도구 카탈로그와 실행 통로를 표준화하는 구조다.**

### 장면 구성

도구 카탈로그 책과 실행 케이블이 MCP 허브로 합쳐진다.

### 이미지 프롬프트

```txt
Final summary slide. Center: MCP hub connected to a catalog book labeled
"도구 카탈로그" and a cable labeled "실행 통로".

Large Korean text: "MCP = 도구 카탈로그 + 실행 통로".
Robot smiles and holds a plug.
```

---

## 슬라이드 11 - 마무리

### 화면 문구

- **연결은 표준화하고 실행은 관찰한다**
- **Q&A**

### 장면 구성

로봇이 MCP 허브 옆에서 케이블을 정리하고, 질문 말풍선이 허브 주변에 떠 있다.

### 이미지 프롬프트

```txt
Closing slide for a technical seminar about MCP. Cute white-and-mint AI robot
tidies crayon cables beside a rounded hub labeled "MCP". A few question speech
bubbles float around the hub.

Large Korean closing text: "연결은 표준화하고 실행은 관찰한다".
Bottom text: "Q&A".

Warm cream paper background, pastel crayon illustration, calm conclusion mood,
clean whitespace, clear readable Korean text.
```

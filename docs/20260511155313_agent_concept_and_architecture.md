# Agent란 뭘까

Agent는 **LLM을 중심에 둔 실행 시스템**이다.

LLM 하나만 있으면 보통 이렇게 동작한다.

```txt
사용자 질문
  ↓
LLM
  ↓
답변 생성
```

Agent는 여기에 목표, 도구, 상태, 반복 실행, 판단, 검증, 권한 제어가 붙는다.

```txt
사용자 요청
  ↓
Agent
  ├─ LLM: 판단 / 계획 / 요약 / 추론
  ├─ Tools: 검색, DB 조회, 파일 수정, API 호출, MCP 도구
  ├─ Memory / State: 대화 상태, 이전 선택, 장기 기억
  ├─ Workflow: 다음에 뭘 할지 결정하는 루프
  ├─ Guardrails: 위험 작업 차단, 승인 요청
  └─ Observability: 로그, tracing, 평가
```

Agent를 한 문장으로 말하면:

> Agent는 LLM이 혼자 말만 하는 구조가 아니라, 목표를 이해하고, 필요한 도구를 고르고, 실행 결과를 관찰하고, 상태를 기억하면서, 필요한 경우 여러 번 행동해 최종 결과를 만드는 실행 시스템이다.

---

# LLM과 Agent의 차이

LLM은 **생각하고 말하는 모델**에 가깝다.

```txt
"이 에러 왜 났어?"
  ↓
LLM
  ↓
"아마 이런 이유일 수 있습니다."
```

Agent는 **생각한 뒤 실제로 확인하고 행동하는 시스템**이다.

```txt
"이 에러 왜 났어?"
  ↓
Agent
  ↓
로그 조회 도구 호출
  ↓
최근 배포 이력 조회
  ↓
관련 PR 검색
  ↓
원인 요약
  ↓
필요하면 롤백 승인 요청
```

LLM은 답을 생성한다.

Agent는 답을 만들기 전에 필요한 행동을 수행한다.

```txt
LLM:
말을 잘함

Agent:
말도 하고, 도구도 쓰고, 상태도 기억하고, 작업도 이어감
```

예를 들어 사용자가 이렇게 말한다.

```txt
어제 payment-api 배포 실패 원인 찾아줘
```

LLM은 자기 지식만으로는 실제 사내 배포 로그를 모른다.

하지만 Agent는 이렇게 할 수 있다.

```txt
1. get_failed_deploys 호출
2. get_deploy_detail 호출
3. GitHub PR 검색
4. 로그 요약
5. 원인 후보 정리
6. 담당자에게 보낼 보고서 초안 생성
```

그래서 Agent의 핵심은 **LLM + 실행 환경**이다.

---

# Agent의 기본 동작 흐름

가장 기본적인 Agent loop는 이렇다.

```txt
사용자 요청
  ↓
LLM이 판단
  ↓
도구가 필요하면 tool call 생성
  ↓
Agent Runtime이 도구 실행
  ↓
도구 결과를 다시 LLM에게 전달
  ↓
LLM이 다음 행동 판단
  ↓
필요하면 반복
  ↓
최종 답변
```

코드 감각으로 보면 이런 구조다.

```ts
async function runAgent(userMessage: string) {
  const messages = [
    { role: "system", content: "너는 사내 운영 Agent다." },
    { role: "user", content: userMessage },
  ];

  for (let step = 0; step < 5; step++) {
    const response = await model.generate({
      messages,
      tools,
    });

    if (!response.toolCall) {
      return response.text;
    }

    const toolResult = await executeTool(response.toolCall);

    messages.push({
      role: "assistant",
      content: response.toolCall,
    });

    messages.push({
      role: "tool",
      name: response.toolCall.name,
      content: JSON.stringify(toolResult),
    });
  }

  return "작업이 너무 길어져 중단했습니다.";
}
```

Agent loop를 아주 짧게 표현하면 이렇다.

```txt
생각 → 도구 호출 → 결과 관찰 → 다시 생각 → 답변
```

---

# Agent를 만들 때 들어가는 구성요소

요즘 Agent는 보통 이런 식으로 구성한다.

```txt
Agent
  ├─ Model
  ├─ System Prompt
  ├─ Tools
  ├─ Tool Router
  ├─ Memory / State
  ├─ Planner
  ├─ Executor
  ├─ Guardrails
  ├─ Human Approval
  ├─ Handoff / Multi-Agent
  ├─ Runtime
  └─ Observability
```

---

# Model

Model은 Agent의 머리다.

```txt
GPT, Claude, Gemini, Llama 계열 모델
```

Model은 직접 API를 호출하지 않는다.

도구 설명을 보고 “이 도구를 호출해야겠다”고 판단한다.

---

# System Prompt

System Prompt는 Agent의 역할 설명이다.

```txt
너는 사내 배포 장애 대응 Agent다.
실패한 배포를 찾고, 로그를 분석하고, 원인을 요약한다.
운영 상태를 바꾸는 작업은 사용자 승인 없이 실행하지 않는다.
```

이건 Agent의 성격, 역할, 금지사항, 출력 방식을 정한다.

---

# Tools

Tools는 Agent가 실제 세계에 접근하는 손이다.

```txt
- DB 조회
- GitHub 이슈 검색
- Slack 메시지 검색
- Figma 디자인 읽기
- 파일 읽기 / 쓰기
- 브라우저 조작
- 배포 실행
- 이메일 발송
- 캘린더 등록
```

Agent는 사용자 요청을 보고 필요한 도구를 고른다.

```txt
사용자: "어제 실패한 배포 찾아줘"
  ↓
Agent: get_failed_deploys 도구 호출
```

---

# MCP

MCP는 도구를 Agent에 연결하는 표준 통로다.

```txt
Agent
  ↓
MCP Client
  ↓
MCP Server
  ↓
GitHub / Figma / DB / File / Deploy API
```

Agent 입장에서 MCP는 이런 느낌이다.

```txt
직접 GitHub 연동 만들기
직접 Figma 연동 만들기
직접 DB 연동 만들기

대신

MCP Server 붙이기
```

MCP Server는 도구 카탈로그와 실제 실행 함수를 제공한다.

Agent는 MCP Server에서 도구 목록을 가져와 LLM에게 보여주고, LLM이 고른 도구를 대신 실행한다.

---

# Memory / State

Memory와 State는 Agent가 지금 대화에서 뭘 알고 있는지 저장하는 영역이다.

```txt
selectedService = "payment-api"
selectedDeployId = "dep_1001"
userIntent = "failure_analysis"
lastToolResult = {...}
```

장기 기억도 있다.

```txt
자주 다루는 프로젝트 유형
선호하는 코드 스타일
반복적으로 참고하는 업무 도메인
```

이런 정보는 사용자가 허용한 범위 안에서만 저장하고 사용해야 한다.

State가 있으면 이런 대화가 가능하다.

```txt
사용자: 어제 payment-api 실패한 배포 찾아줘
Agent: dep_1001이 실패했습니다.

사용자: 그거 상세 봐줘
Agent: selectedDeployId = dep_1001을 기억하고 get_deploy_detail 호출
```

---

# Planner

Planner는 작업을 쪼개는 역할이다.

사용자가 말한다.

```txt
이번 장애 원인 찾아서 보고서까지 만들어줘
```

Planner는 이렇게 나눌 수 있다.

```txt
1. 장애 시간 확인
2. 관련 서비스 확인
3. 배포 이력 조회
4. 에러 로그 조회
5. 관련 PR / commit 확인
6. 원인 요약
7. 보고서 생성
```

간단한 Agent는 Planner가 따로 없다.

LLM이 매 step마다 바로 판단한다.

복잡한 Agent는 Planner와 Executor를 나눌 수 있다.

```txt
Planner:
무엇을 해야 하는지 계획

Executor:
실제로 도구 호출

Reviewer:
결과가 맞는지 검토
```

---

# Guardrails

Guardrails는 Agent가 위험한 행동을 못 하게 막는 장치다.

예를 들어:

```txt
조회 도구: 바로 실행 가능
파일 수정: 승인 필요
운영 롤백: 승인 필요
결제 / 삭제 / 발송: 강한 승인 필요
```

코드로는 이런 느낌이다.

```ts
const dangerousTools = new Set([
  "rollback_deploy",
  "delete_user",
  "send_email",
  "drop_database",
]);

async function executeTool(toolCall) {
  if (dangerousTools.has(toolCall.name)) {
    return {
      type: "needs_approval",
      message: "이 작업은 실제 상태를 변경합니다. 실행할까요?",
      pendingToolCall: toolCall,
    };
  }

  return await callTool(toolCall);
}
```

도구 설명에 “승인 필요”라고 적는 것도 도움이 되지만, 실제 차단은 Agent Runtime이나 Host 쪽에서 해야 한다.

---

# Handoff / Multi-Agent

한 Agent가 다 하지 않고, 전문 Agent에게 넘기는 방식이다.

고객센터 Agent라면 이렇게 나눌 수 있다.

```txt
Main Agent
  ├─ Refund Agent
  ├─ Order Status Agent
  ├─ FAQ Agent
  └─ Complaint Agent
```

Admin Copilot이라면 이렇게 나눌 수 있다.

```txt
Admin Orchestrator Agent
  ├─ Deploy Analysis Agent
  ├─ Incident Report Agent
  ├─ Approval Agent
  ├─ GitHub Investigation Agent
  └─ UI Rendering Agent
```

처음부터 Multi-Agent로 만들 필요는 없다.

먼저 하나의 Orchestrator Agent를 만들고, 복잡도가 올라가면 전문 Agent를 분리하는 게 좋다.

---

# Agent 예시 1: 단순 고객센터 Agent

사용자:

```txt
배송 언제 와요?
```

Agent 흐름:

```txt
1. 주문번호가 있는지 확인
2. 없으면 사용자에게 물어봄
3. order_lookup 도구 호출
4. 배송 상태 요약
```

구성:

```txt
Model
+ System Prompt
+ order_lookup tool
+ refund_status tool
+ conversation state
```

코드 느낌:

```ts
const customerAgent = {
  name: "customer-support-agent",
  instructions: `
    너는 고객센터 Agent다.
    주문 상태, 환불 상태, 배송 상태를 도와준다.
    주문번호가 없으면 먼저 물어본다.
  `,
  tools: [orderLookupTool, refundStatusTool],
};
```

---

# Agent 예시 2: 개발자 Coding Agent

사용자:

```txt
이 로그인 버그 고쳐줘.
```

Agent 흐름:

```txt
1. repo 구조 검색
2. 로그인 관련 파일 찾기
3. 테스트 실행
4. 문제 코드 수정
5. 다시 테스트
6. diff 요약
```

구성:

```txt
Model
+ Repo Search Tool
+ File Read Tool
+ File Write Tool
+ Terminal Tool
+ Test Runner
+ Git Diff Tool
+ Guardrails
```

Coding Agent가 그냥 LLM과 다른 점은 **실제로 repo를 읽고 수정하고 테스트를 돌린다**는 점이다.

---

# Agent 예시 3: Admin Copilot Agent

사용자:

```txt
어제 payment-api 실패한 배포 왜 그런지 보고 UI로 보여줘.
```

Agent 구성:

```txt
Admin Copilot Agent
  ├─ get_failed_deploys
  ├─ get_deploy_detail
  ├─ search_related_pr
  ├─ summarize_incident
  ├─ render_deploy_failure_surface
  └─ create_report
```

흐름:

```txt
1. 실패한 배포 조회
2. 상세 로그 조회
3. 관련 PR 검색
4. 원인 요약
5. A2UI surface 생성
6. 사용자가 "보고서 만들어줘" 하면 보고서 생성
```

이 경우 Agent는 텍스트만 답하는 게 아니라 UI도 그릴 수 있다.

```txt
LLM 판단:
이건 표와 로그 요약이 필요하다.
텍스트만으로는 부족하다.
render_deploy_failure_surface를 호출하자.
```

구성:

```txt
LLM
+ MCP Tools
+ Conversation State
+ A2UI Template Registry
+ Surface Renderer
+ Approval Policy
```

---

# Agent 예시 4: Research Agent

사용자:

```txt
주요 벡터 데이터베이스의 가격, 성능, 운영 방식을 비교해줘.
```

Agent 흐름:

```txt
1. 최신 문서 검색
2. 가격 / 품질 / 지역 지원 확인
3. 공식 문서 우선 정리
4. 비교표 생성
5. 추천 기준 제시
```

구성:

```txt
Model
+ Web Search Tool
+ Browser Tool
+ Citation Manager
+ Table Builder
+ Source Verifier
```

이 Agent에서 중요한 건 최신성, 출처, 검증이다.

---

# Agent 예시 5: 개인 비서 Agent

사용자:

```txt
다음 주 화요일 오후에 민수랑 회의 잡아줘.
```

Agent 흐름:

```txt
1. 연락처에서 민수 검색
2. 캘린더 빈 시간 확인
3. 회의 시간 후보 선택
4. 캘린더 이벤트 생성
5. 필요하면 메일 발송
```

구성:

```txt
Model
+ Contacts Tool
+ Calendar Tool
+ Email Tool
+ Timezone Handling
+ Approval Policy
```

이 Agent는 상태 변경이 많다.

```txt
캘린더 생성
이메일 발송
초대장 전송
```

그래서 승인과 확인 절차가 중요하다.

---

# Agent 예시 6: Multi-Agent 개발팀

복잡한 일을 여러 Agent가 나눠서 처리한다.

```txt
Product Manager Agent
  ↓ 요구사항 정리

Designer Agent
  ↓ 화면 설계

Frontend Agent
  ↓ React 구현

Backend Agent
  ↓ API 구현

Reviewer Agent
  ↓ 코드 리뷰

QA Agent
  ↓ 테스트 작성
```

이 구조는 멋있지만, 처음부터 이렇게 만들면 오히려 복잡해진다.

먼저 하나의 Orchestrator Agent로 시작하는 게 좋다.

```txt
Orchestrator Agent
  ├─ tools
  ├─ state
  ├─ approval
  └─ logs
```

그다음 일이 복잡해지면 전문 Agent를 나눈다.

---

# Agent를 만드는 방식

처음 만들 때는 이렇게 시작하는 게 좋다.

```txt
1. Agent가 맡을 역할 하나 정하기
2. Agent가 사용할 도구 3~5개만 만들기
3. 도구 이름과 설명을 명확하게 쓰기
4. Agent loop 만들기
5. 위험 도구는 승인 걸기
6. 실행 로그 남기기
7. 실패 케이스를 모아서 개선하기
```

Admin Agent MVP라면 이 정도면 된다.

```txt
Agent 역할:
배포 실패 원인을 찾아주는 Agent

도구:
- list_services
- get_failed_deploys
- get_deploy_detail
- search_related_pr
- create_incident_summary

상태:
- selectedService
- selectedDeployId
- currentIntent

승인 필요 도구:
- rollback_deploy
- restart_service
```

---

# Node로 보는 Agent Runtime 뼈대

```ts
type AgentState = {
  selectedService?: string;
  selectedDeployId?: string;
  currentIntent?: string;
  messages: any[];
};

type ToolCall = {
  name: string;
  arguments: Record<string, unknown>;
};

class AgentRuntime {
  constructor(
    private model: any,
    private tools: any[],
    private state: AgentState
  ) {}

  async run(userMessage: string) {
    this.state.messages.push({
      role: "user",
      content: userMessage,
    });

    for (let step = 0; step < 5; step++) {
      const response = await this.model.generate({
        messages: this.state.messages,
        tools: this.tools,
        state: this.state,
      });

      if (!response.toolCall) {
        this.state.messages.push({
          role: "assistant",
          content: response.text,
        });

        return response.text;
      }

      const result = await this.executeTool(response.toolCall);

      this.state.messages.push({
        role: "tool",
        name: response.toolCall.name,
        content: JSON.stringify(result),
      });
    }

    return "작업을 완료하지 못했습니다.";
  }

  private async executeTool(toolCall: ToolCall) {
    if (toolCall.name === "rollback_deploy") {
      return {
        type: "needs_approval",
        pendingToolCall: toolCall,
      };
    }

    return await callTool(toolCall);
  }
}
```

MCP가 붙으면 `callTool()` 내부가 이렇게 바뀐다.

```ts
async function callTool(toolCall: ToolCall) {
  return await mcpClient.callTool({
    name: toolCall.name,
    arguments: toolCall.arguments,
  });
}
```

시작할 때 MCP 도구 목록을 가져온다.

```ts
const toolsResult = await mcpClient.listTools();

const agent = new AgentRuntime(
  model,
  toolsResult.tools,
  {
    messages: [],
  }
);
```

---

# 요즘 Agent 구성 흐름

요즘 Agent는 대체로 이 방향으로 간다.

```txt
예전:
LLM + 프롬프트 + function calling

현재:
LLM + tools + memory + workflow + MCP + guardrails + tracing

더 복잡한 구조:
Orchestrator Agent
+ Specialist Agents
+ MCP Tool Ecosystem
+ Long-term Memory
+ Human Approval
+ Evaluation Harness
+ UI Rendering
```

---

# 자동차 비유

LLM과 Agent를 비유하면 이렇게 볼 수 있다.

```txt
LLM = 엔진
Tools = 바퀴와 팔
Memory = 내비게이션 기록
Planner = 경로 계산
Guardrails = 브레이크
Runtime = 차체
Agent = 실제로 목적지까지 움직이는 자동차
```

LLM은 강력한 엔진이지만 혼자서는 움직이지 못한다.

Agent는 그 엔진을 실제 작업 시스템 안에 얹어서, 도구를 쓰고, 상태를 기억하고, 위험 작업을 제어하면서 목적지까지 가게 만든 구조다.

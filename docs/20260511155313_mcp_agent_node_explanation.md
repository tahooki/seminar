# MCP가 Agent에서 동작하는 방식

MCP를 이해할 때는 코드를 크게 두 덩어리로 나눠서 보면 가장 쉽다.

```txt
1. MCP Server 코드
   → 도구를 등록하는 쪽
   → "나는 이런 기능을 제공해"라고 알려주는 쪽
   → 실제 DB/API/GitHub/배포 시스템을 호출하는 쪽

2. Agent 코드
   → MCP Server에 연결하는 쪽
   → tools/list로 도구 목록을 가져오는 쪽
   → LLM에게 도구 목록을 넘기는 쪽
   → LLM이 고른 도구를 tools/call로 실행하는 쪽
```

전체 구조는 이렇게 볼 수 있다.

```txt
사용자
  ↓
Agent 코드
  ↓
LLM
  ↓
MCP Client
  ↓
MCP Server
  ↓
실제 도구 / DB / API / GitHub / 배포 시스템
```

중요한 점은 **LLM이 MCP Server의 내부 코드를 직접 읽는 게 아니라는 것**이다.

LLM이 보는 것은 주로 다음 정보다.

```txt
- 도구 이름
- 도구 설명
- 입력 스키마
- 파라미터 설명
- 현재 대화 문맥
- 이전 도구 실행 결과
```

---

# 예제 시나리오

예제는 **장애 대응 Admin Agent**로 본다.

사용자가 이렇게 말한다.

```txt
어제 payment-api 배포 실패한 거 왜 그런지 봐줘.
```

Agent가 해야 할 일은 다음과 같다.

```txt
1. MCP Server에서 사용 가능한 도구 목록을 가져온다.
2. LLM에게 사용자 요청 + 도구 목록을 같이 준다.
3. LLM이 get_failed_deploys를 고른다.
4. Agent가 MCP Server의 get_failed_deploys를 호출한다.
5. 결과에 deployId가 있으면 LLM이 get_deploy_detail을 추가로 고른다.
6. Agent가 get_deploy_detail을 호출한다.
7. 최종 답변을 만든다.
```

---

# 1. MCP Server 쪽 코드

MCP Server는 도구를 제공하는 서버다.

파일 이름을 `admin-mcp-server.ts`라고 해보자.

```ts
// admin-mcp-server.ts
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";

const server = new McpServer({
  name: "admin-ops-mcp-server",
  version: "1.0.0",
});
```

여기까지는 MCP 서버 인스턴스를 만든 것이다.

이제 이 서버에 도구를 붙인다.

```ts
server.tool(
  "get_failed_deploys",
  `
지정한 날짜와 서비스명을 기준으로 실패한 배포 목록을 조회한다.

사용자가 다음처럼 말하면 이 도구를 사용한다:
- "어제 실패한 배포 찾아줘"
- "payment-api 배포 실패했어?"
- "최근 깨진 배포 보여줘"
- "배포 에러 난 거 확인해줘"

서비스명이 없으면 전체 서비스 기준으로 조회한다.
실패 원인의 상세 분석이 필요하면 이 도구로 deployId를 찾은 뒤 get_deploy_detail을 호출한다.
  `.trim(),
  {
    date: z.string().describe("조회할 날짜. YYYY-MM-DD 형식"),
    serviceName: z
      .string()
      .optional()
      .describe("서비스명. 사용자가 특정 서비스를 말하지 않으면 생략한다."),
  },
  async ({ date, serviceName }) => {
    const deploys = [
      {
        deployId: "dep_1001",
        serviceName: "payment-api",
        status: "FAILED",
        date,
        summary: "DB migration timeout",
      },
      {
        deployId: "dep_1002",
        serviceName: "admin-web",
        status: "FAILED",
        date,
        summary: "Missing environment variable",
      },
    ];

    const result = serviceName
      ? deploys.filter((deploy) => deploy.serviceName === serviceName)
      : deploys;

    return {
      content: [
        {
          type: "text",
          text: JSON.stringify(result, null, 2),
        },
      ],
    };
  }
);
```

이 도구에서 Agent가 중요하게 보는 건 함수 내부가 아니다.

Agent가 보는 건 이런 정보다.

```txt
도구 이름:
get_failed_deploys

도구 설명:
실패한 배포를 조회한다.
"어제 실패한 배포", "배포 에러" 같은 요청에 사용한다.

입력값:
date: string, required
serviceName: string, optional
```

---

# 2. 배포 상세 조회 도구

실패한 배포를 찾은 뒤에는 상세 로그를 확인해야 한다.

```ts
server.tool(
  "get_deploy_detail",
  `
특정 배포 ID의 상세 정보를 조회한다.

사용자가 다음처럼 말하면 이 도구를 사용한다:
- "왜 실패했어?"
- "상세 로그 봐줘"
- "원인 분석해줘"
- "누가 배포했어?"
- "어떤 커밋이야?"

보통 get_failed_deploys 결과에서 deployId를 얻은 뒤 이 도구를 호출한다.
  `.trim(),
  {
    deployId: z.string().describe("상세 조회할 배포 ID"),
  },
  async ({ deployId }) => {
    const details: Record<string, unknown> = {
      dep_1001: {
        deployId: "dep_1001",
        serviceName: "payment-api",
        status: "FAILED",
        startedBy: "minsu",
        commitHash: "a13f91c",
        errorCode: "DB_LOCK_TIMEOUT",
        log: `
Migration failed.
Table: orders
Reason: lock wait timeout exceeded.
Previous migration job may still be holding a lock.
        `.trim(),
        suggestion:
          "orders 테이블에 lock을 잡고 있는 이전 migration job이 남아있는지 확인하고, migration 재시도 전에 lock 상태를 정리해야 합니다.",
      },
    };

    return {
      content: [
        {
          type: "text",
          text: JSON.stringify(details[deployId] ?? null, null, 2),
        },
      ],
    };
  }
);
```

여기서 중요한 설명은 이 부분이다.

```txt
보통 get_failed_deploys 결과에서 deployId를 얻은 뒤 이 도구를 호출한다.
```

LLM은 이 설명을 보고 다음과 같이 이어서 판단할 수 있다.

```txt
사용자가 "왜 실패했어?"라고 했다.
먼저 실패한 배포를 찾아야 한다.
get_failed_deploys를 호출한다.
결과에 deployId가 있다.
이제 get_deploy_detail을 호출한다.
```

---

# 3. 위험한 실행 도구

롤백처럼 실제 운영 상태를 바꾸는 도구도 MCP Server에 둘 수 있다.

```ts
server.tool(
  "rollback_deploy",
  `
서비스를 특정 배포 버전으로 롤백한다.

이 도구는 실제 운영 상태를 변경하는 위험 작업이다.
사용자가 명확하게 "롤백해", "이전 버전으로 돌려", "복구해"라고 요청한 경우에만 사용한다.
serviceName과 deployId가 모두 확정되어야 한다.
호출 전 사용자 승인이 필요하다.
  `.trim(),
  {
    serviceName: z.string().describe("롤백할 서비스명"),
    deployId: z.string().describe("롤백 대상 배포 ID"),
  },
  async ({ serviceName, deployId }) => {
    return {
      content: [
        {
          type: "text",
          text: JSON.stringify(
            {
              ok: true,
              message: `${serviceName} rolled back to ${deployId}`,
            },
            null,
            2
          ),
        },
      ],
    };
  }
);
```

하지만 description에 “승인 필요”라고 써두는 것만으로는 부족하다.

실제 승인은 Agent 코드에서 막아야 한다.

```txt
MCP Server:
나는 rollback_deploy라는 위험 도구를 제공한다.

Agent:
이 도구는 위험하니 사용자 승인 전에는 실행하지 않는다.
```

마지막으로 서버를 stdio로 연결한다.

```ts
const transport = new StdioServerTransport();
await server.connect(transport);
```

MCP Server 전체 역할은 이렇게 정리된다.

```txt
admin-mcp-server
  ├─ get_failed_deploys
  ├─ get_deploy_detail
  └─ rollback_deploy
```

---

# 4. Agent 쪽 코드

이제 Agent 코드를 본다.

Agent는 MCP Server에 연결해서 도구 목록을 가져온다.

```ts
// agent.ts
import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { StdioClientTransport } from "@modelcontextprotocol/sdk/client/stdio.js";

const transport = new StdioClientTransport({
  command: "npx",
  args: ["tsx", "./admin-mcp-server.ts"],
});

const mcpClient = new Client({
  name: "admin-agent",
  version: "1.0.0",
});

await mcpClient.connect(transport);
```

이 코드는 이런 의미다.

```txt
Agent가 admin-mcp-server.ts를 실행한다.
stdio로 MCP Server와 연결한다.
이제 tools/list, tools/call을 할 수 있다.
```

---

# 5. Agent가 도구 목록을 가져오는 코드

```ts
const toolsResult = await mcpClient.listTools();

console.log(JSON.stringify(toolsResult.tools, null, 2));
```

대략 이런 결과가 나온다.

```json
[
  {
    "name": "get_failed_deploys",
    "description": "지정한 날짜와 서비스명을 기준으로 실패한 배포 목록을 조회한다...",
    "inputSchema": {
      "type": "object",
      "properties": {
        "date": {
          "type": "string",
          "description": "조회할 날짜. YYYY-MM-DD 형식"
        },
        "serviceName": {
          "type": "string",
          "description": "서비스명. 사용자가 특정 서비스를 말하지 않으면 생략한다."
        }
      },
      "required": ["date"]
    }
  },
  {
    "name": "get_deploy_detail",
    "description": "특정 배포 ID의 상세 정보를 조회한다...",
    "inputSchema": {
      "type": "object",
      "properties": {
        "deployId": {
          "type": "string",
          "description": "상세 조회할 배포 ID"
        }
      },
      "required": ["deployId"]
    }
  },
  {
    "name": "rollback_deploy",
    "description": "서비스를 특정 배포 버전으로 롤백한다...",
    "inputSchema": {
      "type": "object",
      "properties": {
        "serviceName": {
          "type": "string"
        },
        "deployId": {
          "type": "string"
        }
      },
      "required": ["serviceName", "deployId"]
    }
  }
]
```

이 순간 Agent는 이런 상태가 된다.

```txt
사용 가능한 행동은 다음과 같이 정리된다.

- 실패한 배포 조회 가능
- 배포 상세 조회 가능
- 롤백 가능
```

중요한 점은 Agent가 `admin-mcp-server.ts` 파일 내용을 직접 읽어서 이해하는 게 아니라는 것이다.

MCP Server에게 `tools/list`로 물어봐서 메타데이터를 받은 것이다.

---

# 6. LLM에게 도구 목록을 넘기는 코드

이제 Agent는 사용자 메시지와 도구 목록을 LLM에게 같이 보낸다.

아래 코드는 OpenAI function calling 스타일로 단순화한 예시다.

```ts
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

function toOpenAITools(mcpTools: any[]) {
  return mcpTools.map((tool) => ({
    type: "function" as const,
    name: tool.name,
    description: tool.description,
    parameters: tool.inputSchema,
  }));
}

async function askModel(userMessage: string) {
  const toolsResult = await mcpClient.listTools();

  const response = await openai.responses.create({
    model: "gpt-5.5",
    input: [
      {
        role: "system",
        content: `
너는 사내 배포 장애 대응 Agent다.
사용자의 요청을 해결하기 위해 필요한 경우 MCP 도구를 호출한다.
조회 도구는 바로 사용해도 된다.
rollback_deploy 같은 위험 도구는 사용자 승인 없이 호출하면 안 된다.
        `.trim(),
      },
      {
        role: "user",
        content: userMessage,
      },
    ],
    tools: toOpenAITools(toolsResult.tools),
  });

  return response;
}
```

LLM이 받는 정보는 이런 느낌이다.

```txt
사용자:
어제 payment-api 배포 실패한 거 왜 그런지 봐줘.

사용 가능한 도구:
1. get_failed_deploys
   - 실패한 배포 목록 조회
   - date 필요
   - serviceName optional

2. get_deploy_detail
   - deployId로 상세 로그 조회

3. rollback_deploy
   - 운영 롤백
   - 위험 작업
   - 승인 필요
```

그러면 LLM은 이렇게 판단한다.

```txt
사용자는 "어제", "payment-api", "배포 실패", "왜 그런지"라고 했다.

먼저 get_failed_deploys를 호출해야 한다.
date = 어제 날짜
serviceName = payment-api

그 결과에서 deployId를 얻은 다음 get_deploy_detail을 호출하면 된다.
```

---

# 7. LLM이 고른 도구를 MCP Server로 실행

LLM 응답 안에 tool call이 들어오면 Agent가 MCP Client로 실행한다.

```ts
async function runToolCall(toolCall: {
  name: string;
  arguments: Record<string, unknown>;
}) {
  const dangerousTools = new Set(["rollback_deploy"]);

  if (dangerousTools.has(toolCall.name)) {
    return {
      type: "needs_approval",
      message: "이 작업은 운영 상태를 변경합니다. 실행하려면 사용자 승인이 필요합니다.",
      pendingToolCall: toolCall,
    };
  }

  return await mcpClient.callTool({
    name: toolCall.name,
    arguments: toolCall.arguments,
  });
}
```

예를 들어 LLM이 이런 tool call을 냈다고 해보자.

```json
{
  "name": "get_failed_deploys",
  "arguments": {
    "date": "2026-05-09",
    "serviceName": "payment-api"
  }
}
```

Agent는 MCP 서버에 이렇게 호출한다.

```ts
const result = await mcpClient.callTool({
  name: "get_failed_deploys",
  arguments: {
    date: "2026-05-09",
    serviceName: "payment-api",
  },
});
```

MCP 서버는 실제 함수를 실행하고 결과를 반환한다.

```json
{
  "content": [
    {
      "type": "text",
      "text": "[{\"deployId\":\"dep_1001\",\"serviceName\":\"payment-api\",\"status\":\"FAILED\",\"date\":\"2026-05-09\",\"summary\":\"DB migration timeout\"}]"
    }
  ]
}
```

이 결과를 Agent가 다시 LLM에게 넣는다.

---

# 8. Agent Loop 코드

아래 코드는 “LLM → tool call → MCP 실행 → LLM에게 결과 전달 → 다음 tool call 가능” 흐름을 단순화한 Agent loop다.

```ts
type McpToolCall = {
  name: string;
  arguments: Record<string, unknown>;
};

function extractToolCalls(response: any): McpToolCall[] {
  const calls: McpToolCall[] = [];

  for (const item of response.output ?? []) {
    if (item.type === "function_call") {
      calls.push({
        name: item.name,
        arguments: JSON.parse(item.arguments ?? "{}"),
      });
    }
  }

  return calls;
}

async function runAgent(userMessage: string) {
  const toolsResult = await mcpClient.listTools();
  const openAITools = toOpenAITools(toolsResult.tools);

  const messages: any[] = [
    {
      role: "system",
      content: `
너는 사내 배포 장애 대응 Agent다.

도구 사용 규칙:
- 실패한 배포 조회는 get_failed_deploys를 사용한다.
- 실패 원인 분석은 get_deploy_detail을 사용한다.
- rollback_deploy는 사용자 승인 전에는 절대 실행하지 않는다.
- 도구 결과를 보고 필요한 경우 다음 도구를 이어서 호출한다.
      `.trim(),
    },
    {
      role: "user",
      content: userMessage,
    },
  ];

  for (let step = 0; step < 5; step++) {
    const response = await openai.responses.create({
      model: "gpt-5.5",
      input: messages,
      tools: openAITools,
    });

    const toolCalls = extractToolCalls(response);

    if (toolCalls.length === 0) {
      return response.output_text;
    }

    for (const toolCall of toolCalls) {
      const toolResult = await runToolCall(toolCall);

      messages.push({
        role: "assistant",
        content: [
          {
            type: "function_call",
            name: toolCall.name,
            arguments: JSON.stringify(toolCall.arguments),
          },
        ],
      });

      messages.push({
        role: "tool",
        name: toolCall.name,
        content: JSON.stringify(toolResult),
      });
    }
  }

  return "도구 호출이 너무 많이 이어져서 중단했습니다.";
}
```

이 코드에서 중요한 부분은 여기다.

```ts
const toolsResult = await mcpClient.listTools();
```

Agent가 작동할 때 MCP 서버에서 도구 목록을 받아온다.

그리고 여기다.

```ts
const response = await openai.responses.create({
  model: "gpt-5.5",
  input: messages,
  tools: openAITools,
});
```

LLM에게 사용자 메시지와 도구 목록을 같이 준다.

그리고 여기다.

```ts
const toolResult = await runToolCall(toolCall);
```

LLM이 고른 도구를 실제 MCP Server에 실행한다.

---

# 9. 실제 실행 흐름

사용자가 말한다.

```txt
어제 payment-api 배포 실패한 거 왜 그런지 봐줘.
```

Agent가 처음 LLM에게 보낸다.

```txt
사용자 요청:
어제 payment-api 배포 실패한 거 왜 그런지 봐줘.

도구:
- get_failed_deploys(date, serviceName?)
- get_deploy_detail(deployId)
- rollback_deploy(serviceName, deployId)
```

LLM의 첫 번째 판단:

```json
{
  "name": "get_failed_deploys",
  "arguments": {
    "date": "2026-05-09",
    "serviceName": "payment-api"
  }
}
```

Agent가 MCP Server에 호출한다.

```ts
await mcpClient.callTool({
  name: "get_failed_deploys",
  arguments: {
    date: "2026-05-09",
    serviceName: "payment-api",
  },
});
```

MCP Server 결과:

```json
[
  {
    "deployId": "dep_1001",
    "serviceName": "payment-api",
    "status": "FAILED",
    "date": "2026-05-09",
    "summary": "DB migration timeout"
  }
]
```

Agent가 이 결과를 다시 LLM에게 넣는다.

LLM의 두 번째 판단:

```json
{
  "name": "get_deploy_detail",
  "arguments": {
    "deployId": "dep_1001"
  }
}
```

Agent가 다시 MCP Server를 호출한다.

```ts
await mcpClient.callTool({
  name: "get_deploy_detail",
  arguments: {
    deployId: "dep_1001",
  },
});
```

MCP Server 결과:

```json
{
  "deployId": "dep_1001",
  "serviceName": "payment-api",
  "status": "FAILED",
  "startedBy": "minsu",
  "commitHash": "a13f91c",
  "errorCode": "DB_LOCK_TIMEOUT",
  "log": "Migration failed. Table: orders. Reason: lock wait timeout exceeded.",
  "suggestion": "orders 테이블에 lock을 잡고 있는 이전 migration job이 남아있는지 확인하세요."
}
```

최종적으로 LLM이 사용자에게 답한다.

```txt
어제 payment-api 배포 실패 원인은 DB migration timeout입니다.

상세 로그를 보면 orders 테이블 migration 중 lock wait timeout이 발생했습니다.
이전 migration job이 lock을 잡고 있었을 가능성이 큽니다.

확인 순서는 다음이 좋습니다.

1. orders 테이블 lock 상태 확인
2. 이전 migration job이 살아있는지 확인
3. lock 정리 후 migration 재실행
4. 같은 commit a13f91c 기준으로 재배포
```

---

# 10. Agent가 실제로 보는 것

Agent가 보는 건 MCP Server의 함수 내부가 아니다.

```ts
async ({ date, serviceName }) => {
  const deploys = await db.deploys.findMany(...);
  return ...
}
```

이 내부 로직은 LLM이 모른다.

LLM이 보는 건 이것이다.

```ts
server.tool(
  "get_failed_deploys",
  "지정한 날짜와 서비스명을 기준으로 실패한 배포 목록을 조회한다...",
  {
    date: z.string().describe("조회할 날짜. YYYY-MM-DD 형식"),
    serviceName: z.string().optional().describe("서비스명"),
  },
  async (...) => { ... }
);
```

정확히는 MCP Client가 `listTools()`로 아래 같은 정보를 가져오고, Agent가 그걸 LLM tools로 변환해서 넣는다.

```json
{
  "name": "get_failed_deploys",
  "description": "지정한 날짜와 서비스명을 기준으로 실패한 배포 목록을 조회한다...",
  "inputSchema": {
    "type": "object",
    "properties": {
      "date": {
        "type": "string",
        "description": "조회할 날짜. YYYY-MM-DD 형식"
      },
      "serviceName": {
        "type": "string",
        "description": "서비스명"
      }
    },
    "required": ["date"]
  }
}
```

그래서 도구 선택 품질은 여기서 갈린다.

```txt
도구 이름이 명확한가?
description에 언제 쓰는지 적혀 있는가?
inputSchema에 required/optional이 정확한가?
파라미터 description이 충분한가?
비슷한 도구끼리 역할이 겹치지 않는가?
```

---

# 11. 안 좋은 MCP 도구 설계

이런 도구는 Agent가 헷갈린다.

```ts
server.tool(
  "getData",
  "Get data",
  {
    query: z.string(),
  },
  async ({ query }) => {
    // 이것저것 다 조회
  }
);
```

LLM은 이런 걸 알 수 없다.

```txt
getData가 배포 조회인지
로그 조회인지
사용자 조회인지
장애 조회인지
언제 호출해야 하는지
query에 뭘 넣어야 하는지
```

이런 도구도 좋지 않다.

```ts
server.tool("deploy1", "deploy tool", {}, async () => {});
server.tool("deploy2", "deploy tool", {}, async () => {});
server.tool("deploy3", "deploy tool", {}, async () => {});
```

도구 이름과 설명만 보고 구분이 안 된다.

---

# 12. 좋은 MCP 도구 설계

도구의 목적이 분리되어야 한다.

```ts
server.tool(
  "list_services",
  "배포 시스템에 등록된 서비스 목록을 조회한다. 사용자가 서비스명을 모르거나 '어떤 서비스 있어?'라고 물을 때 사용한다.",
  {},
  async () => {}
);

server.tool(
  "get_failed_deploys",
  "지정한 날짜와 서비스명 기준으로 실패한 배포 목록을 조회한다. 실패한 배포, 배포 에러, 깨진 배포를 찾을 때 사용한다.",
  {
    date: z.string().describe("조회 날짜. YYYY-MM-DD"),
    serviceName: z.string().optional().describe("서비스명. 없으면 전체 조회"),
  },
  async () => {}
);

server.tool(
  "get_deploy_detail",
  "deployId 기준으로 상세 로그, 실행자, 커밋, 실패 원인을 조회한다. 실패 원인 분석이나 상세 로그 확인에 사용한다.",
  {
    deployId: z.string().describe("상세 조회할 배포 ID"),
  },
  async () => {}
);

server.tool(
  "create_incident_report",
  "장애 또는 배포 실패 내용을 공유용 보고서로 정리한다. 이미 원인과 deployId가 확인된 뒤 사용한다.",
  {
    deployId: z.string(),
    audience: z.enum(["developer", "manager", "customer"]),
  },
  async () => {}
);
```

이렇게 하면 LLM이 단계적으로 고르기 쉽다.

```txt
서비스명을 모르면 list_services
실패한 배포를 찾으려면 get_failed_deploys
상세 원인을 보려면 get_deploy_detail
공유 문서를 만들려면 create_incident_report
```

---

# 13. MCP Server와 Agent를 같이 본 그림

```txt
[사용자]
  │
  │ "어제 payment-api 배포 실패한 거 왜 그런지 봐줘"
  ↓
[Agent 코드]
  │
  │ 1. mcpClient.listTools()
  │
  ↓
[MCP Server]
  │
  │ get_failed_deploys
  │ get_deploy_detail
  │ rollback_deploy
  ↓
[Agent 코드]
  │
  │ 2. 도구 목록을 LLM에게 전달
  ↓
[LLM]
  │
  │ 3. get_failed_deploys 호출 결정
  ↓
[Agent 코드]
  │
  │ 4. mcpClient.callTool({ name: "get_failed_deploys", ... })
  ↓
[MCP Server]
  │
  │ 5. 실제 DB/API 조회
  ↓
[Agent 코드]
  │
  │ 6. 결과를 LLM에게 다시 전달
  ↓
[LLM]
  │
  │ 7. get_deploy_detail 추가 호출 결정
  ↓
[Agent 코드]
  │
  │ 8. mcpClient.callTool({ name: "get_deploy_detail", ... })
  ↓
[MCP Server]
  │
  │ 9. 상세 로그 반환
  ↓
[LLM]
  │
  │ 10. 최종 답변 생성
  ↓
[사용자]
```

---

# 14. 진짜 핵심 코드만 남기면

MCP Server 쪽:

```ts
server.tool(
  "get_failed_deploys",
  "실패한 배포 목록을 조회한다...",
  {
    date: z.string(),
    serviceName: z.string().optional(),
  },
  async ({ date, serviceName }) => {
    return {
      content: [
        {
          type: "text",
          text: JSON.stringify(await findFailedDeploys(date, serviceName)),
        },
      ],
    };
  }
);
```

Agent 쪽:

```ts
const tools = await mcpClient.listTools();

const llmResponse = await openai.responses.create({
  model: "gpt-5.5",
  input: messages,
  tools: tools.tools.map(toOpenAITool),
});

const toolCall = extractToolCall(llmResponse);

const toolResult = await mcpClient.callTool({
  name: toolCall.name,
  arguments: toolCall.arguments,
});
```

LLM이 보는 것:

```txt
get_failed_deploys:
실패한 배포 목록을 조회한다.
date 필요.
serviceName은 선택.
```

LLM이 고르는 것:

```json
{
  "name": "get_failed_deploys",
  "arguments": {
    "date": "2026-05-09",
    "serviceName": "payment-api"
  }
}
```

MCP Server가 실행하는 것:

```ts
await findFailedDeploys("2026-05-09", "payment-api");
```

---

# 한 줄 요약

**MCP Server는 “도구 카탈로그 + 실제 실행 함수”이고, Agent는 “그 카탈로그를 LLM에게 보여주고, LLM이 고른 항목을 대신 실행해주는 중개자”다.**

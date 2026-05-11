# 가드레일이란 뭘까

가드레일은 **Agent가 하면 안 되는 행동을 막거나, 위험한 행동은 확인받게 만드는 안전장치**다.

Agent는 도구를 쓸 수 있다.

```txt
파일 읽기
파일 수정
터미널 실행
DB 조회
DB 삭제
이메일 발송
배포 실행
롤백 실행
결제 처리
```

이 중에서 어떤 건 바로 해도 되고, 어떤 건 위험하다.

```txt
그냥 해도 되는 것
- 로그 조회
- 파일 읽기
- 검색
- 테스트 실행
- 요약 생성

조심해야 하는 것
- 파일 수정
- 패키지 설치
- DB update
- 이메일 발송
- Git push
- 배포 실행

반드시 막거나 승인받아야 하는 것
- 운영 DB 삭제
- 사용자 데이터 삭제
- 결제 실행
- 운영 서버 롤백
- 비밀키 출력
- 권한 없는 정보 접근
```

이걸 제어하는 것이 가드레일이다.

---

# 왜 필요한가

사용자가 이렇게 말하면 Agent는 조회 도구를 바로 써도 된다.

```txt
어제 실패한 배포 원인 찾아줘
```

실행되는 도구는 보통 조회성 도구다.

```txt
get_failed_deploys
get_deploy_detail
search_related_pr
```

그런데 사용자가 이렇게 말하면 다르다.

```txt
그냥 이전 버전으로 롤백해
```

이건 운영 상태를 바꾸는 행동이다.

Agent가 바로 실행하면 위험하다.

그래서 가드레일이 중간에서 막아야 한다.

```txt
rollback_deploy 호출 감지
  ↓
위험 도구인지 확인
  ↓
사용자 승인 요청
  ↓
승인하면 실행
  ↓
거절하면 실행하지 않음
```

---

# Runtime에서 막는 코드

가장 중요한 가드레일은 Agent Runtime에 들어간다.

```ts
const dangerousTools = new Set([
  "rollback_deploy",
  "restart_service",
  "delete_user",
  "send_email",
  "update_database",
  "charge_payment",
]);

async function executeTool(toolCall) {
  if (dangerousTools.has(toolCall.name)) {
    return {
      type: "needs_approval",
      message: "이 작업은 실제 시스템 상태를 변경합니다. 실행할까요?",
      pendingToolCall: toolCall,
    };
  }

  return await callTool(toolCall);
}
```

LLM이 `rollback_deploy`를 고르더라도 Runtime이 중간에서 막는다.

```txt
LLM:
rollback_deploy 호출해야겠다.

Agent Runtime:
잠깐. 이건 위험 도구다.
사용자 승인 전에는 실행하지 않는다.
```

---

# 가드레일의 여러 층

가드레일은 보통 한 군데만 두지 않고 여러 층으로 둔다.

```txt
1. 프롬프트 가드레일
2. 도구 실행 가드레일
3. 권한 가드레일
4. 데이터 가드레일
5. 출력 가드레일
6. 비용 / 반복 제한
7. Human-in-the-loop
```

---

# 1. 프롬프트 가드레일

System prompt에 규칙을 적는 방식이다.

```txt
운영 상태를 변경하는 도구는 사용자 승인 없이 실행하지 마라.
비밀키나 토큰은 출력하지 마라.
불확실한 내용은 추측이라고 표시해라.
```

프롬프트 가드레일은 필요하지만 이것만 믿으면 안 된다.

LLM이 실수할 수 있기 때문이다.

```txt
프롬프트 가드레일
→ 말로 조심시키는 것

Runtime 가드레일
→ 실제 실행을 막는 것
```

---

# 2. 도구 실행 가드레일

도구 실행 가드레일은 실제 tool call 직전에 검사한다.

```ts
if (toolCall.name === "rollback_deploy") {
  return requireApproval(toolCall);
}
```

이 방식은 LLM의 판단과 별개로 작동한다.

```txt
LLM이 위험 도구를 선택해도
Runtime이 실행 전에 막는다.
```

도구 실행 흐름은 이렇게 잡는 것이 좋다.

```txt
사용자 요청
  ↓
LLM 판단
  ↓
tool call 생성
  ↓
Guardrail 검사
  ├─ 허용 → tool 실행
  ├─ 승인 필요 → 사용자에게 확인
  └─ 차단 → 실행하지 않음
  ↓
결과를 LLM에게 전달
  ↓
최종 답변
```

---

# 3. 권한 가드레일

사용자마다 쓸 수 있는 도구를 제한하는 방식이다.

```ts
const rolePermissions = {
  viewer: ["get_failed_deploys", "get_deploy_detail"],
  developer: [
    "get_failed_deploys",
    "get_deploy_detail",
    "restart_service",
  ],
  admin: [
    "get_failed_deploys",
    "get_deploy_detail",
    "restart_service",
    "rollback_deploy",
  ],
};

function canUseTool(userRole, toolName) {
  return rolePermissions[userRole]?.includes(toolName);
}
```

예를 들어 viewer는 조회만 가능하게 한다.

```txt
viewer
  → 조회 가능
  → 재시작 불가
  → 롤백 불가

developer
  → 조회 가능
  → 일부 재시작 가능
  → 롤백은 승인 필요

admin
  → 롤백 가능
  → 그래도 승인 필요
```

---

# 4. 데이터 가드레일

민감한 정보를 Agent가 읽거나 출력하지 못하게 하는 장치다.

예를 들어 로그에 이런 값이 있을 수 있다.

```txt
DATABASE_URL=postgres://admin:password@...
OPENAI_API_KEY=sk-...
JWT_SECRET=...
```

Agent가 이걸 그대로 보여주면 안 된다.

도구 결과를 LLM에게 넘기기 전에 마스킹할 수 있다.

```ts
function redactSecrets(text: string) {
  return text
    .replace(/sk-[a-zA-Z0-9_-]+/g, "sk-***")
    .replace(/DATABASE_URL=.*/g, "DATABASE_URL=***")
    .replace(/JWT_SECRET=.*/g, "JWT_SECRET=***");
}
```

도구 결과 처리 흐름은 이렇게 된다.

```txt
로그 조회
  ↓
secret masking
  ↓
LLM에게 전달
  ↓
최종 답변 생성
```

---

# 5. 출력 가드레일

Agent가 사용자에게 내보내는 최종 답변도 검사할 수 있다.

검사할 수 있는 항목은 예를 들면 다음과 같다.

```txt
비밀키 포함 여부
개인정보 포함 여부
위험 명령어 포함 여부
확정적으로 말하면 안 되는 추측성 문장
```

코드로는 이런 식이다.

```ts
function validateFinalAnswer(answer: string) {
  if (answer.includes("sk-")) {
    throw new Error("Secret key detected in final answer");
  }

  return answer;
}
```

출력 가드레일은 최종 응답 직전에 작동한다.

```txt
LLM 답변 생성
  ↓
출력 검사
  ├─ 안전함 → 사용자에게 전달
  └─ 문제 있음 → 수정하거나 차단
```

---

# 6. 비용 / 반복 제한

Agent는 도구를 반복 호출할 수 있어서 무한 루프에 빠질 수 있다.

그래서 step 제한이 필요하다.

```ts
for (let step = 0; step < 5; step++) {
  const response = await model.generate(...);

  if (!response.toolCall) {
    return response.text;
  }

  await executeTool(response.toolCall);
}

return "도구 호출이 너무 많이 이어져서 중단했습니다.";
```

이것도 가드레일이다.

```txt
무한 tool call 방지
비용 폭주 방지
같은 도구 반복 호출 방지
너무 오래 걸리는 작업 중단
```

---

# 7. Human-in-the-loop

위험한 작업은 사람이 중간에서 확인하게 만든다.

```txt
Agent:
rollback_deploy를 실행하려고 합니다.

대상 서비스: payment-api
대상 배포 ID: dep_1001
작업 영향: 운영 버전 변경

실행할까요?
```

사용자가 승인하면 실행한다.

```ts
async function approveAndRun(pendingToolCall) {
  return await callTool(pendingToolCall);
}
```

승인 없이 실행하지 않는 것이 핵심이다.

---

# Admin Copilot에서의 가드레일

Admin Copilot에서는 가드레일이 거의 필수다.

조회성 도구는 바로 실행할 수 있다.

```txt
조회성 도구
- list_services
- get_failed_deploys
- get_deploy_detail
- search_related_pr
→ 바로 실행 가능
```

변경성 도구는 승인 필요로 둔다.

```txt
변경성 도구
- restart_service
- rollback_deploy
- approve_deploy
- update_config
→ 승인 필요
```

매우 위험한 도구는 기본 차단한다.

```txt
위험 도구
- delete_database
- rotate_secret
- delete_user_data
→ 기본 차단 또는 관리자 승인 필요
```

정책을 코드로 두면 이런 느낌이다.

```ts
const toolPolicies = {
  list_services: {
    risk: "low",
    approvalRequired: false,
  },
  get_failed_deploys: {
    risk: "low",
    approvalRequired: false,
  },
  restart_service: {
    risk: "medium",
    approvalRequired: true,
  },
  rollback_deploy: {
    risk: "high",
    approvalRequired: true,
  },
  delete_database: {
    risk: "blocked",
    approvalRequired: true,
  },
};

function checkToolPolicy(toolName: string) {
  const policy = toolPolicies[toolName];

  if (!policy) {
    return {
      allowed: false,
      reason: "등록되지 않은 도구입니다.",
    };
  }

  if (policy.risk === "blocked") {
    return {
      allowed: false,
      reason: "이 도구는 Agent가 실행할 수 없습니다.",
    };
  }

  if (policy.approvalRequired) {
    return {
      allowed: false,
      reason: "사용자 승인이 필요합니다.",
      needsApproval: true,
    };
  }

  return {
    allowed: true,
  };
}
```

---

# Skill, MCP, Guardrail의 관계

가드레일은 Skill이나 MCP와도 같이 엮인다.

```txt
Skill
→ 어떻게 작업해야 하는지 알려줌
→ 예: 롤백은 승인 없이 하지 마라

MCP
→ 실제 도구를 제공함
→ 예: rollback_deploy

Guardrail
→ 그 도구를 실행해도 되는지 막음
→ 예: rollback_deploy는 승인 전 차단
```

중요한 점은 다음과 같다.

```txt
Skill에 "위험 작업은 하지 마"라고 써두는 것만으로는 부족하다.
MCP 도구 description에 "승인 필요"라고 써두는 것만으로도 부족하다.
진짜 실행 차단은 Agent Runtime 코드에서 해야 한다.
```

전체 구조로 보면 이렇게 된다.

```txt
사용자 요청
  ↓
LLM 판단
  ↓
Skill 지침 참고
  ↓
MCP / Tool call 생성
  ↓
Guardrail 정책 검사
  ├─ 허용 → MCP 도구 실행
  ├─ 승인 필요 → 사용자 확인 후 실행
  └─ 차단 → 실행하지 않음
  ↓
도구 결과를 LLM에게 전달
  ↓
최종 답변
```

한 줄로 말하면:

> 가드레일은 Agent가 도구를 고르는 판단과 실제 실행 사이에 놓이는 안전 장치이며, 위험한 행동은 Runtime 단계에서 확실히 막아야 한다.

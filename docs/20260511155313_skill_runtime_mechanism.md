# Skill은 어떻게 동작할까

Skill은 Agent에게 특정 작업을 잘 수행하게 만드는 **파일 기반 작업 패키지**다.

MCP가 외부 도구를 연결하는 방식이라면, Skill은 Agent의 작업 방식과 결과물 품질을 안정화하는 방식이다.

```txt
MCP
  → 외부 도구 / DB / API / GitHub / Figma를 연결한다.

Skill
  → 특정 작업을 어떤 순서와 기준으로 해야 하는지 알려준다.
```

Skill은 스스로 실행되는 존재가 아니다.

```txt
Skill
= 폴더 + SKILL.md + 참고자료 + 템플릿 + 선택적 스크립트

Agent Runtime
= Skill을 찾고
= 필요한 Skill을 고르고
= SKILL.md를 읽고
= LLM 컨텍스트에 넣고
= 필요하면 Skill 안의 스크립트나 템플릿을 사용하게 하는 쪽
```

즉, **Skill을 읽게 만드는 규칙과 방식은 Agent 내부 코드, 정확히는 Agent Runtime / Host 쪽 코드에 들어있다.**

---

# Skill 기본 구조

예를 들어 장애 분석 Skill은 이런 폴더 구조를 가질 수 있다.

```txt
skills/
  incident-analysis/
    SKILL.md
    templates/
      incident-report.md
    scripts/
      extract-error-lines.js
    references/
      severity-policy.md
```

핵심 파일은 `SKILL.md`다.

```md
---
name: incident-analysis
description: Use this skill when analyzing production incidents, failed deployments, logs, root causes, rollback decisions, or incident reports.
---

# Incident Analysis Skill

When analyzing an incident:

1. Identify affected service.
2. Identify time window.
3. Collect failed deploys.
4. Read logs.
5. Check related PRs.
6. Separate facts from assumptions.
7. Summarize root cause.
8. Suggest next actions.

Never execute rollback without explicit user approval.
```

이 파일에서 Agent가 먼저 보는 것은 보통 전체 본문이 아니라 metadata다.

```txt
name: incident-analysis

description:
Use this skill when analyzing production incidents, failed deployments, logs, root causes, rollback decisions, or incident reports.
```

Agent는 이 description을 보고 사용자 요청과 맞는 Skill인지 판단한다.

---

# Skill 동작 흐름

Skill은 보통 이런 방식으로 동작한다.

```txt
1. Agent Runtime이 skills 폴더를 스캔한다.
2. 각 Skill의 SKILL.md frontmatter를 읽는다.
3. name, description, path 정도만 먼저 모은다.
4. 사용자 요청이 들어온다.
5. LLM이 Skill 목록을 보고 관련 Skill을 고른다.
6. Agent Runtime이 선택된 Skill의 SKILL.md 전체를 읽는다.
7. 읽은 Skill 내용을 LLM 컨텍스트에 넣는다.
8. LLM이 Skill 지침을 따라 작업한다.
9. 필요하면 templates, references, scripts를 추가로 사용한다.
```

짧게 표현하면 이렇다.

```txt
Skill 목록만 먼저 봄
  ↓
사용자 요청과 맞는 Skill 선택
  ↓
선택된 Skill의 SKILL.md 전체 읽기
  ↓
LLM 컨텍스트에 넣기
  ↓
Skill 지침대로 작업 수행
```

이 방식은 모든 Skill을 처음부터 전부 읽지 않고, 필요한 Skill만 나중에 자세히 읽는 방식이다.

---

# Agent 내부에는 어떤 코드가 들어가나

Agent Runtime에는 보통 이런 기능이 들어간다.

```txt
1. Skill discovery
   skills 폴더를 스캔한다.

2. Metadata parsing
   각 SKILL.md의 name, description을 읽는다.

3. Skill selection
   사용자 요청과 skill description을 보고 선택하게 한다.

4. Skill loading
   선택된 Skill의 전체 SKILL.md를 읽는다.

5. Resource loading
   필요하면 references, templates, assets를 읽는다.

6. Script execution
   필요하면 scripts 안의 코드를 실행한다.

7. Context injection
   읽은 Skill 지침을 LLM 메시지에 넣는다.
```

즉 Skill 자체가 알아서 실행되는 것이 아니라, Agent Runtime이 Skill을 발견하고 읽어서 LLM에게 전달한다.

---

# Skill metadata 읽기 코드

예를 들어 Node.js Agent Runtime에서 Skill metadata를 읽는 코드는 이런 느낌이다.

```ts
import fs from "node:fs/promises";
import path from "node:path";

type SkillMeta = {
  name: string;
  description: string;
  path: string;
};

function parseFrontmatter(raw: string) {
  const match = raw.match(/^---\n([\s\S]*?)\n---/);

  if (!match) {
    return {} as Record<string, string>;
  }

  const lines = match[1].split("\n");
  const result: Record<string, string> = {};

  for (const line of lines) {
    const index = line.indexOf(":");
    if (index === -1) continue;

    const key = line.slice(0, index).trim();
    const value = line.slice(index + 1).trim();
    result[key] = value;
  }

  return result;
}

async function loadSkillMetadata(skillDir: string): Promise<SkillMeta> {
  const skillPath = path.join(skillDir, "SKILL.md");
  const raw = await fs.readFile(skillPath, "utf-8");
  const frontmatter = parseFrontmatter(raw);

  return {
    name: frontmatter.name,
    description: frontmatter.description,
    path: skillPath,
  };
}
```

이 코드는 `SKILL.md`의 전체 내용을 LLM에게 넣는 것이 아니라, 먼저 `name`, `description`, `path` 정도만 가져온다.

결과는 이런 형태가 된다.

```json
[
  {
    "name": "incident-analysis",
    "description": "Use this skill when analyzing production incidents, failed deployments, logs, root causes, rollback decisions, or incident reports.",
    "path": "skills/incident-analysis/SKILL.md"
  },
  {
    "name": "frontend-polish",
    "description": "Use this skill when improving UI hierarchy, layout, spacing, interaction clarity, and frontend polish.",
    "path": "skills/frontend-polish/SKILL.md"
  }
]
```

---

# Skill 목록을 LLM에게 보여주는 코드

Agent는 Skill 목록을 LLM에게 이런 식으로 제공할 수 있다.

```ts
const skillListText = skills
  .map((skill) => `- ${skill.name}: ${skill.description}`)
  .join("\n");

const systemPrompt = `
You are an agent.

Available skills:
${skillListText}

If a user task matches a skill, select that skill before doing the task.
`;
```

LLM이 실제로 받는 정보는 이런 느낌이다.

```txt
Available skills:
- incident-analysis: Use this skill when analyzing production incidents, failed deployments, logs, root causes, rollback decisions, or incident reports.
- frontend-polish: Use this skill when improving UI hierarchy, layout, spacing, interaction clarity, and frontend polish.
- internal-slide-deck: Use this skill when creating internal training slide decks and presenter scripts.
```

사용자가 이렇게 말한다.

```txt
어제 payment-api 배포 실패한 거 원인 분석해서 보고서로 정리해줘
```

LLM은 Skill 목록을 보고 이렇게 판단할 수 있다.

```txt
이 요청은 failed deployment, root cause, incident report와 관련 있다.
incident-analysis Skill을 사용해야 한다.
```

---

# 선택된 Skill 전체를 읽는 코드

LLM이 `incident-analysis` Skill이 맞다고 판단하면, Agent Runtime이 그때 전체 `SKILL.md`를 읽는다.

```ts
async function loadFullSkill(skillName: string, skills: SkillMeta[]) {
  const skill = skills.find((s) => s.name === skillName);

  if (!skill) {
    throw new Error(`Skill not found: ${skillName}`);
  }

  const raw = await fs.readFile(skill.path, "utf-8");
  return raw;
}
```

읽은 Skill 본문은 다음 LLM 호출에 들어간다.

```ts
const skillBody = await loadFullSkill("incident-analysis", skills);

messages.push({
  role: "system",
  content: `
Use the following skill instructions for this task:

${skillBody}
  `.trim(),
});
```

이제 LLM은 아래 지침을 실제 작업에 반영한다.

```txt
1. 영향 서비스 확인
2. 시간대 확인
3. 실패 배포 조회
4. 로그 확인
5. 관련 PR 확인
6. 사실과 가설 분리
7. 원인 요약
8. 후속 조치 제안
9. 보고서 작성
```

---

# 전체 Agent 흐름 코드

아주 단순화하면 Agent 내부에는 이런 코드가 들어간다.

```ts
type SkillMeta = {
  name: string;
  description: string;
  path: string;
};

async function runAgent(userMessage: string) {
  const skillMetas = await scanSkills("./skills");

  const selectedSkillName = await askModelToSelectSkill({
    userMessage,
    skills: skillMetas,
  });

  let skillInstructions = "";

  if (selectedSkillName) {
    skillInstructions = await loadFullSkill(selectedSkillName, skillMetas);
  }

  const response = await model.generate({
    messages: [
      {
        role: "system",
        content: `
You are an agent.

${skillInstructions ? `Follow this skill:\n${skillInstructions}` : ""}
        `.trim(),
      },
      {
        role: "user",
        content: userMessage,
      },
    ],
    tools,
  });

  return response;
}
```

여기서 역할을 나누면 이렇다.

```txt
Skill 선택 판단
= LLM이 함

Skill 파일 읽기
= Agent Runtime 코드가 함

Skill 지침 적용
= LLM 컨텍스트에 넣어서 적용됨

스크립트 실행
= Agent Runtime의 tool / terminal / file 권한으로 실행됨
```

---

# Skill은 자동 실행 코드가 아니다

중요한 점은 Skill 자체가 실행 파일이 아니라는 것이다.

```txt
SKILL.md
  → 실행 파일이 아님
  → Agent가 읽는 지침서

scripts/*.js
  → 실행 가능하지만
  → Agent Runtime이 허용하고 호출해야 실행됨
```

예를 들어 Skill 안에 이런 문장이 있다고 하자.

```md
When logs are large, run scripts/extract-error-lines.js before summarizing.
```

그러면 LLM은 이렇게 판단할 수 있다.

```txt
로그가 크다.
Skill에 extract-error-lines.js를 먼저 실행하라고 되어 있다.
스크립트를 실행해야 한다.
```

하지만 실제 실행은 Runtime이 한다.

```ts
import { execa } from "execa";
import path from "node:path";

async function runSkillScript(
  skillName: string,
  scriptName: string,
  args: string[]
) {
  const scriptPath = path.join("skills", skillName, "scripts", scriptName);

  return await execa("node", [scriptPath, ...args]);
}
```

실행 권한이 없는 Agent라면 Skill 안에 script가 있어도 실행할 수 없다.

그래서 Skill은 “능력을 새로 부여한다”기보다, **이미 Agent가 가진 읽기 / 쓰기 / 터미널 / 도구 능력을 더 잘 쓰게 만드는 지침 패키지**에 가깝다.

---

# Skill과 MCP의 차이

MCP와 Skill은 헷갈리기 쉽지만 역할이 다르다.

```txt
MCP
- Agent 외부에 서버가 있음
- tools/list로 도구 목록을 받음
- tools/call로 실제 기능 실행
- 외부 API, DB, GitHub, Figma 같은 걸 연결

Skill
- Agent가 접근 가능한 폴더에 있음
- name / description을 먼저 읽음
- 필요할 때 SKILL.md 전체를 읽음
- LLM의 작업 방식과 출력 품질을 바꿈
- 필요하면 포함된 script / template / reference를 사용
```

비유하면 이렇다.

```txt
MCP = 손 / 도구 연결
Skill = 작업 매뉴얼 / 숙련자의 노트
```

예를 들어 장애 분석 Agent라면:

```txt
Skill:
장애 분석은 어떤 순서로 해야 하는지 알려줌

MCP:
실제 배포 이력, 로그, GitHub PR을 조회해줌
```

둘은 같이 쓸 수 있다.

```txt
Agent
  ├─ Skill: incident-analysis
  │   └─ 장애 분석 절차와 보고서 형식 제공
  │
  ├─ MCP tools
  │   ├─ get_failed_deploys
  │   ├─ get_deploy_detail
  │   └─ search_related_pr
  │
  └─ LLM
      └─ Skill 지침을 따라 MCP 도구를 선택하고 결과를 요약
```

---

# Skill과 AGENTS.md의 차이

`AGENTS.md`는 보통 프로젝트 전체 규칙이다.

```txt
AGENTS.md
- 이 repo에서는 pnpm을 써라.
- 테스트는 npm test로 돌려라.
- 컴포넌트는 src/components에 둬라.
- Tailwind를 쓰지 말아라.
- PR 설명은 이런 형식으로 써라.
```

Skill은 특정 작업용이다.

```txt
Skill
- Figma를 React로 변환하는 방법
- 장애 분석 보고서 작성법
- PPT 생성 방식
- 테스트 코드 작성 방식
- API 문서화 방식
```

둘을 같이 쓰면 이렇게 된다.

```txt
AGENTS.md
  → 이 프로젝트에서 항상 지켜야 할 기본 규칙

skills/incident-analysis/SKILL.md
  → 장애 분석 작업을 할 때 따를 절차

skills/frontend-polish/SKILL.md
  → UI 개선 작업을 할 때 따를 절차

skills/create-test/SKILL.md
  → 테스트 작성 작업을 할 때 따를 절차
```

Agent는 작업할 때 이렇게 섞어서 쓴다.

```txt
프로젝트 기본 규칙은 AGENTS.md에서 읽고,
현재 작업 방식은 관련 Skill에서 읽는다.
```

---

# Skill이 Agent를 바꾸는 방식

Skill이 없으면 Agent는 이런 식으로 답할 수 있다.

```txt
장애 원인은 DB migration timeout으로 보입니다.
로그를 확인하고 재배포하세요.
```

Skill이 있으면 정해진 방식으로 더 안정적으로 정리할 수 있다.

```txt
1. 확인된 사실
- payment-api 배포 dep_1001 실패
- orders 테이블 migration 중 lock wait timeout 발생

2. 원인 후보
- 이전 migration job이 lock을 잡고 있었을 가능성

3. 추가 확인 필요
- DB lock 상태
- 이전 job 생존 여부
- 같은 시간대 배포 / 쿼리 증가 여부

4. 권장 조치
- lock 점유 세션 확인
- migration job 정리
- 재시도 전 영향 범위 확인

5. 보고서 초안
...
```

Skill은 Agent에게 결과물의 모양과 작업 순서를 고정시켜준다.

---

# 좋은 Skill description

Skill 선택 품질은 description에 크게 좌우된다.

안 좋은 예:

```md
---
name: incident-analysis
description: Analyze stuff.
---
```

이렇게 쓰면 LLM이 언제 이 Skill을 써야 하는지 알기 어렵다.

좋은 예:

```md
---
name: incident-analysis
description: Use this skill when the user asks to investigate production incidents, failed deployments, error logs, outage root causes, rollback decisions, or incident reports.
---
```

이렇게 쓰면 사용자 요청과 Skill이 잘 매칭된다.

```txt
사용자: 배포 실패 원인 분석해줘
→ incident-analysis Skill 선택

사용자: UI가 너무 기능 덤프 같아, UX 좋게 정리해줘
→ frontend-polish Skill 선택

사용자: 내부 교육용 슬라이드 만들어줘
→ internal-slide-deck Skill 선택
```

---

# 좋은 Skill 구조

Skill은 작고 반복 가능한 작업 단위가 좋다.

나쁜 Skill:

```txt
frontend-master-skill
- React도 함
- 디자인도 함
- 테스트도 함
- API도 함
- 문서도 함
- 배포도 함
```

좋은 Skill:

```txt
frontend-polish
figma-to-react
write-component-tests
refactor-angular-standalone
create-slide-deck
incident-analysis
```

Skill 하나는 “하나의 반복 작업”에 집중하는 편이 좋다.

---

# 정리

Skill Runtime의 핵심은 역할 분리다.

**Skill을 읽는 규칙과 방식은 Agent 내부 코드, 즉 Agent Runtime / Host 쪽에 들어간다.**

역할을 나누면 다음과 같다.

```txt
LLM:
작업과 Skill description을 비교해 적절한 Skill을 선택한다.

Agent Runtime:
선택된 skills/incident-analysis/SKILL.md를 읽어 다음 LLM 호출에 넣는다.

LLM:
주입된 Skill 지침을 따라 작업을 수행한다.
```

Skill은 스스로 실행되지 않는다.

Agent Runtime이 Skill을 발견하고, metadata를 읽고, LLM이 선택하게 하고, 선택된 Skill을 컨텍스트에 넣어준다.

한 줄로 말하면:

> Skill은 Agent가 필요할 때 꺼내 읽는 작업 매뉴얼이고, 그 매뉴얼을 찾고 읽고 적용하게 만드는 로직은 Agent Runtime 안에 들어있다.

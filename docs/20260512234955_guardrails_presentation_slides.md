# Guardrails - 발표 슬라이드 구성안

> 기준 문서: `docs/20260511155313_agent_guardrails_explanation.md`
> 톤: 꼬마 로봇 가이드 + 크레용 스케치 인포그래픽
> 목적: Guardrails를 개념, 정책, Runtime 코드, 승인 흐름 순서로 설명한다.

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
proper nouns and abbreviations in English: Agent, LLM, Runtime, Tool, DB, API,
Guardrails, MCP, Skill.
```

### 코드 슬라이드 사용 원칙

코드가 들어가는 슬라이드는 이미지 생성 AI가 긴 코드를 정확히 렌더링하기 어렵다. 이미지는 "코드 카드가 있는 구도"로 만들고, 실제 코드는 PPT/디자인 툴에서 텍스트 레이어로 얹는 것을 추천한다.

---

# 슬라이드 구성

---

## 슬라이드 0 - 표지

### 화면 문구

- 제목: **Guardrails**
- 부제: **Agent가 위험한 행동을 하기 전에 멈추는 법**
- 작은 문구: **정책 + 승인 + 차단**

### 장면 구성

발표를 여는 느낌으로, 로봇 진행자가 안전 게이트 앞에서 청중을 맞이한다. 뒤에는 Tool, Runtime, Approval 카드가 간단히 놓여 있다.

### 이미지 프롬프트

```txt
Opening cover slide for a technical seminar. Center: cute white-and-mint AI
robot presenter welcoming the audience beside a friendly safety gate and traffic
light. Around it are three simple cards: "정책", "승인", "차단".

Large Korean title at top: "Guardrails".
Subtitle: "Agent가 위험한 행동을 하기 전에 멈추는 법".
Small bottom label: "정책 + 승인 + 차단".

Warm cream paper background, pastel crayon colors, spacious opening-slide
composition, clear safety theme, not scary.
```

---

## 슬라이드 1 - 가드레일이란 무엇인가

### 화면 문구

- **하면 안 되는 행동을 막는다**
- **위험한 행동은 확인받는다**

### 장면 구성

로봇이 Tool 버튼을 누르려는 순간, 부드러운 안전 레일이 중간에서 멈춰 세운다.

### 발표 메모

가드레일은 Agent가 도구를 쓰기 전에 실행해도 되는지 판단하는 안전장치다. 특히 실제 시스템 상태를 바꾸는 작업에서 중요하다.

### 이미지 프롬프트

```txt
Robot reaching toward a big button labeled "Tool 실행". A soft crayon guardrail
stands between the robot and the button. Two labels: "차단" and "확인".

Top headline: "가드레일 = 실행 전 안전장치".
Add small side note: "위험하면 멈춘다".
Clean layout, friendly safety mood.
```

---

## 슬라이드 2 - 위험도에 따라 실행 정책이 달라진다

### 화면 문구

- **조회: 바로 실행**
- **변경: 승인 필요**
- **위험: 차단**

### 장면 구성

초록, 노랑, 빨강 세 갈래 길. 조회 도구는 초록길, 롤백은 노랑길, 삭제는 빨강 차단 표지판으로 표현한다.

### 발표 메모

모든 도구를 같은 방식으로 다루면 안 된다. 로그 조회와 운영 DB 삭제는 완전히 다른 위험도를 가진다.

### 이미지 프롬프트

```txt
Three-path road diagram. Green path labeled "조회: 바로 실행" with magnifier.
Yellow path labeled "변경: 승인 필요" with approval hand. Red path labeled
"위험: 차단" with stop sign.

Robot stands at the fork, holding a checklist. Top headline: "도구마다 정책이 다르다".
```

---

## 슬라이드 3 - 코드로 보면: 도구 정책 테이블

### 화면 문구

- **Tool마다 risk를 둔다**
- **Runtime이 정책을 읽는다**

### 슬라이드에 얹을 코드

```ts
const toolPolicies = {
  get_failed_deploys: {
    risk: "low",
    approvalRequired: false,
  },
  rollback_deploy: {
    risk: "high",
    approvalRequired: true,
  },
  delete_database: {
    risk: "blocked",
    approvalRequired: false,
  },
};
```

### 발표 메모

가드레일은 감으로 막는 것이 아니라 정책으로 관리하는 편이 좋다. 도구 이름별로 위험도와 승인 필요 여부를 명시한다.

### 이미지 프롬프트

```txt
Code-focused slide. Right side: large cream code card titled "toolPolicies".
Use faint code placeholders and leave room for exact TypeScript overlay.

Left side: three policy cards stacked vertically: "low", "high", "blocked".
Robot connects cards to the code card with crayon arrows.

Top headline: "코드로는 정책 테이블에서 시작한다".
```

---

## 슬라이드 4 - 코드로 보면: Runtime이 실행 직전에 막는다

### 화면 문구

- **LLM이 골라도**
- **Runtime이 다시 검사한다**

### 슬라이드에 얹을 코드

```ts
async function executeTool(toolCall) {
  const policy = toolPolicies[toolCall.name];

  if (!policy || policy.risk === "blocked") {
    return {
      allowed: false,
      reason: "blocked or unknown tool",
    };
  }

  if (policy.approvalRequired) {
    return {
      type: "needs_approval",
      pendingToolCall: toolCall,
    };
  }

  return await callTool(toolCall);
}
```

### 발표 메모

중요한 점은 LLM의 판단과 실제 실행 사이에 Runtime 검사가 한 번 더 있다는 것이다. 프롬프트 지시만으로는 충분하지 않다.

### 이미지 프롬프트

```txt
Runtime checkpoint diagram. Flow: "LLM tool call" -> "Runtime 검사" -> three
branches: "실행", "승인 요청", "차단".

Large code card on the right titled "executeTool". Leave room for code overlay.
Robot points at the checkpoint labeled "여기서 막는다".
```

---

## 슬라이드 5 - 가드레일은 여러 층으로 둔다

### 화면 문구

- **프롬프트**
- **도구 실행**
- **권한**
- **데이터와 출력**
- **비용과 반복**

### 장면 구성

성처럼 겹겹이 둘러싼 보호막. 중심에는 Agent가 있고, 바깥에 여러 방어층이 있다.

### 발표 메모

가드레일은 한 군데만 두지 않는다. 말로 조심시키는 프롬프트 가드레일과 실제 실행을 막는 Runtime 가드레일은 역할이 다르다.

### 이미지 프롬프트

```txt
Layered shield diagram around a robot. Five rings labeled "프롬프트",
"도구 실행", "권한", "데이터/출력", "비용/반복".

Top headline: "안전장치는 겹겹이 둔다".
Use soft shield shapes, pastel colors, clean spacing.
```

---

## 슬라이드 6 - Human-in-the-loop

### 화면 문구

- **위험 작업은 사람이 확인**
- **승인 전에는 실행하지 않음**

### 장면 구성

로봇이 롤백 요청서를 들고 사람의 승인 도장을 기다린다.

### 발표 메모

롤백, 배포, 결제, 삭제 같은 작업은 Agent가 자동으로 실행하면 안 된다. 사람이 맥락을 확인하고 승인해야 한다.

### 이미지 프롬프트

```txt
Robot holding a request form labeled "rollback_deploy". A large approval stamp
hovers above the form, labeled "승인 필요".

Two buttons drawn as cards: "승인하면 실행", "거절하면 중단".
Top headline: "위험 작업은 사람에게 묻는다".
```

---

## 슬라이드 7 - Skill, MCP, Guardrails의 관계

### 화면 문구

- **Skill: 어떻게 할지**
- **MCP: 무엇을 실행할지**
- **Guardrails: 실행해도 되는지**

### 장면 구성

세 개의 카드가 Agent 앞에 놓인다. 매뉴얼, 플러그, 방패 아이콘으로 구분한다.

### 발표 메모

Skill은 작업 방식을 알려주고, MCP는 실제 도구를 제공한다. Guardrails는 그 도구를 실행해도 되는지 마지막으로 판단한다.

### 이미지 프롬프트

```txt
Three-card comparison. Card 1: manual icon labeled "Skill: 방법".
Card 2: plug icon labeled "MCP: 도구".
Card 3: shield icon labeled "Guardrails: 안전".

Robot stands behind the cards with a crayon pointer. Top headline:
"역할이 다르다".
```

---

## 슬라이드 8 - 한 문장 정리

### 화면 문구

**가드레일은 Agent의 판단과 실제 실행 사이에 놓이는 Runtime 안전장치다.**

### 장면 구성

LLM과 Tool 사이에 Runtime 검문소가 있고, 로봇이 체크리스트를 들고 서 있다.

### 이미지 프롬프트

```txt
Final summary slide. Flow: "LLM 판단" -> "Runtime 검사" -> "Tool 실행".
Runtime checkpoint is emphasized with a soft shield icon.

Large Korean text: "판단과 실행 사이에서 막는다".
Small subtitle: "Guardrails = Runtime 안전장치".
Robot smiles and holds a checklist.
```

---

## 슬라이드 9 - 마무리

### 화면 문구

- **위험한 실행은 Runtime에서 멈춘다**
- **Q&A**

### 장면 구성

로봇이 안전 게이트를 부드럽게 닫고, 옆에는 질문 말풍선과 작은 체크리스트가 놓여 있다.

### 이미지 프롬프트

```txt
Closing slide for a technical seminar about Guardrails. Cute white-and-mint AI
robot gently closes a friendly safety gate, with a small checklist and two
question speech bubbles nearby.

Large Korean closing text: "위험한 실행은 Runtime에서 멈춘다".
Bottom text: "Q&A".

Warm cream paper background, pastel crayon illustration, calm conclusion mood,
clean whitespace, not crowded.
```

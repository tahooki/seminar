# Skill - 발표 슬라이드 구성안

> 기준 문서: `docs/20260511155313_skill_runtime_mechanism.md`
> 톤: 꼬마 로봇 가이드 + 크레용 스케치 인포그래픽
> 목적: Skill을 파일 기반 작업 매뉴얼, metadata 선택, Runtime 주입 흐름으로 설명한다.

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
proper nouns and abbreviations in English: Skill, SKILL.md, Agent, LLM, Runtime,
MCP, AGENTS.md, templates, scripts, references.
```

### 코드 슬라이드 사용 원칙

코드가 들어가는 슬라이드는 이미지 생성 AI가 긴 코드를 정확히 렌더링하기 어렵다. 이미지는 "코드 카드가 있는 구도"로 만들고, 실제 코드는 PPT/디자인 툴에서 텍스트 레이어로 얹는 것을 추천한다.

---

# 슬라이드 구성

---

## 슬라이드 0 - 표지

### 화면 문구

- 제목: **Skill**
- 부제: **Agent가 필요할 때 꺼내 읽는 작업 매뉴얼**
- 작은 문구: **metadata + instructions + resources**

### 장면 구성

발표를 여는 느낌으로, 로봇 진행자가 작업 매뉴얼 책장에서 `SKILL.md` 파일을 꺼내 청중에게 보여준다.

### 이미지 프롬프트

```txt
Opening cover slide for a technical seminar. Cute white-and-mint AI robot
presenter pulls a file labeled "SKILL.md" from a small bookshelf and shows it to
the audience. Nearby folders labeled "templates", "scripts", "references".

Large title: "Skill". Subtitle: "Agent가 필요할 때 꺼내 읽는 작업 매뉴얼".
Small bottom label: "metadata + instructions + resources".
Warm cream paper background, pastel crayon illustration, spacious opening-slide
composition.
```

---

## 슬라이드 1 - Skill이란 무엇인가

### 화면 문구

- **특정 작업을 잘하게 만드는 매뉴얼**
- **파일 기반 작업 패키지**

### 장면 구성

로봇이 “장애 분석”, “슬라이드 작성”, “UI polish” 같은 작업 매뉴얼 카드를 고른다.

### 발표 메모

Skill은 Agent에게 특정 작업의 순서, 기준, 출력 형식을 알려주는 파일 기반 패키지다.

### 이미지 프롬프트

```txt
Robot choosing from three manual cards labeled "장애 분석", "슬라이드 작성",
"UI polish". Cards sit on a desk labeled "Skill".

Top headline: "Skill = 작업 매뉴얼".
Small note: "순서와 기준을 알려준다".
```

---

## 슬라이드 2 - MCP와 Skill의 차이

### 화면 문구

- **MCP: 도구를 연결**
- **Skill: 작업 방식을 안내**

### 장면 구성

왼쪽은 플러그와 외부 도구, 오른쪽은 매뉴얼과 체크리스트. 로봇이 둘을 비교한다.

### 발표 메모

MCP는 외부 기능을 연결하고, Skill은 그 기능을 어떤 순서와 기준으로 사용할지 알려준다.

### 이미지 프롬프트

```txt
Split comparison. Left card: plug icon labeled "MCP: 도구 연결".
Right card: manual icon labeled "Skill: 작업 방식".

Robot in the center points to both cards. Top headline: "역할이 다르다".
```

---

## 슬라이드 3 - 파일로 보면: Skill 기본 구조

### 화면 문구

- **SKILL.md**
- **templates/**
- **scripts/**
- **references/**

### 슬라이드에 얹을 구조

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

### 발표 메모

Skill은 단일 프롬프트가 아니라 폴더 구조를 가질 수 있다. 핵심은 `SKILL.md`이고, 필요하면 템플릿과 스크립트를 함께 둔다.

### 이미지 프롬프트

```txt
File-tree slide. Large folder tree card titled "skills/incident-analysis".
Use folder icons for "SKILL.md", "templates/", "scripts/", "references/".
Leave room for exact tree text overlay.

Robot points at "SKILL.md" with note: "핵심 파일".
```

---

## 슬라이드 4 - 코드로 보면: SKILL.md metadata

### 화면 문구

- **name**
- **description**
- **선택은 description에서 시작**

### 슬라이드에 얹을 코드

```md
---
name: incident-analysis
description: Use this skill when analyzing production incidents,
failed deployments, logs, root causes, rollback decisions,
or incident reports.
---
```

### 발표 메모

Runtime은 모든 Skill 본문을 처음부터 읽지 않는다. 먼저 metadata의 name과 description을 보고 현재 작업과 맞는지 판단한다.

### 이미지 프롬프트

```txt
Code card titled "SKILL.md frontmatter". Leave room for markdown overlay.
Two sticky notes beside it: "name" and "description".

Robot highlights the description line with a crayon. Top headline:
"Skill 선택은 description에서 시작".
```

---

## 슬라이드 5 - 코드로 보면: Skill metadata 스캔

### 화면 문구

- **skills 폴더를 스캔**
- **name/description/path만 먼저 읽음**

### 슬라이드에 얹을 코드

```ts
async function loadSkillMetadata(skillDir: string) {
  const raw = await fs.readFile(
    path.join(skillDir, "SKILL.md"),
    "utf-8",
  );
  const frontmatter = parseFrontmatter(raw);

  return {
    name: frontmatter.name,
    description: frontmatter.description,
    path: path.join(skillDir, "SKILL.md"),
  };
}
```

### 발표 메모

Skill discovery는 가볍게 시작한다. 모든 Skill 전체 본문을 컨텍스트에 넣지 않고, 선택에 필요한 metadata만 먼저 모은다.

### 이미지 프롬프트

```txt
Code-focused slide. Left: folder shelf labeled "skills/". Small cards come out:
"name", "description", "path".

Right: code card titled "loadSkillMetadata()". Leave room for code overlay.
Robot holds a magnifier.
```

---

## 슬라이드 6 - 코드로 보면: 선택된 Skill을 컨텍스트에 주입

### 화면 문구

- **선택된 Skill 전체를 읽음**
- **LLM system message에 넣음**

### 슬라이드에 얹을 코드

```ts
const skillBody = await loadFullSkill("incident-analysis");

messages.push({
  role: "system",
  content: `
Use the following skill instructions:

${skillBody}
  `.trim(),
});
```

### 발표 메모

관련 Skill이 선택되면 Runtime은 그때 전체 `SKILL.md`를 읽고, 다음 LLM 호출의 컨텍스트에 넣는다.

### 이미지 프롬프트

```txt
Flow diagram: "Skill 선택" -> "SKILL.md 읽기" -> "LLM 컨텍스트 주입".
Below, code card titled "Context injection" with placeholder code.

Robot carries a document into a cloud labeled "LLM".
```

---

## 슬라이드 7 - scripts와 templates는 언제 쓰나

### 화면 문구

- **templates: 결과물 형식**
- **scripts: 보조 실행**
- **실행은 Runtime 권한 아래**

### 장면 구성

로봇이 템플릿 종이와 스크립트 도구를 들고 있고, Runtime 승인 도장이 옆에 있다.

### 발표 메모

Skill 안에 script가 있어도 자동 실행되는 것은 아니다. Runtime이 허용하고 호출해야 실행된다.

### 이미지 프롬프트

```txt
Robot holding two items: paper labeled "template" and small gear labeled
"script". A Runtime stamp nearby says "허용해야 실행".

Top headline: "Skill은 실행 파일이 아니라 지침 패키지".
```

---

## 슬라이드 8 - Skill과 AGENTS.md의 차이

### 화면 문구

- **AGENTS.md: 프로젝트 전체 규칙**
- **Skill: 특정 작업 절차**

### 장면 구성

왼쪽은 큰 프로젝트 규칙 게시판, 오른쪽은 작은 작업별 매뉴얼 카드 묶음.

### 발표 메모

`AGENTS.md`는 항상 지켜야 하는 repo 규칙이고, Skill은 특정 작업을 할 때만 꺼내 쓰는 절차다.

### 이미지 프롬프트

```txt
Split comparison. Left: large board labeled "AGENTS.md" with note "항상 적용".
Right: stack of small manuals labeled "Skill" with note "작업별 적용".

Robot stands between them. Top headline: "전체 규칙과 작업 매뉴얼".
```

---

## 슬라이드 9 - 좋은 Skill 작성법

### 화면 문구

- **description은 구체적으로**
- **하나의 Skill은 하나의 반복 작업**

### 장면 구성

좋은 예와 나쁜 예를 비교한다. 나쁜 예는 “Analyze stuff”, 좋은 예는 “failed deployments, logs, root cause”처럼 구체적이다.

### 발표 메모

Skill 선택 품질은 description에 크게 좌우된다. 너무 넓은 Skill은 오히려 선택과 실행을 흐리게 만든다.

### 이미지 프롬프트

```txt
Two-card comparison. Left card labeled "나쁜 예" with vague text "Analyze stuff".
Right card labeled "좋은 예" with concise tags "failed deploy", "logs",
"root cause".

Top headline: "description이 선택 품질을 만든다".
Robot gives a check mark to the right card.
```

---

## 슬라이드 10 - 한 문장 정리

### 화면 문구

**Skill은 Agent가 필요할 때 꺼내 읽는 작업 매뉴얼이고, Runtime이 그것을 찾아 LLM에게 적용한다.**

### 장면 구성

Runtime 로봇이 Skill 매뉴얼을 찾아 LLM에게 전달하는 그림.

### 이미지 프롬프트

```txt
Final summary slide. Flow: "Skill 목록" -> "Runtime 선택" -> "SKILL.md 읽기"
-> "LLM에 적용".

Large Korean text: "Skill = 필요할 때 꺼내 읽는 작업 매뉴얼".
Robot smiles and holds a manual.
```

---

## 슬라이드 11 - 마무리

### 화면 문구

- **작업 방식도 파일로 관리한다**
- **Q&A**

### 장면 구성

로봇이 `SKILL.md` 매뉴얼을 덮고 책장에 정리한다. 옆에는 질문 말풍선과 작은 폴더들이 있다.

### 이미지 프롬프트

```txt
Closing slide for a technical seminar about Codex Skills. Cute white-and-mint AI
robot closes a manual labeled "SKILL.md" and places it neatly on a bookshelf.
Small folders labeled "templates", "scripts", "references" sit nearby, with two
question speech bubbles.

Large Korean closing text: "작업 방식도 파일로 관리한다".
Bottom text: "Q&A".

Warm cream paper background, pastel crayon illustration, calm conclusion mood,
clean whitespace, clear readable Korean text.
```

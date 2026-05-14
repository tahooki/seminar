# Open Design Agent Harness 발표 자료

> 주제: "한 문장 prompt가 어떻게 진짜 디자인 artifact가 되는가 — Open Design Harness의 구조"
>
> 분량: 약 30–40분 (슬라이드 18장)
> 대상: 엔지니어, agent 시스템에 관심 있는 디자인 도구 메이커
> 참고 원문: `docs/plans/open-design-agent-harness-code-map.ko.md`, `docs/plans/open-design-agent-harness-rebuild.ko.md`

---

## 발표 운영 가이드

- 각 슬라이드는 `## Slide N — 제목` 형식으로 구분된다.
- 슬라이드 본문 자리에는 **이미지 생성 프롬프트**가 들어있다. 그대로 Midjourney / DALL·E / SDXL / Flux 등에 붙여 넣어 사용한다.
- 공통 스타일 프롬프트는 아래 한 번 정의되어 있다. 각 슬라이드에서는 `[STYLE_BASE]` 위에 그 슬라이드의 장면(scene)을 얹어서 사용한다.
- 슬라이드 본문 아래의 `### 🎤 스크립트`는 발표자가 화면을 띄우고 그대로 읽으면 되는 대본이다.

---

## 공통 스타일 프롬프트 `[STYLE_BASE]`

```text
Style: warm hand-drawn crayon sketch infographic on cream paper. Whimsical
storybook feel with light notebook annotation touches. 16:9 landscape.

Use a cute AI robot mascot as the guide: white body with mint accents, rounded
head with one small antenna, square torso, short arms and legs, big friendly
eyes, holding a crayon pointer. The robot may be named "Oddy" in prompts, but
it should visually match the existing seminar deck mascot. Keep the robot
consistent across slides.

Use pastel accents: mint, coral, lavender, lemon yellow, soft sky blue. Use
hand-drawn arrows, rounded speech bubbles, sticker-like icons, simple cards,
folder/file doodles, and light crayon texture.

Each slide should have one clear headline, 2-4 short labels, and one main
visual idea. Not text-heavy, not empty. For complex system diagrams, draw clean
placeholder labels and leave detailed Korean text for post-production.
Avoid realistic UI screenshots.

TEXT: Korean Hangul for labels and dialogue, clear crayon handwriting. Keep
proper nouns and abbreviations in English: Open Design, Agent, Harness, CLI,
Claude Code, Codex, Gemini, DESIGN.md, SKILL.md, SSE, iframe, artifact.

Avoid: photorealistic rendering, 3D render, glossy plastic, neon, dark mood,
busy background, cluttered text, watermark, signature, low resolution, blur,
extra fingers, distorted hands.
```

> 캐릭터 "Oddy"는 모든 슬라이드에 등장하는 안내자 로봇이다. 기존 발표자료의 흰색+민트 AI 로봇과 같은 실루엣을 유지하고, 이름만 Open Design 덱 안에서 Oddy로 부른다.

---

## Slide 1 — 표지 (시작 슬라이드)

```text
[STYLE_BASE]

Scene: 큰 종이 배너 한 장이 가운데에 놓여 있고, Oddy 로봇이 그 배너
옆에 서서 크레용 포인터로 제목을 가리킨다. 제목은 크게
"Open Design Agent Harness", 부제는 "한 문장이 디자인이 되는 길".
주변에는 prompt 말풍선, 작은 파일 폴더, iframe 액자, 톱니바퀴 아이콘을
여백 있게 배치한다. 오른쪽 아래에는 발표자 이름을 넣을 작은 빈 카드.
Spacious opening-slide composition, warm and technical.
```

### 🎤 스크립트

> 안녕하세요. 오늘은 Open Design이라는 프로젝트의 내부 구조를 같이 따라가 보려고 합니다. 주제를 한 줄로 말씀드리면 이렇습니다.
>
> **"한 문장으로 받은 모호한 요청이, 어떻게 실제로 동작하는 디자인 artifact까지 도달하는가?"**
>
> 이걸 가능하게 하는 것이 Open Design의 agent **harness**입니다. 오늘 발표의 큰 주장은 단순합니다. Open Design은 똑똑한 agent를 직접 만들지 않습니다. 대신 기존 CLI agent를 "좋은 designer처럼" 행동하게 만드는 레일을 깝니다. 그 레일의 모양을 보여드리겠습니다.

---

## Slide 2 — 청중에게 던지는 첫 번째 질문

```text
[STYLE_BASE]

Scene: split comparison layout. Left side: a simple chat bubble from a manager
with the exact text "토스같은 앱 만들어줘". Right side: a junior designer at
a blank canvas, holding a color palette and sticky notes, looking unsure.
Oddy stands between them with a question card.
Short labels only: "모호한 요청", "질문 먼저", "빈 캔버스".
```

### 🎤 스크립트

> 잠깐, 이런 상상부터 해보겠습니다. 여러분이 매니저이고, 신입 디자이너에게 "토스같은 앱 만들어줘"라고 슬랙으로 던졌습니다.
>
> 좋은 디자이너라면 무엇을 할까요? 바로 Figma를 켜지 않습니다. 먼저 **질문**합니다. "어떤 화면이요?", "톤은요?", "브랜드 색은요?", "금융 홈인가요 송금 플로우인가요?"
>
> 그런데 LLM agent는 다릅니다. 똑같은 한 문장을 던지면, 자기 취향대로 HTML을 즉흥적으로 뱉어버립니다. 그렇게 나온 결과물은 그럴듯해 보이지만, 실제로 쓸 수 있는 건 거의 없습니다.
>
> Open Design은 이 격차를 코드로 좁힌 프로젝트입니다.

---

## Slide 3 — 핵심 통찰

```text
[STYLE_BASE]

Scene: two-column crayon infographic. Left column has three crossed-out cards:
"새 Agent", "자체 모델", "새 추론 루프". Right column has one large checked card:
"CLI 위의 Harness". Under the checked card, show small plugs labeled
"Claude Code", "Codex", "Gemini" connecting into one rail.
Oddy points to the right column. Small bottom metaphor: tiny race track and pit crew,
label "엔진보다 환경".
```

### 🎤 스크립트

> 이 프로젝트의 가장 중요한 설계 결정은 부정형입니다. **"agent를 직접 만들지 않는다."**
>
> 모델 호출, tool use loop, 파일 편집 — 이 모든 것은 사용자의 컴퓨터에 이미 설치된 Claude Code, Codex, Gemini 같은 CLI agent에게 위임합니다.
>
> 그러면 Open Design은 뭘 만들까요? 그 agent를 **둘러싸는 환경**, 즉 **harness**를 만듭니다. Prompt 조립, 작업 디렉터리 관리, skill 주입, 디자인 시스템 주입, 파일 변경 감시, artifact 파싱, sandboxed preview — 이것이 Open Design이 소유한 자산입니다.
>
> 비유하자면, Open Design은 자동차 엔진을 만들지 않습니다. **레이싱 트랙과 핏 크루를 만듭니다.** 어떤 엔진이 들어와도 좋은 기록을 낼 수 있게.

---

## Slide 4 — 전체 흐름 한눈에 보기

```text
[STYLE_BASE]

Scene: clean system-flow diagram on a big sheet of paper. A paper airplane
labeled "prompt" moves through four large cards:
"Web", "Daemon", "CLI Agent", "Preview".
Inside the Daemon card, draw three small chips: "Skill", "DESIGN.md", "metadata".
From CLI Agent back to Web, draw two parallel streams labeled "Run SSE" and
"File SSE". End at a small iframe preview frame. Oddy points at the two streams.
```

### 🎤 스크립트

> 전체 그림을 한 장으로 보여드리겠습니다. 화살표 하나하나가 다 코드 위치를 가집니다.
>
> 사용자가 채팅창에 한 문장을 입력하면, Next.js 웹이 daemon으로 `POST /api/runs`를 보냅니다. Daemon은 세 가지를 합칩니다 — 어떤 skill인지, 어떤 디자인 시스템인지, 프로젝트 메타데이터는 뭔지. 이걸로 시스템 프롬프트를 조립한 뒤, 실제 CLI 프로세스를 `spawn`합니다. 이때 작업 디렉터리(cwd)가 그 프로젝트의 폴더입니다.
>
> 그러면 두 개의 스트림이 **동시에** 돕니다. 하나는 agent의 stdout, 하나는 chokidar가 감지하는 파일 변경. 둘 다 SSE로 웹에 흘러갑니다.
>
> 웹은 텍스트를 누적하면서 동시에 `<artifact>` 태그를 파싱하고, 그 안의 HTML을 격리된 iframe에서 즉시 프리뷰합니다.
>
> 오늘 발표의 나머지는 이 그림의 각 박스를 하나씩 열어보는 일입니다.

---

## Slide 5 — Harness의 7가지 책임

```text
[STYLE_BASE]

Scene: circular agenda infographic. Oddy stands in the center holding a crayon
pointer. Around Oddy are seven simple icon cards in a ring:
question mark, lock, adapter plug, folder, radio wave, iframe frame, checklist.
Use very short Korean labels: "질문", "제약", "CLI", "파일", "스트림", "프리뷰", "품질".
Keep the ring airy and readable.
```

### 🎤 스크립트

> Open Design harness가 책임지는 일을 일곱 가지로 나눴습니다. 외워두실 필요는 없고, 이게 오늘의 목차라고 보시면 됩니다.
>
> 첫째, **질문을 먼저 시킨다**. 둘째, **스타일과 구조의 자유도를 의도적으로 줄인다**. 셋째, **다양한 CLI의 차이를 흡수한다**. 넷째, **답변이 아니라 진짜 파일을 만들게 한다**. 다섯째, **그 과정을 실시간으로 보여준다**. 여섯째, **결과물을 즉시 격리된 환경에서 프리뷰한다**. 일곱째, **체크리스트로 품질의 바닥을 들어올린다**.
>
> 이 일곱 가지가 맞물려 돌아갈 때, 동일한 LLM이 갑자기 "좋은 디자이너"처럼 보이기 시작합니다. 하나씩 보겠습니다.

---

## Slide 6 — Prompt Composer: harness의 심장

```text
[STYLE_BASE]

Scene: stacked layer cake / sandwich diagram showing the system prompt being
assembled. Six clean layers from bottom to top:
"Discovery", "Base designer", "DESIGN.md", "Craft refs", "SKILL.md", "Metadata".
Make the Discovery layer visually emphasized with a brighter coral outline.
Oddy points to the bottom layer with a small speech bubble: "질문 먼저".
Leave room for labels to be retyped if needed.
```

### 🎤 스크립트

> 일곱 가지 중에서 단 하나만 골라야 한다면 저는 **Prompt Composer**를 고르겠습니다. 코드는 `apps/daemon/src/prompts/system.ts`의 `composeSystemPrompt()` 함수입니다.
>
> 이 함수가 매 chat run마다 호출되어 위와 같은 순서로 시스템 프롬프트를 쌓아 올립니다.
>
> 여기서 의도된 디자인 결정이 하나 있습니다. **DISCOVERY 레이어가 가장 앞에 옵니다.** 왜냐하면 LLM은 프롬프트 앞쪽 지시를 더 따르기 때문이죠. "질문 먼저 해라"가 "디자이너처럼 행동해라"보다 앞에 있어야 agent가 바로 코드 작성으로 흐르지 않습니다.
>
> 그 다음 `DESIGN.md`가 들어가서 "이 팔레트 밖의 토큰을 새로 만들지 마라"를 못 박습니다. `SKILL.md`가 들어가서 "phone frame은 직접 그리지 말고 seed를 복사해라"를 못 박습니다.
>
> 결국 모델 자체는 그대로인데, 출력의 분산이 확 줄어듭니다.

---

## Slide 7 — Discovery State Machine

```text
[STYLE_BASE]

Scene: board-game path with three large numbered stops. Stop 1 shows a question
form card with a lock icon, label "질문만". Stop 2 shows a forked path with a
direction picker and a small brand-spec file, label "방향 결정". Stop 3 shows
a checklist leading to a framed artifact, label "제작 시작".
Oddy moves along the path with a crayon pointer. Keep detail simple and readable.
```

### 🎤 스크립트

> 이 부분이 정말 영리합니다. Discovery는 코드로 된 finite state machine이 아닙니다. **프롬프트 안에 적힌 규칙들로 turn별 상태기계처럼 동작하게 만든 것**입니다.
>
> Turn 1에서는 question form 한 개만 emit하고 멈추라고 합니다. 코드 작성 절대 금지. 사용자가 답을 채우면 Turn 2가 시작되고, 답변의 `brand` 필드를 보고 분기합니다. "Pick a direction for me"면 direction picker를 한 번 더 띄우고, 브랜드 스펙이 있으면 추출해서 `brand-spec.md`로 저장합니다.
>
> 그 다음에야 비로소 TodoWrite로 작업 계획을 짭니다. 첫 tool call이 TodoWrite라는 건 의도된 것입니다. 사용자가 그 카드를 보고 "아니 그쪽 말고"라고 빨리 끼어들 수 있어야 하니까요.
>
> 결과적으로 "토스같은 앱 만들어줘"가 절대 1초 만에 엉터리 HTML로 끝나지 않습니다.

---

## Slide 8 — Skill Registry: artifact 종류별 제작 키트

```text
[STYLE_BASE]

Scene: open toolkit bag on a desk, drawn like a friendly technical kit.
Inside are four neat cards: "SKILL.md", "template.html", "layouts.md",
"checklist.md". The template card includes a tiny phone-frame thumbnail.
Oddy holds one card and points to two small trend arrows:
"즉흥성 ↓" and "품질 ↑". Avoid cramming file details into the image.
```

### 🎤 스크립트

> Skill은 단순한 메타데이터가 아닙니다. **agent에게 주입되는 실제 작업 설명서**입니다.
>
> 폴더 구조를 보시죠. `SKILL.md`가 워크플로우와 하드 룰을 적고, `assets/template.html`은 이미 잘 만들어진 seed를 제공합니다. 모바일 앱이라면 Dynamic Island, status bar SVG, home indicator가 다 그려져 있는 phone frame이 들어 있죠. `references/layouts.md`에는 Feed, Onboarding, Focus 같은 미리 짜인 archetype들이 있고, `references/checklist.md`에는 출력 직전 self-review 항목이 있습니다.
>
> Prompt composer는 이 skill body를 system prompt에 통째로 넣고, "쓰기 전에 template, layouts, checklist를 먼저 읽어라"는 pre-flight rule을 추가합니다.
>
> 효과는 뭘까요? agent가 phone frame을 자기 손으로 새로 그리려고 시도하지 않습니다. 이미 있는 걸 복사합니다. **즉흥성이 줄고, 품질의 바닥이 올라갑니다.**

---

## Slide 9 — Design System Registry: 시각 자유도 제한

```text
[STYLE_BASE]

Scene: design-system palette infographic. A locked paint palette labeled
"DESIGN.md" feeds color into five empty CSS variable slots:
"--bg", "--surface", "--fg", "--accent", "--muted".
Oddy fills the slots with a crayon brush. In one corner, a crossed-out rainbow
palette says "새 색 금지". Main idea: visual freedom is constrained by tokens.
```

### 🎤 스크립트

> Skill이 **구조**의 자유도를 줄였다면, DESIGN.md는 **시각 언어**의 자유도를 줄입니다.
>
> 흥미로운 디테일은 prompt가 agent에게 "이 브랜드 느낌으로 해줘"라고 부드럽게 말하지 않는다는 점입니다. 대신 단호하게 말합니다. **"이 DESIGN.md가 authoritative하다. palette 밖의 token을 만들지 마라."**
>
> 그리고 seed template의 CSS 변수(`--bg`, `--surface`, `--fg`, `--accent` 같은)에 직접 매핑하라고 지시합니다. 이건 LLM에게 "창의성을 발휘해서 색을 골라라"가 아니라 "이 슬롯에 이 값을 채워 넣어라"라는 단순 작업으로 바꿔주는 트릭입니다.
>
> 단순 작업으로 바꾸면 실패하기 어려워집니다.

---

## Slide 10 — Project CWD: 답변이 아니라 파일을 쓰게 한다

```text
[STYLE_BASE]

Scene: before-and-after comparison. Left side: a chat bubble pile above an empty
folder, label "답변만". Right side: an open project folder labeled
".od/projects" containing three simple file cards: "index.html", "assets",
"slides.json". Oddy draws a file into the folder.
Bottom headline: "답변이 아니라 산출물".
```

### 🎤 스크립트

> 이 부분이 Open Design을 그냥 챗봇과 결정적으로 다르게 만드는 지점입니다.
>
> 다른 도구들에서 LLM은 "답변"을 만듭니다. 텍스트 한 덩어리. 그러면 그 답변을 어디에 붙여 넣을지는 사용자의 몫이죠.
>
> Open Design은 다릅니다. agent CLI를 spawn할 때 `cwd`를 그 프로젝트의 실제 디렉터리로 잡아줍니다. 그러면 agent는 자기 도구들 — `Read`, `Write`, `Edit`, `Bash` — 로 그 폴더에서 진짜 파일을 만듭니다. `index.html`, `assets/hero.svg`, `slides.json` 같은 것들.
>
> 즉 사용자가 보는 결과물은 "agent의 답변"이 아니라 "agent가 만든 파일들"입니다. 이건 굉장히 큰 차이입니다. 결과물이 처음부터 **재사용 가능한 산출물**이기 때문이죠. 다른 도구에 import할 수 있고, git에 커밋할 수 있고, 배포할 수 있습니다.

---

## Slide 11 — Agent Adapter: CLI 차이를 흡수하는 층

```text
[STYLE_BASE]

Scene: adapter hub diagram. Four differently shaped plugs labeled
"Claude Code", "Codex", "Gemini", "Copilot" enter one rounded adapter card
labeled "Agent Adapter". One clean cable comes out the other side into the
Harness. Add three tiny tags near the adapter: "args", "stream", "stdin".
Oddy points at the unified output.
```

### 🎤 스크립트

> Claude Code, Codex, Gemini, Qoder, Copilot — 이들은 모두 CLI지만 약속이 다 다릅니다. 어떤 건 prompt를 argv로 받고, 어떤 건 stdin으로 받습니다. 어떤 건 권한 프롬프트를 띄우고, 어떤 건 안 띄웁니다. stdout 포맷도 제각각이죠.
>
> 만약 daemon 코드 곳곳에 `if (agent === 'claude')`, `else if (agent === 'codex')` 같은 분기가 흩어져 있다면 어떻게 될까요? 새 CLI를 추가할 때마다 코드 전체를 뒤집어야 합니다.
>
> Open Design은 이걸 `AGENT_DEFS`라는 정의 테이블에 가둡니다. 각 agent는 자기만의 `buildArgs()`, `streamFormat`, `reasoningOptions`를 갖고 있고, daemon의 나머지 코드는 이 추상 인터페이스만 봅니다.
>
> 결과적으로 **나머지 harness 코드는 어떤 CLI인지 신경 쓰지 않습니다.** 이것이 미래 CLI까지 확장 가능하게 만드는 핵심입니다.

---

## Slide 12 — Run Service: 두 개의 스트림

```text
[STYLE_BASE]

Scene: two parallel stream lanes, not a realistic river. Top lane carries speech
bubbles and tool-call icons, label "Run SSE". Bottom lane carries file cards,
label "File SSE". Both lanes feed into the Web UI and iframe preview at the
right. Oddy stands on a small bridge between the lanes.
Short caption: "말한 것 vs 실제 파일".
```

### 🎤 스크립트

> 결과를 사용자에게 어떻게 흘려보낼까요. Open Design은 **두 개의 SSE 스트림**을 동시에 사용합니다.
>
> 하나는 Run event stream입니다. agent의 stdout, tool call, 시작·종료 이벤트를 채팅 UI로 보냅니다. 사용자는 "지금 agent가 무슨 생각을 하고 있는지" 실시간으로 봅니다.
>
> 다른 하나는 Project file event stream입니다. chokidar라는 파일 워처가 프로젝트 디렉터리를 감시하다가, 파일이 만들어지거나 바뀌면 별도 채널로 SSE를 쏩니다.
>
> 왜 두 개일까요? 만약 agent의 stdout만 본다면, 파일이 실제로 디스크에 적혔는지는 추론해야 합니다. 별도 워처가 있으면 **fact**로 확인합니다. "agent가 말한 것"과 "실제로 일어난 것"을 분리해서 추적하는 거죠.
>
> 그리고 reconnect 시에도 유리합니다. 한 스트림이 끊겨도 다른 스트림으로 상태를 복구할 수 있으니까요.

---

## Slide 13 — Artifact Parser: 텍스트 스트림 → live preview

```text
[STYLE_BASE]

Scene: funnel parser diagram. Mixed stream chunks fall into a crayon funnel:
small scraps labeled "text", "<artif", "HTML", "</artifact>".
Below the funnel, two clean outputs appear: a chat bubble labeled "text" and
a preview frame labeled "artifact". On the right, a tiny phone preview grows
line by line. Oddy sorts the scraps with a crayon pointer.
```

### 🎤 스크립트

> 자, 이제 agent의 출력이 어떻게 화면에 그려지는지 봅시다.
>
> agent는 일반 텍스트와 `<artifact>` 태그를 한 스트림에 섞어서 보냅니다. 텍스트는 채팅 버블에 들어가야 하고, artifact 안의 HTML은 iframe 프리뷰에 들어가야 합니다.
>
> 그래서 streaming parser를 따로 만들었습니다. chunk가 어떻게 쪼개져서 들어와도 — 예를 들어 `<artif` 까지만 오고 다음 chunk에 `act>`가 와도 — 정상적으로 복구해서 `artifact:start`, `artifact:chunk`, `artifact:end`라는 이벤트로 변환합니다.
>
> ProjectView는 이 이벤트를 받자마자 iframe의 `srcdoc`을 매번 갱신합니다. 그래서 agent가 HTML을 한 줄 한 줄 쓰는 동안, 사용자는 그 화면이 **타이핑되듯이 자라나는 모습**을 봅니다. 시각적 만족감이 굉장히 큽니다.

---

## Slide 14 — Sandboxed Preview & Persist

```text
[STYLE_BASE]

Scene: two-step safety diagram. Left: an iframe preview inside a transparent
sandbox box, label "격리 프리뷰". Right: a validated HTML page moves from the
sandbox into a project folder, label "저장". Add a small filter icon labeled
"검증". Oddy watches from outside the sandbox with a calm pointer pose.
```

### 🎤 스크립트

> Preview는 두 가지가 동시에 일어납니다.
>
> 첫째, **streaming 중**에는 메모리 상의 artifact 문자열이 iframe에 직접 들어갑니다. 살아 움직이는 미리보기죠. 격리된 iframe이라 호스트 페이지에 영향을 주지 않습니다.
>
> 둘째, **turn이 끝나면** 그 HTML을 실제 프로젝트 파일로 저장합니다. 이때 validation을 한 번 더 합니다. 가끔 모델이 `<artifact type="text/html">` 안에 요약 문장을 끼워 넣는 경우가 있는데, 그게 그대로 저장되면 다음 번에 file을 열었을 때 망가집니다. 그래서 저장 전에 "이게 정말 HTML인가?"를 검사합니다.
>
> 작은 디테일이지만, agent의 실수를 사용자가 보기 전에 잡아내는 안전망입니다.

---

## Slide 15 — 시나리오: "토스같은 앱"

```text
[STYLE_BASE]

Scene: horizontal 5-panel storyboard. Panel 1: user enters
"토스같은 앱 디자인해줘". Panel 2: question form card. Panel 3: direction
picker with one selected finance direction. Panel 4: mobile-app template being
filled with Korean finance copy. Panel 5: completed phone-frame artifact and
an "index.html" file card. Oddy appears as the guide across panels.
Keep each panel simple, with only one short label.
```

### 🎤 스크립트

> 지금까지 본 모든 부품이 합쳐지는 순간을 한 번 봅시다. 사용자가 "토스같은 앱 디자인해줘"라고 입력하는 순간부터 어떤 일이 일어나는지를 단계별로 보겠습니다.
>
> 1번부터 3번까지는 setup입니다. 웹이 daemon에 run을 만들고, daemon은 mobile-app skill, DESIGN.md, 프로젝트 메타데이터를 system prompt로 조립합니다.
>
> 그리고 4번. agent의 첫 응답이 **HTML이 아니라 질문 폼**입니다. 이게 discovery 규칙의 효과예요. 사용자는 어떤 종류의 앱인지, 톤은 뭔지, 브랜드는 있는지를 입력합니다.
>
> 5–7번은 브랜드 방향 결정 단계. "Pick a direction for me"를 골랐기 때문에 direction picker가 한 번 더 뜨고, 사용자가 신뢰감 있는 금융 유틸리티 방향을 골랐다고 칩시다.
>
> 8번이 진짜 작업입니다. TodoWrite로 계획을 보여주고 — 사용자가 여기서 멈출 수 있어요 — 그 다음 mobile-app skill이 제공한 템플릿, layouts, checklist를 차례로 읽습니다. Focus/Hero 또는 Feed archetype을 골라서, "이번 달 소비", "내 계좌", "송금하기" 같은 진짜 한국어 금융 카피를 채워 넣습니다. 그 결과를 `index.html`로 cwd에 적습니다.
>
> 9번에 사용자는 화면에서 iPhone 프레임 안의 모바일 화면을 봅니다. Dynamic Island, 상태바, 홈 인디케이터까지 다 그려져 있습니다. 왜냐하면 그건 template에 이미 있던 거고 agent는 거기에 콘텐츠만 채워 넣었기 때문이죠.
>
> 10번. 그 파일은 프로젝트 폴더에 그대로 남습니다. 사용자가 나중에 git에 커밋할 수도 있고요.

---

## Slide 16 — 왜 이 구조가 좋은 결과를 만드는가

```text
[STYLE_BASE]

Scene: large funnel diagram. At the top, a messy card labeled "모호한 한 문장"
enters the funnel. Three constraint rings inside the funnel are labeled
"Discovery", "Skill", "DESIGN.md". At the bottom, neat content slots come out
and fit into a clean artifact frame. Oddy writes a short conclusion card:
"슬롯 채우기".
```

### 🎤 스크립트

> 이 구조가 왜 "더 똑똑한 모델을 쓰는 것"보다 더 잘 동작하는지를 한 슬라이드로 정리하면 이렇습니다.
>
> **자유도를 의도적으로 줄였습니다.** Discovery가 의도의 자유도를, Skill이 구조의 자유도를, DESIGN.md가 시각의 자유도를 줄였습니다. 자유도가 줄면 실패 모드도 같이 줄어듭니다.
>
> **모델이 잘 못하는 일을 모델에게 안 시켰습니다.** Phone frame을 픽셀 단위로 그리는 건 LLM이 잘 못합니다. 그래서 template으로 미리 그려뒀습니다. 색을 새로 고르는 것도 못합니다. 그래서 DESIGN.md에서 골라 쓰게 했습니다. 자기 작업을 객관적으로 검토하는 것도 못합니다. 그래서 checklist를 줘서 항목 단위로 체크하게 했습니다.
>
> **결과적으로 모든 layer가 "슬롯 채우기"라는 단순 작업으로 합쳐집니다.** Agent는 창의를 발휘하는 자리가 아니라, 잘 짜인 슬롯에 의미 있는 콘텐츠를 채우는 자리에 있습니다. 단순 작업이 되면 실패하기 어려워지고, 검증 가능해지고, 빨라집니다.
>
> 그리고 흥미로운 점은, 모델은 그대로인데 사용자 경험은 **질적으로 다르게 좋아진다**는 겁니다.

---

## Slide 17 — 만약 다시 만든다면 — 순서가 중요하다

```text
[STYLE_BASE]

Scene: build-order block tower. Seven stacked blocks form a stable tower, with
the bottom block largest and labeled "parser + iframe". Other blocks use short
labels only: "fake SSE", "cwd watcher", "skills", "discovery", "design",
"CLI adapter". Oddy points to the bottom block with a speech bubble:
"여기부터". Add a tiny crossed-out unstable tower in the corner.
```

### 🎤 스크립트

> 마지막으로, 만약 누군가 이걸 처음부터 다시 만든다고 했을 때 어떤 순서로 만들어야 할까요? 이건 `open-design-agent-harness-rebuild.ko.md`에 자세히 적혀 있는데, 핵심만 보여드릴게요.
>
> 직관과 반대일 수 있습니다. 가장 먼저 만드는 건 **agent가 아닙니다.** 가장 먼저 만드는 건 **artifact parser와 iframe preview**입니다. 왜냐하면 결과물을 보여주는 길이 안정되지 않으면, 그 위에 뭘 쌓아도 평가가 안 되거든요.
>
> 그 다음 가짜 agent를 붙여서 SSE 흐름을 끝까지 검증합니다. 그 다음 cwd와 file watcher, 그 다음 skill, 그 다음 prompt composer, 그 다음에야 **진짜 CLI adapter**를 붙입니다.
>
> 가장 불확실한 부분을 가장 작은 영역에서 먼저 증명하는 순서입니다. "한 skill의 seed–layout–checklist–preview loop가 끝까지 맞물리느냐"를 먼저 확인하고, 그게 되면 그때 adapter를 늘리고 skill을 늘립니다.
>
> 이 순서를 거꾸로 가면 — 예를 들어 adapter 다섯 개부터 붙이면 — 품질 문제가 prompt 문제인지 CLI 문제인지 구분이 안 됩니다. 그러면 디버깅이 지옥이 됩니다.

---

## Slide 18 — 마무리 (끝 슬라이드)

```text
[STYLE_BASE]

Scene: closing slide with a calm stage-curtain hint. Center: one large paper
card with the main quote:
"agent를 똑똑하게 하지 말고, 멍청해질 수 없게 만들어라".
Below it, small subtitle: "그 환경이 Harness입니다". Oddy waves beside the card.
Bottom label: "감사합니다 · Q&A". Keep the background spacious and uncluttered.
```

### 🎤 스크립트

> 발표를 정리하겠습니다.
>
> Open Design은 더 똑똑한 모델을 만드는 프로젝트가 아닙니다. **같은 모델로 더 나은 결과를 내게 만드는 주변 환경의 모음**입니다. 이걸 우리는 **harness**라고 부릅니다.
>
> Harness의 일곱 가지 책임 — 질문 강제, 자유도 제한, CLI 차이 흡수, 진짜 파일 쓰기, 실행 추적, 즉시 프리뷰, 품질 보장 — 이 일곱 가지가 맞물려 돌아갈 때, 한 줄짜리 모호한 요청이 실제로 쓸 수 있는 디자인 artifact로 바뀝니다.
>
> 만약 여러분이 비슷한 종류의 도구를 만들고 싶다면, 기억하실 한 가지를 드리겠습니다. **"agent를 더 똑똑하게 만들려 하지 말고, agent가 멍청해질 수 없는 환경을 만드세요."** 그 환경의 모양을 결정하는 게 harness 설계입니다.
>
> 감사합니다. 질문 받겠습니다.

---

## 부록 A — 발표 중 자주 받는 질문 답안

### Q1. 왜 자체 모델/agent를 안 만드나요?

> 모델 호출은 이미 잘 만들어진 CLI(Claude Code, Codex 등)가 합니다. 거기에 경쟁하면 가성비가 안 나옵니다. Open Design의 차별점은 모델 위가 아니라 **모델 옆**에 있어야 한다고 봤습니다. Prompt, cwd, skill, design system, preview — 이 layer가 결과 품질에 더 큰 영향을 줍니다.

### Q2. Skill을 추가하려면 어떻게 하나요?

> `skills/<id>/` 폴더를 만들고 `SKILL.md`에 frontmatter와 워크플로우를 적으면 끝입니다. `assets/template.html`로 seed를 주고, `references/layouts.md`와 `references/checklist.md`로 archetype과 self-review를 추가합니다. **harness 코드는 한 줄도 안 건드립니다.** 이게 좋은 설계의 신호입니다.

### Q3. 새 CLI agent를 붙이려면요?

> `apps/daemon/src/agents.ts`의 `AGENT_DEFS`에 새 정의를 추가합니다. `bin`, `buildArgs()`, `streamFormat`, `promptViaStdin` 정도만 구현하면 됩니다. 나머지 daemon 코드는 이 추상만 봅니다.

### Q4. 왜 SSE 스트림이 두 개죠?

> stdout만 보면 "agent가 말한 것"만 알 수 있습니다. 파일 워처가 따로 있어야 "실제로 일어난 일"을 알 수 있습니다. 그리고 reconnect 시 둘이 서로의 백업이 됩니다.

### Q5. Discovery 규칙이 진짜로 효과가 있나요? 모델이 무시하지 않나요?

> 가끔 무시합니다. 그래서 prompt composer가 그 layer를 **가장 앞에** 둡니다. LLM은 앞쪽 지시를 더 강하게 따릅니다. 그리고 checklist와 lint 같은 후속 안전망도 같이 둡니다. 한 layer만으로 100%를 기대하지 않고, **여러 layer가 누적되어 분산을 줄이는 방식**입니다.

### Q6. iframe sandbox는 왜 필요한가요?

> agent가 만드는 HTML은 외부 입력입니다. 그걸 호스트 페이지와 같은 origin에서 실행하면 보안 위험이 있고, 호스트 스타일과 충돌도 일어납니다. iframe sandbox는 격리와 일관된 프리뷰를 둘 다 해결합니다.

---

## 부록 B — 이미지 프롬프트 사용 팁

- 모든 슬라이드는 `[STYLE_BASE]` 블록을 가장 위에 두고, 그 아래 해당 슬라이드의 Scene 묘사만 이어 붙이면 된다.
- 한글 라벨이 이미지 안에 들어가야 하는데 모델이 한글 렌더링을 약하게 한다면, 영문 placeholder("question form", "skill kit", "palette")로 먼저 생성한 뒤 후처리(Figma/Canva)로 한글 텍스트를 얹는 것이 안정적이다.
- 캐릭터 Oddy의 일관성을 유지하려면 기존 발표자료의 흰색+민트 로봇 이미지를 reference로 잡고, 다음 슬라이드에 `image-to-image` 또는 `--cref`(MJ) / IP-Adapter(SDXL)로 같은 캐릭터를 재사용한다.
- 슬라이드 4, 12, 16처럼 다이어그램 성격이 강한 슬라이드는 텍스트 가독성이 중요하므로, 생성 후 라벨만 깔끔하게 재타이핑하는 편이 발표에 안전하다.

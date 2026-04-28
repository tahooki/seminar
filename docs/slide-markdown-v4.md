# AI Agent 기초 — 발표 슬라이드 구성안

> 발표자: **김태훈**
> 각 슬라이드마다 **① 장면 내용**, **② 발표 스크립트**, **③ 이미지 생성 프롬프트** 세 가지를 함께 제공합니다.
> 톤: **"꼬마 로봇 가이드 + 크레용 스케치 인포그래픽"** (적당한 정보량)
>
> **⚠️ 이미지 텍스트 표기 원칙**
> - 일반 라벨, 대사, 설명 → **한글**
> - 고유명사(Figma, Slack, Notion, Claude, Cursor, AGENTS.md 등) → **영어 유지**
> - 약어(LLM, MCP, API, JSX, USB-C) → **영어 유지**

---

## 🎨 공통 프롬프트 (모든 슬라이드에 기본 적용)

### ▶ 한글 공통 프롬프트

```
스타일: 크레용과 손그림이 섞인 따뜻한 스케치 인포그래픽. 동화 일러스트 감성에
노트 필기 느낌을 살짝 더한 스타일.
종이 질감의 밝은 아이보리/크림색 배경. 여백이 너무 비지 않을 정도의 적당한
보조 요소 — 핵심 그림 + 1~2개의 부가 요소(작은 배지, 체크, 화살표 주석).
너무 많은 텍스트로 어수선하지 않게.

파스텔 포인트 컬러(민트, 코랄, 라벤더, 레몬옐로우). 둥글둥글 귀여운 작은
AI 로봇 캐릭터가 가이드 — 안테나 달린 둥근 머리, 네모난 몸통, 짧은 팔다리,
큰 눈, 친근한 표정. 화이트+민트 포인트.

손그림 화살표, 둥근 말풍선, 스티커 느낌 아이콘, 가벼운 손글씨 레터링.
"💡" "★" 같은 작은 강조 배지는 페이지당 최대 1~2개만.

복잡한 실사 UI 캡처 금지. 개념을 단순화한 장면 중심. 가로 16:9.
텍스트는 한글 중심, 고유명사와 약어만 영어.
```

### ▶ 영어 공통 프롬프트

```
Style: warm hand-drawn crayon sketch infographic on cream paper — whimsical
storybook feel with light notebook-annotation touches. Moderate information
density: a clear main illustration plus 1–2 supporting elements per page
(a small badge, a check, a side arrow note). NOT text-heavy, NOT sparse.

Ivory/cream paper background. Pastel accent palette (mint, coral, lavender,
lemon yellow). A cute AI robot mascot as the guide — rounded head with antenna,
square body, short limbs, big eyes, white+mint color. Consistent across all slides.

Hand-drawn arrows, rounded wobbly speech bubbles, sticker-like icons, wiggly
crayon handwriting. Small accent badges like "💡" or "★" used sparingly —
max 1–2 per page.

No realistic UI screenshots. Concept-driven scenes with light supporting
detail, never cluttered. 16:9 landscape.

TEXT: Korean (Hangul) for labels, captions, and dialogue — clear crayon
handwriting. EXCEPTIONS kept in English: proper nouns (Figma, Slack, Notion,
Claude, Cursor, Gmail, AGENTS.md, CLAUDE.md, SKILL.md) and abbreviations
(LLM, MCP, API, JSX, USB-C).
```

---

# 📑 슬라이드 구성

---

## 슬라이드 0 — 표지

### ① 장면 내용
- **제목: "AI Agent 기초"**
- 부제: "개발자 관점에서 이해하는 AI Agent 활용 개발"
- **발표자: 김태훈**
- 꼬마 로봇이 손 흔들며 등장
- 배경에 앞으로 나올 개념 아이콘 몇 개

### ② 발표 스크립트
> "안녕하세요, 김태훈입니다. 오늘은 요즘 개발자라면 피할 수 없는 AI Agent 관련 용어들을, 하나의 이야기로 쭉 이어서 풀어보려고 합니다. 어려운 용어들이 많이 나오지만, 결국엔 전부 '글쓰는 확률 머신'이라는 하나의 본질에서 출발해요. 저와 이 작은 로봇 친구가 함께 가이드해 드리겠습니다. 시작해볼까요?"

### ③ 이미지 프롬프트
```
Cover illustration. The cute white-and-mint AI robot mascot standing at the
lower-center of the page, waving with a big friendly smile, holding a small
crayon in its free hand.

Above the robot, big bold handwritten Korean title text: "AI Agent 기초".
Directly below the title, a smaller Korean subtitle: "개발자 관점에서 이해하는 AI Agent 활용 개발".
At the bottom of the page, a small handwritten line: "발표자 김태훈".

Around the robot, 4–5 sketchy floating concept icons as light background
decoration: speech bubble, small USB-C plug, a tiny file icon reading
"AGENTS.md", a folder reading "skills/", a cloud with "LLM". Gentle sparkles
and a "★ START" sticker in one corner.

Cream paper background with faint notebook grid lines. Pastel palette,
warm and inviting opening-scene feel. Not too busy — title is the focal point,
robot and icons support it.
```

---

## 슬라이드 1 — LLM이란? (장면 1)

### ① 장면 내용
- 헤드라인: **"LLM = 글쓰는 확률 머신"**
- 로봇이 종이에 글 쓰는 모습
- "오늘 점심은 __" 다음 단어 확률 바 차트

### ② 발표 스크립트
> "먼저 LLM부터 짚고 가겠습니다. LLM, Large Language Model, 대형 언어 모델. ChatGPT, Claude, Gemini 이런 것들이죠.
>
> 복잡한 설명 다 걷어내면 LLM의 본질은 딱 하나입니다. **'글쓰는 확률 머신'.**
>
> 예를 들어 '오늘 점심은' 이라고 쓰면, 얘는 학습한 데이터 기반으로 '김치찌개'가 올 확률 62%, '뭐 먹지'가 21%, 이런 식으로 계산해서 가장 그럴듯한 단어를 뽑아 이어 붙입니다. 이걸 반복하는 거예요.
>
> 이 관점이 중요한 이유는, 이렇게 생각하면 LLM이 왜 창의력이 부족해 보이는지, 왜 가끔 그럴듯한 거짓말을 하는지 전부 이해가 되기 때문입니다. **'아, 얘는 그냥 확률로 글 쓰는 기계구나'** — 이 감각, 오늘 발표 내내 기억해주세요."

### ③ 이미지 프롬프트
```
The AI robot sitting at a small desk, sketching words onto a piece of paper
with a crayon. Above the paper, a wobbly speech bubble shows:
"오늘 점심은 ___".

Below the sentence, a mini hand-drawn bar chart with three candidate words
and percentages:
- "김치찌개 62%" (tallest bar, coral)
- "뭐 먹지 21%" (medium, mint)
- "어떻게 8%" (short, lavender)

A small "★ LLM" badge sticker in the top corner.
A single margin note on the side: "= 확률로 다음 단어 뽑기".

Cream notebook background with faint grid. Pastel palette.
Clean layout — main illustration + chart + 1 badge + 1 note only.
Korean handwritten in crayon style.
```

---

## 슬라이드 2 — 요즘 개발자는 Code Agent로 (장면 2)

### ① 장면 내용
- 헤드라인: **"요즘 개발자는 Code Agent로 개발합니다"**
- 세 종류의 Code Agent (터미널/IDE/앱) 나란히
- 각 대표 제품 이름

### ② 발표 스크립트
> "자, 이 '확률 머신'을 개발자들은 어떻게 쓰고 있을까요? 요즘 개발자는 **Code Agent** 라는 걸 씁니다.
>
> 세 가지 형태가 있어요. 첫 번째, **터미널**. Claude Code나 Codex CLI 같은 거죠. 두 번째, **IDE**. Cursor, Windsurf, GitHub Copilot. 세 번째, **전용 앱**. Claude Desktop, ChatGPT Desktop 같은 거요.
>
> 도구는 달라도 공통점이 딱 하나 있습니다. **개발자가 뭔가를 '글'로 써서 입력한다는 거예요.** 이 '글'이 바로 다음 슬라이드의 핵심입니다."

### ③ 이미지 프롬프트
```
Three framed sketchy illustrations side by side, each in a rounded dotted-line frame:
Frame 1 — laptop with terminal window and crayon code lines.
  Korean label above: "① 터미널". English tags inside: "Claude Code".
Frame 2 — IDE window with colorful code blocks and sidebar.
  Korean label above: "② IDE". English tags inside: "Cursor".
Frame 3 — desktop chat app with message bubbles.
  Korean label above: "③ 전용 앱". English tags inside: "Claude Desktop".

Above all three, a curved banner reads "Code Agent" (English term).

Below, a single horizontal arrow connecting all three frames to one speech
bubble: "전부 글로 입력!".

The AI robot stands on the left, pointing at the frames with a crayon.

Cream notebook background, pastel colors. Clean layout — 3 frames + 1 banner
+ 1 unifying bubble + robot. Korean handwritten, product names in English.
```

---

## 슬라이드 3 — 프롬프트란? (장면 3-1)

### ① 장면 내용
- 헤드라인: **"이때 입력하는 글자 = 프롬프트"**
- 터미널 안에 짧은 예시 + 긴 예시
- 로봇이 "프롬프트" 라벨 들고 있음

### ② 발표 스크립트
> "Code Agent에 입력하는 이 '모든 글자'를 **프롬프트(Prompt)** 라고 부릅니다.
>
> 짧든 길든 전부 프롬프트예요. '이 함수 리팩토링해줘' 이것도 프롬프트, '너는 시니어 백엔드 개발자야, 성능 이슈 3가지 찾아줘…' 이런 긴 것도 프롬프트입니다.
>
> 그냥 Agent한테 주는 '입력 텍스트'를 프롬프트라고 부른다, 이렇게만 기억하시면 됩니다."

### ③ 이미지 프롬프트
```
Center: two stacked sketchy terminal/chat window frames.
Top window labeled in Korean "짧은 예시" with input: "이 함수 리팩토링해줘".
Bottom window labeled in Korean "긴 예시" with multi-line input:
"너는 시니어 백엔드 개발자야.",
"성능 이슈 3가지 찾아줘.",
"[코드...]".

Both windows have a curly bracket "}" to the right merging into one arrow
pointing to a big sticker label: "= 프롬프트 (Prompt)".

Right side: the AI robot holding a large "프롬프트" sign like a road marker,
with a speech bubble: "입력하는 모든 글!".

Cream background, pastel lavender and mint. Clean layout — 2 windows +
1 label + robot. Korean handwritten, code terms in English.
```

---

## 슬라이드 4 — 프롬프트 엔지니어링 (장면 3-2)

### ① 장면 내용
- 헤드라인: **"잘 쓰면 = 프롬프트 엔지니어링"**
- 좌우 비교: 모호한 프롬프트 vs 명확한 프롬프트
- 하단에 4가지 기법 배지

### ② 발표 스크립트
> "그런데 아까 LLM은 확률 머신이라고 했죠. 그러니까 **입력을 어떻게 주느냐에 따라 결과가 크게 달라집니다.**
>
> 그래서 등장한 용어가 **프롬프트 엔지니어링**이에요. 정의는 간단합니다. *'확률 머신이 내가 원하는 방향으로 답을 내도록 입력을 설계하는 기술.'*
>
> 예를 들어, '좋게 해줘' 이렇게 쓰면 얘가 뭘 해야 할지 모릅니다. 근데 '변수명은 camelCase로, 에러는 try-catch로 감싸줘' 이렇게 쓰면 결과가 훨씬 예측 가능해지죠.
>
> 주요 기법 네 가지 — 명확한 지시, 역할 부여, 예시 제공, 단계별 사고 유도. 이 정도만 기억해두시면 됩니다."

### ③ 이미지 프롬프트
```
TOP HALF — split comparison:
Left panel labeled "❌ 모호함":
- Input bubble: "좋게 해줘"
- Arrow → messy scribble output with a sad face.

Right panel labeled "✅ 명확함":
- Input bubble: "변수명 camelCase, 에러 try-catch" (code terms in English)
- Arrow → neat code block with a happy face.

BOTTOM HALF — four rounded sticker badges in a row, each with an icon and
Korean label only (no extra examples):
🎯 "명확한 지시"
🎭 "역할 부여"
📋 "예시 제공"
🪜 "단계별 사고"

The AI robot stands in the center-bottom pointing up at the "명확함" side.

Cream notebook background, pastel palette. Clean layout — comparison + 4 badges
+ robot. Korean handwritten.
```

---

## 슬라이드 5 — 프롬프트를 호출하면? (장면 4)

### ① 장면 내용
- 헤드라인: **"프롬프트를 호출하면 무슨 일이?"**
- 내 컴퓨터 ↔ 클라우드 서버 5단계 왕복
- "LLM은 내 컴퓨터를 직접 만지지 않는다" 강조
- "Agent Loop" 라벨

### ② 발표 스크립트
> "자, 여기가 핵심입니다. 프롬프트를 입력한다고 **바로 내 코드가 수정되는 게 아니에요.** 이런 일이 벌어집니다.
>
> 1번, 제가 프롬프트를 입력합니다. 2번, 이게 서버에 있는 LLM으로 전송돼요. 3번, LLM이 판단을 하고 'src/api.ts 파일 좀 읽어와' 이런 **요청을 응답으로 내려줍니다.** 4번, 제 컴퓨터의 Agent 프로그램이 그 파일을 실제로 읽어서 다시 서버로 보내요. 5번, LLM이 수정안을 만들고, 또 '이렇게 수정해' 라는 요청을 내려주면, 제 컴퓨터의 Agent가 실제로 파일을 수정합니다.
>
> 여기서 가장 중요한 포인트. **LLM은 제 컴퓨터를 직접 만지지 않습니다.** LLM은 계속 '이거 해달라'는 요청만 내려주고, 실제 작업은 제 컴퓨터에 있는 Agent가 해요.
>
> 그리고 이 과정이 **한 번에 끝나는 게 아니라 여러 번 루프로 돌아갑니다.** 이걸 **Agent Loop**라고 부릅니다."

### ③ 이미지 프롬프트
```
Two large panels side by side connected by five numbered curved arrows going
back and forth.

Left panel labeled in Korean "💻 내 컴퓨터": a laptop with the AI robot
sitting beside it at a desk.
Right panel labeled in Korean "☁️ 클라우드 서버": a fluffy cloud containing
a bigger brain/robot icon labeled "LLM".

Five numbered arrows between panels, each with a short Korean label:
① → "프롬프트"
② ← "파일 읽어줘?"
③ → "파일 내용"
④ ← "이렇게 수정해"
⑤ → "완료!"

Top banner: a sticker note reading "★ LLM은 내 컴퓨터를 직접 만지지 않아요".
Bottom: a curved loop arrow wrapping around both panels with the label
"Agent Loop" (English).

Cream background, pastel colors. Clean layout — 2 panels + 5 arrows + 1 banner
+ loop label. Korean handwritten, term in English.
```

---

## 슬라이드 6 — 외부 도구 연결이 필요해 (장면 5-1)

### ① 장면 내용
- 헤드라인: **"근데 Figma 디자인은 어떻게 가져와?"**
- 좌: Code Agent / 우: Figma 세계
- 가운데 벽 (연결 불가)

### ② 발표 스크립트
> "자, 상황을 하나 가정해볼게요. 개발자가 이런 요구를 합니다.
>
> **'이 Figma 디자인 그대로 React 컴포넌트 만들어줘.'**
>
> 그런데 Code Agent는 제 코드베이스는 볼 수 있어도, **Figma는 어떻게 볼까요?** 서로 다른 서비스잖아요. 이걸 연결하는 표준이 없으면 Figma 따로, Slack 따로, Notion 따로, 전부 다른 방식으로 연결해야 돼요.
>
> 여기서 등장하는 게 다음 슬라이드의 주인공, **MCP**입니다."

### ③ 이미지 프롬프트
```
Top: a big speech bubble from a developer reading in Korean:
"Figma 디자인으로 컴포넌트 만들어줘!" (Figma in English).

Main scene — two sides separated by a tall wavy crayon WALL in the middle:

Left side labeled "💻 내 코드": AI robot at a laptop, scratching its head
with a puzzled face. A small "✓" tag.

Right side labeled "🎨 Figma": a floating Figma-style design mockup with
rectangles and a button shape. A small "✗" tag.

On the wall: three big crayon "???" marks.

Bottom: a small teaser sticker "→ 해결책은 다음 장에!" pointing right.

Cream notebook background, pastel coral and mint. Clean layout — 2 sides +
wall + 1 top bubble + 1 teaser. Korean handwritten, brand names in English.
```

---

## 슬라이드 7 — MCP란? (장면 5-2)

### ① 장면 내용
- 헤드라인: **"MCP = AI를 위한 USB-C"**
- 중앙에 MCP 허브
- 여러 도구가 표준으로 연결
- Host / Client / Server 3역할 간단히

### ② 발표 스크립트
> "**MCP, Model Context Protocol.** Anthropic이 제안한, LLM이 외부 도구들과 연결되는 표준 프로토콜입니다.
>
> 흔히 **'AI를 위한 USB-C'** 라고 비유해요. 예전엔 Slack 연결은 A 방식, Notion은 B 방식, Figma는 C 방식, 전부 달랐거든요. MCP는 이걸 **하나의 표준**으로 통일합니다.
>
> 구조는 간단해요. **Host**는 제가 쓰는 앱, 예를 들어 Cursor. **Client**는 그 안에서 MCP와 대화하는 부분. **Server**는 실제 기능을 제공하는 쪽, 예를 들어 Figma MCP Server는 Figma 데이터를 가져오는 기능을 제공합니다.
>
> 딱 하나만 기억하세요. **'MCP = AI가 외부 도구랑 표준 방식으로 대화하게 해주는 규격'**."

### ③ 이미지 프롬프트
```
Center: a big crayon-drawn USB-C port hub icon with a banner above reading
"MCP" (English) and a Korean subtitle "AI를 위한 USB-C".

Radiating outward from the hub like a sunburst — four tool icons connected
by identical hand-drawn cables:
- Figma (design frame)
- Slack (hash bubble)
- Notion (document)
- Gmail (envelope)
(Brand names in English.)

Bottom: three small rounded boxes in a row with Korean labels:
🏠 "Host" 🔌 "Client" 🗄 "Server"
Connected left-to-right with small arrows.

AI robot on the side holding a small "MCP" flag.

Cream background, pastel palette. Clean layout — hub + 4 tools + 3-role row
+ robot. Korean handwritten, proper nouns in English.
```

---

## 슬라이드 8 — Figma MCP 동작 흐름 (장면 5-3)

### ① 장면 내용
- 헤드라인: **"Figma MCP로 컴포넌트 만드는 흐름"**
- 5단계 플로우 (7단계에서 축약)

### ② 발표 스크립트
> "그럼 Figma MCP를 실제로 쓰면 어떻게 흘러갈까요?
>
> 1번, 제가 'Figma 디자인으로 컴포넌트 만들어줘' 라고 입력합니다. 2번, Agent가 판단해요. '아, Figma 데이터가 필요하네. Figma MCP 써야겠다.' 3번, MCP Client가 Figma MCP Server에 표준 프로토콜로 요청을 보냅니다. 4번, Server가 실제 Figma API 호출해서 디자인 데이터를 받아와요. 5번, 그 데이터가 LLM 프롬프트에 포함됩니다. 6번, LLM이 '아, 이 디자인이면 이런 JSX 만들어야지' 판단하고, 마지막 7번, 제 컴퓨터에 실제 컴포넌트 파일이 생성됩니다.
>
> **MCP 덕분에 Agent가 코드베이스 밖의 세계랑 표준 방식으로 대화**할 수 있게 된 거예요."

### ③ 이미지 프롬프트
```
Horizontal flow diagram: 5 circular stops connected by wiggly crayon arrows,
each with an icon and a short Korean label:

① 💬 "프롬프트"
② 🔌 "MCP 호출"
③ 🎨 "Figma API"
④ 🧠 "LLM이 JSX 생성"
⑤ 📄 "파일 완성!"

Title banner above: "Figma MCP 동작 흐름" (Figma, MCP in English).

The AI robot walks along the path at the bottom, following the trail.

Cream background, pastel mint and coral. Clean layout — 5-stop flow + banner
+ robot. Korean handwritten, proper nouns in English.
```

---

## 슬라이드 9 — 같은 잔소리 반복의 고통 (장면 6-1)

### ① 장면 내용
- 헤드라인: **"MCP 쓸 때마다 같은 잔소리 반복…"**
- 지친 로봇 / 반복되는 주의사항

### ② 발표 스크립트
> "근데 Figma MCP로 작업하다 보면, 개발자가 **매번 같은 얘기를 반복**하게 됩니다.
>
> 'pnpm 써, npm 쓰지 마', 'src/legacy 폴더 건드리지 마', 'shadcn/ui 활용해', 'any 타입 금지'…
>
> 이걸 매번 프롬프트에 쓰는 건 **너무 비효율적이잖아요.** 그래서 등장한 게 다음 슬라이드, **AGENTS.md** 입니다."

### ③ 이미지 프롬프트
```
The little AI robot sitting at a laptop, looking tired — sweat drop, "😩"
expression, a half-empty coffee cup beside it.

Around the robot's head: four wobbly speech bubbles with Korean rules repeated
(tool names in English):
- "pnpm 써!"
- "src/legacy 건드리지 마!"
- "shadcn/ui 써!"
- "any 타입 금지!"
Two of them have tiny crossed-out marks showing repetition.

A single corner sticker: "😤 또 똑같은 말...".

Cream background, pastel warm tones. Clean layout — tired robot + 4 bubbles
+ 1 corner sticker. Slightly humorous storybook feel. Korean handwritten,
tool names in English.
```

---

## 슬라이드 10 — AGENTS.md 등장 (장면 6-2)

### ① 장면 내용
- 헤드라인: **"AGENTS.md = Agent를 위한 규칙 파일"**
- 파일 내부 미리보기
- CLAUDE.md vs AGENTS.md 간단 비교
- 로봇의 안도감

### ② 발표 스크립트
> "**AGENTS.md.** 프로젝트 루트에 두는 'Agent를 위한 규칙 파일'입니다. Agent가 매번 자동으로 읽고 참고해요.
>
> 기술 스택, 개발 명령어, 코딩 컨벤션, 하지 말 것 — 이런 걸 한 번만 써두면, 그 프로젝트에서 작업할 때마다 Agent가 알아서 참고합니다.
>
> 비슷한 걸로 **CLAUDE.md** 도 있어요. 이건 Claude Code 전용이고, **AGENTS.md는 Claude, Codex, Cursor 등 여러 Agent가 공통으로 읽도록 하자는 오픈 표준**입니다. 요즘 트렌드는 AGENTS.md로 가는 방향이에요."

### ③ 이미지 프롬프트
```
Center-left: a big sketchy document icon labeled "AGENTS.md" (English) with
a soft glow. Slightly open, showing a short preview of contents inside:
"# AGENTS.md"
"## 하지 말 것"
"- npm 금지"
"- any 타입 금지"

Center-right: the AI robot smiling with relief, thumbs up, speech bubble:
"한 번만 써두면 끝!".

Bottom: two small file icons side by side for comparison:
"CLAUDE.md" with tiny caption "Claude 전용"
"AGENTS.md" with tiny caption "오픈 표준 ★"
A curved arrow from left to right showing the trend direction.

Cream background, pastel mint accents. Clean layout — 1 file + 1 robot +
1 comparison row. Korean handwritten, filenames in English.
```

---

## 슬라이드 11 — docs 폴더와 md 트렌드 (장면 6-3)

### ① 장면 내용
- 헤드라인: **"AGENTS.md + docs/ 역할 분담"**
- 두 개의 역할 비교
- 하단에 md 작성 핵심 포인트

### ② 발표 스크립트
> "그런데 AGENTS.md에 모든 걸 다 넣으면 파일이 너무 커져요. LLM이 한 번에 읽을 수 있는 양도 유한하고요.
>
> 그래서 역할을 나눕니다. **AGENTS.md는 항상 읽히는 '요약과 필수 규칙'**, **docs 폴더는 필요할 때만 참조되는 '상세 문서'**.
>
> 그리고 요즘 md 작성 트렌드가 살짝 바뀌었어요. **'사람과 AI가 함께 읽는 문서'** 가 됐거든요. 그래서 **명시적 Do/Don't, 짧고 명확한 문장, 선언적 문체** — 이런 게 잘 쓴 md의 기준이 됐습니다."

### ③ 이미지 프롬프트
```
Upper half — two icons side by side:
Left: a document icon labeled "AGENTS.md" with a Korean badge "항상 로드".
Right: an open folder labeled "docs/" with smaller files peeking inside
("architecture.md", "data-model.md"), Korean badge "필요할 때만".
A curved arrow from AGENTS.md to docs/ with a Korean label "참조".

Lower half — a small Korean section title "📝 요즘 md 트렌드" with three
short check-items:
✓ 명시적 Do / Don't
✓ 짧고 명확한 문장
✓ 선언적 문체

AI robot peeks from the corner holding a pencil.

Cream notebook background, pastel palette. Clean layout — 2-file comparison
at top + 3-item checklist at bottom + small robot. Korean handwritten,
filenames in English.
```

---

## 슬라이드 12 — Skill 등장 (장면 7-1)

### ① 장면 내용
- 헤드라인: **"한 걸음 더 — Skill"**
- AGENTS.md로도 해결 안 되는 문제들
- 아이디어 전구

### ② 발표 스크립트
> "AGENTS.md까지 만들었는데도 이런 상황이 있어요.
>
> 'PDF 생성 잘하는 노하우는 어떤 프로젝트에서든 똑같은데…', 'Excel 편집할 때 주의사항을 프로젝트마다 복붙해야 하나?', 'PPT 만들 때 이 템플릿 구조 계속 반복해야 해?'
>
> 이런 **도메인별 노하우**는 프로젝트 단위가 아니라 **작업 단위**로 재사용하고 싶거든요. 그래서 등장한 게 **Skill** 입니다."

### ③ 이미지 프롬프트
```
Center: AI robot with a big glowing crayon lightbulb above its head, sparkles
around, "eureka" expression.

Three wobbly speech bubbles floating around with Korean complaints
(file formats in English):
- "PDF 노하우는 어디나 똑같은데..."
- "Excel 규칙 매번 복붙?"
- "PPT 템플릿 또 반복?"

At the bottom edge, a "skills/" folder peeking into the scene with a small
Korean tag "새로운 해결책?".

Cream background, pastel yellow highlighting the lightbulb. Clean layout —
robot + 3 bubbles + 1 peeking folder. Korean handwritten, formats in English.
```

---

## 슬라이드 13 — Skill이란? (장면 7-2)

### ① 장면 내용
- 헤드라인: **"Skill = 재사용 가능한 능력 패키지"**
- skills/ 폴더 구조
- Progressive Disclosure 간단히

### ② 발표 스크립트
> "**Skill이란, 특정 작업을 잘 수행하기 위한 '베스트 프랙티스 + 스크립트 + 템플릿'을 묶어 놓은 재사용 가능한 패키지**입니다.
>
> 구조 보시면, skills 폴더 아래 pdf-generation 같은 폴더가 있고, 그 안에 SKILL.md라는 설명 파일, templates 폴더, scripts 폴더가 들어있어요.
>
> **핵심 개념이 하나 있는데 'Progressive Disclosure', 점진적 공개**입니다. Agent는 작업을 받으면 먼저 SKILL.md 맨 위의 '이 스킬은 언제 쓰는가' 설명만 훑어봐요. 그러다가 '어, 이번 작업에 필요하네' 싶으면 그때서야 전체를 로드합니다."

### ③ 이미지 프롬프트
```
Left-center: a folder structure tree drawn in crayon:
"skills/"
 └── "pdf-generation/"
      ├── 📄 "SKILL.md"
      ├── 📁 "templates/"
      └── 📁 "scripts/"
(All folder/file names in English.)

Right side: a small box titled in Korean "🔍 점진적 공개" showing two
sequential icons with an arrow:
👀 "훑어보기" → 📦 "필요하면 전체 로드"

AI robot in the bottom-right carrying a Skill folder like a package,
speech bubble: "재사용 가능!".

Cream background, pastel palette. Clean layout — folder tree + 2-step
concept + robot. Korean handwritten, filenames in English.
```

---

## 슬라이드 14 — AGENTS.md vs Skill 비교 (장면 7-3)

### ① 장면 내용
- 헤드라인: **"AGENTS.md vs Skill — 보완 관계"**
- 3행 비교표
- 둘 다 필요하다는 메시지

### ② 발표 스크립트
> "AGENTS.md랑 Skill, **경쟁이 아니라 보완 관계**예요.
>
> 범위가 달라요. AGENTS.md는 **프로젝트 단위 규약**, Skill은 **작업 단위 능력**. 로드 방식도 달라요. AGENTS.md는 항상 읽히고, Skill은 필요할 때만. 재사용성도 AGENTS.md는 해당 프로젝트에서만, Skill은 여러 프로젝트에서 공유할 수 있습니다.
>
> 정리하면 — **AGENTS.md로 '이 프로젝트는 이래'를 알려주고, Skill로 '이런 작업은 이렇게 해'를 공급하는 구조**입니다. 둘 다 갖춰야 완전해요."

### ③ 이미지 프롬프트
```
Hand-drawn comparison table with two columns.

Column headers with icons:
📄 "AGENTS.md" | 📦 "Skill"

Three rows (Korean labels on far left):
- "범위":      프로젝트 단위  | 작업 단위
- "로드":      항상          | 필요할 때만
- "재사용":    프로젝트 한정  | 여러 프로젝트

The AI robot stands below the table holding AGENTS.md in left hand and a
Skill folder in right hand, balanced like scales, speech bubble:
"둘 다 있어야 완전해!".

Cream notebook background, pastel dividers. Clean layout — 3-row table +
robot with two items. Korean handwritten, filenames in English.
```

---

## 슬라이드 15 — 마무리 (전체 흐름 복습)

### ① 장면 내용
- 헤드라인: **"결국 하나의 질문"**
- 핵심 메시지 + 7개 장면 로드맵
- 감사 인사

### ② 발표 스크립트
> "정리하겠습니다. 오늘 나온 모든 개념들, 결국 하나의 질문에서 출발합니다.
>
> **'글쓰는 확률 머신에게, 어떻게 하면 더 좋은 글, 더 좋은 코드를 쓰게 할 것인가?'**
>
> LLM은 확률 머신이고, Code Agent로 그걸 개발에 쓰고, 입력은 프롬프트고, 프롬프트를 호출하면 Agent Loop가 돌고, 외부 도구 연결은 MCP로, 프로젝트 규약은 AGENTS.md로, 작업별 노하우는 Skill로.
>
> 용어는 많지만, 전부 **'확률 머신의 어떤 한계를 보완하는가'** 이 관점에서 보면 구조가 보입니다.
>
> 이상으로 발표 마치겠습니다. 감사합니다!"

### ③ 이미지 프롬프트
```
Top: a wobbly banner with the Korean question:
"글쓰는 확률 머신에게, 어떻게 더 좋은 코드를 쓰게 할까?".

Main: a winding crayon roadmap with 7 numbered circular stops, each showing
an icon and a short label (English term + Korean one-liner):

① 🧠 "LLM" / 확률 머신
② 💻 "Code Agent" / 개발 도구
③ 💬 "Prompt" / 입력
④ 🔄 "Agent Loop" / 반복
⑤ 🔌 "MCP" / 외부 연결
⑥ 📄 "AGENTS.md" / 규약
⑦ 📦 "Skill" / 노하우

The path winds in an S-shape. The AI robot stands at the end of the road,
waving goodbye with a speech bubble "감사합니다!".

Scattered crayon confetti, small stars, a "THE END" sticker in a corner.

Cream background, full pastel palette. Clean but joyful closing layout —
roadmap + robot + confetti. Korean handwritten, English for proper nouns.
```

---

# 📌 사용 팁

1. **이미지 생성할 때는** 공통 프롬프트 + 슬라이드별 프롬프트를 **이어 붙여서** 넣으세요.
2. **캐릭터 일관성**이 중요하면, 첫 슬라이드에서 만든 로봇 이미지를 **레퍼런스로 업로드**하고 "same robot character as reference" 추가하세요.
3. **한글 텍스트 렌더링은 이미지 AI마다 편차가 큽니다.**
   - Midjourney, DALL-E는 한글이 부정확할 수 있어요.
   - 한글이 깨지면 **(a)** 이미지에서 텍스트를 빼고 생성한 뒤 PPT에서 텍스트 박스로 덮거나, **(b)** Google Gemini(Imagen 4), 네이버 CLOVA Studio 같은 한글에 강한 모델을 쓰거나, **(c)** ChatGPT의 GPT-4o 이미지 생성을 쓰세요.
   - **실전 추천:** 이미지는 "분위기 + 구도"만 맡기고 한글 라벨은 PPT 텍스트 박스로 덧입히는 하이브리드 방식이 제일 깔끔합니다.
4. **스크립트는 실제 말투**로 작성되어 있으니, 본인 말투에 맞게 다듬어 쓰시면 자연스럽습니다.

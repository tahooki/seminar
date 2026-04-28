# AI 개발 기초 — 발표 슬라이드 구성안

> 각 슬라이드마다 **① 장면 내용**, **② 발표 스크립트**, **③ 이미지 생성 프롬프트** 세 가지를 함께 제공합니다.
> 톤: "꼬마 로봇 가이드 + 크래용 스케치 인포그래픽"

---

## 🎨 공통 프롬프트 (모든 슬라이드에 기본 적용)

이미지 생성할 때 아래 공통 프롬프트를 각 슬라이드별 프롬프트 **앞에 붙여서** 사용하세요. 이렇게 하면 톤이 통일됩니다.

### ▶ 한글 공통 프롬프트

```
스타일: 크레용과 손그림이 섞인 따뜻한 스케치 인포그래픽.
종이 질감의 밝은 아이보리/크림색 배경, 파스텔 포인트 컬러(민트, 코랄, 라벤더, 레몬옐로우).
둥글둥글 귀여운 작은 AI 로봇 캐릭터가 가이드로 등장 — 안테나 달린 둥근 머리,
네모난 몸통, 짧은 팔다리, 큰 눈, 친근한 표정. 로봇 몸 색상은 화이트+민트 포인트.
손그림 화살표, 삐뚤빼뚤 둥근 말풍선, 스티커 느낌의 아이콘, 가볍게 흔들리는 손글씨 레터링.
전체적으로 밝고 친근하며, 딱딱하지 않은 교과서 삽화 느낌.
복잡한 실사 UI 캡처 금지, 개념을 단순화한 장면 중심.
가로형 16:9 레이아웃, 여백 충분히, 텍스트는 영어 짧은 키워드만.
```

### ▶ 영어 공통 프롬프트 (이미지 생성 AI는 영어 프롬프트가 더 잘 먹힙니다)

```
Style: warm hand-drawn crayon sketch infographic with paper texture.
Bright ivory/cream paper background, pastel accent colors (mint, coral, lavender, lemon yellow).
A cute little AI robot mascot appears as the guide — rounded head with antenna,
square body, short limbs, big friendly eyes, white body with mint accents.
Hand-drawn arrows, wobbly rounded speech bubbles, sticker-like icons,
wiggly handwritten lettering. Overall friendly, soft, storybook-illustration feel,
not stiff or corporate. No realistic UI screenshots — scenes that visualize concepts instead.
16:9 landscape layout, generous white space, only short English keywords as text.
```

---

# 📑 슬라이드 구성

---

## 슬라이드 0 — 표지

### ① 장면 내용
- 제목: **"AI 개발 기초 — 글쓰는 확률 머신부터 Skill까지"**
- 부제: "개발자 관점에서 이해하는 Agentic 개발"
- 발표자 이름 / 날짜
- 꼬마 로봇이 손 흔들며 등장

### ② 발표 스크립트
> "안녕하세요. 오늘은 요즘 개발자라면 피할 수 없는 AI와 Agent 관련 용어들을, 하나의 이야기로 쭉 이어서 풀어보려고 합니다. 어려운 용어들이 많이 나오지만, 결국엔 전부 '글쓰는 확률 머신'이라는 하나의 본질에서 출발합니다. 저와 함께 이 작은 로봇 친구가 가이드를 해 줄 거예요. 시작해볼까요?"

### ③ 이미지 프롬프트
```
Cover slide design. The cute white-and-mint AI robot mascot standing at center,
waving with a big friendly smile. Behind it, a soft cloud of sketchy icons floats —
a speech bubble, a gear, a lightbulb, a tiny file folder — all in pastel crayon style.
Title space at the top, subtitle space at the bottom. Crayon-drawn confetti
and little stars scattered around. Warm, inviting, storybook opening-scene feel.
```

---

## 슬라이드 1 — LLM이란? (장면 1)

### ① 장면 내용
- 헤드라인: **"LLM = 글쓰는 확률 머신"**
- 중앙에 로봇이 종이에 글 쓰는 모습
- 옆에 말풍선: "오늘 점심은 __" → "김치찌개(62%) / 뭐 먹지(21%) / 어떻게(8%)..."
- 하단 작은 텍스트: "다음에 올 가장 그럴듯한 단어를 계속 계산해서 이어 붙이는 기계"

### ② 발표 스크립트
> "먼저 LLM부터 짚고 가겠습니다. LLM, Large Language Model, 거대 언어 모델. ChatGPT, Claude, Gemini 이런 것들이죠.
>
> 복잡한 설명 다 걷어내면 LLM의 본질은 딱 하나입니다. **'글쓰는 확률 머신'.**
>
> 예를 들어 '오늘 점심은' 이라고 쓰면, 얘는 학습한 데이터 기반으로 '김치찌개'가 올 확률 62%, '뭐 먹지'가 21%, 이런 식으로 계산해서 가장 그럴듯한 단어를 뽑아 이어 붙입니다. 이걸 반복하는 거예요.
>
> 이 관점이 중요한 이유는, 이렇게 생각하면 LLM이 왜 창의력이 부족해 보이는지, 왜 가끔 그럴듯한 거짓말을 하는지 전부 이해가 되기 때문입니다. **'아, 얘는 그냥 확률로 글 쓰는 기계구나'** — 이 감각, 오늘 발표 내내 기억해주세요."

### ③ 이미지 프롬프트
```
The cute AI robot sitting at a small wooden desk, sketching words onto a big piece of paper
with a crayon. Above the paper, a wobbly speech bubble shows the sentence
"Today's lunch is ___" with three floating word options below: "kimchi stew", "what to eat",
"how about". Each option has a hand-drawn percentage sticker (62%, 21%, 8%).
Crayon arrows point from the paper to the options. Warm ivory background,
pastel mint and coral accents, storybook infographic style.
```

---

## 슬라이드 2 — 요즘 개발자는 Code Agent로 (장면 2)

### ① 장면 내용
- 헤드라인: **"요즘 개발자는 Code Agent로 개발합니다"**
- 세 개의 그림이 나란히: 터미널, IDE, 전용 앱
- 각각 밑에 대표 제품 이름: Claude Code / Cursor / Claude Desktop
- 공통점 강조 말풍선: "전부 '글로 입력'"

### ② 발표 스크립트
> "자, 이 '확률 머신'을 개발자들은 어떻게 쓰고 있을까요? 요즘 개발자는 **Code Agent** 라는 걸 씁니다.
>
> 세 가지 형태가 있어요. 첫 번째, **터미널**. Claude Code나 Codex CLI 같은 거죠. 두 번째, **IDE**. Cursor, Windsurf, GitHub Copilot. 세 번째, **전용 앱**. Claude Desktop, ChatGPT Desktop 같은 거요.
>
> 도구는 달라도 공통점이 딱 하나 있습니다. **개발자가 뭔가를 '글'로 써서 입력한다는 거예요.** 이 '글'이 바로 다음 슬라이드의 핵심입니다."

### ③ 이미지 프롬프트
```
Three sketchy illustrations side by side, each inside a soft rounded frame:
(1) a laptop showing a terminal window with crayon-drawn code lines,
(2) an IDE window with colorful code blocks and a sidebar,
(3) a desktop app window with a simple chat bubble interface.
Above all three, a big curved banner reads "Code Agent".
The little AI robot mascot stands on the left side, pointing at the three frames
with a crayon pointer. Hand-drawn arrows connecting everything loosely.
Pastel colors, cream background, playful and friendly.
```

---

## 슬라이드 3 — 프롬프트란? (장면 3-1)

### ① 장면 내용
- 헤드라인: **"이때 입력하는 글자 = 프롬프트"**
- 터미널/채팅창 스케치 안에 예시 두 개:
  - "이 함수 리팩토링해줘"
  - "너는 시니어 백엔드 개발자야. 성능 이슈 3가지 찾아줘..."
- 로봇이 "입력하는 모든 글자가 프롬프트!"라고 말하는 말풍선

### ② 발표 스크립트
> "Code Agent에 입력하는 이 '모든 글자'를 **프롬프트(Prompt)** 라고 부릅니다.
>
> 짧든 길든 전부 프롬프트예요. '이 함수 리팩토링해줘' 이것도 프롬프트, '너는 시니어 백엔드 개발자야, 성능 이슈 3가지 찾아줘…' 이런 긴 것도 프롬프트입니다.
>
> 그냥 Agent한테 주는 '입력 텍스트'를 프롬프트라고 부른다, 이렇게만 기억하시면 됩니다."

### ③ 이미지 프롬프트
```
A sketchy terminal/chat window frame in the center, with two example prompts
handwritten inside: a short one "refactor this function" and a longer one
"You're a senior backend dev. Find 3 performance issues...". Each prompt has
a wobbly speech-bubble outline around it. The AI robot stands next to the window,
pointing at the text with a crayon and holding up a big sticker label that reads
"PROMPT". Soft cream background, pastel lavender and mint accents,
hand-drawn arrows linking robot to examples.
```

---

## 슬라이드 4 — 프롬프트 엔지니어링 (장면 3-2)

### ① 장면 내용
- 헤드라인: **"잘 쓰면 = 프롬프트 엔지니어링"**
- 왼쪽: 나쁜 예 "좋게 해줘" (X 표시, 흐릿한 결과물)
- 오른쪽: 좋은 예 "변수명 camelCase, 에러 try-catch로" (O 표시, 선명한 결과물)
- 하단에 4가지 기법 스티커:
  - 명확한 지시
  - 역할 부여
  - 예시 제공
  - 단계별 사고

### ② 발표 스크립트
> "그런데 아까 LLM은 확률 머신이라고 했죠. 그러니까 **입력을 어떻게 주느냐에 따라 결과가 크게 달라집니다.**
>
> 그래서 등장한 용어가 **프롬프트 엔지니어링**이에요. 정의는 간단합니다. *'확률 머신이 내가 원하는 영역의 확률을 높이도록 입력을 설계하는 기술.'*
>
> 예를 들어, '좋게 해줘' 이렇게 쓰면 얘가 뭘 해야 할지 모릅니다. 근데 '변수명은 camelCase로, 에러는 try-catch로 감싸줘' 이러면 확률이 명확해지죠.
>
> 주요 기법 네 가지 — 명확한 지시, 역할 부여, 예시 제공, 단계별 사고 유도. 이 정도만 기억해두시면 됩니다."

### ③ 이미지 프롬프트
```
Split comparison layout. Left side labeled "Vague" with a crayon X mark:
a fuzzy, messy output blob coming from a short prompt "make it good".
Right side labeled "Clear" with a crayon check mark: a crisp, well-organized
output coming from a detailed prompt "use camelCase, wrap errors in try-catch".
Below, four sticker-style badges in a row: "Clear Instruction", "Role", "Examples",
"Step-by-step". The AI robot stands between the two sides,
pointing to the "Clear" side with a happy expression. Pastel hand-drawn style.
```

---

## 슬라이드 5 — 프롬프트를 호출하면? (장면 4)

### ① 장면 내용
- 헤드라인: **"프롬프트를 호출하면 무슨 일이?"**
- 왼쪽: 내 컴퓨터 (노트북 아이콘, 로봇이 앉아있음)
- 오른쪽: 클라우드 (구름 안에 큰 LLM 머신)
- 둘 사이를 화살표가 여러 번 왔다갔다 (1→2→3→4→5 번호 붙여서)
- 핵심 문구: **"LLM은 내 컴퓨터를 직접 만지지 않는다"**
- 하단에 작은 글씨: "Agentic Loop"

### ② 발표 스크립트
> "자 이제 핵심. 프롬프트를 입력하면 **바로 내 코드가 수정되는 게 아닙니다.** 이런 일이 벌어져요.
>
> 1번, 제가 프롬프트를 입력합니다. 2번, 이게 서버에 있는 LLM으로 전송돼요. 3번, LLM이 판단을 하고 '야, src/api.ts 파일 좀 읽어와' 이런 **요청을 응답으로 내려줍니다.** 4번, 제 컴퓨터의 Agent 프로그램이 그 파일을 실제로 읽어서 다시 서버로 보내요. 5번, LLM이 수정안을 만들고, 또 '이렇게 수정해' 라는 요청을 내려주면, 제 컴퓨터의 Agent가 실제로 파일을 수정합니다.
>
> 여기서 가장 중요한 포인트. **LLM은 제 컴퓨터를 직접 만지지 않습니다.** LLM은 계속 '이거 해달라'는 요청만 내려주고, 실제 작업은 제 컴퓨터에 있는 Agent가 해요.
>
> 그리고 이 과정이 **한 번에 끝나는 게 아니라 여러 번 루프로 돌아갑니다.** 이걸 **Agentic Loop**라고 부릅니다."

### ③ 이미지 프롬프트
```
Two big sketchy panels connected by multiple curved hand-drawn arrows
going back and forth. Left panel labeled "My Computer": a laptop with
the AI robot sitting next to it on a desk. Right panel labeled "Cloud Server":
a fluffy crayon cloud with a bigger robot/LLM brain icon inside.
Five numbered arrows (1-5) loop between them, each with a tiny handwritten label:
"prompt", "read file?", "file content", "edit file?", "done!".
Below the whole scene, a wobbly banner reads "Agentic Loop".
Cream background, pastel colors, very hand-drawn feel.
```

---

## 슬라이드 6 — 외부 도구 연결이 필요해 (장면 5-1)

### ① 장면 내용
- 헤드라인: **"근데 Figma 디자인은 어떻게 가져와?"**
- 왼쪽: Code Agent (로봇이 코드 편집기 앞에 있음)
- 오른쪽: Figma 파일 (디자인 목업 스케치)
- 둘 사이에 "???" 표시가 붙은 큰 벽
- 로봇이 고민하는 표정

### ② 발표 스크립트
> "자 이제 상황을 하나 넣어볼게요. 개발자가 이런 요구를 합니다.
>
> **'이 Figma 디자인 그대로 React 컴포넌트 만들어줘.'**
>
> 그런데 Code Agent는 제 코드베이스는 볼 수 있어도, **Figma는 어떻게 볼까요?** 서로 다른 서비스잖아요. 이걸 연결하는 표준이 없으면, Figma 따로, Slack 따로, Notion 따로, 전부 다른 방식으로 연결해야 돼요.
>
> 여기서 등장하는 게 다음 슬라이드의 주인공, **MCP**입니다."

### ③ 이미지 프롬프트
```
Two scenes separated by a tall wavy crayon wall in the middle.
Left side: the AI robot sits at a laptop with code on screen, looking puzzled
(scratching its head). Right side: a floating Figma design mockup sketch
— a simple UI with rectangles and circles representing components.
On the wall between them, three big hand-drawn question marks "???".
A thought bubble above the robot shows Figma's logo style shape.
Warm cream background, pastel coral and mint, storybook-style illustration.
```

---

## 슬라이드 7 — MCP란? (장면 5-2)

### ① 장면 내용
- 헤드라인: **"MCP = AI를 위한 USB-C"**
- 중앙: 큰 USB-C 포트 스티커
- 양쪽에 여러 도구 아이콘이 MCP 포트로 연결: Figma, Slack, Notion, DB, Gmail
- 세 역할 박스:
  - **Host** (내 앱, 예: Cursor)
  - **Client** (연결 담당)
  - **Server** (각 도구 측)

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
Center of the scene: a big crayon-drawn USB-C port icon with a banner above
reading "MCP" and a smaller subtitle "USB-C for AI". Radiating outward from
the port like a sunburst: cute sticker-style icons of Figma, Slack, Notion,
a database cylinder, and a Gmail envelope — each connected by a hand-drawn cable.
At the bottom, three rounded boxes in a row labeled "Host", "Client", "Server"
with tiny example icons inside (Cursor app, connector, Figma logo shape).
The AI robot stands on one side holding a "MCP" flag sticker. Cream background,
pastel colors, playful and educational feel.
```

---

## 슬라이드 8 — Figma MCP 동작 흐름 (장면 5-3)

### ① 장면 내용
- 헤드라인: **"Figma MCP로 컴포넌트 만드는 흐름"**
- 7단계 흐름도를 동그라미+화살표로 표현:
  1. 사용자 요청 → 2. Agent 판단 → 3. MCP Client 호출 → 4. Figma API → 5. 데이터 반환 → 6. LLM이 JSX 생성 → 7. 내 컴퓨터에 파일 생성
- 각 단계 옆에 작은 아이콘

### ② 발표 스크립트
> "그럼 Figma MCP를 실제로 쓰면 어떻게 흘러갈까요?
>
> 1번, 제가 'Figma 디자인으로 컴포넌트 만들어줘' 라고 입력합니다. 2번, Agent가 판단해요. '아, Figma 데이터가 필요하네. Figma MCP 써야겠다.' 3번, MCP Client가 Figma MCP Server에 표준 프로토콜로 요청을 보냅니다. 4번, Server가 실제 Figma API 호출해서 디자인 데이터를 받아와요. 5번, 그 데이터가 LLM 프롬프트에 포함됩니다. 6번, LLM이 '아, 이 디자인이면 이런 JSX 만들어야지' 판단하고, 마지막 7번, 제 컴퓨터에 실제 컴포넌트 파일이 생성됩니다.
>
> **MCP 덕분에 Agent가 코드베이스 밖의 세계랑 표준 방식으로 대화**할 수 있게 된 거예요."

### ③ 이미지 프롬프트
```
Horizontal flow diagram with 7 circular stops connected by wiggly crayon arrows.
Each stop has a tiny icon: (1) speech bubble "give me component",
(2) robot thinking, (3) connector plug, (4) Figma logo shape,
(5) design data flowing back, (6) brain with JSX code, (7) file icon with checkmark.
A hand-written curved label above reads "Figma MCP Flow".
The AI robot walks along the path at the bottom, following the steps.
Cream background, pastel mint and coral, soft storybook infographic style.
```

---

## 슬라이드 9 — 같은 잔소리 반복의 고통 (장면 6-1)

### ① 장면 내용
- 헤드라인: **"MCP 쓸 때마다 같은 잔소리 반복…"**
- 로봇이 땀 흘리며 같은 주의사항을 반복 타이핑하는 모습
- 말풍선 여러 개:
  - "pnpm 써! npm 쓰지 마!"
  - "src/legacy/ 건드리지 마!"
  - "shadcn/ui 써!"
  - "any 타입 금지!"
- 로봇 위에 "😩" 표정

### ② 발표 스크립트
> "근데 Figma MCP로 작업하다 보면, 개발자가 **매번 같은 얘기를 반복**하게 됩니다.
>
> 'pnpm 써, npm 쓰지 마', 'src/legacy 폴더 건드리지 마', 'shadcn/ui 활용해', 'any 타입 금지'…
>
> 이걸 매번 프롬프트에 쓰는 건 **완전 낭비**잖아요. 그래서 등장한 게 다음 슬라이드, **AGENTS.md** 입니다."

### ③ 이미지 프롬프트
```
The little AI robot sitting at a laptop, looking tired with a sweat drop and "😩"
expression. Around its head, multiple overlapping wobbly speech bubbles repeat
the same rules: "use pnpm!", "don't touch src/legacy!", "use shadcn/ui!",
"no any type!". Some bubbles are crossed out showing they're being repeated
for the Nth time. A stack of crumpled papers on the desk suggests repetition.
Cream background, pastel warm tones, slightly humorous storybook illustration.
```

---

## 슬라이드 10 — AGENTS.md 등장 (장면 6-2)

### ① 장면 내용
- 헤드라인: **"AGENTS.md = Agent를 위한 규칙 파일"**
- 중앙에 큰 AGENTS.md 파일 아이콘
- 파일 안 미리보기: "## 하지 말 것 / - npm 금지 / - any 타입 금지..."
- 로봇이 안도의 표정, 파일을 가리키며 "이제 여기에 한 번만 써두면 끝!"
- 하단 비교: CLAUDE.md (Claude 전용) vs AGENTS.md (여러 Agent 공통)

### ② 발표 스크립트
> "**AGENTS.md.** 프로젝트 루트에 두는 'Agent를 위한 규칙 파일'입니다. Agent가 매번 자동으로 읽고 참고해요.
>
> 기술 스택, 개발 명령어, 코딩 컨벤션, 하지 말 것 — 이런 걸 한 번만 써두면, 그 프로젝트에서 작업할 때마다 Agent가 알아서 참고합니다.
>
> 비슷한 걸로 **CLAUDE.md** 도 있어요. 이건 Claude Code 전용이고, **AGENTS.md는 Claude, Codex, Cursor 등 여러 Agent가 공통으로 읽도록 하자는 오픈 표준**입니다. 요즘 트렌드는 AGENTS.md로 가는 방향이에요. 여러 Agent 섞어 쓰는 팀이면 이식성 때문에 AGENTS.md가 유리합니다."

### ③ 이미지 프롬프트
```
Center: a big sketchy file icon labeled "AGENTS.md" floating with a soft glow,
showing a peek of the content inside — "## Don't / - no npm / - no any type".
The AI robot stands next to it with a relieved smiling expression, holding up
a check-mark sticker. At the bottom of the slide, two smaller file icons side by side:
"CLAUDE.md" (labeled "Claude only") and "AGENTS.md" (labeled "Open standard"),
with a crayon arrow pointing from CLAUDE.md to AGENTS.md showing the trend.
Cream background, pastel mint accents, friendly style.
```

---

## 슬라이드 11 — docs 폴더와 md 트렌드 (장면 6-3)

### ① 장면 내용
- 헤드라인: **"AGENTS.md + docs/ 역할 분담"**
- 왼쪽: AGENTS.md (항상 로드, "요약+필수 규칙")
- 오른쪽: docs/ 폴더 (필요할 때만, "상세 문서")
- 하단에 "요즘 md 작성 트렌드" 섹션:
  - ✅ 명시적 Do/Don't
  - ✅ 짧고 명확한 문장
  - ✅ 선언적 문체 ("반드시")
  - ❌ "가능하면…" 같은 모호한 표현

### ② 발표 스크립트
> "근데 AGENTS.md에 모든 걸 다 넣으면 파일이 너무 커져요. LLM이 한 번에 읽을 수 있는 양도 유한하고, 비용도 늘어나고요.
>
> 그래서 역할을 나눕니다. **AGENTS.md는 항상 읽히는 '요약과 필수 규칙'**, **docs 폴더는 필요할 때만 참조되는 '상세 문서'**. AGENTS.md에서 '데이터 모델은 docs/data-model.md 참고' 이렇게만 써두면, Agent는 관련 작업이 생겼을 때만 그 문서를 읽어요.
>
> 그리고 요즘 md 작성 트렌드가 살짝 바뀌었어요. **'사람도 읽고 AI도 읽는 문서'** 가 됐거든요. 그래서 **명시적 Do/Don't, 짧고 명확한 문장, 선언적 문체** — 이런 게 잘 쓴 md의 기준이 됐습니다. '가능하면 해주세요' 같은 모호한 표현은 AI가 해석하기 어려우니 피하는 게 좋아요."

### ③ 이미지 프롬프트
```
Top half: two file/folder icons side by side with a hand-drawn divider.
Left: "AGENTS.md" labeled "always loaded — summary & rules".
Right: an open folder icon labeled "docs/" with smaller files inside
(architecture.md, data-model.md), labeled "loaded on demand — details".
A curved crayon arrow connects them.
Bottom half: a small checklist with sticker check marks — "explicit Do/Don't",
"short clear sentences", "declarative tone" — and one crossed-out item "maybe/please".
The AI robot peeks from the corner holding a pencil. Cream background, pastel palette.
```

---

## 슬라이드 12 — Skill 등장 (장면 7-1)

### ① 장면 내용
- 헤드라인: **"한 걸음 더 — Skill"**
- 문제 제시 (말풍선 3개):
  - "PDF 생성 노하우는 어디나 똑같은데…"
  - "Excel 편집 주의사항을 프로젝트마다 복붙?"
  - "PPT 템플릿 구조도 반복?"
- 로봇이 새로운 아이디어를 떠올리는 전구 그림
- 하단에 skills/ 폴더가 살짝 등장

### ② 발표 스크립트
> "AGENTS.md까지 만들었는데도 이런 상황이 있어요.
>
> 'PDF 생성 잘하는 노하우는 어떤 프로젝트에서든 똑같은데…', 'Excel 편집할 때 주의사항을 프로젝트마다 복붙해야 하나?', 'PPT 만들 때 이 템플릿 구조 계속 반복해야 해?'
>
> 이런 **도메인별 노하우**는 프로젝트 단위가 아니라 **작업 단위**로 재사용하고 싶거든요. 그래서 등장한 게 **Skill** 입니다."

### ③ 이미지 프롬פ트
```
The AI robot standing with a big crayon-drawn lightbulb above its head (idea moment).
Around the robot, three wobbly speech bubbles float with complaints:
"PDF know-how is always the same...", "Copy-paste Excel rules every project?",
"Same PPT template again?". At the bottom edge, a new folder labeled "skills/"
is peeking into the scene, slightly glowing. Cream background, pastel yellow
highlighting the lightbulb, soft sketch style.
```

---

## 슬라이드 13 — Skill이란? (장면 7-2)

### ① 장면 내용
- 헤드라인: **"Skill = 재사용 가능한 능력 패키지"**
- 중앙에 skills/ 폴더 구조:
  ```
  skills/
  └── pdf-generation/
      ├── SKILL.md
      ├── templates/
      └── scripts/
  ```
- "Progressive Disclosure" 개념 설명:
  - Agent가 먼저 SKILL.md 설명만 훑음
  - 필요할 때만 전체 로드
- 다른 스킬 예시 아이콘들: excel-editing, ppt-maker, chart-drawing

### ② 발표 스크립트
> "**Skill이란, 특정 작업을 잘 수행하기 위한 '베스트 프랙티스 + 스크립트 + 템플릿'을 묶어 놓은 재사용 가능한 패키지**입니다.
>
> 구조 보시면, skills 폴더 아래 pdf-generation 같은 폴더가 있고, 그 안에 SKILL.md라는 설명 파일, templates 폴더, scripts 폴더가 들어있어요.
>
> **핵심 개념이 하나 있는데 'Progressive Disclosure', 점진적 공개**입니다. Agent는 작업을 받으면 먼저 SKILL.md 맨 위의 '이 스킬은 언제 쓰는가' 설명만 훑어봐요. 그러다가 '어, 이번 작업에 필요하네' 싶으면 그때서야 전체를 로드합니다. 필요할 때만 로드하니까 효율적이죠.
>
> PDF 말고도 Excel 편집, PPT 생성, 차트 그리기 — 이런 도메인별 스킬을 만들어서 공유할 수 있습니다."

### ③ 이미지 프롬프트
```
Center: a 3D-ish sketchy folder structure diagram showing "skills/" at the top
with "pdf-generation/" branching below, containing "SKILL.md" (with a tiny pencil icon),
"templates/" folder, "scripts/" folder. Drawn as a crayon tree diagram.
On the right, a callout bubble explains "Progressive Disclosure" with a tiny animation
hint — first a small "peek" icon, then a bigger "full load" icon.
At the bottom, a row of other skill icons as stickers: Excel spreadsheet, PPT slide,
bar chart, each in their own mini folder. The AI robot carries one of the folders
like a precious package. Cream background, pastel palette.
```

---

## 슬라이드 14 — AGENTS.md vs Skill 비교 (장면 7-3)

### ① 장면 내용
- 헤드라인: **"AGENTS.md vs Skill — 보완 관계"**
- 2열 비교표 (스케치 스타일):

| 구분 | AGENTS.md | Skill |
|-----|-----------|-------|
| 범위 | 프로젝트 단위 | 작업 단위 |
| 예시 | "이 프로젝트는 pnpm 씀" | "PDF는 이렇게 만듦" |
| 로드 | 항상 | 필요할 때만 |
| 재사용 | 프로젝트 한정 | 여러 프로젝트 공유 |

- 로봇이 양손에 AGENTS.md와 Skill을 하나씩 들고 "둘 다 있어야 완전해!"

### ② 발표 스크립트
> "AGENTS.md랑 Skill, **경쟁이 아니라 보완 관계**예요.
>
> 범위가 달라요. AGENTS.md는 **프로젝트 단위 규약**, 'this 프로젝트는 pnpm 씀' 같은 거. Skill은 **작업 단위 능력**, 'PDF는 이렇게 만드는 게 베스트' 같은 거.
>
> 로드 방식도 달라요. AGENTS.md는 항상 읽히고, Skill은 필요할 때만 로드돼요. 재사용성도 AGENTS.md는 해당 프로젝트에서만, Skill은 여러 프로젝트에서 공유할 수 있습니다.
>
> 정리하면 — **AGENTS.md로 '이 프로젝트는 이래'를 알려주고, Skill로 '이런 작업은 이렇게 해'를 공급하는 구조**입니다. 둘 다 있어야 완전한 셋업이 돼요."

### ③ 이미지 프롬프트
```
A hand-drawn comparison table with two columns, column headers "AGENTS.md" and "Skill"
written in chunky crayon letters. Rows labeled "Scope", "Example", "Load", "Reuse",
each filled with tiny doodled icons and short handwritten text. The AI robot stands
below the table holding two objects: AGENTS.md file in left hand, a Skill folder
in right hand, with a big speech bubble saying "Both = complete!".
Cream background, pastel dividers, notebook/sketchbook aesthetic.
```

---

## 슬라이드 15 — 마무리 (전체 흐름 복습)

### ① 장면 내용
- 헤드라인: **"결국 하나의 질문"**
- 중앙에 큰 문구: **"글쓰는 확률 머신에게, 어떻게 더 좋은 코드를 쓰게 할까?"**
- 아래에 7개 장면의 아이콘이 로드맵처럼 이어짐:
  LLM → Code Agent → Prompt → Agentic Loop → MCP → AGENTS.md → Skill
- 각 아이콘 아래 한 단어 키워드
- 로봇이 손 흔들며 "감사합니다!"

### ② 발표 스크립트
> "정리하겠습니다. 오늘 나온 모든 개념들, 결국 하나의 질문에서 출발합니다.
>
> **'글쓰는 확률 머신에게, 어떻게 하면 더 좋은 글, 더 좋은 코드를 쓰게 할 것인가?'**
>
> LLM은 확률 머신이고, Code Agent로 그걸 개발에 쓰고, 입력은 프롬프트고, 프롬프트를 호출하면 Agentic Loop가 돌고, 외부 도구 연결은 MCP로, 프로젝트 규약은 AGENTS.md로, 작업별 노하우는 Skill로.
>
> 용어는 많지만, 전부 **'확률 머신의 어떤 한계를 보완하는가'** 이 관점에서 보면 구조가 보입니다.
>
> 이상으로 발표 마치겠습니다. 감사합니다!"

### ③ 이미지 프롬프트
```
A horizontal roadmap with 7 numbered stops connected by a winding crayon path:
LLM (brain icon), Code Agent (laptop), Prompt (speech bubble), Agentic Loop
(circular arrow), MCP (USB-C port), AGENTS.md (file), Skill (folder package).
Each stop has a tiny handwritten label below. Above the roadmap, a big wobbly banner:
"How to make the probability machine write better code?".
The AI robot stands at the end of the path, waving goodbye with a "Thank you!" bubble.
Crayon confetti and little hearts scattered around. Warm cream background,
full pastel palette, joyful closing-scene feel.
```

---

# 📌 사용 팁

1. **이미지 생성할 때는** 공통 프롬프트 + 슬라이드별 프롬프트를 **이어 붙여서** 넣으세요.
2. **캐릭터 일관성이 중요**하다면, 첫 슬라이드에서 만든 로봇 이미지를 **레퍼런스로 업로드**하고 "same robot character as reference"를 추가하세요 (Midjourney의 `--cref`, DALL-E/Sora의 레퍼런스 이미지 기능 등).
3. **스크립트는 실제 말투**로 써놨으니, 본인 말투에 맞게 조금씩 다듬어 쓰시면 자연스럽습니다.
4. **슬라이드가 많다면**(15장) 장면 3·4(프롬프트)를 하나로 합치거나, 장면 6(AGENTS.md)의 3개를 2개로 줄여도 무방합니다.
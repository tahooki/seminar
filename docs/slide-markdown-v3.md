# AI 개발 기초 — 발표 슬라이드 구성안 (정보 밀도 강화판)

> 각 슬라이드마다 **① 장면 내용**, **② 발표 스크립트**, **③ 이미지 생성 프롬프트** 세 가지를 함께 제공합니다.
> 톤: **"꼬마 로봇 가이드 + 크레용 스케치 인포그래픽"** (동화 분위기 유지, 정보량은 풍부하게)
>
> **⚠️ 이미지에 렌더링되는 텍스트 표기 원칙**
> - 일반 라벨, 대사, 설명 → **한글**
> - 고유명사(Figma, Slack, Notion, Claude, Cursor, AGENTS.md, SKILL.md 등) → **영어 유지**
> - 약어(LLM, MCP, API, JSX, USB-C) → **영어 유지**

---

## 🎨 공통 프롬프트 (모든 슬라이드에 기본 적용)

### ▶ 한글 공통 프롬프트

```
스타일: 크레용과 손그림이 섞인 따뜻한 스케치 인포그래픽. 동화 일러스트의
감성은 유지하되, 교과서/노트 필기 느낌으로 "정보 밀도가 높은 인포그래픽".
종이 질감의 밝은 아이보리/크림색 배경. 페이지 여백이 너무 비어보이지 않도록
보조 요소를 충분히 배치 — 작은 도표, 체크리스트, 데이터 스티커, 보조 메모,
참고 박스, 범례, 번호 뱃지, 작은 아이콘 묶음 등.

파스텔 포인트 컬러(민트, 코랄, 라벤더, 레몬옐로우). 둥글둥글 귀여운 작은
AI 로봇 캐릭터가 가이드로 등장 — 안테나 달린 둥근 머리, 네모난 몸통,
짧은 팔다리, 큰 눈, 친근한 표정. 로봇 몸 색상은 화이트+민트 포인트.

손그림 화살표(다양한 곡선), 삐뚤빼뚤 둥근 말풍선, 스티커 느낌의 아이콘,
가볍게 흔들리는 손글씨 레터링, "💡팁", "★중요" 같은 사이드 배지, 동그라미 번호,
작은 각주와 별표 참조. 전체적으로 밝고 친근한 노트 필기 스타일.

복잡한 실사 UI 캡처 금지, 개념을 단순화한 장면 중심이지만 화면이 심심하지
않도록 디테일 가득. 가로형 16:9 레이아웃. 텍스트는 한글 중심. 고유명사
(Figma, Slack, AGENTS.md 등)와 약어(LLM, MCP, API)만 영어.
```

### ▶ 영어 공통 프롬프트 (이미지 생성 AI는 영어 프롬프트가 더 잘 먹힙니다)

```
Style: warm hand-drawn crayon sketch infographic on cream paper — whimsical
storybook feel but DENSE with information, like a lovingly illustrated notebook page.
Layout should feel FULL and RICH, not sparse. Fill the canvas with supporting
elements: tiny charts, checklists, data stickers, margin notes, reference boxes,
legends, numbered badges, clusters of small icons, footnote-style side tips.

Ivory/cream paper background with subtle texture. Pastel accent palette
(mint, coral, lavender, lemon yellow). A cute little AI robot mascot guides
the viewer — rounded head with antenna, square body, short limbs, big eyes,
white+mint color. Consistent character throughout.

Hand-drawn curved arrows (varied styles), wobbly rounded speech bubbles,
sticker-like icons, wiggly crayon handwriting, side badges like "💡팁" and
"★중요", numbered circle stamps, tiny footnote asterisks. Overall friendly
notebook-illustration aesthetic — NOT corporate, NOT minimal.

No realistic UI screenshots. Scenes that visualize concepts with RICH
supporting detail. 16:9 landscape.

TEXT: All labels in KOREAN (Hangul), handwritten crayon style, clearly legible.
EXCEPTIONS — keep in English: proper nouns (Figma, Slack, Notion, Claude,
Cursor, Gmail, AGENTS.md, CLAUDE.md, SKILL.md) and abbreviations (LLM, MCP,
API, JSX, USB-C).
```

---

# 📑 슬라이드 구성

---

## 슬라이드 0 — 표지

### ① 장면 내용
- 제목: **"AI 개발 기초 — 글쓰는 확률 머신부터 Skill까지"**
- 부제: "개발자 관점에서 이해하는 Agentic 개발"
- 발표자 이름 / 날짜
- 꼬마 로봇이 중앙에서 손 흔들며 등장
- 배경에 앞으로 등장할 개념들의 미리보기 아이콘들이 떠다니는 느낌

### ② 발표 스크립트
> "안녕하세요. 오늘은 요즘 개발자라면 피할 수 없는 AI와 Agent 관련 용어들을, 하나의 이야기로 쭉 이어서 풀어보려고 합니다. 어려운 용어들이 많이 나오지만, 결국엔 전부 '글쓰는 확률 머신'이라는 하나의 본질에서 출발합니다. 저와 함께 이 작은 로봇 친구가 가이드를 해 줄 거예요. 시작해볼까요?"

### ③ 이미지 프롬프트
```
Cover illustration. The cute white-and-mint AI robot mascot standing proudly
at center, waving with a huge friendly smile, holding a crayon and a folded map.
Behind it, a "concept cloud" — many sketchy floating icons preview what's coming:
speech bubble (prompt), tiny USB-C plug (MCP), a file icon reading "AGENTS.md",
a folder reading "skills/", a cloud with "LLM" written, a laptop, a gear,
a lightbulb, tiny stars and sparkles.
Top reserves space for main Korean title text (overlay later), bottom for subtitle.
Small corner decorations: a "★ START" sticker, a little arrow pointing right saying
"시작!", a tiny legend box in the corner showing "🤖 = 가이드 로봇".
Cream paper background with subtle grid lines like a notebook.
Information-rich but warm and inviting opening-scene feel.
```

---

## 슬라이드 1 — LLM이란? (장면 1)

### ① 장면 내용
- 헤드라인: **"LLM = 글쓰는 확률 머신"**
- 중앙: 로봇이 종이에 글 쓰는 모습
- "오늘 점심은 __" 다음 단어 확률 분포 시각화
- 사이드: 왜 이 관점이 중요한지 설명하는 미니 리스트

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
Information-dense notebook-page illustration.

CENTER-LEFT: The AI robot sitting at a wooden desk, sketching words onto a large
piece of paper with a crayon. Big wobbly speech bubble above the paper shows:
"오늘 점심은 ___". Below the sentence, a mini hand-drawn bar chart showing three
candidate words with percentages — "김치찌개 62%" (tallest bar, coral),
"뭐 먹지 21%" (medium, mint), "어떻게 8%" (short, lavender), plus a tiny "..." bar
labeled "기타". Hand-drawn X and Y axes with a wobbly feel.

RIGHT SIDE: A "notebook margin" column with three sticky-note style boxes listing
Korean insights: "1. 창의력이 부족해 보임", "2. 가끔 그럴듯한 거짓말", "3. 비슷한 답 반복".
Each with a tiny icon (question mark, warning, cycle arrow).

TOP-LEFT CORNER: A badge "★ LLM 정의" with Korean caption "다음 단어 확률 계산 → 반복".
BOTTOM-RIGHT: A small "💡팁" sticker in Korean: "얘는 글쓰는 확률 머신".

Scattered tiny details — a stray crayon, eraser shavings, a paper airplane.
Cream notebook background with faint grid. Pastel palette, rich detail.
All Korean text in clear crayon handwriting.
```

---

## 슬라이드 2 — 요즘 개발자는 Code Agent로 (장면 2)

### ① 장면 내용
- 헤드라인: **"요즘 개발자는 Code Agent로 개발합니다"**
- 세 종류의 Code Agent (터미널/IDE/앱)를 나란히
- 각각 대표 제품 이름
- 공통점 강조: "전부 글로 입력"
- 하단 통계/트렌드 배지

### ② 발표 스크립트
> "자, 이 '확률 머신'을 개발자들은 어떻게 쓰고 있을까요? 요즘 개발자는 **Code Agent** 라는 걸 씁니다.
>
> 세 가지 형태가 있어요. 첫 번째, **터미널**. Claude Code나 Codex CLI 같은 거죠. 두 번째, **IDE**. Cursor, Windsurf, GitHub Copilot. 세 번째, **전용 앱**. Claude Desktop, ChatGPT Desktop 같은 거요.
>
> 도구는 달라도 공통점이 딱 하나 있습니다. **개발자가 뭔가를 '글'로 써서 입력한다는 거예요.** 이 '글'이 바로 다음 슬라이드의 핵심입니다."

### ③ 이미지 프롬프트
```
Information-rich horizontal layout — a "tools showcase" notebook page.

THREE FRAMED ILLUSTRATIONS side by side, each inside a rounded sketchy frame
with a dotted-line border:
Frame 1 — laptop with terminal window showing crayon code lines. Top label:
"① 터미널". Inside frame, tiny tags: "Claude Code", "Codex CLI".
A small feature badge "CLI 기반".
Frame 2 — IDE window with colorful code blocks, file tree sidebar, cursor blinking.
Top label: "② IDE". Inside tags: "Cursor", "Windsurf", "GitHub Copilot".
A small feature badge "에디터 통합".
Frame 3 — desktop chat app with message bubbles. Top label: "③ 전용 앱".
Inside tags: "Claude Desktop", "ChatGPT".
A small feature badge "대화형 UI".

TOP CENTER: Large curved banner "Code Agent" in crayon, with Korean subtitle
below: "확률 머신을 개발에 쓰는 도구".

BOTTOM: A wide horizontal connector arrow linking all three frames pointing to
a single highlighted speech bubble: "전부 글로 입력!" (with a pencil icon).
To the right of that bubble, a star sticker: "★ 공통점".

CORNER DETAILS: Top-right a small "2025 개발 트렌드" tag. Bottom-left the AI
robot pointing at all three frames with a pointer stick, speech bubble saying
"골라 쓰세요!". Scattered tiny coffee cup, keyboard icon for flavor.

Cream notebook background with margin lines. Pastel, storybook-infographic feel.
```

---

## 슬라이드 3 — 프롬프트란? (장면 3-1)

### ① 장면 내용
- 헤드라인: **"이때 입력하는 글자 = 프롬프트"**
- 터미널 스케치 안에 짧은 예시 + 긴 예시
- 로봇이 설명
- 사이드에 "프롬프트의 구성 요소" 미니 다이어그램

### ② 발표 스크립트
> "Code Agent에 입력하는 이 '모든 글자'를 **프롬프트(Prompt)** 라고 부릅니다.
>
> 짧든 길든 전부 프롬프트예요. '이 함수 리팩토링해줘' 이것도 프롬프트, '너는 시니어 백엔드 개발자야, 성능 이슈 3가지 찾아줘…' 이런 긴 것도 프롬프트입니다.
>
> 그냥 Agent한테 주는 '입력 텍스트'를 프롬프트라고 부른다, 이렇게만 기억하시면 됩니다."

### ③ 이미지 프롬프트
```
Information-dense notebook illustration showing what a prompt is.

CENTER: Two stacked sketchy chat/terminal windows.
Top window labeled "짧은 예시" with input: "이 함수 리팩토링해줘" —
tiny "6 글자" counter sticker next to it.
Bottom window labeled "긴 예시" with multi-line Korean input:
"너는 시니어 백엔드 개발자야.",
"아래 코드의 성능 이슈 3가지 찾아서",
"개선안 제시해줘.",
"[코드...]".
Counter sticker next to it "40+ 글자".

Both windows have curly brackets "{" to their right, merging into one big
arrow pointing to a large label sticker "= 프롬프트 (Prompt)".

LEFT MARGIN: A small annotated breakdown labeled "프롬프트 = 입력 텍스트" with
tiny icon list: ✏️ "지시문", 🎭 "역할", 📋 "예시", 📏 "제약조건" — each in a
Korean label, marked "선택" or "필수".

RIGHT SIDE: The AI robot holding a big "프롬프트" sticker label like a road sign,
with a speech bubble: "Agent한테 주는 모든 글!".

TOP-LEFT: A tiny footnote box "* 짧든 길든 모두 프롬프트!".
BOTTOM-RIGHT: "💡 꿀팁: 명확할수록 좋아요" sticker.

Cream background, notebook grid, abundant supporting detail, pastel palette.
All Korean in crayon handwriting.
```

---

## 슬라이드 4 — 프롬프트 엔지니어링 (장면 3-2)

### ① 장면 내용
- 헤드라인: **"잘 쓰면 = 프롬프트 엔지니어링"**
- 좌우 비교: 모호한 프롬프트 vs 명확한 프롬프트 + 결과물 비교
- 하단에 4가지 기법 상세 배지

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
Information-dense before/after comparison notebook page.

TOP HALF — SPLIT PANEL:
Left panel labeled "❌ 모호함" in coral red:
- Input bubble: "좋게 해줘"
- Arrow "→" with a big red X
- Output: messy blob of scribbles labeled "뭘 하라는거지?", with tiny stars
  showing confusion, a small sad robot face.
- Tag: "점수 2/10"

Right panel labeled "✅ 명확함" in mint green:
- Input bubble: "변수명은 camelCase로, 에러는 try-catch로 감싸줘" (camelCase
  and try-catch in English as code terms)
- Arrow "→" with a big green check
- Output: neatly organized sketchy code block with proper indentation, a happy
  robot face.
- Tag: "점수 9/10"

BOTTOM HALF — FOUR TECHNIQUE BADGES in a row, each a rounded sticker with icon
and Korean label, with a one-line example below each:
1. 🎯 "명확한 지시" — 예: "camelCase로"
2. 🎭 "역할 부여" — 예: "너는 시니어 개발자"
3. 📋 "예시 제공" — 예: "이런 식으로 2~3개"
4. 🪜 "단계별 사고" — 예: "단계별로 생각해"

MARGIN NOTES:
- Top-right: "★ 핵심: 확률을 내가 원하는 쪽으로".
- Bottom-left tiny footnote: "* Prompt Engineering".

AI robot in center-bottom pointing up at the "명확함" side with a crayon pointer.
Speech bubble: "이렇게 쓰세요!".

Cream notebook background, pastel palette, rich supporting detail.
```

---

## 슬라이드 5 — 프롬프트를 호출하면? (장면 4)

### ① 장면 내용
- 헤드라인: **"프롬프트를 호출하면 무슨 일이?"**
- 내 컴퓨터 ↔ 클라우드 서버 사이 5단계 왕복
- 핵심 교훈: "LLM은 내 컴퓨터를 직접 만지지 않는다"
- 하단에 Agentic Loop 개념

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
Information-rich process diagram notebook page.

TWO LARGE PANELS side by side connected by FIVE numbered curved arrows going back
and forth (alternating left-to-right and right-to-left).

LEFT PANEL — labeled "💻 내 컴퓨터":
- A sketchy laptop on a desk with the AI robot sitting beside it.
- A small inset box labeled "로컬 Agent" showing a tiny helper robot with tools
  (wrench, file icon).
- File icons scattered: "api.ts", "package.json", tiny folder icons.

RIGHT PANEL — labeled "☁️ 클라우드 서버":
- A fluffy crayon cloud containing a bigger brain/robot labeled "LLM".
- Tiny gears and sparkle effects around the brain.
- A small subtitle under the cloud: "Anthropic / OpenAI 등".

FIVE NUMBERED ARROWS between panels, each with a handwritten Korean label on it:
① → "프롬프트 전송"
② ← "판단: src/api.ts 읽어줘"
③ → "파일 내용 전달"
④ ← "판단: 이렇게 수정해"
⑤ → "파일 수정 완료!"

TOP BANNER: A large warning sticker with star icons:
"★ 중요: LLM은 내 컴퓨터를 직접 만지지 않아요!"

BOTTOM: A circular arrow loop wrapping around both panels with the big label
"Agentic Loop" (English term kept). Small Korean caption below:
"한 번이 아니라 여러 번 반복".

MARGIN DETAILS:
- Left margin: tiny legend box — "🤖 = Agent", "🧠 = LLM", "📄 = 파일".
- Right margin: a tiny "💡" note: "실제 작업은 내 컴퓨터가!".

Cream notebook background, pastel, very detailed but storybook-friendly.
All Korean handwritten in crayon.
```

---

## 슬라이드 6 — 외부 도구 연결이 필요해 (장면 5-1)

### ① 장면 내용
- 헤드라인: **"근데 Figma 디자인은 어떻게 가져와?"**
- 좌: Code Agent / 우: Figma 세계
- 가운데 벽 (연결 불가 상황)
- 하단: 예전엔 도구마다 다르게 연결했다는 혼돈 표현

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
Information-rich problem-statement notebook page.

TOP BANNER: Large wobbly speech bubble (as if from the developer) containing
Korean request: "이 Figma 디자인 그대로 React 컴포넌트 만들어줘!" (Figma, React
in English). A small "요청" tag attached.

MAIN SCENE — two sides separated by a tall wavy crayon WALL down the middle:

Left side labeled "💻 내 코드 영역":
- AI robot at laptop, looking puzzled (scratching head)
- Small file tree icons: "src/", "components/"
- A tiny check-mark badge: "✓ 접근 가능"

Right side labeled "🎨 Figma 영역":
- Floating Figma-style design mockup with rectangles, circles, a button shape
- Color palette stickers
- A tiny X badge: "✗ 접근 불가"

THE WALL in the middle: three giant crayon "???" marks, with small Korean notes
stuck to it: "연결 표준 없음", "도구마다 제각각".

BOTTOM SECTION — "혼돈의 이전 방식":
A chaotic sketchy web showing tangled different-colored wires connecting
various tool icons (Slack, Notion, Figma, Gmail, DB cylinder) to a central
confused robot. Each wire labeled with different Korean notes:
"A 방식", "B 방식", "C 방식", "D 방식". A small sticker label: "😵 연결 지옥".

MARGIN: Top-right a "★ 문제" sticker. Bottom-left a teaser sticker pointing right:
"→ 해결책은 다음 장에!".

Cream notebook background, pastel, rich detail, storybook feel with information
density. All Korean in crayon handwriting.
```

---

## 슬라이드 7 — MCP란? (장면 5-2)

### ① 장면 내용
- 헤드라인: **"MCP = AI를 위한 USB-C"**
- 중앙에 MCP 허브 (USB-C 포트 형태)
- 여러 도구가 표준으로 연결
- Host / Client / Server 3역할 설명
- Before/After 비교

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
Information-dense "how it works" infographic page.

CENTER: A big crayon-drawn USB-C port hub icon, labeled with a large banner
"MCP" above, small Korean subtitle "AI를 위한 USB-C". A cute tiny label
"Model Context Protocol" underneath in English.

RADIATING OUT from the hub like a sunburst: FIVE tool icons, each connected
with an identical-style hand-drawn cable:
- Figma (design frame icon)
- Slack (hash-bubble icon)
- Notion (document icon)
- Database (cylinder)
- Gmail (envelope)
Each tool has a tiny "✓ 표준 연결" check stamp.

LEFT SIDE — 3-ROLE BREAKDOWN box titled "MCP 3요소":
Three stacked rounded boxes with Korean labels:
① 🏠 "Host (호스트)" — subtext "내가 쓰는 앱. 예: Cursor"
② 🔌 "Client (클라이언트)" — subtext "연결 담당"
③ 🗄 "Server (서버)" — subtext "각 도구 측. 예: Figma MCP"
Arrows connecting them ① → ② → ③.

RIGHT SIDE — BEFORE vs AFTER mini comparison:
Top: "❌ 예전" — tangled messy wires drawing
Bottom: "✅ 지금 (MCP)" — neat parallel cables drawing

BOTTOM BANNER: Handwritten summary in Korean "📌 한 줄 요약:
AI가 외부 도구와 표준으로 대화하게 해주는 규격".

AI robot on the left edge, holding a tiny "MCP" flag-sticker, with a speech
bubble: "표준이 있어 편해요!".

MARGIN DETAILS: Top-right small sticker "by Anthropic", a legend box explaining
arrow meanings. Scattered sparkles.

Cream notebook background, pastel, full of supporting info.
Korean handwritten in crayon, brand names in English.
```

---

## 슬라이드 8 — Figma MCP 동작 흐름 (장면 5-3)

### ① 장면 내용
- 헤드라인: **"Figma MCP로 컴포넌트 만드는 흐름"**
- 7단계 플로우
- 각 단계 세부 설명
- 하단 "결과물" 예시

### ② 발표 스크립트
> "그럼 Figma MCP를 실제로 쓰면 어떻게 흘러갈까요?
>
> 1번, 제가 'Figma 디자인으로 컴포넌트 만들어줘' 라고 입력합니다. 2번, Agent가 판단해요. '아, Figma 데이터가 필요하네. Figma MCP 써야겠다.' 3번, MCP Client가 Figma MCP Server에 표준 프로토콜로 요청을 보냅니다. 4번, Server가 실제 Figma API 호출해서 디자인 데이터를 받아와요. 5번, 그 데이터가 LLM 프롬프트에 포함됩니다. 6번, LLM이 '아, 이 디자인이면 이런 JSX 만들어야지' 판단하고, 마지막 7번, 제 컴퓨터에 실제 컴포넌트 파일이 생성됩니다.
>
> **MCP 덕분에 Agent가 코드베이스 밖의 세계랑 표준 방식으로 대화**할 수 있게 된 거예요."

### ③ 이미지 프롬프트
```
Information-dense 7-step flow diagram notebook page.

A winding crayon PATH snaking across the page with 7 numbered circular STOPS,
each with an icon AND a short Korean label AND a tiny explanatory note below:

① 💬 "프롬프트 입력" — note: "사용자가 요청"
② 🤔 "Agent 판단" — note: "Figma 데이터 필요!"
③ 🔌 "MCP Client 호출" — note: "표준 프로토콜"
④ 🎨 "Figma API 호출" — note: "실제 데이터 가져오기" (Figma in English)
⑤ 📦 "데이터 수신" — note: "디자인 정보 받음"
⑥ 🧠 "LLM이 JSX 생성" — note: "코드로 변환"
⑦ 📄 "파일 생성 완료!" — note: "내 컴퓨터에 저장"

TOP BANNER: Large curved title "Figma MCP 동작 흐름" (Figma, MCP in English).

BOTTOM-RIGHT: A "결과물 예시" (result example) box — a small sketchy React
component preview with "Button.jsx" filename label, showing a button shape.

LEFT MARGIN: A tiny timeline indicator showing all 7 dots with elapsed time stamps
like "~1초", "~2초" to show this happens fast.

AI robot walks along the winding path at the bottom, following the trail,
with a backpack.

TOP-RIGHT: A "💡 인사이트" sticker reading "코드베이스 밖 세계와 대화!".

MARGIN NOTES: "* Client ↔ Server 구조", "* 표준 덕분에 어떤 MCP든 같은 방식".

Cream notebook background, pastel colors, dense with supporting detail.
Korean handwritten in crayon, proper nouns in English.
```

---

## 슬라이드 9 — 같은 잔소리 반복의 고통 (장면 6-1)

### ① 장면 내용
- 헤드라인: **"MCP 쓸 때마다 같은 잔소리 반복…"**
- 지친 로봇 / 반복되는 주의사항
- 옆에 반복 횟수 카운터
- 하단에 "이런 게 반복됨" 체크리스트

### ② 발표 스크립트
> "근데 Figma MCP로 작업하다 보면, 개발자가 **매번 같은 얘기를 반복**하게 됩니다.
>
> 'pnpm 써, npm 쓰지 마', 'src/legacy 폴더 건드리지 마', 'shadcn/ui 활용해', 'any 타입 금지'…
>
> 이걸 매번 프롬프트에 쓰는 건 **완전 낭비**잖아요. 그래서 등장한 게 다음 슬라이드, **AGENTS.md** 입니다."

### ③ 이미지 프롬프트
```
Information-dense "pain point" scene notebook page, slightly humorous.

CENTER-LEFT: The little AI robot sitting at a laptop, clearly exhausted — sweat
drops, tired "😩" expression, a half-empty coffee cup beside it, eye-bags drawn.
A wilted plant on the desk.

AROUND THE ROBOT'S HEAD: Multiple overlapping wobbly speech bubbles, each
repeated the same rule with tiny tally marks like "正正" showing how many times:
- "pnpm 써!" ×5
- "npm 쓰지 마!" ×4
- "src/legacy 건드리지 마!" ×6
- "shadcn/ui 써!" ×3
- "any 타입 금지!" ×7
Some bubbles crossed out showing they've been repeated for the Nth time.

RIGHT SIDE: A big "반복 카운터" box — a tally counter drawing showing "매일 20회+"
with a small frowny face.

BOTTOM CHECKLIST titled "매번 반복하는 것들":
□ 패키지 매니저 지정
□ 건드리면 안 되는 폴더
□ UI 라이브러리 선택
□ 타입 규칙
□ 커밋 메시지 형식
□ 테스트 도구
Each item crossed multiple times showing repetition.

DESK SURROUNDINGS: Stack of crumpled papers labeled "같은 내용 메모들", a
tired calendar marked with many X's.

TOP-RIGHT STICKER: "😤 이게 효율적이야?"
BOTTOM-LEFT TEASER: "→ 다음 장에 해결!" with an arrow.

Cream notebook background, pastel warm tones, humorous storybook feel with
rich detail. All Korean handwritten, tool names in English.
```

---

## 슬라이드 10 — AGENTS.md 등장 (장면 6-2)

### ① 장면 내용
- 헤드라인: **"AGENTS.md = Agent를 위한 규칙 파일"**
- 파일 내부 실제 예시 미리보기
- CLAUDE.md vs AGENTS.md 비교
- 로봇의 안도감

### ② 발표 스크립트
> "**AGENTS.md.** 프로젝트 루트에 두는 'Agent를 위한 규칙 파일'입니다. Agent가 매번 자동으로 읽고 참고해요.
>
> 기술 스택, 개발 명령어, 코딩 컨벤션, 하지 말 것 — 이런 걸 한 번만 써두면, 그 프로젝트에서 작업할 때마다 Agent가 알아서 참고합니다.
>
> 비슷한 걸로 **CLAUDE.md** 도 있어요. 이건 Claude Code 전용이고, **AGENTS.md는 Claude, Codex, Cursor 등 여러 Agent가 공통으로 읽도록 하자는 오픈 표준**입니다. 요즘 트렌드는 AGENTS.md로 가는 방향이에요. 여러 Agent 섞어 쓰는 팀이면 이식성 때문에 AGENTS.md가 유리합니다."

### ③ 이미지 프롬프트
```
Information-rich "solution reveal" notebook page.

CENTER-LEFT: A big sketchy document/file icon labeled "AGENTS.md" (English)
with a soft glow halo. The file is slightly "opened" showing a peek of contents
inside — a clearly readable Korean markdown preview:
"# AGENTS.md"
"## 기술 스택"
"- pnpm, Next.js"
"## 하지 말 것"
"- npm 금지"
"- any 타입 금지"
"- src/legacy 수정 금지"

RIGHT-CENTER: The AI robot standing relieved and smiling, wiping sweat off its
forehead with one hand, giving a thumbs-up with the other. A speech bubble:
"한 번만 써두면 끝!". A little sparkle star around its head.

LEFT MARGIN: A "자동 로드" arrow pointing at the file with Korean note:
"Agent가 매번 자동으로 읽음".

BOTTOM HALF — Comparison table "CLAUDE.md vs AGENTS.md":
Two columns with file icons on top.
Left: "CLAUDE.md"
- 사용처: Claude Code 전용
- 상태: 먼저 도입
Right: "AGENTS.md"
- 사용처: 모든 Agent
- 상태: ★ 표준화 중 (with star sticker)
A curved trend arrow from left to right labeled "요즘 이쪽으로".

RIGHT MARGIN: A mini list "포함 내용":
✓ 기술 스택
✓ 개발 명령어
✓ 코딩 컨벤션
✓ Do / Don't

TOP-RIGHT: Small "💡" sticker: "프로젝트 루트에 두세요".
BOTTOM-LEFT: A tiny footnote "* 여러 Agent 쓰는 팀에 유리".

Cream notebook background, pastel mint accents dominant, rich supporting detail.
Korean handwritten, filenames/product names in English.
```

---

## 슬라이드 11 — docs 폴더와 md 트렌드 (장면 6-3)

### ① 장면 내용
- 헤드라인: **"AGENTS.md + docs/ 역할 분담"**
- AGENTS.md (요약) + docs/ (상세) 구조
- 하단 "AI가 잘 읽는 md 작성법" 체크리스트

### ② 발표 스크립트
> "근데 AGENTS.md에 모든 걸 다 넣으면 파일이 너무 커져요. LLM이 한 번에 읽을 수 있는 양도 유한하고, 비용도 늘어나고요.
>
> 그래서 역할을 나눕니다. **AGENTS.md는 항상 읽히는 '요약과 필수 규칙'**, **docs 폴더는 필요할 때만 참조되는 '상세 문서'**. AGENTS.md에서 '데이터 모델은 docs/data-model.md 참고' 이렇게만 써두면, Agent는 관련 작업이 생겼을 때만 그 문서를 읽어요.
>
> 그리고 요즘 md 작성 트렌드가 살짝 바뀌었어요. **'사람도 읽고 AI도 읽는 문서'** 가 됐거든요. 그래서 **명시적 Do/Don't, 짧고 명확한 문장, 선언적 문체** — 이런 게 잘 쓴 md의 기준이 됐습니다. '가능하면 해주세요' 같은 모호한 표현은 AI가 해석하기 어려우니 피하는 게 좋아요."

### ③ 이미지 프롬프트
```
Information-rich page with TWO main sections.

UPPER HALF — "역할 분담" structure:
Left: A single document icon labeled "AGENTS.md" with a big Korean badge
"항상 로드". Inside preview: "요약 + 규칙" (2-3 lines). Size indicator
sticker "📏 작게 유지".
Right: An open folder icon labeled "docs/" with multiple files peeking:
"architecture.md", "data-model.md", "deployment.md", "api-guide.md". Big Korean
badge "필요할 때만 로드". Size indicator "📏 자유롭게 상세하게".
A curved arrow from AGENTS.md to docs/ labeled "참조" with a tiny Korean note:
"'자세한 건 docs/... 참고'".

SMALL BELOW: A mini "용량/비용" bar chart — compares the two approaches:
"모두 AGENTS.md에 넣기" (tall bar, labeled "❌ 비효율") vs "분리하기"
(short bar, labeled "✅ 효율").

LOWER HALF — titled "📝 요즘 md 작성 트렌드 (사람 + AI가 함께 읽는 문서)":
Two-column checklist:

Left column "✅ 좋은 예":
✓ 명시적 Do/Don't 리스트
✓ 짧고 명확한 문장
✓ 선언적 문체 ("반드시 ~")
✓ 코드 블록 언어 태그
✓ 파일 경로는 `백틱`

Right column "❌ 나쁜 예":
✗ "가능하면 ~"
✗ "~하는 게 좋을 것 같아요"
✗ 긴 서술형 문단
✗ 모호한 표현
✗ 타이틀 없는 섹션

AI robot peeks from the corner holding a pencil with a Korean speech bubble:
"AI도 사람도 읽기 편하게!".

MARGIN DETAILS:
- Top-right: "💡팁: AGENTS.md는 짧게, docs는 풍부하게".
- Bottom-left: Small footnote "* 컨텍스트 한계가 있으니까".

Cream notebook background, pastel palette, information-dense.
Korean handwritten, filenames in English.
```

---

## 슬라이드 12 — Skill 등장 (장면 7-1)

### ① 장면 내용
- 헤드라인: **"한 걸음 더 — Skill"**
- AGENTS.md로도 해결 안 되는 문제들
- 아이디어 전구
- skills/ 폴더 살짝 등장

### ② 발표 스크립트
> "AGENTS.md까지 만들었는데도 이런 상황이 있어요.
>
> 'PDF 생성 잘하는 노하우는 어떤 프로젝트에서든 똑같은데…', 'Excel 편집할 때 주의사항을 프로젝트마다 복붙해야 하나?', 'PPT 만들 때 이 템플릿 구조 계속 반복해야 해?'
>
> 이런 **도메인별 노하우**는 프로젝트 단위가 아니라 **작업 단위**로 재사용하고 싶거든요. 그래서 등장한 게 **Skill** 입니다."

### ③ 이미지 프롬프트
```
Information-dense "new problem, new idea" notebook page.

CENTER: AI robot standing with a big glowing crayon LIGHTBULB above its head,
sparkles around it. The robot has an "eureka" expression.

AROUND THE ROBOT — three wobbly thought/speech bubbles with Korean complaints
(file formats in English):
- "PDF 생성 노하우는 어디나 똑같은데..." (with a PDF icon)
- "Excel 규칙 프로젝트마다 복붙?" (with an Excel icon)
- "PPT 템플릿 또 반복?" (with a PPT icon)
Each bubble has a small "😩" emoji.

LEFT SIDE — a comparison arrow diagram:
A box labeled "AGENTS.md (프로젝트 단위)" with a check mark — handles
project-specific rules.
An arrow "→" pointing to a question: "그럼 작업 단위는?" highlighted in
coral/yellow.

BOTTOM — a "skills/" folder peeking into the scene from below the page edge,
slightly glowing with curious sparkles. A small speech bubble attached:
"새로운 해결책?". Inside the folder, hints of sub-folders: "pdf-generation/",
"excel-editing/" (English names).

RIGHT MARGIN — a mini "범위 비교" Venn-diagram-ish sketch:
Circle A: "프로젝트 규약" (AGENTS.md handles)
Circle B: "작업별 노하우" (Skill handles)
Overlap zone highlighted with "둘 다 필요!" label.

TOP-RIGHT: A tag sticker "✨ NEW".
BOTTOM-RIGHT TEASER: "→ 다음 장에 정체 공개!" with arrow.

Cream notebook background, pastel yellow highlighting the lightbulb.
Rich storybook-infographic detail. Korean handwritten, file formats in English.
```

---

## 슬라이드 13 — Skill이란? (장면 7-2)

### ① 장면 내용
- 헤드라인: **"Skill = 재사용 가능한 능력 패키지"**
- skills/ 폴더 구조 상세
- Progressive Disclosure 개념
- 다른 스킬 예시들

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
Information-dense "anatomy of a skill" notebook page.

LEFT-CENTER — FOLDER STRUCTURE diagram drawn as a crayon tree:
"skills/" (top-level folder)
 └── "pdf-generation/" (expanded)
      ├── 📄 "SKILL.md" — side label "언제 / 어떻게 쓰는지"
      ├── 📁 "templates/" — side label "재사용 템플릿"
      └── 📁 "scripts/" — side label "헬퍼 스크립트"
All filenames/folder names in English, side labels in Korean.
Each line has a tiny icon.

RIGHT SIDE — "Progressive Disclosure" (점진적 공개) concept box:
Title in Korean "🔍 점진적 공개" with English subtitle "(Progressive Disclosure)".
Three sequential stages illustrated with arrows:
Stage 1: 👀 "훑어보기" — shows robot peeking at just the top of SKILL.md,
  label: "이 스킬 쓸까?"
Stage 2: 🤔 "판단" — robot thinking, label: "이번 작업에 필요하네!"
Stage 3: 📦 "전체 로드" — robot happily holding full folder, label: "로드 완료!"
A mini efficiency badge: "✓ 필요할 때만 로드 → 효율적".

BOTTOM ROW — "다른 Skill 예시" gallery of 4 folder-sticker icons:
📁 "excel-editing/" — caption "엑셀 편집"
📁 "ppt-maker/" — caption "PPT 생성"
📁 "chart-drawing/" — caption "차트 그리기"
📁 "...더 많이" — caption "계속 추가 가능"

TOP BANNER: Handwritten summary in Korean:
"💎 Skill = 베스트 프랙티스 + 템플릿 + 스크립트 묶음".

AI robot in bottom-right carrying a Skill folder like a precious package,
speech bubble: "재사용 가능!".

MARGIN DETAILS:
- Top-left: "★ 핵심: 작업 단위 노하우" badge.
- Bottom-left: tiny footnote "* SKILL.md 맨 위에 '언제 쓰는지' 기입".

Cream notebook background, pastel palette, information-packed.
Korean handwritten, code paths in English.
```

---

## 슬라이드 14 — AGENTS.md vs Skill 비교 (장면 7-3)

### ① 장면 내용
- 헤드라인: **"AGENTS.md vs Skill — 보완 관계"**
- 4차원 비교표
- 둘이 함께 쓰는 구조 다이어그램
- 로봇의 양손 비유

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
Information-rich comparison page with BOTH a table AND a diagram.

UPPER HALF — HAND-DRAWN COMPARISON TABLE with two columns:

Column headers (with icons on top):
📄 "AGENTS.md" | 📦 "Skill"

Row 1 — "🎯 범위":
| 프로젝트 단위 | 작업 단위 |

Row 2 — "📝 예시":
| "이 프로젝트는 pnpm 씀" | "PDF는 이렇게 만들기" |

Row 3 — "⚡ 로드":
| 항상 로드 | 필요할 때만 |

Row 4 — "♻️ 재사용":
| 이 프로젝트 한정 | 여러 프로젝트 공유 |

Each cell drawn with slight skew, hand-drawn lines, tiny doodle icons.

LOWER HALF — "함께 쓰는 구조" diagram:
Left: A project folder showing BOTH "AGENTS.md" file AND a "skills/" sub-folder inside.
Arrows from each to a happy Agent robot in the middle:
- AGENTS.md → arrow labeled "이 프로젝트 규칙"
- skills/ → arrow labeled "이 작업 노하우"
Robot speech bubble in center: "둘 다 있으니 완벽!".
A big Korean banner below: "🤝 경쟁 X, 보완 O".

RIGHT SIDE — a small "✓ 체크리스트":
□ AGENTS.md 만들기
□ 자주 쓰는 작업 → Skill로
□ Skill 팀원과 공유
□ 완성!

AI robot character illustration in the corner, holding AGENTS.md in left hand
and a Skill folder in right hand, balanced like scales of justice,
speech bubble: "둘 다 있어야 완전해!".

MARGIN DETAILS:
- Top-right: "📌 결론" sticker.
- Bottom-left: "💡 실전 팁: 프로젝트마다 AGENTS.md + 공용 Skill 저장소".

Cream notebook background, pastel dividers, sketchbook-style comparison page
packed with info. Korean handwritten, filenames in English.
```

---

## 슬라이드 15 — 마무리 (전체 흐름 복습)

### ① 장면 내용
- 헤드라인: **"결국 하나의 질문"**
- 핵심 메시지
- 7개 장면 로드맵
- 로봇 인사

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
Information-dense closing "recap map" notebook page.

TOP BANNER: A huge wobbly speech-scroll with the Korean question:
"글쓰는 확률 머신에게, 어떻게 더 좋은 코드를 쓰게 할까?".
A highlighter underline under key words "확률 머신" and "좋은 코드".

MAIN SCENE — a winding ROADMAP path with 7 numbered milestone stops, each
showing an icon + English term + Korean one-liner + tiny "한계 보완" note:

① 🧠 "LLM" — "글쓰는 확률 머신" · 한계: 컨텍스트 모름
② 💻 "Code Agent" — "개발에 연결" · 보완: 실제 파일 조작
③ 💬 "Prompt" — "입력 설계" · 보완: 원하는 확률 유도
④ 🔄 "Agentic Loop" — "반복 실행" · 보완: 복잡한 작업 수행
⑤ 🔌 "MCP" — "외부 도구 연결" · 보완: 코드 밖 세계 접근
⑥ 📄 "AGENTS.md" — "프로젝트 규약" · 보완: 반복 잔소리 제거
⑦ 📦 "Skill" — "작업별 노하우" · 보완: 재사용성

Each stop drawn as a circular stamp. The path winds through in a S-shape.

BOTTOM-CENTER: AI robot at the END of the road, holding a "🎓 완주!" banner,
waving goodbye with a speech bubble "감사합니다!". A tiny stack of items behind
it: a Skill folder, AGENTS.md file, MCP cable.

BOTTOM-LEFT CORNER: A "📝 한 줄 요약" box:
"용어는 많지만, 전부 확률 머신을 보완하는 도구!".

BOTTOM-RIGHT: A "QR/연락처" style placeholder box labeled "질문은 환영!"
(decorative, can be empty for later overlay).

Scattered closing decorations: crayon confetti, tiny hearts, stars, a graduation
cap icon, a "THE END" sticker.

Cream notebook background, full pastel palette, joyful and info-rich
closing page. Korean handwritten, English terms kept for proper nouns.
```

---

# 📌 사용 팁

1. **이미지 생성할 때는** 공통 프롬프트 + 슬라이드별 프롬프트를 **이어 붙여서** 넣으세요.
2. **캐릭터 일관성이 중요**하다면, 첫 슬라이드에서 만든 로봇 이미지를 **레퍼런스로 업로드**하고 "same robot character as reference"를 추가하세요.
3. **정보량이 많은 프롬프트**를 한 번에 완벽히 렌더링하긴 어려울 수 있으니:
   - (a) 여러 번 생성해서 가장 잘 나온 걸 고르거나
   - (b) 핵심 요소 5~6개만 남기고 축소해서 다시 시도
   - (c) 로봇 + 주요 다이어그램만 이미지로 받고, 보조 텍스트/배지는 PPT에서 추가
4. **한글 텍스트 렌더링은 이미지 AI 종류마다 편차가 큽니다.**
   - Midjourney, DALL-E 등은 한글 렌더링이 부정확할 수 있어요.
   - 한글이 깨지면 **(a)** 이미지에서 텍스트는 빼고 생성한 뒤 PPT에서 한글 텍스트 박스로 덮거나, **(b)** Google Gemini(Imagen 4), 네이버 CLOVA Studio 같은 한글에 강한 모델을 쓰거나, **(c)** ChatGPT의 GPT-4o 이미지 생성을 쓰세요.
   - **실전 추천:** 이미지는 "분위기 + 구도"만 맡기고 한글 라벨은 PPT 텍스트 박스로 덧입히면 제일 깔끔합니다.
5. **스크립트는 실제 말투**로 써놨으니, 본인 말투에 맞게 조금씩 다듬어 쓰시면 자연스럽습니다.

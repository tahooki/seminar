# Agent와 A2UI POC - 최종 발표 문서

> 목적: 최종 발표자료 제작을 위해 슬라이드 순서, 이미지 제작 여부, 이미지 프롬프트 또는 기존 이미지 경로, 발표 스크립트를 한 문서에 정리한다.
> 원칙: 새로 제작할 슬라이드는 이미지 프롬프트를 제공하고, 기존 슬라이드는 기존 생성 이미지를 그대로 사용한다. 발표 스크립트는 기존 정리 문서의 문장을 그대로 옮긴다.

---

## 기술 용어 검수 요약

- Agent는 `LLM을 중심으로 도구, 지식, 작업 절차, 실행 환경, 안전장치를 조합해 사용자의 목표를 수행하는 실행 시스템`으로 설명한다.
- MCP는 USB 비유를 사용하되, 정확히는 Agent와 외부 도구를 연결하는 표준 인터페이스라고 설명한다.
- Skill은 단순 문서가 아니라 Agent의 작업 절차와 판단 기준을 담은 작업 매뉴얼로 설명한다.
- RAG는 QnA 전용 기술이 아니라, 필요한 문서나 데이터를 검색해 근거 기반으로 답하게 만드는 방식으로 설명한다.
- A2UI는 Agent가 HTML/CSS를 마음대로 생성하는 방식이 아니라, UI 의도와 데이터를 전달하고 Client가 검증된 컴포넌트로 렌더링하는 방식으로 설명한다.

---

## 최종 슬라이드 순서

> 이미지 파일 번호 기준이며, 02, 05, 06 슬라이드는 최종 덱에서 제외한다.

0. 인사와 발표 주제 - 신규 이미지 생성
1. 발표 순서 - 신규 이미지 생성
3. Agent란 무엇일까요? - 신규 이미지 생성
4. Agent를 구성하는 것 - 신규 이미지 생성
7. LLM이란? - 신규 이미지 생성
8. LLM은 어떻게 답변을 만들까? - 신규 이미지 생성
9. Agent는 LLM을 업무로 확장한다 - 신규 이미지 생성
10. Agent 예시 - 신규 이미지 생성
11. 초기 Agent 구성 - 신규 이미지 생성
12. 코드 실행이 붙은 Agent - 신규 이미지 생성
13. 더 많은 외부 도구를 쓰고 싶어진다 - 신규 이미지 생성
14. MCP 등장 - 신규 이미지 생성
15. MCP 구조 - 신규 이미지 생성
16. Figma MCP 사용 예 - 신규 이미지 생성
17. MCP만으로는 부족한 상황 - 신규 이미지 생성
18. Skill 등장 - 신규 이미지 생성
19. Skill 동작 흐름 - 신규 이미지 생성
20. RAG 소개 - 신규 이미지 생성
21. RAG 사용 예 - 신규 이미지 생성
22. 그 외 Agent 구성 요소 - 신규 이미지 생성
23. A2UI POC로 전환 - 신규 이미지 생성
24. A2UI POC 배경 - 기존 이미지 사용
25. A2UI란? - 신규 이미지 생성
26. 왜 HTML/CSS 생성 방식은 위험한가? - 신규 이미지 생성
27. 방향성 고민 - 기존 이미지 사용
28. A2UI POC 주요 구성 - 신규 이미지 생성
29. 가치 있는 UI를 미리 만든다 - 기존 이미지 사용
30. API 명세와 Data Profile - 기존 이미지 사용
31. A2UI 실제 동작 방식 - 기존 이미지 사용
32. POC 화면 1: 대시보드 화면 - 리스트 - 기존 이미지 사용
33. POC 화면 2: 크롭 1 - 리스트 - 기존 이미지 사용
34. POC 화면 3: 크롭 2 - 5개 - 기존 이미지 사용
35. POC 화면 4: 크롭 3 - 1개 - 기존 이미지 사용
36. A2UI는 언제 필요할까? - 기존 이미지 사용
37. 마무리 - 기존 이미지 사용
38. QA - 기존 이미지 사용
---

## 슬라이드별 상세

## Slide 00 - 인사와 발표 주제

### 이미지 제작

- 상태: 신규 이미지 생성 필요
- 기존 이미지: 없음
- 이미지 프롬프트:

> 16:9 hand-drawn crayon presentation title slide on warm paper. Only one large centered readable Korean title: 'Agent와 A2UI POC'. No subtitle, no presenter name, no extra labels, no small text. Minimal friendly AI robot mascot as a small decorative element near the bottom corner. Soft teal, coral, yellow accents, clean empty margins, playful but professional.

### 발표 스크립트

안녕하세요. 오늘 H9 DT실 워크샵의 첫 번째 발표를 맡은 김태훈입니다.

오늘은 제가 준비한 **Agent와 A2UI POC**에 대해서 발표드리겠습니다.

이번 발표는 어려운 AI 용어를 깊게 파고드는 발표라기보다는, 요즘 많이 이야기되는 Agent가 무엇이고, 그 Agent를 Chatbot에 붙였을 때 어떤 업무 UI까지 확장할 수 있는지 보는 발표입니다.

---

## Slide 01 - 발표 순서

### 이미지 제작

- 상태: 신규 이미지 생성 필요
- 기존 이미지: 없음
- 이미지 프롬프트:

> 16:9 crayon-style agenda slide on warm paper. Large readable Korean heading: '오늘의 발표 순서'. Show four clear numbered sections as a simple vertical or horizontal path: '1. Agent란?', '2. Agent 주요 키워드', '3. A2UI란?', '4. A2UI POC 설명'. Add small simple icons for each section: robot, tool/knowledge blocks, UI window, chatbot demo screen. Friendly small AI robot points to the path. Keep text large and readable, no tiny labels, clean margins.

### 발표 스크립트

이번 발표 순서는 이렇게 진행하겠습니다.

먼저 Agent가 무엇인지 설명드리겠습니다.

그리고 Agent를 이야기할 때 자주 같이 나오는 LLM, MCP, Skill, RAG 같은 주요 키워드를 간단히 짚겠습니다.

그다음 이번 POC의 핵심인 A2UI가 무엇인지, 그리고 A2UI로 실제 어떤 화면을 만들었는지 보여드리겠습니다.

---

## Slide 03 - Agent란 무엇일까요?

### 이미지 제작

- 상태: 신규 이미지 생성 필요
- 기존 이미지: 없음
- 이미지 프롬프트:

> 16:9 crayon slide. Center big question mark surrounded by chat bubbles and a small robot thinking. Large readable Korean heading: 'Agent란 무엇일까요?'. Include small labels: 'AI?', 'LLM?', 'Chatbot?', 'Tool?'. Clean and friendly.

### 발표 스크립트

그럼 여기서 Agent란 무엇일까요?

이번 A2UI POC의 핵심 기술도 바로 이 Agent입니다.

그래서 A2UI를 보기 전에, Agent가 무엇인지 먼저 간단히 보고 넘어가겠습니다.

---

## Slide 04 - Agent를 구성하는 것

### 이미지 제작

- 상태: 신규 이미지 생성 필요
- 기존 이미지: 없음
- 이미지 프롬프트:

> 16:9 crayon concept map. Center circle 'Agent' with connected nodes: LLM, MCP, Skill, RAG, Runtime, Guardrails, Memory. Friendly robot connecting puzzle pieces. Large readable Korean heading: 'Agent는 실행 시스템입니다'. Warm paper background.

### 발표 스크립트

Agent는 LLM 하나만을 의미하지 않습니다.

Agent는 **LLM을 중심으로 도구, 지식, 작업 절차, 실행 환경, 안전장치를 조합해서 사용자의 목표를 수행하는 실행 시스템**입니다.

여기에는 LLM, MCP, Skill, RAG, Memory, Runtime, Guardrails 같은 구성 요소가 붙을 수 있습니다.

쉽게 말하면 LLM이 두뇌라면, Agent는 그 두뇌에 손과 발, 작업 매뉴얼, 참고 문서, 안전장치를 붙인 형태라고 볼 수 있습니다.

---

## Slide 07 - LLM이란?

### 이미지 제작

- 상태: 신규 이미지 생성 필요
- 기존 이미지: 없음
- 이미지 프롬프트:

> 16:9 crayon slide. A big open book and neural network cloud turning into sentences. Korean heading: 'LLM = Large Language Model'. Supporting phrase: '문맥을 바탕으로 글을 생성'. Friendly robot reading.

### 발표 스크립트

LLM은 Large Language Model의 줄임말입니다.

대규모 데이터로 학습된 언어 모델이고, 입력된 문맥을 바탕으로 다음에 올 내용을 생성합니다.

그래서 겉으로는 이해하고 추론하는 것처럼 보이지만, 본질적으로는 문맥을 보고 글을 생성하는 엔진에 가깝습니다.

---

## Slide 08 - LLM은 어떻게 답변을 만들까?

### 이미지 제작

- 상태: 신규 이미지 생성 필요
- 기존 이미지: 없음
- 이미지 프롬프트:

> 16:9 crayon process slide. Input bubble 'A2UI가 뭐야?' goes into a text engine, output bubble appears. Korean heading: 'LLM은 글을 생성합니다'. Show arrows and simple typewriter/engine metaphor, readable labels only.

### 발표 스크립트

예를 들어 LLM에 "A2UI가 뭐야?"라고 입력하면, LLM은 이 문맥 다음에 이어질 가능성이 높은 답변을 생성합니다.

"A2UI는 Agent가 사용자에게 UI 형태의 결과를 전달하는 방식입니다"처럼 답을 만들어내는 것이죠.

핵심은 LLM이 스스로 회의실에 들어가서 시스템을 조회하거나, Figma를 열거나, API를 호출하는 것이 아니라는 점입니다.

LLM의 기본 역할은 **입력된 문맥을 바탕으로 답변을 생성하는 것**입니다.

---

## Slide 09 - Agent는 LLM을 업무로 확장한다

### 이미지 제작

- 상태: 신규 이미지 생성 필요
- 기존 이미지: 없음
- 이미지 프롬프트:

> 16:9 crayon slide. LLM brain connected to hands, tools, checklist, and workflow arrows. Korean heading: 'Agent는 LLM을 업무로 확장합니다'. Show transition from '답변' to '작업'. Warm paper texture.

### 발표 스크립트

바로 이 LLM이 우리가 원하는 답을 더 정확히 하게 만들고, 더 나아가 원하는 작업까지 수행하게 만드는 구조가 Agent입니다.

LLM이 생각하고 글을 만드는 역할을 한다면, Agent는 여기에 도구와 실행 흐름을 붙입니다.

그래서 단순히 "답변을 잘하는 AI"에서 "일을 진행하는 AI"로 확장됩니다.

---

## Slide 10 - Agent 예시

### 이미지 제작

- 상태: 신규 이미지 생성 필요
- 기존 이미지: 없음
- 이미지 프롬프트:

> 16:9 crayon examples slide. Three friendly product-like windows labeled 'ChatGPT', 'Claude Code', 'Figma Make', all connected to an Agent robot. Korean heading: '우리가 쓰는 Agent 예시'. Clean balanced composition.

### 발표 스크립트

요즘 우리가 알고 있는 Agent는 어떤 것들이 있을까요?

ChatGPT, Claude Code, Figma Make 같은 것들이 Agent처럼 동작하는 대표적인 예시입니다.

ChatGPT는 대화 중에 파일을 읽고 코드를 실행할 수 있고, Claude Code는 코드베이스를 읽고 수정하고 테스트할 수 있습니다.

Figma Make도 사용자의 요청을 기반으로 디자인이나 UI를 만들어내는 Agent적 제품으로 볼 수 있습니다.

이제 "아, 저런 것들이 Agent구나" 하는 감각을 잡으시면 됩니다.

---

## Slide 11 - 초기 Agent 구성

### 이미지 제작

- 상태: 신규 이미지 생성 필요
- 기존 이미지: 없음
- 이미지 프롬프트:

> 16:9 crayon timeline slide. Early Agent with simple LLM brain, memory note, search magnifier, code icon. Korean heading: '초기 Agent 구성'. Visual tone: simple building blocks, light and understandable.

### 발표 스크립트

초기의 Agent는 비교적 단순했습니다.

LLM이 있고, 대화 기록을 조금 기억하고, 필요하면 검색을 붙이는 정도였습니다.

그래도 이 정도만 해도 이전보다 훨씬 쓸모가 생겼습니다.

글도 잘 작성하고, 이전에 했던 말을 어느 정도 기억하고, 인터넷 검색을 붙이면 더 근거 있는 답변을 할 수 있게 되었습니다.

코딩도 꽤 잘하게 되었습니다.

---

## Slide 12 - 코드 실행이 붙은 Agent

### 이미지 제작

- 상태: 신규 이미지 생성 필요
- 기존 이미지: 없음
- 이미지 프롬프트:

> 16:9 crayon slide. Chat window connected to Python and JavaScript code blocks, small chart and file output. Korean heading: '코드 실행이 붙으면 할 수 있는 일이 늘어납니다'. Friendly robot running a small script.

### 발표 스크립트

그다음 ChatGPT 같은 도구 안에서 JavaScript나 Python을 실행할 수 있게 만들었습니다.

그러자 Agent가 할 수 있는 일이 더 많아졌습니다.

단순히 글로 계산 과정을 설명하는 것이 아니라, 실제로 코드를 실행해서 데이터를 처리하고, 파일을 만들고, 결과를 검증할 수 있게 된 것입니다.

이제는 단순히 글만 작성하는 AI에서 조금씩 일을 수행하는 AI로 바뀌기 시작했습니다.

---

## Slide 13 - 더 많은 외부 도구를 쓰고 싶어진다

### 이미지 제작

- 상태: 신규 이미지 생성 필요
- 기존 이미지: 없음
- 이미지 프롬프트:

> 16:9 crayon slide. Agent robot reaching toward external service doors: Figma, GitHub, DB, Monitoring. Korean heading: '더 많은 도구를 쓰고 싶어집니다'. Show clear arrows from Agent to tools.

### 발표 스크립트

그러면 자연스럽게 이런 생각이 듭니다.

"더 많은 것도 할 수 있지 않을까?"

예를 들어 내가 디자이너라면, Agent가 Figma를 알아서 읽고 수정해주면 좋겠습니다.

개발자라면 GitHub 이슈를 읽고 PR을 만들면 좋겠고, 운영자라면 모니터링 시스템이나 사내 DB를 조회하면 좋겠습니다.

이렇게 Agent가 외부 서비스를 사용해야 하는 요구가 생깁니다.

---

## Slide 14 - MCP 등장

### 이미지 제작

- 상태: 신규 이미지 생성 필요
- 기존 이미지: 없음
- 이미지 프롬프트:

> 16:9 crayon slide. MCP visualized as a USB hub connecting Agent to Figma, GitHub, DB. Korean heading: 'MCP = 외부 도구 연결 방식'. Include readable small label: 'Model Context Protocol'.

### 발표 스크립트

여기서 등장하는 것이 MCP입니다.

MCP는 Model Context Protocol의 줄임말이고, Agent가 외부 서비스나 도구를 사용할 수 있게 해주는 표준 연결 방식입니다.

비유하자면 USB와 비슷합니다.

USB가 여러 장치를 같은 방식으로 연결하게 해주듯이, MCP는 Agent가 Figma, GitHub, DB 같은 도구를 일정한 방식으로 발견하고 호출하게 해줍니다.

---

## Slide 15 - MCP 구조

### 이미지 제작

- 상태: 신규 이미지 생성 필요
- 기존 이미지: 없음
- 이미지 프롬프트:

> 16:9 crayon architecture slide. Left Agent with tool list, middle MCP Server, right tool functions: get_metadata, get_screenshot, get_design_context. Korean heading: 'MCP는 이렇게 연결됩니다'. Use boxes and arrows, readable labels.

### 발표 스크립트

MCP는 보통 이런 식으로 구성됩니다.

먼저 MCP Server가 있습니다.

이 서버 안에는 Figma 파일을 읽는 기능, 특정 node의 정보를 가져오는 기능, 스크린샷을 가져오는 기능처럼 여러 Tool이 등록되어 있습니다.

각 Tool에는 이름, 설명, 입력값 형식이 같이 정의되어 있습니다.

Agent는 MCP Client를 통해 이 Tool 목록을 확인하고, 필요한 Tool을 선택해서 호출합니다.

---

## Slide 16 - Figma MCP 사용 예

### 이미지 제작

- 상태: 신규 이미지 생성 필요
- 기존 이미지: 없음
- 이미지 프롬프트:

> 16:9 crayon scenario slide. Chat bubble says 'Figma에 모바일 페이지 만들어줘'. Agent checks tool list and calls Figma MCP. Show Figma canvas on right. Korean heading: 'Figma MCP 사용 예'. Friendly and clear.

### 발표 스크립트

예를 들어 사용자가 Agent에게 "Figma에 모바일 페이지를 만들어줘"라고 말한다고 해보겠습니다.

Agent는 먼저 자신의 Tool 목록에서 Figma MCP가 있는지 확인합니다.

그리고 Figma MCP가 제공하는 Tool의 설명과 입력값을 보고, 어떤 Tool을 호출해야 할지 판단합니다.

필요하면 Figma의 metadata를 읽고, design context를 가져오고, screenshot을 확인하면서 작업을 진행합니다.

이제 Agent는 단순히 답변만 하는 것이 아니라, 다른 도구를 실제로 사용할 수 있게 됩니다.

---

## Slide 17 - MCP만으로는 부족한 상황

### 이미지 제작

- 상태: 신규 이미지 생성 필요
- 기존 이미지: 없음
- 이미지 프롬프트:

> 16:9 crayon slide. Agent holding many tools but looking at a missing instruction manual. Korean heading: '도구만으로는 부족합니다'. Supporting labels: '순서', '기준', '품질', '검증'. Warm paper background.

### 발표 스크립트

그런데 MCP만으로는 부족한 상황이 생깁니다.

MCP는 도구를 연결해주지만, 그 도구를 **어떤 순서로**, **어떤 기준으로**, **어떤 품질 수준으로** 써야 하는지는 별도의 문제입니다.

예를 들어 발표자료를 만든다고 했을 때, 단순히 이미지 생성 도구가 있다고 좋은 발표자료가 만들어지는 것은 아닙니다.

어떤 구조로 말할지, 어떤 톤을 유지할지, 어떤 검증을 해야 하는지 같은 작업 방식이 필요합니다.

---

## Slide 18 - Skill 등장

### 이미지 제작

- 상태: 신규 이미지 생성 필요
- 기존 이미지: 없음
- 이미지 프롬프트:

> 16:9 crayon slide. A document titled 'SKILL.md' with checklist, examples, template folder, script icon. Korean heading: 'Skill = Agent의 작업 매뉴얼'. Friendly robot reading the manual.

### 발표 스크립트

여기서 Skill이 등장합니다.

Skill은 Agent에게 특정 일을 어떻게 해야 하는지 알려주는 작업 매뉴얼입니다.

보통 `SKILL.md` 같은 문서에 작업 순서, 판단 기준, 예시, 템플릿, 검증 방법이 들어갈 수 있습니다.

도구가 "무엇을 할 수 있는가"를 알려준다면, Skill은 "그 일을 어떻게 잘할 것인가"를 알려줍니다.

---

## Slide 19 - Skill 동작 흐름

### 이미지 제작

- 상태: 신규 이미지 생성 필요
- 기존 이미지: 없음
- 이미지 프롬프트:

> 16:9 crayon flow slide. Steps: 요청 확인 -> Skill 선택 -> 문서 읽기 -> 작업 수행 -> 검증. Korean heading: 'Skill은 이렇게 동작합니다'. Use simple arrows and readable Korean labels.

### 발표 스크립트

Agent가 Skill을 사용하는 흐름은 이렇습니다.

먼저 현재 요청에 맞는 Skill이 있는지 확인합니다.

그리고 Skill 문서를 읽고, 거기에 적힌 작업 순서와 기준을 따라갑니다.

필요한 참고 문서나 템플릿이 있으면 같이 사용하고, 필요한 경우 스크립트나 보조 도구도 실행합니다.

마지막으로 Skill에 적힌 검증 기준에 맞춰 결과를 확인합니다.

즉 Skill은 Agent가 매번 감으로 일하지 않고, 팀이 정한 방식대로 일하게 만드는 장치입니다.

---

## Slide 20 - RAG 소개

### 이미지 제작

- 상태: 신규 이미지 생성 필요
- 기존 이미지: 없음
- 이미지 프롬프트:

> 16:9 crayon slide. Library/search metaphor: question enters search shelf, documents come out, answer is generated. Korean heading: 'RAG = 찾아보고 답하기'. Include label: 'Retrieval-Augmented Generation'.

### 발표 스크립트

MCP와 Skill이 무엇을 하는지 봤습니다.

여기서 한 가지 더 알아보고 넘어가면 좋은 것이 RAG입니다.

RAG는 Retrieval-Augmented Generation의 줄임말입니다.

쉽게 말하면, 모델이 모든 정보를 외우게 하는 방식이 아니라, 필요한 문서나 데이터를 먼저 검색해서 그 내용을 근거로 답변하게 만드는 방식입니다.

QnA Chatbot을 만들 때 특히 많이 사용됩니다.

---

## Slide 21 - RAG 사용 예

### 이미지 제작

- 상태: 신규 이미지 생성 필요
- 기존 이미지: 없음
- 이미지 프롬프트:

> 16:9 crayon QnA slide. User asks 'production 배포 승인 기준은?' Chatbot searches policy docs and runbook, then answers with evidence. Korean heading: 'RAG 사용 예'. Clean chat + document layout.

### 발표 스크립트

예를 들어 Chatbot에 "우리 회사 production 배포 승인 기준이 뭐야?"라고 물어봤다고 해보겠습니다.

LLM이 자기 기억만으로 답하면 틀릴 수 있습니다.

사내 정책은 외부 모델이 기본적으로 알 수 없고, 시간이 지나면서 바뀔 수도 있기 때문입니다.

RAG를 사용하면 먼저 사내 배포 정책 문서, 승인 매뉴얼, 장애 대응 Runbook 같은 문서를 검색합니다.

그리고 검색된 내용 중 관련 있는 부분을 LLM에게 context로 넣어줍니다.

그러면 Chatbot은 그 문서를 근거로 답변할 수 있습니다.

즉 RAG는 Chatbot이 사내 지식을 완벽히 외우게 만드는 것이 아니라, 필요할 때 찾아보고 근거 기반으로 답하게 만드는 방식입니다.

---

## Slide 22 - 그 외 Agent 구성 요소

### 이미지 제작

- 상태: 신규 이미지 생성 필요
- 기존 이미지: 없음
- 이미지 프롬프트:

> 16:9 crayon overview slide. Agent robot surrounded by Memory, Runtime, Guardrails, Observability, State icons. Korean heading: 'Agent를 더 강하게 만드는 요소들'. Balanced concept map.

### 발표 스크립트

이외에도 Agent 안에는 여러 구성 요소가 들어갈 수 있습니다.

대화와 작업 상태를 기억하는 Memory와 State, 실제 Tool 실행을 관리하는 Runtime, 권한과 보안을 담당하는 Guardrails, 실행 과정을 추적하는 Observability가 있습니다.

이런 내부 기능을 잘 만들면, 초기 ChatGPT가 해결하지 못했던 문제를 지금의 Agent 제품들이 해결해가듯이, 특정 산업이나 업무에 특화된 Agent를 만들 수 있습니다.

---

## Slide 23 - A2UI POC로 전환

### 이미지 제작

- 상태: 신규 이미지 생성 필요
- 기존 이미지: 없음
- 이미지 프롬프트:

> 16:9 crayon transition slide. Agent completes work and asks how to show result: text paragraph vs table/card UI. Korean heading: '결과를 어떻게 보여줄까?'. Show split between long text and useful UI.

### 발표 스크립트

지금까지 Agent에 여러 기능을 붙이면 더 많은 일을 할 수 있다는 것을 봤습니다.

그러면 이제 질문을 바꿔보겠습니다.

Agent가 일을 잘 처리한다면, 그 결과를 사용자에게 어떻게 보여주는 것이 좋을까요?

항상 긴 텍스트 답변으로 보여주는 것이 최선일까요?

이번에는 이 질문에서 출발해 A2UI POC를 진행했습니다.

---

## Slide 24 - A2UI POC 배경

### 이미지 제작

- 상태: 기존 생성 이미지 사용
- 기존 이미지: `/images/a2ui-poc/generated/slide-11-background.png`
- 이미지 프롬프트: 신규 생성하지 않음

### 화면 문구

- 답변만으로 충분하지 않은 순간
- 긴 텍스트보다 바로 이해되는 화면
- 팀 차원의 Agent 개발 역량 확보

### 발표 스크립트

이번 A2UI POC를 준비하게 된 배경을 말씀드리겠습니다.

AI Chatbot을 만들면서 가장 많이 했던 고민은 이것이었습니다.

**Chatbot이 사용자에게 더 많은 가치를 주려면 무엇이 필요할까?**

처음에는 자연스럽게 답변 품질을 생각하게 됩니다. 그런데 실제 업무 흐름으로 들어가면 답변 품질만으로는 부족한 순간이 생깁니다.

예를 들어 여러 데이터를 비교해야 하거나, 상태를 한눈에 봐야 하거나, 사용자가 바로 다음 액션을 해야 하는 경우에는 긴 텍스트보다 테이블, 카드, 상세 화면 같은 UI가 훨씬 효과적입니다.

또 앞으로 Agent 기반 개발이 점점 중요해질 것이라고 보고, 팀 차원에서도 Agent 관련 개발 역량을 확보해 나갈 필요가 있다고 판단했습니다.

그래서 Chatbot에 A2UI 기능을 붙여보는 POC를 진행하게 되었습니다.

---

## Slide 25 - A2UI란?

### 이미지 제작

- 상태: 신규 이미지 생성 완료
- 생성 이미지: `/images/a2ui-poc/final/slide-25-a2ui-intro.png`
- 이미지 프롬프트:

> 16:9 hand-drawn crayon slide on warm paper. Large readable Korean title: 'A2UI란?'. A friendly small AI robot sits at a desk and draws UI components inside a large chatbot window on a monitor. The chatbot window shows simple cards, a table, and buttons being sketched by the robot, emphasizing that A2UI appears inside chat. Soft teal, coral, yellow accents, clean margins, no subtitle, no extra labels, no raw code.

### 발표 스크립트

A2UI는 여기서는 Agent-to-UI, 또는 Agent-to-User Interface의 의미로 사용하겠습니다.

Agent가 사용자에게 단순 텍스트만 주는 것이 아니라, UI로 보여줄 수 있는 의도와 데이터를 전달하는 방식입니다.

처음 보면 이런 생각이 들 수 있습니다.

"Agent가 코딩을 할 줄 아니까 HTML과 CSS를 만들어서 바로 보여주면 되는 것 아닐까?"

---

## Slide 26 - 왜 HTML/CSS 생성 방식은 위험한가?

### 이미지 제작

- 상태: 신규 이미지 생성 완료
- 생성 이미지: `/images/a2ui-poc/final/slide-26-html-css-risk.png`
- 이미지 프롬프트:

> 16:9 hand-drawn crayon slide on warm paper. Large readable Korean title: 'html과 css로 매번 만들게 하는것일까?'. A chat bubble says '화면을 그려줘'. A friendly small AI robot at a desk looks confused and overwhelmed, surrounded by messy UI scraps, HTML/CSS paper snippets, tangled arrows, and question marks. Playful but professional, soft teal, coral, yellow accents, no dense code, no extra labels.

### 발표 스크립트

하지만 이 방식은 서비스에 바로 적용하기 어렵습니다.

AI는 확률적으로 결과를 생성하기 때문에 같은 요청에도 매번 조금씩 다른 UI를 만들 수 있습니다.

그렇게 되면 버튼 위치가 달라지고, 표 모양이 달라지고, 서비스 디자인이 흔들릴 수 있습니다.

보안 측면에서도 검증되지 않은 HTML, CSS, JavaScript를 바로 실행하는 것은 위험합니다.

그래서 이번 POC에서는 Agent가 화면 코드를 마음대로 만들게 하지 않았습니다.

대신 미리 검증된 UI 컴포넌트를 준비해두고, Agent는 그중 어떤 UI가 현재 요청과 데이터에 적합한지 선택하도록 했습니다.

---

## Slide 27 - 방향성 고민

### 이미지 제작

- 상태: 기존 생성 이미지 사용
- 기존 이미지: `/images/a2ui-poc/generated/slide-13-direction.png`
- 이미지 프롬프트: 신규 생성하지 않음

### 화면 문구

- Agent에게 UI를 어디까지 맡길 것인가?
- 너무 자유로우면 불안정합니다
- 너무 고정하면 유연하지 않습니다
- 선택한 방식: 검증된 UI + Agent의 선택

### 발표 스크립트

이번 POC에서 가장 많이 고민한 부분은 이것이었습니다.

**Agent에게 UI를 어디까지 맡길 것인가?**

Agent가 모든 화면을 자유롭게 만들게 하면 유연성은 높아집니다. 하지만 결과가 불안정해질 수 있습니다. 디자인도 흔들릴 수 있고, 서비스에서 보장해야 하는 품질을 유지하기 어렵습니다.

반대로 모든 UI를 고정해두면 안정적입니다. 하지만 사용자의 다양한 요청이나 데이터 형태에 유연하게 대응하기 어렵습니다.

그래서 이번 POC에서는 중간 지점을 선택했습니다.

**의미 있는 UI의 외형과 컴포넌트는 미리 만들어두고, Agent는 사용자의 요청과 API 데이터 형식에 따라 가장 적절한 UI를 선택하도록 했습니다.**

이게 이번 POC의 핵심 방향입니다.

---

## Slide 28 - A2UI POC 주요 구성

### 이미지 제작

- 상태: 신규 이미지 생성 완료
- 생성 이미지: `/images/a2ui-poc/final/slide-28-a2ui-poc-structure.png`
- 이미지 프롬프트:

> 16:9 hand-drawn crayon architecture slide on warm paper. Large readable Korean title: 'A2UI POC 주요 구성'. Three large connected blocks across the center with exact labels: 'A2UI Component', 'Admin MCP', 'Agent Function'. Left block shows reusable UI components such as table, card, button. Middle block shows Admin screen and MCP Server where components are registered and managed. Right block shows Agent Function calling MCP and choosing the right UI. Friendly small AI robot connects the blocks with arrows. Soft teal, coral, yellow accents, clean margins, no tiny text, no watermark.

### 화면 문구

- A2UI POC 주요 구성
- A2UI Component
- Admin MCP
- Agent Function

### 발표 스크립트

A2UI POC 주요 구성입니다.

A2UI Component를 만들어두고 Admin에 해당 컴포넌트를 등록해두고, MCP 서버를 통해서 Agent에서 MCP를 호출할 수 있도록 합니다.

---

## Slide 29 - 가치 있는 UI를 미리 만든다

### 이미지 제작

- 상태: 기존 생성 이미지 사용
- 기존 이미지: `/images/a2ui-poc/generated/slide-18-admin-ui-catalog.png`
- 이미지 프롬프트: 신규 생성하지 않음

### 화면 문구

- 테이블
- 카드 리스트
- 상세 카드
- 차트
- 액션 버튼
- Admin UI Catalog

### 발표 스크립트

그래서 이번 POC에서는 Agent가 화면을 마음대로 만들게 하지 않았습니다.

대신 업무적으로 가치 있는 UI를 미리 만들어두고, Admin에 등록하는 방향을 잡았습니다.

예를 들면 목록 비교에는 테이블, 일부 항목을 빠르게 볼 때는 카드 리스트, 한 건을 깊게 볼 때는 상세 카드가 적합합니다.

차트나 액션 버튼도 마찬가지입니다. 화면 자체는 검증된 컴포넌트로 만들고, Agent는 어떤 화면이 지금 요청에 맞는지 선택합니다.

이렇게 검증된 UI를 등록해두면 디자인 일관성과 안정성을 유지하면서도, Agent가 상황에 맞는 화면을 선택할 수 있습니다.

---

## Slide 30 - API 명세와 Data Profile

### 이미지 제작

- 상태: 기존 생성 이미지 사용
- 기존 이미지: `/images/a2ui-poc/generated/slide-19-api-data-profile.png`
- 이미지 프롬프트: 신규 생성하지 않음

### 화면 문구

- API Registry
- paramsSchema
- capabilities
- responseHint
- Data Profile
- rowCount / fields / time / metric

### 발표 스크립트

UI만 등록한다고 끝나는 것은 아닙니다.

Agent가 어떤 데이터를 가져올 수 있는지도 알아야 합니다.

그래서 API 목록을 등록해둡니다. 여기에는 API가 어떤 질문에 답할 수 있는지, 어떤 파라미터를 받는지, pagination이나 filtering이 가능한지 같은 정보가 들어갑니다.

이 부분은 발표에서는 **API 명세**라고 부르겠습니다. 코드 관점에서는 `API Registry`나 `API Contract`에 가깝습니다.

그리고 실제 API 응답이 오면 그 데이터를 바로 UI에 넣는 것이 아니라, 먼저 `Data Profile`을 만듭니다.

Data Profile은 이 데이터가 여러 row인지, 시간 필드가 있는지, 숫자 metric이 있는지, 테이블에 적합한지 차트에 적합한지를 요약한 정보입니다.

---

## Slide 31 - A2UI 실제 동작 방식

### 이미지 제작

- 상태: 기존 생성 이미지 사용
- 기존 이미지: `/images/a2ui-poc/generated/slide-20-a2ui-runtime-flow.png`
- 이미지 프롬프트: 신규 생성하지 않음

### 화면 문구

- 사용자 질문
- API 선택
- 파라미터 추출
- API 실행
- Data Profile
- Render Plan
- SurfaceEnvelope
- SurfaceRenderer

### 발표 스크립트

실제 POC에서는 이런 흐름으로 동작합니다.

사용자가 “지난주 production에서 실패한 배포 목록 보여줘”라고 입력하면, 먼저 이 요청이 Data A2UI로 처리할 수 있는 요청인지 판단합니다.

그다음 API Registry에서 적절한 API를 고릅니다. 이 경우에는 배포 이력 조회 API가 선택됩니다.

이후 사용자의 문장에서 지난주, production, 실패 같은 조건을 파라미터로 추출하고, 등록된 스키마에 맞는지 검증합니다.

검증이 끝나면 API를 실행하고, 응답 데이터로 Data Profile을 만듭니다.

그다음 사용자 의도와 데이터 구조를 보고 Render Plan을 선택합니다.

목록 비교가 필요하면 `table.paginated`, 일부만 훑는 요청이면 `card.simpleList`, 한 건 상세 요청이면 `card.profile`을 선택합니다.

마지막으로 `SurfaceEnvelope`라는 형태로 UI 정보와 데이터를 내려주고, 클라이언트의 `SurfaceRenderer`가 실제 화면을 렌더링합니다.

---

## Slide 32 - POC 화면 1: 대시보드 화면 - 리스트

### 이미지 제작

- 상태: 기존 생성 이미지 사용
- 기존 이미지: `/images/a2ui-poc/poc-flow/01-table.png`
- 이미지 프롬프트: 신규 생성하지 않음

### 화면 문구

- 대시보드 화면 - 리스트
- “지난주 production에서 실패한 배포 목록 보여줘”
- `table.paginated`

### 발표 스크립트

이제 실제 POC 화면을 보면서 설명드리겠습니다.

먼저 전체 화면입니다.

왼쪽에는 기존 DevOps Console 화면이 있고, 오른쪽에는 Chatbot 패널이 열려 있습니다.

사용자가 “지난주 production에서 실패한 배포 목록 보여줘”라고 입력하면, Agent는 이 요청을 데이터 조회 요청으로 판단합니다.

그리고 API를 선택하고, 지난주, production, 실패 같은 조건을 파라미터로 추출한 뒤 데이터를 가져옵니다.

여기서는 응답 데이터가 여러 개의 배포 row로 구성되어 있고, 서비스, 환경, 버전, 상태, 실패 단계처럼 서로 비교해야 하는 필드가 많습니다.

그래서 Agent는 등록된 UI 중에서 `table.paginated`가 적합하다고 판단하고, Chatbot 안에 테이블 surface를 렌더링하도록 내려줍니다.

이 장에서는 전체 서비스 화면 안에서 A2UI가 어떤 위치에 붙는지 먼저 보여주고, 다음 장에서 채팅 영역만 확대해서 보겠습니다.

---

## Slide 33 - POC 화면 2: 크롭 1 - 리스트

### 이미지 제작

- 상태: 기존 생성 이미지 사용
- 기존 이미지: `/images/a2ui-poc/poc-flow/01-table-chat-crop.png`
- 이미지 프롬프트: 신규 생성하지 않음

### 화면 문구

- 크롭 1 - 리스트
- Chatbot 안에서 테이블 UI 렌더링
- `table.paginated`

### 발표 스크립트

채팅 영역만 확대해서 보면 구조가 더 잘 보입니다.

위쪽에는 사용자의 질문이 있고, 아래에는 Assistant 답변과 함께 실제 테이블 UI가 들어갑니다.

여기서 중요한 점은 Assistant가 단순히 텍스트로 “목록은 이렇습니다”라고 말하는 데서 끝나지 않는다는 점입니다.

Agent는 데이터가 여러 행이고 비교해야 할 필드가 많다는 것을 보고, 목록 비교에 적합한 테이블 UI를 선택합니다.

클라이언트는 Agent가 내려준 Render Plan과 데이터를 받아서, 미리 만들어둔 `table.paginated` 컴포넌트로 안전하게 렌더링합니다.

즉 Agent가 HTML을 새로 만들어 실행하는 것이 아니라, 등록된 UI 중 적절한 것을 선택하고 데이터를 연결하는 방식입니다.

이렇게 보면 A2UI는 Chatbot 안에서 “읽기 좋은 업무 화면”을 바로 보여주는 역할을 한다고 볼 수 있습니다.

---

## Slide 34 - POC 화면 3: 크롭 2 - 5개

### 이미지 제작

- 상태: 기존 생성 이미지 사용
- 기존 이미지: `/images/a2ui-poc/poc-flow/02-card-list-chat-crop.png`
- 이미지 프롬프트: 신규 생성하지 않음

### 화면 문구

- 크롭 2 - 5개
- “실패한 배포 5건 카드로 보여줘”
- `card.simpleList`

### 발표 스크립트

다음은 같은 데이터 도메인이지만 요청 방식이 다른 경우입니다.

사용자가 “실패한 배포 5건 카드로 보여줘”라고 요청하면, 전체 목록을 비교하겠다는 것보다 일부 항목을 빠르게 훑어보고 싶다는 의도가 더 강합니다.

그래서 Agent는 같은 API 데이터를 가져오더라도 테이블이 아니라 `card.simpleList`를 선택합니다.

화면에서는 각 배포 건이 카드 단위로 나뉘어 보입니다.

테이블은 여러 항목을 비교하기 좋고, 카드 리스트는 몇 개 항목을 빠르게 훑어보기에 좋습니다.

이 장면에서 보여주고 싶은 포인트는 A2UI가 단순히 “데이터 타입 하나에 UI 하나를 고정 매핑”하는 방식이 아니라는 점입니다.

**같은 API 데이터라도 사용자의 요청 의도에 따라 표현 방식이 달라질 수 있습니다.**

이게 Agent가 UI 선택에 개입하는 지점입니다.

---

## Slide 35 - POC 화면 4: 크롭 3 - 1개

### 이미지 제작

- 상태: 기존 생성 이미지 사용
- 기존 이미지: `/images/a2ui-poc/poc-flow/03-profile-card-chat-crop.png`
- 이미지 프롬프트: 신규 생성하지 않음

### 화면 문구

- 크롭 3 - 1개
- “상세 한 개만 보여줘”
- `card.profile`

### 발표 스크립트

마지막은 한 건을 자세히 보고 싶은 경우입니다.

사용자가 “실패한 배포 상세 한 개만 보여줘”라고 요청하면, Agent는 여러 row를 비교하는 것보다 한 건의 상세 정보를 정리해서 보여주는 것이 더 적합하다고 판단합니다.

그래서 이번에는 테이블도 아니고 카드 리스트도 아닌, `card.profile` 형태의 단일 상세 카드를 선택합니다.

상세 카드에는 deployment id, service, version, failure stage, failure reason, incident id 같은 정보가 정리됩니다.

이런 정보는 테이블 한 줄 안에 모두 넣으면 읽기 어렵습니다. 반대로 상세 카드로 보여주면 운영자가 “무슨 배포가 왜 실패했는지”를 바로 파악할 수 있습니다.

여기까지 보면 POC의 핵심이 정리됩니다.

**목록이면 테이블, 일부를 훑으면 카드 리스트, 한 건을 깊게 보면 상세 카드.**

즉 A2UI는 AI가 화면을 마음대로 그리는 것이 아니라, **사용자 요청과 데이터 형태를 보고 준비된 UI 중 적절한 것을 선택해 채팅 안에 렌더링하는 방식**입니다.

---

## Slide 36 - A2UI는 언제 필요할까?

### 이미지 제작

- 상태: 기존 생성 이미지 사용
- 기존 이미지: `/images/a2ui-poc/generated/slide-18-a2ui-need.png`
- 이미지 프롬프트: 신규 생성하지 않음

### 화면 문구

- 기존 업무가 복잡할 때
- 기존 업무가 반복적일 때
- 기존 프로젝트를 손보기 어려울 때

### 발표 스크립트

마지막으로, A2UI는 언제 필요할까요?

A2UI가 모든 화면을 대체해야 하는 것은 아닙니다. 단순한 질문과 답변은 텍스트가 더 빠르고 자연스러울 수 있습니다.

하지만 기존 업무가 복잡한 경우에는 A2UI가 효과적입니다.

예를 들어 사용자가 여러 페이지를 오가면서 데이터를 확인하고, 상태를 비교하고, 다시 다른 화면에서 액션을 해야 하는 업무라면 Chatbot 안에서 필요한 UI를 바로 보여주는 것이 도움이 됩니다.

두 번째는 기존 업무가 반복적일 때입니다.

매번 같은 조건으로 조회하고, 같은 항목을 비교하고, 같은 버튼을 누르는 일이 반복된다면 Agent가 요청을 이해하고 적절한 UI를 바로 보여주는 방식이 업무 시간을 줄일 수 있습니다.

세 번째는 기존 프로젝트를 손보기 어려울 때입니다.

이미 운영 중인 서비스의 화면을 크게 바꾸기는 어렵지만, Chatbot이나 사이드 패널 형태로 A2UI를 붙이면 기존 프로젝트를 크게 수정하지 않고도 플러그인처럼 업무 화면을 확장할 수 있습니다.

그래서 A2UI는 “모든 화면을 AI가 새로 만든다”가 아니라, 기존 업무 흐름 위에 Agent 기반 UI를 덧붙여서 복잡하고 반복적인 일을 줄이는 접근이라고 볼 수 있습니다.

---

## Slide 37 - 마무리

### 이미지 제작

- 상태: 기존 생성 이미지 사용
- 기존 이미지: `/images/a2ui-poc/generated/slide-19-closing.png`
- 이미지 프롬프트: 신규 생성하지 않음

### 화면 문구

- LLM은 답변을 만들고
- Agent는 일을 진행하고
- A2UI는 결과를 화면으로 보여줍니다

### 발표 스크립트

정리하겠습니다.

첫 번째, LLM은 언어를 이해하고 답변을 생성하는 강력한 엔진입니다. 하지만 실제 업무 데이터를 조회하거나 외부 시스템을 실행하려면 주변 구조가 필요합니다.

두 번째, LLM에 MCP, Skill, RAG, State, Runtime, Guardrails 같은 구성요소를 붙이면 실제 업무를 진행할 수 있는 Agent가 됩니다.

세 번째, A2UI는 Agent의 결과를 텍스트만이 아니라 업무 화면으로 보여주는 접근입니다.

이번 POC에서는 Agent가 화면 코드를 마음대로 생성하는 방식이 아니라, Admin에 등록된 UI와 API 명세를 바탕으로 사용자 요청과 데이터 구조에 맞는 화면을 선택하는 방식을 검증했습니다.

결국 이번 POC의 핵심은 **AI Chatbot을 단순 답변 도구에서 업무 UI Agent로 확장할 수 있는가**였습니다.

이상으로 발표를 마치겠습니다.

---

## Slide 38 - QA

### 이미지 제작

- 상태: 기존 생성 이미지 사용
- 기존 이미지: `/images/a2ui-poc/generated/slide-20-qa.png`
- 이미지 프롬프트: 신규 생성하지 않음

### 화면 문구

- Q&A
- 질문 받겠습니다

### 발표 스크립트

질문 받겠습니다.

---

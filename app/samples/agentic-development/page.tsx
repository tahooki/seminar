import type { Metadata } from "next";
import type { ReactNode } from "react";
import {
  Bot,
  Cable,
  Code2,
  FileText,
  ListTree,
  PackageCheck,
  Sparkles,
  TerminalSquare,
  Workflow,
} from "lucide-react";
import { MarkmapView } from "@/src/presentation/components/MarkmapView";
import { MermaidChart } from "@/src/presentation/components/MermaidChart";
import { SampleShell } from "@/src/presentation/components/SampleShell";

export const metadata: Metadata = {
  title: "Agentic 개발 발표 덱 | Seminar Visual Lab",
  description:
    "LLM, Code Agent, Prompt, Agentic Loop, MCP, AGENTS.md, Skill을 하나의 흐름으로 설명하는 HTML 발표 페이지",
};

const outline = [
  { href: "#slide-1", label: "오프닝" },
  { href: "#slide-2", label: "LLM" },
  { href: "#slide-3", label: "Code Agent" },
  { href: "#slide-4", label: "Prompt" },
  { href: "#slide-5", label: "Loop" },
  { href: "#slide-6", label: "MCP" },
  { href: "#slide-7", label: "AGENTS.md" },
  { href: "#slide-8", label: "Skill" },
  { href: "#slide-9", label: "정리" },
];

const openingFlow = `
flowchart LR
  A["LLM<br/>글쓰는 확률 머신"] --> B["Prompt<br/>확률을 조정하는 입력"]
  B --> C["Code Agent<br/>로컬 작업자"]
  C --> D["MCP<br/>외부 세계 연결"]
  D --> E["AGENTS.md<br/>프로젝트 규칙"]
  E --> F["Skill<br/>작업 노하우 패키지"]
`;

const agenticLoop = `
sequenceDiagram
  participant Dev as 개발자
  participant Agent as 로컬 Agent
  participant LLM as LLM 서버
  participant Files as 내 컴퓨터

  Dev->>Agent: 프롬프트 입력
  Agent->>LLM: 현재 요청과 컨텍스트 전달
  LLM-->>Agent: 파일 읽기 요청
  Agent->>Files: src/api.ts 읽기
  Files-->>Agent: 파일 내용 반환
  Agent->>LLM: 결과 전달
  LLM-->>Agent: 수정 요청
  Agent->>Files: 실제 파일 변경
  Agent-->>Dev: 작업 결과 보고
`;

const figmaMcpFlow = `
flowchart LR
  U["사용자 요청"] --> A["Agent 판단"]
  A --> M["MCP Client"]
  M --> F["Figma MCP Server"]
  F --> API["Figma API"]
  API --> D["디자인 데이터"]
  D --> L["LLM 컨텍스트"]
  L --> C["React 컴포넌트 생성"]
`;

const contextMap = `
# Agentic 개발
## 모델의 한계
### 확률 기반 생성
### 환각 가능성
### 로컬 환경 직접 조작 불가
## 개발자가 추가하는 것
### Prompt
### Agentic Loop
### MCP
### AGENTS.md
### Skill
## 목표
### 더 좋은 코드
### 더 안전한 작업
### 더 재사용 가능한 흐름
`;

const promptExample = `"좋게 해줘" 보다는

"이 함수의 책임을 분리해줘.
변수명은 camelCase를 유지하고,
에러 처리는 try-catch로 감싸고,
변경 이유를 마지막에 3줄로 요약해줘."`;

const agentsExample = `# AGENTS.md

## 기술 스택
- Next.js App Router
- TypeScript strict
- Tailwind CSS

## 반드시 지킬 것
- 패키지 매니저는 pnpm만 사용한다.
- 새 UI는 src/components/ui 아래에 만든다.
- src/legacy 폴더는 수정하지 않는다.

## 필요할 때 읽을 문서
- docs/architecture.md
- docs/data-model.md`;

const skillTree = `skills/
└── pdf-generation/
    ├── SKILL.md
    ├── templates/
    └── scripts/`;

const scenes = [
  {
    title: "LLM",
    text: "다음 단어를 그럴듯하게 이어 쓰는 확률 머신이다.",
    icon: Sparkles,
  },
  {
    title: "Prompt",
    text: "원하는 결과가 나올 확률을 입력 설계로 끌어올린다.",
    icon: Code2,
  },
  {
    title: "Agentic Loop",
    text: "읽기, 수정, 실행 결과를 다시 모델에게 돌려보내며 작업한다.",
    icon: Workflow,
  },
  {
    title: "MCP",
    text: "Figma, DB, Slack 같은 외부 도구를 표준 방식으로 연결한다.",
    icon: Cable,
  },
  {
    title: "AGENTS.md",
    text: "프로젝트에서 항상 지켜야 하는 규칙을 자동으로 읽히게 한다.",
    icon: FileText,
  },
  {
    title: "Skill",
    text: "특정 작업의 베스트 프랙티스, 스크립트, 템플릿을 재사용한다.",
    icon: PackageCheck,
  },
];

type DeckSlideProps = {
  id: string;
  kicker: string;
  title: string;
  lead?: string;
  children?: ReactNode;
  hero?: boolean;
};

function DeckSlide({ id, kicker, title, lead, children, hero }: DeckSlideProps) {
  return (
    <article id={id} className={`deck-slide${hero ? " hero-slide" : ""}`}>
      <p className="slide-kicker">{kicker}</p>
      <h2>{title}</h2>
      {lead ? <p className="slide-lead">{lead}</p> : null}
      {children}
    </article>
  );
}

function CodeWindow({ children }: { children: string }) {
  return (
    <pre className="code-window">
      <code>{children}</code>
    </pre>
  );
}

export default function AgenticDevelopmentPage() {
  return (
    <SampleShell
      eyebrow="Presentation / Agentic Development"
      title="AI 개발 기초: 개발자 관점에서 이해하는 Agentic 개발"
      description="LLM에서 시작해 Code Agent, Prompt, Agentic Loop, MCP, AGENTS.md, Skill까지 이어지는 흐름을 발표용 HTML 덱으로 정리했습니다."
      note="핵심 관점은 하나입니다. 각 개념은 글쓰는 확률 머신의 한계를 보완하기 위해 등장했습니다."
    >
      <nav className="deck-outline" aria-label="Agentic 개발 발표 목차">
        {outline.map((item, index) => (
          <a key={item.href} href={item.href}>
            {String(index + 1).padStart(2, "0")} {item.label}
          </a>
        ))}
      </nav>

      <section className="deck" aria-label="Agentic 개발 발표 덱">
        <DeckSlide
          id="slide-1"
          kicker="Slide 01 / Opening"
          title="Agentic 개발은 확률 머신을 실제 업무 시스템으로 만드는 과정이다"
          lead="처음에는 LLM에게 말을 잘 거는 문제처럼 보입니다. 하지만 실무로 들어가면 파일을 읽고, 도구를 호출하고, 규칙을 지키고, 반복 작업을 재사용하는 작업 환경 설계 문제가 됩니다."
          hero
        >
          <MermaidChart chart={openingFlow} />
        </DeckSlide>

        <DeckSlide
          id="slide-2"
          kicker="Slide 02 / LLM"
          title="먼저 LLM은 글쓰는 확률 머신이다"
          lead="LLM은 사실 데이터베이스처럼 정답을 조회하는 기계가 아닙니다. 지금까지의 문맥을 보고 다음에 올 법한 토큰을 계속 고르는 생성 시스템입니다."
        >
          <div className="slide-grid">
            <div className="slide-panel emphasis">
              <TerminalSquare size={30} aria-hidden="true" />
              <h3>핵심 감각</h3>
              <p className="quote-line">
                지금까지의 글을 봤을 때, 다음에 올 가장 그럴듯한 단어는 무엇일까?
              </p>
            </div>
            <div className="slide-panel">
              <h3>그래서 생기는 현상</h3>
              <ul className="slide-list">
                <li>패턴에서 크게 벗어나기 어렵다.</li>
                <li>사실보다 그럴듯함을 우선할 때가 있다.</li>
                <li>입력이 달라지면 결과도 크게 달라진다.</li>
              </ul>
            </div>
          </div>
        </DeckSlide>

        <DeckSlide
          id="slide-3"
          kicker="Slide 03 / Code Agent"
          title="개발자는 이 확률 머신을 Code Agent로 쓴다"
          lead="Claude Code, Codex CLI, Cursor, Windsurf, Copilot처럼 표면은 달라도 공통점은 같습니다. 개발자가 글로 요청하고, agent가 코드베이스 위에서 작업합니다."
        >
          <div className="slide-grid three">
            <div className="slide-panel">
              <TerminalSquare size={30} aria-hidden="true" />
              <h3>터미널</h3>
              <p>명령어와 파일 변경이 가까운 환경에서 빠르게 작업한다.</p>
            </div>
            <div className="slide-panel emphasis">
              <Code2 size={30} aria-hidden="true" />
              <h3>IDE</h3>
              <p>열려 있는 파일, 선택 영역, 진단 정보와 함께 수정한다.</p>
            </div>
            <div className="slide-panel">
              <Bot size={30} aria-hidden="true" />
              <h3>전용 앱</h3>
              <p>문서, 브라우저, 외부 도구까지 넓게 연결한다.</p>
            </div>
          </div>
          <p className="quote-line">
            도구가 달라도 출발점은 동일합니다. 개발자가 입력하는 모든 글자가
            프롬프트입니다.
          </p>
        </DeckSlide>

        <DeckSlide
          id="slide-4"
          kicker="Slide 04 / Prompt"
          title="프롬프트 엔지니어링은 확률을 원하는 쪽으로 밀어주는 일이다"
          lead="역할, 제약, 예시, 출력 형식을 명확히 주면 LLM이 더 좁고 유용한 후보군 안에서 답을 만들 가능성이 높아집니다."
        >
          <div className="slide-grid">
            <div className="slide-panel">
              <h3>나쁜 요청</h3>
              <CodeWindow>{`"이 함수 좋게 해줘"`}</CodeWindow>
            </div>
            <div className="slide-panel emphasis">
              <h3>좋은 요청</h3>
              <CodeWindow>{promptExample}</CodeWindow>
            </div>
          </div>
          <ul className="slide-list">
            <li>명확한 지시: 무엇을 바꾸고 무엇을 유지할지 말한다.</li>
            <li>역할 부여: 어떤 관점에서 판단할지 좁힌다.</li>
            <li>예시 제공: 원하는 출력의 모양을 보여준다.</li>
          </ul>
        </DeckSlide>

        <DeckSlide
          id="slide-5"
          kicker="Slide 05 / Agentic Loop"
          title="하지만 LLM은 내 컴퓨터를 직접 만지지 않는다"
          lead="LLM은 요청을 내려줄 뿐이고, 파일 읽기와 수정은 로컬 Agent 프로그램이 수행합니다. 이 주고받기를 여러 번 반복하는 구조가 Agentic Loop입니다."
        >
          <MermaidChart chart={agenticLoop} />
          <p className="quote-line">
            한 번에 답하는 챗봇에서, 여러 단계에 걸쳐 실제 작업을 수행하는 시스템으로 넘어가는 지점입니다.
          </p>
        </DeckSlide>

        <DeckSlide
          id="slide-6"
          kicker="Slide 06 / MCP"
          title="MCP는 Agent가 코드베이스 밖의 세계와 대화하는 표준이다"
          lead="Figma 디자인을 React 컴포넌트로 만들려면 코드만 읽어서는 부족합니다. Agent가 Figma, DB, Slack, 사내 시스템 같은 외부 맥락을 가져와야 합니다."
        >
          <div className="slide-grid">
            <div className="slide-panel">
              <h3>비유</h3>
              <p className="quote-line">
                MCP는 AI를 위한 USB-C처럼, 도구마다 달랐던 연결 방식을 하나의 표준으로 맞춥니다.
              </p>
            </div>
            <div className="slide-panel emphasis">
              <h3>Figma MCP 흐름</h3>
              <MermaidChart chart={figmaMcpFlow} />
            </div>
          </div>
        </DeckSlide>

        <DeckSlide
          id="slide-7"
          kicker="Slide 07 / AGENTS.md"
          title="반복되는 잔소리는 프로젝트 규칙 파일로 옮긴다"
          lead="매번 같은 프롬프트를 쓰는 대신, 프로젝트 루트에 AGENTS.md를 두고 agent가 항상 참고할 규칙을 선언합니다."
        >
          <div className="slide-grid">
            <div className="slide-panel emphasis">
              <FileText size={30} aria-hidden="true" />
              <h3>AGENTS.md의 역할</h3>
              <ul className="slide-list">
                <li>프로젝트 스택과 명령어를 알려준다.</li>
                <li>수정 금지 영역과 코딩 규칙을 고정한다.</li>
                <li>상세 문서는 docs 폴더로 연결한다.</li>
              </ul>
            </div>
            <div className="slide-panel">
              <h3>예시</h3>
              <CodeWindow>{agentsExample}</CodeWindow>
            </div>
          </div>
        </DeckSlide>

        <DeckSlide
          id="slide-8"
          kicker="Slide 08 / Skill"
          title="Skill은 작업 노하우를 재사용 가능한 패키지로 만든다"
          lead="AGENTS.md가 프로젝트 규칙이라면, Skill은 PDF 생성, Excel 편집, 발표 페이지 제작처럼 특정 작업을 잘하기 위한 베스트 프랙티스와 도구 묶음입니다."
        >
          <div className="slide-grid">
            <div className="slide-panel">
              <ListTree size={30} aria-hidden="true" />
              <h3>개념 지도</h3>
              <MarkmapView markdown={contextMap} />
            </div>
            <div className="slide-panel emphasis">
              <PackageCheck size={30} aria-hidden="true" />
              <h3>Skill 구조</h3>
              <CodeWindow>{skillTree}</CodeWindow>
              <ul className="slide-list">
                <li>SKILL.md에는 언제 쓰는지와 작업 순서를 둔다.</li>
                <li>templates와 scripts는 필요할 때만 불러온다.</li>
                <li>이 방식이 점진적 공개입니다.</li>
              </ul>
            </div>
          </div>
        </DeckSlide>

        <DeckSlide
          id="slide-9"
          kicker="Slide 09 / Summary"
          title="각 개념은 확률 머신의 한계를 하나씩 보완한다"
          lead="용어를 따로 외우기보다, 무엇을 보완하기 위해 등장했는지 순서로 보면 Agentic 개발의 그림이 선명해집니다."
        >
          <div className="slide-grid three">
            {scenes.map((scene) => {
              const Icon = scene.icon;

              return (
                <div key={scene.title} className="slide-panel">
                  <Icon size={30} aria-hidden="true" />
                  <h3>{scene.title}</h3>
                  <p>{scene.text}</p>
                </div>
              );
            })}
          </div>
          <p className="quote-line">
            Agentic 개발이란, 글쓰는 확률 머신에 도구, 규칙, 문서, 반복 워크플로우를 덧붙여 실제 업무를 수행하는 시스템으로 만드는 과정입니다.
          </p>
        </DeckSlide>

        <DeckSlide
          id="slide-10"
          kicker="Slide 10 / Closing"
          title="Prompt engineering에서 Workflow engineering으로"
          lead="앞으로 개발자의 실력은 AI에게 말을 잘 거는 능력에서, AI가 실수 적게 일할 수 있는 환경을 설계하는 능력으로 확장됩니다."
        >
          <div className="blueprint">
            <div className="blueprint-node">
              <strong>좋은 프롬프트</strong>
              <span>모델이 좋은 답을 낼 확률을 높인다.</span>
            </div>
            <div className="blueprint-arrow">→</div>
            <div className="blueprint-node">
              <strong>좋은 작업 환경</strong>
              <span>agent가 실제 업무를 끝낼 가능성을 높인다.</span>
            </div>
          </div>
          <p className="quote-line">
            결국 질문은 하나입니다. 이 확률 머신이 더 좋은 코드와 더 안전한 작업을 하도록, 우리는 어떤 맥락과 도구를 제공할 것인가?
          </p>
        </DeckSlide>
      </section>
    </SampleShell>
  );
}

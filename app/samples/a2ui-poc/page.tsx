import type { Metadata } from "next";
import Image from "next/image";
import type { ReactNode } from "react";
import {
  Bot,
  Cable,
  CheckCircle2,
  ClipboardList,
  Database,
  FileJson,
  Layers3,
  LockKeyhole,
  PackageCheck,
  Route,
  ServerCog,
  ShieldCheck,
  TerminalSquare,
  Workflow,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { MermaidChart } from "@/src/presentation/components/MermaidChart";
import { SampleShell } from "@/src/presentation/components/SampleShell";

export const metadata: Metadata = {
  title: "A2UI POC 발표 덱 | Seminar Visual Lab",
  description:
    "Agents, MCP, Skill, A2UI 개념과 a2ui-poc-rt-new-3 POC 구현 내용을 설명하는 발표 페이지",
};

const outline = [
  { href: "#slide-1", label: "질문" },
  { href: "#slide-2", label: "개념" },
  { href: "#slide-3", label: "문제" },
  { href: "#slide-4", label: "실제 POC" },
  { href: "#slide-5", label: "Surface" },
  { href: "#slide-6", label: "전체 구조" },
  { href: "#slide-7", label: "Agent" },
  { href: "#slide-8", label: "MCP" },
  { href: "#slide-9", label: "Skill" },
  { href: "#slide-10", label: "A2UI" },
  { href: "#slide-11", label: "Admin" },
  { href: "#slide-12", label: "Guardrails" },
  { href: "#slide-13", label: "구현" },
  { href: "#slide-14", label: "시연" },
];

const conceptFlow = `
flowchart LR
  L["LLM<br/>답변 생성"] --> A["Agent<br/>목표 + 도구 + 상태"]
  A --> S["Skill<br/>작업법 패키지"]
  A --> M["MCP<br/>도구 연결 표준"]
  M --> P["A2UI POC<br/>검증된 운영 UI 호출"]
  S --> P
`;

const pocArchitecture = `
flowchart LR
  U["사용자<br/>payments-api 배포"] --> C["Chat UI<br/>Next.js :3000"]
  C --> O["Orchestrator<br/>intent + slots"]
  O --> B["A2UI Bridge"]
  B --> M["Admin MCP<br/>recommend + resolve"]
  M --> API["Mock API<br/>payload source"]
  M --> E["SurfaceEnvelope"]
  E --> SR["SurfaceRenderer<br/>trusted parts"]
  SR --> U
`;

const agentPipeline = `
flowchart TB
  A["1. Awaiting 처리"] --> B["2. Intent 분석"]
  B --> C["3. Workflow 상태"]
  C --> D["4. Tool planning"]
  D --> E["5. Tool 실행 + facts 병합"]
  E --> F["6. Decision Engine"]
  F --> G{"render_surface?"}
  G -->|"yes"| H["8. A2UI surface 생성"]
  G -->|"no"| I["7. Text response"]
`;

const mcpSequence = `
sequenceDiagram
  participant Agent as Agent SDK
  participant MCP as Admin MCP Server
  participant Runtime as Resolver Runtime
  participant API as Mock API
  participant UI as SurfaceRenderer

  Agent->>MCP: a2ui.recommendTemplate(intent, facts)
  MCP-->>Agent: render_surface + templateId
  Agent->>MCP: a2ui.resolveTemplateData(templateId, context)
  MCP->>Runtime: auth, api, binding, validation
  Runtime->>API: service/deploy data
  API-->>Runtime: payload source
  Runtime-->>MCP: SurfaceEnvelope
  MCP-->>Agent: envelope
  Agent-->>UI: trusted surface
`;

const skillFlow = `
flowchart LR
  R["반복 작업<br/>발표자료 만들기"] --> S["Skill.md<br/>절차 + 기준"]
  S --> C["참고 문서<br/>examples + contracts"]
  S --> A["Agent<br/>읽고 실행"]
  C --> A
  A --> O["일관된 산출물<br/>HTML deck + notes"]
`;

const actionLoop = `
sequenceDiagram
  participant User as 운영자
  participant UI as A2UI Surface
  participant Host as Host App
  participant MCP as Admin MCP
  participant API as Backend API

  User->>UI: 배포 시작 클릭
  UI->>Host: actionId + params
  Host->>MCP: a2ui.executeAction
  MCP->>API: POST /api/actions/deploy
  API-->>MCP: action result
  MCP-->>Host: result
  Host-->>UI: status 또는 updated surface
`;

const surfaceFormula = `
flowchart LR
  P["payload<br/>운영 데이터"] --> S["SurfaceEnvelope"]
  C["surfaceConfig<br/>Part 구성"] --> S
  A["actions<br/>허용된 이벤트"] --> S
  S --> R["Renderer"]
  R --> U["Deploy Launchpad"]
`;

const runbook = `# POC demo servers
npm run dev -w @a2ui/demo-mock-api   # :3200 Mock API
npm run dev -w @a2ui/admin           # :3100 Admin + MCP
npm run dev                          # :3000 Next.js

# Optional Python agent
cd packages/demo-agent-server
python -m uvicorn app.main:app --port 8000

# Chat API uses Python agent when enabled
ASSISTANT_BACKEND=python npm run dev`;

const skillTree = `skills/
└── seminar-presentation-builder/
    ├── SKILL.md
    ├── references/
    │   ├── component-contracts.md
    │   └── visual-tool-choice.md
    └── workflow
        ├── route는 Server Component
        ├── 시각화는 기존 컴포넌트 재사용
        └── build 대신 light verification`;

const packages = [
  ["@a2ui/ui", "SurfaceRenderer, primitives, part catalog"],
  ["@a2ui/chat", "A2UISurfaceHost, message surface, action adapter"],
  ["@a2ui/admin", "Admin UI + MCP server + resolver runtime"],
  ["@a2ui/agent-node", "renderOrFallback, MCP client wrapper"],
  ["demo-agent-server", "Python FastAPI 8-step agent pipeline"],
  ["@a2ui/contracts", "JSON Schema, generated TypeScript types"],
];

const conceptCards: Array<{
  title: string;
  text: string;
  icon: LucideIcon;
}> = [
  {
    title: "Agent",
    text: "LLM이 바로 답하지 않고, 목표를 위해 도구를 고르고 결과를 다시 관찰하는 실행 시스템입니다.",
    icon: Bot,
  },
  {
    title: "MCP",
    text: "Agent가 외부 도구를 발견하고 호출하는 표준 통로입니다. 도구 이름, 설명, 입력 스키마가 핵심입니다.",
    icon: Cable,
  },
  {
    title: "Skill",
    text: "Agent가 특정 작업을 반복할 때 참고하는 절차, 기준, 예시, 템플릿 묶음입니다.",
    icon: PackageCheck,
  },
  {
    title: "A2UI",
    text: "Agent가 UI 코드를 보내지 않고, 검증된 컴포넌트로 렌더링할 surface 데이터를 보내는 방식입니다.",
    icon: FileJson,
  },
];

const mcpTools = [
  ["a2ui.recommendTemplate", "intent + facts로 어떤 surface를 띄울지 결정"],
  ["a2ui.resolveTemplateData", "resolver chain을 실행해 SurfaceEnvelope 생성"],
  ["a2ui.executeAction", "UI 버튼 action을 backend action으로 전달"],
  ["a2ui.listTemplates", "사용 가능한 template catalog 조회"],
  ["a2ui.checkAccess", "template 접근 권한 확인"],
  ["a2ui.getTemplateContract", "template input schema 확인"],
];

const storyImages = {
  hero: "/images/a2ui-poc/story-hero-revised.png",
  runtime: "/images/a2ui-poc/story-revision-runtime-architecture.png",
  admin: "/images/a2ui-poc/story-revision-admin-binding.png",
  creation: "/images/a2ui-poc/story-revision-creation-flow.png",
  agent: "/images/a2ui-poc/story-revision-agent-integration.png",
  guardrails: "/images/a2ui-poc/story-revision-ai-vs-component.png",
  catalog: "/images/a2ui-poc/story-revision-component-catalog.png",
  closing: "/images/a2ui-poc/story-revision-closing.png",
};

const pocScreens = {
  intent: "/images/a2ui-poc/poc-deploy-chat-intent.png",
  launchpad: "/images/a2ui-poc/poc-deploy-launchpad-surface.png",
};

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

function StoryImage({ alt, src }: { alt: string; src: string }) {
  return (
    <figure className="poc-story-frame">
      <Image
        alt={alt}
        className="poc-story-image"
        height={941}
        sizes="(max-width: 900px) 100vw, 1120px"
        src={src}
        width={1672}
      />
    </figure>
  );
}

function IconPanel({
  icon: Icon,
  title,
  text,
}: {
  icon: LucideIcon;
  title: string;
  text: string;
}) {
  return (
    <div className="slide-panel">
      <Icon size={30} aria-hidden="true" />
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}

export default function A2UIPocPage() {
  return (
    <SampleShell
      eyebrow="Presentation / A2UI POC"
      title="Agents, MCP, Skill, A2UI로 운영 UI를 호출하는 방법"
      description="a2ui-poc-rt-new-3의 Story 페이지를 바탕으로 Agent, MCP, Skill 개념과 POC 아키텍처, 데모 흐름을 한 번에 발표할 수 있게 정리했습니다."
      note="핵심 메시지: AI가 화면을 자유롭게 그리는 것이 아니라, Agent가 검증된 운영 UI를 호출한다."
    >
      <nav className="deck-outline" aria-label="A2UI POC 발표 목차">
        {outline.map((item, index) => (
          <a key={item.href} href={item.href}>
            {String(index + 1).padStart(2, "0")} {item.label}
          </a>
        ))}
      </nav>

      <section className="deck" aria-label="A2UI POC 발표 덱">
        <DeckSlide
          id="slide-1"
          kicker="Slide 01 / Opening"
          title="운영 콘솔에서 AI는 무엇을 해야 하나"
          lead="답변만 잘하는 챗봇을 넘어서, 필요한 데이터를 찾고, 안전한 UI를 띄우고, 사용자의 액션을 다시 실행 흐름으로 연결해야 합니다."
          hero
        >
          <StoryImage
            alt="대화에서 검증된 운영 UI로 이어지는 A2UI POC 흐름"
            src={storyImages.hero}
          />
          <p className="quote-line">
            오늘의 결론: Agent는 UI를 코딩하지 않고, 검증된 운영 UI를 호출합니다.
          </p>
        </DeckSlide>

        <DeckSlide
          id="slide-2"
          kicker="Slide 02 / Concepts"
          title="Agent, MCP, Skill, A2UI를 한 문장씩만 잡고 갑니다"
          lead="네 개념은 따로 외우는 기술명이 아니라 하나의 실행 흐름입니다. Agent가 판단하고, Skill이 작업법을 주고, MCP가 도구를 연결하고, A2UI가 결과를 조작 가능한 화면으로 보여줍니다."
        >
          <div className="slide-grid">
            {conceptCards.map((card) => (
              <IconPanel key={card.title} {...card} />
            ))}
          </div>
          <MermaidChart chart={conceptFlow} />
        </DeckSlide>

        <DeckSlide
          id="slide-3"
          kicker="Slide 03 / Story"
          title="POC는 김배포 선임의 아침에서 시작합니다"
          lead="매일 12개 서비스와 3개 환경을 보며 배포합니다. 기존 콘솔에서는 이력 확인, 이미지 등록, 요청 생성, 실행까지 화면과 입력이 계속 나뉩니다."
        >
          <div className="metric-strip">
            <div className="metric">
              <strong>3분</strong>
              <span>이전 배포 이력 확인</span>
            </div>
            <div className="metric">
              <strong>7단계</strong>
              <span>이미지 등록부터 실행까지</span>
            </div>
            <div className="metric">
              <strong>21개</strong>
              <span>이미지와 요청 입력 필드</span>
            </div>
          </div>
          <div className="slide-grid">
            <div className="slide-panel">
              <h3>기존 흐름</h3>
              <ul className="slide-list">
                <li>이미지 등록, Request 생성, Run 탭이 분리됩니다.</li>
                <li>서비스, 환경, 버전, CPU, 메모리, 전략을 매번 다시 확인합니다.</li>
                <li>실수하면 뒤로 가서 처음부터 다시 입력합니다.</li>
              </ul>
            </div>
            <div className="slide-panel emphasis">
              <h3>POC 목표</h3>
              <p>
                사용자가 &quot;payments-api 배포해줘&quot;라고 말하면 Agent가 맥락을
                모으고, 검증된 Deploy Launchpad를 대화 안에서 호출합니다.
              </p>
            </div>
          </div>
        </DeckSlide>

        <DeckSlide
          id="slide-4"
          kicker="Slide 04 / POC Capture"
          title="배포 의도에서 서비스 선택으로"
          lead="실제 POC 캡처입니다. 오른쪽 Assistant에 배포하고 싶다고 입력하면 Agent가 deploy.start intent를 잡고, 아직 비어 있는 service slot을 질문으로 되돌립니다."
        >
          <StoryImage
            alt="Deploy workflow에서 배포 의도를 입력하자 Assistant가 배포할 서비스를 묻는 POC 화면"
            src={pocScreens.intent}
          />
          <p className="quote-line poc-compact-quote">
            포인트: Agent는 바로 화면을 만들기 전에 intent와 빠진 slot을 먼저 정리합니다.
          </p>
        </DeckSlide>

        <DeckSlide
          id="slide-5"
          kicker="Slide 05 / A2UI Surface"
          title="서비스를 고르면 Launchpad가 뜹니다"
          lead="POC의 핵심 컷입니다. Agent가 service context와 추천 버전을 모은 뒤 Admin surface config로 검증된 Deploy Launchpad를 렌더링합니다."
        >
          <StoryImage
            alt="payments-api 선택 후 Deploy Launchpad A2UI surface가 Assistant 채팅 안에 표시된 POC 화면"
            src={pocScreens.launchpad}
          />
          <p className="quote-line poc-compact-quote">
            3분짜리 확인 흐름을 대화 두 턴과 검증된 운영 UI 한 장으로 압축합니다.
          </p>
        </DeckSlide>

        <DeckSlide
          id="slide-6"
          kicker="Slide 06 / Architecture"
          title="전체 구조는 Chat, Agent, MCP, Renderer 네 겹입니다"
          lead="Next.js Chat UI에서 요청이 들어오면 orchestrator가 intent와 facts를 만들고, MCP/Admin runtime이 template과 payload를 합쳐 SurfaceEnvelope을 반환합니다."
        >
          <MermaidChart chart={pocArchitecture} />
          <div className="slide-grid three">
            <IconPanel
              icon={Workflow}
              title="Chat Orchestrator"
              text="대화 상태, slot, tool result를 모아 decision mode를 결정합니다."
            />
            <IconPanel
              icon={ServerCog}
              title="Admin MCP"
              text="template catalog, resolver, binding, validation을 MCP tool로 제공합니다."
            />
            <IconPanel
              icon={Layers3}
              title="Surface Renderer"
              text="SurfaceEnvelope을 신뢰된 React part로 바꿔 렌더링합니다."
            />
          </div>
        </DeckSlide>

        <DeckSlide
          id="slide-7"
          kicker="Slide 07 / Agent Runtime"
          title="Agent는 8단계 파이프라인으로 일합니다"
          lead="LLM이 혼자 화면을 만드는 구조가 아닙니다. intent를 잡고, tool을 실행하고, facts를 쌓은 뒤, decision engine이 surface 렌더링 여부를 결정합니다."
        >
          <MermaidChart chart={agentPipeline} />
          <div className="slide-grid">
            <div className="slide-panel">
              <h3>Node 경로</h3>
              <CodeWindow>{`orchestrateChatTurn()
  -> resolveAwaiting()
  -> resolveIntent()
  -> planTools()
  -> executeTool()
  -> evaluateDecision()
  -> buildTurnResponse()`}</CodeWindow>
            </div>
            <div className="slide-panel emphasis">
              <h3>Python 경로</h3>
              <CodeWindow>{`orchestrate_chat_turn()
  -> resolve_intent()
  -> plan_tools()
  -> execute_tool()
  -> evaluate_decision()
  -> render_or_fallback()`}</CodeWindow>
            </div>
          </div>
        </DeckSlide>

        <DeckSlide
          id="slide-8"
          kicker="Slide 08 / MCP"
          title="MCP는 A2UI 기능을 Agent가 부를 수 있는 도구로 노출합니다"
          lead="Admin 서버는 template catalog를 갖고 있고, MCP Server는 그 기능을 tools/call 형태로 열어줍니다. Agent는 내부 구현을 몰라도 도구 설명과 스키마를 보고 호출합니다."
        >
          <MermaidChart chart={mcpSequence} />
          <div className="guide-table-wrap">
            <table className="guide-table">
              <thead>
                <tr>
                  <th>Tool</th>
                  <th>발표 설명</th>
                </tr>
              </thead>
              <tbody>
                {mcpTools.map(([tool, desc]) => (
                  <tr key={tool}>
                    <td>{tool}</td>
                    <td>{desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </DeckSlide>

        <DeckSlide
          id="slide-9"
          kicker="Slide 09 / Skill"
          title="Skill은 Agent에게 작업법을 건네는 패키지입니다"
          lead="Prompt가 이번 요청의 지시라면, Skill은 반복 작업을 위한 작은 매뉴얼입니다. 어떤 문서를 먼저 읽고, 어떤 컴포넌트를 재사용하고, 어떤 검증을 피하거나 실행할지까지 Agent에게 알려줍니다."
        >
          <MermaidChart chart={skillFlow} />
          <div className="slide-grid">
            <div className="slide-panel">
              <h3>이번 덱에서 Skill이 한 일</h3>
              <ul className="slide-list">
                <li>seminar 프로젝트의 발표 페이지 패턴을 먼저 따르게 했습니다.</li>
                <li>Mermaid, 표, 이미지, 기존 deck-slide 스타일 중 맞는 도구를 고르게 했습니다.</li>
                <li>build는 피하고 lint, typecheck, 브라우저 확인으로 가볍게 검증했습니다.</li>
              </ul>
            </div>
            <div className="slide-panel emphasis">
              <h3>Skill 구조</h3>
              <CodeWindow>{skillTree}</CodeWindow>
            </div>
          </div>
          <p className="quote-line poc-compact-quote">
            MCP가 Agent에게 도구를 주고, Skill은 그 도구를 쓰는 작업법을 줍니다.
          </p>
        </DeckSlide>

        <DeckSlide
          id="slide-10"
          kicker="Slide 10 / A2UI Runtime"
          title="화면은 renderer + surfaceConfig + payload입니다"
          lead="renderer는 항상 같고, 호출마다 payload와 surfaceConfig가 바뀝니다. 그래서 같은 안전한 UI 틀 안에서 다른 운영 데이터를 보여줄 수 있습니다."
        >
          <MermaidChart chart={surfaceFormula} />
          <div className="slide-grid three">
            <IconPanel
              icon={Database}
              title="payload"
              text="Mock API, resolver, LLM 결과를 합친 실제 운영 데이터입니다."
            />
            <IconPanel
              icon={ClipboardList}
              title="surfaceConfig"
              text="어떤 Part를 어떤 순서로 배치할지 정하는 구성입니다."
            />
            <IconPanel
              icon={Route}
              title="actions"
              text="클릭을 actionId와 params로 바꿔 host app에 돌려줍니다."
            />
          </div>
          <StoryImage alt="A2UI runtime architecture" src={storyImages.runtime} />
        </DeckSlide>

        <DeckSlide
          id="slide-11"
          kicker="Slide 11 / Admin Binding"
          title="Admin은 UI를 그리는 곳이 아니라 데이터를 연결하는 곳입니다"
          lead="제품팀이 검증한 Part를 publish하고, Admin은 payload source와 binding path를 연결합니다. 이 설정이 MCP runtime에서 SurfaceEnvelope로 조립됩니다."
        >
          <div className="slide-grid">
            <StoryImage alt="Admin binding flow" src={storyImages.admin} />
            <StoryImage alt="A2UI part creation flow" src={storyImages.creation} />
          </div>
          <div className="slide-grid three">
            <IconPanel
              icon={Wrench}
              title="Resolver 등록"
              text="API, Auth, LLM, Transform resolver로 payload 소스를 정의합니다."
            />
            <IconPanel
              icon={PackageCheck}
              title="Part publish"
              text="UX, action contract, fallback이 검증된 Part만 catalog에 올립니다."
            />
            <IconPanel
              icon={CheckCircle2}
              title="Preview & Publish"
              text="미리보기와 validation을 통과한 설정만 runtime에 노출합니다."
            />
          </div>
        </DeckSlide>

        <DeckSlide
          id="slide-12"
          kicker="Slide 12 / Guardrails"
          title="왜 AI가 직접 화면을 그리지 않습니까?"
          lead="운영 UI에서는 매번 새로운 화면보다 매번 같은 안전이 중요합니다. action ID, 권한, 감사, fallback이 호출마다 달라지면 운영 흐름이 깨집니다."
        >
          <div className="slide-grid">
            <div>
              <StoryImage alt="AI 자유 생성 UI와 컴포넌트 기반 A2UI 비교" src={storyImages.guardrails} />
            </div>
            <div className="slide-panel emphasis">
              <ShieldCheck size={30} aria-hidden="true" />
              <h3>검증된 Part의 의미</h3>
              <ul className="slide-list">
                <li>같은 위치의 같은 action contract</li>
                <li>권한과 audit이 붙은 action bridge</li>
                <li>schema validation과 fallback</li>
                <li>우리 디자인 시스템 그대로 렌더링</li>
              </ul>
            </div>
          </div>
          <StoryImage alt="A2UI component catalog" src={storyImages.catalog} />
        </DeckSlide>

        <DeckSlide
          id="slide-13"
          kicker="Slide 13 / Implementation Status"
          title="POC에서는 제품 경계를 패키지로 쪼갰습니다"
          lead="현재 구현은 Next.js 프론트, Admin MCP 서버, Node/Python agent wrapper, contracts, chatbot host integration으로 역할을 분리해 검증했습니다."
        >
          <div className="guide-table-wrap">
            <table className="guide-table">
              <thead>
                <tr>
                  <th>패키지/서버</th>
                  <th>역할</th>
                </tr>
              </thead>
              <tbody>
                {packages.map(([name, role]) => (
                  <tr key={name}>
                    <td>{name}</td>
                    <td>{role}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="slide-grid three">
            <IconPanel
              icon={LockKeyhole}
              title="Fallback"
              text="MCP 서버가 내려가면 기존 binder 또는 text_fallback으로 돌아갑니다."
            />
            <IconPanel
              icon={TerminalSquare}
              title="Tests"
              text="orchestrator, tools, action bridge, surface validation, chatbot host를 테스트합니다."
            />
            <IconPanel
              icon={FileJson}
              title="Contract"
              text="SurfaceEnvelope과 ActionEvent를 JSON Schema와 생성 타입으로 맞춥니다."
            />
          </div>
        </DeckSlide>

        <DeckSlide
          id="slide-14"
          kicker="Slide 14 / Demo Runbook"
          title="시연은 세 서버와 한 문장으로 끝냅니다"
          lead="Mock API, Admin MCP, Next.js를 켜고 대화창에서 payments-api 배포를 요청합니다. Python agent는 선택적으로 FastAPI 서버를 추가해 보여주면 됩니다."
        >
          <div className="slide-grid">
            <CodeWindow>{runbook}</CodeWindow>
            <div className="slide-panel emphasis">
              <h3>발표 마무리 문장</h3>
              <p className="quote-line poc-compact-quote">
                Agent는 더 풍부한 응답을, 운영자는 같은 안전한 화면을 얻습니다.
              </p>
            </div>
          </div>
          <MermaidChart chart={actionLoop} />
          <StoryImage alt="A2UI closing: product team, admin, agent to operations UI" src={storyImages.closing} />
        </DeckSlide>
      </section>
    </SampleShell>
  );
}

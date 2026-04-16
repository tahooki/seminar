import type { Metadata } from "next";
import type { ReactNode } from "react";
import {
  Boxes,
  Braces,
  CheckCircle2,
  FileJson,
  LockKeyhole,
  MousePointerClick,
  Palette,
  ShieldCheck,
} from "lucide-react";
import { MermaidChart } from "@/src/presentation/components/MermaidChart";
import { SampleShell } from "@/src/presentation/components/SampleShell";
import {
  CycleDiagram,
  SketchFlow,
} from "@/src/presentation/components/SketchDiagrams";

export const metadata: Metadata = {
  title: "A2UI 발표 덱 | Seminar Visual Lab",
  description: "A2UI 도입 효과와 개발 범위를 설명하는 HTML 발표 페이지",
};

const a2uiPayload = `{
  "surfaceId": "expense-summary",
  "root": "summary-card",
  "components": [
    {
      "id": "summary-card",
      "component": "Card",
      "children": ["title", "cta"]
    },
    { "id": "title", "component": "Text",
      "props": { "text": "이번 달 지출 요약" } },
    { "id": "cta", "component": "Button",
      "props": { "label": "보고서 저장" } }
  ]
}`;

const deckPayload = `{
  "surfaceId": "a2ui-seminar",
  "root": "deck",
  "components": [
    { "id": "deck", "component": "Presentation",
      "children": ["s1", "s2", "s3"] },
    { "id": "s1", "component": "TitleSlide",
      "props": { "title": "A2UI란 무엇인가" } },
    { "id": "s2", "component": "ProcessFlow",
      "props": { "items": ["Agent", "A2UI", "Renderer"] } }
  ]
}`;

const folderTree = `src/a2ui/
  types.ts
  schema.ts
  catalog.tsx
  renderer.tsx
  bindings.ts
  actions.ts
  transport.ts
  errors.ts`;

const rendererPseudoCode = `function renderNode(id: string) {
  const node = componentMap.get(id);
  assertValid(node);

  const Component = catalog[node.component];
  if (!Component) return <UnknownComponent name={node.component} />;

  const children = node.children?.map(renderNode);
  const props = sanitizeProps(node.component, node.props);

  return <Component {...props}>{children}</Component>;
}`;

const dataFlowChart = `
flowchart LR
  U["User"] --> A["Agent"]
  A --> M["A2UI Message"]
  M --> V["Validate"]
  V --> R["Render"]
  R --> UI["Trusted UI"]
  UI --> U
`;

const renderFlowChart = `
flowchart TB
  A["Payload"] --> B["ID map"]
  B --> C{"Allowed?"}
  C -->|"yes"| D["Sanitize props"]
  D --> E["React tree"]
  C -->|"no"| X["Fallback UI"]
`;

const seminarSequence = `
sequenceDiagram
  participant User as 발표자
  participant Agent as 발표 생성 Agent
  participant A2UI as A2UI Payload
  participant Renderer as Seminar Renderer
  participant Deck as HTML 발표자료

  User->>Agent: "A2UI 도입 발표자료 만들어줘"
  Agent->>A2UI: 슬라이드 구조와 시각화 컴포넌트 생성
  A2UI->>Renderer: JSON 메시지 전달
  Renderer->>Deck: TitleSlide, ProcessFlow, MermaidChart 렌더링
  User->>Deck: 발표 흐름 확인 및 수정
`;

const actionChart = `
flowchart LR
  UI["Button click"] --> A["A2UI Action"]
  A --> V["Action allowlist"]
  V --> T["Transport"]
  T --> AG["Agent"]
  AG --> U["Surface update"]
`;

const sketchFlowItems = [
  { title: "Agent", description: "의도 생성", color: "#ef7d6c" },
  { title: "A2UI", description: "JSON 설계도", color: "#2f80ed" },
  { title: "Renderer", description: "네이티브 UI", color: "#6ba84f" },
];

const effectCycle = [
  { label: "UX", detail: "work screen", color: "#2f80ed" },
  { label: "Security", detail: "data only", color: "#6ba84f" },
  { label: "Design", detail: "catalog", color: "#ef7d6c" },
  { label: "Roles", detail: "clear split", color: "#9b6ee8" },
  { label: "Stream", detail: "progressive", color: "#f2a14a" },
  { label: "Scale", detail: "multi agent", color: "#b37a2f" },
];

const outline = [
  { href: "#slide-1", label: "오프닝" },
  { href: "#slide-2", label: "문제" },
  { href: "#slide-4", label: "정의" },
  { href: "#slide-6", label: "구조" },
  { href: "#slide-7", label: "효과" },
  { href: "#slide-12", label: "코드" },
  { href: "#slide-17", label: "적용" },
  { href: "#slide-18", label: "로드맵" },
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

export default function A2UIDeckPage() {
  return (
    <SampleShell
      eyebrow="Presentation / A2UI"
      title="A2UI: Agent가 UI를 말하게 하는 방법"
      description="A2UI가 무엇이고, 도입하면 어떤 효과가 생기며, 실제 코드에서는 어떤 렌더러와 카탈로그를 개발하게 되는지 발표자료 형태로 구성했습니다."
      note="스크롤하면서 발표할 수 있는 HTML 덱입니다. 각 장은 하나의 슬라이드처럼 읽히도록 구성했습니다."
    >
      <nav className="deck-outline" aria-label="A2UI 발표 목차">
        {outline.map((item, index) => (
          <a key={item.href} href={item.href}>
            {String(index + 1).padStart(2, "0")} {item.label}
          </a>
        ))}
      </nav>

      <section className="deck" aria-label="A2UI 발표 덱">
        <DeckSlide
          id="slide-1"
          kicker="Slide 01 / Opening"
          title="Agent의 결과물은 텍스트에서 인터랙티브 UI로 이동한다"
          lead="A2UI는 agent가 코드를 실행시키는 방식이 아니라, 우리 앱의 디자인 시스템으로 렌더링 가능한 UI 설계도를 말하게 하는 방식입니다."
          hero
        >
          <div className="blueprint">
            <div className="blueprint-node">
              <strong>Agent</strong>
              <span>사용자 의도와 필요한 화면 구조를 결정한다.</span>
            </div>
            <div className="blueprint-arrow">→</div>
            <div className="blueprint-node">
              <strong>A2UI Blueprint</strong>
              <span>클라이언트가 안전하게 렌더링할 JSON UI 설계도.</span>
            </div>
          </div>
        </DeckSlide>

        <DeckSlide
          id="slide-2"
          kicker="Slide 02 / Problem"
          title="텍스트 답변만으로는 업무가 끝나지 않는다"
          lead="agent가 실무에 들어오면 표, 차트, 폼, 버튼, 상태 표시, 필터, 타임라인 같은 조작 가능한 화면이 필요해집니다."
        >
          <div className="slide-grid">
            <div className="slide-panel">
              <h3>Before</h3>
              <p>
                agent가 긴 설명문을 반환하고, 사용자가 다시 화면을 옮겨 다니며
                값을 복사하고 판단하고 실행한다.
              </p>
            </div>
            <div className="slide-panel emphasis">
              <h3>After</h3>
              <p>
                agent 응답 안에 승인 패널, 입력 폼, 차트, 다음 액션이 함께
                렌더링되어 사용자가 바로 작업을 끝낸다.
              </p>
            </div>
          </div>
          <ul className="slide-list">
            <li>이번 달 지출을 카테고리별로 정리해줘.</li>
            <li>이 고객에게 필요한 입력 폼을 만들어줘.</li>
            <li>승인해야 할 요청들을 우선순위별로 보여줘.</li>
          </ul>
        </DeckSlide>

        <DeckSlide
          id="slide-3"
          kicker="Slide 03 / Trap"
          title="그럼 agent가 HTML을 만들면 되지 않을까?"
          lead="직관적으로는 빠르게 보이지만, 제품 안에서 agent-generated code를 직접 실행하는 방식은 보안과 품질 경계가 흐려집니다."
        >
          <div className="slide-grid three">
            <div className="slide-panel">
              <LockKeyhole size={30} />
              <h4>Security Risk</h4>
              <p>외부 agent가 만든 실행 가능한 코드를 그대로 신뢰하기 어렵다.</p>
            </div>
            <div className="slide-panel">
              <Palette size={30} />
              <h4>Design Drift</h4>
              <p>버튼, 카드, spacing, 폰트가 앱의 디자인 시스템에서 벗어난다.</p>
            </div>
            <div className="slide-panel">
              <Boxes size={30} />
              <h4>Heavy Boundary</h4>
              <p>iframe sandbox는 안전하지만 무겁고 앱 안에서 이질적으로 보인다.</p>
            </div>
          </div>
          <p className="quote-line">
            방향은 agent가 화면을 만든다가 맞지만, 방식은 agent가 코드를
            실행한다가 아니어야 한다.
          </p>
        </DeckSlide>

        <DeckSlide
          id="slide-4"
          kicker="Slide 04 / Definition"
          title="A2UI는 code가 아니라 UI blueprint다"
          lead="agent는 선언형 JSON으로 UI 의도를 보내고, 클라이언트는 미리 허용된 catalog의 컴포넌트만 사용해서 화면을 그립니다."
        >
          <div className="slide-grid">
            <div className="slide-panel">
              <h3>Agent가 보내는 것</h3>
              <CodeWindow>{a2uiPayload}</CodeWindow>
            </div>
            <div className="slide-panel emphasis">
              <h3>Client가 지키는 것</h3>
              <ul className="slide-list">
                <li>허용된 컴포넌트만 렌더링</li>
                <li>props schema 검증</li>
                <li>앱의 디자인 토큰 적용</li>
                <li>action allowlist로 상호작용 통제</li>
              </ul>
            </div>
          </div>
        </DeckSlide>

        <DeckSlide
          id="slide-5"
          kicker="Slide 05 / Core Model"
          title="Agent, Message, Catalog, Renderer"
          lead="A2UI는 네 가지 축으로 이해하면 쉽습니다. agent는 의도를 만들고, message는 구조를 담고, catalog는 허용 범위를 정하고, renderer는 실제 UI로 변환합니다."
        >
          <div className="slide-grid">
            <div className="slide-panel">
              <FileJson size={30} />
              <h4>Message</h4>
              <p>UI 구조, 데이터 경로, action, surface update를 담는 JSON.</p>
            </div>
            <div className="slide-panel">
              <ShieldCheck size={30} />
              <h4>Catalog</h4>
              <p>agent가 사용할 수 있는 신뢰된 컴포넌트 목록과 정책.</p>
            </div>
          </div>
          <SketchFlow items={sketchFlowItems} />
        </DeckSlide>

        <DeckSlide
          id="slide-6"
          kicker="Slide 06 / Data Flow"
          title="UI는 메시지 스트림으로 흐른다"
          lead="A2UI는 거대한 HTML 한 덩어리가 아니라, 검증 가능한 메시지 흐름입니다. 그래서 일부 UI를 먼저 보여주고 나중에 데이터와 action을 채울 수 있습니다."
        >
          <MermaidChart chart={dataFlowChart} />
        </DeckSlide>

        <DeckSlide
          id="slide-7"
          kicker="Slide 07 / Effect"
          title="도입 효과는 UX, 보안, 디자인, 개발 분리로 나타난다"
          lead="A2UI는 agent가 더 많은 일을 하게 만들면서도, 클라이언트의 통제권을 놓치지 않게 합니다."
        >
          <CycleDiagram center="A2UI" items={effectCycle} />
        </DeckSlide>

        <DeckSlide
          id="slide-8"
          kicker="Slide 08 / UX"
          title="답변에서 작업 화면으로"
          lead="A2UI가 잘 맞는 장면은 읽고 끝나는 답변보다, 사용자가 바로 선택하고 수정하고 실행해야 하는 답변입니다."
        >
          <div className="slide-grid three">
            <div className="slide-panel">
              <h4>Data Collection</h4>
              <p>상황에 맞는 입력 폼을 agent가 제안하고 사용자가 바로 제출한다.</p>
            </div>
            <div className="slide-panel">
              <h4>Approval Panel</h4>
              <p>우선순위, 금액, 담당자, 승인 버튼을 하나의 패널에 배치한다.</p>
            </div>
            <div className="slide-panel">
              <h4>Data View</h4>
              <p>요약 카드와 차트를 함께 렌더링해 판단 시간을 줄인다.</p>
            </div>
          </div>
        </DeckSlide>

        <DeckSlide
          id="slide-9"
          kicker="Slide 09 / Security"
          title="실행하지 않고 렌더링한다"
          lead="A2UI payload는 코드가 아니라 데이터입니다. 클라이언트는 catalog에 없는 컴포넌트, 허용되지 않은 props, 위험한 action을 차단할 수 있습니다."
        >
          <MermaidChart
            chart={`
flowchart LR
  A["Agent output"] --> B{"Schema valid?"}
  B -->|"No"| X["Fallback"]
  B -->|"Yes"| C{"Catalog allowed?"}
  C -->|"No"| X
  C -->|"Yes"| D["Trusted component"]
  D --> E["Native app UI"]
`}
          />
        </DeckSlide>

        <DeckSlide
          id="slide-10"
          kicker="Slide 10 / Design System"
          title="AI가 만들어도 우리 앱처럼 보인다"
          lead="agent는 Button을 구현하지 않습니다. agent는 Button을 요청하고, 실제 버튼은 우리 코드베이스의 버튼으로 렌더링됩니다."
        >
          <div className="slide-grid">
            <div className="slide-panel">
              <h3>Agent 요청</h3>
              <ul className="slide-list">
                <li>component: Button</li>
                <li>label: 보고서로 저장</li>
                <li>action: saveReport</li>
              </ul>
            </div>
            <div className="slide-panel emphasis">
              <h3>Client 렌더링</h3>
              <ul className="slide-list">
                <li>우리 앱의 버튼 컴포넌트</li>
                <li>우리 색상과 radius</li>
                <li>우리 접근성 규칙</li>
              </ul>
            </div>
          </div>
        </DeckSlide>

        <DeckSlide
          id="slide-11"
          kicker="Slide 11 / Responsibility"
          title="Agent는 의도, Client는 구현"
          lead="A2UI를 도입하면 agent prompt와 frontend 코드가 서로의 책임을 침범하지 않도록 계약을 만들 수 있습니다."
        >
          <div className="role-table">
            <div className="slide-panel">
              <h3>Agent</h3>
              <ul>
                <li>사용자 의도 파악</li>
                <li>필요한 UI 타입 선택</li>
                <li>데이터 요약과 구조화</li>
                <li>후속 action 제안</li>
              </ul>
            </div>
            <div className="slide-panel emphasis">
              <h3>Client</h3>
              <ul>
                <li>컴포넌트 구현</li>
                <li>디자인 시스템 적용</li>
                <li>schema와 보안 검증</li>
                <li>상태와 action dispatch 관리</li>
              </ul>
            </div>
          </div>
        </DeckSlide>

        <DeckSlide
          id="slide-12"
          kicker="Slide 12 / Code"
          title="도입하면 어떤 코드를 만들게 되나"
          lead="A2UI 도입은 라이브러리 하나를 붙이는 일이 아니라, renderer, catalog, schema, data binding, action bridge, transport adapter를 만드는 일입니다."
        >
          <CodeWindow>{folderTree}</CodeWindow>
        </DeckSlide>

        <DeckSlide
          id="slide-13"
          kicker="Slide 13 / Renderer"
          title="Renderer는 JSON을 React tree로 바꾼다"
          lead="flat component list를 id map으로 만들고, root에서 시작해 children을 따라가며 catalog에 등록된 컴포넌트만 렌더링합니다."
        >
          <div className="slide-grid">
            <MermaidChart chart={renderFlowChart} />
            <CodeWindow>{rendererPseudoCode}</CodeWindow>
          </div>
        </DeckSlide>

        <DeckSlide
          id="slide-14"
          kicker="Slide 14 / Catalog"
          title="Catalog는 UI 보안 정책이다"
          lead="catalog는 단순 매핑 테이블이 아니라, agent에게 어디까지 허용할지 정하는 제품 정책입니다."
        >
          <div className="slide-grid">
            <div className="slide-panel emphasis">
              <h3>허용</h3>
              <ul className="slide-list">
                <li>TitleSlide, TextSlide, Callout</li>
                <li>MermaidChart, SketchFlow, DataChart</li>
                <li>Button with allowlisted actions</li>
              </ul>
            </div>
            <div className="slide-panel">
              <h3>차단</h3>
              <ul className="slide-list">
                <li>raw HTML</li>
                <li>script execution</li>
                <li>unknown iframe</li>
                <li>unregistered remote component</li>
              </ul>
            </div>
          </div>
        </DeckSlide>

        <DeckSlide
          id="slide-15"
          kicker="Slide 15 / Binding"
          title="구조와 데이터를 분리한다"
          lead="컴포넌트는 데이터 경로를 참조하고, 실제 데이터는 별도 model로 업데이트할 수 있습니다."
        >
          <div className="slide-grid">
            <div className="slide-panel">
              <h3>UI Node</h3>
              <CodeWindow>{`{
  "id": "adoption-chart",
  "component": "DataChart",
  "props": {
    "title": "도입 효과",
    "data": { "path": "/metrics/a2uiBenefits" }
  }
}`}</CodeWindow>
            </div>
            <div className="slide-panel emphasis">
              <h3>개발 항목</h3>
              <ul className="slide-list">
                <li>JSON Pointer path resolver</li>
                <li>data model store</li>
                <li>binding fallback</li>
                <li>입력 컴포넌트 양방향 연결</li>
              </ul>
            </div>
          </div>
        </DeckSlide>

        <DeckSlide
          id="slide-16"
          kicker="Slide 16 / Actions"
          title="UI는 다시 agent에게 말한다"
          lead="사용자가 버튼을 누르거나 폼을 제출하면 action payload가 agent로 돌아가고, agent는 surface를 업데이트합니다."
        >
          <MermaidChart chart={actionChart} />
          <div className="slide-grid three">
            <div className="slide-panel">
              <MousePointerClick size={30} />
              <h4>Click</h4>
              <p>사용자가 UI에서 의사결정을 한다.</p>
            </div>
            <div className="slide-panel">
              <Braces size={30} />
              <h4>Action</h4>
              <p>이벤트가 검증 가능한 payload로 변환된다.</p>
            </div>
            <div className="slide-panel">
              <CheckCircle2 size={30} />
              <h4>Update</h4>
              <p>agent가 다음 UI 상태를 다시 보낸다.</p>
            </div>
          </div>
        </DeckSlide>

        <DeckSlide
          id="slide-17"
          kicker="Slide 17 / Seminar Project"
          title="우리 프로젝트에서는 발표자료 컴포넌트가 catalog가 된다"
          lead="이미 만든 Mermaid, Rough.js, React Flow, Markmap, Observable Plot 샘플은 A2UI catalog의 후보입니다."
        >
          <div className="slide-grid">
            <CodeWindow>{deckPayload}</CodeWindow>
            <MermaidChart chart={seminarSequence} />
          </div>
        </DeckSlide>

        <DeckSlide
          id="slide-18"
          kicker="Slide 18 / Roadmap"
          title="작게 시작해서 안전하게 확장한다"
          lead="처음 목표는 A2UI 전체 spec 구현이 아니라, agent가 만든 발표자료 JSON을 안전하게 렌더링하는 subset입니다."
        >
          <div className="roadmap">
            <div className="roadmap-step">
              <strong>Phase 1</strong>
              <span>Static Renderer</span>
              <p>정적 payload를 발표 컴포넌트로 렌더링한다.</p>
            </div>
            <div className="roadmap-step">
              <strong>Phase 2</strong>
              <span>Validation</span>
              <p>schema, props allowlist, fallback을 만든다.</p>
            </div>
            <div className="roadmap-step">
              <strong>Phase 3</strong>
              <span>Binding</span>
              <p>data path와 action bridge를 연결한다.</p>
            </div>
            <div className="roadmap-step">
              <strong>Phase 4</strong>
              <span>Streaming</span>
              <p>SSE나 WebSocket으로 점진 렌더링한다.</p>
            </div>
            <div className="roadmap-step">
              <strong>Phase 5</strong>
              <span>Agent</span>
              <p>주제를 입력하면 발표자료 payload를 생성한다.</p>
            </div>
          </div>
          <p className="quote-line">
            A2UI는 agentic UI를 위한 안전한 계약이다. agent는 의도를 만들고,
            클라이언트는 신뢰된 방식으로 렌더링한다.
          </p>
        </DeckSlide>
      </section>
    </SampleShell>
  );
}

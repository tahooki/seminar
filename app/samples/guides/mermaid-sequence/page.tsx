import { Cable, RadioTower } from "lucide-react";
import { MermaidChart } from "@/src/presentation/components/MermaidChart";
import { SampleShell } from "@/src/presentation/components/SampleShell";

const agentSequence = `
sequenceDiagram
  participant U as User
  participant A as Agent
  participant G as Visual Guide
  participant R as React Page
  participant B as Browser
  U->>A: 발표 페이지 요청
  A->>G: 그림 종류 선택
  G-->>A: Mermaid / Plot / Flow 추천
  A->>R: 컴포넌트 조합 생성
  R->>B: 발표 화면 렌더링
  B-->>U: 예제 확인
`;

const renderSequence = `
sequenceDiagram
  participant Page as Server Page
  participant Client as Client Component
  participant Mermaid as Mermaid Renderer
  Page->>Client: chart text 전달
  Client->>Mermaid: render 요청
  Mermaid-->>Client: SVG 반환
  Client-->>Page: hydrated diagram
`;

export default function MermaidSequenceGuidePage() {
  return (
    <SampleShell
      eyebrow="Guide / Mermaid Sequence"
      title="누가 누구에게 무엇을 보내는지 시간순으로 보여주기"
      description="agent, renderer, browser처럼 역할이 여러 개인 설명은 sequence diagram으로 고정하면 발표 중 헷갈릴 여지가 줄어듭니다."
      note="시간 순서가 핵심이면 flowchart보다 sequence가 더 선명합니다."
    >
      <section className="stage-grid">
        <article className="visual-panel span-8">
          <div className="panel-heading">
            <div>
              <h2>Agent to page</h2>
              <p>요청에서 발표 화면까지 이어지는 메시지 흐름</p>
            </div>
            <span className="card-icon" aria-hidden="true">
              <RadioTower size={26} />
            </span>
          </div>
          <MermaidChart chart={agentSequence} />
        </article>

        <article className="visual-panel span-4">
          <div className="panel-heading">
            <div>
              <h3>Sequence가 맞는 신호</h3>
              <p>참여자가 3개 이상이고, 순서가 결론을 만든다.</p>
            </div>
          </div>
          <div className="metric-strip">
            <div className="metric">
              <strong>5</strong>
              <span>participants</span>
            </div>
            <div className="metric">
              <strong>6</strong>
              <span>messages</span>
            </div>
            <div className="metric">
              <strong>1</strong>
              <span>story</span>
            </div>
          </div>
        </article>

        <article className="visual-panel span-12">
          <div className="panel-heading">
            <div>
              <h2>Render boundary</h2>
              <p>Server Page와 Client Component의 역할 분리</p>
            </div>
            <span className="card-icon" aria-hidden="true">
              <Cable size={26} />
            </span>
          </div>
          <MermaidChart chart={renderSequence} />
        </article>
      </section>
    </SampleShell>
  );
}

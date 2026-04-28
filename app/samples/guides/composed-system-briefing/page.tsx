import { Activity, RadioTower, Workflow } from "lucide-react";
import { GuideArchitectureFlow } from "@/src/presentation/components/GuideArchitectureFlow";
import { MermaidChart } from "@/src/presentation/components/MermaidChart";
import { PlotChart } from "@/src/presentation/components/PlotChart";
import { SampleShell } from "@/src/presentation/components/SampleShell";

const systemSequence = `
sequenceDiagram
  participant Agent
  participant Catalog
  participant Renderer
  participant Visual as Visual Tools
  participant Deck
  Agent->>Catalog: request allowed component
  Catalog-->>Agent: component contract
  Agent->>Renderer: structured payload
  Renderer->>Visual: render chart or diagram
  Visual-->>Renderer: SVG / React nodes
  Renderer->>Deck: trusted presentation UI
`;

const systemData = [
  { label: "Text", value: 45, group: "기본 문서" },
  { label: "Guide", value: 66, group: "시각 시스템" },
  { label: "Diagram", value: 78, group: "시각 시스템" },
  { label: "Example", value: 88, group: "인터랙티브" },
  { label: "Skill", value: 93, group: "인터랙티브" },
];

export default function ComposedSystemBriefingPage() {
  return (
    <SampleShell
      eyebrow="Composed Guide / System Briefing"
      title="시스템 구조, 메시지 순서, 효과를 한 페이지에 묶기"
      description="기술 브리핑에서는 React Flow로 구조를 탐색하고, Mermaid로 시간 순서를 고정하고, Plot으로 효과를 수치화합니다."
      note="시스템 설명이 길어질수록 구조, 순서, 수치를 서로 다른 시각 언어로 분리하는 편이 좋습니다."
    >
      <section className="stage-grid">
        <article className="visual-panel span-12">
          <div className="panel-heading">
            <div>
              <h2>System briefing map</h2>
              <p>agent가 발표 화면을 만드는 주요 연결 관계</p>
            </div>
            <span className="card-icon" aria-hidden="true">
              <Workflow size={26} />
            </span>
          </div>
          <GuideArchitectureFlow variant="briefing" />
        </article>

        <article className="visual-panel span-6">
          <div className="panel-heading">
            <div>
              <h2>Message order</h2>
              <p>구조 안에서 실제 메시지가 흐르는 순서</p>
            </div>
            <span className="card-icon" aria-hidden="true">
              <RadioTower size={26} />
            </span>
          </div>
          <MermaidChart chart={systemSequence} />
        </article>

        <article className="visual-panel span-6">
          <div className="panel-heading">
            <div>
              <h2>Briefing clarity</h2>
              <p>설명 방식이 구체화될수록 올라가는 이해도</p>
            </div>
            <span className="card-icon" aria-hidden="true">
              <Activity size={26} />
            </span>
          </div>
          <PlotChart data={systemData} />
        </article>

        <article className="slide-slab span-12">
          <h2>구조는 움직이고, 순서는 고정하고, 효과는 숫자로 말한다.</h2>
          <p>
            이 조합은 agent UI, 데이터 파이프라인, 발표자료 생성 시스템처럼
            구성 요소가 많고 설명 순서가 중요한 세미나에 맞습니다.
          </p>
        </article>
      </section>
    </SampleShell>
  );
}

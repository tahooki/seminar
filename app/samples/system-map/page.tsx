import { Boxes, RadioTower } from "lucide-react";
import { MermaidChart } from "@/src/presentation/components/MermaidChart";
import { SampleShell } from "@/src/presentation/components/SampleShell";
import { SystemFlow } from "@/src/presentation/components/SystemFlow";

const sequenceChart = `
sequenceDiagram
  participant S as Speaker
  participant C as Slide Components
  participant V as Visual Toolkit
  participant T as Theme Tokens
  participant B as Browser Deck
  S->>C: choose slide type
  S->>V: choose visualization
  C->>T: read typography and spacing
  V->>T: read diagram colors
  T->>B: render one-page deck
`;

export default function SystemMapPage() {
  return (
    <SampleShell
      eyebrow="Sample 02 / React Flow + Mermaid"
      title="발표 시스템 구조를 움직일 수 있는 맵으로 보기"
      description="React Flow는 시스템 구성요소를 직접 이동하고 확대하며 설명할 때 좋고, Mermaid sequence는 발표 중 상호작용 순서를 빠르게 고정해 보여줄 때 좋습니다."
      note="기술 세미나에서는 구조와 흐름을 분리해서 보여주면 듣는 사람이 훨씬 빨리 따라옵니다."
    >
      <section className="stage-grid">
        <article className="visual-panel span-12">
          <div className="panel-heading">
            <div>
              <h2>Interactive system map</h2>
              <p>노드 기반으로 보는 발표자료 생성 구조</p>
            </div>
            <span className="card-icon">
              <Boxes size={26} />
            </span>
          </div>
          <SystemFlow />
        </article>

        <article className="slide-slab span-5">
          <h2>구조는 움직이고, 순서는 고정한다.</h2>
          <p>
            React Flow는 발표 중 탐색과 강조에 좋고, Mermaid sequence는 정해진
            흐름을 흔들리지 않게 보여주는 데 좋습니다.
          </p>
          <div className="tag-row">
            <span className="tag">drag nodes</span>
            <span className="tag">fit view</span>
            <span className="tag">sequence</span>
          </div>
        </article>

        <article className="visual-panel span-7">
          <div className="panel-heading">
            <div>
              <h2>Sequence view</h2>
              <p>같은 시스템을 발표 순서 중심으로 다시 보기</p>
            </div>
            <span className="card-icon">
              <RadioTower size={26} />
            </span>
          </div>
          <MermaidChart chart={sequenceChart} />
        </article>
      </section>
    </SampleShell>
  );
}

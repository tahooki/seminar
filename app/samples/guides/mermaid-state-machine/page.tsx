import { CircleDotDashed, RotateCw } from "lucide-react";
import { MermaidChart } from "@/src/presentation/components/MermaidChart";
import { SampleShell } from "@/src/presentation/components/SampleShell";

const stateChart = `
stateDiagram-v2
  [*] --> Requested
  Requested --> Planning: classify request
  Planning --> Drafting: choose visual tools
  Drafting --> Preview: render page
  Preview --> Fixing: issue found
  Fixing --> Preview: update
  Preview --> Ready: accepted
  Ready --> [*]
`;

const lifecycleFlow = `
flowchart LR
  A["Requested"] --> B["Planning"]
  B --> C["Drafting"]
  C --> D["Preview"]
  D -->|"issue"| E["Fixing"]
  E --> D
  D -->|"ok"| F["Ready"]
`;

export default function MermaidStateMachinePage() {
  return (
    <SampleShell
      eyebrow="Guide / State Machine"
      title="상태가 바뀌는 과정을 lifecycle로 설명하기"
      description="agent run, 승인 절차, 화면 생성 과정처럼 상태 전이가 핵심인 발표에는 Mermaid state diagram이 잘 맞습니다."
      note="상태 이름은 짧게, 전이 조건은 동사로 쓰면 발표 중 읽기 쉽습니다."
    >
      <section className="stage-grid">
        <article className="visual-panel span-7">
          <div className="panel-heading">
            <div>
              <h2>Presentation run lifecycle</h2>
              <p>요청에서 준비 완료까지 상태 전이</p>
            </div>
            <span className="card-icon" aria-hidden="true">
              <CircleDotDashed size={26} />
            </span>
          </div>
          <MermaidChart chart={stateChart} />
        </article>

        <article className="visual-panel span-5">
          <div className="panel-heading">
            <div>
              <h2>Fallback flow</h2>
              <p>상태도를 더 단순하게 보여줄 때</p>
            </div>
            <span className="card-icon" aria-hidden="true">
              <RotateCw size={26} />
            </span>
          </div>
          <MermaidChart chart={lifecycleFlow} />
        </article>

        <article className="slide-slab span-12">
          <h2>상태도는 반복과 되돌아감을 숨기지 않는다.</h2>
          <p>
            Preview에서 Fixing으로 돌아오는 구간처럼 실제 작업의 loop를 보여줄
            때, state machine은 단순 단계표보다 솔직하고 정확합니다.
          </p>
        </article>
      </section>
    </SampleShell>
  );
}

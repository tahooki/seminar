import { Boxes, GitBranch } from "lucide-react";
import { GuideArchitectureFlow } from "@/src/presentation/components/GuideArchitectureFlow";
import { SampleShell } from "@/src/presentation/components/SampleShell";

export default function ReactFlowArchitectureGuidePage() {
  return (
    <SampleShell
      eyebrow="Guide / React Flow Architecture"
      title="복잡한 구조를 움직일 수 있는 시스템 맵으로 보기"
      description="React Flow는 노드와 엣지가 많아져도 발표 중 특정 구역을 확대하고 이동하며 설명할 수 있습니다."
      note="구조가 고정된 그림보다 탐색 가능한 맵에 가까울 때 React Flow를 고릅니다."
    >
      <section className="stage-grid">
        <article className="visual-panel span-12">
          <div className="panel-heading">
            <div>
              <h2>Presentation architecture</h2>
              <p>조사 자료가 발표 페이지로 바뀌는 구조</p>
            </div>
            <span className="card-icon" aria-hidden="true">
              <GitBranch size={26} />
            </span>
          </div>
          <GuideArchitectureFlow />
        </article>

        <article className="slide-slab span-5">
          <h2>관계가 많으면 노드 맵으로.</h2>
          <p>
            서비스, 도구, 컴포넌트, 출력물이 서로 연결될 때는 React Flow가 발표
            중 탐색에 유리합니다.
          </p>
        </article>

        <article className="visual-panel span-7">
          <div className="panel-heading">
            <div>
              <h2>Map checklist</h2>
              <p>React Flow를 선택하기 전 확인할 기준</p>
            </div>
            <span className="card-icon" aria-hidden="true">
              <Boxes size={26} />
            </span>
          </div>
          <div className="compare-grid">
            <div className="compare-item">
              <h3>Nodes</h3>
              <p>구성 요소가 5개 이상이고 서로 다른 역할을 가진다.</p>
            </div>
            <div className="compare-item">
              <h3>Edges</h3>
              <p>단순 순서가 아니라 연결 관계 자체가 의미를 만든다.</p>
            </div>
            <div className="compare-item">
              <h3>Viewport</h3>
              <p>발표자가 확대, 이동, 강조하면서 설명할 가치가 있다.</p>
            </div>
          </div>
        </article>
      </section>
    </SampleShell>
  );
}

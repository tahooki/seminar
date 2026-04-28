import { GitFork, Route } from "lucide-react";
import { MermaidChart } from "@/src/presentation/components/MermaidChart";
import { SampleShell } from "@/src/presentation/components/SampleShell";

const decisionFlow = `
flowchart LR
  A["발표 목적"] --> B{"무엇을 그리고 싶은가?"}
  B -->|"흐름"| C["Mermaid flowchart"]
  B -->|"개념"| D["Markmap"]
  B -->|"데이터"| E["Observable Plot"]
  B -->|"시스템"| F{"탐색이 필요한가?"}
  F -->|"예"| G["React Flow"]
  F -->|"아니오"| C
  C --> H["예제 페이지"]
  D --> H
  E --> H
  G --> H
`;

const stateFlow = `
stateDiagram-v2
  [*] --> Draft
  Draft --> Guide: library selected
  Guide --> Example: route created
  Example --> Review: browser check
  Review --> Done: ready
`;

export default function MermaidFlowGuidePage() {
  return (
    <SampleShell
      eyebrow="Guide / Mermaid Flow"
      title="결정 흐름과 상태 전이를 빠르게 고정하기"
      description="Mermaid는 발표에서 단계, 분기, 상태 변화를 설명할 때 가장 먼저 시도하기 좋은 기본 도구입니다."
      note="텍스트 문법으로 다이어그램을 유지할 수 있어서 조사 문서와 발표 페이지 사이의 거리가 짧습니다."
    >
      <section className="stage-grid">
        <article className="visual-panel span-7">
          <div className="panel-heading">
            <div>
              <h2>Decision flow</h2>
              <p>그림 선택 과정을 발표용 흐름도로 정리</p>
            </div>
            <span className="card-icon" aria-hidden="true">
              <Route size={26} />
            </span>
          </div>
          <MermaidChart chart={decisionFlow} />
        </article>

        <article className="slide-slab span-5">
          <h2>분기가 보이면 Mermaid부터.</h2>
          <p>
            &quot;이 경우에는 무엇을 쓰나&quot;처럼 선택지가 갈라지는 발표 내용은
            Mermaid flowchart로 먼저 그리면 구조가 빨리 잡힙니다.
          </p>
          <div className="tag-row">
            <span className="tag">flowchart</span>
            <span className="tag">decision</span>
            <span className="tag">guide</span>
          </div>
        </article>

        <article className="visual-panel span-12">
          <div className="panel-heading">
            <div>
              <h2>State view</h2>
              <p>작업 진행 상태를 lifecycle처럼 보여주기</p>
            </div>
            <span className="card-icon" aria-hidden="true">
              <GitFork size={26} />
            </span>
          </div>
          <MermaidChart chart={stateFlow} />
        </article>
      </section>
    </SampleShell>
  );
}

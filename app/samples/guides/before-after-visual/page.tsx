import { GitCompareArrows, WandSparkles } from "lucide-react";
import { MermaidChart } from "@/src/presentation/components/MermaidChart";
import { PlotChart } from "@/src/presentation/components/PlotChart";
import { SampleShell } from "@/src/presentation/components/SampleShell";

const beforeAfterData = [
  { label: "Before", value: 38, group: "기본 문서" },
  { label: "Flow", value: 64, group: "시각 시스템" },
  { label: "Example", value: 82, group: "시각 시스템" },
  { label: "Skill", value: 91, group: "인터랙티브" },
];

const transformFlow = `
flowchart LR
  A["텍스트 설명"] --> B["선택 기준"]
  B --> C["시각화 예제"]
  C --> D["발표 페이지"]
`;

export default function BeforeAfterVisualPage() {
  return (
    <SampleShell
      eyebrow="Guide / Before After"
      title="시각화를 넣기 전과 후를 비교하기"
      description="도입 효과를 설득해야 할 때는 Before와 After를 한 화면에 나란히 두고, 변화의 근거를 차트로 보강합니다."
      note="Before는 일부러 평평하게, After는 구조와 결과가 보이게 만들어 차이를 선명하게 둡니다."
    >
      <section className="stage-grid">
        <article className="visual-panel span-6">
          <div className="panel-heading">
            <div>
              <h2>Before</h2>
              <p>텍스트만 있는 발표 설명</p>
            </div>
          </div>
          <div className="before-after-panel muted">
            <h3>발표 시각화 도구를 정리한다</h3>
            <p>
              Mermaid, RoughJS, Markmap, React Flow, Observable Plot을 상황별로
              사용한다. 각각 문서를 만들고 예제 페이지를 만든다.
            </p>
          </div>
        </article>

        <article className="visual-panel span-6">
          <div className="panel-heading">
            <div>
              <h2>After</h2>
              <p>선택 기준과 예제가 보이는 발표 설명</p>
            </div>
            <span className="card-icon" aria-hidden="true">
              <WandSparkles size={26} />
            </span>
          </div>
          <MermaidChart chart={transformFlow} />
        </article>

        <article className="visual-panel span-7">
          <div className="panel-heading">
            <div>
              <h2>Impact score</h2>
              <p>자료가 시각화될수록 올라가는 전달력</p>
            </div>
            <span className="card-icon" aria-hidden="true">
              <GitCompareArrows size={26} />
            </span>
          </div>
          <PlotChart data={beforeAfterData} />
        </article>

        <article className="slide-slab span-5">
          <h2>Before/After는 변화의 이유까지 보여줘야 한다.</h2>
          <p>
            결과만 예쁘게 보여주면 설득이 약합니다. 어떤 구조가 추가되었는지
            옆에 함께 놓으면 차이가 설명이 됩니다.
          </p>
        </article>
      </section>
    </SampleShell>
  );
}

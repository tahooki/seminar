import { Orbit, Repeat2 } from "lucide-react";
import { SampleShell } from "@/src/presentation/components/SampleShell";
import { CycleDiagram } from "@/src/presentation/components/SketchDiagrams";

const cycleItems = [
  { label: "Collect", detail: "자료", color: "#2f80ed" },
  { label: "Cluster", detail: "묶기", color: "#6ba84f" },
  { label: "Choose", detail: "선택", color: "#ef7d6c" },
  { label: "Compose", detail: "구성", color: "#9b6ee8" },
  { label: "Check", detail: "확인", color: "#f2c94c" },
  { label: "Refine", detail: "개선", color: "#b37a2f" },
];

export default function RoughCycleGuidePage() {
  return (
    <SampleShell
      eyebrow="Guide / RoughJS Cycle"
      title="반복되는 제작 과정을 한눈에 보여주기"
      description="순환 구조는 선형 단계보다 반복과 개선의 감각을 더 잘 전달합니다."
      note="발표 자료 제작, 리서치 루프, 제품 개선 사이클처럼 다시 돌아오는 흐름에 적합합니다."
    >
      <section className="stage-grid">
        <article className="visual-panel span-8">
          <div className="panel-heading">
            <div>
              <h2>Presentation making loop</h2>
              <p>자료 조사에서 개선까지 이어지는 반복 루프</p>
            </div>
            <span className="card-icon" aria-hidden="true">
              <Repeat2 size={26} />
            </span>
          </div>
          <CycleDiagram center="Guide" items={cycleItems} />
        </article>

        <article className="visual-panel span-4">
          <div className="panel-heading">
            <div>
              <h3>Cycle이 맞는 신호</h3>
              <p>끝이 결론이 아니라 다음 반복의 시작이다.</p>
            </div>
            <span className="card-icon" aria-hidden="true">
              <Orbit size={26} />
            </span>
          </div>
          <div className="metric-strip">
            <div className="metric">
              <strong>6</strong>
              <span>steps</span>
            </div>
            <div className="metric">
              <strong>1</strong>
              <span>loop</span>
            </div>
            <div className="metric">
              <strong>∞</strong>
              <span>refine</span>
            </div>
          </div>
          <p className="panel-copy">
            순환형 그림은 반복 개선, 학습 루프, 운영 사이클처럼 &quot;다시 돌아오는&quot;
            이야기를 빠르게 전달합니다.
          </p>
        </article>
      </section>
    </SampleShell>
  );
}

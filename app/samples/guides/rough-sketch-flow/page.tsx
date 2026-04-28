import { PencilRuler, Sparkles } from "lucide-react";
import { SampleShell } from "@/src/presentation/components/SampleShell";
import { SketchFlow } from "@/src/presentation/components/SketchDiagrams";

const sketchFlowItems = [
  { title: "메모", description: "raw idea", color: "#ef7d6c" },
  { title: "정리", description: "key shape", color: "#2f80ed" },
  { title: "그림", description: "sketch", color: "#6ba84f" },
  { title: "발표", description: "one page", color: "#9b6ee8" },
];

export default function RoughSketchFlowGuidePage() {
  return (
    <SampleShell
      eyebrow="Guide / RoughJS Sketch Flow"
      title="딱딱한 구조 전에 생각의 방향부터 보여주기"
      description="RoughJS는 아이디어가 아직 거칠 때도 발표 가능한 그림 언어로 바꿔줍니다."
      note="완성된 아키텍처보다 '어떻게 생각이 변했는지'가 핵심이면 손그림 톤이 잘 맞습니다."
    >
      <section className="stage-grid">
        <article className="visual-panel span-8">
          <div className="panel-heading">
            <div>
              <h2>Idea sketch flow</h2>
              <p>거친 메모에서 발표 페이지까지</p>
            </div>
            <span className="card-icon" aria-hidden="true">
              <PencilRuler size={26} />
            </span>
          </div>
          <SketchFlow items={sketchFlowItems} />
        </article>

        <article className="slide-slab span-4">
          <h2>정확함보다 접근성이 먼저일 때.</h2>
          <p>
            청중이 처음 만나는 개념은 완벽한 도식보다 부드러운 흐름이 더 빨리
            들어옵니다.
          </p>
          <div className="tag-row">
            <span className="tag">napkin</span>
            <span className="tag">idea</span>
            <span className="tag">friendly</span>
          </div>
        </article>

        <article className="visual-panel span-12">
          <div className="panel-heading">
            <div>
              <h2>Where it fits</h2>
              <p>RoughJS를 먼저 고르는 발표 장면</p>
            </div>
            <span className="card-icon" aria-hidden="true">
              <Sparkles size={26} />
            </span>
          </div>
          <div className="compare-grid">
            <div className="compare-item">
              <h3>도입</h3>
              <p>아직 낯선 개념을 부담 없이 열어야 할 때.</p>
            </div>
            <div className="compare-item">
              <h3>전환</h3>
              <p>문제에서 해결책으로 분위기를 바꿔야 할 때.</p>
            </div>
            <div className="compare-item">
              <h3>회고</h3>
              <p>완성된 결과보다 배운 흐름을 보여줘야 할 때.</p>
            </div>
          </div>
        </article>
      </section>
    </SampleShell>
  );
}

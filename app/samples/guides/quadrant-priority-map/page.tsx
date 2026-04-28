import { Crosshair, MoveUpRight } from "lucide-react";
import { SampleShell } from "@/src/presentation/components/SampleShell";

const items = [
  { label: "Comparison matrix", x: 72, y: 24, tone: "green" },
  { label: "Trend story", x: 68, y: 38, tone: "blue" },
  { label: "Annotation chart", x: 48, y: 30, tone: "coral" },
  { label: "ERD schema", x: 34, y: 62, tone: "violet" },
  { label: "Sketch flow", x: 24, y: 42, tone: "yellow" },
];

export default function QuadrantPriorityMapPage() {
  return (
    <SampleShell
      eyebrow="Guide / Quadrant Priority"
      title="우선순위를 2x2 map으로 판단하기"
      description="난이도와 효과, 긴급도와 중요도처럼 두 축으로 판단해야 하는 발표에는 quadrant map이 좋습니다."
      note="도구 도입, 기능 우선순위, 리스크 대응을 한 화면에서 정리할 때 특히 잘 맞습니다."
    >
      <section className="stage-grid">
        <article className="visual-panel span-8">
          <div className="panel-heading">
            <div>
              <h2>Impact vs effort</h2>
              <p>발표 예제 추가 우선순위 맵</p>
            </div>
            <span className="card-icon" aria-hidden="true">
              <Crosshair size={26} />
            </span>
          </div>
          <div className="quadrant-map">
            <span className="axis-label top">High impact</span>
            <span className="axis-label bottom">Low impact</span>
            <span className="axis-label left">Low effort</span>
            <span className="axis-label right">High effort</span>
            <div className="quadrant-line vertical" />
            <div className="quadrant-line horizontal" />
            {items.map((item) => (
              <span
                key={item.label}
                className={`quadrant-dot ${item.tone}`}
                style={{ left: `${item.x}%`, top: `${item.y}%` }}
              >
                {item.label}
              </span>
            ))}
          </div>
        </article>

        <article className="slide-slab span-4">
          <h2>두 기준이 싸우면 2x2로 보낸다.</h2>
          <p>
            효과는 큰데 어려운 것, 쉬운데 효과가 낮은 것을 한 번에 비교할 수
            있습니다.
          </p>
          <div className="tag-row">
            <span className="tag">impact</span>
            <span className="tag">effort</span>
          </div>
        </article>

        <article className="visual-panel span-12">
          <div className="panel-heading">
            <div>
              <h2>Quadrant reading order</h2>
              <p>발표 중 우선순위를 설명하는 순서</p>
            </div>
            <span className="card-icon" aria-hidden="true">
              <MoveUpRight size={26} />
            </span>
          </div>
          <div className="compare-grid">
            <div className="compare-item">
              <h3>1. Quick wins</h3>
              <p>효과가 크고 쉬운 것부터 실행한다.</p>
            </div>
            <div className="compare-item">
              <h3>2. Bets</h3>
              <p>효과가 크지만 어려운 것은 계획으로 분리한다.</p>
            </div>
            <div className="compare-item">
              <h3>3. Avoid</h3>
              <p>효과가 작고 어려운 것은 과감히 제외한다.</p>
            </div>
          </div>
        </article>
      </section>
    </SampleShell>
  );
}

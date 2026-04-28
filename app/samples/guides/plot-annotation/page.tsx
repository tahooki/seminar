import { MessageCircle, Pin } from "lucide-react";
import { AnnotationPlot } from "@/src/presentation/components/PlotChart";
import { SampleShell } from "@/src/presentation/components/SampleShell";

const data = [
  { date: "2026-04-23", value: 32, label: "scan" },
  { date: "2026-04-24", value: 48, label: "docs" },
  { date: "2026-04-25", value: 58, label: "examples" },
  { date: "2026-04-26", value: 74, label: "gallery" },
  { date: "2026-04-27", value: 88, label: "skill" },
  { date: "2026-04-28", value: 93, label: "reuse" },
];

const annotations = [
  { date: "2026-04-25", value: 58, note: "예제 추가" },
  { date: "2026-04-27", value: 88, note: "skill 연결" },
];

export default function PlotAnnotationPage() {
  return (
    <SampleShell
      eyebrow="Guide / Plot Annotation"
      title="차트 위에 변화의 이유를 직접 적기"
      description="데이터 발표는 값만 보여주면 해석이 남습니다. annotation은 특정 지점에 이유와 사건을 붙여 해석을 화면 안에 고정합니다."
      note="릴리즈, 정책 변경, 모델 교체, 예제 추가처럼 변화의 원인이 있는 데이터에 적합합니다."
    >
      <section className="stage-grid">
        <article className="visual-panel span-8">
          <div className="panel-heading">
            <div>
              <h2>Annotated maturity</h2>
              <p>완성도가 올라간 지점에 사건을 붙인 차트</p>
            </div>
            <span className="card-icon" aria-hidden="true">
              <Pin size={26} />
            </span>
          </div>
          <AnnotationPlot data={data} annotations={annotations} />
        </article>

        <article className="slide-slab span-4">
          <h2>좋은 차트는 해석을 화면 안에 둔다.</h2>
          <p>
            발표자가 말로 설명할 핵심 사건을 그래프 위에 붙이면, 청중이 같은
            지점을 함께 보게 됩니다.
          </p>
        </article>

        <article className="visual-panel span-12">
          <div className="panel-heading">
            <div>
              <h2>Annotation rule</h2>
              <p>차트 위 주석을 남기는 기준</p>
            </div>
            <span className="card-icon" aria-hidden="true">
              <MessageCircle size={26} />
            </span>
          </div>
          <div className="compare-grid">
            <div className="compare-item">
              <h3>Event</h3>
              <p>실제 변화가 있었던 지점만 표시한다.</p>
            </div>
            <div className="compare-item">
              <h3>Few</h3>
              <p>주석은 2-3개 정도로 제한한다.</p>
            </div>
            <div className="compare-item">
              <h3>Verb</h3>
              <p>주석은 명사보다 변화 동사로 적는다.</p>
            </div>
          </div>
        </article>
      </section>
    </SampleShell>
  );
}

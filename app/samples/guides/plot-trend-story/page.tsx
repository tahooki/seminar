import { ChartSpline, TrendingUp } from "lucide-react";
import { TrendLineChart } from "@/src/presentation/components/PlotChart";
import { SampleShell } from "@/src/presentation/components/SampleShell";

const trendData = [
  { date: "2026-04-23", value: 36, label: "문서" },
  { date: "2026-04-24", value: 52, label: "가이드" },
  { date: "2026-04-25", value: 68, label: "예제" },
  { date: "2026-04-26", value: 79, label: "조합" },
  { date: "2026-04-27", value: 91, label: "skill" },
];

export default function PlotTrendStoryPage() {
  return (
    <SampleShell
      eyebrow="Guide / Plot Trend Story"
      title="시간에 따라 변하는 수치를 선 그래프로 이야기하기"
      description="성능, 비용, adoption, 완성도처럼 시간 축을 따라 변하는 데이터는 bar보다 line chart가 흐름을 잘 보여줍니다."
      note="숫자의 높이보다 기울기가 중요한 발표라면 trend story를 먼저 고릅니다."
    >
      <section className="stage-grid">
        <article className="visual-panel span-7">
          <div className="panel-heading">
            <div>
              <h2>Guide maturity trend</h2>
              <p>문서에서 skill까지 이어지는 완성도 변화</p>
            </div>
            <span className="card-icon" aria-hidden="true">
              <ChartSpline size={26} />
            </span>
          </div>
          <TrendLineChart data={trendData} />
        </article>

        <article className="slide-slab span-5">
          <h2>추세는 기울기로 설득한다.</h2>
          <p>
            단계별 값 하나하나보다 방향성이 중요할 때는 선 그래프가 발표의
            문장을 대신합니다.
          </p>
          <div className="tag-row">
            <span className="tag">line chart</span>
            <span className="tag">trend</span>
          </div>
        </article>

        <article className="visual-panel span-12">
          <div className="panel-heading">
            <div>
              <h2>Trend reading</h2>
              <p>선 그래프를 발표에서 읽는 순서</p>
            </div>
            <span className="card-icon" aria-hidden="true">
              <TrendingUp size={26} />
            </span>
          </div>
          <div className="compare-grid">
            <div className="compare-item">
              <h3>Start</h3>
              <p>처음 수치를 기준점으로 잡는다.</p>
            </div>
            <div className="compare-item">
              <h3>Slope</h3>
              <p>어느 구간에서 기울기가 바뀌는지 말한다.</p>
            </div>
            <div className="compare-item">
              <h3>Now</h3>
              <p>마지막 수치가 어떤 결론을 만드는지 닫는다.</p>
            </div>
          </div>
        </article>
      </section>
    </SampleShell>
  );
}

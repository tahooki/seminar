import { ChartNoAxesColumn, TrendingUp } from "lucide-react";
import { PlotChart } from "@/src/presentation/components/PlotChart";
import { SampleShell } from "@/src/presentation/components/SampleShell";

const chartData = [
  { label: "문서", value: 44, group: "기본 문서" },
  { label: "흐름도", value: 68, group: "시각 시스템" },
  { label: "개념지도", value: 74, group: "시각 시스템" },
  { label: "차트", value: 81, group: "시각 시스템" },
  { label: "인터랙션", value: 92, group: "인터랙티브" },
];

export default function ObservablePlotComparisonGuidePage() {
  return (
    <SampleShell
      eyebrow="Guide / Observable Plot"
      title="숫자가 주장의 근거일 때 차트로 말하기"
      description="Observable Plot은 전후 변화, 성능 비교, 설문 결과를 발표 화면에 맞는 SVG 차트로 빠르게 렌더링합니다."
      note="데이터가 결론을 밀어주는 발표에서는 차트를 본문보다 먼저 보이게 배치합니다."
    >
      <section className="stage-grid">
        <article className="visual-panel span-7">
          <div className="panel-heading">
            <div>
              <h2>Clarity comparison</h2>
              <p>시각화 요소별 발표 이해도 비교</p>
            </div>
            <span className="card-icon" aria-hidden="true">
              <ChartNoAxesColumn size={26} />
            </span>
          </div>
          <PlotChart data={chartData} />
        </article>

        <article className="slide-slab span-5">
          <h2>차트는 결론을 보이게 만든다.</h2>
          <p>
            숫자가 있는 발표에서는 &quot;좋아졌다&quot;보다 &quot;얼마나 달라졌는지&quot;가 먼저
            보여야 합니다.
          </p>
          <div className="tag-row">
            <span className="tag">bar</span>
            <span className="tag">label</span>
            <span className="tag">comparison</span>
          </div>
        </article>

        <article className="visual-panel span-12">
          <div className="panel-heading">
            <div>
              <h2>Data story rule</h2>
              <p>차트를 발표 페이지에 넣을 때의 최소 구조</p>
            </div>
            <span className="card-icon" aria-hidden="true">
              <TrendingUp size={26} />
            </span>
          </div>
          <div className="compare-grid">
            <div className="compare-item">
              <h3>Question</h3>
              <p>무엇을 비교하는지 제목에서 바로 말한다.</p>
            </div>
            <div className="compare-item">
              <h3>Evidence</h3>
              <p>값 label과 축을 발표장에서 읽히는 크기로 유지한다.</p>
            </div>
            <div className="compare-item">
              <h3>Takeaway</h3>
              <p>차트 옆에 결론 문장을 크게 배치한다.</p>
            </div>
          </div>
        </article>
      </section>
    </SampleShell>
  );
}

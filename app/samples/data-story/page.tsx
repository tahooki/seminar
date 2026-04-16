import { ChartSpline, Network } from "lucide-react";
import { MarkmapView } from "@/src/presentation/components/MarkmapView";
import { PlotChart } from "@/src/presentation/components/PlotChart";
import { SampleShell } from "@/src/presentation/components/SampleShell";

const chartData = [
  { label: "기본 문서", value: 42, group: "기본 문서" },
  { label: "코드 블록", value: 58, group: "기본 문서" },
  { label: "다이어그램", value: 76, group: "시각 시스템" },
  { label: "마인드맵", value: 83, group: "시각 시스템" },
  { label: "인터랙션", value: 91, group: "인터랙티브" },
];

const mapMarkdown = `
# 발표 이해도
## 구조
### 목차
### 개념 지도
### 비교표
## 시각화
### 데이터 차트
### 흐름도
### 시스템 맵
## 전달
### 핵심 문장
### 예시
### 마무리
`;

export default function DataStoryPage() {
  return (
    <SampleShell
      eyebrow="Sample 03 / Observable Plot + Markmap"
      title="데이터와 개념 지도를 한 화면에서 연결하기"
      description="숫자로 설득해야 하는 발표에서는 차트가 필요하고, 큰 그림을 잃지 않게 하려면 마인드맵이 필요합니다."
      note="이 샘플은 세미나 자료가 설명문에서 끝나지 않고, 데이터와 개념 구조를 동시에 다루는 방향을 보여줍니다."
    >
      <section className="stage-grid">
        <article className="visual-panel span-7">
          <div className="panel-heading">
            <div>
              <h2>Visual clarity score</h2>
              <p>시각화 요소를 추가했을 때 발표 이해도가 올라가는 흐름</p>
            </div>
            <span className="card-icon">
              <ChartSpline size={26} />
            </span>
          </div>
          <PlotChart data={chartData} />
        </article>

        <article className="visual-panel span-5">
          <div className="panel-heading">
            <div>
              <h2>Concept map</h2>
              <p>발표 내용을 목차가 아니라 관계로 보기</p>
            </div>
            <span className="card-icon">
              <Network size={26} />
            </span>
          </div>
          <MarkmapView markdown={mapMarkdown} />
        </article>

        <article className="slide-slab span-12">
          <h2>어떤 시각화가 필요한지 먼저 고른다.</h2>
          <p>
            숫자는 <span className="code-chip">DataChart</span>, 개념 관계는{" "}
            <span className="code-chip">MindMap</span>, 선택지 비교는{" "}
            <span className="code-chip">CompareMatrix</span>처럼 발표자가 의도부터
            고르면 내부 라이브러리는 바뀌어도 작성 경험은 유지됩니다.
          </p>
        </article>

        <article className="visual-panel span-12">
          <div className="panel-heading">
            <div>
              <h2>Visualization picker</h2>
              <p>발표 장면별 컴포넌트 선택 기준</p>
            </div>
          </div>
          <div className="compare-grid">
            <div className="compare-item">
              <h3>흐름 설명</h3>
              <p>
                단계, 분기, 순환을 말할 때는 Mermaid 또는 SketchFlow를 사용한다.
              </p>
            </div>
            <div className="compare-item">
              <h3>구조 설명</h3>
              <p>
                모듈, 서비스, 데이터 흐름을 보여줄 때는 React Flow 기반 SystemMap을
                사용한다.
              </p>
            </div>
            <div className="compare-item">
              <h3>수치 설명</h3>
              <p>
                성능, 설문, 전후 비교처럼 숫자가 핵심이면 Observable Plot 기반
                DataChart를 사용한다.
              </p>
            </div>
          </div>
        </article>
      </section>
    </SampleShell>
  );
}

import { ChartSpline, ListTree, Route } from "lucide-react";
import { MarkmapView } from "@/src/presentation/components/MarkmapView";
import { MermaidChart } from "@/src/presentation/components/MermaidChart";
import { PlotChart } from "@/src/presentation/components/PlotChart";
import { SampleShell } from "@/src/presentation/components/SampleShell";

const researchMap = `
# 조사 발표 만들기
## 질문
### 무엇이 달라졌나
### 왜 지금 필요한가
## 근거
### 공식 문서
### package.json
### 기존 예제
## 시각화
### Mermaid
### Markmap
### Observable Plot
## 결론
### 선택 가이드
### 예제 페이지
### skill
`;

const researchData = [
  { label: "조사", value: 52, group: "기본 문서" },
  { label: "분류", value: 67, group: "시각 시스템" },
  { label: "예제", value: 82, group: "시각 시스템" },
  { label: "skill", value: 90, group: "인터랙티브" },
];

const storyFlow = `
flowchart LR
  A["질문"] --> B["자료 조사"]
  B --> C["개념 분류"]
  C --> D["수치 근거"]
  D --> E["예제 화면"]
  E --> F["최종 가이드"]
`;

export default function ComposedResearchStoryPage() {
  return (
    <SampleShell
      eyebrow="Composed Guide / Research Story"
      title="조사 자료를 발표 스토리로 바꾸는 조합"
      description="리서치형 발표는 개념 지도, 수치 차트, 흐름도를 함께 두면 청중이 근거와 결론을 동시에 따라오기 쉽습니다."
      note="Markmap은 구조를 잡고, Observable Plot은 근거를 보여주고, Mermaid는 결론까지의 흐름을 고정합니다."
    >
      <section className="stage-grid">
        <article className="visual-panel span-5">
          <div className="panel-heading">
            <div>
              <h2>Research map</h2>
              <p>조사 내용을 발표 구조로 분해</p>
            </div>
            <span className="card-icon" aria-hidden="true">
              <ListTree size={26} />
            </span>
          </div>
          <MarkmapView markdown={researchMap} />
        </article>

        <article className="visual-panel span-7">
          <div className="panel-heading">
            <div>
              <h2>Evidence maturity</h2>
              <p>자료가 발표 산출물로 구체화되는 정도</p>
            </div>
            <span className="card-icon" aria-hidden="true">
              <ChartSpline size={26} />
            </span>
          </div>
          <PlotChart data={researchData} />
        </article>

        <article className="visual-panel span-8">
          <div className="panel-heading">
            <div>
              <h2>Story flow</h2>
              <p>질문에서 최종 가이드까지 이어지는 발표 흐름</p>
            </div>
            <span className="card-icon" aria-hidden="true">
              <Route size={26} />
            </span>
          </div>
          <MermaidChart chart={storyFlow} />
        </article>

        <article className="slide-slab span-4">
          <h2>조사 발표는 세 겹으로 만든다.</h2>
          <p>
            구조를 먼저 보여주고, 숫자로 설득하고, 마지막에 흐름을 닫으면
            리서치가 발표로 변합니다.
          </p>
        </article>
      </section>
    </SampleShell>
  );
}

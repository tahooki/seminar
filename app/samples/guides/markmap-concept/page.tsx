import { ListTree, Network } from "lucide-react";
import { MarkmapView } from "@/src/presentation/components/MarkmapView";
import { SampleShell } from "@/src/presentation/components/SampleShell";

const conceptMarkdown = `
# 발표 시각화 선택
## 흐름
### Mermaid flowchart
### RoughJS SketchFlow
## 순서
### Mermaid sequence
### client boundary
## 구조
### React Flow
### Mermaid architecture
## 개념
### Markmap
### use-case index
## 데이터
### Observable Plot
### metric strip
## 의미
### Lucide icons
### status cards
`;

export default function MarkmapConceptGuidePage() {
  return (
    <SampleShell
      eyebrow="Guide / Markmap Concept"
      title="긴 목차를 개념 지도로 압축하기"
      description="Markmap은 Markdown 목록을 그대로 시각화해, 발표의 큰 가지와 세부 항목을 한 화면에서 보여줍니다."
      note="설명할 항목이 많아질수록 목차보다 개념 지도가 빠르게 방향을 잡아줍니다."
    >
      <section className="stage-grid">
        <article className="visual-panel span-7">
          <div className="panel-heading">
            <div>
              <h2>Visual tool map</h2>
              <p>발표 장면에서 시각화 도구가 갈라지는 구조</p>
            </div>
            <span className="card-icon" aria-hidden="true">
              <Network size={26} />
            </span>
          </div>
          <MarkmapView markdown={conceptMarkdown} />
        </article>

        <article className="slide-slab span-5">
          <h2>목차가 길어지면 지도처럼 펼친다.</h2>
          <p>
            개념의 상하 관계가 핵심일 때는 Markmap이 가장 빠릅니다. 발표자는
            Markdown 목록만 정리하고, 화면은 마인드맵으로 보여줍니다.
          </p>
          <div className="tag-row">
            <span className="tag">markdown</span>
            <span className="tag">mind map</span>
            <span className="tag">concept</span>
          </div>
        </article>

        <article className="visual-panel span-12">
          <div className="panel-heading">
            <div>
              <h2>Concept depth rule</h2>
              <p>발표 화면에서 읽히는 깊이 제한</p>
            </div>
            <span className="card-icon" aria-hidden="true">
              <ListTree size={26} />
            </span>
          </div>
          <div className="compare-grid">
            <div className="compare-item">
              <h3>Depth 1</h3>
              <p>발표 주제 하나를 중앙에 둔다.</p>
            </div>
            <div className="compare-item">
              <h3>Depth 2</h3>
              <p>큰 가지는 4-6개 안에서 유지한다.</p>
            </div>
            <div className="compare-item">
              <h3>Depth 3</h3>
              <p>세부 항목은 발표자가 말로 풀 수 있을 만큼만 둔다.</p>
            </div>
          </div>
        </article>
      </section>
    </SampleShell>
  );
}

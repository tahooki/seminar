import { Database, KeyRound } from "lucide-react";
import { MermaidChart } from "@/src/presentation/components/MermaidChart";
import { SampleShell } from "@/src/presentation/components/SampleShell";

const erdChart = `
erDiagram
  PRESENTATION ||--o{ SLIDE : contains
  SLIDE ||--o{ VISUAL_BLOCK : renders
  VISUAL_BLOCK }o--|| VISUAL_TOOL : uses
  VISUAL_TOOL ||--o{ GUIDE_DOC : documented_by
  SKILL ||--o{ GUIDE_DOC : reads

  PRESENTATION {
    string id
    string title
  }
  SLIDE {
    string id
    string layout
  }
  VISUAL_BLOCK {
    string id
    string type
  }
  VISUAL_TOOL {
    string name
    string package
  }
  GUIDE_DOC {
    string path
    string purpose
  }
  SKILL {
    string name
    string trigger
  }
`;

export default function MermaidErdSchemaPage() {
  return (
    <SampleShell
      eyebrow="Guide / ERD Schema"
      title="데이터 모델과 컴포넌트 관계를 ERD로 설명하기"
      description="DB 스키마, catalog, component contract처럼 엔티티 관계가 핵심인 발표에는 Mermaid ERD가 빠릅니다."
      note="ERD는 정확함이 중요하므로 실제 필드는 줄이고 관계와 cardinality를 먼저 보이게 만듭니다."
    >
      <section className="stage-grid">
        <article className="visual-panel span-8">
          <div className="panel-heading">
            <div>
              <h2>Presentation schema</h2>
              <p>발표 페이지, 시각 블록, 가이드 문서의 관계</p>
            </div>
            <span className="card-icon" aria-hidden="true">
              <Database size={26} />
            </span>
          </div>
          <MermaidChart chart={erdChart} />
        </article>

        <article className="visual-panel span-4">
          <div className="panel-heading">
            <div>
              <h2>ERD rule</h2>
              <p>발표용 ERD에서 먼저 남길 것</p>
            </div>
            <span className="card-icon" aria-hidden="true">
              <KeyRound size={26} />
            </span>
          </div>
          <div className="compare-grid compact">
            <div className="compare-item">
              <h3>Entity</h3>
              <p>이야기의 주체만 남긴다.</p>
            </div>
            <div className="compare-item">
              <h3>Relation</h3>
              <p>왜 연결되는지 동사로 쓴다.</p>
            </div>
            <div className="compare-item">
              <h3>Field</h3>
              <p>필드는 핵심 2개 안팎만 둔다.</p>
            </div>
          </div>
        </article>
      </section>
    </SampleShell>
  );
}

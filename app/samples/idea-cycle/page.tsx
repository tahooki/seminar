import { Lightbulb, MousePointer2, Sparkles } from "lucide-react";
import { MermaidChart } from "@/src/presentation/components/MermaidChart";
import { SampleShell } from "@/src/presentation/components/SampleShell";
import {
  CycleDiagram,
  SketchFlow,
} from "@/src/presentation/components/SketchDiagrams";

const cycleItems = [
  { label: "Paste", detail: "raw notes", color: "#6ba84f" },
  { label: "Generate", detail: "visual draft", color: "#2f80ed" },
  { label: "Select", detail: "best shape", color: "#ef7d6c" },
  { label: "Customize", detail: "tone & layout", color: "#f2a14a" },
  { label: "Present", detail: "one page", color: "#9b6ee8" },
  { label: "Export", detail: "share link", color: "#b37a2f" },
];

const sketchFlowItems = [
  {
    title: "문장",
    description: "아이디어 입력",
    color: "#ef7d6c",
  },
  {
    title: "구조",
    description: "관계 정리",
    color: "#2f80ed",
  },
  {
    title: "그림",
    description: "슬라이드화",
    color: "#6ba84f",
  },
];

const mermaidFlow = `
flowchart LR
  A["한 문장 아이디어"] --> B["핵심 개념 추출"]
  B --> C{"어떤 그림이 맞나?"}
  C -->|"순환"| D["CycleDiagram"]
  C -->|"단계"| E["SketchFlow"]
  C -->|"정형 구조"| F["MermaidChart"]
  D --> G["발표 슬라이드"]
  E --> G
  F --> G
`;

export default function IdeaCyclePage() {
  return (
    <SampleShell
      eyebrow="Sample 01 / Rough.js + Mermaid"
      title="Napkin처럼 생각의 순환을 그리는 페이지"
      description="손그림 느낌의 순환 다이어그램으로 발표 흐름을 부드럽게 만들고, Mermaid로 같은 내용을 정형 흐름도로 다시 설명합니다."
      note="이 페이지는 발표자가 입력한 거친 아이디어를 시각 요소로 바꿔 보여주는 첫 번째 실험입니다."
    >
      <section className="stage-grid">
        <article className="visual-panel span-8">
          <div className="panel-heading">
            <div>
              <h2>Idea to visual loop</h2>
              <p>Rough.js로 그린 발표자료 제작 사이클</p>
            </div>
            <span className="card-icon">
              <Sparkles size={26} />
            </span>
          </div>
          <CycleDiagram center="Seminar" items={cycleItems} />
        </article>

        <article className="visual-panel span-4">
          <div className="panel-heading">
            <div>
              <h3>발표용 사용감</h3>
              <p>완전한 도식보다 설명을 시작하기 쉬운 그림.</p>
            </div>
          </div>
          <div className="metric-strip">
            <div className="metric">
              <strong>6</strong>
              <span>반복 단계</span>
            </div>
            <div className="metric">
              <strong>3</strong>
              <span>핵심 컴포넌트</span>
            </div>
            <div className="metric">
              <strong>1p</strong>
              <span>발표 화면</span>
            </div>
          </div>
          <p className="panel-copy">
            순환 구조, 단계 흐름, Mermaid 정형도를 한 화면에서 비교하면 어떤
            표현이 발표에 맞는지 바로 판단할 수 있습니다.
          </p>
        </article>

        <article className="visual-panel span-6">
          <div className="panel-heading">
            <div>
              <h2>Sketch flow</h2>
              <p>문장에서 그림으로 가는 최소 단계</p>
            </div>
            <span className="card-icon">
              <MousePointer2 size={26} />
            </span>
          </div>
          <SketchFlow items={sketchFlowItems} />
        </article>

        <article className="visual-panel span-6">
          <div className="panel-heading">
            <div>
              <h2>Mermaid fallback</h2>
              <p>정형 다이어그램이 필요할 때의 같은 이야기</p>
            </div>
            <span className="card-icon">
              <Lightbulb size={26} />
            </span>
          </div>
          <MermaidChart chart={mermaidFlow} />
        </article>
      </section>
    </SampleShell>
  );
}

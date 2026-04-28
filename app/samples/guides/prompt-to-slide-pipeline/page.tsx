import { Bot, FileText, Workflow } from "lucide-react";
import { MermaidChart } from "@/src/presentation/components/MermaidChart";
import { SampleShell } from "@/src/presentation/components/SampleShell";

const pipelineChart = `
flowchart LR
  A["Prompt"] --> B["Intent classify"]
  B --> C["Guide lookup"]
  C --> D["Example route"]
  D --> E["Component plan"]
  E --> F["page.tsx"]
  F --> G["Browser deck"]
`;

const contract = `{
  "intent": "system briefing",
  "visuals": ["React Flow", "Mermaid", "Plot"],
  "route": "/samples/guides/composed-system-briefing",
  "components": ["SampleShell", "GuideArchitectureFlow"]
}`;

export default function PromptToSlidePipelinePage() {
  return (
    <SampleShell
      eyebrow="Guide / Prompt to Slide"
      title="프롬프트가 발표 페이지가 되는 파이프라인"
      description="이 프로젝트 자체를 설명할 때는 사용자의 요청이 skill, guide, 예제 route, React page로 바뀌는 흐름을 보여주면 좋습니다."
      note="agentic presentation workflow를 소개하는 메타 발표에 바로 쓸 수 있는 예제입니다."
    >
      <section className="stage-grid">
        <article className="visual-panel span-8">
          <div className="panel-heading">
            <div>
              <h2>Prompt to page</h2>
              <p>요청에서 브라우저 발표 화면까지</p>
            </div>
            <span className="card-icon" aria-hidden="true">
              <Workflow size={26} />
            </span>
          </div>
          <MermaidChart chart={pipelineChart} />
        </article>

        <article className="visual-panel span-4">
          <div className="panel-heading">
            <div>
              <h2>Structured intent</h2>
              <p>agent가 내부적으로 잡아야 할 최소 계약</p>
            </div>
            <span className="card-icon" aria-hidden="true">
              <Bot size={26} />
            </span>
          </div>
          <pre className="code-window">
            <code>{contract}</code>
          </pre>
        </article>

        <article className="slide-slab span-12">
          <h2>좋은 skill은 프롬프트를 바로 코드로 보내지 않는다.</h2>
          <p>
            먼저 의도를 분류하고, 맞는 가이드와 예제 route를 찾은 다음, 기존
            컴포넌트 계약으로 발표 페이지를 구성합니다.
          </p>
          <div className="tag-row">
            <span className="tag">skill</span>
            <span className="tag">guide lookup</span>
            <span className="tag">page generation</span>
          </div>
        </article>

        <article className="visual-panel span-12">
          <div className="panel-heading">
            <div>
              <h2>Pipeline checkpoints</h2>
              <p>생성 도중 확인해야 할 세 가지</p>
            </div>
            <span className="card-icon" aria-hidden="true">
              <FileText size={26} />
            </span>
          </div>
          <div className="compare-grid">
            <div className="compare-item">
              <h3>Intent</h3>
              <p>사용자가 그리고 싶은 장면을 먼저 고른다.</p>
            </div>
            <div className="compare-item">
              <h3>Reference</h3>
              <p>필요한 guide와 component contract만 읽는다.</p>
            </div>
            <div className="compare-item">
              <h3>Reuse</h3>
              <p>새 추상화보다 기존 presentation component를 쓴다.</p>
            </div>
          </div>
        </article>
      </section>
    </SampleShell>
  );
}

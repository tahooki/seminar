import { Code2, FileCode2 } from "lucide-react";
import { MermaidChart } from "@/src/presentation/components/MermaidChart";
import { SampleShell } from "@/src/presentation/components/SampleShell";

const codeFlow = `
flowchart LR
  A["page.tsx"] --> B["SampleShell"]
  B --> C["visual-panel"]
  C --> D["Client Chart"]
  D --> E["Rendered SVG"]
`;

const codeSample = `export default function Page() {
  return (
    <SampleShell
      eyebrow="Guide / Code Walkthrough"
      title="코드를 발표 흐름으로 읽기"
      description="왼쪽은 실제 코드, 오른쪽은 구조와 주의점"
    >
      <section className="stage-grid">
        <article className="visual-panel span-7">
          <MermaidChart chart={codeFlow} />
        </article>
      </section>
    </SampleShell>
  );
}`;

export default function CodeWalkthroughPage() {
  return (
    <SampleShell
      eyebrow="Guide / Code Walkthrough"
      title="코드를 보여주고 바로 옆에서 구조를 설명하기"
      description="기술 세미나에서는 코드 블록만 크게 띄우는 것보다, 코드가 화면 구조와 어떻게 연결되는지 함께 보여주는 편이 좋습니다."
      note="코드는 핵심 부분만 남기고, 실행 흐름은 Mermaid나 callout으로 분리합니다."
    >
      <section className="stage-grid">
        <article className="visual-panel span-7">
          <div className="panel-heading">
            <div>
              <h2>Code excerpt</h2>
              <p>SampleShell을 중심으로 읽는 route 구조</p>
            </div>
            <span className="card-icon" aria-hidden="true">
              <Code2 size={26} />
            </span>
          </div>
          <pre className="code-window">
            <code>{codeSample}</code>
          </pre>
        </article>

        <article className="visual-panel span-5">
          <div className="panel-heading">
            <div>
              <h2>Read path</h2>
              <p>코드를 읽어 내려가는 순서</p>
            </div>
            <span className="card-icon" aria-hidden="true">
              <FileCode2 size={26} />
            </span>
          </div>
          <MermaidChart chart={codeFlow} />
        </article>

        <article className="slide-slab span-12">
          <h2>코드 발표는 전체가 아니라 경로를 보여준다.</h2>
          <p>
            파일 전체를 설명하기보다, 발표자가 읽어야 할 경로를 먼저 정하고 그
            경로에 맞는 코드 조각만 남기는 편이 훨씬 선명합니다.
          </p>
        </article>
      </section>
    </SampleShell>
  );
}

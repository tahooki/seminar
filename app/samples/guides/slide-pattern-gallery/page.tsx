import {
  Braces,
  FileText,
  ListChecks,
  MessageSquareQuote,
  PanelsTopLeft,
  Presentation,
} from "lucide-react";
import { MermaidChart } from "@/src/presentation/components/MermaidChart";
import { SampleShell } from "@/src/presentation/components/SampleShell";

const miniChart = `
flowchart LR
  A["Problem"] --> B["Pattern"]
  B --> C["Example"]
  C --> D["Takeaway"]
`;

const code = `const slide = {
  title: "핵심 문장",
  visual: "MermaidChart",
  takeaway: "한 화면에 하나의 판단만 남긴다",
};`;

const patterns = [
  {
    title: "Title",
    description: "발표 이름과 한 줄 약속",
    icon: Presentation,
  },
  {
    title: "Agenda",
    description: "오늘 볼 순서와 큰 전환",
    icon: ListChecks,
  },
  {
    title: "Quote",
    description: "기억해야 할 문장 하나",
    icon: MessageSquareQuote,
  },
  {
    title: "Summary",
    description: "마지막에 남길 세 가지",
    icon: FileText,
  },
];

export default function SlidePatternGalleryPage() {
  return (
    <SampleShell
      eyebrow="Guide / Slide Pattern Gallery"
      title="발표 페이지를 조립하는 기본 블록 모음"
      description="도구별 예제를 넘어, 실제 발표 페이지에서 반복해서 쓰는 제목, agenda, quote, code, diagram, summary 패턴을 한곳에 모았습니다."
      note="새 발표를 만들 때 이 페이지를 먼저 보고 필요한 블록을 고르면 화면 구성이 빨라집니다."
    >
      <section className="stage-grid">
        {patterns.map((pattern) => {
          const Icon = pattern.icon;
          return (
            <article key={pattern.title} className="visual-panel span-3">
              <div className="panel-heading">
                <div>
                  <h2>{pattern.title}</h2>
                  <p>{pattern.description}</p>
                </div>
                <span className="card-icon" aria-hidden="true">
                  <Icon size={26} />
                </span>
              </div>
              <div className="tag-row">
                <span className="tag">slide block</span>
              </div>
            </article>
          );
        })}

        <article className="visual-panel span-6">
          <div className="panel-heading">
            <div>
              <h2>Diagram block</h2>
              <p>설명 흐름을 하나의 다이어그램으로 고정</p>
            </div>
            <span className="card-icon" aria-hidden="true">
              <PanelsTopLeft size={26} />
            </span>
          </div>
          <MermaidChart chart={miniChart} />
        </article>

        <article className="visual-panel span-6">
          <div className="panel-heading">
            <div>
              <h2>Code block</h2>
              <p>실제 코드는 짧게, 해석은 옆 패널로 분리</p>
            </div>
            <span className="card-icon" aria-hidden="true">
              <Braces size={26} />
            </span>
          </div>
          <pre className="code-window">
            <code>{code}</code>
          </pre>
        </article>

        <article className="slide-slab span-12">
          <h2>한 슬라이드에는 한 가지 역할만 둔다.</h2>
          <p>
            제목, agenda, quote, code, diagram, summary를 섞어 쓰되, 각 블록의
            역할을 흐리면 발표의 호흡이 깨집니다.
          </p>
        </article>
      </section>
    </SampleShell>
  );
}

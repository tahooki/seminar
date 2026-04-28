import { Mic2, NotebookPen, Presentation } from "lucide-react";
import { MermaidChart } from "@/src/presentation/components/MermaidChart";
import { SampleShell } from "@/src/presentation/components/SampleShell";

const tinyFlow = `
flowchart LR
  A["Problem"] --> B["Visual"]
  B --> C["Takeaway"]
`;

export default function TalkTrackNotesPage() {
  return (
    <SampleShell
      eyebrow="Guide / Talk Track Notes"
      title="화면 문장과 발표자 대본을 분리하기"
      description="실제 세미나 자료는 화면에 보이는 문장과 발표자가 말할 문장이 다릅니다. talk track 예제는 두 층을 함께 설계합니다."
      note="슬라이드는 짧게, speaker notes는 구체적으로. 이 분리가 발표의 밀도를 올립니다."
    >
      <section className="stage-grid">
        <article className="visual-panel span-7">
          <div className="panel-heading">
            <div>
              <h2>Visible slide</h2>
              <p>청중이 보는 화면에는 판단만 남김</p>
            </div>
            <span className="card-icon" aria-hidden="true">
              <Presentation size={26} />
            </span>
          </div>
          <div className="talk-slide">
            <p className="eyebrow">Key takeaway</p>
            <h3>한 화면에는 한 가지 판단만 남긴다.</h3>
            <MermaidChart chart={tinyFlow} />
          </div>
        </article>

        <article className="visual-panel span-5">
          <div className="panel-heading">
            <div>
              <h2>Speaker notes</h2>
              <p>발표자가 실제로 말할 흐름</p>
            </div>
            <span className="card-icon" aria-hidden="true">
              <Mic2 size={26} />
            </span>
          </div>
          <div className="notes-panel">
            <p>
              먼저 문제를 한 문장으로 고정합니다. 그 다음 화면에는 도구 이름을
              많이 늘어놓지 않고, 어떤 판단을 해야 하는지만 남깁니다.
            </p>
            <p>
              다이어그램은 청중이 따라올 경로를 보여주고, 자세한 라이브러리
              설명은 말로 보충합니다.
            </p>
          </div>
        </article>

        <article className="slide-slab span-12">
          <h2>좋은 발표 페이지는 읽는 문서가 아니라 말하기 위한 화면이다.</h2>
          <p>
            화면에는 기억할 문장, notes에는 맥락과 예시를 둔다. 이 구조를
            유지하면 슬라이드가 길어지는 문제를 줄일 수 있습니다.
          </p>
          <div className="tag-row">
            <span className="tag">speaker notes</span>
            <span className="tag">talk track</span>
            <span className="tag">presentation</span>
          </div>
        </article>

        <article className="visual-panel span-12">
          <div className="panel-heading">
            <div>
              <h2>Notes checklist</h2>
              <p>발표 대본을 붙일 때 확인할 기준</p>
            </div>
            <span className="card-icon" aria-hidden="true">
              <NotebookPen size={26} />
            </span>
          </div>
          <div className="compare-grid">
            <div className="compare-item">
              <h3>Screen</h3>
              <p>청중이 읽을 문장은 짧고 크다.</p>
            </div>
            <div className="compare-item">
              <h3>Notes</h3>
              <p>발표자가 말할 배경과 예시는 notes에 둔다.</p>
            </div>
            <div className="compare-item">
              <h3>Timing</h3>
              <p>한 화면에 말할 시간은 1-2분 안으로 잡는다.</p>
            </div>
          </div>
        </article>
      </section>
    </SampleShell>
  );
}

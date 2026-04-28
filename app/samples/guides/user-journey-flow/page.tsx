import { Footprints, UserRoundCheck } from "lucide-react";
import { MermaidChart } from "@/src/presentation/components/MermaidChart";
import { SampleShell } from "@/src/presentation/components/SampleShell";

const journeyChart = `
journey
  title 발표자료 제작 사용자 여정
  section 시작
    발표 주제 입력: 4: Speaker
    자료 붙여넣기: 3: Speaker
  section 구성
    시각화 도구 선택: 5: Speaker
    예제 페이지 확인: 5: Speaker
  section 완성
    발표 페이지 수정: 4: Speaker
    브라우저에서 발표: 5: Speaker
`;

const flowChart = `
flowchart LR
  A["주제 입력"] --> B["자료 정리"]
  B --> C["도구 선택"]
  C --> D["예제 확인"]
  D --> E["페이지 생성"]
  E --> F["발표"]
`;

export default function UserJourneyFlowPage() {
  return (
    <SampleShell
      eyebrow="Guide / User Journey"
      title="사용자 여정을 발표 흐름으로 설명하기"
      description="제품 기능이나 발표 생성 경험을 설명할 때는 사용자가 어디서 시작해 어떤 감정과 판단을 거치는지 보여주는 journey가 좋습니다."
      note="기술 구조만 말하면 건조해질 때, 사용자 여정은 왜 이 흐름이 필요한지 청중에게 먼저 납득시킵니다."
    >
      <section className="stage-grid">
        <article className="visual-panel span-7">
          <div className="panel-heading">
            <div>
              <h2>Speaker journey</h2>
              <p>발표자가 자료에서 발표까지 가는 경험</p>
            </div>
            <span className="card-icon" aria-hidden="true">
              <Footprints size={26} />
            </span>
          </div>
          <MermaidChart chart={journeyChart} />
        </article>

        <article className="visual-panel span-5">
          <div className="panel-heading">
            <div>
              <h2>Journey fallback</h2>
              <p>Mermaid journey가 과하면 flowchart로 단순화</p>
            </div>
            <span className="card-icon" aria-hidden="true">
              <UserRoundCheck size={26} />
            </span>
          </div>
          <MermaidChart chart={flowChart} />
        </article>

        <article className="slide-slab span-12">
          <h2>사용자 여정은 기능의 이유를 보여준다.</h2>
          <p>
            어떤 화면이 필요한지 설명하기 전에, 사용자가 어떤 순간에 막히고
            어떤 도움을 받는지 먼저 보여주면 기술 선택이 자연스럽게 이어집니다.
          </p>
        </article>
      </section>
    </SampleShell>
  );
}

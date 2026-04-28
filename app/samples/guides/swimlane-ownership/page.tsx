import { PanelsTopLeft, UsersRound } from "lucide-react";
import { SampleShell } from "@/src/presentation/components/SampleShell";

const lanes = [
  {
    owner: "User",
    color: "coral",
    steps: ["주제 요청", "예제 확인", "발표 진행"],
  },
  {
    owner: "Agent",
    color: "blue",
    steps: ["의도 분류", "도구 추천", "페이지 구성"],
  },
  {
    owner: "Frontend",
    color: "green",
    steps: ["컴포넌트 렌더", "상태 처리", "접근성 유지"],
  },
  {
    owner: "Docs",
    color: "violet",
    steps: ["가이드 제공", "예제 연결", "skill reference"],
  },
];

export default function SwimlaneOwnershipPage() {
  return (
    <SampleShell
      eyebrow="Guide / Swimlane Ownership"
      title="역할별 책임을 lane으로 나누어 설명하기"
      description="User, Agent, Frontend, Docs처럼 참여자가 많은 시스템은 누가 무엇을 맡는지 lane으로 나누면 책임 경계가 선명해집니다."
      note="A2UI, agent workflow, 승인 프로세스처럼 역할이 섞이는 발표에서 특히 유용합니다."
    >
      <section className="stage-grid">
        <article className="visual-panel span-12">
          <div className="panel-heading">
            <div>
              <h2>Ownership lanes</h2>
              <p>발표 페이지 생성 흐름의 역할 분담</p>
            </div>
            <span className="card-icon" aria-hidden="true">
              <PanelsTopLeft size={26} />
            </span>
          </div>
          <div className="swimlane-board">
            {lanes.map((lane) => (
              <div key={lane.owner} className={`swimlane ${lane.color}`}>
                <h3>{lane.owner}</h3>
                <div className="swimlane-steps">
                  {lane.steps.map((step) => (
                    <span key={step}>{step}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </article>

        <article className="slide-slab span-5">
          <h2>책임이 섞이면 lane으로 자른다.</h2>
          <p>
            순서보다 소유권이 중요할 때는 flowchart보다 swimlane이 더 빠르게
            이해됩니다.
          </p>
        </article>

        <article className="visual-panel span-7">
          <div className="panel-heading">
            <div>
              <h2>When to use</h2>
              <p>swimlane이 특히 좋은 발표 장면</p>
            </div>
            <span className="card-icon" aria-hidden="true">
              <UsersRound size={26} />
            </span>
          </div>
          <div className="compare-grid">
            <div className="compare-item">
              <h3>협업</h3>
              <p>팀이나 layer 사이의 handoff를 보여준다.</p>
            </div>
            <div className="compare-item">
              <h3>보안</h3>
              <p>agent와 host app의 책임 경계를 분리한다.</p>
            </div>
            <div className="compare-item">
              <h3>운영</h3>
              <p>누가 오류를 감지하고 누가 수정하는지 정리한다.</p>
            </div>
          </div>
        </article>
      </section>
    </SampleShell>
  );
}

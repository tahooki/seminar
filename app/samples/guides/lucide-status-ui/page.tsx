import {
  AlertTriangle,
  CheckCircle2,
  CircleDashed,
  Clock3,
  Send,
  ShieldCheck,
} from "lucide-react";
import { SampleShell } from "@/src/presentation/components/SampleShell";

const statuses = [
  {
    title: "Ready",
    description: "발표에 바로 쓸 수 있는 시각 패턴",
    icon: CheckCircle2,
    tag: "green",
  },
  {
    title: "Draft",
    description: "아이디어는 있지만 예제 페이지가 더 필요한 상태",
    icon: CircleDashed,
    tag: "blue",
  },
  {
    title: "Watch",
    description: "복잡도와 화면 밀도를 확인해야 하는 상태",
    icon: AlertTriangle,
    tag: "coral",
  },
  {
    title: "Later",
    description: "발표에 필요할 때만 확장하면 되는 후보",
    icon: Clock3,
    tag: "yellow",
  },
];

export default function LucideStatusGuidePage() {
  return (
    <SampleShell
      eyebrow="Guide / Lucide Status UI"
      title="아이콘으로 상태와 섹션 의미를 빠르게 구분하기"
      description="Lucide는 발표 페이지에서 heading, 상태 카드, 액션의 의미를 짧고 일관된 시각 단서로 보강합니다."
      note="아이콘은 본문을 대체하지 않고, 청중이 정보를 찾는 속도를 높이는 역할에 머무르는 편이 좋습니다."
    >
      <section className="stage-grid">
        {statuses.map((status) => {
          const Icon = status.icon;
          return (
            <article key={status.title} className="visual-panel span-3">
              <div className="panel-heading">
                <div>
                  <h2>{status.title}</h2>
                  <p>{status.description}</p>
                </div>
                <span className="card-icon" aria-hidden="true">
                  <Icon size={26} />
                </span>
              </div>
              <div className="tag-row">
                <span className="tag">{status.tag}</span>
                <span className="tag">status</span>
              </div>
            </article>
          );
        })}

        <article className="slide-slab span-5">
          <h2>아이콘은 의미의 표지판이다.</h2>
          <p>
            같은 크기, 같은 stroke, 같은 위치에 두면 발표 화면의 리듬을 깨지
            않으면서 정보를 더 빨리 찾게 해줍니다.
          </p>
        </article>

        <article className="visual-panel span-7">
          <div className="panel-heading">
            <div>
              <h2>Icon placement</h2>
              <p>발표 UI에서 아이콘을 쓰기 좋은 위치</p>
            </div>
            <span className="card-icon" aria-hidden="true">
              <ShieldCheck size={26} />
            </span>
          </div>
          <div className="compare-grid">
            <div className="compare-item">
              <h3>Heading</h3>
              <p>섹션의 성격을 빠르게 구분한다.</p>
            </div>
            <div className="compare-item">
              <h3>Status</h3>
              <p>완료, 대기, 위험 같은 상태를 짧게 표시한다.</p>
            </div>
            <div className="compare-item">
              <h3>Action</h3>
              <p>전송, 이동, 열기 같은 동작을 버튼 안에서 보강한다.</p>
            </div>
          </div>
          <div className="tag-row">
            <span className="pill-link">
              <Send size={17} aria-hidden="true" />
              Next action
            </span>
          </div>
        </article>
      </section>
    </SampleShell>
  );
}

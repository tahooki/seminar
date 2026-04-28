import { AlertTriangle, ShieldCheck, TriangleAlert } from "lucide-react";
import { SampleShell } from "@/src/presentation/components/SampleShell";

const risks = [
  {
    title: "시각화 과밀",
    impact: "청중이 핵심을 놓칠 수 있음",
    mitigation: "한 화면에 하나의 판단만 남김",
    level: "High",
  },
  {
    title: "client bundle 증가",
    impact: "초기 로딩이 무거워질 수 있음",
    mitigation: "브라우저 라이브러리는 작은 client component로 격리",
    level: "Medium",
  },
  {
    title: "문서와 예제 불일치",
    impact: "skill 추천이 낡아질 수 있음",
    mitigation: "예제 route와 reference를 같이 갱신",
    level: "Medium",
  },
];

export default function RiskTradeoffBoardPage() {
  return (
    <SampleShell
      eyebrow="Guide / Risk Trade-off"
      title="도입 효과와 위험을 한 화면에서 같이 말하기"
      description="새 도구나 방식의 장점만 말하면 설득력이 약합니다. risk board는 위험, 영향, 대응책을 함께 보여줍니다."
      note="기술 도입 발표에서는 trade-off를 숨기지 않고 관리 가능한 형태로 보여주는 게 오히려 신뢰를 만듭니다."
    >
      <section className="stage-grid">
        <article className="visual-panel span-12">
          <div className="panel-heading">
            <div>
              <h2>Risk register</h2>
              <p>발표 시각화 시스템 도입 시 관리할 위험</p>
            </div>
            <span className="card-icon" aria-hidden="true">
              <TriangleAlert size={26} />
            </span>
          </div>
          <div className="risk-board">
            {risks.map((risk) => (
              <article key={risk.title} className="risk-card">
                <div>
                  <span className="risk-level">{risk.level}</span>
                  <h3>{risk.title}</h3>
                </div>
                <p>
                  <AlertTriangle size={17} aria-hidden="true" />
                  {risk.impact}
                </p>
                <p>
                  <ShieldCheck size={17} aria-hidden="true" />
                  {risk.mitigation}
                </p>
              </article>
            ))}
          </div>
        </article>

        <article className="slide-slab span-5">
          <h2>리스크는 반대 근거가 아니라 설계 조건이다.</h2>
          <p>
            위험을 대응책과 같이 보여주면, 청중은 도입 판단을 훨씬 안정적으로
            따라올 수 있습니다.
          </p>
        </article>

        <article className="visual-panel span-7">
          <div className="panel-heading">
            <div>
              <h2>Board structure</h2>
              <p>리스크 보드의 최소 열 구성</p>
            </div>
          </div>
          <div className="compare-grid">
            <div className="compare-item">
              <h3>Risk</h3>
              <p>무엇이 실패할 수 있는지 말한다.</p>
            </div>
            <div className="compare-item">
              <h3>Impact</h3>
              <p>실패하면 어떤 일이 생기는지 말한다.</p>
            </div>
            <div className="compare-item">
              <h3>Mitigation</h3>
              <p>어떻게 줄일지 바로 붙여 말한다.</p>
            </div>
          </div>
        </article>
      </section>
    </SampleShell>
  );
}

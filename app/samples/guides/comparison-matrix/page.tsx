import { CheckCircle2, CircleDashed, Table2, XCircle } from "lucide-react";
import { SampleShell } from "@/src/presentation/components/SampleShell";

const rows = [
  {
    scene: "정형 흐름",
    primary: "Mermaid",
    good: "빠른 수정, 문서와 동기화",
    watch: "노드가 많으면 복잡",
    example: "/samples/guides/mermaid-flow",
  },
  {
    scene: "탐색형 구조",
    primary: "React Flow",
    good: "확대, 이동, 노드 탐색",
    watch: "단순 흐름에는 과함",
    example: "/samples/guides/react-flow-architecture",
  },
  {
    scene: "개념 분해",
    primary: "Markmap",
    good: "Markdown 목록 그대로 시각화",
    watch: "임의 연결선에는 부적합",
    example: "/samples/guides/markmap-concept",
  },
  {
    scene: "수치 근거",
    primary: "Observable Plot",
    good: "값 label과 축으로 설득",
    watch: "숫자가 없으면 쓰지 않음",
    example: "/samples/guides/observable-plot-comparison",
  },
];

export default function ComparisonMatrixPage() {
  return (
    <SampleShell
      eyebrow="Guide / Comparison Matrix"
      title="선택지를 한 화면에서 비교하기"
      description="라이브러리 선택, 도입 전후 비교, A/B/C 후보 평가처럼 판단 기준이 핵심인 발표에는 matrix가 강합니다."
      note="비교표는 정보가 많아지기 쉬우니 한 열에는 한 역할만 두고, 상태 아이콘으로 읽는 속도를 높입니다."
    >
      <section className="stage-grid">
        <article className="visual-panel span-12">
          <div className="panel-heading">
            <div>
              <h2>Tool selection matrix</h2>
              <p>장면별 추천 도구와 주의점</p>
            </div>
            <span className="card-icon" aria-hidden="true">
              <Table2 size={26} />
            </span>
          </div>
          <div className="guide-table-wrap">
            <table className="guide-table">
              <thead>
                <tr>
                  <th>장면</th>
                  <th>추천 도구</th>
                  <th>좋은 점</th>
                  <th>주의점</th>
                  <th>예제</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <tr key={row.scene}>
                    <td>
                      <CheckCircle2 size={18} aria-hidden="true" />
                      {row.scene}
                    </td>
                    <td>{row.primary}</td>
                    <td>{row.good}</td>
                    <td>
                      <CircleDashed size={18} aria-hidden="true" />
                      {row.watch}
                    </td>
                    <td>
                      <span className="code-chip">{row.example}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </article>

        <article className="slide-slab span-5">
          <h2>비교표는 결정을 남긴다.</h2>
          <p>
            여러 선택지를 늘어놓는 데서 끝내지 말고, 각 행의 추천 도구가 바로
            보이게 만들어야 합니다.
          </p>
        </article>

        <article className="visual-panel span-7">
          <div className="panel-heading">
            <div>
              <h2>Matrix checklist</h2>
              <p>좋은 비교표의 세 가지 조건</p>
            </div>
            <span className="card-icon" aria-hidden="true">
              <XCircle size={26} />
            </span>
          </div>
          <div className="compare-grid">
            <div className="compare-item">
              <h3>기준</h3>
              <p>열 제목이 판단 기준이어야 한다.</p>
            </div>
            <div className="compare-item">
              <h3>추천</h3>
              <p>각 행의 결론을 숨기지 않는다.</p>
            </div>
            <div className="compare-item">
              <h3>주의</h3>
              <p>언제 쓰지 않을지도 같이 적는다.</p>
            </div>
          </div>
        </article>
      </section>
    </SampleShell>
  );
}

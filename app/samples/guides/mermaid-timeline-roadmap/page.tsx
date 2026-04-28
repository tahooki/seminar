import { CalendarDays, Map } from "lucide-react";
import { MermaidChart } from "@/src/presentation/components/MermaidChart";
import { SampleShell } from "@/src/presentation/components/SampleShell";

const roadmapChart = `
gantt
  title Presentation Visual Guide Roadmap
  dateFormat  YYYY-MM-DD
  axisFormat  %m/%d
  section Docs
  Package scan      :done, scan, 2026-04-23, 1d
  Library guides    :done, guides, after scan, 2d
  section Examples
  Base examples     :done, examples, after guides, 2d
  Pattern gallery   :active, gallery, after examples, 1d
  section Skill
  Skill references  :done, skill, after guides, 1d
  Real deck reuse   :reuse, after gallery, 2d
`;

const timelineFlow = `
flowchart LR
  A["조사"] --> B["가이드"]
  B --> C["예제"]
  C --> D["최종 선택표"]
  D --> E["skill"]
  E --> F["새 발표 페이지"]
`;

export default function MermaidTimelineRoadmapPage() {
  return (
    <SampleShell
      eyebrow="Guide / Timeline Roadmap"
      title="일정과 로드맵을 발표용 타임라인으로 보여주기"
      description="프로젝트 계획, 기능 출시 순서, 작업 흐름의 시간 축이 중요하면 Mermaid gantt 또는 timeline 계열 다이어그램이 좋습니다."
      note="날짜가 정확하면 Gantt, 순서만 중요하면 flowchart roadmap으로 단순화합니다."
    >
      <section className="stage-grid">
        <article className="visual-panel span-8">
          <div className="panel-heading">
            <div>
              <h2>Roadmap chart</h2>
              <p>문서, 예제, skill까지 이어지는 작업 일정</p>
            </div>
            <span className="card-icon" aria-hidden="true">
              <CalendarDays size={26} />
            </span>
          </div>
          <MermaidChart chart={roadmapChart} />
        </article>

        <article className="slide-slab span-4">
          <h2>시간 축이 있으면 roadmap.</h2>
          <p>
            작업이 언제 시작되고, 무엇 다음에 이어지는지가 핵심이면 흐름도보다
            로드맵이 발표에 잘 맞습니다.
          </p>
        </article>

        <article className="visual-panel span-12">
          <div className="panel-heading">
            <div>
              <h2>Simplified route</h2>
              <p>날짜보다 순서가 중요할 때의 대체 표현</p>
            </div>
            <span className="card-icon" aria-hidden="true">
              <Map size={26} />
            </span>
          </div>
          <MermaidChart chart={timelineFlow} />
        </article>
      </section>
    </SampleShell>
  );
}

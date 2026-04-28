import Link from "next/link";
import {
  Braces,
  CalendarDays,
  ChartNoAxesColumn,
  Code2,
  Crosshair,
  Database,
  Footprints,
  GitBranch,
  GitCompareArrows,
  ListTree,
  Map,
  MousePointer2,
  Network,
  NotebookPen,
  PanelsTopLeft,
  Pin,
  PencilRuler,
  Repeat2,
  Route,
  ShieldCheck,
  Table2,
  TrendingUp,
  TriangleAlert,
  UsersRound,
  Workflow,
} from "lucide-react";
import { SampleShell } from "@/src/presentation/components/SampleShell";

const guideSamples = [
  {
    href: "/samples/guides/mermaid-flow",
    title: "Mermaid Flow",
    description: "작업 단계와 의사결정 흐름을 텍스트 기반 다이어그램으로 정리합니다.",
    tags: ["mermaid", "flowchart"],
    icon: Route,
  },
  {
    href: "/samples/guides/mermaid-sequence",
    title: "Mermaid Sequence",
    description: "사용자, agent, UI, 서버 사이의 시간 순서를 고정된 흐름으로 보여줍니다.",
    tags: ["mermaid", "sequence"],
    icon: Braces,
  },
  {
    href: "/samples/guides/mermaid-timeline-roadmap",
    title: "Timeline Roadmap",
    description: "일정, 출시 순서, 작업 계획을 Mermaid roadmap으로 보여줍니다.",
    tags: ["mermaid", "roadmap"],
    icon: CalendarDays,
  },
  {
    href: "/samples/guides/mermaid-state-machine",
    title: "State Machine",
    description: "agent run, 승인 흐름, lifecycle처럼 상태 전이를 설명합니다.",
    tags: ["mermaid", "state"],
    icon: GitBranch,
  },
  {
    href: "/samples/guides/mermaid-erd-schema",
    title: "ERD Schema",
    description: "DB 구조, catalog, component contract 관계를 ERD로 정리합니다.",
    tags: ["mermaid", "schema"],
    icon: Database,
  },
  {
    href: "/samples/guides/user-journey-flow",
    title: "User Journey Flow",
    description: "사용자 경험과 감정 흐름을 journey 또는 flowchart로 설명합니다.",
    tags: ["journey", "ux"],
    icon: Footprints,
  },
  {
    href: "/samples/guides/swimlane-ownership",
    title: "Swimlane Ownership",
    description: "User, Agent, Frontend, Docs의 책임을 lane으로 나눕니다.",
    tags: ["ownership", "lane"],
    icon: UsersRound,
  },
  {
    href: "/samples/guides/quadrant-priority-map",
    title: "Quadrant Priority",
    description: "효과와 난이도처럼 두 축으로 우선순위를 판단합니다.",
    tags: ["quadrant", "priority"],
    icon: Crosshair,
  },
  {
    href: "/samples/guides/risk-tradeoff-board",
    title: "Risk Trade-off",
    description: "위험, 영향, 대응책을 한 화면에서 같이 보여줍니다.",
    tags: ["risk", "trade-off"],
    icon: TriangleAlert,
  },
  {
    href: "/samples/guides/rough-sketch-flow",
    title: "Rough Sketch Flow",
    description: "아이디어 단계의 흐름을 손그림 느낌으로 부드럽게 설명합니다.",
    tags: ["roughjs", "sketch"],
    icon: PencilRuler,
  },
  {
    href: "/samples/guides/rough-cycle",
    title: "Rough Cycle",
    description: "반복 루프와 제작 사이클을 한 화면에서 둥글게 정리합니다.",
    tags: ["roughjs", "cycle"],
    icon: Repeat2,
  },
  {
    href: "/samples/guides/markmap-concept",
    title: "Markmap Concept",
    description: "Markdown 목록을 개념 지도로 펼쳐 발표 구조를 한눈에 보여줍니다.",
    tags: ["markmap", "concept"],
    icon: ListTree,
  },
  {
    href: "/samples/guides/react-flow-architecture",
    title: "React Flow Architecture",
    description: "시스템 구성 요소와 연결 관계를 움직일 수 있는 맵으로 보여줍니다.",
    tags: ["react flow", "system"],
    icon: GitBranch,
  },
  {
    href: "/samples/guides/observable-plot-comparison",
    title: "Observable Plot Comparison",
    description: "전후 변화와 수치 비교를 발표용 막대 차트로 정리합니다.",
    tags: ["plot", "data"],
    icon: ChartNoAxesColumn,
  },
  {
    href: "/samples/guides/plot-trend-story",
    title: "Plot Trend Story",
    description: "시간에 따라 바뀌는 수치를 line chart로 이야기합니다.",
    tags: ["plot", "trend"],
    icon: TrendingUp,
  },
  {
    href: "/samples/guides/plot-annotation",
    title: "Plot Annotation",
    description: "차트 위 특정 지점에 변화의 이유를 직접 표시합니다.",
    tags: ["plot", "annotation"],
    icon: Pin,
  },
  {
    href: "/samples/guides/comparison-matrix",
    title: "Comparison Matrix",
    description: "A/B/C 후보나 라이브러리 선택 기준을 표로 비교합니다.",
    tags: ["matrix", "decision"],
    icon: Table2,
  },
  {
    href: "/samples/guides/code-walkthrough",
    title: "Code Walkthrough",
    description: "코드 조각과 흐름도를 함께 두고 기술 발표를 구성합니다.",
    tags: ["code", "diagram"],
    icon: Code2,
  },
  {
    href: "/samples/guides/before-after-visual",
    title: "Before After",
    description: "시각화 전후 차이를 나란히 보여주고 수치로 보강합니다.",
    tags: ["before", "after"],
    icon: GitCompareArrows,
  },
  {
    href: "/samples/guides/visual-picker",
    title: "Visual Picker",
    description: "그릴 장면을 고르면 추천 도구가 바뀌는 인터랙티브 데모입니다.",
    tags: ["interactive", "picker"],
    icon: MousePointer2,
  },
  {
    href: "/samples/guides/slide-pattern-gallery",
    title: "Slide Pattern Gallery",
    description: "제목, agenda, quote, code, diagram, summary 블록을 모았습니다.",
    tags: ["slide", "patterns"],
    icon: PanelsTopLeft,
  },
  {
    href: "/samples/guides/prompt-to-slide-pipeline",
    title: "Prompt to Slide",
    description: "프롬프트가 가이드, 예제, page.tsx로 바뀌는 흐름을 보여줍니다.",
    tags: ["pipeline", "skill"],
    icon: Map,
  },
  {
    href: "/samples/guides/talk-track-notes",
    title: "Talk Track Notes",
    description: "화면 문장과 발표자 대본을 분리하는 발표 패턴입니다.",
    tags: ["notes", "speaker"],
    icon: NotebookPen,
  },
  {
    href: "/samples/guides/lucide-status-ui",
    title: "Lucide Status UI",
    description: "상태, 섹션, 액션 의미를 아이콘과 짧은 라벨로 구분합니다.",
    tags: ["lucide", "status"],
    icon: ShieldCheck,
  },
  {
    href: "/samples/guides/composed-research-story",
    title: "Composed Research Story",
    description: "조사 자료를 개념 지도, 데이터 차트, 흐름도로 발표 스토리화합니다.",
    tags: ["markmap", "plot", "mermaid"],
    icon: Network,
  },
  {
    href: "/samples/guides/composed-system-briefing",
    title: "Composed System Briefing",
    description: "시스템 맵, sequence, chart를 섞어 기술 브리핑 한 페이지를 만듭니다.",
    tags: ["react flow", "mermaid", "plot"],
    icon: Workflow,
  },
];

export default function GuideIndexPage() {
  return (
    <SampleShell
      eyebrow="Guide Examples"
      title="그리고 싶은 장면별 예제 페이지"
      description="최종 선택 가이드의 판단 기준을 실제 화면으로 확인할 수 있는 예제 모음입니다."
      note="이 페이지에서 먼저 장면을 고르고, 필요한 라이브러리별 가이드 문서로 내려가면 발표 페이지 제작 속도가 빨라집니다."
    >
      <section className="stage-grid" aria-label="가이드 예제 목록">
        {guideSamples.map((sample) => {
          const Icon = sample.icon;
          return (
            <Link
              key={sample.href}
              className="sample-card span-3"
              href={sample.href}
            >
              <div>
                <span className="card-icon" aria-hidden="true">
                  <Icon size={28} />
                </span>
                <h2>{sample.title}</h2>
                <p>{sample.description}</p>
              </div>
              <div className="tag-row">
                {sample.tags.map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          );
        })}
      </section>
    </SampleShell>
  );
}

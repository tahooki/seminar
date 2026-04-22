import type { Metadata } from "next";
import {
  Bot,
  Boxes,
  Cable,
  ClipboardCheck,
  FileText,
  GitBranch,
  PackageCheck,
  Sparkles,
  Workflow,
  Wrench,
} from "lucide-react";
import { MermaidChart } from "@/src/presentation/components/MermaidChart";
import { SampleShell } from "@/src/presentation/components/SampleShell";

export const metadata: Metadata = {
  title: "Code Agent 발표자료 | Seminar Visual Lab",
  description:
    "Code Agent의 개발 방식 변화를 한 페이지 발표자료로 정리한 화면",
};

const evolutionChart = `
flowchart LR
  A["Prompt"] --> B["AGENTS.md"]
  B --> C["MCP"]
  C --> D["Skills"]
  D --> E["Harness"]
  E --> F["Plugins · Memory · Long-running"]
`;

const phases = [
  {
    label: "01",
    title: "Prompt",
    text: "매번 프로젝트 규칙과 원하는 답변 형식을 길게 설명하던 시기.",
    icon: Sparkles,
    color: "#ef7d6c",
  },
  {
    label: "02",
    title: "Agent Docs",
    text: "AGENTS.md, CLAUDE.md처럼 에이전트가 먼저 읽는 문서를 둔다.",
    icon: FileText,
    color: "#2f80ed",
  },
  {
    label: "03",
    title: "Lean Rules",
    text: "모델이 좋아지며 거대한 매뉴얼은 줄고 핵심 규칙만 남는다.",
    icon: ClipboardCheck,
    color: "#6ba84f",
  },
  {
    label: "04",
    title: "MCP",
    text: "정적인 문서보다 실제 도구와 시스템 연결이 중요해진다.",
    icon: Cable,
    color: "#9b6ee8",
  },
  {
    label: "05",
    title: "Skills",
    text: "문서, 스크립트, 리소스를 묶어 반복 워크플로우를 재사용한다.",
    icon: PackageCheck,
    color: "#f2c94c",
  },
  {
    label: "06",
    title: "Harness",
    text: "코드 생성 이후 테스트, 검증, 배포 파이프라인까지 엮는다.",
    icon: GitBranch,
    color: "#f2a14a",
  },
  {
    label: "07",
    title: "Platform",
    text: "plugins, integrations, memory, 장기 실행이 개발 작업 플랫폼을 만든다.",
    icon: Boxes,
    color: "#b37a2f",
  },
];

const operatingModel = [
  {
    title: "지속 규칙",
    text: "프로젝트에서 항상 지켜야 하는 규칙은 작고 명확한 md 파일로 남긴다.",
  },
  {
    title: "반복 작업",
    text: "리뷰, QA, 배포 전 체크처럼 반복되는 일은 skill로 패키징한다.",
  },
  {
    title: "외부 시스템",
    text: "GitHub, Figma, Drive, CI처럼 살아 있는 시스템은 MCP/통합으로 연결한다.",
  },
  {
    title: "검증 흐름",
    text: "에이전트가 만든 결과가 테스트와 배포 흐름 안에서 확인되게 만든다.",
  },
];

export default function CodeAgentPage() {
  return (
    <SampleShell
      eyebrow="Presentation / Code Agent"
      title="Code Agent의 역사는 일을 맡기는 방식의 진화다"
      description="프롬프트를 잘 쓰는 시대에서, 문서와 도구와 skill과 검증 파이프라인을 설계하는 시대로 넘어온 흐름을 한 페이지 발표자료로 압축했습니다."
      note="핵심 메시지는 간단합니다. 이제 중요한 것은 AI에게 무엇을 말할지가 아니라, AI가 일할 수 있는 작업 환경을 어떻게 설계할지입니다."
    >
      <section className="stage-grid" aria-label="Code Agent 발표 자료">
        <article className="slide-slab span-12">
          <p className="slide-kicker">Opening Thesis</p>
          <h2>Code Agent는 코드 추천기가 아니라 개발 작업자에 가까워졌다</h2>
          <p>
            지금의 Code Agent는 코드베이스를 읽고, 파일을 수정하고, 명령어를
            실행하고, 필요한 도구를 호출하며 여러 단계의 작업을 이어서 처리한다.
            그래서 변화의 핵심은 모델 성능 자체보다, 사람들이 에이전트에게 일을
            맡기는 방식이 어떻게 정교해졌는가에 있다.
          </p>
        </article>

        <article className="visual-panel span-7">
          <div className="panel-heading">
            <div>
              <h2>한 장으로 보는 진화</h2>
              <p>프롬프트에서 개발 작업 플랫폼으로 이동한 흐름</p>
            </div>
            <span className="card-icon">
              <Workflow size={26} />
            </span>
          </div>
          <MermaidChart chart={evolutionChart} />
        </article>

        <aside className="visual-panel span-5">
          <div className="panel-heading">
            <div>
              <h2>발표의 관점</h2>
              <p>도구 이름보다 운영 방식의 변화에 초점을 둡니다.</p>
            </div>
            <span className="card-icon">
              <Bot size={26} />
            </span>
          </div>
          <div className="grid gap-3">
            <div className="rounded-[8px] border border-line bg-surface p-5">
              <strong className="block text-[15px] font-black text-accent-blue">
                Before
              </strong>
              <p className="mt-2 text-[22px] font-extrabold leading-tight">
                AI에게 무엇을 말할까?
              </p>
            </div>
            <div className="rounded-[8px] border border-[color-mix(in_srgb,var(--accent-coral)_60%,var(--line))] bg-[color-mix(in_srgb,var(--surface-warm)_75%,var(--surface))] p-5">
              <strong className="block text-[15px] font-black text-accent-coral">
                Now
              </strong>
              <p className="mt-2 text-[22px] font-extrabold leading-tight">
                AI가 일할 환경을 어떻게 설계할까?
              </p>
            </div>
          </div>
          <p className="panel-copy">
            문서 작성 능력은 여전히 중요하지만, 이제는 문서만이 아니라 연결,
            자동화, 재사용 가능한 워크플로우까지 함께 설계해야 합니다.
          </p>
        </aside>

        <article className="visual-panel span-12">
          <div className="panel-heading">
            <div>
              <h2>7단계 타임라인</h2>
              <p>Code Agent 활용 방식이 실무에서 변해온 순서</p>
            </div>
            <span className="card-icon">
              <GitBranch size={26} />
            </span>
          </div>
          <ol className="grid grid-cols-1 gap-3 p-0 md:grid-cols-7">
            {phases.map((phase) => {
              const Icon = phase.icon;

              return (
                <li
                  key={phase.label}
                  className="relative list-none rounded-[8px] border border-line bg-surface p-4"
                >
                  <div
                    className="mb-4 grid h-11 w-11 place-items-center rounded-[8px]"
                    style={{
                      background: `${phase.color}1f`,
                      color: phase.color,
                    }}
                  >
                    <Icon size={22} />
                  </div>
                  <span className="font-mono text-[12px] font-black text-muted">
                    {phase.label}
                  </span>
                  <h3 className="mt-1 text-[20px] font-black leading-tight">
                    {phase.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-[1.55] text-muted">
                    {phase.text}
                  </p>
                </li>
              );
            })}
          </ol>
        </article>

        <article className="visual-panel span-6">
          <div className="panel-heading">
            <div>
              <h2>실무 감각</h2>
              <p>잘 쓰는 사람의 기준도 바뀌었습니다.</p>
            </div>
            <span className="card-icon">
              <Wrench size={26} />
            </span>
          </div>
          <div className="grid gap-4">
            {operatingModel.map((item) => (
              <div
                key={item.title}
                className="rounded-[8px] border border-line bg-surface p-5"
              >
                <h3 className="m-0 text-[23px] font-black leading-tight">
                  {item.title}
                </h3>
                <p className="mt-2 text-[17px] leading-[1.55] text-muted">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </article>

        <article className="visual-panel span-6">
          <div className="panel-heading">
            <div>
              <h2>결론 문장</h2>
              <p>발표 마지막에 그대로 읽을 수 있는 요약</p>
            </div>
            <span className="card-icon">
              <PackageCheck size={26} />
            </span>
          </div>
          <blockquote className="m-0 border-l-[6px] border-accent-yellow bg-[color-mix(in_srgb,var(--surface-warm)_80%,transparent)] p-7 text-[clamp(24px,3.2vw,42px)] font-black leading-[1.28]">
            처음에는 매번 말로 시키던 것을 md 파일로 고정하고, tool 연결로
            확장하고, 반복 작업은 skill로 패키징하고, 결국 테스트와 배포 흐름까지
            연결하는 방향으로 발전해왔다.
          </blockquote>
          <div className="mt-6 rounded-[8px] bg-[var(--code-bg)] p-5 font-mono text-[15px] leading-[1.55] text-[var(--code-text)]">
            Prompt engineering → Workflow engineering
          </div>
        </article>
      </section>
    </SampleShell>
  );
}

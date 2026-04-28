import type { Metadata } from "next";
import Image from "next/image";
import { SampleShell } from "@/src/presentation/components/SampleShell";

export const metadata: Metadata = {
  title: "AI Agent 기초 슬라이드 | Seminar Visual Lab",
  description:
    "업데이트된 v4 이미지 16장을 한 페이지 슬라이드 덱으로 보여주는 발표 페이지",
};

type Slide = {
  id: string;
  number: string;
  section: string;
  navLabel: string;
  title: string;
  lead: string;
  notes: string[];
  keywords: string[];
};

const slides: Slide[] = [
  {
    id: "slide-00",
    number: "00",
    section: "표지",
    navLabel: "표지",
    title: "AI Agent 기초",
    lead:
      "발표 전체를 관통하는 질문을 열고, 작은 로봇 가이드와 함께 흐름을 시작하는 오프닝 슬라이드입니다.",
    notes: [
      "이 발표는 LLM, Code Agent, Prompt, MCP, AGENTS.md, Skill을 따로 외우기보다 하나의 흐름으로 이해하는 데 초점을 둡니다.",
      "첫 장에서 '글쓰는 확률 머신'이라는 관점을 미리 깔아 두면, 뒤에 나오는 모든 용어가 왜 생겼는지 자연스럽게 이어집니다.",
    ],
    keywords: ["오프닝", "발표자 김태훈", "전체 흐름 예고"],
  },
  {
    id: "slide-01",
    number: "01",
    section: "LLM",
    navLabel: "LLM",
    title: "LLM = 글쓰는 확률 머신",
    lead:
      "LLM의 본질을 가장 단순하게 잡아두는 장면입니다. 다음 단어를 확률적으로 이어 쓰는 시스템이라는 감각을 남깁니다.",
    notes: [
      "복잡한 정의를 걷어내고 나면 LLM은 지금까지의 문맥을 보고 가장 그럴듯한 다음 단어를 고르는 생성 시스템입니다.",
      "이 관점을 잡아 두면 창의성의 한계, 환각, 프롬프트 품질 차이까지 왜 생기는지 훨씬 쉽게 설명할 수 있습니다.",
    ],
    keywords: ["LLM", "확률", "다음 단어 예측"],
  },
  {
    id: "slide-02",
    number: "02",
    section: "Code Agent",
    navLabel: "Code Agent",
    title: "요즘 개발자는 Code Agent로 개발합니다",
    lead:
      "터미널, IDE, 전용 앱처럼 형태는 달라도 개발자가 글로 지시하고 agent가 작업한다는 공통 구조를 보여줍니다.",
    notes: [
      "Claude Code, Codex CLI 같은 터미널형과 Cursor, Copilot 같은 IDE형, ChatGPT Desktop 같은 앱형은 겉모습만 다르고 입력 구조는 같습니다.",
      "결국 개발자가 적는 텍스트가 시작점이고, 그래서 다음 장의 핵심인 프롬프트 개념으로 자연스럽게 넘어갈 수 있습니다.",
    ],
    keywords: ["터미널", "IDE", "전용 앱"],
  },
  {
    id: "slide-03",
    number: "03",
    section: "Prompt",
    navLabel: "Prompt",
    title: "이때 입력하는 글자 = 프롬프트",
    lead:
      "짧은 요청이든 긴 지시문이든, agent에게 넣는 모든 입력 텍스트를 프롬프트라고 부른다는 기준을 고정합니다.",
    notes: [
      "프롬프트는 거창한 특별 문법이 아니라 agent에게 전달하는 모든 텍스트 입력입니다. 한 줄짜리 요청도 프롬프트고, 역할과 조건을 길게 쓴 문장도 프롬프트입니다.",
      "이 정의를 단순하게 잡아 두면 뒤에서 프롬프트 엔지니어링을 이야기할 때도 불필요하게 어렵지 않게 설명할 수 있습니다.",
    ],
    keywords: ["입력 텍스트", "짧은 예시", "긴 예시"],
  },
  {
    id: "slide-04",
    number: "04",
    section: "Prompt Engineering",
    navLabel: "Prompt Eng",
    title: "잘 쓰면 = 프롬프트 엔지니어링",
    lead:
      "입력을 어떻게 설계하느냐에 따라 결과가 크게 달라진다는 점을 모호한 요청과 명확한 요청의 대비로 보여줍니다.",
    notes: [
      "LLM이 확률 머신이라면 입력 설계가 곧 결과 품질에 직접 영향을 줍니다. 그래서 프롬프트 엔지니어링은 모델을 속이는 요령이 아니라 입력을 설계하는 기술에 가깝습니다.",
      "명확한 지시, 역할 부여, 예시 제공, 단계별 사고 유도 같은 기본 기법만 잘 써도 출력 안정성이 확실히 올라갑니다.",
    ],
    keywords: ["명확한 지시", "역할 부여", "예시 제공"],
  },
  {
    id: "slide-05",
    number: "05",
    section: "Agent Loop",
    navLabel: "Agent Loop",
    title: "프롬프트를 호출하면 무슨 일이?",
    lead:
      "프롬프트를 넣는다고 곧바로 파일이 수정되는 것이 아니라, 내 컴퓨터와 서버가 여러 번 왕복하는 agent loop가 돈다는 점을 설명합니다.",
    notes: [
      "LLM은 내 컴퓨터를 직접 만지지 않습니다. 서버 쪽 모델은 파일을 읽어 달라, 이렇게 고쳐 달라 같은 요청만 내려주고 실제 실행은 로컬 agent가 담당합니다.",
      "그래서 한 번의 응답으로 끝나는 채팅이 아니라 읽기, 판단, 수정, 재전달이 반복되는 작업 루프라는 감각이 중요합니다.",
    ],
    keywords: ["로컬 Agent", "클라우드 LLM", "반복 루프"],
  },
  {
    id: "slide-06",
    number: "06",
    section: "외부 연결",
    navLabel: "외부 연결",
    title: "근데 Figma 디자인은 어떻게 가져와?",
    lead:
      "코드베이스는 읽을 수 있어도 Figma 같은 외부 서비스는 바로 볼 수 없다는 연결 문제를 제시하는 전환 슬라이드입니다.",
    notes: [
      "개발자가 'Figma 디자인으로 컴포넌트를 만들어 달라'고 요청해도, agent는 별도 연결이 없으면 Figma를 알 수 없습니다.",
      "서비스마다 연결 방식이 다르면 도구를 하나 추가할 때마다 통합 비용이 커지기 때문에, 여기서 표준 연결 방식의 필요성이 생깁니다.",
    ],
    keywords: ["Figma", "외부 도구", "연결 문제"],
  },
  {
    id: "slide-07",
    number: "07",
    section: "MCP",
    navLabel: "MCP",
    title: "MCP = AI를 위한 USB-C",
    lead:
      "여러 외부 도구를 같은 방식으로 연결하게 해 주는 표준 규격이라는 MCP의 역할을 한 번에 잡아주는 슬라이드입니다.",
    notes: [
      "MCP는 Model Context Protocol의 약자로, Host, Client, Server라는 역할 분리를 통해 agent와 외부 시스템이 표준 방식으로 대화하게 만듭니다.",
      "Slack, Notion, Figma, Gmail처럼 제각각이던 연결 방식을 하나의 규격으로 통일한다는 비유가 바로 'AI를 위한 USB-C'입니다.",
    ],
    keywords: ["Host", "Client", "Server"],
  },
  {
    id: "slide-08",
    number: "08",
    section: "Figma MCP",
    navLabel: "Figma MCP",
    title: "Figma MCP로 컴포넌트 만드는 흐름",
    lead:
      "사용자 요청부터 Figma API 호출, LLM 판단, 실제 파일 생성까지 이어지는 외부 도구 연결 흐름을 축약해서 보여줍니다.",
    notes: [
      "사용자 요청을 받은 agent는 Figma 데이터가 필요하다고 판단하고, MCP Client를 통해 Figma MCP Server로 표준 요청을 보냅니다.",
      "그 결과로 받은 디자인 정보가 LLM 컨텍스트에 들어가고, 그제야 JSX 판단과 실제 컴포넌트 생성으로 이어집니다.",
    ],
    keywords: ["MCP 호출", "Figma API", "JSX 생성"],
  },
  {
    id: "slide-09",
    number: "09",
    section: "반복 규칙",
    navLabel: "반복 규칙",
    title: "MCP 쓸 때마다 같은 잔소리 반복…",
    lead:
      "외부 도구를 연결해도 프로젝트 규칙을 매번 프롬프트에 반복해서 넣어야 하는 비효율을 드러냅니다.",
    notes: [
      "실무에서는 pnpm만 써라, legacy 폴더 건드리지 마라, any 타입 금지 같은 규칙을 계속 같이 말하게 됩니다.",
      "이 반복은 귀찮은 수준을 넘어서 작업 품질과 일관성에도 영향을 주기 때문에, 규칙을 고정해서 읽히게 하는 방식이 필요해집니다.",
    ],
    keywords: ["pnpm", "legacy 금지", "반복 지시"],
  },
  {
    id: "slide-10",
    number: "10",
    section: "AGENTS.md",
    navLabel: "AGENTS.md",
    title: "AGENTS.md = Agent를 위한 규칙 파일",
    lead:
      "프로젝트 루트에 두고 agent가 자동으로 참고하게 만드는 규칙 문서의 역할을 설명하는 핵심 슬라이드입니다.",
    notes: [
      "기술 스택, 개발 명령어, 코딩 컨벤션, 하지 말아야 할 것들을 AGENTS.md에 한 번 정리해 두면 agent가 작업마다 다시 물어보지 않아도 됩니다.",
      "CLAUDE.md가 특정 도구 중심이라면, AGENTS.md는 여러 agent가 공통으로 읽을 수 있는 오픈 표준 방향이라는 점이 포인트입니다.",
    ],
    keywords: ["프로젝트 규칙", "오픈 표준", "자동 참조"],
  },
  {
    id: "slide-11",
    number: "11",
    section: "docs/",
    navLabel: "docs/",
    title: "AGENTS.md + docs/ 역할 분담",
    lead:
      "항상 읽히는 요약 규칙과 필요할 때만 보는 상세 문서를 분리해야 문서도 agent도 덜 지치게 된다는 메시지를 담습니다.",
    notes: [
      "AGENTS.md에 모든 걸 다 넣으면 문서가 커지고, 모델이 매번 읽기에도 부담이 커집니다. 그래서 꼭 필요한 규칙은 AGENTS.md에 두고 자세한 설명은 docs로 넘깁니다.",
      "또 요즘 md 문서는 사람만 읽는 문서가 아니라 사람과 AI가 함께 읽는 문서가 되었기 때문에, Do/Don't와 선언형 문장처럼 더 명시적인 스타일이 중요해졌습니다.",
    ],
    keywords: ["항상 로드", "상세 문서", "명시적 md"],
  },
  {
    id: "slide-12",
    number: "12",
    section: "Skill",
    navLabel: "Skill",
    title: "한 걸음 더 — Skill",
    lead:
      "프로젝트 규칙만으로는 해결되지 않는 작업 단위 노하우 재사용 문제를 꺼내면서 Skill 개념으로 넘어갑니다.",
    notes: [
      "PDF 생성 요령, Excel 수정 규칙, PPT 제작 패턴처럼 프로젝트가 달라도 반복되는 작업 노하우가 있습니다.",
      "이런 지식은 특정 프로젝트의 규약보다 더 넓게 재사용하고 싶기 때문에, 작업 단위 능력을 묶어 두는 Skill 개념이 필요해집니다.",
    ],
    keywords: ["PDF", "Excel", "PPT"],
  },
  {
    id: "slide-13",
    number: "13",
    section: "Skill 구조",
    navLabel: "Skill 구조",
    title: "Skill = 재사용 가능한 능력 패키지",
    lead:
      "SKILL.md, templates, scripts로 이뤄진 구조와 필요한 순간에만 전체를 읽는 progressive disclosure를 함께 설명합니다.",
    notes: [
      "Skill은 특정 작업을 잘 수행하기 위한 베스트 프랙티스, 스크립트, 템플릿을 한 폴더에 묶어 둔 재사용 패키지입니다.",
      "Agent는 먼저 SKILL.md 상단의 사용 시점만 훑어보고, 현재 작업과 맞다고 판단되면 그때 전체 리소스를 로드합니다. 이 점이 progressive disclosure의 핵심입니다.",
    ],
    keywords: ["SKILL.md", "templates", "progressive disclosure"],
  },
  {
    id: "slide-14",
    number: "14",
    section: "비교",
    navLabel: "비교",
    title: "AGENTS.md vs Skill — 보완 관계",
    lead:
      "프로젝트 단위 규약과 작업 단위 능력은 경쟁 관계가 아니라 서로 보완하는 층이라는 점을 비교표로 정리합니다.",
    notes: [
      "AGENTS.md는 이 프로젝트에서 항상 지켜야 하는 규칙을 정의하고, Skill은 특정 작업을 어떻게 잘 수행할지에 대한 재사용 노하우를 제공합니다.",
      "항상 읽히는 문서와 필요할 때만 로드되는 패키지가 서로 역할을 나눠야 agent가 프로젝트 맥락도 지키고 작업 전문성도 확보할 수 있습니다.",
    ],
    keywords: ["프로젝트 단위", "작업 단위", "보완 관계"],
  },
  {
    id: "slide-15",
    number: "15",
    section: "마무리",
    navLabel: "마무리",
    title: "결국 하나의 질문",
    lead:
      "발표에 등장한 모든 개념을 '확률 머신에게 어떻게 더 좋은 코드를 쓰게 할까'라는 하나의 질문으로 다시 묶는 클로징입니다.",
    notes: [
      "LLM, Code Agent, Prompt, Agent Loop, MCP, AGENTS.md, Skill은 각자 따로 놀지 않습니다. 모두 확률 머신의 약점을 보완하기 위해 추가된 장치입니다.",
      "이 관점을 기억하면 유행어처럼 보이던 용어들이 하나의 구조로 정리되고, 실무에서 어떤 레이어를 먼저 설계해야 할지도 훨씬 분명해집니다.",
    ],
    keywords: ["확률 머신", "전체 복습", "감사합니다"],
  },
];

function SlideCard({ slide, priority }: { slide: Slide; priority?: boolean }) {
  return (
    <article id={slide.id} className="deck-slide">
      <p className="slide-kicker">
        Slide {slide.number} / {slide.section}
      </p>
      <h2>{slide.title}</h2>
      <p className="slide-lead">{slide.lead}</p>

      <div className="slide-grid slide-showcase">
        <figure className="slide-shot">
          <Image
            src={`/ai-basic/slide-${slide.number}.png`}
            alt={`${slide.title} 슬라이드 이미지`}
            width={1672}
            height={941}
            priority={priority}
            sizes="(max-width: 900px) 100vw, 58vw"
            className="slide-shot-image"
          />
          <figcaption className="slide-caption">
            <span>Generated slide asset</span>
            <span>{`slide-${slide.number}.png`}</span>
          </figcaption>
        </figure>

        <aside className="notes-panel slide-notes" aria-label={`${slide.title} 발표 포인트`}>
          <div className="slide-note-stack">
            <div>
              <p className="slide-note-label">발표 포인트</p>
              {slide.notes.map((note) => (
                <p key={note}>{note}</p>
              ))}
            </div>

            <div>
              <p className="slide-note-label">핵심 키워드</p>
              <div className="tag-row">
                {slide.keywords.map((keyword) => (
                  <span key={keyword} className="tag">
                    {keyword}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </aside>
      </div>
    </article>
  );
}

export default function AiBasicPage() {
  return (
    <SampleShell
      eyebrow="Presentation / AI Agent Basics"
      title="AI Agent 기초 v4 슬라이드 덱"
      description="업데이트한 v4 문서와 생성 이미지를 한 페이지에서 발표 순서대로 볼 수 있도록 정리했습니다. 슬라이드 이미지와 발표 포인트를 함께 두어 연습용으로도 바로 사용할 수 있습니다."
      note="원본 문서는 docs/slide-markdown-v4.md, 생성 이미지는 public/ai-basic/slide-00.png 부터 slide-15.png 까지 사용합니다."
    >
      <section className="stage-grid" aria-label="AI Agent 기초 덱 소개">
        <article className="slide-slab span-12">
          <h2>업데이트된 v4 이미지 16장을 한 페이지 발표 덱으로 묶었습니다.</h2>
          <p>
            지금 페이지는 생성된 슬라이드 이미지를 그대로 보여주면서, 옆에는
            발표할 때 바로 읽을 수 있는 핵심 포인트만 짧게 정리해 둔 형태입니다.
          </p>
          <div className="tag-row">
            <span className="tag">v4</span>
            <span className="tag">16 slides</span>
            <span className="tag">speaker notes</span>
            <span className="tag">public/ai-basic</span>
          </div>
        </article>
      </section>

      <nav className="deck-outline" aria-label="AI Agent 기초 슬라이드 목차">
        {slides.map((slide) => (
          <a key={slide.id} href={`#${slide.id}`}>
            {slide.number} {slide.navLabel}
          </a>
        ))}
      </nav>

      <section className="deck" aria-label="AI Agent 기초 슬라이드">
        {slides.map((slide, index) => (
          <SlideCard
            key={slide.id}
            slide={slide}
            priority={index === 0 || index === 1}
          />
        ))}
      </section>
    </SampleShell>
  );
}

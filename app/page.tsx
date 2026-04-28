import Link from "next/link";
import {
  Bot,
  Cable,
  ChartNoAxesColumn,
  Compass,
  GitBranch,
  Orbit,
  Sparkles,
  Workflow,
} from "lucide-react";

export default function Home() {
  return (
    <main className="seminar-page">
      <div className="seminar-shell">
        <nav className="sample-nav" aria-label="메인">
          <span className="brand-mark">Seminar Visual Lab</span>
          <div className="sample-links">
            <Link href="/samples/idea-cycle">Idea Cycle</Link>
            <Link href="/samples/system-map">System Map</Link>
            <Link href="/samples/data-story">Data Story</Link>
            <Link href="/samples/a2ui">A2UI Deck</Link>
            <Link href="/samples/code-agent">Code Agent</Link>
            <Link href="/samples/ai-basic">AI Agent Basic</Link>
            <Link href="/samples/agentic-development">Agentic Dev</Link>
            <Link href="/samples/guides">Guide Examples</Link>
          </div>
        </nav>

        <header className="hero-grid">
          <div>
            <p className="eyebrow">HTML Presentation Design System</p>
            <h1 className="hero-title">한 페이지 발표자료를 그림처럼 구성하기</h1>
            <p className="hero-description">
              Mermaid, Rough.js, React Flow, Markmap, Observable Plot을 섞어
              발표용 시각화 컴포넌트가 어떤 맛을 낼 수 있는지 확인하는 샘플
              허브입니다.
            </p>
          </div>
          <aside className="hero-note">
            지금 목표는 완성된 발표 도구가 아니라, 어떤 라이브러리 조합이 이
            프로젝트의 톤에 맞는지 빠르게 눈으로 보는 것입니다.
          </aside>
        </header>

        <section className="stage-grid" aria-label="샘플 페이지 목록">
          <Link className="sample-card span-12" href="/samples/guides">
            <div>
              <span className="card-icon">
                <Compass size={28} />
              </span>
              <h2>Visual Guide Examples</h2>
              <p>
                Mermaid, RoughJS, Markmap, React Flow, Observable Plot,
                Lucide를 &quot;무엇을 그리고 싶은가&quot; 기준으로 고르는 예제 페이지
                묶음.
              </p>
            </div>
            <div className="tag-row">
              <span className="tag">guide</span>
              <span className="tag">examples</span>
              <span className="tag">visual picker</span>
            </div>
          </Link>

          <Link className="sample-card span-12" href="/samples/code-agent">
            <div>
              <span className="card-icon">
                <Bot size={28} />
              </span>
              <h2>Code Agent Evolution</h2>
              <p>
                Code Agent가 프롬프트, md 규칙, MCP, Skills, Harness,
                plugins와 memory까지 이어지며 개발 작업 플랫폼으로 변해온 흐름을
                한 페이지 발표자료로 정리한 샘플.
              </p>
            </div>
            <div className="tag-row">
              <span className="tag">code agent</span>
              <span className="tag">workflow</span>
              <span className="tag">one-page deck</span>
            </div>
          </Link>

          <Link className="sample-card span-12" href="/samples/ai-basic">
            <div>
              <span className="card-icon">
                <Sparkles size={28} />
              </span>
              <h2>AI Agent Basics Slides</h2>
              <p>
                업데이트된 v4 슬라이드 이미지 16장을 한 페이지 발표 덱으로
                보여주고, 각 장의 발표 포인트를 옆에서 같이 볼 수 있게 정리한
                샘플.
              </p>
            </div>
            <div className="tag-row">
              <span className="tag">slides</span>
              <span className="tag">image deck</span>
              <span className="tag">speaker notes</span>
            </div>
          </Link>

          <Link
            className="sample-card span-12"
            href="/samples/agentic-development"
          >
            <div>
              <span className="card-icon">
                <Cable size={28} />
              </span>
              <h2>Agentic Development Basics</h2>
              <p>
                LLM, Code Agent, Prompt, Agentic Loop, MCP, AGENTS.md,
                Skill을 &quot;확률 머신의 한계를 어떻게 보완하는가&quot;라는 한
                흐름으로 설명하는 한국어 발표 덱.
              </p>
            </div>
            <div className="tag-row">
              <span className="tag">agentic dev</span>
              <span className="tag">mcp</span>
              <span className="tag">skill</span>
            </div>
          </Link>

          <Link className="sample-card span-3" href="/samples/idea-cycle">
            <div>
              <span className="card-icon">
                <Orbit size={28} />
              </span>
              <h2>Idea Cycle</h2>
              <p>
                Rough.js 손그림 순환 다이어그램과 Mermaid 흐름도를 함께 놓은
                Napkin 스타일 샘플.
              </p>
            </div>
            <div className="tag-row">
              <span className="tag">roughjs</span>
              <span className="tag">mermaid</span>
              <span className="tag">cycle</span>
            </div>
          </Link>

          <Link className="sample-card span-3" href="/samples/system-map">
            <div>
              <span className="card-icon">
                <GitBranch size={28} />
              </span>
              <h2>System Map</h2>
              <p>
                React Flow로 움직일 수 있는 시스템 맵을 만들고 Mermaid sequence로
                설명 흐름을 보강한 샘플.
              </p>
            </div>
            <div className="tag-row">
              <span className="tag">reactflow</span>
              <span className="tag">mermaid</span>
              <span className="tag">architecture</span>
            </div>
          </Link>

          <Link className="sample-card span-3" href="/samples/data-story">
            <div>
              <span className="card-icon">
                <ChartNoAxesColumn size={28} />
              </span>
              <h2>Data Story</h2>
              <p>
                Observable Plot 차트와 Markmap 개념 지도를 한 발표 페이지 안에서
                같이 쓰는 데이터 설명 샘플.
              </p>
            </div>
            <div className="tag-row">
              <span className="tag">observable plot</span>
              <span className="tag">markmap</span>
              <span className="tag">data</span>
            </div>
          </Link>

          <Link className="sample-card span-3" href="/samples/a2ui">
            <div>
              <span className="card-icon">
                <Workflow size={28} />
              </span>
              <h2>A2UI Deck</h2>
              <p>
                A2UI가 무엇이고 왜 필요한지, 코드적으로 무엇을 만들게 되는지
                발표자료 형태로 정리한 HTML 덱.
              </p>
            </div>
            <div className="tag-row">
              <span className="tag">a2ui</span>
              <span className="tag">agent ui</span>
              <span className="tag">deck</span>
            </div>
          </Link>
        </section>
      </div>
    </main>
  );
}

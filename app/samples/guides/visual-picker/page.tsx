import { MousePointer2, Sparkles } from "lucide-react";
import { SampleShell } from "@/src/presentation/components/SampleShell";
import { VisualPicker } from "@/src/presentation/components/VisualPicker";

export default function VisualPickerPage() {
  return (
    <SampleShell
      eyebrow="Guide / Interactive Picker"
      title="그리고 싶은 장면을 누르면 추천 도구가 바뀌는 페이지"
      description="이 예제는 skill의 판단 기준을 UI로 바꾼 데모입니다. 흐름, 구조, 개념, 데이터, 스케치 중 하나를 고르면 맞는 도구와 예제 route를 보여줍니다."
      note="실제 발표 생성 agent의 catalog picker로 확장하기 좋은 형태입니다."
    >
      <section className="stage-grid">
        <article className="visual-panel span-8">
          <div className="panel-heading">
            <div>
              <h2>Visual picker</h2>
              <p>장면 기준으로 도구를 선택하는 인터랙티브 패널</p>
            </div>
            <span className="card-icon" aria-hidden="true">
              <MousePointer2 size={26} />
            </span>
          </div>
          <VisualPicker />
        </article>

        <article className="slide-slab span-4">
          <h2>선택 기준도 UI가 될 수 있다.</h2>
          <p>
            문서에 적힌 rule을 버튼과 상태 패널로 바꾸면, 발표 페이지 생성
            workflow 자체를 데모로 보여줄 수 있습니다.
          </p>
          <div className="tag-row">
            <span className="tag">client component</span>
            <span className="tag">skill demo</span>
          </div>
        </article>

        <article className="visual-panel span-12">
          <div className="panel-heading">
            <div>
              <h2>Extension idea</h2>
              <p>나중에 붙일 수 있는 기능</p>
            </div>
            <span className="card-icon" aria-hidden="true">
              <Sparkles size={26} />
            </span>
          </div>
          <div className="compare-grid">
            <div className="compare-item">
              <h3>Prompt</h3>
              <p>사용자 설명을 받아 장면을 자동 분류한다.</p>
            </div>
            <div className="compare-item">
              <h3>Catalog</h3>
              <p>허용된 컴포넌트와 예제 route를 함께 추천한다.</p>
            </div>
            <div className="compare-item">
              <h3>Generate</h3>
              <p>선택한 도구를 바탕으로 새 발표 page를 만든다.</p>
            </div>
          </div>
        </article>
      </section>
    </SampleShell>
  );
}

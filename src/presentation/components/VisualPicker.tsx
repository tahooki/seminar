"use client";

import { useState } from "react";
import {
  BarChart3,
  GitBranch,
  ListTree,
  PencilRuler,
  Route,
} from "lucide-react";

const options = [
  {
    id: "flow",
    label: "흐름",
    icon: Route,
    tool: "Mermaid",
    route: "/samples/guides/mermaid-flow",
    description: "단계, 분기, 상태 변화처럼 순서와 조건이 핵심일 때 먼저 고릅니다.",
  },
  {
    id: "structure",
    label: "구조",
    icon: GitBranch,
    tool: "React Flow",
    route: "/samples/guides/react-flow-architecture",
    description: "노드 관계를 확대하거나 이동하며 설명해야 할 때 좋습니다.",
  },
  {
    id: "concept",
    label: "개념",
    icon: ListTree,
    tool: "Markmap",
    route: "/samples/guides/markmap-concept",
    description: "Markdown 목록을 큰 가지와 세부 개념으로 펼치고 싶을 때 씁니다.",
  },
  {
    id: "data",
    label: "데이터",
    icon: BarChart3,
    tool: "Observable Plot",
    route: "/samples/guides/observable-plot-comparison",
    description: "수치 비교, 전후 변화, 설문 결과가 발표의 근거일 때 씁니다.",
  },
  {
    id: "sketch",
    label: "스케치",
    icon: PencilRuler,
    tool: "RoughJS",
    route: "/samples/guides/rough-sketch-flow",
    description: "아이디어 단계라 정형도보다 부드러운 설명 그림이 필요할 때 씁니다.",
  },
] as const;

export function VisualPicker() {
  const [selectedId, setSelectedId] = useState<(typeof options)[number]["id"]>(
    "flow",
  );
  const selected = options.find((option) => option.id === selectedId) ?? options[0];
  const Icon = selected.icon;

  return (
    <div className="picker">
      <div className="picker-options" role="tablist" aria-label="시각화 종류">
        {options.map((option) => {
          const OptionIcon = option.icon;
          const active = option.id === selectedId;
          return (
            <button
              key={option.id}
              type="button"
              className={active ? "picker-button active" : "picker-button"}
              role="tab"
              aria-selected={active}
              onClick={() => setSelectedId(option.id)}
            >
              <OptionIcon size={18} aria-hidden="true" />
              {option.label}
            </button>
          );
        })}
      </div>

      <div className="picker-result" role="tabpanel">
        <span className="card-icon" aria-hidden="true">
          <Icon size={28} />
        </span>
        <div>
          <p className="eyebrow">추천 도구</p>
          <h2>{selected.tool}</h2>
          <p>{selected.description}</p>
          <div className="tag-row">
            <span className="tag">{selected.label}</span>
            <span className="tag">{selected.route}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

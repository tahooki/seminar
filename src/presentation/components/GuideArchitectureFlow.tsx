"use client";

import {
  Background,
  Controls,
  MarkerType,
  Position,
  ReactFlow,
  type Edge,
  type Node,
} from "@xyflow/react";

type FlowVariant = "architecture" | "briefing";

type FlowGraph = {
  nodes: Node[];
  edges: Edge[];
};

function nodeLabel(title: string, detail: string) {
  return (
    <div className="node-label">
      <strong>{title}</strong>
      <span>{detail}</span>
    </div>
  );
}

function nodeStyle(border: string, background: string) {
  return { border: `2px solid ${border}`, background };
}

const markerEnd = { type: MarkerType.ArrowClosed, color: "#62666d" };
const edgeStyle = { stroke: "#62666d", strokeWidth: 2 };

const architecture: FlowGraph = {
  nodes: [
    {
      id: "notes",
      position: { x: 0, y: 120 },
      data: { label: nodeLabel("Research Notes", "자료와 주장") },
      style: nodeStyle("#ef7d6c", "#fff4e8"),
      sourcePosition: Position.Right,
    },
    {
      id: "choice",
      position: { x: 260, y: 20 },
      data: { label: nodeLabel("Visual Choice", "도구 선택") },
      style: nodeStyle("#2f80ed", "#eaf5ff"),
      targetPosition: Position.Left,
      sourcePosition: Position.Right,
    },
    {
      id: "components",
      position: { x: 260, y: 220 },
      data: { label: nodeLabel("Components", "재사용 컴포넌트") },
      style: nodeStyle("#6ba84f", "#edf8ea"),
      targetPosition: Position.Left,
      sourcePosition: Position.Right,
    },
    {
      id: "tokens",
      position: { x: 560, y: 118 },
      data: { label: nodeLabel("Design Tokens", "색상, 폰트, 여백") },
      style: nodeStyle("#9b6ee8", "#f3edff"),
      targetPosition: Position.Left,
      sourcePosition: Position.Right,
    },
    {
      id: "page",
      position: { x: 850, y: 118 },
      data: { label: nodeLabel("Presentation Page", "브라우저 발표") },
      style: nodeStyle("#f2c94c", "#fff9df"),
      targetPosition: Position.Left,
    },
  ],
  edges: [
    { id: "notes-choice", source: "notes", target: "choice", animated: true },
    { id: "notes-components", source: "notes", target: "components" },
    { id: "choice-tokens", source: "choice", target: "tokens" },
    { id: "components-tokens", source: "components", target: "tokens" },
    { id: "tokens-page", source: "tokens", target: "page", animated: true },
  ].map((edge) => ({ ...edge, markerEnd, style: edgeStyle })),
};

const briefing: FlowGraph = {
  nodes: [
    {
      id: "agent",
      position: { x: 0, y: 40 },
      data: { label: nodeLabel("Agent", "요청 해석") },
      style: nodeStyle("#2f80ed", "#eaf5ff"),
      sourcePosition: Position.Right,
    },
    {
      id: "catalog",
      position: { x: 260, y: 40 },
      data: { label: nodeLabel("Catalog", "허용 컴포넌트") },
      style: nodeStyle("#9b6ee8", "#f3edff"),
      targetPosition: Position.Left,
      sourcePosition: Position.Right,
    },
    {
      id: "renderer",
      position: { x: 520, y: 40 },
      data: { label: nodeLabel("Renderer", "안전한 변환") },
      style: nodeStyle("#6ba84f", "#edf8ea"),
      targetPosition: Position.Left,
      sourcePosition: Position.Right,
    },
    {
      id: "visuals",
      position: { x: 260, y: 230 },
      data: { label: nodeLabel("Visual Tools", "Mermaid, Plot") },
      style: nodeStyle("#ef7d6c", "#fff4e8"),
      sourcePosition: Position.Right,
      targetPosition: Position.Top,
    },
    {
      id: "deck",
      position: { x: 780, y: 140 },
      data: { label: nodeLabel("Deck", "발표 화면") },
      style: nodeStyle("#f2c94c", "#fff9df"),
      targetPosition: Position.Left,
    },
  ],
  edges: [
    { id: "agent-catalog", source: "agent", target: "catalog", animated: true },
    { id: "catalog-renderer", source: "catalog", target: "renderer" },
    { id: "catalog-visuals", source: "catalog", target: "visuals" },
    { id: "visuals-renderer", source: "visuals", target: "renderer" },
    { id: "renderer-deck", source: "renderer", target: "deck", animated: true },
  ].map((edge) => ({ ...edge, markerEnd, style: edgeStyle })),
};

export function GuideArchitectureFlow({
  variant = "architecture",
}: {
  variant?: FlowVariant;
}) {
  const graph = variant === "briefing" ? briefing : architecture;
  const links =
    variant === "briefing"
      ? [
          ["16", "38", "34", "38"],
          ["39", "38", "53", "38"],
          ["39", "43", "37", "66"],
          ["42", "67", "54", "45"],
          ["61", "44", "78", "55"],
        ]
      : [
          ["20", "57", "32", "48"],
          ["20", "59", "32", "68"],
          ["43", "48", "56", "57"],
          ["43", "68", "56", "59"],
          ["67", "58", "80", "58"],
        ];

  return (
    <div className="flow-box">
      <ReactFlow
        nodes={graph.nodes}
        edges={graph.edges}
        fitView
        minZoom={0.45}
        maxZoom={1.35}
        proOptions={{ hideAttribution: true }}
      >
        <Background color="#d8dde3" gap={22} />
        <Controls showInteractive={false} />
      </ReactFlow>
      <svg className="flow-link-overlay" viewBox="0 0 100 100" aria-hidden="true">
        <defs>
          <marker
            id={`flow-arrow-${variant}`}
            markerHeight="5"
            markerWidth="5"
            orient="auto"
            refX="4"
            refY="2.5"
          >
            <path d="M0,0 L5,2.5 L0,5 Z" />
          </marker>
        </defs>
        {links.map(([x1, y1, x2, y2]) => (
          <line
            key={`${x1}-${y1}-${x2}-${y2}`}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            markerEnd={`url(#flow-arrow-${variant})`}
          />
        ))}
      </svg>
    </div>
  );
}

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

const nodes: Node[] = [
  {
    id: "speaker",
    position: { x: 0, y: 120 },
    data: {
      label: (
        <div className="node-label">
          <strong>Speaker</strong>
          <span>발표 흐름 작성</span>
        </div>
      ),
    },
    style: { border: "2px solid #ef7d6c", background: "#fff4e8" },
    sourcePosition: Position.Right,
  },
  {
    id: "slides",
    position: { x: 260, y: 20 },
    data: {
      label: (
        <div className="node-label">
          <strong>Slide Components</strong>
          <span>Title, Code, Diagram</span>
        </div>
      ),
    },
    style: { border: "2px solid #2f80ed", background: "#eaf5ff" },
    targetPosition: Position.Left,
    sourcePosition: Position.Right,
  },
  {
    id: "visuals",
    position: { x: 270, y: 220 },
    data: {
      label: (
        <div className="node-label">
          <strong>Visual Toolkit</strong>
          <span>Mermaid, Rough, Plot</span>
        </div>
      ),
    },
    style: { border: "2px solid #6ba84f", background: "#edf8ea" },
    targetPosition: Position.Left,
    sourcePosition: Position.Right,
  },
  {
    id: "theme",
    position: { x: 565, y: 118 },
    data: {
      label: (
        <div className="node-label">
          <strong>Theme Tokens</strong>
          <span>font, color, radius</span>
        </div>
      ),
    },
    style: { border: "2px solid #9b6ee8", background: "#f3edff" },
    targetPosition: Position.Left,
    sourcePosition: Position.Right,
  },
  {
    id: "browser",
    position: { x: 860, y: 118 },
    data: {
      label: (
        <div className="node-label">
          <strong>Browser Deck</strong>
          <span>한 페이지 발표</span>
        </div>
      ),
    },
    style: { border: "2px solid #f2c94c", background: "#fff9df" },
    targetPosition: Position.Left,
  },
];

const edges: Edge[] = [
  {
    id: "speaker-slides",
    source: "speaker",
    target: "slides",
    animated: true,
    markerEnd: { type: MarkerType.ArrowClosed, color: "#62666d" },
    style: { stroke: "#62666d", strokeWidth: 2 },
  },
  {
    id: "speaker-visuals",
    source: "speaker",
    target: "visuals",
    animated: true,
    markerEnd: { type: MarkerType.ArrowClosed, color: "#62666d" },
    style: { stroke: "#62666d", strokeWidth: 2 },
  },
  {
    id: "slides-theme",
    source: "slides",
    target: "theme",
    markerEnd: { type: MarkerType.ArrowClosed, color: "#62666d" },
    style: { stroke: "#62666d", strokeWidth: 2 },
  },
  {
    id: "visuals-theme",
    source: "visuals",
    target: "theme",
    markerEnd: { type: MarkerType.ArrowClosed, color: "#62666d" },
    style: { stroke: "#62666d", strokeWidth: 2 },
  },
  {
    id: "theme-browser",
    source: "theme",
    target: "browser",
    animated: true,
    markerEnd: { type: MarkerType.ArrowClosed, color: "#62666d" },
    style: { stroke: "#62666d", strokeWidth: 2 },
  },
];

export function SystemFlow() {
  return (
    <div className="flow-box">
      <ReactFlow
        nodes={nodes}
        edges={edges}
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
            id="system-flow-arrow"
            markerHeight="5"
            markerWidth="5"
            orient="auto"
            refX="4"
            refY="2.5"
          >
            <path d="M0,0 L5,2.5 L0,5 Z" />
          </marker>
        </defs>
        {[
          ["20", "57", "33", "48"],
          ["20", "59", "33", "68"],
          ["43", "48", "56", "58"],
          ["43", "68", "56", "60"],
          ["67", "59", "80", "59"],
        ].map(([x1, y1, x2, y2]) => (
          <line
            key={`${x1}-${y1}-${x2}-${y2}`}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            markerEnd="url(#system-flow-arrow)"
          />
        ))}
      </svg>
    </div>
  );
}

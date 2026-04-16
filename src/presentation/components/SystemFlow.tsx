"use client";

import {
  Background,
  Controls,
  MarkerType,
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
    </div>
  );
}

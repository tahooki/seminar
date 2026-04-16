"use client";

import { useEffect, useRef } from "react";

type DataPoint = {
  label: string;
  value: number;
  group: string;
};

type PlotChartProps = {
  data: DataPoint[];
};

export function PlotChart({ data }: PlotChartProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let cancelled = false;
    const container = containerRef.current;

    async function drawChart() {
      const Plot = await import("@observablehq/plot");

      if (!container || cancelled) {
        return;
      }

      const plot = Plot.plot({
        width: 720,
        height: 360,
        marginLeft: 54,
        marginRight: 24,
        marginTop: 30,
        marginBottom: 54,
        style: {
          background: "transparent",
          color: "#202124",
          fontFamily:
            "var(--font-noto-sans-kr), Apple SD Gothic Neo, system-ui, sans-serif",
          fontSize: "14px",
        },
        x: { label: null },
        y: { label: "발표 이해도", grid: true, domain: [0, 100] },
        color: {
          domain: ["기본 문서", "시각 시스템", "인터랙티브"],
          range: ["#d8dde3", "#2f80ed", "#ef7d6c"],
        },
        marks: [
          Plot.ruleY([0]),
          Plot.barY(data, {
            x: "label",
            y: "value",
            fill: "group",
            title: (d) => `${d.label}: ${d.value}`,
          }),
          Plot.text(data, {
            x: "label",
            y: "value",
            text: (d) => `${d.value}`,
            dy: -10,
            fontWeight: "700",
            fill: "#202124",
          }),
        ],
      });

      container.replaceChildren(plot);
    }

    drawChart();

    return () => {
      cancelled = true;
      container?.replaceChildren();
    };
  }, [data]);

  return <div ref={containerRef} className="chart-box" />;
}

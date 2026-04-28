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

type TrendPoint = {
  date: string;
  value: number;
  label: string;
};

type AnnotationPoint = {
  date: string;
  value: number;
  note: string;
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

export function TrendLineChart({ data }: { data: TrendPoint[] }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let cancelled = false;
    const container = containerRef.current;

    async function drawChart() {
      const Plot = await import("@observablehq/plot");
      const parsed = data.map((point) => ({
        ...point,
        date: new Date(point.date),
      }));

      if (!container || cancelled) {
        return;
      }

      const plot = Plot.plot({
        width: 720,
        height: 360,
        marginLeft: 54,
        marginRight: 26,
        marginTop: 34,
        marginBottom: 48,
        style: {
          background: "transparent",
          color: "#202124",
          fontFamily:
            "var(--font-noto-sans-kr), Apple SD Gothic Neo, system-ui, sans-serif",
          fontSize: "14px",
        },
        x: { label: null, tickFormat: "%m/%d" },
        y: { label: "전달력", grid: true, domain: [0, 100] },
        marks: [
          Plot.ruleY([0]),
          Plot.lineY(parsed, {
            x: "date",
            y: "value",
            stroke: "#2f80ed",
            strokeWidth: 4,
            curve: "catmull-rom",
          }),
          Plot.dot(parsed, {
            x: "date",
            y: "value",
            r: 6,
            fill: "#fff",
            stroke: "#2f80ed",
            strokeWidth: 3,
          }),
          Plot.text(parsed, {
            x: "date",
            y: "value",
            text: (d) => `${d.value}`,
            dy: -14,
            fontWeight: "800",
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

export function AnnotationPlot({
  data,
  annotations,
}: {
  data: TrendPoint[];
  annotations: AnnotationPoint[];
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let cancelled = false;
    const container = containerRef.current;

    async function drawChart() {
      const Plot = await import("@observablehq/plot");
      const parsed = data.map((point) => ({
        ...point,
        date: new Date(point.date),
      }));
      const parsedAnnotations = annotations.map((point) => ({
        ...point,
        date: new Date(point.date),
      }));

      if (!container || cancelled) {
        return;
      }

      const plot = Plot.plot({
        width: 720,
        height: 360,
        marginLeft: 54,
        marginRight: 30,
        marginTop: 42,
        marginBottom: 48,
        style: {
          background: "transparent",
          color: "#202124",
          fontFamily:
            "var(--font-noto-sans-kr), Apple SD Gothic Neo, system-ui, sans-serif",
          fontSize: "14px",
        },
        x: { label: null, tickFormat: "%m/%d" },
        y: { label: "완성도", grid: true, domain: [0, 100] },
        marks: [
          Plot.ruleY([0]),
          Plot.areaY(parsed, {
            x: "date",
            y: "value",
            fill: "#2f80ed",
            fillOpacity: 0.12,
            curve: "catmull-rom",
          }),
          Plot.lineY(parsed, {
            x: "date",
            y: "value",
            stroke: "#2f80ed",
            strokeWidth: 4,
            curve: "catmull-rom",
          }),
          Plot.ruleX(parsedAnnotations, {
            x: "date",
            stroke: "#ef7d6c",
            strokeDasharray: "4 4",
          }),
          Plot.dot(parsedAnnotations, {
            x: "date",
            y: "value",
            r: 7,
            fill: "#ef7d6c",
          }),
          Plot.text(parsedAnnotations, {
            x: "date",
            y: "value",
            text: "note",
            dy: -20,
            fontWeight: "800",
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
  }, [annotations, data]);

  return <div ref={containerRef} className="chart-box" />;
}

"use client";

import { useEffect, useId, useRef, useState } from "react";
import mermaid from "mermaid";

type MermaidChartProps = {
  chart: string;
};

export function MermaidChart({ chart }: MermaidChartProps) {
  const id = useId().replace(/[^a-zA-Z0-9]/g, "");
  const containerRef = useRef<HTMLDivElement>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function renderChart() {
      if (!containerRef.current) {
        return;
      }

      try {
        setError(null);
        mermaid.initialize({
          startOnLoad: false,
          securityLevel: "loose",
          theme: "base",
          themeVariables: {
            background: "#fbfaf7",
            primaryColor: "#fff4e8",
            primaryTextColor: "#202124",
            primaryBorderColor: "#ef7d6c",
            lineColor: "#62666d",
            secondaryColor: "#eaf5ff",
            tertiaryColor: "#f3f5f7",
            fontFamily:
              "var(--font-noto-sans-kr), Apple SD Gothic Neo, system-ui, sans-serif",
          },
        });

        const { svg, bindFunctions } = await mermaid.render(
          `seminar-mermaid-${id}`,
          chart,
        );

        if (!cancelled && containerRef.current) {
          containerRef.current.innerHTML = svg;
          bindFunctions?.(containerRef.current);
        }
      } catch (err) {
        if (!cancelled) {
          setError(err instanceof Error ? err.message : "Mermaid render failed");
        }
      }
    }

    renderChart();

    return () => {
      cancelled = true;
    };
  }, [chart, id]);

  return (
    <div className="mermaid-box">
      {error ? (
        <p className="panel-copy">Mermaid 렌더링 오류: {error}</p>
      ) : null}
      <div ref={containerRef} />
    </div>
  );
}

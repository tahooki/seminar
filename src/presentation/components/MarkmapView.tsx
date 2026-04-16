"use client";

import { useEffect, useRef } from "react";

type MarkmapViewProps = {
  markdown: string;
};

export function MarkmapView({ markdown }: MarkmapViewProps) {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    let destroyed = false;
    let cleanup: (() => void) | undefined;

    async function renderMap() {
      const [{ Transformer }, { Markmap }] = await Promise.all([
        import("markmap-lib"),
        import("markmap-view"),
      ]);

      if (!svgRef.current || destroyed) {
        return;
      }

      const transformer = new Transformer();
      const { root } = transformer.transform(markdown);
      const markmap = Markmap.create(
        svgRef.current,
        {
          autoFit: true,
          duration: 220,
          fitRatio: 0.9,
          initialExpandLevel: 3,
          maxWidth: 230,
          paddingX: 18,
          spacingHorizontal: 80,
          spacingVertical: 12,
          color: (node) => {
            const palette = ["#2f80ed", "#6ba84f", "#ef7d6c", "#9b6ee8"];
            return palette[node.state.depth % palette.length];
          },
        },
        root,
      );

      cleanup = () => markmap.destroy();
    }

    renderMap();

    return () => {
      destroyed = true;
      cleanup?.();
    };
  }, [markdown]);

  return (
    <div className="markmap-box">
      <svg ref={svgRef} aria-label="마인드맵 시각화" />
    </div>
  );
}

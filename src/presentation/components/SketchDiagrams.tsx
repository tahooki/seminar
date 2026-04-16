"use client";

import { useEffect, useMemo, useRef } from "react";
import rough from "roughjs/bin/rough";

type CycleItem = {
  label: string;
  detail: string;
  color: string;
};

type CycleDiagramProps = {
  center: string;
  items: CycleItem[];
};

const textColor = "#202124";
const mutedColor = "#62666d";

export function CycleDiagram({ center, items }: CycleDiagramProps) {
  const sketchRef = useRef<SVGGElement>(null);
  const width = 760;
  const height = 520;
  const cx = width / 2;
  const cy = height / 2 + 8;
  const radiusX = 248;
  const radiusY = 170;

  const positions = useMemo(
    () =>
      items.map((item, index) => {
        const angle = -Math.PI / 2 + (index / items.length) * Math.PI * 2;
        return {
          ...item,
          x: cx + Math.cos(angle) * radiusX,
          y: cy + Math.sin(angle) * radiusY,
          angle,
        };
      }),
    [items, cx, cy],
  );

  useEffect(() => {
    const group = sketchRef.current;
    const svg = group?.ownerSVGElement;

    if (!group || !svg) {
      return;
    }

    group.replaceChildren();
    const rc = rough.svg(svg, { options: { roughness: 1.35 } });

    group.appendChild(
      rc.ellipse(cx, cy, 190, 112, {
        stroke: "#62666d",
        strokeWidth: 1.6,
        fill: "#f3f5f7",
        fillStyle: "solid",
        hachureGap: 9,
      }),
    );

    positions.forEach((item, index) => {
      const next = positions[(index + 1) % positions.length];
      group.appendChild(
        rc.curve(
          [
            [
              item.x + Math.cos(item.angle + 0.8) * 46,
              item.y + Math.sin(item.angle + 0.8) * 34,
            ],
            [(item.x + next.x) / 2, (item.y + next.y) / 2],
            [
              next.x - Math.cos(next.angle - 0.8) * 46,
              next.y - Math.sin(next.angle - 0.8) * 34,
            ],
          ],
          {
            stroke: "#62666d",
            strokeWidth: 1.5,
            roughness: 1.8,
          },
        ),
      );

      group.appendChild(
        rc.ellipse(item.x, item.y, 132, 82, {
          stroke: item.color,
          strokeWidth: 2,
          fill: `${item.color}22`,
          fillStyle: "solid",
        }),
      );
    });
  }, [center, positions, cx, cy]);

  return (
    <div className="sketch-box" aria-label="손그림 스타일 순환 다이어그램">
      <svg viewBox={`0 0 ${width} ${height}`} role="img">
        <g ref={sketchRef} />
        <text
          x={cx}
          y={cy - 6}
          fill={textColor}
          fontSize="28"
          fontWeight="800"
          textAnchor="middle"
        >
          {center}
        </text>
        <text
          x={cx}
          y={cy + 26}
          fill={mutedColor}
          fontSize="15"
          fontWeight="700"
          textAnchor="middle"
        >
          one-page seminar loop
        </text>

        {positions.map((item) => (
          <g key={item.label}>
            <text
              x={item.x}
              y={item.y - 5}
              fill={textColor}
              fontSize="18"
              fontWeight="800"
              textAnchor="middle"
            >
              {item.label}
            </text>
            <text
              x={item.x}
              y={item.y + 20}
              fill={mutedColor}
              fontSize="12"
              fontWeight="700"
              textAnchor="middle"
            >
              {item.detail}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}

type FlowItem = {
  title: string;
  description: string;
  color: string;
};

export function SketchFlow({ items }: { items: FlowItem[] }) {
  const sketchRef = useRef<SVGGElement>(null);
  const width = 760;
  const height = 310;
  const gap = 42;
  const cardWidth = (width - gap * (items.length + 1)) / items.length;
  const cardHeight = 124;
  const y = 96;

  useEffect(() => {
    const group = sketchRef.current;
    const svg = group?.ownerSVGElement;

    if (!group || !svg) {
      return;
    }

    group.replaceChildren();
    const rc = rough.svg(svg, { options: { roughness: 1.45 } });

    items.forEach((item, index) => {
      const x = gap + index * (cardWidth + gap);
      group.appendChild(
        rc.rectangle(x, y, cardWidth, cardHeight, {
          stroke: item.color,
          strokeWidth: 2,
          fill: `${item.color}18`,
          fillStyle: "solid",
        }),
      );

      if (index < items.length - 1) {
        const x1 = x + cardWidth + 8;
        const x2 = x + cardWidth + gap - 8;
        const midY = y + cardHeight / 2;
        group.appendChild(
          rc.line(x1, midY, x2, midY, {
            stroke: "#62666d",
            strokeWidth: 1.8,
          }),
        );
        group.appendChild(
          rc.path(
            `M ${x2 - 10} ${midY - 7} L ${x2} ${midY} L ${x2 - 10} ${
              midY + 7
            }`,
            {
              stroke: "#62666d",
              strokeWidth: 1.8,
            },
          ),
        );
      }
    });
  }, [items, cardWidth]);

  return (
    <div className="sketch-box" aria-label="손그림 스타일 단계 흐름">
      <svg viewBox={`0 0 ${width} ${height}`} role="img">
        <g ref={sketchRef} />
        {items.map((item, index) => {
          const x = gap + index * (cardWidth + gap);
          return (
            <g key={item.title}>
              <text
                x={x + 18}
                y={y + 42}
                fill={textColor}
                fontSize="21"
                fontWeight="800"
              >
                {item.title}
              </text>
              <text
                x={x + 18}
                y={y + 72}
                fill={mutedColor}
                fontSize="13"
                fontWeight="700"
              >
                {item.description}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}

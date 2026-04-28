# Component Contracts

Use this before creating or changing reusable presentation components.

## Layout

`SampleShell`

- Path: `src/presentation/components/SampleShell.tsx`
- Props: `eyebrow`, `title`, `description`, optional `note`, `children`.
- Use for guide and sample pages that should match the visual lab shell.

## Mermaid

`MermaidChart`

- Path: `src/presentation/components/MermaidChart.tsx`
- Props: `{ chart: string }`
- Client component.
- Use for flowchart, sequence, state, ERD, timeline.
- Keep labels short and escape complex text in Mermaid syntax.

## RoughJS

`CycleDiagram`

- Path: `src/presentation/components/SketchDiagrams.tsx`
- Props: `{ center: string; items: { label: string; detail: string; color: string }[] }`
- Client component.
- Best with 4-6 items.

`SketchFlow`

- Path: `src/presentation/components/SketchDiagrams.tsx`
- Props: `{ items: { title: string; description: string; color: string }[] }`
- Client component.
- Best with 3-4 items.

## Markmap

`MarkmapView`

- Path: `src/presentation/components/MarkmapView.tsx`
- Props: `{ markdown: string }`
- Client component.
- Keep depth to 3 levels for presentation readability.

## Observable Plot

`PlotChart`

- Path: `src/presentation/components/PlotChart.tsx`
- Props: `{ data: { label: string; value: number; group: string }[] }`
- Client component.
- Current color groups are `기본 문서`, `시각 시스템`, `인터랙티브`.

`TrendLineChart`

- Path: `src/presentation/components/PlotChart.tsx`
- Props: `{ data: { date: string; value: number; label: string }[] }`
- Client component.
- Use for time series and adoption or maturity trend stories.

`AnnotationPlot`

- Path: `src/presentation/components/PlotChart.tsx`
- Props: `{ data: TrendPoint[]; annotations: { date: string; value: number; note: string }[] }`
- Client component.
- Use when events or release points need to be labeled directly on a chart.

## React Flow

`SystemFlow`

- Path: `src/presentation/components/SystemFlow.tsx`
- Static sample for the existing presentation system map.

`GuideArchitectureFlow`

- Path: `src/presentation/components/GuideArchitectureFlow.tsx`
- Props: `{ variant?: "architecture" | "briefing" }`
- Client component.
- Use for guide examples that need an interactive architecture map.

`VisualPicker`

- Path: `src/presentation/components/VisualPicker.tsx`
- Client component.
- Uses local state to map a presentation scene to a recommended visual tool and route.
- Use for demos where the selection guide itself should become an interactive UI.

## CSS classes

- `seminar-page`: full page background.
- `seminar-shell`: centered content width.
- `stage-grid`: 12-column sample layout.
- `visual-panel`: chart/diagram panel.
- `slide-slab`: large message panel.
- `metric-strip`, `metric`: small numeric summaries.
- `compare-grid`, `compare-item`: three-column explanation blocks.
- `card-icon`: consistent icon container.
- `tag-row`, `tag`: compact labels.
- `guide-table`: decision matrix table.
- `before-after-panel`: before/after comparison content.
- `picker`, `picker-options`, `picker-button`, `picker-result`: interactive visual picker.
- `swimlane-board`, `swimlane`, `swimlane-steps`: ownership lanes.
- `quadrant-map`, `quadrant-dot`: 2x2 priority maps.
- `risk-board`, `risk-card`, `risk-level`: risk register cards.
- `talk-slide`, `notes-panel`: visible slide and speaker notes split.

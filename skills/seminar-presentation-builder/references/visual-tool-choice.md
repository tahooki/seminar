# Visual Tool Choice

Use this when deciding which visual tool should render a presentation idea.

## Primary choices

| Need | Use | Route to inspect | Guide |
| --- | --- | --- | --- |
| Process, branch, lifecycle | Mermaid | `/samples/guides/mermaid-flow` | `docs/presentation-guides/mermaid.md` |
| Message order | Mermaid sequence | `/samples/guides/mermaid-sequence` | `docs/presentation-guides/mermaid.md` |
| Timeline or roadmap | Mermaid gantt | `/samples/guides/mermaid-timeline-roadmap` | `docs/presentation-guides/mermaid.md` |
| State lifecycle | Mermaid state | `/samples/guides/mermaid-state-machine` | `docs/presentation-guides/mermaid.md` |
| Schema relationship | Mermaid ERD | `/samples/guides/mermaid-erd-schema` | `docs/presentation-guides/mermaid.md` |
| User journey | Mermaid journey | `/samples/guides/user-journey-flow` | `docs/presentation-guides/mermaid.md` |
| Role handoff | Swimlane layout | `/samples/guides/swimlane-ownership` | `docs/presentation-guides/next-react-tailwind.md` |
| Priority decision | Quadrant map | `/samples/guides/quadrant-priority-map` | `docs/presentation-guides/next-react-tailwind.md` |
| Risk and mitigation | Risk board | `/samples/guides/risk-tradeoff-board` | `docs/presentation-guides/lucide-icons.md` |
| Soft idea flow | RoughJS SketchFlow | `/samples/guides/rough-sketch-flow` | `docs/presentation-guides/roughjs.md` |
| Repeating loop | RoughJS CycleDiagram | `/samples/guides/rough-cycle` | `docs/presentation-guides/roughjs.md` |
| Concept hierarchy | Markmap | `/samples/guides/markmap-concept` | `docs/presentation-guides/markmap.md` |
| Interactive architecture | React Flow | `/samples/guides/react-flow-architecture` | `docs/presentation-guides/react-flow.md` |
| Numeric comparison | Observable Plot | `/samples/guides/observable-plot-comparison` | `docs/presentation-guides/observable-plot.md` |
| Time trend | Observable Plot line | `/samples/guides/plot-trend-story` | `docs/presentation-guides/observable-plot.md` |
| Event annotation | Observable Plot annotation | `/samples/guides/plot-annotation` | `docs/presentation-guides/observable-plot.md` |
| Decision table | React/Tailwind matrix | `/samples/guides/comparison-matrix` | `docs/presentation-guides/next-react-tailwind.md` |
| Code explanation | Code window + Mermaid | `/samples/guides/code-walkthrough` | `docs/presentation-guides/next-react-tailwind.md` |
| Before/after persuasion | Before/After + Plot | `/samples/guides/before-after-visual` | `docs/presentation-guides/observable-plot.md` |
| Tool choice demo | Client picker + Lucide | `/samples/guides/visual-picker` | `docs/presentation-guides/lucide-icons.md` |
| Slide assembly | Pattern gallery | `/samples/guides/slide-pattern-gallery` | `docs/presentation-guides/next-react-tailwind.md` |
| Generation pipeline | Mermaid + code | `/samples/guides/prompt-to-slide-pipeline` | `docs/presentation-guides/next-react-tailwind.md` |
| Speaker notes | Talk track layout | `/samples/guides/talk-track-notes` | `docs/presentation-guides/next-react-tailwind.md` |
| Status and section cues | Lucide React | `/samples/guides/lucide-status-ui` | `docs/presentation-guides/lucide-icons.md` |

## Compositions

- Research story: Markmap + Observable Plot + Mermaid. Inspect `/samples/guides/composed-research-story`.
- System briefing: React Flow + Mermaid + Observable Plot. Inspect `/samples/guides/composed-system-briefing`.
- Idea cycle: RoughJS + Mermaid. Inspect `/samples/idea-cycle`.
- System map: React Flow + Mermaid. Inspect `/samples/system-map`.
- Data story: Observable Plot + Markmap. Inspect `/samples/data-story`.

## Default heuristics

- Start with Mermaid when the user describes a flow or decision tree.
- Switch to React Flow when the relationship map needs pan, zoom, or draggable nodes.
- Switch to Markmap when the source material is already a nested outline.
- Add Observable Plot only when numbers support the claim.
- Add Lucide icons to clarify status or section meaning, not as decoration.
- Use RoughJS when the user wants a friendlier, less formal explanation.

## Avoid

- More than 9 Mermaid nodes on one slide.
- React Flow for a simple 3-step process.
- Markmap for arbitrary graph edges.
- Observable Plot without actual numeric data.
- RoughJS for exact schemas or quantitative charts.
- Icon-only controls without accessible labels.

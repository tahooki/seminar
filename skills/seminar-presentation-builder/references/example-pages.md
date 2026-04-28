# Example Pages

Use this when selecting an existing route to inspect or extending the sample hub.

## Guide routes

- `/samples/guides`: index of guide examples.
- `/samples/guides/mermaid-flow`: flowchart and state diagram selection example.
- `/samples/guides/mermaid-sequence`: sequence diagram and client boundary example.
- `/samples/guides/mermaid-timeline-roadmap`: timeline and roadmap planning example.
- `/samples/guides/mermaid-state-machine`: lifecycle and state transition example.
- `/samples/guides/mermaid-erd-schema`: schema and entity relationship example.
- `/samples/guides/user-journey-flow`: user journey and experience flow example.
- `/samples/guides/swimlane-ownership`: role ownership and handoff lanes.
- `/samples/guides/quadrant-priority-map`: 2x2 priority decision map.
- `/samples/guides/risk-tradeoff-board`: risk, impact, mitigation board.
- `/samples/guides/rough-sketch-flow`: hand-drawn step flow.
- `/samples/guides/rough-cycle`: repeating loop diagram.
- `/samples/guides/markmap-concept`: concept hierarchy from Markdown.
- `/samples/guides/react-flow-architecture`: interactive architecture map.
- `/samples/guides/observable-plot-comparison`: bar chart comparison.
- `/samples/guides/plot-trend-story`: Observable Plot line chart trend story.
- `/samples/guides/plot-annotation`: Observable Plot annotated trend chart.
- `/samples/guides/comparison-matrix`: selection matrix and decision table.
- `/samples/guides/code-walkthrough`: code excerpt plus Mermaid read path.
- `/samples/guides/before-after-visual`: before/after narrative plus Plot evidence.
- `/samples/guides/visual-picker`: interactive visual tool recommendation UI.
- `/samples/guides/slide-pattern-gallery`: reusable slide block gallery.
- `/samples/guides/prompt-to-slide-pipeline`: prompt-to-page generation pipeline.
- `/samples/guides/talk-track-notes`: visible slide and speaker notes pattern.
- `/samples/guides/lucide-status-ui`: status cards and icon placement.
- `/samples/guides/composed-research-story`: Markmap + Plot + Mermaid story.
- `/samples/guides/composed-system-briefing`: React Flow + Mermaid + Plot briefing.

## Existing sample routes

- `/`: sample hub.
- `/samples/idea-cycle`: RoughJS + Mermaid.
- `/samples/system-map`: React Flow + Mermaid.
- `/samples/data-story`: Observable Plot + Markmap.
- `/samples/a2ui`: long-form A2UI HTML presentation deck.
- `/samples/code-agent`: one-page code agent evolution deck.

## Linking rule

When adding a new sample route:

1. Put it under `app/samples/*` or `app/samples/guides/*`.
2. Use `SampleShell` unless the page is a full deck.
3. Add a link from `app/page.tsx` or `/samples/guides` if it belongs to the guide set.
4. Add it to this reference if it becomes a reusable example.

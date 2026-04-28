---
name: seminar-presentation-builder
description: Use when creating, revising, or choosing visual patterns for seminar presentation pages in the seminar Next.js project. Helps select between Mermaid, RoughJS, Markmap, React Flow, Observable Plot, Lucide, and existing presentation components, then builds pages that follow the local presentation design system and workflow rules.
---

# Seminar Presentation Builder

Use this skill for the `seminar` project when the user wants a seminar page, visual guide, presentation example, diagram-heavy page, or help choosing which visual tool to use.

## First checks

1. Read `AGENTS.md` and follow the project workflow rules.
2. Before editing Next.js code, read the relevant local docs in `node_modules/next/dist/docs/`.
3. Do not run `npm run build`, `next build`, or equivalent build checks unless the user explicitly asks.
4. Do not create, switch, rebase, merge, or otherwise move Git branches unless the user explicitly asks.

## Workflow

1. Classify what the user wants to show: flow, sequence, system structure, concept map, data comparison, sketch, status UI, or composed story.
2. Read `references/visual-tool-choice.md` if tool selection is unclear.
3. Read `references/example-pages.md` when choosing an existing route or deciding where to add a new page.
4. Read `references/component-contracts.md` before using or changing `src/presentation/components`.
5. Reuse `SampleShell`, `visual-panel`, `slide-slab`, `stage-grid`, and existing visualization components before adding new abstractions.
6. Keep route pages as Server Components by default. Put browser-only libraries behind small `"use client"` components.
7. Add new samples under `app/samples/*` or `app/samples/guides/*`, then link them from the sample hub.
8. Use light verification first: file reads, route checks, `npm run lint` if useful. Ask before build checks unless the user already requested one.

## Tool selection shortcut

- Flow, branch, state, sequence: Mermaid.
- Soft idea flow or cycle: RoughJS.
- Concept hierarchy from Markdown: Markmap.
- Interactive architecture map: React Flow.
- Numeric comparison or change: Observable Plot.
- Status, section, or action cue: Lucide React.
- Whole page structure: Next.js App Router, React, Tailwind CSS, `SampleShell`.

## Output style

- Build the actual presentation page or example page first, not a marketing landing page.
- Keep Korean presentation text readable from a distance.
- Use concise labels inside diagrams; put longer explanation in adjacent panels.
- Prefer the existing warm paper background, 8px radius panels, and current accent palette.
- Avoid adding dependencies unless the current packages cannot express the requested visual.

## Local docs

Project docs to consult as needed:

- `docs/presentation-visual-guide.md`
- `docs/presentation-guides/use-case-index.md`
- `docs/presentation-guides/*.md`
- `docs/presentation-system-plan.md`
- `docs/a2ui-presentation-plan.md`

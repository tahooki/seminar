<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Project workflow rules

- Do not run build commands such as `npm run build`, `next build`, or equivalent verification builds unless the user explicitly asks for a build check.
- Do not switch, create, checkout, rebase, merge, or otherwise move Git branches unless the user explicitly asks for branch work.
- When verification is useful but not explicitly requested, prefer lighter checks such as reading files, explaining the expected risk, or asking before running build-heavy commands.

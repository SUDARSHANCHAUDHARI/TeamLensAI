# TeamLens AI - Codex Context

## Project

- Path: `AIProjects/TeamLensAI`
- Type: Idea seed
- Product: Role-based AI review and decision support platform
- Primary users: developers, product teams, QA, support, security, DevOps, leadership

## Direction

- Build CLI-first before web UI.
- Use manually written role files first.
- Do not ingest Slack DMs or private coworker history.
- Keep reviewers role-based, not named-person simulations.
- Every review should produce risks, assumptions, missing information, questions, alternatives, and next actions.
- Support disagreement and conflict reports, not bland consensus only.

## Safety

- Do not commit private docs, customer data, support tickets, PR content from private repos, `.env*`, API keys, generated caches, or real workplace message exports.
- Avoid language that implies real colleague approval or identity simulation.
- Treat this as decision support, not authorization.

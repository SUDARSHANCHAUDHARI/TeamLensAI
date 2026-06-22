# Idea: TeamLens AI

## One-Liner

TeamLens AI is a role-based AI review panel for pressure-testing plans, PRs, incidents, releases, customer replies, and decisions.

## Why It Exists

Real teams benefit from multiple expert viewpoints, but it is slow to ask QA, product, support, security, DevOps, UX, and leadership for every decision. TeamLens AI simulates expert roles so a user can see likely risks and blind spots before involving the real team.

## Safer Angle

Do not clone coworkers. Do not profile real people from Slack.

Instead:

- Use role files.
- Use public/internal docs only when approved.
- Use tickets, PRs, release notes, support notes, and decision logs as optional context.
- Make clear that reviewers are simulations, not real approvals.

## Core Workflow

```text
User Input
  -> Review Request
  -> Role Loader
  -> Prompt Builder
  -> LLM Engine
  -> Response Processor
  -> Review Report
```

## Review Output

Each review should identify:

- Risks.
- Assumptions.
- Missing information.
- Alternative approaches.
- Potential business impact.
- Potential customer impact.
- Potential technical impact.
- Recommended next step.

## Perfect First Use Cases

1. Release readiness review.
2. Incident postmortem review.
3. Customer support reply review.
4. Product requirement review.
5. Hardware recommendation review.
6. Architecture review.
7. QA test plan review.
8. Security review.
9. Change management review.
10. Engineering proposal review.

# TeamLens AI

AI review panel that simulates expert roles to pressure-test plans, PRs, incidents, releases, customer replies, and product decisions.

## Concept

TeamLens AI is a safe Synthteam-style tool that uses role-based reviewers instead of cloned coworkers. It helps teams surface risks, assumptions, missing information, and disagreement before implementation.

## One Line

Role-based AI review and decision support platform.

## Core Principles

1. No real-person profiling.
2. No Slack scraping.
3. No personality cloning.
4. Focus on expertise and decision patterns.
5. Explain reasoning clearly.
6. Surface risks and blind spots.
7. Encourage disagreement between reviewers.
8. Produce actionable feedback.

## Example CLI

```bash
teamlens review spec.md
teamlens review spec.md --role qa-lead
teamlens review spec.md --team qa-lead,security-reviewer
teamlens review pr.md --team qa-lead,product-manager,support-engineer
teamlens roles list
teamlens role create
```

## Initial Roles

- QA Lead.
- Product Manager.
- Support Engineer.
- Security Reviewer.
- DevOps Engineer.
- UX Reviewer.
- Hardware Specialist.
- Engineering Manager.
- Customer Success Manager.
- Solutions Architect.

## MVP

- Single role review.
- Multi-role review.
- Markdown reports.
- Local Ollama support.
- OpenAI support.
- CLI interface.

## Status

Idea seed created from ChatGPT shared conversation:
https://chatgpt.com/share/6a38f040-2fe0-83ec-a199-256111e76102

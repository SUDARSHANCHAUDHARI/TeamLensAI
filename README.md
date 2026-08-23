# TeamLens AI

AI review panel that simulates expert roles to pressure-test plans, PRs, incidents, releases, customer replies, and product decisions.

## Table of Contents

- [Concept](#concept)
- [One Line](#one-line)
- [Core Principles](#core-principles)
- [Example CLI](#example-cli)
- [Initial Roles](#initial-roles)
- [MVP](#mvp)
- [Status](#status)
- [About](#about)

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

---

## About

I'm Sudarshan Chaudhari, a Senior Quality Engineer, Test Automation specialist, and AI systems builder based in Bangkok, Thailand.

I have 13+ years of experience in software quality engineering, working across SaaS, fintech, gaming, web, mobile, cloud, and digital signage platforms. My background combines hands-on test automation with QA leadership, test strategy, CI/CD, release quality, production investigation, and cross-platform validation.

Alongside my professional QA career, I run [SudarshanTechLabs](https://sudarshantechlabs.com/), my independent engineering and product lab where I design, build, test, and ship software across Android, web, AI, cybersecurity, developer tooling, and cross-platform applications.

### What I work on

- ⚙️ **Quality Engineering & Test Automation** — Playwright, Selenium, Cypress, Appium, API testing, automation frameworks, end-to-end testing, CI/CD, release gates, GitHub Actions, risk-based testing, and production validation
- 🤖 **AI Systems & Automation** — AI agents, multi-agent orchestration, MCP servers, AI-assisted QA, prompt tooling, developer workflows, automation systems, and Claude Code plugins
- 📱 **Mobile & Cross-Platform Applications** — Android applications built with Kotlin and Jetpack Compose, Google Play releases, automated build and publishing pipelines, and cross-platform development spanning iOS, web, Windows, and macOS
- 🌐 **Web Applications & Platforms** — Full-stack applications using Next.js, TypeScript, Firebase, Cloudflare, REST APIs, and modern web infrastructure
- 🛠️ **Developer Tooling & CLI Engineering** — Rust, Python, TypeScript, CLI utilities, multi-repository tooling, build automation, release tooling, and engineering productivity systems
- 🛡️ **Cybersecurity & Observability** — Threat detection, log analysis, security auditing, vulnerability assessment, monitoring, and security-focused developer tools
- 📺 **Digital Signage & Device Platforms** — Content validation, playback testing, device compatibility, production investigation, monitoring, and QA across diverse hardware and operating-system environments

My work sits at the intersection of quality engineering, automation, AI, and software development. I approach products with a QA mindset from the beginning: understanding failure modes, designing for testability, automating repetitive work, and building release confidence into the engineering process.

Through SudarshanTechLabs, I also build products and tools from idea to production, covering architecture, development, testing, CI/CD, release automation, monitoring, and ongoing maintenance.

🌐 [sudarshantechlabs.com](https://sudarshantechlabs.com/) · 💼 [LinkedIn](https://linkedin.com/in/sudarshan-chaudhari) · 🐙 [GitHub](https://github.com/SUDARSHANCHAUDHARI) · ✉️ [sunny.sudarshan@gmail.com](mailto:sunny.sudarshan@gmail.com)

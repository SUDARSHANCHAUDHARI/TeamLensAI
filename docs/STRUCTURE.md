# Suggested Structure

```text
teamlens-ai/
├── apps/
│   ├── cli/
│   └── web/
├── packages/
│   ├── core/
│   │   ├── reviewers/
│   │   ├── prompts/
│   │   ├── scoring/
│   │   └── reports/
│   ├── roles/
│   │   ├── qa-lead/
│   │   ├── product-manager/
│   │   ├── support-engineer/
│   │   ├── security-reviewer/
│   │   ├── devops-engineer/
│   │   ├── ux-reviewer/
│   │   └── hardware-specialist/
│   ├── llm/
│   └── storage/
├── docs/
├── examples/
├── tests/
└── README.md
```

## Simple MVP Structure

```text
teamlens-ai/
├── README.md
├── package.json
├── .env.example
├── roles/
├── prompts/
├── src/
│   ├── cli.ts
│   ├── role-loader.ts
│   ├── ask-role.ts
│   ├── ask-team.ts
│   └── llm.ts
└── examples/
```

## Build Stack

- Node.js.
- TypeScript.
- Commander.js.
- OpenAI or local Ollama support.
- Markdown role files.
- Markdown report output.

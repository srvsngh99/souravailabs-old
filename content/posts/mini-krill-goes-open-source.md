---
title: "Mini Krill Goes Open Source: Building an AI Agent Harness from Scratch"
date: 2026-05-01
draft: false
slug: "mini-krill-goes-open-source"
description: "Mini Krill is now open source — a local-first AI agent built in Go that thinks, plans, and acts on your machine. Here's why I built it and what I learned."
tags: ["mini-krill", "open-source", "ai-agents", "announcement", "go"]
product: "Mini Krill"
use_case: "Agents"
---

Today I'm open-sourcing [Mini Krill](https://github.com/srvsngh99/mini-krill) — a local-first AI agent I built from scratch in Go. It's the result of months of work to understand how autonomous agents actually reason, plan, and act.

## Why I built it

I've spent 10+ years making software reliable. When I started working with AI systems, I noticed something: most AI agents are black boxes. They take your input, do something opaque, and give you an answer. You don't know what they're planning. You can't approve or reject their approach. You can't run them without handing your data to a cloud service.

I wanted an agent that was transparent, local, and under my control. So I built one.

Mini Krill is inspired by [Jarvis](https://en.wikipedia.org/wiki/J.A.R.V.I.S.) — the idea of a personal AI assistant that works for you — and [OpenClaw](https://github.com/openclaw) — the open-source approach to agent tooling.

## What Mini Krill does

Mini Krill is an AI agent you can talk to from anywhere — a **Telegram bot, terminal CLI, TUI dashboard, or Discord bot**. All four interfaces share a unified memory, so you can start a conversation on Telegram from your phone and continue it in your terminal. It helps you think through problems, plan tasks, and execute them.

The core loop is **plan-before-execute**:

1. You give it a task
2. It classifies the intent (casual chat vs. task)
3. For tasks, it generates a step-by-step plan
4. It shows you the plan and waits for your approval
5. Only then does it execute

This approval step is non-negotiable. The agent never acts without your explicit go-ahead.

## Local-first, private by default

The default provider is [Ollama](https://ollama.com), which means everything — prompts, responses, memories, conversations — stays on your machine. No cloud account. No API key. No telemetry.

If you have a ChatGPT or Claude subscription, you can switch providers inside chat:

```text
/use local    # Ollama
/use codex    # ChatGPT via Codex CLI
/use claude   # Claude via Claude Code CLI
```

Mini Krill delegates authentication to the official provider CLIs. It never reads or stores your OAuth tokens.

## The architecture

Mini Krill is ~15,000 lines of Go, organized into 18 internal packages:

- **agent** — the core think-plan-act loop
- **brain** — persistent memory, personality, conversation history
- **llm** — provider abstraction (Ollama, Codex CLI, Claude Code, cloud APIs)
- **plugin** — YAML-based skill registry + MCP server support
- **safety** — untrusted content sandboxing to prevent prompt injection
- **tui** — ocean-themed terminal dashboard built with Bubble Tea

Every package depends only on `core`, `config`, and `log`. Concrete wiring happens through dependency injection in `main.go`. This makes it straightforward to test, extend, and reason about.

## Security choices

Building an AI agent means thinking carefully about what it can access and what external content can do to it:

- **Untrusted content sandboxing**: When Mini Krill fetches a web page or reads a file, that content is wrapped with explicit markers telling the LLM to treat it as quoted data only — no following instructions, no credential extraction, no tool invocation.
- **SSRF protection**: The HTTP client blocks requests to private, loopback, and link-local IPs.
- **No secrets in source**: `.env`, credentials, and key files are gitignored. API keys are only accepted via environment variables at runtime.
- **Credential delegation**: Mini Krill calls `codex` and `claude` as subprocesses. It never touches OAuth tokens.

## What I learned

Building an AI agent harness taught me things that reading documentation never would:

**Intent classification matters more than you think.** The difference between "tell me about X" (chat) and "do X for me" (task) determines the entire flow. Getting this wrong means either over-planning casual questions or under-planning real tasks.

**Memory is harder than generation.** Deciding what to remember, when to recall it, and how to inject it into context without bloating the prompt is a design problem, not an LLM problem.

**Personality makes the difference.** When your agent has a consistent voice — in Mini Krill's case, a curious crustacean who drops krill facts — people actually want to use it. A boring assistant stays closed after one session.

**Plan approval is a feature, not friction.** Showing the plan and waiting for a yes/no creates trust. Users who trust the agent use it for harder tasks.

## Try it

```bash
curl -fsSL https://raw.githubusercontent.com/srvsngh99/mini-krill/main/scripts/install.sh | bash
minikrill init
minikrill chat
```

Runs on Linux, macOS, and Windows. Single binary. Local inference uses Ollama.

The full source, docs, and issue tracker are on GitHub: [srvsngh99/mini-krill](https://github.com/srvsngh99/mini-krill)

If you're interested in AI agents, local-first tooling, or just want a crustaceous buddy in your terminal — give it a try.

---

*Sourav Singh builds AI tools and writes about quality engineering for AI systems at [souravailabs.ai](https://souravailabs.ai).*

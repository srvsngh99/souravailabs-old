---
title: "Mini Krill"
description: "Local-first AI agent by Sourav Singh / Sourav AI Labs. Runs privately with Ollama, supports Codex and Claude Code via official CLIs. Unified memory across CLI, TUI, Telegram, and Discord."
date: 2026-04-30
tags:
  - AI agents
  - Open source
product: "Mini Krill"
use_case: "Productivity"
---

<section class="project-hero">
  <div>
    <p class="eyebrow">Sourav AI Labs project</p>
    <h2>Mini Krill</h2>
    <p class="article-dek">A local-first AI agent with a crustaceous soul. Built by Sourav Singh / Sourav AI Labs. Inspired by Jarvis and OpenClaw.</p>
  </div>
  <img src="/images/krill_logo.png" alt="Mini Krill logo" class="project-logo" style="max-width: 200px; border-radius: 50%;">
</section>

Mini Krill is designed for people who want a practical personal agent without starting with API keys or cloud accounts. The first-class path is local Ollama — everything stays on your machine. Subscription-backed Codex and Claude Code support delegates authentication to the official CLIs, so Mini Krill does not store provider OAuth tokens.

It runs seamlessly on **Windows, Linux, and macOS** as a single binary with zero dependencies.

## Install

```bash
curl -fsSL https://raw.githubusercontent.com/srvsngh99/mini-krill/main/scripts/install.sh | bash
minikrill init
minikrill chat
```

## Provider Options

| Provider | Best for | Auth model |
|---|---|---|
| Ollama | Private local chat and task planning | No account required; recommended `gemma3:4b` |
| Codex | Coding and repo-aware work | `codex login` via ChatGPT subscription |
| Claude Code | Coding, analysis, and terminal workflows | `claude auth login` via Claude subscription |

Inside chat:

```text
/models
/use local
/use codex
/use claude
```

## Key Features

- **Plan-before-execute** — the agent shows its plan and waits for your approval before acting
- **Unified memory** — move between CLI, TUI, Telegram, and Discord with shared continuity
- **Personality system** — not a boring assistant, a crustaceous AI buddy with soul
- **Plugin system** — YAML-based skill registry for extensible capabilities
- **Health monitoring** — heartbeat, doctor diagnostics, and sonar pings
- **TUI dashboard** — ocean-themed terminal UI with real-time status

## Security & Privacy

- **Local-first**: with Ollama, all data stays on your machine
- **No telemetry**: Mini Krill never phones home or collects analytics
- **Credential delegation**: OAuth tokens stay in the official provider CLIs
- **Untrusted content sandboxing**: external content is marked as data-only, preventing prompt injection
- **SSRF protection**: HTTP client blocks requests to private/loopback addresses

All data is stored locally in `~/.mini-krill/`.

## Documentation

| Guide | Covers |
|---|---|
| [Install and setup](https://github.com/srvsngh99/mini-krill/blob/main/docs/INSTALL.md) | Provider choice, integrations, Windows/macOS/Linux setup |
| [Provider switching](https://github.com/srvsngh99/mini-krill/blob/main/docs/PROVIDERS.md) | Ollama, Codex CLI, Claude Code, and chat switching commands |
| [Memory and preferences](https://github.com/srvsngh99/mini-krill/blob/main/docs/MEMORY.md) | Local storage and how preferences follow provider switches |
| [Interfaces](https://github.com/srvsngh99/mini-krill/blob/main/docs/INTERFACES.md) | Telegram bot, CLI, and Discord bot setup |
| [Automation workflows](https://github.com/srvsngh99/mini-krill/blob/main/docs/AUTOMATION.md) | Reminders, file summaries, web summaries, and research |
| [Testing checklist](https://github.com/srvsngh99/mini-krill/blob/main/docs/TESTING.md) | Commands to verify install, providers, memory, and builds |
| [Troubleshooting](https://github.com/srvsngh99/mini-krill/blob/main/docs/TROUBLESHOOTING.md) | PATH, Ollama, Codex login, Claude login, and memory checks |

The full docs live in the Mini Krill GitHub repo under `docs/`.

## Current Status

Mini Krill v0.1.0 is open source under the MIT license. It is actively maintained and being hardened for production workflows.

<p>
  <a class="btn btn-primary" href="https://github.com/srvsngh99/mini-krill" target="_blank" rel="noreferrer">Open GitHub repo</a>
</p>

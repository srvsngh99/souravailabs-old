---
title: "Mini Krill"
description: "Local-first AI agent by Sourav Singh / Sourav AI Labs, built for Ollama, Codex subscription login, Claude Code subscription login, and unified memory across interfaces."
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
    <p class="article-dek">A local-first AI agent with a crustaceous soul. Built by Sourav Singh / Sourav AI Labs.</p>
  </div>
  <pre class="project-ascii" aria-label="Mini Krill ASCII logo">        .-''''''''-.
     .-'   .----.   '-.
   .'    .'  __  '.    '.
  /     /  .'oo'.  \     \
 ;     |  /_____)   |     ;
 |     |   / / /    |     |
 ;     |  /_/ /__   |     ;
  \     \    '--'  /     /
   '.    '._    _.'    .'
     '-.     '''     .-'
        '-.______.-'</pre>
</section>

Mini Krill is designed for people who want a practical personal agent without starting with API keys. The first-class path is local Ollama. Subscription-backed Codex and Claude Code support delegates authentication to the official CLIs, so Mini Krill does not store provider OAuth tokens.

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
| Codex | Coding and repo-aware work | `codex login` via ChatGPT subscription; supports current CLI models such as `gpt-5.5` |
| Claude Code | Coding, analysis, and terminal workflows | `claude auth login` via Claude subscription; supports `opus`, `sonnet`, and `haiku` aliases |

Inside chat:

```text
/models
/use local
/use codex
/use claude
/auth codex
/auth claude
```

## Documentation

| Guide | Covers |
|---|---|
| Install and setup | Mandatory provider choice, optional integrations, Windows/macOS/Linux setup |
| Provider switching | Ollama, Codex CLI, Claude Code, and chat switching commands |
| Memory and preferences | What Mini Krill stores locally and how preferences follow provider switches |
| Interfaces | Pure CLI, Telegram bot, and Discord bot setup |
| Testing checklist | Commands to verify install, providers, memory, and builds |
| Troubleshooting | PATH, Ollama, Codex login, Claude login, and memory checks |

The full docs live in the Mini Krill GitHub repo under `docs/`.

## What It Is Being Built To Do

- Keep a unified conversation memory across terminal chat, TUI, Telegram, and Discord.
- Run privately with Ollama by default.
- Switch providers inside chat without editing config files.
- Support reminders with durable scheduling and notifications.
- Read and summarize email through explicit user-connected mail providers.
- Stay transparent: plan first, ask approval, then act.

## Privacy Model

Mini Krill stores memory locally under `~/.mini-krill`. With Ollama, prompts stay on your machine. With Codex or Claude Code, prompts go through the official provider CLI selected by the user. No telemetry is planned.

## Current Status

Mini Krill is being hardened toward a production-ready open-source release. Until the first stable tag, treat it as an alpha project and review provider behavior before using it on sensitive workflows.

<p>
  <a class="btn btn-primary" href="https://github.com/srvsngh99/mini-krill" target="_blank" rel="noreferrer">Open GitHub repo</a>
</p>

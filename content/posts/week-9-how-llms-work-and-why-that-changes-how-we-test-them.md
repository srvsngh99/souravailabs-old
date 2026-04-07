---
title: "Week 9: How LLMs Work, and Why That Changes How We Test Them"
date: 2026-03-04
draft: false
description: "Tokens, temperature, training vs inference. The conceptual foundations that change how you write test assertions for AI systems."
tags: ["52-weeks", "llm", "tokens", "temperature", "genai-testing"]
series: ["52 Weeks of GenAI Testing"]
week_number: 9
---

<div class="week-post-meta">
<span class="week-post-badge active">Week 9 of 52</span>
<span>Phase 1: LLM Fundamentals</span>
<span>Status: In Progress</span>
</div>

Phase 1 starts here. Eight weeks of Python and testing tooling, now applied to the thing I actually care about: understanding how language models work from the ground up, so I can test them properly.

Week 9 is conceptual. No framework, no API. Just building a solid mental model of what an LLM actually does when it generates text.

## What I Built

**[llm-concepts-notebook](https://github.com/srvsngh99/genai-testing-journey/tree/main/week9/mini_project)** - two reusable utilities:

- `simulator.py` - a token generation simulator with temperature control
- `analyzer.py` - a prompt analyzer that estimates token counts and context window usage

Both are implemented from first principles, not by calling an API. The goal was to understand the mechanics before using the tools.

## The Honest Takeaway

Temperature is not randomness. It is controlled probability.

When an LLM generates the next token, it produces a probability distribution over its vocabulary. Temperature scales that distribution. At temperature 0, the highest-probability token is always chosen. At temperature 1, sampling follows the raw distribution. At temperature 2, low-probability tokens get boosted.

Why does this matter for testing? Because it changes what kind of assertions make sense.

At temperature 0, you can write deterministic assertions: same prompt, same output, every time. At temperature above 0, you need property-based assertions: "this output contains the city name" rather than "this output equals 'Paris'."

Most teams writing AI tests do not think about this. They write `assert response == expected_output` and then wonder why tests are flaky. They are flaky because the system is probabilistic by design.

Understanding temperature is understanding why AI testing requires a different mindset - not weaker assertions, different ones.

## What's Next

Week 10: Transformers and attention mechanisms. Going deeper into how the model actually processes input.

---

[View on GitHub](https://github.com/srvsngh99/genai-testing-journey/tree/main/week9) | [Full Journey](/journey/)

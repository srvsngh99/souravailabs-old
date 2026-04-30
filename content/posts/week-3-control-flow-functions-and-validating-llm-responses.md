---
title: "Week 3: Control Flow, Functions, and Validating LLM Responses"
date: 2026-01-21
draft: false
description: "Building a validation library for LLM outputs. Deterministic checks for non-deterministic systems."
tags: ["52-weeks", "python", "llm-testing", "validation", "genai-testing"]
series: ["52 Weeks of GenAI Testing"]
week_number: 3
---

<div class="week-post-meta">
<span class="week-post-badge">Week 3 of 52</span>
<span>Phase 0: Foundation</span>
<span>Status: Complete</span>
</div>

Week 3 was where things started connecting to the actual problem I care about. Control flow and functions are foundational Python - but the mini-project applied them directly to LLM output validation.

## What I Built

**[llm-response-validator](https://github.com/srvsngh99/genai-testing-journey/tree/main/week3/mini_project)** - a validation library with five functions:

- `validate_not_empty` - the first thing you check
- `validate_max_length` - LLMs can ramble
- `validate_contains_keywords` - test for required content
- `validate_json_format` - structured output validation
- `validate_no_pii` - safety and compliance checks

Five functions. All deterministic. All testable.

## The Honest Takeaway

You cannot write a single assertion that says "the LLM output is correct." The output is probabilistic. But you can write many assertions that say "this output satisfies these constraints." That is the shift in mindset.

Traditional testing: did the function return the expected value?
AI testing: does the output satisfy a set of verifiable properties?

The validators in this week are simple, but the pattern scales. By week 22 (LLM-as-Judge), the same thinking applies - you are just using another model to do the evaluation instead of a regex.

## What's Next

Week 4: Modules and packages. Turning scripts into software.

---

[View on GitHub](https://github.com/srvsngh99/genai-testing-journey/tree/main/week3) | [Full Journey](/journey/)

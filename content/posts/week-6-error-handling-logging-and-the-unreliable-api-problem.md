---
title: "Week 6: Error Handling, Logging, and the Unreliable API Problem"
date: 2026-02-11
draft: false
description: "Building a robust API caller with retry logic and exponential backoff. LLM APIs fail more than you expect."
tags: ["52-weeks", "python", "error-handling", "logging", "api-testing", "genai-testing"]
series: ["52 Weeks of GenAI Testing"]
week_number: 6
---

<div class="week-post-meta">
<span class="week-post-badge">Week 6 of 52</span>
<span>Phase 0: Foundation</span>
<span>Status: Complete</span>
</div>

Week 6 was about building software that fails gracefully. The topic: `try/except/finally`, custom exceptions, and the Python logging module.

The mini-project made the stakes concrete. LLM APIs are not like database queries. They time out. They rate limit. They return partial responses. They fail in ways your happy-path tests will never catch.

## What I Built

**[robust-api-caller](https://github.com/srvsngh99/genai-testing-journey/tree/main/week6/mini_project)** - a production-minded API client with:

- Retry logic with exponential backoff
- Custom exception hierarchy (`APIError`, `RateLimitError`, `TimeoutError`)
- Structured logging at all failure points
- Rate limit awareness before it becomes an error

```
robust-api-caller/
├── core/
│   ├── api_client.py
│   ├── exceptions.py
│   └── logger_config.py
└── main.py
```

## The Honest Takeaway

A QA engineer writing test automation that calls LLM APIs without retry logic will see intermittent failures and not know why. The test did not fail. The API did. And without logging, that distinction is invisible.

Two patterns from this week that carry through the entire journey:

**Custom exception hierarchy:** catch specific errors, not everything.
```python
except RateLimitError:
    time.sleep(backoff)
    retry()
except APIError as e:
    logger.error(f"Non-retryable: {e}")
    raise
```

**Structured logging:** log inputs, outputs, durations, and error contexts. When something goes wrong in a 52-week eval run at week 40, you will be glad you logged properly in week 6.

## What's Next

Week 7: pytest fundamentals. Time to write real tests for the code we have been building.

---

[View on GitHub](https://github.com/srvsngh99/genai-testing-journey/tree/main/week6) | [Full Journey](/journey/)

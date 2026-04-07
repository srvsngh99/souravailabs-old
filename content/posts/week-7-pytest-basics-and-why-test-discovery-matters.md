---
title: "Week 7: pytest Basics and Why Test Discovery Matters"
date: 2026-02-18
draft: false
description: "Learning pytest from scratch and applying it to six weeks of accumulated code. Good test naming is documentation."
tags: ["52-weeks", "pytest", "testing", "genai-testing"]
series: ["52 Weeks of GenAI Testing"]
week_number: 7
---

<div class="week-post-meta">
<span class="week-post-badge">Week 7 of 52</span>
<span>Phase 0: Foundation</span>
<span>Status: Complete</span>
</div>

Week 7 was the first explicitly testing-focused week of the journey. After six weeks of building Python tooling, it was time to write proper tests for it.

The topic: pytest fundamentals. Installation, naming conventions, assertions, test discovery, organization.

## What I Built

**[test-suite-basics](https://github.com/srvsngh99/genai-testing-journey/tree/main/week7/mini_project)** - a test suite covering the validators, formatters, and loaders built in weeks 1 through 5.

```
test-suite-basics/
├── tests/
│   ├── test_validators.py
│   ├── test_formatters.py
│   └── test_loaders.py
└── pytest.ini
```

## The Honest Takeaway

Test discovery is not magic. pytest finds tests by looking for files matching `test_*.py` or `*_test.py`, then functions starting with `test_`. That is the full rule.

Why does this matter? Because if your test file is called `validation_tests.py`, pytest will not find it. If your function is called `check_empty_response`, pytest will not run it. You will see zero failures and think you are good. You are not.

Good test naming is also documentation. A test named `test_validate_not_empty_returns_false_for_whitespace_only_string` tells the next person (or future you) exactly what the code is supposed to do, without reading the implementation.

Coming from 10 years of QA, this was familiar territory. But writing it in Python with pytest instead of a test management tool felt different in a good way - closer to the code, harder to ignore.

## What's Next

Week 8: pytest advanced. Fixtures, parametrization, conftest.py. The tools that make test suites scale.

---

[View on GitHub](https://github.com/srvsngh99/genai-testing-journey/tree/main/week7) | [Full Journey](/journey/)

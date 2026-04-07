---
title: "Week 8: Fixtures, Parametrization, and Testing at Scale"
date: 2026-02-25
draft: false
description: "pytest advanced: fixtures, scopes, parametrization, conftest.py. The tools that make AI evaluation test suites actually work."
tags: ["52-weeks", "pytest", "fixtures", "parametrization", "genai-testing"]
series: ["52 Weeks of GenAI Testing"]
week_number: 8
---

<div class="week-post-meta">
<span class="week-post-badge">Week 8 of 52</span>
<span>Phase 0: Foundation</span>
<span>Status: Complete</span>
</div>

Week 8 completed the Foundation phase. The topic: pytest advanced features. Fixtures, fixture scopes, parametrization, `conftest.py`, and markers.

This is the week where writing tests stops being tedious and starts being powerful.

## What I Built

**[parametrized-test-suite](https://github.com/srvsngh99/genai-testing-journey/tree/main/week8/mini_project)** - a test suite demonstrating the advanced pytest patterns.

```
parametrized-test-suite/
├── tests/
│   ├── conftest.py         (shared fixtures)
│   ├── test_evaluation.py  (LLM output evaluation tests)
│   └── test_performance.py (latency and throughput tests)
└── pytest.ini
```

## The Honest Takeaway

Parametrization is how QA thinking scales in code.

```python
@pytest.mark.parametrize("input,expected", [
    ("What is 2+2?", "4"),
    ("Capital of France?", "Paris"),
    ("", None),  # edge case: empty input
])
def test_llm_response_quality(input, expected, llm_client):
    response = llm_client.complete(input)
    assert validate_response(response, expected)
```

Write the test once. Run it against any number of input/output pairs. Add new test cases by adding rows to the parameter list, not new functions.

For AI evaluation specifically, this is essential. An eval suite for an LLM feature might need to test 100 different input scenarios. Parametrization means that is 1 test function and 100 data rows, not 100 functions.

`conftest.py` is where shared fixtures live. The LLM client, test dataset loader, mock responses. Anything used across multiple test files goes here.

Phase 0 is done. Eight weeks of Python and testing fundamentals. Now the AI-specific work begins.

## What's Next

Week 9: How LLMs work. Tokens, temperature, training vs inference. You cannot test something you do not understand.

---

[View on GitHub](https://github.com/srvsngh99/genai-testing-journey/tree/main/week8) | [Full Journey](/journey/)

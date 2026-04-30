---
title: "Week 2: Data Structures and the List-of-Dicts Pattern"
date: 2026-01-14
draft: false
description: "Learning Python data structures by building a test case manager. The list-of-dicts pattern shows up everywhere in AI testing."
tags: ["52-weeks", "python", "data-structures", "genai-testing"]
series: ["52 Weeks of GenAI Testing"]
week_number: 2
---

<div class="week-post-meta">
<span class="week-post-badge">Week 2 of 52</span>
<span>Phase 0: Foundation</span>
<span>Status: Complete</span>
</div>

Week 2 was data structures: lists, dicts, sets, tuples. The goal was not to memorize syntax but to understand which container to reach for and when.

The mini-project made this concrete.

## What I Built

**[test-data-organizer](https://github.com/srvsngh99/genai-testing-journey/tree/main/week2/mini_project)** - a single-file test case manager that stores, filters, and retrieves test cases in memory.

No database. No files. Just a Python process holding state in RAM while it runs.

## The Honest Takeaway

The list-of-dicts pattern:

```python
test_cases_db = []

new_case = {
    "id": "TC001",
    "status": "passed",
    "input": "What is the capital of France?",
    "expected": "Paris"
}

test_cases_db.append(new_case)
```

This pattern feels trivial until you realize it is how most AI evaluation datasets are structured before they reach a proper framework. A list of records, each record a dict with input, expected output, and metadata. When you start using DeepEval or RAGAS later, you are still doing this - just with more tooling around it.

Understanding this early means the later abstractions make sense instead of feeling like magic.

## What's Next

Week 3: Control flow, functions, and building an LLM response validator.

---

[View on GitHub](https://github.com/srvsngh99/genai-testing-journey/tree/main/week2) | [Full Journey](/journey/)

---
title: "Week 1: Python Basics, Prompt Templates, and a Debugging Rabbit Hole"
date: 2026-01-07
draft: false
description: "Starting from zero Python to building a reusable prompt template engine in one week. Including one hour lost to PYTHONPATH."
tags: ["52-weeks", "python", "prompt-engineering", "genai-testing"]
series: ["52 Weeks of GenAI Testing"]
week_number: 1
---

<div class="week-post-meta">
<span class="week-post-badge">Week 1 of 52</span>
<span>Phase 0: Foundation</span>
<span>Status: Complete</span>
</div>

The first week was about proving something simple: that a QA engineer with 10 years of experience but minimal Python could get moving fast when the goal was concrete.

The goal for week 1 was to master Python string manipulation and build `prompt-formatter`, a reusable prompt template engine.

## What I Built

**[prompt-formatter](https://github.com/srvsngh99/genai-testing-journey/tree/main/week1/mini_project)** - a Python package for LLM prompt template handling.

It does four things:
- Template creation with variable substitution
- Input validation (empty checks, length limits, keyword blocking)
- Response cleaning utilities
- Helper functions for token estimation and list formatting

It ships as a proper package with `__init__.py`, tests, and examples. Not a script. A package.

## The Honest Takeaway

I lost an hour to this:

```
ModuleNotFoundError: No module named 'prompt_formatter'
```

Root cause: Python's module search path did not include my package directory. Three ways to fix it, and the simplest one I found last: just run `pytest` instead of `python3`. pytest adds the current directory to the path automatically.

That kind of thing sticks. I will not forget how Python imports work now.

The other thing I learned: week 1's mini-project required concepts from weeks 3 and 4. Functions, classes, `__init__.py`, `**kwargs`. The roadmap is honest about this - week 1 goes deeper than the syllabus says, because building something real always does.

## What's Next

Week 2: Data structures. Lists, dicts, sets. Building a test case manager that stores data in memory.

---

[View on GitHub](https://github.com/srvsngh99/genai-testing-journey/tree/main/week1) | [Full Journey](/journey/)

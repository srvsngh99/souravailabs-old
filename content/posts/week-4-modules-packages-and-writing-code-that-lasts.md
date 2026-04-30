---
title: "Week 4: Modules, Packages, and Writing Code That Lasts"
date: 2026-01-28
draft: false
description: "The week Python scripting became Python engineering. Building a reusable test utilities package from scratch."
tags: ["52-weeks", "python", "modules", "packages", "genai-testing"]
series: ["52 Weeks of GenAI Testing"]
week_number: 4
---

<div class="week-post-meta">
<span class="week-post-badge">Week 4 of 52</span>
<span>Phase 0: Foundation</span>
<span>Status: Complete</span>
</div>

Week 4 is when things started feeling like real engineering rather than learning exercises.

The topic was modules, packages, and virtual environments. The skill: structuring code so other code can use it.

## What I Built

**[llm-test-utils](https://github.com/srvsngh99/genai-testing-journey/tree/main/week4/mini_project)** - the first proper Python package of the journey.

```
llm_test_utils/
├── __init__.py
├── validators.py    (from week 3)
├── formatters.py    (from week 1)
├── test_cases.py    (from week 2)
└── helpers.py
```

It has a `setup.py`. You can `pip install -e .` it. The work from weeks 1 through 3 now lives in one importable package instead of three separate script folders.

## The Honest Takeaway

The difference between a script and a library is not complexity. It is intent and structure.

A script does something when you run it. A library gives other code capabilities. `__init__.py` is the boundary that makes this real - it tells Python: this directory is a module, not just a folder.

This week also introduced `setup.py` and editable installs. Running `pip install -e .` means the package code stays editable but behaves as if it is installed. That is how you develop and test simultaneously without constant reinstalling.

The capstone project (LLMTestKit on PyPI in week 52) starts here conceptually.

## What's Next

Week 5: File handling and JSON. Working with datasets, text files, and the JSONL format that AI systems run on.

---

[View on GitHub](https://github.com/srvsngh99/genai-testing-journey/tree/main/week4) | [Full Journey](/journey/)

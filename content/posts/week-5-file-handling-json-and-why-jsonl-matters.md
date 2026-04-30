---
title: "Week 5: File Handling, JSON, and Why JSONL Is the Format for AI Testing"
date: 2026-02-04
draft: false
description: "Reading and writing files, JSON serialization, and the JSONL format that underpins most AI evaluation datasets."
tags: ["52-weeks", "python", "json", "datasets", "genai-testing"]
series: ["52 Weeks of GenAI Testing"]
week_number: 5
---

<div class="week-post-meta">
<span class="week-post-badge">Week 5 of 52</span>
<span>Phase 0: Foundation</span>
<span>Status: Complete</span>
</div>

Week 5 was practical infrastructure: reading and writing files, JSON serialization, pathlib for modern path handling, and JSONL for large datasets.

Sounds dry. It is not. If you test AI systems, you live in JSONL.

## What I Built

**[dataset-loader](https://github.com/srvsngh99/genai-testing-journey/tree/main/week5/mini_project)** - a dataset manager with two components:

- `dataset_loader.py` - reads `.json` and `.jsonl` files, provides iteration and filtering
- `schema_validator.py` - validates dataset entries against a defined schema

Sample datasets included for both formats.

## The Honest Takeaway

JSONL (JSON Lines) is one object per line. No outer array. Each line is independently parseable.

```jsonl
{"id": "001", "input": "What is 2+2?", "expected": "4", "category": "math"}
{"id": "002", "input": "Summarize this in one sentence.", "expected": "...", "category": "summarization"}
```

Why does this matter for AI testing? Three reasons:

1. **Streaming.** You can read a 100k-record eval dataset line by line without loading it all into memory.
2. **Debugging.** When a test fails, you find the exact line. No nested array traversal.
3. **Tooling compatibility.** OpenAI fine-tuning, RAGAS, DeepEval, Langfuse - they all use JSONL. Learn it once, use it everywhere.

Building the loader in week 5 meant later, when eval frameworks expected this format, I already understood it from the ground up.

## What's Next

Week 6: Error handling and logging. LLM APIs fail. Building code that handles it gracefully.

---

[View on GitHub](https://github.com/srvsngh99/genai-testing-journey/tree/main/week5) | [Full Journey](/journey/)

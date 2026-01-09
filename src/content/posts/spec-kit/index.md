---
title: 'Spec Kit: Spec-driven development for AI-assisted coding'
published: 2026-01-09
draft: true
description: 'A mock blog entry on GitHub’s Spec Kit and how it changes the way I work with coding agents.'
tags: ['ai', 'workflow', 'specs', 'productivity']
---

I’ve been watching the “AI coding agent” space explode: faster scaffolds, faster refactors, faster everything. The downside is also obvious: when you move fast, you can end up with a pile of code that *kind of* works but doesn’t match what you actually meant.

That’s why GitHub’s **Spec Kit** caught my eye.

Quick note: I haven’t personally tried Spec Kit yet — these are my notes based on what I’m hearing (and what I watched a coworker do with it).

Spec Kit is an open source toolkit that pushes you toward *spec-driven development*: write down what you want, why you want it, and the constraints you care about — and then let an agent implement from that spec instead of guessing from a vague prompt.

Repo: https://github.com/github/spec-kit  
Docs: https://github.github.io/spec-kit/

## The moment it clicked for me

A coworker of mine used Spec Kit on **[PROJECT NAME]** and the “shape” of the work looked different right away:

- Less back-and-forth about what we meant
- Fewer surprise abstractions
- More predictable output across multiple agent runs

The punchline: when the intent is captured in a spec, the agent doesn’t have to invent it.

## The Spec Kit workflow (high level)

Spec Kit’s “happy path” looks like:

1. Establish your project principles (“constitution”)
2. Describe what you want to build (the spec)
3. Convert it into a technical plan (stack + architecture)
4. Break the plan into tasks
5. Implement the tasks

If you’ve used agents before, you’ll recognize the steps — the difference is Spec Kit makes them explicit and repeatable.

## A concrete example (mocked)

Here’s the kind of prompt sequence that makes Spec Kit feel powerful. You don’t start with “write me code”. You start with constraints and outcomes.

### 1) Create a constitution

This is the part most teams skip, and it’s the part that saves you later.

Example:

```text
/speckit.constitution
Create principles focused on: readable code, tests for critical paths, predictable UX, and performance budgets.
```

What I’d put in here (for my own projects):

- Prefer boring solutions over clever ones
- Tests for core flows before shipping
- Small PRs, no huge rewrites
- Explicit error handling and observability

### 2) Specify the feature (the “what” and “why”)

Example:

```text
/speckit.specify
Build a feature that lets users share a read-only link to a board. The link expires after 7 days. Viewers cannot see private boards. Include analytics for link creation and link visits.
```

This is where you define outcomes, boundaries, and edge cases. If you do it here, you don’t have to fight the agent later.

### 3) Provide a technical plan (the “how”)

Example:

```text
/speckit.plan
Use Postgres for storage. Use server-rendered pages for the share view. Use signed URLs with an expiry claim. Track events via our existing analytics client.
```

### 4) Generate tasks, then implement

Example:

```text
/speckit.tasks
/speckit.implement
```

Now the agent is implementing against your constraints, not improvising them.

## What I like about Spec Kit

- **It turns “agent prompting” into an artifact.** The spec and plan become part of the project’s memory.
- **It reduces drift.** If you rerun the agent later, you’re not starting from scratch.
- **It makes reviews easier.** You can review intent (spec) separately from execution (implementation).

## Where it might not fit

I don’t think Spec Kit is necessary for every change. If I’m renaming a variable or tweaking CSS, I don’t need a constitution and a task list.

But for:

- New features
- Cross-cutting refactors
- Anything that spans backend + frontend
- Anything where requirements are “obvious in someone’s head” but not written down

…this is exactly the kind of structure that keeps an agent from going off the rails.

## If you want to try it

From the Spec Kit README, you can install the `specify` CLI with `uv`:

```bash
uv tool install specify-cli --from git+https://github.com/github/spec-kit.git
```

Then initialize a project and pick an agent:

```bash
specify init . --ai codex
```

(That `--ai codex` bit is particularly nice: Spec Kit explicitly supports multiple agents, so you can keep your workflow consistent even if the tools change.)

## Closing thought

My coworker’s use of Spec Kit made something really clear: the bottleneck isn’t writing code anymore — it’s *capturing intent*.

Spec Kit is a good forcing function for that. And if you’re already building with agents, it’s one of the most practical ways I’ve seen to get “speed” without losing “clarity”.

---

Notes to self before publishing:

- Replace placeholders: `[PROJECT NAME]`, add a short real story, add 1–2 screenshots or links to the coworker’s PRs.
- Decide whether to keep this as a “workflow” post or turn it into a step-by-step tutorial.

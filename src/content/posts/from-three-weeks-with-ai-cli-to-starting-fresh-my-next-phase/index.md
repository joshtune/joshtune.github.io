---
title: 'From Three Weeks with AI CLI → Starting Fresh: My Next Phase'
published: 2025-10-20
draft: false
slug: from-three-weeks-with-ai-cli-to-starting-fresh-my-next-phase
tags: ['ai', 'workflow']
---

It’s been a useful ride. In my previous post, I shared how I’d spent about three weeks using AI CLI tools (mainly Claude CLI and APEX) and learned some key lessons: slow the AI down so it outlines its approach before coding, write unit tests to keep us honest, track everything (plans, preferences, patterns) to keep consistency, and push back when the AI over-abstracts. ([joshtune.com][1])
Now I’m gearing up for the next step — **a fresh start**, built _slice by slice_ instead of “let’s just go”. Here’s how the next phase is shaping up:

## 1. Slice by slice, not monolithic

Rather than try to build the whole app in one go (which got me into an unstable state), I’m going to pick a well-defined slice (for example: user management with roles, permissions, sign-up flows). I’ll document the slice’s boundaries, desired features, flows, and edge cases _before_ asking the AI to code.
This gives clarity, reduces scope creep, and keeps the AI aligned with _exactly_ what I need.

## 2. The AI writes the rubric first

I’ve found that when I ask the AI to draft a rubric or outline best-practice approach (what patterns to use, what pitfalls to avoid, what architecture fits this slice) — and _then_ ask for code — the output is dramatically better.
It means the AI does a kind of research-and-plan step, I review and refine, and then we build. In effect I’m using the AI as a co-designer/research-assistant, not just a code-machine.

## 3. Reinforce the tracking habit

I’ll continue maintaining the “living document” of preferences: naming conventions, tech stack decisions, architecture patterns, things I like / dislike. But this time it will be tied to _each slice_. For example: “For user-management slice: use role-based access, no heavy abstraction, simple REST endpoints, unit tests for each endpoint.”
This keeps context clean, consistent, and easier to manage as the app grows.

## 4. Stay in the driver’s seat

The core insight hasn’t changed: the AI is powerful, but it’s _not_ autopilot. It’s a conversation partner. I set expectations, define the boundaries, review the plan, and approve what moves forward. Holding the reins = better results.

## What I hope to achieve

- A more stable, maintainable app architecture
- Faster iteration because each slice is small and bounded
- Higher code quality via upfront planning + research
- More predictable outcomes instead of “AI went off in a random direction”

Thanks for reading — if you’re using AI CLI tools too (or thinking of it), I hope these next-phase lessons help. I’ll share updates as I scoop through the slices and we’ll see how it goes.

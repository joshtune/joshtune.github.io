---
title: 'The Next Phase Didn’t Become a New Project — It Became lehi31.com'
published: 2026-01-05
draft: false
slug: the-next-phase-didnt-become-a-new-project
tags:
  [
    'ai',
    'workflow',
    'shipping',
    'real-world',
    'product-development',
    'building-in-public',
  ]
coverImage:
  src: './cover.png'
  alt: ''
---

In my last post, [_From Three Weeks with AI CLI to Starting Fresh: My Next Phase_](/posts/from-three-weeks-with-ai-cli-to-starting-fresh-my-next-phase), I talked about stepping back, resetting expectations, and moving toward a more deliberate, slice-by-slice way of working with AI tools.

I expected that “next phase” to start with a brand-new project.

That didn’t happen.

Instead, I went deep on **lehi31.com** — a real site, with real users, real constraints, and zero tolerance for breaking things just to experiment.

And honestly? That turned out to be the more important next step.

## The Reality: Shipping Instead of Starting

Rather than spinning up something new, I spent the last stretch doing unglamorous but meaningful work:

- polishing existing features
- hardening permissions and auth
- fixing edge cases users actually hit
- improving navigation, layout, and admin UX
- turning half-finished ideas into complete, survivable features

None of this fits neatly into a “new project” announcement — but all of it made the product better.

## What Actually Shipped

### Recurring Events Became a Real Feature

Recurring events moved from “mostly works” to _intentionally designed_:

- planned and refactored repeat logic
- migrations for excluded dates
- safer update and delete behavior
- protections against accidental deletes
- collapsing and grouping events by week/month
- clone-to-past-events flows
- unit tests around deletion edge cases

This wasn’t flashy, but it was foundational. The calendar is now something you can trust.

### Permissions and Roles Grew Up

A big chunk of work went into pulling permissions **out of ad-hoc app logic and into the database**, where they belong:

- backend migrations for roles
- RLS fixes
- UI updates to reflect real permission state
- removing feature flags that were no longer serving a purpose

That shift alone made the admin surface calmer and more predictable — fewer “why can I see this?” moments.

### Auth and User Management Became Operable

This is the kind of work you only appreciate once users rely on your app:

- session expiry logout handling
- admin/manage users UI
- password reset without third-party gymnastics
- email verification fixes and tests
- switching from SendGrid to Resend to simplify email flows
- fixing permission caching issues between DB and local state

None of this is exciting in isolation. Together, it makes the site _run_.

### Navigation and Layout Got the Attention It Needed

I also spent time on things that don’t show up in commit stats but absolutely show up in daily use:

- navigation hierarchy cleanup
- clearer page separation (lesson schedules, assignments, etc.)
- mobile breakpoints that actually work
- more fluid desktop layouts
- max-width constraints that make content readable

The site feels less like a collection of pages and more like a coherent tool now.

### Challenges, Goals, and the “Actual Product Surface”

Features like goals, temple tracking, and the BOM reading challenge evolved rapidly:

- filtering to show only relevant/current items
- archive and delete safety rules
- root-only destructive actions
- anonymous posting fixes
- iterating on what deserved its own page vs living on the home view

Some things were added. Some were simplified. One page was removed entirely.

That’s real product work: learning what sticks and cutting what doesn’t.

## What This Taught Me About AI-Assisted Development

This phase still validated the ideas from my last post — just in a different way than I expected.

- **Slice-by-slice still works**, but the slices weren’t new features — they were production hardening tasks.
- AI helped most with **small, bounded changes**, reasoning through edge cases, and keeping momentum during boring work.
- The win wasn’t “look how much code I generated.”
  The win was _shipping safely, repeatedly, without burning out or breaking users_.

In other words: the tooling mattered less than the discipline.

## What’s Next

Because of this work, lehi31.com is now in a place where:

- new features are easier to add
- permissions are predictable
- auth flows don’t require fear
- UI changes don’t cascade into chaos

That’s a better foundation than any half-finished new project would’ve been.

When I do start something fresh again, it’ll be because there’s a **clear slice worth building**, not just because it feels like the “next thing” I should do.

If the last post was about **resetting expectations**, this one is about **accepting reality**:

Sometimes the next phase isn’t starting over.
Sometimes it’s finishing what actually matters.

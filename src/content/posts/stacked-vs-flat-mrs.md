---
title: 'Stacked vs. Flat MRs: My Simple Rule'
published: 2025-08-25
updated: 2025-08-26
draft: false
description: 'Keep parts independent; stack only when order matters.'
slug: stacked-vs-flat-mrs
tags: ['workflow', 'git', 'opinion']
---

I use two modes. First, I build pieces that stand alone. Then, I connect those pieces. When I’m building things that don’t depend on each other—like a data grid, the form fields, and the full form—I don’t stack Merge Requests, MRs . Each one gets its own branch and its own review. This keeps the work small, easy to test, and easy to ship in any order. No waiting. No messy rebases.

Once the parts exist, I switch to stacked MRs to wire them up in a clear order. I stack because each step depends on the last, and I want reviewers to follow a simple story. For our grid + form flow, my stack looks like this:

- MR 1: Add the grid to the page. Show rows, paging/sort, empty state. No form yet.
- MR 2: Add the drawer. Clicking “Create” or a row opens the drawer. The drawer is empty but proves the flow.
- MR 3: Put the form in the drawer + actions. Load data, validate, save, show toasts, refresh the grid.

This split keeps the build phase fast (flat MRs for grid, fields, and form) and the connect phase clear (stacked MRs for page → drawer → form wiring).

> If work can land in any order, keep it flat. If it must land in a specific order, stack it. Small steps, plain titles, demo each step.

What do you think? Let me know your thoughts in the comments.

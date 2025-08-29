---
title: 'Stacked Merge Requests on GitLab with CLI Tools'
published: 2025-08-28
draft: false
slug: stacked-merge-requests-gitlab-cli-tools
description: 'A hands-on guide to creating and maintaining stacked GitLab merge requests using CLI tools like git-spice, git-town, and glab/push options'
tags: ['workflow', 'git', 'gitlab', 'cli', 'tools', 'research']
---

## Summary (Highlights)

- **git-spice** → The most automated option; one command (`gs stack submit --fill`) creates the whole MR stack and keeps downstream branches updated automatically when a parent changes.
- **git-town** → Great if you already use Git-Town; build stacks with `append`, then keep everything in sync with `git town sync --stack` and open/update MRs with `git town propose --stack`.
- **glab / Git push options** → The native but manual route; you create each MR targeting its parent branch and rebase + force-push children when a parent changes.
- **Key takeaway** → If you want _automation_, use **git-spice**; if you want _structure with flexibility_, use **git-town**; if you want _bare-metal control without extra tools_, stick with **glab/push options**.

## Warning

I have not tested these tools in production. Use at your own risk.

## Lets Get Started

Stacking merge requests (MRs) is a powerful way to manage dependent changes. Instead of waiting for one MR to merge before opening the next, you can build a **chain of branches**, each with its own MR. This improves review flow and keeps changes focused.

In this post, we’ll look at how to create a stack of **four MRs off `main`** with different CLI workflows, and how to **update the entire tree if one MR changes**.

---

## The Example Stack

We’ll create this structure:

```

main → mr-1 → mr-2 → mr-3 → mr-4

```

Each tool section shows:

1. How to create the four stacked branches and open MRs.
2. How to propagate changes when one MR is updated.

---

## A) git-spice (purpose-built for stacked MRs)

[git-spice](https://abhinav.github.io/git-spice/) is designed for stacking and works with **GitHub and GitLab**. It can create, update, and restack MRs automatically.

### 1. Create branches & submit stacked MRs

```bash
# start from main
git checkout main
git pull

git checkout -b mr-1
# …changes & commit…

git checkout -b mr-2
# …changes & commit…

git checkout -b mr-3
# …changes & commit…

git checkout -b mr-4
# …changes & commit…

# submit the entire stack as MRs
gs stack submit --fill
```

`--fill` auto-populates MR titles/bodies from commits. Use `--draft` if you want them as drafts.

### 2. Propagate an update

Suppose `mr-2` gets new commits or an amend:

```bash
git checkout mr-2
# …make changes & commit…
gs branch submit --fill
```

git-spice automatically **rebases downstream branches (`mr-3`, `mr-4`)** and updates their MRs.

---

## B) git-town (branch workflow enhancer)

[git-town](https://www.git-town.com/) extends Git with high-level commands. It manages parent/child branch relationships and supports GitLab MRs.

### 1. Create branches & open stacked MRs

```bash
git checkout main
git pull

git town hack mr-1
# …changes & commit…

git town append mr-2   # child of mr-1
# …changes & commit…

git town append mr-3   # child of mr-2
# …changes & commit…

git town append mr-4   # child of mr-3
# …changes & commit…

# push and open MR pages for all branches
git town propose --stack
```

### 2. Propagate an update

If `mr-2` changes:

```bash
git checkout mr-2
# …amend/commit…

git town sync --stack
git town propose --stack
```

`sync --stack` rebases all children (`mr-3`, `mr-4`) onto the updated branch and re-pushes them.

---

## C) GitLab-native (glab / push options)

If you don’t want external tools, you can use [glab](https://gitlab.com/gitlab-org/cli) or Git push options. This is more manual, but it’s native.

### 1. Create branches & stacked MRs with `glab`

```bash
git checkout main
git pull

git checkout -b mr-1
# …changes & commit…
glab mr create --source-branch mr-1 --target-branch main --fill

git checkout -b mr-2
# …changes & commit…
glab mr create --source-branch mr-2 --target-branch mr-1 --fill

git checkout -b mr-3
# …changes & commit…
glab mr create --source-branch mr-3 --target-branch mr-2 --fill

git checkout -b mr-4
# …changes & commit…
glab mr create --source-branch mr-4 --target-branch mr-3 --fill
```

Each MR’s target branch is its parent, creating the stack.

### Alternative: Git push options

```bash
git push -o merge_request.create \
         -o merge_request.target=mr-1 \
         -u origin mr-2
```

Repeat for each branch, pointing `merge_request.target` at the parent.

### 2. Propagate an update

If `mr-2` changes:

```bash
git checkout mr-3
git rebase mr-2
git push -f
glab mr update --fill

git checkout mr-4
git rebase mr-3
git push -f
glab mr update --fill
```

Here, you manually rebase each child branch and update its MR.

---

## Summary

- **git-spice** → Automates MR creation and restacking; best if you want minimal manual work.
- **git-town** → Semi-automated; great if you already use Git-Town for branch management.
- **glab / push options** → Fully manual but official; good if you prefer no extra dependencies.

In all cases, the **key idea** is the same:

1. Branch each feature off the previous one.
2. Target each MR at its parent branch.
3. When a parent changes, rebase children and update their MRs.

Stacking MRs can feel like overhead at first, but with the right tooling, it keeps reviews smaller, clearer, and easier to merge.

What is your favorite git workflow? What are your opinions when it comes to stacking MRs? Let me know in the comments!

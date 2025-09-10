---
title: 'Setting Up Your Environment on a MacBook Pro'
published: 2025-09-11
draft: true
slug: setting-up-vector-database-on-macbook-pro
description: 'A practical dev environment for working with vector databases and AI.'
tags: ['vector-database', 'ai', 'macos']
---

## Why the MacBook Pro?

I’ve written production code on Linux servers, Windows desktops, and cloud IDEs, but when I’m setting up a local dev environment for AI work, macOS hits a sweet spot:

- Unix-like terminal (bash/zsh) without the overhead of managing a VM.
- Homebrew makes installing dependencies painless.
- Docker runs reliably (on Apple Silicon, it’s finally smooth).
- Hardware is solid enough to run a local vector database without choking.

If you’re already on a MacBook Pro, you’re in a great place to follow along.

## Step 1: Core Tooling

We’ll need a few building blocks:

1. **Homebrew** – the package manager.

   ```bash
   /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
   ```

   Why? Because it keeps dependencies tidy and avoids the “download random DMG files from the internet” trap.

2. **Node.js** – for scripting and front-end work.
   I recommend using **Volta** or **nvm** for version management.

   ```bash
   brew install volta
   volta install node@20
   ```

   Why? Because you _will_ run into different Node versions across projects, and Volta makes switching invisible.

3. **Docker Desktop** – for running vector databases locally.
   Download from [docker.com](https://www.docker.com/products/docker-desktop/).
   Why? Because most vector databases (Qdrant, Milvus, Weaviate) ship official Docker images, which means no manual compiling or painful dependencies.

## Step 2: Choosing a Vector Database (Local)

We’re going to want a database we can run locally to test ideas before touching the cloud. A few good options:

- **Qdrant** – Lightweight, Docker-friendly, high performance.

  ```bash
  docker run -p 6333:6333 qdrant/qdrant
  ```

- **Weaviate** – Rich features, GraphQL API, and modules for hybrid search.

  ```bash
  docker run -p 8080:8080 semitechnologies/weaviate:latest
  ```

- **Postgres + pgvector** – If you already love SQL, this lets you stay in familiar territory.

  ```bash
  brew install postgresql
  brew install pgvector
  ```

My advice: **start with Qdrant.** It’s fast to spin up, low on config, and you’ll be productive within minutes. Later in the series, we’ll talk about when it makes sense to switch or scale.

## Step 3: Coding Environment

Pick an editor you’re comfortable with, but here’s what works best for me:

- **VS Code** – if you want a lightweight, plugin-rich setup.
- **JetBrains WebStorm** – if you like integrated tooling and strong TypeScript support.

Either way, install a few must-have extensions:

- REST client or Thunder Client (for testing APIs).
- Docker integration.
- Prettier/ESLint (keep your code clean).

## Step 4: Sanity Check

At this point, you should be able to:

- Run `node -v` and get a Node version back.
- Run `docker ps` and see containers (like Qdrant) listed.
- Hit `http://localhost:6333` in the browser and confirm your vector DB is running.

If those three things work, you’re ready for the next stage: ingesting and indexing documents.

## Why This Setup Works

This environment balances **ease of use** (Docker images, Homebrew installs) with **power** (the ability to switch between databases and tools). You’re not locking yourself into a single vendor, but you’re also not wasting days troubleshooting build errors.

It’s the kind of setup I’d give a new engineer on my team if they were about to dive into vector database development.

## What’s Next

With the environment ready, we’ll move on to **ingesting and indexing documents**. That’s where we stop talking theory and start loading real content into our database.

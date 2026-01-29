---
title: 'The Shift: Building Components for AI, Not Just Browsers'
published: 2026-01-29
draft: false
description: 'Frontend development is shifting from "build views for users in browsers" to "build components AI can use to present data." Here''s what that means.'
tags: ['frontend', 'ai', 'mcp', 'ui', 'components']
---

Something clicked for me recently at work. We've been talking about how we need to think differently about building UI components—not just for users clicking around in browsers, but for AI assistants that need to present data.

It took me a minute to get what that actually means. But once I did, I realized it's the same shift that's happening on the backend, just arriving on the frontend now.

## The backend pattern we already know

On the backend, teams are putting MCP servers in front of APIs. You take your existing endpoints and wrap them so AI assistants can discover and call them through a standard protocol. I wrote about this a couple weeks ago.

The frontend version is the same idea: build components that AI can use to present data. If "MCP in front of APIs" is the backend pattern, then "MCP on top of components" is what's coming for the frontend.

## What actually changed

For years, I thought about frontend work like this: user does something, app fetches data, my code decides how to render it. I controlled the presentation layer. I picked the components, decided the layout, wired up the interactions.

Now there's a different flow emerging. User says what they want (often just typing it out), AI figures out what data to get, and then AI picks which components to use to show it. The AI is doing the orchestration. My job shifts to giving it good building blocks.

That's the mindset shift. I'm not just building for developers who import my components. I'm building for AI that will select and invoke them at runtime.

## Where I'm seeing this show up

MCP now has an extension for interactive UI. When an assistant calls a tool, it can return actual components—charts, forms, dashboards—not just text. Shopify built commerce components (product cards, cart flows) that AI agents can embed directly in conversations. Even shadcn/ui and Material UI ship with MCP server support now, so AI can query the docs and generate code that uses them correctly.

The pattern is: your component library becomes an API that AI consumes.

## What this means for how I build things

I've been thinking about a few things differently:

**Clearer contracts.** If an AI is going to pick my component, the props and behaviors need to be obvious. Not "flexible and powerful" but "predictable and hard to misuse." Kitchen-sink components with 50 optional props are a nightmare for AI to use correctly.

**Intent over interaction.** I used to think about what the user clicks. Now I think about what the user wants to accomplish. A product card doesn't need complex event handlers for AI—it just needs to say "this shows a product and can emit an add-to-cart intent."

**Self-contained enough to embed anywhere.** If a component might render in a sandboxed iframe inside a chat interface, it can't assume much about its host environment.

## Is this actually new?

Yes and no. Design systems and component libraries have been around forever. What's new is exposing those same primitives through protocols that let AI discover and invoke them. The components become tools in the MCP sense—functions with schemas and descriptions.

It's an evolution, not a revolution. But it does change how I think about what I'm building and who (or what) is going to use it.

## The practical bit

If you're building components today, it's worth asking: Can an AI understand what this does? Can it invoke it correctly with sensible defaults? Does it communicate intent clearly? Could it render in an unfamiliar host?

We're not replacing frontend development. We're adding a new consumer. And that consumer has different needs than the developers who used to be our only audience.

I'm still figuring this out, but the shift feels real. It's changing how I think about the work.

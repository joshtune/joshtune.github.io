# Blog Writing Style Guide

## Tone & Voice

- Write like a journal entry - document what you're learning or about to learn
- First-person perspective ("I learned...", "I discovered...", "here's what I found:")
- Conversational and reflective - share the learning journey, not just the result
- Brief and concise - every sentence serves a purpose
- Authentic curiosity - it's okay to note what was surprising or confusing

## Structure

Follow this template for technical posts:

1. **Context** - What prompted this exploration? What am I learning?
2. **First code example** - Show the concept (5-15 lines)
3. **Reflection** - What I noticed, what clicked, or what was surprising
4. **Second example** (if needed) - Deeper exploration or practical application
5. **Takeaway** - What I'll remember or use going forward

## Length & Formatting

- Keep posts between 500-1000 words
- High information density - no filler or tangents
- Focus on a single concept per post
- Code-to-text ratio: approximately 40-50% code

## Headings & Lists

- Minimal subheadings - most posts flow linearly without nesting
- Simple hierarchy - rarely use H3 or deeper

## Visual Elements

- Use tables to compare options, summarize concepts, or show structured data
- Use Nivo charts where they clarify relationships or data patterns
- Include code snippets whenever instructions or implementation details are needed

## Charts (Nivo)

Import and use in MDX files with `client:visible` for lazy loading:

```mdx
import {
  BarChart,
  LineChart,
  PieChart,
  RadarChart,
  SankeyChart,
} from '~/components/charts'

<BarChart
  client:visible
  data={[
    { category: 'A', value: 10 },
    { category: 'B', value: 20 },
  ]}
  keys={['value']}
  indexBy="category"
/>
```

Available charts:

- `BarChart` - Comparisons, distributions (vertical/horizontal, grouped/stacked)
- `CalendarChart` - Activity heatmaps, GitHub-style contribution graphs
- `LineChart` - Trends over time, progressions (with optional area fill)
- `PieChart` - Proportions, composition (donut style by default)
- `RadarChart` - Multi-dimensional comparisons
- `SankeyChart` - Flow relationships, process diagrams

All charts are pre-configured with dark theme matching the blog style.

## Code Blocks

- Always specify language (`javascript`, `python`, `go`, `typescript`, `shell`)
- Use title attribute for context (e.g., `title="error_handling.go"`)
- Make examples self-contained and runnable
- Use `shell` blocks with `title="Running..."` or `title="Testing..."` for commands

## Frontmatter Template

```yaml
---
title: '[Concept Name]'
published: [YYYY-MM-DD]
draft: true
description: '[One-line summary]'
tags: ['language-or-framework']
series: '[Series Name]' # optional, for related posts
---
```

## Target Audience

Written for myself as a learning journal, but accessible to other developers on a similar path.

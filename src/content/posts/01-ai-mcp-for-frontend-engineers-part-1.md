---
title: 'MCP for Frontend Engineers — Part 1'
published: 2025-09-01
draft: true
description: 'A hands-on intro to MCP where you spin up a minimal TypeScript server over stdio, expose it via Streamable HTTP, and hook it to a web frontend so typed tools can be invoked with streaming responses.'
series: 'AI MCP'
seriesIndex: 1
slug: '01-ai-mcp-for-frontend-engineers-part-1'
tags: ['mcp', 'typescript', 'frontend']
---

**MCP in practice + your first TypeScript server (stdio → Streamable HTTP)**

**Who this is for:** web devs (Svelte/React/SvelteKit + TypeScript) who want AI features that safely call tools & fetch data through a standard interface.
**What you’ll do today:** spin up a tiny **MCP server** in TS over **stdio**, then expose it over **Streamable HTTP** so a web/edge app can reach it.

> **MCP in one line:** a standard way for apps (and LLM runtimes) to discover and call your tools and data. ([GitHub][1], [Model Context Protocol][2])

---

## Why MCP for web developers

- **Typed surface area:** expose **tools** (actions) and **resources** (read-only data) with schemas a client can list & validate. ([GitHub][1], [Model Context Protocol][3])
- **Web-ready transport:** modern **Streamable HTTP** works over HTTP(S) with a simple session header, suited to browser/edge patterns. (SSE transport is deprecated in favor of Streamable HTTP.) ([GitHub][4])
- **Ecosystem integration:** the **Responses API** can call **remote MCP servers** you host—so your UI can route tool calls through OpenAI’s runtime. ([OpenAI][5], [OpenAI Cookbook][6])

---

## Prereqs

- **Node 18+**, TypeScript, npm (or pnpm). ([GitHub][1])

---

## Project layout

```
mcp-hello/
  src/
    server.ts           # stdio transport (local)
    http-server.ts      # Streamable HTTP transport (remote)
  package.json
  tsconfig.json
```

---

## Step 1 — Install the SDK

```bash
mkdir mcp-hello && cd mcp-hello
npm init -y
npm i @modelcontextprotocol/sdk zod express cors
```

The official SDK implements the MCP spec and provides transports for **stdio** and **Streamable HTTP**. ([GitHub][1])

---

## Step 2 — A tiny MCP server over `stdio`

Create `src/server.ts`:

```ts
import { McpServer, ResourceTemplate } from '@modelcontextprotocol/sdk/server/mcp.js'
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js'
import { z } from 'zod'

const server = new McpServer({ name: 'hello-mcp', version: '1.0.0' })

// Tool: add two numbers
server.registerTool(
  'add',
  {
    title: 'Addition',
    description: 'Add two numbers',
    inputSchema: { a: z.number(), b: z.number() },
  },
  async ({ a, b }) => ({ content: [{ type: 'text', text: String(a + b) }] }),
)

// Resource: greet someone (URI-templated)
server.registerResource(
  'greeting',
  new ResourceTemplate('greet://{name}', { list: undefined }),
  { title: 'Greeter', description: 'Say hello' },
  async (uri, { name }) => ({
    contents: [{ uri: uri.href, text: `Hello, ${name}!` }],
  }),
)

async function main() {
  const transport = new StdioServerTransport()
  await server.connect(transport)
  console.log('MCP server (stdio) running')
}
main().catch((e) => {
  console.error(e)
  process.exit(1)
})
```

Run it:

```bash
node --version   # v18+ recommended
node src/server.ts
```

This is a compliant MCP server with one **tool** and one **resource**. ([GitHub][1])

---

## Step 3 — Expose it for the web with **Streamable HTTP**

Create `src/http-server.ts` (Express + session management):

```ts
import express from 'express'
import cors from 'cors'
import { randomUUID } from 'node:crypto'
import { McpServer, ResourceTemplate } from '@modelcontextprotocol/sdk/server/mcp.js'
import { StreamableHTTPServerTransport } from '@modelcontextprotocol/sdk/server/streamableHttp.js'
import { isInitializeRequest } from '@modelcontextprotocol/sdk/types.js'
import { z } from 'zod'

const app = express()
app.use(express.json())

// For browsers: expose/read the MCP session header
app.use(
  cors({
    origin: true,
    credentials: true,
    exposedHeaders: ['Mcp-Session-Id'],
    allowedHeaders: ['Content-Type', 'mcp-session-id'],
  }),
)

// Create a simple server (same idea as stdio example)
function createServer() {
  const server = new McpServer({ name: 'hello-mcp-http', version: '1.0.0' })

  server.registerTool(
    'add',
    {
      title: 'Addition',
      description: 'Add two numbers',
      inputSchema: { a: z.number(), b: z.number() },
    },
    async ({ a, b }) => ({ content: [{ type: 'text', text: String(a + b) }] }),
  )

  server.registerResource(
    'greeting',
    new ResourceTemplate('greet://{name}', { list: undefined }),
    { title: 'Greeter', description: 'Say hello' },
    async (uri, { name }) => ({ contents: [{ uri: uri.href, text: `Hello, ${name}!` }] }),
  )

  return server
}

// Session store (per-connection transport)
const transports: Record<string, StreamableHTTPServerTransport> = {}

// Open / message (client → server)
app.post('/mcp', async (req, res) => {
  const sessionId = (req.headers['mcp-session-id'] as string | undefined) ?? undefined
  let transport: StreamableHTTPServerTransport

  if (sessionId && transports[sessionId]) {
    transport = transports[sessionId]
  } else if (!sessionId && isInitializeRequest(req.body)) {
    transport = new StreamableHTTPServerTransport({
      sessionIdGenerator: () => randomUUID(),
      // For local dev, enable DNS rebinding protection when exposing beyond localhost:
      // enableDnsRebindingProtection: true,
      // allowedHosts: ["127.0.0.1"],
    })

    // Keep track of this transport by its session id
    transport.onsessioninitialized = (newId) => {
      transports[newId] = transport
    }

    // Clean up on close
    transport.onclose = () => {
      if (transport.sessionId) delete transports[transport.sessionId]
    }

    const server = createServer()
    await server.connect(transport)
  } else {
    res.status(400).json({
      jsonrpc: '2.0',
      error: { code: -32000, message: 'Bad Request: No valid session ID provided' },
      id: null,
    })
    return
  }

  // Route the request to the transport
  await transport.handleRequest(req, res, req.body)
})

// Notifications stream (server → client)
import type expressTypes from 'express'
const handleSessionRequest = async (
  req: expressTypes.Request,
  res: expressTypes.Response,
) => {
  const sessionId = req.headers['mcp-session-id'] as string | undefined
  if (!sessionId || !transports[sessionId]) {
    res.status(400).send('Invalid or missing session ID')
    return
  }
  const transport = transports[sessionId]
  await transport.handleRequest(req, res)
}

app.get('/mcp', handleSessionRequest) // stream server→client notifications
app.delete('/mcp', handleSessionRequest) // close session

app.listen(3000, () => console.log('MCP Streamable HTTP on http://localhost:3000/mcp'))
```

Why this shape?

- Streamable HTTP uses a **session id** header (`Mcp-Session-Id`) for subsequent calls.
- You POST the **initialize** JSON-RPC message, the transport assigns a session id, and your UI/edge stores it for later requests.
- GET `/mcp` carries server→client notifications (stream).
- SSE transport exists historically, but **new code should prefer Streamable HTTP**; the SDK documents SSE as **deprecated**. ([GitHub][4])

Security tips when exposing remotely:

- Validate **Origin/Host**; consider enabling DNS-rebinding protection and proper auth. ([Model Context Protocol][7])

---

## How this ties to OpenAI’s runtime (for later posts)

You can register your **remote MCP server** as a tool in the **Responses API**; the runtime will handle transport details and route tool invocations to your `/mcp` endpoint. This is how we’ll get “chat + tools” in a SvelteKit or React UI. ([OpenAI][5], [OpenAI Cookbook][6])

---

## You now have

- A working **stdio** server (local). ([GitHub][1])
- A working **Streamable HTTP** endpoint (remote) with session management & CORS notes. ([GitHub][4])

What do think of this approach? Let us know in the comments!

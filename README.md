# Kartograph

Kartograph scans your JS/TS codebase, generates a structured codemap, and exposes it via an MCP server so AI coding agents can understand your entire codebase structure in one query instead of crawling files.

## The Problem

You're using AI coding agents (Cursor, Claude Code, Copilot) daily. They work great—until they don't. Your agent keeps making wrong assumptions about your codebase because it has no structural context:

- **Hallucinations**: Agent invents function signatures that don't exist
- **Missed utilities**: Duplicates logic that already lives elsewhere in the codebase
- **Inefficient searches**: Makes 6+ file reads to find something that should take 1 query
- **Wasted iterations**: Wrong assumptions → wrong code → manual fixes → iterate again

## The Solution

Give your AI agent a **complete, structured map of your codebase** that it can query in a single call.

Instead of your agent blindly reading files, it calls `search_types("Order")` and instantly gets:
- The exact `Order` interface definition
- Its properties and types
- Which file it lives in
- Which endpoints/functions use it

**Result**: Fewer hallucinations, fewer agent iterations, more accurate code generation.

## When to Use Kartograph

- **Onboarding to a new codebase**: Index your project once, give your AI agent the full picture
- **In CI/CD**: Keep the codemap fresh on every commit, so your agent always has current context

## Requirements

- Node.js 18+
- Works with both JavaScript and TypeScript codebases
- TypeScript projects should use a project `tsconfig.json` for best results

## How It Works

1. **Compile**: `npx kartograph compile-for-ai` scans your JS/TS codebase and builds the codemap artifacts
2. **Write**: Outputs a structured `codemap.json` plus human-readable map files in `.codemap/`
3. **Serve**: `npx kartograph mcp` exposes the codemap through an MCP (Model Context Protocol) server
4. **Sync**: `npx kartograph watch` keeps the codemap fresh as files change (local dev or CI workflows)

## Installation

Use one of these two options:

1. Run directly with `npx` (no install):

```bash
npx kartograph compile-for-ai
```

2. Install globally for repeated local usage:

```bash
npm install -g kartograph
```

## Usage

```bash
npx kartograph compile-for-ai
npx kartograph watch
npx kartograph mcp
```

## What It Generates

Kartograph writes the following artifacts to your repository:

- `.codemap/overview.md` - High-level project summary (modules, major flows, and key entry points).
- `.codemap/types.md` - Consolidated type and interface index with links to source locations.
- `.codemap/endpoints.md` - HTTP/API endpoint inventory with handler mappings and related types.
- `.codemap/architecture.md` - Component-level architecture view and service/module relationships.
- `.codemap/codemap.json` - Machine-readable source of truth used by MCP tools.
- `.codemap/dashboard.html` - Human-friendly visual dashboard for browsing codemap insights.
- `.vscode/mcp.json` - MCP server configuration for local agent/editor integration.

## Integration with AI Agents

Once running, Kartograph exposes MCP tools that agents can call:
- `get_overview` - Returns a project-wide summary so agents can reason about structure before editing.
- `search_types` - Finds matching types/interfaces by name and returns where they are defined.
- `get_type_details` - Expands a specific type with fields, signatures, and related references.
- `get_endpoints` - Lists API endpoints, methods, routes, and linked handlers.
- `get_architecture` - Provides module/service dependency topology and high-level flow information.
- `get_file_context` - Returns focused structural context for one file without full-file crawling.
- `get_diagnostics` - Surfaces codemap/build diagnostics so agents can avoid broken assumptions.
- `get_dependencies` - Shows dependency relationships between files/modules/packages.

## License

MIT
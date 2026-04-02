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

## How It Works

1. **Scan**: Kartograph analyzes your JS/TS codebase (interfaces, types, functions, exports)
2. **Map**: Generates a structured, queryable codemap (JSON or similar format)
3. **Serve**: Exposes the codemap via an MCP (Model Context Protocol) server
4. **Query**: Your AI agent uses the MCP tools to search and understand structure in one call

## Installation

```bash
npm install kartograph
```

## Usage

```bash
kartograph --scan ./src
```

This generates a codemap that can be:
- Exported as JSON for inspection
- Served via MCP for agent integration
- Committed to your repo or stored in CI

## Integration with AI Agents

Once running, Kartograph exposes MCP tools that agents can call:
- `search_types(name)` — Find type/interface definitions
- `search_functions(name)` — Find function signatures
- `search_exports(file)` — List what a module exports
- `get_file_structure(file)` — Understand a file's layout without reading it all

## Development

```bash
npm run test
```

## License

ISC
#!/usr/bin/env node

const { Command } = require("commander");

const program = new Command();

program
  .name("kartograph")
  .description(
    "Generate codemaps and serve MCP tools for JS/TS repositories."
  )
  .version("1.0.0");

program
  .command("compile-for-ai")
  .description("Scan a JS/TS repo and generate codemap artifacts.")
  .action(() => {
    console.log("compile-for-ai is not implemented yet.");
    console.log("Planned output: .codemap/codemap.json and markdown artifacts.");
  });

program
  .command("watch")
  .description("Watch repository files and refresh codemap artifacts.")
  .action(() => {
    console.log("watch is not implemented yet.");
  });

program
  .command("mcp")
  .description("Run the MCP server backed by generated codemap data.")
  .action(() => {
    console.log("mcp is not implemented yet.");
  });

program.parse(process.argv);

#!/usr/bin/env node
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { say_excuse_me } from "./say_excuse_me.js";

const server = new McpServer({
  name: "say-excuse-me-server",
  version: "1.0.1",
});

server.tool(
  "say_excuse_me",
  'Plays the "ちょっといいですか" sound',
  async () => {
    return say_excuse_me()
      .then(() => ({
        content: [{ type: "text", text: 'Played "ちょっといいですか"' }],
      }))
      .catch((error) => {
        console.error(`MCP Error: ${error.message}`);
        return {
          content: [{ type: "text", text: `Error: ${error.message}` }],
          isError: true,
        };
      });
  }
);

const transport = new StdioServerTransport();
await server.connect(transport);
process.on("SIGINT", async () => {
  await server.close();
  process.exit(0);
});

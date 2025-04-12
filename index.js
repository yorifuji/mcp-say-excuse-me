#!/usr/bin/env node
import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
  CallToolRequestSchema,
  ErrorCode,
  ListToolsRequestSchema,
  McpError,
} from "@modelcontextprotocol/sdk/types.js";
import { say_excuse_me } from "./say_excuse_me.js";

const server = new Server(
  {
    name: "say-excuse-me-server",
    version: "1.0.1",
  },
  {
    capabilities: {
      tools: {},
    },
  }
);

server.setRequestHandler(ListToolsRequestSchema, async () => ({
  tools: [
    {
      name: "say_excuse_me",
      description: 'Plays the "ちょっといいですか" sound',
      inputSchema: {
        type: "object",
        properties: {},
        required: [],
      },
    },
  ],
}));

async function handleSayExcuseMe(request) {
  if (request.params.name !== "say_excuse_me") {
    throw new McpError(
      ErrorCode.MethodNotFound,
      `Unknown tool: ${request.params.name}`
    );
  }

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

server.setRequestHandler(CallToolRequestSchema, handleSayExcuseMe);

const transport = new StdioServerTransport();
await server.connect(transport);
console.error("Say Excuse Me MCP server running on stdio");

process.on("SIGINT", async () => {
  await server.close();
  process.exit(0);
});

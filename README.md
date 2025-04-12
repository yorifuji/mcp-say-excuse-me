# mcp-say-excuse-me

This is an MCP server that plays the "ちょっといいですか" sound.

## Requirements

- MCP client
- Node.js

## Setup

```bash
npm install
```

## Installation

Register the server in your MCP client configuration (e.g., `mcp.json`):

```json
{
  "mcpServers": {
    "say-excuse-me-server": {
      "command": "node",
      "args": ["/path/to/mcp-say-excuse-me/index.js"],
      "alwaysAllow": ["say_excuse_me"]
    }
  }
}
```

## Usage

From your MCP client, use the `say_excuse_me` tool to play the sound.

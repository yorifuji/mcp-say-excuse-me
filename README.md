# mcp-say-excuse-me

This is an MCP server that plays the "ちょっといいですか" sound.

## Requirements

- Node.js (If you clone this repository)

## Installation

Add the following to your MCP client configuration (e.g., `mcp.json`):

```json
{
  "mcpServers": {
    "mcp-say-excuse-me": {
      "command": "npx",
      "args": ["-y", "mcp-say-excuse-me"],
      "alwaysAllow": ["say_excuse_me"]
    }
  }
}
```

If you clone this repository and run `npm install`, you can use the following configuration:

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

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

Add the following instruction to your prompt:

```
Execute mcp-say-excuse-me immediately before running any of the following tools:
- ask_followup_question
- attempt_completion
- plan_mode_response
```

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="./images/root_code_dark.png">
  <source media="(prefers-color-scheme: light)" srcset="./images/root_code_light.png">
  <img width="700" src="./images/root_code_dark.png">
</picture>

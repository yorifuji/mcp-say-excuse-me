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
  <source media="(prefers-color-scheme: dark)" srcset="https://github.com/user-attachments/assets/299c21e1-6407-4020-9f09-6ef8e33fe685">
  <source media="(prefers-color-scheme: light)" srcset="https://github.com/user-attachments/assets/568be3f8-7986-4f4a-a005-5e15bd539fde">
  <img width="700" src="https://github.com/user-attachments/assets/299c21e1-6407-4020-9f09-6ef8e33fe685">
</picture>

# MCP Server Router

**Universal MCP Server Router** - Connect any AI agent to any MCP server with a single SDK. Zero bloat, web UI config, auto-discovery.

[![npm version](https://badge.fury.io/js/mcp-server-router.svg)](https://www.npmjs.com/package/mcp-server-router)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## What is MCP Server Router?

MCP Server Router is a lightweight client that connects AI agents (Claude, Gemini, GPT, etc.) to [Model Context Protocol (MCP)](https://modelcontextprotocol.io) servers. Instead of configuring each MCP server separately in every AI tool, configure once and connect everywhere.

**Key Features:**
- **Single SDK** - One import, access all your MCP servers
- **Web UI Config** - Add/remove MCP servers through a simple web interface
- **Zero Bloat** - No unnecessary dependencies, just the MCP SDK
- **Auto-Discovery** - AI agents can discover available tools automatically
- **Config File** - JSON-based configuration, easy to version control

## Quick Start

```bash
# Install
npm install mcp-server-router

# Start config UI
npx mcp-config
# Open http://localhost:3456 to add your MCP servers

# Or configure via JSON
cp mcp-servers.example.json mcp-servers.json
```

## Usage

### In Your Code

```typescript
import { callMCPTool, listServers, disconnectAll } from 'mcp-server-router';

// List available servers
console.log(listServers());
// ['desktop-commander', 'github', 'sqlite', ...]

// Call any MCP tool
const result = await callMCPTool('mcp__github__search_repositories', {
  query: 'mcp server'
});

console.log(result.data);

// Cleanup
await disconnectAll();
```

### For AI Agents

AI agents can write code like this to interact with MCP servers:

```typescript
import { callMCPTool } from 'mcp-server-router';

// Read a file
const file = await callMCPTool('mcp__desktop-commander__read_file', {
  path: './README.md'
});

// Search GitHub
const repos = await callMCPTool('mcp__github__search_repositories', {
  query: 'typescript mcp'
});

// Query database
const data = await callMCPTool('mcp__sqlite__read_query', {
  query: 'SELECT * FROM users LIMIT 10'
});
```

## Configuration

### Web UI (Recommended)

```bash
npx mcp-config
```

Open http://localhost:3456 and add your MCP servers through the web interface.

### JSON File

Create `mcp-servers.json` in your project root:

```json
{
  "servers": {
    "desktop-commander": {
      "command": "npx",
      "args": ["-y", "@wonderwhy-er/desktop-commander"],
      "description": "File operations, processes, search"
    },
    "github": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-github"],
      "env": {
        "GITHUB_PERSONAL_ACCESS_TOKEN": "your-token-here"
      },
      "description": "GitHub API access"
    },
    "sqlite": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-sqlite", "--db-path", "./data.db"],
      "description": "SQLite database"
    }
  }
}
```

## Popular MCP Servers

| Server | Package | Description |
|--------|---------|-------------|
| Desktop Commander | `@wonderwhy-er/desktop-commander` | File ops, processes, search |
| GitHub | `@modelcontextprotocol/server-github` | GitHub API |
| SQLite | `@modelcontextprotocol/server-sqlite` | Database queries |
| Filesystem | `@modelcontextprotocol/server-filesystem` | Basic file ops |
| Memory | `@modelcontextprotocol/server-memory` | Knowledge graph |
| Playwright | `@playwright/mcp` | Browser automation |
| Puppeteer | `@modelcontextprotocol/server-puppeteer` | Browser automation |

## API Reference

### `callMCPTool(toolName, params)`

Call any MCP tool. Tool name format: `mcp__<server>__<tool>`

```typescript
const result = await callMCPTool('mcp__github__search_code', {
  q: 'language:typescript'
});
// { success: true, data: {...} }
```

### `listServers()`

List all enabled MCP servers.

```typescript
const servers = listServers();
// ['desktop-commander', 'github', 'sqlite']
```

### `listServerTools(serverName)`

List all tools available from a specific server.

```typescript
const tools = await listServerTools('github');
// ['search_repositories', 'search_code', 'create_issue', ...]
```

### `disconnectAll()`

Disconnect from all MCP servers.

```typescript
await disconnectAll();
```

## Why MCP Server Router?

### Before (Multiple Configs)
```
Claude Config -> MCP Server A, B, C
Gemini Config -> MCP Server A, B, C  (duplicate!)
Cursor Config -> MCP Server A, B, C  (duplicate!)
```

### After (Single Config)
```
mcp-servers.json -> MCP Server Router -> All AI Agents
```

**Benefits:**
- Configure once, use everywhere
- Easy to add/remove servers
- Version control your MCP setup
- Web UI for non-technical users
- Reduces token usage for AI agents (~98% savings on tool discovery)

## License

MIT

## Contributing

PRs welcome! Please open an issue first to discuss changes.

---

**Keywords:** mcp, mcp-server, model-context-protocol, ai-agents, claude, gemini, llm, ai-tools, anthropic

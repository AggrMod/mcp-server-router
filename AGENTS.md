# MCP Server Router - Agent Instructions

You can call any MCP tool using this pattern:

```typescript
import { callMCPTool } from './src/client.js';

const result = await callMCPTool('mcp__<server>__<tool>', { params });
```

## Available Servers

Browse `./wrappers/` to discover available tools:

| Server | Wrapper Path | Example Tools |
|--------|--------------|---------------|
| desktop-commander | `./wrappers/desktop-commander/` | read_file, write_file, list_directory, execute_command |
| filesystem | `./wrappers/filesystem/` | read_file, write_file, create_directory |
| github | `./wrappers/github/` | search_repositories, create_issue, create_pull_request |
| sqlite | `./wrappers/sqlite/` | read_query, write_query, list_tables |
| server-memory | `./wrappers/server-memory/` | create_entities, search_nodes, read_graph |
| playwright | `./wrappers/playwright/` | navigate, snapshot, click, type |
| puppeteer | `./wrappers/puppeteer/` | navigate, click, screenshot |
| tree-sitter | `./wrappers/tree-sitter/` | parse_file, search_code |
| firebase | `./wrappers/firebase/` | get_projects, get_users |
| windows-mcp | `./wrappers/windows-mcp/` | click, type, shortcut, screenshot |
| apify | `./wrappers/apify/` | runActor, scrapeMarketplace (Facebook Marketplace) |

## Usage Examples

### Read a file
```typescript
await callMCPTool('mcp__desktop-commander__read_file', { path: './README.md' });
```

### Search GitHub
```typescript
await callMCPTool('mcp__github__search_repositories', { query: 'mcp server' });
```

### Query database
```typescript
await callMCPTool('mcp__sqlite__read_query', { query: 'SELECT * FROM users' });
```

### Take browser screenshot
```typescript
await callMCPTool('mcp__playwright__browser_snapshot', {});
```

### Scrape Facebook Marketplace
```typescript
// Requires APIFY_TOKEN in mcp-servers.json
await callMCPTool('mcp__apify__actor_run', {
  actorId: 'apify/facebook-marketplace-scraper',
  input: {
    startUrls: [{ url: 'https://www.facebook.com/marketplace/sanfrancisco/search/?query=guitar' }],
    maxItems: 100
  }
});
```

## Configuration

Servers are configured in `mcp-servers.json`. Run the config UI:
```bash
npx tsx src/ui/server.ts
# Open http://localhost:3456
```

## Adding New Servers

1. Add to `mcp-servers.json` via web UI or manually
2. Server format:
```json
{
  "command": "npx",
  "args": ["-y", "@package/name"],
  "env": { "API_KEY": "..." },
  "description": "What it does"
}
```

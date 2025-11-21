import { callMCPTool, MCPToolResult } from '../client.js';

interface ScrapeInput { url: string; }

/** Fetch and convert webpage to markdown */
export async function scrapeTool(input: ScrapeInput): Promise<MCPToolResult> {
  return callMCPTool('mcp__windows-mcp__Scrape-Tool', input);
}

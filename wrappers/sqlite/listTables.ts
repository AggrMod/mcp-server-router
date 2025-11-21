import { callMCPTool, MCPToolResult } from '../client.js';

/** List all tables */
export async function listTables(): Promise<MCPToolResult> {
  return callMCPTool('mcp__sqlite__list_tables', {});
}

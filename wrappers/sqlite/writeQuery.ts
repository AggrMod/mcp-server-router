import { callMCPTool, MCPToolResult } from '../client.js';

interface WriteQueryInput { query: string; }

/** Execute INSERT/UPDATE/DELETE query */
export async function writeQuery(input: WriteQueryInput): Promise<MCPToolResult> {
  return callMCPTool('mcp__sqlite__write_query', input);
}

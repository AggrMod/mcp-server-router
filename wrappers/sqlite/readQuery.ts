import { callMCPTool, MCPToolResult } from '../client.js';

interface ReadQueryInput { query: string; }

/** Execute SELECT query */
export async function readQuery(input: ReadQueryInput): Promise<MCPToolResult> {
  return callMCPTool('mcp__sqlite__read_query', input);
}

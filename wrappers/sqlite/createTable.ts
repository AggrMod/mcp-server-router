import { callMCPTool, MCPToolResult } from '../client.js';

interface CreateTableInput { query: string; }

/** Create table */
export async function createTable(input: CreateTableInput): Promise<MCPToolResult> {
  return callMCPTool('mcp__sqlite__create_table', input);
}

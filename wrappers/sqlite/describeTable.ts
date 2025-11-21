import { callMCPTool, MCPToolResult } from '../client.js';

interface DescribeTableInput { table_name: string; }

/** Get table schema */
export async function describeTable(input: DescribeTableInput): Promise<MCPToolResult> {
  return callMCPTool('mcp__sqlite__describe_table', input);
}

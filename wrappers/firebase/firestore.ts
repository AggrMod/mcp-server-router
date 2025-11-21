import { callMCPTool, MCPToolResult } from '../client.js';

interface GetDataInput { path: string; databaseUrl?: string; }
interface SetDataInput { path: string; data: string; databaseUrl?: string; }

export async function firestoreGet(input: GetDataInput): Promise<MCPToolResult> {
  return callMCPTool('mcp__firebase__realtimedatabase_get_data', input);
}

export async function firestoreSet(input: SetDataInput): Promise<MCPToolResult> {
  return callMCPTool('mcp__firebase__realtimedatabase_set_data', input);
}

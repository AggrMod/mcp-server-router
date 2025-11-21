import { callMCPTool, MCPToolResult } from '../client.js';

interface WaitInput { duration: number; }

/** Wait for specified seconds */
export async function waitTool(input: WaitInput): Promise<MCPToolResult> {
  return callMCPTool('mcp__windows-mcp__Wait-Tool', input);
}

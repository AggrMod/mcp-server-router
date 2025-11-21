import { callMCPTool, MCPToolResult } from '../client.js';

interface OpenNodesInput { names: string[]; }

/** Open specific nodes by name */
export async function openNodes(input: OpenNodesInput): Promise<MCPToolResult> {
  return callMCPTool('mcp__server-memory__open_nodes', input);
}

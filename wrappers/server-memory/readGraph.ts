import { callMCPTool, MCPToolResult } from '../client.js';

/** Read the entire knowledge graph */
export async function readGraph(): Promise<MCPToolResult> {
  return callMCPTool('mcp__server-memory__read_graph', {});
}

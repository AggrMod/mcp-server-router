import { callMCPTool, MCPToolResult } from '../client.js';

interface SearchNodesInput { query: string; }

/** Search for nodes in the knowledge graph */
export async function searchNodes(input: SearchNodesInput): Promise<MCPToolResult> {
  return callMCPTool('mcp__server-memory__search_nodes', input);
}

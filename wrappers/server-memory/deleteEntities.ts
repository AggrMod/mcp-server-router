import { callMCPTool, MCPToolResult } from '../client.js';

interface DeleteEntitiesInput { entityNames: string[]; }

/** Delete entities from the knowledge graph */
export async function deleteEntities(input: DeleteEntitiesInput): Promise<MCPToolResult> {
  return callMCPTool('mcp__server-memory__delete_entities', input);
}

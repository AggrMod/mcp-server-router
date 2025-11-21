import { callMCPTool, MCPToolResult } from '../client.js';

interface Relation { from: string; to: string; relationType: string; }
interface DeleteRelationsInput { relations: Relation[]; }

/** Delete relations from the knowledge graph */
export async function deleteRelations(input: DeleteRelationsInput): Promise<MCPToolResult> {
  return callMCPTool('mcp__server-memory__delete_relations', input);
}

import { callMCPTool, MCPToolResult } from '../client.js';

interface Relation { from: string; to: string; relationType: string; }
interface CreateRelationsInput { relations: Relation[]; }

/** Create relations between entities */
export async function createRelations(input: CreateRelationsInput): Promise<MCPToolResult> {
  return callMCPTool('mcp__server-memory__create_relations', input);
}

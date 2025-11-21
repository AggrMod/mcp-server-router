import { callMCPTool, MCPToolResult } from '../client.js';

interface Entity { name: string; entityType: string; observations: string[]; }
interface CreateEntitiesInput { entities: Entity[]; }

/** Create entities in the knowledge graph */
export async function createEntities(input: CreateEntitiesInput): Promise<MCPToolResult> {
  return callMCPTool('mcp__server-memory__create_entities', input);
}

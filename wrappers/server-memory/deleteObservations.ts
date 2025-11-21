import { callMCPTool, MCPToolResult } from '../client.js';

interface Deletion { entityName: string; observations: string[]; }
interface DeleteObservationsInput { deletions: Deletion[]; }

/** Delete observations from entities */
export async function deleteObservations(input: DeleteObservationsInput): Promise<MCPToolResult> {
  return callMCPTool('mcp__server-memory__delete_observations', input);
}

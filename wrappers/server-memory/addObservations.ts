import { callMCPTool, MCPToolResult } from '../client.js';

interface Observation { entityName: string; contents: string[]; }
interface AddObservationsInput { observations: Observation[]; }

/** Add observations to existing entities */
export async function addObservations(input: AddObservationsInput): Promise<MCPToolResult> {
  return callMCPTool('mcp__server-memory__add_observations', input);
}

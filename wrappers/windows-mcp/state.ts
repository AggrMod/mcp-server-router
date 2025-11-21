import { callMCPTool, MCPToolResult } from '../client.js';

interface StateToolInput { use_vision?: boolean; }

/** Capture desktop state - focused app, open apps, UI elements, optional screenshot */
export async function stateTool(input?: StateToolInput): Promise<MCPToolResult> {
  return callMCPTool('mcp__windows-mcp__State-Tool', input || {});
}

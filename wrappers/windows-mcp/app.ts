import { callMCPTool, MCPToolResult } from '../client.js';

interface AppToolInput {
  mode: 'launch' | 'resize' | 'switch';
  name?: string;
  window_loc?: [number, number];
  window_size?: [number, number];
}

/** Manage Windows applications - launch, resize, or switch windows */
export async function appTool(input: AppToolInput): Promise<MCPToolResult> {
  return callMCPTool('mcp__windows-mcp__App-Tool', input);
}

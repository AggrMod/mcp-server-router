import { callMCPTool, MCPToolResult } from '../client.js';

interface MoveFileInput { source: string; destination: string; }

/** Move or rename file */
export async function moveFile(input: MoveFileInput): Promise<MCPToolResult> {
  return callMCPTool('mcp__desktop-commander__move_file', input);
}

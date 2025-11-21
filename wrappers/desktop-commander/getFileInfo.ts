import { callMCPTool, MCPToolResult } from '../client.js';

interface GetFileInfoInput { path: string; }

/** Get file metadata */
export async function getFileInfo(input: GetFileInfoInput): Promise<MCPToolResult> {
  return callMCPTool('mcp__desktop-commander__get_file_info', input);
}

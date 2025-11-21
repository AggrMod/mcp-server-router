import { callMCPTool, MCPToolResult } from '../client.js';

interface CreateDirectoryInput { path: string; }

/** Create directory */
export async function createDirectory(input: CreateDirectoryInput): Promise<MCPToolResult> {
  return callMCPTool('mcp__desktop-commander__create_directory', input);
}

import { callMCPTool, MCPToolResult } from '../client.js';

interface ListDirectoryInput { path: string; depth?: number; }

/** List directory contents */
export async function listDirectory(input: ListDirectoryInput): Promise<MCPToolResult> {
  return callMCPTool('mcp__desktop-commander__list_directory', input);
}

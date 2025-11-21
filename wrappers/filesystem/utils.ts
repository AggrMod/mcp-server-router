import { callMCPTool, MCPToolResult } from '../client.js';

interface MoveFileInput { source: string; destination: string; }
interface SearchFilesInput { path: string; pattern: string; excludePatterns?: string[]; }
interface GetFileInfoInput { path: string; }

export async function moveFile(input: MoveFileInput): Promise<MCPToolResult> {
  return callMCPTool('mcp__filesystem__move_file', input);
}

export async function searchFiles(input: SearchFilesInput): Promise<MCPToolResult> {
  return callMCPTool('mcp__filesystem__search_files', input);
}

export async function getFileInfo(input: GetFileInfoInput): Promise<MCPToolResult> {
  return callMCPTool('mcp__filesystem__get_file_info', input);
}

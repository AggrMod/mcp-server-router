import { callMCPTool, MCPToolResult } from '../client.js';

interface GetFileInput { owner: string; repo: string; path: string; branch?: string; }
interface CreateFileInput { owner: string; repo: string; path: string; content: string; message: string; branch: string; sha?: string; }
interface PushFilesInput { owner: string; repo: string; branch: string; files: { path: string; content: string }[]; message: string; }

export async function getFileContents(input: GetFileInput): Promise<MCPToolResult> {
  return callMCPTool('mcp__github__get_file_contents', input);
}

export async function createOrUpdateFile(input: CreateFileInput): Promise<MCPToolResult> {
  return callMCPTool('mcp__github__create_or_update_file', input);
}

export async function pushFiles(input: PushFilesInput): Promise<MCPToolResult> {
  return callMCPTool('mcp__github__push_files', input);
}

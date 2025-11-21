import { callMCPTool, MCPToolResult } from '../client.js';

interface ListFilesInput { project: string; pattern?: string; max_depth?: number; }
interface GetFileInput { project: string; path: string; max_lines?: number; }
interface GetMetadataInput { project: string; path: string; }

export async function listFiles(input: ListFilesInput): Promise<MCPToolResult> {
  return callMCPTool('mcp__tree-sitter__list_files', input);
}

export async function getFile(input: GetFileInput): Promise<MCPToolResult> {
  return callMCPTool('mcp__tree-sitter__get_file', input);
}

export async function getFileMetadata(input: GetMetadataInput): Promise<MCPToolResult> {
  return callMCPTool('mcp__tree-sitter__get_file_metadata', input);
}

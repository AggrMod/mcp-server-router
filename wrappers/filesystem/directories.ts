import { callMCPTool, MCPToolResult } from '../client.js';

interface ListDirInput { path: string; }
interface DirTreeInput { path: string; }
interface CreateDirInput { path: string; }

export async function listDirectory(input: ListDirInput): Promise<MCPToolResult> {
  return callMCPTool('mcp__filesystem__list_directory', input);
}

export async function directoryTree(input: DirTreeInput): Promise<MCPToolResult> {
  return callMCPTool('mcp__filesystem__directory_tree', input);
}

export async function createDirectory(input: CreateDirInput): Promise<MCPToolResult> {
  return callMCPTool('mcp__filesystem__create_directory', input);
}

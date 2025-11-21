import { callMCPTool, MCPToolResult } from '../client.js';

interface RegisterInput { path: string; name?: string; description?: string; }
interface RemoveInput { name: string; }

export async function registerProject(input: RegisterInput): Promise<MCPToolResult> {
  return callMCPTool('mcp__tree-sitter__register_project_tool', input);
}

export async function listProjects(): Promise<MCPToolResult> {
  return callMCPTool('mcp__tree-sitter__list_projects_tool', {});
}

export async function removeProject(input: RemoveInput): Promise<MCPToolResult> {
  return callMCPTool('mcp__tree-sitter__remove_project_tool', input);
}

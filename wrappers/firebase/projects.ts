import { callMCPTool, MCPToolResult } from '../client.js';

interface CreateProjectInput { project_id: string; display_name?: string; }
interface ListAppsInput { platform?: 'ios' | 'android' | 'web' | 'all'; }
interface CreateAppInput { platform: 'web' | 'ios' | 'android'; display_name?: string; }

export async function getProject(): Promise<MCPToolResult> {
  return callMCPTool('mcp__firebase__firebase_get_project', {});
}

export async function listProjects(page_size?: number): Promise<MCPToolResult> {
  return callMCPTool('mcp__firebase__firebase_list_projects', { page_size });
}

export async function createProject(input: CreateProjectInput): Promise<MCPToolResult> {
  return callMCPTool('mcp__firebase__firebase_create_project', input);
}

export async function listApps(input?: ListAppsInput): Promise<MCPToolResult> {
  return callMCPTool('mcp__firebase__firebase_list_apps', input || {});
}

export async function createApp(input: CreateAppInput): Promise<MCPToolResult> {
  return callMCPTool('mcp__firebase__firebase_create_app', input);
}

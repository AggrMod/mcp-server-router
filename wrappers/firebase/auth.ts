import { callMCPTool, MCPToolResult } from '../client.js';

interface LoginInput { authCode?: string; }
interface LogoutInput { email?: string; }
interface UpdateEnvInput { project_dir?: string; active_project?: string; active_user_account?: string; }

export async function login(input?: LoginInput): Promise<MCPToolResult> {
  return callMCPTool('mcp__firebase__firebase_login', input || {});
}

export async function logout(input?: LogoutInput): Promise<MCPToolResult> {
  return callMCPTool('mcp__firebase__firebase_logout', input || {});
}

export async function getEnvironment(): Promise<MCPToolResult> {
  return callMCPTool('mcp__firebase__firebase_get_environment', {});
}

export async function updateEnvironment(input: UpdateEnvInput): Promise<MCPToolResult> {
  return callMCPTool('mcp__firebase__firebase_update_environment', input);
}

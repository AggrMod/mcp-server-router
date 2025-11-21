import { callMCPTool, MCPToolResult } from '../client.js';

interface GetUsersInput { uids?: string[]; emails?: string[]; limit?: number; }
interface UpdateUserInput { uid: string; disabled?: boolean; claim?: { key: string; value?: string | number | boolean; }; }

export async function authGetUsers(input?: GetUsersInput): Promise<MCPToolResult> {
  return callMCPTool('mcp__firebase__auth_get_users', input || {});
}

export async function authUpdateUser(input: UpdateUserInput): Promise<MCPToolResult> {
  return callMCPTool('mcp__firebase__auth_update_user', input);
}

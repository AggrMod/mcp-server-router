import { callMCPTool, MCPToolResult } from '../client.js';

interface SearchCodeInput { q: string; page?: number; per_page?: number; }
interface SearchUsersInput { q: string; page?: number; per_page?: number; }

export async function searchCode(input: SearchCodeInput): Promise<MCPToolResult> {
  return callMCPTool('mcp__github__search_code', input);
}

export async function searchUsers(input: SearchUsersInput): Promise<MCPToolResult> {
  return callMCPTool('mcp__github__search_users', input);
}

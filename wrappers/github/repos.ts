import { callMCPTool, MCPToolResult } from '../client.js';

interface SearchReposInput { query: string; page?: number; perPage?: number; }
interface CreateRepoInput { name: string; description?: string; private?: boolean; autoInit?: boolean; }
interface ForkRepoInput { owner: string; repo: string; organization?: string; }

export async function searchRepositories(input: SearchReposInput): Promise<MCPToolResult> {
  return callMCPTool('mcp__github__search_repositories', input);
}

export async function createRepository(input: CreateRepoInput): Promise<MCPToolResult> {
  return callMCPTool('mcp__github__create_repository', input);
}

export async function forkRepository(input: ForkRepoInput): Promise<MCPToolResult> {
  return callMCPTool('mcp__github__fork_repository', input);
}

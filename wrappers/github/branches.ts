import { callMCPTool, MCPToolResult } from '../client.js';

interface CreateBranchInput { owner: string; repo: string; branch: string; from_branch?: string; }
interface ListCommitsInput { owner: string; repo: string; sha?: string; page?: number; }

export async function createBranch(input: CreateBranchInput): Promise<MCPToolResult> {
  return callMCPTool('mcp__github__create_branch', input);
}

export async function listCommits(input: ListCommitsInput): Promise<MCPToolResult> {
  return callMCPTool('mcp__github__list_commits', input);
}

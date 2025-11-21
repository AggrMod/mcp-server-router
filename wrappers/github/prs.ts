import { callMCPTool, MCPToolResult } from '../client.js';

interface CreatePRInput { owner: string; repo: string; title: string; head: string; base: string; body?: string; }
interface GetPRInput { owner: string; repo: string; pull_number: number; }
interface ListPRsInput { owner: string; repo: string; state?: 'open' | 'closed' | 'all'; }
interface MergePRInput { owner: string; repo: string; pull_number: number; merge_method?: 'merge' | 'squash' | 'rebase'; }

export async function createPullRequest(input: CreatePRInput): Promise<MCPToolResult> {
  return callMCPTool('mcp__github__create_pull_request', input);
}

export async function getPullRequest(input: GetPRInput): Promise<MCPToolResult> {
  return callMCPTool('mcp__github__get_pull_request', input);
}

export async function listPullRequests(input: ListPRsInput): Promise<MCPToolResult> {
  return callMCPTool('mcp__github__list_pull_requests', input);
}

export async function mergePullRequest(input: MergePRInput): Promise<MCPToolResult> {
  return callMCPTool('mcp__github__merge_pull_request', input);
}

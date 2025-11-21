import { callMCPTool, MCPToolResult } from '../client.js';

interface CreateIssueInput { owner: string; repo: string; title: string; body?: string; labels?: string[]; }
interface GetIssueInput { owner: string; repo: string; issue_number: number; }
interface ListIssuesInput { owner: string; repo: string; state?: 'open' | 'closed' | 'all'; }
interface UpdateIssueInput { owner: string; repo: string; issue_number: number; title?: string; body?: string; state?: 'open' | 'closed'; }

export async function createIssue(input: CreateIssueInput): Promise<MCPToolResult> {
  return callMCPTool('mcp__github__create_issue', input);
}

export async function getIssue(input: GetIssueInput): Promise<MCPToolResult> {
  return callMCPTool('mcp__github__get_issue', input);
}

export async function listIssues(input: ListIssuesInput): Promise<MCPToolResult> {
  return callMCPTool('mcp__github__list_issues', input);
}

export async function updateIssue(input: UpdateIssueInput): Promise<MCPToolResult> {
  return callMCPTool('mcp__github__update_issue', input);
}

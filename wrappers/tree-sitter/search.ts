import { callMCPTool, MCPToolResult } from '../client.js';

interface FindTextInput { project: string; pattern: string; file_pattern?: string; max_results?: number; }
interface RunQueryInput { project: string; query: string; file_path?: string; language?: string; }
interface FindUsageInput { project: string; symbol: string; file_path?: string; }
interface FindSimilarInput { project: string; snippet: string; threshold?: number; }

export async function findText(input: FindTextInput): Promise<MCPToolResult> {
  return callMCPTool('mcp__tree-sitter__find_text', input);
}

export async function runQuery(input: RunQueryInput): Promise<MCPToolResult> {
  return callMCPTool('mcp__tree-sitter__run_query', input);
}

export async function findUsage(input: FindUsageInput): Promise<MCPToolResult> {
  return callMCPTool('mcp__tree-sitter__find_usage', input);
}

export async function findSimilarCode(input: FindSimilarInput): Promise<MCPToolResult> {
  return callMCPTool('mcp__tree-sitter__find_similar_code', input);
}

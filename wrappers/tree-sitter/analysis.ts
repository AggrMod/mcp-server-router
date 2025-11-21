import { callMCPTool, MCPToolResult } from '../client.js';

interface AnalyzeProjectInput { project: string; scan_depth?: number; }
interface AnalyzeComplexityInput { project: string; file_path: string; }
interface GetDepsInput { project: string; file_path: string; }

export async function analyzeProject(input: AnalyzeProjectInput): Promise<MCPToolResult> {
  return callMCPTool('mcp__tree-sitter__analyze_project', input);
}

export async function analyzeComplexity(input: AnalyzeComplexityInput): Promise<MCPToolResult> {
  return callMCPTool('mcp__tree-sitter__analyze_complexity', input);
}

export async function getDependencies(input: GetDepsInput): Promise<MCPToolResult> {
  return callMCPTool('mcp__tree-sitter__get_dependencies', input);
}

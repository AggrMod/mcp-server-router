import { callMCPTool, MCPToolResult } from '../client.js';

interface GetAstInput { project: string; path: string; max_depth?: number; }
interface GetSymbolsInput { project: string; file_path: string; symbol_types?: string[]; }
interface GetNodeInput { project: string; path: string; row: number; column: number; }

export async function getAst(input: GetAstInput): Promise<MCPToolResult> {
  return callMCPTool('mcp__tree-sitter__get_ast', input);
}

export async function getSymbols(input: GetSymbolsInput): Promise<MCPToolResult> {
  return callMCPTool('mcp__tree-sitter__get_symbols', input);
}

export async function getNodeAtPosition(input: GetNodeInput): Promise<MCPToolResult> {
  return callMCPTool('mcp__tree-sitter__get_node_at_position', input);
}

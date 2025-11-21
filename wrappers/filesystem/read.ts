import { callMCPTool, MCPToolResult } from '../client.js';

interface ReadFileInput { path: string; head?: number; tail?: number; }
interface ReadMultipleInput { paths: string[]; }
interface ReadMediaInput { path: string; }

export async function readFile(input: ReadFileInput): Promise<MCPToolResult> {
  return callMCPTool('mcp__filesystem__read_text_file', input);
}

export async function readMultipleFiles(input: ReadMultipleInput): Promise<MCPToolResult> {
  return callMCPTool('mcp__filesystem__read_multiple_files', input);
}

export async function readMediaFile(input: ReadMediaInput): Promise<MCPToolResult> {
  return callMCPTool('mcp__filesystem__read_media_file', input);
}

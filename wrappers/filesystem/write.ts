import { callMCPTool, MCPToolResult } from '../client.js';

interface WriteFileInput { path: string; content: string; }
interface EditFileInput { path: string; edits: { oldText: string; newText: string }[]; dryRun?: boolean; }

export async function writeFile(input: WriteFileInput): Promise<MCPToolResult> {
  return callMCPTool('mcp__filesystem__write_file', input);
}

export async function editFile(input: EditFileInput): Promise<MCPToolResult> {
  return callMCPTool('mcp__filesystem__edit_file', input);
}

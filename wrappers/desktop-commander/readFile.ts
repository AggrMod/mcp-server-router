import { callMCPTool, MCPToolResult } from '../client.js';

interface ReadFileInput { path: string; offset?: number; length?: number; isUrl?: boolean; }

/** Read file contents */
export async function readFile(input: ReadFileInput): Promise<MCPToolResult> {
  return callMCPTool('mcp__desktop-commander__read_file', input);
}

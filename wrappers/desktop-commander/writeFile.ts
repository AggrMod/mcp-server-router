import { callMCPTool, MCPToolResult } from '../client.js';

interface WriteFileInput { path: string; content: string; mode?: 'rewrite' | 'append'; }

/** Write or append to file */
export async function writeFile(input: WriteFileInput): Promise<MCPToolResult> {
  return callMCPTool('mcp__desktop-commander__write_file', input);
}

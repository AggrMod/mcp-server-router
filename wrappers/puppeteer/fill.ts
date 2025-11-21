import { callMCPTool, MCPToolResult } from '../client.js';

interface FillInput { selector: string; value: string; }

/** Fill input field */
export async function fill(input: FillInput): Promise<MCPToolResult> {
  return callMCPTool('mcp__server-puppeteer__puppeteer_fill', input);
}

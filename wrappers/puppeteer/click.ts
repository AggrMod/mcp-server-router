import { callMCPTool, MCPToolResult } from '../client.js';

interface ClickInput { selector: string; }

/** Click element */
export async function click(input: ClickInput): Promise<MCPToolResult> {
  return callMCPTool('mcp__server-puppeteer__puppeteer_click', input);
}

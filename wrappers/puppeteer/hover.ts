import { callMCPTool, MCPToolResult } from '../client.js';

interface HoverInput { selector: string; }

/** Hover over element */
export async function hover(input: HoverInput): Promise<MCPToolResult> {
  return callMCPTool('mcp__server-puppeteer__puppeteer_hover', input);
}

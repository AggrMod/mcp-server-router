import { callMCPTool, MCPToolResult } from '../client.js';

interface NavigateInput { url: string; launchOptions?: object; }

/** Navigate to URL */
export async function navigate(input: NavigateInput): Promise<MCPToolResult> {
  return callMCPTool('mcp__server-puppeteer__puppeteer_navigate', input);
}

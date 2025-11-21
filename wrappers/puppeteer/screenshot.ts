import { callMCPTool, MCPToolResult } from '../client.js';

interface ScreenshotInput { name: string; selector?: string; width?: number; height?: number; }

/** Take screenshot */
export async function screenshot(input: ScreenshotInput): Promise<MCPToolResult> {
  return callMCPTool('mcp__server-puppeteer__puppeteer_screenshot', input);
}

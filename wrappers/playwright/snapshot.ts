import { callMCPTool, MCPToolResult } from '../client.js';

/** Get accessibility snapshot (better than screenshot) */
export async function snapshot(): Promise<MCPToolResult> {
  return callMCPTool('mcp__playwright__browser_snapshot', {});
}

interface ScreenshotInput { filename?: string; fullPage?: boolean; type?: 'png' | 'jpeg'; }

/** Take screenshot */
export async function takeScreenshot(input?: ScreenshotInput): Promise<MCPToolResult> {
  return callMCPTool('mcp__playwright__browser_take_screenshot', input || {});
}

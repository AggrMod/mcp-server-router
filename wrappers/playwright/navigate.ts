import { callMCPTool, MCPToolResult } from '../client.js';

interface NavigateInput { url: string; }

/** Navigate to URL */
export async function navigate(input: NavigateInput): Promise<MCPToolResult> {
  return callMCPTool('mcp__playwright__browser_navigate', input);
}

/** Go back */
export async function navigateBack(): Promise<MCPToolResult> {
  return callMCPTool('mcp__playwright__browser_navigate_back', {});
}

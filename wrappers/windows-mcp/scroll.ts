import { callMCPTool, MCPToolResult } from '../client.js';

interface ScrollInput {
  loc?: [number, number];
  type?: 'horizontal' | 'vertical';
  direction?: 'up' | 'down' | 'left' | 'right';
  wheel_times?: number;
}

/** Scroll at coordinates */
export async function scrollTool(input?: ScrollInput): Promise<MCPToolResult> {
  return callMCPTool('mcp__windows-mcp__Scroll-Tool', input || {});
}

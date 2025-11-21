import { callMCPTool, MCPToolResult } from '../client.js';

interface ClickInput { element: string; ref: string; button?: 'left' | 'right' | 'middle'; }
interface HoverInput { element: string; ref: string; }
interface DragInput { startElement: string; startRef: string; endElement: string; endRef: string; }

/** Click element */
export async function click(input: ClickInput): Promise<MCPToolResult> {
  return callMCPTool('mcp__playwright__browser_click', input);
}

/** Hover element */
export async function hover(input: HoverInput): Promise<MCPToolResult> {
  return callMCPTool('mcp__playwright__browser_hover', input);
}

/** Drag and drop */
export async function drag(input: DragInput): Promise<MCPToolResult> {
  return callMCPTool('mcp__playwright__browser_drag', input);
}

import { callMCPTool, MCPToolResult } from '../client.js';

interface ClickInput { loc: [number, number]; button?: 'left' | 'right' | 'middle'; clicks?: number; }
interface TypeInput { loc: [number, number]; text: string; clear?: boolean; press_enter?: boolean; }
interface MoveInput { to_loc: [number, number]; }
interface DragInput { to_loc: [number, number]; }

/** Click at coordinates */
export async function clickTool(input: ClickInput): Promise<MCPToolResult> {
  return callMCPTool('mcp__windows-mcp__Click-Tool', input);
}

/** Type text at coordinates */
export async function typeTool(input: TypeInput): Promise<MCPToolResult> {
  return callMCPTool('mcp__windows-mcp__Type-Tool', input);
}

/** Move mouse to coordinates */
export async function moveTool(input: MoveInput): Promise<MCPToolResult> {
  return callMCPTool('mcp__windows-mcp__Move-Tool', input);
}

/** Drag to coordinates */
export async function dragTool(input: DragInput): Promise<MCPToolResult> {
  return callMCPTool('mcp__windows-mcp__Drag-Tool', input);
}

import { callMCPTool, MCPToolResult } from '../client.js';

interface ShortcutInput { shortcut: string; }

/** Execute keyboard shortcut (e.g., 'ctrl+c', 'alt+tab', 'win+r') */
export async function shortcutTool(input: ShortcutInput): Promise<MCPToolResult> {
  return callMCPTool('mcp__windows-mcp__Shortcut-Tool', input);
}

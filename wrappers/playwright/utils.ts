import { callMCPTool, MCPToolResult } from '../client.js';

interface TabsInput { action: 'list' | 'new' | 'close' | 'select'; index?: number; }
interface WaitInput { text?: string; textGone?: string; time?: number; }
interface EvaluateInput { function: string; element?: string; ref?: string; }

/** Manage browser tabs */
export async function tabs(input: TabsInput): Promise<MCPToolResult> {
  return callMCPTool('mcp__playwright__browser_tabs', input);
}

/** Wait for condition */
export async function waitFor(input: WaitInput): Promise<MCPToolResult> {
  return callMCPTool('mcp__playwright__browser_wait_for', input);
}

/** Evaluate JavaScript */
export async function evaluate(input: EvaluateInput): Promise<MCPToolResult> {
  return callMCPTool('mcp__playwright__browser_evaluate', input);
}

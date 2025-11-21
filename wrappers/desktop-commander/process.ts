import { callMCPTool, MCPToolResult } from '../client.js';

interface StartProcessInput { command: string; timeout_ms: number; shell?: string; }
interface ReadOutputInput { pid: number; timeout_ms?: number; }
interface InteractInput { pid: number; input: string; timeout_ms?: number; }

/** Start a terminal process */
export async function startProcess(input: StartProcessInput): Promise<MCPToolResult> {
  return callMCPTool('mcp__desktop-commander__start_process', input);
}

/** Read process output */
export async function readProcessOutput(input: ReadOutputInput): Promise<MCPToolResult> {
  return callMCPTool('mcp__desktop-commander__read_process_output', input);
}

/** Send input to running process */
export async function interactWithProcess(input: InteractInput): Promise<MCPToolResult> {
  return callMCPTool('mcp__desktop-commander__interact_with_process', input);
}

import { callMCPTool, MCPToolResult } from '../client.js';

interface PowershellInput { command: string; }

/** Execute PowerShell commands */
export async function powershellTool(input: PowershellInput): Promise<MCPToolResult> {
  return callMCPTool('mcp__windows-mcp__Powershell-Tool', input);
}

import { callMCPTool, MCPToolResult } from '../client.js';

interface SelectInput { selector: string; value: string; }

/** Select dropdown option */
export async function select(input: SelectInput): Promise<MCPToolResult> {
  return callMCPTool('mcp__server-puppeteer__puppeteer_select', input);
}

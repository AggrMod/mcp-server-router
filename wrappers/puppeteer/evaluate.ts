import { callMCPTool, MCPToolResult } from '../client.js';

interface EvaluateInput { script: string; }

/** Execute JavaScript in browser */
export async function evaluate(input: EvaluateInput): Promise<MCPToolResult> {
  return callMCPTool('mcp__server-puppeteer__puppeteer_evaluate', input);
}

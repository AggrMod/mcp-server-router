import { callMCPTool, MCPToolResult } from '../client.js';

interface SendMessageInput { title?: string; body?: string; topic?: string; registration_token?: string; }

export async function sendMessage(input: SendMessageInput): Promise<MCPToolResult> {
  return callMCPTool('mcp__firebase__messaging_send_message', input);
}

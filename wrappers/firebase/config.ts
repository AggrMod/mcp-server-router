import { callMCPTool, MCPToolResult } from '../client.js';

interface InitInput { features: object; }
interface GetRulesInput { type: 'firestore' | 'rtdb' | 'storage'; }
interface ValidateRulesInput { type: 'firestore' | 'storage' | 'rtdb'; source?: string; source_file?: string; }

export async function init(input: InitInput): Promise<MCPToolResult> {
  return callMCPTool('mcp__firebase__firebase_init', input);
}

export async function getSecurityRules(input: GetRulesInput): Promise<MCPToolResult> {
  return callMCPTool('mcp__firebase__firebase_get_security_rules', input);
}

export async function validateSecurityRules(input: ValidateRulesInput): Promise<MCPToolResult> {
  return callMCPTool('mcp__firebase__firebase_validate_security_rules', input);
}

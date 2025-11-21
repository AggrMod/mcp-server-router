import { callMCPTool, MCPToolResult } from '../client.js';

interface TypeInput { element: string; ref: string; text: string; submit?: boolean; }
interface FormField { name: string; type: string; ref: string; value: string; }
interface FillFormInput { fields: FormField[]; }
interface SelectInput { element: string; ref: string; values: string[]; }

/** Type text */
export async function type(input: TypeInput): Promise<MCPToolResult> {
  return callMCPTool('mcp__playwright__browser_type', input);
}

/** Fill multiple form fields */
export async function fillForm(input: FillFormInput): Promise<MCPToolResult> {
  return callMCPTool('mcp__playwright__browser_fill_form', input);
}

/** Select dropdown option */
export async function selectOption(input: SelectInput): Promise<MCPToolResult> {
  return callMCPTool('mcp__playwright__browser_select_option', input);
}

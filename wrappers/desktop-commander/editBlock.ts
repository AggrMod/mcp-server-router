import { callMCPTool, MCPToolResult } from '../client.js';

interface EditBlockInput { file_path: string; old_string: string; new_string: string; expected_replacements?: number; }

/** Surgical text replacement in files */
export async function editBlock(input: EditBlockInput): Promise<MCPToolResult> {
  return callMCPTool('mcp__desktop-commander__edit_block', input);
}

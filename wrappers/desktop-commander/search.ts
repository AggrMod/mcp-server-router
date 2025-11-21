import { callMCPTool, MCPToolResult } from '../client.js';

interface StartSearchInput { path: string; pattern: string; searchType?: 'files' | 'content'; filePattern?: string; }
interface GetResultsInput { sessionId: string; offset?: number; length?: number; }
interface StopSearchInput { sessionId: string; }

/** Start streaming search */
export async function startSearch(input: StartSearchInput): Promise<MCPToolResult> {
  return callMCPTool('mcp__desktop-commander__start_search', input);
}

/** Get more search results */
export async function getMoreSearchResults(input: GetResultsInput): Promise<MCPToolResult> {
  return callMCPTool('mcp__desktop-commander__get_more_search_results', input);
}

/** Stop active search */
export async function stopSearch(input: StopSearchInput): Promise<MCPToolResult> {
  return callMCPTool('mcp__desktop-commander__stop_search', input);
}

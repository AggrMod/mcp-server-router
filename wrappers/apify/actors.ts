import { callMCPTool, MCPToolResult } from '../client.js';

interface CallActorInput {
  actorId: string;
  input?: Record<string, unknown>;
}

interface GetActorOutputInput {
  runId: string;
}

interface SearchActorsInput {
  query: string;
  limit?: number;
}

interface FetchActorDetailsInput {
  actorId: string;
}

/** Run an Apify actor */
export async function callActor(input: CallActorInput): Promise<MCPToolResult> {
  return callMCPTool('mcp__apify__call-actor', input);
}

/** Get actor run output/results */
export async function getActorOutput(input: GetActorOutputInput): Promise<MCPToolResult> {
  return callMCPTool('mcp__apify__get-actor-output', input);
}

/** Search for actors in Apify store */
export async function searchActors(input: SearchActorsInput): Promise<MCPToolResult> {
  return callMCPTool('mcp__apify__search-actors', input);
}

/** Get actor details */
export async function fetchActorDetails(input: FetchActorDetailsInput): Promise<MCPToolResult> {
  return callMCPTool('mcp__apify__fetch-actor-details', input);
}

/** Search Apify documentation */
export async function searchApifyDocs(query: string): Promise<MCPToolResult> {
  return callMCPTool('mcp__apify__search-apify-docs', { query });
}

/** Fetch Apify documentation page */
export async function fetchApifyDocs(url: string): Promise<MCPToolResult> {
  return callMCPTool('mcp__apify__fetch-apify-docs', { url });
}

// Legacy alias
export const runActor = callActor;

import { callMCPTool, MCPToolResult } from '../client.js';

interface RunActorInput {
  actorId: string;
  input?: Record<string, unknown>;
}

interface GetDatasetInput {
  datasetId: string;
  limit?: number;
  offset?: number;
}

interface GetActorRunsInput {
  actorId: string;
  limit?: number;
}

/** Run an Apify actor */
export async function runActor(input: RunActorInput): Promise<MCPToolResult> {
  return callMCPTool('mcp__apify__actor_run', input);
}

/** Get dataset results */
export async function getDataset(input: GetDatasetInput): Promise<MCPToolResult> {
  return callMCPTool('mcp__apify__dataset_get', input);
}

/** Get actor run history */
export async function getActorRuns(input: GetActorRunsInput): Promise<MCPToolResult> {
  return callMCPTool('mcp__apify__actor_runs', input);
}

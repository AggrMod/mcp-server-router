/**
 * MCP Server Router - Client
 * Universal client for connecting to any MCP server
 */

import { Client } from '@modelcontextprotocol/sdk/client/index.js';
import { StdioClientTransport } from '@modelcontextprotocol/sdk/client/stdio.js';
import { getEnabledServers, ServerConfig } from './config.js';

export interface MCPToolResult<T = unknown> {
  success: boolean;
  data?: T;
  error?: string;
}

// Connected client cache
const clients = new Map<string, Client>();

/**
 * Get or create a client connection to an MCP server
 */
async function getClient(serverName: string): Promise<Client> {
  if (clients.has(serverName)) {
    return clients.get(serverName)!;
  }

  const servers = getEnabledServers();
  const config = servers[serverName];

  if (!config) {
    throw new Error(`Unknown MCP server: ${serverName}. Available: ${Object.keys(servers).join(', ')}`);
  }

  const env = config.env ? { ...process.env, ...config.env } as Record<string, string> : undefined;
  const transport = new StdioClientTransport({
    command: config.command,
    args: config.args,
    env,
  });

  const client = new Client(
    { name: 'mcp-server-router', version: '1.0.0' },
    { capabilities: {} }
  );

  await client.connect(transport);
  clients.set(serverName, client);

  console.log(`[MCP] Connected to ${serverName}`);
  return client;
}

/**
 * Call an MCP tool
 * @param toolName - Full tool name: mcp__<server>__<tool>
 * @param params - Tool parameters
 */
export async function callMCPTool<T = unknown>(
  toolName: string,
  params: Record<string, unknown>
): Promise<MCPToolResult<T>> {
  try {
    // Parse: mcp__server-name__tool_name
    const parts = toolName.split('__');
    if (parts.length !== 3 || parts[0] !== 'mcp') {
      throw new Error(`Invalid tool name: ${toolName}. Expected format: mcp__<server>__<tool>`);
    }

    const serverName = parts[1];
    const actualTool = parts[2];

    const client = await getClient(serverName);

    const result = await client.callTool({
      name: actualTool,
      arguments: params
    });

    // Extract content from result
    let data: T;
    if (result.content && Array.isArray(result.content)) {
      const textContent = result.content.find((c: any) => c.type === 'text');
      data = textContent ? (textContent.text as T) : (result.content as T);
    } else {
      data = result as T;
    }

    return { success: true, data };
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    console.error(`[MCP] Error calling ${toolName}:`, message);
    return { success: false, error: message };
  }
}

/**
 * List all tools available from a server
 */
export async function listServerTools(serverName: string): Promise<string[]> {
  const client = await getClient(serverName);
  const result = await client.listTools();
  return result.tools.map(t => t.name);
}

/**
 * List all available servers
 */
export function listServers(): string[] {
  return Object.keys(getEnabledServers());
}

/**
 * Disconnect all clients
 */
export async function disconnectAll(): Promise<void> {
  for (const [name, client] of clients) {
    await client.close();
    console.log(`[MCP] Disconnected from ${name}`);
  }
  clients.clear();
}

// Cleanup on exit
process.on('exit', () => disconnectAll());
process.on('SIGINT', () => { disconnectAll(); process.exit(); });

// Re-export config functions
export { addServer, removeServer, loadConfig, saveConfig } from './config.js';

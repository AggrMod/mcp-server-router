/**
 * MCP Server Router - Configuration
 * Manages MCP server configurations from mcp-servers.json
 */

import { readFileSync, writeFileSync, existsSync } from 'fs';
import { join } from 'path';

export interface ServerConfig {
  command: string;
  args: string[];
  env?: Record<string, string>;
  description?: string;
  enabled?: boolean;
}

export interface Config {
  servers: Record<string, ServerConfig>;
}

const CONFIG_FILE = 'mcp-servers.json';

/**
 * Get config file path (checks cwd, then home dir)
 */
export function getConfigPath(): string {
  const cwdPath = join(process.cwd(), CONFIG_FILE);
  if (existsSync(cwdPath)) return cwdPath;

  const homePath = join(process.env.HOME || process.env.USERPROFILE || '', CONFIG_FILE);
  if (existsSync(homePath)) return homePath;

  return cwdPath; // Default to cwd for new config
}

/**
 * Load config from file (supports both flat and nested formats)
 */
export function loadConfig(): Config {
  const configPath = getConfigPath();

  if (!existsSync(configPath)) {
    return { servers: {} };
  }

  try {
    const content = readFileSync(configPath, 'utf-8');
    const parsed = JSON.parse(content);
    // Support both { servers: {...} } and flat { serverName: {...} } formats
    if (parsed.servers) {
      return parsed;
    }
    return { servers: parsed };
  } catch (error) {
    console.error(`Failed to load config from ${configPath}:`, error);
    return { servers: {} };
  }
}

/**
 * Save config to file
 */
export function saveConfig(config: Config): void {
  const configPath = getConfigPath();
  writeFileSync(configPath, JSON.stringify(config, null, 2));
}

/**
 * Add or update a server
 */
export function addServer(name: string, server: ServerConfig): void {
  const config = loadConfig();
  config.servers[name] = server;
  saveConfig(config);
}

/**
 * Remove a server
 */
export function removeServer(name: string): void {
  const config = loadConfig();
  delete config.servers[name];
  saveConfig(config);
}

/**
 * List all servers
 */
export function listServers(): Record<string, ServerConfig> {
  return loadConfig().servers;
}

/**
 * Resolve ${VAR} placeholders from process.env
 */
function resolveEnvVars(env: Record<string, string>): Record<string, string> {
  const resolved: Record<string, string> = {};
  for (const [key, value] of Object.entries(env)) {
    resolved[key] = value.replace(/\$\{(\w+)\}/g, (_, varName) =>
      process.env[varName] || ''
    );
  }
  return resolved;
}

/**
 * Get enabled servers only (with env vars resolved)
 */
export function getEnabledServers(): Record<string, ServerConfig> {
  const servers = loadConfig().servers;
  const enabled = Object.entries(servers).filter(([_, s]) => s.enabled !== false);

  return Object.fromEntries(
    enabled.map(([name, config]) => [
      name,
      config.env ? { ...config, env: resolveEnvVars(config.env) } : config
    ])
  );
}

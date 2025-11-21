/**
 * MCP Server Router - Web Config UI
 * Simple web interface for managing MCP server configurations
 */

import { createServer, IncomingMessage, ServerResponse } from 'http';
import { loadConfig, saveConfig, ServerConfig } from '../config.js';

const PORT = process.env.MCP_CONFIG_PORT || 3456;

const HTML = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>MCP Server Router - Config</title>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; background: #0d1117; color: #c9d1d9; padding: 2rem; }
    h1 { color: #58a6ff; margin-bottom: 1.5rem; }
    .container { max-width: 900px; margin: 0 auto; }
    .server-card { background: #161b22; border: 1px solid #30363d; border-radius: 8px; padding: 1rem; margin-bottom: 1rem; }
    .server-card h3 { color: #58a6ff; margin-bottom: 0.5rem; }
    .server-card .command { font-family: monospace; background: #0d1117; padding: 0.5rem; border-radius: 4px; font-size: 0.85rem; color: #8b949e; }
    .server-card .env { margin-top: 0.5rem; font-size: 0.85rem; color: #7ee787; }
    .btn { background: #238636; color: white; border: none; padding: 0.5rem 1rem; border-radius: 6px; cursor: pointer; font-size: 0.9rem; }
    .btn:hover { background: #2ea043; }
    .btn-danger { background: #da3633; }
    .btn-danger:hover { background: #f85149; }
    .actions { margin-top: 0.75rem; display: flex; gap: 0.5rem; }
    .toggle { display: flex; align-items: center; gap: 0.5rem; }
    .toggle input { width: 18px; height: 18px; }
    #add-form { background: #161b22; border: 1px solid #30363d; border-radius: 8px; padding: 1.5rem; margin-bottom: 2rem; }
    #add-form h2 { color: #c9d1d9; margin-bottom: 1rem; font-size: 1.1rem; }
    .form-row { margin-bottom: 1rem; }
    .form-row label { display: block; margin-bottom: 0.25rem; color: #8b949e; font-size: 0.85rem; }
    .form-row input, .form-row textarea { width: 100%; background: #0d1117; border: 1px solid #30363d; color: #c9d1d9; padding: 0.5rem; border-radius: 4px; font-family: monospace; }
    .form-row textarea { min-height: 60px; resize: vertical; }
    .status { padding: 0.75rem; border-radius: 6px; margin-bottom: 1rem; display: none; }
    .status.success { display: block; background: #238636; }
    .status.error { display: block; background: #da3633; }
  </style>
</head>
<body>
  <div class="container">
    <h1>MCP Server Router</h1>

    <div id="status" class="status"></div>

    <div id="add-form">
      <h2>Add MCP Server</h2>
      <div class="form-row">
        <label>Server Name</label>
        <input type="text" id="name" placeholder="my-server">
      </div>
      <div class="form-row">
        <label>Command</label>
        <input type="text" id="command" placeholder="npx">
      </div>
      <div class="form-row">
        <label>Arguments (JSON array)</label>
        <input type="text" id="args" placeholder='["-y", "@modelcontextprotocol/server-xyz"]'>
      </div>
      <div class="form-row">
        <label>Environment Variables (JSON object, optional)</label>
        <textarea id="env" placeholder='{"API_KEY": "your-key"}'></textarea>
      </div>
      <div class="form-row">
        <label>Description (optional)</label>
        <input type="text" id="description" placeholder="What this server does">
      </div>
      <button class="btn" onclick="addServer()">Add Server</button>
    </div>

    <h2 style="margin-bottom: 1rem; color: #c9d1d9;">Configured Servers</h2>
    <div id="servers"></div>
  </div>

  <script>
    async function loadServers() {
      const res = await fetch('/api/servers');
      const data = await res.json();
      const container = document.getElementById('servers');
      container.innerHTML = '';

      for (const [name, server] of Object.entries(data.servers)) {
        const card = document.createElement('div');
        card.className = 'server-card';
        const envKeys = server.env ? Object.keys(server.env).join(', ') : '';
        card.innerHTML = \`
          <h3>\${name}</h3>
          <p style="color: #8b949e; margin-bottom: 0.5rem;">\${server.description || ''}</p>
          <div class="command">\${server.command} \${server.args.join(' ')}</div>
          \${envKeys ? '<div class="env">ENV: ' + envKeys + '</div>' : ''}
          <div class="actions">
            <label class="toggle">
              <input type="checkbox" \${server.enabled !== false ? 'checked' : ''} onchange="toggleServer('\${name}', this.checked)">
              Enabled
            </label>
            <button class="btn btn-danger" onclick="deleteServer('\${name}')">Remove</button>
          </div>
        \`;
        container.appendChild(card);
      }
    }

    async function addServer() {
      const name = document.getElementById('name').value.trim();
      const command = document.getElementById('command').value.trim();
      const argsStr = document.getElementById('args').value.trim();
      const envStr = document.getElementById('env').value.trim();
      const description = document.getElementById('description').value.trim();

      if (!name || !command || !argsStr) {
        showStatus('Name, command, and args are required', 'error');
        return;
      }

      let args, env;
      try {
        args = JSON.parse(argsStr);
        env = envStr ? JSON.parse(envStr) : undefined;
      } catch (e) {
        showStatus('Invalid JSON in args or env', 'error');
        return;
      }

      const server = { command, args, description, enabled: true };
      if (env) server.env = env;

      const res = await fetch('/api/servers/' + name, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(server)
      });

      if (res.ok) {
        showStatus('Server added!', 'success');
        document.getElementById('name').value = '';
        document.getElementById('command').value = '';
        document.getElementById('args').value = '';
        document.getElementById('env').value = '';
        document.getElementById('description').value = '';
        loadServers();
      } else {
        showStatus('Failed to add server', 'error');
      }
    }

    async function deleteServer(name) {
      if (!confirm('Remove ' + name + '?')) return;
      await fetch('/api/servers/' + name, { method: 'DELETE' });
      loadServers();
    }

    async function toggleServer(name, enabled) {
      const res = await fetch('/api/servers');
      const data = await res.json();
      const server = data.servers[name];
      server.enabled = enabled;
      await fetch('/api/servers/' + name, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(server)
      });
    }

    function showStatus(msg, type) {
      const el = document.getElementById('status');
      el.textContent = msg;
      el.className = 'status ' + type;
      setTimeout(() => el.className = 'status', 3000);
    }

    loadServers();
  </script>
</body>
</html>`;

function parseBody(req: IncomingMessage): Promise<string> {
  return new Promise((resolve, reject) => {
    let body = '';
    req.on('data', chunk => body += chunk);
    req.on('end', () => resolve(body));
    req.on('error', reject);
  });
}

const server = createServer(async (req: IncomingMessage, res: ServerResponse) => {
  const url = req.url || '/';

  // CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  // Serve UI
  if (url === '/' && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(HTML);
    return;
  }

  // API: Get all servers
  if (url === '/api/servers' && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(loadConfig()));
    return;
  }

  // API: Add/update server
  if (url.startsWith('/api/servers/') && req.method === 'PUT') {
    const name = url.split('/')[3];
    const body = await parseBody(req);
    const server: ServerConfig = JSON.parse(body);

    const config = loadConfig();
    config.servers[name] = server;
    saveConfig(config);

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ success: true }));
    return;
  }

  // API: Delete server
  if (url.startsWith('/api/servers/') && req.method === 'DELETE') {
    const name = url.split('/')[3];

    const config = loadConfig();
    delete config.servers[name];
    saveConfig(config);

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ success: true }));
    return;
  }

  res.writeHead(404);
  res.end('Not found');
});

server.listen(PORT, () => {
  console.log(`MCP Server Router Config UI running at http://localhost:${PORT}`);
});

import { defineConfig, loadEnv, ConfigEnv, ProxyOptions } from 'vite';
import react from '@vitejs/plugin-react';
import { IncomingMessage, ServerResponse } from 'http';
import { ClientRequest } from 'http';

interface EnvVariables {
    VITE_API_KEY: string;
}

// Helper function to create typed proxy configuration
const createProxyConfig = (
    targetUrl: string,
    rewritePath: RegExp,
    apiKey: string
): ProxyOptions => ({
    target: targetUrl,
    changeOrigin: true,
    secure: false,
    timeout: 10000, // Increase the timeout (e.g., 10 seconds)
    rewrite: (path: string) => path.replace(rewritePath, ""),
    configure: (proxy) => {
        proxy.on('proxyReq', (proxyReq: ClientRequest, req: IncomingMessage, res: ServerResponse) => {
            console.log(`CLIENT: proxyReq - ${req.url}`);
            console.log(`${rewritePath}`)
            proxyReq.setHeader('x-api-key', apiKey);
        });
        proxy.on('error', (err: Error, _req: IncomingMessage, _res: ServerResponse) => {
            console.error('proxy error', err);
        });
        proxy.on('proxyRes', (proxyRes: IncomingMessage, req: IncomingMessage) => {
            console.log(`Received Response from Target: ${proxyRes.statusCode} ${req.url}`);
        });
    },
});

// Main Vite config
export default defineConfig(({ mode }: ConfigEnv) => {
    const env = loadEnv(mode, process.cwd()) as unknown as EnvVariables;
    const API_KEY = env.VITE_API_KEY;
    const API_URL = 'https://data.fingrid.fi/api';
    const FINGRID_GRAPH_API_URL = 'https://www.fingrid.fi/api/graph';

    return {
        plugins: [react()],
        server: {
            hmr: true, // Hot-module replacement
            /*optimizeDeps: {
                entries: [

                ], // Disables entry pre-fetching
            },*/
            proxy: {
                '/api/health': createProxyConfig(`${API_URL}/health`, /^\/api\/health/, API_KEY),
                '/api/graph/power-system-state': createProxyConfig(`${FINGRID_GRAPH_API_URL}/power-system-state`, /^\/api\/graph\/power-system-state/, API_KEY),
            },
        },
    };
});

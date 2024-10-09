import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, process.cwd());
    const API_KEY = env.VITE_API_KEY; // Use VITE_ prefix for client-side environment variables
    const API_URL = 'http://localhost:3000/api';
    const FINGRID_GRAPH_API_URL = 'http://localhost:3000/api/graph';

    return {
        plugins: [react()],
        server: {
            proxy: {
                '/api/graph': {
                    target: FINGRID_GRAPH_API_URL,
                    changeOrigin: true,
                    secure: false,
                    rewrite: (p) => p.replace(/^\/api/, ""),
                    configure: (proxy) => {
                        proxy.on('proxyReq', (proxyReq, _req, _res) => {
                            console.log('CLIENT: Fingrid proxyReq');
                            proxyReq.setHeader('x-api-key', API_KEY); // Add API key if needed
                        });
                        proxy.on('error', (err, _req, _res) => {
                            console.log('Fingrid proxy error', err);
                        });
                        proxy.on('proxyRes', (proxyRes, req, _res) => {
                            console.log('Received Response from Fingrid Target:', proxyRes.statusCode, req.url);
                        });
                    },
                },
                '/api': {
                    target: API_URL, // The Express proxy server
                    changeOrigin: true,
                    secure: false,
                    configure: (proxy) => {
                        proxy.on('proxyReq', (proxyReq, _req, _res) => {
                            console.log('CLIENT: proxyReq');
                            console.log(API_URL);
                            proxyReq.setHeader('x-api-key', API_KEY);
                        });
                        proxy.on('error', (err, _req, _res) => {
                            console.log('proxy error', err);
                        });
                        proxy.on('proxyRes', (proxyRes, req, _res) => {
                            console.log('Received Response from the Target:', proxyRes.statusCode, req.url);
                        });
                    },
                },
            },
        }
    }
});
import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, process.cwd());
    const API_KEY = env.VITE_API_KEY; // Use VITE_ prefix for client-side environment variables
    const API_URL = 'http://localhost:3000/api';

    return {
        plugins: [react()],
        server: {
            proxy: {
                '/api': {
                    target: API_URL, // The Express proxy server
                    changeOrigin: true,
                    secure: false,
                    configure: (proxy) => {
                        proxy.on('proxyReq', (proxyReq, _req, _res) => {
                            console.log('CLIENT: proxyReq')
                            console.log(API_URL)
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
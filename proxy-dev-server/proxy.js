import express from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';
import dotenv from 'dotenv';

dotenv.config({ path: '../.env' });

const app = express();

app.use('/api', createProxyMiddleware({
    target: 'https://data.fingrid.fi',
    changeOrigin: true,
    secure: true,
    onProxyReq: (proxyReq, req, res) => {
        console.log(`Proxying request: ${req.method} ${req.url}`);
        console.log(`Headers:`, req.headers);

        const apiKey = process.env.VITE_API_KEY;
        if (!apiKey) {
            console.error('API_KEY is undefined. Ensure it is set in the .env file.');
            return res.status(500).send('API key is missing');
        }

        proxyReq.setHeader('x-api-key', apiKey);
    },
    onProxyRes: (proxyRes, req, res) => {
        console.log(`Response from target API: ${proxyRes.statusCode} ${req.url}`);
    },
    onError: (err, req, res) => {
        console.error('Proxy error:', err);
        res.status(500).send('Proxy error occurred');
    },
}));

app.listen(3000, () => {
    console.log('Proxy server running on http://localhost:3000');
});
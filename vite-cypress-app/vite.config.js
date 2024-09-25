import { defineConfig } from 'vite'
import fs from 'fs';
import path from 'path';

export default defineConfig({
    server: {
        port: 5173,
        host: 'localhost',
        https: {
            key: fs.readFileSync(path.resolve(__dirname, 'certs/localhost-key.pem')),
            cert: fs.readFileSync(path.resolve(__dirname, 'certs/localhost.pem')),
        },
    },
})
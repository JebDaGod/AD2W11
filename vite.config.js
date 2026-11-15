import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    server: {
        proxy: {
            '/api/vantaspec': {
                target: 'https://vantaspec.com',
                changeOrigin: true,
                secure: true,
                rewrite: (path) =>
                    path.replace(/^\/api\/vantaspec/, '/api')
            }
        }
    },
    test: {
        globals: true,
        environment: 'jsdom',
        setupFiles: './src/setupTests.js'
    }
});
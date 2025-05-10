import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    build: {
        outDir: 'dist',
        target: 'esnext'
    },
    preview: {
        port: 3000,
        strictPort: true,
        host: '0.0.0.0',
        allowedHosts: true
    },
    server: {
        host: true,
        port: 3000,
        allowedHosts: true
    }
});

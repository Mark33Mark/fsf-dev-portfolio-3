import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react() ],
    server: {
        open: true,
        port: 5555,
        strictPort: true,
        watch: {
            // completely block Vite from tracking heavy node_modules folders over SMB
            ignored: ['**/node_modules/**', '**/.git/**', '**/.netlify/**'],
            // uses lightning-fast native polling configurations for shared storage maps
            usePolling: true,
            interval: 100,
        },
    },
    resolve: {
        // Force Vite to look only at core modules instead of checking deeply for symlinks or alternative extension targets
        preserveSymlinks: true,
        extensions: ['.js', '.jsx', '.ts', '.tsx'], // Explicitly limit searches to these extensions
    },
    // Forces the local cache entirely off my network share
    cacheDir: 'C:/temp/vite-cache/fsf-portfolio-3',

    build: {
        minify: true,
        chunkSizeWarningLimit: 1500,
    },

    test: {
        css: true,
        globals: true,
        environment: 'jsdom',
        setupFiles: './tests/utilities/setupTests.js',
        coverage: {
            enable: true,
            exclude: [
                'src/main.jsx',
                'src/index.jsx',
                '**/coverage/**',
                'dist/**',
                '**/node_modules/**',
                '**/[.]**',
                'packages/*/test?(s)/**',
                '**/*.d.ts',
                '**/virtual:*',
                '**/__x00__*',
                '**/\x00*',
                'cypress/**',
                '**/test?(s)/**',
                '**/test?(-*).?(c|m)[jt]s?(x)',
                '**/*{.,-}{test,spec,bench,benchmark}?(-d).?(c|m)[jt]s?(x)',
                '**/__tests__/**',
                '**/{karma,rollup,webpack,vite,vitest,jest,ava,babel,nyc,cypress,tsup,build,eslint,prettier}.config.*',
                '**/vitest.{workspace,projects}.[jt]s?(on)',
                '**/.{eslint,mocha,prettier}rc.{?(c|m)js,yml}',
            ],
            reportsDirectory: './tests/utilities/coverage',
            reporter: ['text', 'json', 'html'],
            provider: 'v8', // or 'istanbul',
            restoreMocks: true,
        },
    },
});

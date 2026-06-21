import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';
import { excludeFolderFromBuild } from './utils_build/excludeFolderFromBuild';

export default defineConfig({
    plugins: [
        react(),
        VitePWA({
            registerType: 'autoUpdate', // updates the service worker when changes detected
            injectRegsiter: null, // I'm using my own custom service worker registration in the app's entry point
            includeAssets: ['logo.svg', 'apple_touch_icon.png', 'mask_icon.svg'],
            workbox: {
                // force workbox to only scan the final build output directory
                globDirectory: 'dist',
                // only precache essential assets, ignoring maps or huge media
                globPatterns: ['assets/**/*.{js,css}', 'index.html', '*.{ico,png,svg,webp}'],
                // Forces workbox-build to skip parsing map configurations
                sourcemap: false,
                // prevent hanging on massive files
                maximumFileSizeToCacheInBytes: 3000000,
            },
            manifest: {
                name: "Mark Watson's Portfolio",
                short_name: 'MW Portfolio',
                description: "Mark Watson's portfolio, a highly skilled full stack developer.",
                orientation: 'any',
                id: '/',
                theme_color: '#fcf000',
                display_override: ["window-controls-overlay"],
                icons: [
                    {
                        src: '/icons/mask_icon.svg',
                        sizes: '192x192',
                        type: 'image/svg+xml',
                        purpose: 'any maskable',
                    },
                    {
                        src: '/icons/icon-48x48.png',
                        sizes: '48x48',
                        type: 'image/png',
                    },
                    {
                        src: '/icons/icon-72x72.png',
                        sizes: '72x72',
                        type: 'image/png',
                    },
                    {
                        src: '/icons/icon-96x96.png',
                        sizes: '96x96',
                        type: 'image/png',
                    },
                    {
                        src: '/icons/icon-128x128.png',
                        sizes: '128x128',
                        type: 'image/png',
                    },
                    {
                        src: '/icons/icon-144x144.png',
                        sizes: '144x144',
                        type: 'image/png',
                    },
                    {
                        src: '/icons/icon-152x152.png',
                        sizes: '152x152',
                        type: 'image/png',
                    },
                    {
                        src: '/icons/icon-192x192.png',
                        sizes: '192x192',
                        type: 'image/png',
                    },
                    {
                        src: '/icons/icon-256x256.png',
                        sizes: '256x256',
                        type: 'image/png',
                    },
                    {
                        src: '/icons/icon-384x384.png',
                        sizes: '384x384',
                        type: 'image/png',
                    },
                    {
                        src: '/icons/icon-512x512.png',
                        sizes: '512x512',
                        type: 'image/png',
                    },
                ],
            },
        }),
        excludeFolderFromBuild(['assets/readme_assets','assets/projects/retired']),
    ],
    server: {
        open: true,
        port: 5555,
        host: true,
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
        // Prevent Vite from turning small assets/SVGs into base64 data URIs
        assetsInlineLimit: 0,
        // Ensure the output directory is completely wiped clean so old manifests disappear
        emptyOutDir: true,
        sourcemap: true,
        devSourcemap: true,
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

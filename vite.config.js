/*
 * @Author: shiruiqiang
 * @Date: 2023-07-04 16:28:31
 * @LastEditTime: 2023-07-12 13:36:37
 * @LastEditors: shiruiqiang
 * @FilePath: vite.config.js
 * @Description: shiruiqiang
 */
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@': resolve('src'),
            components: resolve('./src/components/'),
            utils: resolve('./src/utils/'),
            styles: resolve('./src/styles/'),
            hooks: resolve('./src/hooks/'),
            internal: resolve('./src/internal/'),
            type: resolve('./src/type/')
        },
    },
    server: {
        host: "127.0.0.1",
        hmr: {
            overlay: true,
        },
        port: 9000,
        open: true,
    },
});
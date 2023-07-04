/*
 * @Author: shiruiqiang
 * @Date: 2023-07-04 16:28:31
 * @LastEditTime: 2023-07-04 16:46:10
 * @LastEditors: shiruiqiang
 * @FilePath: vite.config.js
 * @Description: shiruiqiang
 */
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path, { resolve } from 'path';
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@': resolve('src'),
            components: resolve('./src/components/'),
            utils: resolve('./src/utils/'),
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
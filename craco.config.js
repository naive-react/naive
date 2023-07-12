/*
 * @Author: shiruiqiang
 * @Date: 2023-07-04 15:40:20
 * @LastEditTime: 2023-07-12 11:07:47
 * @LastEditors: shiruiqiang
 * @FilePath: craco.config.js
 * @Description: shiruiqiang
 */
const path = require('path');
module.exports = {
    webpack: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
            components: path.resolve(__dirname, './src/components/'),
            utils: path.resolve(__dirname, './src/utils/'),
            styles: path.resolve(__dirname, './src/styles/'),
            hooks: path.resolve(__dirname, './src/hooks/'),
            type: path.resolve(__dirname, './src/type/'),
            internal: path.resolve(__dirname, './src/internal/'),
        },

    },
    babel: {
        plugins: ['react-require', 'react-html-attrs'],
    },
}
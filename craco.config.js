/*
 * @Author: shiruiqiang
 * @Date: 2023-07-04 15:40:20
 * @LastEditTime: 2023-07-05 00:02:53
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
        },

    },
    babel: {
        plugins: ['react-require'],
    },
}
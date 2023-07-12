/*
 * @Author: shiruiqiang
 * @Date: 2023-07-07 12:30:06
 * @LastEditTime: 2023-07-12 11:15:35
 * @LastEditors: shiruiqiang
 * @FilePath: babel.config.js
 * @Description: shiruiqiang
 */
module.exports = {
    presets: [
        '@babel/preset-env',
        ['@babel/preset-react', { runtime: 'automatic' }],
    ],
};
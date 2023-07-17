/*
 * @Author: shiruiqiang
 * @Date: 2023-07-04 23:30:25
 * @LastEditTime: 2023-07-05 00:26:42
 * @LastEditors: shiruiqiang
 * @FilePath: dynamicInjectStyle.ts
 * @Description: shiruiqiang
 */
export const injecStyle = (styleSheet: string) => {
    const style = document.createElement('style');
    style.setAttribute('type', 'text/css');
    document.head.appendChild(style);
    const sheet = style.sheet;
    sheet?.insertRule(styleSheet, 0);
};

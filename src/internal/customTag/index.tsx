/*
 * @Author: shiruiqiang
 * @Date: 2023-08-08 15:36:46
 * @LastEditTime: 2023-08-08 15:55:29
 * @LastEditors: shiruiqiang
 * @FilePath: index.tsx
 * @Description: shiruiqiang
 */

import React, {HTMLAttributes, PropsWithChildren} from 'react';

export const CustomTag = (props: PropsWithChildren<{
    tag?: string;
    attrs?: HTMLAttributes<Element> | null;
}>) => {
    const {tag = 'div', attrs, children} = props;
    return React.createElement(tag, attrs, children);
};

/*
 * @Author: shiruiqiang
 * @Date: 2023-07-17 20:11:24
 * @LastEditTime: 2023-07-17 20:42:54
 * @LastEditors: shiruiqiang
 * @FilePath: useWatchElementSize.ts
 * @Description: shiruiqiang
 */

import {useEffect} from 'react';
export const useWatchElementSize = ({onChange, targetEle, immediate = false}: {
    onChange: (eles?: ResizeObserverEntry[]) => unknown;
    targetEle: HTMLElement | null;
    // 注意这玩意儿执行的时候并没有 elements，用时注意
    immediate?: boolean;
}) => {
    useEffect(() => {
        immediate && onChange();
    }, []);
    useEffect(() => {
        const resizeObserver = new ResizeObserver((entries) => {
            if (!Array.isArray(entries) || !entries.length) {
                return;
            }
            typeof onChange === 'function' && onChange(entries);
        });
        targetEle && resizeObserver.observe(targetEle);
        return () => {targetEle && resizeObserver.unobserve(targetEle);};
    }, [targetEle]);
};

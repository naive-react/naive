/*
 * @Author: shiruiqiang
 * @Date: 2023-08-08 15:02:22
 * @LastEditTime: 2023-08-08 22:09:12
 * @LastEditors: shiruiqiang
 * @FilePath: type.ts
 * @Description: shiruiqiang
 */
import React from 'react';
import {Size} from 'type/shape';
export type CardSize = Omit<Size, 'tiny'>;
export interface CardProps {
    // 自定义 class
    className?: string;
    // 自定样式
    style?: React.CSSProperties;
    // 是否显示卡片边框
    bordered?: boolean;
    // 是否允许关闭
    closable?: boolean;
    // 使用更深的背景色展现嵌入效果
    embedded?: boolean;
    // 卡片是否可悬浮
    hoverable?: boolean;
    // 尺寸
    size?: CardSize;
    // 卡片组件要渲染为什么标签
    tag?: string;
    // 标题
    title?: string;
    // 覆盖内容
    cover?: React.ReactNode;
    // 头部内容
    header?: React.ReactNode;
    // 头部额外内容
    headerExtra?: React.ReactNode;
    // 底部内容
    footer?: React.ReactNode;
    // 操作区域内容
    action?: React.ReactNode;
    // 点击卡片关闭时的回调
    onClose?: () => void;
}

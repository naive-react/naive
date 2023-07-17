import {ImgHTMLAttributes, ReactNode, SyntheticEvent} from 'react';
import {ObjectFit, Size} from 'type/shape';

/*
 * @Author: shiruiqiang
 * @Date: 2023-07-17 10:51:55
 * @LastEditTime: 2023-07-17 19:08:53
 * @LastEditors: shiruiqiang
 * @FilePath: type.ts
 * @Description: shiruiqiang
 */
export interface AvatarProps {
    // 边框
    bordered?: boolean;
    // 文本颜色
    color?: string;
    // 头像背景色
    backgroundColor?: string;
    // 头像加载失败时显示的图片的地址
    fallBackSrc?: string;
    // 组件中 img 元素的属性
    imgProps?: ImgHTMLAttributes<any>;
    // 头像的图片在容器内的的适应类型
    objectFit?: ObjectFit;
    // 加载失败的渲染函数
    renderFallback?: ReactNode;
    // 占位的渲染函数
    renderPlaceholder?: ReactNode;
    // 头像是否圆形
    round?: boolean;
    // 头像的尺寸
    size?: Omit<Size, 'tiny'> | number;
    // 头像地址
    src?: string;
    // 头像的图片加载失败执行的回调
    onError?: (e: SyntheticEvent) => void;
}

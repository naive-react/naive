/*
 * @Author: shiruiqiang
 * @Date: 2023-07-04 14:39:41
 * @LastEditTime: 2023-07-05 17:31:46
 * @LastEditors: shiruiqiang
 * @FilePath: types.ts
 * @Description: shiruiqiang
 */
import {HTMLAttributeAnchorTarget, MouseEvent} from 'react';
import {type Size} from '../../../type/shape';

type Type = 'default' | 'tertiary' | 'primary' | 'info' | 'success' | 'warning' | 'error'

export interface ButtonProps {
  // 文本按钮
  text?: boolean;
  // 圆角按钮
  round?: boolean;
  // 透明背景
  ghost?: boolean;
  // 禁用按钮（包括事件）
  disabled?: boolean;
  // 虚线按钮
  dashed?: boolean;
  // 边框
  bordered?: boolean;
  // 尺寸
  size?: Size;
  // 类型
  type?: Type;
  // 次要按钮
  secondary?: boolean;
  // 加粗
  strong?: boolean;
  // 次次要按钮
  lesser?: boolean;
  // 次次次要按钮
  quaternary?: boolean;
  // 自定义类名
  className?: string;
  // 链接按钮
  link?: boolean;
  // 链接跳转地址，当 link 为 true 的时候生效
  href?: string;
  // 相当于 a 链接的 target 属性，href 存在时生效 默认为：__blank
  target?: HTMLAttributeAnchorTarget;
  // 点击事件
  onClick?: (event: MouseEvent) => void;
};

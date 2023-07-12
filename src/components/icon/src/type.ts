/*
 * @Author: shiruiqiang
 * @Date: 2023-07-12 09:20:53
 * @LastEditTime: 2023-07-12 10:35:27
 * @LastEditors: shiruiqiang
 * @FilePath: type.ts
 * @Description: shiruiqiang
 */
import {CSSProperties, ReactNode} from 'react';

type DepthType = 1 | 2 | 3 | 4 | 5;

export interface IconProps {
  size?: number | string;
  color?: string;
  depth?: DepthType;
  component?: ReactNode;
}

export interface IconWrapperProps {
  size?: number | string;
  color?: string;
  className?: string;
  styles?: CSSProperties;
  'border-radius'?: number;
}

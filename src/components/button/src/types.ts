/*
 * @Author: shiruiqiang
 * @Date: 2023-07-04 14:39:41
 * @LastEditTime: 2023-07-05 13:47:40
 * @LastEditors: shiruiqiang
 * @FilePath: types.ts
 * @Description: shiruiqiang
 */
import {type Size} from '../../../type/shape';

type Type = 'default' | 'tertiary' | 'primary' | 'info' | 'success' | 'warning' | 'error'

export interface ButtonProps {
  text?: boolean;
  'text-color'?: string;
  round?: boolean;
  ghost?: boolean;
  disabled?: boolean;
  dashed?: boolean;
  color?: string;
  circle?: boolean;
  bordered?: boolean;
  size?: Size;
  type?: Type;
  secondary?: boolean;
  strong?: boolean;
  lesser?: boolean;
  quaternary?: boolean;
};

/*
 * @Author: shiruiqiang
 * @Date: 2023-07-12 09:17:33
 * @LastEditTime: 2023-07-13 21:48:15
 * @LastEditors: shiruiqiang
 * @FilePath: icon.tsx
 * @Description: shiruiqiang
 */
import {PropsWithChildren} from 'react';
import classNames from 'classnames';
import {Icon as RIcon} from '@ricons/utils';

import {IconProps, IconWrapperProps} from './type';
import './style.scss';

export const Icon = (props: PropsWithChildren<IconProps>) => {
    const {size = 18, color, depth, component, children} = props;
    const classes = classNames('n-icon', {
        [`n-icon-opacity-${depth ?? 1}`]: depth
    });
    return <div className='icon-wrapper'>
        <i className={classes} role='img'>
            <RIcon size={size} color={color}>{component ?? children}</RIcon>
        </i>
    </div>;
};

export const IconWrapper = (props: PropsWithChildren<IconWrapperProps>) => {
    const {size = 24, color, children} = props;
    return <div style={{
        width: size,
        height: size,
        backgroundColor: color,
        borderRadius: props['border-radius'],
        ...props.styles
    }} className={classNames(props.className, 'n-icon-wrapper')}>
        {children}
    </div>;
};

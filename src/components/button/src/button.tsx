/*
 * @Author: shiruiqiang
 * @Date: 2023-07-05 04:40:16
 * @LastEditTime: 2023-07-13 21:32:30
 * @LastEditors: shiruiqiang
 * @FilePath: button.tsx
 * @Description: shiruiqiang
 */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
import {PropsWithChildren, MouseEvent, useRef} from 'react';
import classNames from 'classnames';

import {ButtonProps} from './types';

import {Base} from '../../../styles';
import {Wave, WaveRef} from '../../../internal/wave';
import {warn} from 'utils/warn';
import {Loading} from 'internal/loading';
import './style.scss';

export const Button = (props: PropsWithChildren<ButtonProps>) => {
    const {
        loading = false,
        text = false,
        type = 'default',
        size = 'medium',
        strong = false,
        secondary = false,
        round = false,
        lesser = false,
        quaternary = false,
        dashed = false,
        disabled = false,
        ghost = false,
        bordered = true,
        link = false,
        target = '__blank',
        href,
        icon = null,
        className,
        onClick,
        children
    } = props;
    const waveRef = useRef<WaveRef>(null);
    const classes = classNames(
        className,
        'n-button',
        `n-${size}`,
        `n-padding-${size}`,
        `n-${type}`,
        `n-${type}-text`,
        {
            'n-strong': strong,
            'n-secondary': secondary,
            'n-round': round,
            'n-lesser': lesser,
            'n-quaternary': quaternary,
            'n-dashed': dashed,
            'n-ghost': ghost,
            'n-disabled': disabled,
            'n-no-border': !bordered,
            'n-base-text': !quaternary && !secondary && !lesser && !dashed && !ghost,
            'n-loading': loading,
            [`n-secondary-${type}`]: secondary,
            [`n-dashed-${type}`]: dashed,
            [`n-ghost-${type}`]: ghost
        }
    );
    const handleClick = (e: MouseEvent) => {
        if (!disabled && !loading) {
            if (onClick && typeof onClick === 'function') {
                onClick(e);
            }
            if (!secondary && !lesser && !quaternary) {
                waveRef.current?.play();
            }
        }
    };
    if (link && !href) {
        warn('button', 'Must require href for link!');
    }
    if (text) {
        return <span
            className={classNames(className, `n-text-${type}`, {'n-disabled': disabled})}
            onClick={handleClick}
        >{children}</span>;
    } else if (link) {
        return <a
            target={target}
            href={href}
            className={classNames(className, `n-link-${type}`, {'n-disabled': disabled})}
            onClick={handleClick}
        >{children}</a>;
    } else {
        return <button disabled={disabled} className={classes} onClick={handleClick} >
            {
                (icon ?? loading) && <div className='icon'>
                    {
                        loading
                            ? <Loading
                                strokeWidth={20}
                            ></Loading>
                            : icon
                    }
                </div>

            }
            {children}
            {
                !secondary && !lesser && !quaternary && <Wave waveSpreadColor={Base[`${type}WaveColor`]} ref={waveRef}></Wave>
            }
        </button>;
    }
};

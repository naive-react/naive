/*
 * @Author: shiruiqiang
 * @Date: 2023-08-08 15:02:42
 * @LastEditTime: 2023-08-08 22:47:45
 * @LastEditors: shiruiqiang
 * @FilePath: card.tsx
 * @Description: shiruiqiang
 */
import {PropsWithChildren} from 'react';
import {CardProps} from './type';
import classNames from 'classnames';
import {CustomTag} from 'internal/customTag';
import './style.scss';

export const Card = (props: PropsWithChildren<CardProps>) => {
    const {
        size = 'medium',
        bordered = true,
        closable = false,
        embedded = false,
        hoverable = false,
        tag = 'div',
        title,
        className,
        style = {},
        cover,
        header,
        headerExtra,
        footer,
        action,
        onClose,
        children
    } = props;
    const classes = classNames('n-card', {
        'n-card-border': bordered,
        'n-card-hover': hoverable,
        'n-card-embedded': embedded
    }, className);
    return <CustomTag
        tag={tag}
        attrs={{
            className: classes,
            style
        }}
    >
        {
            cover && <div className='n-card-cover'>
                {cover}
            </div>
        }
        <div className={`n-card-header-${size as string}`}>
            {
                header ?? <><span className='n-card-header-title'>
                    {title}
                </span>
                {headerExtra}
                </>
            }
        </div>
        <div className={`n-card-content-${size as string}`}>
            {children}
        </div>
        {
            footer && <div className={`n-card-footer-${size as string}`}>
                {footer}
            </div>
        }
        {
            action && <div className={`n-card-action-${size as string}`}>
                {action}
            </div>
        }
    </CustomTag>;
};

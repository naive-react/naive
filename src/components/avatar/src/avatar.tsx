/* eslint-disable @typescript-eslint/restrict-template-expressions */
import {PropsWithChildren, SyntheticEvent, useCallback, useMemo, useRef, useState} from 'react';
import {AvatarProps} from './type';
import classNames from 'classnames';
import './style.scss';
import {useWatchElementSize} from 'hooks/useWatchElementSize';
/*
 * @Author: shiruiqiang
 * @Date: 2023-07-17 10:50:51
 * @LastEditTime: 2023-07-17 20:43:08
 * @LastEditors: shiruiqiang
 * @FilePath: avatar.tsx
 * @Description: shiruiqiang
 */
export const Avatar = (props: PropsWithChildren<AvatarProps>) => {
    const {
        src,
        backgroundColor = 'rgba(204, 204, 204, 1)',
        bordered = false,
        round = false,
        objectFit = 'fill',
        size = 'medium',
        color,
        imgProps,
        fallBackSrc,
        onError,
        renderFallback,
        renderPlaceholder,
        children
    } = props;
    let memoedTextHtml: string | null;
    const [isError, setIsError] = useState(false);
    const [isLoading, setIsLoading] = useState(!children);
    const selfRef = useRef<HTMLElement>(null);
    const textRef = useRef<HTMLElement>(null);
    const fitTextTransform = () => {
        if (textRef.current) {
            if (memoedTextHtml === null || memoedTextHtml !== textRef.current.innerHTML) {
                memoedTextHtml = textRef.current.innerHTML;
                if (selfRef.current) {
                    const {offsetWidth: elWidth, offsetHeight: elHeight} = selfRef.current;
                    const {offsetWidth: textWidth, offsetHeight: textHeight} = textRef.current;
                    const radix = 0.9;
                    const ratio = Math.min(
                        (elWidth / textWidth) * radix,
                        (elHeight / textHeight) * radix,
                        1
                    );
                    textRef.current.style.transform = `translateX(-50%) translateY(-50%) scale(${ratio})`;
                }
            }
        }
    };
    useWatchElementSize({
        onChange: fitTextTransform,
        targetEle: textRef.current,
        immediate: true
    });
    const classes = classNames('n-avatar', {
        'n-avatat-border': bordered,
        'n-avatar-round': round,
        [`n-avatar-${size}`]: typeof size === 'string'
    });
    const widthAndHeight = useMemo(() => {
        if (typeof size === 'number') {
            return {
                width: `${size}px`,
                height: `${size}px`
            };
        }
        return null;
    }, [size]);
    const handleError = useCallback((e: SyntheticEvent) => {
        typeof onError === 'function' && onError(e);
        typeof props.imgProps?.onError === 'function' && props.imgProps?.onError(e);
        setIsError(true);
        setIsLoading(false);
    }, [onError]);
    const handleLoad = (e: SyntheticEvent) => {
        typeof props.imgProps?.onLoad === 'function' && props.imgProps?.onLoad(e);
        setIsLoading(false);
    };
    return (
        <span
            ref={selfRef}
            className={classes}
            style={{
                color,
                backgroundColor,
                ...widthAndHeight
            }}
        >
            {
                children
                    ? <span className='n-avatar-text' ref={textRef}>{children}</span>
                    : (<>
                        <img
                            {...imgProps}
                            className={classNames({'n-avatar-hide': isLoading || (isError && !fallBackSrc)})}
                            src={isError ? fallBackSrc : src}
                            style={{...imgProps?.style, objectFit}}
                            onError={handleError}
                            onLoad={handleLoad}
                        ></img>
                        {
                            isLoading && renderPlaceholder
                        }
                        {
                            isError && renderFallback
                        }
                    </>)
            }
        </span>
    );
};

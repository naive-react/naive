/* eslint-disable @typescript-eslint/restrict-template-expressions */
import {PropsWithChildren, SyntheticEvent, createContext, useCallback, useContext, useMemo, useRef, useState} from 'react';
import classNames from 'classnames';
import {AvatarGroupProps, AvatarProps, AvatarSize} from './type';
import {useWatchElementSize} from 'hooks/useWatchElementSize';

import './style.scss';
/*
 * @Author: shiruiqiang
 * @Date: 2023-07-17 10:50:51
 * @LastEditTime: 2023-07-18 11:03:41
 * @LastEditors: shiruiqiang
 * @FilePath: avatar.tsx
 * @Description: shiruiqiang
 */

const AvatarGroupCtx = createContext<{size?: AvatarSize;}>({});
export const Avatar = (props: PropsWithChildren<AvatarProps>) => {
    const {size: groupSize} = useContext(AvatarGroupCtx);
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
    const turthSize = useMemo(() => {
        return groupSize ?? size;
    }, [groupSize, size]);
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
        [`n-avatar-${turthSize}`]: typeof turthSize === 'string'
    });
    const widthAndHeight = useMemo(() => {
        if (typeof turthSize === 'number') {
            return {
                width: `${turthSize}px`,
                height: `${turthSize}px`
            };
        }
        return null;
    }, [turthSize]);
    const handleError = useCallback((e: SyntheticEvent) => {
        setIsError(true);
        setIsLoading(false);
        typeof onError === 'function' && onError(e);
        typeof props.imgProps?.onError === 'function' && props.imgProps?.onError(e);
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

export const AvatarGroup = (props: PropsWithChildren<AvatarGroupProps>) => {
    const {size, vertical = false, children} = props;
    return <AvatarGroupCtx.Provider value={{size}}>
        <div className={classNames('n-avatar-group', {
            'n-avatar-group-vertical': vertical
        })}>
            {children}
        </div>
    </AvatarGroupCtx.Provider>;
};

/*
 * @Author: shiruiqiang
 * @Date: 2023-07-12 20:00:42
 * @LastEditTime: 2023-07-13 21:22:05
 * @LastEditors: shiruiqiang
 * @FilePath: index.tsx
 * @Description: shiruiqiang
 */
import {PropsWithChildren, memo} from 'react';
import './index.scss';
interface LoadingProps {
    show?: boolean;
    scale?: number;
    radius?: number;
    stroke?: string;
    strokeWidth?: number;
}
export const Loading = memo((props: PropsWithChildren<LoadingProps>) => {
    const {show = true, scale = 1, radius = 100, stroke, strokeWidth = 28, children} = props;
    const scaledRadius = radius / scale;
    return <div className='n-base-loading' role="img" aria-label="loading">
        {
            show
                ? <div
                    key="icon"
                    className='transition-wrapper'
                >
                    <div className='container'>
                        <div className='container-layer'>
                            <div className='container-layer-left'>
                                <svg
                                    className='svg'
                                    viewBox={`0 0 ${2 * scaledRadius} ${
                                        2 * scaledRadius
                                    }`}
                                    xmlns="http://www.w3.org/2000/svg"
                                    style={{color: stroke}}
                                >
                                    <circle
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={strokeWidth}
                                        strokeLinecap="round"
                                        cx={scaledRadius}
                                        cy={scaledRadius}
                                        r={radius - strokeWidth / 2}
                                        strokeDasharray={4.91 * radius}
                                        strokeDashoffset={2.46 * radius}
                                    />
                                </svg>
                            </div>
                            <div className='container-layer-patch'>
                                <svg
                                    className='svg'
                                    viewBox={`0 0 ${2 * scaledRadius} ${
                                        2 * scaledRadius
                                    }`}
                                    xmlns="http://www.w3.org/2000/svg"
                                    style={{color: stroke}}
                                >
                                    <circle
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={strokeWidth}
                                        strokeLinecap="round"
                                        cx={scaledRadius}
                                        cy={scaledRadius}
                                        r={radius - strokeWidth / 2}
                                        strokeDasharray={4.91 * radius}
                                        strokeDashoffset={2.46 * radius}
                                    />
                                </svg>
                            </div>
                            <div
                                className='container-layer-right'
                            >
                                <svg
                                    className='svg'
                                    viewBox={`0 0 ${2 * scaledRadius} ${
                                        2 * scaledRadius
                                    }`}
                                    xmlns="http://www.w3.org/2000/svg"
                                    style={{color: stroke}}
                                >
                                    <circle
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={strokeWidth}
                                        strokeLinecap="round"
                                        cx={scaledRadius}
                                        cy={scaledRadius}
                                        r={radius - strokeWidth / 2}
                                        strokeDasharray={4.91 * radius}
                                        strokeDashoffset={2.46 * radius}
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
                : <div
                    key="placeholder"
                    className='n-base-loading__placeholder'
                >
                    {children}
                </div>
        }
    </div>;
});

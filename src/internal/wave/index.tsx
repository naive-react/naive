/*
 * @Author: shiruiqiang
 * @Date: 2023-07-05 00:38:14
 * @LastEditTime: 2023-07-05 00:53:40
 * @LastEditors: shiruiqiang
 * @FilePath: index.tsx
 * @Description: shiruiqiang
 */
import classNames from 'classnames';
import {forwardRef, useEffect, useImperativeHandle, useRef, useState} from 'react';
import {injecStyle} from 'utils/dynamicInjectStyle';

import './index.scss';
import {nextTick} from 'process';

interface WaveProps {
  waveSpreadColor: string
}
export interface WaveRef {
  play: () => void
}
export const Wave = forwardRef<WaveRef, WaveProps>((props, ref) => {
  const [showWave, setShowWave] = useState(false);
  const animationTimerId = useRef<number | null>(null);
  useEffect(() => {
    if (showWave) {
      const WaveKeyFrame = `@keyframes button-wave-spread {
        0%{
          box-shadow: 0 0 0.5px 0 ${props.waveSpreadColor};
        }
        100%{
          box-shadow: 0 0 0.5px 4.5px ${props.waveSpreadColor};
        }
      }`;
      injecStyle(WaveKeyFrame);
    }
  }, [showWave]);
  useImperativeHandle(ref, () => ({
    play
  }));
  const play = () => {
    if (animationTimerId.current !== null) {
      window.clearTimeout(animationTimerId.current);
      setShowWave(false);
      animationTimerId.current = null;
    }
    nextTick(() => {
      setShowWave(true);
      animationTimerId.current = window.setTimeout(() => {
        setShowWave(false);
        animationTimerId.current = null;
      }, 1000);
    });
  };
  return <div className={ classNames('base-wave', {'base-wave-active': showWave}) }></div>;
});

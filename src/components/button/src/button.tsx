/*
 * @Author: shiruiqiang
 * @Date: 2023-07-05 04:40:16
 * @LastEditTime: 2023-07-05 14:45:52
 * @LastEditors: shiruiqiang
 * @FilePath: button.tsx
 * @Description: shiruiqiang
 */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
import {PropsWithChildren, SyntheticEvent, useRef} from 'react';
import classNames from 'classnames';

import {ButtonProps} from './types';

import {Base} from '../../../styles';
import {Wave, WaveRef} from '../../../internal/wave';
import './style.scss';

export const Button = (props: PropsWithChildren<ButtonProps>) => {
  const {
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
    children
  } = props;
  const waveRef = useRef<WaveRef>(null);
  const classes = classNames(
    'n-button',
    `n-${size}`,
    `n-padding-${size}`,
    `n-${type}`,
    {
      'n-strong': strong,
      'n-secondary': secondary,
      'n-round': round,
      'n-lesser': lesser,
      'n-quaternary': quaternary,
      'n-dashed': dashed,
      'n-ghost': ghost,
      'n-disabled': disabled,
      'n-base-text': !quaternary && !secondary && !lesser && !dashed && !ghost,
      [`n-secondary-${type}`]: secondary,
      [`n-dashed-${type}`]: dashed,
      [`n-ghost-${type}`]: ghost
    },
    `n-${type}-text`
  );
  const handleClick = (e: SyntheticEvent) => {
    e.preventDefault();
    waveRef.current?.play();
  };
  return text
    ? <a>{ children}</a>
    : <button className={classes} onClick={handleClick}>
      {children}
      {
        !secondary &&
        !lesser &&
        !quaternary && <Wave waveSpreadColor={Base[`${type}WaveColor`]} ref={waveRef}></Wave>
      }
    </button>;
};

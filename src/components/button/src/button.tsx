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
    children
  } = props;
  const waveRef = useRef<WaveRef>(null);
  const classes = classNames('n-button', `n-${size}`, `n-${type}`, `n-padding-${size}`);
  const handleClick = (e: SyntheticEvent) => {
    e.preventDefault();
    waveRef.current?.play();
  };
  return text
    ? <a>{ children}</a>
    : <button className={classes} onClick={handleClick}>
      {children}
      <Wave waveSpreadColor={ Base[`${type}WaveColor`] } ref={waveRef}></Wave>
    </button>;
};

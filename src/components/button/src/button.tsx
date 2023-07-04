import { PropsWithChildren } from 'react';
import { ButtonProps } from './types';

export const Button = (props: PropsWithChildren<ButtonProps>) => {
  const { children } = props;
  return <button>
    {children}
  </button>;
};

/*
 * @Author: shiruiqiang
 * @Date: 2023-07-04 16:12:49
 * @LastEditTime: 2023-07-04 21:48:20
 * @LastEditors: shiruiqiang
 * @FilePath: base-button.tsx
 * @Description: shiruiqiang
 */
import {PropsWithChildren} from 'react';
import {Button, ButtonProps} from '..';

const SpaceButton = (props: PropsWithChildren<ButtonProps>) => {
  return <div style={{margin: '10px', display: 'inline-block'}}>
    <Button {...props}>{ props.children}</Button>
  </div>;
};

export default () => {
  return <>
    <SpaceButton>Default</SpaceButton>
    <SpaceButton type='tertiary'>Tertiary</SpaceButton>
    <SpaceButton type='primary'>Primary</SpaceButton>
    <SpaceButton type='info'>Info</SpaceButton>
    <SpaceButton type='success'>Success</SpaceButton>
    <SpaceButton type='warning'>Warning</SpaceButton>
    <SpaceButton type='error'>Error</SpaceButton>
  </>;
};

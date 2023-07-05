/*
 * @Author: shiruiqiang
 * @Date: 2023-07-04 16:12:49
 * @LastEditTime: 2023-07-05 15:00:29
 * @LastEditors: shiruiqiang
 * @FilePath: base-button.tsx
 * @Description: shiruiqiang
 */
import {PropsWithChildren, ReactNode} from 'react';
import {Button, ButtonProps} from '..';

const SpaceButton = (props: PropsWithChildren<ButtonProps>) => {
  return <div style={{display: 'inline-block', marginRight: '10px', marginBottom: '10px'}}>
    <Button {...props}>{ props.children}</Button>
  </div>;
};
const Code = ({children}: PropsWithChildren<unknown>) => {
  return <code style={{
    display: 'inline-block',
    lineHeight: 1.4,
    padding: '0.05em 0.35em',
    borderRadius: '3px',
    boxSizing: 'border-box',
    backgroundColor: 'rgb(244, 244, 248)',
    color: 'rgb(51, 54, 57)',
    fontSize: '12.6px',
    fontWeight: 400,
    border: 'none',
    margin: '0 0.5em'
  }}>{children}</code>;
};
const Card = ({label, description, children}: PropsWithChildren<{label: string, description?: ReactNode}>) => {
  return <div style={{display: 'flex', width: '45%', flexDirection: 'column', alignItems: 'flex-start', border: '1px solid rgb(239, 239, 245)', padding: '19px 24px'}}>
    <div style={{fontSize: '18px', color: '#000', fontWeight: 500}}>{label}</div>
    <div style={{lineHeight: 1.6, margin: '16px 0 16px 0', fontWeight: 400}}>{description}</div>
    <div>{children}</div>
  </div>;
};
export default () => {
  return <div style={{width: '80%', margin: '50px auto', display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between'}}>
    <Card
      label='基础'
      description={<span>
        按钮的<Code>type</Code>分别为<Code>default</Code>、<Code>tertiary</Code>、<Code>primary</Code>、<Code>info</Code>、<Code>success</Code>、<Code>warning</Code> 和 <Code>error</Code>
      </span>}
    >
      <SpaceButton>Default</SpaceButton>
      <SpaceButton type='tertiary'>Tertiary</SpaceButton>
      <SpaceButton type='primary'>Primary</SpaceButton>
      <SpaceButton type='info'>Info</SpaceButton>
      <SpaceButton type='success'>Success</SpaceButton>
      <SpaceButton type='warning'>Warning</SpaceButton>
      <SpaceButton type='error'>Error</SpaceButton>
    </Card>
    <Card
      label='次要按钮'
    >
      <SpaceButton strong secondary>Default</SpaceButton>
      <SpaceButton strong secondary type='tertiary'>Tertiary</SpaceButton>
      <SpaceButton strong secondary type='primary'>Primary</SpaceButton>
      <SpaceButton strong secondary type='info'>Info</SpaceButton>
      <SpaceButton strong secondary type='success'>Success</SpaceButton>
      <SpaceButton strong secondary type='warning'>Warning</SpaceButton>
      <SpaceButton strong secondary type='error'>Error</SpaceButton>
      <SpaceButton strong secondary round>Default</SpaceButton>
      <SpaceButton strong secondary round type='tertiary'>Tertiary</SpaceButton>
      <SpaceButton strong secondary round type='primary'>Primary</SpaceButton>
      <SpaceButton strong secondary round type='info'>Info</SpaceButton>
      <SpaceButton strong secondary round type='success'>Success</SpaceButton>
      <SpaceButton strong secondary round type='warning'>Warning</SpaceButton>
      <SpaceButton strong secondary round type='error'>Error</SpaceButton>
    </Card>
  </div>;
};

/*
 * @Author: shiruiqiang
 * @Date: 2023-07-04 16:12:49
 * @LastEditTime: 2023-07-11 20:11:44
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
const Card = ({label, description, children}: PropsWithChildren<{label: string; description?: ReactNode;}>) => {
  return <div style={{display: 'flex', width: '45%', flexDirection: 'column', alignItems: 'flex-start', border: '1px solid rgb(239, 239, 245)', padding: '19px 24px', marginBottom: '20px'}}>
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
      <SpaceButton onClick={(e) => {console.log(e);}}>Default</SpaceButton>
      <SpaceButton type='tertiary'>Tertiary</SpaceButton>
      <SpaceButton type='primary'>Primary</SpaceButton>
      <SpaceButton type='info'>Info</SpaceButton>
      <SpaceButton type='success'>Success</SpaceButton>
      <SpaceButton type='warning'>Warning</SpaceButton>
      <SpaceButton type='error'>Error</SpaceButton>
    </Card>
    <Card
      label='次要按钮'
      description={<span>
        使用<Code>secondary</Code>来使用次要按钮
      </span>}
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
    <Card
      label='次次要按钮'
      description={<span>
        使用<Code>lesser</Code>来使用次次要按钮
      </span>}
    >
      <SpaceButton lesser>Default</SpaceButton>
      <SpaceButton lesser type='primary'>Primary</SpaceButton>
      <SpaceButton lesser type='info'>Info</SpaceButton>
      <SpaceButton lesser type='success'>Success</SpaceButton>
      <SpaceButton lesser type='warning'>Warning</SpaceButton>
      <SpaceButton lesser type='error'>Error</SpaceButton>
      <SpaceButton lesser round>Default</SpaceButton>
      <SpaceButton lesser round type='primary'>Primary</SpaceButton>
      <SpaceButton lesser round type='info'>Info</SpaceButton>
      <SpaceButton lesser round type='success'>Success</SpaceButton>
      <SpaceButton lesser round type='warning'>Warning</SpaceButton>
      <SpaceButton lesser round type='error'>Error</SpaceButton>
    </Card>
    <Card
      label='次次次要按钮'
      description={<span>
        使用<Code>quaternary</Code>来使用次次次要按钮
      </span>}
    >
      <SpaceButton quaternary>Default</SpaceButton>
      <SpaceButton quaternary type='primary'>Primary</SpaceButton>
      <SpaceButton quaternary type='info'>Info</SpaceButton>
      <SpaceButton quaternary type='success'>Success</SpaceButton>
      <SpaceButton quaternary type='warning'>Warning</SpaceButton>
      <SpaceButton quaternary type='error'>Error</SpaceButton>
      <SpaceButton quaternary round>Default</SpaceButton>
      <SpaceButton quaternary round type='primary'>Primary</SpaceButton>
      <SpaceButton quaternary round type='info'>Info</SpaceButton>
      <SpaceButton quaternary round type='success'>Success</SpaceButton>
      <SpaceButton quaternary round type='warning'>Warning</SpaceButton>
      <SpaceButton quaternary round type='error'>Error</SpaceButton>
    </Card>
    <Card
      label='虚线按钮'
      description={<span>
        使用<Code>dashed</Code>来使用虚线按钮
      </span>}
    >
      <SpaceButton dashed>Default</SpaceButton>
      <SpaceButton dashed type='primary'>Primary</SpaceButton>
      <SpaceButton dashed type='info'>Info</SpaceButton>
      <SpaceButton dashed type='success'>Success</SpaceButton>
      <SpaceButton dashed type='warning'>Warning</SpaceButton>
      <SpaceButton dashed type='error'>Error</SpaceButton>
      <SpaceButton dashed round>Default</SpaceButton>
      <SpaceButton dashed round type='primary'>Primary</SpaceButton>
      <SpaceButton dashed round type='info'>Info</SpaceButton>
      <SpaceButton dashed round type='success'>Success</SpaceButton>
      <SpaceButton dashed round type='warning'>Warning</SpaceButton>
      <SpaceButton dashed round type='error'>Error</SpaceButton>
    </Card>
    <Card
      label='透明背景'
      description={<span>
         <Code>Ghost</Code>按钮具有透明的背景
      </span>}
    >
      <SpaceButton ghost>Default</SpaceButton>
      <SpaceButton ghost type='primary'>Primary</SpaceButton>
      <SpaceButton ghost type='info'>Info</SpaceButton>
      <SpaceButton ghost type='success'>Success</SpaceButton>
      <SpaceButton ghost type='warning'>Warning</SpaceButton>
      <SpaceButton ghost type='error'>Error</SpaceButton>
      <SpaceButton ghost round>Default</SpaceButton>
      <SpaceButton ghost round type='primary'>Primary</SpaceButton>
      <SpaceButton ghost round type='info'>Info</SpaceButton>
      <SpaceButton ghost round type='success'>Success</SpaceButton>
      <SpaceButton ghost round type='warning'>Warning</SpaceButton>
      <SpaceButton ghost round type='error'>Error</SpaceButton>
    </Card>
    <Card
      label='尺寸'
      description={<span>
        有<Code>tiny</Code>、<Code>small</Code>、<Code>medium</Code>、<Code>large</Code>尺寸。
      </span>}
    >
      <SpaceButton size='tiny' strong secondary>小小</SpaceButton>
      <SpaceButton size='small' strong secondary>小</SpaceButton>
      <SpaceButton size='medium' strong secondary>不小</SpaceButton>
      <SpaceButton size='large' strong secondary>不不小</SpaceButton>
    </Card>
    <Card
      label='禁用'
      description={<span>
         按钮可以被禁用。
      </span>}
    >
      <SpaceButton disabled onClick={() => console.log('disabled')}>不许点</SpaceButton>
      <SpaceButton disabled type='primary'>不许点</SpaceButton>
      <SpaceButton disabled secondary type='primary'>不许点</SpaceButton>
      <SpaceButton disabled lesser type='primary'>不许点</SpaceButton>
    </Card>
    <Card
      label='文本按钮'
      description={<span>
          长得就像文本。
      </span>}
    >
      <SpaceButton text disabled>那车头依然吐着烟</SpaceButton>
      <SpaceButton text type='primary' onClick={(e) => {console.log(e);}}>那车头依然吐着烟</SpaceButton>
      <SpaceButton text type='info'>那车头依然吐着烟</SpaceButton>
      <SpaceButton text type='warning'>那车头依然吐着烟</SpaceButton>
      <SpaceButton text type='error'>那车头依然吐着烟</SpaceButton>
    </Card>
    <Card
      label='链接按钮'
      description={<span>
          使用<Code>link</Code>与<Code>href</Code>来使用链接按钮。
      </span>}
    >
      <SpaceButton link disabled>那车头依然吐着烟</SpaceButton>
      <SpaceButton link type='primary' href='https://www.baidu.com' onClick={(e) => {e.preventDefault();}}>那车头依然吐着烟</SpaceButton>
      <SpaceButton link type='info'>那车头依然吐着烟</SpaceButton>
      <SpaceButton link type='warning'>那车头依然吐着烟</SpaceButton>
      <SpaceButton link type='error'>那车头依然吐着烟</SpaceButton>
    </Card>
  </div>;
};

import {MdCash} from '@ricons/ionicons4';
import {Card, Code} from 'components/button/demo/base-button';
import {Avatar} from '../src/avatar';
import {AvatarProps} from '../src/type';
import {Icon} from 'components/icon';
import {PropsWithChildren, useState} from 'react';

/*
 * @Author: shiruiqiang
 * @Date: 2023-07-17 17:24:00
 * @LastEditTime: 2023-07-17 20:35:58
 * @LastEditors: shiruiqiang
 * @FilePath: base-avatar.tsx
 * @Description: shiruiqiang
 */
const SpaceAvatar = (props: PropsWithChildren<AvatarProps>) => {
    return <div style={{margin: '0 6px', display: 'inline-block'}}>
        <Avatar {...props} />
    </div>;
};
export default () => {
    const [text, setText] = useState('Oasis');
    return <div style={{width: '80%', margin: '50px auto', display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between'}}>
        <Card
            label='尺寸'
            description={<span>
                头像有 <Code>small</Code>、<Code>medium</Code> 和 <Code>large</Code> 大小，也可以自己设定尺寸。
            </span>}
        >
            <SpaceAvatar size='small' src='https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg'/>
            <SpaceAvatar size='medium' src='https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg'/>
            <SpaceAvatar size='large' src='https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg'/>
            <SpaceAvatar size={48} src='https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg'/>
        </Card>
        <Card
            label='形状'
            description='头像可以是圆形'
        >
            <SpaceAvatar round size='small' src='https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg'/>
            <SpaceAvatar round size='medium' src='https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg'/>
            <SpaceAvatar round size='large' src='https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg'/>
            <SpaceAvatar round size={48} src='https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg'/>
        </Card>
        <Card
            label='颜色'
            description='你可以把它设成某种和你爱吃的东西有关的颜色。'
        >
            <Avatar backgroundColor='red' color='yellow'>M</Avatar>
        </Card>
        <Card
            label='图标'
            description='我喜欢用图标当头像'
        >
            <Avatar>
                <Icon size={28}>
                    <MdCash/>
                </Icon>
            </Avatar>
        </Card>
        <Card
            label='加载失败时显示的图像'
            description='下面的头像加载失败时会展示 07akioni。'
        >
            <SpaceAvatar
                round
                size='small'
                src='empty.png'
                fallBackSrc='https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg'
            />
            <SpaceAvatar
                size='small'
                src='empty.png'
                renderFallback={<Icon size={28}><MdCash/></Icon>}
            />
        </Card>
        <Card
            label='字号'
            description='字号会根据内容文字自动调整。'
        >
            <SpaceAvatar size='large'>{text}</SpaceAvatar>
            <SpaceAvatar round>{text}</SpaceAvatar>
            <input value={text} onChange={e => setText(e.target.value)} />
        </Card>
    </div>;
};

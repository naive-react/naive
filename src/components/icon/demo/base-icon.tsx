import {Card, Code} from 'components/button/demo/base-button';
import {GameControllerOutline, GameController, CashOutline} from '@ricons/ionicons5';
import {Checkmark16Filled} from '@ricons/fluent';
import {Icon, IconWrapper} from '../src/icon';

export default () => {
    return <div style={{width: '80%', margin: '50px auto', display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between'}}>
        <Card label="基础用法">
            <Icon size={40} depth={5}>
                <GameControllerOutline/>
            </Icon>
            <Icon size={40} color='#0e7a0d'>
                <GameController/>
            </Icon>
            <Icon size={40}>
                <GameController/>
            </Icon>
        </Card>
        <Card
            label='自定义图标'
            description='将自定义 SVG 放入图标。（确保设定了 SVG 的 viewBox 属性）'
        >
            <Icon size={40}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path
                        d="M368.5 240H272v-96.5c0-8.8-7.2-16-16-16s-16 7.2-16 16V240h-96.5c-8.8 0-16 7.2-16 16 0 4.4 1.8 8.4 4.7 11.3 2.9 2.9 6.9 4.7 11.3 4.7H240v96.5c0 4.4 1.8 8.4 4.7 11.3 2.9 2.9 6.9 4.7 11.3 4.7 8.8 0 16-7.2 16-16V272h96.5c8.8 0 16-7.2 16-16s-7.2-16-16-16z"
                    />
                </svg>
            </Icon>
        </Card>
        <Card
            label='带背景色的图标'
            description='有的时候加个背景显得没那么单调。'>
            <IconWrapper size={24} border-radius={10}>
                <Icon size={18} color='#ffffff' component={<Checkmark16Filled/>}></Icon>
            </IconWrapper>
        </Card>
        <Card
            label='深度'
            description={
                <span>为了搭配不同级的文字颜色，图标提供<Code>depth</Code>选项。</span>
            }
        >
            <Icon size={40} depth={1}>
                <CashOutline/>
            </Icon>
            <Icon size={40} depth={2}>
                <CashOutline/>
            </Icon>
            <Icon size={40} depth={3}>
                <CashOutline/>
            </Icon>
            <Icon size={40} depth={4}>
                <CashOutline/>
            </Icon>
            <Icon size={40} depth={5}>
                <CashOutline/>
            </Icon>
        </Card>
    </div>;
};

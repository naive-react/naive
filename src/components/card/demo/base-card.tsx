/*
 * @Author: shiruiqiang
 * @Date: 2023-08-08 15:05:13
 * @LastEditTime: 2023-08-09 10:41:10
 * @LastEditors: shiruiqiang
 * @FilePath: base-card.tsx
 * @Description: shiruiqiang
 */
import {Code} from 'components/button/demo/base-button';
import {Card} from '../src/card';

export default () => {
    return <div style={{display: 'flex', flexDirection: 'row', margin: '50px auto'}}>
        <div style={{width: '35vw', marginRight: '15px'}}>
            <Card title='基础用法'>
                <p>基础卡片</p>
                <Card title='卡片'>卡片内容</Card>
            </Card>
            <Card title='封面' style={{marginTop: '10px'}}>
                <p>卡片可以有封面</p>
                <Card title='带封面的卡片' cover={<img src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"></img>}>卡片内容</Card>
            </Card>
            <Card title='插槽' style={{marginTop: '10px'}}>
                <p>卡片有很多插槽，希望能帮你少写点代码。</p>
                <Card
                    title='卡片插槽示例'
                    headerExtra='#headerExtra'
                    footer='#footer'
                    action='#action'
                >
                    卡片内容
                </Card>
            </Card>
            <Card title='可关闭'>
                <p>用于 Modal 的时候，你可能需要这个属性。</p>
                <Card closable title='卡片' onClose={() => alert('card close')}>卡片内容</Card>
            </Card>
        </div>
        <div style={{width: '35vw'}}>
            <Card title='尺寸'>
                <p>卡片有<Code>small</Code>、<Code>medium</Code>、<Code>large</Code>、<Code>huge</Code>尺寸。</p>
                <Card title='小卡片' size='small' style={{marginBottom: '10px'}}>卡片内容</Card>
                <Card title='中卡片' size='medium' style={{marginBottom: '10px'}}>卡片内容</Card>
                <Card title='大卡片' size='large' style={{marginBottom: '10px'}}>卡片内容</Card>
                <Card title='超大卡片' size='huge'>卡片内容</Card>
            </Card>
            <Card title='可悬浮'>
                <Card title='卡片' hoverable>卡片内容</Card>
            </Card>
            <Card title='边框' style={{marginTop: '10px'}}>
                <p>卡片可以没有边框。</p>
                <Card bordered={false} title=' 无边框的卡片'>卡片内容</Card>
            </Card>
            <Card title='嵌入效果' style={{marginTop: '10px'}}>
                <Card embedded title='📖 如何成功' bordered={false}>
                如果你年轻的时候不 996，你什么时候可以 996？你一辈子没有 996，你觉得你就很骄傲了？这个世界上，我们每一个人都希望成功，都希望美好生活，都希望被尊重，我请问大家，你不付出超越别人的努力和时间，你怎么能够实现你想要的成功？
                </Card>
            </Card>
        </div>
    </div>;
};

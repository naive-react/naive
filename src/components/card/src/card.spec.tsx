import {fireEvent, render, renderHook} from '@testing-library/react';
import {Card} from './card';
import {useState} from 'react';
import {act} from 'react-dom/test-utils';
import {CardSize} from './type';

/*
 * @Author: shiruiqiang
 * @Date: 2023-08-08 15:04:11
 * @LastEditTime: 2023-09-01 16:51:09
 * @LastEditors: shiruiqiang
 * @FilePath: card.spec.tsx
 * @Description: shiruiqiang
 */
describe('card component', () => {
    it('common card', () => {
        const CommonCard = render(<Card>测试 card</Card>);
        const wrapper = CommonCard.container.getElementsByClassName('n-card')[0];
        expect(wrapper).toBeInTheDocument();
    });
    it('cover card', () => {
        const CoverCard = render(<Card title='带封面的卡片' cover={<img src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"></img>}>卡片内容</Card>);
        const wrapper = CoverCard.container.getElementsByClassName('n-card-cover')[0];
        expect(wrapper).toBeInTheDocument();
    });
    it('slot card', () => {
        const SlotCard = render(<Card
            title='卡片插槽示例'
            headerExtra='#headerExtra'
            footer='#footer'
            action='#action'
        >
            卡片内容
        </Card>);
        const footerWrapper = SlotCard.container.getElementsByClassName('n-card-footer-medium')[0];
        expect(footerWrapper).toBeInTheDocument();
        const actionWrapper = SlotCard.container.getElementsByClassName('n-card-action-medium')[0];
        expect(actionWrapper).toBeInTheDocument();
    });
    it('close card', () => {
        const {result} = renderHook(() => useState(true));
        const TestComponent = () => <>
            {result.current[0] && <Card
                closable
                title='卡片'
                onClose={() => result.current[1](false)}
            >
                卡片内容
            </Card>}
        </>;
        const CloseCard = render(<TestComponent/>);
        const closeWrapper = CloseCard.container.getElementsByClassName('n-card-header-close')[0];
        act(() => {
            fireEvent.click(closeWrapper);
        });
        CloseCard.rerender(<TestComponent/>);
        const hidenWrapper = CloseCard.container.getElementsByClassName('n-card')[0];
        expect(hidenWrapper).toEqual(undefined);
    });
    it('size card', () => {
        const size = ['small', 'large', 'huge'];
        size.forEach(s => {
            const sizeCard = render(<Card size={s as CardSize}>卡片内容</Card>);
            const sizeWrapper = sizeCard.container.getElementsByClassName(`n-card-content-${s}`)[0];
            expect(sizeWrapper).toBeInTheDocument();
        });
    });
    it('noborder card', () => {
        const NoBorderCard = render(<Card bordered={false} title=' 无边框的卡片'>卡片内容</Card>);
        expect(NoBorderCard.container.querySelector('.n-card')).not.toHaveClass('n-card-border');
    });
    it('embedded', () => {
        const EmbeddendCard = render(<Card embedded title='📖 如何成功' bordered={false}>卡片内容</Card>);
        expect(EmbeddendCard.container.querySelector('.n-card')).toHaveClass('n-card-embedded');
    });
});

/* eslint-disable no-undef */
/*
 * @Author: shiruiqiang
 * @Date: 2023-07-12 10:41:43
 * @LastEditTime: 2023-07-12 19:43:27
 * @LastEditors: shiruiqiang
 * @FilePath: icon.spec.tsx
 * @Description: shiruiqiang
 */
import {render} from '@testing-library/react';
import {CashOutline} from '@ricons/ionicons5';

import {Icon, IconWrapper} from './icon';

describe('icon component', () => {
    it('default icon', () => {
        const icon = render(<Icon><CashOutline /></Icon>);
        const wrapper = icon.container.getElementsByClassName('xicon')[0];
        expect(wrapper).toBeInTheDocument();
    });
    it('icon wrapper', () => {
        const icon = render(<IconWrapper className='icon-wrapper'><Icon><CashOutline /></Icon></IconWrapper>);
        const wrapper = icon.container.getElementsByClassName('icon-wrapper')[0];
        expect(wrapper.classList.contains('n-icon-wrapper')).toBeTruthy();
    });
    it('depth icon', () => {
        const icon = render(<Icon depth={5}><CashOutline /></Icon>);
        const wrapper = icon.container.getElementsByTagName('i')[0];
        expect(wrapper.classList.contains('n-icon-opacity-5')).toBeTruthy();
    });
});

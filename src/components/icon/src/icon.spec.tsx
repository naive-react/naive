/* eslint-disable no-undef */
/*
 * @Author: shiruiqiang
 * @Date: 2023-07-12 10:41:43
 * @LastEditTime: 2023-07-12 10:48:31
 * @LastEditors: shiruiqiang
 * @FilePath: icon.spec.tsx
 * @Description: shiruiqiang
 */
import {render} from '@testing-library/react';
import {CashOutline} from '@ricons/ionicons5';

import {Icon} from './icon';

describe('icon component', () => {
  it('default icon', () => {
    const icon = render(<Icon><CashOutline /></Icon>);
    const wrapper = icon.container.getElementsByClassName('xicon')[0];
    expect(wrapper).toBeInTheDocument();
  });
});

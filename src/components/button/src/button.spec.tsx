/*
 * @Author: shiruiqiang
 * @Date: 2023-07-07 04:10:30
 * @LastEditTime: 2023-07-07 11:41:46
 * @LastEditors: shiruiqiang
 * @FilePath: button.spec.tsx
 * @Description: shiruiqiang
 */
import {render} from '@testing-library/react';
import {Button} from './button';
describe('Button Component', () => {
  it('common button', () => {
    const defaultBtn = render(<Button>Default</Button>);
    const warrper = defaultBtn.getByText('Default');
    expect(warrper).toBeInTheDocument();
    expect(warrper.classList.contains('n-button')).toBeTruthy();
  });
});

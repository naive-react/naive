/* eslint-disable no-undef */
/*
 * @Author: shiruiqiang
 * @Date: 2023-07-07 04:10:30
 * @LastEditTime: 2023-07-11 20:17:40
 * @LastEditors: shiruiqiang
 * @FilePath: button.spec.tsx
 * @Description: shiruiqiang
 */
import {fireEvent, render} from '@testing-library/react';
import {Button} from './button';

const ClickProps = {
  onClick: jest.fn()
};
const DisableProps = {
  onClick: jest.fn()
};
describe('Button Component', () => {
  it('common button', () => {
    const defaultBtn = render(<Button>Default</Button>);
    const wrapper = defaultBtn.getByText('Default');
    expect(wrapper).toBeInTheDocument();
    expect(wrapper.classList.contains('n-button')).toBeTruthy();
  });
  // 类型按钮
  it('type button', () => {
    const btn = render(<Button type='primary'>Primary</Button>);
    const wrapper = btn.getByText('Primary');
    expect(wrapper).toBeInTheDocument();
    expect(wrapper.classList.contains('n-primary')).toBeTruthy();
  });
  // 次要按钮
  it('secondary button', () => {
    // 普通次要按钮
    const btn = render(<Button secondary>Secondary</Button>);
    const wrapper = btn.getByText('Secondary');
    expect(wrapper).toBeInTheDocument();
    expect(wrapper.classList.contains('n-secondary')).toBeTruthy();
    // 类型次要按钮
    const tBtn = render(<Button secondary type='primary'>Primary-Secondary</Button>);
    const tWrapper = tBtn.getByText('Primary-Secondary');
    expect(tWrapper).toBeInTheDocument();
    const classList = tWrapper.classList;
    expect(classList.contains('n-secondary') && classList.contains('n-secondary-primary')).toBeTruthy();
  });
  // 次次要按钮
  it('lesser button', () => {
    const btn = render(<Button lesser>Lesser</Button>);
    const wrapper = btn.getByText('Lesser');
    expect(wrapper).toBeInTheDocument();
    expect(wrapper.classList.contains('n-lesser')).toBeTruthy();
  });
  // 次次次要按钮
  it('quaternary button', () => {
    // 普通次次次要按钮
    const btn = render(<Button quaternary>Quaternary</Button>);
    const wrapper = btn.getByText('Quaternary');
    expect(wrapper).toBeInTheDocument();
    expect(wrapper.classList.contains('n-quaternary')).toBeTruthy();
  });
  // 虚线按钮
  it('dashed button', () => {
    // 普通虚线按钮
    const btn = render(<Button dashed>Dashed</Button>);
    const wrapper = btn.getByText('Dashed');
    expect(wrapper).toBeInTheDocument();
    expect(wrapper.classList.contains('n-dashed')).toBeTruthy();
    // 类型虚线按钮
    const tBtn = render(<Button dashed type='primary'>Primary-Dashed</Button>);
    const tWrapper = tBtn.getByText('Primary-Dashed');
    expect(tWrapper).toBeInTheDocument();
    const classList = tWrapper.classList;
    expect(classList.contains('n-dashed') && classList.contains('n-dashed-primary')).toBeTruthy();
  });
  // 透明按钮
  it('ghost button', () => {
    // 普通透明按钮
    const btn = render(<Button ghost>Ghost</Button>);
    const wrapper = btn.getByText('Ghost');
    expect(wrapper).toBeInTheDocument();
    expect(wrapper.classList.contains('n-ghost')).toBeTruthy();
    // 类型透明按钮
    const tBtn = render(<Button ghost type='primary'>Primary-Ghost</Button>);
    const tWrapper = tBtn.getByText('Primary-Ghost');
    expect(tWrapper).toBeInTheDocument();
    const classList = tWrapper.classList;
    expect(classList.contains('n-ghost') && classList.contains('n-ghost-primary')).toBeTruthy();
  });
  // 尺寸
  it('size button', () => {
    // 超小按钮
    const tinyBtn = render(<Button size='tiny'>Tiny</Button>);
    expect(tinyBtn.getByText('Tiny')).toBeInTheDocument();
    expect(tinyBtn.getByText('Tiny').classList.contains('n-tiny')).toBeTruthy();
    // 小按钮
    const smallBtn = render(<Button size="small">Small</Button>);
    expect(smallBtn.getByText('Small')).toBeInTheDocument();
    expect(smallBtn.getByText('Small').classList.contains('n-small')).toBeTruthy();
    // 中等按钮
    const mediumBtn = render(<Button size="medium">Medium</Button>);
    expect(mediumBtn.getByText('Medium')).toBeInTheDocument();
    expect(mediumBtn.getByText('Medium').classList.contains('n-medium')).toBeTruthy();
    // 大按钮
    const largeBtn = render(<Button size="large">Large</Button>);
    expect(largeBtn.getByText('Large')).toBeInTheDocument();
    expect(largeBtn.getByText('Large').classList.contains('n-large')).toBeTruthy();
  });
  // 文本按钮
  it('text button', () => {
    const btn = render(<Button text>Text</Button>);
    const wrapper = btn.getByText('Text');
    expect(wrapper).toBeInTheDocument();
    expect(wrapper.tagName.toLowerCase()).toBe('span');
  });
  // 链接按钮
  it('link button', () => {
    const btn = render(<Button link href='#'>Link</Button>);
    const wrapper = btn.getByText('Link');
    expect(wrapper).toBeInTheDocument();
    expect(wrapper.tagName.toLowerCase()).toBe('a');
  });
  // 加粗、圆角按钮
  it('strong and round button', () => {
    const btn = render(<Button strong round>Strong and Round</Button>);
    const wrapper = btn.getByText('Strong and Round');
    expect(wrapper).toBeInTheDocument();
    const classList = wrapper.classList;
    expect(classList.contains('n-strong') && classList.contains('n-round')).toBeTruthy();
  });
  // 点击按钮
  it('click button', () => {
    const btn = render(<Button onClick={ClickProps.onClick}>Click</Button>);
    const wrapper = btn.getByText('Click');
    fireEvent.click(wrapper);
    expect(ClickProps.onClick).toHaveBeenCalled();
  });
  // 禁用按钮
  it('disabled button', () => {
    const btn = render(<Button disabled onClick={DisableProps.onClick}>Disable</Button>);
    const wrapper = btn.getByText('Disable') as HTMLButtonElement;
    expect(wrapper.disabled).toBeTruthy();
    fireEvent.click(wrapper);
    expect(DisableProps.onClick).not.toHaveBeenCalled();
  });
});

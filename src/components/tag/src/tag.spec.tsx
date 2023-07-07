import {fireEvent, render} from '@testing-library/react';
import {Tag} from './tag';
describe('Tag Component', () => {
  it('should work with children', () => {
    const TagComponent = render(<Tag>children</Tag>);
    const wrapper = TagComponent.getByText('children');
    expect(wrapper).toBeInTheDocument();
  });
  it('should work with `border` props', () => {
    const {container, rerender} = render(<Tag border={false}>children</Tag>);
    expect(container.querySelector('.n-tag__border')).toBeNull();
    rerender(<Tag border={true}>children</Tag>);
    expect(container.querySelector('.n-tag__border')).toBeTruthy();
  });
  it('shoule work with `checkable` props', () => {
    let checked = true;
    const handleCheck = jest.fn((val: boolean) => {
      checked = val;
    });
    const {container, rerender} = render(
      <Tag checkable={true} checked={checked} onCheck={handleCheck}>
        children
      </Tag>
    );
    // 验证 checkable 生效
    expect(container.querySelector('.n-tag-checkable')).toBeTruthy();
    // 验证 checked 为 true 生效
    expect(container.querySelector('.n-tag-checked')).toBeTruthy();
    // 点击 tag
    container.firstChild && fireEvent.click(container.firstChild);
    expect(handleCheck).toHaveBeenCalledWith(false);
    expect(checked).toBeFalsy();
    // 验证 checked 为 false 生效
    rerender(<Tag checkable={true} checked={checked}>children</Tag>);
    expect(container.querySelector('.n-tag-checked')).toBeNull();
  });
  it('should work with `color` props', () => {
    const {container} = render(
      <Tag color={{color: 'red', textColor: 'white', borderColor: 'blue'}}>children</Tag>
    );
    const tag = container.querySelector('.n-tag');
    expect(tag).toHaveStyle('background-color: red');
    expect(tag).toHaveStyle('color: white');
    expect(container.querySelector('.n-tag__border')).toHaveStyle('border-color: blue');
  });
  it('should work with `disabled` props', () => {
    const {container} = render(<Tag disabled={true}>children</Tag>);
    expect(container.querySelector('.n-tag-disabled')).toBeTruthy();
  });
  it('should work with `round` props', () => {
    const {container} = render(<Tag round={true}>children</Tag>);
    expect(container.querySelector('.n-tag-round')).toBeTruthy();
  });
  it('should work with `size` props', () => {
    const {container} = render(<Tag size="small">children</Tag>);
    expect(container.querySelector('.n-tag-small')).toBeTruthy();
  });
  it('should work with `strong` props', () => {
    const {container} = render(<Tag strong={true}>children</Tag>);
    expect(container.querySelector('.n-tag-strong')).toBeTruthy();
  });
  it('should work with `type` props', () => {
    const {container} = render(<Tag type="success">children</Tag>);
    expect(container.querySelector('.n-tag-theme-success')).toBeTruthy();
  });
  it('should work with `className` props', () => {
    const {container} = render(<Tag className="test">children</Tag>);
    expect(container.querySelector('.test')).toBeTruthy();
  });
});

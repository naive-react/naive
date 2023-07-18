/* eslint-disable no-undef */
/*
 * @Author: shiruiqiang
 * @Date: 2023-07-18 09:36:27
 * @LastEditTime: 2023-07-18 11:03:32
 * @LastEditors: shiruiqiang
 * @FilePath: avatar.spec.tsx
 * @Description: shiruiqiang
 */
import {fireEvent, render} from '@testing-library/react';
import {Avatar} from './avatar';
class ResizeObserver {
    observe () {}
    unobserve () { }
    disconnect () {}
}

describe('avatar component', () => {
    window.ResizeObserver = ResizeObserver;
    it('common avatar', () => {
        const avatar = render(<Avatar src='https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg'></Avatar>);
        const wrapper = avatar.container.getElementsByClassName('n-avatar')[0];
        expect(wrapper).toBeInTheDocument();
    });
    it('avatar size、round', () => {
        const avatar = render(<Avatar size='small' src='https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg'></Avatar>);
        const wrapper = avatar.container.getElementsByClassName('n-avatar')[0];
        expect(wrapper.classList.contains('n-avatar-small'));
        const avatarSize = render(<Avatar round size={48} src='https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg'></Avatar>);
        const wrapperSize = avatarSize.container.querySelector('.n-avatar');
        expect(wrapperSize).toHaveStyle('width:48px;height:48px;');
    });
    it('avatar color', () => {
        const avatar = render(<Avatar backgroundColor='red' color='yellow'>R</Avatar>);
        const wrapper = avatar.container.getElementsByClassName('n-avatar')[0];
        expect(wrapper).toHaveTextContent('R');
        expect(wrapper).toHaveStyle('color:yellow;background-color:red;');
        expect(wrapper.children[0].classList.contains('n-avatar-text')).toBeTruthy();
    });
    it('avatar load error', (done) => {
        let isError = false;
        const onError = () => {
            isError = true;
            done();
        };
        const avatar = render(<Avatar
            round
            size='small'
            src='empty.png'
            fallBackSrc='https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg'
            onError={onError}
        />);
        const wrapper = avatar.container.getElementsByClassName('n-avatar')[0]?.children[0] as HTMLImageElement;
        fireEvent.error(wrapper);
        expect(isError).toBeTruthy();
        expect(wrapper.src).toBe('https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg');
    });
});

/*
 * @Author: shiruiqiang
 * @Date: 2023-08-08 15:04:11
 * @LastEditTime: 2023-08-08 22:55:19
 * @LastEditors: shiruiqiang
 * @FilePath: card.spec.tsx
 * @Description: shiruiqiang
 */
import {render, fireEvent, waitFor} from '@testing-library/react-native'; import React from 'react'; import {CustomTag} from '@ui/NativeTags'; import {Card} from './Card';

describe('Card', () => {
    it('matches snapshot with default props', () => {const {getByTestId} = render(<Card data-testid="Card" />); expect(getByTestId('Card')).toMatchSnapshot();});

    it('matches snapshot with custom props', () => {const {getByTestId} = render(<Card data-testid="Card" size="large" bordered={false} closable embedded hoverable tag="article" title="Card Title" className="custom-class" style={{backgroundColor: 'red'}} cover={<div>Cover Content</div>} header={<div>Header Content</div>} headerExtra={<div>Header Extra Content</div>} footer={<div>Footer Content</div>} action={<div>Action Content</div>} />); expect(getByTestId('Card')).toMatchSnapshot();});

    it('updates state when close button is clicked', async () => {const onClose = jest.fn(); const {getByTestId} = render(<Card data-testid="Card" onClose={onClose}> <div>Card Content</div> </Card>); const closeButton = getByTestId('Card-closeButton'); await fireEvent(closeButton, new Event('click')); expect(onClose).toHaveBeenCalled();});
});

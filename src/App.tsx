/*
 * @Author: shiruiqiang
 * @Date: 2023-07-03 11:19:58
 * @LastEditTime: 2023-08-07 14:29:30
 * @LastEditors: shiruiqiang
 * @FilePath: App.tsx
 * @Description: shiruiqiang
 */
import React from 'react';
import 'normalize.css';
import './styles/index.scss';

const RootComponent = React.lazy(() => import('./components/button/demo/base-button'));
// const RootComponent = React.lazy(() => import('./components/icon/demo/base-icon'));
// const RootComponent = React.lazy(() => import('./components/avatar/demo/base-avatar'));

function App () {
    return (
        <RootComponent></RootComponent>
    );
}

export default App;

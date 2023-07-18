/*
 * @Author: shiruiqiang
 * @Date: 2023-07-03 11:19:58
 * @LastEditTime: 2023-07-17 17:29:06
 * @LastEditors: shiruiqiang
 * @FilePath: App.tsx
 * @Description: shiruiqiang
 */
import 'normalize.css';
import React from 'react';
import './styles/index.scss';

// const RootComponent = React.lazy(() => import('./components/button/demo/base-button'));
// const RootComponent = React.lazy(() => import('./components/icon/demo/base-icon'));
// const RootComponent = React.lazy(() => import('./components/avatar/demo/base-avatar'));
const RootComponent = React.lazy(() => import('./components/tag/demo/base-tag'));
function App () {
    return (
        <RootComponent></RootComponent>
    );
}

export default App;

/*
 * @Author: shiruiqiang
 * @Date: 2023-07-03 11:19:58
 * @LastEditTime: 2023-07-12 20:23:06
 * @LastEditors: shiruiqiang
 * @FilePath: App.tsx
 * @Description: shiruiqiang
 */
import 'normalize.css';
import React from 'react';
import './styles/index.scss';

const RootComponent = React.lazy(() => import('./components/button/demo/base-button'));
// const RootComponent = React.lazy(() => import('./components/icon/demo/base-icon'));

function App () {
    return (
        <RootComponent></RootComponent>
    );
}

export default App;

/*
 * @Author: shiruiqiang
 * @Date: 2023-07-03 11:19:58
 * @LastEditTime: 2023-08-08 17:13:21
 * @LastEditors: shiruiqiang
 * @FilePath: App.tsx
 * @Description: shiruiqiang
 */
import React from 'react';
import 'normalize.css';
import './styles/index.scss';

// const RootComponent = React.lazy(() => import('./components/button/demo/base-button'));
// const RootComponent = React.lazy(() => import('./components/icon/demo/base-icon'));
// const RootComponent = React.lazy(() => import('./components/avatar/demo/base-avatar'));
const RootComponent = React.lazy(() => import('./components/card/demo/base-card'));

function App () {
    return (
        <div style={{display: 'flex', justifyContent: 'center', width: '100%'}}>
            <RootComponent></RootComponent>
        </div>
    );
}

export default App;

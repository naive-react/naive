/*
 * @Author: shiruiqiang
 * @Date: 2023-07-03 11:19:58
 * @LastEditTime: 2023-07-04 19:08:33
 * @LastEditors: shiruiqiang
 * @FilePath: App.tsx
 * @Description: shiruiqiang
 */
import 'normalize.css';
import React from 'react';
import './styles/index.scss';

const RootComponent = React.lazy(() => import('./components/tag/demo/base-tag'));

function App () {
  return (
   <RootComponent ></RootComponent>
  );
}

export default App;

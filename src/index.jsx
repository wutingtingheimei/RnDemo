import React, {memo, useEffect} from 'react';
// @绝对路径不生效 未解决
import {test} from '../src/utils/index';
import {Provider} from 'react-redux';
import Nav from './Nav';
import store from './store';
import 'react-native-gesture-handler';
const HomeIndex = memo(() => {
  useEffect(() => {
    test();
  }, []);
  return (
    <Provider store={store}>
      <Nav />
    </Provider>
  );
});

export default HomeIndex;

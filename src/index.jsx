import React, {memo, useEffect} from 'react';
// @绝对路径不生效 未解决
import {test} from '../src/utils/index';
import Nav from 'Nav';
const HomeIndex = memo(() => {
  useEffect(() => {
    test();
  }, []);
  return <Nav></Nav>;
});

export default HomeIndex;

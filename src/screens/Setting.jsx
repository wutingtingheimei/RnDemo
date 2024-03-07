import React, {memo, useState, useEffect, useCallback} from 'react';
import {View, Text, Switch} from 'react-native';
import {useStyle} from '../Style';
import {useDispatch, useSelector} from 'react-redux';
import {changeTheme} from 'store/feature/counter';
const Setting = memo(() => {
  const {s, sc, isDark} = useStyle();
  // const {isDark} = useSelector(state => ({
  //   isDark: state.counter.isDark,
  // }));
  const [theme, setTheme] = useState(isDark);
  const dispatch = useDispatch();
  const toggleSwitch = () => {
    setTheme(!theme);
    console.log(theme, 'theme');
    dispatch(changeTheme(!theme));
  };

  return (
    <View style={[sc.card]}>
      <Text style={[s.subText]}>Setting</Text>
      <Switch onValueChange={toggleSwitch} value={theme}></Switch>
      <Text style={[s.normalText]}>{isDark ? '深色' : '浅'}</Text>
    </View>
  );
});

export default Setting;

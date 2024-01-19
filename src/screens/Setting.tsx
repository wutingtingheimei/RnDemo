import React, {memo, useState} from 'react';
import {View, Text, Switch} from 'react-native';
import {s, sc} from '../Style';
const Setting = memo(() => {
  const [isDark, setIsDark] = useState(false);
  const toggleSwitch = () => setIsDark(per => !per);
  return (
    <View style={[sc.card]}>
      <Text style={[s.subText]}>Setting</Text>
      <Switch onValueChange={toggleSwitch} value={isDark}></Switch>
      <Text style={[s.normalText]}>{isDark ? '深色' : '浅'}</Text>
    </View>
  );
});

export default Setting;

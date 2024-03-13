import React, {memo, useState, useEffect, useCallback} from 'react';
import {View, Text, Switch} from 'react-native';
import {useStyle} from '../Style';
import {useDispatch, useSelector} from 'react-redux';
import {changeTheme} from 'store/feature/counter';
import realm from '@/utils/realm';
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

  // 插入数据
  realm.write(() => {
    realm.create('Car', {make: 'Toyota', model: 'Camry', year: 2022});
  });

  // 查询数据
  const cars = realm.objects('Car');
  console.log(cars, 'cars');

  // 更新数据
  realm.write(() => {
    const car = realm.objects('Car').filtered('make = "Toyota"')[0];
    if (car) {
      car.year = 2023;
    }
  });
  console.log(cars, 'cars2');
  // 删除数据
  realm.write(() => {
    const car = realm.objects('Car').filtered('make = "Toyota"')[0];
    realm.delete(car);
  });
  console.log(cars, 'cars');

  return (
    <View style={[sc.card]}>
      <Text style={[s.subText]}>Setting</Text>
      <Switch onValueChange={toggleSwitch} value={theme}></Switch>
      <Text style={[s.normalText]}>{isDark ? '深色' : '浅'}</Text>
    </View>
  );
});

export default Setting;

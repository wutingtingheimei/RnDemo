import React, {memo, useCallback, useEffect, useLayoutEffect} from 'react';
import {SafeAreaView, View, Text, Pressable} from 'react-native';
import {useStyle} from '../Style';
import {useSelector, useDispatch, shallowEqual} from 'react-redux';
// import {addNumber} from '../store/feature/counter';
import {fetchHomeDataAction} from '../store/feature/home';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {DrawerActions} from '@react-navigation/native';
const getData = async () => {
  try {
    const value = await AsyncStorage.getItem('system-theme');
    console.log(value, 'home value');
  } catch (e) {}
};
console.log(getData, 'getData');
const Home = memo(({route, navigation}) => {
  const {
    sc,
    s,
    Colors: {emphasis},
  } = useStyle();
  const {banners, commands, goods} = useSelector(
    state => ({
      banners: state.home.banners,
      commands: state.home.commands,
      goods: state.home.goods,
    }),
    shallowEqual,
  );
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    navigation.setOptions({
      title: '',
      headerTransparent: true, // 设置为true 则导航栏背景为透明
      headerRight: () => (
        <Pressable
          onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
          <Text style={[s.text, s.marginR, {color: emphasis}]}>Add</Text>
        </Pressable>
      ),
    });
  });
  useEffect(() => {
    getData();
    dispatch(fetchHomeDataAction());
  });
  return (
    <SafeAreaView style={[s.container, s.centered, s.shadow]}>
      <View style={[sc.card]}>
        <Text style={[s.titleText]}>Home Title</Text>
        <Text style={[s.subText]}>sub Title</Text>
        <Text style={[s.normalText]}>
          normal content
          <Text style={{color: emphasis}}>Emphasis HighLight</Text>
        </Text>
      </View>
      <View style={[s.column]}>
        <Pressable
          style={[sc.boxAct]}
          onPress={() => navigation.navigate('Setting')}>
          <Text style={[s.normalText, {color: '#FFF'}]}>Go to Setting</Text>
        </Pressable>
        <Pressable style={[sc.boxLink]}>
          <Text style={[s.normalText]}>Link </Text>
        </Pressable>

        <Pressable style={[sc.boxAct]}>
          <Text style={[s.normalText]}>
            {banners} {commands} {goods}
          </Text>
        </Pressable>
        <Pressable
          style={[sc.boxAct]}
          onPress={() => navigation.navigate('Pay')}>
          <Text style={[s.normalText]}>OPen Modal</Text>
        </Pressable>
        <Pressable
          style={[sc.boxAct]}
          onPress={() => navigation.navigate('Pay')}>
          <Text style={[s.normalText]}>Go To Pay</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
});

export default Home;

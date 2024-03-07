import React, {memo} from 'react';
import Home from './screens/Home';

import Setting from './screens/Setting';
import Library from './screens/Library';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// 系统自带
import {DarkTheme, DefaultTheme} from '@react-navigation/native';
import {useStyle} from './Style';
// import {shallowEqual, useSelector} from 'react-redux';
// import VectorIcon from 'react-native-vector-icons/FontAwesome6';
import AntIcon from 'react-native-vector-icons/AntDesign';
import Wallet from './screens/Wallet';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Detail from './screens/Detail';
import Pay from './screens/Pay';
const Nav = memo(() => {
  const {NavColors, isDark} = useStyle();
  const theme = isDark ? DarkTheme : DefaultTheme;
  // const {bg, front, mid, sub} = Colors;
  // 自定义Tab主题
  const navTheme = {
    ...theme,
    colors: {
      ...theme.colors,
      ...NavColors,
    },
  };
  const Tab = createBottomTabNavigator();
  const Drawer = createDrawerNavigator();
  const RootStack = createNativeStackNavigator();
  const LibraryNav = createNativeStackNavigator();
  const LibraryStack = () => {
    return (
      <LibraryNav.Navigator screenOptions={{}}>
        <LibraryNav.Screen name="Library" component={Library} />
        <LibraryNav.Screen name="Detail" component={Detail} />
      </LibraryNav.Navigator>
    );
  };
  const HomeNav = createNativeStackNavigator();
  const HomeStack = () => {
    return (
      <HomeNav.Navigator screenOptions={{}}>
        <HomeNav.Screen name="Home" component={Home} />
        {/* 弹窗  presentation: fullScreenModal 在苹果机型上面是全屏弹窗，并且在iphone上modal是把底部的tab遮挡的， 而Android无法遮挡底部的tab */}
        <HomeNav.Screen
          name="Pay"
          component={Pay}
          options={{presentation: 'modal'}}
        />
      </HomeNav.Navigator>
    );
  };
  // initialRouteName 首次加载显示的tab
  const BottomTabNavigator = () => {
    return (
      <Tab.Navigator initialRouteName="HomeStack">
        <Tab.Screen
          name="HomeStack"
          component={HomeStack}
          options={{
            headerShown: false,
            tabBarIcon: ({color, size}) => (
              <AntIcon name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Setting"
          component={Setting}
          options={{
            headerShown: false,
            tabBarIcon: ({color, size, focused}) => (
              <AntIcon name="setting" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="LibraryStack"
          component={LibraryStack}
          options={{
            headerShown: false,
            tabBarIcon: ({color, size, focused}) => (
              <AntIcon name="hearto" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    );
  };
  // eslint-disable-next-line react/no-unstable-nested-components
  const RootRouteScreen = () => {
    return (
      <RootStack.Navigator>
        <RootStack.Screen
          options={{
            headerShown: false,
          }}
          name="BottomTabNavigator"
          component={BottomTabNavigator}
        />
        {/* 将detail写在这里，Tab都能够跳转到detail */}
        <RootStack.Screen name="Detail" component={Detail} />
      </RootStack.Navigator>
    );
  };

  return (
    <NavigationContainer theme={navTheme}>
      <Drawer.Navigator screenOptions={{headerShown: false}}>
        <Drawer.Screen name="RootRouteScreen" component={RootRouteScreen} />
        <Drawer.Screen name="Wallet" component={Wallet} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
});

export default Nav;

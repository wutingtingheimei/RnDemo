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

  // initialRouteName 首次加载显示的tab
  const BottomTabNavigator = () => {
    return (
      <Tab.Navigator initialRouteName="Home">
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: true,
            tabBarIcon: ({color, size, focused}) => (
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
          name="Library"
          component={Library}
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
        <RootStack.Screen name="Detail" component={Detail} />
      </RootStack.Navigator>
    );
  };
  return (
    <NavigationContainer theme={navTheme}>
      {/* <Drawer.Navigator
        drawerContent={props => <Wallet {...props} />}
        screenOptions={{headerShown: false}}>
        <Drawer.Screen name="TabNavigator" component={BottomTabNavigator} />
      </Drawer.Navigator> */}
      {/* <BottomTabNavigator /> */}
      <RootRouteScreen />
    </NavigationContainer>
  );
});

export default Nav;
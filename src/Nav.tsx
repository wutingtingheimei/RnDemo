import React, {memo} from 'react';
import Home from 'screens/Home';
import Setting from 'screens/Setting';
import Library from 'screens/Library';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// 系统自带
import {DarkTheme, Theme, DefaultTheme} from '@react-navigation/native';
import {Colors, NavColors} from 'Style';
const {bg, front, mid, sub} = Colors;
// 自定义Tab主题
const navTheme = {
  dark: false,
  // colors: {
  //   primary: 'rgb(255, 45, 85)',
  //   background: 'rgb(242, 242, 242)',
  //   card: 'rgb(255, 255, 255)',
  //   text: 'rgb(28, 28, 30)',
  //   border: 'rgb(199, 199, 204)',
  //   notification: 'rgb(255, 69, 58)',
  // },
  colors: NavColors,
};
const Nav = memo(() => {
  // const [active, setActive] = useState(1);
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer theme={navTheme}>
      {/* initialRouteName 首次加载显示的tab */}
      <Tab.Navigator initialRouteName="Home">
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Setting" component={Setting} />
        <Tab.Screen name="Library" component={Library} />
      </Tab.Navigator>
    </NavigationContainer>
  );
});

export default Nav;

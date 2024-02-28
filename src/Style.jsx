import {Dimensions, Platform, StyleSheet} from 'react-native';
import {shallowEqual, useSelector} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
// Dimensions.get('window').width; //响应式
// 获取屏幕的大小
const ScreenSizes = Dimensions.get('window');
const {height, width} = ScreenSizes;
const shortSideLength = height > width ? width : height;
const unitSize = shortSideLength / 32; //最短边

const Sizes = {
  cm: 16, // 标准字体
  scm: 8, //较小尺度，padding,margin边距调整
  bcm: 32, //较大，标题字体大小
  mcm: 24, //中等尺度
  xcm: 64, // max最大尺度,
};
const {cm, scm, bcm, mcm, xcm} = Sizes;
export {
  cm,
  scm,
  bcm,
  mcm,
  xcm,
  unitSize,
  height as ScreenHeight,
  width as ScreenWidth,
};

export const useStyle = () => {
  const {isDark} = useSelector(
    state => ({
      isDark: state.count.isDark,
    }),
    shallowEqual,
  );
  const Colors = isDark
    ? {
        bg: '#222222', // 底色
        mid: '#444444', // 中间背景色
        front: '#CFCFCF', // 前景色，primary
        sub: '#CDCDCD', // 副前景色
        shadow: '#181818', // 影子颜色
        link: 'lightskyblue', // 连接色，用于外部资源，或则场景跳转
        act: 'coral', // interactive互动，用于本场景的互动
        warn: 'tomato', // 警告色
        emphasis: 'white', // 强调色，祝贺
        trans: 'rgba(64, 64, 64, 0.5)',
      }
    : {
        bg: 'white', // 底色
        mid: '#efefef', // 中间背景色
        front: 'dimgray', // 前景色，primary
        sub: 'darkgrey', // 副前景色
        shadow: 'dimgray',
        link: 'cadetblue', // 连接色，用于外部资源，或则场景跳转
        act: 'lightsalmon', // interactive互动，用于本场景的互动
        warn: 'tomato', // 警告色
        emphasis: '#333333', // 强调色，祝贺
        trans: 'rgba(248, 248, 248, 0.5)',
      };
  const {front, mid, sub, link, shadow, warn, act, emphasis, bg} = Colors;

  const NavColors = {
    primary: front,
    background: bg,
    card: mid,
    text: sub,
    border: mid,
    notification: warn,
  };
  const s = StyleSheet.create({
    container: {flex: 1, backgroundColor: bg},
    row: {flexDirection: 'row', gap: scm},
    rowSpaceBetween: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    column: {
      flexDirection: 'column',
      gap: scm,
    },
    margin: {margin: cm},
    marginL: {marginLeft: cm},
    marginR: {marginRight: cm},
    padding: {padding: cm},
    radius: {borderRadius: cm},
    textCenter: {textAlign: 'center'},
    centered: {justifyContent: 'center', alignItems: 'center'},
    normalText: {fontSize: cm, color: front},
    subText: {color: sub, fontSize: cm - 2},
    headerText: {color: front, fontSize: bcm},
    titleText: {color: front, fontSize: mcm},
    subTitleText: {color: sub, fontSize: mcm - 4},
    importantText: {color: emphasis, fontSize: cm},
    smallText: {fontSize: cm - 4, color: sub},
    box: {backgroundColor: mid, padding: scm, borderRadius: scm},
    shadow: {
      elevation: 16, // android only
      shadowColor: shadow,
      shadowOffset: {width: 0, height: 0},
      shadowOpacity: 0.3,
      shadowRadius: scm,
    },
    borderbox: {
      padding: mcm,
      borderWidth: StyleSheet.hairlineWidth,
      borderColor: sub,
      borderRadius: mcm,
    },
    round: {
      backgroundColor: mid,
      width: bcm,
      height: bcm,
      borderRadius: cm,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  const sc = {
    card: [s.radius, s.padding, s.margin, {backgroundColor: mid}],
    boxLink: [s.box, {backgroundColor: link}],
    boxAct: [s.box, {backgroundColor: act}],
    roundLink: [s.round, {backgroundColor: link}],
    roundAct: [s.round, {backgroundColor: act}],
  };
  return {s, sc, Colors, NavColors, isDark};
};

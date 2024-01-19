import {Dimensions, StyleSheet} from 'react-native';
Dimensions.get('window').width; //响应式
export const Sizes = {
  cm: 16, // 标准字体
  scm: 9, //较小尺度，padding,margin边距调整
  bcm: 32, //较大，标题字体大小
  mcm: 4, //min 最小尺度， 小按钮边距等
  xcm: 64, // max最大尺度,
};
const {cm, scm, bcm, mcm, xcm} = Sizes;
export const Colors = {
  front: '#FEFEFE', //主前景色
  bg: '#222', //主背景色
  mid: '#444444', //中间色
  sub: '#CDCDCD', //副前景色
  link: 'deepskyblue', //链接颜色
  error: '#FF5252',
  warn: '#FFC107',
  act: 'coral', //激活色
  emphasis: 'lihghtseagreen', //强调色
};
const {front, mid, sub, link, error, warn, act, emphasis, bg} = Colors;

export const NavColors = {
  primary: front,
  background: bg,
  card: mid,
  text: sub,
  border: mid,
};

export const s = StyleSheet.create({
  container: {flex: 1, backgroundColor: bg},
  row: {flexDirection: 'row', gap: scm},
  margin: {margin: cm},
  padding: {padding: cm},
  radius: {borderRadius: cm},
  centered: {justifyContent: 'center', alignItems: 'center'},
  normalText: {fontSize: cm, color: front},
  subText: {fontSize: cm - 2, color: sub},
  titleText: {fontSize: bcm, color: front},
  subTitleText: {fontSize: bcm - 8, color: sub},
  box: {backgroundColor: mid, borderRadius: mcm, padding: mcm},
  borderbox: {
    padding: mcm,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: sub,
    borderRadius: mcm,
  },
});
export const sc = {
  card: [s.radius, s.padding, s.margin, {backgroundColor: mid}],
  button: s.borderbox,
  buttonLink: [s.box, {backgroundColor: link}],
  buttonAct: [s.box, {backgroundColor: act}],
};

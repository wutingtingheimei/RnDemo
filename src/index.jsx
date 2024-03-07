import React, {memo, useEffect} from 'react';
// @绝对路径不生效 未解决
import {test} from '../src/utils/index';
import {Provider} from 'react-redux';
import Nav from './Nav';
import {store, persist} from './store';
import 'react-native-gesture-handler';
import {PersistGate} from 'redux-persist/integration/react';
import * as RNLocalize from 'react-native-localize';
import i18n from 'i18next';
import {initReactI18next, useTranslation} from 'react-i18next';
import en from './locales/en.json'; // 导入英文翻译文件
import jp from './locales/jp.json'; // 导入日文翻译文件
import cn from './locales/cn.json'; // 导入中文翻译文件
// 配置i18next
i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3', // 对安卓进行兼容
  lng: RNLocalize.getLocales()[0].languageCode, // 设置默认语言
  fallbackLng: 'cn', // 设置回退语言
  resources: {
    en: {translation: en}, // 设置英文翻译资源
    jp: {translation: jp}, // 设置日文翻译资源
    cn: {translation: cn}, // 设置中文翻译资源
  },
});

const HomeIndex = memo(() => {
  useEffect(() => {
    // const {t} = useTranslation(); // 使用useTranslation hook获取翻译函数
    test();
  }, []);
  return (
    <Provider store={store}>
      <PersistGate persistor={persist}>
        <Nav />
      </PersistGate>
    </Provider>
  );
});

export default HomeIndex;

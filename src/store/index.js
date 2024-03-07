import {
  configureStore,
  combineReducers,
  createAsyncThunk,
} from '@reduxjs/toolkit';
import counterReducer from './feature/counter';
import AsyncStorage from '@react-native-async-storage/async-storage';
// 数据持久化
import {persistReducer, persistStore} from 'redux-persist';
// import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import homeReducer from './feature/home';
import localesReducer from './feature/locales';
// import localesReducer from './feature/locales';
// import createSagaMiddleware from 'redux-saga';
// 定于持久化配置
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  // isDark: counterReducer.reducer,
};
// const sagaMiddleware = createSagaMiddleware();
const rootReducer = combineReducers({
  counter: counterReducer.reducer,
  home: homeReducer,
  language: localesReducer.reducer,
});
// 创建持久化reducer
const myPersistReducer = persistReducer(persistConfig, rootReducer);
console.log(myPersistReducer, 'myPersistReducer');
// 创建store
const store = configureStore({
  reducer: myPersistReducer,
  middleware: getDefaultMiddleware => {
    return [
      // sagaMiddleware,
      ...getDefaultMiddleware({
        serializableCheck: false,
      }),
    ];
  },
  // 解决序列化问题
  // middleware: getDefaultMiddleware =>
  //   getDefaultMiddleware({serializableCheck: false}),
});
// 创建持久化存储器
const persist = persistStore(store);
export {store, persist};
// console.log(store, persist);
// const store = configureStore({
//   reducer: {
//     counter: counterReducer.reducer,
//     home: homeReducer,
//   },
// });
// export default store;
// 定义RootState，为了能够更好的支持TS
// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;
// 定义带类型的dispatch和selector hook，为了能够在整个App中使用正确的TS类型
// export const useAppDispatch = () => useDispatch<AppDispatch>();
// export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

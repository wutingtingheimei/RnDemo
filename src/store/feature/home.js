import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

const homeSlice = createSlice({
  name: 'home',
  initialState: {
    banners: 1,
    commands: 2,
    goods: 1,
  },
  reducers: {
    changeHomeBanners(state, {payload}) {
      state.banners = payload;
    },
    changeHomeCommands(state, {payload}) {
      state.commands = payload;
    },
    changeHomeGoods(state, {payload}) {
      state.goods = payload;
    },
  },
});

// 导出actions
export const {changeHomeBanners, changeHomeCommands, changeHomeGoods} =
  homeSlice.actions;

const fetchData = () => {
  /// 模拟网络请求获取数据
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(2);
    }, 1000);
  });
};

// 中间件
export const fetchHomeDataAction = createAsyncThunk(
  'fetchHomeData',
  (payload, {dispatch}) => {
    // 模拟接口请求，修改action
    fetchData().then(res => {
      dispatch(changeHomeBanners(res));
    });
  },
);

export default homeSlice.reducer;

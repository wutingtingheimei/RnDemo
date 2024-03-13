import {createSlice} from '@reduxjs/toolkit';

const languageSlice = createSlice({
  name: 'language',
  initialState: 'cn', // 默认语言为英文
  reducers: {
    setLanguage(state, {payload}) {
      state = payload;
      // 这里必须返回一个默认值， 不然就会有问题
      return state;
    },
  },
});
export const {setLanguage} = languageSlice.actions;
export default languageSlice;

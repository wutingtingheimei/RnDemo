import {createSlice} from '@reduxjs/toolkit';

const languageSlice = createSlice({
  name: 'language',
  initialState: 'cn', // 默认语言为英文
  reducers: {
    setLanguage(state, {payload}) {
      state = payload;
      return state;
    },
  },
});
export const {setLanguage} = languageSlice.actions;
export default languageSlice;

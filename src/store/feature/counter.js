import {createSlice} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 1,
    message: 'Hello World',
    isDark: false,
  },
  reducers: {
    addNumber(state, {payload}) {
      state.value = state.value + payload;
    },
    subNumber(state, {payload}) {
      state.value = state.value - payload;
    },

    increment: state => {
      state.value += 1;
    },
    decrement: state => {
      state.value -= 1;
    },
    reset: state => {
      state.value = 0;
    },
    beginLoading: () => {
      console.log('开始加载初始count');
    },
    finishLoading: (state, {payload}) => {
      state.value = payload;
      console.log('结束加载');
    },
    changeMessage(state, {payload}) {
      state.message = payload;
    },
    changeTheme(state, {payload}) {
      console.log(payload, 'payload');
      state.isDark = payload;
      const storeData = async () => {
        try {
          await AsyncStorage.setItem('system-theme', payload);
        } catch (e) {}
      };
      console.log(storeData, 'storeData');
      // storage使用不会
      // try {
      //   AsyncStorage.setItem('system-theme', payload);
      // } catch (e) {
      //   // saving error
      // }
    },
  },
});
export const {
  addNumber,
  subNumber,
  increment,
  decrement,
  reset,
  beginLoading,
  finishLoading,
  changeMessage,
  changeTheme,
} = counterSlice.actions;
export default counterSlice;

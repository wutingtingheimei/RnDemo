import {createSlice} from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    counter: 0,
  },
  reducers: {
    addNumber(state, {payload}) {
      state.counter = state.counter + payload;
    },
    subNumber(state, {payload}) {
      state.counter = state.counter - payload;
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
} = counterSlice.actions;

export default counterSlice.reducers;

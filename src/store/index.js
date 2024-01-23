import {configureStore} from '@reduxjs/toolkit';
import counterReducer from './feature/counter';
import homeReducer from './feature/home';
const store = configureStore({
  reducer: {
    home: homeReducer,
    count: counterReducer.reducer,
  },
});

export default store;

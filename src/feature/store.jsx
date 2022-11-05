import { configureStore } from '@reduxjs/toolkit';
import dataReducer from './DataSlice';

const store = configureStore({
  reducer: {
    dataReducer,
  },
});

export default store;

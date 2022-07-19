import { configureStore } from '@reduxjs/toolkit';
import missions from './missions/missions';

const store = configureStore({
  reducer: {
    missions,
  },
});

export default store;

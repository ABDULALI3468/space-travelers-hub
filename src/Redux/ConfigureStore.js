import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import missions from './missions/missions';
import { rocket } from './rockets/rockets';

const store = configureStore({
  reducer: {
    missions,
    rocket,
  },
}, applyMiddleware(thunk));

export default store;

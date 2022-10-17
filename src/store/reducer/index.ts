import {combineReducers} from '@reduxjs/toolkit';

import counterReducer from './counter';
import userReducer from './user';

import pointCollectRecycling from './pointCollectRecycling';

const rootReducer = combineReducers({
  counter: counterReducer,
  user: userReducer,
  pointCollectRecycling,
});

export default rootReducer;

import { combineReducers } from 'redux';

import count from 'store/example-redux/count/reducer';
import tick from 'store/example-redux/tick/reducer';

const combinedReducer = combineReducers({
  count,
  tick,
});

export default combinedReducer;

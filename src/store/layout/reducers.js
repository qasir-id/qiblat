import { combineReducers } from 'redux';

import dashboard from './dashboard/reducers';

const reducers = combineReducers({
  dashboard,
});

export default reducers;

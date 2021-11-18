import { combineReducers } from 'redux';

// Layout
import layout from '@/store/layout/reducers';
import ui from '@/store/ui/reducers';

const combinedReducer = combineReducers({
  layout,
  ui,
});

export default combinedReducer;

import { combineReducers } from 'redux';
import search from './search';
import home from './home';

const rootReducer = combineReducers({
  search,
  home,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;

import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import search from './search';
import home from './home';
import cart from './cart';
import direct from './direct';
import price from './price';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart', 'direct'],
};

const rootReducer = combineReducers({
  search,
  home,
  cart,
  direct,
  price,
});

export default persistReducer(persistConfig, rootReducer);

export type RootState = ReturnType<typeof rootReducer>;

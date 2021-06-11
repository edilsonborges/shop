import { createStore, combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import calculatorReducer from './Calculator/Calculator.reducer';
import productsReducers from './Product/Products.reducers';

const rootReducer = combineReducers({
  calculator: calculatorReducer,
  product: productsReducers,
});

const persistedReducer = persistReducer(
  {
    key: 'root',
    storage,
  },
  rootReducer
);

export const store = createStore(persistedReducer);
export const persistedStore = persistStore(store);

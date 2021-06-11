import { createStore, combineReducers } from 'redux';
import calculatorReducer from './Calculator/Calculator.reducer';
import productsReducers from './Product/Products.reducers';

const rootReducer = combineReducers({
  calculator: calculatorReducer,
  product: productsReducers,
});

const store = createStore(rootReducer);

export default store;

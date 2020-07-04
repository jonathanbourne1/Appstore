import {combineReducers} from 'redux';
import products, {ProductState} from './products-reducer';

export interface GlobalState {
  products: ProductState;
}
//resultan reducer
export default combineReducers<GlobalState>({products: products});

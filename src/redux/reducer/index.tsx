import {combineReducers} from 'redux';
import products from './products-reducer';

//resultan reducer
export default combineReducers({product: products});

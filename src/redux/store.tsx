import {createStore, applyMiddleware, compose} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducer from './reducer/index';
const {createLogger} = require('redux-logger');
//import reducer

const middleware = [thunk];
middleware.push(createLogger({collapsed: true}));
const store = createStore(
  reducer,
  compose(applyMiddleware(...middleware), composeWithDevTools({})),
);
export default store;

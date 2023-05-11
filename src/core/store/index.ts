import {createStore, applyMiddleware} from 'redux';
import {rootReducer} from './reducer';
import middleware from './middleware';
export type AppState = ReturnType<typeof rootReducer>;
const middleWareEnhancer = applyMiddleware(...middleware);
export const store = createStore(rootReducer, middleWareEnhancer);

import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers';

const initialStateFromStorejs = {};

const middleware = [thunk];

const store = createStore(
    reducer,
    initialStateFromStorejs,
    applyMiddleware(thunk),
);

export default store;
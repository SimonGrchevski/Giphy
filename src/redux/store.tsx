import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import giphyReducer from './reducers/giphyReducer';

const reducer = combineReducers({
giphy: giphyReducer
});

const store = createStore(reducer,applyMiddleware(thunk));
export default store; 
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import giphyReducer from './reducers/giphyReducer';

const reducer = combineReducers({
  giphs: giphyReducer
});

const store = createStore(reducer,applyMiddleware(thunk));

export type State = ReturnType<typeof reducer>

export default store; 
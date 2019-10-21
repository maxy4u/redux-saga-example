import { counterReducer } from './redux/Counter/counterReducer.js';
import { userReducer } from './redux/User/userReducer.js';
import {combineReducers, createStore, applyMiddleware, compose } from 'redux';
import thunk from "redux-thunk";
import createSagaMiddleware, { END } from 'redux-saga'

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()

const reducers = combineReducers({
  counter: counterReducer,
  user: userReducer
});

const dummyDevTools = (f) => f

const validDevTools = window.devToolsExtension ? window.devToolsExtension() : dummyDevTools

const getReduxDevTools = (enableDevTools = false) => (enableDevTools ? validDevTools : dummyDevTools)

const configureStore = (initialState={}) => {
  const store = createStore(reducers, initialState , compose(applyMiddleware(sagaMiddleware, thunk), getReduxDevTools(process.env.NODE_ENV === 'development')))
  store.asyncReducers = {}
  store.runSaga = sagaMiddleware.run
  store.close = () => store.dispatch(END)
  return store
}

export default configureStore
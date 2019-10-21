import React from 'react';
import { Provider } from 'react-redux';
import Counter from './components/Counter/Counter.js';
import configureStore from './store.js'
import rootSaga from './sagas';

const store = configureStore({});
store.runSaga(rootSaga);

export default class App extends React.Component {
  render() {
    return (
        <Provider store={store}>
          <Counter />
        </Provider>
    );   
  }
}

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './src/reducers';
import MainView from './src/index';

// Application entry point.
export default class App extends Component {
  render() {
    // Creating a Redux store and rendering MainView (src/index)
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <MainView />
      </Provider>
    );
  }
}

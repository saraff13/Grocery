import React, {Component} from 'react';
import {Provider} from 'react-redux';
import AuthNavigator from './navigations/AuthNavigator';
import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AuthNavigator />
      </Provider>
    );
  }
}

export default App;

import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {Provider} from 'react-redux';
import AuthNavigator from './navigations/AuthNavigator';
import store from './store';
import Loader from './components/Loader';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AuthNavigator />
        <Loader />
      </Provider>
    );
  }
}

export default App;

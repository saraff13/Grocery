import React, {Component} from 'react';
import {SafeAreaView, Text} from 'react-native';
import {connect} from 'react-redux';
import styles from '../styles/LoginStyle';

class Login extends Component {
  render() {
    return (
      <SafeAreaView style={[styles.main]}>
        <Text>Login</Text>
      </SafeAreaView>
    );
  }
}

export default connect(null)(Login);

import React, {Component} from 'react';
import {SafeAreaView, Text, TextInput} from 'react-native';
import {connect} from 'react-redux';
import styles from '../styles/LoginStyle';
import {initLogin} from '../store/actions/loginAction';
import Button from '../components/Button';

class Login extends Component {
  state = {
    username: '',
  };
  render() {
    const {username} = this.state;
    const {initLogin} = this.props;
    return (
      <SafeAreaView style={[styles.main]}>
        <Text>Set a username to Get Started</Text>
        <TextInput
          placeholder="Enter your username"
          value={username}
          onChangeText={username => this.setState({username})}
        />
        <Button
          title="Submit"
          onPress={() => {
            username ? initLogin(username) : alert('enter a valid username');
          }}
        />
      </SafeAreaView>
    );
  }
}

export default connect(null, {initLogin})(Login);

import React, {Component} from 'react';
import {SafeAreaView, Text} from 'react-native';
import {connect} from 'react-redux';
import Button from '../components/Button';
import styles from '../styles/ProfileStyle';
import {initLogout} from '../store/actions/logoutAction';
import Header from '../components/Header';

class Profile extends Component {
  render() {
    const {user} = this.props;
    return (
      <>
        <Header title="My Account" navigation={this.props.navigation} />
        <SafeAreaView style={[styles.main]}>
          <Text>Hi {user}</Text>
          <Button title="Logout" onPress={() => this.props.initLogout()} />
        </SafeAreaView>
      </>
    );
  }
}

const mapStateToProps = state => ({
  user: state.loginReducer.user,
});

export default connect(mapStateToProps, {initLogout})(Profile);

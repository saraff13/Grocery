import React, {Component} from 'react';
import {SafeAreaView, Text} from 'react-native';
import {connect} from 'react-redux';
import styles from '../styles/HomeStyle';
import {initLogout} from '../store/actions/logoutAction';
import Button from '../components/Button';
import Header from '../components/Header';

class Home extends Component {
  render() {
    return (
      <>
        <Header
          navigation={this.props.navigation}
          title="Dashboard"
          showBellIcon
        />
        <SafeAreaView style={[styles.main]}>
          <Text>Home here</Text>
        </SafeAreaView>
      </>
    );
  }
}

export default connect(null, {initLogout})(Home);

import React, {Component} from 'react';
import {SafeAreaView, Text} from 'react-native';
import {connect} from 'react-redux';
import styles from '../styles/NotificationsStyle';

class Notifications extends Component {
  render() {
    return (
      <SafeAreaView style={[styles.main]}>
        <Text>Notifications Page</Text>
      </SafeAreaView>
    );
  }
}

export default connect(null)(Notifications);

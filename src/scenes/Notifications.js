import React, {Component} from 'react';
import {SafeAreaView, Text} from 'react-native';
import {connect} from 'react-redux';
import Header from '../components/Header';
import styles from '../styles/NotificationsStyle';

class Notifications extends Component {
  render() {
    return (
      <>
        <Header
          title="Notifications"
          showBackIcon
          navigation={this.props.navigation}
        />
        <SafeAreaView style={[styles.main]}>
          <Text>Notifications Page</Text>
        </SafeAreaView>
      </>
    );
  }
}

export default connect(null)(Notifications);

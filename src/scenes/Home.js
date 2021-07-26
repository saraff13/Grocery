import React, {Component} from 'react';
import {SafeAreaView, Text} from 'react-native';
import {connect} from 'react-redux';
import styles from '../styles/HomeStyle';

class Home extends Component {
  render() {
    return (
      <SafeAreaView style={[styles.main]}>
        <Text>Home here</Text>
      </SafeAreaView>
    );
  }
}

export default connect(null)(Home);

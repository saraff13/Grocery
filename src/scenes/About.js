import React, {Component} from 'react';
import {SafeAreaView, Text} from 'react-native';
import {connect} from 'react-redux';
import styles from '../styles/AboutStyle';

class About extends Component {
  render() {
    return (
      <SafeAreaView style={[styles.main]}>
        <Text>About Page</Text>
      </SafeAreaView>
    );
  }
}

export default connect(null)(About);

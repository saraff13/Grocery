import React, {Component} from 'react';
import {SafeAreaView, Text} from 'react-native';
import {connect} from 'react-redux';
import Header from '../components/Header';
import styles from '../styles/HelpStyle';

class Help extends Component {
  render() {
    return (
      <>
        <Header title="Help" navigation={this.props.navigation} />
        <SafeAreaView style={[styles.main]}>
          <Text>Help Page</Text>
        </SafeAreaView>
      </>
    );
  }
}

export default connect(null)(Help);

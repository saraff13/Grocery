import React, {Component} from 'react';
import {SafeAreaView, Text} from 'react-native';
import {connect} from 'react-redux';
import styles from '../styles/HomeStyle';
import {initLogout} from '../store/actions/logoutAction';
import Button from '../components/Button';

class Home extends Component {
  render() {
    return (
      <SafeAreaView style={[styles.main]}>
        <Text>Home here</Text>
        <Button
          title="Birthday Section"
          onPress={() => this.props.navigation.navigate('PlannedBirthdays')}
        />
        <Button title="Logout" onPress={() => this.props.initLogout()} />
      </SafeAreaView>
    );
  }
}

export default connect(null, {initLogout})(Home);

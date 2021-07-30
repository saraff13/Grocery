import React, {Component} from 'react';
import {SafeAreaView, Text} from 'react-native';
import {connect} from 'react-redux';
import styles from '../styles/SliderStyle';
import Button from '../components/Button';

class Slider extends Component {
  render() {
    return (
      <SafeAreaView style={[styles.main]}>
        <Text>Slider</Text>
        <Button
          title="Get Started"
          onPress={() => this.props.navigation.navigate('Login')}
        />
      </SafeAreaView>
    );
  }
}

export default connect(null)(Slider);

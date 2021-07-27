import React, {Component} from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

export default class Button extends Component {
  render() {
    const {title, onPress = () => {}} = this.props;
    return (
      <TouchableOpacity onPress={onPress} style={[styles.button]}>
        <Text style={[styles.buttonText]}>{title}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
  },
  buttonText: {
    fontSize: 18,
  },
});

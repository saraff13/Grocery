import React, {Component} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {responsiveHeight, responsiveWidth} from '../utils/Responsive';

const Icon = MaterialCommunityIcons;

class Header extends Component {
  render() {
    const {
      title = '',
      showBellIcon = false,
      showBackIcon = false,
      navigation,
    } = this.props;
    return (
      <View style={[styles.main]}>
        {showBackIcon ? (
          <TouchableOpacity
            style={[styles.iconLeft]}
            onPress={() => navigation.goBack()}>
            <Icon name="arrow-left" size={30} color="black" />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={[styles.iconLeft]}
            onPress={() => navigation.openDrawer()}>
            <Icon name="menu" size={30} color="black" />
          </TouchableOpacity>
        )}

        <Text style={[styles.headerTitle]}>{title}</Text>

        {showBellIcon ? (
          <TouchableOpacity
            style={[styles.iconRight]}
            onPress={() => this.props.navigation.navigate('Notifications')}>
            <Icon name="bell" size={25} color="black" />
          </TouchableOpacity>
        ) : (
          <View style={[styles.empty]} />
        )}
      </View>
    );
  }
}

export default Header;

const styles = StyleSheet.create({
  main: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: 'lightgrey',
    height: responsiveHeight(8),
  },
  headerTitle: {
    textAlign: 'center',
    fontSize: 20,
    color: 'black',
    // borderWidth: 1,
    width: responsiveWidth(82),
  },
  leftIcon: {
    // borderWidth: 1,
    width: responsiveWidth(9),
  },
  rightIcon: {
    // borderWidth: 1,
    width: responsiveWidth(9),
  },
  empty: {
    // borderWidth: 1,
    width: responsiveWidth(9),
    width: 30,
  },
});

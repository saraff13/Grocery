import React, {Component} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {responsiveHeight} from '../utils/Responsive';

const Icon = MaterialCommunityIcons;

class Header extends Component {
  render() {
    const {
      title = '',
      showBellIcon = false,
      showBackIcon = false,
      showDashIcon = false,
      navigation,
    } = this.props;
    return (
      <>
        {showBackIcon ? (
          <Text>back</Text>
        ) : (
          <View style={[styles.main]}>
            <TouchableOpacity
              style={[styles.iconLeft]}
              onPress={() => navigation.openDrawer()}>
              <Icon name="menu" size={30} color="black" />
            </TouchableOpacity>

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
        )}
      </>
    );
  }
}

export default Header;

const styles = StyleSheet.create({
  main: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    justifyContent: 'center',
    backgroundColor: 'lightgrey',
    height: responsiveHeight(8),
  },
  headerTitle: {
    flexGrow: 1,
    textAlign: 'center',
    fontSize: 20,
    color: 'black',
  },
  leftIcon: {},
  rightIcon: {},
  empty: {width: 30},
});

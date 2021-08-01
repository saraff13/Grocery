import React, {Component} from 'react';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {View, Text, Image, StyleSheet} from 'react-native';
import Home from '../scenes/Home';
import PlannedBirthdays from '../scenes/Birthday/PlannedBirthdays';
import Profile from '../scenes/Profile';
import About from '../scenes/About';
import Help from '../scenes/Help';

const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <View style={[styles.profileBox]}>
        <Image
          source={require('../assests/images/profile.jpg')}
          style={[styles.image]}
        />
        <Text style={[styles.name]}>Sumit Saraff</Text>
      </View>

      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}

class DrawerNavigator extends Component {
  render() {
    return (
      <Drawer.Navigator
        drawerContent={props => <CustomDrawerContent {...props} />}>
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Birthday" component={PlannedBirthdays} />
        <Drawer.Screen name="Profile" component={Profile} />
        <Drawer.Screen name="About" component={About} />
        <Drawer.Screen name="Help" component={Help} />
      </Drawer.Navigator>
    );
  }
}

export default DrawerNavigator;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileBox: {
    alignItems: 'center',
    marginVertical: 15,
  },
  image: {
    width: 100,
    height: 100,
  },
  name: {
    fontSize: 25,
  },
});

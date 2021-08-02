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
import {createStackNavigator} from '@react-navigation/stack';
import Birthday from '../scenes/Birthday/Birthday';
import ShowBirthdayItemList from '../scenes/Birthday/ShowBirthdayItemList';
import {connect} from 'react-redux';
import {responsiveWidth} from '../utils/Responsive';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const CustomDrawerContent = props => {
  return (
    <DrawerContentScrollView {...props}>
      <View style={[styles.profileBox]}>
        <Image
          source={require('../assests/images/profile.jpg')}
          style={[styles.image]}
        />
        <Text style={[styles.name]}>Hi {props.user}</Text>
      </View>

      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

class DrawerNavigator extends Component {
  render() {
    const {user} = this.props;
    return (
      <Drawer.Navigator
        drawerContent={props => <CustomDrawerContent user={user} {...props} />}>
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Birthday" component={myBirthdayPlans} />
        <Drawer.Screen name="Profile" component={Profile} />
        <Drawer.Screen name="About" component={About} />
        <Drawer.Screen name="Help" component={Help} />
      </Drawer.Navigator>
    );
  }
}

const mapStateToProps = state => ({
  user: state.loginReducer.user,
});

export default connect(mapStateToProps)(DrawerNavigator);

const myBirthdayPlans = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="PlannedBirthdays"
        component={PlannedBirthdays}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Birthday"
        component={Birthday}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ShowBirthdayItemList"
        component={ShowBirthdayItemList}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileBox: {
    alignItems: 'center',
    marginVertical: 20,
  },
  image: {
    width: responsiveWidth(25),
    height: responsiveWidth(25),
    borderRadius: 200,
    marginVertical: 10,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
  },
});

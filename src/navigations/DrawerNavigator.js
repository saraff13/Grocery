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
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Icon = MaterialCommunityIcons;
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
        drawerStyle={{
          width: responsiveWidth(55),
          backgroundColor: 'aliceblue',
        }}
        drawerContentOptions={{
          activeTintColor: 'white',
          activeBackgroundColor: 'steelblue',
          inactiveTintColor: 'black',
          itemStyle: {marginVertical: 0},
          labelStyle: {fontSize: 18},
        }}
        drawerContent={props => <CustomDrawerContent user={user} {...props} />}>
        <Drawer.Screen
          name="Home"
          component={Home}
          options={{
            drawerIcon: () => <Icon name="home" size={18} />,
          }}
        />
        <Drawer.Screen
          name="Birthday"
          component={myBirthdayPlans}
          options={{
            drawerIcon: () => <Icon name="cake-variant" size={18} />,
          }}
        />
        <Drawer.Screen
          name="Profile"
          component={Profile}
          options={{
            drawerIcon: () => <Icon name="account" size={18} />,
          }}
        />
        <Drawer.Screen
          name="About"
          component={About}
          options={{
            drawerIcon: () => <Icon name="information" size={18} />,
          }}
        />
        <Drawer.Screen
          name="Help"
          component={Help}
          options={{
            drawerIcon: () => <Icon name="help-circle" size={18} />,
          }}
        />
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
    // borderWidth: 1,
    marginBottom: 15,
  },
  image: {
    width: responsiveWidth(27),
    height: responsiveWidth(27),
    borderRadius: 200,
    marginBottom: 5,
  },
  name: {
    fontSize: 25,
    fontWeight: 'bold',
    // borderWidth: 1,
  },
});

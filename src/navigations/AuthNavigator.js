import React, {Component} from 'react';
import {connect} from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
import Login from '../scenes/Login';
import {setUserData} from '../store/actions/loginAction';
import Loader from '../components/Loader';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Slider from '../scenes/Slider';
import Notifications from '../scenes/Notifications';
import DrawerNavigator from './DrawerNavigator';

const Stack = createStackNavigator();

class AuthNavigator extends Component {
  state = {
    loading: true,
  };
  componentDidMount() {
    AsyncStorage.getItem('userData')
      .then(data => {
        this.setState({loading: false});
        if (data) {
          this.props.setUserData(JSON.parse(data));
        }
      })
      .catch(error => {
        console.log(error);
        this.setState({loading: false});
      });
  }
  render() {
    const {loading} = this.state;
    const {user} = this.props;

    if (loading) return <Loader loading={loading} />;

    return (
      <NavigationContainer>
        {user ? (
          <Stack.Navigator>
            <Stack.Screen
              name="DrawerNavigator"
              component={DrawerNavigator}
              options={{headerShown: false}}
            />
            <Stack.Screen name="Notifications" component={Notifications} />
          </Stack.Navigator>
        ) : (
          <Stack.Navigator>
            <Stack.Screen name="Slider" component={Slider} />
            <Stack.Screen name="Login" component={Login} />
          </Stack.Navigator>
        )}
      </NavigationContainer>
    );
  }
}

const mapStateToProps = state => ({
  user: state.loginReducer.user,
});

export default connect(mapStateToProps, {setUserData})(AuthNavigator);

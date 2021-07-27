import React, {Component} from 'react';
import {connect} from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
import Home from '../scenes/Home';
import Login from '../scenes/Login';
import {setUserData} from '../store/actions/loginAction';
import Loader from '../components/Loader';

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

    if (user) return <Home />;
    else return <Login />;
  }
}

const mapStateToProps = state => ({
  user: state.loginReducer.user,
});

export default connect(mapStateToProps, {setUserData})(AuthNavigator);

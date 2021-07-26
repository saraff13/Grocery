import React, {Component} from 'react';
import {connect} from 'react-redux';
import Home from '../scenes/Home';
import Login from '../scenes/Login';

class AuthNavigator extends Component {
  render() {
    const {user} = this.props;
    if (user) return <Home />;
    else return <Login />;
  }
}

const mapStateToProps = state => ({
  user: state.loginReducer.user,
});

export default connect(mapStateToProps)(AuthNavigator);

import React, {Component} from 'react';
import {ActivityIndicator, SafeAreaView, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {responsiveWidth, responsiveHeight} from '../utils/Responsive';

class Loader extends Component {
  render() {
    const {loading = false, storeLoading} = this.props;
    if (!loading && !storeLoading) return null;
    return (
      <SafeAreaView style={[styles.loaderBox]}>
        <ActivityIndicator size={40} color={'black'} />
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => ({
  storeLoading: state.loaderReducer.storeLoading,
});

export default connect(mapStateToProps)(Loader);

const styles = StyleSheet.create({
  loaderBox: {
    justifyContent: 'center',
    alignContent: 'center',
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,0.5)',
    width: responsiveWidth(100),
    height: responsiveHeight(100),
  },
});

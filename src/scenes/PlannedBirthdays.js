import React, {Component} from 'react';
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import {connect} from 'react-redux';
import styles from '../styles/PlannedBirthdaysStyle';
import Button from '../components/Button';
import AsyncStorage from '@react-native-community/async-storage';
import Loader from '../components/Loader';
import {
  deleteBirthdayData,
  setBirthdayData,
} from '../store/actions/birthdayAction';

class PlannedBirthdays extends Component {
  state = {
    loading: true,
    data: null,
  };
  componentDidMount() {
    AsyncStorage.getItem('birthdayData')
      .then(data => {
        this.setState({data: JSON.parse(data), loading: false});
      })
      .catch(error => {
        console.log('Planned Birthdays error => ', error);
        this.setState({loading: false});
      });
  }
  updateData() {
    this.setState({loading: true});
    AsyncStorage.getItem('birthdayData')
      .then(data => {
        this.setState({data: JSON.parse(data), loading: false});
      })
      .catch(error => {
        console.log('Planned Birthdays error => ', error);
        this.setState({loading: false});
      });
  }
  render() {
    const {loading, data} = this.state;
    if (loading) return <Loader loading={loading} />;
    console.log(data);
    return (
      <SafeAreaView style={[styles.main]}>
        <Button
          title="Plan New"
          onPress={() => this.props.navigation.navigate('Birthday')}
        />
        <Text>Planned Birthdays</Text>
        {data && (
          <View>
            <TouchableOpacity
              onPress={() => {
                this.props.setBirthdayData(data) &&
                  this.props.navigation.navigate('Birthday');
              }}>
              <Text>
                {data.name}'s birthday is on {data.birthdayDate}
              </Text>
            </TouchableOpacity>
            <Button
              title="cancel"
              onPress={() => {
                this.props.deleteBirthdayData() && this.updateData();
              }}
            />
          </View>
        )}
      </SafeAreaView>
    );
  }
}

export default connect(null, {deleteBirthdayData, setBirthdayData})(
  PlannedBirthdays,
);

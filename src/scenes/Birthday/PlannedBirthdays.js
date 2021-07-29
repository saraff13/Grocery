import React, {Component} from 'react';
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import {connect} from 'react-redux';
import styles from '../../styles/PlannedBirthdaysStyle';
import Button from '../../components/Button';
import AsyncStorage from '@react-native-community/async-storage';
import Loader from '../../components/Loader';
import {
  deleteBirthdayData,
  setBirthdayData,
} from '../../store/actions/birthdayAction';

class PlannedBirthdays extends Component {
  state = {
    loading: true,
    data: [],
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
    // console.log(data);
    return (
      <SafeAreaView style={[styles.main]}>
        <Button
          title="Plan New"
          onPress={() =>
            this.props.setBirthdayData({
              itemList: [],
              name: '',
              birthdayDate: '',
              shoppingDate: '',
            }) && this.props.navigation.navigate('Birthday')
          }
        />
        <Text>Planned Birthdays</Text>

        {data &&
          data.map((item, index) => {
            return (
              <View key={index}>
                <TouchableOpacity
                  onPress={() => {
                    this.props.setBirthdayData(item) &&
                      this.props.navigation.navigate('ShowBirthdayItemList');
                  }}>
                  <Text>
                    {item.name}'s birthday is on {item.birthdayDate}
                  </Text>
                </TouchableOpacity>
                <Button
                  title="cancel"
                  onPress={() => {
                    this.props.deleteBirthdayData({data, index}) &&
                      this.updateData();
                  }}
                />
              </View>
            );
          })}
      </SafeAreaView>
    );
  }
}

export default connect(null, {deleteBirthdayData, setBirthdayData})(
  PlannedBirthdays,
);

import AsyncStorage from '@react-native-community/async-storage';
import React, {Component} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

class RecentPlans extends Component {
  state = {
    data: null,
  };
  componentDidMount() {
    AsyncStorage.getItem('recentBirthdayPlans')
      .then(data => {
        if (data) {
          this.setState({data: JSON.parse(data)});
        }
      })
      .catch(error => console.log('Recent Plans error => ', error));
  }
  render() {
    const {data} = this.state;
    return (
      <>
        {data ? (
          data.map((item, index) => {
            return (
              <View key={index}>
                <TouchableOpacity
                  onPress={() => {
                    alert('ok');
                  }}>
                  <Text>
                    {item.name}'s birthday was on {item.birthdayDate}
                  </Text>
                </TouchableOpacity>
              </View>
            );
          })
        ) : (
          <Text>Nothing to show</Text>
        )}
      </>
    );
  }
}

export default RecentPlans;

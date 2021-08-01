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
import RecentPlans from './RecentPlans';
import Header from '../../components/Header';

class PlannedBirthdays extends Component {
  state = {
    loading: true,
    data: [],
    showHistory: false,
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
    setTimeout(() => {
      AsyncStorage.getItem('birthdayData')
        .then(data => {
          this.setState({data: JSON.parse(data), loading: false});
        })
        .catch(error => {
          console.log('Planned Birthdays error => ', error);
          this.setState({loading: false});
        });
    }, 1000);
  }
  render() {
    const {loading, data, showHistory} = this.state;
    if (loading) return <Loader loading={loading} />;
    // console.log(data);
    return (
      <>
        <Header
          navigation={this.props.navigation}
          title="Birthdays"
          showDashIcon
        />
        <SafeAreaView style={[styles.main]}>
          <Button
            title="Plan New"
            onPress={() =>
              this.props.setBirthdayData({
                itemList: [],
                name: '',
                birthdayDate: '',
                shoppingDate: new Date(),
                edit: false,
              }) &&
              this.props.navigation.navigate('Birthday', {
                onGoBack: () => this.updateData(),
              })
            }
          />
          <Text>Planned Birthdays</Text>

          <TouchableOpacity
            onPress={() => this.setState({showHistory: !showHistory})}>
            <Text>
              {showHistory ? 'Hide recent shoppings' : 'Show recent shoppings'}
            </Text>
          </TouchableOpacity>

          {showHistory && (
            <>
              <Button
                title="clear history"
                onPress={() =>
                  AsyncStorage.removeItem('recentBirthdayPlans') &&
                  this.setState({showHistory: false})
                }
              />
              <RecentPlans />
            </>
          )}

          {data &&
            data.map((item, index) => {
              item['edit'] = false;
              return (
                <View key={index}>
                  <TouchableOpacity
                    onPress={() => {
                      this.props.setBirthdayData(item) &&
                        this.props.navigation.navigate('ShowBirthdayItemList', {
                          index,
                          data,
                          onGoBack: () => this.updateData(),
                        });
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
      </>
    );
  }
}

export default connect(null, {deleteBirthdayData, setBirthdayData})(
  PlannedBirthdays,
);

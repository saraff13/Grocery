import React, {Component} from 'react';
import {SafeAreaView, Text, TextInput, View} from 'react-native';
import {connect} from 'react-redux';
import styles from '../../styles/BirthdayStyle';
import Button from '../../components/Button';
import DatePicker from 'react-native-date-picker';
import {
  addBirthdayItem,
  deleteBirthdayItem,
  saveBirthdayData,
  changeDOB,
  changeName,
  changeShoppingDate,
} from '../../store/actions/birthdayAction';
import AsyncStorage from '@react-native-community/async-storage';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Icon = MaterialCommunityIcons;

class Birthday extends Component {
  state = {
    showDatePicker: false,
    itemName: '',
    itemQuantity: '',
    data: [],
    indexOldState: -2,
  };
  componentDidMount() {
    AsyncStorage.getItem('birthdayData')
      .then(data => {
        if (data) {
          this.setState({
            data: JSON.parse(data),
          });
        }
      })
      .catch(error => {
        console.log('ComponentDidMount Birthday error => ', error);
      });
  }
  render() {
    const {showDatePicker, itemName, itemQuantity, data, indexOldState} =
      this.state;
    const {name, itemList, birthdayDate, shoppingDate, edit} = this.props;
    const obj = {birthdayDate, itemList, name, shoppingDate};

    if (data.length && indexOldState === -2) {
      for (let i = 0; i < data.length; i++) {
        if (
          data[i].name === obj.name &&
          data[i].birthdayDate === obj.birthdayDate &&
          data[i].shoppingDate === obj.shoppingDate &&
          JSON.stringify(data[i].itemList) === JSON.stringify(obj.itemList)
        )
          this.setState({indexOldState: i});
      }
    }

    return (
      <SafeAreaView style={[styles.main]}>
        <TextInput
          value={name}
          placeholder="Enter whose birthday it is"
          onChangeText={name => this.props.changeName(name)}
        />
        <View>
          <Text>DOB: </Text>
          <TextInput
            value={birthdayDate}
            placeholder="dd-mm-yyyy"
            onChangeText={birthdayDate => this.props.changeDOB(birthdayDate)}
          />
        </View>

        <Button
          title="Choose a perfect time to go for shopping"
          onPress={() => this.setState({showDatePicker: true})}
        />
        {showDatePicker && (
          <>
            <DatePicker
              androidVariant="nativeAndroid"
              date={shoppingDate}
              onDateChange={shoppingDate =>
                this.props.changeShoppingDate(shoppingDate)
              }
            />
            <Button
              title="Confirm"
              onPress={() => this.setState({showDatePicker: false})}
            />
          </>
        )}

        <Button
          title="Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />

        <View>
          <Text>Make a list of shopping</Text>
          <TextInput
            placeholder="Item name"
            value={itemName}
            onChangeText={itemName => this.setState({itemName})}
          />
          <TextInput
            placeholder="Item quantity"
            value={itemQuantity}
            onChangeText={itemQuantity => this.setState({itemQuantity})}
          />
          <Text>
            {itemName && itemQuantity && (
              <Button
                title="ADD"
                onPress={() =>
                  this.props.addBirthdayItem({itemList, itemName, itemQuantity})
                }
              />
            )}
          </Text>
        </View>
        <View>
          {itemList.map((item, index) => {
            return (
              <View key={index}>
                <Text>
                  {item.itemName}, {item.itemQuantity}
                </Text>
                <Button
                  title="delete"
                  onPress={() =>
                    this.props.deleteBirthdayItem({itemList, index})
                  }
                />
              </View>
            );
          })}
        </View>
        <Button
          title="save"
          onPress={() =>
            this.props.saveBirthdayData({
              index: indexOldState,
              edit: edit,
              oldData: data,
              newData: {
                name: name, // because this is in props
                shoppingDate,
                birthdayDate: birthdayDate, // because this is in props
                itemList,
              },
            }) && this.props.navigation.navigate('Home')
          }
        />
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => ({
  itemList: state.birthdayReducer.itemList,
  name: state.birthdayReducer.name,
  birthdayDate: state.birthdayReducer.birthdayDate,
  shoppingDate: state.birthdayReducer.shoppingDate,
  edit: state.birthdayReducer.edit,
});

export default connect(mapStateToProps, {
  addBirthdayItem,
  deleteBirthdayItem,
  saveBirthdayData,
  changeDOB,
  changeName,
  changeShoppingDate,
})(Birthday);

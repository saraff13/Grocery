import React, {Component} from 'react';
import {SafeAreaView, Text, TextInput, View} from 'react-native';
import {connect} from 'react-redux';
import styles from '../styles/BirthdayStyle';
import Button from '../components/Button';
import DatePicker from 'react-native-date-picker';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Icon = MaterialCommunityIcons;

class Birthday extends Component {
  state = {
    name: '',
    birthdayDate: '',
    shoppingDate: new Date(),
    showDatePicker: false,
    data: [],
    itemName: '',
    itemQuantity: '',
  };
  addItem = () => {
    const {data, itemName, itemQuantity} = this.state;
    data.push({itemName, itemQuantity});
    this.setState({itemName: ''});
    this.setState({itemQuantity: ''});
  };
  render() {
    const {
      name,
      shoppingDate,
      showDatePicker,
      birthdayDate,
      data,
      itemName,
      itemQuantity,
    } = this.state;
    // console.log(this.state);
    return (
      <SafeAreaView style={[styles.main]}>
        <TextInput
          value={name}
          placeholder="Enter whose birthday it is"
          onChangeText={name => this.setState({name})}
        />
        <View>
          <Text>DOB: </Text>
          <TextInput
            value={birthdayDate}
            placeholder="dd-mm-yyyy"
            onChangeText={birthdayDate => this.setState({birthdayDate})}
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
              onDateChange={shoppingDate => this.setState({shoppingDate})}
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
          <Button title="ADD" onPress={() => this.addItem()} />
        </View>
        <View>
          {data.map((item, index) => {
            return (
              <View key={index}>
                <Text>
                  {item.itemName}, {item.itemQuantity}
                </Text>
                <Button
                  title="delete"
                  onPress={() =>
                    this.setState({
                      data: data.slice(0, index).concat(data.slice(index + 1)),
                    })
                  }
                />
              </View>
            );
          })}
        </View>
      </SafeAreaView>
    );
  }
}

export default connect(null)(Birthday);

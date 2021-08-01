import React, {Component} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {connect} from 'react-redux';
import styles from '../../styles/Birthday/ShowBirthdayItemListStyle';
import Button from '../../components/Button';
import {
  setBirthdayData,
  saveBirthdayShopppingDone,
  deleteBirthdayData,
} from '../../store/actions/birthdayAction';
import Header from '../../components/Header';

let obj;

class ShowBirthdayItemList extends Component {
  state = {
    startShopping: false,
  };
  componentDidMount() {
    const {itemList, name, birthdayDate, shoppingDate} = this.props;
    obj = {itemList, name, birthdayDate, shoppingDate};
  }
  endShopping() {
    const {index, data} = this.props.route.params;
    this.props.deleteBirthdayData({data, index});
    this.props.saveBirthdayShopppingDone(obj);
    this.props.route.params.onGoBack();
    this.props.navigation.goBack();
  }
  back() {
    this.props.route.params.onGoBack();
    this.props.navigation.goBack();
  }
  render() {
    const {startShopping} = this.state;
    const {itemList, name, birthdayDate, shoppingDate} = this.props;
    // console.log(this.props.route.params);
    // console.log(itemList);
    return (
      <>
        {startShopping ? (
          <>
            <Header
              title={`Buy & Update`}
              showBackIcon
              navigation={this.props.navigation}
            />
            <SafeAreaView style={[styles.main]}>
              <Text>
                Just simply buy items and check the items which are bought
              </Text>
              {itemList.length ? (
                itemList.map((item, index) => {
                  return (
                    <View key={index}>
                      <Text>
                        {item.itemName}, {item.itemQuantity}
                      </Text>
                      <Button
                        title="bought"
                        onPress={() =>
                          this.props.setBirthdayData({
                            itemList: itemList
                              .slice(0, index)
                              .concat(itemList.slice(index + 1)),
                            name: name,
                            birthdayDate: birthdayDate,
                            shoppingDate: shoppingDate,
                            edit: false,
                          })
                        }
                      />
                    </View>
                  );
                })
              ) : (
                <>
                  <Text>We wish a Healthy Happy Birthday to {name}</Text>
                  <Button
                    title="End shopping"
                    onPress={() => this.endShopping()}
                  />
                </>
              )}
            </SafeAreaView>
          </>
        ) : (
          <>
            <Header
              title="Plan Details"
              showBackIcon
              navigation={this.props.navigation}
            />
            <SafeAreaView style={[styles.main]}>
              <Text>{`${name}'s Birthday is on ${birthdayDate}`}</Text>
              <Text>{`We will notify you to go for shopping on ${shoppingDate}`}</Text>
              <Text>{`Here is the list of items you need to buy`}</Text>
              <Button
                title="Edit"
                onPress={() =>
                  this.props.setBirthdayData({
                    itemList: itemList,
                    name: name,
                    birthdayDate: birthdayDate,
                    shoppingDate: shoppingDate,
                    edit: true,
                  }) &&
                  this.props.navigation.navigate('Birthday', {
                    onGoBack: () => this.back(),
                  })
                }
              />
              <Button
                title="start shopping"
                onPress={() => this.setState({startShopping: true})}
              />
              {itemList &&
                itemList.map((item, index) => {
                  return (
                    <Text key={index}>
                      {item.itemName},{item.itemQuantity}
                    </Text>
                  );
                })}
            </SafeAreaView>
          </>
        )}
      </>
    );
  }
}

const mapStateToProps = state => ({
  itemList: state.birthdayReducer.itemList,
  name: state.birthdayReducer.name,
  birthdayDate: state.birthdayReducer.birthdayDate,
  shoppingDate: state.birthdayReducer.shoppingDate,
});

export default connect(mapStateToProps, {
  setBirthdayData,
  saveBirthdayShopppingDone,
  deleteBirthdayData,
})(ShowBirthdayItemList);

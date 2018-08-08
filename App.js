import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Dimensions } from 'react-native';
import { StackNavigator, TabNavigator, createBottomTabNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';
import FormScreen from './src/bundles/screens/FormScreen';
import ListScreen from './src/bundles/screens/ListScreen';

let screen = Dimensions.get('window'); 

const Tabs = TabNavigator({
  'FormScreen': {
    screen: FormScreen,
    navigationOptions: {
      tabBarLabel: 'Contact Us',
      tabBarIcon: ({ tintColor }) => <Icon name="ios-contact" type="entypo" size={28} color={tintColor} />
    },
  },
  'ListScreen': {
    screen: ListScreen,
    navigationOptions: {
      tabBarLabel: 'Contact List',
      tabBarIcon: ({ tintColor }) => <Icon name="list" type="entypo" size={28} color={tintColor} />
    },
  },
});
const NavigationScreen = createRootNavigator = () => {
  return StackNavigator(
    {

      Tabs: {
        screen: Tabs,
        navigationOptions: {
          gesturesEnabled: false
        }
      }
    },
    {
      headerMode: "none",
      mode: "modal"
    }
  );
};

export default class App extends React.Component {

  render() {
    return (
    <Text>"hey there"</Text>);
  }
}


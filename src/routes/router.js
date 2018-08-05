import React, { Component } from 'react';
import { Dimensions, Platform } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import FormScreen from './src/bundles/components/FormScreen';
import ListScreen from './src/bundles/components/ListScreen';

let screen = Dimensions.get('window');

export const Tabs = TabNavigator({
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


export const createRootNavigator = () => {
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
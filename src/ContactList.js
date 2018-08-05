import React, { Component } from 'react';
import {
    StatusBar,
    StyleSheet,
    FlatList,
    Text, View
} from 'react-native';

import ContactItem from './src/models/ContactItem';
import containers from './src/bundles/styles/containers';
export default class ContactList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contacts: [
                {
                    firstname: "Levi",
                    lastname: "Ackerman",
                    email: "levi@surveycorps.com",
                    title: "Being Attacked",
                    description: "Extra forces, you know the drill!"
                }
            ]
        }
    }}
    _renderItem = ({ item }) => (
        <ContactItem
            firstname={item.id}
            lastname={item.title}
            email={item.author}
            title={item.thumbnail}
            description={item.description}
        />
   } );

    _keyExtractor = (item, email) => item.email;

    render() {
        return (
            <View style={styles.containers.contactContainer}>
                <StatusBar
                    barStyle="light-content"
                />
                <FlatList
                    data={this.state.contacts}
                    keyExtractor={this._keyExtractor}
                    renderItem={this._renderItem}
                />
            </View>
        );
    }



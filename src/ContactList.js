import React, { Component } from 'react';
import {
    StatusBar,
    StyleSheet,
    FlatList,
    Text, View
} from 'react-native';
import axios from 'axios';
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
    }

    _keyExtractor = (item, email) => item.email;

    _renderItem = ({ item }) => (
         // return a component using that data
        <ContactItem
            firstname={item.firstname}
            lastname={item.lastname}
            email={item.email}
            title={item.title}
            description={item.description}
        />
   } );

   //fetching data from the ruby api.
componentDidMount() {
    axios.get('http://localhost:3001/api/v1/ideas.json')
        .then(response => {
            console.log(response)
            this.setState({ ideas: response.data })
        })
        .catch(error => console.log(error))
}
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
}


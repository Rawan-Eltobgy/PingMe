import React, { Component } from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    Text,
    Image,
    View
} from 'react-native';

import { Icon } from 'react-native-elements';
//TODO  edit the style.
export default class ContactItem extends Component {
    render() {
        return (
            <View style={styles.container.rowContainer}>
                <View style={styles.rowText}> 
                    <Text style={styles.title} numberOfLines={2} ellipsizeMode={'tail'}>
                        {this.props.title}
                    </Text>
                    <Text style={styles.title} numberOfLines={2} ellipsizeMode={'tail'}>
                        {this.props.title}
                    </Text>
                    <Text style={styles.title} numberOfLines={2} ellipsizeMode={'tail'}>
                        {this.props.title}
                    </Text>
                    <Text style={styles.description} numberOfLines={4} ellipsizeMode={'tail'}>
                        {this.props.description}
                    </Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    
    title: {
        paddingLeft: 10,
        paddingTop: 5,
        fontSize: 16,
        fontWeight: 'bold',
        color: '#777'
    },
    author: {
        paddingLeft: 10,
        marginTop: 5,
        fontSize: 14,
        color: '#777'
    },
    thumbnail: {
        flex: 1,
        height: undefined,
        width: undefined
    },
    rowText: {
        flex: 4,
        flexDirection: 'column'
    }
});
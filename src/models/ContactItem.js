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
                    <Text style={styles.firstName} numberOfLines={1} ellipsizeMode={'tail'}>
                        {this.props.firstName}
                    </Text>
                    <Text style={styles.lastName} numberOfLines={1} ellipsizeMode={'tail'}>
                        {this.props.lastName}
                    </Text>
                    <Text style={styles.email} numberOfLines={2} ellipsizeMode={'tail'}>
                        {this.props.email}
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


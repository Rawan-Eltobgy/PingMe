import { AppRegistry, View, StyleSheet } from 'react-native';
import React, { Component } from 'react';

import t from 'tcomb-form-native';

//const FormScreen = t.form.Form;
//First Name, Last Name, Email, Subject, Description
const User = t.struct({
    firstname: t.String,
    lastname: t.String, //t.maybe(t.String)
    email: t.String,
    subject: t.String,
    description: t.String

});
const options = {
    fields: {
        firstname: {
            error: 'Enter a name that we can address you by.'
        },
        lastname: {
            error: 'Your last name! Your pride!'
        },
        email: {
            error: 'Enter your email to allow us to get back to you.',
        },
        subject: {
            error: 'Save us some time and enter a title.'
        },
        description: {
            error: 'Say what you want.',
        },
    },
};
export  class FormScreen extends Component {
    render() {
        return (
            <View style={styles.containers.container}>
                <Form 
                ref={refrence => this._form = refrence} // assign a ref
                options={options}
                type={User} /> {}
                <Button
                    title="Contact Us!"
                    onPress={this.handleSubmit}
                />
            </View>
        );
    }
}
//one default

AppRegistry.registerComponent(appName, () => App);

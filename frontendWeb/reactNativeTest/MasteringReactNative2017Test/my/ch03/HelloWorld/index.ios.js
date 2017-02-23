/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

export default class HelloWorld extends Component {
    render() {
        console.log('debug from chrome');
        return (
            <View style={{ backgroundColor: 'blue', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ color: '#fff', fontSize: 22 }}>Hello World</Text>
            </View>
        );
    }
}


AppRegistry.registerComponent('HelloWorld', () => HelloWorld);

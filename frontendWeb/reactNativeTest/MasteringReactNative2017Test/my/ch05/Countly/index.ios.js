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
    View,
    TouchableOpacity
} from 'react-native';
import {increment, decrement, zero} from './src/actions';

export default class Countly extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.appName}>
                    Countly
                </Text>
                <Text style={styles.tally}>
                    Tally: 0
                </Text>
                <TouchableOpacity style={styles.button} onPress={increment}>
                    <Text style={styles.buttonText}>
                        +
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={decrement}>
                    <Text style={styles.buttonText}>
                        -
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={zero}>
                    <Text style={styles.buttonText}>
                        0
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    appName: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    tally: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
        fontSize: 25
    },
    button: {
        backgroundColor: 'blue',
        width: 100,
        marginBottom:20,
        padding: 20
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 20
    }
});

AppRegistry.registerComponent('Countly', () => Countly);

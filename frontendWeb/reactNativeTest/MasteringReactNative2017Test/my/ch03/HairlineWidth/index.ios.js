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
    TouchableHighlight
} from 'react-native';

export default class HairlineWidth extends Component {
    render() {
        console.log(StyleSheet.hairlineWidth);
        return (
            <View style={styles.container}>
                <TouchableHighlight style={[buttonStyles.core,buttonStyles.spacer]}>
                    <Text>Default Normal</Text>
                </TouchableHighlight>
                <TouchableHighlight style={[buttonStyles.core,buttonStyles.hairlineBorder,
                buttonStyles.spacer]}>
                    <Text>Default Hairline</Text>
                </TouchableHighlight>
                <TouchableHighlight style={[buttonStyles.core,buttonStyles.primary,
                buttonStyles.spacer]}>
                    <Text>Primary Normal</Text>
                </TouchableHighlight>
                <TouchableHighlight style={[buttonStyles.core,buttonStyles.primary,
                buttonStyles.hairlineBorder]}>
                    <Text>Primary Hairline</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

const buttonStyles = StyleSheet.create({
    core: {
        borderStyle: 'solid',
        borderColor: '#d5d5d5',
        borderWidth: 1,
        backgroundColor: '#eee',
        borderRadius: 3,
        padding: 5,
        paddingLeft: 5,
        paddingRight: 5,
    },
    primary: {
        backgroundColor: '#60b044',
        borderColor: '#355f27',
    },
    hairlineBorder: {
        borderWidth: StyleSheet.hairlineWidth,
    },
    spacer: {
        marginBottom: 10
    }
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

AppRegistry.registerComponent('HairlineWidth', () => HairlineWidth);

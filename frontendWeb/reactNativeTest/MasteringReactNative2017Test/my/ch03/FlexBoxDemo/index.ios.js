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

const FlexBoxLayout = () => (
    <View style={styles.container}>
        <View style={styles.item}/>
        <View style={styles.item}/>
        <View style={styles.item}/>
    </View>
);

export default class FlexBoxDemo extends Component {
    render() {
        return (
            <FlexBoxLayout/>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'flex-start',
        // justifyContent: 'flex-end',
        // justifyContent: 'center',
        // justifyContent: 'space-between',
        justifyContent: 'space-around',
        alignItems: 'flex-start',
        flexDirection: 'column',
    },
    item:{
        backgroundColor: 'lightgoldenrodyellow',
        borderWidth: 1,
        borderColor: 'goldenrod',
        height: 150,
        width: 150,
    }
});

AppRegistry.registerComponent('FlexBoxDemo', () => FlexBoxDemo);

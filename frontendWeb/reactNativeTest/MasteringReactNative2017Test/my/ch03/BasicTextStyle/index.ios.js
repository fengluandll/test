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


const BasicType = () => (
    <Text style={styles.headline}>
        Welcome to <Text style={styles.bold}>React</Text> Native {'\n'}
        <Text style={styles.subheader}>This is <Text style={styles.bold}>So cool!</Text></Text>
    </Text>
);

export default class BasicTextStyle extends Component {
    render() {
        return (
            <View style={styles.container}>
                <BasicType/>
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
    headline:{
        fontFamily: 'Georgia',
        fontSize: 20
    },
    subheader:{
        color:'blue'
    },
    bold:{
        fontWeight:'bold'
    }
});

AppRegistry.registerComponent('BasicTextStyle', () => BasicTextStyle);

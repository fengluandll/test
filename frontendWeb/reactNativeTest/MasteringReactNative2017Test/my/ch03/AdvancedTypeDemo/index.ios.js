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

const AdvancedType = () => (
    <View>
        <Text style={styles.text}>
            Fun styling <Text sytle={styles.bold}>text</Text> inside of
            <Text style={styles.italic}>React Native</Text>
        </Text>
        <Text style={[styles.text,styles.moreLineHeight,styles.right]}>
            I am right aligned and have more
            <Text style={styles.code}>lineHeight</Text> than text above
        </Text>
        <Text style={[styles.text,styles.center,styles.thin]}>
            I am centered and very thin!
        </Text>
    </View>
);

export default class AdvancedTypeDemo extends Component {
    render() {
        return (
            <View style={styles.container}>
                <AdvancedType/>
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
    text:{
        fontSize: 22,
        marginBottom: 20,
    },
    bold:{
        fontWeight: 'bold'
    },
    thin:{
        fontWeight: '200'
    },
    italic:{
        fontStyle: 'italic'
    },
    moreLineHeight:{
        lineHeight: 40
    },
    right:{
        textAlign: 'right'
    },
    center:{
        textAlign: 'center'
    },
    code:{
        fontFamily: 'Courier'
    }

});

AppRegistry.registerComponent('AdvancedTypeDemo', () => AdvancedTypeDemo);

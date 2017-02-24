/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
//noinspection JSUnresolvedVariable
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableHighlight
} from 'react-native';

export default class demoComponent extends Component {
    render() {
      return <DemoComponent/>
    }
}

const DemoComponent = ()=>(
    <View style={viewStyles}>
      <TouchableHighlight style={[btn,btnPrimary]}>
        <Text>Submit</Text>
      </TouchableHighlight>
    </View>
);

const viewStyles = {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
};

const btn ={
    borderStyle: 'solid',
    borderColor: '#d5d5d5',
    borderWidth: 1,
    backgroundColor: '#eee',
    borderRadius: 3,
    padding: 3,
    paddingLeft: 5,
    PaddingRight: 5
};

const btnPrimary = {
    backgroundColor:'#60b044',
    borderColor:'#5ca941'
}

AppRegistry.registerComponent('demoComponent', () => demoComponent);

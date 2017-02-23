/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class HelloWorld extends Component {
  render() {
    return (
      <View style={{
      backgroundColor: 'blue',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
  }}>
        <Text style={{
    fontSize: 40,
      color:'#fff'
  }}>
          Hello, bear
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
      backgroundColor: 'blue',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
  },
  welcome: {
    fontSize: 40,
      color:'#fff'
  },
});

AppRegistry.registerComponent('HelloWorld', () => HelloWorld);

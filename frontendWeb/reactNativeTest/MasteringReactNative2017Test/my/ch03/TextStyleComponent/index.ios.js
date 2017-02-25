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


const Bold = ({children,style, ...otherProps}) =>
    <Text style={[boldTextStyles.text,style]} {... otherProps}>{children}</Text>;

Bold.propTypes = {
    children: React.PropTypes.node.isRequired
};

const boldTextStyles = StyleSheet.create({
    text:{
        fontWeight: '600'
    }
});

const BoldCopy = ({children})=><Text style={bodyCopyStyles.text}>{children}</Text>;

BoldCopy.propTypes = {
    children: React.PropTypes.node.isRequired
};

const bodyCopyStyles = StyleSheet.create({
    text:{
        fontFamily: 'Helvetica',
        fontSize: 18,
        color: '#333'
    }
});

const Headline = ({children}) =><Bold>
    <Text style={headlineStyles.text}>{children}</Text>
</Bold>;

    Headline.propTypes = {
        children: React.PropTypes.node.isRequired
    };

    const HeadlineStyles = StyleSheet.create({
        text:{
            fontFamily:'Optima',
            fontSize: 30,
            color: '#333'
        }
    });

export default class TextStyleComponent extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Bold onPress={()=>console.log('Pressed')}
                numberOfLines={2} style={styles.green}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                     Donec magna ipsum, lobortis quis rhoncus ac, suscipit sed dolor.
                </Bold>
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
});

AppRegistry.registerComponent('TextStyleComponent', () => TextStyleComponent);

import React,{PropTypes} from 'react';
import {
    StyleSheet,
    Text
} from 'react-native';

import AppText from './AppText';

const SmallText = ({children,style,...resst}) => {
    <AppText style={[styles.small,style]} {...rest}>
        {children}
    </AppText>
};

SmallText.propTypes = {
    chidlren: PropTypes.node,
    style: Text.propTypes.style
};

const styles = StyleSheet.create({
    small: {
        fontSize: 11
    }
});

export default SmallText;
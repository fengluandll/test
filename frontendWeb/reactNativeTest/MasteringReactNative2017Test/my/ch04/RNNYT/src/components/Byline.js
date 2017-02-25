import React, {PropTypes} from 'react';

import {
    StyleSheet,
    View
} from 'react-native';

import SmallText from './SmallText';
import * as globalSytles from '../styles/global';

const Byline = ({date, author, location}) => (
    <View>
        <View style={syles.row}>
            <SmallText>
                {date.toLocaleString()}
            </SmallText>
            <SmallText>{author}</SmallText>
        </View>
        {location ? (
                <View style={styles.row}>
                    <SmallText style={styles.location}>
                        {location}
                    </SmallText>
                </View>
            ) : null}
    </View>

);

Byline.propTypes = {
    date: PropTypes.instanceOf(Date).isRequired,
    author: PropTypes.string.isRequired,
    location: PropTypes.string,
};

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 5,
    },
    location: {
        color: globalSytles.MUTED_COLOR
    }
});

export default Byline;
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    viewStyle: {
        borderWidth: 1,
        borderColor: 'black',
        // default is alignItems: 'stretch'
        // alignItems: 'center',
        // default is flexDirection: 'column'
        // flexDirection: 'row',
        // default is justifyContent: 'flex-start'
        // justifyContent: 'center',
        height: 250
    },
    textOneStyle: {
        borderWidth: 1,
        borderColor: 'red'
    },
    textTwoStyle: {
        // alignSelf: 'center',
        // siblings ignore this element now bc of position: 'absolute'
        // some flexbox properties dont work on it now - eg alignItems: 'stretch' on parent
        position: 'absolute',
        left: -20,
        top: 30,
        flex: 1,
        borderWidth: 1,
        borderColor: 'red'
    },
    textThreeStyle: {
        alignSelf: 'flex-end',
        flex: 1,
        borderWidth: 1,
        borderColor: 'red'
    }
});

const BoxScreen = () => {
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.textOneStyle}>Child #1</Text>
            <Text style={styles.textTwoStyle}>Child #2</Text>
            <Text style={styles.textThreeStyle}>Child #3</Text>
        </View>
    );
};

export default BoxScreen;


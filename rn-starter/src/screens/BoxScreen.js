import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    viewStyle: {
        borderWidth: 1,
        borderColor: 'black'
    },
    textStyle: {
        // marginVertical: 20,
        // marginHorizontal: 15,
        margin: 20,
        borderWidth: 1,
        borderColor: 'red'
    }
});

const BoxScreen = () => {
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.textStyle}>Box Screen</Text>
        </View>
    );
};

export default BoxScreen;


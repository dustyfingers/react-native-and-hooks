import React from 'react';
import { Text, StyleSheet, View } from 'react-native';


const styles = StyleSheet.create({
    headerStyle: {
        fontSize: 45
    },
    subheaderStyle: {
        fontSize: 20
    }
});

const ComponentsScreen = () => {

    const myName = "Louie";

    return (
        <View>
            <Text style={styles.headerStyle}>Getting started with React Native!</Text>
            <Text style={styles.subheaderStyle}>{`My name is ${myName}!`}</Text>
        </View>
    );

};

export default ComponentsScreen;
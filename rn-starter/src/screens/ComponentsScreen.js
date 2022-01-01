import React from 'react';
import { Text, StyleSheet, View } from 'react-native';


const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30
    }
});

const ComponentsScreen = () => {
    
    const greeting = "Bye there!";

    return (
        <View>
            <Text style={styles.textStyle}>This is the components screen!</Text>
            <Text>{greeting}</Text>
        </View>
    );

};

export default ComponentsScreen;
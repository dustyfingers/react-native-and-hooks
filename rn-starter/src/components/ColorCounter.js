import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

// TODO: style this component 

const styles = StyleSheet.create({});

const ColorCounter = ({ color, handleIncrease, handleDecrease }) => {

    return (

        <View>

            <Text>{color}</Text>

            <Button 
                title={`Increase ${color}`} onPress={handleIncrease} />

            <Button 
                title={`Decrease ${color}`} onPress={handleDecrease} />

        </View>

    );

};

export default ColorCounter;